<template>
    <div class="w-100 d-flex stats-container">
        <div :class="'d-flex stats-holder del-' + stat.delay" v-for="(stat, index) in stats" :key="stat.icon"
        data-aos="fade-in-left" data-aos-once="true" :ref="stat.icon" :data-aos-id="stat.icon">
            <div class="icon-holder">
                <font-awesome-icon
                :icon="stat.icon"
                size="3x"
                color="#ffffff"
                class="stats-icon">
                </font-awesome-icon>
            </div>
            <div class="number-holder">
                <p class="number">{{ stat.number }}{{ index == 1 ? null : '+' }}</p>
            </div>
            <div class="description-holder">
                <p class="des">{{ stat.des }}</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  data () {
    return {
      stats: [
        { icon: 'award', number: 0, des: 'Years of Exprience', delay: 800 },
        { icon: 'layer-group', number: 0, des: 'Projects Done', delay: 1200 },
        { icon: 'users', number: 0, des: 'Members', delay: 1600 },
        { icon: 'heart', number: 0, des: 'Happy Clients', delay: 2000 }
      ]
    }
  },
  methods: {
  },
  mounted () {

    document.addEventListener('aos:in:award', ({ detail }) => {
        let wait = 1000;


        const counter = () => {

            setInterval( () => {

                if( this.stats[0].number <= 3 ){
                    this.stats[0].number++

                }

            }
            ,wait)
        }

        setTimeout( () => counter() ,1500);

    });

    document.addEventListener('aos:in:layer-group', ({ detail }) => {
        let wait = 100

        const counter =  () => {

            setInterval( () => {

                if( this.stats[1].number <= 49 ){
                    this.stats[1].number++

                    if(this.stats[1].number == 4) wait = 50

                    if(this.stats[1].number == 45) wait = 150
                }

            }
            ,wait)
        }

        setTimeout( () => counter() , 2000)
    });

    document.addEventListener('aos:in:users', ({ detail }) => {
        let wait = 50

        const counter = () => {

            setInterval( () => {

                if( this.stats[2].number <= 130 ){
                    this.stats[2].number++

                    if(this.stats[2].number == 3) wait = 10

                    if(this.stats[2].number == 125) wait = 80
                }

            }
            ,wait)

        }

        setTimeout( () => counter(), 2500)
    });

    document.addEventListener('aos:in:heart', ({ detail }) => {
        let wait = 50

        const counter = () => {

            setInterval( () => {

                if( this.stats[3].number <= 100 ){
                    this.stats[3].number++

                    if(this.stats[3].number == 3) wait = 10

                    if(this.stats[3].number == 195) wait = 80
                }

            }
            ,wait)

        }
        setTimeout(() => counter(), 3000)
    });

  }
}
</script>

<style lang="scss">

    .stats-container{
        background-color: #F6F4FA;
        background-size: cover;
        padding: 100px 25px;

        .stats-holder{
            width: 25%;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;

            .icon-holder{
                width: 100% ;
                display: flex;
                justify-content: center;
                align-items: center;

                .stats-icon{
                    width: 86px;
                    border-radius: 100px;
                    padding: 20px;
                    height: 86px;
                    background-color: #055FDC;

                }
            }

            .number-holder{
                width: 100%;
                display: flex;
                justify-content: center;
                align-items: center;
                margin: 25px 0 0px;

                .number{
                    font-family: 'Roboto', sans-serif !important ;
                    color: #E8496D;
                    font-size: 4.5rem;
                    font-weight: 200 !important;
                }
            }

            .description-holder{
                width: 100%;
                display: flex;
                justify-content: center;
                align-items: center;
                margin-top: -10px;
                padding: 0;

                .des{
                    margin: 0;
                    padding: 0;
                    color: #555555;
                    font-size: 1.1rem;
                    font-weight: 600;
                }
            }
        }
    }

    @media (max-width: 900px){
        .stats-container{
            flex-wrap: wrap;

            .stats-holder{
                width: 50%;
                margin-bottom: 80px;
            }
        }
    }

    @media (max-width: 550px){
        .stats-container{
            flex-direction: columns;

            .stats-holder{
                width: 100%;
                margin-bottom: 80px;
            }
        }
    }
</style>
