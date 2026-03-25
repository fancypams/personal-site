<template>
  <main class="use-case-page">
    <div class="container">
      <div v-if="!unlocked" class="gate-wrap">
        <div class="gate">
          <div class="gate-icon"><i class="fa-solid fa-lock"></i></div>
          <h2 class="gate-title">Use Cases</h2>
          <p class="gate-sub">This section contains detailed project case studies. Enter the password to continue.</p>
          <div class="gate-form">
            <input v-model="password" type="password" class="gate-input" placeholder="Password" @keyup.enter="attempt"/>
            <button class="gate-btn" @click="attempt">Enter <i class="fa-solid fa-arrow-right fa-xs"></i></button>
          </div>
          <p v-if="error" class="gate-error"><i class="fa-solid fa-circle-exclamation fa-xs"></i> Incorrect password</p>
        </div>
      </div>
      <slot v-else />
    </div>
  </main>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const password = ref('')
const error = ref(false)
const unlocked = ref(false)

onMounted(() => {
  if (sessionStorage.getItem('uc-unlocked') === '1') {
    unlocked.value = true
  }
})

function attempt() {
  if (password.value === "pft") {
    sessionStorage.setItem('uc-unlocked', '1')
    unlocked.value = true
    error.value = false
  } else {
    error.value = true
    password.value = ''
  }
}
</script>

<style scoped>
.use-case-page { padding:2.5rem 0 3rem; min-height:60vh; }
.gate-wrap { display:flex; justify-content:center; padding:5rem 0; }
.gate { text-align:center; max-width:420px; width:100%; }
.gate-icon { font-size:2rem; color:var(--ink-muted); margin-bottom:1.5rem; }
.gate-title { font-size:2.5rem; font-weight:900; text-transform:uppercase; margin-bottom:.75rem; }
.gate-sub { color:var(--ink-muted); font-size:.95rem; margin-bottom:2rem; }
.gate-form { display:flex; border:1px solid var(--border); }
.gate-input { flex:1; background:var(--white); border:none; padding:.75rem 1rem; font-family:var(--font-mono); font-size:.8rem; color:var(--ink); outline:none; }
.gate-btn { background:var(--ink); color:var(--cream); border:none; padding:.75rem 1.25rem; font-family:var(--font-mono); font-size:.72rem; letter-spacing:.1em; text-transform:uppercase; cursor:pointer; display:flex; align-items:center; gap:.4rem; transition:background .15s; }
.gate-btn:hover { background:var(--red); }
.gate-error { margin-top:1rem; font-family:var(--font-mono); font-size:.7rem; color:var(--red); }
</style>
