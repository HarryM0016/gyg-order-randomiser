import type { Ingredient } from "./ingredients";
import { ingredients } from "./ingredients";
import type { Entree } from "./entrees";
import { entrees } from "./entrees";
import type { Side } from "./sides";
import { sides } from "./sides";
import type { Drink } from "./drinks";
import { drinks } from "./drinks";

export type Order = {
  entree: Entree;
  ingredients: Ingredient[]; // ^ Maybe don't make optional because it shouldn't be
  side?: Side;
  drink?: Drink;
  type: "order" | "meal";
};

function selectRandomElement<T>(list: T[]): T {
  const randomIndex = Math.floor(Math.random() * list.length);
  return list[randomIndex];
}

export function createOrderString(order: Order): string {
  let orderString = `Your ${order.type} is a ${order.entree.name} with`;
  for (let i = 0; i < order.ingredients.length - 1; i++) {
    orderString += ` ${order.ingredients[i].name},`;
  }

  if (order.side && order.drink) {
    orderString += ` and ${order.ingredients[order.ingredients.length - 1].name},`;
    orderString += ` with ${order.side.name}, and a ${order.drink.name}.`;
    return orderString;
  } else {
    orderString += ` and ${order.ingredients[order.ingredients.length - 1].name}.`;
    return orderString;
  }
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
        image: "/src/assets/logo.png",
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
    order.side = randomiseSide(isBreakfast);
    order.drink = randomiseDrink();
    order.type = "meal";
  }
  return order;
}
