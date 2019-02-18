import axios from "axios";
import { IMovieList } from "../models/models";

const API_KEY = "?api_key=ba06e9d5914aec7bf90de97e78a8b482";
const BASE_URL = "https://api.themoviedb.org/3";

export const searchMovieByName = async (query: string, page: number) => {
  try {
    const res = await axios.get<IMovieList>(
      `${BASE_URL}/search/movie${API_KEY}&query=${query}&language=pt-BR&page=${page}`
    );
    console.log(res);
    return res;
  } catch (err) {
    throw new Error("Sorry, couldn't find the movies that you wanted.");
  }
};

export const searchMovieByGenre = async (query: string, page: number) => {
  try {
    const res = await axios.get<IMovieList>(
      `${BASE_URL}/discover/movie${API_KEY}&with_genres=${query}&language=en-BR&page=${page}`
    );
    return res;
  } catch (err) {
    throw new Error("Sorry, couldn't find the movies that you wanted.");
  }
};

export const searchMovieByYear = async (year: string, page: number) => {
  try {
    const res = await axios.get<IMovieList>(
      `${BASE_URL}/discover/movie${API_KEY}'&primary_release_year='${year}&language=en-BR&page=${page}`
    );
    return res;
  } catch (err) {
    throw new Error("Sorry, couldn't find the movies that you wanted.");
  }
};
