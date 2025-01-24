<script setup>
import { RouterView, useRoute } from 'vue-router'
import NavBar from './views/NavBar.vue'
import { onMounted, ref } from 'vue'
const route = useRoute()
const navs = [
  {
    name: 'Home',
    loc: '/',
    icon: 'fas fa-home',
  },
  {
    name: 'about',
    loc: '/about',
    icon: 'fas fa-user-circle',
  },
  {
    name: 'Experience',
    loc: '/experience',
    icon: 'far fa-calendar-alt',
  },
  {
    name: 'Skills',
    loc: '/skills',
    icon: 'fas fa-user-circle',
  },
  /*{
    name: 'Portfolio',
    loc: '/about',
    icon: 'fas fa-user-circle',
  },*/
  {
    name: 'Contact',
    loc: '/contact',
    icon: 'fas fa-headset',
  },
]
/*
var rc = document.getElementById('rotateChars')
      var text = rc.innerText.trim()
      var len = text.length
      var grp = len / 2
      var html = ""
      while (len > -1) {
          var txt = text.charAt(len)
          html = `<span style="animation-delay:${len / grp}s" class="indChar ${txt.trim() === "" ? "" : "d-inline-block"} ">${txt}</span>${html}`
          len--
      }
      rc.innerHTML = html
      
      var audioEnabled = false
      var wik = document.getElementById('wik')
      var navLinks = document.getElementsByClassName('nav-link')
      for (var n of navLinks) {
          n.addEventListener('mouseover', function () { if (audioEnabled) { wik.currentTime = 0; wik.play() } })
      }
      
      var enableMusic = window.addEventListener('click', function () {
          var myAudio = document.getElementById('myAudio')
          myAudio.volume = 0.5;
          myAudio.play()
          audioEnabled = true
          document.getElementById('mouse').style.animationPlayState = "paused"
          removeEventListener('click', enableMusic)
      })
          */

const metaThemeColor = document.querySelector("meta[name='theme-color']")
const theme = ref(localStorage.getItem('meTheme') || 'light')
const toggleTheme = () => {
  theme.value = theme.value === 'dark' ? 'light' : 'dark'
  localStorage.setItem('meTheme', theme.value)
  document.body.setAttribute('data-bs-theme', theme.value)
  metaThemeColor.setAttribute('content', theme.value)
  //document.documentElement['data-bs-theme'] = theme.value
  //console.log(document.documentElement["data-bs-theme"])
}

onMounted(() => {
  document.body.setAttribute('data-bs-theme', theme.value)
  metaThemeColor.setAttribute('content', theme.value)
})
</script>

<template>
  <!--audio id="myAudio">
    <source src="/music/music.mp3" type="audio/mp3" />
  </audio>
  <audio id="wik">
    <source src="/music/wik.mp3" type="audio/mp3" />
  </audio-->

    <div class="row justify-content-center align-items-center" v-if="route.path !=='/ff' ">
      <div
        class=".text-center d-flex justify-content-center align-items-center .mb-5 py-3 sticky-top"
      >
        <!--img
          class="img-thumbnail img-responsive .w-100 rounded-circle shadow-sm"
          src="/img/profile.jpg"
          alt=""
          width="75"
        /-->
        <div>
          <h2 class="fw-bold text-center">
            {{ route.meta.header }}
            <span>
              <button @click="toggleTheme" class="btn header-action-item">
                <div v-if="theme === 'dark'">
                  <i class="fa-regular fa-sun fs-4 fa-2x"></i>
                </div>
                <div v-if="theme === 'light'">
                  <i class="fa-solid fa-circle-half-stroke fs-4 fa-2x text-dark"></i>
                </div>
              </button>
            </span>
          </h2>
          <p class="text-muted">{{ route.meta.subtitle }}</p>
        </div>
      </div>
    </div>
    <div class="row justify-content-center align-items-center mb-3" style="height: 80vh; overflow: auto">
      <RouterView />
    </div>
    <div class="row justify-content-center align-items-center">
      <div class=".col-lg-10 .col-md-10 col-12 mx-auto">
        <NavBar :navs="navs" />
      </div>
    </div>
</template>
<style scoped>
html {
  overflow-x: hidden;
}

body {
  font-family: 'Montserrat', 'Inter', sans-serif;
  overflow: hidden;
}

#secondNav {
  background: #ffffffd4;
}
.extraSmallFont.active {
  border-bottom: 2px solid #6195f5;
}
.textColor {
  color: #2a5a94;
}
.indChar {
  animation: rt 1s 1 linear;
  opacity: 0;
  animation-fill-mode: forwards;
}

.font400 {
  font-weight: 400 !important;
}

.nav-link {
  color: #888888;
  letter-spacing: 2px;
  font-size: 14px;
}

.nav-link:hover {
  color: #548da8;
}

.nav-link:hover::after,
.nav-link:hover::before {
  opacity: 1;
}

.nav-link:before {
  content: '\263C';
  margin-right: 4px;
  color: #cecece;
  opacity: 0;
  transition: opacity 200ms linear;
}

