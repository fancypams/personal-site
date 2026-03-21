<template>
  <main class="use-cases">
    <div class="container">

      <!-- Password gate -->
      <div v-if="!unlocked" class="gate-wrap">
        <div class="gate">
          <i class="fa-solid fa-lock gate-icon"></i>
          <h2 class="gate-title">Use Cases</h2>
          <p class="gate-sub">This section contains detailed project case studies. Enter the password to continue.</p>
          <div class="gate-form">
            <input
              v-model="password"
              type="password"
              placeholder="Password"
              class="gate-input"
              @keyup.enter="attempt"
            />
            <button class="gate-btn" @click="attempt">
              Enter <i class="fa-solid fa-arrow-right fa-xs"></i>
            </button>
          </div>
          <p v-if="error" class="gate-error">
            <i class="fa-solid fa-circle-exclamation fa-xs"></i> Incorrect password
          </p>
        </div>
      </div>

      <!-- Content (unlocked) -->
      <template v-else>
        <header class="page-header">
          <h1 class="page-title">Use Cases</h1>
          <div class="header-rule"></div>
          <p class="tagline">Detailed case studies from my product and engineering work.</p>
        </header>

        <div class="cases">

          <article class="case">
            <span class="red-label">WaFd Bank · Product Management</span>
            <h2 class="case-title">Digital Account Opening Flow</h2>
            <span class="rule"></span>

            <div class="problem-goal-grid">
              <div class="pg-block">
                <span class="block-label">Problem</span>
                <p>Average time to submit an application was <strong>8+ hours</strong>. Average time to fully onboard a new client was <strong>48+ hours</strong>. Even after funding, <strong>~20% of new digital accounts were still getting closed</strong> — clients who completed every step still lost their accounts.</p>
              </div>
              <div class="pg-block">
                <span class="block-label">Goals</span>
                <ul class="goal-list">
                  <li>Users decisioned in <strong>under 10 minutes</strong></li>
                  <li>Full account open in <strong>under 8 hours</strong></li>
                  <li>Account closures due to incomplete signature card <strong>under 2%</strong></li>
                </ul>
              </div>
            </div>

            <h3 class="sub-heading">Analysis</h3>
            <div class="analysis-grid">
              <div class="drop-card">
                <span class="drop-num">01</span>
                <p class="drop-label">First page drop-off</p>
                <p class="drop-detail">Reporting showed most users stalled on page one. It was structured to explain what to expect — but by the time users arrived, they'd already researched the product. The intro was friction, not help.</p>
              </div>
              <div class="drop-card">
                <span class="drop-num">02</span>
                <p class="drop-label">Manual entry drop-off</p>
                <p class="drop-detail">The personal details page required clicking a pencil icon, opening a section, editing, and saving. Each field was a 4-click sequence. Users abandoned before completing their information.</p>
              </div>
              <div class="drop-card">
                <span class="drop-num">03</span>
                <p class="drop-label">Post-submit gap</p>
                <p class="drop-detail">A significant gap existed between submitting an application and funding the account. Clients weren't returning in time to complete the process.</p>
              </div>
              <div class="drop-card">
                <span class="drop-num">04</span>
                <p class="drop-label">Signature card failure</p>
                <p class="drop-detail">Operations staff were manually calling clients to get signature cards signed. Accounts auto-close after 2 weeks without one. The follow-up was a separate email — getting lost in inboxes despite clients completing every other step.</p>
              </div>
            </div>

            <h3 class="sub-heading">Solutions</h3>
            <div class="solutions-list">
              <div class="solution">
                <i class="fa-solid fa-circle-check solution-icon"></i>
                <div>
                  <strong>Eliminate manual entry with Vouched</strong>
                  <p>Integrated a third-party identity service to collect a phone number and last four of SSN, then pull verified user details automatically. Eliminated the largest UX barrier in the flow.</p>
                </div>
              </div>
              <div class="solution">
                <i class="fa-solid fa-circle-check solution-icon"></i>
                <div>
                  <strong>Redesign to standard form layout</strong>
                  <p>Replaced the accordion-style edit pattern with a conventional, single-pass form. Removed unnecessary clicks and restructured the page hierarchy to match user expectations.</p>
                </div>
              </div>
              <div class="solution">
                <i class="fa-solid fa-circle-check solution-icon"></i>
                <div>
                  <strong>Move to Approve / Deny decisioning</strong>
                  <p>Eliminated manual review queue by implementing an automated approve/deny framework. Removed the waiting period entirely — users get a real-time decision and move forward immediately.</p>
                </div>
              </div>
              <div class="solution">
                <i class="fa-solid fa-circle-check solution-icon"></i>
                <div>
                  <strong>Embed signature card as an in-flow step</strong>
                  <p>Moved the signature card from a follow-up email to the very next step after account approval — directly inside the digital flow. No inbox, no delay, no lost email.</p>
                </div>
              </div>
            </div>

            <h3 class="sub-heading">Results</h3>
            <div class="results-grid">
              <div class="result-stat">
                <span class="stat-value">7.5 min</span>
                <span class="stat-label">Average time to submit application</span>
                <span class="stat-delta">↓ from 8+ hours</span>
              </div>
              <div class="result-stat">
                <span class="stat-value">4 hrs</span>
                <span class="stat-label">Average time to complete entire flow</span>
                <span class="stat-delta">↓ from 48+ hours</span>
              </div>
              <div class="result-stat">
                <span class="stat-value">&lt;1%</span>
                <span class="stat-label">Accounts closed for incomplete signature card</span>
                <span class="stat-delta">↓ from ~20%</span>
              </div>
            </div>
            <p class="results-note">All three goals were met. The digital account opening experience now converts at a rate that reflects the quality of the product — not the friction in the process.</p>
          </article>

          <article class="case">
            <span class="red-label">WaFd Bank · Product Management</span>
            <h2 class="case-title">$80–90k monthly savings in 60 days</h2>
            <span class="rule"></span>
            <div class="case-body">
              <p>Within 2 months of taking on the Product Manager role, I identified and resolved two costly issues. Our new mobile app launched just as I came on board, and the CDH began causing a $30–40k per month overage. After tracing SDK event log output, I proposed eliminating an unused data collector via hotfix.</p>
              <p>A second overage: an API was called every time the mobile app dashboard loaded to check if a user had a product — but only a small subset did. The solve was changing the API call from passive to user-triggered, reducing calls from 200k to 3,000 per week — a $50k/month saving.</p>
            </div>
            <div class="case-meta">
              <span class="label">Impact: $80–90k/month saved · Resolved client-impacting retention bug</span>
            </div>
          </article>

          <article class="case">
            <span class="red-label">O'Reilly Auto Parts · UI/UX Engineering</span>
            <h2 class="case-title">Fraud mitigation via cross-origin integration</h2>
            <span class="rule"></span>
            <div class="case-body">
              <p>Integrated a third-party fraud prevention service into the O'Reilly checkout flow at card processing. The partner system wasn't built with UX in mind. I bridged both sites using <code>window.postMessage()</code> to create a seamless, trust-building experience at the most critical conversion point.</p>
            </div>
            <div class="case-meta">
              <span class="label">Impact: Seamless checkout UX · Reduced fraud exposure</span>
            </div>
          </article>

        </div>
      </template>

    </div>
  </main>
