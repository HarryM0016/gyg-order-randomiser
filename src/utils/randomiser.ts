import type { Ingredient } from "../data/ingredients";
import type { Entree } from "../data/entrees";
import type { Side } from "../data/sides";
import type { Drink } from "../data/drinks";

import { ingredients } from "../data/ingredients";
import { entrees } from "../data/entrees";
import { sides } from "../data/sides";
import { drinks } from "../data/drinks";

export type Order = {
  entree: Entree;
  ingredients: Ingredient[];
  side?: Side;
  drink?: Drink;
  type: "order" | "meal";
};

function selectRandomElement<T>(list: T[]): T {
  const randomIndex = Math.floor(Math.random() * list.length);
  return list[randomIndex];
}

function randomiseSide(isBreakfast: boolean, isVegetarian: boolean): Side {
  let availableSides = isBreakfast
    ? sides.filter((side) => side.isBreakfast)
    : sides.filter((side) => side.isDinner);

  availableSides = availableSides.filter(
    (side) => !isVegetarian || side.isVegetarian,
  );

  return selectRandomElement(availableSides);
}

function randomiseDrink(): Drink {
  return selectRandomElement(drinks);
}

export function randomiseOrder(
  isVegetarian: boolean,
  isBreakfast: boolean,
  isMeal: boolean,
): Order {
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
        image: "/src/assets/images/placeholder.png",
        isVegetarian: true,
        isBreakfast: true,
        isDinner: true,
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

  const order: Order = {
    entree: selectedEntree,
    ingredients: selectedIngredients,
    type: "order",
  };
  if (isMeal) {
    order.side = randomiseSide(isBreakfast, isVegetarian);
    order.drink = randomiseDrink();
    order.type = "meal";
  }
  return order;
}

export function createOrderString(order: Order): string {
  let orderString = `Your ${order.type} is a ${order.entree.name} with`;
  for (let i = 0; i < order.ingredients.length - 1; i++) {
    orderString += ` ${order.ingredients[i].name},`;
  }

  if (order.side && order.drink) {
    orderString += ` and ${order.ingredients[order.ingredients.length - 1].name},`;
    orderString += ` with ${order.side.name}, and a ${order.drink.name}.`;
  } else {
    orderString += ` and ${order.ingredients[order.ingredients.length - 1].name}.`;
  }
  return orderString;
}
