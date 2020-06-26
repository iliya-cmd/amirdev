<template>
    <div class="business-container w-100 d-flex">

        <div class="content d-flex">
            <div class="d-flex flex-column"
            data-aos="fade-left" data-aos-easing="ease" data-aos-delay="100" data-aos-once="true" data-aos-duration="400">
                <h3>Helping You <span class="pinked-growing">Grow</span> You'r Business</h3>
                <p>I help you're business to grow by building professional websites. A greate website, is essential for your business to become well known.
                    Plus, having a good UI and UX turns your visitors to permanant clients.
                </p>
                <button class="bulid-your-buisness" @click="openModal()">
                    <span >
                        <img src="~@/assets/buisness.png" alt="">
                    </span>
                    Build Your Buisness
                </button>
            </div>
        </div>

        <div class="business-photo1">
            <div class="business-img1"
            data-aos="fade-up" data-aos-easing="ease" data-aos-delay="100" data-aos-once="true" data-aos-duration="400"
            v-bind:style="{ backgroundPositionX: backX1 + 'px' , backgroundPositionY: backY1 + 'px' }"
            @mousemove.self="photo1Change($event)"></div>
        </div>

        <div class="business-photo2">
            <div class="business-img2"
            data-aos="fade-down" data-aos-easing="ease" data-aos-delay="100" data-aos-once="true" data-aos-duration="400"
            v-bind:style="{ backgroundPositionX: backX2 + 'px' , backgroundPositionY: backY2 + 'px' }"
            @mousemove.self="photo2Change($event)"></div>
        </div>

    </div>
</template>

<script>
export default {
  data () {
    return {
      showBuisness: false,
      backX1: 0,
      backY1: 0,
      backX2: 0,
      backY2: 0
    }
  },
  methods: {
    photo1Change: function (event) {
      this.backX1 = -(event.offsetX) / 1.8
    },
    photo2Change: function (event) {
      this.backX2 = -((event.offsetX) / 1.8)
    },
    openModal(){
        Event.$emit('toggleContactModal');
    }
  }
}
</script>

