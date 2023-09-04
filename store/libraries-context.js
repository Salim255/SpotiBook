import { Children, createContext } from "react";

const LibrariesContext = createContext({
  id: [],
  getLibrary: (id) => {},
  updateLibrary: (id) => {},
  deleteLibrary: (id) => {},
});

function LibrariesContextProvider() {
  return <LibrariesContext>{Children}</LibrariesContext>;
}

export default LibrariesContextProvider;
