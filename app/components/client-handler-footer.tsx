"use client";
import React from "react";

export default function ClientFooterForm() {
  return (
    <form action="POST">
      <input type="email" id="footerEmail" placeholder="Correo electronico" />
      <button
        type="submit"
        onClick={async (event) => {
          event.preventDefault();
          const email = document.getElementById(
            "footerEmail"
          ) as HTMLInputElement;

          const response = await fetch("/api/subscribe", {
            body: JSON.stringify({
              email: email.value,
              origin: "Newsletter",
            }),
            headers: {
              "Content-Type": "application/json",
            },
            method: "POST",
          });

          const data = await response.json();
          console.log("response: ", data, response.status);
          if (response.status === 201) {
            alert(data.message);
          } else {
            alert(data.error);
          }
        }}
      >
        Suscribirse
      </button>
    </form>
  );
}
