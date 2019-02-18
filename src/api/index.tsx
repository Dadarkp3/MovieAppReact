import axios from "axios";
import { IMovieList, IGenre } from "../models/models";

const API_KEY = "?api_key=ba06e9d5914aec7bf90de97e78a8b482";
const BASE_URL = "https://api.themoviedb.org/3";

export const searchMovieByName = async (query: string, page: number) => {
  try {
    const res = await axios.get<IMovieList>(
      `${BASE_URL}/search/movie${API_KEY}&query=${query}&language=en-US&page=${page}`
    );
    return res.data;
  } catch (err) {
    throw new Error("Sorry, couldn't find the movies that you wanted.");
  }
};

export const searchMovieByGenre = async (query: string, page: number) => {
  try {
    const res = await axios.get<IMovieList[]>(
      `${BASE_URL}/discover/movie${API_KEY}&with_genres=${query}&language=en-US&page=${page}`
    );
    return res.data;
  } catch (err) {
    throw new Error("Sorry, couldn't find the movies that you wanted.");
  }
};

export const searchGenre = async () => {
  try {
    const res = await axios.get<IGenre[]>(
      `${BASE_URL}/genre/movie/list${API_KEY}`
    );
    return res.data;
  } catch (err) {
    throw new Error("Sorry, couldn't find the genres that you wanted.");
  }
};
