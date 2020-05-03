<template>
    <section class="about-our-team-container">
        <div class="about-our-team d-flex w-100 mb-5">
            <div class="about-our-team-text" data-aos="fade-right"  data-aos-easing="ease-in" data-aos-duration="900" data-aos-once="true">
                <div class="about-our-team-text-heading">
                    <h3>About <span>Me</span></h3>
                    <p>Building Amazing Sites</p>
                </div>
                <p >I have a great Passion about writing codes and designing websites. Design and Programing are the two things i realy love and it's not just a way of earning income for me.
                    I always try to figure out what my customer wants and not neccessairly what they say because sometimes the customer doesn't know how to exactly express their expectations
                    of the site. So after several years of dealing with customer i immediatly figure out their wishes.</p>
            </div>
            <div class="about-our-team-img" data-aos="fade-left"  data-aos-easing="ease-in" data-aos-duration="900" data-aos-once="true">
                <div class="about-our-team-img-holder">
                    <img src="~@/assets/about-our-team.jpg" alt="our-team picture" class="about-imgs  d r">
                    <div class="red-dot-back-top"></div>
                </div>
            </div>
        </div>

        <div class="about-our-team d-flex w-100">
            <div class="about-our-team-img" data-aos="fade-right"  data-aos-easing="ease-in" data-aos-duration="900" data-aos-once="true">
                <div class="about-our-team-img-holder">
                    <img src="~@/assets/our-team-goals.jpg" alt="our-team picture" class="about-imgs  d r">
                    <div class="red-dot-back-bottom"></div>
                </div>
            </div>
            <div class="about-our-team-text" data-aos="fade-left"  data-aos-easing="ease-in" data-aos-duration="900" data-aos-once="true">
                <div class="about-our-team-text-heading">
                    <h3>My <span>Goals</span></h3>
                    <p>Deliver the best service possible</p>
                </div>
               <p>I dont want my customers to regret the money they paid because more than money, i care about my overall rate. Therefor i try to fulfill any request the client has tesing them! The
                   benefit of this is the clients recommendation for me to other employers.
               </p>
                <div class="d-flex w-100 justify-content-center circle-check-container">
                    <div class="d-flex flex-column ">
                        <div v-for="(item, index) in items1" :key="item.text"
                        @mouseover="changeCircle1(index)"
                        @mouseleave="changeCircleBack1(index)"
                        data-aos="fade-left" :data-aos-delay="item.delay" data-aos-once="true" data-aos-duration="600" data-aos-anchor-placement="top-bottom">
                            <font-awesome-icon
                            icon="check-circle"
                            size="2x"
                            :color="item.color"

                            ></font-awesome-icon> <p>{{ item.text }}</p>
                        </div>
                    </div>
                    <div class="d-flex flex-column">
                        <div v-for="(item, index) in items2" :key="item.text"
                        @mouseover="changeCircle2(index)"
                        @mouseleave="changeCircleBack2(index)"
                        data-aos="fade-left" :data-aos-delay="item.delay" data-aos-once="true" data-aos-duration="600" data-aos-anchor-placement="top-bottom">
                            <font-awesome-icon
                            icon="check-circle"
                            size="2x"
                            :color="item.color"

                            ></font-awesome-icon> <p>{{ item.text }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

   </section>

</template>

<script>
export default {
  data () {
    return {
      items1: [
        { text: 'More Speed', color: '#055FDC', delay: 900 },
        { text: 'Better SEO', color: '#055FDC', delay: 1000 },
        { text: 'Highly Secure', color: '#055FDC', delay: 1100 }
      ],
      items2: [
        { text: 'Responsive', color: '#055FDC', delay: 1200 },
        { text: 'Easily Maintainable', color: '#055FDC', delay: 1300 },
        { text: 'Strong Databse', color: '#055FDC', delay: 1400 }
      ],
      circleColor: '#055FDC'
    }
  },
  methods: {
    changeCircle1: function (index) {
      this.items1[index].color = '#E8496D'
    },
    changeCircleBack1: function (index) {
      this.items1[index].color = '#055FDC'
    },
    changeCircle2: function (index) {
      this.items2[index].color = '#E8496D'
    },
    changeCircleBack2: function (index) {
      this.items2[index].color = '#055FDC'
    }
  }
}
</script>

<style lang="scss" >

    .about-our-team-container{
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 150px 49px 20px;
        color: #000000;

        .about-our-team{

            .about-our-team-text{
                width: 50%;
                padding: 30px 0px 130px;

                .about-our-team-text-heading{
                    width: 100%;
                    display: flex;
                    flex-direction: column;
                    justify-content: flex-start;
                    align-items: flex-start;

                    h3{
                        color: #000000 !important;
                        font-size: 2.4rem;
                        font-weight: 700;
                        margin-bottom: 0;
                        cursor: default;

                        span{
                            color: #E8496D;
                        }
                    }

                    p{
                        margin-top: 3px;
                        color: #A9A9A9;
                        font-weight: 100;
                        font-size: 1.5rem;
                        cursor: default;
                    }
                }
                    p{
                        width: 100%;
                        text-align: left !important;
                        direction: ltr !important;
                        cursor: default;
                        display: flex;
                        justify-content: flex-start !important;
                        align-items: center;
                        margin-top: 15px;
                        color: #676767;
                        font-size: 1rem;
                        line-height: 2rem;
                        font-weight: 400!important;
                    }

                .circle-check-container{

                    >div{
                        width: 50%;
                        align-items: flex-start;

                        >div{
                            width: 100%;
                            display: flex;
                            justify-content: flex-start;
                            align-items: center;
                            margin-bottom: 10px;
                            position: relative;

                            p{
                                font-size: 1.1rem;
                                font-weight: 600;
                                margin: 0;
                                padding: 0;
                                margin-left: 42px;
                                cursor: default;
                            }

                            svg{
                                position: absolute;
                                left: 0;
                                top: 0;
                                transition: all 0.2s ease;
                            }

                            &:hover{

                                svg{
                                    font-size: 2.5rem;
                                    left: -5px;
                                    top: -5px;
                                }
                            }

                        }
                    }
                }
            }

            .about-our-team-img{
                width: 50%;
                padding: 20px;
                position: relative;

                .about-our-team-img-holder{
                    position: relative;

                    img{
                        width: 100%;
                        border-radius: 6px;
                    }

                    .red-dot-back-top{
                        position: absolute;
                        bottom: -40px;
                        right: -20px;
                        height: 95%;
                        width: 95%;
                        background-image: url(~@/assets/red-dot.png);
                        background-size: 3%;
                        background-repeat: repeat;
                        z-index: -100000;
                    }

                    .red-dot-back-bottom{
                        position: absolute;
                        bottom: -35px;
                        left: -15px;
                        height: 95%;
                        width: 95%;
                        background-image: url(~@/assets/red-dot.png);
                        background-size: 3%;
                        background-repeat: repeat;
                        z-index: -100000;
                    }

                }

            }
        }
    }

.check-circle svg{
    color: #055FDC !important;
}

@media (max-width: 950px){
    .about-our-team{
        flex-direction: column;

        .about-our-team-text{
            width: 100% !important;
        }

        .about-our-team-img{
            width: 100% !important;

            .red-dot-back-top{
                bottom: -35px !important;
            }
        }
    }
}

@media (max-width:500px ){
    .about-our-team-container{
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 20px 21px 20px !important;
    }
    .about-our-team{
        flex-direction: column;

        .about-our-team-text{
            width: 100% !important;
            padding-left: 0 !important;
            padding-right: 0 !important;
        }

        .about-our-team-img{
            width: 100% !important;

            .red-dot-back-top{
                bottom: -35px !important;
            }
        }

        .circle-check-container{
            margin-top: 40px;
            flex-direction: column !important;

            >div{
                width: 100% !important;

                >div{
                    margin-bottom: 15px !important;
                }
            }

        }
    }
}
</style>
