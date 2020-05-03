<template>
    <div class="mail-icon-container" @click="showContactModal()"
    data-aos="fade-left" data-aos-easing="ease" data-aos-delay="100" data-aos-once="true" data-aos-duration="400" data-aos-anchor-placement="bottom-center">
        <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="envelope" class="svg-inline--fa fa-envelope fa-w-16 icon" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M464 64H48C21.49 64 0 85.49 0 112v288c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V112c0-26.51-21.49-48-48-48zm0 48v40.805c-22.422 18.259-58.168 46.651-134.587 106.49-16.841 13.247-50.201 45.072-73.413 44.701-23.208.375-56.579-31.459-73.413-44.701C106.18 199.465 70.425 171.067 48 152.805V112h416zM48 400V214.398c22.914 18.251 55.409 43.862 104.938 82.646 21.857 17.205 60.134 55.186 103.062 54.955 42.717.231 80.509-37.199 103.053-54.947 49.528-38.783 82.032-64.401 104.947-82.653V400H48z"></path></svg>

    </div>
</template>

<script>
export default {
  methods: {
    showContactModal: function () {
      Event.$emit('toggleContactModal')
    }
  }
}
</script>

<style lang="scss">
    .mail-icon-container{
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
        left: 90%;
        z-index: 10;
        transition: all .1s ease;
        border: rgba($color: #000000, $alpha: 0.2) 1px solid;
        opacity: 0.5 ;

        .icon{
          color: #000000;
          width: 22px;
          height: 22px;
          font-weight: lighter !important;
          font-size: 22px;
          line-height: 2em;
          transition: all 0.1s ease;

        }

        &:hover{
            // transition: width 1s;
            background-color: #E8496D;
            transform: scale(1.1) !important;

          .icon{
            color: #ffffff !important;
            transform: scale(1.03);

          }
            .envelope{
              fill: #ffffff;
            }
        }

    }

    @media (max-width: 1270px){
      .mail-icon-container{
        left: 89% !important;
      }
    }
    @media (max-width: 1000px){
      .mail-icon-container{
        left: 86% !important;
      }
    }

    @media (max-width: 850px){
      .mail-icon-container{
        left: 85% !important;
      }
    }

    @media (max-width: 720px){
      .mail-icon-container{
        left: 82% !important;
      }
    }

    @media (max-width: 650px){
      .mail-icon-container{
        left: 81% !important;
      }
    }

    @media (max-width: 550px){
      .mail-icon-container{
        left: 77% !important;
      }
    }
    @media (max-width: 500px){
      .mail-icon-container{
        left: 70% !important;
      }
    }
</style>
