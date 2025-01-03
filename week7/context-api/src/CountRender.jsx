// import { useContext } from "react";
// import { CountContext } from "./context";
import { useRecoilValue } from "recoil";
import { countAtom } from "./store/atoms/count";
const CountRender = () => {
  const count = useRecoilValue(countAtom)
  return <>{count}</>;
};

export default CountRender;
