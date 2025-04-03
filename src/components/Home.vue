<template>
  <div class="body-wrapper">

    <div class="body-left">

      <div class="article-img">
        <img src="../assets/reunion-193.jpg" />
        <div class="article-blurb">
          Website designed and coded by me. 
          <a href="https://github.com/fancypams/personal-site" target="_blank">View on Github</a>
        </div>
      </div>

      <div class="article-body">
        <div class="subheading">
          About Me
        </div>
        <div class="article-title">
          The elevator pitch
        </div>
        <span>
          My experience in website design, front-end development, and user analytics has made me uniquely qualified to translate complex needs into actionable product strategies. I am a Certified Scrum Master and Technical Product Manager who cares as much about style guide standards as I do about code architecture and hitting those key preformance metrics. I am a creative thinker who genuinely enjoys figuring out the best path. And so far, I have learned that by taking the time to define business priorities and also discover user tendancy, I can turn application roadblocks into intuitive and profitable solutions.
        </span>
        <br><br>
        <span>
          This website is meant to demonstrate my career headlines in a fun way (nod to the classic newspaper). I am fortunate to have worked on some projects that I am really proud to share. Please take a look around and get to know my work a little more.
        </span>
      </div>

    </div>
  </div>

  <div class="article-preview">
    <div>
      Product Manager with over a decade of experience turning complex problems into actionable product solutions
      <a>View Full Resume</a>
    </div>
    <div class="quote">
      Whatever you are, try to be a good one.
      <span class="quote-author">William Makepeace Thackeray</span>
    </div>
  </div>

  <div class="article">
    <div class="article-title extra-top-padding">
      Woman spends too long developing coding skills solely for professional use and decides to make project just for fun
    </div>
    <div class="article-body-three-columns">
      <span>
        Hi, I’m the woman, it’s me. I spent far too long making projects for work before finally deciding to make something that would make my life a little bit more fun. The project? A custom CMS that can quickly be updated and sent out to invite friends over for a monthly themed happy hour.
      </span>
      <span>
        I build this project using Craft CMS. Craft CMS is a a flexible, self-hosted content management system written in PHP that stores content in a database and can be extended via a plugin marketplace. It’s like Wordpress, but for me, a lot simpler to spin up the basic, yet custom site I needed.
      </span>
      <span>
        That’s right, I made my own “Wordpress” style site just so that I could post the latest date, time, theme, and drink recipe to a my own website... for fun! I wanted to try out Craft CMS and I regret nothing.
      </span>
    </div>
    <div class="article-links">
      <a href="https://mos.pamelamontanez.com/web/" target="_blank">VIEW THE LIVE SITE</a>
      <a href="https://github.com/fancypams/mos" target="_blank">View on Github</a>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Home',
  props: {
  },
  components: {
  },
  data() {
  }
}
</script>

<style lang="scss">
@import '@/styles/styles.scss';

.article {
  margin: 15px 0;
}
.subheading {
  text-transform: uppercase;
  color: $red;
  font-size: 12px;
  font-family: 'Inter', sans-serif;
  font-weight: 700;
  margin-bottom: 20px;
}
.body-left {
  padding: 30px 0;
  display: flex;
  flex-direction: row;
  gap: 15px;
}
.article-title {
  font-weight: 700;
  font-size: 36px;
  padding-bottom: 15px;
}
.article-img {
  width: 70%;
  img {
    width: 100%;
    object-fit: cover;
    height: 550px;
  }
}
.article-body {
  padding-top: 15px;
  width: 30%;
  text-align: justify;
}
.article-blurb {
  font-style: italic;
  padding-top: 20px;
  a {
    font-style: normal;
  }
}
.extra-top-padding {
  padding-top: 20px;
}

.article-preview {
  border-top: solid 1px $black;
  border-bottom: double 3px $black;
  display: flex;
  flex-direction: row;
  gap: 20px;
  width: 100%;
  padding: 15px 0;
  font-weight: bold;
  justify-content: center;
  font-size: 18px;
  div:not(:first-child) {
    border-left: solid 1px $black;
    padding-left: 15px;
  }
}
.quote-author {
  font-weight: 400;
  font-style: italic;
  display: inline-block;
}
.article-body-three-columns {
  margin-top: 10px;
  display: flex;
  gap: 20px;
  flex-direction: row;
  text-align: justify;
  span {
    width: 32%;
  }
}
.article-links {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;

}

@media only screen and (max-width: 800px) {
  .body-left {
    flex-direction: column;
  }
  .article-img {
    width: 100%;
  }
  .article-body {
    width: 100%;
  }
  .article-preview {
    flex-direction: column;
  }
  .article-body-three-columns {
    flex-direction: column;
    span {
      width: 100%;
    }
  }
  .article-links {
    align-items: flex-start;
    margin-top: 10px;
  }

}

@media only screen and (max-width: 450px) {
  
}

</style>
