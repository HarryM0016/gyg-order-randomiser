import type { Order } from "../utils/randomiser";

export const defaultOrder: Order = {
  entree: {
    name: "burrito",
    image: "/src/assets/images/entrees/burrito.png",
    ingredients: {
      protein: [],
      addition: ["cheese", "pico"],
      sauce: ["tomatillo salsa"],
    },
    isBreakfast: false,
    isDinner: true,
    index: 1
  },
  ingredients: [
    {
      name: "white rice",
      image: "/src/assets/images/ingredients/rice/white-rice.png",
      isVegetarian: true,
      isBreakfast: false,
      isDinner: true,
      index: 1,
    },
    {
      name: "black beans",
      image: "/src/assets/images/ingredients/beans/black-beans.png",
      isVegetarian: true,
      isBreakfast: false,
      isDinner: true,
      index: 0,
    },
    {
      name: "brisket",
      image: "/src/assets/images/ingredients/protein/brisket.png",
      isVegetarian: false,
      isBreakfast: false,
      isDinner: true,
      index: 1,
    },
    {
      name: "guacamole",
      image: "/src/assets/images/ingredients/addition/guacamole.png",
      isVegetarian: true,
      isBreakfast: true,
      isDinner: true,
      index: 5,
    },
    {
      name: "sour cream",
      image: "/src/assets/images/ingredients/sauce/sour-cream.png",
      isVegetarian: true,
      isBreakfast: true,
      isDinner: true,
      index: 7,
    },
  ],
  type: "order",
};
