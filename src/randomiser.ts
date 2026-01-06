import type { Ingredient } from "./ingredients";
import { ingredients } from "./ingredients";
import type { Entree } from "./entrees";
import { entrees } from "./entrees";

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
