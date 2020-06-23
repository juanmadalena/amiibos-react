import React from "react";
import { Link } from "react-router-dom";
import "./NavHome.scss";

export function NavHome() {


  return (

      <div className="c-nav">
        <Link to="/amiibos">
          <div className="c-nav__amiibos">Amiibos</div>
        </Link>
        <Link to="/gameseries">
          <div className="c-nav__series">Game Series</div>
        </Link>
      </div>
  );
}
