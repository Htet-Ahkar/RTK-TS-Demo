import React, { useState } from "react";

// Redux
import { ordered, restocked } from "./icecreamSlice";
// Custom hooks
import { useAppDispatch, useAppSelector } from "../../app/hooks";

const IcecreamView = () => {
  const numOfIcecream = useAppSelector((state) => state.icecream.numOfIcecream);
  const dispatch = useAppDispatch();
  const [value, setValue] = useState(0);

  // Redux Action handler
  const orderIcecream = () => {
    dispatch(ordered());
  };

  const restockIceCream = () => {
    dispatch(restocked(value));
    setValue(0);
  };

  return (
    <div>
      <h2>Number of ice cream - {numOfIcecream}</h2>
      <button disabled={numOfIcecream === 0} onClick={orderIcecream}>
        Order ice cream
      </button>
      <input
        type="number"
        value={value}
        onChange={(e) => setValue(parseInt(e.target.value))}
      />
      <button disabled={value === 0} onClick={restockIceCream}>
        Restock ice cream
      </button>
    </div>
  );
};

export default IcecreamView;
