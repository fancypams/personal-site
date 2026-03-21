<template>
  <UseCaseGate>
<article class="case">
        <span class="red-label">WaFd Bank &middot; Product Management</span>
        <h2 class="case-title">Digital Account Opening Flow</h2>
        <span class="rule"></span>
        <div class="role-callout">
          <span class="red-label">My role</span>
          <p>I joined WaFd as Product Manager for Digital Account Opening and owned this product end to end. Over my first year I used Heap funnel data and drop-off reporting to identify friction, drove stakeholder alignment on systemic changes, selected and pushed to integrate vendor solutions, and shipped improvements incrementally while measuring impact at each stage.</p>
        </div>

        <div class="problem-goal-grid">
          <div class="pg-block"><span class="block-label">Problem</span><p>Average application time was <strong>30+ minutes</strong>. Average onboarding time was <strong>48+ hours</strong>. Even after funding, <strong>~20% of new digital accounts were still getting closed</strong> due to incomplete signature cards.</p></div>
          <div class="pg-block"><span class="block-label">Goals</span><ul class="goal-list"><li>Users decisioned in <strong>under 10 minutes</strong></li><li>Full account open in <strong>under 8 hours</strong></li><li>Account closures due to incomplete signature card <strong>under 2%</strong></li></ul></div>
        </div>
        <h3 class="sub-heading">Analysis</h3>
        <div class="analysis-grid">
          <div class="drop-card"><span class="drop-num">01</span><p class="drop-label">First page drop-off</p><p class="drop-detail">Most users stalled on page one, structured to explain the flow, but by arrival they had already researched the product. Pure friction.</p></div>
          <div class="drop-card"><span class="drop-num">02</span><p class="drop-label">Manual entry drop-off</p><p class="drop-detail">Personal details required clicking a pencil, opening a section, editing, and saving. A 4-click sequence per field, causing users to abandon.</p></div>
          <div class="drop-card"><span class="drop-num">03</span><p class="drop-label">Post-submit gap</p><p class="drop-detail">A significant gap existed between submitting an application and funding the account. Clients weren't returning in time.</p></div>
          <div class="drop-card"><span class="drop-num">04</span><p class="drop-label">Signature card failure</p><p class="drop-detail">The signature card follow-up was a separate email, lost in inboxes despite clients completing every other step. Accounts auto-close in 2 weeks without it.</p></div>
        </div>
        <h3 class="sub-heading">Flow: before &amp; after</h3>
        <p class="uc-body">The four changes mapped across the full application flow, showing exactly where each problem was and what replaced it.</p>
        <div class="dao-diagram" style="margin:2rem 0;">

<div class="dao-desktop-wrap">
<svg width="100%" viewBox="0 0 760 400" xmlns="http://www.w3.org/2000/svg" style="font-family:'Space Mono',monospace;min-width:600px;" class="dao-desktop">
<defs>
<marker id="darr2" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M2 1L8 5L2 9" fill="none" stroke="#888780" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></marker>
<marker id="darr-red2" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M2 1L8 5L2 9" fill="none" stroke="#c0392b" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></marker>
</defs>

<!-- Row labels -->
<text font-family="'Playfair Display',Georgia,serif" font-weight="700" font-size="12" x="16" y="100" text-anchor="middle" fill="#1a1a1a" transform="rotate(-90,16,100)">Before</text>
<text font-family="'Playfair Display',Georgia,serif" font-weight="700" font-size="12" x="16" y="275" text-anchor="middle" fill="#1a1a1a" transform="rotate(-90,16,275)">After</text>

<!-- Divider -->
<line x1="30" y1="188" x2="730" y2="188" stroke="#c8bfa8" stroke-width="0.5" stroke-dasharray="4 3"/>

