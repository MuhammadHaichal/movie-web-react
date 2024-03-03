import { useState, useEffect } from "react"

import Container from "react-bootstrap/Container"

import Navbars from "../components/Navbar.jsx"
// import Footer from "../components/footer.jsx"
import DropDownCategory from "../components/dropdownCategory.jsx"
import CardTrending from "../components/cardTrending.jsx"
import CardMovies from "../components/cardMovies.jsx"
import CardTv from "../components/cardTv.jsx"

import trendingApi from "../services/api/trendingApi.js"
import moviesApi from "../services/api/moviesApi.js"
import tvApi from "../services/api/tvApi.js"

const Homes = () => {
    const [categoryTren, setCategoryTren] = useState("All")
    const [categoryMovie, setCategoryMovie] = useState("Top Rating")
    const [categoryTv, setCategoryTv] = useState("Top Rating")

    const [trendings, setTrendings] = useState([])
    const [movies, setMovies] = useState([])
    const [tvs, setTvs] = useState([])

    // function trending
    async function HandlerTrending(category, categoryBtn) {
        const response = await trendingApi(category)
        setCategoryTren(categoryBtn)
        setTrendings(response)
    }

    // function movie list
    async function HandlerMovie(category, categoryBtn) {
        const response = await moviesApi(category)
        setCategoryMovie(categoryBtn)
        setMovies(response)
    }

    // function tv list
    async function HandlerTv(category, categoryBtn) {
        const response = await tvApi(category)
        setCategoryTv(categoryBtn)
        setTvs(response)
    }

    useEffect(() => {
        HandlerTrending("all")
        HandlerMovie("top_rated")
        HandlerTv("top_rated")
    }, [])

    return (
        <>
            {/* navbar start */}
            <Navbars />

            {/* pembukaan website start */}
            <section className="hero-bg ">
                <Container>
                    <div className=" py-5">
                        <h1
                            className="text-left text-light"
                            style={{ fontsize: "2.3em" }}
                        >
                            Selamat Datang
                        </h1>
                        <p className="text-white">
                            Millions of movies, TV shows and people to discover.
                            Explore now.
                        </p>
                    </div>
                </Container>
            </section>
            

            {/* trending movies start */}
            <section className="mt-5">
                <Container fluid>
                    <div>
                        <DropDownCategory
                            title="Trending"
                            subtitle="Temukan Film Menarik"
                            handler={HandlerTrending}
                            buttonName={categoryTren}
                            category={[
                                { id: 1, keys: "all", title: "All" },
                                {
                                    id: 2,
                                    keys: "movie",
                                    title: "Movies",
                                },

                                { id: 3, keys: "tv", title: "TV" },
                            ]}
                        />
                    </div>
                    <CardTrending data={trendings} />
                </Container>
            </section>

            {/* movies start */}
            <section className="mt-5">
                <Container fluid>
                    <div>
                        <DropDownCategory
                            title="Movies"
                            subtitle="Temukan Film Menarik dan menghibur"
                            handler={HandlerMovie}
                            buttonName={categoryMovie}
                            category={[
                                {
                                    id: 1,
                                    keys: "top_rated",
                                    title: "Top Rating",
                                },
                                {
                                    id: 2,
                                    keys: "popular",
                                    title: "Popular",
                                },
                                {
                                    id: 3,
                                    keys: "upcoming",
                                    title: "Upcoming",
                                },

                                {
                                    id: 4,
                                    keys: "now_playing",
                                    title: "Now Playing",
                                },
                            ]}
                        />
                    </div>

                    <CardMovies data={movies} />
                </Container>
            </section>

            {/* tv start */}
            <section className="mt-5">
                <Container fluid>
                    <div>
                        <DropDownCategory
                            title="Tv"
                            subtitle="Acara menarik dan hiburan bersama keluarga"
                            handler={HandlerTv}
                            buttonName={categoryTv}
                            category={[
                                {
                                    id: 1,
                                    keys: "top_rated",
                                    title: "Top Rating",
                                },
                                {
                                    id: 2,
                                    keys: "popular",
                                    title: "Popular",
                                },
                            ]}
                        />
                    </div>

                    <CardTv data={tvs} />
                </Container>
            </section>
            {/* tv end  */}
        </>
    )
}

export default Homes
