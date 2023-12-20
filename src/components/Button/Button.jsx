import style from "./Button.module.css";

export const Button = ({ text, style }) => {
  return (
    <div className={style.ButtonBox}>
      <button>{text}</button>
      Button
    </div>
  );
};
