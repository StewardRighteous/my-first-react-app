import { useOutletContext } from "react-router-dom";

export default function Tomato() {
  const { name } = useOutletContext();

  return (
    <h1>
      Hey I am Tomato {name} <button>Hello</button>
    </h1>
  );
}
