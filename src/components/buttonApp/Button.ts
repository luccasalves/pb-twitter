import "./Button.css";

export interface IButtonProps {
  label: string;
  color?: "primary" | "secondary";
  size?: "sm" | "md" | "lg";
  outline?: boolean;
  action: () => void;
}

export const ButtonApp = ({
  label,
  color = "primary",
  size = "md",
  outline = false,
  action,
}: IButtonProps) => {
  const button = document.createElement("button");

  button.classList.add(
    "btn",
    `btn--${size}`,
    outline ? `btn--outline-${color}` : `btn--flat-${color}`
  );
  button.setAttribute("type", "button");
  button.textContent = label;

  button.addEventListener("click", () => {
    action();
  });

  return button;
};
