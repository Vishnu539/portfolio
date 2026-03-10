import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import About from "./components/About"
import Skills from "./components/Skills"
import Certifications from "./components/Certifications"
import Projects from "./components/Projects"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import Cursor from "./components/Cursor"
import Loader from "./components/Loader"

import { initScrollReveal } from "./utils/scrollReveal"
import { useState, useEffect } from "react"

function App() {

    const [loading, setLoading] = useState(true)
    const [fadeOut, setFadeOut] = useState(false)
    const [showMobileNotice, setShowMobileNotice] = useState(false)

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

        // IMPORTANT FIX
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

    if (loading) {
        return <Loader fadeOut={fadeOut} />
    }

    return (
        <>
            <Cursor />
            <Navbar />
            {showMobileNotice && (
                <div className="mobile-experience-note">
                    Best experienced on a bigger screen.
                </div>
            )}
            <Hero />
            <About />
            <Skills />
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