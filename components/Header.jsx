
export default function Header() {
  return (
    <>
      <header className="hdr"><div className="hdr-in">
      <a className="brand" href="/"><img src="/brand/symbol.png" alt="" /><span><b>LEGENDS</b><small>PRIVATE INVESTOR NETWORK</small></span></a>
      <nav className="nav"><a href="/#cities">Cities</a><a href="/#format">The evening</a><a href="/#gallery">Gallery</a><a href="/#access">How to get in</a><a href="/#faq">FAQ</a></nav>
      <div className="hdr-act"><a className="btn" href="#invite">Request an invite <svg className="arr" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M13 6l6 6-6 6"/></svg></a>
      <button className="burger" aria-label="Menu"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M4 8h16M4 16h16"/></svg></button></div>
      </div></header>
      <nav className="mnav"><a href="/#cities">Cities</a><a href="/#format">The evening</a><a href="/#gallery">Gallery</a><a href="/#access">How to get in</a><a href="/#faq">FAQ</a><a className="btn gold" href="#invite">Request an invite</a></nav>

    </>
  );
}
