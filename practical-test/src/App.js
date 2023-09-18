import React from "react";
import Header from "./components/header";
import AppRoutes from "./routes";

export const App = () => {
  return (
    <div>
      <Header/>
      <AppRoutes />
    </div>
  );
};
