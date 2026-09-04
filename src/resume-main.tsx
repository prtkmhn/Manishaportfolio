import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Resume } from "./resume/Resume";
import "./styles/resume.css";

createRoot(document.getElementById("resume-root")!).render(
  <StrictMode>
    <Resume />
  </StrictMode>,
);
