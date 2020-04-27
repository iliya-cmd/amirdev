<template>
    <div class="d-flex w-100">

            <div class="d-flex contact-left-section" >

              <a href="https://www.google.com/maps/place/50%C2%B025'24.7%22N+30%C2%B032'30.3%22E/@50.423527,30.5404004,367m/data=!3m2!1e3!4b1!4m6!3m5!1s0x0:0x0!7e2!8m2!3d50.4235272!4d30.5417545"
              target="_blank"
              class="map-link">

                <div class="contact-tooltip">
                  Look at google maps
                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="angle-right" class="svg-inline--fa fa-angle-right fa-w-8 icon" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512"><path fill="currentColor" d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z"></path></svg>
                  </div>

              </a>

                <p class="contact-txt">Contact us</p>

            </div>

            <div class="d-flex contact-right-section">
                <div class="modal-contact-page d-flex flex-column ">
                  <p>Contact Form</p>

                  <form method="POST" action="" class="d-flex flex-column w-100 contact-page-form" @submit.prevent="send">
                    <input type="text" placeholder="name" required>
                    <input type="email" placeholder="email" required>
                    <textarea name="message" id="" cols="30" rows="1" placeholder="message"></textarea>
                    <div class="d-flex w-100 contact-form-buttons">

                      <label for="upload">
                        <font-awesome-icon
                          icon="cloud-upload-alt"
                          class="">
                        </font-awesome-icon>
                        Upload File
                      </label>
                      <input type="file" name="upload" id="upload">

                      <button type="submit" class="send-message" >
                          <div class="d-flex w-100" style="justify-content: space-between; align-items: center" v-if="!sending">
                            Send Message
                            <font-awesome-icon icon="paper-plane"></font-awesome-icon>
                          </div>
                          <div class="d-flex w-100" style="justify-content: center; align-items: center" v-if="sending">
                            <font-awesome-icon
                            icon="spinner"
                            class="loading">
                            </font-awesome-icon>
                          </div>
                      </button>
                    </div>
                  </form>
                </div>
            </div>

            <sweet-modal :icon="alert.type" ref="alert">
            <p :style="{color: alert.color}"
            style="font-size: 1.5rem; font-weight: 700"
            v-text="alert.txt"></p>
            </sweet-modal>

        </div>
</template>

<script>
import { SweetModal } from 'sweet-modal-vue'
import emailjs from 'emailjs-com'
export default {
    components: {
        SweetModal,
    },
    data () {
        return {
            alert: {
                type: '',
                txt: '',
                color: ''
            },
            sending: false
        }
    },
    methods:{
    send (e) {
      this.sending = true

      emailjs.sendForm('gmail', 'porto_template', e.target, 'user_ttrETVA5PV1DLq0MoMOvh')

        .then((result) => {
          this.alert.type = 'success'
          this.alert.txt = 'Congrats! You took your first Step to expand your Buisness'
          this.alert.color = '#4CAF50'
          this.$refs.alert.open()
          e.target.reset()
          this.sending = false
        },
        (error) => {
          this.alert.type = 'error'
          this.alert.txt = 'Sorry! An Error Has occured during sending the E-mail. Please try  again later.'
          this.alert.color = '#F44336'
          this.$refs.alert.open()
          console.log('FAILED...', error)
          this.sending = false
        })
    }
    }
}
</script>

