<template>
    <div id="resume-content" class="resume-content">
      <h1 class="resume-name">Pamela Montanez</h1>
      <h2 class="resume-goal">My goals are relatively simple: do exceptional work and do it in web. I am a resourceful student of web design
      and development and I excel at working with people and delivering results.</h2>

    <section class="sections">
      <div class="sect-title">
        <h2>Experience</h2>
      </div>
      <template id="resumeJobs">
        <div class="three-cols">
          <div class="col-1">
            <h3 class="job-title"></h3>
            <p class="employer"></p>
          </div>
          <div class="col-2">
            <p></p>
          </div>
          <div class="col-3">
            <p class="employer"></p>
          </div>
        </div>
      </template>
    </section>

    <section class="sections">
      <div class="sect-title">
        <h2>Education</h2>
      </div>
      <template id="resumeEdu">
        <div class="two-cols">
          <div class="col-1">
              <h3></h3>
              <p></p>
          </div>
          <div class="col-2">
              <p class="employer"></p>
          </div>
        </div>
      </template>
    </section>

    <section class="sections">
      <div class="sect-title">
        <h2>Skills</h2>
      </div>
      <template id="resumeSkills">
        <div class="one-col">
          <div class="col-1">
              <p></p>
          </div>
        </div>
      </template>
    </section>
</div>
</template>

<script>
export default {
    data() {
        return {
            jobs: [
                {title:'UI/UX Developer II', employer:"O'Reilly Auto Parts", date:'Dec. 2018 - present', description:'Front End Development for the retail point of sale system across three teams; Design and develop UI/UX for elements, components, and screens; Determine and implement style standards across multiple projects; Develop Style Guide application for interactive use of style standards' },
                {title:'Web Designer', employer:'Springfield-Greene County Park Board', date:'June 2016 - March 2019', description:'Design, produce, and maintain internal and external web pages and web applications utilizing HTML, CSS, JavaScript, SharePoint and various CMS; Content creation including graphics, animation, and video for web pages utilizing Adobe Creative Suite; Monitor, analyze, and report web traffic and utilization via Google Analytics' },
                {title:'Marketing Manager', employer:'The Lamp Stand', date:'July 2015 - June 2016', description:'Amazon store implementation and maintenance; Weekly sale ad design and implementation; Manage sitewide promotions and pricing; Website content maintenance, Social Media content and graphics; Email newsletter content, development, and implementation; Research and development of new avenues for retail sales' },
                {title:'Marketing Coordinator', employer:'Meyer ASG', date:'Sept. 2014 - July 2015', description:'Social media content; Website design; WordPress development; Graphic design for client projects; Graphic design for marketing collateral; Marketing material content development; Blogging; Product photography; Email newsletter content, development, and implementation; Social Media networking' },
                {title:'Marketing/Administrative Assistant', employer:'SSOE', date:'Nov. 2012 - Sept. 2014', description:'Proposal copy; Proposal formatting and editing; Marketing and PR copy writing for business unit; Recruiting infographic design; Client presentations; Marketing collateral upkeep; Internal business analysis; Project Controls and support; Document management; Vendor coordination; Value engineering tracking' }
            ],
            edus: [
                {school:'FreeCodeCamp', degree:['Responsive Web Design Certification', 'JavaScript Alogrithms and Data Structures Certification'], date:'July 2018'},
                {school:'Evangel University', degree:'Bachelor of Arts in Film, minor in Digital Arts', date:'May 2012'}
            ],
            skills: [
                'Solution Design', 
                'HTML', 
                'CSS', 
                'Sass', 
                'FXML', 
                'JavaScript', 
                'Java',
                'JavaFX', 
                'IntelliJ IDEA', 
                'Git', 
                'Photoshop', 
                'Premiere', 
                'InDesign', 
                'XD'
            ]
        }
    },
    mounted() {
        this.getJobs()
        this.getEducation()
        this.getSkills()
    },
    methods: {
        getJobs() {
            var jobTemplate = document.querySelector('#resumeJobs')

            this.jobs.forEach(job => {
                var clone = jobTemplate.content.cloneNode(true)
                var title = clone.querySelectorAll('h3')
                title[0].innerHTML = job.title
                var employer = clone.querySelectorAll('p')
                employer[0].innerHTML = job.employer
                var description = clone.querySelectorAll('p')
                description[1].innerHTML = job.description
                var date = clone.querySelectorAll('p')
                date[2].innerHTML = job.date
                jobTemplate.parentNode.appendChild(clone)
            })
        },
        getEducation() {
            var eduTemplate = document.querySelector('#resumeEdu')

            this.edus.forEach(edu => {
                var eduClone = eduTemplate.content.cloneNode(true)
                var school = eduClone.querySelectorAll('h3')
                school[0].innerHTML = edu.school
                var degree = eduClone.querySelectorAll('p')
                degree[0].innerHTML = edu.degree
                var date = eduClone.querySelectorAll('p')
                date[1].innerHTML = edu.date
                eduTemplate.parentNode.appendChild(eduClone)
            })
        },
        getSkills() {
            var skillsTemplate = document.querySelector('#resumeSkills')

            this.skills.forEach(skill => {
                var skillClone = skillsTemplate.content.cloneNode(true);
                var skil = skillClone.querySelectorAll('p');
                skil[0].innerHTML = skill;
                skillsTemplate.parentNode.appendChild(skillClone);
            })
        }
    }
}
</script>
