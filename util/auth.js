import axios from "axios";

async function authenticate(mode, data) {
  console.log("====================================");
  console.log("Hello from athtrticate");
  console.log("====================================");
  const url = `http:localhost:4000/api/v1/users/${mode} `;
  const response = await axios.post(url, data);

  //const token = result.data.iDToken;

  console.log("====================================");
  console.log(response);
  console.log("====================================");
  return "token";
}
export async function createUser(data) {
  return await authenticate("signUp", email, password);
}

export async function login(email, password) {
  const token = await authenticate("signin", { email, password });

  return token;
}
