import Counter from "./Counter";

export default function About() {
    return (
        <section id="about">
            <div className="container">
                <div className="about-grid">

                    <div className="about-text reveal">
                        <p className="sec-label">About Me</p>

                        <h2 className="sec-title">
                            I turn ideas into<br />working software
                        </h2>

                        <div className="about-divider"></div>

                        <p>
                            I'm a final-year Computer Science Engineering student
                            focused on problem-solving and building reliable software systems.
                            I spend a lot of time practising Data Structures and Algorithms, and
                            working on projects that apply these concepts to real problems.
                        </p>

                        <p>
                            My primary technologies include <strong>Java, C++, SQL, and React</strong>,
                            and I enjoy building clean, minimal, and functional software systems.
                        </p>

                        <p>
                            Currently I'm focused on strengthening my DSA, system design fundamentals,
                            and full-stack development skills while building practical projects.
                        </p>

                        <div className="stats-row">

                            <div className="stat-box">
                                <div className="stat-n">
                                    <Counter target={1} suffix="+" />
                                </div>
                                <div className="stat-l">Year Coding</div>
                            </div>

                            <div className="stat-box">
                                <div className="stat-n">
                                    <Counter target={5} />
                                </div>
                                <div className="stat-l">Projects Built</div>
                            </div>

                            <div className="stat-box">
                                <div className="stat-n">—</div>
                                <div className="stat-l">Fresher</div>
                            </div>

                        </div>
                    </div>

                    <div className="reveal" style={{ transitionDelay: ".15s" }}>

                        <div className="terminal-block">

                            <div className="terminal-header">
                                <div className="td r"></div>
                                <div className="td y"></div>
                                <div className="td g"></div>
                            </div>

                            <div className="t-prompt">whoami</div>
                            <div className="t-out">
                                <strong>Vishnu Chilakala</strong> — CS Student & Developer
                            </div>

                            <br />

                            <div className="t-prompt">cat interests.txt</div>
                            <div className="t-out">Problem solving (DSA)</div>
                            <div className="t-out">Software Engineering</div>
                            <div className="t-out">Full-Stack Development</div>
                            <div className="t-out">Building Practical Projects</div>

                            <br />

                            <div className="t-prompt">cat status.txt</div>
                            <div className="t-out" style={{ color: "var(--green)" }}>
                                Open to opportunities
                            </div>

                            <div className="t-out">
                                Level: Fresher · India
                            </div>

                            <br />

                            <div className="t-prompt">
                                <span className="t-cursor"></span>
                            </div>

                        </div>

                    </div>

                </div>
            </div>
        </section>
    )
}