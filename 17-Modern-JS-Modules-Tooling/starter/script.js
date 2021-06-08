// Importing module
// import { addToCart, totalPrice as price, tq } from "./shoppingCart.js"; // hoisted
// addToCart("bread", 5);
// console.log(price, tq);

console.log("Importing module");
// console.log(shippingCost);

// import * as ShoppingCart from "./shoppingCart.js";
// ShoppingCart.addToCart("bread", 5);
// console.log(ShoppingCart.totalPrice);

// import add, { addToCart, totalPrice as price, tq } from "./shoppingCart.js";
// console.log(price);

import add, { cart } from "./shoppingCart.js";
add("pizza", 3);
add("banana", 8);
add("carrot", 2);

console.log(cart);

//////////////////////////////////////////////////////////

// Module Pattern
/* 
const ShoppingCart2 = (function () {
	const cart = [];
	const shippingCost = 10;
	const totalPrice = 729;
	const totalQuantity = 21;

	const addToCart = function (product, quantity) {
		cart.push({ product, quantity });
		console.log(
			`${quantity} ${product} added to cart (shipping cost is ${shippingCost})`
		);
	};

	const orderStock = function (product, quantity) {
		console.log(`${quantity} ${product} ordered from supplier`);
	};

	return {
		addToCart,
		cart,
		totalPrice,
		totalQuantity,
	};
})();

ShoppingCart2.addToCart("apple", 7);
ShoppingCart2.addToCart("pizza", 1);
console.log(ShoppingCart2);
console.log(ShoppingCart2.shippingCost); // undefined
*/

// CommonJS Modules
// Export
// export.addToCart =  function (product, quantity) {
// 		cart.push({ product, quantity });
// 		console.log(
// 			`${quantity} ${product} added to cart (shipping cost is ${shippingCost})`
// 		);
//   };

// import
// const {addToCart} = require("./shoppingCart.js")

// NPM
// import cloneDeep from "./node_modules/lodash-es/cloneDeep.js";
import cloneDeep from "lodash-es";

const state = {
	cart: [
		{ product: "bread", quantity: 3 },
		{ product: "pizza", quantity: 5 },
	],
	user: { loggedIn: true },
};

const stateClone = Object.assign({}, state);
const stateDeepClone = cloneDeep(state);
state.user.loggedIn = false;
console.log(stateClone);
console.log(stateDeepClone);

if (module.hot) {
	module.hot.accept();
}

class Person {
	greeting = "Hey";
	constructor(name) {
		this.name = name;
		console.log(`${this.greeting}, ${this.name}`);
	}
}
const sol = new Person("Sol");

console.log("Sol" ?? null);

console.log(cart.find((el) => el.quantity >= 2));
Promise.resolve("TEST").then((x) => console.log(x));

import "core-js";
// import "core-js/fn/array/find";
// import "core-js/fn/promise";

// Polifilling async functions
import "regenerator-runtime/runtime";
