<template>
    <div class="work-content">
      <h1 class="page-title">Dynamic Restaurant Menu</h1>

      <div class="case-study-wrapper">
        <img class="case-study-img" src="@/assets/menu-comp-2.png" />
        <div>
          <h2>Context</h2>
          <p>
            A local beer hall displays a menu on tvs above the bar. This menu is intended to be dynamic and easily updated by staff working the bar in real time.
          </p>
        </div>
        <div>
          <h2>Problem</h2>
          <!--
          <div class="img-wrapper">
            <img class="case-study-img keep-small" src="@/assets/sgf-bot-phone-to-web.png" />
          </div>
           -->
          <p>
            The way this menu was implemented did not allow for real time updates which caused a lot of orders to have to be cancelled and replaced. Additionally, the system was complicated for bartenders to update.
          </p>
          <p>
            An added benefit would be that menu updates would apply to the tv menu and be available online for users to browse on various devices.
          </p>
        </div>
        <div>
          <h2>Journey</h2>
          <p>
            For this project I needed to focus both on the ux for the bartender and the ux for the user. In this case, a simple responsive website seemed to be the solution. I could build a site that had breakpoints for each use case. This was a quick solve for the end user, but updating hard coded data didn't solve for speed and ease of the bartender.
          </p>
          <!-- <img class="case-study-img" src="@/assets/sgf-bot-user-flow-chart.png" /> -->
          <p>
            After some research I discovered a javascript library that would allow me to use a simple Google spreadsheet as a database. If I was able to implement this tool, updating would be as fast as the bartender could save a spreadsheet. A spreadsheet would also allow the bartender to keep the current menu organized. And just like that I had a solution. Next, it was time to build it.
          </p>
          <p>
            Below is an iframe of the <a href="https://bol.pamelamontanez.com" target="_blank">menu website</a>.
          </p>
          <p>
            To see how instantaneous this menu can be changed, visit the <a href="https://docs.google.com/spreadsheets/d/1gOIFQ1HUXtwfqxlUM6mf8ttpTxaoCxHkpxh3Eji0elI/edit?gid=0#gid=0" target="_blank">google spreadsheet</a> and make a change to one of the fields. Then come back and see that your change is visible in the menu website in around 30 seconds.
          </p>
          <div class="iframe-wrapper">
            <iframe id="bol-iframe" class="case-study-img" src="https://bol.pamelamontanez.com"></iframe>
          </div>
          <p>
            For the purposes of this demo, the iframe site is set to refresh every 30 seconds, however this is completely customizable for the end product. The restaurant may want a little more or less lead time depending on how many changes need to be made. Alternatively there is an implementation that after the data is updated, the site only requires a quick refresh to pick up all changes at once.
          </p>
          <p>
            This simple solution solved for all of the issues identitfied at the start of the study. The end user has an up to date menu that is available on various device sizes and the restaurant staff have an organized and clear cut way to keep the menu up to date.
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
  },
  mounted() {
    window.setInterval(this.reloadIFrame, 30000);
  },
  methods: {
    reloadIFrame() {
      document.getElementById('bol-iframe').src = 'https://bol.pamelamontanez.com';
    }
  }
}
</script>

<style lang="scss">
.iframe-wrapper {
  display: flex;
  gap: 10px;
}

</style>
