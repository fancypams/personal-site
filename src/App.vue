<template>
<div id="app">
  <div id="main-nav" class="main-nav">
    <router-link to="/">Home</router-link>
    <router-link to="/resume">Resume</router-link>
    <router-link to="/projects">Projects</router-link>
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
  }
}
</script>

<style lang="scss">
@import '@/styles/styles.scss';
</style>
