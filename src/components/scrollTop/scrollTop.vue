<template>
    <div class="scrolltop-icon-container"
    data-aos="fade-left" data-aos-easing="ease" data-aos-delay="100" data-aos-once="true" data-aos-duration="400" data-aos-anchor-placement="bottom-center">
        <a href="#top" v-smooth-scroll="{ duration: 1000}" >
            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="angle-up" class="svg-inline--fa fa-angle-up fa-w-10 icon" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill="currentColor" d="M177 159.7l136 136c9.4 9.4 9.4 24.6 0 33.9l-22.6 22.6c-9.4 9.4-24.6 9.4-33.9 0L160 255.9l-96.4 96.4c-9.4 9.4-24.6 9.4-33.9 0L7 329.7c-9.4-9.4-9.4-24.6 0-33.9l136-136c9.4-9.5 24.6-9.5 34-.1z"></path></svg>
        </a>
    </div>
</template>

<script>
export default {
  methods: {
    // scrollTop: function () {
    //   Event.$emit('scrollTop')
    // }
  }
}
</script>

<style lang="scss">
@keyframes upToDown {
    0%{
        transform: translateY(0px);
        color: #000000;
    }

    40%{
        transform: translateY(-40px);
    }

    41%{
        transform: translateX(440px);
        transform: translateY(80px);
        transform: translateX(-440px);
    }
    80%{
        transform: translateY(40px);
    }
    100%{
        transform: translateY(0px);
        color: #ffffff !important;

    }

}
    .scrolltop-icon-container{
        background: #ffffff;
        cursor: pointer;
        width: 46px;
        height: 46px;
        position: fixed;
        border-radius: 4px;
        display: flex;
        justify-content: center;
        align-items: center;
        top: 90%;
        left: 94%;
        z-index: 10;
        transition: all .1s ease;
        border: rgba($color: #000000, $alpha: 0.2) 1px solid;
        opacity: 0.5 ;
        overflow: hidden;

        a{
            display: flex;
            align-items: center;
            justify-content: center;
            width: 100%;
            height:100%
        }

        .icon{
          color: #000000;
          width: 22px;
          height: 22px;
          font-weight: lighter !important;
          font-size: 22px;
          line-height: 2em;

        }

        &:hover{
            // transition: width 1s;
            background-color: #E8496D;
            transform: scale(1.1) !important;

          .icon{
            color: #ffffff !important;
            animation: upToDown 0.35s;
            // transform: scale(1.03);

          }

        }


    }

    @media (max-width: 1000px){
      .scrolltop-icon-container{
        left: 92% !important;
      }
    }

    @media (max-width: 720px){
      .scrolltop-icon-container{
        left: 90% !important;
      }
    }

    @media (max-width: 550px){
      .scrolltop-icon-container{
        left: 88% !important;
      }
    }

    @media (max-width: 500px){
      .scrolltop-icon-container{
        left: 85% !important;
      }
    }
</style>
