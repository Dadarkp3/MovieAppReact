import * as React from "react";

const s = require("./style.scss");

interface IProps {
  key: number;
  name: string;
}

export function GenreButton(props: IProps) {
  return <button className={s.toolTip}>{props.name}</button>;
}
