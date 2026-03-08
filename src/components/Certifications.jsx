export default function Certifications() {
    return (
        <section id="certifications">
            <div className="container">

                <div className="reveal">
                    <p className="sec-label">Certifications</p>

                    <h2 className="sec-title">
                        Professional<br />certifications
                    </h2>
                </div>

                <div className="cert-grid">

                    {/* Certificate 1 */}
                    <a
                        href="https://drive.google.com/file/d/1C5SoaH0iztPJFijg1SBj6ZpSPtYvtOgD/view?usp=drive_link"
                        className="cert-card reveal"
                        style={{ transitionDelay: ".05s" }}
                        target="_blank"
                    >

                        <div className="cert-title">
                            Microsoft AI & ML Engineering
                        </div>

                        <div className="cert-org">
                            Microsoft · 2026
                        </div>

                        <span className="cert-arrow">↗</span>

                    </a>


                    {/* Certificate 2 */}
                    <a
                        href="https://drive.google.com/file/d/1I9qTHZobRExPSi_WDqk4LMSuNVoOz-HD/view?usp=sharing"
                        className="cert-card reveal"
                        style={{ transitionDelay: ".1s" }}
                        target="_blank"
                    >

                        <div className="cert-title">
                            Data Science Professional
                        </div>

                        <div className="cert-org">
                            Oracle Cloud Infrastructure · 2025
                        </div>

                        <span className="cert-arrow">↗</span>

                    </a>

                </div>

            </div>
        </section>
    )
}