<!-- Box layout: x=30, w=108, gap=10. Positions: 30,148,266,384,502,620 -->
<!-- ══ BEFORE row (y=44..144) ══ -->
<rect x="30"  y="44" width="108" height="66" rx="4" fill="#FCEBEB" stroke="#E24B4A" stroke-width="0.5"/>
<text font-size="10" font-weight="500" x="84"  y="67"  text-anchor="middle" dominant-baseline="central" fill="#791F1F">Intro page</text>
<text font-size="9" x="84" y="85" text-anchor="middle" dominant-baseline="central" fill="#A32D2D">friction only</text>
<line x1="138" y1="77" x2="148" y2="77" stroke="#888" stroke-width="0.5" marker-end="url(#darr2)"/>

<rect x="148" y="44" width="108" height="66" rx="4" fill="#FCEBEB" stroke="#E24B4A" stroke-width="0.5"/>
<text font-size="10" font-weight="500" x="202" y="65" text-anchor="middle" dominant-baseline="central" fill="#791F1F">Manual entry</text>
<text font-size="9" x="202" y="83" text-anchor="middle" dominant-baseline="central" fill="#A32D2D">4 clicks per field</text>
<line x1="256" y1="77" x2="266" y2="77" stroke="#888" stroke-width="0.5" marker-end="url(#darr2)"/>

<rect x="266" y="44" width="108" height="66" rx="4" fill="#FCEBEB" stroke="#E24B4A" stroke-width="0.5"/>
<text font-size="10" font-weight="500" x="320" y="65" text-anchor="middle" dominant-baseline="central" fill="#791F1F">Manual review</text>
<text font-size="9" x="320" y="83" text-anchor="middle" dominant-baseline="central" fill="#A32D2D">days of waiting</text>
<line x1="374" y1="77" x2="384" y2="77" stroke="#888" stroke-width="0.5" marker-end="url(#darr2)"/>

<rect x="384" y="44" width="108" height="66" rx="4" fill="#f1efe8" stroke="#c8bfa8" stroke-width="0.5"/>
<text font-size="10" font-weight="500" x="438" y="65" text-anchor="middle" dominant-baseline="central" fill="#1a1a1a">Apply &amp; fund</text>
<text font-size="9" x="438" y="83" text-anchor="middle" dominant-baseline="central" fill="#888780">unchanged</text>
<line x1="492" y1="77" x2="502" y2="77" stroke="#888" stroke-width="0.5" marker-end="url(#darr2)"/>

<rect x="502" y="44" width="108" height="66" rx="4" fill="#FCEBEB" stroke="#E24B4A" stroke-width="0.5"/>
<text font-size="10" font-weight="500" x="556" y="65" text-anchor="middle" dominant-baseline="central" fill="#791F1F">Sig card email</text>
<text font-size="9" x="556" y="83" text-anchor="middle" dominant-baseline="central" fill="#A32D2D">lost in inbox</text>
<line x1="610" y1="77" x2="620" y2="77" stroke="#888" stroke-width="0.5" marker-end="url(#darr2)"/>

<rect x="620" y="44" width="108" height="66" rx="4" fill="#FCEBEB" stroke="#E24B4A" stroke-width="0.5"/>
<text font-size="10" font-weight="500" x="674" y="65" text-anchor="middle" dominant-baseline="central" fill="#791F1F">48+ hrs · ~20%</text>
<text font-size="9" x="674" y="83" text-anchor="middle" dominant-baseline="central" fill="#A32D2D">accounts closed</text>

