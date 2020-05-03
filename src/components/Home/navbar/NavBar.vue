/* eslint-disable no-trailing-spaces */
<template>
<div class="container-fluid">
    <nav class="navbar " :class="{ 'blur': bluredBg }">
      <!-- Brand -->
      <div class="d-flex justify-content-center align-items-center nav-logo">
        <router-link class="navbar-brand" to="/" :exact="true">
            <img src="~@/assets/logo-none-circle.svg" alt="site-logo" width="" height="40px">
        </router-link>
      </div>

        <button class="hamburger-toggler" type="button" @click="toggleNav" :class="{'hamb-nav-active': hambNav}">
          <span class="burger-icon"></span>
          <span class="burger-icon"></span>
          <span class="burger-icon"></span>
        </button>

      <!-- Navbar links -->
        <div class="d-flex nav-links-div">
            <div class="d-flex justify-content-between w-100">
              <div v-for="item in navItems" :key="item.name" style="position: relative;"
              class="d-flex justify-content-center align-items-center nav-main-link-holder">
                <router-link class="nav-main-link" :to="item.link" :exact="true"
                :class="{ 'active-nav-link' : item.active}">
                  <div class="nav-main-link-div"></div>
                  {{ item.name }}
                </router-link>
              </div>
            </div>
        </div>

        <!-- Hamburger Nav Div -->
        <div class="hamb-nav-links-div" v-if="hambNav">
            <div class="d-flex flex-column justify-content-center align-items-center">
              <div v-for="item in navItems" :key="item.name" class=" hamb-nav-links-row">
                <router-link class="nav-main-link" :to="item.link" :exact="true"
                :class="{ 'active-nav-link' : item.active}">
                  {{ item.name }}
                </router-link>
              </div>
            </div>
        </div>
    </nav>

</div>
</template>

<script>
export default {
  data () {
    return {
      navItems: [
        { name: 'Home', link: '/', active: this.isPageActive('Home') },
        { name: 'About', link: '/about', active: this.isPageActive('About') },
        { name: 'Services', link: '/services', active: this.isPageActive('Services') },
        { name: 'Contact', link: '/contact', active: this.isPageActive('Contact') }
      ],
      hambNav: false,
      bluredBg: true
    }
  },
  created () {
    console.log(this.$router.history.current.name)

    if( this.$router.history.current.name == "Home"){
      this.bluredBg = false
      window.addEventListener('scroll', (e) => {
        if( window.pageYOffset > 600) this.bluredBg = true
        if( window.pageYOffset < 600) this.bluredBg = false

      });

    }
  },
  methods: {
    toggleNav: function () {
      this.hambNav = !this.hambNav
    },
    isPageActive (name) {
      return this.$router.history.current.name === name ? true : null
    }
  }
}
</script>

<style lang="scss" >
$spacer : 10px;
  .nav-links-div{
    z-index: 10000;
    padding-right: 0px;
  }

  .blur{
    background-color: rgba($color: #222222, $alpha: 0.5) !important;
    height: 60px !important;
  }

  .hamb-nav-links-div{
    position: absolute;
    width: 200px;
    display: none;
    right: 0;
    top: 0px;
    padding-top: 80px ;
    background-color: rgba($color: #fcfcfc, $alpha: 1);
    border-top-left-radius: 15px;
    border-bottom-left-radius: 10px;
    height: 1000px;
    z-index: 90 !important;
  }

  .hamb-nav-links-row{
    display: flex;
    width: 100%;
    justify-content: flex-start;
    padding: 5px 0 ;
    padding-left: 15px;
    border-bottom: 1px solid rgba($color: #000000, $alpha: 0.9);

    &:nth-child(1){
      border-top: 1px solid rgba($color: #000000, $alpha: 0.9);
    }

    &:hover{
      background-color: rgba($color: #000000, $alpha: 1);
      cursor: pointer;
    }
  }

  .hamburger-toggler{
    z-index: 2000;
    border: none;
    outline: none;
    background-color: transparent;
    transition: transform 0.4s;
    z-index: 91 !important;
    &:focus{
        outline:none;
    }
    .burger-icon{
      background-color: #ffffff;
      display: block;
      width: 45px;
      height: 4px;
      margin-bottom: 10px;
      position: relative;
      border-radius: 3px;
      z-index: 4;
      outline:none;

      &:nth-child(3){
        margin-bottom: 0px !important;

      }
    }
  }

  .hamb-nav-active{

    transform: translateX(-110px);
    transition: 0.3s;
    span:nth-of-type(1){
    transform: rotateZ(45deg) translateY(23px) translateX(10px);
    background-color: #000000 !important;
    outline: none;

    }

    span:nth-of-type(2){
      transform: translateX(200px);
    }

    span:nth-of-type(3){
        background-color: #000000 !important;
        transform: rotateZ(-45deg) translateY(-8px) translateX(-3px);

    }
  }

  .container-fluid{
    padding: 0 !important;
    // height: 0 !important;
    margin: 0 !important;
  }

  .nav-main-link-holder{

    margin-right: 28px !important;
    z-index: 5000;


  }

  .active-nav-link{
    color: #68E3F1 !important;
    border-radius: 10px !important;
    border: 2px solid #68E3F1;

  }

  .nav-main-link{
    text-align: left;
    font-size: 14px;
    font-weight: 600;
    height: 40px;
    display: flex;
    letter-spacing: 0rem !important;
    align-items: center;
    color: #ffffff ;
    text-decoration: none !important;
    padding: 10px;
    // border: 3px solid transparent;
    transition: all .2s ease;
    border-radius: 10px;
    z-index: 5000;
  }

  .nav-main-link:hover{

    color: #68E3F1 ;
    z-index: 5000;

  }

  .navbar{
    position: fixed;
    height: 95px;
    background-color: transparent;
    padding-top: 0 !important;
    padding-bottom: 0 !important;
    display: flex !important;
    align-items: center !important;
    top: 0px !important;
    width: 100%;
    z-index: 1000;

    .nav-logo{
      // margin-top: -5px;
      margin-left: 33px;
      z-index: 100000;

      .navbar-brand{
        height: 33px;
        margin: 0;
        padding: 0;
      }
      img{
        margin-top: -3px;
        z-index: 100000;

      }
    }
  }

  .hamburger-toggler{
    display: none;
  }

  @media (max-width: 650px) {
    .hamburger-toggler{
      display: block;
      margin-right:9px !important;

    }

    .nav-links-div{
      display: none !important;

    }

    .navbar{
      top: 25px !important;
      position: fixed !important;
      top: 0px !important;
      height: 55px !important;
      left: 0 !important;
    }
    .nav-logo{
      padding-left: 0 !important;
      margin-left:15px !important;
    }

    .active-nav-link{
    color: #000000 !important;
    border-radius: 10px !important;
    border: none !important;

    }

    .hamb-nav-links-row{
      height: 50px;
      padding: 0px 0!important;
    }

    div nav .hamb-nav-links-div{
      display: block !important;
      // padding-top: 10px !important;
      padding-bottom: 10px !important;

        .router-link-active{
            // background-color: rgba($color: #ffffff, $alpha: 0.9) !important;
        }
      .nav-main-link{
        width: 100% !important;
        height: 50px !important;
        padding-left: 20px !important;
        border-radius: 0 !important;
        color: #000000 !important;

        &:hover{
          color: #ffffff !important;
        }


      }
    }

  }
</style>
