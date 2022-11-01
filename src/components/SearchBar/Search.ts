import { IconApp } from "../IconApp/Icon";
import "./Search.css";

export const SearchBar = () => {
  const searchBar = document.createElement("div");
  searchBar.classList.add("search-box");
  const input = document.createElement("input");
  input.placeholder = "Search Twitter";
  input.className = "input";
  searchBar.append(
    IconApp({ name: "magnifying-glass", color: "gray", action() {} }),
    input
  );

  return searchBar;
};
