<template>
    <div class="resume-content">
      <h1 class="resume-name">Pamela Montanez</h1>
      <h2 class="resume-goal">My goals are relatively simple: do exceptional work and do it in web. I am a resourceful student of web design
      and development and I excel at working with people and delivering results.</h2>

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
                {title:'UI/UX Developer II', employer:"O'Reilly Auto Parts", date:'June 2020 - present', description:'Front end development for the O’Reilly online store using Vue.js, LESS, Thymeleaf, HTML, CSS, and JavaScript; Active involvement in ADA compliance task force for online store; Work with solution design team on new user experience driven features and improvements' },
                {title:'UI/UX Developer II', employer:"O'Reilly Auto Parts", date:'Dec. 2018 - June 2020', description:'Design and develop solutions for point of sale team members using Java, JavaFX, and SASS; Determine and implement style standards across all Retail projects; Develop style guide application for interactive use of style standards' },
                {title:'Web Designer', employer:'Springfield-Greene County Park Board', date:'June 2016 - March 2019', description:'Design, produce, and maintain web pages and web applications with HTML, CSS, JavaScript, SharePoint and various CMS; Create graphics for site and e-newsletter for email distribution; Monitor, analyze, and report web traffic and utilization via Google Analytics; Youtube Bumper Ads and Google AdSense' },
                {title:'Marketing Manager', employer:'The Lamp Stand', date:'July 2015 - June 2016', description:'Amazon store implementation and maintenance; Manage site-wide promotions and pricing; Website content maintenance; Social Media content and graphics; Email newsletter; Research and development of new avenues for retail sales; Team management; Product Photography' },
                {title:'Marketing Coordinator', employer:'Meyer ASG', date:'Sept. 2014 - July 2015', description:'Social media content; Website design and maintenance in CMS using HTML, CSS; Graphic design and marketing content creation; Blogging; Product photography; Email newsletter; Social Media' }
            ],
            edus: [
                {school:'FreeCodeCamp', degree:['Responsive Web Design Certification', 'JavaScript Alogrithms and Data Structures Certification'], date:'July 2018'},
                {school:'Evangel University', degree:['Bachelor of Arts in Film', 'Minor in Digital Arts'], date:'May 2012'}
            ],
            skills: [ 
                'HTML', 
                'CSS', 
                'Sass', 
                'Vue.js',
                'FXML', 
                'JavaScript', 
                'Java',
                'JavaFX', 
                'VSCode',
                'IntelliJ IDEA', 
                'Git', 
                'Photoshop',
                'XD'
            ]
        }
    },
    mounted() {

    },
    methods: {

    }
}
</script>
