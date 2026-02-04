import type { SlideItem } from "./types";

export type Side = SlideItem & {
  isVegetarian: boolean;
  isBreakfast: boolean;
  isDinner: boolean;
};

export const sides: Side[] = [
  {
    name: "a hash brown",
    image: "/src/assets/images/sides/hash-brown.png",
    isVegetarian: true,
    isBreakfast: true,
    isDinner: false,
    index: 0,
  },
  {
    name: "chicken tenders and fries",
    image: "/src/assets/images/sides/chicken-tenders-and-fries.png",
    isVegetarian: false,
    isBreakfast: false,
    isDinner: true,
    index: 1,
  },
  {
    name: "chicken tenders",
    image: "/src/assets/images/sides/chicken-tenders.png",
    isVegetarian: false,
    isBreakfast: false,
    isDinner: true,
    index: 2,
  },
  {
    name: "churros",
    image: "/src/assets/images/sides/churros.png",
    isVegetarian: true,
    isBreakfast: true,
    isDinner: true,
    index: 3,
  },
  {
    name: "corn chips",
    image: "/src/assets/images/sides/corn-chips.png",
    isVegetarian: true,
    isBreakfast: false,
    isDinner: true,
    index: 4,
  },
  {
    name: "fries",
    image: "/src/assets/images/sides/fries.png",
    isVegetarian: true,
    isBreakfast: false,
    isDinner: true,
    index: 5,
  },
  {
    name: "guac and chips",
    image: "/src/assets/images/sides/guac-and-chips.png",
    isVegetarian: true,
    isBreakfast: false,
    isDinner: true,
    index: 6,
  },
  {
    name: "queso fries",
    image: "/src/assets/images/sides/queso-fries.png",
    isVegetarian: true,
    isBreakfast: false,
    isDinner: false,
    index: 7,
  },
  {
    name: "street corn",
    image: "/src/assets/images/sides/street-corn.png",
    isVegetarian: true,
    isBreakfast: false,
    isDinner: true,
    index: 8,
  },
  {
    name: "toast",
    image: "/src/assets/images/sides/toast.png",
    isVegetarian: true,
    isBreakfast: true,
    isDinner: false,
    index: 9,
  },
];
