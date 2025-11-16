import React from "react";
import "./Secret.css"

function randomBackgroundColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function SetBackground() {
    React.useEffect(() => {
        const originalColor = document.body.style.backgroundColor;
        const newColor = randomBackgroundColor();
        document.body.style.backgroundColor = newColor;

        return () => {
            document.body.style.backgroundColor = originalColor;
        };
    }, []);

    return null;
}

function Timer(interval) {
    React.useEffect(() => {
        const timer = setInterval(() => {
            const newColor = randomBackgroundColor();
            document.body.style.backgroundColor = newColor;
        }, interval);

        return () => clearInterval(timer);
    }, [interval]);

    return null;
}

export default function Secret() {
    SetBackground();
    Timer(100);
    return (
        <main style={{ padding: 20, maxWidth: 480, color: 'white', backgroundColor: 'black' }}>
            <h1>Secret Page</h1>
            <p>Congratulations! You've found the secret page.</p>
            <p>Thanks for playing</p>
        </main>
    );
}