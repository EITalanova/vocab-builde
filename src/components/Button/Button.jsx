import cn from "classnames";

import style from "./Button.module.scss";

export const Button = ({ type, text, variant, width }) => {
  return (
    <button
      className={cn(style.btn, style[variant], style[width])}
      type={type}
    >
      {text}
    </button>
  );
};
