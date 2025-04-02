<template>
    <div class="work-content">
      <h1 class="page-title">Pay Bills API Experience</h1>

      <div class="case-study-wrapper">
        <img class="case-study-img" src="@/assets/browser-comp-2.png" />
        <div>
          <h2>Context</h2>
          <p>
            A regional bank utilizes a third party iframe experience for their bill payment system. The business would like to customize this experience to better fit the design system of the bank and make features more easily accessible.
          </p>
        </div>
        <div>
          <h2>Problem</h2>
          <div class="img-wrapper">
            <img class="case-study-img keep-small" src="@/assets/iframe-to-api.png" />
          </div>
          <p>
            The current iframe experience is not designed to be a responsive experience which forces users to primarily use their desktop to use this feature. Analytics show that for this bank, over 25% of users are accessing this feature via mobile web browser. It comes as no surprise that in turn, a high volume of customer service calls are in regards to users being unable to access the proper tools on their phone to complete basic bill payments.
          </p>
          <p>
            Additionally the current iframe experience is not fully ADA accessible. This will require font size increases, contrast enhancements, implementing proper tab order and tagging, as well as implementing a solid document structure.
          </p>
          <p>
            Finally, using the third party iframe experience impedes the ability to fail gracefully. If there is a delay or outage, the bank is left to display what they get instead of guiding the user through possible resolution steps or giving any kind of explanation for the issue.
          </p>
          <p>
            These may seem like basic problems to solve, but for a regional bank they are essential. If they can get users to successfully use their product offerings, those users are more likely to utilize accounts and deposit additional money.
          </p>
        </div>
        <div>
          <h2>Journey</h2>
          <p>
            This project was more than a simple UI enhancement. 
          </p>
          <p>
            First I started with discussing the above requirements with the stakeholders then I spoke with our backend development team about what we needed in regards to the apis.
            I then got started on a detailed prototype in Figma. I worked with the UX Manager to ensure this design fell in line with the brand design system. Once the general design and flow was approved I then gave a prototype demo to stakeholders and development teams. Finally we had a plan.
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
