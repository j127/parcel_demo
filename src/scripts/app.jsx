// See https://parceljs.org/recipes/react/
import React from "react";
import { BsLightbulb, BsLightbulbOff } from "react-icons/bs";

const buttonStyles = {
    border: "none",
    backgroundColor: "aliceblue",
    borderBottom: "3px solid #ccc",
    borderTop: "1px solid #fff",
    borderLeft: "1px solid #fff",
    borderRight: "3px solid #ccc",
    borderRadius: "5px",
    fontSize: "1.5rem",
    marginTop: "17px",
    padding: "4px 17px",
};

export default function App() {
    const [isOn, setIsOn] = React.useState(false);

    const iconSize = 50;

    const toggleLight = (e) => {
        setIsOn(!isOn);
    };

    return (
        <div>
            <h2>React App Section</h2>

            <div>
                {isOn ? (
                    <BsLightbulb className="on" size={iconSize} />
                ) : (
                    <BsLightbulbOff className="off" size={iconSize} />
                )}
            </div>

            <button style={buttonStyles} onClick={toggleLight}>
                Turn Light {isOn ? "Off" : "On"}
            </button>
        </div>
    );
}
