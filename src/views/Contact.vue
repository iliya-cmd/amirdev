<template>
    <div  class="contact-container">
      <NavBar/>
        <div class="contact-content-container">
          <Contact/>
        </div>
      <div class="contact-footer">
        <Footer style="padding-top: 50px"/>
      </div>
    </div>
</template>

<script>
import NavBar from '../components/Home/navbar/NavBar.vue'
import Footer from '../components/Home/footer/Footer.vue'
import Contact from '../components/Contact/Contact.vue'
export default {
  components: {
    NavBar,
    Footer,
    Contact
  },
  data () {

    return {
      backY: 0
    }

  },
  methods: {
  }
}

</script>

<style lang='scss' >

  .contact-container{
    font-family: 'Helvetica', sans-serif !important;
    height: auto !important;
    overflow: auto !important;
    // min-height: 100vh !important;
    width: 100%;
    z-index: -5;
    background-image: url(~@/assets/contact-map.jpg);
    background-size: 100%;
    background-position: top;
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

  @media (max-width: 1165px){
    .contact-container{
      font-family: 'Helvetica', sans-serif !important;
        height: 100% !important;

      background-image: url(~@/assets/contact-map.jpg);
      background-size: cover !important;
      background-position: top;
      background-repeat: no-repeat !important;
      background-color: #222222;
    }
    .contact-footer{
        width: 100%;
        background-color: #222222;
        // padding-top: 80px;
        position: absolute;
        bottom: 0;
    }
  }
  @media (max-width: 700px ){
    .contact-footer{
        width: 100%;
        background-color: #222222;
        // padding-top: 80px;
        position: relative;
        z-index: 0;
    }
    .contact-container{
      background-attachment: inherit !important;
      .contact-content-container{
        // height: 600px !important;
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
          z-index: 4;
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
        padding-top: 80px;
      }
    }
  }

  @media (max-width: 550px ){
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

          .contact-form-buttons{

            button{
              font-size: 0.7rem !important;
              width: 49% !important;
              padding: 3px 10px !important;

            }

            label{
              font-size: 0.8rem !important;
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
        padding-top: 100px !important;
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
          align-items: flex-start !important;
          padding-right: 15px;
          padding-top: 10px !important;
          height: 180px;
          padding-bottom: 0px;

          .contact-tooltip{
            display: block !important;
          }
        }

        .contact-right-section{
          width: 100% !important;
          justify-content: center;
          padding-right: 0;

          form{
            padding: 15[x] !important;
            width: 100%;

            .contact-form-buttons{

            button{
              font-size: 0.7rem !important;
              // width: 49% !important;
              padding: 3px 10px !important;

            }

            label{
              font-size: 0.8rem !important;
            }
          }
            .contact-form-buttons{
              justify-content: space-between;

              .send-message{
                margin: 0 !important;
                margin-right: 0px !important;
                font-size: 0.7rem !important;
                // width: 49% !important;
                padding: 3px 10px !important;

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
        padding-top: 30px !important;
      }
    }
  }

  @media (max-width: 500px ){

    .contact-container{

      .contact-content-container{

        .contact-right-section{
          form{
            height: 400px !important;
            textarea{
              margin-bottom: 10px !important;
            }
            .contact-form-buttons{
                      flex-direction: column;
                      padding-top: 0px !important;
                      justify-content: space-between;
                    .send-message{
                        font-size: 0.7rem !important;
                        width: 60% !important;
                        padding: 3px 15px !important;

                    }
                      label{
                        font-size: 0.8rem !important;

                      }
              }
          }
        }
      }
    }
  }

</style>
