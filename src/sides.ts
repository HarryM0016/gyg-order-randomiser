export type Side = {
  name: string;
  isBreakfast: boolean;
  isDinner: boolean;
};

export const sides: Side[] = [
  {
    name: "chicken tenders",
    isBreakfast: false,
    isDinner: true,
  },
  {
    name: "churros",
    isBreakfast: false,
    isDinner: true,
  },
  {
    name: "corn chips",
    isBreakfast: false,
    isDinner: true,
  },
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
  {
    name: "queso fries",
    isBreakfast: false,
    isDinner: false,
  },
  {
    name: "street corn",
    isBreakfast: false,
    isDinner: true,
  },
];