<!-- ══ CHANGE ARROWS ══ -->
<line x1="84"  y1="110" x2="84"  y2="174" stroke="#c0392b" stroke-width="0.5" stroke-dasharray="3 2" marker-end="url(#darr-red2)"/>
<text font-size="9" x="84" y="143" text-anchor="middle" fill="#c0392b">removed</text>
<line x1="202" y1="110" x2="202" y2="196" stroke="#c0392b" stroke-width="0.5" stroke-dasharray="3 2" marker-end="url(#darr-red2)"/>
<line x1="320" y1="110" x2="320" y2="196" stroke="#c0392b" stroke-width="0.5" stroke-dasharray="3 2" marker-end="url(#darr-red2)"/>
<line x1="438" y1="110" x2="438" y2="196" stroke="#c8bfa8" stroke-width="0.5" marker-end="url(#darr2)"/>
<line x1="556" y1="110" x2="556" y2="196" stroke="#c0392b" stroke-width="0.5" stroke-dasharray="3 2" marker-end="url(#darr-red2)"/>
<line x1="674" y1="110" x2="674" y2="196" stroke="#c0392b" stroke-width="0.5" stroke-dasharray="3 2" marker-end="url(#darr-red2)"/>

<!-- ══ AFTER row (y=196..296) ══ -->
<rect x="30"  y="196" width="108" height="66" rx="4" fill="#f1efe8" stroke="#c8bfa8" stroke-width="0.5"/>
<text font-size="9" x="84"  y="229" text-anchor="middle" dominant-baseline="central" fill="#888780" font-style="italic">step removed</text>

<rect x="148" y="196" width="108" height="66" rx="4" fill="#E1F5EE" stroke="#1D9E75" stroke-width="0.5"/>
<text font-size="10" font-weight="500" x="202" y="217" text-anchor="middle" dominant-baseline="central" fill="#085041">Prove lookup</text>
<text font-size="9" x="202" y="235" text-anchor="middle" dominant-baseline="central" fill="#0F6E56">auto-fills identity</text>
<line x1="256" y1="229" x2="266" y2="229" stroke="#888" stroke-width="0.5" marker-end="url(#darr2)"/>

<rect x="266" y="196" width="108" height="66" rx="4" fill="#E1F5EE" stroke="#1D9E75" stroke-width="0.5"/>
<text font-size="10" font-weight="500" x="320" y="217" text-anchor="middle" dominant-baseline="central" fill="#085041">Instant decision</text>
<text font-size="9" x="320" y="235" text-anchor="middle" dominant-baseline="central" fill="#0F6E56">approve / deny</text>
<line x1="374" y1="229" x2="384" y2="229" stroke="#888" stroke-width="0.5" marker-end="url(#darr2)"/>

<rect x="384" y="196" width="108" height="66" rx="4" fill="#f1efe8" stroke="#c8bfa8" stroke-width="0.5"/>
<text font-size="10" font-weight="500" x="438" y="217" text-anchor="middle" dominant-baseline="central" fill="#1a1a1a">Apply &amp; fund</text>
<text font-size="9" x="438" y="235" text-anchor="middle" dominant-baseline="central" fill="#888780">unchanged</text>
<line x1="492" y1="229" x2="502" y2="229" stroke="#888" stroke-width="0.5" marker-end="url(#darr2)"/>

<rect x="502" y="196" width="108" height="66" rx="4" fill="#E1F5EE" stroke="#1D9E75" stroke-width="0.5"/>
<text font-size="10" font-weight="500" x="556" y="217" text-anchor="middle" dominant-baseline="central" fill="#085041">Sig card in-flow</text>
<text font-size="9" x="556" y="235" text-anchor="middle" dominant-baseline="central" fill="#0F6E56">embedded step</text>
<line x1="610" y1="229" x2="620" y2="229" stroke="#888" stroke-width="0.5" marker-end="url(#darr2)"/>

<rect x="620" y="196" width="108" height="66" rx="4" fill="#E1F5EE" stroke="#1D9E75" stroke-width="0.5"/>
<text font-size="10" font-weight="500" x="674" y="217" text-anchor="middle" dominant-baseline="central" fill="#085041">4 hrs · &lt;1%</text>
<text font-size="9" x="674" y="235" text-anchor="middle" dominant-baseline="central" fill="#0F6E56">accounts closed</text>

