<template>
    <div  class="contact-container">
      <NavBar/>
        <div class="contact-content-container">
          <Contact/>
        </div>

        <Footer style="padding-top: 50px"/>

    </div>
</template>

<script>
import NavBar from '../components/Home/navbar/NavBar.vue'
import Footer from '../components/Home/footer/Footer.vue'
import Contact from '../components/Contact/Contact.vue'
export default {
  headful() {
      return {
          title: 'Contact Amir Mohseni',
          description: 'Contact information of Amir Mohseni',
          keywords: 'contact, contact form, location'
      };
  },
  components: {
    NavBar,
    Footer,
    Contact
  },
  beforeCreate(){
      AOS.init({
      disable: 'phone'
      });
  },
  data () {

    return {
      backY: 0
    }

  },
  methods: {
  }
}

</script>

<style lang='scss' >

  .contact-container{
    font-family: 'Helvetica', sans-serif !important;
    height: auto !important;
    overflow: auto !important;
    // min-height: 100vh !important;
    width: 100%;
    z-index: -5;
    background-image: url(~@/assets/contact-map.jpg);
    background-size: 100%;
    background-position: top;
    background-repeat: no-repeat !important;
    background-color: #222222;

    .contact-content-container{
      cursor: default;
      height: 600px;
      max-height: 600px !important;
      position: relative;

      &:hover{

        .contact-tooltip{
          display: block !important;
        }

      }


      >div{
        height: 500px;
      }

    }


  }

  @media (max-width: 1165px){
    .contact-container{
      font-family: 'Helvetica', sans-serif !important;
        height: 100% !important;

      background-image: url(~@/assets/contact-map.jpg);
      background-size: cover !important;
      background-position: top;
      background-repeat: no-repeat !important;
      background-color: #222222;
    }

  }
  @media (max-width: 700px ){

    .contact-container{
      background-attachment: inherit !important;

    }
  }

  @media (max-width: 550px ){
    .contact-container{
      background-attachment: inherit !important;

      .contact-content-container{
        height: 600px !important;
        padding-top: 70px;
        // margin-bottom: 50px !important;

      }

    }
  }

  @media (max-width: 530px ){
    .contact-container{
      background-attachment: inherit !important;

      .contact-content-container{
        height: 600px !important;
        padding-top: 70px;

      }
    }


  }

</style>
