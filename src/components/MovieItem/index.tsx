import * as React from "react";


const s = require("./style.scss");

export class MovieItem extends React.Component {
	public render() {
		return (
			<div className={s.container}>
				<figure id="movie-image" className={s.imageContainer}>
					<img src="../../assets/img/no-image.png" alt="Movie image"/>
				</figure>
				<div className={s.information}>

				</div>
			</div>
		);
	}
}
