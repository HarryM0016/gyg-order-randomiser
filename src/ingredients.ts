export type Ingredient = {
  name: string;
  isVegetarian: boolean;
  isBreakfast: boolean;
  isDinner: boolean;
};

export const ingredients: Record<string, Ingredient[]> = {
  rice: [
    {
      name: "brown rice",
      isVegetarian: true,
      isBreakfast: false,
      isDinner: true,
    },
    {
      name: "white rice",
      isVegetarian: true,
      isBreakfast: false,
      isDinner: true,
    },
  ],
  beans: [
    {
      name: "black beans",
      isVegetarian: true,
      isBreakfast: false,
      isDinner: true,
    },
    {
      name: "pinto beans",
      isVegetarian: true,
      isBreakfast: false,
      isDinner: true,
    },
  ],
  protein: [
    { name: "bacon", isVegetarian: false, isBreakfast: true, isDinner: false },
    {
      name: "brisket",
      isVegetarian: false,
      isBreakfast: false,
      isDinner: true,
    },
    {
      name: "chorizo",
      isVegetarian: false,
      isBreakfast: true,
      isDinner: false,
    },
    {
      name: "chicken tenders",
      isVegetarian: false,
      isBreakfast: false,
      isDinner: true,
    },
    {
      name: "grilled chicken",
      isVegetarian: false,
      isBreakfast: false,
      isDinner: true,
    },
    {
      name: "ground beef",
      isVegetarian: false,
      isBreakfast: false,
      isDinner: true,
    },
    { name: "pork", isVegetarian: false, isBreakfast: false, isDinner: true },
    {
      name: "sauteed vegetables",
      isVegetarian: true,
      isBreakfast: true,
      isDinner: true,
    },
    {
      name: "shitake mushroom",
      isVegetarian: true,
      isBreakfast: true,
      isDinner: true,
    },
  ],
  addition: [
    { name: "cheese", isVegetarian: true, isBreakfast: true, isDinner: true },
    {
      name: "coriander",
      isVegetarian: true,
      isBreakfast: true,
      isDinner: true,
    },
    {
      name: "crushed corn chips",
      isVegetarian: true,
      isBreakfast: false,
      isDinner: true,
    },
    {
      name: "diced onions",
      isVegetarian: true,
      isBreakfast: true,
      isDinner: true,
    },
    {
      name: "fresh jalapenos",
      isVegetarian: true,
      isBreakfast: true,
      isDinner: true,
    },
    {
      name: "guacamole",
      isVegetarian: true,
      isBreakfast: true,
      isDinner: true,
    },
    {
      name: "a hashbrown",
      isVegetarian: true,
      isBreakfast: true,
      isDinner: false,
    },
    { name: "lettuce", isVegetarian: true, isBreakfast: false, isDinner: true },
    { name: "pico", isVegetarian: true, isBreakfast: true, isDinner: true },
    {
      name: "pickled jalapenos",
      isVegetarian: true,
      isBreakfast: true,
      isDinner: true,
    },
    { name: "queso", isVegetarian: true, isBreakfast: false, isDinner: true },
    {
      name: "scrambled eggs",
      isVegetarian: true,
      isBreakfast: true,
      isDinner: false,
    },
    {
      name: "seasoned corn",
      isVegetarian: true,
      isBreakfast: false,
      isDinner: true,
    },
  ],
  sauce: [
    {
      name: "chipotle mayo",
      isVegetarian: true,
      isBreakfast: true,
      isDinner: true,
    },
    {
      name: "chimi mayo",
      isVegetarian: true,
      isBreakfast: true,
      isDinner: true,
    },
    {
      name: "habanero salsa",
      isVegetarian: true,
      isBreakfast: true,
      isDinner: true,
    },
    {
      name: "herb mayo",
      isVegetarian: true,
      isBreakfast: true,
      isDinner: true,
    },
    {
      name: "jalapeno ketchup",
      isVegetarian: true,
      isBreakfast: true,
      isDinner: true,
    },
    { name: "ketchup", isVegetarian: true, isBreakfast: true, isDinner: true },
    {
      name: "roasted jalapeno salsa",
      isVegetarian: true,
      isBreakfast: true,
      isDinner: true,
    },
    {
      name: "smokey chipotle salsa",
      isVegetarian: true,
      isBreakfast: true,
      isDinner: true,
    },
    {
      name: "sour cream",
      isVegetarian: true,
      isBreakfast: true,
      isDinner: true,
    },
    {
      name: "sweet chipotle bbq",
      isVegetarian: true,
      isBreakfast: true,
      isDinner: true,
    },
    {
      name: "tomatillo salsa",
      isVegetarian: true,
      isBreakfast: false,
      isDinner: true,
    },
  ],
};
