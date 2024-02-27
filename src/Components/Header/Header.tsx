import style from "./styled.module.css";
import Logo from "../../images/logo@2x.png";
import burgerIcon from "../../icons/burgerIcon.png";

import { useNavigate } from "react-router-dom";

export const Header = () => {
  const navigate = useNavigate();

  return (
    <div className={style.header}>
      <div className={style.runningLine}>
        <span> * Special offer + Free Delivery 2-4 days in UK</span>
      </div>
      <div className={style.compaynLogo}>
        <img src={Logo} alt="main-logo" className={style.logoIcon} />
        <img
          src={burgerIcon}
          alt="drop-down-menu"
          className={style.burgerButton}
          onClick={() => navigate("/navigate")}
        />
      </div>
    </div>
  );
};
