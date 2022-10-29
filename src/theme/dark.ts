export function changeTheme() {
  const window = document.querySelector("#window");
  const app = document.querySelector("#app");
  const surface = document.querySelectorAll(".surface");

  window?.classList.toggle("bg-dark");
  app?.classList.toggle("bg-dark");

  surface.forEach((item) => {
    item.classList.toggle("surface-dark");
  });
}
