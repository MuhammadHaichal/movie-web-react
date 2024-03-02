import { useState, useEffect } from "react";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Stack from "react-bootstrap/Stack";
import Modal from "react-bootstrap/Modal";
import Image from "react-bootstrap/Image";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

import Navbars from "../components/Navbar.jsx";

import trendingApi from "../api/trendingApi.js";




const Homes = () => {
  const [categoryTren, setCategoryTren] = useState("all");
  const [trending, setTrending] = useState([]);

  const [categoryMovie, setCategoryMovie] = useState("top_rated")
  const [movies, setMovies] = useState([])


  async function HandlerTrending(category, categoryBtn) {
    const response = await trendingApi(category);
    setCategoryTren(categoryBtn);

    setTrending(response);
  }
  
  async function HandlerMovie(category, categoryBtn) {
  	// const response = await movieApi(category)
  	setCategoryMovie(categoryBtn)
  	
  	// setMovies(response)
  }


 
 
  useEffect(() => {
   HandlerTrending(categoryTren);
   HandlerMovie(categoryMovie)
  }, []);

  return (
    <>
      {/* navbar start */}
      <header>
        <Navbars />
      </header>
      {/* navbar end */}

      {/* pembukaan website start */}
      <section className="hero-bg ">
        <Container>
          <div className=" py-5">
            <h1 className="text-left text-light" style={{ fontsize: "2.3em" }}>
              Selamat Datang
            </h1>
            <p className="text-white">
              Millions of movies, TV shows and people to discover. Explore now.
            </p>
          </div>
        </Container>
      </section>
      {/* pembukaan website end */}

      {/* trending movies start */}
      <section className="mt-5">
        <Container fluid>
          <div>
            <Row
              direction="horizontal"
              className="justify-content-start  align-items-center"
            >
              <Col xs={3} sm={2}>
                <h1 className="text-left">Trending</h1>
              </Col>
              <Col xs={2}>
                <Dropdown>
                  <Dropdown.Toggle
                    variant="warning"
                    id="dropdown-basic"
                    className="px-4"
                  >
                    {categoryTren}
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item>
                      <Button
                        variant="warning"
                        onClick={(e) => HandlerTrending("all", "All")}
                      >
                        All
                      </Button>
                    </Dropdown.Item>
                    <Dropdown.Item>
                      <Button
                        variant="warning"
                        onClick={(e) => HandlerTrending("movie", "Movies")}
                      >
                        Movies
                      </Button>
                    </Dropdown.Item>
                    <Dropdown.Item>
                      <Button
                        variant="warning"
                        onClick={(e) => HandlerTrending("person", "People")}
                      >
                        People
                      </Button>
                    </Dropdown.Item>
                    <Dropdown.Item>
                      <Button
                        variant="warning"
                        onClick={(e) => HandlerTrending("tv", "TV")}
                      >
                        TV
                      </Button>
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </Col>
            </Row>
          </div>

          {/* cards trending start */}
          <div className="mt-4">
            <Container fluid={true}>
              <Swiper
                slidesPerView={1}
                spaceBetween={10}
                breakpoints={{
                  320: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                  },

                  480: {
                    slidesPerView: 2,
                    spaceBetween: 30,
                  },

                  640: {
                    slidesPerView: 3,
                    spaceBetween: 40,
                  },
                }}
              >
                {trending.map((tren) => (
                  <SwiperSlide key={tren.id}>
                    <Card style={{ width: "19rem" }}>
                      <Container className="p-2">
                        <Row>
                          <Col xs={5} sm={5}>
                            <Card.Img
                              variant="top"
                              src={`${process.env.imageURL}${tren.poster_path ? tren.poster_path : tren.profile_path}`}
                            />
                          </Col>
                          <Col>
                            <Card.Body>
                              <Card.Title>
                                {tren.original_title
                                  ? tren.original_title
                                  : tren.original_name}
                              </Card.Title>
                              <Card.Text>
                                {tren.release_date
                                  ? tren.release_date
                                  : tren.first_air_date}
                              </Card.Text>

                              {/* buat person */}
                              <Card.Text>
                                {tren.known_for_department &&
                                  tren.known_for_department}
                              </Card.Text>
                              <Button variant="primary">Detail</Button>
                            </Card.Body>
                          </Col>
                        </Row>
                      </Container>
                    </Card>
                  </SwiperSlide>
                ))}
              </Swiper>
            </Container>
          </div>
          {/* cards trending end */}
        </Container>
      </section>
      {/* trending movies end */}
      
      
      
      
      {/* movies start */}
      <section className="mt-5">
    	<Container fluid>
    		<div>
    			<Row
	              direction="horizontal"
	              className="justify-content-start  align-items-center"
	            >
	              <Col xs={3} sm={2}>
	                <h1 className="text-left">Movies</h1>
	              </Col>
	              <Col xs={2}>
	                <Dropdown>
	                  <Dropdown.Toggle
	                    variant="warning"
	                    id="dropdown-basic"
	                    className="px-4"
	                  >
	                    { categoryMovie}
	                  </Dropdown.Toggle>
	
	                  <Dropdown.Menu>
	                    <Dropdown.Item>
	                      <Button
	                        variant="warning"
	                        onClick={(e) => HandlerMovie("top_rated", "Top Rating")}
	                      >
	                        Top Rating
	                      </Button>
	                    </Dropdown.Item>
	                    <Dropdown.Item>
	                      <Button
	                        variant="warning"
	                        onClick={(e) => HandlerMovie("popular", "Popular")}
	                      >
	                        Popular
	                      </Button>
	                    </Dropdown.Item>
	                    <Dropdown.Item>
	                      <Button
	                        variant="warning"
	                        onClick={(e) => HandlerMovie("upcoming", "Upcoming")}
	                      >
	                       Upcoming
	                      </Button>
	                    </Dropdown.Item>
	                    <Dropdown.Item>
	                      <Button
	                        variant="warning"
	                        onClick={(e) => HandlerMovie("now_playing", "Now Playing")}
	                      >
	                        Now Playing
	                      </Button>
	                    </Dropdown.Item>
	                  </Dropdown.Menu>
	                </Dropdown>
	              </Col>
	            </Row>
    		</div>
    		
    		
    		
    	</Container>
      </section>
      {/* movies end */}
    </>
  );
};

export default Homes;
