import React from "react";
import { Link } from "react-router-dom";

function LeftBar() {
  return (
    <>
      <ul className="list-unstyled d-none d-md-block">
        <li>
          <Link to="/">Left bar item</Link>
        </li>
        <li>
          <Link to="/">Left bar item</Link>
        </li>
        <li>
          <Link to="/">Left bar item</Link>
        </li>
        <li>
          <Link to="/">Left bar item</Link>
        </li>
        <li>
          <Link to="/">Left bar item</Link>
        </li>
        <li>
          <Link to="/">Left bar item</Link>
        </li>
      </ul>
    </>
  );
}

export default LeftBar;
