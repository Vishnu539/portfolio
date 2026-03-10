import Typewriter from "typewriter-effect";

export default function Hero() {
    return (
        <section id="hero">
            <div className="hero-corner tl"></div>
            <div className="hero-corner br"></div>

            <div className="hero-inner">
                <div className="hero-eyebrow">
                    <div className="status-pill">
                        <span className="status-dot"></span>
                        Open to opportunities
                    </div>
                    <span>Based in India</span>
                </div>

                <h1 className="hero-name">
                    Vishnu
                    <br />
                    <span className="outline">Chilakala</span>
                </h1>

                <p className="hero-role">
                    <h2 className="hero-role">
                        <span>//</span>
                        <Typewriter
                            options={{
                                strings: [
                                    "Software Developer",
                                    "CS Student",
                                    "Problem Solver"
                                ],
                                autoStart: true,
                                loop: true,
                                delay: 60,
                                deleteSpeed: 40
                            }}
                        />
                    </h2>
                </p>

                <p className="hero-bio">
                    Final year CS student passionate about problem solving,
                    clean code, and minimal design. Building things that matter —
                    from DSA to full-stack products.
                </p>

                <div className="hero-actions">
                    <a href="#projects" className="btn-primary">
                        View My Work
                    </a>

                    <a href="#contact" className="btn-ghost">
                        Get In Touch →
                    </a>
                </div>
            </div>

            <div className="hero-code">
                <span className="ln">1</span>
                <span className="c-muted">const </span>
                <span className="c-white">developer</span>
                <span className="c-muted"> = {"{"}</span>
                <br />

                <span className="ln">2</span>
                <span className="c-dim">name:</span>
                <span className="c-green"> 'Chilakala Vishnuvardhan Reddy'</span>
                <span className="c-muted">,</span>
                <br />

                <span className="ln">3</span>
                <span className="c-dim">role:</span>
                <span className="c-green"> 'Software Developer'</span>
                <span className="c-muted">,</span>
                <br />

                <span className="ln">4</span>
                <span className="c-dim">stack:</span>
                <span className="c-muted"> ['Java', 'C++', 'MySQL', 'React'],</span>
                <br />

                <span className="ln">5</span>
                <span className="c-dim">open:</span>
                <span className="c-green"> true</span>
                <br />

                <span className="ln">6</span>
                <span className="c-muted">{"}"}</span>
                <span className="t-cursor"></span>
            </div>
        </section>
    )
}