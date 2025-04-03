<template>
    <div class="work-content">
      <h1 class="page-title">Case Studies</h1>
      <h2 class="page-subtitle">Here are a few high level case studies I've worked on lately.</h2>

      <div class="case-study-grid">
        <div class="case-example">
          <div class="case-img-wrapper">
            <a href="/case-studies/sgf-bot">
              <img class="case-thumbnail" src="@/assets/sgf-bot.png"/>
            </a>
          </div>
          <div class="case-desc">
            <h2><a href="/case-studies/sgf-bot">Springfield Botanical Center Gardens Tour</a></h2>
            <p>
              The Springfield Botanical Center is an internationally accredited garden park and event facility that attracts visitors from around the world.
            </p>
          </div>
        </div>

        <div class="case-example">
          <div class="case-img-wrapper">
            <a href="/case-studies/ritter-springs-webpage">
              <img class="case-thumbnail" src="@/assets/menu-comp-square.png"/>
            </a>
          </div>
          <div class="case-desc">
            <h2><a href="/case-studies/menu">Dynamic Restaurant Menu</a></h2>
            <p>
              A local beer hall needs a one-stop solution for updating a revolving menu.
            </p>
          </div>
        </div>
      </div>
    </div> 
</template>

<script>

export default {
  name: 'CaseStudies',
  props: {
  }
}
</script>

<style lang="scss">

</style>
