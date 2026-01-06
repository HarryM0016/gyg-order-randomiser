import type { Ingredient } from "./ingredients";

export type Entree = {
  name: string;
  ingredients: EntreeIngredients;
  // isBreakfast: boolean
};

type EntreeIngredients = {
  rice?: Ingredient[];
  beans?: Ingredient[];
  protein: Ingredient[];
  addition: Ingredient[];
  sauce: Ingredient[];
};

export const entrees: Entree[] = [
  {
    name: "bowl",
    ingredients: {
      rice: [],
      beans: [],
      protein: [],
      addition: [
        { name: "cheese", isVegetarian: true },
        { name: "pico", isVegetarian: true },
      ],
      sauce: [{ name: "tomatillo salsa", isVegetarian: true }],
    },
  },
  {
    name: "burrito",
    ingredients: {
      rice: [],
      beans: [],
      protein: [],
      addition: [
        { name: "cheese", isVegetarian: true },
        { name: "pico", isVegetarian: true },
      ],
      sauce: [{ name: "tomatillo salsa", isVegetarian: true }],
    },
  },
  {
    name: "cali burrito",
    ingredients: {
      protein: [],
      addition: [
        { name: "cheese", isVegetarian: true },
        { name: "pico", isVegetarian: true },
        { name: "guacamole", isVegetarian: true },
      ],
      sauce: [
        { name: "tomatillo salsa", isVegetarian: true },
        { name: "sour cream", isVegetarian: true },
      ],
    },
  },
  {
    name: "enchilada",
    ingredients: {
      rice: [],
      beans: [],
      protein: [],
      addition: [
        { name: "cheese", isVegetarian: true },
        { name: "pico", isVegetarian: true },
        { name: "guacamole", isVegetarian: true },
      ],
      sauce: [
        { name: "tomatillo salsa", isVegetarian: true },
        { name: "sour cream", isVegetarian: true },
      ],
    },
  },
  {
    name: "hard taco",
    ingredients: {
      protein: [],
      addition: [
        { name: "cheese", isVegetarian: true },
        { name: "pico", isVegetarian: true },
        { name: "lettuce", isVegetarian: true },
      ],
      sauce: [{ name: "tomatillo salsa", isVegetarian: true }],
    },
  },
  {
    name: "nacho",
    ingredients: {
      beans: [],
      protein: [],
      addition: [
        { name: "cheese", isVegetarian: true },
        { name: "pico", isVegetarian: true },
        { name: "guacamole", isVegetarian: true },
      ],
      sauce: [{ name: "tomatillo salsa", isVegetarian: true }],
    },
  },
  {
    name: "nacho fries",
    ingredients: {
      protein: [],
      addition: [
        { name: "cheese", isVegetarian: true },
        { name: "pico", isVegetarian: true },
        { name: "guacamole", isVegetarian: true },
      ],
      sauce: [
        { name: "tomatillo salsa", isVegetarian: true },
        { name: "sour cream", isVegetarian: true },
      ],
    },
  },
  {
    name: "quesadilla",
    ingredients: {
      protein: [],
      addition: [{ name: "cheese", isVegetarian: true }],
      sauce: [],
    },
  },
  {
    name: "salad",
    ingredients: {
      protein: [],
      addition: [
        { name: "pico", isVegetarian: true },
        { name: "lettuce", isVegetarian: true },
      ],
      sauce: [{ name: "chipotle mayo", isVegetarian: true }],
    },
  },
  {
    name: "soft taco",
    ingredients: {
      protein: [],
      addition: [
        { name: "cheese", isVegetarian: true },
        { name: "pico", isVegetarian: true },
        { name: "lettuce", isVegetarian: true },
      ],
      sauce: [{ name: "tomatillo salsa", isVegetarian: true }],
    },
  },
];