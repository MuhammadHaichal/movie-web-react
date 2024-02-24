import { useState } from "react";
import axios from "axios";
import SearchMovies from "../components/SearchMovies.jsx";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

const Homes = () => {
  const [keywordMovie, setKeywordMovie] = useState("");

  async function searchMovie(e) {
    e.preventDefault();

    const reqeust = await axios.get(
      `${process.env.baseURL}/search/movie?query=${keywordMovie}&include_adult=false&language=en-US&page=1`,
      {
        headers: {
          Authorization: `Bearer ${process.env.accessToken}`,
          accept: "application/json",
        },
      },
    );

    let response = reqeust.data.results;

    if (response.length == 0) {
      console.log("film tidak ditemukan");
    } else {
      response.map((value) => setKeywordMovie(value));
    }
  }

  return (
    <>
      {/* search movie start*/}
      <div>
        <div className="hero-bg">
          <div className=" pt-5">
            <h1 className="text-center text-light"> Movie - Haikal </h1>
          </div>
          <SearchMovies onSubmit={searchMovie} onChange={setKeywordMovie} />
        </div>
      </div>
      {/* search movie end */}

      <div></div>
    </>
  );
};

export default Homes;
