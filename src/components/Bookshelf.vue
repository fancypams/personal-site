<template>
    <div>
      
    </div>
</template>

<script>
import axios from 'axios'

export default {
  name: "Bookshelf",
  props: {
  },
  data() {
      return {

      }
  },
  mounted() {
    axios
      .get('https://api.weatherapi.com/v1/current.json?key=b0c1c95d4c7942faab210856250404&q=98126&aqi=no')
      .then(response => (this.weather = response.data.current.condition.text))
  },
  methods: {

  }
}
</script>

<style lang="scss">
@import '@/styles/styles.scss';


@media only screen and (max-width: 800px) {

}

@media only screen and (max-width: 450px) {
  
}
</style>
