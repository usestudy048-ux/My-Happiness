
import React, { useEffect, useRef } from 'react';

const RosePetals: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;

    const petals: Petal[] = [];
    const petalCount = 45;

    class Petal {
      x: number;
      y: number;
      size: number;
      speed: number;
      swing: number;
      swingSpeed: number;
      rotation: number;
      rotationSpeed: number;
      color: string;

      constructor() {
        this.x = Math.random() * (canvas?.width || 1000);
        this.y = -50 - Math.random() * 500;
        this.size = 10 + Math.random() * 20;
        this.speed = 1 + Math.random() * 3;
        this.swing = Math.random() * 3;
        this.swingSpeed = 0.02 + Math.random() * 0.05;
        this.rotation = Math.random() * 360;
        this.rotationSpeed = (Math.random() - 0.5) * 2;
        
        const colors = ['#f43f5e', '#fb7185', '#be123c', '#ffffff'];
        this.color = colors[Math.floor(Math.random() * colors.length)];
      }

      update() {
        this.y += this.speed;
        this.x += Math.sin(this.y * this.swingSpeed) * this.swing;
        this.rotation += this.rotationSpeed;

        if (this.y > (canvas?.height || 1000) + 20) {
          this.y = -20;
          this.x = Math.random() * (canvas?.width || 1000);
        }
      }

      draw() {
        if (!ctx) return;
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate((this.rotation * Math.PI) / 180);
        
        ctx.beginPath();
        // Drawing a heart-ish petal shape
        ctx.moveTo(0, 0);
        ctx.bezierCurveTo(-this.size, -this.size, -this.size * 1.5, this.size / 2, 0, this.size);
        ctx.bezierCurveTo(this.size * 1.5, this.size / 2, this.size, -this.size, 0, 0);
        
        ctx.fillStyle = this.color;
        ctx.fill();
        ctx.restore();
      }
    }

    const init = () => {
      if (!canvas) return;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      for (let i = 0; i < petalCount; i++) {
        petals.push(new Petal());
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      petals.forEach((p) => {
        p.update();
        p.draw();
      });
      animationFrameId = requestAnimationFrame(animate);
    };

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    init();
    animate();
    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none z-40"
    />
  );
};

export default RosePetals;
