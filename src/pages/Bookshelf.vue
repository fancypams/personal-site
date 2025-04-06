<template>
  <div class="section-title">Books</div>
  <div class="section-subtitle">A short list of my latest mentionable reads shown utilizing the <a href="https://openlibrary.org/" target="_blank">open library</a> api</div>
  <div class="book-shelf">
    <div class="category" v-for="book in finished" :key="book">
      <span class="book-cover"><img :src="book.cover" /></span>
      <span class="book-title">{{ book.title }}</span>
      <span class="book-author">{{ book.author[0] }}</span>
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
        finished: [],
        reading: [],
      }
  },
  mounted() {
    axios
      .get('https://openlibrary.org/people/pamelamontanez/books/already-read.json')
      .then(response => {
        let entries = response.data.reading_log_entries
        console.info(response.data)
        for (let i = 0; i < entries.length; i++) {
          let obj = {
            title: entries[i].work.title,
            author: entries[i].work.author_names,
            olid: entries[i].work.edition_key[0],
            cover: 'https://covers.openlibrary.org/b/olid/' + entries[i].work.cover_edition_key + '-M.jpg'
          }
          this.finished.push(obj)
        }
      })
  },
  methods: {

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
.book-shelf {
  display: flex;
  flex-flow: row;
  gap: 20px;
  margin: 20px 0;
  width: 100%;
  flex-wrap: wrap;
  justify-content: left;
  .category {
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
    gap: 15px;
  }
  .book-title {
    font-weight: 300;
    font-family: $sans-serif;
    width: 130px;
    height: 30px;
    text-align: center;
  }
  .book-author {
    font-style: italic;
    max-width: 300px;
    text-align: center;
    font-size: 14px;
  }
  .book-cover img{
    height: 175px;

  }
}
a {
  font-size: 12px;
}

@media only screen and (max-width: 800px) {

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
}
</style>
