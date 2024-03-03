import { Swiper, SwiperSlide } from "swiper/react"

import "swiper/css"

import Container from "react-bootstrap/Container"
import Card from "react-bootstrap/Card"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

const CardMovies = ({ data }) => {
    return (
        <div>
            <div className="mt-4">
                <Container fluid={true}>
                    <Swiper
                        slidesPerView={1}
                        spaceBetween={10}
                        breakpoints={{
                            320: {
                                slidesPerView: 2,
                                spaceBetween: 20,
                            },

                            480: {
                                slidesPerView: 4,
                                spaceBetween: 30,
                            },

                            640: {
                                slidesPerView: 6,
                                spaceBetween: 40,
                            },
                        }}
                    >
                        {data.map((movie) => (
                            <SwiperSlide key={movie.id}>
                                <Card style={{ width: "10rem" }}>
                                    <Container className="p-2">
                                        <Row className="justify-content-center">
                                            <Col xs={12}>
                                                <Col xs={12}>
                                                    <Card.Img
                                                        variant="top"
                                                        src={`${process.env.imageURL}${movie.poster_path ? movie.poster_path : movie.profile_path}`}
                                                    />
                                                </Col>
                                            </Col>
                                            <Col>
                                                <Card.Body>
                                                    <Card.Title className="text-truncate">
                                                        {movie.original_title
                                                            ? movie.original_title
                                                            : movie.original_name}
                                                    </Card.Title>
                                                    <Card.Text>
                                                        {movie.release_date
                                                            ? movie.release_date
                                                            : movie.first_air_date}
                                                    </Card.Text>

                                                    {/* buat person */}
                                                    <Card.Text>
                                                        {movie.known_for_department &&
                                                            movie.known_for_department}
                                                    </Card.Text>
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
        </div>
    )
}

export default CardMovies
