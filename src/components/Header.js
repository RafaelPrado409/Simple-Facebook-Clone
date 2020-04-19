import React, { Component } from "react";

import logo from "../assets/facebook-logo-png3.png";
import goku from "../assets/perfil.jpg";

function Header() {
  return (
    <header>
      <nav>
        <img width="150" src={logo}></img>
        <div>
          <img width="40" src={goku} />
          <span>
            <strong>Goku / Kakarotto</strong>
          </span>
        </div>
      </nav>
    </header>
  );
}

export default Header;
