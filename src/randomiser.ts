import type { Ingredient } from "./ingredients";
import { ingredients } from "./ingredients";
import type { Entree } from "./entrees";
import { entrees } from "./entrees";

function selectRandomElement<T>(list: T[]): T {
  const randomIndex = Math.floor(Math.random() * list.length);
  return list[randomIndex];
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

export function randomiseOrder(
  isVegetarian: boolean,
  isBreakfast: boolean,
): string {
  const availableEntrees = isBreakfast
    ? entrees.filter((entree) => entree.isBreakfast)
    : entrees.filter((entree) => entree.isDinner);
  const selectedEntree = selectRandomElement(availableEntrees);

  const selectedIngredients: Ingredient[] = [];

  for (const [category, entreeIngredientNames] of Object.entries(
    selectedEntree.ingredients,
  )) {
    let availableIngredients = isBreakfast
      ? ingredients[category].filter((ingredient) => ingredient.isBreakfast)
      : ingredients[category].filter((ingredient) => ingredient.isDinner);

    availableIngredients = availableIngredients.filter(
      (ingredient) => !isVegetarian || ingredient.isVegetarian,
    );

    while (true) {
      const selectedIngredient = selectRandomElement(availableIngredients);
      if (!entreeIngredientNames.includes(selectedIngredient.name)) {
        selectedIngredients.push(selectedIngredient);
        break;
      }
    }
  }
  return createOrderString(selectedEntree, selectedIngredients);
}
