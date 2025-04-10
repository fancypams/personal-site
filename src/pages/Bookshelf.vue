<template>
  <div class="section-title">Books</div>
  <div class="section-subtitle">My latest reading shown utilizing the <a href="https://openlibrary.org/" target="_blank">open library</a> api</div>
  <div class="input-wrapper">
    <input placeholder="Type to search" v-model="search" />
    <button v-if="search" @click="clearSearch" class="fa-solid fa-circle-xmark input-margin" ></button>
  </div>
  <div class="book-shelf" >
    <div class="book-details" v-for="book in filteredBooks" :key="book.title">
        <span class="book-cover" @click="openPreview"><img :src="book.coverSm" /></span>
        <span class="book-title">{{ book.title }}</span>
        <span class="book-author">{{ book.author[0] }}</span>
    </div>
  </div>

  <div v-if="showPreview">
    <span class="overlay"></span>
    <div class="book-preview">
      <span class="book-preview-close fa-solid fa-circle-xmark" @click="closeOverlay"></span>
      <span class="book-cover"><img :src="previewImage" /></span>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: "Bookshelf",
  props: {
  },
  data() {
      return {
        search: '',
        finished: [],
        showPreview: false,
        previewImage: ''
      }
  },
  computed: {
    filteredBooks() {
      return this.finished.filter(book => {
        return book.title.toLowerCase().includes(this.search.toLowerCase()) || book.author[0].toLowerCase().includes(this.search.toLowerCase());
      });
    }
  },
  mounted() {
    axios
      .get('https://openlibrary.org/people/pamelamontanez/books/already-read.json')
      .then(response => {
        let entries = response.data.reading_log_entries
        for (let i = 0; i < entries.length; i++) {
          let obj = {
            title: entries[i].work.title,
            author: entries[i].work.author_names,
            olid: entries[i].work.edition_key[0],
            coverSm: 'https://covers.openlibrary.org/b/olid/' + entries[i].work.cover_edition_key + '-M.jpg',
            coverLg: 'https://covers.openlibrary.org/b/olid/' + entries[i].work.cover_edition_key + '-L.jpg'
          }
          this.finished.push(obj)
        }
      })
  },
  methods: {
    clearSearch() {
      this.search = '';
    },
    openPreview(e) {
      let bookToPreview = e.target.src;
      this.previewImage = bookToPreview.replace('-M', '-L'); 
      this.showPreview = true;
      window.setTimeout(() => {
        document.querySelector('.overlay').addEventListener('click', this.closeOverlay);
      }, 300)
    },
    closeOverlay() {
      this.showPreview = false;
      document.querySelector('.overlay').removeEventListener('click', this.closeOverlay);
    }
  }
}
</script>

<style lang="scss">
@import '@/styles/styles.scss';

.section-title {
  font-family: $heading;
  font-size: 128px;
  text-transform: uppercase;
  font-weight: 100;
  border-bottom: double 3px $black;
  text-align: left;
  width: 100%;
}
.section-subtitle {
  font-size: 14px;
  margin-bottom: 50px;
  margin-top: -35px;
}
.input-wrapper {
  display: flex;
  width: 100%;
  justify-content: flex-end;
  align-items: flex-end;
  margin-bottom: 10px;
  input {
    height: 12px;
    width: 250px;
    border-radius: 15px;
    border: 1px solid $gray-md;
    padding: 8px 12px;
    margin-left: -45px;
  }
  button {
    background: none;
    border: none;
    margin-bottom: 7px;
    margin-left: -35px;
    &::before {
      color: $gray;
    }
  }
}
.input-margin {
  margin-right: 10px;
}
.book-shelf {
  display: flex;
  flex-flow: row;
  gap: 20px;
  margin: 20px 0;
  width: 100%;
  flex-wrap: wrap;
  justify-content: left;
  .book-details {
    display: flex;
    flex-flow: column;
    justify-content: flex-start;
    align-items: center;
    gap: 10px;
  }
  .book-title {
    font-weight: 300;
    font-family: $sans-serif;
    width: 130px;
    text-align: center;
  }
  .book-author {
    font-style: italic;
    max-width: 300px;
    text-align: center;
    font-size: 14px;
    margin-top: -5px;
  }
  .book-cover { 
    height: 275px;
    img {
      height: 100%;
    }
    &:hover {
      background: $black;
      cursor: pointer;
      img {
        opacity: .7;
      }
    }
  }
}
.overlay {
  opacity: .5;
  background-color: $black;
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
}
.book-preview {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  .book-preview-close {
    z-index: 5;
    color: $white;
    position: fixed;
    top: -3%;
    left: 102%;
  }
}
a {
  font-size: 12px;
}

@media only screen and (max-width: 975px) {
  .book-shelf {
    justify-content: space-around;
  }
}

@media only screen and (max-width: 450px) {
  .section-title {
    font-size: 54px;
    line-height: 45px;
    padding-bottom: 15px;
    text-align: center;
  }
  .section-subtitle {
    margin-bottom: 20px;
    margin-top: 20px;
    text-align: center;
  }
  .book-shelf {
    justify-content: center;
  }
  .input-wrapper {
    justify-content: center;
    input {
      width: 100%;
      margin-left: 0;
    }
  }
}
</style>
