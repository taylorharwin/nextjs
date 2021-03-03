import React from "react";
const Emoji = (props) => (
  <span
    style={{ "margin-right": "2px", "margin-left": "2px" }}
    role="img"
    aria-label={props.label ? props.label : ""}
    aria-hidden={props.label ? "false" : "true"}
  >
    {props.symbol}
  </span>
);
export default Emoji;
