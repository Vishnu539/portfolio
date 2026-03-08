export function initScrollReveal() {

    const observer = new IntersectionObserver(entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                const delay =
                    parseFloat(entry.target.style.transitionDelay || 0) * 1000;

                setTimeout(() => {
                    entry.target.classList.add("visible");
                }, delay);

                entry.target.querySelectorAll(".skill-fill").forEach(bar => {
                    setTimeout(() => {
                        bar.style.width = bar.dataset.w;
                    }, 200 + delay);
                });

                observer.unobserve(entry.target);

            }

        });

    }, { threshold: 0.12 });

    document.querySelectorAll(".reveal").forEach(el => observer.observe(el));

}