<template>
  <AppNav />
  <RouterView v-slot="{ Component }">
    <Transition name="page" mode="out-in">
      <component :is="Component" />
    </Transition>
  </RouterView>
  <AppFooter />
</template>

<script setup>
import AppNav from './components/AppNav.vue'
import AppFooter from './components/AppFooter.vue'
</script>
