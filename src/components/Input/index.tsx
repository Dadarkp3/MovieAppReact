import * as React from "react";

const s = require("./style.scss");

interface IProps {
  movieInput: string;
  handleChange(e: React.ChangeEvent<HTMLInputElement>): void;
}

export class Input extends React.Component<IProps, {}> {
  public render() {
    return (
      <label id="inputMovie">
        <input
          className={s.input}
          onChange={this.props.handleChange}
          id="inputMovie"
          value={this.props.movieInput}
          placeholder="Search for movies by name, year or genre"
        />
      </label>
    );
  }
}
