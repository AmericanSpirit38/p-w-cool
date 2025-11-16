import React, { useState } from "react";
import "./Password.css"
import {Link} from "react-router-dom";
export default function Password() {
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (password === "Bratislava") {
            alert("Congratulations! You've entered the correct password.");
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
                <div className="button-confirm">
                <button type="submit" style={{ marginTop: 12 }}>
                    Submit
                </button>
                </div>
                <Link to="/">
                    <div className="button-cancel">
                    <button type="button" style={{ marginTop: 12 }}>
                        Cancel
                    </button>
                    </div>
                </Link>
            </form>
        </main>
    );
}
