// import { useContext } from "react";
// import { CountContext } from "./context";
// import { useSetRecoilState } from "recoil";
import { useRecoilState } from "recoil";
import { countAtom } from "./store/atoms/count";

const Buttons = () => {
  const [count, setCount] = useRecoilState(countAtom);
  return (
    <>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
    </>
  );
};

export default Buttons;
