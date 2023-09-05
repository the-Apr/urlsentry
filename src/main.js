import { createApp, h, defineAsyncComponent } from 'vue'
import App from './App.vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import router from './router'
import store from './store'
import './assets/tailwind.css'


import VueParticle from 'vue-particlejs';
const ParticlesBackground = defineAsyncComponent(() => import('./components/ParticlesBackground.vue'))

import HelloWorld from './components/HelloWorld.vue'
import { library } from '@fortawesome/fontawesome-svg-core';
import {fas} from '@fortawesome/free-solid-svg-icons'
const BaseDialog = defineAsyncComponent(() => import('./components/UI/BaseDialog.vue'))
const BaseButton = defineAsyncComponent(() => import('./components/UI/BaseButton.vue'))


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
app.component('hello-world', HelloWorld)

app.mount('#app')
