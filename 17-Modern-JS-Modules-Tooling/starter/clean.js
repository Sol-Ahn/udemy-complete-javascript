"strict mode";

const budget = Object.freeze([
	{ value: 250, description: "Sold old TV 📺", user: "sol" },
	{ value: -45, description: "Groceries 🥑", user: "sol" },
	{ value: 3500, description: "Monthly salary 👩‍💻", user: "sol" },
	{ value: 300, description: "Freelancing 👩‍💻", user: "sol" },
	{ value: -1100, description: "New iPhone 📱", user: "sol" },
	{ value: -20, description: "Candy 🍭", user: "jane" },
	{ value: -125, description: "Toys 🚂", user: "jane" },
	{ value: -1800, description: "New Laptop 💻", user: "sol" },
]);

const spendingLimits = Object.freeze({
	sol: 1500,
	jane: 100,
});
// spendingLimits.jay = 200; // does not work

// const limit = spendingLimits[user] ? spendingLimits[user] : 0;
const getLimit = (limits, user) => limits?.[user] ?? 0;

// Pure function
const addExpense = function (state, limits, value, description, user = "sol") {
	const cleanUser = user.toLowerCase();

	return value <= getLimit(limits, cleanUser)
		? [...state, { value: -value, description, user: cleanUser }]
		: state;
};

const newBudget1 = addExpense(budget, spendingLimits, 10, "Pizza 🍕");
const newBudget2 = addExpense(
	newBudget1,
	spendingLimits,
	100,
	"movies 🍿",
	"Jane"
);
const newBudget3 = addExpense(newBudget2, spendingLimits, 200, "Stuff", "Jay");

// const checkExpenses2 = function (state, limits) {
// 	return state.map((entry) => {
// 		return entry.value < -getLimit(limits, entry.user)
// 			? { ...entry, flag: "limit" }
// 			: entry;
// 	});

// 	// for (const entry of newBudget3)
// 	// 	if (entry.value < -getLimit(limits, entry.user)) entry.flag = "limit";
// };

const checkExpenses = (state, limits) =>
	state.map((entry) =>
		entry.value < -getLimit(limits, entry.user)
			? { ...entry, flag: "limit" }
			: entry
	);

const finalBudget = checkExpenses(newBudget3, spendingLimits);
console.log(finalBudget);

// Impure function
const logBigExpenses = function (state, bigLimit) {
	const bigExpenses = state
		.filter((entry) => entry.value <= -bigLimit)
		.map((entry) => entry.description.slice(-2))
		.join(" / ");
	// .reduce((str, cur) => `${str} / ${cur.description.slice(-2)}`, "");

	console.log(bigExpenses);
};

logBigExpenses(finalBudget, 500);
