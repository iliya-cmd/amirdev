<template>
    <div class="needs-card-container">

        <!-- Left Column before phone-->
        <div class="d-flex flex-column">
            <div class="d-flex flex-column needs-card-holder"
            data-aos="bounce-in-left" data-aos-once="true">
                <div class="left-needs-card-header"
                @mouseover="addJelly(data[3])"
                @mouseleave="rmJelly(data[3])">
                    <div class="needs-card-heading"
                    :class="{'animated pulse': data[3].jelly }"
                    style="animation-duration: 0.5s"
                    >
                        <h4>{{ data[3].head1 }}</h4>
                        <span>{{ data[3].head2 }}</span>
                    </div>
                    <div class="needs-card-image">
                        <font-awesome-icon
                        :icon=" data[3].icon"
                        size="3x"
                        class="all-needs-icon">
                        </font-awesome-icon>
                    </div>
                </div>
                <div class="left-needs-card-content">
                    <p>{{ data[3].content}}</p>
                </div>
            </div>

            <div class="d-flex flex-column needs-card-holder"
            data-aos="bounce-in-left" data-aos-once="true">
                <div class="left-needs-card-header"
                @mouseover="addJelly(data[1])"
                @mouseleave="rmJelly(data[1])">
                    <div class="needs-card-heading"
                    :class="{'animated pulse': data[1].jelly }"
                    style="animation-duration: 0.5s"
                    >
                        <h4>{{ data[1].head1 }}</h4>
                        <span>{{ data[1].head2 }}</span>
                    </div>
                    <div class="needs-card-image">
                       <font-awesome-icon
                        :icon="data[1].icon"
                        size="3x"
                        class="all-needs-icon">
                        </font-awesome-icon>
                    </div>
                </div>
                <div class="left-needs-card-content">
                    <p>{{ data[1].content}}</p>
                </div>
            </div>

        </div>

        <!-- Middle coumn with the phone -->
        <Tilt :max="40" :reverse="false">
            <img class="phone w-100 " src="~@/assets/phone-lg.svg" alt=""
            data-aos="flip-y" data-aos-once="true">
        </Tilt>

        <!-- Right column after phone -->
        <div class="d-flex flex-column">
            <div class="d-flex flex-column needs-card-holder"
            data-aos="bounce-in-right" data-aos-once="true">
                <div class="right-needs-card-header"
                @mouseover="addJelly(data[2])"
                @mouseleave="rmJelly(data[2])">
                    <div class="needs-card-image">
                        <font-awesome-icon
                        :icon="data[2].icon"
                        size="3x"
                        class="all-needs-icon">
                        </font-awesome-icon>
                    </div>
                    <div class="needs-card-heading"
                    :class="{'animated pulse': data[2].jelly }"
                    style="animation-duration: 0.5s"
                    >
                        <h4>{{ data[2].head1 }}</h4>
                        <span>{{ data[2].head2 }}</span>
                    </div>
                </div>
                <div class="right-needs-card-content">
                    <p>{{ data[2].content}}</p>
                </div>
            </div>

            <div class="d-flex flex-column needs-card-holder"
            data-aos="bounce-in-right" data-aos-once="true">
                <div class="right-needs-card-header"
                @mouseover="addJelly(data[0])"
                @mouseleave="rmJelly(data[0])">
                    <div class="needs-card-image">
                        <slot></slot>
                    </div>
                    <div class="needs-card-heading"
                    :class="{'animated pulse': data[0].jelly }"
                    style="animation-duration: 0.5s"
                    >
                        <h4>{{ data[0].head1 }}</h4>
                        <span>{{ data[0].head2 }}</span>
                    </div>
                </div>
                <div class="right-needs-card-content">
                        <p>{{ data[0].content}}</p>
                </div>
            </div>

        </div>

    </div>
</template>

<script>
import Tilt from './tilt-component/Tilt'
export default {
  components: {
    Tilt
  },
  props: {
    data: {
      type: Array,
      required: true
    }
  },
  methods: {
    addJelly (data) {
      data.jelly = true
    },
    rmJelly (data) {
      data.jelly = false
    }
  }
}
</script>

