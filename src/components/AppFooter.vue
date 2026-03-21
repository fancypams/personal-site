<template>
  <footer>
    <div class="footer-rule"></div>
    <div class="container footer-inner">
      <span class="label">&copy; {{ year }} Pamela Montanez</span>
      <em class="footer-quote">"Whatever you are, try to be a good one." &mdash; William Makepeace Thackeray</em>
      <span class="label">Seattle, WA</span>
    </div>
  </footer>
</template>

<script setup>
const year = new Date().getFullYear()
</script>

<style scoped>
footer { margin-top:5rem; }
.footer-rule { height:1px; background:var(--border); }
.footer-inner { display:flex; justify-content:space-between; align-items:center; padding:1.25rem 0; }
.footer-quote { font-family:var(--font-body); font-style:italic; font-size:.95rem; color:var(--ink-muted); }
@media(max-width:600px) { .footer-inner { flex-direction:column; gap:.75rem; text-align:center; } }
</style>
