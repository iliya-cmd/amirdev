<template>
    <div class="flickity-container">

        <div class="d-flex flex-column w-100 justify-content-center align-items-center testimonial-head"
        data-aos="fade-down" data-aos-easing="ease" data-aos-delay="100" data-aos-once="true" data-aos-duration="400">
          <h3 class="testimonial-head-title">Our Customers <em class="love-us">Love Us</em> , Find Out Why</h3>
          <span class="testimonial-head-sub">Over 100 happy customers over past two years</span>
        </div>

        <Flickity ref="flickity" :options="flickityOptions" class="flickity"
        data-aos="fade-left" data-aos-easing="ease" data-aos-delay="100" data-aos-once="true" data-aos-duration="400">
            <div class="d-flex flex-column justify-content-center align-items-center testimonial-container"
            v-for="testimonial in testimonials"
            :key="testimonial.name">

                  <p class="testimonial-text">{{ testimonial.text }}</p>

                  <img :src="testimonial.img" alt="testimonial" class="testimonial-img" width="90px" height="90px">
                  <span class="testimonial-name" > {{ testimonial.name }}</span>

                  <StarRating
                  :read-only="true"
                  :increment="0.5"
                  :star-size="24"
                  :rounded-corners="true"
                  v-model="testimonial.rate"
                  active-color="#EFE121"
                  :show-rating="false"
                  :glow="3"
                  class="rate"/>

            </div>
        </Flickity>
    </div>
</template>

<script>
import Flickity from 'vue-flickity'
import StarRating from 'vue-star-rating'
export default {
  components: {
    Flickity,
    StarRating
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
      testimonials: [
        {
          name: 'Angela Paul',
          text: 'Perfect feed back. Every day I got reports of the progress. Loved the support.',
          rate: 5,
          img: '/images/testi-2.jpg'
        },

        {
          name: 'Clifford Baily',
          text: 'Started with a very specific plan and finished extactly at the time we agreed from the begining.',
          rate: 4,
          img: '/images/testi-4.jpg'
        },


        {
          name: 'Debora kay',
          text: 'Experienced the best service ever with a very reasenible price. ',
          rate: 5,
          img: '/images/testi-3.jpg'
        },
        {
          name: 'Robert Lee',
          text: 'handled all the work for me and he provided all the features I desired with no bug at all.',
          rate: 4,
          img: '/images/testi-1.jpg'
        },
        {
          name: 'Matt Wilson',
          text: 'A professional developer. I now have a super fast site which is still perfect even after 2 years.',
          rate: 4.5,
          img: '/images/testi-5.jpg'
        },
      ]
    }
  },
  methods: {
    next () {
      this.$refs.flickity.next()
    },

    previous () {
      this.$refs.flickity.previous()
    }
  }
}
</script>

<style lang="scss">
    .flickity-container{
        height: 110vh !important;
        margin-top: 60px;
        padding-top: 80px;
        padding-bottom: 100px;
        display: flex;
        flex-direction: column;
        width: 100%;
        background-image: url(~@/assets/back-test.svg);
        background-size: cover;

        .testimonial-head{
          width: 100%;
          padding: 0 50px;
          margin-bottom: 50px;

          .testimonial-head-title{
            font-size: 2.5rem;
            font-weight: bold;
            color: #ffffff;
            cursor: default;

            .love-us{
              border-bottom: 3px solid #F07A6A;
              font-style: normal;
            }
          }

          .testimonial-head-sub{
            font-size: 1.3rem;
            font-weight: normal;
            color: #ffffff !important;
            cursor: default;

          }
        }

        .flickity{
          // padding: 0 30px;
          // padding-bottom: 120px !important;

            /* no circle */
          .flickity-button {

            background: transparent;
            display: block !important;


          }

          /* big previous & next buttons */
          .flickity-prev-next-button {
            display: block !important;
            width: 40px;
            height: 40px;
          }

          /* icon color */
          .flickity-button-icon {

            fill: rgba($color: #ffffff, $alpha: 0.5);
          }

          .flickity-button-icon:hover {

            fill: #ffffff;
          }

          .testimonial-container.is-selected{
            opacity: 1;
          }

          .testimonial-container{

            width:20%;
            align-content: center;
            height: 340px;
            margin-right: 150px ;
            margin-top: 30px;
            opacity: 0.6;
            transition: opacity 0.4s;
            transition: transform 0.4s;
            background-image: url(~@/assets/comma.png);
            background-repeat: no-repeat;
            background-position: bottom right;
            background-size: 15%;
            z-index: -10;
            overflow: visible !important;

            .flickity-viewport{
              height: 300px !important;
              overflow: visible !important;
              z-index: 10;

            }

            .flickity-slider{
              height: 300px !important;
              z-index: 10;

            }

            .testimonial-name{
              font-size: 1.4rem;
              color: #ffffff;
              font-weight: 500;
              margin-bottom: 15px;
            }

            .testimonial-text{
              width: 110%;
              font-size: 1.1rem;
              line-height: 2.3rem;
              font-weight: 400;
              word-wrap: normal !important;
            }

            .testimonial-img{

                border-radius: 100px;
                margin-bottom: 10px;
            }

          }
        }
    }

    @media (max-width: 1100px){
      .flickity-container{
        margin-top: 0px;
      }
    }

    @media (max-width: 940px){
      .flickity-container{
        margin-top: 0px;
      }

      .testimonial-container{
        width: 35% !important;
      }
    }

    @media (max-width: 760px){
      .flickity-container{
        margin-top: 0px;


        .testimonial-container{
          width: 45% !important;
        }

        .testimonial-head{

            .testimonial-head-title{
              font-size: 2.1rem;
            }
        }
      }
    }

    @media (max-width: 665px){
      .flickity-container{
        margin-top: 0px;
      }

      .testimonial-container{
        width: 55% !important;
      }
    }

    @media (max-width: 545px){
      .flickity-container{
        margin-top: 0px;

        .testimonial-head{
          margin-bottom: 10px !important;

            .testimonial-head-title{
              font-size: 1.9rem;
            }
        }
      }

      .testimonial-container{
        width: 75% !important;
      }

      .testimonial-head{
        padding: 0 10px;
      }
    }


    @media (max-width: 516px){

      .flickity-container{
        height: 120vh !important;

        .testimonial-text{
          font-size: 1.1rem !important;
          line-height: 1.7rem !important;
        }
      }

    }

    @media (max-width: 411px){

      .flickity-container{
        height: 115vh !important;

        .testimonial-head{

            .testimonial-head-title{
              font-size: 1.7rem;
            }

            .testimonial-head-sub{
              font-size: 1.1rem;

            }
        }
      }

    }

    @media (max-width: 372px){

      .flickity-container{
        height: 145vh !important;
      }

    }

    @media (max-width: 500px){
      .flickity-container{
        margin-top: 0px;
        // padding-bottom: 100px !important;
      }

      .testimonial-container{
        width: 80% !important;
        height: 350px !important;
        opacity: 1 !important;

      }
    }
    @media (max-width: 380px){
      .flickity-container{
        padding-bottom: 250px !important;
      }

      .flickity-container .flickity .flickity-prev-next-button .previous{
          top: 70% !important;
      }
      .flickity-prev-next-button .next{
          top: 70% !important;

      }

      .testimonial-container{
        margin-top: 0 !important;
      }
    }
    @media (max-width: 360px){
      .flickity-container{
        padding-bottom: 230px !important;
      }
    }
</style>
