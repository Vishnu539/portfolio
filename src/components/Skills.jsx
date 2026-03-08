export default function Skills() {
    return (
        <section id="skills">
            <div className="container">
                <div className="skills-layout">

                    <div className="reveal">
                        <p className="sec-label">Skills</p>

                        <h2 className="sec-title">
                            My tech<br />stack
                        </h2>

                        <p>
                            Technologies and tools I use while building software,
                            machine learning systems, and full-stack applications.
                        </p>
                    </div>

                    <div className="skills-content">

                        <div className="skill-row reveal" style={{ transitionDelay: ".05s" }}>
                            <div className="skill-row-header">
                                <span className="skill-row-name">Programming</span>
                                <span className="skill-row-pct">90%</span>
                            </div>

                            <div className="skill-track">
                                <div className="skill-fill" data-w="90%"></div>
                            </div>

                            <div className="skill-tags">
                                <span className="skill-tag">Java</span>
                                <span className="skill-tag">C++</span>
                                <span className="skill-tag">Python</span>
                                <span className="skill-tag">JavaScript</span>
                            </div>
                        </div>


                        <div className="skill-row reveal" style={{ transitionDelay: ".1s" }}>
                            <div className="skill-row-header">
                                <span className="skill-row-name">Web Development</span>
                                <span className="skill-row-pct">85%</span>
                            </div>

                            <div className="skill-track">
                                <div className="skill-fill" data-w="85%"></div>
                            </div>

                            <div className="skill-tags">
                                <span className="skill-tag">React</span>
                                <span className="skill-tag">HTML</span>
                                <span className="skill-tag">CSS</span>
                                <span className="skill-tag">MySQL</span>
                            </div>
                        </div>


                        <div className="skill-row reveal" style={{ transitionDelay: ".15s" }}>
                            <div className="skill-row-header">
                                <span className="skill-row-name">Data & Analytics</span>
                                <span className="skill-row-pct">70%</span>
                            </div>

                            <div className="skill-track">
                                <div className="skill-fill" data-w="70%"></div>
                            </div>

                            <div className="skill-tags">
                                <span className="skill-tag">Machine Learning</span>
                                <span className="skill-tag">Data Analysis</span>
                                <span className="skill-tag">Power BI</span>
                            </div>
                        </div>


                        <div className="skill-row reveal" style={{ transitionDelay: ".2s" }}>
                            <div className="skill-row-header">
                                <span className="skill-row-name">Core Concepts</span>
                                <span className="skill-row-pct">85%</span>
                            </div>

                            <div className="skill-track">
                                <div className="skill-fill" data-w="85%"></div>
                            </div>

                            <div className="skill-tags">
                                <span className="skill-tag">Data Structures</span>
                                <span className="skill-tag">Algorithms</span>
                                <span className="skill-tag">OOP</span>
                                <span className="skill-tag">Problem Solving</span>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}