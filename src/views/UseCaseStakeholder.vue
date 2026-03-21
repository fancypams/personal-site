<template>
  <UseCaseGate>
<article class="case">
        <span class="red-label">WaFd Bank &middot; Product Management</span>
        <h2 class="case-title">Stakeholder Alignment &amp; Collaborative Planning</h2>
        <span class="rule"></span>

        <div class="uc-intro">
          <p>One of the hardest parts of product management isn&rsquo;t building the right thing, it&rsquo;s getting the right people to agree on what that is. When I joined WaFd, there was no shared artifact between executive stakeholders and the development team. Business priorities lived in one place, engineering capacity lived in another, and the two sides were often talking past each other with no structured process to bridge the gap.</p>
          <p>I introduced a collaborative planning process, run both quarterly and per release cycle, that brings executives and developers into the same room around a shared FigJam board. The goal is simple: by the end of the session, everyone knows what we&rsquo;re building, why it&rsquo;s prioritized the way it is, and what the path to delivery looks like.</p>
        </div>

        <h3 class="sub-heading">How I facilitate</h3>
        <div class="process-steps">
          <div class="process-step">
            <span class="step-num">01</span>
            <div>
              <p class="step-title">Set the frame before the session</p>
              <p class="step-detail">I send a structured agenda in advance with the meeting objective, release themes, and any carryover items that need a decision. People come prepared, not surprised.</p>
            </div>
          </div>
          <div class="process-step">
            <span class="step-num">02</span>
            <div>
              <p class="step-title">Build the board in FigJam</p>
              <p class="step-detail">Each session has a dedicated board organized by product area (OLB, DAO, DBS, MA, etc.). Features live as sticky notes, each linked directly to the corresponding Jira ticket so anyone can drill into the details without derailing the conversation.</p>
            </div>
          </div>
          <div class="process-step">
            <span class="step-num">03</span>
            <div>
              <p class="step-title">Move the work together</p>
              <p class="step-detail">During the session I facilitate live, moving sticky notes as we discuss, taking visible notes in the board, and surfacing trade-offs in real time. The board is the single source of truth for the room. Nothing lives in someone&rsquo;s head.</p>
            </div>
          </div>
          <div class="process-step">
            <span class="step-num">04</span>
            <div>
              <p class="step-title">Document decisions, not just conclusions</p>
              <p class="step-detail">After the session, the board becomes the record. What was committed to, what was deferred, what needs more research before Q commitment. The Jira links mean action items have a home immediately.</p>
            </div>
          </div>
        </div>

        <h3 class="sub-heading">Example: Q3 Planning Deep Dive</h3>
        <p class="uc-body">The board below is from a live Q3 planning session. Attendees included executive stakeholders and dev leads. We aligned on release themes including security enhancements, fraud prevention, consumer check management, and the new mobile app launch. Sticky notes that needed more research before committing were flagged in pink. Everything else was linked, assigned, and ready to move.</p>

        <div class="figma-embed-wrap">
          <iframe
            style="border:1px solid var(--border-light);"
            width="100%"
            height="500"
            src="https://embed.figma.com/board/EObbbdWy7eBMRAg6Z4um8S/Release-Planning?node-id=5429-1281&embed-host=share"
            allowfullscreen>
          </iframe>
        </div>
        <p class="figma-link-note">
          <a href="https://www.figma.com/board/EObbbdWy7eBMRAg6Z4um8S/Release-Planning?node-id=5429-1281&t=MWpRgrMxTZDTzid7-1" target="_blank" class="card-link">
            Open full board in Figma <i class="fa-solid fa-arrow-up-right-from-square fa-xs"></i>
          </a>
        </p>

        <h3 class="sub-heading">Example: Release Cadence Proposal</h3>
        <p class="uc-body">When WaFd&rsquo;s development team returned as a subsidiary after operating independently, there was no established working process between the business, dev, and design teams. They had previously only managed production tickets in isolation. I designed a release cadence from the ground up to bridge all three groups into a single, coordinated flow.</p>
        <p class="uc-body">The flowchart below shows the full proposal: from business refinement and sprint planning through development, UAT deployment, PSL &amp; WaFd UAT team reviews, knowledge share, signoff gates, and ultimately production release. Each stage has defined expectations, owners, and clear yes/no decision points so nothing falls through the cracks between teams.</p>

        <div class="figma-embed-wrap">
          <iframe
            style="border:1px solid var(--border-light);"
            width="100%"
            height="500"
            src="https://embed.figma.com/board/EObbbdWy7eBMRAg6Z4um8S/Release-Planning?node-id=5828-1438&embed-host=share"
            allowfullscreen>
          </iframe>
        </div>
        <p class="figma-link-note">
          <a href="https://www.figma.com/board/EObbbdWy7eBMRAg6Z4um8S/Release-Planning?node-id=5828-1438&t=MWpRgrMxTZDTzid7-1" target="_blank" class="card-link">
            Open full board in Figma <i class="fa-solid fa-arrow-up-right-from-square fa-xs"></i>
          </a>
        </p>

        <div class="outcome-bar">
          <span class="red-label">Outcome</span>
          <p>A shared release process where business, dev, and design all know their role at every stage, with defined signoff gates that protect production quality without creating bottlenecks.</p>
        </div>

        <h3 class="sub-heading">Example: Quarterly Roadmap</h3>
        <p class="uc-body">Alignment doesn&rsquo;t end when the planning session does. Each quarter I maintain and present a full roadmap that gives stakeholders visibility into what&rsquo;s in flight, what&rsquo;s coming, and what&rsquo;s been deferred. Organized by product area (OLB, DAO, DBS, MA) and color-coded by status, Proposed, Not Started, In Progress, Launched, Removed, and Blocked, it gives everyone a single view across the portfolio without needing to dig through Jira.</p>
        <p class="uc-body">Every item links back to its Jira ticket, so the roadmap is never a static slide deck. It&rsquo;s a live artifact that reflects where things actually stand.</p>

        <div class="figma-embed-wrap">
          <iframe
            style="border:1px solid var(--border-light);"
            width="100%"
            height="500"
            src="https://embed.figma.com/board/EObbbdWy7eBMRAg6Z4um8S/Release-Planning?node-id=5784-400&embed-host=share"
            allowfullscreen>
          </iframe>
        </div>
        <p class="figma-link-note">
          <a href="https://www.figma.com/board/EObbbdWy7eBMRAg6Z4um8S/Release-Planning?node-id=5784-400&t=MWpRgrMxTZDTzid7-1" target="_blank" class="card-link">
            Open full board in Figma <i class="fa-solid fa-arrow-up-right-from-square fa-xs"></i>
          </a>
        </p>

        <h3 class="sub-heading">Why it works</h3>
        <div class="why-grid">
          <div class="why-card">
            <span class="red-label">Shared visibility</span>
            <p>Executives see what engineering can realistically deliver. Engineers understand why priorities are set the way they are. The board makes that exchange concrete.</p>
          </div>
          <div class="why-card">
            <span class="red-label">Decisions with context</span>
            <p>Every sticky note links to a Jira ticket. Scope, acceptance criteria, and history are one click away, so trade-off conversations are grounded in actual detail.</p>
          </div>
          <div class="why-card">
            <span class="red-label">A living artifact</span>
            <p>The board doesn&rsquo;t get archived after the meeting. It becomes the reference point for the quarter, updated as priorities shift and decisions get made.</p>
          </div>
        </div>

        <blockquote class="team-quote">
          <p class="team-quote-text">"I don't think you understand how much I've grown since you came into this role. Prior to you getting on our team I felt like I was slipping away and losing interest, but once you got on board everything suddenly became exciting. Like we always knew where we were, where we were going, and how we were planning to get there."</p>
          <footer class="team-quote-attr">Dejen Gebrie, Sr. Product Analyst</footer>
        </blockquote>

      </article>
  </UseCaseGate>
</template>

<script setup>
import UseCaseGate from '../components/UseCaseGate.vue'
</script>

