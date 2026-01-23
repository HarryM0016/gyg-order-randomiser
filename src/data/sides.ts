export type Side = {
  name: string;
  image: string;
  isBreakfast: boolean;
  isDinner: boolean;
};

export const sides: Side[] = [
  {
    name: "a hash brown",
    image: "/src/assets/images/sides/hash-brown.png",
    isBreakfast: true,
    isDinner: false,
  },
  {
    name: "chicken tenders and fries",
    image: "/src/assets/images/sides/chicken-tenders-and-fries.png",
    isBreakfast: false,
    isDinner: true,
  },
  {
    name: "chicken tenders",
    image: "/src/assets/images/sides/chicken-tenders.png",
    isBreakfast: false,
    isDinner: true,
  },
  {
    name: "churros",
    image: "/src/assets/images/sides/churros.png",
    isBreakfast: true,
    isDinner: true,
  },
  {
    name: "corn chips",
    image: "/src/assets/images/sides/corn-chips.png",
    isBreakfast: false,
    isDinner: true,
  },
  {
    name: "fries",
    image: "/src/assets/images/sides/fries.png",
    isBreakfast: false,
    isDinner: true,
  },
  {
    name: "guac and chips",
    image: "/src/assets/images/sides/guac-and-chips.png",
    isBreakfast: false,
    isDinner: true,
  },
  {
    name: "queso fries",
    image: "/src/assets/images/sides/queso-fries.png",
    isBreakfast: false,
    isDinner: false,
  },
  {
    name: "street corn",
    image: "/src/assets/images/sides/street-corn.png",
    isBreakfast: false,
    isDinner: true,
  },
  {
    name: "toast",
    image: "/src/assets/images/sides/toast.png",
    isBreakfast: true,
    isDinner: false,
  },
];
