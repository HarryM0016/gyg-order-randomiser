import React, { useEffect, useState } from "react";
import "../styles/App.css";
import type { Entree } from "../data/entrees";

interface VerticalCarouselProps {
  slides: Entree[];
  targetIndex?: number;
}

export default function VerticalCarousel({
  slides,
  targetIndex,
}: VerticalCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  const halfwayIndex = Math.ceil(slides.length / 2);

  const itemHeight = 120;

  const shuffleThreshold = halfwayIndex * itemHeight;

  const visibleStyleThreshold = shuffleThreshold / 2;

  useEffect(() => {
    if (targetIndex !== undefined && targetIndex !== activeIndex) {
      setActiveIndex(targetIndex);
    }
  }, [targetIndex, activeIndex]);

  const determinePlacement = (itemIndex: number) => {
    if (activeIndex === itemIndex) return 0;

    if (itemIndex >= halfwayIndex) {
      if (activeIndex > itemIndex - halfwayIndex) {
        return (itemIndex - activeIndex) * itemHeight;
      } else {
        return -(slides.length + activeIndex - itemIndex) * itemHeight;
      }
    }

    if (itemIndex > activeIndex) {
      return (itemIndex - activeIndex) * itemHeight;
    }

    if (itemIndex < activeIndex) {
      if ((activeIndex - itemIndex) * itemHeight >= shuffleThreshold) {
        return (slides.length - (activeIndex - itemIndex)) * itemHeight;
      }

      return -(activeIndex - itemIndex) * itemHeight;
    }
  };

  return (
    <div className="slot-inner-column">
      {slides.map((item, i) => (
        <img
          key={item.name}
          src={item.image ?? "/src/assets/images/placeholder.png"}
          alt={item.name}
          className="slot-image"
          style={{ transform: `translateY(${determinePlacement(i)}px)` }}
        />
      ))}
    </div>
  );
}
