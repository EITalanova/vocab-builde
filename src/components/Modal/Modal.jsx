import { ReactComponent as Close } from "../../assets/svg/close.svg";

import style from "./Modal.module.css";

export const Modal = ({ children }) => {
  return (
    <div className={style.modalBox}>
      <Close />
      {children}
      
    </div>
  );
};
