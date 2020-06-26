<template>

    <div class="container-fluid" ref="afterHero">
        <div id="top-section"
        class="d-flex justify-content-center align-items-center w-100 top-section"
        data-aos="light-speed-in" data-aos-once="true"  data-aos-anchor-placement="center-bottom">
            <h3 class="top-heading">Our</h3>
            <h3 class="how-it-works-pinked"> Services</h3>
        </div>

        <div class="w-100 d-flex justify-content-between mt-5 all-cards-container-div">
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
import Card from '../../Home/how-it-works/cards/Cards'
export default {
  data () {
    return {
      cards: [
        {
          head1: 'Responsive',
          head2: 'Design',
          icon: 'desktop',
          delay: 200,
          content: 'My web applications are responsive on every device. Today one of the biggest factors in google ranking is the responsiveness of your web site so it Greatly increases your SEO.'
        },
        {
          head1: 'Secure',
          head2: 'Back end',
          icon: 'lock',
          delay: 400,
          content: 'I provide a highly secure server side code. Hackers are everywhere these days so you need a secure site to show that you are Professional.'
        },
        {
          head1: 'Speed',
          head2: 'Optimization',
          icon: 'tachometer-alt',
          delay: 600,
          content: 'Having a fast responding site does a major effect on UI part of your web site. The user wont stay at your site if its slow. So you want the best responding time cause it\'s terrible for your SEO'
        },
        {
          head1: 'Respond',
          head2: 'Fast',
          icon: 'sync-alt',
          delay: 800,
          content: 'SPA sites are growing every day. In these sites, at most of the parts you dont need to refresh the page. The requests get sent by an Ajax request and user see\'s the respond immediatly.'
        },
        {
          head1: 'Server',
          head2: 'Optimization',
          icon: 'server',
          delay: 1300,
          content: 'For having a perfect flawless server that works perfectly over time with the database getting bigger and bigger, you need some optimizations and schedual command in your server.'
        },
        {
          head1: 'Percise',
          head2: 'Statistics',
          icon: 'chart-line',
          delay: 1500,
          content: 'Having specific daily, monthly and yealry analyse of your sell, visitors, new joined users and ... is very important and I provide that for you in a beautiful user Interface from admin panel.'
        },
        {
          head1: 'UI / UX',
          head2: 'Experience',
          icon: 'smile-beam',
          delay: 1700,
          content: 'You want your users to remember a good experience form your website. this results in returning users to your site which is ideal for a site owner. With a good UI and UX you can achieve that'
        },
        {
          head1: 'Support',
          head2: '1 Year',
          icon: 'headset',
          delay: 1900,
          content: 'It\'s hard to for a website to remain flawless after several months. There for, I provide a 1 year support for your site. So you dont have to worry about any error or problem.'
        }
      ]
    }
  },
  components: {
    Card
  },
}
</script>

<style lang="scss">

    .container-fluid{
      background-color: #ffffff;
      margin-top: 40px;

    }
    .top-heading{
        padding-top: 70px;
        padding-bottom: 40px;
        font-family: 'Helvetica';
        font-size: 40px;
        font-weight: 700;
        color: #000000;
        cursor: default;

    }

    .how-it-works-pinked{
        padding-top: 70px;
        padding-bottom: 40px;
        color: #F07A6A;
        font-size: 40px;
        font-weight: 700;
        margin-left: 14px;
        cursor: default;

    }

    .card-container{
        width: 23%;
        margin-bottom:80px;
    }

    .all-cards-container-div{
        flex-wrap: wrap;
        padding: 0 49px;
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
      padding: 0 21px !important;
    }

    .top-heading{
      font-size: 2rem !important;
      padding-bottom: 0px !important;

    }

    .how-it-works-pinked{
      font-size: 2rem !important;
      padding-bottom: 0px !important;

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