.nav-link:after {
  content: '\263C';
  margin-left: 4px;
  color: #cecece;
  opacity: 0;
  transition: opacity 200ms linear;
}

p.head {
  color: #616161;
  letter-spacing: 18px;
}

#mouse {
  filter: invert(50%);
  animation: flick 800ms infinite linear;
}

@keyframes flick {
  0%,
  100% {
    opacity: 0.3;
  }

  50% {
    opacity: 1;
  }
}

@keyframes rt {
  0% {
    opacity: 0;
  }

  50% {
    transform: rotateZ(180deg) translateX(-200px);
  }

  100% {
    transform: rotateZ(360deg);
    opacity: 1;
    color: #548da8;
  }
}

#bottomNav {
  transition: all 300ms linear;
}

@media screen and (max-width: 752px) {
  #bottomNav {
    transform: translateY(100%);
    opacity: 0;
  }
}

body {
  scrollbar-width: thin; /* Firefox */
  scrollbar-color: #000 #f0f0f0; /* Firefox */
}

/* WebKit-based browsers */
::-webkit-scrollbar {
  width: 5px; /* Width of the scrollbar */
  height: 12px; /* Height of the scrollbar (for horizontal scrollbars) */
}

::-webkit-scrollbar-thumb {
  background-color: #000; /* Scrollbar handle (thumb) color */
  border-radius: 6px; /* Rounded edges */
  border: 2px solid #f0f0f0; /* Space around the thumb */
}

::-webkit-scrollbar-track {
  background: #f0f0f0; /* Track color */
  border-radius: 6px; /* Rounded edges for the track */
}

::-webkit-scrollbar-thumb:hover {
  background-color: #555; /* Darker color when hovering */
}

:root [data-bs-theme='light'] {
  --primary-color: #00234d;
  --secondary-color: #f76b6a;

  --btn-primary-border-radius: 0.25rem;
  --btn-primary-color: #fff;
  --btn-primary-background-color: #00234d;
  --btn-primary-border-color: #00234d;
  --btn-primary-hover-color: #fff;
  --btn-primary-background-hover-color: #00234d;
  --btn-primary-border-hover-color: #00234d;
  --btn-primary-font-weight: 500;

  --btn-secondary-border-radius: 0.25rem;
  --btn-secondary-color: #00234d;
  --btn-secondary-background-color: transparent;
  --btn-secondary-border-color: #00234d;
  --btn-secondary-hover-color: #fff;
  --btn-secondary-background-hover-color: #00234d;
  --btn-secondary-border-hover-color: #00234d;
  --btn-secondary-font-weight: 500;

  --heading-color: #000;
  --heading-font-family: 'Poppins', sans-serif;
  --heading-font-weight: 700;

  --title-color: #000;
  --title-font-family: 'Poppins', sans-serif;
  --title-font-weight: 400;

  --body-color: #000;
  --body-background-color: #fff;
  --body-font-family: 'Poppins', sans-serif;
  --body-font-size: 14px;
  --body-font-weight: 400;

  --section-heading-color: #000;
  --section-heading-font-family: 'Poppins', sans-serif;
  --section-heading-font-size: 48px;
  --section-heading-font-weight: 600;

  --section-subheading-color: #000;
  --section-subheading-font-family: 'Poppins', sans-serif;
  --section-subheading-font-size: 16px;
  --section-subheading-font-weight: 400;
  --nav-link-color: #000;
}

:root [data-bs-theme='dark'] {
  --primary-color: #00234d;
  --secondary-color: #f76b6a;

  --btn-primary-border-radius: 0.25rem;
  --btn-primary-color: #fff;
  --btn-primary-background-color: #00234d;
  --btn-primary-border-color: #00234d;
  --btn-primary-hover-color: #fff;
  --btn-primary-background-hover-color: #00234d;
  --btn-primary-border-hover-color: #00234d;
  --btn-primary-font-weight: 500;

  --btn-secondary-border-radius: 0.25rem;
  --btn-secondary-color: #00234d;
  --btn-secondary-background-color: transparent;
  --btn-secondary-border-color: #00234d;
  --btn-secondary-hover-color: #fff;
  --btn-secondary-background-hover-color: #00234d;
  --btn-secondary-border-hover-color: #00234d;
  --btn-secondary-font-weight: 500;
  --heading-color: #fff;
  --heading-font-family: 'Poppins', sans-serif;
  --heading-font-weight: 700;

  --title-color: #fff;
  --title-font-family: 'Poppins', sans-serif;
  --title-font-weight: 400;

  --body-color: #fff;
  --body-background-color: #000;
  --body-font-family: 'Poppins', sans-serif;
  --body-font-size: 14px;
  --body-font-weight: 400;

  --section-heading-color: #fff;
  --section-heading-font-family: 'Poppins', sans-serif;
  --section-heading-font-size: 48px;
  --section-heading-font-weight: 600;

  --section-subheading-color: #fff;
  --section-subheading-font-family: 'Poppins', sans-serif;
  --section-subheading-font-size: 16px;
  --section-subheading-font-weight: 400;
  --nav-link-color: #fff;
}
</style>
