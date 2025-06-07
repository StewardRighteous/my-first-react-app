import { Link, Outlet } from "react-router-dom";

export default function Profile() {
  return (
    <>
      <h1>Hey this is Profile Page</h1>
      <p>
        You can go back to <Link to={"/"}>Home page</Link>
      </p>
      <hr />
      <Outlet context={{ name: "summa" }} />
    </>
  );
}
