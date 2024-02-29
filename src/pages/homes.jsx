import { useState } from "react";
import axios from "axios";

import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Stack from "react-bootstrap/Stack";
import Modal from "react-bootstrap/Modal";
import Image from "react-bootstrap/Image";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import SearchMovies from "../components/SearchMovies.jsx";

const Homes = () => {
  const [movies, setMovies] = useState([]);
  const [detail, setDetail] = useState();

  const DatasMovies = (dataMovies) => {
    setMovies(dataMovies);
  };

  async function HandleClick(id) {
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
    setDetail(response);
  }

  return (
    <>
      {/* search movie start*/}
      <div>
        <div className="hero-bg">
          <div className=" pt-5">
            <h1 className="text-center text-light">
              {" "}
              Movie - <span className="text-warning"> Haikal </span>{" "}
            </h1>
            <p className="text-center text-light">
              {" "}
              Website Pencari Film atau Anime. By Haikal{" "}
            </p>
          </div>
          <SearchMovies DatasMovies={DatasMovies} />
        </div>
      </div>
      {/* search movie end */}

      {/* card search movie start*/}
      {movies && (
        <div className="mt-4 bg-light rounded ">
          <Container fluid="md">
            <Row className="justify-content-center gap-3">
              {movies.map((movie) => (
                <Col xs={12} sm={12} md="auto" key={movie.id} className="pt-3">
                  <Card style={{ width: "18rem" }} className="m-auto">
                    <Card.Img
                      variant="top"
                      src={`${process.env.imageURL}${movie.poster_path}`}
                    />
                    <Card.Body>
                      <Card.Title>{movie.title}</Card.Title>
                      <Stack
                        direction="horizontal"
                        className="align-items-center justify-content-between"
                      >
                        <Card.Text>
                          Tahun Rilis <br />
                          {movie.release_date}
                        </Card.Text>
                        <Card.Text>
                          Bahasa <br />
                          {movie.original_language}
                        </Card.Text>
                      </Stack>
                      <Button
                        type="button"
                        onClick={(e) => HandleClick(movie.id)}
                        variant="primary"
                        data-bs-toggle="modal"
                        data-bs-target="#detail-modal"
                      >
                        Detail Movie
                      </Button>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </Container>
        </div>
      )}
      {/* card search movie end */}

      {/* detail movie start */}
      {detail && (
        <div
          className="modal fade"
          id="detail-modal"
          tabIndex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-fullscreen-xl-down">
            <div className="modal-content  bg-dark text-white">
              <div className="modal-header justify-content-between align-items-center">
                <h3>
                  Movie - <span className="text-warning"> Haikal </span>
                </h3>
                <button
                  type="button"
                  className="btn btn-primary"
                  data-bs-dismiss="modal"
                >
                  Tutup
                </button>
              </div>
              <div className="modal-body">
                <Container fluid>
                  <Row>
                    <Col xs={12} sm={6} md={6} lg={12}>
                      <Image
                        src={`${process.env.imageURL}${detail.poster_path}`}
                        thumbnail
                      />
                    </Col>
                    <Col xs={12} sm={6} md={6} lg={12}>
                      <div className="mb-5">
                        <h1
                          className="text-left fw-bold text-capitalize mt-3"
                          style={{ fontSize: "2.3em" }}
                        >
                          {detail.title}
                        </h1>
                      </div>

                      {/* detail movie genres */}
                      <div>
                        <h4 className="text-left fs-2 mt-4 text-warning">
                          Genres :
                        </h4>
                        <Row
                          direction="horizontal"
                          className="justify-content-start mt-2 text-left text-lead"
                        >
                          {detail.genres.map((value) => (
                            <Col key={value.id} xs={3}>
                              <p className="text-lead fs-3"> {value.name} </p>
                            </Col>
                          ))}
                        </Row>
                      </div>

                      {/* detail movie popularity */}
                      <div>
                        <h4 className="text-left mt-4 fs-2 text-warning">
                          Popularitas :
                        </h4>
                        <p className="text-lead fs-3">
                          {detail.popularity} views
                        </p>
                      </div>

                      {/* detail movie language */}
                      <div>
                        <h4 className="text-left mt-4 fs-2 text-warning">
                          Language :
                        </h4>
                        {detail.spoken_languages.map((value) => (
                          <Col key={value.id}>
                            <p className="text-lead fs-3">
                              {" "}
                              {value.english_name}{" "}
                            </p>
                          </Col>
                        ))}
                      </div>

                      {/* detail movie release_date */}
                      <div>
                        <h4 className="text-left mt-4 text-warning fs-2">
                          Tahun Rilis :
                        </h4>
                        <p className="text-lead fs-3">{detail.release_date}</p>
                      </div>

                      {/* detail movie rating */}
                      <div>
                        <h4 className="text-left mt-4 fs-2 text-warning">
                          Rating :
                        </h4>
                        <p className="text-lead fs-3">{detail.vote_average}</p>
                      </div>

                      {/* detail movie status */}
                      <div>
                        <h4 className="text-left mt-4 fs-2 text-warning">
                          Status :
                        </h4>
                        <p className="text-lead fs-3">{detail.status}</p>
                      </div>
                    </Col>
                  </Row>

                  {/* detail movie overview */}
                  <div>
                    <div>
                      <h4 className="text-left mt-4 fs-2 text-warning">
                        Deskripsi :
                      </h4>
                      <p className="text-lead text-capitalize fs-3">
                        {detail.overview}
                      </p>
                    </div>
                  </div>

                  {/* detail production_companies */}
                  <div>
                    <div style={{ marginTop: "4rem" }}>
                      <h4 className="text-left fs-2 text-warning">
                        Produksi Perusahaan :
                      </h4>
                      <Swiper spaceBetween={50} slidesPerView={2}>
                        {detail.production_companies.map((value) => (
                          <SwiperSlide key={value.id}>
                            <Container>
                              <Col xs={12} sm={6} md={6} lg={12}>
                                <Image
                                  src={`${process.env.imageURL}${value.logo_path}`}
                                  thumbnail
                                />
                              </Col>
                              <Col xs={12} sm={6} md={6} lg={12}>
                                <p className="text-lead fs-2 text-center">
                                  {value.name}
                                </p>
                              </Col>
                            </Container>
                          </SwiperSlide>
                        ))}
                      </Swiper>
                    </div>
                  </div>

                  {/* detail production_contry */}
                  <div>
                    <h4 className="text-left fs-2 mt-4 text-warning">
                      Produksi Negara :
                    </h4>
                    <Row
                      direction="horizontal"
                      className="justify-content-start mt-2 text-left text-lead"
                    >
                      {detail.production_countries.map((value) => (
                        <Col key={value.id} xs={3}>
                          <p className="text-lead fs-3"> {value.name} </p>
                        </Col>
                      ))}
                    </Row>
                  </div>
                </Container>
              </div>
            </div>
          </div>
        </div>
      )}
      {/* detail movie end */}
    </>
  );
};

export default Homes;
