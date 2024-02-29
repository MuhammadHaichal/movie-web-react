import { useState } from "react";
import Stack from "react-bootstrap/Stack";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "axios";

const SearchMovies = (props) => {
  const [keywordMovie, setKeywordMovie] = useState("");

  async function HandleSubmit(e) {
    e.preventDefault();

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
      props.DatasMovies(response);
    }
  }

  return (
    <>
      <div>
        <Form onSubmit={HandleSubmit}>
          <Stack
            direction="horizontal"
            gap={3}
            className="p-5 justify-content-center"
          >
            <Form.Group
              className="w-full"
              controlId="exampleForm.ControlInput1"
            >
              <Form.Control
                className=" p-2"
                type="text"
                placeholder="Cari Movies ..."
                required
                onChange={(e) => setKeywordMovie(e.target.value)}
              />
            </Form.Group>

            <Form.Group>
              <Button className="p-2" type="submit" variant="primary">
                Search 🔎
              </Button>
            </Form.Group>
          </Stack>
        </Form>
      </div>
    </>
  );
};

export default SearchMovies;
