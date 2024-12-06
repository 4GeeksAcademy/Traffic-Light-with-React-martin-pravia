import React, { useState } from "react";

const Semaforo = () => {
  const [lightColor, setLightColor] = useState("");
  const [color, setColor] = useState(["red", "yellow", "green"]);
  const cambioDeColor = () => {
    const colorRandom = Math.floor(Math.random() * color.length);
    setLightColor(color[colorRandom]);
  };

  const agregarPurpura = () => {
    if (!color.includes("purple")) setColor([...color, "purple"]);
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

          {color.includes("purple") && (
            <div
              onClick={() => setLightColor("purple")}
              className=
              {"purpleDark " + (lightColor === "purple" ? "purpleLight" : "")}
            ></div>
          )}
        </div>
      </div>
      <div className="buttonOn">
        <button onClick={cambioDeColor} className=" btn btn-secondary">
          Cambiar random color
        </button>

        <button
          onClick={agregarPurpura}
          className="buttonPurp btn btn-secondary"
        >
          Agregar Purpura
        </button>
      </div>
    </>
  );
};

export default Semaforo;
