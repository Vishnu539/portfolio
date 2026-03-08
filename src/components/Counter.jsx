import { useEffect, useRef, useState } from "react";

export default function Counter({ target, suffix = "" }) {
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    const started = useRef(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                const entry = entries[0];

                if (entry.isIntersecting && !started.current) {
                    started.current = true;

                    let start = 0;
                    const duration = 1200;
                    const step = target / (duration / 16);

                    const update = () => {
                        start += step;

                        if (start < target) {
                            setCount(Math.ceil(start));
                            requestAnimationFrame(update);
                        } else {
                            setCount(target);
                        }
                    };

                    update();
                }
            },
            { threshold: 0.6 }
        );

        if (ref.current) observer.observe(ref.current);

        return () => observer.disconnect();
    }, [target]);

    return (
        <span ref={ref}>
      {count}
            {suffix}
    </span>
    );
}