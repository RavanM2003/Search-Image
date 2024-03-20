import axios from "axios";
const searchImages = async (txt) => {
    const response = await axios.get("https://api.unsplash.com/search/photos", {
      headers: {
        Authorization: "Client-ID 89M-3ixYT4rECsjNFALd7IN7-lH4I1BRkOdWCQF1k-c",
      },
      params: {
        query: txt,
      },
    });
    return response.data.results;
  };
  export default searchImages;