</template>

<script setup>
import { ref } from 'vue'

// Change this to your desired password
const SITE_PASSWORD = 'portfolio2026'

const password = ref('')
const error = ref(false)
const unlocked = ref(false)

function attempt() {
  if (password.value === SITE_PASSWORD) {
    unlocked.value = true
    error.value = false
  } else {
    error.value = true
    password.value = ''
  }
}
</script>

<style scoped>
.use-cases {
  padding: 2.5rem 0 3rem;
  min-height: 60vh;
}

/* Gate */
.gate-wrap {
  display: flex;
  justify-content: center;
  padding: 5rem 0;
}

.gate {
  text-align: center;
  max-width: 420px;
  width: 100%;
}

.gate-icon {
  font-size: 2rem;
  color: var(--ink-muted);
  margin-bottom: 1.5rem;
}

.gate-title {
  font-size: 2.5rem;
  font-weight: 900;
  text-transform: uppercase;
  margin-bottom: 0.75rem;
}

.gate-sub {
  color: var(--ink-muted);
  font-size: 0.95rem;
  margin-bottom: 2rem;
}

.gate-form {
  display: flex;
  gap: 0;
  border: 1px solid var(--border);
}

.gate-input {
  flex: 1;
  background: var(--white);
  border: none;
  padding: 0.75rem 1rem;
  font-family: var(--font-mono);
  font-size: 0.8rem;
  color: var(--ink);
  outline: none;
}

.gate-btn {
  background: var(--ink);
  color: var(--cream);
  border: none;
  padding: 0.75rem 1.25rem;
  font-family: var(--font-mono);
  font-size: 0.72rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.4rem;
  transition: background 0.15s;
}

.gate-btn:hover {
  background: var(--red);
}

