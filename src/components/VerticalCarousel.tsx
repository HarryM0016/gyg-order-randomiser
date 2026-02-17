import { useEffect, useState } from "react";
import "../styles/App.css";
import type { SlideItem } from "../data/types";

interface VerticalCarouselProps<T extends SlideItem> {
  slides: T[];
  targetIndex: number;
  spinTrigger?: number;
  onSpinEnd: () => void;
}

export default function VerticalCarousel<T extends SlideItem>({
  slides,
  targetIndex,
  spinTrigger,
  onSpinEnd,
}: VerticalCarouselProps<T>) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isSpinning, setIsSpinning] = useState(false);

  const halfwayIndex = Math.ceil(slides.length / 2);
  const itemHeight = 200;
  const shuffleThreshold = halfwayIndex * itemHeight;
  const visibleStyleThreshold = shuffleThreshold / 2;

  useEffect(() => {
    if (!isSpinning && targetIndex !== undefined) {
      setIsSpinning(true);

      let offset: number;
      if (targetIndex > activeIndex) {
        offset = targetIndex - activeIndex;
      } else {
        offset = slides.length - activeIndex + targetIndex;
      }

      const totalSteps = slides.length + offset;
      let currentStep = 0;

      const spinInterval = setInterval(() => {
        currentStep++;
        setActiveIndex((prevIndex) => (prevIndex + 1) % slides.length);

        if (currentStep >= totalSteps) {
          clearInterval(spinInterval);
          setIsSpinning(false);
          onSpinEnd();
        }
      }, 150);

      return () => clearInterval(spinInterval);
    }
  }, [slides.length, spinTrigger]);

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
    return 0;
  };

  return (
    <div className="slot-inner-column">
      {slides.map((item, i) => (
        <img
          key={item.index}
          src={item.image ?? "/src/assets/images/placeholder.png"}
          alt={item.name}
          className={[
            "slot-image",
            activeIndex === i && "active",
            Math.abs(determinePlacement(i)) <= visibleStyleThreshold &&
              "visible",
          ]
            .filter(Boolean)
            .join(" ")}
          style={{ transform: `translateY(${determinePlacement(i)}px)` }}
        />
      ))}
    </div>
  );
}
