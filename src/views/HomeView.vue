<template>
  <main class="home">
    <div class="container">
      <header class="masthead">
        <div class="masthead-meta">
          <div class="meta-top">
            <span class="day">{{ day }}</span>
            <span style="font-size:.9rem;color:var(--ink-light);margin-left:.4rem"><i class="fa-solid" :class="weatherIcon"></i></span>
          </div>
          <span class="rule"></span>
          <p class="label">Seattle, WA</p>
          <p class="title-label"><strong>Product Manager</strong><br>Certified Scrum Master</p>
        </div>
        <div class="masthead-name"><h1>PAMELA<br>MONTANEZ</h1></div>
      </header>
      <div class="masthead-rule"></div>

      <section class="hero">
        <div><img :src="heroImg" alt="Pamela Montanez" style="width:100%;display:block;"/></div>
        <div class="hero-content">
          <span class="red-label">About Me</span>
          <h2 class="hero-heading">The elevator pitch</h2>
          <p>I&rsquo;m a Frontend Engineer turned Product Manager with a unique background bridging UX and product strategy. I turn technical problems into measurable wins, like reducing API costs by $50k/month and cutting application time by 70%.</p>
          <p>I&rsquo;m passionate about community, technology, and creating products that make complex tasks simple and delightful. When I&rsquo;m not optimizing flows, you&rsquo;ll find me enjoying Seattle&rsquo;s coffee shops, camping around the Puget Sound, or exploring the city I love.</p>
          <div class="hero-actions">
            <RouterLink to="/resume" class="btn-link">View Full Resume <i class="fa-solid fa-arrow-right"></i></RouterLink>
          </div>
        </div>
      </section>

      <CareerTimeline />
    </div>
  </main>
</template>

<script setup>
import { computed } from 'vue'
import { RouterLink } from 'vue-router'
import { useWeather } from '../composables/useWeather'
import CareerTimeline from '../components/CareerTimeline.vue'
import heroImg from '../assets/hero.jpg'

const { icon: weatherIcon } = useWeather()
const day = computed(() => new Date().toLocaleDateString('en-US', { weekday: 'long' }).toUpperCase())
</script>

<style scoped>
.home { padding-top:2.5rem; padding-bottom:2rem; }
.masthead { display:flex; align-items:flex-start; gap:3rem; margin-bottom:1.5rem; }
.masthead-meta { flex-shrink:0; min-width:160px; }
.meta-top { display:flex; align-items:center; gap:.6rem; margin-bottom:.25rem; }
.day { font-family:var(--font-mono); font-size:.75rem; font-weight:700; letter-spacing:.12em; text-transform:uppercase; color:var(--ink); }
.title-label { font-family:var(--font-body); font-size:.95rem; line-height:1.4; }
.masthead-name h1 { font-size:clamp(3.5rem,8vw,7rem); font-weight:900; letter-spacing:-.02em; line-height:.9; text-transform:uppercase; }
.masthead-rule { height:1px; background:var(--ink); margin-bottom:2.5rem; }
.hero { display:grid; grid-template-columns:1fr 1fr; gap:3rem; margin-bottom:3rem; align-items:start; }
.hero-heading { font-size:2.2rem; margin:.4rem 0 1.2rem; font-style:italic; }
.hero-content p { margin-bottom:1rem; color:var(--ink-light); }
.hero-actions { margin-top:1.5rem; }
.btn-link { font-family:var(--font-mono); font-size:.72rem; letter-spacing:.1em; text-transform:uppercase; color:var(--ink); border-bottom:1px solid var(--ink); padding-bottom:2px; display:inline-flex; align-items:center; gap:.4rem; transition:color .15s,border-color .15s; }
.btn-link:hover { color:var(--red); border-color:var(--red); }
@media(max-width:900px) { .hero { grid-template-columns:1fr; } }
@media(max-width:600px) { .masthead { flex-direction:column; gap:1rem; } .masthead-name h1 { font-size:3.5rem; } }
</style>
