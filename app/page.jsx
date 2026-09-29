import { CITY_URL } from '@/data/links';
import Faq from '@/components/Faq';
import Gallery from '@/components/Gallery';
import InviteForm from '@/components/InviteForm';
import Quotes from '@/components/Quotes';

export const metadata = { title: "Legends Investor Meetings \u2014 October 2026", description: "Four offline investor meetings in October: New York, San Francisco, London, Amsterdam." };

export default function Page() {
  return (
    <>

      <section className="m-hero">
       <div className="m-orb o1" data-speed="-.15"></div><div className="m-orb o2" data-speed=".1"></div>
       <div className="m-bigword w1" data-speed=".35" data-axis="x">NEW YORK · SAN FRANCISCO · LONDON · AMSTERDAM ·</div>
       <div className="m-bigword w2" data-speed="-.3" data-axis="x">OCTOBER 2026 · OFFLINE · OCTOBER 2026 ·</div>
       <div className="wrap m-hero-grid">
        <div>
         <span className="m-kick rv"><i></i>Offline · October 2026 · 4 cities</span>
         <h1 className="rv d1">Four cities.<br />Four evenings.<br /><span className="gold">One network.</span></h1>
         <p className="lead rv d2">Legends Investor Meetings: small, curated evenings for people who deploy capital. You are matched before you arrive, seated by thesis, and introduced only when both sides agree.</p>
         <div className="ctas rv d3"><a className="btn gold" href="#invite">Request an invite <svg className="arr" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M13 6l6 6-6 6"/></svg></a><a className="btn ghost" href="#cities">See the dates</a></div>
        </div>
        <div className="m-media rv d2">
         <div className="m-frame f1" data-speed="-.06"><video autoPlay muted loop playsInline poster="https://belegends.club/assets/site-loop-poster.jpg"><source src="https://belegends.club/assets/site-loop.webm" type="video/webm" /></video></div>
         <div className="m-frame f2" data-speed=".08"><img src="https://belegends.club/assets/block-6-2.jpg" alt="" /></div>
         <div className="m-chip c1" data-speed=".12"><b>8</b><div>New York<small>Thu, October</small></div></div>
         <div className="m-chip c2" data-speed="-.1"><b>22</b><div>London<small>Thu, October</small></div></div>
         <div className="m-chip c3" data-speed=".18"><b data-days="2026-10-08T22:30:00Z">–</b><div>days to New York<small>next meeting</small></div></div>
        </div>
       </div>
       <div className="scroll-cue"><i></i>Scroll</div>
      </section>

      <section className="sec" id="cities"><div className="wrap">
       <div className="row-head"><div className="sec-head rv"><span className="kicker">The October series</span><h2 className="h2">Every Thursday, a different city.</h2></div>
       <p className="lead rv" style={{maxWidth:"420px",fontSize:"16px"}}>Pick the city that fits your calendar. Each evening is its own guest list — you can request more than one.</p></div>
       <div className="tour"><div className="tour-line"><b></b></div><div className="cities"><a className="city rv d0 next" href={CITY_URL["new-york"]}><span className="dot-top"></span><span className="next-tag">Next</span>
      <span className="ghost-name">NYC</span>
      <div className="date"><b>08</b><span>October<br />Thu</span></div>
      <h3>New York</h3><div className="meta">Investor meeting · evening</div>
      <span className="clock"><i></i>Local time <span data-tz="America/New_York">--:--</span></span>
      <div className="go"><span>Request an invite</span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M13 6l6 6-6 6"/></svg></div></a><a className="city rv d1" href={CITY_URL["san-francisco"]}><span className="dot-top"></span>
      <span className="ghost-name">SF</span>
      <div className="date"><b>15</b><span>October<br />Thu</span></div>
      <h3>San Francisco</h3><div className="meta">Investor meeting · evening</div>
      <span className="clock"><i></i>Local time <span data-tz="America/Los_Angeles">--:--</span></span>
      <div className="go"><span>Request an invite</span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M13 6l6 6-6 6"/></svg></div></a><a className="city rv d2" href={CITY_URL["london"]}><span className="dot-top"></span>
      <span className="ghost-name">LDN</span>
      <div className="date"><b>22</b><span>October<br />Thu</span></div>
      <h3>London</h3><div className="meta">Investor meeting · evening</div>
      <span className="clock"><i></i>Local time <span data-tz="Europe/London">--:--</span></span>
      <div className="go"><span>Request an invite</span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M13 6l6 6-6 6"/></svg></div></a><a className="city rv d3" href={CITY_URL["amsterdam"]}><span className="dot-top"></span>
      <span className="ghost-name">AMS</span>
      <div className="date"><b>29</b><span>October<br />Thu</span></div>
      <h3>Amsterdam</h3><div className="meta">Investor meeting · evening</div>
      <span className="clock"><i></i>Local time <span data-tz="Europe/Amsterdam">--:--</span></span>
      <div className="go"><span>Request an invite</span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M13 6l6 6-6 6"/></svg></div></a></div></div>
      </div></section>

      <section className="sec" style={{paddingTop:"0"}}><div className="wrap why">
       <div className="sticky-head sec-head rv"><span className="kicker">Why offline</span><h2 className="h2">Matching finds the person. A table closes the gap.</h2>
       <p className="lead">Online we find who you should meet. Offline is where trust is built — the conversation that turns an introduction into a co-investment.</p></div>
       <div className="why-list">
        <div className="why-item rv"><span className="n">01</span><div><h3>Matched before you arrive</h3><p>Share your thesis when you request an invite. We line up the people worth meeting and tell you who they are on the night.</p></div></div>
        <div className="why-item rv"><span className="n">02</span><div><h3>Seated by thesis, not by chance</h3><p>Small tables of investors with overlapping interests — sector, stage, ticket or geography.</p></div></div>
        <div className="why-item rv"><span className="n">03</span><div><h3>Investors only, every guest reviewed</h3><p>No vendors, no pitch slots, no one selling. The same standard as the Legends network.</p></div></div>
        <div className="why-item rv"><span className="n">04</span><div><h3>Introductions that continue</h3><p>After the evening, the team follows up and keeps the matches going online — between cities and between meetings.</p></div></div>
       </div>
      </div></section>

      <section className="sec" id="format" style={{paddingTop:"0"}}><div className="wrap">
       <div className="sec-head rv"><span className="kicker">The evening</span><h2 className="h2">What happens at a Legends Investor Meeting.</h2></div>
       <div className="steps4">
        <div className="st4 rv"><span className="n">Arrival</span><h4>Welcome and first intros</h4><p>Drinks, name cards with your focus, and the first introductions made by the team.</p></div>
        <div className="st4 rv d1"><span className="n">Conversation</span><h4>A fireside with a guest investor</h4><p>One person, one decision everyone else only discusses — in the spirit of our InvestHacks.</p></div>
        <div className="st4 rv d2"><span className="n">Dinner</span><h4>Tables seated by thesis</h4><p>Dinner with the people you were matched with, plus time to move between tables.</p></div>
        <div className="st4 rv d3"><span className="n">After</span><h4>Closed circle and follow-ups</h4><p>A smaller late conversation, then introductions continue online the next day.</p></div>
       </div>
       <div style={{marginTop:"28px"}} className="rv"><a className="tlink" href={CITY_URL["new-york"]}>See the full schedule for New York <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M13 6l6 6-6 6"/></svg></a></div>
      </div></section>

      <section className="sec" style={{paddingTop:"0"}}><div className="wrap">
       <div className="qband rv">
        <div className="qb-photo"><img data-speed=".08" src="https://belegends.club/assets/block-6-3.jpg" alt="Legends dinner in Dubai" /></div>
        <div className="qb-text">
         <span className="kicker">Started in Dubai</span>
         <blockquote>“You are not here by accident. You found this because something inside you was already looking for it.”</blockquote>
         <div className="qb-sign"><img src="/brand/yanis.webp" alt="" /><div><b>Yanis Chkhatval</b><small>Founder of Legends</small></div></div>
        </div>
       </div>
      </div></section>

      <section className="sec" style={{paddingTop:"0"}}><div className="wrap">
       <div className="stats">
        <div className="stat gold rv"><b>1,300<em>+</em></b><span>Matchmakings in the GCC</span></div>
        <div className="stat rv d1"><b>80<em>+</em></b><span>Private gatherings organised</span></div>
        <div className="stat rv d2"><b>8<em>+</em></b><span>Joint ventures closed</span></div>
        <div className="stat rv d3"><b>4</b><span>Cities this October</span></div>
       </div>
      </div></section>

      <Gallery />

      <section className="sec" style={{paddingTop:"0"}}><div className="wrap"><Quotes /></div></section>

      <section className="sec" id="access" style={{paddingTop:"0"}}><div className="wrap">
       <div className="sec-head rv"><span className="kicker">How to get in</span><h2 className="h2">By invitation, reviewed by people.</h2></div>
       <div className="steps4">
        <div className="st4 rv"><span className="n">01</span><h4>Request an invite</h4><p>Choose a city and tell us what you invest in.</p></div>
        <div className="st4 rv d1"><span className="n">02</span><h4>Personal review</h4><p>The team reviews every request — investors first.</p></div>
        <div className="st4 rv d2"><span className="n">03</span><h4>Your matches</h4><p>Confirmed guests get the people we think they should meet.</p></div>
        <div className="st4 rv d3"><span className="n">04</span><h4>The venue</h4><p>Address and final schedule are shared with confirmed guests.</p></div>
       </div>
      </div></section>

      <InviteForm />
      <Faq />

    </>
  );
}
