import React from "react";
import Iconify from "./Iconify";

export default function Hamburger() {
  return (
    <div className="d-flex justify-content-start">
      <Iconify icon="ci:menu-alt-02" />

      <div className="d-flex align-items-center">
        <Iconify icon="bi:play-circle-fill" />
        <span className="fw-bold">DIRECT</span>
      </div>
    </div>
  );
}
