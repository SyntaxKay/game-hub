import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Theme } from "@radix-ui/themes";
import App from "./App.tsx";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Theme accentColor="indigo" grayColor="sand" radius="large" scaling="95%" appearance="dark">
      <App />
      {/* <ThemePanel /> */}
    </Theme>
  </StrictMode>
);
