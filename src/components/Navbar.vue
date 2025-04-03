<template>
  <div class="navbar">
    <router-link to="/" @mouseover="hoverEffect">Home</router-link>
    <router-link to="/resume">Resume</router-link>
  </div>
</template>

<script>

export default {
  name: 'Navbar',
  props: {
  },
  data() {
    return {
    }
  },
  methods: {
    
  }
}
</script>

<style lang="scss">
@import '@/styles/styles.scss';

.navbar {
  display: flex;
  gap: 15px;
  padding: 15px 0;
  width: 100%;
  justify-content: flex-end;
  font-size: 14px;
}

@media only screen and (max-width: 800px) {

}

@media only screen and (max-width: 450px) {
  
}

</style>
