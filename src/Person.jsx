import { useState } from "react";
import Input from "./Input";

export default function Person() {
  const [firstName, setFirstName] = useState("");
  const [secondName, setSecondName] = useState("");

  const userName = firstName + " " + secondName;

  return (
    <>
      <form action="">
        <Input name={"FirstName"} onChange={(value) => setFirstName(value)} />
        <Input name={"LastName"} onChange={(value) => setSecondName(value)} />
        <h1>Name: {userName}</h1>
      </form>
    </>
  );
}
