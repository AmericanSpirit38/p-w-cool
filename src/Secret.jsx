// src/Secret.jsx
import React, { useEffect } from "react";

function useRandomBodyBackground(intervalMs = 100) {
    useEffect(() => {
        const originalInline = {
            background: document.body.style.background,
            animation: document.body.style.animation,
        };

        document.body.style.setProperty("animation", "none", "important");
        document.body.style.setProperty("background", "none", "important");

        const applyColor = () => {
            const color =
                "#" + Math.floor(Math.random() * 0xffffff).toString(16).padStart(6, "0");
            document.body.style.setProperty("background-color", color, "important");
        };

        applyColor();
        const id = setInterval(applyColor, intervalMs);

        return () => {
            clearInterval(id);
            document.body.style.background = originalInline.background;
            document.body.style.animation = originalInline.animation;
            document.body.style.removeProperty("background-color");
        };
    }, [intervalMs]);
}

export default function Secret() {
    useRandomBodyBackground(100);
    return (
        <main style={{ padding: 20, maxWidth: 480, color: "#fff", background: "black" }}>
            <h1>Secret Page</h1>
            <p>Congratulations! You&apos;ve found the secret page.</p>
            <p>Thanks for playing</p>
        </main>
    );
}
