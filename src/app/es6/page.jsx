"use client";

export default function main() {
  return (
    <div>
      <Double number={8} />
      <Drink />
      <Car {...car} />
      <FruitList />
      <App />
      <Button />
      <Stock stock={-3} />
      <Theme theme="#343434" />
    </div>
  );
}

// **Task:** Create an arrow function component called `Double` that accepts a `number` prop and returns the result of the number multiplied by 2 inside a `<span>`.
const Double = (prop) => <span>1/ {prop.number * 2}</span>;

// **Task:** Given an array `const drinks = ['Coffee', 'Tea', 'Water']`, use `.map()` to render them as a numbered list (`<ol>`).
const drinks = ["Coffee", "Tea", "Water"];
const Drink = () => (
  <ol>
    {drinks.map((drink, index) => (
      <li key={index}>2/{drink}</li>
    ))}
  </ol>
);

// **Task:** You have an object `const car = { brand: 'Tesla', model: 'Model 3', year: 2023 }`. Create a component that destructures these values in the function argument and displays them in a `<div>`.
const car = { brand: "Tesla", model: "Model 3", year: 2023 };

const Car = ({ brand, model, year }) => (
  <div>
    3/ {brand} {model} {year}
  </div>
);

// **Task:** You have a list `const fruit = ['apple', 'banana']`. Create a new array `allFruits` that uses the spread operator to add `'cherry'` to the end of the existing `fruit` list.
const fruit = ["apple", "banana"];
const allFruits = [...fruit, "cherry"];
const FruitList = () => <div>4/ {allFruits}</div>;

// **Task:** Create a file `utils.js` that exports a constant `API_URL`. Import it into a component in `App.js` and display the URL in a `<p>` tag.
import { API_URL } from "./utils";
import { Button } from "../components/Button";
const App = () => <p>5/ {API_URL}</p>;

// **Task:** Create a component that receives a `stock` prop (a number). If `stock > 0`, display "In Stock" in green; otherwise, display "Out of Stock" in red using inline styles.
const Stock = (prop) =>
  prop.stock > 0 ? (
    <div className="text-green-600">6/ In stock</div>
  ) : (
    <div className="text-red-600">6/ Not in stock</div>
  );

// **Task:** Create a component that takes a `theme` prop (e.g., "dark" or "light"). Use a template string to set a `className` like: `className={`container-${theme}`}`.
const Theme = ({ theme }) => (
  <div className={`bg-[${theme}]`}>7/ This is the {theme} theme.</div>
);
