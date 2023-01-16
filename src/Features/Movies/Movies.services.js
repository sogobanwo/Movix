import axios from "axios"


export const getFeaturedMovies =async()=>{
  try {
    const response = await axios.get("https://api.themoviedb.org/3/movie/top_rated?api_key=41643a7c482e6b1bb470796857111a25&language=en-US&page=1")
    return await response.data.results
  } catch (error) {
    console.log(error)
  }
}

export const getLatestMovies =async()=>{
  try {
    const response = await axios.get("https://api.themoviedb.org/3/movie/upcoming?api_key=41643a7c482e6b1bb470796857111a25&language=en-US&page=1")
    return await response.data.results
  } catch (error) {
    console.log(error)
  }
}

