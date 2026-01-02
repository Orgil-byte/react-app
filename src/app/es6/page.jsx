export default function main() {
  return (
    <div>
      <Double number={8} />
      <Drink />
      <Car {...car} />
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
