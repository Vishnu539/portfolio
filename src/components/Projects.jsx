export default function Projects() {
    return (
        <section id="projects">
            <div className="container">

                <div className="projects-header reveal">
                    <p className="sec-label">Work</p>
                    <h2 className="sec-title">Featured work</h2>
                </div>

                <div className="projects-grid">

                    {/* Featured Project */}

                    <div
                        className="project-card featured reveal"
                        target="_blank"
                    >

                        <div>

                            <div className="project-featured-badge">
                                Featured
                            </div>

                            <div className="project-card-num">
                                Project 01
                            </div>

                            <div className="project-card-name">
                                Bimodal Emotion Recognition
                            </div>

                            <div className="project-card-desc">
                                A multimodal emotion recognition system that combines
                                text and speech signals to detect human
                                emotions using deep learning models. The project
                                integrates visual and audio features to improve emotion
                                classification performance across multiple emotion
                                categories.
                            </div>

                            <div className="project-card-footer">

                                <div className="project-stack">
                                    <span className="stack-tag">Python</span>
                                    <span className="stack-tag">·</span>
                                    <span className="stack-tag">Deep Learning</span>
                                    <span className="stack-tag">·</span>
                                    <span className="stack-tag">NLP</span>
                                </div>

                                <div className="project-links">
                                    <a href="https://huggingface.co/spaces/Vishnu539/emotion-recognition" target={"_blank"}>
                                        Live Demo <span className="link-arrow">↗</span>
                                    </a>

                                    <a href="https://github.com/Vishnu539/bimer-emotion-recognition" target={"_blank"}>
                                        GitHub <span className="link-arrow">↗</span>
                                    </a>
                                </div>

                            </div>

                        </div>

                        <div className="project-featured-visual">

                            <div className="visual-emoji">
                                🎭
                            </div>

                            <div className="visual-illustration">
                                <img src="/bimer-visual.svg" alt="BiMER pipeline illustration" loading="lazy"/>
                            </div>

                        </div>

                    </div>


                    {/* HematoVision */}

                    <div
                        className="project-card reveal"
                        style={{ transitionDelay: ".05s" }}
                        target="_blank"
                    >

                        <div className="project-card-num">
                            Project 02
                        </div>

                        <div className="project-card-name">
                            HematoVision
                        </div>

                        <div className="project-card-desc">
                            A blood cell classification system built using
                            convolutional neural networks and transfer learning.
                            The model analyzes microscopic blood cell images and
                            classifies them into multiple cell types through a
                            deployed Flask-based web application.
                        </div>

                        <div className="project-card-footer">

                            <div className="project-stack">
                                <span className="stack-tag">Python</span>
                                <span className="stack-tag">·</span>
                                <span className="stack-tag">TensorFlow</span>
                                <span className="stack-tag">·</span>
                                <span className="stack-tag">Flask</span>
                            </div>

                            <div className="project-links">
                                <a href="https://huggingface.co/spaces/Vishnu539/hematovision" target={"_blank"}>
                                    Live Demo <span className="link-arrow">↗</span>
                                </a>

                                <a href="https://github.com/Vishnu539/HematoVision" target={"_blank"}>
                                    GitHub <span className="link-arrow">↗</span>
                                </a>
                            </div>

                        </div>

                    </div>


                    {/* Stock Forecasting */}

                    <div
                        className="project-card reveal"
                        style={{ transitionDelay: ".1s" }}
                        target="_blank"
                    >

                        <div className="project-card-num">
                            Project 03
                        </div>

                        <div className="project-card-name">
                            WhatTheStock - Stock Price Visualization & Forecasting
                        </div>

                        <div className="project-card-desc">
                            An interactive stock market visualization and prediction
                            platform built using Python Dash and Plotly. The system
                            applies machine learning models and technical indicators
                            to forecast short-term price trends and provide visual
                            market insights.
                        </div>

                        <div className="project-card-footer">

                            <div className="project-stack">
                                <span className="stack-tag">Python</span>
                                <span className="stack-tag">·</span>
                                <span className="stack-tag">Dash</span>
                                <span className="stack-tag">·</span>
                                <span className="stack-tag">Plotly</span>
                            </div>

                            <div className="project-links">
                                <a href="https://whatthestock.onrender.com/" target={"_blank"}>
                                    Live Demo <span className="link-arrow">↗</span>
                                </a>

                                <a href="https://github.com/Vishnu539/WhatTheStock" target={"_blank"}>
                                    GitHub <span className="link-arrow">↗</span>
                                </a>
                            </div>

                        </div>

                    </div>


                    {/* OrderOnTheGo */}

                    <div
                        className="project-card reveal"
                        style={{ transitionDelay: ".15s" }}
                        target="_blank"
                    >

                        <div className="project-card-num">
                            Project 04
                        </div>

                        <div className="project-card-name">
                            OrderOnTheGo
                        </div>

                        <div className="project-card-desc">
                            A full-stack food ordering platform designed to simulate
                            real-world restaurant ordering workflows. The application
                            includes menu browsing, cart management, and backend APIs
                            for handling orders and restaurant data.
                        </div>

                        <div className="project-card-footer">

                            <div className="project-stack">
                                <span className="stack-tag">Node.js</span>
                                <span className="stack-tag">·</span>
                                <span className="stack-tag">Express</span>
                                <span className="stack-tag">·</span>
                                <span className="stack-tag">MongoDB</span>
                            </div>

                            <div className="project-links">
                                <a href="https://orderonthego.vercel.app/" target={"_blank"}>
                                    Live Demo <span className="link-arrow">↗</span>
                                </a>

                                <a href="https://github.com/Vishnu539/orderonthego-frontend" target={"_blank"}>
                                    GitHub <span className="link-arrow">↗</span>
                                </a>
                            </div>

                        </div>

                    </div>


                    {/* Movie Recommendation */}

                    <div
                        className="project-card reveal"
                        style={{ transitionDelay: ".2s" }}
                        target="_blank"
                    >

                        <div className="project-card-num">
                            Project 05
                        </div>

                        <div className="project-card-name">
                            Movie Recommendation System
                        </div>

                        <div className="project-card-desc">
                            A machine learning based movie recommendation system that
                            suggests movies based on user preferences. The system uses
                            collaborative filtering techniques to generate
                            personalized recommendations.
                        </div>

                        <div className="project-card-footer">

                            <div className="project-stack">
                                <span className="stack-tag">Python</span>
                                <span className="stack-tag">·</span>
                                <span className="stack-tag">Machine Learning</span>
                            </div>

                            <div className="project-links">
                                <a href="https://vishnu-movie-recommendation-system.streamlit.app/" target={"_blank"}>
                                    Live Demo <span className="link-arrow">↗</span>
                                </a>

                                <a href="https://github.com/Vishnu539/movie-recommendation-system" target={"_blank"}>
                                    GitHub <span className="link-arrow">↗</span>
                                </a>
                            </div>

                        </div>

                    </div>

                </div>

            </div>
        </section>
    )
}