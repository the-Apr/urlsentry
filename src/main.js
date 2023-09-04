import { createApp, h, defineAsyncComponent } from 'vue'
import App from './App.vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import router from './router'
import store from './store'
import './assets/tailwind.css'
import VueParticle from 'vue-particlejs';
import ParticlesBackground from './components/ParticlesBackground.vue';
// import { ChevronDownIcon, ArrowCircleDownIcon } from '@vue-hero-icons/outline';
import { library } from '@fortawesome/fontawesome-svg-core';
import {fas} from '@fortawesome/free-solid-svg-icons'
const BaseDialog = defineAsyncComponent(() => import('./components/UI/BaseDialog.vue'))
import BaseButton from './components/UI/BaseButton.vue'

library.add(fas);

const app= createApp({
  render: () => h(App)
});

app.use(store)
app.use(router) 
app.use(VueParticle)

app.component('particles-background', ParticlesBackground)
app.component('fa', FontAwesomeIcon)
app.component('base-dialog', BaseDialog)
app.component('base-button', BaseButton)

app.mount('#app')
