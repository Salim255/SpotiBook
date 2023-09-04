import { createContext, useEffect, useState } from "react";
import AsynStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { log } from "react-native-reanimated";
export const AuthContext = createContext({
  token: "",
  userId: null,
  library: null,
  barrowBookId: null,
  isAuthenticated: false,
  authenticate: (token) => {},
  getUser: (id) => {},
  getLibrary: (libraryId) => {},
  getUserId: (userId) => {},
  setBarrowBook: (id) => {},
  logout: () => {},
});

function AuthContextProvider({ children }) {
  const [authToken, setAuthToken] = useState();
  const [userId, setUserId] = useState();
  const [scannedLibrary, setScannedLibrary] = useState();
  const [barrowBookId, setBarrowBookId] = useState();

  function authenticate(token) {
    setAuthToken(token);
    //Save the token into device
    console.log("====================================");
    console.log(token, "Hello token ");
    console.log("====================================");
    if (!token) {
      AsynStorage.setItem("token", "1");
    }
    AsynStorage.setItem("token", token);
  }
  function getUser(userId) {}
  //

  const getLibrary = async () => {
    try {
      const response = await axios.get(
        "http://127.0.0.1:4000/api/v1/libraries/1"
      );
      console.log("====================================");
      console.log(response, "Hello response Jooa 👹👹");
      console.log("====================================");
      return response;
    } catch (error) {
      console.log("====================================");
      console.log(error, "hello error 👺👺👺");
      console.log("====================================");
    }
  };
  /*  function getLibrary(library) {

    //setScannedLibrary(library);
  } */
  //
  async function setBarrowBook(id) {
    setBarrowBookId(id);

    try {
      console.log("====================================");
      console.log("Hello form barrow book", id, barrowBookId);
      console.log("====================================");
      const url = `http://127.0.0.1:4000/api/v1/libraries/1`;
      console.log(url, "From response🥶🥶🥶");
      const response = await axios.get(url);
      console.log("====================================");
      console.log(response, "From response");
      console.log("====================================");
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
  //

  function logout() {
    setAuthToken(null);
    AsynStorage.removeItem("token");
  }
  function getUserId(userId) {
    setUserId(userId);
    console.log("====================================");
    console.log("Hello from get user Id", userId);
    console.log("====================================");
  }
  const value = {
    token: authToken,
    userId: userId,
    barrowBookId: barrowBookId,
    isAuthenticated: !!authToken,
    authenticate: authenticate,
    logout: logout,
    //
    getUser: getUser,
    getUserId: getUserId,
    //
    setBarrowBook: setBarrowBook,
    //
    getLibrary: getLibrary,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export default AuthContextProvider;
