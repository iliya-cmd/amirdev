/* eslint-disable no-trailing-spaces */
<template>
<div class="container-fluid">
    <nav class="navbar navbar-dark ">
      <div class="blur-back"></div>
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
      hambNav: false
    }
  },
  created () {
    console.log(this.$router.history.current.name)
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

  .blur-back{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba($color: #222222, $alpha: 0.5) ;
    filter: blur(2px);
    z-index: 20;
  }

  .hamb-nav-links-div{
    position: absolute;
    width: 200px;
    display: none;
    right: 0;
    top: 0;
    padding-top: 60px ;
    background-color: rgba($color: #171717, $alpha: 0.97);
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
      width: 33px;
      height: 4px;
      margin-bottom: 5px;
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

    transform: translateX(-120px);
    transition: 0.3s;
    span:nth-of-type(1){
    transform: rotateZ(45deg) translateY(13px);
    outline: none;

    }

    span:nth-of-type(2){
      transform: translateX(200px);
    }

    span:nth-of-type(3){
        transform: rotateZ(-45deg) translateY(-13px);

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
    color: #ffffff !important;
    background-color: #ffffff;
    color: #000000 !important;
    border-radius: 10px !important;

    &:hover{
        color: #000000 !important;

      .nav-main-link{

        color: #000000 !important;

      }
    }
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

    background-color: #ffffff;
    color: #000000 ;
    border-radius: 10px;
    z-index: 5000;

  }

  .navbar{
    background-color: rgba($color: #222222, $alpha: 0.6) ;
    // filter: blur(5px);
    height: 55px;
    padding-top: 0 !important;
    padding-bottom: 0 !important;
    display: flex !important;
    align-items: center !important;
    position: fixed;
    top: 0 !important;
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

    }

    .nav-links-div{
      display: none !important;



    }

    .nav-logo{
      padding-left: 0 !important;
      margin-left: 5px !important;
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
            background-color: rgba($color: #ffffff, $alpha: 0.9) !important;
        }
      .nav-main-link{
        width: 100% !important;
        height: 50px !important;
        padding-left: 20px !important;
        border-radius: 0 !important;

        &:hover{

        }


      }
    }

  }
</style>
