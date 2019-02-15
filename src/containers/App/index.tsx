import * as React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import { Header } from "../../components/Header";
import { Home } from "../Home";

require("./style.scss");

export class App extends React.Component {
	public render() {
		return (
			<>
				<Header />

				<Switch>
					<Route
						exact
						path="/"
						render={() => <Redirect to="/home" />}
					/>
					<Route path="/home" component={Home} />
					<Route path="/movie/:id" />
				</Switch>
			</>
		);
	}
}
