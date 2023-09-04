import { Children, createContext } from "react";

const UsersContext = createContext({
  ids: [],
  getUsers: () => {},
});

function UsersContextProvider() {
  return <UsersContext>{Children}</UsersContext>;
}

export default UsersContextProvider;
