import axios from "axios";

async function authenticate(mode, data) {
  console.log("====================================");
  console.log("Hello from athtrticate");
  console.log("====================================");
  const url = `http://127.0.0.1:4000/api/v1/users/${mode}`;
  console.log("====================================");
  console.log(url);
  console.log("====================================");
  const response = await axios.post(url, data);

  //const token = result.data.iDToken;

  console.log("====================================");
  console.log(response.data.data);
  console.log("====================================");
  return "token";
}
export async function createUser(data) {
  const token = authenticate("signup", { email, password });
  return "token";
}

export async function login(email, password) {
  console.log("hello");
  const token = await authenticate("login", { email, password });
  return "token";
}
