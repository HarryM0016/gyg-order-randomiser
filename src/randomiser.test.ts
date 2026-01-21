import {
  randomiseOrder,
  createOrderString,
} from "./randomiser";
import { describe, expect, test, vi } from "vitest";
import "@testing-library/jest-dom";

describe("randomiseOrder function", () => {
  vi.mock("./entrees", () => ({
    entrees: [
      {
        name: "breakfast burrito",
        ingredients: {
          protein: [],
          addition: ["cheese", "a hashbrown", "pico", "scrambled eggs"],
          sauce: [],
        },
        isBreakfast: true,
        isDinner: false,
      },
      {
        name: "burrito",
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
  vi.mock("./ingredients", () => ({
    ingredients: {
      protein: [
        {
          name: "bacon",
          isVegetarian: false,
          isBreakfast: true,
          isDinner: false,
        },
        {
          name: "brisket",
          isVegetarian: false,
          isBreakfast: false,
          isDinner: true,
        },
      ],
      addition: [
        {
          name: "guacamole",
          isVegetarian: true,
          isBreakfast: true,
          isDinner: true,
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
          name: "herb mayo",
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
    },
  }));
  vi.mock("./sides", () => ({
    sides: [
      {
        name: "fries",
        isBreakfast: false,
        isDinner: true,
      },
      {
        name: "a hashbrown",
        isBreakfast: true,
        isDinner: false,
      },
    ],
  }));
  vi.mock("./drinks", () => ({
    drinks: [
      {name: "coke"},
    ],
  }));

  test("Should select breakfast entree when isBreakfast is true", () => {
    const order = randomiseOrder(false, true, false);
    expect(order).toContain("breakfast burrito");
  });

  test("Should select breakfast ingredients when isBreakfast is true", () => {
    const order = randomiseOrder(false, true, false);
    expect(order).toContain("breakfast burrito");
    expect(order).toContain("bacon");
    expect(order).toContain("guacamole");
    expect(order).toContain("herb mayo");
  });

  test("Should skip category when there is no addable ingredients", () => {
    const order = randomiseOrder(true, true, false);
    expect(order).toContain("breakfast burrito");
    expect(order).toContain("errorIngredient");
    expect(order).toContain("guacamole");
    expect(order).toContain("herb mayo");
  });


describe("createOrderString function", () => {
  test("Should add names of selected ingredients to order string", () => {
    const result = randomiseOrder(false, true, false);
    expect(result).toBe(
      "Your order is a breakfast burrito with bacon, guacamole, and herb mayo.",
    );
  });
});

describe("randomiseSide function", () => {
  test("Should add side when isMeal is true", () => {
    const order = randomiseOrder(false, false, true);
    expect(order).toContain("fries")
  });
  test("Should add breakfast side when isBreakfast is true", () => {
    const order = randomiseOrder(false, true, true);
    expect(order).toContain("a hashbrown")
  })
});

describe("randomiseDrink function", () => {
  test("Should add drink when is Meal is true" , () => {
    const order = randomiseOrder(false, false, true);
    expect(order).toContain("coke")
  })
})

describe("createMenuString function", () => {
  test("Order string should contain a side and drink when isMeal is true", () => {
    const result = randomiseOrder(false, true, true);
    expect(result).toBe(
      "Your meal is a breakfast burrito with bacon, guacamole, and herb mayo, with a hashbrown, and a coke.",
    )
  })
})
});