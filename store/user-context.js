import { Children, createContext } from "react";

const UserContext = createContext({
  id: [],
  getUser: (id) => {},
  updateUser: (id) => {},
  deleteUser: (id) => {},
});

function UserContextProvider() {
  return <UserContextProvider>{Children}</UserContextProvider>;
}

export default UserContextProvider;
