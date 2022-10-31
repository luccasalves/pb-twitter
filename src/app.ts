import { ScrollFeed } from "./components/ScrollFeed/ScroFeed";
import { MenuDrawer } from "./components/MenuDrawer/Menu";
import { NewsDrawer } from "./components/NewsDrawer/NewsDrawer";
import "./styles/app.css";

const App = document.querySelector("#app");

App?.append(MenuDrawer(), ScrollFeed(), NewsDrawer());
