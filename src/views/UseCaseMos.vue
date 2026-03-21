<template>
  <UseCaseGate>
<article class="case">
      <span class="red-label">Side Project &middot; Full Stack</span>
      <h2 class="case-title">Monthly Happy Hour CMS</h2>
      <span class="rule"></span>

      <div class="role-callout">
        <span class="red-label">Context</span>
        <p>Every summer I host a monthly themed happy hour with a custom cocktail. The problem: I kept spending too much time spinning up a one-off webpage for each event. I built a self-hosted Craft CMS site so my husband could update the date, theme, and drink recipe himself without touching code. It turned into a genuine full-stack project and a great excuse to learn Craft CMS properly.</p>
      </div>

      <div class="problem-goal-grid">
        <div class="pg-block">
          <span class="block-label">The Problem</span>
          <p>Every month I needed to publish: the event date, the theme, a featured cocktail recipe, and local resources for ingredients. Building a new page each time was tedious. I wanted a system where a non-developer (my husband) could log in and update the content without me being involved at all.</p>
        </div>
        <div class="pg-block">
          <span class="block-label">Goals</span>
          <ul class="goal-list">
            <li>Non-developer can update all content</li>
            <li>Supports multiple content types: events, recipes, resources</li>
            <li>Clean front-end for guests to view</li>
            <li>Self-hosted, no ongoing subscription cost</li>
            <li>A real excuse to learn Craft CMS</li>
          </ul>
        </div>
      </div>

      <h3 class="sub-heading">How it was built</h3>
      <div class="solutions-list">
        <div class="solution">
          <i class="fa-solid fa-circle-check solution-icon"></i>
          <div>
            <strong>Craft CMS as the content engine</strong>
            <p>Craft CMS is a flexible, self-hosted PHP content management system built on a database. Unlike WordPress it doesn't impose a rigid structure — you define exactly the fields and content types you need. I modeled three content types: main updates (date, theme), drink of the month (recipe, ingredients, instructions), and local resources.</p>
          </div>
        </div>
        <div class="solution">
          <i class="fa-solid fa-circle-check solution-icon"></i>
          <div>
            <strong>User accounts with edit permissions</strong>
            <p>I created a separate Craft user account for my husband with permissions scoped only to the content he needs to update. He logs into the control panel, edits the fields, hits save. No code, no FTP, no asking me. The same multi-user model that enterprise CMS platforms charge for is available in Craft out of the box.</p>
          </div>
        </div>
        <div class="solution">
          <i class="fa-solid fa-circle-check solution-icon"></i>
          <div>
            <strong>Twig templates for the front-end</strong>
            <p>The front-end is built with Craft's Twig templating system — a clean separation of content and presentation. CSS handles the styling, PHP handles the CMS layer, and Twig pulls it all together at render time. The stack is 39% Twig, 35% CSS, 27% PHP.</p>
          </div>
        </div>
        <div class="solution">
          <i class="fa-solid fa-circle-check solution-icon"></i>
          <div>
            <strong>DDEV for local development</strong>
            <p>Local development runs on DDEV, a Docker-based development environment that mirrors the production server. This meant I could build and test locally with confidence before pushing to the live site — a proper dev workflow for what started as a party invite.</p>
          </div>
        </div>
      </div>


      <h3 class="sub-heading">Live demo</h3>
      <p class="uc-body" style="max-width:fit-content">The screenshot below shows a real invite from a Hawaii-themed happy hour. The site is mobile-first by design since guests receive the link via text.</p>
      
      <div style="display:flex;justify-content:center;margin:1.5rem 0"><div style="max-width:260px;width:100%"><img src="../assets/mos.png" alt="Mo's Happy Hour mobile view" style="width:100%;display:block;"/></div></div>
      <div class="case-meta" style="margin-top:1.5rem;display:flex;gap:1.5rem;flex-wrap:wrap">
        <a href="http://mos.pamelamontanez.com/" target="_blank" class="card-link">View live site <i class="fa-solid fa-arrow-up-right-from-square fa-xs"></i></a>
        <a href="https://github.com/fancypams/mos" target="_blank" class="card-link">View on GitHub <i class="fa-brands fa-github fa-xs"></i></a>
      </div>
    </article>
  </UseCaseGate>
</template>

<script setup>
import UseCaseGate from '../components/UseCaseGate.vue'
</script>

