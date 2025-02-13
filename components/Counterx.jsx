"use client"; // Ensures this component is client-side rendered

import { useState } from "react";

export default function Counterx() {
    const [count, setCount] = useState(0);

    return (
        <div>
            <button
                style={{
                    padding: "10px 20px",
                    backgroundColor: "#0070f3",
                    color: "white",
                    border: "none",
                    borderRadius: "5px",
                    cursor: "pointer",
                }}
                onClick={() => setCount((prev) => prev + 1)}>
                Clicked {count} times
            </button>
        </div>
    );
}