import axios from "axios";
import { log } from "react-native-reanimated";

const sendSimple = async () => {
  try {
    const response = await axios.get(
      "http://127.0.0.1:4000/api/v1/libraries/1"
    );
    console.log("====================================");
    console.log(response.data, "Hello response");
    console.log("====================================");
  } catch (error) {
    console.log("====================================");
    console.log(error, "hello error");
    console.log("====================================");
  }
};

async function authenticate(mode, data) {
  try {
    //const url = `http://127.0.0.1:4000/api/v1/users/${mode}`;
    const url = `http://127.0.0.1:4000/api/v1/users/${mode}`;
    /* const config = {
      method: "get",
      url: url,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      data: data,
    }; */
    const response = await axios.get(url);
    //const response = await axios(config);

    //const token = result.data.iDToken;
    console.log("====================================");
    console.log(response, "👿👿👿👿");
    console.log("====================================");
    return response.data.data.token;
  } catch (error) {
    console.log("====================================");
    console.log(error, "Error 😡😡😡😡");
    console.log("====================================");
  }
}

export async function createUser(data) {
  const token = await authenticate("signup", data);
  return token;
}

export async function login(userId) {
  const token = await authenticate("login", {
    userId: "1",
  });

  return token;
}

export async function getUser(userId) {
  const url = `http://127.0.0.1:4000/api/v1/users/${userId}`;

  const response = await axios.post(url, data);

  //const token = result.data.iDToken;

  return response.data.data;
}

export async function getLibrary(userId) {
  const url = `http://127.0.0.1:4000/api/v1/libraries/1`;

  const response = await axios.post(url, data);

  //const token = result.data.iDToken;

  return response.data.data;
}
