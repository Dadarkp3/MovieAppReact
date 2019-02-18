import * as React from "react";

const s = require("./style.scss");

export class MovieItem extends React.Component {
  public render() {
    return (
      <div className={s.container}>
        <figure id="movie-image" className={s.imageContainer}>
          <img
            src="https://image.tmdb.org/t/p/w400//ujQthWB6c0ojlARk28NSTmqidbF.jpg"
            alt="Movie image"
          />
        </figure>
        <div className={s.information}>
          <div className={s.title} />
          <div className={s.description} />
        </div>
      </div>
    );
  }
}
