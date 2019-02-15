import { RootStore } from "./";
import { observable, autorun, action } from "mobx";

export class MovieStore {
	protected rootStore: RootStore;

	@observable
	public movieInput: string = "";
	@observable
	public movies = [];

	@action
	public searchMovie = (e: any) => {
		this.movieInput = e;
		console.log(this.movieInput);
	};

	public constructor(rootStore: RootStore) {
		this.rootStore = rootStore;
	}
}
