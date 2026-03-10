import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";

export default function Contact() {

    const form = useRef();
    const [status, setStatus] = useState("");
    const [sending, setSending] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();

        setSending(true);

        emailjs.sendForm(
            "service_8kf4eex",
            "template_hjwsmwf",
            form.current,
            "ogrwgkRA45CQDfnwr"
        )
            .then(() => {
                setStatus("success");
                form.current.reset();
                setSending(false);

                setTimeout(() => {
                    setStatus("");
                }, 4000);
            })
            .catch((error) => {
                console.log(error);
                setStatus("error");
                setSending(false);

                setTimeout(() => {
                    setStatus("");
                }, 4000);
            });
    };

    return (
        <section id="contact">
            <div className="container">
                <div className="contact-grid">

                    <div className="reveal">
                        <p className="sec-label">Contact</p>

                        <h2 className="contact-big">
                            Let's<br />work<span className="green">.</span>
                        </h2>

                        <p className="contact-sub">
                            Open to internships, entry-level roles, freelance projects, and
                            interesting conversations. I'll get back to you within 24 hours.
                        </p>

                        <div className="socials">

                            <a href="mailto:vishnuchilakala444@gmail.com" className="social-link" target="_blank" rel="noopener noreferrer">
                                <span>Gmail</span>
                                <span className="s-arrow">↗</span>
                            </a>

                            <a href="https://github.com/Vishnu539" target="_blank" rel="noopener noreferrer" className="social-link">
                                <span>GitHub</span>
                                <span className="s-arrow">↗</span>
                            </a>

                            <a href="https://www.linkedin.com/in/vishnu-chilakala/" target="_blank" rel="noopener noreferrer" className="social-link">
                                <span>LinkedIn</span>
                                <span className="s-arrow">↗</span>
                            </a>

                            <a href="https://www.instagram.com/vishnu_chilakala205/" target="_blank" rel="noopener noreferrer" className="social-link">
                                <span>Instagram</span>
                                <span className="s-arrow">↗</span>
                            </a>

                            <a href="https://drive.google.com/file/d/10P3XolSsnYS-Zt8UMpz3k4I8wJXT-U9U/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="social-link">
                                <span>My Resume</span>
                                <span className="s-arrow">↗</span>
                            </a>

                        </div>
                    </div>


                    <form
                        ref={form}
                        className="contact-form reveal"
                        style={{ transitionDelay: ".15s" }}
                        onSubmit={sendEmail}
                    >

                        <div className="f-group">
                            <label className="f-label">Name</label>
                            <input
                                type="text"
                                name="name"
                                className="f-input"
                                placeholder="Your name"
                                required
                            />
                        </div>

                        <div className="f-group">
                            <label className="f-label">Email</label>
                            <input
                                type="email"
                                name="email"
                                className="f-input"
                                placeholder="you@email.com"
                                required
                            />
                        </div>

                        <div className="f-group">
                            <label className="f-label">Subject</label>
                            <input
                                type="text"
                                name="subject"
                                className="f-input"
                                placeholder="What's this about?"
                            />
                        </div>

                        <div className="f-group">
                            <label className="f-label">Message</label>
                            <textarea
                                name="message"
                                className="f-input"
                                placeholder="Tell me about the opportunity or project..."
                                required
                            />
                        </div>

                        <button
                            type="submit"
                            className="f-submit"
                            disabled={sending}
                        >
                            {sending ? (
                                <>
                                    <span className="spinner"></span>
                                    Sending...
                                </>
                            ) : (
                                "Send Message →"
                            )}
                        </button>

                        {status === "success" && (
                            <p style={{ marginTop: "12px", color: "var(--green)", fontSize: ".8rem" }}>
                                ✓ Message sent successfully
                            </p>
                        )}

                        {status === "error" && (
                            <p style={{ marginTop: "12px", color: "#ff4d4d", fontSize: ".8rem" }}>
                                Failed to send message. Please try again.
                            </p>
                        )}

                    </form>

                </div>
            </div>
        </section>
    );
}