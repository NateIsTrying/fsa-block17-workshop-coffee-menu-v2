// const coffeeMenu = require(`./coffeeData.js`);
const coffeeMenu = require(`./coffeeData.js`);

// 2. Print an array of all the drinks on the menu.
const drinkNames = (drinks) => {
    return drinks.name;
}

const justDrinkNames = coffeeMenu.map(drinkNames);
// console.log(justDrinkNames);


// 3. Print an array of drinks that cost 5 and under.
const fiveAndUnder = (drinks) => {
    return drinks.price <= 5;
    // return drinks.price <= 5;
}

const costsFiveAndUnder = coffeeMenu.filter(fiveAndUnder);
const fiveAndUnderNames = costsFiveAndUnder.map(drink => drink.name);
// console.log(fiveAndUnderNames);
// console.log(costsFiveAndUnder);


// 4. Print an array of drinks that are priced at an even number.
const evenPricedDrinks = (drinks) => {
    return drinks.price % 2 === 0;
}

const evenPricedObjects = coffeeMenu.filter(evenPricedDrinks);
const evenPricedNames = evenPricedObjects.map(drinks => drinks.name);
// console.log(evenPricedNames);
// console.log(evenPricedObjects);


// 5. Print the total if you were to order one of every drink.
const drinkCost = (total, drinks) => {
    // console.log(`Current Drink Cost: $${total}.00`);
    return total += drinks.price;
}

const totalDrinkCost = coffeeMenu.reduce(drinkCost, 0);
// console.log(`$${totalDrinkCost}.00`);


// 6. Print an array with all the drinks that are seasonal.
const seasonalDrinks = (drinks) => {
    return drinks.seasonal === true;
}

const seasonDrinksObjects = coffeeMenu.filter(seasonalDrinks);
// console.log(seasonDrinksObjects);
const seasonDrinksNames = seasonDrinksObjects.map(drinks => drinks.name);
// console.log(seasonDrinksNames);


// 7. Print all the seasonal drinks with the words "with 
// imported beans" after the item name. For example: 
// "affogato with imported beans".

const withBeans = seasonDrinksObjects.map(drinks => `${drinks.name} with imported beans`);
console.log(withBeans);
const withBeans2 = seasonDrinksNames.map(drinks => `${drinks} with imported beans`);
console.log(withBeans2);