import { useEffect } from "react";

const CursorFollower = () => {
  useEffect(() => {
    let lastEmitTime = 0; 

    const createStar = (x, y) => {
      const star = document.createElement("div");
      star.className = "magic-star";
      document.body.appendChild(star);

      const size = Math.random() * 8 + 8; 
      const rotation = Math.random() * 360;
      star.style.width = `${size}px`;
      star.style.height = `${size}px`;
      star.style.left = `${x}px`;
      star.style.top = `${y}px`;
      star.style.transform = `rotate(${rotation}deg) scale(1)`;

      requestAnimationFrame(() => {
        setTimeout(() => {
          star.style.opacity = "0";
          star.style.transform = `rotate(${rotation}deg) scale(2)`;
        }, 100);
      });

      setTimeout(() => star.remove(), 700);
    };

    const handleMouseMove = (e) => {
      const now = Date.now();
      if (now - lastEmitTime < 65) return; // Delay of 80ms before emitting another star
      lastEmitTime = now;

      const offsetX = Math.random() * 20 - 10;
      const offsetY = Math.random() * 20 - 10;
      createStar(e.clientX + offsetX, e.clientY + offsetY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <style>
      {`
        .magic-star {
          position: fixed;
          background: radial-gradient(circle, #00aaff, #0044ff);
          clip-path: polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 
            50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%);
          width: 10px;
          height: 10px;
          pointer-events: none;
          opacity: 1;
          transition: opacity 0.7s ease-out, transform 0.7s ease-out;
          filter: drop-shadow(0 0 12px rgba(0, 170, 255, 0.8));
          z-index: 9999;
        }
      `}
    </style>
  );
};

export default CursorFollower;
