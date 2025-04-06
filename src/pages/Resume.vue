<template>
    <div class="resume-content">
      <div class="page-title resume-name">The Resume</div>
      <div class="resume-goal">
        My goals are simple: <span class="italic">share the vision and do good work</span>.
        <br>
        My experience in website design, front-end development, and user analytics has 
        made me uniquely qualified to translate complex user needs into actionable product 
        strategies. I have learned that by taking the time to discover a user's tendency 
        and comparing this with business priorities, I can turn application roadblocks 
        into intuitive solutions.
      </div>

    <div class="sect-title">
      <h2>Experience</h2>
      <Job v-for="job in jobs"
        :key="job"
        :title="job.title"
        :employer="job.employer"
        :date="job.date"
        :description="job.description"
        :blurb="job.blurb"
        :moments="job.moments"
      />
    </div>  

    <div class="sect-title">
      <h2>Certifications</h2>
    </div> 

    <div class="certs-wrapper">
      <section class="current-certs" v-for="cert in certs" :key="cert">
        <span class="current-job-title">
          {{ cert.degree }}
        </span>
        <span class="current-job-empl-date">
          {{ cert.school }}
          {{ cert.date }}
        </span>

        <div class="thin-divider"></div>
    </section>

    </div>

    <div class="sect-title">
      <h2>Education</h2>
    </div> 

    <div class="certs-wrapper">
      <section class="current-certs" v-for="edu in edus" :key="edu">
        <span class="current-job-title">
          {{ edu.degree[0] }}
        </span>
        <span class="current-job-empl-date">
          {{ edu.school }}
          {{ edu.date }}
        </span>

        <div class="thin-divider"></div>
    </section>
    </div>

    <div class="sect-title">
        <h2>Skills</h2>
    </div>

    <div class="skills">
        <div class="skill-wrap">
          <div v-for="skill in skills" :key="skill" class="skill-item">
            {{ skill }}
          </div>
        </div>
      </div>
</div>
</template>

<script>
import Job from '@/components/Job.vue'