<style lang="scss">

    .business-container{
        justify-content: space-between;
        padding: 160px 49px 10px;
        width: 100% !important;
        // height: 500px;
        background-color: #ffffff;
        margin-top: 40px !important;
        margin-bottom: 40px;
    }

    .content{
        width: 31%;
        justify-content: flex-start;
        color: #000000;
        align-items: center;
        height: 500px;
        cursor: default;

        h3{
            direction: ltr;
            text-align: left;
            font-size: 40px;
            font-weight: bold;
            line-height: 1.4em;
            cursor: default;

        }

        div>p{
            margin-top: 30px;
            color: #808080;
            font-size: 22px;
            line-height: 2.3rem;
            word-spacing: 0.08rem;
            width: 100%;
            direction: ltr;
            text-align: left;
        cursor: default;

        }
    }

    .pinked-growing{
        color: #F07A6A !important;
        margin-right: 10px;
        font-weight: bold;
    }

    .bulid-your-buisness{
        position: relative;
        display: flex;
        flex-wrap: nowrap;
        justify-content: center;
        align-items: center;
        width: 250px;
        padding: 10px 5px;
        margin-bottom: 60px !important;
        border: none;
        outline: none;
        border-radius: 10px;
        background-color: #F07A6A;
        color: #ffffff !important;
        font-size: 18px;
        font-weight: 700;
        transition: 0.3s ease;
        height: 60px;
        transition: all 0.3s ease;
        box-shadow: 0 10px 10px 0 rgba($color: #F07A6A, $alpha: .14), 0 3px 3px 0 rgba($color: #F07A6A, $alpha: .06);

        span{
            margin-right: 15px;
            display: flex;

            img{
                width: 32px;
            }
        }

        &:hover{
            box-shadow: none;
        }
    }

    .business-photo1{
        display: flex;
        width: 31%;
        position: relative;
        align-items: flex-start;
        height: 500px;
        background-color: #ffffff;

        .business-img1{
            position: absolute;
            border-radius: 4px;
            margin-top: -25px;
            width: 100%;
            height: 450px;
            left: 0;
            top: 0;
            background-image: url(~@/assets/Buisness1.jpg);
            background-size: cover;
            background-repeat: no-repeat;
            background-position: center;
            overflow: hidden;
            cursor: pointer;

        }
    }

    .business-photo2{
        display: flex;
        width: 31%;
        position: relative;
        align-items: flex-end;
        height: 500px;
        padding-bottom: 40px;
        background-color: #ffffff;

        .business-img2{
            height: 450px;
            border-radius: 4px;
            margin-bottom: -25px;
            width: 100%;
            background-image: url(~@/assets/Buisness.jpg);
            background-size: cover;
            background-repeat: no-repeat;
            background-position: center;
            overflow: hidden;
            cursor: pointer;

        }
    }

    @media (max-width: 950px){

        .business-container{
            flex-wrap: wrap;
            margin-top: 0;
            padding-top: 0px;
            justify-content: space-between;
        }

        .content{
            width: 90%;
            justify-content: center;
        }

        .business-photo1{
            width: 45%;

            img{
                height: auto !important;
            }
        }

        .business-photo2{
            width: 45%;

            img{
                height: auto !important;

            }
        }
    }

    @media (max-width: 750px){

        .business-container{

            flex-wrap: wrap;
            width: 100% !important;
            padding: 90px 0px 10px !important;
            margin-top: 70px !important;
            padding-top: 0px;
            justify-content: flex-start !important;
            align-content: center !important;
        }

        .content{

            justify-content: center !important;
            padding-left: 31px !important;
            text-align: center !important;
            margin-bottom: 0 !important;
        }

        .business-photo1{
            margin-top: 70px !important;
            width: 100% !important;
            height: 300px !important;
            justify-content: center !important;
            align-items: center !important;
            margin-bottom: 20px !important;

            .business-img1{
                width: 94% !important;
                display: block !important;
                margin-left: 21px;
                height: 400px !important;
                background-position-x: center !important;
                background-position-y: center !important;
            }
        }

        .business-photo2{
            margin-top: 150px !important;
            width: 100% !important;
            height: 300px !important;
            justify-content: center !important;
            align-items: center !important;
            // overflow: hidden;

            .business-img2{
                width: 94% !important;
                display: block !important;
                margin-left: 0px;
                height: 400px !important;
                background-position-x: center !important;
                background-position-y: center !important;
            }
        }
    }
    @media (max-width: 550px){

        .business-container{

            flex-wrap: wrap;
            width: 100% !important;
            padding: 90px 31px 0px !important;
            margin-top: 0px !important;
            padding-top: 0px;
            justify-content: flex-start !important;
            align-content: center !important;
        }

        .content{

            justify-content: center !important;
            padding-left: 0px !important;
            text-align: center !important;
            margin-bottom: 0 !important;

            h3{
                width: 100% !important;
                font-size: 30px !important;
            }
        }

        .business-photo1{
            margin-top: 70px !important;
            width: 100% !important;
            height: 300px !important;
            justify-content: center !important;
            align-items: center !important;
            overflow: hidden;

            .business-img1{
                width: 100% !important;
                height: 300px !important;
                margin: auto;
                background-position-x: center !important;
                background-position-y: center !important;
            }
        }

        .business-photo2{
            margin-top: 70px !important;
            width: 100% !important;
            height: 300px !important;
            justify-content: center !important;
            align-items: center !important;
            overflow: hidden;

            .business-img2{
                width: 100% !important;
                margin: auto;
                height: 300px !important;
                background-position-x: center !important;
                background-position-y: center !important;

            }
        }
    }

@media (min-width: 1370px){

    .business-container{
        justify-content: space-between;
        padding: 200px 49px 10px !important;
    }

}

</style>
