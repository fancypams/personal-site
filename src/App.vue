<template>
  <Navbar />
  <router-view></router-view>
  <Footer />
</template>

<script>
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    Navbar,
    Footer
  }
}
</script>

<style lang="scss">
@import '@/styles/styles.scss';

#app {
  display: flex;
  flex-direction: column;
  padding: 0 150px;
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

@media only screen and (max-width: 900px) {
  #app {
    padding: 0 100px;
  }
}

@media only screen and (max-width: 450px) {
  #app {
    padding: 0 20px;
  }
  
}
</style>
