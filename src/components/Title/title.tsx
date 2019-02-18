import * as React from "react";

const s = require("./style.scss");

interface IProps {
  title: string;
  date: string;
  percentage: number;
}

export class Title extends React.Component<IProps> {
  public render() {
    return (
      <div className={s.container}>
        <div className={s.titleContainer} id="title">
          <div className={s.percentage}>{this.props.percentage}</div>
          <div className={s.title}>{this.props.title}</div>
        </div>
        <div id="date" className={s.date}>
          {this.props.date}
        </div>
      </div>
    );
  }
}
