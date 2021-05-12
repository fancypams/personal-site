const jobs = [
  {title:'UI/UX Developer II', employer:"O'Reilly Auto Parts", date:'Dec. 2018 - present', description:'Front End Development for the retail point of sale system across three teams; Design and develop UI/UX for elements, components, and screens; Determine and implement style standards across multiple projects; Develop Style Guide application for interactive use of style standards' },
  {title:'Web Designer', employer:'Springfield-Greene County Park Board', date:'June 2016 - March 2019', description:'Design, produce, and maintain internal and external web pages and web applications utilizing HTML, CSS, JavaScript, SharePoint and various CMS; Content creation including graphics, animation, and video for web pages utilizing Adobe Creative Suite; Monitor, analyze, and report web traffic and utilization via Google Analytics' },
  {title:'Marketing Manager', employer:'The Lamp Stand', date:'July 2015 - June 2016', description:'Amazon store implementation and maintenance; Weekly sale ad design and implementation; Manage sitewide promotions and pricing; Website content maintenance, Social Media content and graphics; Email newsletter content, development, and implementation; Research and development of new avenues for retail sales' },
  {title:'Marketing Coordinator', employer:'Meyer ASG', date:'Sept. 2014 - July 2015', description:'Social media content; Website design; WordPress development; Graphic design for client projects; Graphic design for marketing collateral; Marketing material content development; Blogging; Product photography; Email newsletter content, development, and implementation; Social Media networking' },
  {title:'Marketing/Administrative Assistant', employer:'SSOE', date:'Nov. 2012 - Sept. 2014', description:'Proposal copy; Proposal formatting and editing; Marketing and PR copy writing for business unit; Recruiting infographic design; Client presentations; Marketing collateral upkeep; Internal business analysis; Project Controls and support; Document management; Vendor coordination; Value engineering tracking' }
];

var jobTemplate = document.querySelector('#resumeJobs');

for (var x = 0; x < jobs.length; x++) {
  var job = jobs[x];
  var clone = jobTemplate.content.cloneNode(true);
  var title = clone.querySelectorAll('h3');
  title[0].innerHTML = job.title;
  var employer = clone.querySelectorAll('p');
  employer[0].innerHTML = job.employer;
  var description = clone.querySelectorAll('p');
  description[1].innerHTML = job.description;
  var date = clone.querySelectorAll('p');
  date[2].innerHTML = job.date;
  jobTemplate.parentNode.appendChild(clone);
}

const edus = [
  {school:'FreeCodeCamp', degree:['Responsive Web Design Certification', 'JavaScript Alogrithms and Data Structures Certification'], date:'July 2018'},
  {school:'Evangel University', degree:'Bachelor of Arts in Film, minor in Digital Arts', date:'May 2012'}
];

var eduTemplate = document.querySelector('#resumeEdu');

for (var y = 0; x < edus.length; y++) {
  var edu = edus[y];
  var eduClone = eduTemplate.content.cloneNode(true);
  var school = eduClone.querySelectorAll('h3');
  school[0].innerHTML = edu.school;
  var degree = eduClone.querySelectorAll('p');
  degree[0].innerHTML = edu.degree;
  var date = eduClone.querySelectorAll('p');
  date[1].innerHTML = edu.date;
  eduTemplate.parentNode.appendChild(clone);
}

const skills = [
  {skills:['Solution Design', 'HTML', 'CSS', 'Sass', 'FXML', 'JavaScript', 'Java', 'JavaFX', 'IntelliJ IDEA', 'Git', 'Photoshop', 'Premiere', 'InDesign', 'XD', 'Microsoft Word', 'PowerPoint', 'Excel', 'Outlook', 'Constant Contact']}
];

var skillsTemplate = document.querySelector('#resumeSkills');

for (var z = 0; z < skills.length; z++) {
  var skill = skills[z];
  var eduClone = skillsTemplate.content.cloneNode(true);
  var skil = eduClone.querySelectorAll('p');
  skil[0].innerHTML = eduClone.skills.join(', ');
  skillsTemplate.parentNode.appendChild(clone);
}

export default resume;