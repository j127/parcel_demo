/**
 * Note that this is a TypeScript file.
 */
import React from "react";

const code: string = [
    'const x = (y) => `fu${[...(y + "")].filter((n) => n !== "a").join("")}y`;',
    "console.log(x(0 / 0));",
].join("\n");

const codeStyles = {
    color: "#eee",
    backgroundColor: "#212121",
    padding: "7px 17px",
};

export default function App() {
    return (
        <>
            <h2>React App Section</h2>
            <pre style={codeStyles}>
                <code>{code}</code>
            </pre>
        </>
    );
}
