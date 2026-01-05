type Entree = {
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

type Ingredient = {
  name: string;
  isVegetarian: boolean;
  // isBreakfast: boolean
};

const entrees: Entree[] = [
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

const ingredients: Record<string, Ingredient[]> = {
  rice: [
    { name: "brown rice", isVegetarian: true },
    { name: "white rice", isVegetarian: true },
  ],
  beans: [
    { name: "black beans", isVegetarian: true },
    { name: "pinto beans", isVegetarian: true },
  ],
  protein: [
    { name: "brisket", isVegetarian: false },
    { name: "chicken tenders", isVegetarian: false },
    { name: "grilled chicken", isVegetarian: false },
    { name: "ground beef", isVegetarian: false },
    { name: "pork", isVegetarian: false },
    { name: "sauteed vegetables", isVegetarian: true },
    { name: "shitake mushroom", isVegetarian: true },
  ],
  addition: [
    { name: "cheese", isVegetarian: true },
    { name: "coriander", isVegetarian: true },
    { name: "crushed corn chips", isVegetarian: true },
    { name: "diced onions", isVegetarian: true },
    { name: "fresh jalapenos", isVegetarian: true },
    { name: "guacamole", isVegetarian: true },
    { name: "lettuce", isVegetarian: true },
    { name: "pico", isVegetarian: true },
    { name: "pickled jalapenos", isVegetarian: true },
    { name: "queso", isVegetarian: true },
    { name: "seasoned corn", isVegetarian: true },
  ],
  sauce: [
    { name: "chipotle mayo", isVegetarian: true },
    { name: "chimi mayo", isVegetarian: true },
    { name: "habanero sauce", isVegetarian: true },
    { name: "herb mayo", isVegetarian: true },
    { name: "jalapeno ketchup", isVegetarian: true },
    { name: "ketchup", isVegetarian: true },
    { name: "roasted jalapeno salsa", isVegetarian: true },
    { name: "smokey chipotle salsa", isVegetarian: true },
    { name: "sour cream", isVegetarian: true },
    { name: "tomatillo salsa", isVegetarian: true },
  ],
};

function selectRandomElement<T>(list: T[]): T {
  const randomIndex = Math.floor(Math.random() * list.length);
  return list[randomIndex];
}

function isIngredientValid(
  selectedIngredient: Ingredient,
  entreeIngredients: Ingredient[],
): boolean {
  for (const entreeIngredient of entreeIngredients) {
    if (selectedIngredient.name == entreeIngredient.name) {
      return false;
    }
  }
  return true;
}

function createOrderString(
  entree: Entree,
  selectedIngredients: Ingredient[],
): string {
  let order = `Your order is a ${entree.name} with`;
  for (let i = 0; i < selectedIngredients.length - 1; i++) {
    order += ` ${selectedIngredients[i].name},`;
  }
  order += ` and ${selectedIngredients[selectedIngredients.length - 1].name}.`;
  return order;
}

export function randomiseOrder(isVegetarian: boolean): string {
  const entree = selectRandomElement(entrees);
  const selectedIngredients: Ingredient[] = [];

  for (const [category, entreeIngredients] of Object.entries(
    entree.ingredients,
  )) {
    let availableIngredients = ingredients[category].filter(
      (ingredient) => !isVegetarian || ingredient.isVegetarian,
    );

    if (availableIngredients.length === 0) {
      console.warn(
        `No isVegetarian options for category: ${category}. Skipping.`,
      );
      continue;
    }

    while (true) {
      let selectedIngredient = selectRandomElement(availableIngredients);

      if (isIngredientValid(selectedIngredient, entreeIngredients)) {
        selectedIngredients.push(selectedIngredient);
        break;
      }
    }
  }
  return createOrderString(entree, selectedIngredients);
}
