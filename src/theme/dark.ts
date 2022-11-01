export function changeTheme() {
  const window = document.querySelector("#window");
  const app = document.querySelector("#app");
  const surface = document.querySelectorAll(".surface");
  const inputs = document.querySelectorAll(".input-surface");

  const box = document.querySelectorAll(".box");

  box.forEach((item) => {
    item.classList.toggle("bg-dark");
  });
  inputs.forEach((item) => {
    item.classList.toggle("input-surface-dark");
  });

  window?.classList.toggle("bg-dark");
  app?.classList.toggle("bg-dark");

  surface.forEach((item) => {
    item.classList.toggle("surface-dark");
  });
}
