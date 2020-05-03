<template>

    <div class="container-fluid" ref="afterHero">
        <div id="top-section"
        class="d-flex justify-content-center align-items-center w-100 top-section lightSpeedIn"
        >
            <h3 class="top-heading">What Makes It </h3>
            <h3 class="how-it-works-pinked">Pro?</h3>
        </div>

        <div class="w-100 d-flex justify-content-between mt-5 all-cards-container-div" style="padding: 0 49px">
            <div :class="'card-container del-' + card.delay " v-for="card in cards" :key="card.head1"
            data-aos="jack-in-box"  data-aos-once="true" data-aos-anchor-placement="top-bottom">
                <Card
                :head1="card.head1"
                :head2="card.head2"
                :icon="card.icon"
                :content="card.content"
                :summerized="card.summerized"
                />
            </div>
        </div>
    </div>
</template>

<script>
import Card from './cards/Cards'
export default {
  data () {
    return {
      cards: [

        {
          head1: 'Responsive',
          head2: 'Design',
          icon: 'desktop',
          delay: 200,
          summerized: 'Our Web Applications are Responsive on every deviece. today one of the biggest factors in google ranking is the responsiveness of your web site',
          content: 'Our Web Applications are Responsive on every deviece. today one of the biggest factors in google ranking is the responsiveness of your web site so it Greatly increases your SEO.'
        },
        {
          head1: 'Secure',
          head2: 'Back end',
          icon: 'lock',
          delay: 400,
          summerized: 'We Provide a highly Secure server side code. Many Tests will be initialized on your web site before we put it into',
          content: 'We Provide a highly Secure server side code. Hackers are everywhere these days so you need a secure site to show that you are Professional.'
        },
        {
          head1: 'Speed',
          head2: 'Optimization',
          icon: 'tachometer-alt',
          delay: 600,
          summerized: 'Having a Fast responding site does a major effect on UI part of your web site. the user wont stay at your site if its slow',
          content: 'Having a Fast responding site does a major effect on UI part of your web site. the user wont stay at your site if its slow. so you want the best responding time cause it\'s Terrible for Your SEO'
        },
        {
          head1: 'Respond',
          head2: 'Fast',
          icon: 'sync-alt',
          delay: 800,
          summerized: 'SPA sites are growing every day. in these sites, at most of the parts you dont need to refresh the page',
          content: 'SPA sites are growing every day. in these sites, at most of the parts you dont need to refresh the page. The Requests get sent by an Ajax request and user see\'s the respond immediatly.'
        }
      ]
    }
  },
  components: {
    Card
  }
}
</script>

<style lang="scss">

    .container-fluid{
      background-color: #ffffff;
      padding-top: 40px;

    }
    .top-heading{
        margin-top: 0px;
        padding-top: 48px;
        font-family: 'Helvetica';
        font-size: 2.5rem;
        font-weight: 700;
        color: #000000;
        cursor: default;

    }

    .how-it-works-pinked{
        margin-top: 0px;
        padding-top: 48px;

        color: #E8496D;
        font-size: 2.5rem;
        font-weight: 700;
        margin-left: 14px;
        cursor: default;

    }

    .card-container{
        width: 24%;
        transition: all 1s ease;

    }

@media (max-width: 1020px){

    .card-container{
        width: 40% !important;
        margin-bottom:40px
    }

    .all-cards-container-div{
        flex-wrap: wrap;
    }
}

@media (max-width: 904px){

    .card-container{
        width: 45% !important;
        margin-bottom:40px
    }

    .all-cards-container-div{
        flex-wrap: wrap;
    }
}

@media (max-width: 815px){

    .card-container{
        width: 47% !important;
        margin-bottom:40px
    }

    .all-cards-container-div{
        flex-wrap: wrap;
    }
}

@media (max-width: 783px){

    .card-container{
        width: 49% !important;
        margin-bottom:40px
    }

    .all-cards-container-div{
        flex-wrap: wrap;
    }
}

@media (max-width: 650px){
    .card-container{
        width: 100% !important;
        margin-bottom:40px;
    }

    .all-cards-container-div{
      padding: 0 31px !important;
    }

    .top-heading{
      font-size: 2.1rem !important;
    }

    .how-it-works-pinked{
      font-size: 2.1rem !important;

    }
}
@media (max-width: 500px){
    .card-container{
        width: 100% !important;
        margin-bottom:40px;
    }

    .all-cards-container-div{
      padding: 0 31px !important;
    }

    .top-heading{
      font-size: 1.7rem !important;
    }

    .how-it-works-pinked{
      font-size: 1.7rem !important;

    }
}

@media (min-width: 1370px){

  .top-heading{
      padding-top: 90px !important;
  }
  .how-it-works-pinked{
      padding-top: 90px !important;
  }
}
</style>
