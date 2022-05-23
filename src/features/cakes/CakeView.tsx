import React, { useState } from "react";

// Redux
import { ordered, restocked } from "./cakeSlice";
// Custom hooks
import { useAppDispatch, useAppSelector } from "../../app/hooks";

const CakeView = () => {
  const numOfCake = useAppSelector((state) => state.cake.numOfCake);
  const dispatch = useAppDispatch();
  const [value, setValue] = useState(0);

  // redux Action handler
  const orderCake = () => {
    dispatch(ordered());
  };
  const restockCake = () => {
    dispatch(restocked(value));
    setValue(0);
  };

  return (
    <div>
      <h2>Number of cake -{numOfCake}</h2>
      <button disabled={numOfCake === 0} onClick={orderCake}>
        Order cake
      </button>
      <input
        type="number"
        value={value}
        onChange={(e) => setValue(parseInt(e.target.value))}
      />
      <button disabled={value === 0} onClick={restockCake}>
        Restock cake
      </button>
    </div>
  );
};

export default CakeView;
