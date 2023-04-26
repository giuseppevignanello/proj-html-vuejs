import { createApp } from 'vue'
import './assets/scss/app.scss'
import App from './App.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { faDollarSign } from '@fortawesome/free-solid-svg-icons';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import { faDroplet } from '@fortawesome/free-solid-svg-icons';
import { faStethoscope } from '@fortawesome/free-solid-svg-icons';
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import { faWheatAlt } from '@fortawesome/free-solid-svg-icons';

library.add(faHeart, faDollarSign, faGlobe, faDroplet, faStethoscope, faGraduationCap, faWheatAlt);

createApp(App).component('font-awesome-icon', FontAwesomeIcon).mount('#app')
