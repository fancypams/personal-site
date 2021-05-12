<template>
    <div>
        <h1 class="page-title">Recent Work</h1>
    <h2 class="page-subtitle">Here are a few projects I've worked on lately.</h2>

      <div class="work-grid">
        <div class="work-sample">
          <img class="work-thumbnail" src="@/assets/oreilly.png"/>
        </div>
        <div>
          <h2>O'Reilly Auto Parts</h2>
          <p>
            I started at O'Reilly and was immediately tasked with establishing style standards for the Retail Point of Sale system. To do this, I developed a Style Guide application where Business Analysts, Tech Writers, and Developers can read about and interact with components. This work involves design and UI/UX Development. Within the application, users can not only view and interact with components, but search for types of components to reference.
          </p>
          <p>
            In addition to creating the Style Guide Application, I am actively involved in the 4 projects which comprise the POS system. I have developed the UI/UX for transitioning our systems from Java Swing to JavaFX across these projects.
          </p>
          <div class="project-img-wrapper">
            <img class="project-gif" src="@/assets/sg-gif.gif" />
            <img class="project-gif" src="@/assets/pos-gif.gif" />
          </div>
          <br/>
          <br />
          <p class="skills-used">Java, JavaFX, SCSS, Git, Adobe XD</p>
        </div>

          <div class="work-sample">
            <a href="https://bol.pamelamontanez.com" target="_blank">
              <img class="work-thumbnail" src="@/assets/bol.png"/>
            </a>
          </div>
          <div>
            <h2>Dynamic Restaurant Menu</h2>
            <p>
              This project is a fun one. The idea here was to create a page that could be embeded on the restaurant's existing website as well as used across tv displays. The client wanted their database housed in a Google Sheet to provide their team with a "one-stop-shop" approach to keeping the menu up to date.
            </p>
            <p>
              I utilized sheetrock.js to hookup Google Sheets as the database. This page is basic HTML, styled with CSS and CSS Grid. Feel free to click the image, view the demo project and update the <a href="https://docs.google.com/spreadsheets/d/1gOIFQ1HUXtwfqxlUM6mf8ttpTxaoCxHkpxh3Eji0elI/edit?usp=sharing" target="_blank">demo database</a> to see how it works.
            </p>
            <div class="project-img-wrapper" controls>
                <!-- <img class="project-gif" src="@/assets/sheetrock.gif" /> -->
            </div>
            <br />
            <br />
            <p class="skills-used">Skills Used: sheetrock.js, HTML, CSS, Git</p>
          </div>

          <div class="work-sample">
            <a href="https://bnbcleaningco.com">
              <img class="work-thumbnail" src="@/assets/bnb.png"/>
            </a>
          </div>
          <div>
            <h2>B&B Cleaning Co.</h2>
            <p>
              This client came to me needing an online presence for a fast growing cleaning business. We needed to ensure the site could be easily accessed on desktop and mobile devices, that the site came up on page one of Google search and to make upkeep easy for non-technical team members after the site had launched.
            </p>
            <p>
              I utilized Wordpress CMS to for this site to provide easy upkeep and editing for the client. Using Wordpress also allowed me to add custom design and produce the end product quickly and efficiently. Please click on the image to view the live website.
            </p>
            <br />
            <p class="skills-used">Skills Used: Wordpress CMS, CSS</p>
          </div>

          <div class="work-sample">
            <a href="https://parkboard.org">
              <img class="work-thumbnail" src="@/assets/parkboard.png"/>
            </a>
          </div>
          <div>
            <h2>Springfield-Greene County Park Board</h2>
            <p>
              I joined the Park Board team just as they decided to leave the City of Springfield website and begin a new chapter as a stand alone brand. The other members of the communications team had already selected to use the Civic Plus CMS before I came on board, so my time with Parks was spend developing this product.
            </p>
            <p>
              A new feature for this project was to transition the Park Board from using a call in tour service to using the website as the basis for tours at the Springfield Botanical Center. This included mapping gardens with QR Codes and linking to custom garden pages which housed pertinent information like maps, history, and photos.
            </p>
            <br />
            <p class="skills-used">Skills Used: CivicPlus CMS, Javascript, HTML, CSS, Flexbox, Grid</p>
          </div>

          <div class="work-sample">
            <a href="https://parkboardgolf.org">
              <img class="work-thumbnail" src="@/assets/parkboardgolf.png"/>
            </a>
          </div>
          <div>
            <h2>Park Board Golf</h2>
            <p>
              One of the projects that came across my desk during my time at the Park Board was moving the municiple golf courses to their own website.
            </p>
            <p>
              For this project, I utilized Wordpress as it easily integrated into the current tee time scheduling software we decided to use.
            </p>
            <br />
            <p class="skills-used">Skills Used: Wordpress CMS, CSS</p>
          </div>

          <div class="work-sample">
            <a href="https://snake.pamelamontanez.com">
              <img class="work-thumbnail" src="@/assets/snake.png"/>
            </a>
          </div>
          <div>
            <h2>Let's Play A Game</h2>
            <p>
              I had the priveledge of speaking at a local school on what UI/UX Design and Development actually is. As part of my demonstration, I started with a simple game of snake but the colors had little contrast and the speed of the snake was impossible to harness. I let the kids suggest contrasting colors and live coded speed changes in front of them to demonstrate a better experience.
            </p>
            <iframe class="project-gif" src="https://docs.google.com/presentation/d/e/2PACX-1vRl5VvoXegVtlmb5SX_hFAFBgEWlyR7ikuhwqet2FCDmJi7ZOFW394TSnRaDjK6Vg/embed?start=true&loop=true&delayms=3000" frameborder="0" width="600" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>
            <br />
            <br />
            <p class="skills-used">Skills Used: PowerPoint, Javascript, HTML</p>
          </div>
      </div>
    </div> 
</template>