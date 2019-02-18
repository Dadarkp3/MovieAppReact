import { searchMovieByName, searchGenre } from "./../api/index";
import { RootStore } from "./";
import { observable, action } from "mobx";
import { IGenre, IMovieList } from "../models/models";

export class MovieStore {
  protected rootStore: RootStore;

  @observable
  public movieInput: string = "";
  @observable
  public movies: IMovieList = {
    page: "0",
    total_pages: 0,
    total_results: 0,
    results: []
  };
  public genres: IGenre[] = [];
  @observable
  public selectedPage: number = 1;

  @action
  public searchMovie = async (value: string, page: number) => {
    this.movieInput = value;
    this.selectedPage = page;
    this.movies = await searchMovieByName(value, page);
  };

  public searchFirstMovies = async () => {
    console.log("oi");
    this.movies = await searchMovieByName("A", 1);
  };

  public searchGenre = async () => {
    this.genres = await searchGenre();
  };

  public constructor(rootStore: RootStore) {
    this.rootStore = rootStore;
  }
}
