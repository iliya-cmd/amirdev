<template>
  <div class="services">
    <NavBar style="margin-top:0" />
    <Mail/>
    <scrollTop/>
    <ContactModal/>
    <howItWorks style="margin-top: 80px !important"/>
    <OurWorks style="margin-top: 20px"/>
    <Testimonial style="margin-top: 20px" />
    <OurTopSkills style="margin-top: 20px" />
    <Footer/>
  </div>
</template>

<script>
// @ is an alias to /src
import NavBar from '../components/Home/navbar/NavBar.vue'
import howItWorks from '../components/Services/how-it-works/howItWorks'
import Testimonial from '../components/Home/testimonial/Testimonial'
import Footer from '../components/Home/footer/Footer'
import Mail from '../components/Home/mail/Mail'
import scrollTop from '../components/scrollTop/scrollTop'
import ContactModal from '../components/Home/contact-modal/ContactModal'
import OurWorks from '../components/Home/our-works/OurWorks'
import OurTopSkills from '../components/About/OurTopSkills'

export default {
  headful() {
      return {
          title: 'AM Services',
          description: 'Some of the services provided by Amir Mohseni',
          keywords: 'responsive, secure, skills, develope, UI / UX, Support, speed, design, server'
      };
  },
  beforeCreate(){
      AOS.init({
      disable: 'phone'
      });
  },
  name: 'Services',
  components: {
    NavBar,
    howItWorks,
    Testimonial,
    Footer,
    Mail,
    scrollTop,
    ContactModal,
    OurWorks,
    OurTopSkills
  }
}
</script>

<style lang="scss">
  .services{
    width: 100%;

  }
  body{
    background-color: #ffffff !important;
  }
</style>