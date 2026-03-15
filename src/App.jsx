import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import About from "./components/About"
import Skills from "./components/Skills"
import Experience from "./components/Experience"
import Certifications from "./components/Certifications"
import Projects from "./components/Projects"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import Cursor from "./components/Cursor"
import Loader from "./components/Loader"

import { initScrollReveal } from "./utils/scrollReveal"
import { useState, useEffect } from "react"
import Lenis from "lenis"

function App() {

    const [loading, setLoading] = useState(true)
    const [fadeOut, setFadeOut] = useState(false)
    const [showMobileNotice, setShowMobileNotice] = useState(false)
    const [theme, setTheme] = useState("dark")

    useEffect(() => {

        const isMobile = window.innerWidth <= 768

        if (isMobile) {
            setShowMobileNotice(true)

            setTimeout(() => {
                setShowMobileNotice(false)
            }, 4000)
        }

    }, [])

    useEffect(() => {

        const savedTheme = localStorage.getItem("theme")
        const favicon = document.getElementById("favicon")

        if (savedTheme === "light") {

            document.body.classList.add("light")
            setTheme("light")

            if (favicon) {
                favicon.href = "/favicon-light.png"
            }

        } else {

            document.body.classList.remove("light")
            setTheme("dark")

            if (favicon) {
                favicon.href = "/favicon-dark.png"
            }

        }

    }, [])

    const toggleTheme = () => {

        const newTheme = theme === "dark" ? "light" : "dark"

        setTheme(newTheme)

        const favicon = document.getElementById("favicon")

        if (newTheme === "light") {

            document.body.classList.add("light")
            favicon.href = "/favicon-light.png"

        } else {

            document.body.classList.remove("light")
            favicon.href = "/favicon-dark.png"

        }

        localStorage.setItem("theme", newTheme)

    }

    useEffect(() => {

        let pageLoaded = false
        let minTimePassed = false

        const randomDuration = 1000 + Math.random() * 1000

        const checkReady = () => {
            if (pageLoaded && minTimePassed) {
                setFadeOut(true)

                setTimeout(() => {
                    setLoading(false)
                }, 400)
            }
        }

        const handleLoad = () => {
            pageLoaded = true
            checkReady()
        }

        if (document.readyState === "complete") {
            handleLoad()
        } else {
            window.addEventListener("load", handleLoad)
        }

        const timer = setTimeout(() => {
            minTimePassed = true
            checkReady()
        }, randomDuration)

        return () => {
            window.removeEventListener("load", handleLoad)
            clearTimeout(timer)
        }

    }, [])

    useEffect(() => {
        if (!loading) {
            initScrollReveal()
        }
    }, [loading])

    /* ---------------- LENIS SMOOTH SCROLL ---------------- */

    useEffect(() => {

        const lenis = new Lenis({
            duration: 1.2,
            smoothWheel: true,
            smoothTouch: false
        })

        function raf(time) {
            lenis.raf(time)
            requestAnimationFrame(raf)
        }

        requestAnimationFrame(raf)

        return () => {
            lenis.destroy()
        }

    }, [])

    /* ------------------------------------------------------ */

    if (loading) {
        return <Loader fadeOut={fadeOut} />
    }

    return (
        <>
            <Cursor />
            <Navbar toggleTheme={toggleTheme} theme={theme} />
            {showMobileNotice && (
                <div className="mobile-experience-note">
                    Best experienced on a bigger screen.
                </div>
            )}
            <Hero />
            <About />
            <Skills />
            <Experience />
            <Certifications />
            <Projects />
            <Contact />
            <div className="mobile-notice">
                For the best experience, view this portfolio on a larger screen.
            </div>
            <Footer />
        </>
    )
}

export default App