import "bootstrap-icons/font/bootstrap-icons.css"

//import './assets/style.min.css'
import "@fortawesome/fontawesome-free/js/all.min.js"
import "particles.js/particles.js"
import "typed.js"

import "bootstrap/dist/css/bootstrap.min.css"
//import "particles.js/demo/js/app.js"
import { createApp } from 'vue'
//import { createPinia } from 'pinia'
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from './views/HomeView.vue'
import AboutView from "./views/AboutView.vue"
import ContactView from "./views/ContactView.vue"
import SchoolView from "./views/SchoolView.vue"
import SkillsView from "./views/SkillsView.vue"
import ExperienceView from "./views/ExperienceView.vue"
import App from './App.vue'

const routes = [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: {title: "IBM Abdulsalam", header: "Welcome", subtitle: "I hope you find what you are looking for!"}
    },
    {
        path: '/about',
        name: 'about',
        component: AboutView,
        meta: {title: "About IBM Abdulsalam", header: "About Me", subtitle: "Get to know my background, passions, and commitment to technological innovation."}
      },
      {
        path: '/qualifications',
        name: 'school',
        component: SchoolView,
        meta: {title: "Welcome", header: "Ibraheem Mobolaji Abdulsalam", subtitle: "yes"}
      },
      {
        path: '/skills',
        name: 'skills',
        component: SkillsView,
        meta: {title: "Proficiency", header: "Skills", 
          subtitle: "Showcasing innovative projects that merge creativity and cutting-edge technology."}
      },
      {
        path: '/experience',
        name: 'experience',
        component: ExperienceView,
        meta: {
          title: "My Expericence", 
          header: "My Expericence", 
          subtitle: "Explore my diverse professional journey across engineering, robotics, programming, and education."
        }
      },
      {
        path: '/contact',
        name: 'contact',
        component: ContactView,
        meta: {
          title: "Contact Me", 
          header: "Contact Me", 
          subtitle: "Reach out to collaborate, connect, or learn more about my work."}
      }
  ]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: routes
  })
router.beforeEach((to, next) =>{
  document.title = `${to.meta.title} | IBM Abdulsalam`
})

const app = createApp(App)
//app.use(createPinia())
app.use(router)
app.mount('#app')