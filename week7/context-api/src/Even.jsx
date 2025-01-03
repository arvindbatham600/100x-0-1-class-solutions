import { useRecoilValue } from "recoil";
import { countAtom } from "./store/atoms/count";

const Even = () => {
  const countValue = useRecoilValue(countAtom);
  return <>{countValue % 2 == 0 && <div>Count is even</div>}</>;
};

export default Even;
