<template>
    <div class="resume-content">
      <div class="page-title resume-name">The Resume</div>
      <div class="resume-goal">
        My goals are simple: <span class="employer">share the vision and do good work</span>.
        <br>
        My experience in website design, front-end development, and user analytics has 
        made me uniquely qualified to translate complex user needs into actionable product 
        strategies. I have learned that by taking the time to discover a user's tendency 
        and comparing this with business priorities, I can turn application roadblocks 
        into intuitive solutions.
      </div>

    <div class="sect-title">
      <h2>Experience</h2>
    </div>  

    <section>
      <div class="current-job">
        <span class="current-job-title">
          {{ jobs[0].title }}
        </span>
        <span class="current-job-empl-date">
          {{ jobs[0].employer }}
          {{ jobs[0].date }}
        </span>
        <span class="current-job-desc" >
         <ul v-for="desc in jobs[0].description" :key="desc">
          <li>{{ desc }}</li>
         </ul> 
        </span>
      </div>

      <div class="thin-divider"></div>

      <div class="proud-blurb">
        <div class="blurb-title">
          Proud Moments at {{ jobs[0].employer }}
        </div>
        <div class="blurb-text">
          Within 2 months of taking on the role of Product Manager, I provided 2 specific solutions that 
          resulted in saving WaFd $80-$90k per month in spend as well as solved a bug that was impacting 
          client retention.
        </div>
        <div class="blurb-text-body">
          <span>
            Our new mobile app was launched just as I came on board as Product Manager. Almost as soon as 
            the app hit production, a volume overage began causing a $30-40k per month overage. Development 
            teams were stumped as they followed product documentation to implement this particular third party 
            feature. I spent time analyzing event logs and identified that a particular collector in the 
            third party SDK was causing larger than expected volume usage and this particular collector did 
            not provide business benefit. I then walked through this change with stakeholders and development 
            teams and we launched a hotfix in the mobile app to remove this collector. Shortly after the hotfix 
            was released, I saw event volume normalize at expected rates and our overage costs were contained.
          </span>
          <span>
            Similar to the first savings example, another overage was quickly spotted after production launch 
            of the mobile app. In this case, it was due to the UX regarding displaying a particular product 
            type. Every time the mobile app dashboard loads, a product API is called to see if the user has this 
            product and if so, display the sub-products. The problem is that only a small subset of users actually 
            have this product type. So, instead of 3,000 calls per month, we are seeing 200k calls per month. The 
            solve? Change the UX. For this implementation, I simply proposed not calling the API on load, but calling 
            it when the user actually needs it. The cost savings of this simple UX enhancement resulted in another 
            savings of $50k per month in reduced overages.
          </span>
          <span>
            My final quick win to talk about is less about specific number value and more about the value of 
            client retention. There was a bug regarding a third party integration that our Operations team had 
            tried to work with the developers on that wasn’t quite getting translated well enough for a fix. Due 
            to my technical background, I was able to meet with the Operations team and understand what the issue 
            was. It was not in fact on the side of the vendor, but appeared to be how our application was cacheing 
            a particular token and as a result forced an error with the product. I brought this insight back to 
            he development team and this was in fact the issue. The bug was simple, yet due to previous miscommunication, 
            was one the bank lost clients over. My technical background paired with cross-team communication resulted 
            in a fix that will allow for a greatly improved client experience.
          </span>
        </div>
      </div>

      <div class="thick-divider extra-margin-bottom"></div>

    </section>

    <section>
      <div class="current-job">
        <span class="current-job-title">
          {{ jobs[1].title }}
        </span>
        <span class="current-job-empl-date">
          {{ jobs[1].employer }}
          {{ jobs[1].date }}
        </span>
        <span class="current-job-desc" >
         <ul v-for="desc in jobs[1].description" :key="desc">
          <li>{{ desc }}</li>
         </ul> 
        </span>
      </div>

      <div class="thin-divider"></div>

      <div class="proud-blurb">
        <div class="blurb-title">
          Proud Moments as {{ jobs[1].title }}
        </div>
        <div class="blurb-text">
          As Lead UX Engineer, I had the opportunity to mentor other developers, implement large personalization 
          efforts, and create new user focused features in the Online Banking Application.
        </div>
        <!-- <div class="blurb-text-body">
          <span>
            Our new mobile app was launched just as I came on board as Product Manager. Almost as soon as the app 
            hit production, a volume overage began causing a $30-40k per month overage. Development teams were 
            stumped as they followed product documentation to implement this particular third party feature. I spent 
            time analyzing event logs and identified that a particular collector in the third party SDK was causing 
            larger than expected volume usage and this particular collector did not provide business benefit. I then 
            walked through this change with stakeholders and development teams and we launched a hotfix in the mobile 
            app to remove this collector. Shortly after the hotfix was released, I saw event volume normalize at 
            expected rates and our overage costs were contained.
          </span>
          <span>
            My final quick win to talk about is less about specific number value and more about the value of client 
            retention. There was a bug regarding a third party integration that our Operations team had tried to work 
            with the developers on that wasn’t quite getting translated well enough for a fix. Due to my technical 
            background, I was able to meet with the Operations team and understand what the issue was. It was not in 
            fact on the side of the vendor, but appeared to be how our application was cacheing a particular token 
            and as a result forced an error with the product. I brought this insight back to the development team and 
            this was in fact the issue. The bug was simple, yet due to previous miscommunication, was one the bank lost 
            clients over. My technical background paired with cross-team communication resulted in a fix that will allow 
            for a greatly improved client experience.
          </span>
        </div>-->
      </div>

      <div class="thick-divider extra-margin-bottom"></div>
      
    </section>

    <section>
      <div class="current-job">
        <span class="current-job-title">
          {{ jobs[2].title }}
        </span>
        <span class="current-job-empl-date">
          {{ jobs[2].employer }}
          {{ jobs[2].date }}
        </span>
        <span class="current-job-desc" >
         <ul v-for="desc in jobs[2].description" :key="desc">
          <li>{{ desc }}</li>
         </ul> 
        </span>
      </div>

      <div class="thin-divider"></div>

      <div class="proud-blurb">
        <div class="blurb-title">
          Proud Moments at {{ jobs[2].employer }}
        </div>
        <div class="blurb-text">
          As UI/UX Developer II, I became a style guide expert, created an interactive style guide app, 
          owned our ADA Compliance Task Force, and worked with third parties to integrate fraud mitigation 
          tools seemlessly into the user experience.
        </div>
        <!-- <div class="blurb-text-body">
          <span>
            Our new mobile app was launched just as I came on board as Product Manager. 
            Almost as soon as the app hit production, a volume overage began causing a $30-40k 
            per month overage. Development teams were stumped as they followed product documentation 
            to implement this particular third party feature. I spent time analyzing event logs 
            and identified that a particular collector in the third party SDK was causing larger 
            than expected volume usage and this particular collector did not provide business benefit. 
            I then walked through this change with stakeholders and development teams and we launched 
            a hotfix in the mobile app to remove this collector. Shortly after the hotfix was released, 
            I saw event volume normalize at expected rates and our overage costs were contained.
          </span>
          <span>
            Similar to the first savings example, another overage was quickly spotted after production 
            launch of the mobile app. In this case, it was due to the UX regarding displaying a particular 
            product type. Every time the mobile app dashboard loads, a product API is called to see if 
            the user has this product and if so, display the sub-products. The problem is that only a 
            small subset of users actually have this product type. So, instead of 3,000 calls per month, 
            we are seeing 200k calls per month. The solve? Change the UX. For this implementation, I 
            simply proposed not calling the API on load, but calling it when the user actually needs it. 
            The cost savings of this simple UX enhancement resulted in another savings of $50k per month 
            in reduced overages.
          </span>
          <span>
            My final quick win to talk about is less about specific number value and more about the 
            value of client retention. There was a bug regarding a third party integration that our 
            Operations team had tried to work with the developers on that wasn’t quite getting translated 
            well enough for a fix. Due to my technical background, I was able to meet with the Operations 
            team and understand what the issue was. It was not in fact on the side of the vendor, but 
            appeared to be how our application was cacheing a particular token and as a result forced 
            an error with the product. I brought this insight back to the development team and this was 
            in fact the issue. The bug was simple, yet due to previous miscommunication, was one the bank 
            lost clients over. My technical background paired with cross-team communication resulted in 
            a fix that will allow for a greatly improved client experience.
          </span>
        </div>-->
      </div>

      <div class="thick-divider extra-margin-bottom"></div>
      
    </section>

    <section v-for="(job, index) in jobs" :key="job">
      <span v-if="index > 2">
        <div class="current-job">
          <span class="current-job-title">
            {{ job.title }}
          </span>
          <span class="current-job-empl-date">
            {{ job.employer }}
            {{ job.date }}
          </span>
          <span class="current-job-desc" >
          <ul v-for="desc in job.description" :key="desc">
            <li>{{ desc }}</li>
          </ul> 
          </span>
      </div>

      <div class="thin-divider extra-margin-bottom"></div>
      </span>
      
    </section>

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
export default {
  name: "Resume",
  props: {
  },
  data() {
      return {
          jobs: [
              {title:'Online and Mobile Banking Products Manager', employer:"WaFd Bank", date:'Dec. 2024 - present', 
              description:[
                'Create and vision cast Consumer Retail Banking roadmap',
                'Lead cross functional teams to execute vision, strategy, and roadmap for consumer online and mobile banking including daily scrum',
                'Ensure consumer banking applications pass audit and compliance requirements for safety and security of clients and business',
                'Lead analytics initiatives to establish comprehensive user flow reports, identifying pain points and areas for improvement',
                'Demo enhancements and report on key results'
              ]},
              {title:'Lead UX Engineer', employer:"WaFd Bank", date:'Jan. 2022 - Dec. 2024', 
              description: [
                'Lead front end agile development team to implement roadmap of the web based Online Banking application',
                'Implement Tealium Customer Data Platform integration with internal data sources',
                'Ensure style guide standards are met including adhering to accessibility requirements'
              ]},
              {title:'UI/UX Developer II', employer:"O'Reilly Auto Parts", date:'Dec. 2018 - Dec. 2021', 
              description:[
                'Developed and maintained the front-end code of the O\'Reilly online store',
                'Owned ADA compliance task force to ensure accessibility standards were met across the online store',
                'Created an interactive style guide application to streamline multi-team development and provide users with a unified experience'
              ]},
              {title:'Web Designer', employer:'Springfield-Greene County Park Board', date:'June 2016 - March 2019', 
              description:[
                'Designed and produced engaging web pages with a focus on functionality and guided user flow',
                'Spearheaded visitor park garden tour experience with a 60% engagement increase',
                'Data based improvement vision casting for cross department website enhancements targeted specifically around connecting users to needed resources'
              ]},
              {title:'Marketing Manager', employer:'The Lamp Stand', date:'July 2015 - June 2016', 
              description:[
                'Amazon store implementation and maintenance',
                'Vision set and launch new sales avenue producing business growth by 33% within 2 months of launch',
                'Design and manage all promotions across all ecommerce sites',

              ]},
              {title:'Marketing Coordinator', employer:'Meyer ASG', date:'Sept. 2014 - July 2015', 
              description:[
                'Design and develop company website and marketing materials',
                'Organize community events with local AIGA chapters to enhance artistic value and business networking opportunities'
              ]}
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
    flex-direction: row;
    gap: 20px;
    font-size: 14px;
  }
}

.one-col {
  display: flex;
  flex-wrap: nowrap;
  flex-direction: row;
  justify-content: left;
  align-self: center;
  width: 100%; 
  p {
    text-align: left;
    padding: 0 25px 0 25px; 
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
