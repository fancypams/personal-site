<template>
  <section class="timeline-section">
    <div class="section-rule"><span class="label">The Full Edition</span></div>
    <div class="timeline">
      <div class="timeline-spine"></div>
      <div v-for="(item, i) in career" :key="i" class="tl-item" :class="i % 2 === 0 ? 'left' : 'right'">
        <div class="tl-dot" :class="item.type"></div>
        <div class="tl-card" :class="{ personal: item.type === 'personal', edu: item.type === 'edu' }">
          <span v-if="item.icon" class="personal-icon">{{ item.icon }}</span>
          <span class="red-label">{{ item.period }}</span>
          <p class="tl-title">{{ item.title }}</p>
          <p v-if="item.company" class="tl-company">{{ item.company }}</p>
          <p class="tl-note">{{ item.note }}</p>
          <div v-if="item.tags" class="tl-tags">
            <span v-for="tag in item.tags" :key="tag" class="tag">{{ tag }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const career = [
  { period: '2024 – Present', title: 'Products Manager, AVP', company: 'WaFd Bank', note: 'From builder to owner. Bridging technical depth with product strategy to ship features that reduce friction and drive measurable business outcomes.', tags: ['Product Strategy', 'KPIs', 'Roadmapping', 'Scrum'], type: 'current' },
  { period: 'Apr 2025', title: 'Certified Scrum Master', company: 'Scrum Alliance', note: 'Certified in agile frameworks and Scrum practices for leading cross-functional product teams.', tags: ['Agile', 'Scrum'], type: 'edu' },
  { period: '2022 – 2024', title: 'Lead UX Engineer, Officer', company: 'WaFd Bank', note: 'Led front-end engineering for online banking. Integrated Tealium & Heap, resolved critical retention bugs, mentored the team.', tags: ['React', 'Mendix', 'Tealium', 'Leadership'], type: 'mid' },
  { period: 'Aug 2020', title: 'Moved to Seattle', note: 'Put down roots in the city I love.', icon: '📍', type: 'personal' },
  { period: 'Aug 2020', title: 'Became a mom', note: 'The most important product launch yet.', icon: '🩷', type: 'personal' },
  { period: '2018 – 2021', title: 'UI/UX Developer II', company: "O'Reilly Auto Parts", note: 'Led ADA compliance task force, built cross-org style guide app, integrated fraud mitigation at checkout.', tags: ['Vue.js', 'Accessibility', 'Style Systems'], type: 'mid' },
  { period: 'Jul 2018', title: 'Responsive Web Design & JavaScript Certifications', company: 'freeCodeCamp', note: 'Earned two certifications in responsive web design and JavaScript algorithms & data structures.', tags: ['HTML/CSS', 'JavaScript'], type: 'edu' },
  { period: 'Dec 2017', title: 'Cosmo Kramer joined the pack', note: 'Best decision, no notes.', icon: '🐶', type: 'personal' },
  { period: '2016 – 2019', title: 'Web Designer', company: 'Springfield-Greene County Park Board', note: 'Delivered a 60% engagement lift on a park tour experience. Designed responsive sites for Park Board and golf courses.', tags: ['Web Design', 'UX', 'Responsive'], type: 'early' },
  { period: '2015 – 2016', title: 'Marketing Manager', company: 'The Lamp Stand', note: 'Built the foundation: ecommerce, analytics, digital marketing, and a 33% revenue growth win in 2 months.', tags: ['Ecommerce', 'Analytics'], type: 'early' },
  { period: '2014 – 2015', title: 'Marketing Coordinator', company: 'Meyer Architectural Signs & Graphics', note: 'Grew into marketing strategy and client communications at an architectural signage firm.', type: 'early' },
  { period: '2012 – 2014', title: 'Administrative Assistant, Director of Engineering', company: 'SSOE Group', note: 'My first professional role out of college. Developed a love of technical details and a front-row seat to how engineering teams operate.', type: 'early' },
  { period: 'Jun 2012', title: 'Got married', note: 'Found my ultimate collaboration partner and lifelong co-founder.', icon: '💍', type: 'personal' },
  { period: '2012', title: 'Moved to Portland', note: 'Developed my love for good coffee, strong community, and the PNW.', icon: '🏠', type: 'personal' },
  { period: 'May 2012', title: 'BA in Film, Minor in Digital Arts', company: 'Evangel University', note: 'Where a love of storytelling met a knack for technology.', tags: ['Film', 'Digital Arts'], type: 'edu' },
  { period: 'Gap Year', title: 'First taste of banking', note: 'Worked at a credit union between high school and college and developed an unexpected interest in banking. Funny how things come full circle.', icon: '🏦', type: 'personal' },
  { period: 'Upbringing', title: 'Chicagoland', note: 'Developed my first two loves: vast bodies of water and pizza.', icon: '🍕', type: 'personal' },
]
</script>

<style scoped>
.timeline-section { margin-bottom:3.5rem; }
.section-rule { display:flex; align-items:center; gap:1rem; margin-bottom:3rem; }
.section-rule::before,.section-rule::after { content:''; flex:1; height:1px; background:var(--border); }
.timeline { position:relative; }
.timeline-spine { position:absolute; left:50%; top:0; bottom:0; width:1px; background:var(--border); transform:translateX(-50%); }
.tl-item { position:relative; width:44%; margin-bottom:2rem; }
.tl-item.left { margin-right:auto; }
.tl-item.right { margin-left:auto; }
.tl-item.left .tl-card { margin-right:2rem; }
.tl-item.right .tl-card { margin-left:2rem; }
.tl-dot { position:absolute; top:1.1rem; width:12px; height:12px; border-radius:50%; border:2px solid var(--cream); box-shadow:0 0 0 1px var(--border); background:var(--ink-muted); z-index:1; }
.tl-item.left .tl-dot { right:-2.4rem; }
.tl-item.right .tl-dot { left:-2.4rem; }
.tl-dot.current { background:var(--red); box-shadow:0 0 0 3px rgba(192,57,43,.2); }
.tl-dot.mid,.tl-dot.early { background:var(--ink-light); }
.tl-dot.edu { background:var(--ink-muted); }
.tl-dot.personal { background:var(--border); }
.tl-card { background:var(--white); border:1px solid var(--border-light); padding:1.25rem 1.4rem; }
.tl-card.personal { background:var(--cream); border:1px dashed var(--border); }
.tl-card.edu { border-top:2px solid var(--ink-muted); }
.personal-icon { font-size:1.1rem; margin-bottom:.4rem; display:block; }
.tl-title { font-size:1.05rem; font-weight:700; font-family:var(--font-body); margin:.3rem 0 .15rem; line-height:1.2; }
.tl-company { font-family:var(--font-body); font-style:italic; font-size:.85rem; color:var(--ink-muted); margin-bottom:.6rem; }
.tl-note { font-size:.88rem; color:var(--ink-light); line-height:1.5; margin-bottom:.5rem; }
.tl-tags { display:flex; flex-wrap:wrap; gap:.35rem; }
.tag { font-family:var(--font-mono); font-size:.6rem; letter-spacing:.08em; text-transform:uppercase; padding:.2rem .55rem; border:1px solid var(--border); color:var(--ink-muted); }
@media(max-width:700px) {
  .timeline-spine { left:20px; transform:none; }
  .tl-item,.tl-item.left,.tl-item.right { width:100%; margin-left:0; padding-left:3rem; }
  .tl-item.left .tl-dot,.tl-item.right .tl-dot { left:14px; right:auto; }
  .tl-item.left .tl-card,.tl-item.right .tl-card { margin-left:0; margin-right:0; }
}
</style>
