import axios from "axios";

async function detailMovieApi(id) {
  const request = await axios.get(
    `${process.env.baseURL}/movie/${id}?language=en-US`,
    {
      headers: {
        Authorization: `Bearer ${process.env.accessToken}`,
        accept: "application/json",
      },
    },
  );

  const response = request.data;
  return response;
}

export default detailMovieApi;
