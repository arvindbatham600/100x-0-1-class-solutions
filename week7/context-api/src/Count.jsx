import { useState } from "react";
import Buttons from "./Buttons";
import CountRender from "./CountRender";
import { CountContext } from "./context";

const Count = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <CountContext.Provider value={count}>
        <CountRender />
        <Buttons setCount={setCount} />
      </CountContext.Provider>
    </>
  );
};

export default Count;
