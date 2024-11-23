import axios from "axios";
async function Api(endpoint = "") {
  try {
    const res = await axios(`https://qtify-backend-labs.crio.do/albums/${endpoint}`);
    return res.data;
  } catch (err) {
    console.error("Error fetching data", err)
    return { error: 'Failed to fetch data'};
  }
}
export default Api;
