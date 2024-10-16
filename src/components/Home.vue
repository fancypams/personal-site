<template>
  <div class="hello">
    <div id="welcome-content" class="welcome-content">
        <div class="color-block">
          <img src="../assets/me-round.png" />
        </div>
        <div>
            <h1 class="main-heading">Hi! I'm Pam.</h1>
            <h2 class="transition sub-heading">Senior UX Engineer transitioning into Product Management</h2>
          </div>
        <div class="text-block">
          <div id="welcome-about-me" class="welcome-about-me">
              <p class="about-desc">
                My goals are simple: <i>share the vision and do good work</i>.         
              </p>
              <p class="about-desc">
                My experience in website design, front-end development, and user analytics has made me uniquely qualified to translate complex user needs into actionable product strategies.
                I have learned that by taking the time to discover a user's tendancy and comparing this with business priorities, I can turn application roadblocks into intuitive solutions.
              </p>
          </div>
        </div>
        
    </div>
  </div>
</template>

<script>

export default {
  name: 'Home',
  props: {
  }
}
</script>

<style lang="scss">
@import '@/styles/styles.scss';

.welcome-content {
  // height: 400px;
  padding: 40px 0;
  width: 100vw;
  display: table-cell;
  text-align: center;
  vertical-align: middle;
  background-image: url("../assets/fun-pattern.jpg");
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  // margin-top: -32px; 
  .main-heading {
    font-size: 5em;
    line-height: 12px;
    -webkit-animation: rotateY 1s linear;
    animation: rotateY 1s linear;
    animation-name: easier;
    animation-duration: .85s; 
  }
}
.text-block {
  display: flex;
  gap: 10px;
  animation-name: fade;
  animation-duration: 1s;
  padding: 25px; 
  align-items: center;
  justify-content: center;
  .photo-title {
    z-index: 1;
    -webkit-animation: rotateY 1s linear;
    animation: rotateY 1s linear;
    animation-name: easier-light;
    animation-duration: .75s;
    color: $yellow;
    font-size: 4em;
    line-height: 4px;
    margin-left: -115px; 
  }
  .welcome-about-me {
    //background-color: $white;
    //width: 100%;
    max-width: 437px;
    display: flex;
    flex-direction: column;
    gap: 5px;
    text-align: left;
    border-left: 5px $black solid;
    .about-desc {
      padding: 5px 5px 5px 20px;
      font-size: 14px;
      margin: 0;
    }
}
}

@media only screen and (max-width: 800px) {
  .sub-heading {
    padding: 0 10px;
  }
}

@media only screen and (max-width: 450px) {
  
}

</style>
