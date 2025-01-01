import { useContext } from "react";
import { CountContext } from "./context";

const Buttons = ({ setCount }) => {
    const count = useContext(CountContext);
    return (
      <>
        <button onClick={() => setCount(count + 1)}>Increase</button>
        <button onClick={() => setCount(count - 1)}>Decrease</button>
      </>
    );
}

export default Buttons;