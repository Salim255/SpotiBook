import axios from "axios";
import { log } from "react-native-reanimated";

async function loginToLibrary(libraryId) {
  const url = `http://localhost:4000/api/v1/libraries/1`;

  const response = await axios.get(url);
  console.log("====================================");
  console.log(response, "From response", libraryId);
  console.log("====================================");
  return response.data;
}
export async function getScanLibrary(id) {
  try {
    const url = `http://localhost:4000/api/v1/libraries/1`;
    console.log(url, "From response🥶🥶🥶", id);
    const response = await axios.get(url);
    console.log("====================================");
    console.log(response, "From response", id);
    console.log("====================================");
    return response.data;
  } catch (error) {
    console.error(error);
  }
}
