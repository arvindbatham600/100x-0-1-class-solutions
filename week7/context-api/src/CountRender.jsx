import { useContext } from "react";
import { CountContext } from "./context";
const CountRender = () => {
  const count = useContext(CountContext);
  return <>{count}</>;
};

export default CountRender;
