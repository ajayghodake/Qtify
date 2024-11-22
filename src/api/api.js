import axios from "axios";

async function Api() {
  try {
    const res = await axios("https://qtify-backend-labs.crio.do/albums/top");
    return res.data;
  } catch (err) {
    console.error("Error fetching data", err)
    return { error: 'Failed to fetch data'};
  }
}

export default Api;
