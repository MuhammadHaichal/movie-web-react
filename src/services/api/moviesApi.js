import axios from "axios"

const moviesApi = async (categoryMovie) => {
    const baseURL = process.env.baseURL
    const request = await axios.get(
        `${baseURL}/movie/${categoryMovie}?language=en-US&page=1`,
        {
            headers: {
                accept: "application/json",
                Authorization: `Bearer ${process.env.accessToken}`,
            },
        }
    )

    const response = request.data.results
    return response
}

export default moviesApi
