<template>
    <div class="w-100 d-flex skill-container">

        <div class="d-flex flex-column skill-left-section"
        data-aos="fade-right" data-aos-delay="300" data-aos-once="true" data-aos-duration="600" >

            <h3>My Top <span>Skills</span></h3>
            <span>I use all the skills I know for your site</span>
            <p>I've learned many skills over years of practice and I continue my study because in this particular profession, it's never enough! Each day theres a new technology out there and customers always want the top technologies of the time being.</p>

        </div>

        <div class="d-flex flex-column skill-right-section">

            <div class="flex w-100 flex-column skill-holder" v-for="skill in skills" :key="skill.skill">
                <h4 class="skill-title"
                data-aos="fade-left" :data-aos-delay="skill.delay" data-aos-once="true" data-aos-duration="1200" data-aos-anchor-placement="top-bottom">{{ skill.skill }}</h4>
                <div class="skill-bar"
                data-aos="fade-right" :data-aos-delay="skill.delay" data-aos-once="true" data-aos-duration="1200" data-aos-anchor-placement="top-bottom">
                        <div :class="'skill-progress infinite animated pulse del-' + skill.delay"
                        :style="{ width: skill.width + '%' }"
                        ></div>
                </div>
            </div>

        </div>

    </div>
</template>

<script>
export default {
  data () {
    return {
      skills: [
        { skill: 'Vue Js', width: 90, delay: '300' },
        { skill: 'SASS / CSS', width: 85, delay: '400' },
        { skill: 'Fire Base', width: 70, delay: '500' },
        { skill: 'Laravel / PHP', width: 95, delay: '600' },
        { skill: 'Design', width: 78, delay: '700' }
      ]
    }
  },
  beforeCreate(){
      AOS.init({
      disable: 'phone'
      });
  },
}
</script>

<style lang="scss">

    .skill-container{

        padding: 50px 0 ;

        .skill-left-section{
            width: 55%;
            padding: 20px 10px 20px 49px;
            justify-content: center;
            align-items: flex-start;

            h3{
                color: #010101;
                font-size: 2.5rem;
                font-weight: 700;
                margin-bottom: 10px;

                span{
                    color: #F07A6A;
                    margin-left: 5px;
                    font-size: 2.5rem;
                    font-weight: 700;

                }
            }

            span{
                color: #9B9B9B;
                font-size: 1.3rem;
                font-weight: 400;
                text-align: left ;
                margin-bottom: 40px;

            }

            p{
                text-align: left;
                color: #6A6A6A;
                font-size: 1rem;
                font-weight: 500;
                line-height: 2rem;
            }
        }

        .skill-right-section{
            width: 45%;
            padding: 40px 30px 40px 10px;

            .skill-holder{
                padding: 10px 0;
                width: 100%;
                justify-content: center;
                align-items: flex-start;
                overflow-x: hidden;
                .skill-title{
                    width: 100%;
                    justify-content: flex-start;
                    color: #010101;
                    text-align: left !important;
                    font-size: 1rem;
                    font-weight: 500;
                }

                .skill-bar{
                    // margin-left: 170px;
                    height: 2px;
                    width: 100%;
                    background-color: #E8E8E8;
                    display: flex;

                    .skill-progress{
                        margin-left: -10px;
                        animation-duration: 4s;
                        height: 2px;
                        display: flex;
                        background-color: #F07A6A;
                        background-image: -webkit-gradient(linear, left top, left bottom, from(#f674a4), to(#e06995));
                        background-image: -webkit-linear-gradient(90deg, rgba(255,0,0,1) 0%, rgba(121,9,109,1) 65%, rgba(0,111,138,1) 100%);
                        background-image: -moz-linear-gradient(90deg, rgba(255,0,0,1) 0%, rgba(121,9,109,1) 65%, rgba(0,111,138,1) 100%);
                        background-image: -ms-linear-gradient(90deg, rgba(255,0,0,1) 0%, rgba(121,9,109,1) 65%, rgba(0,111,138,1) 100%);
                        background-image: -o-linear-gradient(90deg, rgba(255,0,0,1) 0%, rgba(121,9,109,1) 65%, rgba(0,111,138,1) 100%);
                        background-image: linear-gradient(90deg, rgba(255,0,0,1) 0%, rgba(121,9,109,1) 65%, rgba(0,111,138,1) 100%);

                    }
                }
            }
        }
    }

    @media (max-width: 768px){
        .skill-container{
            flex-direction: column;

            .skill-left-section{
                width: 100%;
            }

            .skill-right-section{
                width: 100%;
                padding-left: 50px;
            }
        }
    }

    @media (max-width: 568px){
        .skill-container{
            flex-direction: column;

            .skill-left-section{
                width: 100%;
                padding-left: 21px !important;
            }

            .skill-right-section{
                width: 100%;
                padding-left: 21px;
            }
        }
    }
</style>
