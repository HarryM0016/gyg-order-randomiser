export type Entree = {
  name: string;
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
    ingredients: {
      rice: [],
      beans: [],
      protein: [],
      addition: ["cheese", "pico"],
      sauce: ["tomatillo salsa"],
    },
    isBreakfast: false,
    isDinner: true,
  },
  {
    name: "burrito",
    ingredients: {
      rice: [],
      beans: [],
      protein: [],
      addition: ["cheese", "pico"],
      sauce: ["tomatillo salsa"],
    },
    isBreakfast: false,
    isDinner: true,
  },
  {
    name: "cali burrito",
    ingredients: {
      protein: [],
      addition: ["cheese", "pico", "guacamole"],
      sauce: ["tomatillo salsa", "sour cream"],
    },
    isBreakfast: false,
    isDinner: true,
  },
  {
    name: "enchilada",
    ingredients: {
      rice: [],
      beans: [],
      protein: [],
      addition: ["cheese", "pico", "guacamole"],
      sauce: ["tomatillo salsa", "sour cream"],
    },
    isBreakfast: false,
    isDinner: true,
  },

  {
    name: "hard taco",
    ingredients: {
      protein: [],
      addition: ["cheese", "pico", "lettuce"],
      sauce: ["tomatillo salsa"],
    },
    isBreakfast: false,
    isDinner: true,
  },
  {
    name: "nacho",
    ingredients: {
      beans: [],
      protein: [],
      addition: ["cheese", "pico", "guacamole"],
      sauce: ["tomatillo salsa"],
    },
    isBreakfast: false,
    isDinner: true,
  },
  {
    name: "nacho fries",
    ingredients: {
      protein: [],
      addition: ["cheese", "pico", "guacamole"],
      sauce: ["tomatillo salsa", "sour cream"],
    },
    isBreakfast: false,
    isDinner: true,
  },
  {
    name: "quesadilla",
    ingredients: {
      protein: [],
      addition: ["cheese"],
      sauce: [],
    },
    isBreakfast: true,
    isDinner: true,
  },
  {
    name: "quesadilla plus",
    ingredients: {
      protein: [],
      addition: ["cheese", "guacamole", "pico"],
      sauce: ["sour cream"],
    },
    isBreakfast: true,
    isDinner: true,
  },
  {
    name: "salad",
    ingredients: {
      protein: [],
      addition: ["pico", "lettuce"],
      sauce: ["chipotle mayo"],
    },
    isBreakfast: false,
    isDinner: true,
  },
  {
    name: "soft taco",
    ingredients: {
      protein: [],
      addition: ["cheese", "pico", "lettuce"],
      sauce: ["tomatillo salsa"],
    },
    isBreakfast: false,
    isDinner: true,
  },
  {
    name: "breakfast bowl",
    ingredients: {
      protein: [],
      addition: ["cheese", "pico", "scrambled eggs"],
      sauce: [],
    },
    isBreakfast: true,
    isDinner: false,
  },
  {
    name: "breakfast burrito",
    ingredients: {
      protein: [],
      addition: ["cheese", "a hashbrown", "pico", "scrambled eggs"],
      sauce: [],
    },
    isBreakfast: true,
    isDinner: false,
  },
  {
    name: "breakfast taco",
    ingredients: {
      protein: [],
      addition: ["cheese", "pico", "scrambled eggs"],
      sauce: ["jalapeno ketchup"],
    },
    isBreakfast: true,
    isDinner: false,
  },
  {
    // Mayvbe make a side
    name: "guac on toast",
    ingredients: {
      addition: ["guacamole"],
      sauce: [],
    },
    isBreakfast: true,
    isDinner: false,
  },
];
