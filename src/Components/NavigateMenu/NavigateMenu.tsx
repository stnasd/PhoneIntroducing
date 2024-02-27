import navigateIcon from "../../icons/navigateIcon.png";
import { useNavigate } from "react-router-dom";
import closerIcon from "../../icons/closeIcon.png";
import Logo from "../../images/logo@2x.png";
import style from "./styled.module.css";

export const NavigateMenu = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className={style.compaynLogo}>
        <img
          src={Logo}
          alt="main-logo"
          className={style.logoIcon}
          onClick={() => navigate("/")}
        />
        <img
          src={closerIcon}
          alt="close-menu"
          className={style.closeButton}
          onClick={() => navigate("/")}
        />
      </div>
      <div className={style.navigateMenu}>
        <span onClick={() => navigate("/")}>
          Go to product page <img src={navigateIcon} alt="navigate-icon" />
        </span>
        <span onClick={() => navigate("/not-found")}>
          Track your order
          <img src={navigateIcon} alt="navigate-icon" />
        </span>
        <span onClick={() => navigate("/not-found")}>
          Contact us
          <img src={navigateIcon} alt="navigate-icon" />
        </span>
        <span onClick={() => navigate("/not-found")}>
          FAQs
          <img src={navigateIcon} alt="navigate-icon" />
        </span>
      </div>
    </>
  );
};
