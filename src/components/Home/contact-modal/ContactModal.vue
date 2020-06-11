<template>
    <div class="contact-modal" ref="modalContact"
    :style="{ 'display': show, 'animation-name' : animation }"
    style="animation-duration: 0.5s">

        <sweet-modal ref="alert" title="Contact Modal" :icon="alert.type">
            <div v-if="sentSeccessfully || sentFailed" class="mt-4">
                <p :style="{color: alert.color}"> {{ alert.txt }} </p>
            </div>
        </sweet-modal>

        <form action="" class="d-flex" @submit.prevent="submit($event)">
            <input type="text" name="name" placeholder="name" v-model="name" @input="validateName"
            :style="{ borderBottom: nameBorder }"
            :class="{ 'pulse': nameAnimation }">

            <p v-if="$v.name.$invalid && nameBorder == '2px solid #d9534f'" class="form-error-txt">Name field requires at least 3 letters</p>

            <input type="email" name="email" placeholder="email" v-model="email" @input="validateEmail" autocomplete="email"
            :style="{ borderBottom: emailBorder }"
            :class="{ 'pulse': emailAnimation }">

            <p v-if="$v.email.$invalid && emailBorder == '2px solid #d9534f'" class="form-error-txt">Please Enter a valid E-mail Address</p>

            <textarea name="message" id="" cols="30" rows="4" placeholder="message" v-model="message" @input="validateMessage"
            :style="{ borderBottom: messageBorder }"
            :class="{ 'pulse': messageAnimation }">
            </textarea>

            <p v-if="$v.message.$invalid && messageBorder == '2px solid #d9534f'" class="form-error-txt">Please describe your intention of contact</p>

            <div class="button-holder">

                <button type="button" class="cancel-button" @click="closeModal()">
                    Cancel
                </button>
                <button class="send-button">
                    <p v-if="!sending"
                    >Send</p>
                    <font-awesome-icon

                            icon="spinner"
                            class="loading"
                            v-if="sending">
                    </font-awesome-icon>
                </button>

            </div>
        </form>
    </div>
</template>

