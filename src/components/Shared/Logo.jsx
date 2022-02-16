import React from "react";
import { Link } from "gatsby";

export default function Logo() {
  return (
    <Link to="/">
      <img
        src="/logo_Le_Potentiel_white.png"
        alt="logo"
        className="img-fluid"
      />
    </Link>
  );
}
