<template>
  <Masthead />
  <Home />
  <Footer />
</template>

<script>
import Masthead from './components/Masthead.vue'
import Footer from './components/Footer.vue'
import Home from './components/Home.vue'

export default {
  name: 'App',
  components: {
    Masthead,
    Footer,
    Home
  }
}
</script>

<style lang="scss">
@import '@/styles/styles.scss';

#app {
  display: flex;
  flex-direction: column;
  width: 1200px;
  height: 100%;
  margin: auto;
}

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
