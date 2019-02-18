import * as React from "react";
import { inject, observer } from "mobx-react";
import { MovieStore } from "../../stores/MovieStore";
import { Input } from "../../components/Input";
import { MovieItem } from "../../components/MovieItem";

const s = require("./style.scss");

interface IProps {
  movieStore: MovieStore;
}

@inject("movieStore")
@observer
export class Home extends React.Component<IProps, {}> {
  private handleChangeInput(e: any) {
    this.props.movieStore.searchMovie(e.target.value);
  }

  public render() {
    const movieStore = this.props.movieStore;
    return (
      <div className={s.container}>
        <Input
          movieInput={movieStore.movieInput}
          handleChange={(e) => this.handleChangeInput(e)}
        />
        <MovieItem />
      </div>
    );
  }
}
