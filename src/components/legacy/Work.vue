<template>
    <div class="work-content">
      <h1 class="page-title">Recent Work</h1>
      <!-- <h2 class="page-subtitle">Here are a few personal development projects I've worked on lately.</h2> -->

      <div class="work-grid">

        <div class="work-sample">
          <a href="https://bol.pamelamontanez.com" target="_blank">
            <img class="work-thumbnail" src="@/assets/bol.png"/>
          </a>
          <div class="work-description heading-link">
            <a href="https://bol.pamelamontanez.com" target="_blank">
              <h2>Dynamic Restaurant Menu</h2>
            </a>
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
      </div>

      <div class="work-sample">
        <a href="https://doge.pamelamontanez.com" target="_blank">
          <img class="work-thumbnail" src="@/assets/doge-site.png"/>
        </a>
        <div class="work-description heading-link">
          <a href="https://doge.pamelamontanez.com" target="_blank">
            <h2>Doge Coin Calculator</h2>
          </a>
          <p>
            Doge Coin is the meme Crypto everyone loves to joke about... so I made a little calculator to see how much your shares just might be worth. For this, I use an API that will return the current Doge price. The user inputs a number of shares and the USD value will be output on the screen. Click the image to try it out.
          </p>
          <br/>
          <br />
          <p class="skills-used">Vue.js, Rest API, Git</p>
        </div>
      </div>

          <!-- <div class="work-sample">
            <img class="work-thumbnail" src="@/assets/memory-game.png"/>
            <div class="work-description">
              <h2>30Rock Themed Games</h2>
              <p>
                I may have gotten a little carried away here, but it's done now, so just enjoy. I created several games for practice purposes but themed them all in 30Rock characters.
              </p>
              <p>
                <a href="https://pamelamontanez.com/memory/" target="_blank">Memory Game</a><br>
                <a href="https://kenneth.pamelamontanez.com/" target="_blank">Snake</a><br>
                <a href="http://frank.pamelamontanez.com/" target="_blank">Whack-a-Mole</a><br>
                <a href="https://pamelamontanez.com/connectfour/" target="_blank">Connect Four</a>

              </p>
              <br />
              <p class="skills-used">Skills Used: Javascript, HTML, CSS, AdobeXD, Git</p>
          </div>
          </div> -->


          <!-- <div class="work-sample">
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
          </div> -->
      </div>
    </div> 
</template>

<style lang="scss">
@import '@/styles/styles.scss';

.work-content {
  text-align: center; 
  max-width: 1000px;
  margin: 0 auto auto
}
.work-grid {
  display: flex;
  flex-direction: row;
  text-align: center;
  align-items: flex-start;
  justify-content: center;
  grid-gap: 40px;
}

.work-sample {
  flex-basis:0;
  flex-grow:1;
}

.work-description {
  text-align: left;
}

.work-thumbnail {
  max-width: 200px;
  border-radius: 50%;
  border: $lt-gray solid 3px; 
  :hover {
    opacity: 50%; 
  }
}
.heading-link {
  a {
    text-decoration: none;
  }
  p {
    a {
      text-decoration:underline;
    }
    a:hover {
      color: $yellow;
    }
  }

}
.project-img-wrapper {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  img {
    padding-bottom: 10px;
  }
}

.project-gif {
  max-width: 300px;
  margin-right: 15px; 
}

.skills-used {
  font-style: italic;
  font-size: 11px;
  margin-top: -15px; 
}

@media only screen and (max-width: 800px) {
  .work-grid {
    grid-template-columns: 100%;
    text-align: center; 
  }

  .work-content {
    margin: auto 25px;
  }

  .project-gif {
    width: 100%;
    align-self: center;
    text-align: center;
    padding: 10px;
    margin-bottom: 10px; 
  }

  .project-img-wrapper {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%; 
  }
  
  .work-grid {
    flex-direction: column;
  }

  .work-sample {
    max-width: 300px;
  }
}

@media only screen and (max-width: 450px) {
  
}
</style>