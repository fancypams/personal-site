<template>
  <nav>
    <div class="nav-inner container">
      <RouterLink to="/" class="nav-home">PM</RouterLink>
      <div class="nav-links">
        <RouterLink to="/" :class="{ active: $route.path === '/' }">Home</RouterLink>
        <RouterLink to="/resume" :class="{ active: $route.path === '/resume' }">Resume</RouterLink>
        <RouterLink to="/bookshelf" :class="{ active: $route.path === '/bookshelf' }">Bookshelf</RouterLink>
        <div class="nav-dropdown">
          <span class="nav-dropdown-trigger" :class="{ active: $route.path.startsWith('/use-cases') }">
            Use Cases <i class="fa-solid fa-chevron-down fa-xs"></i>
          </span>
          <div class="nav-dropdown-menu">
            <RouterLink to="/use-cases/digital-account-opening">Digital Account Opening</RouterLink>
            <RouterLink to="/use-cases/stakeholder-alignment">Stakeholder Alignment</RouterLink>
            <RouterLink to="/use-cases/brewery-menu">Brewery Menu Board</RouterLink>
            <RouterLink to="/use-cases/happy-hour-cms">Happy Hour CMS</RouterLink>
          </div>
        </div>
      </div>
    </div>
    <div class="nav-rule"></div>
  </nav>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>

<style scoped>
nav { position:sticky; top:0; z-index:100; background:var(--cream); }
.nav-inner { display:flex; align-items:center; justify-content:space-between; height:56px; }
.nav-home { font-family:var(--font-display); font-weight:900; font-size:1.1rem; letter-spacing:.05em; }
.nav-links { display:flex; gap:2.5rem; align-items:center; }
.nav-links a, .nav-dropdown-trigger { font-family:var(--font-mono); font-size:.7rem; letter-spacing:.12em; text-transform:uppercase; color:var(--ink-muted); transition:color .15s; padding-bottom:2px; border-bottom:1px solid transparent; cursor:pointer; }
.nav-links a:hover, .nav-links a.active, .nav-dropdown-trigger:hover, .nav-dropdown-trigger.active { color:var(--ink); border-bottom-color:var(--ink); }
.nav-rule { height:2px; background:var(--ink); }
.nav-dropdown { position:relative; display:flex; align-items:center; }
.nav-dropdown-trigger { display:flex; align-items:center; gap:.35rem; }
.nav-dropdown-menu { display:none; position:absolute; top:100%; right:0; background:var(--cream); border:1px solid var(--border); min-width:220px; z-index:200; flex-direction:column; margin-top:12px; }
.nav-dropdown-menu::before { content:""; position:absolute; top:-12px; left:0; right:0; height:12px; }
.nav-dropdown:hover .nav-dropdown-menu { display:flex; }
.nav-dropdown-menu a { font-family:var(--font-mono); font-size:.68rem; letter-spacing:.1em; text-transform:uppercase; color:var(--ink-muted); padding:.75rem 1rem; border-bottom:1px solid var(--border-light); display:block; transition:background .15s, color .15s; text-decoration:none; }
.nav-dropdown-menu a:last-child { border-bottom:none; }
.nav-dropdown-menu a:hover { background:var(--white); color:var(--ink); }
@media(max-width:420px) { .nav-home { display:none; } .nav-links { gap:.5rem; } .nav-links a, .nav-dropdown-trigger { font-size:.58rem; letter-spacing:.07em; } }
@media(max-width:600px) { .nav-links { gap:.9rem; } .nav-links a, .nav-dropdown-trigger { font-size:.62rem; } }
</style>
