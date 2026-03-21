<template>
  <main class="bookshelf">
    <div class="container">
      <header class="page-header">
        <h1 class="page-title">Books</h1>
        <div class="header-rule"></div>
        <p class="tagline">My latest reading shown utilizing the
          <a href="https://openlibrary.org/developers/api" target="_blank" class="api-link">Open Library</a> API
        </p>
      </header>
      <div class="toolbar">
        <div class="search-wrap">
          <i class="fa-solid fa-magnifying-glass search-icon"></i>
          <input v-model="search" type="text" class="search-input" placeholder="Type to search"/>
          <button v-if="search" class="search-clear" @click="search = ''"><i class="fa-solid fa-circle-xmark"></i></button>
        </div>
      </div>
      <div v-if="loading" class="state-msg"><i class="fa-solid fa-spinner fa-spin"></i> Loading...</div>
      <div v-else-if="filteredBooks.length === 0" class="state-msg">No books found.</div>
      <div v-else class="books-grid">
        <div v-for="book in filteredBooks" :key="book.title" class="book-card" @click="openPreview(book)">
          <div class="book-cover-wrap">
            <img v-if="book.coverSm" :src="book.coverSm" :alt="book.title" class="book-cover" loading="lazy"
              @error="e => { e.target.style.display='none'; e.target.nextSibling.style.display='flex' }"/>
            <div class="book-cover-placeholder" style="display:none"><i class="fa-solid fa-book"></i></div>
          </div>
          <div class="book-info">
            <p class="book-title">{{ book.title }}</p>
            <p class="book-author">{{ book.author[0] }}</p>
          </div>
        </div>
      </div>
    </div>

    <Transition name="fade">
      <div v-if="showPreview" class="overlay" @click="showPreview = false">
        <div class="preview-modal" @click.stop>
          <button class="preview-close" @click="showPreview = false"><i class="fa-solid fa-circle-xmark"></i></button>
          <img :src="previewImg" :alt="previewTitle" class="preview-img"/>
        </div>
      </div>
    </Transition>
  </main>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import axios from 'axios'

const COVER_OVERRIDES = {
  'Between Two Fires': {
    sm: 'https://covers.openlibrary.org/b/olid/OL37583899M-M.jpg',
    lg: 'https://covers.openlibrary.org/b/olid/OL37583899M-L.jpg'
  }
}

const search = ref('')
const books = ref([])
const loading = ref(true)
const showPreview = ref(false)
const previewImg = ref('')
const previewTitle = ref('')

onMounted(async () => {
  try {
    const res = await axios.get('https://openlibrary.org/people/pamelamontanez/books/already-read.json')
    books.value = res.data.reading_log_entries.map(e => ({
      title: e.work.title,
      author: e.work.author_names,
      coverSm: COVER_OVERRIDES[e.work.title]?.sm ?? (e.work.cover_edition_key ? `https://covers.openlibrary.org/b/olid/${e.work.cover_edition_key}-M.jpg` : null),
      coverLg: COVER_OVERRIDES[e.work.title]?.lg ?? (e.work.cover_edition_key ? `https://covers.openlibrary.org/b/olid/${e.work.cover_edition_key}-L.jpg` : null),
    }))
  } catch (e) { console.error(e) }
  finally { loading.value = false }
})

const filteredBooks = computed(() => {
  const q = search.value.toLowerCase()
  return q ? books.value.filter(b => b.title.toLowerCase().includes(q) || b.author[0]?.toLowerCase().includes(q)) : books.value
})

function openPreview(book) {
  previewImg.value = book.coverLg
  previewTitle.value = book.title
  showPreview.value = true
}
</script>

<style scoped>
.bookshelf { padding:2.5rem 0 3rem; }
.page-header { margin-bottom:2rem; }
.page-title { font-size:clamp(3rem,8vw,6rem); font-weight:900; text-transform:uppercase; line-height:1; margin-bottom:1rem; }
.header-rule { height:1px; background:var(--ink); margin-bottom:1.25rem; }
.tagline { font-size:1rem; color:var(--ink-light); }
.api-link { color:var(--red); text-transform:uppercase; font-family:var(--font-mono); font-size:.75rem; font-weight:700; letter-spacing:.1em; border-bottom:1px solid var(--red); }
.toolbar { display:flex; justify-content:flex-end; margin-bottom:2.5rem; }
.search-wrap { position:relative; display:flex; align-items:center; }
.search-icon { position:absolute; left:.85rem; color:var(--ink-muted); font-size:.8rem; pointer-events:none; }
.search-input { background:var(--white); border:1px solid var(--border); padding:.6rem 2rem .6rem 2.25rem; font-family:var(--font-mono); font-size:.75rem; color:var(--ink); width:240px; outline:none; }
.search-input:focus { border-color:var(--ink); }
.search-input::placeholder { color:var(--ink-muted); }
.search-clear { position:absolute; right:.6rem; background:none; border:none; cursor:pointer; color:var(--ink-muted); }
.state-msg { text-align:center; padding:4rem; font-family:var(--font-mono); font-size:.8rem; color:var(--ink-muted); }
.books-grid { display:grid; grid-template-columns:repeat(auto-fill,minmax(160px,1fr)); gap:2.5rem 2rem; }
.book-card { display:flex; flex-direction:column; gap:.75rem; cursor:pointer; }
.book-cover-wrap { aspect-ratio:2/3; overflow:hidden; background:var(--border-light); }
.book-cover { width:100%; height:100%; object-fit:cover; display:block; transition:transform .3s,opacity .3s; }
.book-card:hover .book-cover { transform:scale(1.03); opacity:.85; }
.book-cover-placeholder { width:100%; height:100%; display:flex; align-items:center; justify-content:center; color:var(--border); font-size:2rem; }
.book-info { text-align:center; }
.book-title { font-family:var(--font-body); font-size:.9rem; line-height:1.3; margin-bottom:.2rem; }
.book-author { font-family:var(--font-body); font-style:italic; font-size:.82rem; color:var(--ink-muted); }
.overlay { position:fixed; inset:0; background:rgba(0,0,0,.8); z-index:200; display:flex; align-items:center; justify-content:center; }
.preview-modal { position:relative; }
.preview-img { max-height:85vh; max-width:90vw; display:block; }
.preview-close { position:absolute; top:-2rem; right:-2rem; background:none; border:none; color:#fff; font-size:1.5rem; cursor:pointer; }
.fade-enter-active,.fade-leave-active { transition:opacity .25s; }
.fade-enter-from,.fade-leave-to { opacity:0; }
@media(max-width:600px) { .books-grid { grid-template-columns:repeat(2,1fr); } .search-input,.search-wrap { width:100%; } .toolbar { justify-content:stretch; } }
</style>
