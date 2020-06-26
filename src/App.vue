<template>
  <div id="app">
    <router-view v-if="loaded"/>
    <div class="site-loading" v-if="!loaded">

      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 548 949.06" class="amir"><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><polygon points="548 158.2 548 418.15 401.65 333.65 401.65 242.69 274 168.99 146.35 242.69 146.35 333.65 0 418.15 0 158.2 274 0 548 158.2"/><polygon points="401.65 706.26 548 790.75 548 790.86 274 949.06 0 790.86 0 790.75 146.35 706.26 146.35 706.37 274 780.07 401.65 706.37 401.65 706.26"/><polygon points="548 474.48 548 734.43 401.65 649.92 401.65 559.07 274 632.78 146.35 559.07 146.35 649.92 0 734.43 0 474.48 146.35 389.98 146.35 390.09 274 463.79 401.65 390.09 401.65 389.98 548 474.48"/></g></g></svg>

    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      loaded: false
    }
  },
  created(){
    document.addEventListener('click', (e) => {
      Event.$emit('click-happened', e)
    })

    Event.$on('scrollTop', () => this.scrollToTop())

    console.log('created');

    // var loaded = this.loaded;
    document.addEventListener("DOMContentLoaded", (event) => {
      console.log('loaded');
      console.log(this.loaded);

      setTimeout(() => {

        this.loaded = true
        console.clear();

      }, 1500).bind(this);


    });

  },
  mounted(){
    console.log('mounted');
  },
  methods:{
    scrollToTop() {
      window.scrollTo(0,0);
    }
  }
}

</script>
<style lang="scss">

.site-loading{

  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  position: relative;
  align-items: center;

  .amir{
    top: 25%;
    left: 40%;
    right: 40%;
    color: #000000;
    height: 150px;
    animation: amir 2s infinite;
  }

}

@keyframes amir{

  0%{
    transform: scale(1);
  }

  50%{
    transform: scale(1.2);
  }

  100%{
    transform: scale(1);
  }

}

// ::-webkit-scrollbar {

//   }

// /* Track */
//   ::-webkit-scrollbar-track {

//   }
//   /* Handle */
//   ::-webkit-scrollbar-thumb {

//   }

//   /* Handle on hover */
//   ::-webkit-scrollbar-thumb:hover {

//   }

#app {
  font-family: 'Helvetica', sans-serif;
  text-align: center;
  // height: 100%;
  color: #ffffff;
  letter-spacing: 0.01rem;
}

::placeholder{
  font-family: 'Helvetica', sans-serif !important;

}

::-webkit-input-placeholder {
  font-family: 'Helvetica', sans-serif !important;

}

html{
  overflow-x: hidden !important;
  // height: 100%;
  width: 100%;

}
body{
  width: 100%;
  height: 100%;
  overflow-x: hidden !important;
  position: relative !important;
  font-family: 'Helvetica', 'Roboto';
  text-align: center;
  color: #ffffff;

  p{
    font-family: 'Helvetica', 'Roboto' !important;
  }
  a{
    font-family: 'Helvetica', 'Roboto' !important;
  }
  span{
    font-family: 'Helvetica', 'Roboto' !important;
  }
  input{
    font-family: 'Helvetica', 'Roboto' !important;

    ::placeholder{
      font-family: 'Helvetica', 'Roboto' !important;
    }
  }
}

@font-face {
    font-family: 'Helvetica';
    src:  url(~@/assets/fonts//HelveticaLTStd-Blk.otf) format('otf');
    font-weight: 900;
    font-style: normal;
  }

  @font-face {
    font-family: 'Helvetica';
    src: url(~@/assets/fonts/HelveticaLTStd-Light.otf) format('otf');
    font-weight: 300;
    font-style: normal;
  }

  @font-face {
    font-family: 'Helvetica';
    src: url(~@/assets/fonts/HelveticaNeueCyr-Bold.otf) format('otf');
    font-weight: 700;
    font-style: normal;
  }

  @font-face {
    font-family: 'Helvetica';
    src: url(~@/assets/fonts/HelveticaLTStd-Roman.otf) format('otf');
    font-weight: 400;
    font-style: normal;
  }

  @font-face {
    font-family: 'Helvetica';
    src: url(~@/assets/fonts/HelveticaNeue-Thin.otf) format('otf');
    font-weight: 200;
    font-style: normal;
  }

</style>
