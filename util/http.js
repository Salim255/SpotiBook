import axios from "axios";

export async function getScanLibrary(id) {
  const url = `http://localhost:4000/api/v1/libraries/1`;

  const response = await axios.get(url);
  console.log("====================================");
  console.log(response);
  console.log("====================================");
  return response.data;
}

export async function testSalim(id) {
  try {
    const response = await axios({
      method: "POST",
      url: `http://127.0.0.1:4000/api/v1/libraries/1`,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });
    console.log("====================================");
    console.log(response, "Hello test");
    console.log("====================================");
    return response.data;
  } catch (error) {
    console.log("====================================");
    console.log("eroror ,🫶🫶🫶🫶", error);
    console.log("====================================");
  }
}
