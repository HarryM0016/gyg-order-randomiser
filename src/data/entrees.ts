import type { SlideItem } from "./types";

export type Entree = SlideItem & {
  ingredients: EntreeIngredients;
  isBreakfast: boolean;
  isDinner: boolean;
};

type EntreeIngredients = {
  rice?: string[];
  beans?: string[];
  protein?: string[];
  addition: string[];
  sauce: string[];
};

export const entrees: Entree[] = [
  {
    name: "bowl",
    image: "/src/assets/images/entrees/bowl.png",
    ingredients: {
      rice: [],
      beans: [],
      protein: [],
      addition: ["cheese", "pico"],
      sauce: ["tomatillo salsa"],
    },
    isBreakfast: false,
    isDinner: true,
    index: 0,
  },
  {
    name: "burrito",
    image: "/src/assets/images/entrees/burrito.png",
    ingredients: {
      rice: [],
      beans: [],
      protein: [],
      addition: ["cheese", "pico"],
      sauce: ["tomatillo salsa"],
    },
    isBreakfast: false,
    isDinner: true,
    index: 1,
  },
  {
    name: "cali burrito",
    image: "/src/assets/images/entrees/cali-burrito.png",
    ingredients: {
      protein: [],
      addition: ["cheese", "pico", "guacamole"],
      sauce: ["tomatillo salsa", "sour cream"],
    },
    isBreakfast: false,
    isDinner: true,
    index: 2,
  },
  {
    name: "enchilada",
    image: "/src/assets/images/entrees/enchilada.png",
    ingredients: {
      rice: [],
      beans: [],
      protein: [],
      addition: ["cheese", "pico", "guacamole"],
      sauce: ["tomatillo salsa", "sour cream"],
    },
    isBreakfast: false,
    isDinner: true,
    index: 3,
  },

  {
    name: "hard taco",
    image: "/src/assets/images/entrees/hard-taco.png",
    ingredients: {
      protein: [],
      addition: ["cheese", "pico", "lettuce"],
      sauce: ["tomatillo salsa"],
    },
    isBreakfast: false,
    isDinner: true,
    index: 4,
  },
  {
    name: "nachos",
    image: "/src/assets/images/entrees/nachos.png",
    ingredients: {
      beans: [],
      protein: [],
      addition: ["cheese", "pico", "guacamole"],
      sauce: ["tomatillo salsa"],
    },
    isBreakfast: false,
    isDinner: true,
    index: 5,
  },
  {
    name: "nacho fries",
    image: "/src/assets/images/entrees/nacho-fries.png",
    ingredients: {
      protein: [],
      addition: ["cheese", "pico", "guacamole"],
      sauce: ["tomatillo salsa", "sour cream"],
    },
    isBreakfast: false,
    isDinner: true,
    index: 6,
  },
  {
    name: "quesadilla",
    image: "/src/assets/images/entrees/quesadilla.png",
    ingredients: {
      protein: [],
      addition: ["cheese"],
      sauce: [],
    },
    isBreakfast: true,
    isDinner: true,
    index: 7,
  },
  {
    name: "quesadilla plus",
    image: "/src/assets/images/entrees/quesadilla-plus.png",
    ingredients: {
      protein: [],
      addition: ["cheese", "guacamole", "pico"],
      sauce: ["sour cream"],
    },
    isBreakfast: true,
    isDinner: true,
    index: 8,
  },
  {
    name: "soft taco",
    image: "/src/assets/images/entrees/soft-taco.png",
    ingredients: {
      protein: [],
      addition: ["cheese", "pico", "lettuce"],
      sauce: ["tomatillo salsa"],
    },
    isBreakfast: false,
    isDinner: true,
    index: 9,
  },
  {
    name: "avocado toast",
    image: "/src/assets/images/entrees/avocado-toast.png",
    ingredients: {
      addition: [],
      sauce: [],
    },
    isBreakfast: true,
    isDinner: false,
    index: 10,
  },
  {
    name: "breakfast bowl",
    image: "/src/assets/images/entrees/breakfast-bowl.png",
    ingredients: {
      protein: [],
      addition: ["cheese", "pico", "scrambled eggs"],
      sauce: [],
    },
    isBreakfast: true,
    isDinner: false,
    index: 11,
  },
  {
    name: "breakfast burrito",
    image: "/src/assets/images/entrees/breakfast-burrito.png",
    ingredients: {
      protein: [],
      addition: ["cheese", "a hash brown", "pico", "scrambled eggs"],
      sauce: [],
    },
    isBreakfast: true,
    isDinner: false,
    index: 12,
  },
  {
    name: "breakfast taco",
    image: "/src/assets/images/entrees/breakfast-taco.png",
    ingredients: {
      protein: [],
      addition: ["cheese", "pico", "scrambled eggs"],
      sauce: ["jalapeno ketchup"],
    },
    isBreakfast: true,
    isDinner: false,
    index: 13,
  },
  {
    name: "guac toast",
    image: "/src/assets/images/entrees/guac-toast.png",
    ingredients: {
      addition: ["guacamole"],
      sauce: [],
    },
    isBreakfast: true,
    isDinner: false,
    index: 14,
  },
];