<style lang="scss">
.needs-card-container{
    width: 100%;
    display: grid;
    grid-template-columns: 35% 30% 35%;

    .needs-card-holder{
                width: 100%;
                padding: 20px 15px;
                align-self: start;

                .left-needs-card-header{
                    display: flex;
                    justify-content: flex-end;

                     .needs-card-heading{
                        width: 75%;
                        display: flex;
                        flex-direction: column;
                        justify-content: center;
                        align-items: stretch;
                        padding-right: 15px;
                        height: 65px;
                        h4{
                            font-size: 26px;
                            font-weight: 500;
                            margin-top: 10px;
                            color: #E8496D;
                            direction: rtr;
                            text-align: right;
                            margin-left: 0 !important;
                            cursor: default;
                            margin-bottom: 0;

                        }

                        span{
                            margin-top: 8px;
                            direction: rtr;
                            text-align: right;
                            font-size: 16px;
                            font-weight: 500;
                            word-spacing: 0.2rem;
                            letter-spacing: 0.05rem;
                            color: #000000;
                            cursor: default;
                        }
                    }

                    .needs-card-image{
                        display: flex;
                        align-self: center;
                        -webkit-box-shadow: 0px 0px 3px 0px rgba(255,93,115,1);
                        -moz-box-shadow: 0px 0px 3px 0px rgba(255,93,115,1);
                        box-shadow: 0px 0px 3px 0px rgba(255,93,115,1);
                        border: 1px solid #E8496D;
                        padding: 10px;
                        border-radius: 4px;
                        transition: all 0s ease;

                        svg{
                            color: #E8496D;
                            font-size: 3rem;
                            transition: all 0s ease;
                        }

                    }
                    &:hover{
                        .needs-card-image{
                            transform: rotateZ(360deg);
                            background-color: #E8496D;
                            transition: 0.5s ease;
                            svg{
                                color: #ffffff;
                            }
                        }
                    }
                }

                .right-needs-card-header{
                    display: flex;

                     .needs-card-heading{
                        width: 75%;
                        display: flex;
                        flex-direction: column;
                        justify-content: center;
                        align-items: flex-start;
                        padding-left: 15px;
                        height: 65px;
                        h4{
                            font-size: 26px;
                            font-weight: 500;
                            color: #E8496D;
                            margin-top: 10px;
                            direction: ltr;
                            text-align: left;
                            margin-left: 0 !important;
                            cursor: default;
                            margin-bottom: 0;

                        }

                        span{
                             margin-top: 8px;
                            direction: ltr;
                            text-align: left;
                            font-size: 16px;
                            font-weight: 500;
                            word-spacing: 0.2rem;
                            letter-spacing: 0.05rem;
                            color: #000000;
                            cursor: default;
                        }
                    }

                    .needs-card-image{
                        display: flex;
                        align-self: center;
                        -webkit-box-shadow: 0px 0px 3px 0px rgba(255,93,115,1);
                        -moz-box-shadow: 0px 0px 3px 0px rgba(255,93,115,1);
                        box-shadow: 0px 0px 3px 0px rgba(255,93,115,1);
                        border: 1px solid #E8496D;
                        padding: 10px;
                        border-radius: 4px;
                        transition: all 0s ease;

                        svg{
                            color: #E8496D;
                            font-size: 3rem;
                            transition: all 0s ease;

                        }

                    }
                    &:hover{

                        .needs-card-image{
                            transform: rotateZ(360deg);
                            background-color: #E8496D;
                            transition: 0.5s ease;
                            svg{
                                color: #ffffff;
                            }
                        }
                    }
                }

                .left-needs-card-content{
                    width: 100%;
                    display: flex;
                    justify-content: flex-end;
                    margin-top: 30px;
                    align-items: center;
                    overflow: hidden;

                    p{
                        width: 100%;
                        display: flex;
                        direction: ltr;
                        text-align: right;
                        color: #808080 !important;
                        line-height: 1.9rem;
                        cursor: default;
                    }
                }

                .right-needs-card-content{
                    width: 100%;
                    display: flex;
                    justify-content: flex-start;
                    margin-top: 30px;
                    align-items: center;
                    overflow: hidden;

                    p{
                        width: 100%;
                        display: flex;
                        direction: ltr;
                        text-align: left;
                        color: #808080 !important;
                        line-height: 1.9rem;
                        cursor: default;
                    }
                }
    }
}

.phone{
    height: 480px ;
    // background-image: url(../../../../public/images/phone-lg.svg);
}

@media (max-width:1100px){

    .needs-card-container{

    grid-template-columns: 35% 30% 35%;
    }
}
</style>
