import React, { useState } from "react";

const Semaforo = () => {
  const [lightColor, setLightColor] = useState("");
  const [color, setColor] = useState(["red", "yellow", "green"]);
  const cambioDeColor = () => {
    const colorRandom = Math.floor(Math.random() * color.length);
    setLightColor(color[colorRandom]);
  };

  return (
    <>
      <div className="granDiv">
        <div className="stick"></div>
        <div className="container">
          <div
            onClick={() => setLightColor("red")}
            className={"redDark " + (lightColor === "red" ? "redLight" : "")}
          ></div>
          <div
            onClick={() => setLightColor("yellow")}
            className={
              "yellowDark " + (lightColor === "yellow" ? "yellowLight" : "")
            }
          ></div>
          <div
            onClick={() => setLightColor("green")}
            className={
              "greenDark " + (lightColor === "green" ? "greenLight" : "")
            }
          ></div>
        </div>
      </div>
      <div className="buttonOn">
        <button
         
          onClick={cambioDeColor}
          className=" btn btn-secondary"
        >
          Cambiar random color
        </button>
      </div>
    </>
  );
};

export default Semaforo;
