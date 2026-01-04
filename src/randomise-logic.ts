type Entree = {
    name: string;
    ingredients: Ingredient
}

type Ingredient = {
    rice?: string[];
    beans?: string[];
    protein: string[];
    addition: string[];
    sauce: string[];
}

const entrees: Entree[] = [
    {name: 'bowl', ingredients: {rice: [], beans: [], protein: [], addition: ['cheese', 'pico'], sauce: ['tomatillo salsa']}},
    {name: 'burrito', ingredients: {rice: [], beans: [], protein: [], addition: ['cheese', 'pico'], sauce: ['tomatillo salsa']}},
    {name: 'cali burrito', ingredients: {protein: [], addition: ['cheese', 'pico', 'guacamole'], sauce: ['tomatillo salsa', 'sour cream']}},
    {name: 'enchilada', ingredients: {rice: [], beans: [], protein: [], addition: ['cheese', 'pico', 'guacamole'], sauce: ['tomatillo salsa', 'sour cream']}},
    {name: 'hard taco', ingredients: {protein: [], addition: ['cheese', 'pico', 'lettuce'], sauce: ['tomatillo salsa']}},
    {name: 'nacho', ingredients: {beans: [], protein: [], addition: ['cheese', 'pico', 'guacamole'], sauce: ['tomatillo salsa']}},
    {name: 'nacho fries', ingredients: {protein: [], addition: ['cheese', 'pico', 'guacamole'], sauce: ['tomatillo salsa', 'sour cream']}},
    {name: 'quesadilla', ingredients: {protein: [], addition: ['cheese'], sauce: []}},
    {name: 'salad', ingredients: {protein: [], addition: ['pico', 'lettuce'], sauce: ['chipotle mayo']}},
    {name: 'soft taco', ingredients: {protein: [], addition: ['cheese', 'pico', 'lettuce'], sauce: ['tomatillo salsa']}}
];

const ingredients: Record<string, string[]> = {
    'rice': ['brown rice', 'white rice', 'white rice'],
    'beans': ['black beans', 'black beans', 'pinto beans'],
    'protein': ['brisket', 'chicken tenders', 'grilled chicken', 'ground beef', 'pork', 'sauteed vegetables', 'shitake mushroom'],
    'addition': ['cheese', 'coriander', 'crushed corn chips', 'diced onions', 'fresh jalapenos', 'guacamole', 'lettuce', 'pico', 'pickled jalapenos', 'queso', 'seasoned corn'],
    'sauce': ['chipotle mayo', 'chimi mayo', 'habanero sauce', 'herb mayo', 'jalapeno ketchup', 'ketchup', 'roasted jalapeno salsa', 'smokey chipotle salsa', 'sour cream', 'tomatillo salsa']

}

function selectRandomElement<T>(list: T[]): T {
  const randomIndex = Math.floor(Math.random() * list.length);
  return list[randomIndex];
}

function createOrderString(entree: Entree, selected_ingredients: string[]): string {
    let order = `Your order is a ${entree.name} with`
    for (let i = 0; i < selected_ingredients.length - 1; i++) {
        order += ` ${selected_ingredients[i]},`
    }
    order += ` and ${selected_ingredients[selected_ingredients.length - 1]}.`
    return order
}

export function randomiseOrder(): string {
    const entree = selectRandomElement(entrees)
    const selected_ingredients = []
    for (const [category, entree_ingredients] of Object.entries(entree.ingredients)) {
        var selected_ingredient = selectRandomElement(ingredients[category])
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