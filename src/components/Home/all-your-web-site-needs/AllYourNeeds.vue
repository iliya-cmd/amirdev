<template>
    <div class="w-100 all-needs-container">

        <div class="all-needs-heading-div d-flex flex-column"
        data-aos="bounce-in-left" data-aos-easing="ease" data-aos-once="true">
            <h3 class="all-needs-heading">All Your <span class="website-pinked">Website</span> Needs</h3>
            <span class="all-needs-heading-sub ">How we build your Site</span>
        </div>

        <Content
        :data="needCard"
        >
        <svg
        aria-hidden="true" focusable="false"
        data-prefix="fab" data-icon="css3" class="svg-inline--fa fa-css3 fa-w-16"
        role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor"
        d="M480 32l-64 368-223.3 80L0 400l19.6-94.8h82l-8 40.6L210 390.2l134.1-44.4 18.8-97.1H29.5l16-82h333.7l10.5-52.7H56.3l16.3-82H480z"></path></svg>
        </Content>

    </div>
</template>

<script>
import Content from './content-area/Content'
export default {
  components: {
    Content
  },
  data () {
    return {
      needCard: [
        {
          head1: 'Design',
          head2: 'Bootstrap, Tailwind, Bulma',
          jelly: false,
          content: 'we can use any css framework you wish.tailwind, Bulma, Bootstrap.'
          // bgColor: 'transparent',
          // iconColor: '#FF5D73'
        },
        {
          head1: 'Back End',
          head2: 'Laravel, Firebase',
          jelly: false,
          icon: 'server',
          content: 'Laravel is the best PHP framework and firebase is a powerfull NoSql database.'
        },
        {
          head1: 'Front End',
          head2: 'Vue js, React',
          jelly: false,
          icon: ['fab', 'vuejs'],
          content: 'Vue Js and React js are the fastest frontend frameworks which facebook and instagram use too.'
        },
        {
          head1: 'Api',
          head2: 'Laravel, API',
          jelly: false,
          icon: ['fab', 'laravel'],
          content: 'If you wish to SPA website, you will need a Powerful API. laravel has the best performance in this area.'
        }
      ]

    }
  },
  methods: {
    // toggleArrow: function (index) {
    //   this.needCard[index].showContent = !this.needCard[index].showContent
    // }
  }
}
</script>

<style lang="scss">

    .all-needs-container{
        width: 100%;
        padding: 110px 30px 90px;
        justify-content: space-between;
        background-color: #ffffff;

        .all-needs-heading-div{
            justify-content: center;
            align-items: center;
            margin-bottom: 50px;

            h3{
                color: #000000;
                font-size: 40px;
                font-weight: 700;
                cursor: default;
                font-weight: bold;

                .website-pinked{
                    margin-left: 4px;
                    margin-right: 4px;
                    font-size: 40px;
                    font-weight: bold;
                    color: #ff5d73 !important;
                }
            }

            span{
                color: #808080;
                margin-top: 0px;
                font-size: 24px;
                font-weight: normal;
                cursor: default;

            }
        }

    }

    @media (max-width: 835px){
        .needs-card-container{
            grid-template-columns: 1fr !important;
        }

        .all-needs-container{
            // margin-top: 520px;

        }
    }
    @media (max-width: 651px){
        .needs-card-container{
            grid-template-columns: 1fr !important;
        }

        .all-needs-container{
            // margin-top: 900px;

        }
    }
</style>
