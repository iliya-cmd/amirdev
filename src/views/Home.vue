<template>
  <div class="home">
    <NavBar/>
    <Mail/>
    <scrollTop/>
    <Hero/>
    <ContactModal/>
    <howItWorks/>
    <Buisness/>
    <AllYourNeeds/>
    <Testimonial/>
    <OurWorks/>
    <Footer/>
  </div>
</template>

<script>
// @ is an alias to /src
import NavBar from '../components/Home/navbar/NavBar.vue'
import Hero from '../components/Home/Hero-Area/Hero'
import howItWorks from '../components/Home/how-it-works/howItWorks'
import Buisness from '../components/Home/business-section/Buisness'
import AllYourNeeds from '../components/Home/all-your-web-site-needs/AllYourNeeds'
import Testimonial from '../components/Home/testimonial/Testimonial'
import Footer from '../components/Home/footer/Footer'
import Mail from '../components/Home/mail/Mail'
import scrollTop from '../components/scrollTop/scrollTop'
import ContactModal from '../components/Home/contact-modal/ContactModal'
import OurWorks from '../components/Home/our-works/OurWorks'

export default {
  headful() {
      return {
          title: 'AM Portfolio',
          description: 'A Portfolio website for works designed & developed by Amir Mohseni',
          keywords: 'website, develope, design, app, laravel, vuejs, backend, forntend'
      };
  },
  beforeCreate(){
      AOS.init({
      disable: 'phone'
      });
  },
  name: 'Home',
  components: {
    NavBar,
    Hero,
    howItWorks,
    Buisness,
    AllYourNeeds,
    Testimonial,
    Footer,
    Mail,
    scrollTop,
    ContactModal,
    OurWorks
  }
}
</script>

<style lang="scss">
  .home{
    width: 100%;

  }

  body{
    background-color: #ffffff !important;
  }
</style>
