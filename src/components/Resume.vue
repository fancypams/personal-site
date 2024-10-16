<template>
    <div class="resume-content">
      <h1 class="page-title resume-name">Pamela Montanez</h1>
      <!-- <h2 class="resume-goal">I am a resourceful web developer who excels at working with people and delivering results.</h2> -->

    <section>
      <div class="sect-title">
        <h2>Experience</h2>
      </div>
      <div v-for="job in jobs" :key="job">
        <div class="three-cols">
          <div class="col-1">
            <h3 class="job-title">{{ job.title }}</h3>
            <p class="employer">{{ job.employer }}</p>
          </div>
          <div class="col-2">
            <p>{{ job.description }}</p>
          </div>
          <div class="col-3">
            <p class="employer">{{ job.date }}</p>
          </div>
        </div>
      </div>
    </section>

    <section class="sections">
      <div class="section education">
        <div class="sect-title">
          <h2>Education</h2>
        </div>
        <div v-for="edu in edus" :key="edu">
          <div class="two-cols">
            <div class="col-1">
                <h3>{{ edu.school }}</h3>
                <p>{{ edu.degree[0] }}</p>
                <p>{{ edu.degree[1] }}</p>
            </div>
            <div class="col-2">
                <p class="employer">{{ edu.date }}</p>
            </div>
          </div>
        </div>
      </div>
      <div class="section skills">
        <div class="sect-title">
          <h2>Skills</h2>
        </div>
        <div class="skill-wrap">
          <div v-for="skill in skills" :key="skill" class="skill-item">
            {{ skill }}
          </div>
        </div>
      </div>
    </section>
</div>
</template>

<script>
export default {
    data() {
        return {
            jobs: [
                {title:'Senior UX Engineer', employer:"WaFd Bank", date:'January 2022 - present', description:'Lead front end agile development team and own UX roadmap of the web based online banking application; Implement Tealium Customer Data Platform integration with internal data sources to produce user personalization resulting in enhanced experiences and an 8% YTD increase in account openings; Lead analytics initiatives to establish comprehensive user flow reports, identifying pain points and areas for improvement, which inform development iterations and enhance overall user experience; Recognized as the go-to solution maker for emerging challenges, consistently delivering innovative strategies and actionable insights to drive project success and enhance team performance' },
                {title:'UI/UX Developer II', employer:"O'Reilly Auto Parts", date:'Dec. 2018 - Dec. 2021', description:'Developed and maintained the front-end code of the O\'Reilly online store; Owned ADA compliance task force to ensure accessibility standards were met across the online store; Created an interactive style guide application to streamline multi-team development and provide users with a unified experience' },
                // {title:'UI/UX Developer II', employer:"O'Reilly Auto Parts", date:'Dec. 2018 - June 2020', description:'' },
                {title:'Web Designer', employer:'Springfield-Greene County Park Board', date:'June 2016 - March 2019', description:'Designed and produced engaging web pages with a focus on functionality and guided user flows; Spearheaded visitor park garden tour experience with a 60% engagement increase; Data based improvement vision casting for cross department website enhancements targeted specifically around connecting users to needed resources' },
                {title:'Marketing Manager', employer:'The Lamp Stand', date:'July 2015 - June 2016', description:'Amazon store implementation and maintenance; Vision set and launch new sales avenue producing business growth by 33% within 2 months of launch; Design and manage all promotions across all ecommerce sites' },
                {title:'Marketing Coordinator', employer:'Meyer ASG', date:'Sept. 2014 - July 2015', description:'Design and develop company website and marketing materials; Organize community events with local AIGA chapters to enhance artistic value and business networking opportunities' }
            ],
            edus: [
                {school:'FreeCodeCamp', degree:['Responsive Web Design Certification', 'JavaScript Alogrithms and Data Structures Certification'], date:'July 2018'},
                {school:'Evangel University', degree:['Bachelor of Arts in Film', 'Minor in Digital Arts'], date:'May 2012'}
            ],
            skills: [ 
                'HTML', 
                'CSS', 
                'Sass',
                'JavaScript',
                'Vue.js', 
                'Java',
                'JavaFX',
                'FXML',  
                'Mendix', 
                'VSCode',
                'IntelliJ IDEA', 
                'Git', 
                'Photoshop',
                'XD',
                'Figma',
                'Google Tag Manager',
                'Tealium'
            ]
        }
    },
    mounted() {

    },
    methods: {

    }
}
</script>

<style lang="scss">
@import '@/styles/styles.scss';

.resume-content {
  text-align: center; 
  max-width: 1000px;
  margin: auto;
}
.resume-name {
  padding-left: 20px;
}
.sect-title {
  background-color: $yellow;
  color: $white;
  max-width: 400px;
  text-align: left;
  // margin-left: 20px;
  padding: 0 10px 0 10px; 
}
@media only screen and (max-width: 800px) {
  .resume-content {
    margin: auto 25px;
  }
  .resume-name {
    padding-left: 5px;
  }
}

@media only screen and (max-width: 450px) {
  
}
</style>
