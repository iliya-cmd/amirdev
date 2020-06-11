<template>
    <div class="d-flex w-100 contact-right-left-container">

            <div class="contact-left-section" style="">

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

                  <form method="POST" class="d-flex flex-column w-100 contact-page-form" @submit.prevent="submit($event)">

                    <input type="text" placeholder="name" name="name"
                    v-model="name"
                    @input="validateName"
                    :style="{ borderBottom: nameBorder }"
                    :class="{ 'pulse': nameAnimation }">

                    <p v-if="$v.name.$invalid && nameBorder == '2px solid #d9534f'" class="form-error-txt">Name field requires at least 3 letters</p>


                    <input type="email" placeholder="email" name="email" autocomplete="email"
                    v-model="email"
                    @input="validateEmail"
                    :style="{ borderBottom: emailBorder }"
                    :class="{ 'pulse': emailAnimation }">

                    <p v-if="$v.email.$invalid && emailBorder == '2px solid #d9534f'" class="form-error-txt">Please Enter a valid E-mail Address</p>

                    <label for="message">Message</label>
                    <textarea name="message" id="message" cols="30" rows="6"
                    v-model="message"
                    @input="validateMessage"
                    :style="{ borderBottom: messageBorder }"
                    :class="{ 'pulse': messageAnimation }">
                    </textarea>

                    <p v-if="$v.message.$invalid && messageBorder == '2px solid #d9534f'" class="form-error-txt">Please describe your intention of contact</p>


                    <div class="d-flex w-100 contact-form-buttons">

                      <button type="submit" class="send-message" >
                          <div class="d-flex w-100" style="justify-content: center; align-items: center" v-if="!sending">
                            Send
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
import { required, minLength, email, maxLength } from 'vuelidate/lib/validators'

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
            sending: false,
            name: '',
            nameBorder: '',
            nameAnimation: false,
            email: '',
            emailBorder: '',
            emailAnimation: false,
            message: '',
            messageBorder: '',
            messageAnimation: false
        }
    },
    validations: {
        name: {
            required,
            minLength: minLength(3)
        },
        email: {
            required,
            email
        },
        message: {

        },
    },
    methods:{
      validateName(){

          if(this.$v.name.$invalid){
              this.nameBorder = '2px solid #d9534f'
          }
          else{
              this.nameBorder = ''
          }
      },
      validateEmail(){

          if(this.$v.email.$invalid){
              this.emailBorder = '2px solid #d9534f'
          }
          else{
              this.emailBorder = ''
          }
      },
      validateMessage(){

          if(this.$v.message.$invalid){
              this.messageBorder = '2px solid #d9534f'
          }
          else{
              this.messageBorder = ''
          }
      },
      submit(e) {

        this.$v.$touch()
        this.messageAnimation = false
        this.emailAnimation = false
        this.nameAnimation = false


        if (this.$v.$invalid) {

            if(this.$v.message.$invalid){

                this.messageAnimation = true
                this.messageBorder = '2px solid #d9534f'

                setTimeout( () => this.messageAnimation = false
                ,500)

            }

            if(this.$v.email.$invalid) {

                this.emailAnimation = true
                this.emailBorder = '2px solid #d9534f'

                setTimeout( () => this.emailAnimation = false
                ,500)

            }

            if(this.$v.name.$invalid) {
                this.nameAnimation = true
                this.nameBorder = '2px solid #d9534f'

                setTimeout( () => this.nameAnimation = false
                ,500)
            }


        }
        else {
            this.send(e)
        }
      },
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
          display: flex;
          flex-direction: column;
          width: 50%;
          height: 600px;
          max-height: 600px;
          justify-content: space-between;
          align-items: flex-start;
          padding-top: 110px;
          padding-left: 49px;
          z-index: 10;
          position: relative !important;

          .map-link{
            text-decoration: none !important;

            :hover{
              text-decoration: none !important;
            }
          }

          .contact-tooltip{
            font-size: 0.9rem;
            cursor: pointer;
            background-color: rgba($color: #222222, $alpha: 0.9);
            border-radius: 8px;
            display: flex;
            justify-content: space-between;
            align-items: center !important;
            padding: 3px 12px;
            color: #999999;
            position: relative;
            display: none;

            svg{
              color: #999999;
              width: 10px !important;
              font-size: 1.2rem !important;
              padding-top: 0px;
              margin-left: 5px;

            }

            &:hover{
              background-color: rgba($color: #222222, $alpha: 0.9);
              color: #ffffff;

              svg{
                color: #ffffff;
              }

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
          max-height: 600px;
          justify-content: flex-end;
          align-items: flex-end;
          padding-right: 40px;

          .modal-contact-page{
            z-index: 10;
            background-color: #ffffff;
            border-radius: 40px;
            padding: 0 0 0 10px;
            cursor: default;
            width: 380px;
            height: 530px;
            margin-bottom: -40px;
            justify-content: space-between;
            align-items: flex-start;
            -webkit-box-shadow: 0px 0px 5px 1px rgba(0,0,0,0.65);
            -moz-box-shadow: 0px 0px 5px 1px rgba(0,0,0,0.65);
            box-shadow: 0px 0px 5px 1px rgba(0,0,0,0.65);

            p.form-error-txt{
              padding: 0;
              margin-top: -20px;
              font-size: 0.8rem;
              font-size: 400;
              color: #d9534f;
              // margin-top: 5px;
              text-align: left;
            }

            .contact-page-form{

              height: 100%;
              justify-content: space-between;
              padding: 30px 20px 30px;

              input{
                width: 100%;
                border: none;
                border-radius: 0;
                border-top-left-radius: 10px;
                border-top-right-radius: 10px;
                -webkit-appearance: none;
                outline: none;
                border-bottom: 1px solid rgba($color: #949494, $alpha: 0.6);
                background-color: transparent;
                margin-bottom: 25px;
                animation-duration: 0.3s;
                padding: 25px 12px 6px 10px;
                font-size: 18px;

                  &:focus{
                      outline: none;

                      &::placeholder{
                          color: #949494 !important;
                          -webkit-transform: translateY(-10px) translateX(10px);
                          -moz-transform: translateY(-10px) translateX(10px);
                          transform: translateY(-10px) translateX(10px);
                        }
                  }

                  &::-webkit-input-placeholder{
                      -webkit-transform: translateY(-10px);
                      -moz-transform: translateY(-10px);
                      transform: translateY(-10px);
                      transition: all 0.3s ease;
                      color: #949494 ;
                      font-weight: 500 ;
                      font-size: 1rem;
                  }

                  &::-ms-input-placeholder{
                      -webkit-transform: translateY(-10px);
                      -moz-transform: translateY(-10px);
                      transform: translateY(-10px);
                      transition: all 0.3s ease;
                      color: #949494 !important;
                      font-weight: 500 !important;
                      font-size: 1rem;
                  }
              }

              label{
                  width: 100%;
                  text-align: left;
                  margin-bottom: 15px;
                  padding-left: 10px;
                  color: #949494 ;
                  font-size: 0.9rem;

              }

              textarea{
                  width: 100%;
                  border: none;
                  resize: none;
                  -webkit-appearance: none;
                  outline: none;
                  border-radius: 15px;
                  background-color: #F8F8F8;
                  margin-bottom: 0px;
                  animation-duration: 0.3s;
                  padding: 20px 20px 10px 10px;
                  font-size: 16px;
                  overflow: visible ;

                  &:focus{
                      outline: none;
                      // animation-name: pulse;
                      // animation-duration: 0.3s;
                      &::placeholder{
                          color: #949494 !important;
                          -webkit-transform: translateY(-15px) translateX(10px);
                          -moz-transform: translateY(-15px) translateX(10px);
                          transform: translateY(-15px) translateX(10px);
                        }
                  }

                  &::-webkit-input-placeholder{
                      z-index: 100000;
                      -webkit-transform: translateY(-15px);
                      -moz-transform: translateY(-15px);
                      transform: translateY(-15px);
                      transition: all 0.3s ease;
                      color: #949494 ;
                      font-weight: 500 ;
                      font-size: 1rem;
                  }

                  &::-ms-input-placeholder{
                      z-index: 100000;

                      -webkit-transform: translateY(-15px);
                      -moz-transform: translateY(-15px);
                      transform: translateY(-15px);
                      transition: all 0.3s ease;
                      color: #949494 !important;
                      font-weight: 500 !important;
                      font-size: 1rem;
                  }
              }

              .contact-form-buttons{
                justify-content: center;
                align-items: center;
                margin-top: 25px;

                .send-message{
                  display: flex;
                  align-self: flex-end !important;
                  background: linear-gradient(to right, #2B92E1 , #68E3F1);
                  justify-content: space-between;
                  align-items: center;
                  width: 180px;
                  height: 50px;
                  background-color: transparent;
                  color: rgba($color: #ffffff, $alpha: 0.9  );
                  font-weight: 900;
                  text-transform: uppercase;
                  letter-spacing: 0.08rem;
                  word-spacing: 0.2rem;
                  font-size: 0.88rem;
                  border: none;
                  padding: 0 20px 0 20px;
                  outline: none;
                  border-radius: 40px;
                  transition: all 0.2s ease;
                  box-shadow: 0 10px 10px 2px rgba($color: #2B92E1, $alpha: .20), 0 3px 3px 0 rgba($color: #2B92E1, $alpha: .06);


                  &:hover{
                    box-shadow: none;
                    color: #ffffff !important;
                  }

                    .loading{
                      color: #ffffff;
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


  @media screen and (min-width:1052px) and (max-width: 1165px ){

    .contact-left-section{
      padding-top: 10% !important;
      height: auto !important;

    }

    .contact-right-section{
      height: auto !important;
      padding-top: 10% !important;


    }

  }

  @media screen and (min-width:668px) and (max-width: 1051px ){

      .contact-left-section{

          height: 120% !important;

      }

      .contact-right-section{

        height: 600px !important;
        // padding-top: 800px !important;
        // .modal-contact-page{

        //     width: 300px !important;
        //     height: 430px !important;

        // }
      }
  }


@media only screen
  and (min-device-width: 412px)
  and (max-device-width: 736px)
  and (-webkit-min-device-pixel-ratio: 3) {

    .contact-right-left-container{

      flex-direction: column !important;
      align-items: flex-start !important;
      justify-content: space-between !important;

    }

    .contact-left-section{
      flex-direction: column-reverse !important;
      padding-top: 20px !important;
      padding-left: 28px !important;
      padding-right: 30px !important;
      width: 100% !important;
      align-items: flex-start !important;
      z-index: 10;
      position: absolute !important;
      top: 0;

      p.contact-txt{
        position: absolute;
        top: 70px;
        font-size: 2.2rem !important;
      }

      .contact-tooltip{
        display: flex !important;
        top: 135px;
        position: absolute;
      }
    }

    .contact-right-section{
      width: 100% !important;
      display: flex;
      justify-content: flex-start !important;
      padding-left: 30px !important;
      padding-right: 30px !important;
      position: absolute !important;
      top: 0px;


      .contact-page-form{
        width: 100% !important;

      }

      .modal-contact-page{
          width: 100% !important;
          padding-bottom: 10px !important;
          height: 450px !important;


          label{
            margin-bottom: 15px !important;
          }

          .contact-page-form{
                width: 100% !important;
                height: 430px !important;
                padding: 25px 20px 0px !important;
          }
      }
    }
}
@media only screen
  and (min-device-width: 320px)
  and (max-device-width: 412px)
  and (-webkit-min-device-pixel-ratio: 2) {

    .contact-right-left-container{
      flex-direction: column !important;
      align-items: flex-start !important;
      justify-content: space-between !important;

    }

    .contact-left-section{
      flex-direction: column-reverse !important;
      padding-top: 20px !important;
      padding-left: 30px !important;
      padding-right: 30px !important;
      width: 100% !important;
      align-items: flex-start !important;
      z-index: 10;
      position: absolute !important;
      top: 30px;

      p.contact-txt{
        position: absolute;
        top: 50px;
        font-size: 2rem !important;
      }

      .contact-tooltip{
        position: absolute;
        top: 105px;
        display: flex !important;
      }
    }

    .contact-right-section{
      width: 100% !important;
      display: flex;
      justify-content: flex-start !important;
      padding-left: 30px !important;
      padding-right: 30px !important;
      position: absolute !important;
      top: 0px;

      .contact-page-form{
        width: 100% !important;

      }
      .modal-contact-page{
          width: 100% !important;
          padding-bottom: 10px !important;
          height: 450px !important;


          label{
            margin-bottom: 15px !important;
          }

          .contact-page-form{
                width: 100% !important;
                height: 430px !important;
                padding: 25px 20px 0px !important;
          }
      }
    }
}



@media all and (max-width: 400px ){

  .contact-left-section{

      p.contact-txt{
        font-size: 2rem !important;
      }
  }

  .contact-right-section{
      .form-error-txt{
          font-size: 0.7rem !important;
      }
  }

}
</style>