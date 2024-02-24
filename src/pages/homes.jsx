import { useState } from "react";
import axios from "axios";
import SearchMovies from "../components/SearchMovies.jsx";
import Container from "react-bootstrap/Container";
import Card from 'react-bootstrap/Card';
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Stack from "react-bootstrap/Stack"

const Homes = () => {
  const [keywordMovie, setKeywordMovie] = useState("");
  const [movies, setMovies] = useState([])
  
  
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
		setMovies(response)
    }
  }
  
  async function detailHandller(movieID) {
  	console.log({movieID: movieID})
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

	  {/* card search movie start*/}
      <div className="mt-4">
    	<Container fluid="md">
    		<Row className="justify-content-center">
				{movies.map((movie) => (
					<Col xs={12} sm={12} md="auto" key={movie.id}>
					    <Card style={{ width: '18rem' }} className="m-3">
					      <Card.Img variant="top" src={`${process.env.imageURL}${movie.poster_path}`} />
					      <Card.Body>
					        <Card.Title>{movie.title}</Card.Title>
					        <Stack direction="horizontal" className="align-items-center justify-content-between">
					        	<Card.Text>
					        		Tahun Rilis <br />
					        		{movie.release_date}
					        	</Card.Text>
					        	<Card.Text>
					        		Bahasa <br />
					        		{movie.original_language}
					        	</Card.Text>
					        </Stack>
					        <Button onClick={(e) => detailHandller(movie.id) } variant="primary">
					        	Detail Movie
					        </Button>
					      </Card.Body>
					    </Card>
					</Col>
				))}
    		</Row>
    	</Container>
      </div>
      {/* card search movie end */}
    </>
  );
};

export default Homes;
