import React, { ChangeEvent, FormEvent, useState } from "react";

interface User {
  name?: string;
  job?: string;
}

const Counter = () => {
  const [addIncrease, setAddIncrease] = useState<number>(0);
  const [user, setUser] = useState<User | null>(null);
  //   const [user, setUser] = useState<User>({});

  const handleIncrease = (): void => {
    setAddIncrease(addIncrease + 1);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const userAdmin = {
      name: "admin",
      job: "Dev",
    };
    setUser(userAdmin);
  };

  const handleNameChange = (e: ChangeEvent<HTMLInputElement>): void => {};

  return (
    <div>
      <h2>Add Acount</h2>
      <h1>{addIncrease}</h1>
      <button onClick={handleIncrease}>Increase</button>
    </div>
  );
};

export default Counter;
