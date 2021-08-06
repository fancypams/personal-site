<template>
    <div class="work-content">
      <h1 class="page-title">Springfield Botanical Center Gardens Tour</h1>

      <div class="case-study-wrapper">
        <img class="case-study-img" src="@/assets/sgf-bot-desktop-mobile-mock.png" />
        <div>
          <h2>Context</h2>
          <p>
            The Springfield Botanical Center (SGF Bot) is an internationally accredited garden park and event facility that attracts visitors from around the world.
          </p>
        </div>
        <div>
          <h2>Problem</h2>
          <div class="img-wrapper">
            <img class="case-study-img keep-small" src="@/assets/sgf-bot-phone-to-web.png" />
          </div>
          <p>
            SGF Bot provides a self guided audio tour to visitors, however the previous system required patrons to dial a phone number and stay
            on their phones on a particular track around the gardens. The goal here was to provide a new way to offer a tour to visitors that would allow them to dictate their own path but gain easy access to all the information about each portion of the gardens.
          </p>
          <p>
            This UX begins physically in the gardens and translates digitally into a web experience. I worked with the SGF Bot Board to create a virtual experience that could be accessed throughout the park.
          </p>
        </div>
        <div>
          <h2>Journey</h2>
          <p>
            To accomplish our goal of a fluid tour experience, we did not want to provide our visitors with any specific path they needed to follow to be able to be assisted in their tour. This means that whenever a visitor finds signage in the park, the QR code or shortended web link on that sign would direct them to all the information they may need. The QR code or shortened web link takes the visitor to a dedicated webpage which includes a map, an audio clip of the history and contents of the garden, a transcript (in the case the visitor did not want to listen), as well as photos of the gardens at different seasons of the year.
          </p>
          <img class="case-study-img" src="@/assets/sgf-bot-user-flow-chart.png" />
          <p>
            To provide an up to date location for visitors, I utilized Google Maps by adding each garden to Google Maps. This provided an accurate experience for visitors to navigate through each area.
          </p>
          <img class="case-study-img" src="@/assets/sgf-bot-map-hightlight.png" />
          <p>
            Because SGF Bot is a nationally ranked botanical garden, it was important to feature this tour to potential visitors from across the country. To do this, the online tour is accessible without a QR code or shortened web link as well.
          </p>
          <img class="case-study-img" src="@/assets/sgf-bot-desktop-pages.png" />
          <p>
            The result of this change to the garden tour flow was almost immediately evident. One measure of success that was extremely rewarding to utilize was comparing the number of callers from the previous audio tour system (minimal) to analytics on the new webpages for the online tour. It was easy to see so many more visitors were accessing these pages and enjoying the gardens both physically and online.
          </p>
        </div>
        <br>
        <br>
      </div>
    </div> 
</template>

<script>

export default {
  name: 'SGFBot',
  props: {
  }
}
</script>

<style lang="scss">

</style>
