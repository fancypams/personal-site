<template>
  <div class="masthead-wrapper">
    <div class="masthead-data">
      <div class="date">
        {{ getNameDay() }}
        <span class="weather-icon" :class="iconClass"></span>
      </div>
      <div class="thick-divider"></div>
      <div class="city">
        Seattle, WA
      </div>
      <div class="thin-divider"></div>
      <div class="certs">
        Product Manager<br>
        Certified Scrum Master
      </div>
    </div>
    <div class="name-title">
      Pamela<br>
      Montanez
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Masthead',
  props: {
  },
  data() {
    return {
      weather: null,
      iconClass: ['fa-solid']
    }
  },
  mounted() {
    axios
      .get('https://api.weatherapi.com/v1/current.json?key=b0c1c95d4c7942faab210856250404&q=98126&aqi=no')
      .then(response => {
        this.weather = response.data.current.condition.text
        console.info(this.weather)
        switch (this.weather.toLowerCase()) {
          case 'clear':
            this.iconClass.push('fa-cloud-sun');
            break;
          case 'sunny':
            this.iconClass.push('fa-sun');
            break;
          case 'cloudy':
            this.iconClass.push('fa-cloud');
            break;
          case 'partly cloudy':
            this.iconClass.push('fa-cloud-sun-rain');
            break;
          case 'rain':
            this.iconClass.push('fa-cloud-showers-heavy');
            break;
        }
      })
  },
  methods: {
    getNameDay: function() {
      let day = new Date().getDay();
      let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
      return days[day]
    }
  }
}
</script>

<style lang="scss">
@import '@/styles/styles.scss';

.masthead-wrapper {
  display: flex;
  gap: 40px;
  padding: 15px 0;
  border-bottom: solid 1px $black;
}
.masthead-data {
  display: flex;
  flex-direction: column;
  gap: 5px;
}
.date {
  font-family: $sans-serif;
  text-transform: uppercase;
  font-weight: 700;
  color: $gray;
  font-size: 20px;
  display: flex;
  flex-direction: row;
  gap: 10px;
  letter-spacing: 1px;
  .weather-icon {
    width: 20px;
    color: $gray !important;
    padding-top: 2px;
  }
}
.city {
  font-size: 16px;
}
.certs {
  font-weight: bold;
  font-size: 16px;
}
.name-title {
  font-size: 110px;
  font-family: $heading;
  text-transform: uppercase;
  line-height: 70px;
  font-weight: 100;
}
.thick-divider {
  border-bottom: solid 4px $black;
  width: 25px;
  margin: 8px 0;
}
.thin-divider {
  border-bottom: solid 1px $black;
  width: 25px;
  margin: 8px 0;
}


@media only screen and (max-width: 900px) {
  .masthead-wrapper {
    flex-direction: column;
    gap: 0;
    padding: 0 0 15px 0;
  }
  .masthead-data .thin-divider{
    order: 5;
  }
  .name-title {
    font-size: 54px;
    line-height: 45px;;
  }
}

@media only screen and (max-width: 450px) {

}

</style>
