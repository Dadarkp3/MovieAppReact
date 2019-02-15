import * as stores from "./";
import { syncHistoryWithStore } from "mobx-react-router";
import createBrowerhistory from "history/createBrowserHistory";
import { History } from "history";

export class RootStore {
	public routerStore: stores.RouterStore;
	public history: History;
	public movieStore: stores.MovieStore;

	public constructor() {
		const browerHistory = createBrowerhistory();

		this.routerStore = new stores.RouterStore();
		this.history = syncHistoryWithStore(browerHistory, this.routerStore);
		this.movieStore = new stores.MovieStore(this);

		return {
			routerStore: this.routerStore,
			history: this.history,
			movieStore: this.movieStore,
		};
	}
}
