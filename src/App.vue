<template>
<div id="app">
  <div id="main-nav" v-if="this.windowWidth > 480" class="main-nav">
    <router-link to="/" @mouseover="hoverEffect">Home</router-link>
    <router-link to="/resume">Resume</router-link>
    <router-link to="/projects">Projects</router-link>
    <a ref="caseStudies">Case Studies</a>
    <div v-if="caseStudiesOpen" class="sub-nav">
      <router-link to="/case-studies/sgf-bot">SGF Bot</router-link>
      <router-link to="/case-studies/ritter-springs-webpage">Ritter Springs</router-link>
      <router-link to="/case-studies/sgf-wit-website">SGF WIT</router-link>
    </div>
    <router-link to="/contact">Contact</router-link>
  </div>
  <div v-show="this.windowWidth <= 480" class="main-nav">
    <span class="mobile-web-id"><a href="/">pamelamontanez.com</a></span>
    <font-awesome-icon v-if="!openMenu" @click="openMenu = !openMenu" icon="bars" class="fa-xl mobile-menu" />
    <font-awesome-icon v-if="openMenu" @click="openMenu = !openMenu" icon="times" class="fa-xl mobile-menu" />
  </div>
  <div v-show="openMenu" class="mobile-nav" ref="mobileMenu">
    <router-link to="/" @click="openMenu = false">Home</router-link>
    <router-link to="/resume" @click="openMenu = false">Resume</router-link>
    <router-link to="/projects" @click="openMenu = false">Projects</router-link>
    <router-link to="/case-studies" @click="openMenu = false">Case Studies</router-link>
    <router-link to="/contact" @click="openMenu = false">Contact</router-link>
  </div>
  <router-view />
  <div class="content"></div>
  <div class="footer">
    <p class="footer-text">
      Copyright 2019 Pamela Montanez
    </p>
  </div>
</div>
</template>

<script>

export default {
  name: 'App',
  components: {
  },
  data() {
    return {
      caseStudiesOpen: false,
      openMenu: false,
      windowWidth: window.innerWidth
    }
  },
  mounted() {
    window.addEventListener('click', this.clickHandler)
    window.addEventListener('resize', this.onResize)
  },
  methods: {
    onResize() {
        this.windowWidth = window.innerWidth
    },
    clickHandler(e) {
      if (e.target === this.$refs.caseStudies && !this.caseStudiesOpen) {
        this.caseStudiesOpen = true
      } else {
        this.caseStudiesOpen = false
      }
    },
    toggleMenu(e) {
      if (!this.$refs.mobileMenu.contains(e.target)) {
        this.openMenu = false
      }
    }
  },
  watch: {
    openMenu(val) {
      if (val) {
        setTimeout(() => {
          window.addEventListener('click', this.toggleMenu)
          console.log('added')
        }, 500)
        window.removeEventListener('click', this.toggleMenu)
        console.log('removed')
      }
    }
  }
}
</script>

<style lang="scss">
@import '@/styles/styles.scss';

.mobile-web-id {
  text-align: left;
  width: 100%;
  padding: 6px 0;
  height: 22px;
}

a {
  cursor: pointer;
}
</style>
