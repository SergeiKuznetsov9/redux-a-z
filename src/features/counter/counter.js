import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "./counterSlice";
import cls from "./counter.module.css";
import { getValue } from "./selectors";

export const Counter = () => {
  const dispatch = useDispatch();
  const value = useSelector(getValue);

  const onIncrement = () => {
    dispatch(increment());
  };
  const onDecrement = () => {
    dispatch(decrement());
  };

  return (
    <div className={cls.Counter}>
      <h1 className={cls.title}>
        VALUE: <span className={cls.value}>{value}</span>
      </h1>
      <div className={cls.buttonsBlock}>
        <button className={cls.button} onClick={onIncrement}>
          +
        </button>
        <button className={cls.button} onClick={onDecrement}>
          -
        </button>
      </div>
    </div>
  );
};
