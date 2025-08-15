import { useEffect, useRef, useState } from "react";
import classes from "./NightSky.module.scss";

interface Star {
  id: number;
  x: number;
  y: number;
  size: number;
}

export const NightSky = () => {
  const starsRef = useRef<HTMLDivElement>(null);
  const stars2Ref = useRef<HTMLDivElement>(null);
  const [stars, setStars] = useState<Star[]>([]);
  const [starsLayer2, setStarsLayer2] = useState<Star[]>([]);

  useEffect(() => {
    // Layer 1 stars
    const starsArray: Star[] = Array.from({ length: 300 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 1.5 + 0.5,
    }));

    // Layer 2 stars (fewer, slightly faded)
    const stars2Array: Star[] = Array.from({ length: 150 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 1.5 + 0.5,
    }));

    setStars(starsArray);
    setStarsLayer2(stars2Array);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 20;
      const y = (e.clientY / window.innerHeight - 0.5) * 20;

      if (starsRef.current)
        starsRef.current.style.transform = `translate(${x}px, ${y}px)`;
      if (stars2Ref.current)
        stars2Ref.current.style.transform = `translate(${-x}px, ${-y}px)`;
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className={classes.nightSky}>
      <div className={classes.stars} ref={starsRef}>
        {stars.map((star) => (
          <div
            key={star.id}
            className={classes.star}
            style={{
              left: `${star.x}%`,
              top: `${star.y}%`,
              width: `${star.size}px`,
              height: `${star.size}px`,
            }}
          ></div>
        ))}
      </div>
      <div className={classes.starsLayer2} ref={stars2Ref}>
        {starsLayer2.map((star) => (
          <div
            key={star.id}
            className={classes.star}
            style={{
              left: `${star.x}%`,
              top: `${star.y}%`,
              width: `${star.size}px`,
              height: `${star.size}px`,
            }}
          ></div>
        ))}
      </div>
    </div>
  );
};