<style lang="scss">
    .contact-left-section{
          flex-direction: column;
          width: 50%;
          height: 600px;
          justify-content: space-between;
          align-items: flex-start;
          padding-top: 110px;
          padding-left: 49px;
          z-index: 10;

          .map-link{
            text-decoration: none !important;

            :hover{
              text-decoration: none !important;
            }
          }

          .contact-tooltip{
            font-size: 0.9rem;
            background-color: rgba($color: #222222, $alpha: 0.9);
            border-radius: 8px;
            padding: 4px 20px 4px 8px;
            color: #999999;
            position: relative;
            display: none;

            .icon{
              color: #999999;
              font-size: 0.9rem;
              position: absolute;
              top: 25%;
              right: 8px;

            }

            &:hover{
              background-color: rgba($color: #222222, $alpha: 0.9);
              color: #ffffff;

            }
          }

          .contact-txt{
            font-weight: 500;
            font-size: 3.5rem;
            z-index: 10;
          }
      }

      .contact-right-section{
          width: 50%;
          height: 600px;
          justify-content: flex-end;
          align-items: flex-end;
          padding-right: 40px;

          .modal-contact-page{
            background-color: #ffffff;
            border-radius: 9px;
            padding: 0 0 0 10px;
            cursor: default;
            width: 380px;
            height: 460px;
            margin-bottom: -40px;
            justify-content: flex-start;
            align-items: flex-start;
            -webkit-box-shadow: 0px 0px 5px 1px rgba(0,0,0,0.65);
            -moz-box-shadow: 0px 0px 5px 1px rgba(0,0,0,0.65);
            box-shadow: 0px 0px 5px 1px rgba(0,0,0,0.65);

            p{
              width: 100%;
              text-align: left;
              padding: 20px 20px 0;
              margin: 0;
              margin-bottom: 15px;
              font-family: 'Helvetica', 'Roboto' !important;
              font-size: 0.95rem;
              letter-spacing: 0;
              font-weight: 600;
              color: #000000;
            }

            .contact-page-form{
              padding: 30px 20px 10px;

              input{
                width: 100%;
                border: none;
                outline: none;
                border-bottom: 1px solid rgba($color: #000000, $alpha: 0.6);
                // border-radius: 5px;
                background-color: transparent;
                margin-bottom: 35px;
                padding: 12px 12px 6px 0;
                font-size: 14px;

                  &:focus{
                      outline: none;
                      border-bottom: 2px solid #000000;

                      &::placeholder{
                          color: #000000 !important;
                          font-weight: 600;
                          -webkit-transform: translateX(10px);
                          -moz-transform: translateX(10px);
                          transform: translateX(10px);
                        }
                  }

                  &::-webkit-input-placeholder{
                      transition: all 0.3s ease;
                      color: #000000 ;
                      font-weight: 500 ;
                      font-size: 1rem;
                  }

                  &::-ms-input-placeholder{
                      transition: all 0.3s ease;
                      color: #000000 !important;
                      font-weight: 500 !important;
                      font-size: 1rem;
                  }
              }

              textarea{
                  width: 100%;
                  border: none;
                  resize: none;
                  outline: none;
                  border-bottom: 1px solid rgba($color: #000000, $alpha: 0.6);
                  // border-radius: 5px;
                  margin-bottom: 40px;
                  background-color: transparent;
                  padding: 12px 12px 8px 0;
                  font-size: 14px;

                  &:focus{
                      outline: none;
                      border-bottom: 2px solid #000000;
                      // animation-name: pulse;
                      // animation-duration: 0.3s;
                      &::placeholder{
                          color: #000000 !important;
                          font-weight: 600;
                          -webkit-transform: translateX(10px);
                          -moz-transform: translateX(10px);
                          transform: translateX(10px);
                        }
                  }

                  &::-webkit-input-placeholder{
                      transition: all 0.3s ease;
                      color: #101010 ;
                      font-weight: 500 ;
                      font-size: 1rem;
                  }

                  &::-ms-input-placeholder{
                      transition: all 0.3s ease;
                      color: #101010 !important;
                      font-weight: 500 !important;
                      font-size: 1rem;
                  }
              }

              .contact-form-buttons{
                justify-content: space-between;
                align-items: center;
                margin-top: 25px;

                input[type="file"]{
                  display: none;
                }

                label{
                  width: 120px;
                  display: flex;
                  letter-spacing: 0.02rem;
                  word-spacing: 0.2rem;
                  font-weight: 600;
                  justify-content: space-between;
                  align-items: center;
                  height: 50px;
                  padding: 7px 0 0 0;
                  cursor: pointer;
                  font-size: 0.88rem;
                  color: #000000;


                  svg{
                    color: #000000;
                    width: 30px;
                    height: 30px;
                  }
                }

                .send-message{
                  display: flex;
                  justify-content: space-between;
                  align-items: center;
                  width: 180px;
                  height: 50px;
                  background-color: transparent;
                  color: #000000;
                  font-weight: 700;
                  letter-spacing: 0.02rem;
                  word-spacing: 0.2rem;
                  font-size: 0.88rem;
                  padding: 0 20px 0 20px;
                  border: 1px solid #000000;
                  outline: none;
                  border-radius: 10px;
                  transition: all 0.2s ease;

                  &:hover{
                      background-color: #000000;
                      color: #ffffff !important;

                      svg{
                      color: #ffffff;
                      font-size: 1rem;
                      }
                  }

                    svg{
                      color: #000000;
                      font-size: 1.1rem;
                    }

                    .loading{
                      color: #000000;
                      font-size: 2rem !important;
                      animation:
                                loading-rotate 1s infinite both;
                                // loading-bg 1.5s infinite both;

                      @keyframes loading-rotate {
                        0% {
                          transform: rotateZ(0deg);
                        }
                        100% {
                          transform: rotateZ(360deg);
                        }
                      }

                      @keyframes loading-bg {
                        0% {
                          color: #ffffff;
                        }
                        100% {
                          color: #000000;
                        }
                      }
                  }
                }

              }
            }
          }
      }

@media (max-width: 550px ){

  .contact-left-section{
          align-items: flex-start !important;
          padding-top: 90px !important;
          padding-left: 21px !important;
          z-index: 10;
  }

  .modal-contact-page{
      padding: 0 0 0 10px;
      width: 330px !important;
      height: 400px !important;

      .contact-form-buttons{
        margin-top: 0px !important;

        .send-message{
          width: 180px !important;
        }
      }
  }
}

@media (max-width: 500px ){

  .contact-left-section{
          align-items: flex-start !important;
          padding-top: 90px !important;
          padding-left: 21px !important;
          z-index: 10;
  }

  .modal-contact-page{
      padding: 0 0 0 10px;
      width: 290px !important;
      height: 370px !important;

    input{
      margin-bottom: 15px !important;

    }

    textarea{
      margin-bottom: 37px !important;
    }
      .contact-form-buttons{
        margin-top: 0px !important;

        .send-message{
          width: 180px !important;
          height: 40px !important;
          font-size: 0.9rem !important;
          padding: 0 15px !important;

          svg{
            font-size: 0.9rem !important;
          }
        }
      }
  }
}
</style>