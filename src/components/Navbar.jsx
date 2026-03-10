import { useEffect } from "react";

export default function Navbar({ toggleTheme, theme })  {

    useEffect(() => {
        const nav = document.getElementById("nav");
        const sections = document.querySelectorAll("section[id]");
        const navLinks = document.querySelectorAll(".nav-links a");

        const handleScroll = () => {

            // Navbar blur
            if (window.scrollY > 0) {
                nav.classList.add("scrolled");
            } else {
                nav.classList.remove("scrolled");
            }

            // Active section indicator
            const scrollY = window.scrollY;

            sections.forEach((section) => {
                const sectionTop = section.offsetTop - 150;
                const sectionHeight = section.offsetHeight;
                const sectionId = section.getAttribute("id");

                if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {

                    navLinks.forEach((link) => {
                        link.classList.remove("active");
                    });

                    const activeLink = document.querySelector(
                        `.nav-links a[href="#${sectionId}"]`
                    );

                    if (activeLink) {
                        activeLink.classList.add("active");
                    }
                }
            });
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };

    }, []);

    return (
        <nav id="nav">

            <a href="#hero" className="nav-logo">
                vc<span>.</span>
            </a>

            <ul className="nav-links">

                <li>
                    <a href="#about">
                        <span className="nav-dot"></span>
                        About
                    </a>
                </li>

                <li>
                    <a href="#skills">
                        <span className="nav-dot"></span>
                        Skills
                    </a>
                </li>

                <li>
                    <a href="#experience">
                        <span className="nav-dot"></span>
                        Experience
                    </a>
                </li>

                <li>
                    <a href="#projects">
                        <span className="nav-dot"></span>
                        Work
                    </a>
                </li>

                <li>
                    <a href="#contact">
                        <span className="nav-dot"></span>
                        Contact
                    </a>
                </li>

            </ul>

            {/* Theme toggle button moved OUTSIDE nav-links */}

            <button
                className="theme-toggle"
                onClick={toggleTheme}
                aria-label="Toggle theme"
            >
                {theme === "dark" ? (

                    <svg className="theme-icon" viewBox="0 0 24 24" fill="none">
                        <circle cx="12" cy="12" r="5" stroke="currentColor" strokeWidth="2"/>
                        <line x1="12" y1="1" x2="12" y2="4" stroke="currentColor" strokeWidth="2"/>
                        <line x1="12" y1="20" x2="12" y2="23" stroke="currentColor" strokeWidth="2"/>
                        <line x1="4.22" y1="4.22" x2="6.34" y2="6.34" stroke="currentColor" strokeWidth="2"/>
                        <line x1="17.66" y1="17.66" x2="19.78" y2="19.78" stroke="currentColor" strokeWidth="2"/>
                        <line x1="1" y1="12" x2="4" y2="12" stroke="currentColor" strokeWidth="2"/>
                        <line x1="20" y1="12" x2="23" y2="12" stroke="currentColor" strokeWidth="2"/>
                        <line x1="4.22" y1="19.78" x2="6.34" y2="17.66" stroke="currentColor" strokeWidth="2"/>
                        <line x1="17.66" y1="6.34" x2="19.78" y2="4.22" stroke="currentColor" strokeWidth="2"/>
                    </svg>

                ) : (

                    <svg className="theme-icon" viewBox="0 0 24 24" fill="none">
                        <path
                            d="M21 12.8A9 9 0 1111.2 3 7 7 0 0021 12.8z"
                            stroke="currentColor"
                            strokeWidth="2"
                        />
                    </svg>

                )}
            </button>

        </nav>
    );
}