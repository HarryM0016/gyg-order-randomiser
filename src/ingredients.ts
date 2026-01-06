export type Ingredient = {
  name: string;
  isVegetarian: boolean;
  // isBreakfast: boolean
};

export const ingredients: Record<string, Ingredient[]> = {
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