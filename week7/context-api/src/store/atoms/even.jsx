import { selector } from "recoil";
import { countAtom } from "./count";

export const evenNumber = selector({
  key: "evenNumber",
  get: ({ get }) => {
    const number = get(countAtom);
    if (number % 2 === 0) {
      return true;
    } else {
      return false;
    }
  },
});
