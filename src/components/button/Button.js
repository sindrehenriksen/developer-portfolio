import React from "react";
import { Link } from "react-router-dom";
import "./Button.scss";

export default function Button({ text, className, href, newTab, to }) {
  if (to) {
    // This is an internal link, use the Link component
    return (
      <div className={className}>
        <Link className="main-button" to={to}>
          {text}
        </Link>
      </div>
    );
  } else {
    // This is an external link, use the a element
    return (
      <div className={className}>
        <a className="main-button" href={href} target={newTab && "_blank"}>
          {text}
        </a>
      </div>
    );
  }
}