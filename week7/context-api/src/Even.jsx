import { useRecoilValue } from "recoil";
import { countAtom } from "./store/atoms/count";
import { evenNumber } from "./store/atoms/even";

const Even = () => {
  const numberValue = useRecoilValue(evenNumber);
  return <>{numberValue && <div>Count is even</div>}</>;
};

export default Even;
