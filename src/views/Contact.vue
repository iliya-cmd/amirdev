<template>
    <div  class="contact-container"
          v-bind:style="{ backgroundPositionY: backY + 'px' }"
          >
      <NavPlace/>
      <NavBar/>
        <div class="contact-content-container"
        @mousemove="photoChange($event)">
          <Contact/>
        </div>
      <div class="contact-footer">
        <Footer style="padding-top: 50px"/>
      </div>
    </div>
</template>

<script>
import NavBar from '../components/Home/navbar/NavBar.vue'
import NavPlace from '../components/Home/navbar/NavPlace.vue'
import Footer from '../components/Home/footer/Footer.vue'
import Contact from '../components/Contact/Contact.vue'
export default {
  components: {
    NavBar,
    NavPlace,
    Footer,
    Contact
  },
  data () {

    return {
      backY: 0
    }

  },
  methods: {
    photoChange: function (event) {

      if ( event.target.classList.contains('contact-right-section') || event.target.classList.contains('contact-left-section'))
      this.backY = - (event.offsetY) / 4

    }
  }
}

</script>

<style lang='scss'>


  .contact-container{
    font-family: 'Helvetica', sans-serif !important;
    height: auto !important;
    overflow: auto !important;
    width: 100%;
    z-index: -5;
    background-image: url(~@/assets/contact-map.jpg);
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat !important;
    background-color: #222222;

    .contact-content-container{
      cursor: pointer;
      height: 600px;
      position: relative;
      // background-color: rgba($color: #000000, $alpha: 0.1);
      position: relative;

      &:hover{

        .contact-tooltip{
          display: block !important;
        }

      }

      >div{
        height: 500px;
      }

    }
  }

  @media (max-width: 700px ){
    .contact-container{
      background-attachment: inherit !important;
      .contact-content-container{
        height: 600px !important;
        padding-top: 70px;
        // margin-bottom: 50px !important;

        .contact-left-section{
          width: 100% !important;
          flex-direction: row-reverse !important;
          justify-content: space-between !important;
          align-items: center !important;
          padding-right: 15px;

          .contact-tooltip{
            display: block !important;
          }
        }

        .contact-right-section{
          width: 100% !important;
        }
        >div{
          flex-direction: column !important;
          justify-content: space-between !important;
          align-items: center;
        }

        .contact-txt{
          font-size: 2.5rem !important;
        }
      }

      .contact-footer{
        background-color: #222222;
        padding-top: 50px;
      }
    }
  }

  @media (max-width: 530px ){
    .contact-container{
      background-attachment: inherit !important;

      .contact-content-container{
        height: 600px !important;
        padding-top: 70px;
        // margin-bottom: 50px !important;

        .contact-txt{
          margin: 0 !important;
          padding: 0 !important;
        }

        .contact-left-section{
          width: 100% !important;
          flex-direction: row-reverse !important;
          justify-content: space-between !important;
          align-items: flex-start !important;
          padding-right: 15px;
          padding-top: 20px !important;

          .contact-tooltip{
            display: block !important;
          }
        }

        .contact-right-section{
          width: 100% !important;
        }
        >div{
          flex-direction: column !important;
          justify-content: space-between !important;
          align-items: center;
        }

        .contact-txt{
          font-size: 1.9rem !important;
        }
      }

      .contact-footer{
        background-color: #222222;
        padding-top: 0px !important;
      }
    }
  }

  @media (max-width: 530px ){
    .contact-container{
      background-attachment: inherit !important;

      .contact-content-container{
        height: 600px !important;
        padding-top: 70px;
        // margin-bottom: 50px !important;

        .contact-txt{
          margin: 0 !important;
          padding: 0 !important;
        }

        .contact-left-section{
          width: 100% !important;
          flex-direction: column-reverse !important;
          justify-content: space-between !important;
          align-items: center !important;
          padding-right: 15px;
          padding-top: 10px !important;
          height: 180px;
          padding-bottom: 20px;

          .contact-tooltip{
            display: block !important;
          }
        }

        .contact-right-section{
          width: 100% !important;
          justify-content: center;
          padding-right: 0;

          form{
            padding: 0 !important;
            width: 100%;

            .contact-form-buttons{
              justify-content: center;

              .send-message{
                margin: 0 !important;
                margin-right: 15px !important;
              }
            }
          }
        }
        >div{
          flex-direction: column !important;
          justify-content: space-between !important;
          align-items: center;
        }

        .contact-txt{
          font-size: 1.9rem !important;
        }
      }

      .contact-footer{
        background-color: #222222;
        padding-top: 0px !important;
      }
    }
  }
</style>
