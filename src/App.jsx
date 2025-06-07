import { Link } from "react-router-dom";

export default function App() {
  return (
    <>
      <h1>This is the main page</h1>
      <p>
        Go to <Link to={"/profile"}>Profile</Link>
      </p>
    </>
  );
}
