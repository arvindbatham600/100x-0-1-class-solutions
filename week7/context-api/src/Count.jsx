import { useState } from "react";
import Buttons from "./Buttons";
import CountRender from "./CountRender";
// import { CountContext } from "./context";
import { RecoilRoot } from "recoil";
import Even from "./Even";

const Count = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <CountContext.Provider value={count}> */}
      <RecoilRoot>
        <CountRender />
        <Buttons />
        <Even />
      </RecoilRoot>
      {/* </CountContext.Provider> */}
    </>
  );
};

export default Count;
