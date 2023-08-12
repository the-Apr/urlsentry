import { createApp, h } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/tailwind.css'
import VueParticle from 'vue-particlejs';



const app= createApp({
  render: () => h(App)
});

app.use(store)
app.use(router) 
app.use(VueParticle)
app.mount('#app')
