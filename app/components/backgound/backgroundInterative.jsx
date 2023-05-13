"use client";

import React, { useEffect, useState } from "react";
import "./styleBackgroundInterative.css";

function BackgoundInterative() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const parallax_e = document.querySelectorAll(".parallax");
  function update(clientX) {
    
    parallax_e.forEach((element) => {
      let speedx = element.dataset.speedx;
      let speedy = element.dataset.speedy;
      let speedz = element.dataset.speedz;
      let rotate = element.dataset.rotate;

      let rotedeDegree = 0;
      rotedeDegree = (mousePosition.x / (window.innerWidth / 2)) * 20;

      let isInLeft = 0;
      isInLeft =
        parseFloat(getComputedStyle(element).left) < window.innerWidth / 2
          ? 1
          : -1;
      let zValue = 0;
      zValue =
        (clientX - parseFloat(getComputedStyle(element).left)) * isInLeft * 0.1;

      element.style.transform = `translateX(calc(-50% + ${
        -mousePosition.x * speedx
      }px)) translateY(calc(-50% + ${
        -mousePosition.y * speedy
      }px)) perspective(2300px) translateZ(${zValue * speedz}px) rotateY(${
        rotedeDegree * rotate
      }deg)`;
    });
  }
  // Função para atualizar a posição do mouse
  
  const handleMouseMove = (event) => {
    const { clientX, clientY } = event;
    setMousePosition({
      x: clientX - window.innerWidth / 2,
      y: clientY - window.innerHeight / 2,
    });
    update(clientX);
  };

  return (
    <div className="backgound-interative" onMouseMove={handleMouseMove}>
      <div className="vitage"></div>
      <img
        className="bg-img parallax"
        src={"/assets/image/background.png"}
        data-speedx="0.3"
        data-speedy="0.38"
        data-speedz="0"
        data-rotate="0"
      />
      <img
        className="fog-7 parallax"
        src={"/assets/image/fog_7.png"}
        data-speedx="0.27"
        data-speedy="0.32"
        data-speedz="0"
        data-rotate="0"
      />
      <img
        className="montain-10 parallax"
        src={"/assets/image/mountain_10.png"}
        data-speedx="0.195"
        data-speedy="0.305"
        data-speedz="0"
        data-rotate="0"
      />
      <img
        className="fog-6 parallax"
        src={"/assets/image/fog_6.png"}
        data-speedx="0.25"
        data-speedy="0.28"
        data-speedz="0"
        data-rotate="0"
      />
      <img
        className="montain-9 parallax"
        src={"/assets/image/mountain_9.png"}
        data-speedx="0.125"
        data-speedy="0.155"
        data-speedz="0.15"
        data-rotate="0.02"
      />
      <img
        className="montain-8 parallax"
        src={"/assets/image/mountain_8.png"}
        data-speedx="0.1"
        data-speedy="0.11"
        data-speedz="0.08"
        data-rotate="0"
      />
      <img
        className="fog-5 parallax"
        src={"/assets/image/fog_5.png"}
        data-speedx="0.105"
        data-speedz="0"
        data-rotate="0"
      />
      <img
        className="montain-7 parallax"
        src={"/assets/image/mountain_7.png"}
        data-speedx="0.065"
        data-speedy="0.101"
        data-speedz="0.06"
        data-rotate="0.02"
      />
      <div
        className="text parallax"
        data-speedx="0.07"
        data-speedy="0.07"
        data-speedz="0"
        data-rotate="0"
      >
        <h2>Sites</h2>
        <h1>Harrison</h1>
      </div>
      <img
        className="montain-6 parallax"
        src={"/assets/image/mountain_6.png"}
        data-speedx="0.135"
        data-speedy="0.05"
        data-speedz="0.05"
        data-rotate="0.12"
      />
      <img
        className="fog-4 parallax"
        src={"/assets/image/fog_4.png"}
        data-speedx="0.081"
        data-speedy="0.03"
        data-speedz="0"
        data-rotate="0"
      />
      <img
        className="montain-5 parallax"
        src={"/assets/image/mountain_5.png"}
        data-speedx="0.059"
        data-speedy="0.0201"
        data-speedz="0.13"
        data-rotate="0.15"
      />
      <img
        className="fog-3 parallax"
        src={"/assets/image/fog_3.png"}
        data-speedx="0.04"
        data-speedy="0.018"
        data-speedz="0"
        data-rotate="0"
      />
      <img
        className="montain-4 parallax"
        src={"/assets/image/mountain_4.png"}
        data-speedx="0.015"
        data-speedy="0.024"
        data-speedz="0.35"
        data-rotate="0.08"
      />
      <img
        className="montain-3 parallax"
        src={"/assets/image/mountain_3.png"}
        data-speedx="0.0235"
        data-speedy="0.018"
        data-speedz="0.32"
        data-rotate="0.11"
      />
      <img
        className="fog-2 parallax"
        src={"/assets/image/fog_2.png"}
        data-speedx="0.027"
        data-speedy="0.0115"
        data-speedz="0"
        data-rotate="0"
      />
      <img className="sun-rays parallax" src={"/assets/image/sun_rays.png"} />
      <img
        className="black-shadow parallax"
        src={"/assets/image/black_shadow.png"}
      />
      <img
        className="montain-2 parallax"
        src={"/assets/image/mountain_2.png"}
        data-speedx="0.027"
        data-speedy="0.018"
        data-speedz="0.42"
        data-rotate="0.15"
      />
      <img
        className="montain-1 parallax"
        src={"/assets/image/mountain_1.png"}
        data-speedx="0.012"
        data-speedy="0.015"
        data-speedz="0.53"
        data-rotate="0.2"
      />
      <img
        className="fog-1 parallax"
        src={"/assets/image/fog_1.png"}
        data-speedx="0.03"
        data-speedy="0.01"
        data-speedz="0"
        data-rotate="0"
      />
    </div>
  );
}

export default BackgoundInterative;
