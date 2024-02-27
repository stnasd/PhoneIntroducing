import PurplePohonePage from "../../images/purplePhone.png";
import PurpleBackGround from "../../images/purpleBackground.png";
import PinkPohone from "../../images/pinkPhone.png";
import PinkBackGround from "../../images/pinkBackground.png";
import BlackPohone from "../../images/blackPhone.png";
import BlackBackGround from "../../images/blackBackground.png";
import style from "./styles.module.css";
import { useState } from "react";

export const Main = () => {
  const [order, setOrder] = useState(1);

  const onClickOrderButton = (order: number) => {
    setOrder(order);
  };
  const handleSwipe = (startX: number, endX: number) => {
    const sensitivity = 30;
    if (startX - endX > sensitivity) {
      setOrder(order === 3 ? 1 : order + 1);
    } else if (endX - startX > sensitivity) {
      setOrder(order === 1 ? 3 : order - 1);
    }
  };

  let startX = 0;

  const onTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    startX = e.touches[0].clientX;
  };

  const onTouchEnd = (e: React.TouchEvent<HTMLDivElement>) => {
    const endX = e.changedTouches[0].clientX;
    handleSwipe(startX, endX);
  };

  return (
    <div
      className={style.main}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      {order === 1 && (
        <div className={style.phoneContainerPurple}>
          <div className={style.phoneContent}>
            <div className={style.phoneTitle}>
              <div className={style.phoneName}>Tiny Phone 4G</div>
              <div className={style.phoneDescription}>
                Small Size, Huge Impact
              </div>
            </div>
            <div className={style.phonePricePurple}>
              £ 3.00 <span>£ 59.00</span>
            </div>
            <img
              src={PurpleBackGround}
              className={style.phoneBackground}
              alt="phone-background"
            />
            <img
              src={PurplePohonePage}
              className={style.phoneImage}
              alt="phone-page"
            />
            <div className={style.phoneUnderShadow}></div>
          </div>
        </div>
      )}
      {order === 2 && (
        <div className={style.phoneContainerPink}>
          <div className={style.phoneContent}>
            <div className={style.phoneTitle}>
              <div className={style.phoneName}>Tiny Phone 4G</div>
              <div className={style.phoneDescription}>
                Small Size, Huge Impact
              </div>
            </div>
            <div className={style.phonePricePink}>
              £ 3.00 <span>£ 59.00</span>
            </div>
            <img
              src={PinkBackGround}
              className={style.phoneBackground}
              alt="phone-background"
            />
            <img
              src={PinkPohone}
              className={style.phoneImage}
              alt="phone-page"
            />
            <div className={style.phoneDownSHadow}></div>
          </div>
        </div>
      )}
      {order === 3 && (
        <div className={style.phoneContainerBlack}>
          <div className={style.phoneContent}>
            <div className={style.phoneTitle}>
              <div className={style.phoneName}>Tiny Phone 4G</div>
              <div className={style.phoneDescription}>
                Small Size, Huge Impact
              </div>
            </div>
            <div className={style.phonePriceBlack}>
              £ 3.00 <span>£ 59.00</span>
            </div>
            <img
              src={BlackBackGround}
              className={style.phoneBackground}
              alt="phone-background"
            />
            <img
              src={BlackPohone}
              className={style.phoneImage}
              alt="phone-page"
            />
            <div className={style.phoneDownSHadow}></div>
          </div>
        </div>
      )}
      <div className={style.changeSlideButton}>
        {order === 1 ? (
          <button className={style.slideButtonActive}></button>
        ) : (
          <button
            className={style.slideButton}
            onClick={() => onClickOrderButton(1)}
          ></button>
        )}
        {order === 2 ? (
          <button className={style.slideButtonActive}></button>
        ) : (
          <button
            className={style.slideButton}
            onClick={() => onClickOrderButton(2)}
          ></button>
        )}
        {order === 3 ? (
          <button className={style.slideButtonActive}></button>
        ) : (
          <button
            className={style.slideButton}
            onClick={() => onClickOrderButton(3)}
          ></button>
        )}
      </div>
    </div>
  );
};
