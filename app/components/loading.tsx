import React from "react";
import { FourSquare } from "react-loading-indicators";

export default function Loading() {
  return (
    <div style={{ height: "100vh", display: "grid", placeItems: "center" }}>
      <FourSquare color="#d91e3e" size="medium" text="" textColor="" />
    </div>
  );
}
