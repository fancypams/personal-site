<template>
  <div class="masthead-wrapper">
    <div class="masthead-data">
      <div class="date">
        {{ getNameDay() }}
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M294.2 1.2c5.1 2.1 8.7 6.7 9.6 12.1l10.4 62.4c-23.3 10.8-42.9 28.4-56 50.3c-14.6-9-31.8-14.1-50.2-14.1c-53 0-96 43-96 96c0 35.5 19.3 66.6 48 83.2c.8 31.8 13.2 60.7 33.1 82.7l-56 39.2c-4.5 3.2-10.3 3.8-15.4 1.6s-8.7-6.7-9.6-12.1L98.1 317.9 13.4 303.8c-5.4-.9-10-4.5-12.1-9.6s-1.5-10.9 1.6-15.4L52.5 208 2.9 137.2c-3.2-4.5-3.8-10.3-1.6-15.4s6.7-8.7 12.1-9.6L98.1 98.1l14.1-84.7c.9-5.4 4.5-10 9.6-12.1s10.9-1.5 15.4 1.6L208 52.5 278.8 2.9c4.5-3.2 10.3-3.8 15.4-1.6zM208 144c13.8 0 26.7 4.4 37.1 11.9c-1.2 4.1-2.2 8.3-3 12.6c-37.9 14.6-67.2 46.6-77.8 86.4C151.8 243.1 144 226.5 144 208c0-35.3 28.7-64 64-64zm69.4 276c11 7.4 14 22.3 6.7 33.3l-32 48c-7.4 11-22.3 14-33.3 6.7s-14-22.3-6.7-33.3l32-48c7.4-11 22.3-14 33.3-6.7zm96 0c11 7.4 14 22.3 6.7 33.3l-32 48c-7.4 11-22.3 14-33.3 6.7s-14-22.3-6.7-33.3l32-48c7.4-11 22.3-14 33.3-6.7zm96 0c11 7.4 14 22.3 6.7 33.3l-32 48c-7.4 11-22.3 14-33.3 6.7s-14-22.3-6.7-33.3l32-48c7.4-11 22.3-14 33.3-6.7zm96 0c11 7.4 14 22.3 6.7 33.3l-32 48c-7.4 11-22.3 14-33.3 6.7s-14-22.3-6.7-33.3l32-48c7.4-11 22.3-14 33.3-6.7zm74.5-116.1c0 44.2-35.8 80-80 80l-271.9 0c-53 0-96-43-96-96c0-47.6 34.6-87 80-94.6l0-1.3c0-53 43-96 96-96c34.9 0 65.4 18.6 82.2 46.4c13-9.1 28.8-14.4 45.8-14.4c44.2 0 80 35.8 80 80c0 5.9-.6 11.7-1.9 17.2c37.4 6.7 65.8 39.4 65.8 78.7z"/></svg>
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

export default {
  name: 'Masthead',
  props: {
  },
  data() {
    return {
    }
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
  font-family: 'Inter', sans-serif;
  text-transform: uppercase;
  font-weight: 700;
  color: $gray;
  font-size: 20px;
  display: flex;
  flex-direction: row;
  gap: 10px;
  letter-spacing: 1px;
  svg {
    width: 20px;
    color: $gray !important;
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
  font-family: 'Rozha One', serif;
  text-transform: uppercase;
  line-height: 70px;
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


@media only screen and (max-width: 800px) {

}

@media only screen and (max-width: 450px) {
  
}

</style>
