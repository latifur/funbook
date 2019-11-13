import React from "react";
import { Link } from "react-router-dom";

function RightBar() {
  return (
    <>
      <ul className="list-unstyled d-none d-md-block">
        <li>
          <Link to="/">Right bar item</Link>
        </li>
        <li>
          <Link to="/">Right bar item</Link>
        </li>
        <li>
          <Link to="/">Right bar item</Link>
        </li>
        <li>
          <Link to="/">Right bar item</Link>
        </li>
        <li>
          <Link to="/">Right bar item</Link>
        </li>
        <li>
          <Link to="/">Right bar item</Link>
        </li>
      </ul>
    </>
  );
}

export default RightBar;
