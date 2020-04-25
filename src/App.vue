<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  created(){
    document.addEventListener('click', (e) => {
      Event.$emit('click-happened', e)

    })

    Event.$on('scrollTop', () => this.scrollToTop())
  },
  methods:{
    scrollToTop() {
      window.scrollTo(0,0);
    }
  }
}

</script>
<style lang="scss">

::-webkit-scrollbar {
    width: 10px;
    padding: 0 2px;
  }

/* Track */
  ::-webkit-scrollbar-track {
    background: #808080;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: #ffffff;
    border-radius: 10px;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: #ffffff;
  }

#app {
  font-family: 'Helvetica', sans-serif;
  text-align: center;
  color: #ffffff;
  letter-spacing: 0.05rem;
}

::placeholder{
  font-family: 'Helvetica', sans-serif !important;

}

::-webkit-input-placeholder {
  font-family: 'Helvetica', sans-serif !important;

}

html, body{
  overflow-x: hidden !important;
  width: 100%;

}
body{
  width: 100%;
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
