import React, { FC } from "react";
import UserModel from "../types/models";

// interface Props {
//   name: string;
//   age: number;
//   street?: number | string;
//
// }

interface Props {
  user: UserModel;
  addUser: (user: UserModel) => void;
}

const User: FC<Props> = ({ user, addUser }) => {
  return (
    <div>
      <p>I am User: {user.name}</p>
      <p>- {user.email}</p>
      <button onClick={() => addUser(user)}>Add me</button>
    </div>
  );
};

export default User;
