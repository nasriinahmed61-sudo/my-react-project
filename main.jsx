import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App.jsx";
import Login from "./login.jsx";
import Side from "./side.jsx";
import Footer from "./footer.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Login />
    <Side name="Ahmed Mohmed" age={22} phone="0612345678" />
    <App />
    <Footer />
  </StrictMode>,
);
