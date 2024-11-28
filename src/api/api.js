import axios from "axios";
export const BACKEND_ENPOINT = "https://qtify-backend-labs.crio.do";

async function Api(endpoint = "") {
  try {
    const res = await axios(`${BACKEND_ENPOINT}/albums/${endpoint}`);
    return res.data;
  } catch (err) {
    console.error("Error fetching data", err);
    return { error: "Failed to fetch data" };
  }
}
export default Api;

export const getTopAlbums = async () => {
  try {
    const res = await axios.get(`${BACKEND_ENPOINT}/albums/top`);
    return res.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const getNewAlbums = async () => {
  try {
    const res = await axios.get(`${BACKEND_ENPOINT}/albums/new`);
    return res.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};


export const fetchSongs = async () => {
  try {
    const res = await axios.get(`${BACKEND_ENPOINT}/songs`);
    return res.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};
