import { ButtonApp } from "./components/button/Button";
import "./styles/app.scss";
import { changeTheme } from "./theme/dark";

const App = document.querySelector("#app");

App?.append(ButtonApp({ label: "tweet", action: changeTheme }));
