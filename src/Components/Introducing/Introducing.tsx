import style from "./styles.module.css";
import introducingImage from "../../images/introducing.png";

export const Introducing = () => {
  return (
    <div className={style.introducingContainer}>
      <div className={style.introducingContent}>
        <h2 className={style.introductionTitle}>
          Introducing the New <span>Tiny Phone 4G</span>
        </h2>
        <img
          className={style.introducingImage}
          src={introducingImage}
          alt="introducing"
        />
      </div>
    </div>
  );
};
