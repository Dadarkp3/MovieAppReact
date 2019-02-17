import { searchMovieByName } from "./../api/index";
import { RootStore } from "./";
import { observable, action } from "mobx";
import { IMovie } from "../models/models";

export class MovieStore {
  protected rootStore: RootStore;

  @observable
  public movieInput: string = "";
  @observable
  public movies: IMovie[] | null = null;

  @action
  public searchMovie = (input: string) => {
    this.movieInput = input;
    console.log(searchMovieByName(this.movieInput, 1));
  };

  public constructor(rootStore: RootStore) {
    this.rootStore = rootStore;
  }
}
