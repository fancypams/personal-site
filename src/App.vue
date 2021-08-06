<template>
<div id="app">
  <div id="main-nav" class="main-nav">
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
      caseStudiesOpen: false
    }
  },
  mounted() {
    window.addEventListener('click', e => {
      if (e.target === this.$refs.caseStudies && !this.caseStudiesOpen) {
        this.caseStudiesOpen = true
      } else {
        this.caseStudiesOpen = false
      }
    })
  }
}
</script>

<style lang="scss">
@import '@/styles/styles.scss';

a {
  cursor: pointer;
}
</style>
