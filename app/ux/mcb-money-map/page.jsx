"use client";

import { useState } from "react";
import Link from "next/link";

export default function Page() {
  const [isNavCollapsed, setIsNavCollapsed] = useState(false);
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  const sections = [
    { id: "problem", label: "Problem" },
    { id: "goals", label: "Goals" },
    { id: "research", label: "Research" },
    { id: "persona", label: "Persona" },
    { id: "strategy", label: "Strategy" },
    { id: "flow", label: "IA + Flow" },
    { id: "process", label: "Design Process" },
    { id: "screens", label: "Final Screens" },
    { id: "testing", label: "Testing" },
    { id: "results", label: "Results" },
    { id: "reflection", label: "Reflection" },
    { id: "contact", label: "Contact" },
    { id: "process", label: "Design Process" },
{ id: "ui", label: "Final UI Screens" },
{ id: "campaign", label: "Campaign System" },

  ];

  const stats = [
    "175 survey responses",
    "10 usability testers",
    "30 sign-ups",
    "Deliverables: App + campaign system",
  ];

  return (
<main id="top" className="min-h-screen bg-white text-black">

      {/* ================= HEADER ================= */}
      <header className="sticky top-0 z-50 bg-white border-b border-black/10">
        <div className="mx-auto max-w-6xl px-6 h-[50px] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="h-2.5 w-2.5 rounded-full bg-black" />
            <h1 className="text-lg font-semibold">MCB Money Map</h1>
          </div>

          <Link href="/ux" className="text-sm font-medium hover:underline">
            Back to UX
          </Link>
        </div>
      </header>

      <div className="mx-auto max-w-6xl px-6">
        {/* ================= HERO ================= */}
        <section className="pt-14 pb-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-7">
              <p className="text-xs tracking-widest uppercase text-black/60">
                UX/UI Case Study
              </p>

              <h2 className="mt-4 text-4xl sm:text-5xl font-bold leading-tight">
                MCB Money Map: Financial Literacy Made Visual for Pakistani Youth
              </h2>

              <p className="mt-4 text-lg text-black/70 max-w-xl">
                A research-led UX/UI project turning budgeting, saving, and investing into a guided
                journey for beginners aged 16–25.
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {stats.map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1.5 rounded-full border border-black/15 bg-white text-xs font-medium"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <div className="mt-7 flex gap-4 flex-wrap">
                <a
                  href="#screens"
                  className="px-5 py-3 bg-black text-white text-sm font-semibold rounded-md hover:bg-black/90 transition"
                >
                  View full prototype
                </a>

                <a
                  href="#results"
                  className="px-5 py-3 border border-black/15 text-sm font-semibold rounded-md hover:bg-black hover:text-white transition"
                >
                  Jump to results
                </a>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="w-full h-[260px] rounded-xl border border-black/10 bg-black/5 flex items-center justify-center text-black/50 text-sm">
                Prototype Preview
              </div>
            </div>
          </div>
        </section>

        {/* ================= PROJECT SNAPSHOT ================= */}
        <section className="py-14 border-t border-black/10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-6 text-sm">
              <SnapshotItem label="Role">End-to-end UX/UI + Brand + Research</SnapshotItem>
              <SnapshotItem label="Timeline">October 2025</SnapshotItem>
              <SnapshotItem label="Tools">Figma, Illustrator, Photoshop, Google Forms</SnapshotItem>
              <SnapshotItem label="Audience">Pakistani youth (16–25), bilingual, digital-first</SnapshotItem>
            </div>

            <div>
              <p className="text-lg leading-relaxed text-black/80 max-w-md">
                How might we transform complex financial concepts into a visual, beginner-friendly
                system that builds confidence among young first-time earners?
              </p>

              <a
                href="#research"
                className="mt-6 inline-block text-sm font-medium underline"
              >
                Skip to research insights
              </a>
            </div>
          </div>
        </section>

       {/* ================= BODY GRID ================= */}
<section className="pb-24">
  <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
    
    {/* ===== STICKY NAV ===== */}
    <aside
      className={`hidden lg:block transition-all duration-300 ${
        isNavCollapsed ? "lg:col-span-1" : "lg:col-span-3"
      }`}
    >
      <div className="sticky top-[70px] self-start">
        <div className="rounded-xl border border-black/10 bg-white overflow-hidden">
          <div className="flex items-center justify-between px-4 py-4 border-b border-black/5">
            <p className="text-sm font-semibold">
              {isNavCollapsed ? "Nav" : "Case Study Navigation"}
            </p>

            <button
              type="button"
              onClick={() => setIsNavCollapsed((v) => !v)}
              className="text-xs border border-black/10 px-2 py-1 rounded hover:bg-black hover:text-white transition"
            >
              {isNavCollapsed ? "»" : "«"}
            </button>
          </div>

          <nav className="p-3">
            <ul className="space-y-1">
              {sections.map((s) => (
                <li key={s.id}>
                  <a
                    href={`#${s.id}`}
                    className="block px-3 py-2 rounded-md text-sm hover:bg-black hover:text-white transition"
                  >
                    {isNavCollapsed ? "•" : s.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </aside>

    {/* ===== CONTENT COLUMN ===== */}
    <div className={`${isNavCollapsed ? "lg:col-span-11" : "lg:col-span-9"}`}>
      
      {/* ================= PROBLEM ================= */}
      <section id="problem" className="scroll-mt-24 space-y-6 max-w-2xl">
        <h3 className="text-3xl font-bold">
          The gap was not information. It was interpretation.
        </h3>

        {/* keep the rest of your problem text here */}
      </section>

              {/* ================= GOALS + SUCCESS ================= */}
              <section id="goals" className="mt-24 scroll-mt-24 space-y-16">
                <div className="max-w-2xl">
                  <h3 className="text-3xl font-bold">Goals & Success Metrics</h3>
                  <p className="mt-3 text-black/70">
                    The goals defined the direction. The metrics defined whether the direction
                    worked.
                  </p>
                </div>

                {/* GOALS */}
                <div className="space-y-8">
                  <p className="text-sm font-semibold uppercase tracking-wide text-black/50">
                    The goals were:
                  </p>

                  <div className="grid md:grid-cols-3 gap-8">
                    <GoalCard
                      title="Reduce overwhelm"
                      text="Make financial concepts feel structured and beginner-friendly instead of technical and intimidating."
                    />
                    <GoalCard
                      title="Increase trust"
                      text="Balance institutional credibility with a visual system that feels modern and youth-oriented."
                    />
                    <GoalCard
                      title="Drive action"
                      text="Move users from passive learning into confident next steps such as saving or investing."
                    />
                  </div>
                </div>

                {/* SUCCESS METRICS */}
                <div className="space-y-8">
                  <p className="text-sm font-semibold uppercase tracking-wide text-black/50">
                    Success metrics:
                  </p>

                  <div className="border border-black/10 rounded-xl p-8 bg-white">
                    <div className="grid sm:grid-cols-3 gap-6 text-sm">
                      <MetricItem
                        title="Clarity feedback improved"
                        text="Users reported greater understanding of budgeting and saving flows."
                      />
                      <MetricItem
                        title="Prototype engagement positive"
                        text="Testers navigated through multiple sections without friction."
                      />
                      <MetricItem
                        title="30 sign-ups collected"
                        text="Early interest validated behavioral intent beyond curiosity."
                      />
                    </div>
                  </div>
                </div>
              </section>

              {/* Placeholder so your nav links don’t dead-end */}
              <div id="research" className="mt-24 scroll-mt-24">
                <h3 className="text-3xl font-bold">Research</h3>
                <p className="mt-3 text-black/70">Next section goes here.</p>
                {/* ================= RESEARCH ================= */}
<section id="research" className="mt-24 scroll-mt-24 space-y-16">

{/* SECTION HEADING */}
<div className="max-w-2xl">
  <h3 className="text-3xl font-bold">
    Research
  </h3>
  <p className="mt-3 text-black/70">
    Understanding existing financial education gaps required both landscape analysis and direct user insight.
  </p>
</div>

{/* ================= E1: SECONDARY RESEARCH ================= */}
<div className="space-y-6">
  <h4 className="text-xl font-semibold">
    What existed and why it was not working
  </h4>

  <ul className="space-y-3 text-black/80 list-disc pl-5 max-w-2xl">
    <li>Financial literacy initiatives were heavily school-based and disconnected from real-world behavior.</li>
    <li>Digital tools were built for financially experienced adults rather than beginners.</li>
    <li>Most platforms prioritized information density over comprehension.</li>
  </ul>

  <p className="text-black/60 italic">
    Financial literacy campaigns were speaking — but not connecting.
  </p>
</div>

{/* ================= E2: PRIMARY RESEARCH ================= */}
<div className="space-y-8">
  <h4 className="text-xl font-semibold">
    175 responses: motivation was high, confidence was not
  </h4>

  {/* Insight Cards */}
  <div className="grid md:grid-cols-3 gap-8">

    <div className="border border-black/10 rounded-xl p-6 bg-white">
      <h5 className="font-semibold text-base">Low confidence</h5>
      <p className="mt-2 text-sm text-black/70">
        Respondents understood budgeting basics but felt unsure about investing or long-term planning.
      </p>
    </div>

    <div className="border border-black/10 rounded-xl p-6 bg-white">
      <h5 className="font-semibold text-base">Barriers</h5>
      <p className="mt-2 text-sm text-black/70">
        Complicated terminology, lack of trusted guidance, and fear of making mistakes prevented action.
      </p>
    </div>

    <div className="border border-black/10 rounded-xl p-6 bg-white">
      <h5 className="font-semibold text-base">Desire</h5>
      <p className="mt-2 text-sm text-black/70">
        Users expressed strong interest in learning if the system felt simple, visual, and relevant to their daily life.
      </p>
    </div>

  </div>

  {/* Microcopy line */}
  <div className="border border-black/10 rounded-xl p-6 bg-black/5">
    <p className="text-lg font-medium">
      They were not avoiding finance. Finance was avoiding them.
    </p>
  </div>
</div>

</section>
{/* ================= PERSONA ================= */}
<section id="persona" className="mt-24 scroll-mt-24 space-y-10">

  {/* Heading */}
  <div className="max-w-2xl">
    <h3 className="text-3xl font-bold">Persona</h3>
    <p className="mt-3 text-black/70">
      A single persona emerged repeatedly: motivated, digital-first, but blocked by jargon and uncertainty.
    </p>
  </div>

  {/* Persona Card */}
  <div className="border border-black/10 rounded-2xl bg-white p-8">
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">

      {/* Persona Text */}
      <div className="lg:col-span-7 space-y-6">
        <div>
          <p className="text-xs uppercase tracking-widest text-black/50">Name</p>
          <h4 className="mt-1 text-2xl font-semibold">Ali</h4>
          <p className="mt-1 text-sm text-black/70">
            19–23, student/early earner, learning primarily through mobile.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6 text-sm">
          <div>
            <p className="text-xs uppercase tracking-wide text-black/50">Behaviors</p>
            <ul className="mt-2 space-y-2 text-black/80 list-disc pl-5">
              <li>Uses Instagram/YouTube for learning</li>
              <li>Prefers Roman Urdu + simple English</li>
              <li>Skims first, reads only if it feels easy</li>
            </ul>
          </div>

          <div>
            <p className="text-xs uppercase tracking-wide text-black/50">Needs</p>
            <ul className="mt-2 space-y-2 text-black/80 list-disc pl-5">
              <li>Beginner-first guidance</li>
              <li>Clear steps with visual progress</li>
              <li>Trust signals without feeling “corporate”</li>
            </ul>
          </div>

          <div>
            <p className="text-xs uppercase tracking-wide text-black/50">Pain points</p>
            <ul className="mt-2 space-y-2 text-black/80 list-disc pl-5">
              <li>Finance content feels jargon-heavy</li>
              <li>Does not know what to do first</li>
              <li>Fear of making the “wrong” choice</li>
            </ul>
          </div>

          <div>
            <p className="text-xs uppercase tracking-wide text-black/50">Motivation</p>
            <ul className="mt-2 space-y-2 text-black/80 list-disc pl-5">
              <li>Wants to start early</li>
              <li>Wants control and independence</li>
              <li>Wants a system that feels doable</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Persona Illustration Placeholder */}
      <div className="lg:col-span-5">
        <div className="w-full h-[260px] rounded-2xl border border-black/10 bg-black/5 flex items-center justify-center text-sm text-black/50">
          [PLACE IMAGE HERE: Persona card illustration]
        </div>

        {/* Microcopy line */}
        <div className="mt-6 border border-black/10 rounded-xl p-6 bg-black/5">
          <p className="text-lg font-medium">
            Ali does not need more information. He needs a map.
          </p>
        </div>
      </div>

    </div>
  </div>
</section>
{/* ================= STRATEGY ================= */}
<section id="strategy" className="mt-24 scroll-mt-24 space-y-12">

  {/* Heading */}
  <div className="max-w-2xl">
    <h3 className="text-3xl font-bold">Strategy</h3>
    <p className="mt-3 text-black/70">
      The solution was not more content. It was a clearer structure, friendlier language, and a journey users could follow.
    </p>
  </div>

  {/* 3 Strategy Blocks */}
  <div className="grid md:grid-cols-3 gap-8">
    <div className="border border-black/10 rounded-2xl p-7 bg-white space-y-3">
      <p className="text-xs uppercase tracking-widest text-black/50">01</p>
      <h4 className="text-lg font-semibold">Map metaphor</h4>
      <p className="text-sm text-black/70">
        Reframe finance as a journey with “stops” so users always know where they are and what comes next.
      </p>
    </div>

    <div className="border border-black/10 rounded-2xl p-7 bg-white space-y-3">
      <p className="text-xs uppercase tracking-widest text-black/50">02</p>
      <h4 className="text-lg font-semibold">Bilingual tone</h4>
      <p className="text-sm text-black/70">
        Use Roman Urdu + simple English to reduce intimidation while keeping credibility intact.
      </p>
    </div>

    <div className="border border-black/10 rounded-2xl p-7 bg-white space-y-3">
      <p className="text-xs uppercase tracking-widest text-black/50">03</p>
      <h4 className="text-lg font-semibold">Bite-sized learning</h4>
      <p className="text-sm text-black/70">
        Break complex concepts into short modules with strong hierarchy, visual cues, and progress feedback.
      </p>
    </div>
  </div>

  {/* Positioning Box */}
  <div className="border border-black/10 rounded-2xl bg-black/5 p-8">
    <p className="text-xs uppercase tracking-widest text-black/50">Positioning</p>
    <p className="mt-3 text-2xl font-semibold">
      Tagline: “See your money differently.”
    </p>
    <p className="mt-3 text-black/70 max-w-2xl">
      A youth-first system that turns finance into a guided journey. Clear steps, relatable language, and visual progress.
    </p>

    {/* Mid-page CTA */}
    <div className="mt-6">
      <a
        href="#screens"
        className="inline-flex items-center justify-center px-6 py-3 rounded-md bg-black text-white text-sm font-semibold hover:bg-black/90 transition no-underline"
      >
        Jump to UI screens
      </a>
    </div>
  </div>

</section>
{/* ================= USER FLOW ================= */}
<section id="flow" className="mt-24 scroll-mt-24 space-y-14">

  {/* Heading */}
  <div className="max-w-2xl">
    <h3 className="text-3xl font-bold">User Flow</h3>
    <p className="mt-3 text-black/70">
      The experience was structured as a four-phase journey —
      from awareness to action, with a built-in feedback loop.
    </p>
  </div>

  {/* FLOW DIAGRAM */}
  <div className="relative border border-black/10 rounded-2xl bg-white p-10 overflow-x-auto">

    <div className="min-w-[900px] relative">

      {/* Horizontal Line */}
      <div className="absolute top-[60px] left-0 right-0 h-[2px] bg-black/20" />

      <div className="grid grid-cols-4 gap-16 relative">

        {/* PHASE 1 */}
        <div className="relative text-center">
          <div className="w-16 h-16 mx-auto rounded-full border-2 border-black flex items-center justify-center text-sm font-semibold bg-white">
            1
          </div>

          <h4 className="mt-6 font-semibold">
            Attention
          </h4>
          <p className="text-xs text-black/60 mt-1">
            Campaign
          </p>

          <p className="mt-4 text-sm text-black/70">
            Posters, social hooks, QR codes drive awareness and spark curiosity.
          </p>
        </div>

        {/* PHASE 2 */}
        <div className="relative text-center">
          <div className="w-16 h-16 mx-auto rounded-full border-2 border-black flex items-center justify-center text-sm font-semibold bg-white">
            2
          </div>

          <h4 className="mt-6 font-semibold">
            Orientation
          </h4>
          <p className="text-xs text-black/60 mt-1">
            Landing + Choose Path
          </p>

          <p className="mt-4 text-sm text-black/70">
            Users understand what the app is and select Savings or Investing.
          </p>
        </div>

        {/* PHASE 3 */}
        <div className="relative text-center">
          <div className="w-16 h-16 mx-auto rounded-full border-2 border-black flex items-center justify-center text-sm font-semibold bg-white">
            3
          </div>

          <h4 className="mt-6 font-semibold">
            Education
          </h4>
          <p className="text-xs text-black/60 mt-1">
            Tiered Learning
          </p>

          <p className="mt-4 text-sm text-black/70">
            Bite-sized modules build knowledge progressively with visual feedback.
          </p>
        </div>

        {/* PHASE 4 */}
        <div className="relative text-center">
          <div className="w-16 h-16 mx-auto rounded-full border-2 border-black flex items-center justify-center text-sm font-semibold bg-white">
            4
          </div>

          <h4 className="mt-6 font-semibold">
            Activation
          </h4>
          <p className="text-xs text-black/60 mt-1">
            Sign Up + Share Loop
          </p>

          <p className="mt-4 text-sm text-black/70">
            Users commit, sign up, and share — feeding new users back into awareness.
          </p>
        </div>

      </div>

      {/* Direction Arrows */}
      <div className="absolute top-[60px] left-[22%] text-black text-xl">→</div>
      <div className="absolute top-[60px] left-[47%] text-black text-xl">→</div>
      <div className="absolute top-[60px] left-[72%] text-black text-xl">→</div>

      {/* Loop Arrow */}
      <svg
        className="absolute -bottom-6 right-6"
        width="160"
        height="120"
        viewBox="0 0 160 120"
        fill="none"
      >
        <path
          d="M150 60 C150 20, 20 20, 20 60"
          stroke="black"
          strokeWidth="2"
        />
        <polygon points="20,60 28,55 28,65" fill="black" />
      </svg>

    </div>
  </div>

</section>
{/* ================= DESIGN PROCESS ================= */}
<section id="process" className="mt-24 scroll-mt-24 space-y-14">

  {/* Heading */}
  <div className="max-w-2xl">
    <h3 className="text-3xl font-bold">From sketches to a tested prototype</h3>
    <p className="mt-3 text-black/70">
      I moved quickly from exploration to structure, then validated decisions through usability testing.
    </p>
  </div>

  {/* 3-step timeline */}
  <div className="space-y-8">

    {/* Step 1 */}
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start border border-black/10 rounded-2xl bg-white p-8">
      <div className="lg:col-span-4">
        <p className="text-xs uppercase tracking-widest text-black/50">Step 1</p>
        <h4 className="mt-2 text-xl font-semibold">Sketches</h4>
        <p className="mt-2 text-sm text-black/70">
          Fast exploration of layout, hierarchy, and what the “journey” metaphor could look like on mobile.
        </p>
      </div>

      <div className="lg:col-span-8">
        <div className="w-full h-[260px] rounded-2xl border border-black/10 bg-black/5 flex items-center justify-center text-sm text-black/50">
          [PLACE IMAGE HERE: Sketches]
        </div>
      </div>
    </div>

    {/* Step 2 */}
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start border border-black/10 rounded-2xl bg-white p-8">
      <div className="lg:col-span-4">
        <p className="text-xs uppercase tracking-widest text-black/50">Step 2</p>
        <h4 className="mt-2 text-xl font-semibold">Wireframes</h4>
        <p className="mt-2 text-sm text-black/70">
          Defined navigation, module flow, and key screens so each step answers: what is this, why it matters, what next.
        </p>
      </div>

      <div className="lg:col-span-8">
        <div className="w-full h-[260px] rounded-2xl border border-black/10 bg-black/5 flex items-center justify-center text-sm text-black/50">
          [PLACE IMAGE HERE: Wireframes]
        </div>
      </div>
    </div>

    {/* Step 3 */}
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start border border-black/10 rounded-2xl bg-white p-8">
      <div className="lg:col-span-4">
        <p className="text-xs uppercase tracking-widest text-black/50">Step 3</p>
        <h4 className="mt-2 text-xl font-semibold">High-fidelity prototype</h4>
        <p className="mt-2 text-sm text-black/70">
          Applied the visual system, refined typography and hierarchy, then iterated based on usability feedback.
        </p>
      </div>

      <div className="lg:col-span-8">
        <div className="w-full h-[260px] rounded-2xl border border-black/10 bg-black/5 flex items-center justify-center text-sm text-black/50">
          [PLACE IMAGE HERE: High-fidelity screens]
        </div>
      </div>
    </div>

  </div>

  {/* CTA */}
  <div className="pt-2">
    <a
      href="[PLACE LINK HERE: Figma prototype]"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center justify-center px-6 py-3 rounded-md bg-black text-white text-sm font-semibold hover:bg-black/90 transition no-underline"
    >
      View prototype
    </a>
    <p className="mt-2 text-xs text-black/60">Opens in a new tab.</p>
  </div>

</section>
{/* ================= FINAL UI SCREENS ================= */}
<section id="ui" className="mt-24 scroll-mt-24 space-y-14">

  {/* Heading */}
  <div className="max-w-2xl">
    <h3 className="text-3xl font-bold">Final UI Screens</h3>
    <p className="mt-3 text-black/70">
      Screens are grouped by user intent so the flow stays understandable for first-time learners.
    </p>
  </div>

  {/* Group 1 */}
  <UIScreenGroup
    title="Onboarding / Hook"
    microcopy="Hook users with familiarity, not fear."
  />

  {/* Group 2 */}
  <UIScreenGroup
    title="Savings Stop"
    microcopy="Teach saving as habit, not theory."
  />

  {/* Group 3 */}
  <UIScreenGroup
    title="Investment Chowk"
    microcopy="Introduce investing without intimidation."
  />

  {/* Group 4 */}
  <UIScreenGroup
    title="Resources / Tools"
    microcopy="Give practical tools that feel immediately usable."
  />

  {/* Group 5 */}
  <UIScreenGroup
    title="Progress / Completion"
    microcopy="Make progress visible so confidence builds naturally."
  />

</section>
{/* ================= CAMPAIGN SYSTEM ================= */}
<section id="campaign" className="mt-24 scroll-mt-24 space-y-14">

  {/* Heading */}
  <div className="max-w-2xl">
    <h3 className="text-3xl font-bold">Multi-touchpoint campaign system</h3>
    <p className="mt-3 text-black/70">
      The goal was continuity: the same idea should work on a poster, a brochure, a standee, and a scroll.
    </p>
  </div>

  <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

    {/* Posters */}
    <div className="border border-black/10 rounded-2xl bg-white p-8 space-y-4">
      <h4 className="text-xl font-semibold">Posters</h4>
      <p className="text-sm text-black/70">
        A relatable hook with QR-to-action for fast conversion from attention to entry.
      </p>
      <div className="h-[260px] rounded-2xl border border-black/10 bg-black/5 flex items-center justify-center text-sm text-black/50">
        [PLACE IMAGE HERE: Posters]
      </div>
    </div>

    {/* Brochure */}
    <div className="border border-black/10 rounded-2xl bg-white p-8 space-y-4">
      <h4 className="text-xl font-semibold">Brochure</h4>
      <p className="text-sm text-black/70">
        Metaphor-led storytelling that keeps the system understandable even offline.
      </p>
      <div className="h-[260px] rounded-2xl border border-black/10 bg-black/5 flex items-center justify-center text-sm text-black/50">
        [PLACE IMAGE HERE: Brochure]
      </div>
    </div>

    {/* Standee */}
    <div className="border border-black/10 rounded-2xl bg-white p-8 space-y-4">
      <h4 className="text-xl font-semibold">Standee</h4>
      <p className="text-sm text-black/70">
        A high-visibility “entry point” for events and public panels.
      </p>
      <div className="h-[260px] rounded-2xl border border-black/10 bg-black/5 flex items-center justify-center text-sm text-black/50">
        [PLACE IMAGE HERE: Standee]
      </div>
    </div>

    {/* Social */}
    <div className="border border-black/10 rounded-2xl bg-white p-8 space-y-4">
      <h4 className="text-xl font-semibold">Social</h4>
      <p className="text-sm text-black/70">
        Bite-sized lessons designed for scroll behavior and easy sharing.
      </p>
      <div className="h-[260px] rounded-2xl border border-black/10 bg-black/5 flex items-center justify-center text-sm text-black/50">
        [PLACE IMAGE HERE: Social kit]
      </div>
    </div>

  </div>

</section>
{/* ================= TESTING & ITERATION ================= */}
<section id="testing" className="mt-24 scroll-mt-24 space-y-12">
  <div className="max-w-2xl">
    <h3 className="text-3xl font-bold">Tested with users, refined for clarity</h3>
    <p className="mt-3 text-black/70">
      Design decisions were validated through real feedback, then iterated until the flow felt obvious to beginners.
    </p>
  </div>

  <div className="space-y-6">
    <testrow
      issue="Text hierarchy was competing with visual elements."
      change="Rebalanced typography, tightened spacing, and clarified section headings."
      outcome="Users scanned faster and understood where to tap next without hesitation."
    />
    <testrow
      issue="Some concepts felt too “financial” too early in the flow."
      change="Introduced concepts through everyday language first, then layered terms gradually."
      outcome="Lower confusion, higher confidence, and fewer clarification questions during testing."
    />
    <testrow
      issue="Progress was not obvious, so learning felt endless."
      change="Added visible checkpoints and clearer “next step” prompts after each module."
      outcome="Users described the experience as guided and motivating, not overwhelming."
    />
  </div>
</section>

{/* ================= RESULTS ================= */}
<section id="results" className="mt-24 scroll-mt-24 space-y-12">
  <div className="max-w-2xl">
    <h3 className="text-3xl font-bold">Early validation and real interest</h3>
    <p className="mt-3 text-black/70">
      The goal was not just “nice screens”. It was a system that made finance feel learnable, and worth continuing.
    </p>
  </div>

  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
    <resultcard
      title="30 sign-ups at public panel"
      text="Interest moved beyond curiosity into a concrete action signal."
    />
    <resultcard
      title="Positive clarity feedback"
      text="Beginner users reported stronger understanding of budgeting and saving pathways."
    />
    <resultcard
      title="Relatability via bilingual tone"
      text="Language choice reduced intimidation and made the learning feel “for me.”"
    />
  </div>

  {/* CTA row */}
  <div className="pt-4 flex flex-wrap items-center gap-4">
    <a
      href="[PLACE LINK HERE: email]"
      className="inline-flex items-center justify-center px-6 py-3 rounded-md bg-black text-white text-sm font-semibold hover:bg-black/90 transition no-underline"
    >
      Contact me
    </a>

    <a
      href="[PLACE LINK HERE: Case study PDF]"
      className="inline-flex items-center justify-center px-6 py-3 rounded-md border border-black/15 bg-white text-black text-sm font-semibold hover:bg-black hover:text-white transition no-underline"
    >
      Download case study PDF
    </a>
  </div>
</section>

{/* ================= CONTACT / FOOTER CTA ================= */}
<section id="contact" className="mt-24 scroll-mt-24 pb-24 space-y-10">
  <div className="border border-black/10 rounded-2xl bg-white p-10">
    <div className="max-w-2xl">
      <h3 className="text-3xl font-bold">
        Want a designer who can research, simplify, and ship?
      </h3>
      <p className="mt-3 text-black/70">
        I enjoy building systems that make complex topics feel human, clear, and actionable.
      </p>
    </div>

    <div className="mt-8 flex flex-wrap gap-4">
      <a
        href="[PLACE LINK HERE: email]"
        className="inline-flex items-center justify-center px-6 py-3 rounded-md bg-black text-white text-sm font-semibold hover:bg-black/90 transition no-underline"
      >
        Email me
      </a>

      <a
        href="[PLACE LINK HERE: LinkedIn]"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center px-6 py-3 rounded-md border border-black/15 bg-white text-black text-sm font-semibold hover:bg-black hover:text-white transition no-underline"
      >
        LinkedIn
      </a>

      <a
        href="[PLACE LINK HERE: portfolio homepage]"
        className="inline-flex items-center justify-center px-6 py-3 rounded-md border border-black/15 bg-white text-black text-sm font-semibold hover:bg-black hover:text-white transition no-underline"
      >
        View more projects
      </a>
    </div>

    <div className="mt-8">
      <a
        href="#top"
        className="text-sm font-medium underline underline-offset-4 hover:no-underline"
      >
        Back to top
      </a>
    </div>
  </div>
</section>


              </div>
            </div>
          </div>
        </section>
      </div>

      {/* MOBILE NAV (optional) */}
      <div className="lg:hidden">
        <button
          type="button"
          onClick={() => setIsMobileNavOpen(true)}
          className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 px-6 py-3 bg-black text-white rounded-full shadow-lg"
        >
          Open Sections
        </button>

        {isMobileNavOpen && (
          <div className="fixed inset-0 z-50" role="dialog" aria-modal="true">
            <div
              className="absolute inset-0 bg-black/40"
              onClick={() => setIsMobileNavOpen(false)}
            />
            <div className="absolute left-0 top-0 h-full w-[85%] max-w-[400px] bg-white p-5 shadow-xl">
              <div className="flex items-center justify-between pb-4 border-b border-black/10">
                <p className="font-semibold">Case Study Navigation</p>
                <button
                  type="button"
                  onClick={() => setIsMobileNavOpen(false)}
                  className="text-sm border border-black/20 px-3 py-1 rounded hover:bg-black hover:text-white transition"
                >
                  Close
                </button>
              </div>

              <nav className="mt-4">
                <ul className="space-y-2">
                  {sections.map((s) => (
                    <li key={s.id}>
                      <a
                        href={`#${s.id}`}
                        className="block py-2 text-sm hover:underline"
                        onClick={() => setIsMobileNavOpen(false)}
                      >
                        {s.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>

              <p className="mt-5 text-xs text-black/60">
                Tap a section to jump. Drawer closes automatically.
              </p>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}

/* ================= COMPONENTS ================= */

function SnapshotItem({ label, children }) {
  return (
    <div>
      <p className="text-black/50 uppercase tracking-wide text-xs">{label}</p>
      <p className="mt-1 font-medium">{children}</p>
    </div>
  );
}

function GoalCard({ title, text }) {
  return (
    <div className="border border-black/10 rounded-xl p-6 bg-white">
      <h4 className="text-lg font-semibold">{title}</h4>
      <p className="mt-2 text-sm text-black/70">{text}</p>
    </div>
  );
}

function MetricItem({ title, text }) {
  return (
    <div>
      <p className="font-semibold">{title}</p>
      <p className="mt-2 text-black/70">{text}</p>
    </div>
  );
}
function UIScreenGroup({ title, microcopy }) {
  return (
    <div className="space-y-6">
      <div>
        <h4 className="text-xl font-semibold">{title}</h4>
        <p className="mt-2 text-sm text-black/70">{microcopy}</p>
      </div>

      {/* 3–6 image grid placeholders */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <ImagePlaceholder label="[PLACE IMAGE HERE: Screen 1]" />
        <ImagePlaceholder label="[PLACE IMAGE HERE: Screen 2]" />
        <ImagePlaceholder label="[PLACE IMAGE HERE: Screen 3]" />
        <ImagePlaceholder label="[PLACE IMAGE HERE: Screen 4]" />
        <ImagePlaceholder label="[PLACE IMAGE HERE: Screen 5]" />
        <ImagePlaceholder label="[PLACE IMAGE HERE: Screen 6]" />
      </div>
    </div>
  );
}

function ImagePlaceholder({ label }) {
  return (
    <div className="w-full h-[220px] rounded-2xl border border-black/10 bg-black/5 flex items-center justify-center text-sm text-black/50">
      {label}
    </div>
  );
}
