import cn from "classnames";

import style from "./Button.module.css";

export const Button = ({ type, text, style, width }) => {
  return (
    <button
      className={`cn(style.btn, style.${style}, style.${width})`}
      type={type}
    >
      {text}
    </button>
  );
};
