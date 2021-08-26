import { useState } from "react";
import Confetti from "react-dom-confetti";

const getRandomColor = () => {
  const tailwindColors = ["red", "blue", "green", "purple", "yellow", "orange"];

  return tailwindColors[Math.floor(Math.random() * tailwindColors.length)];
};

const config = {
  angle: 90,
  spread: 360,
  startVelocity: 40,
  elementCount: 70,
  dragFriction: 0.12,
  duration: 1000,
  stagger: 3,
  width: "10px",
  height: "10px",
  perspective: "500px",
  colors: ["#a864fd", "#29cdff", "#78ff44", "#ff718d", "#fdff6a"],
};

export const Technology = ({ children, linkId, disableConfetti }) => {
  const [randomColor, setRandomColor] = useState(getRandomColor());
  const [confettiActive, setConfettiActive] = useState(false);

  const resetColor = () => {
    setConfettiActive(true);
    setInterval(() => setConfettiActive(false), 1000);
    setRandomColor(getRandomColor());
  };

  return (
    <span
      onMouseOver={resetColor}
      className={`border-r-2 border-gray-400 transition-all ease-in-out duration-200 no-underline my-1 px-2 text-xl text-gray-800 font-semibold tracking-wide hover:text-${randomColor}-600`}
      href={"#" + linkId}
    >
      {!disableConfetti && <Confetti active={confettiActive} config={config} />}
      {children}
    </span>
  );
};
