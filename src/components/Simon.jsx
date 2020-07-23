import React, { useState, useEffect } from "react";

export default function Simon() {
  const [colorArr, setColorArr] = useState([]);
  const [turn, setTurn] = useState(0);

  //   useEffect(() => {
  //     console.log(colorArr);
  //   }, [turn]);

  const clickHandler = () => {
    let num = Math.ceil(Math.random() * 5);

    switch (num) {
      case 1:
        setColorArr((prev) => [...prev, "red"]);
        break;
      case 2:
        setColorArr((prev) => [...prev, "blue"]);

        break;
      case 3:
        setColorArr((prev) => [...prev, "yellow"]);

        break;
      case 4:
        setColorArr((prev) => [...prev, "green"]);
        break;
    }

    // const colors = ["red", "blue", "yellow", "green"];
    // setColorArr([...colorArr, colors[num]]);

    // setTurn((prev) => prev + 1);

    console.log(colorArr, num);

    // colorArr.forEach((color) => {
    //   document.getElementById(color).classList.add("blink");
    //   setTimeout(
    //     () => document.getElementById(color).classList.remove("blink"),
    //     2000
    //   );
    // });
  };

  return (
    <>
      <section className="main">
        <header>
          <h1>Welcome To the Simon Says!</h1>
        </header>
        <button
          onClick={() => {
            clickHandler();
          }}
        >
          START GAME
        </button>
        <section className="box-wrapper">
          <div className="box-1 box" id="red"></div>
          <div className="box-2 box" id="blue"></div>
          <div className="box-3 box" id="yellow"></div>
          <div className="box-4 box" id="green"></div>
        </section>
      </section>
    </>
  );
}
