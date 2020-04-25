<template>
    <div class="our-work-container w-100">
        <div class="our-work-header d-flex flex-column"
        id="our-works"
        data-aos="fade-up" data-aos-easing="ease" data-aos-delay="100" data-aos-once="true" data-aos-duration="400">
            <h3 class="our-work-heading">Let's <span>Take a look </span>at Our Works</h3>
            <span class="our-work-heading-sub">Web sites we Developed</span>
        </div>

        <Flickity ref="flickity" :options="flickityOptions" class="flickity"
        data-aos="fade-left" data-aos-easing="ease" data-aos-delay="100" data-aos-once="true" data-aos-duration="400">
            <div class="d-flex justify-content-center align-items-center our-work-card"
            v-for="work in ourWorks" :key="work.img">
                <div class="video-holder">
                    <video  :src="work.img" autoplay loop class="our-work-img" type="video/mp4"></video>
                    <div class="description">
                        <h6>Made with:</h6>
                        <div class="made-with">
                            <p v-for="des in work.des" :key="des" v-text="des"></p>
                        </div>
                    </div>
                </div>
                <br>
                <!-- <img :src="work.img" alt="" class="our-work-img"> -->
            </div>
        </Flickity>
    </div>
</template>

<script>
import Flickity from 'vue-flickity'
export default {
  components: {
    Flickity
  },
  data () {
    return {
      flickityOptions: {
        initialIndex: 4,
        prevNextButtons: true,
        pageDots: false,
        wrapAround: true

      // any options from Flickity can be used
      },
      ourWorks: [
        { img: '/images/site-1.mp4',
          des:[
              'PHP',
              'Vue-js',
              'Java Script',
              'Laravel'
          ]
        },
        { img: '/images/site-2.mp4',
          des:[
              'PHP',
              'Vue-js',
              'Java Script',
              'Laravel'
          ]
        },
        { img: '/images/site-3.mp4',
          des:[
              'PHP',
              'Vue-js',
              'Java Script',
              'Laravel'
          ]
        },
        { img: '/images/site-4.mp4',
          des:[
              'PHP',
              'Vue-js',
              'Java Script',
              'Laravel'
          ]
        },
        { img: '/images/site-5.mp4',
          des:[
              'PHP',
              'Vue-js',
              'Java Script',
              'Laravel'
          ]
        },
        { img: '/images/site-6.mp4',
          des:[
              'PHP',
              'Vue-js',
              'Java Script',
              'Laravel'
          ]
        },
        { img: '/images/site-7.mp4',
          des:[
              'PHP',
              'Vue-js',
              'Java Script',
              'Laravel'
          ]
        },
        { img: '/images/site-8.mp4',
          des:[
              'PHP',
              'Vue-js',
              'Java Script',
              'Laravel'
          ]
        },
        { img: '/images/site-9.mp4',
          des:[
              'PHP',
              'Vue-js',
              'Java Script',
              'Laravel'
          ]
        },
        { img: '/images/site-10.mp4',
          des:[
              'PHP',
              'Vue-js',
              'Java Script',
              'Laravel'
          ]
        },
        { img: '/images/site-11.mp4',
          des:[
              'PHP',
              'Vue-js',
              'Java Script',
              'Laravel'
          ]
        },
        { img: '/images/site-12.mp4',
          des:[
              'PHP',
              'Vue-js',
              'Java Script',
              'Laravel'
          ]
        },

      ]
    }
  }
}
</script>

<style lang="scss">

    .our-work-container{

        height: auto;
        margin-bottom: 100px;
        padding-top: 80px;
        padding-bottom: 80px;
    }

    .our-work-header{
        padding-top: 40px;
        margin-bottom: 40px;
        .our-work-heading{
            font-size: 2.5rem;
            font-weight: 600;
            color: #000000;
            cursor: default;
            margin-bottom: 0;

            span{
                color: #FF5D73;
            }
        }

        .our-work-heading-sub{
            font-size: 1.3rem;
            font-weight: 300;
            color: #808080;
            cursor: default;
        }
    }

    .flickity-button {
        display: none;
    }

    .flickity{
        height: 450px !important;
        overflow: visible !important;
    }

    @keyframes ourwork{
        0%{
            opacity: 0;
            margin-top: -50px;

        }

        100%{
            opacity: 1;
            margin-top: 10px;
        }
    }

    @keyframes ourwork2{
        0%{
            opacity: 1;
            margin-top: 10px;

        }

        100%{
            opacity: 0;
            margin-top: -50px;
        }
    }
    .our-work-card.is-selected{
        transform: translateY(-70px);
        height: 390px !important;
        z-index: 1000000;

        .our-work-img{
            position: relative;
            left: -30px;
            top: -17px;
            width: 500px;
            height: 350px;
            z-index: 10000;

        }

        .description{
            display: flex !important;
            align-items: center !important;
            animation: 0.5s fadeInDown both;
            margin-top: -27px;

        }

    }
    .our-work-card{
        width: 30%;
        border-radius: 8px;
        height: 390px;
        margin: 120px 80px 30px;
        transition: transform 1s ease;
        display: flex;
        flex-direction: column;

        .video-holder{
            border-radius: 15px;
            // background: #000000;
            -webkit-box-shadow: 0px 36px 47px -46px rgba(0,0,0,0.75);
            -moz-box-shadow: 0px 36px 47px -46px rgba(0,0,0,0.75);
            box-shadow: 0px 36px 47px -46px rgba(0,0,0,0.75);
            width: 440px;
            z-index: 10;
            overflow: hidden;
            height:100%;

        }
        .our-work-img{
            position: relative;
            left: -30px;
            top: -17px;
            width: 500px;
            height: 350px;

        }

        .description{
            display: flex;
            z-index: -1000;
            width: 440px;
            height: 38px;
            background-color: rgba($color: #000000, $alpha: 0.6);
            justify-content: space-between;
            align-items: center;
            color: #ffffff;
            // margin-top: -80px;
            animation: 0.5s fadeOut forwards ;

            h6{
                font-size: 1rem;
                width: 25%;
                text-align: left;
                padding: 0 0 0 20px;
                margin: 0;
                letter-spacing: 0px;
                font-weight: 500;
                font-style: normal;
                color: #ffffff;
                // margin-top: 20px;
            }

            .made-with{
                width: 75%;
                display: flex;
                justify-content: space-evenly;
                align-items: center;

                p{
                    font-weight: 500;
                    display: inline-block;
                    font-size: 0.8rem;
                    border-radius: 10px;
                    color: #ffffff;
                    margin: 0;
                    padding: 0;
                    padding: 2px 8px;
                    background-color: rgba($color: #000000, $alpha: 0.7);

            }
            }
        }
    }

    @media (max-width: '980px') {
        .our-work-card{
            width: 50% !important;
        }
    }

    @media (max-width: '850px') {
        .our-work-card{
            width: 65% !important;
        }
    }

    @media (max-width: '750px') {
        .our-work-card{
            width: 75% !important;
        }
    }

    @media (max-width: '650px') {
        .our-work-card{
            width: 85% !important;
        }
    }

    @media (max-width: '550px') {
        .our-work-card{
            width: 95% !important;
        }
    }

</style>
