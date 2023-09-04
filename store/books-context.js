import { Children, createContext } from "react";

const BooksContext = createContext({
  id: [],
  getBook: (id) => {},
  addBook: (id) => {},
  deleteBook: (id) => {},
});

function BooksContextProvider() {
  return <BooksContext>{Children}</BooksContext>;
}

export default BooksContextProvider;
