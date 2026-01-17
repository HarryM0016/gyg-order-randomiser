import type { Ingredient } from "./ingredients";
import { ingredients } from "./ingredients";
import type { Entree } from "./entrees";
import { entrees } from "./entrees";
import type { Side } from "./sides";
import { sides } from "./sides";
import type { Drink } from "./drinks";
import { drinks } from "./drinks";

function selectRandomElement<T>(list: T[]): T {
  const randomIndex = Math.floor(Math.random() * list.length);
  return list[randomIndex];
}

export function createOrderString(
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

function createMealString(
  entree: Entree,
  selectedIngredients: Ingredient[],
  side: Side,
  drink: Drink,
): string {
  let meal = `Your meal is a ${entree.name} with`;
  for (let i = 0; i < selectedIngredients.length - 1; i++) {
    meal += ` ${selectedIngredients[i].name},`;
  }
  meal += ` and ${selectedIngredients[selectedIngredients.length - 1].name},`;
  meal += ` with ${side.name}, and a ${drink.name}.`;
  return meal;
}

function randomiseSide(isBreakfast: boolean): Side {
  const availableSides = isBreakfast
    ? sides.filter((side) => side.isBreakfast)
    : sides.filter((side) => side.isDinner);
  return selectRandomElement(availableSides);
}

function randomiseDrink(): Drink {
  return selectRandomElement(drinks);
}

export function randomiseOrder(
  isVegetarian: boolean,
  isBreakfast: boolean,
  isMeal: boolean,
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

    if (availableIngredients.length === 0) {
      console.log("Skipping category - no addable ingredients");
      const errorIngredient: Ingredient = {
        name: "errorIngredient",
        isVegetarian: false,
        isBreakfast: false,
        isDinner: false,
      };
      selectedIngredients.push(errorIngredient);
      continue;
    }

    while (true) {
      const selectedIngredient = selectRandomElement(availableIngredients);
      if (!entreeIngredientNames.includes(selectedIngredient.name)) {
        selectedIngredients.push(selectedIngredient);
        break;
      }
    }
  }

  if (isMeal) {
    return createMealString(
      selectedEntree,
      selectedIngredients,
      randomiseSide(isBreakfast),
      randomiseDrink(),
    );
  } else {
    return createOrderString(selectedEntree, selectedIngredients);
  }
}
