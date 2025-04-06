<template>
      <div class="current-job">
        <span class="current-job-title">
          {{ title }}
        </span>
        <span class="current-job-empl-date">
          <span>{{ employer }}</span>
          <span class="job-dates">{{ date }}</span>
        </span>
        <span class="current-job-desc" >
         <ul v-for="desc in description" :key="desc">
          <li>{{ desc }}</li>
         </ul> 
        </span>
      </div>

      <div class="thin-divider" v-if="blurb"></div>

      <div class="proud-blurb" v-if="blurb">
        <div class="blurb-title">
          Proud Moments at {{ employer }}
        </div>
        <div class="blurb-text">
          {{ blurb }}
        </div>
        <div class="blurb-text-body" v-if="moments">
          <span v-for="moment in moments" :key="moment">
            {{ moment }}
          </span>
        </div>
      </div>
      
      <div class="thick-divider extra-margin-bottom"></div>
</template>

<script>

export default {
  name: "Job",
  props: [
    'jobs', 'title', 'employer', 'date', 'description', 'moments', 'blurb'
  ]
}
</script>

<style lang="scss">
@import '@/styles/styles.scss';
.sect-title {
  text-align: left;
}
.current-job, .current-certs {
  display: flex;
  flex-flow: column;
  .current-job-title {
    font-weight: 900;
    font-size: 20px;
  }
  .current-job-empl-date {
    font-weight: 100;
    font-style: italic;
    font-size: 16px;
  }
  .current-job-desc ul {
    font-family: $sans-serif;
    display: flex;
    text-align: left;
    li {
      margin-top: -10px;
      font-weight: 300;
    }
  }
}
.certs-wrapper {
  display: flex;
  flex-flow: row;
  gap: 5px;
  text-align: left;
  .current-certs {
    width: 50%;
  }
}
.proud-blurb {
  .blurb-title {
    font-family: $sans-serif;
    text-transform: uppercase;
    color: $red;
    font-size: 16px;
    font-weight: 700;
    padding: 10px 0 0 0;
  }
  .blurb-text {
    padding: 15px 0;
    font-family: sans-serif;
    font-weight: 100;
  }
  .blurb-text-body {
    padding: 10px 0 30px 0;
    display: flex;
    flex-flow: row;
    gap: 20px;
    font-size: 14px;
    text-align: justify;
    justify-content: space-around;
    span {
      flex: 1 1 33.3%
    }
  }
}
.job-dates {
  border-left: 2px solid $black;
  padding-left: 10px;
  margin-left: 10px;
}
.skill-wrap {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  gap: 15px;
  margin: 0px 0 10px 0;
  font-style: italic;
}

.extra-margin-bottom {
  margin-bottom: 35px;
}

@media only screen and (max-width: 800px) {

}

@media only screen and (max-width: 450px) {
  .page-title {
    font-size: 54px;
    line-height: 45px;
    padding-bottom: 15px;
  }
  .proud-blurb {
    .blurb-title {
      text-align: left;
    }
    .blurb-text {
      font-size: 18px;
    }
    .blurb-text-body {
      flex-direction: column;
      font-size: 16px;
    }
  }
  .certs-wrapper {
    flex-direction: column;
    .current-certs {
      width: 100%;
    }
  }
}
</style>
