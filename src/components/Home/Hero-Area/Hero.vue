<template>
    <header class="hero-container" id="top" >

        <div class="hero-content-container fadeInLeft del-200"
        >
            <h1 class="hero-first-line d-flex align-items-center fadeInLeft del-400"
            >We build <br>
            apps & websites
            </h1>
            <div class="d-flex mt-2 fadeInLeft del-500"  >
                <h2 class="hero-second-line d-flex">The place to create professional websites</h2>
            </div>

            <div class="hero-phone-buttons">

                <button
                class="phone-hero-action-button d-flex align-items-center fadeInLeft del-700" @click="showContactModal()">
                    <p>
                        <span>
                            Order your website
                        </span>
                    </p>
                </button>

                <a  href="#our-works" v-smooth-scroll="{ duration: 1000 }"
                class="hero-seeourwork-button d-flex align-items-center fadeInLeft del-700">
                    <p>
                        <span>
                            See our works
                        </span>
                    </p>
                </a>

            </div>

            <button
            class="hero-action-button d-flex align-items-center fadeInLeft del-700" @click="showContactModal()">
                <p>
                    <span>
                        Order your website
                    </span>
                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="angle-right" class="svg-inline--fa fa-angle-right fa-w-8 icon" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512"><path fill="currentColor" d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z"></path></svg>
                </p>
            </button>

            <div class="seeourwork-div" >
                <a href="#our-works" v-smooth-scroll="{ duration: 1000 }">
                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="angle-down" class="fadeInLeft del-1500 svg-inline--fa fa-angle-down fa-w-10 icon" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill="currentColor" d="M143 352.3L7 216.3c-9.4-9.4-9.4-24.6 0-33.9l22.6-22.6c9.4-9.4 24.6-9.4 33.9 0l96.4 96.4 96.4-96.4c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9l-136 136c-9.2 9.4-24.4 9.4-33.8 0z"></path></svg>
                </a>
                <a href="#our-works" class="see-our-work fadeInLeft del-900" v-smooth-scroll="{ duration: 1000 }">
                    See our works
                </a>
            </div>
        </div>
    </header>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  methods: {
      showContactModal: () => {
        Event.$emit('toggleContactModal')
      }
  }
}
</script>

