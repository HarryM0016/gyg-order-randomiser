export type Side = {
  name: string;
  image: string;
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
  },
  {
    name: "chicken tenders and fries",
    image: "/src/assets/images/sides/chicken-tenders-and-fries.png",
    isVegetarian: false,
    isBreakfast: false,
    isDinner: true,
  },
  {
    name: "chicken tenders",
    image: "/src/assets/images/sides/chicken-tenders.png",
    isVegetarian: false,
    isBreakfast: false,
    isDinner: true,
  },
  {
    name: "churros",
    image: "/src/assets/images/sides/churros.png",
    isVegetarian: true,
    isBreakfast: true,
    isDinner: true,
  },
  {
    name: "corn chips",
    image: "/src/assets/images/sides/corn-chips.png",
    isVegetarian: true,
    isBreakfast: false,
    isDinner: true,
  },
  {
    name: "fries",
    image: "/src/assets/images/sides/fries.png",
    isVegetarian: true,
    isBreakfast: false,
    isDinner: true,
  },
  {
    name: "guac and chips",
    image: "/src/assets/images/sides/guac-and-chips.png",
    isVegetarian: true,
    isBreakfast: false,
    isDinner: true,
  },
  {
    name: "queso fries",
    image: "/src/assets/images/sides/queso-fries.png",
    isVegetarian: true,
    isBreakfast: false,
    isDinner: false,
  },
  {
    name: "street corn",
    image: "/src/assets/images/sides/street-corn.png",
    isVegetarian: true,
    isBreakfast: false,
    isDinner: true,
  },
  {
    name: "toast",
    image: "/src/assets/images/sides/toast.png",
    isVegetarian: true,
    isBreakfast: true,
    isDinner: false,
  },
];
