import "./Button.styles.scss";

export interface IButtonProps {
  label: string;
  color?: string;
  size?: "sm" | "md" | "lg";
  mode?: "flat" | "outline-primary" | "outline-secondary";
  action: () => void;
}

export const ButtonApp = ({
  label,
  color = "primary",
  size = "md",
  mode = "flat",
  action,
}: IButtonProps) => {
  const button = document.createElement("button");

  button.classList.add("btn", `btn-${size}`, `btn-${color}`, `btn-${mode}`);
  button.setAttribute("type", "button");
  button.textContent = label;

  button.addEventListener("click", () => {
    action();
  });

  return button;
};
