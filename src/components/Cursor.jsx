import { useEffect } from "react";

export default function Cursor() {
    useEffect(() => {

        // Disable custom cursor on touch devices
        if ("ontouchstart" in window || navigator.maxTouchPoints > 0) {
            return;
        }

        const cur = document.getElementById("cur");
        const ring = document.getElementById("cur-ring");

        let mx = 0, my = 0, rx = 0, ry = 0;
        let visible = false;

        const move = (e) => {
            mx = e.clientX;
            my = e.clientY;

            cur.style.left = mx + "px";
            cur.style.top = my + "px";

            // Show cursor on first movement
            if (!visible) {
                cur.style.opacity = "1";
                ring.style.opacity = "1";
                visible = true;
            }
        };

        const hideCursor = () => {
            cur.style.opacity = "0";
            ring.style.opacity = "0";
            visible = false;
        };

        document.addEventListener("mousemove", move);
        document.addEventListener("mouseleave", hideCursor);

        const tick = () => {
            rx += (mx - rx) * 0.1;
            ry += (my - ry) * 0.1;

            ring.style.left = rx + "px";
            ring.style.top = ry + "px";

            requestAnimationFrame(tick);
        };

        tick();

        const interactive = document.querySelectorAll("a, button");

        interactive.forEach((el) => {
            el.addEventListener("mouseenter", () => {
                ring.style.width = "54px";
                ring.style.height = "54px";
            });

            el.addEventListener("mouseleave", () => {
                ring.style.width = "32px";
                ring.style.height = "32px";
            });
        });

        return () => {
            document.removeEventListener("mousemove", move);
            document.removeEventListener("mouseleave", hideCursor);
        };

    }, []);

    return (
        <>
            <div id="cur"></div>
            <div id="cur-ring"></div>
        </>
    );
}