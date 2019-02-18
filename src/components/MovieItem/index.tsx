import * as React from "react";
import { Title } from "../Title/title";
import { IGenre } from "../../models/models";
import { GenreButton } from "../GenreButton";

const s = require("./style.scss");

interface IProps {
  title: string;
  percentage: number;
  date: string;
  overview: string;
  genres: IGenre[];
}

export class MovieItem extends React.Component<IProps> {
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
          <Title
            title={this.props.title}
            percentage={this.props.percentage}
            date={this.props.date}
          />
          <div className={s.overview}>{this.props.overview}</div>
          <div className={s.genres}>
            {this.props.genres.map(genre => {
              return <GenreButton key={+genre.id} name={genre.name} />;
            })}
          </div>
        </div>
      </div>
    );
  }
}
