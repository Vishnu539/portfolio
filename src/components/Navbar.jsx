import { useEffect } from "react";

export default function Navbar() {

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
                    <a href="#certifications">
                        <span className="nav-dot"></span>
                        Certifications
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
        </nav>
    );
}