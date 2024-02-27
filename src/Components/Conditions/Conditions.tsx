import { useState } from "react";
import style from "./styles.module.css";
import warrantyIcon from "../../icons/warrantyIcon.png";
import moneyBackIcon from "../../icons/moneyBackIcon.png";
import deliviryIcon from "../../icons/deliveryIcon.png";
import DHLicon from "../../icons/DHL.png";
import DPDicon from "../../icons/DPD_logo_(2015) logo.png";
import FedExicon from "../../icons/FedEx.png";
import UPSicon from "../../icons/UPS.png";
import dropDownIcon from "../../icons/arrow.png";

export const Conditions = () => {
  const [isDeliveryCollapsed, setIsDeliveryCollapsed] = useState(true);
  const [isWarrantyCollapsed, setIsWarrantyCollapsed] = useState(true);
  const [isMoneyBackCollapsed, setIsMoneyBackCollapsed] = useState(true);

  const handleDeliveryCollapse = () => {
    setIsDeliveryCollapsed(!isDeliveryCollapsed);
  };

  const handleWarrantyCollapse = () => {
    setIsWarrantyCollapsed(!isWarrantyCollapsed);
  };

  const handleMoneyBackCollapse = () => {
    setIsMoneyBackCollapsed(!isMoneyBackCollapsed);
  };

  return (
    <div className={style.conditionsContainer}>
      <div className={style.conditionsContent}>
        <div className={style.titleConditions}>Shipping & Returns</div>
        <div className={style.block}>
          <div className={style.blockHeader} onClick={handleDeliveryCollapse}>
            <img src={deliviryIcon} alt="delivy-icon" />
            <span className={style.blockName}>
              Free delivery in strong United Kingdom
            </span>
            <img
              className={style.dropDownButton}
              src={dropDownIcon}
              alt="drop-down-button"
            />
          </div>
          {!isDeliveryCollapsed && (
            <div>
              <div className={style.iconsRow}>
                <img
                  src={DHLicon}
                  alt="dhl-icon"
                  className={style.conditionIcon}
                />
                <img
                  src={DPDicon}
                  alt="dpd-icon"
                  className={style.conditionIcon}
                />
                <img
                  src={FedExicon}
                  alt="FedEx-icon"
                  className={style.conditionIcon}
                />
                <img
                  src={UPSicon}
                  alt="UPS-icon"
                  className={style.conditionIcon}
                />
              </div>
              <div className={style.blockText}>
                All purchases are shipped from our warehouse in{" "}
                <strong>United Kingdom </strong>
                and are fully insured with a tracking number. Tracked delivery
                between 2-4 days in <strong>United Kingdom</strong> + Free
                Delivery.
              </div>
            </div>
          )}
        </div>
        <div className={style.block}>
          <div className={style.blockHeader} onClick={handleWarrantyCollapse}>
            <img src={warrantyIcon} alt="warranty-icon" />
            <span className={style.blockName}>3 years warranty</span>
            <img
              className={style.dropDownButton}
              src={dropDownIcon}
              alt="drop-down-button"
            />
          </div>
          {!isWarrantyCollapsed && (
            <div className={style.blockText}>
              Our product is guaranteed for 3 years from the date of your
              purchase. <br />
              <br /> For more information, please contact our team.
            </div>
          )}
        </div>
        <div className={style.block}>
          <div className={style.blockHeader} onClick={handleMoneyBackCollapse}>
            <img src={moneyBackIcon} alt="money-back-icon" />
            <span className={style.blockName}>100% money-back guarantee</span>
            <img
              className={style.dropDownButton}
              src={dropDownIcon}
              alt="drop-down-button"
            />
          </div>
          {!isMoneyBackCollapsed && (
            <div className={style.blockText}>
              If you're not satisfied with your purchase, we offer a 100% Money
              Back Guarantee.
              <br />
              <br /> No Questions Asked.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
