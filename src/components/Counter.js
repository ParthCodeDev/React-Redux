import { useSelector, useDispatch } from "react-redux";
import { counterAction } from "../store/counter";

import classes from "./Counter.module.css";

const Counter = () => {
  const dispatchEventHandler = useDispatch();
  const counter = useSelector((state) => state.counter.counter);
  const showToggle = useSelector((state) => state.counter.showCounter);

  const toggleCounterHandler = () => {
    //dispatchEventHandler({ type: "toggle" });
    dispatchEventHandler(counterAction.toggleCounter());
  };

  const incrementHandler = () => {
    // dispatchEventHandler({ type: "increment" });
    dispatchEventHandler(counterAction.increment());
  };

  const decrementHandler = () => {
    // dispatchEventHandler({ type: "decrement" });
    dispatchEventHandler(counterAction.decrement());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {showToggle && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
