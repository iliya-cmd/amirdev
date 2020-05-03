<template>
    <div class="contact-modal" ref="modalContact"
    :style="{ 'display': show, 'animation-name' : animation }"
    style="animation-duration: 0.5s">

        <sweet-modal ref="alert" title="Contact Modal" :icon="alert.type">
            <div v-if="sentSeccessfully || sentFailed" class="mt-4">
                <p :style="{color: alert.color}"> {{ alert.txt }} </p>
            </div>
        </sweet-modal>

        <form action="" class="d-flex"  @submit.prevent="send">
            <input type="text" placeholder="name" required>
            <input type="email" placeholder="email" required>
            <textarea name="message" id="" cols="30" rows="4" placeholder="message"></textarea>
            <div class="button-holder">

                <button type="button" class="cancel-button" @click="closeModal()">
                    Cancel
                </button>
                <button class="send-button">
                    <p v-if="!sending" style="display:flex;justify-content:space-between;align-items:center;width:100%;margin:0;padding:0"
                    >Send <font-awesome-icon icon="paper-plane" ></font-awesome-icon></p>
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
      animation: 'none'
    }
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
          this.alert.txt = 'Congrats! You took your first Step to expand your Buisness'
          this.alert.color = '#4CAF50'
          this.$refs.alert.open()
          e.target.reset()
          this.sending = false
        })
        .catch( error  => {
          this.sentFailed = true
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

.contact-modal{
    position: fixed;
    display: none;
    right: 5%;
    bottom: 75px;
    width: 350px;
    height: 361px;
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
        height: 311px;
        z-index: 1000000;


        input{
            width: 100%;
            border: 1px solid hsla(0, 0%, 65%, 0.4);
            border-radius: 5px;
            background-color: transparent;
            padding: 12px;
            font-size: 14px;

            &:focus{
                outline: none;
                border-bottom: 2px solid #225E9B;
                animation-name: pulse;
                animation-duration: 0.3s;

                &::placeholder{
                    color: #225E9B !important;
                    -webkit-transform: translateX(10px);
                    -moz-transform: translateX(10px);
                  }
            }

            &::-webkit-input-placeholder{
                transition: all 0.3s ease;
                color: #101010 ;
                font-weight: 200 ;
                font-size: 0.9rem;
            }

            &::-ms-input-placeholder{
                transition: all 0.3s ease;
                color: #101010 !important;
                font-weight: 200 !important;
                font-size: 0.9rem;
            }
        }

        textarea{
            width: 100%;
            border: 1px solid hsla(0, 0%, 65%, 0.4);
            border-radius: 5px;
            background-color: transparent;
            padding: 12px;
            font-size: 14px;

            &:focus{
                outline: none;
                border-bottom: 2px solid #225E9B;
                animation-name: pulse;
                animation-duration: 0.3s;
                &::placeholder{
                    color: #225E9B !important;
                    -webkit-transform: translateX(10px);
                    -moz-transform: translateX(10px);
                  }
            }

            &::-webkit-input-placeholder{
                transition: all 0.3s ease;
                color: #101010 ;
                font-weight: 200 ;
                font-size: 0.9rem;
            }

            &::-ms-input-placeholder{
                transition: all 0.3s ease;
                color: #101010 !important;
                font-weight: 200 !important;
                font-size: 0.9rem;
            }
        }

        .button-holder{
            width: 100%;
            display: flex;
            justify-content: space-between;
            align-items: center;

            .cancel-button{
                border: none;
                background-color: transparent;
                width: 80px;
                outline: none;
                display: flex;
                justify-content: center;
                align-items: center;
                padding: 10px 15px;
                border: solid 1px #FD5D73;
                border-radius: 4px;
                color: #FD5D73;
                font-size: 1rem;
                transition: all 0.3s ease-in-out;
                font-weight: 600;

                &:hover{
                    width: 120px;
                    background-color: #FD5D73;
                    color: #ffffff;
                }
            }

            .send-button{
                width: 105px;
                background-color: transparent;
                letter-spacing: 0.1rem;
                border: none;
                outline: none;
                display: flex;
                justify-content: center;
                align-items: center;
                padding: 10px 15px;
                border: 1px solid #225E9B;
                border-radius: 4px;
                color: #225E9B;
                font-size: 1rem;
                font-weight: 600;
                transition: all 0.3s ease-in-out;

                &:hover{
                    width: 140px;
                    background-color: #225E9B;
                    color: #ffffff;

                    .loading{
                        color: #ffffff !important;
                        font-size: 1.4rem !important;
                    }
                }
            }
        }
    }
}

.loading{
    color: #225E9B;
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
