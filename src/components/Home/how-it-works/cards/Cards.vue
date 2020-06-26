<template>
    <div class="d-flex flex-column pt-4 pl-3 pr-3 pb-1 card-div w-100 justify-content-start">
        <div class="d-flex w-100 how-it-works-heading">
          <div class="d-flex flex-column how-it-works-heading-holder">
            <h2 class="card-heading-1 d-flex justify-content-start">{{ head1 }}</h2>
            <span class="card-heading-2 d-flex justify-content-start">{{ head2 }}</span>
          </div>
          <div class="how-it-works-icon-holder">
              <font-awesome-icon
              :icon="icon"
              size="3x"
              class="how-it-works-icon-svg">
              </font-awesome-icon>
          </div>
        </div>
        <div class="card-heading-border flex "></div>
        <p class="card-content-main">{{ content }}</p>
    </div>
</template>

<script>
export default {
  props: {
    head1: {
      type: String,
      required: true
    },
    head2: {
      type: String,
      required: true
    },
    icon: {
      type: String,
      required: true
    },
    content: {
      type: String,
      required: true
    },
  }
}
</script>

<style lang="scss">

 .card-div{
     color: #000000;
     border-radius: 4px;
     transition: all 0.4s ease;
     height: 300px ;
     overflow: hidden;
     box-shadow: none !important;
     border: 1px rgba($color: #000000, $alpha: 0.2) solid;

  .how-it-works-heading{

    .how-it-works-heading-holder{
      width: 50%;
      align-items: flex-start;

    }

    .how-it-works-icon-holder{
      width: 50%;
      display: flex;
      justify-content: flex-end;
      align-items: flex-start;
    }

    .card-heading-1{
        font-size: 1.5rem;
        line-height: 0.9;
        font-weight: 600;
        font-style: normal;
        width: auto;
        margin-bottom: 0;
        cursor: default;
    }

    .card-heading-2{
      display: flex;
      justify-content: flex-start;
      align-items: flex-start;
      text-align: left;
      direction: ltr;
      font-weight: 100;
      font-size: 1.438rem;
      line-height: 1.652em;;
      letter-spacing: 0.034em;
      font-style: italic;
      cursor: default;
      width: auto;

    }
  }

 svg{
   opacity: 0.4;
 }

 .card-content-main{
    width: 100%;
    direction: ltr;
    text-align: left;
    color: #808080 !important;
    line-height: 1.5rem;
    cursor: default;
    font-size: 0.9rem;
    display: inline !important;

 }

 .card-heading-border{
     margin-top: 20px;
     margin-bottom: 20px;
     width: 35px;
     border: 2px solid #F07A6A;
     transition: border-color 0.3s;
 }

 &:hover{
    box-shadow: 1px 10px 32px rgba(227,47,86,0.15) !important;

     svg{
       color: #F07A6A !important;
     }

     transform: translateY(-30px);
     border: 1px solid #F07A6A ;
     color: #F07A6A !important;

 }
}

@media (max-width: 1246px){

    .card-div{
        height: 320px !important;
    }
}

@media (max-width: 1137px){

    .card-div{
        height: 340px !important;
    }
}

@media (max-width: 1020px){

    .card-div{
        height: 270px !important;
    }
}

@media (max-width: 758px){

    .card-div{
        height: 285px !important;
    }
}

@media (max-width: 665px){

    .card-div{
        height: 305px !important;
    }
}

@media (max-width: 650px){
   .card-div{
        height: auto !important;
    }

    .card-heading-1{
      font-size: 22px !important;
    }
    .card-heading-2{
      font-size: 20px !important;
    }
}
</style>
