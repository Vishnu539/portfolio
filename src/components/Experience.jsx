export default function Experience() {
    return (
        <section id="experience">
            <div className="container">

                <div className="reveal">
                    <p className="sec-label">Experience</p>

                    <h2 className="sec-title">
                        Work<br />experience
                    </h2>
                </div>

                <div className="exp-grid">

                    {/* SmartBridge Internship */}

                    <a
                        href="https://drive.google.com/file/d/12M-UGmpsFDcTI86GJD9I6sRuFesQ95VX/view?usp=sharing"
                        className="exp-card reveal"
                        style={{ transitionDelay: ".05s" }}
                        target="_blank"
                        rel="noopener noreferrer"
                    >

                        <div className="exp-role">
                            Artificial Intelligence & Machine Learning Intern
                        </div>

                        <div className="exp-company">
                            SmartBridge Educational Services Pvt. Ltd. · 2025
                        </div>

                        <div className="exp-desc">
                            Completed a short-term internship focused on Artificial
                            Intelligence and Machine Learning. Worked with Python
                            for data preprocessing, model training, and basic
                            machine learning workflows.
                        </div>

                        <span className="exp-arrow">↗</span>

                    </a>
                </div>

            </div>
        </section>
    )
}