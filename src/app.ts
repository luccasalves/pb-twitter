import { ScrollFeed } from "./components/ScrollFeed/ScroFeed";
import { MenuDrawer } from "./components/MenuDrawer/Menu";
import "./styles/app.css";

const App = document.querySelector("#app");

App?.append(MenuDrawer(), ScrollFeed());
