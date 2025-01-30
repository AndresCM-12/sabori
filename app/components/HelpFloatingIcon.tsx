import React from "react";
import contactTag from "../../public/images/contact-tag.svg";

export default function HelpFloatingIcon() {
  return (
    <div
      style={{
        position: "fixed",
        bottom: "-8px",
        right: "0px",
        zIndex: "9",
      }}
    >
      <a href="/calculadora-de-nutrientes-diarios">
        <img
          src={contactTag.src}
          width={90}
          height={130}
          alt="Escribenos tus dudas"
        />
      </a>
    </div>
  );
}
