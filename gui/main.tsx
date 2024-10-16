import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

// @ts-ignore: deno-ts(2584)
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <App />,
);
