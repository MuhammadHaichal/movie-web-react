import axios from "axios"

const tvApi = async (category) => {
    const baseURL = process.env.baseURL
    const request = await axios.get(
        `${baseURL}/tv/${category}?language=en-US&page=1`,
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

export default tvApi
