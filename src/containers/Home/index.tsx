import * as React from "react";
import { inject, observer } from "mobx-react";
import { MovieStore } from "../../stores/MovieStore";
import { Input } from "../../components/Input";
import { MovieItem } from "../../components/MovieItem";
import { IMovie } from "../../models/models";

const s = require("./style.scss");

interface IProps {
  movieStore: MovieStore;
}

@inject("movieStore")
@observer
export class Home extends React.Component<IProps> {
  public async componentDidMount() {
    await this.props.movieStore.searchGenre();
    await this.props.movieStore.searchFirstMovies();
  }

  private handleChangeInput(value: string) {
    this.props.movieStore.searchMovie(value, 1);
  }

  public render() {
    const movieStore = this.props.movieStore;
    return (
      <div className={s.container}>
        <Input
          movieInput={movieStore.movieInput}
          handleChange={e => this.handleChangeInput(e.target.value)}
        />
        {movieStore.movies.results.map((movie: IMovie) => {
          return (
            <MovieItem
              key={+movie.id}
              title={movie.title}
              percentage={movie.vote_average}
              date={movie.release_date}
              overview={movie.overview}
              genres={movie.genre}
            />
          );
        })}
      </div>
    );
  }
}
