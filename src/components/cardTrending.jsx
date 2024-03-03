import { Swiper, SwiperSlide } from "swiper/react"

import "swiper/css"

import Container from "react-bootstrap/Container"
import Card from "react-bootstrap/Card"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

const CardTrending = ({ data }) => {
    return (
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
                    {data.map((tren) => (
                        <SwiperSlide key={tren.id}>
                            <Card style={{ width: "10rem" }}>
                                <Container className="p-2">
                                    <Row className="justify-content-center text-center">
                                        <Col xs={12}>
                                            <Col xs={12}>
                                                <Card.Img
                                                    variant="top"
                                                    src={`${process.env.imageURL}${tren.poster_path ? tren.poster_path : tren.profile_path}`}
                                                />
                                            </Col>
                                        </Col>
                                        <Col>
                                            <Card.Body>
                                                <Card.Title className="text-truncate">
                                                    {tren.original_title
                                                        ? tren.original_title
                                                        : tren.original_name}
                                                </Card.Title>
                                                <Card.Text>
                                                    {tren.release_date
                                                        ? tren.release_date
                                                        : tren.first_air_date}
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
    )
}

export default CardTrending