.gate-error {
  margin-top: 1rem;
  font-family: var(--font-mono);
  font-size: 0.7rem;
  color: var(--red);
  letter-spacing: 0.06em;
}

/* Page header */
.page-header {
  margin-bottom: 3rem;
}

.page-title {
  font-size: clamp(3rem, 8vw, 6rem);
  font-weight: 900;
  text-transform: uppercase;
  line-height: 1;
  margin-bottom: 1rem;
}

.header-rule {
  height: 1px;
  background: var(--ink);
  margin-bottom: 1.25rem;
}

.tagline {
  color: var(--ink-light);
  font-size: 1rem;
}

/* Cases */
.cases {
  display: flex;
  flex-direction: column;
  gap: 0;
}

.case {
  padding: 2.5rem 0;
  border-bottom: 1px solid var(--border-light);
}

.case:last-child {
  border-bottom: none;
}

.case-title {
  font-size: clamp(1.5rem, 3vw, 2.2rem);
  margin: 0.4rem 0 0.75rem;
}

.case-body p {
  max-width: 780px;
  margin-bottom: 1rem;
  color: var(--ink-light);
}

.case-body code {
  font-family: var(--font-mono);
  font-size: 0.85em;
  background: var(--border-light);
  padding: 0.1em 0.4em;
  border-radius: 2px;
}

.case-meta {
  margin-top: 1.5rem;
}

/* Problem / Goal grid */
.problem-goal-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  margin-bottom: 2rem;
}

.pg-block {
  padding: 1.25rem 1.5rem;
  border: 1px solid var(--border-light);
  background: var(--white);
}

.block-label {
  font-family: var(--font-mono);
  font-size: 0.68rem;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--ink-muted);
  display: block;
  margin-bottom: 0.6rem;
}

.pg-block p, .pg-block ul {
  font-size: 0.95rem;
  color: var(--ink-light);
}

.goal-list {
  padding-left: 1.1rem;
}
.goal-list li { margin-bottom: 0.4rem; }

/* Sub-headings */
.sub-heading {
  font-size: 1.3rem;
  font-weight: 700;
  margin: 2rem 0 1.25rem;
}

/* Analysis drop-off cards */
.analysis-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1px;
  background: var(--border-light);
  border: 1px solid var(--border-light);
  margin-bottom: 2rem;
}

.drop-card {
  background: var(--white);
  padding: 1.25rem 1.5rem;
}

.drop-num {
  font-family: var(--font-mono);
  font-size: 0.65rem;
  letter-spacing: 0.1em;
  color: var(--red);
  display: block;
  margin-bottom: 0.4rem;
}

.drop-label {
  font-family: var(--font-display);
  font-weight: 700;
  font-size: 1rem;
  margin-bottom: 0.5rem;
}

.drop-detail {
  font-size: 0.9rem;
  color: var(--ink-light);
  line-height: 1.5;
}

/* Solutions */
.solutions-list {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  margin-bottom: 2rem;
}

.solution {
  display: flex;
  gap: 1rem;
  align-items: flex-start;
}

.solution-icon {
  color: var(--red);
  margin-top: 0.2rem;
  flex-shrink: 0;
  font-size: 0.9rem;
}

.solution strong {
  display: block;
  font-family: var(--font-body);
  font-size: 1rem;
  margin-bottom: 0.3rem;
}

.solution p {
  font-size: 0.92rem;
  color: var(--ink-light);
  line-height: 1.55;
  margin: 0;
}

/* Results */
.results-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  margin-bottom: 1.25rem;
}

.result-stat {
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
  padding: 1.25rem 1.5rem;
  border: 1px solid var(--border-light);
  background: var(--white);
}

.stat-value {
  font-family: var(--font-display);
  font-size: 2rem;
  font-weight: 900;
  line-height: 1;
  color: var(--ink);
}

.stat-label {
  font-size: 0.82rem;
  color: var(--ink-light);
  line-height: 1.35;
}

.stat-delta {
  font-family: var(--font-mono);
  font-size: 0.65rem;
  letter-spacing: 0.08em;
  color: var(--red);
  text-transform: uppercase;
  margin-top: 0.25rem;
}

.results-note {
  font-size: 0.92rem;
  color: var(--ink-muted);
  font-style: italic;
  max-width: 680px;
  margin-top: 0.5rem;
}

@media (max-width: 768px) {
  .problem-goal-grid { grid-template-columns: 1fr; }
  .analysis-grid { grid-template-columns: 1fr; }
  .results-grid { grid-template-columns: 1fr; }
}
</style>