<script>
import emailjs from 'emailjs-com'
import { required, minLength, email, maxLength } from 'vuelidate/lib/validators'
export default {
  data () {
    return {
      alert: {
        type: '',
        txt: '',
        color: ''
      },
      sending: false,
      sentSeccessfully: false,
      sentFailed: false,
      show: 'none',
      animation: 'none',
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
            required,
            maxLength: 500
        },
  },
  created () {

    Event.$on('click-happened', e =>{
        if( this.show == 'block' && e.target.closest('.contact-modal') != this.$refs.modalContact && !e.target.closest('.mail-icon-container') && !e.target.closest('.hero-action-button') && !e.target.closest('.phone-hero-action-button') && !e.target.closest('.bulid-your-buisness')) {
            this.closeModal();
        }
    })

    Event.$on('toggleContactModal', () => {

        if(this.show == 'none'){

            this.show = 'block';
            this.animation = 'lightSpeedIn';

            setTimeout( () =>  {
                this.animation = 'none';
            }
            ,
            500)

        }else{

            this.animation = 'lightSpeedOut'

            setTimeout( () =>  {
                this.show = 'none';
                this.animation = 'none';
            }
            ,
            490)
        }
    })

  },
  methods: {
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
        // console.log(e.target.closest('form'))

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
    closeModal() {
        this.animation = 'lightSpeedOut'

            setTimeout( () =>  {
                this.show = 'none';
                this.animation = 'none';
            }
            ,
            490)

    },
    send (e) {
      this.sending = true

      emailjs.sendForm('gmail', 'porto_template', e.target, 'user_ttrETVA5PV1DLq0MoMOvh')

        .then((result) => {
          this.sentSeccessfully = true
          this.alert.type = 'success'
          this.alert.txt = 'Congrats! \n You took your first Step to expand your Buisness'
          this.alert.color = '#4CAF50'
          this.$refs.alert.open()
          e.target.reset()
          this.sending = false
        })
        .catch( error  => {
          this.sentFailed = true
          this.alert.type = 'error'
          this.alert.txt = 'Sorry! \n An Error Has occured during sending the E-mail. Please try  again later.'
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

.contact-modal{
    position: fixed;
    display: none;
    right: 5%;
    bottom: 75px;
    width: 350px;
    min-height: 400px;
    z-index: 1000000;
    padding: 30px;
    border-radius: 4px;
    background-color: #ffffff;
    box-shadow: hsla(0, 0%, 0%, 0.12) 0px 0px 20px 0px;

    form{
        flex-direction: column;
        width: 100%;
        justify-content: space-between;
        align-items: flex-start;
        height: 340px;
        padding-bottom: 15px;
        z-index: 1000000;

        .form-error-txt{
            font-size: 0.8rem;
            font-size: 400;
            color: #d9534f;
            // margin-top: 5px;
            text-align: left;
        }


        input{
            width: 100%;
            margin-bottom: 4px;
            -webkit-appearance: none;
            border: 1px solid hsla(0, 0%, 65%, 0.4);
            border-radius: 5px;
            background-color: transparent;
            padding: 12px;
            font-size: 14px;
            animation-duration: 0.3s;

            &:focus{
                outline: none;
                border-bottom: 2px solid #225E9B;
                animation-name: pulse;
                animation-duration: 0.3s;

                &::placeholder{
                    color: hsla(0, 0%, 65%, 0.4) !important;
                    -webkit-transform: translateX(10px);
                    -moz-transform: translateX(10px);
                    transform: translateX(10px);
                  }
            }

            &::-webkit-input-placeholder{
                transition: all 0.3s ease;
                color: hsla(0, 0%, 65%, 0.4);
                font-weight: 200 ;
                font-size: 0.9rem;
            }

            &::-ms-input-placeholder{
                transition: all 0.3s ease;
                color: hsla(0, 0%, 65%, 0.4) !important;
                font-weight: 200 !important;
                font-size: 0.9rem;
            }
        }

        textarea{
            width: 100%;
            -webkit-appearance: none;
            border: 1px solid hsla(0, 0%, 65%, 0.4);
            border-radius: 5px;
            margin-bottom: 4px;
            resize: none;
            background-color: transparent;
            padding: 12px;
            font-size: 14px;
            animation-duration: 0.3s;


            &:focus{
                outline: none;
                border-bottom: 2px solid #225E9B;
                animation-name: pulse;
                animation-duration: 0.3s;
                &::placeholder{
                    color: hsla(0, 0%, 65%, 0.4) !important;
                    -webkit-transform: translateX(10px);
                    -moz-transform: translateX(10px);
                    transform: translateX(10px);
                  }
            }

            &::-webkit-input-placeholder{
                transition: all 0.3s ease;
                color: hsla(0, 0%, 65%, 0.4) ;
                font-weight: 200 ;
                font-size: 0.9rem;
            }

            &::-ms-input-placeholder{
                transition: all 0.3s ease;
                color: hsla(0, 0%, 65%, 0.4) !important;
                font-weight: 200 !important;
                font-size: 0.9rem;
            }
        }

        .button-holder{
            width: 100%;
            margin-top: 15px;
            display: flex;
            justify-content: space-between;
            align-items: center;

            .cancel-button{
                border: none;
                border: 2px solid transparent;
                background:
                linear-gradient(to right, #ffffff, #ffffff),
                linear-gradient(to right, #F07A6A , #E8496D);
                background-clip: padding-box, border-box;
                background-origin: padding-box, border-box;
                width: 131px;
                outline: none;
                display: flex;
                justify-content: center;
                align-items: center;
                padding: 8px 15px;
                border-radius: 5px;
                color: #F07A6A;
                font-size: 1rem;
                transition: all 0.3s ease-in-out;
                font-weight: 600;

                &:hover{
                    box-shadow: 0 10px 10px 0 rgba($color: #F07A6A, $alpha: .14), 0 3px 3px 0 rgba($color: #F07A6A, $alpha: .06);

                }

            }

            .send-button{
                width: 131px;
                background: linear-gradient(to right, #2B92E1 , #68E3F1);
                letter-spacing: 0.1rem;
                border: none;
                outline: none;
                display: flex;
                justify-content: center;
                align-items: center;
                padding: 10px 15px;
                border-radius: 5px;
                color: #ffffff;
                font-size: 1rem;
                font-weight: 600;
                transition: all 0.3s ease-in-out;

                p{
                    display:flex;
                    justify-content:center;
                    align-items:center;
                    letter-spacing: 0.02rem;
                    width:100%;
                    margin:0;
                    padding:0
                }

                &:hover{
                    box-shadow: 0 10px 10px 0 rgba($color: #2B92E1, $alpha: .14), 0 3px 3px 0 rgba($color: #2B92E1, $alpha: .06);
                }
            }
        }
    }
}

.loading{
    color: #ffffff;
    font-size: 1.4rem;
    animation:
        loading-rotate 1s infinite both;

        @keyframes loading-rotate {
            0% {
                transform: rotateZ(0deg);
            }
            100% {
                transform: rotateZ(360deg);
            }
        }
}

@media (max-width: 450px){
    .contact-modal{
        right: 2% !important;
    }
}

@media (max-width: 380px){
    .contact-modal{
        right: 2% !important;
        width: 300px;
        // height: 320px;

    }
}
</style>
