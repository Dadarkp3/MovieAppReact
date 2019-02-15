import * as React from "react";
import { Link } from "react-router-dom";

const s = require("./style.scss");

export class Header extends React.Component {
	public render() {
		return (
			<header className={s.header}>
				<Link to="/" className={s.title}>
					Movies
				</Link>
			</header>
		);
	}
}
