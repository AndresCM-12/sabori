"use client";
import React from "react";

export default function ClientFooterForm() {
  const [isLoading, setIsLoading] = React.useState(false);

  return (
    <form action="POST">
      <input type="email" id="footerEmail" placeholder="Correo electronico" />
      <button
        disabled={isLoading}
        style={{
          opacity: isLoading ? 0.5 : 1,
          backgroundColor: "#d91e3e",
        }}
        type="submit"
        onClick={async (event) => {
          setIsLoading(true);
          event.preventDefault();

          try {
            const email = document.getElementById(
              "footerEmail"
            ) as HTMLInputElement;

            const response = await fetch("/api/subscribe", {
              body: JSON.stringify({
                email: email.value,
                origin: "Sabori - Newsletter",
              }),
              headers: {
                "Content-Type": "application/json",
              },
              method: "POST",
            });

            const data = await response.json();

            if (response.status === 201) {
              alert(data.message);
            } else {
              alert(data.error);
            }
            setIsLoading(false);
          } catch (error) {
            setIsLoading(false);
          }
        }}
      >
        Suscribirse
      </button>
    </form>
  );
}
