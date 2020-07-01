<template>
    <div class="our-work-container w-100"
        id="works"
    >
        <div class="our-work-header d-flex flex-column"
        data-aos="fade-up" data-aos-easing="ease" data-aos-delay="100" data-aos-once="true" data-aos-duration="400">
            <h3 class="our-work-heading">Let's <span>Take a look </span>at My Works</h3>
            <span class="our-work-heading-sub">Web sites I Developed</span>
        </div>

        <Flickity ref="flickity"
        :options="flickityOptions"
        class="flickity"
        data-aos="fade-left" data-aos-easing="ease" data-aos-delay="100"
        data-aos-once="true" data-aos-duration="400"
        >

            <div
            class="d-flex justify-content-center align-items-center our-work-card"
            v-for="work in ourWorks" :key="work.img"
            :style="{ backgroundImage: 'url(' + work.img + ')', backgroundPositionY: work.y + 'px' }"
            @mouseenter="playWork($event,work)"
            @mouseleave="stopWork(work)">

                <div class="bottom-card-section">
                    <p class="work-des"> {{ work.des }} </p>
                    <a :href="work.link" target="_blank"><button class="preview"  >View</button></a>
                </div>
            </div>
        </Flickity>
    </div>
</template>

<script>
var interval;
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
        { img: '/images/Medical-center.jpg',
          des: 'Online Medical Center',
          y: 0,
          h: 1480,
          h2: 1300,
          h3: 1150,
          h4: 1030,
          h5: 750,
          h6: 630,
          link: 'http://am.amirmohseni.dev/home-modern-clinic'

        },
        { img: '/images/American-diner.jpg',
          des: 'American Diner Restaurant',
          y: 0,
          h: 1450,
          h2: 1277,
          h3: 1140,
          h4: 1010,
          h5: 720,
          h6: 630,
          link: 'http://am.amirmohseni.dev/home-american-diner-restaurant'

        },
        { img: '/images/Digital-product.jpg',
          des: 'Digital Product Presentation',
          y: 0,
          h: 2820,
          h2: 2414,
          h3: 2160,
          h4: 1920,
          h5: 1440,
          h6: 1210,
          link: 'http://am.amirmohseni.dev/home-digital-product'

        },
        { img: '/images/Online-tutorial.jpg',
          des: 'Online Tutorial',
          y: 0,
          h: 1470,
          h2: 1280,
          h3: 1140,
          h4: 1010,
          h5: 720,
          h6: 630,
          link: 'http://am.amirmohseni.dev/home-online-tutorials'

        },
        { img: '/images/Accelerator.jpg',
          des: 'Accelerator Program',
          y: 0,
          h: 1200,
          h2: 1080,
          h3: 940,
          h4: 840,
          h5: 600,
          h6: 510,
          link: 'http://am.amirmohseni.dev/home-accelerator'

        },
        { img: '/images/Sass.jpg',
          des: 'Application Presentation',
          y: 0,
          h: 2820,
          h2: 2400,
          h3: 2160,
          h4: 1920,
          h5: 1440,
          h6: 1230,
          link: 'http://am.amirmohseni.dev/home-sass-app'

        },
        { img: '/images/Creative-agency.jpg',
          des: 'Creative Agency',
          y: 0,
          h: 1670,
          h2: 1440,
          h3: 1280,
          h4: 1140,
          h5: 830,
          h6: 720,
          link: 'http://am.amirmohseni.dev/home-creative-agency'

        },
        { img: '/images/Startup.jpg',
          des: 'Startup Buisness',
          y: 0,
          h: 1600,
          h2: 1370,
          h3: 1230,
          h4: 1090,
          h5: 800,
          h6: 700,
          link: 'http://am.amirmohseni.dev/'

        },
        { img: '/images/Tech.jpg',
          des: 'Tech Company',
          y: 0,
          h: 1370,
          h2: 1227,
          h3: 1100,
          h4: 970,
          h5: 710,
          h6: 605,
          link: 'http://am.amirmohseni.dev/home-tech'

        }
      ]
    }
  },
  methods:{
      playWork: (e,work) => {
          clearInterval(interval);

          if(e.target.classList.contains('is-selected')){

            if(  window.screen.availWidth >= 768){

                interval = setInterval( () => {

                    if( work.y <= -(work.h) || !e.target.classList.contains('is-selected') ){
                        clearInterval(interval);
                    }

                    work.y -= 1;

                    }
                    ,5 );

            }
            else if( window.screen.availWidth < 768 && window.screen.availWidth > 550 ){
                interval = setInterval( () => {

                    if( work.y <= -(work.h2) || !e.target.classList.contains('is-selected') ){
                        clearInterval(interval);
                    }

                    work.y -= 1;

                    }
                    ,5 );
            }
            else if( window.screen.availWidth <= 550 && window.screen.availWidth > 480 ){
                    interval = setInterval( () => {

                        if( work.y <= -(work.h3) || !e.target.classList.contains('is-selected') ){
                            clearInterval(interval);
                        }

                        work.y -= 1;

                        }
                        ,5 );
            }
            else if( window.screen.availWidth <= 480 && window.screen.availWidth > 430 ){
                    interval = setInterval( () => {

                        if( work.y <= -(work.h4) || !e.target.classList.contains('is-selected') ){
                            clearInterval(interval);
                        }

                        work.y -= 1;

                        }
                        ,5 );
            }
            else if( window.screen.availWidth <= 430 && window.screen.availWidth > 380 ){
                    interval = setInterval( () => {

                        if( work.y <= -(work.h5) || !e.target.classList.contains('is-selected') ){
                            clearInterval(interval);
                        }

                        work.y -= 1;

                        }
                        ,5 );
            }
            else if( window.screen.availWidth <= 380 ){
                    interval = setInterval( () => {

                        if( work.y <= -(work.h6) || !e.target.classList.contains('is-selected') ){
                            clearInterval(interval);
                        }

                        work.y -= 1;

                        }
                        ,5 );
            }
        }

      },
      stopWork: (work) => {
          clearInterval(interval);
          interval = setInterval( () => {

              if( work.y >= -16 ){
                clearInterval(interval);
              }

              work.y += 10;

            }
            ,2)

      }
  }
}
</script>

