import React, { useEffect } from "react";
import "./BackgroundAnimation.css"; // Ensure this is the correct path

const BackgroundAnimation = () => {
  useEffect(() => {
    const container = document.querySelector(".floating-balls");

    for (let i = 0; i < 30; i++) {
      const ball = document.createElement("div");
      ball.className = "ball";
      ball.style.left = `${Math.random() * 100}vw`;
      ball.style.animationDuration = `${Math.random() * 15 + 5}s`;
      ball.style.width = `${Math.random() * 40 + 10}px`;
      ball.style.height = ball.style.width;
      container.appendChild(ball);
    }
  }, []);

  return <div className="floating-balls"></div>;
};

export default BackgroundAnimation;
