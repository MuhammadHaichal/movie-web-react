import axios from "axios";

async function searchFormApi(keywordMovie) {
  const request = await axios.get(
    `${process.env.baseURL}/search/movie?query=${keywordMovie}&include_adult=false&language=en-US&page=1`,
    {
      headers: {
        Authorization: `Bearer ${process.env.accessToken}`,
        accept: "application/json",
      },
    },
  );

  let response = request.data.results;

  if (response.length == 0) {
    console.log("film tidak ditemukan");
  } else {
    return response;
  }
}

export default searchFormApi;
