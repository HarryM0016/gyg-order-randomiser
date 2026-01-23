import { randomiseOrder, createOrderString } from "./randomiser";
import { describe, expect, test, vi } from "vitest";
import "@testing-library/jest-dom";

describe("randomiseOrder function", () => {
  vi.mock("../data/entrees", () => ({
    entrees: [
      {
        name: "breakfast burrito",
        image: "test",
        ingredients: {
          protein: [],
          addition: ["cheese", "a hash brown", "pico", "scrambled eggs"],
          sauce: [],
        },
        isBreakfast: true,
        isDinner: false,
      },
      {
        name: "burrito",
        image: "test",
        ingredients: {
          protein: [],
          addition: ["cheese", "pico"],
          sauce: ["tomatillo salsa"],
        },
        isBreakfast: false,
        isDinner: true,
      },
    ],
  }));
  vi.mock("../data/ingredients", () => ({
    ingredients: {
      protein: [
        {
          name: "bacon",
          image: "test",
          isVegetarian: false,
          isBreakfast: true,
          isDinner: false,
        },
        {
          name: "brisket",
          image: "test",
          isVegetarian: false,
          isBreakfast: false,
          isDinner: true,
        },
      ],
      addition: [
        {
          name: "guacamole",
          image: "test",
          isVegetarian: true,
          isBreakfast: true,
          isDinner: true,
        },
        {
          name: "seasoned corn",
          image: "test",
          isVegetarian: true,
          isBreakfast: false,
          isDinner: true,
        },
      ],
      sauce: [
        {
          name: "herb mayo",
          image: "test",
          isVegetarian: true,
          isBreakfast: true,
          isDinner: true,
        },
        {
          name: "tomatillo salsa",
          image: "test",
          isVegetarian: true,
          isBreakfast: false,
          isDinner: true,
        },
      ],
    },
  }));
  vi.mock("../data/sides", () => ({
    sides: [
      {
        name: "fries",
        image: "test",
        isBreakfast: false,
        isDinner: true,
      },
      {
        name: "a hash brown",
        image: "test",
        isBreakfast: true,
        isDinner: false,
      },
    ],
  }));
  vi.mock("../data/drinks", () => ({
    drinks: [{ name: "coke" }],
  }));

  test("Should select breakfast entree when isBreakfast is true", () => {
    const order = randomiseOrder(false, true, false);
    expect(order.entree.isBreakfast).toBe(true);
  });

  test("Should select breakfast ingredients when isBreakfast is true", () => {
    const order = randomiseOrder(false, true, false);

    for (let ingredient of order.ingredients) {
      expect(ingredient.isBreakfast).toBe(true);
    }
  });

  test("Should select vegetarian ingredients when isVegetarian is true", () => {
    const order = randomiseOrder(true, false, false);

    for (let ingredient of order.ingredients) {
      expect(ingredient.isVegetarian).toBe(true);
    }
  });

  test("Should skip category when there is no addable ingredients", () => {
    const order = randomiseOrder(true, true, false);

    const errorIngredient = order.ingredients[0];
    expect(errorIngredient.name).toBe("errorIngredient");
  });

  describe("createOrderString function", () => {
    test("Should add names of selected ingredients to order string", () => {
      const order = randomiseOrder(false, true, false);
      expect(createOrderString(order)).toBe(
        "Your order is a breakfast burrito with bacon, guacamole, and herb mayo.",
      );
    });

    test("Should add side when isMeal is true", () => {
      const order = randomiseOrder(false, false, true);
      expect(createOrderString(order)).toContain("fries");
    });

    test("Should add breakfast side when isBreakfast is true", () => {
      const order = randomiseOrder(false, true, true);
      expect(createOrderString(order)).toContain("a hash brown");
    });

    test("Should add drink when is Meal is true", () => {
      const order = randomiseOrder(false, false, true);
      expect(createOrderString(order)).toContain("coke");
    });
  });
});
