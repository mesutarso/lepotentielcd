import React from "react";
import LogoImage from "../../images/logo_Le_Potentiel_white.png";

export default function Logo() {
  return (
    <div>
      <img src={LogoImage} alt="logo" className="img-fluid" />
    </div>
  );
}
