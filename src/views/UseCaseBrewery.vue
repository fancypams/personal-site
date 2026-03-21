<template>
  <UseCaseGate>
<article class="case">
      <span class="red-label">Side Project &middot; Frontend Engineering</span>
      <h2 class="case-title">Dynamic Brewery Menu Board</h2>
      <span class="rule"></span>

      <div class="role-callout">
        <span class="red-label">Context</span>
        <p>A brewery I had connections with needed a way to keep their tap list current across large TV displays in the beer hall and via QR code on phones — without paying for expensive digital signage software or requiring any technical knowledge to update. I built a prototype using Sheetrock.js and a Google Spreadsheet as the database. One sheet, one update, every screen reflects it instantly.</p>
      </div>

      <div class="problem-goal-grid">
        <div class="pg-block">
          <span class="block-label">The Problem</span>
          <p>Brewery tap lists change constantly — kegs kick, seasonal beers rotate, prices shift. Printing new menus is wasteful and slow. Existing digital signage solutions are expensive, require vendor lock-in, and still need someone technical to manage. Staff needed to update the menu themselves without touching code.</p>
        </div>
        <div class="pg-block">
          <span class="block-label">Goals</span>
          <ul class="goal-list">
            <li>Menu editable by non-technical staff</li>
            <li>Updates reflect immediately on all screens</li>
            <li>Works on large TVs in the beer hall</li>
            <li>Works via QR code on phones</li>
            <li>Zero ongoing software cost</li>
          </ul>
        </div>
      </div>

      <h3 class="sub-heading">The solution</h3>
      <div class="solutions-list">
        <div class="solution">
          <i class="fa-solid fa-circle-check solution-icon"></i>
          <div>
            <strong>Google Sheets as the CMS</strong>
            <p>The entire menu lives in a Google Spreadsheet. Staff add a row for each beer: number, name, description, and pour prices at 5oz, 10oz, and 16oz. That's it. No login to a separate system, no training required beyond knowing how to edit a spreadsheet they already use.</p>
          </div>
        </div>
        <div class="solution">
          <i class="fa-solid fa-circle-check solution-icon"></i>
          <div>
            <strong>Tabletop.js pulls the data at runtime</strong>
            <p>Sheetrock.js fetches the published Google Sheet as JSON and renders the beer list dynamically on page load. No server, no database, no build step — a static HTML file reads the spreadsheet directly. The page refreshes on an interval so TVs stay current without manual intervention.</p>
          </div>
        </div>
        <div class="solution">
          <i class="fa-solid fa-circle-check solution-icon"></i>
          <div>
            <strong>One source, every screen</strong>
            <p>The same URL serves both contexts. Large TVs in the beer hall display the full list in a format designed for distance readability. Customers scan a QR code at their table and get the same live data, styled for mobile. One spreadsheet update propagates everywhere simultaneously.</p>
          </div>
        </div>
        <div class="solution">
          <i class="fa-solid fa-circle-check solution-icon"></i>
          <div>
            <strong>No ongoing cost</strong>
            <p>Google Sheets is free. The page is hosted as a static site. There are no subscriptions, no vendor contracts, no API fees. The only cost was the time to build it — and the brewery owned it completely.</p>
          </div>
        </div>
      </div>


      <h3 class="sub-heading">Live demo</h3>
      <p class="uc-body">The screenshot below shows the populated menu board. The dark background is intentional for TV display readability. Icons indicate availability status, beer number, name, style, ABV, and all three pour sizes — all pulled live from a Google Sheet at runtime.</p>
      <div style="margin:1.5rem 0"><img src="../assets/brewery.png" alt="Brewery menu board desktop view" style="width:100%;display:block;max-height:600px;object-fit:contain;object-position:top;"/>
      </div>

      <h3 class="sub-heading">Why it matters as a PM artifact</h3>
      <p class="uc-body">This project predates my formal PM career, but it demonstrates the instincts I bring to product work: identify a real user need, find the simplest possible solution, eliminate unnecessary cost and complexity, and build something the end user can actually own and operate. The same thinking I applied here, using existing tools in unexpected ways to solve a real problem without over-engineering it, is how I approach product decisions today.</p>

      <div class="case-meta" style="margin-top:2rem;display:flex;gap:1.5rem;flex-wrap:wrap">
        <a href="https://bol.pamelamontanez.com" target="_blank" class="card-link">View live site <i class="fa-solid fa-arrow-up-right-from-square fa-xs"></i></a>
        <a href="https://github.com/fancypams/google-sheets-menu" target="_blank" class="card-link">View on GitHub <i class="fa-brands fa-github fa-xs"></i></a>
      </div>

    </article>
  </UseCaseGate>
</template>

<script setup>
import UseCaseGate from '../components/UseCaseGate.vue'
</script>

