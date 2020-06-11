<template>
  <div class="about">
    <vue-headful
      title="About Amir Mohseni"
      description="Information about Amir Mohseni. A freelancer Developer and Designer"
      keywords="website, develope, design, app, laravel, vuejs, backend, forntend"
      author="Amir Mohseni"
    />
    <NavBar/>
    <Mail/>
    <scrollTop/>
    <AboutOurTeam style="margin-top: 40px"/>
    <Stats/>
    <OurTopSkills/>
    <ContactModal/>
    <Footer/>
  </div>
</template>

<script>
import NavBar from '../components/Home/navbar/NavBar.vue'
import AboutOurTeam from '../components/About/AboutOurTeam'
import Stats from '../components/About/Stats'
import OurTopSkills from '../components/About/OurTopSkills'
import Footer from '../components/Home/footer/Footer'
import ContactModal from '../components/Home/contact-modal/ContactModal'
import Mail from '../components/Home/mail/Mail'
import scrollTop from '../components/scrollTop/scrollTop'
export default {
  headful() {
      return {
          title: 'About Amir Mohseni',
          description: 'Information about Amir Mohseni. A freelancer Developer and Designer',
          keywords: 'website, develope, design, app, laravel, vuejs, backend, forntend',
      };
  },
  components: {
    NavBar,
    AboutOurTeam,
    Stats,
    OurTopSkills,
    Footer,
    Mail,
    scrollTop,
    ContactModal
  }
}
</script>

<style lang="scss">
  .about{
    width: 100%;
  }
  body{
    background-color: #ffffff !important;
  }
</style>