<template>
    <header class="w-100 hero-container">

        <div class="hero-content-container fadeInLeft del-200"
        >
            <h1 class="hero-first-line d-flex align-items-center fadeInLeft del-400"
            >We build <br>
            apps & websites
            </h1>
            <div class="d-flex mt-2 fadeInLeft del-500"  >
                <h2 class="hero-second-line d-flex">Expand your buisness Online</h2>
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

            <a href="#our-works" class="see-our-work fadeInLeft del-900" v-smooth-scroll="{ duration: 1000 }">See our works</a>
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
        margin-top: 0 !important;
        background-image: url(~@/assets/Hero-back.png);
        background-position: right 56px !important;
        background-size: 75% ;
        width: 100%;
        height: 700px;
        position: relative;
        color: #000000;
        background-repeat: no-repeat;
    }

    .hero-content-container{

        position: absolute;
        top: 170px;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        padding-left: 50px ;
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
        position: relative;
        border: 4px solid transparent;
        border-radius: 10px;
        background:
            linear-gradient(to right, white, white),
            linear-gradient(to right, #3ED6D3 , #9548D9);
        background-clip: padding-box, border-box;
        background-origin: padding-box, border-box;
        font-weight: 600;
        transition: width 0.3s ease;
        width: 190px;
        height: 48px;
        justify-content: center;
        margin-top: 60px;
        align-items: center;
        transition: width 0.5s ease;

        p{
            width: 100%;
            display: flex;
            justify-content: flex-end;
            margin: 0;
            padding: 0;
            padding-right: 6px;
            text-align: center;

            span{
                background: linear-gradient(to right, #3ED6D3 , #9548D9 44%);
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
                position: absolute;
                top: 6px;
                left: 10px;
                font-size: 19px;
                letter-spacing: 0.005em;
                font-weight: 500;

            }
        }

        .icon{
            display: none;
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
            background:
            linear-gradient(to right, #3ED6D3 , #9548D9) !important;
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

    .see-our-work{
        color: #000000;
        text-decoration: none;
        display: flex;
        letter-spacing: 0rem !important;
        font-size: 16px;
        cursor: pointer;
        font-weight: 500;
        width: 104px !important;
        justify-content: flex-start;
        align-items: center;
        margin-top: 90px;
        border-bottom: 3px solid transparent;
        background:
            linear-gradient(to right, white, white),
            linear-gradient(to right, #3ED6D3 , #9548D9);
        background-clip: padding-box, border-box;
        background-origin: padding-box, border-box;

        &:hover{
            text-decoration: none;
            color: #000000;
        }
    }

    @media (max-width: 1050px){

        .hero-container{
        background-size: 80% !important;

        }

        .hero-first-line{
            font-size: 2.5rem !important;

        }

        .see-our-work{
            margin-top: 55px !important;
        }
    }

    @media (max-width: 770px){

        .hero-container{
            background-size: 90% !important;
            width: 100%;
            height: 500px;
            background-position: center;
            background-size: cover;
            position: relative;
        }

        .see-our-work{
            margin-top: 40px !important;
        }

        .hero-action-button{
            width: 170px !important;
            height: 45px !important;
            margin-top: 40px !important;

            span{
                font-size: 17px !important;
                left: 8px !important;
                top: 6px !important;
            }

            &:hover{
                width: 200px !important;

                 span{
                font-size: 17px !important;
                left: 12px !important;
                top: 10px !important;
                }
            }
        }

        .hero-first-line{
            font-size: 25px !important;

        }
        .hero-second-line{
            font-size: 18px !important;

        }
    }

    @media (max-width: 540px){

        .hero-container{
            background-image: url(~@/assets/Hero-back.png);
            background-attachment: inherit;
            width: 100%;
            height: 400px;
            background-position: center;
            background-size: cover;
            position: relative;
        }

        .see-our-work{
            margin-top: 40px !important;
        }

        .hero-action-button{
            width: 150px !important;
            height: 45px !important;
            margin-top: 40px !important;
            border-width: 3px !important;

            span{
                font-size: 15px !important;
                left: 8px !important;
                top: 9px !important;
            }

            &:hover{
                width: 200px !important;

                 span{
                    font-size: 15px !important;
                    left: 12px !important;
                    top: 12px !important;
                }
            }
        }

        div.hero-content-container{
            top: 130px !important;
            padding-left: 20px ;

            >div{
                flex-direction: column;
                align-items: flex-start;

                h3{
                    margin-left: 0 !important;
                }
            }
        }

        .hero-first-line{
            font-size: 23px !important;

        }
        .hero-second-line{
            font-size: 15px !important;

        }
    }

    @media (max-width: 480px){

        .hero-container{
            background-image: url(~@/assets/Hero-back.png);
            width: 100%;
            height: 300px;
            background-position: center;
            background-size: cover;
            position: relative;
        }

        .see-our-work{
            margin-top: 20px !important;
            font-size: 9px !important;
            border-width: 2px !important;
            width: 71px !important;
        }

        .hero-action-button{
            width: 100px !important;
            height: 25px !important;
            margin-top: 10px !important;
            border-width: 2px !important;

            span{
                font-size: 10px !important;
                left: 5px !important;
                top: 3px !important;
            }

            .icon{
                width: 11px !important;
                height: 11px !important;
            }

            &:hover{
                width: 120px !important;

                 span{
                    font-size: 10px !important;
                    left: 7px !important;
                    top: 5px !important;
                }
            }
        }

        div.hero-content-container{
            top: 98px !important;
            padding-left: 20px ;


            >div{
                flex-direction: column;
                align-items: flex-start;

                h3{
                    margin-left: 0 !important;
                }
            }
        }

        .hero-first-line{
            font-size: 18px !important;

        }
        .hero-second-line{
            font-size: 13px !important;
            width: 80% !important;
            text-align: left;
        }

    }
</style>
