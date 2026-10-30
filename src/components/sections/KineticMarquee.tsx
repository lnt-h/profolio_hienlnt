export function KineticMarquee() {
  return (
    <section className="marquee-section section-dark" data-theme="dark" aria-label="Think, build, iterate">
      <p className="sr-only">Think, build, iterate.</p>
      <svg className="curved-marquee" viewBox="0 0 1800 410" role="presentation" aria-hidden="true">
        <defs>
          <path id="marquee-curve" d="M -160 280 Q 900 20 1960 280" />
        </defs>
        <text>
          <textPath href="#marquee-curve" startOffset="-4%">
            THINK ✦ BUILD ✦ ITERATE ✦ THINK ✦ BUILD ✦ ITERATE ✦
            <animate attributeName="startOffset" from="-4%" to="-54%" dur="16s" repeatCount="indefinite" />
          </textPath>
        </text>
      </svg>
    </section>
  );
}