export default {
  name: "Resume",
  components: {
    Job
  },
  data() {
      return {
          jobs: [
              {
                title:'Online and Mobile Banking Products Manager', 
                employer:"WaFd Bank", 
                date:'Dec. 2024 - present', 
                description:[
                  'Own product end to end for Consumer Online Banking, Consumber Mobile Banking, Digital Account Opening, and Digital Banking Support applications.',
                  'Work with stakeholders across the organization to define scope, create a vision, determine trade-offs, and build consensus to deliver engaging product features',
                  'Drive end-to-end responsibility and ownership for product features/capabilities from concept to the finish line',
                  'Conduct industry research, consult with compliance, and analyze data to ensure the viability of new features and product changes',
                  'Contribute to prioritizing and driving alignment for a varied product roadmap across a diverse set of stakeholders including product partners, marketing, engineering, design, legal, finance, and operations',
                  'Define KPIs, track the health of products, and understand changes in behavior/data',
                  'Conduct analysis of feedback to identify platform innovation opportunities or root cause of issues and assess opportunity, size, and impact',
                  'Communicate and influence ideas at C-Suite level and below including regularly delivering product feature demos',
                  'Recommend product feature set or technical improvements to improve customer experience'
                ],
                blurb: 'Within 2 months of taking on the role of Product Manager, I provided 2 specific solutions that resulted in saving WaFd $80-$90k per month in spend as well as solved a bug that was impacting client retention.',
                moments: [
                  'Our new mobile app was launched just as I came on board as Product Manager. The spike in volume to our CDH began causing a $30-40k per month overage. As SDK documentation was followed and tested prior to launch, teams were puzzled at this particular issue. After analyzing event logs and I was able to identify particular collector in the SDK that was causing larger than expected volume usage. This particular collector did not provide us business benefit. I walked through this change with stakeholders and development teams and we launched a hotfix in the mobile app. Post hotfix, event volume normalized at expected rates and our overage costs were contained.',
                  'Another overage was spotted by a product partner after launch of the mobile app. In this case, every time the mobile app dashboard loaded, a product API was called to check if that user even had this product. If so, the app displays the sub-products. The problem is that only a small subset of users actually have this product type and we are charged by call. The solve? Change the UX! I proposed waiting to call the API until the user actually looked for it. With this change, we reduced API calls from 200k to 3,000 per week and cost savings of $50k per month.',
                  'My final quick win is about good communication and ownership. I came on board and was added to a long email loop where a bug was passed between our engineers and vendor teams. Both said the issue was with the other. After hearing we lost a client over this bug, I begain my own analysis. The bug appeared to be how our application was cacheing a particular token and as a result forced an error inside the vendor product - understandably confusing but also straightforward. The issue was simple, yet needed follow through. My technical background paired with cross-team communication resulted in a long term fix and greatly improved client experience.'
                ]
              },
              {
                title:'Lead UX Engineer', 
                employer:"WaFd Bank", 
                date:'Jan. 2022 - Dec. 2024', 
                description: [
                  'Lead front end agile development team to complete roadmap of the web based Online Banking and Digital Account Opening applications',
                  'Implement pixel-perfect, responsive UI components based on designs from our design team',
                  'Collaborate with the design team to ensure smooth transitions between prototypes and functional implementations',
                  'Develop custom, highly interactive user interfaces using React, Mendix, and Sass',
                  'Optimize performance and ensure smooth interactions using modern frontend best practices',
                  'Ensure accessibility and usability across all WaFd tools, making consumer banking more inclusive',
                  'Suggest personalization opportunities and implement personalization plans using Tealium',
                  'Analyze website analytics and propose solutions to identified user experience gaps'
                ],
                blurb: 'As Lead UX Engineer, I had the opportunity to mentor other developers, implement large personalization efforts, and create new user focused features in the Online Banking Application.',
            },
              {
                title:'UI/UX Developer II', 
                employer:"O'Reilly Auto Parts", 
                date:'Dec. 2018 - Dec. 2021', 
                description:[
                  'Developed and maintained the front-end code of the O\'Reilly online store',
                  'Create reusable UI/UX components that are scalable, performant, and easy to integrate across multiple projects',
                  'Lead ADA compliance task force to ensure accessibility standards were met across the online store',
                  'Created an interactive style guide application to streamline multi-team development and provide users with a unified experience',
                  'Team Style Guide Expert'
                ],
                blurb: 'As UI/UX Developer II, I became a style guide expert, created an interactive style guide app, owned our ADA Compliance Task Force, and worked with third parties to integrate fraud mitigation tools seemlessly into the user experience.',
                moments: [
                  'When I first started at O\'Reilly, I worked on the Retail Point of Sale System. It was quite an interesting time to join the team as the application was undergoing a full code base re-write and up until this point there was no UI/UX developer at the healm guiding the client experience because it was an internally facing application. Right off the bat I spent time getting up to speed on the technical documentation for the application and the intent of how it should work and what new features were being added in the re-write. Once I had this scope, I was able to create clean and reusable components that the team could leaverage to re-build the application.',
                  'One of my favorite projects on the ecommerce (oreillyauto.com) website was integrating a third party fraud prevention service in the checkout flow at card processing. There were many complications in this effort, but from a UI/UX perspective especially the implementation was not built with the user in mind. I took this third party system and integrated it into the online store in part by leaveraging window.postMessage(). Once we were able to communicate between our site and the partner site, I was able to build out a seamless user experience. '
                ]
              },
              {
                title:'Web Designer', 
                employer:'Springfield-Greene County Park Board', 
                date:'June 2016 - March 2019', 
                description:[
                  'Designed and produced engaging web pages with a focus on functionality and guided user flow',
                  'Spearheaded visitor park garden tour experience with a 60% engagement increase',
                  'Data based improvement vision casting for cross department website enhancements targeted specifically around connecting users to needed resources',
                  'Design responsive sites for The Park Board and Park owned golf courses',
                  'Create a mixture of unique, specific pages and comprehensive visual systems for each client',
                  'Take creative control of projects, serving as the key point of contact for project design direction and decisions',
                  'Create new design solutions and work within existing structures',
                  'Interact closely with various team members to ensure all departments were able to serve their communities fully utilizing the website resources'
                ]
              },
              {
                title:'Marketing Manager', 
                employer:'The Lamp Stand', 
                date:'July 2015 - June 2016', 
                description:[
                  'Amazon store implementation and maintenance',
                  'Vision set and launch new sales avenue producing business growth by 33% within 2 months of launch',
                  'Design and manage all promotions across all ecommerce sites',

                ]
              },
              {
                title:'Marketing Coordinator', 
                employer:'Meyer ASG', 
                date:'Sept. 2014 - July 2015', 
                description:[
                  'Design and develop company website and marketing materials',
                  'Organize community events with local AIGA chapters to enhance artistic value and business networking opportunities'
                ]
              }
          ],
          certs: [
              {school:'Scrum Alliance', degree: 'Certified Scrum Master', date:'April 2025'},
              {school:'FreeCodeCamp', degree:'Responsive Web Design Certification', date:'July 2018'},
              {school:'FreeCodeCamp', degree:'JavaScript Alogrithms and Data Structures Certification', date:'July 2018'},
          ],
          edus: [
              {school:'Evangel University', degree:['Bachelor of Arts in Film', 'Minor in Digital Arts'], date:'May 2012'}
          ],
          skills: [ 
              'HTML', 
              'CSS', 
              'Sass',
              'Javascript',
              'Vue.js',
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
              'Tealium',
              'Heap'
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
  text-align: justify;
  .resume-goal {
      padding: 20px 0;
    }
}
.resume-name {
  font-family: $heading;
  font-size: 128px;
  text-transform: uppercase;
  font-weight: 100;
  border-bottom: double 3px $black;
  text-align: center;
  margin: auto;
}
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
