import { createApp } from 'vue'
import App from './App.vue'
import "tailwindcss/tailwind.css"
import store from './store/store'


createApp(App).use(store).mount('#app')
