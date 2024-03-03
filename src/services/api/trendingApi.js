import axios from "axios"

const baseURL = process.env.baseURL
const accessToken = process.env.accessToken

const trendingApi = async (category) => {
    const request = await axios.get(
        `${baseURL}/trending/${category}/week?language=en-US&page=1`,
        {
            headers: {
                accept: "application/json",
                Authorization: `Bearer ${accessToken}`,
            },
        }
    )
    const response = request.data.results
    return response
}

export default trendingApi