<!-- Stats bar -->
<line x1="30" y1="310" x2="730" y2="310" stroke="#c8bfa8" stroke-width="0.5"/>
<text font-size="11" x="200" y="328" text-anchor="middle" fill="#888780">Before: 8+ hrs avg submit · ~20% closure rate</text>
<text font-size="11" x="560" y="328" text-anchor="middle" fill="#0F6E56">After: 7 min avg submit · &lt;1% closure rate</text>

<!-- Legend -->
<rect x="30"  y="346" width="10" height="10" rx="2" fill="#FCEBEB" stroke="#E24B4A" stroke-width="0.5"/>
<text font-size="11" x="46"  y="355" fill="#888780">Problem area</text>
<rect x="150" y="346" width="10" height="10" rx="2" fill="#E1F5EE" stroke="#1D9E75" stroke-width="0.5"/>
<text font-size="11" x="166" y="355" fill="#888780">Improvement</text>
<rect x="270" y="346" width="10" height="10" rx="2" fill="#f1efe8" stroke="#c8bfa8" stroke-width="0.5"/>
<text font-size="11" x="286" y="355" fill="#888780">Unchanged</text>
<line x1="390" y1="346" x2="402" y2="346" stroke="#c0392b" stroke-width="0.5" stroke-dasharray="3 2"/>
<text font-size="11" x="408" y="355" fill="#888780">Change mapping</text>
</svg>
</div>
<div class="dao-mobile-wrap">
<svg width="100%" viewBox="0 0 680 650" xmlns="http://www.w3.org/2000/svg" style="font-family:'Space Mono',monospace;min-width:500px">
<defs>
<marker id="darr" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M2 1L8 5L2 9" fill="none" stroke="#888780" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></marker>
<marker id="darr-red" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M2 1L8 5L2 9" fill="none" stroke="#c0392b" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></marker>
</defs>
<text font-family="'Playfair Display',Georgia,serif" font-weight="700" font-size="15" x="170" y="28" text-anchor="middle" fill="#1a1a1a">Before</text>
<text font-family="'Playfair Display',Georgia,serif" font-weight="700" font-size="15" x="510" y="28" text-anchor="middle" fill="#1a1a1a">After</text>
<line x1="40" y1="36" x2="300" y2="36" stroke="#c8bfa8" stroke-width="0.5"/>
<line x1="340" y1="36" x2="640" y2="36" stroke="#c8bfa8" stroke-width="0.5"/>
<line x1="320" y1="20" x2="320" y2="620" stroke="#c8bfa8" stroke-width="0.5" stroke-dasharray="4 3"/>
<!-- BEFORE -->
<rect x="60" y="50" width="220" height="44" rx="4" fill="#FCEBEB" stroke="#E24B4A" stroke-width="0.5"/>
<text font-size="13" font-weight="500" x="170" y="72" text-anchor="middle" dominant-baseline="central" fill="#791F1F">Intro / info page</text>
<line x1="170" y1="94" x2="170" y2="118" stroke="#888" stroke-width="0.5" marker-end="url(#darr)"/>
<rect x="60" y="118" width="220" height="56" rx="4" fill="#FCEBEB" stroke="#E24B4A" stroke-width="0.5"/>
<text font-size="13" font-weight="500" x="170" y="138" text-anchor="middle" dominant-baseline="central" fill="#791F1F">Manual entry</text>
<text font-size="11" x="170" y="158" text-anchor="middle" dominant-baseline="central" fill="#A32D2D">Click pencil, open, edit, save</text>
<line x1="170" y1="174" x2="170" y2="198" stroke="#888" stroke-width="0.5" marker-end="url(#darr)"/>
<rect x="60" y="198" width="220" height="56" rx="4" fill="#FCEBEB" stroke="#E24B4A" stroke-width="0.5"/>
<text font-size="13" font-weight="500" x="170" y="218" text-anchor="middle" dominant-baseline="central" fill="#791F1F">Manual review queue</text>
<text font-size="11" x="170" y="238" text-anchor="middle" dominant-baseline="central" fill="#A32D2D">Days of waiting</text>
<line x1="170" y1="254" x2="170" y2="278" stroke="#888" stroke-width="0.5" marker-end="url(#darr)"/>
<rect x="60" y="278" width="220" height="44" rx="4" fill="#f1efe8" stroke="#c8bfa8" stroke-width="0.5"/>
<text font-size="13" font-weight="500" x="170" y="300" text-anchor="middle" dominant-baseline="central" fill="#1a1a1a">Apply and fund account</text>
<line x1="170" y1="322" x2="170" y2="346" stroke="#888" stroke-width="0.5" marker-end="url(#darr)"/>
<rect x="60" y="346" width="220" height="56" rx="4" fill="#FCEBEB" stroke="#E24B4A" stroke-width="0.5"/>
<text font-size="13" font-weight="500" x="170" y="366" text-anchor="middle" dominant-baseline="central" fill="#791F1F">Signature card email</text>
<text font-size="11" x="170" y="386" text-anchor="middle" dominant-baseline="central" fill="#A32D2D">Separate email, gets lost</text>
<line x1="170" y1="402" x2="170" y2="426" stroke="#888" stroke-width="0.5" marker-end="url(#darr)"/>
<rect x="60" y="426" width="220" height="44" rx="4" fill="#FCEBEB" stroke="#E24B4A" stroke-width="0.5"/>
<text font-size="13" font-weight="500" x="170" y="448" text-anchor="middle" dominant-baseline="central" fill="#791F1F">Wait 48+ hrs to open</text>
<line x1="170" y1="470" x2="170" y2="494" stroke="#888" stroke-width="0.5" marker-end="url(#darr)"/>
<rect x="60" y="494" width="220" height="44" rx="4" fill="#FCEBEB" stroke="#E24B4A" stroke-width="0.5"/>
<text font-size="13" font-weight="500" x="170" y="516" text-anchor="middle" dominant-baseline="central" fill="#791F1F">~20% accounts closed</text>
<!-- AFTER -->
<rect x="400" y="50" width="220" height="56" rx="4" fill="#E1F5EE" stroke="#1D9E75" stroke-width="0.5"/>
<text font-size="13" font-weight="500" x="510" y="70" text-anchor="middle" dominant-baseline="central" fill="#085041">Prove identity lookup</text>
<text font-size="11" x="510" y="90" text-anchor="middle" dominant-baseline="central" fill="#0F6E56">Phone + last 4 SSN, auto-fill</text>
<line x1="510" y1="106" x2="510" y2="130" stroke="#888" stroke-width="0.5" marker-end="url(#darr)"/>
<rect x="400" y="130" width="220" height="56" rx="4" fill="#E1F5EE" stroke="#1D9E75" stroke-width="0.5"/>
<text font-size="13" font-weight="500" x="510" y="150" text-anchor="middle" dominant-baseline="central" fill="#085041">Standard form layout</text>
<text font-size="11" x="510" y="170" text-anchor="middle" dominant-baseline="central" fill="#0F6E56">Single pass, no extra clicks</text>
<line x1="510" y1="186" x2="510" y2="210" stroke="#888" stroke-width="0.5" marker-end="url(#darr)"/>
<rect x="400" y="210" width="220" height="56" rx="4" fill="#E1F5EE" stroke="#1D9E75" stroke-width="0.5"/>
<text font-size="13" font-weight="500" x="510" y="230" text-anchor="middle" dominant-baseline="central" fill="#085041">Instant approve / deny</text>
<text font-size="11" x="510" y="250" text-anchor="middle" dominant-baseline="central" fill="#0F6E56">No manual review queue</text>
<line x1="510" y1="266" x2="510" y2="290" stroke="#888" stroke-width="0.5" marker-end="url(#darr)"/>
<rect x="400" y="290" width="220" height="44" rx="4" fill="#f1efe8" stroke="#c8bfa8" stroke-width="0.5"/>
<text font-size="13" font-weight="500" x="510" y="312" text-anchor="middle" dominant-baseline="central" fill="#1a1a1a">Apply and fund account</text>
<line x1="510" y1="334" x2="510" y2="358" stroke="#888" stroke-width="0.5" marker-end="url(#darr)"/>
<rect x="400" y="358" width="220" height="56" rx="4" fill="#E1F5EE" stroke="#1D9E75" stroke-width="0.5"/>
<text font-size="13" font-weight="500" x="510" y="378" text-anchor="middle" dominant-baseline="central" fill="#085041">Signature card in-flow</text>
<text font-size="11" x="510" y="398" text-anchor="middle" dominant-baseline="central" fill="#0F6E56">Embedded next step, not email</text>
<line x1="510" y1="414" x2="510" y2="438" stroke="#888" stroke-width="0.5" marker-end="url(#darr)"/>
<rect x="400" y="438" width="220" height="44" rx="4" fill="#E1F5EE" stroke="#1D9E75" stroke-width="0.5"/>
<text font-size="13" font-weight="500" x="510" y="460" text-anchor="middle" dominant-baseline="central" fill="#085041">Account open in ~4 hrs</text>
<line x1="510" y1="482" x2="510" y2="506" stroke="#888" stroke-width="0.5" marker-end="url(#darr)"/>
<rect x="400" y="506" width="220" height="44" rx="4" fill="#E1F5EE" stroke="#1D9E75" stroke-width="0.5"/>
<text font-size="13" font-weight="500" x="510" y="528" text-anchor="middle" dominant-baseline="central" fill="#085041">&lt;1% accounts closed</text>
<!-- change arrows -->
<line x1="282" y1="72" x2="318" y2="72" stroke="#c0392b" stroke-width="0.5" stroke-dasharray="3 2" marker-end="url(#darr-red)"/>
<text font-size="10" x="320" y="68" text-anchor="middle" fill="#c0392b">removed</text>
<line x1="282" y1="146" x2="398" y2="78" stroke="#c0392b" stroke-width="0.5" stroke-dasharray="3 2" marker-end="url(#darr-red)"/>
<line x1="282" y1="226" x2="398" y2="238" stroke="#c0392b" stroke-width="0.5" stroke-dasharray="3 2" marker-end="url(#darr-red)"/>
<line x1="282" y1="374" x2="398" y2="386" stroke="#c0392b" stroke-width="0.5" stroke-dasharray="3 2" marker-end="url(#darr-red)"/>
<!-- divider -->
<line x1="40" y1="560" x2="640" y2="560" stroke="#c8bfa8" stroke-width="0.5"/>
<text font-size="11" x="170" y="580" text-anchor="middle" fill="#888780">Avg. submit time: 8+ hrs · ~20% accounts closed</text>
<text font-size="11" x="510" y="580" text-anchor="middle" fill="#0F6E56">Avg. submit time: 7 min · &lt;1% accounts closed</text>
<!-- legend -->
<rect x="60" y="598" width="10" height="10" rx="2" fill="#FCEBEB" stroke="#E24B4A" stroke-width="0.5"/>
<text font-size="11" x="76" y="607" fill="#888780">Problem area</text>
<rect x="160" y="598" width="10" height="10" rx="2" fill="#E1F5EE" stroke="#1D9E75" stroke-width="0.5"/>
<text font-size="11" x="176" y="607" fill="#888780">Improvement</text>
<rect x="260" y="598" width="10" height="10" rx="2" fill="#f1efe8" stroke="#c8bfa8" stroke-width="0.5"/>
<text font-size="11" x="276" y="607" fill="#888780">Unchanged</text>
</svg>
</div>
</div>
          <div class="solution"><i class="fa-solid fa-circle-check solution-icon"></i><div><strong>Redesign to standard form layout</strong><p>Replaced accordion-style editing with a conventional single-pass form. Removed unnecessary clicks entirely.</p></div></div>
          <div class="solution"><i class="fa-solid fa-circle-check solution-icon"></i><div><strong>Move to Approve / Deny decisioning</strong><p>Eliminated the manual review queue. Users get a real-time decision and move forward immediately.</p></div></div>
          <div class="solution"><i class="fa-solid fa-circle-check solution-icon"></i><div><strong>Embed signature card as an in-flow step</strong><p>Moved from a follow-up email to the very next step after account approval, directly inside the digital flow.</p></div></div>
        <h3 class="sub-heading">Solutions</h3>
        <div class="solutions-list">
          <div class="solution">
            <i class="fa-solid fa-circle-check solution-icon"></i>
            <div>
              <strong>Removed the intro page</strong>
              <p>Reporting confirmed users arriving at the flow had already researched their product. The intro page was pure friction. I removed it and replaced the entry point with the Prove identity screen, which immediately put users into a productive action rather than a reading exercise.</p>
            </div>
          </div>
          <div class="solution">
            <i class="fa-solid fa-circle-check solution-icon"></i>
            <div>
              <strong>Simplified the edit UX (low-hanging fruit from Heap)</strong>
              <p>Heap funnel dashboards I monitor regularly as PM showed a clear drop-off at the personal information step. The accordion edit pattern required 3+ clicks per field. I flagged this as low-hanging fruit, worked with the UX team to redesign it as a standard single-pass form, and validated the fix through funnel metrics post-release.</p>
            </div>
          </div>
          <div class="solution">
            <i class="fa-solid fa-circle-check solution-icon"></i>
            <div>
              <strong>Moved to Approve / Deny instant decisioning</strong>
              <p>Manual review was a systemic problem. In collaboration with the Deposit Products and Account Quality Control teams, we examined the true cost: operations team time, drop-off during the waiting period, and the incompatibility of manual review with our goal to scale and eventually launch account opening nationwide. Through executive alignment sessions, we reached agreement to move to an automated Approve/Deny framework, eliminating the review queue and the holding screen entirely.</p>
            </div>
          </div>
          <div class="solution">
            <i class="fa-solid fa-circle-check solution-icon"></i>
            <div>
              <strong>Embedded DocuSign signature card in-flow</strong>
              <p>WaFd already used DocuSign but it wasn't integrated into the account opening flow. The signature card was sent as a follow-up email that frequently got lost. I pushed to integrate it directly as the next step after account approval. Users sign without leaving the flow, and the ~20% account closure rate from unsigned cards dropped to under 1%.</p>
            </div>
          </div>
        </div>

        <h3 class="sub-heading">UI: before &amp; after</h3>
        <p class="uc-body">The screenshots below show two of the four changes. The intro page was replaced with a Prove identity screen that pre-fills ~70% of applicants' information. Users who bypass it get a clean standard form rather than the old accordion-style editor.</p>

        <div class="ui-compare">
          <div class="ui-compare-item">
            <div class="ui-compare-label bad">
              <span class="red-label">Removed</span>
              <p class="ui-compare-title">Intro / info page</p>
              <p class="ui-compare-desc">Users who arrived here had already researched the product. This page added no value and caused immediate drop-off.</p>
            </div>
            <div class="ui-compare-img-wrap">
              <img src="../assets/intro-page.png" alt="Before: intro page" class="ui-compare-img"/>
            </div>
          </div>
          <div class="ui-compare-divider"><div class="ui-compare-arrow">&#8594;</div></div>
          <div class="ui-compare-item">
            <div class="ui-compare-label good">
              <span class="red-label" style="color:#1D9E75">Replaced with</span>
              <p class="ui-compare-title">Prove identity entry</p>
              <p class="ui-compare-desc">Phone number + last 4 SSN pre-fills the entire form for ~70% of applicants. Users who bypass this screen get a blank form to fill manually.</p>
            </div>
            <div class="ui-compare-img-wrap">
              <img src="../assets/prove-entry.png" alt="After: Prove entry screen" class="ui-compare-img"/>
            </div>
          </div>
        </div>

        <div class="ui-compare">
          <div class="ui-compare-item">
            <div class="ui-compare-label bad">
              <span class="red-label">Before</span>
              <p class="ui-compare-title">Accordion edit pattern</p>
              <p class="ui-compare-desc">Each section required clicking in, editing, then saving: 3+ clicks per field. Caused significant drop-off mid-flow.</p>
            </div>
            <div class="ui-compare-img-wrap">
              <img src="../assets/accordion.png" alt="Before: accordion" class="ui-compare-img"/>
            </div>
          </div>
          <div class="ui-compare-divider"><div class="ui-compare-arrow">&#8594;</div></div>
          <div class="ui-compare-item">
            <div class="ui-compare-label good">
              <span class="red-label" style="color:#1D9E75">After</span>
              <p class="ui-compare-title">Standard form layout</p>
              <p class="ui-compare-desc">Fields editable directly inline. Single continuous form, no save buttons per section.</p>
            </div>
            <div class="ui-compare-img-wrap">
              <img src="../assets/form-filled.png" alt="After: standard form" class="ui-compare-img"/>
            </div>
          </div>
        </div>

        
        <div class="ui-compare" style="margin-top:2rem">
          <div class="ui-compare-item">
            <div class="ui-compare-label bad">
              <span class="red-label">Before</span>
              <p class="ui-compare-title">Manual review holding screen</p>
              <p class="ui-compare-desc">After submitting, users hit a waiting screen for up to 3 business days. Most never came back. Moving to instant Approve/Deny decisioning eliminated this entirely.</p>
            </div>
            <div class="ui-compare-img-wrap">
              <img src="../assets/manual-review.png" alt="Before: manual review screen" class="ui-compare-img"/>
            </div>
          </div>
          <div class="ui-compare-divider"><div class="ui-compare-arrow">&#8594;</div></div>
          <div class="ui-compare-item">
            <div class="ui-compare-label good">
              <span class="red-label" style="color:#1D9E75">After</span>
              <p class="ui-compare-title">Embedded DocuSign signature card</p>
              <p class="ui-compare-desc">Signature card is now the immediate next step after approval, embedded directly in the flow via DocuSign. No follow-up email, no separate process, no lost paperwork.</p>
            </div>
            <div class="ui-compare-img-wrap">
              <img src="../assets/docusign.png" alt="After: embedded DocuSign signature card" class="ui-compare-img"/>
            </div>
          </div>
        </div>
        <h3 class="sub-heading">Results</h3>
        <div class="results-grid">
          <div class="result-stat"><span class="stat-value">7 min</span><span class="stat-label">Average time to submit application</span><span class="stat-delta">&darr; 70% from 30+ minutes</span></div>
          <div class="result-stat"><span class="stat-value">4 hrs</span><span class="stat-label">Average time to complete entire flow</span><span class="stat-delta">&darr; from 48+ hours</span></div>
          <div class="result-stat"><span class="stat-value">&lt;1%</span><span class="stat-label">Accounts closed for incomplete signature card</span><span class="stat-delta">&darr; from ~20%</span></div>
        </div>
        <p class="results-note">All three goals were met. The experience now converts at a rate that reflects the quality of the product, not the friction in the process.</p>
      </article>
  </UseCaseGate>
</template>

<script setup>
import UseCaseGate from '../components/UseCaseGate.vue'
</script>

<style scoped>
.dao-desktop-wrap{display:block;overflow-x:auto}
.dao-mobile-wrap{display:none;overflow-x:auto}
@media(max-width:700px){.dao-desktop-wrap{display:none}.dao-mobile-wrap{display:block}}
</style>
