import Vue from 'vue'
import App from './App.vue'
import router from './router'
import AOS from 'aos'
import 'aos/dist/aos.css'
import SweetModal from 'sweet-modal-vue/src/plugin.js'
import vueSmoothScroll from 'vue2-smooth-scroll'
import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faUserSecret, faCheckCircle, faTimesCircle, faExclamationTriangle, faPaperPlane, faSpinner, faChartLine, faSmileBeam, faHeadset,
  faInfoCircle, faAward, faLayerGroup, faUsers, faHeart, faServer, faDesktop, faLock, faTachometerAlt, faSyncAlt, faCloudUploadAlt
} from '@fortawesome/free-solid-svg-icons'
import { faLaravel, faVuejs, faCss3Alt, faFacebook, faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faUserSecret, faCheckCircle, faTimesCircle, faExclamationTriangle, faInfoCircle, faAward, faLayerGroup, faUsers, faFacebook,
  faHeart, faLaravel, faVuejs, faCss3Alt, faServer, faDesktop, faLock, faTachometerAlt, faSyncAlt, faCloudUploadAlt, faPaperPlane, faSpinner,
  faInstagram, faTwitter, faYoutube, faChartLine, faSmileBeam, faHeadset)

require('vue2-animate/dist/vue2-animate.min.css')
Vue.use(SweetModal)
Vue.use(vueSmoothScroll)
Vue.config.productionTip = false

window.Event = new Vue()

Vue.component('font-awesome-icon', FontAwesomeIcon)

new Vue({
  created () {
    AOS.init({
      disable: 'phone', // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
      animatedClassName: 'aos-animate', // class applied on animation
      useClassNames: true, // if true, will add content of `data-aos` as classes on scroll
      initClassNames: false,
      // disableMutationObserver: false, // disables automatic mutations' detections (advanced)
      debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
      throttleDelay: 99 // the delay on throttle used while scrolling the page (advanced)
    })
  },
  router,
  render: h => h(App)
}).$mount('#app')
