type Entree = {
    name: string;
    ingredients: EntreeIngredients
}

type EntreeIngredients = {
    rice?: Ingredient[];
    beans?: Ingredient[];
    protein: Ingredient[];
    addition: Ingredient[];
    sauce: Ingredient[];
}

type Ingredient = {
    name: string
    vegetarian: boolean
}

const entrees: Entree[] = [
    {name: 'bowl', ingredients: {rice: [], beans: [], protein: [], addition: [{name: 'cheese', vegetarian: true}, {name: 'pico', vegetarian: true}], sauce: [{name: 'tomatillo salsa', vegetarian: true}]}},
    {name: 'burrito', ingredients: {rice: [], beans: [], protein: [], addition: [{name: 'cheese', vegetarian: true}, {name: 'pico', vegetarian: true}], sauce: [{name: 'tomatillo salsa', vegetarian: true}]}},
    {name: 'cali burrito', ingredients: {protein: [], addition: [{name: 'cheese', vegetarian: true}, {name: 'pico', vegetarian: true}, {name: 'guacamole', vegetarian: true}], sauce: [{name: 'tomatillo salsa', vegetarian: true}, {name: 'sour cream', vegetarian: true}]}},
    {name: 'enchilada', ingredients: {rice: [], beans: [], protein: [], addition: [{name: 'cheese', vegetarian: true}, {name: 'pico', vegetarian: true}, {name: 'guacamole', vegetarian: true}], sauce: [{name: 'tomatillo salsa', vegetarian: true}, {name: 'sour cream', vegetarian: true}]}},
    {name: 'hard taco', ingredients: {protein: [], addition: [{name: 'cheese', vegetarian: true}, {name: 'pico', vegetarian: true}, {name: 'lettuce', vegetarian: true}], sauce: [{name: 'tomatillo salsa', vegetarian: true}]}},
    {name: 'nacho', ingredients: {beans: [], protein: [], addition: [{name: 'cheese', vegetarian: true}, {name: 'pico', vegetarian: true}, {name: 'guacamole', vegetarian: true}], sauce: [{name: 'tomatillo salsa', vegetarian: true}]}},
    {name: 'nacho fries', ingredients: {protein: [], addition: [{name: 'cheese', vegetarian: true}, {name: 'pico', vegetarian: true}, {name: 'guacamole', vegetarian: true}], sauce: [{name: 'tomatillo salsa', vegetarian: true}, {name: 'sour cream', vegetarian: true}]}},
    {name: 'quesadilla', ingredients: {protein: [], addition: [{name: 'cheese', vegetarian: true}], sauce: []}},
    {name: 'salad', ingredients: {protein: [], addition: [{name: 'pico', vegetarian: true}, {name: 'lettuce', vegetarian: true}], sauce: [{name: 'chipotle mayo', vegetarian: true}]}},
    {name: 'soft taco', ingredients: {protein: [], addition: [{name: 'cheese', vegetarian: true}, {name: 'pico', vegetarian: true}, {name: 'lettuce', vegetarian: true}], sauce: [{name: 'tomatillo salsa', vegetarian: true}]}}
];

const ingredients: Record<string, Ingredient[]> = {
    'rice': [{name: 'brown rice', vegetarian: true}, {name: 'white rice', vegetarian: true}],
    'beans': [{name: 'black beans', vegetarian: true}, {name: 'pinto beans', vegetarian: true}],
    'protein': [
        {name: 'brisket', vegetarian: false},
        {name: 'chicken tenders', vegetarian: false},
        {name: 'grilled chicken', vegetarian: false},
        {name: 'ground beef', vegetarian: false},
        {name: 'pork', vegetarian: false},
        {name: 'sauteed vegetables', vegetarian: true},
        {name: 'shitake mushroom', vegetarian: true}
    ],
    'addition': [
        {name: 'cheese', vegetarian: true},
        {name: 'coriander', vegetarian: true},
        {name: 'crushed corn chips', vegetarian: true},
        {name: 'diced onions', vegetarian: true},
        {name: 'fresh jalapenos', vegetarian: true},
        {name: 'guacamole', vegetarian: true},
        {name: 'lettuce', vegetarian: true},
        {name: 'pico', vegetarian: true},
        {name: 'pickled jalapenos', vegetarian: true},
        {name: 'queso', vegetarian: true},
        {name: 'seasoned corn', vegetarian: true}
    ],
    'sauce': [
        {name: 'chipotle mayo', vegetarian: true},
        {name: 'chimi mayo', vegetarian: true},
        {name: 'habanero sauce', vegetarian: true},
        {name: 'herb mayo', vegetarian: true},
        {name: 'jalapeno ketchup', vegetarian: true},
        {name: 'ketchup', vegetarian: true},
        {name: 'roasted jalapeno salsa', vegetarian: true},
        {name: 'smokey chipotle salsa', vegetarian: true},
        {name: 'sour cream', vegetarian: true},
        {name: 'tomatillo salsa', vegetarian: true}
    ]
}

function selectRandomElement<T>(list: T[]): T {
  const randomIndex = Math.floor(Math.random() * list.length);
  return list[randomIndex];
}

function createOrderString(entree: Entree, selected_ingredients: Ingredient[]): string {
    let order = `Your order is a ${entree.name} with`
    for (let i = 0; i < selected_ingredients.length - 1; i++) {
        order += ` ${selected_ingredients[i].name},`
    }
    order += ` and ${selected_ingredients[selected_ingredients.length - 1].name}.`
    return order
}

export function randomiseOrder(): string {
    const entree = selectRandomElement(entrees)
    const selected_ingredients: Ingredient[] = []
    for (const [category, entree_ingredients] of Object.entries(entree.ingredients)) {
        let selected_ingredient = selectRandomElement(ingredients[category])
        while (true) {
            if (!entree_ingredients.includes(selected_ingredient)){
                selected_ingredients.push(selected_ingredient)
                break
            }
            else {
                selected_ingredient = selectRandomElement(ingredients[category])
            }
        }
        entree_ingredients.push(selected_ingredient)
    }
    return createOrderString(entree, selected_ingredients)
}