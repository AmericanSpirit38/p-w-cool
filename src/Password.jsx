import React, { useState } from "react";
import "./Password.css"
export default function Password() {
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (password === "xxx") {
            alert("Password matched.");
        } else {
            alert("Incorrect password.");
        }
    };

    return (
        <main style={{ padding: 20, maxWidth: 480 }}>
            <h1>Password</h1>
            <form onSubmit={handleSubmit}>
                <label style={{ display: "block", marginBottom: 8 }}>
                    Enter password:
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        style={{ display: "block", marginTop: 6, padding: 8, width: "100%" }}
                        aria-label="password"
                    />
                </label>
                <button type="submit" style={{ marginTop: 12 }}>
                    Submit
                </button>
            </form>
        </main>
    );
}