<style lang="scss"  >

    .hero-container{
        background: url('~@/assets/Hero-back.svg');
        background-position: bottom right !important;
        -webkit-background-size: cover;
        -moz-background-size: cover;
        -o-background-size: cover;
        background-size: cover;
        background-repeat: no-repeat;
        width: 100% !important;
        height: 690px;
        position: relative !important;
        color: #ffffff;
    }

    .hero-content-container{

        position: absolute;
        top: 170px;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        padding-left: 50px ;
    }

    .hero-phone-buttons{
        display: none;
    }

    .hero-first-line{
        word-spacing: 0.1rem;
        text-align: left;
        font-size: 3.5rem;
        font-family: 'Helvetica', sans-serif !important;
        font-weight: 600;
        position: relative;
        cursor: default;

    }
    .hero-second-line{
        word-spacing: 0.1rem;
        font-family: 'Helvetica', sans-serif !important;
        font-weight: 300 !important;
        font-size: 1.6rem;
        position: relative;
        cursor: default;

    }

    .hero-action-button{
        display: flex;
        font-family: 'Helvetica', sans-serif;
        border: none;
        outline: none;
        position: relative;
        border-radius: 10px;
        background: linear-gradient(to right, #F07A6A , #E8496D);
        font-weight: 600;
        transition: width 0.3s ease;
        width: 190px;
        height: 48px;
        justify-content: flex-start;
        margin-top: 60px;
        align-items: center;
        transition: width 0.5s ease;
        padding: 0 13.89px;

        p{
            display: flex;
            justify-content: flex-start;
            margin: 0;
            padding: 0;
            text-align: center;

            span{
                color: #ffffff;
                font-size: 19px;
                letter-spacing: 0.005em;
                font-weight: 500;

            }
        }

        .icon{
            display: none;
            position: absolute;
            right: 15px;
            top: 14px;
            color: #ffffff;
            width: 20px;
            height:20px;
        }

        @keyframes fade-icon {
            0%{
                opacity: 0;
            }

            100%{
                opacity: 1;
            }
        }

        &:hover{
            color: #ffffff !important;
            width: 230px;
            border: none !important;
            padding-right: 5px;
            // background-clip: border-box, padding-box;
            // background-origin: border-box, padding-box;

            p{

                span{
                    top: 11px;
                    left: 16px;
                    color: #ffffff !important;
                    background: transparent !important ;
                    -webkit-background-clip: content-box !important;
                    background-clip: content-box !important;
                    -webkit-text-fill-color: #ffffff;
                    letter-spacing: 0.005em !important;
                    font-weight: 500;
                }
            }

            .icon{
                animation: 0.5s fade-icon both;
                display: block;
            }


        }
    }

    .seeourwork-div{
        display: flex;
        justify-content: flex-start;
        align-items: flex-end;

        .see-our-work{
            color: #ffffff;
            text-decoration: none;
            display: flex;
            letter-spacing: 0.1rem !important;
            font-size: 16px;
            cursor: pointer;
            font-weight: 600;
            width: 131px !important;
            justify-content: flex-start;
            align-items: center;
            margin-top: 48px;
            border-bottom: 3px solid transparent;
            background:
                linear-gradient(to right, #1D1A5E, #1D1A5E),
                linear-gradient(to right, #2B92E1 , #68E3F1);
            background-clip: padding-box, border-box;
            background-origin: padding-box, border-box;

            &:hover{
                text-decoration: none;
                color: #ffffff;
            }

        }

        a{
            color: #ffffff;
            text-decoration: none;
            display: flex;

            &:hover{
                text-decoration: none;
                color: #ffffff;
            }

        }
        .icon{
            width: 25px;
            height: 25px;
            padding: 3px 2px 2px 2px;
            margin-right: 10px;
            border: 2px #68E3F1 solid;
            border-radius: 50%;
            cursor: pointer;

        }
    }

    @media (max-width: 1050px){

        .hero-container{
            background-position: top !important;
            -webkit-background-size: 100%;
            -moz-background-size: 100%;
            -o-background-size: 100%;
            background-size: 100%;
        }

        .hero-first-line{
            font-size: 2.5rem !important;

        }

        .hero-second-line{
            font-size: 1.4rem !important;
        }

        .see-our-work{
            margin-top: 55px !important;
        }
    }

    @media (max-width: 985px){

        .hero-container{
             background-position: top !important;
            -webkit-background-size: 100%;
            -moz-background-size: 100%;
            -o-background-size: 100%;
            background-size: 100%;
        }

        .hero-first-line{
            font-size: 2.3rem !important;

        }

        .hero-action-button{
            margin-top: 45px !important;
        }

        .see-our-work{
            margin-top: 40px !important;
        }
    }

    @media (max-width: 900px){

        .hero-container{
             background-position: top !important;
            -webkit-background-size: 100%;
            -moz-background-size: 100%;
            -o-background-size: 100%;
            background-size: 100%;

        }

        .hero-first-line{
            font-size: 2.5rem !important;

        }

        .see-our-work{
            margin-top: 45px !important;
        }
    }

    @media (max-width: 850px){

        .hero-container{
             background-position: top !important;
            -webkit-background-size: 125%;
            -moz-background-size: 125%;
            -o-background-size: 125%;
            background-size: 125%;
        }

        .see-our-work{
            margin-top: 40px !important;
        }

        .hero-first-line{
            font-size: 2.5rem !important;

        }
        .hero-second-line{
            font-size: 1.3rem !important;

        }
    }

    @media (max-width: 750px){

        .hero-container{
             background-position: top !important;
            -webkit-background-size: 135%;
            -moz-background-size: 135%;
            -o-background-size: 135%;
            background-size: 135%;
        }

        .see-our-work{
            margin-top: 40px !important;
        }

    }

    @media (max-width: 720px){

        .hero-container{
            background-position: top !important;
            -webkit-background-size: 140%;
            -moz-background-size: 140%;
            -o-background-size: 140%;
            background-size: 140%;
        }

        .see-our-work{
            margin-top: 40px !important;
        }

    }

    @media (max-width: 650px){

        .hero-container{
            background-image: url(~@/assets/Phone-laptop.svg) , url(~@/assets/Phone-back.svg);
            background-size: 60%, 100% !important;
            background-position: top !important;
            background-repeat: no-repeat;
            height: 700px !important;

        }

        .hero-content-container{
            width: 100% !important;
            padding: 0 31px !important;
            align-items: center !important;

            .hero-first-line{
                font-size: 2.7rem !important;
                font-weight: 600 !important;
                width: 100% !important;
                margin-top: 30%;
                text-align: center !important;
                justify-content: center !important;
            }

            .hero-second-line{
                font-size: 1.4rem !important;
                font-weight: 300 !important;
                width: 100% !important;
                text-align: center !important;
                justify-content: center !important;
            }

            .seeourwork-div{
                display: none ;
            }

            >button.hero-action-button{
                display: none !important;
            }

            .hero-phone-buttons{
                width: 100% !important;
                display: flex !important;
                flex-direction: row !important;
                justify-content: space-between;
                align-content: center;

                >button.phone-hero-action-button{
                    display: flex;
                    color: #ffffff;
                    font-family: 'Helvetica', sans-serif;
                    border: none;
                    outline: none;
                    position: relative;
                    border-radius: 5px;
                    background: linear-gradient(to right, #F07A6A , #E8496D);
                    font-weight: 600;
                    font-size: 19px;
                    justify-content: center;
                    margin-top: 45px;
                    align-items: center;
                    transition: width 0.5s ease;
                    height: 60px;
                    width: 45% !important;

                    p{
                        margin: 0;
                        padding: 0;
                    }
                }

                a.hero-seeourwork-button{
                    color: #ffffff;
                    display: flex !important;
                    border-radius: 5px !important;
                    font-family: 'Helvetica', sans-serif;
                    font-size: 19px;
                    border: none;
                    outline: none;
                    position: relative;
                    background: linear-gradient(to right, #2B92E1 , #68E3F1);
                    font-weight: 600;
                    transition: width 0.3s ease;
                    width: 190px;
                    height: 60px;
                    justify-content: center;
                    margin-top: 45px;
                    align-items: center !important;
                    width: 45% !important;

                    p{
                        margin: 0;
                        padding: 0;
                    }

                    &:hover{
                        text-decoration: none;
                    }
                }
            }
        }

    }

    @media (max-width: 500px){
        .hero-container{
            background-image: url(~@/assets/Phone-laptop.svg) , url(~@/assets/Phone-back.svg);
            background-size: 65%, 100% !important;
            background-position: top !important;
            background-repeat: no-repeat;
            background-position: top !important;
            height: 600px !important;

        }

        .hero-first-line{
                font-size: 2.5rem !important;
                margin-top: 27%  !important;
        }

        .phone-hero-action-button{
            font-size: 17px !important;
            height: 50px !important;

        }

        a.hero-seeourwork-button{
            font-size: 17px !important;
            height: 50px !important;

        }
    }

    @media (max-width: 455px){
        .hero-container{
            background-image: url(~@/assets/Phone-laptop.svg) , url(~@/assets/Phone-back.svg);
            background-size: 60%, 100% !important;
            background-position: top !important;
            background-repeat: no-repeat;
            height: 600px !important;

        }

        .hero-first-line{
                font-size: 2rem !important;
                margin-top: 25%  !important;
        }

        .phone-hero-action-button{
            font-size: 15px !important;
            height: 50px !important;

        }

        .hero-content-container{

            .hero-second-line{
                font-size: 1.4  rem !important;
            }
        }

        a.hero-seeourwork-button{
            font-size: 15px !important;
            height: 50px !important;

        }
    }

    @media (max-width: 392px){
        .hero-container{
            background-image: url(~@/assets/Phone-laptop.svg) , url(~@/assets/Phone-back.svg);
            background-size: 65%, 100% !important;
            background-position: top !important;
            background-repeat: no-repeat;
            height: 540px !important;

        }

        .phone-hero-action-button{
            font-size: 13px !important;
            height: 40px !important;

        }

        .hero-content-container{

            .hero-first-line{
                font-size: 2.2rem !important;
                margin-top: 25%  !important;
            }

            .hero-second-line{
                font-size: 1.4  rem !important;
            }
        }

        a.hero-seeourwork-button{
            font-size: 13px !important;
            height: 40px !important;

        }
    }

    @media (max-width: 380px){
        .hero-container{
            background-image: url(~@/assets/Phone-laptop.svg) , url(~@/assets/Phone-back.svg);
            background-size: 70%, 100% !important;
            background-position: top !important;
            background-repeat: no-repeat;
            height: 500px !important;

        }

        .hero-phone-buttons{

        }

        .phone-hero-action-button{
            font-size: 13px !important;
            height: 40px !important;
            margin-top: 35px !important;

        }

        .hero-content-container{

            .hero-first-line{
                font-size: 2.2rem !important;
                margin-top: 20%  !important;
            }

            .hero-second-line{
                font-size: 1.4  rem !important;
            }
        }

        a.hero-seeourwork-button{
            font-size: 13px !important;
            height: 40px !important;
            margin-top: 35px !important;

        }
    }

    @media (max-width: 368px){
        .hero-container{
            background-image: url(~@/assets/Phone-laptop.svg) , url(~@/assets/Phone-back.svg);
            background-size: 70%, 100% !important;
            background-position: top !important;
            background-repeat: no-repeat;
            height: 540px !important;

        }

        .hero-phone-buttons{

        }

        .phone-hero-action-button{
            font-size: 11px !important;
            height: 40px !important;
            margin-top: 35px !important;

        }

        .hero-content-container{

            .hero-first-line{
                font-size: 2.2rem !important;
                margin-top: 20%  !important;
            }

            .hero-second-line{
                font-size: 1.4rem !important;
            }
        }

        a.hero-seeourwork-button{
            font-size: 11px !important;
            height: 40px !important;
            margin-top: 35px !important;

        }
    }
    @media (max-width: 340px){
        .hero-container{
            background-image: url(~@/assets/Phone-laptop.svg) , url(~@/assets/Phone-back.svg);
            background-size: 70%, 100% !important;
            background-position: top !important;
            background-repeat: no-repeat;
            height: 550px !important;

        }

        .hero-phone-buttons{

        }

        .phone-hero-action-button{
            font-size: 11px !important;
            height: 40px !important;
            margin-top: 35px !important;

        }

        .hero-content-container{

            .hero-first-line{
                font-size: 2.3rem !important;
                margin-top: 20% !important;
            }

            .hero-second-line{
                font-size: 1.4rem !important;
            }
        }

        a.hero-seeourwork-button{
            font-size: 11px !important;
            height: 40px !important;
            margin-top: 35px !important;

        }
    }
</style>
