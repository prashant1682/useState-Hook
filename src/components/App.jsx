import React from "react";

function App() {
  // useState fucntion has two values in the array , one object and one fucntion .
  // by assigning a const in the array on LHS we are assigning a value to the array in RHS.
  // NOw when count is called it will retrun the object value =0
  // setCount will call the fucntion
  //Once the app loads , the count value 0 will be shown.
  // When the + button is clicked , it will call the increase fucntion and add 1 to the count and return setCount fucntion.
  // The count object will get the value from setCount fucntion and refresh the page
  const [count, setCount] = React.useState(0);

  function increase() {
    // the setCount fucntion will add 1 to the object
    // setCount fucntion helps to update the value of count
    return setCount(count + 1);
  }

  function decrease() {
    // the setCount fucntion will reduce 1 from the object
    // setCount fucntion helps to update the value of count
    return setCount(count - 1);
  }

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={increase}>+</button>
      <button onClick={decrease}>-</button>
    </div>
  );
}

export default App;
