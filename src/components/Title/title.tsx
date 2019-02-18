import * as React from "react";
import { propTypes } from "mobx-react";

const s = require("./style.scss");

interface IProps {
  title: string;
  date: string;
  percentage: string;
}

export class Title extends React.Component<IProps, {}> {
  public render() {
    return (
      <div className={s.container}>
        <div className={s.title} id="title">
          <div>{this.props.title}</div>
          <div />
        </div>
        <div id="date" className={s.date}>
          <div>{this.props.date}</div>
        </div>
      </div>
    );
  }
}
