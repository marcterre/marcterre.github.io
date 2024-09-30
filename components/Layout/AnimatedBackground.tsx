"use client";
import { FunctionComponent, useEffect, useRef } from "react";

type AnimatedBackgroundProps = {
  children: React.ReactNode;
};

const AnimatedBackground: FunctionComponent<AnimatedBackgroundProps> = ({
  children,
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const fontSize = 10;
    const columns = canvas.width / fontSize;

    const drops: number[] = [];
    for (let i = 0; i < columns; i++) {
      drops[i] = 1;
    }

    const matrix =
      "アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン";

    function draw() {
      if (!ctx || !canvas) return;
      ctx.fillStyle = "rgba(0, 0, 0, 0.03)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = "rgba(255, 0, 255, 0.3)";
      ctx.font = fontSize + "px monospace";

      for (let i = 0; i < drops.length; i++) {
        const text = matrix[Math.floor(Math.random() * matrix.length)];
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }

        drops[i]++;
      }
    }

    const intervalId = setInterval(draw, 33);

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);

    return () => {
      clearInterval(intervalId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="bg-black absolute overflow-hidden relative h-screen w-screen text-pink-500 flex flex-col justify-between p-8 overflow-hidden relative">
      <canvas ref={canvasRef} className="absolute inset-0 z-0" />
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-cyberpunk-radial pointer-events-none z-1"></div>
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-cyberpunk-linear bg-scanline animate-scanline pointer-events-none z-2"></div>
      {children}
    </div>
  );
};

export default AnimatedBackground;