<style lang="scss">

    .our-work-container{

        min-height: 102vh;
        margin-bottom: 100px;
        padding-top: 40px;
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
                color: #F07A6A;
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
        height: 300px !important;
        overflow: visible !important;
        border-radius: 10px;
        margin-bottom: 150px;

    }

    .our-work-card.is-selected{
        transform: translateY(-20px);
        // height: 390px !important;
        z-index: 1000000;
        border-radius: 10px !important;
        overflow: hidden !important;


    }

    .our-work-card{

        width: 600px;
        height: 360px;
        box-shadow:
            0 2.8px 2.2px rgba(0, 0, 0, 0.034),
            0 6.7px 5.3px rgba(0, 0, 0, 0.048),
            0 12.5px 10px rgba(0, 0, 0, 0.06),
            0 22.3px 17.9px rgba(0, 0, 0, 0.04),
            0 41.8px 33.4px rgba(0, 0, 0, 0.01);

        cursor: pointer !important;
        background-size: 100%;
        background-repeat: no-repeat;
        border-radius: 10px !important;
        overflow: hidden !important;
        height: 390px;
        margin: 120px 30px 30px;
        transition: transform 1s ease;
        display: flex;
        justify-content: center;
        align-items: flex-end !important;
    }

    .bottom-card-section{
        border-bottom-left-radius: 10px;
        border-bottom-right-radius: 10px;
        display: flex;
        height: 80px;
        padding: 0 25px 20px;
        overflow: hidden !important;
        width: 100%;
        justify-content: space-between;
        align-items: flex-end;
        background: linear-gradient(to bottom, transparent 0%, transparent 8.1%,
        rgba(0,0,0,0.0005) 15.5%,
        rgba(0,0,0,0.0001) 22.5%,
        rgba(0,0,0,0.001) 29%,
        rgba(0,0,0,0.008) 35.3%,
        rgba(0,0,0,0.011) 41.2%,
        rgba(0,0,0,0.014) 47.1%,
        rgba(0,0,0,0.016) 52.9%,
        rgba(0,0,0,0.019) 58.8%,
        rgba(0,0,0,0.022) 64.7%,
        rgba(0,0,0,0.025) 71%,
        rgba(0,0,0,0.027) 77.5%,
        rgba(0,0,0,0.029) 84.5%,
        rgba(0,0,0,0.03) 91.9%,
        rgba(0,0,0,0.01) 100%);
        background-image: url( ~@/assets/shadow.svg ) , url( ~@/assets/shadow.svg );
        background-blend-mode: multiply;
        background-size: cover;

        .work-des{
            font-size: 1.1rem;
            color: rgba($color: #ffffff, $alpha: .85);
            font-weight: 400;
            padding: 0 0 5px;
            margin: 0;
        }

        a{
            color: #ffffff;
            text-decoration: none;

            &:hover{
                text-decoration: none;
                color: #ffffff;
            }
        }
        .preview{
            font-size: 1rem;
            font-weight: 400;
            padding: 6px 12px;
            border: 1px solid #ffffff;
            letter-spacing: 0.08rem;
            border-radius: 12px;
            background: transparent;
            outline: none;
            color: #ffffff;
            margin-bottom: 0px;
            transition: 0.4s;

            &:hover{
                background-color: #ffffff;
                color: #000000;
            }
        }
    }

    @media (max-width: '768px') {

        .our-work-heading{
            font-size: 30px !important;
            padding: 0 21px !important;
        }

        .flickity-button {
            display: none !important;
        }

        .our-work-card{
            width: 500px !important;
            height: 300px !important;
            margin: 100px 10px 0px;

        }

        .our-work-container{
            margin-bottom: 0 !important;
            padding-bottom: 0 !important;
        }
        .flickity{
            margin-bottom: 0 !important;
            height: 420px !important;
        }
    }

    @media (max-width: '550px') {
        .our-work-card{
            width: 450px !important;
            height: 270px !important;
            margin: 50px 10px 30px;
        }

        .flickity-button {
            display: none !important;
        }

        .flickity{
            margin-bottom: 0 !important;
            height: 420px !important;
        }

        .bottom-card-section{
            height: 50px;
        }

        .work-des{
            font-size: 1rem !important;
        }

        .preview{
            font-size: 0.95rem !important;
            padding: 5px 10px !important;
        }

    }

    @media (max-width: '480px') {
        .our-work-card{
            width: 400px !important;
            height: 240px !important;
        }

        .bottom-card-section{
            height: 45px;
        }

        .work-des{
            font-size: 1rem !important;
        }

        .preview{
            font-size: 0.9rem !important;
            padding: 4px 8px !important;
        }

    }

    @media (max-width: '430px') {
        .our-work-container{
            min-height: 95vh;
        }
        .our-work-card{
            width: 310.5px !important;
            height: 216px !important;
            margin: 60px 14px 30px;

        }

        .our-work-header{
            padding-top: 0 !important;
        }

        .flickity{
            margin-bottom: 0 !important;
            height: 400px !important;
        }

        .flickity-button {
            width: 30px !important;
            height: 30px !important;
            top: 40% !important;
        }

        .bottom-card-section{
            height: 50px !important;
            padding-bottom: 10px !important;
        }

        .work-des{
            font-size: 0.9rem !important;
            padding-bottom: 3px !important;
        }

        .preview{
            font-size: 0.7rem !important;
            padding: 5px 9px !important;
            border-radius: 8px !important;
        }

    }

    @media (max-width: '380px') {
        .our-work-container{
            min-height: 95vh;
            // padding-top: 200px !important;
        }
        .our-work-card{
            width: 262.5px !important;
            height: 166px !important;
            margin-bottom: 30px !important;
        }

        .flickity-prev-next-button.next {
            right: 5px;
        }

        .flickity-prev-next-button.previous {
            left: 5px;
        }

        .flickity{
            margin-bottom: 0 !important;
            height: 340px !important;
        }

        .flickity-button {
            width: 30px !important;
            height: 30px !important;
            top: 45% !important;
        }

        .bottom-card-section{
            height: 45px !important;
            padding-bottom: 10px !important;
        }

        .work-des{
            font-size: 0.7rem !important;
        }

        .preview{
            font-size: 0.6rem !important;
            padding: 3px 7px !important;
        }

    }

    @media (max-width: '380px') {
        .our-work-card{
            margin: 70px 7px 30px;
        }

        .flickity{
            margin-top: 0 !important;
            height: 200px !important;
        }
    }

</style>
