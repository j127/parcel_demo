/**
 * This is an ES6 file that uses modern JavaScript (and JSX), but Parcel
 * automatically transpiles it to ES5.
 */
import ReactDOM from "react-dom";

// Importing a TypeScript file here.
import App from "./app";

const outputArea = document.getElementById("app");

ReactDOM.render(<App />, outputArea);
