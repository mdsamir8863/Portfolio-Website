//! ✅ Example Debounce function
function debounce(func, delay) {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => func.apply(this, args), delay);
  };
}

// // Example usage: API call on input change
// const handleInput = debounce((value) => {
//   console.log("API call with:", value);
// }, 500);

function debounceMethod(func, delay) {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
}
 

const handleInput = debounceMethod((value) => {
    console.log("Api call is:", value);

}, 500);


handleInput("Sa");
handleInput("Sam");
handleInput("Sami");
handleInput("Samir");

//! ✅ Example Throttling
function throttle(func, limit) {
    let lastCall = 0;
    return function (...args) {
      const now = Date.now();
      if (now - lastCall >= limit) {
        lastCall = now;
        func.apply(this, args);
      }
    };
  }

  
  const handleScroll = throttle(() => {
    console.log("Throttled Scroll");
  }, 1000);

//! 1️⃣ forEach() – No Return Value
const arr = [1, 2, 3];
arr.forEach((num) => console.log(num * 2));
// Output: 2, 4, 6

// !2️⃣ map() – Returns New Array

const doubled = arr.map((num) => num * 2);
console.log(doubled); // [2, 4, 6]

//! 3️⃣ filter() – Returns Filtered Array
const even = arr.filter((num) => num % 2 === 0);
console.log(even); // [2]

// 4️⃣ reduce() – Reduces to a Single Value
const sum = arr.reduce((acc, num) => acc + num, 0);
console.log(sum); // 6

// !✅ Example – React Lazy Loading:
import React, { lazy, Suspense } from "react";

// Lazy load the component
const Dashboard = lazy(() => import("./Dashboard"));

function App() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <Dashboard />
    </Suspense>
  );
}

export default App;

//!!! A closure is when a function "remembers" and can access variables from its lexical scope (where it was defined), even after that scope has finished executing.

//!! ✅ Why are closures useful?

//!! Data encapsulation (hiding data from the outside world).
//!! Maintaining state between function calls (e.g., counters).

function createCounter() {
  let count = 0; // Private variable

  return function () {
    count++;
    console.log("Count:", count);
  };
}

const counter = createCounter();

counter(); // Count: 1
counter(); // Count: 2

//! 14. What are higher-order components (HOC) in React?
// A higher-order component (HOC) is a function that takes a component and returns a new component with additional props or behavior.

// ✅ Why use HOCs?

// Code reuse (e.g., logging, authentication).
// Separate logic from UI.
// 👉 Example of HOC:

function withLogger(Component) {
  return function Wrapper(props) {
    console.log("Props:", props);
    return <Component {...props} />;
  };
}

function User(props) {
  return <h1>{props.name}</h1>;
}

const UserWithLogger = withLogger(User);

// Usage
<UserWithLogger name="Samir" />;

//!! 17. What is prop drilling in React? How can you avoid it?
// Prop drilling happens when you pass props through multiple components just to deliver them to a deeply nested child.

// 👉 Example of Prop Drilling:

function App() {
  const user = "Samir";
  return <Parent user={user} />;
}

function Parent({ user }) {
  return <Child user={user} />;
}

function Child({ user }) {
  return <p>Hello, {user}!</p>;
}


// !📌 1. What is a Promise?
//! A Promise is an object representing the eventual completion (or failure) of an asynchronous operation.

// !✅ Promise States:
//! Pending – Initial state (operation in progress).
//! Fulfilled – Operation completed successfully (resolve).
// !Rejected – Operation failed (reject).

const fetchData = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("Data fetched successfully!");
      }, 1000);
    });
  };
  
  fetchData()
    .then((data) => console.log(data)) // Success
    .catch((error) => console.error(error)) // Error
    .finally(() => console.log("Operation completed."));
  