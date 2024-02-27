import style from "./styles.module.css";
import Logo from "../../images/logo@2x.png";
import { useState } from "react";

export const Footer = () => {
  const [showText, setShowText] = useState(false);
  return (
    <div className={style.footerContainer}>
      <div className={style.footerLogo}>
        <img src={Logo} alt="logo" />
      </div>
      <div className={style.footerTitles}>
        <span>Privacy Notice</span>
        <span>Terms and conditions</span>
        <span>Cookies</span>
      </div>
      <div className={style.footerText}>
        *Information is not a public offer This site is not part of the Facebook
        or Facebook Inc. website. Also
        {showText
          ? ", this site is not endorsed by Facebook in any way FACEBOOK is a trademark of FACEBOOK, Inc. Facebook provides a platform for serving advertising, but the opinions and/or views expressed on this website are not representative of Facebook, Inc. Opinions and/or views expressed on our websites social media platforms, including but not limited to our blogs and Facebook pages, represent the thoughts of individual bloggers and online communities, and not necessarily those of our website or any of its business partners, affiliates or any of their respective officers, employees, staff or board members. The views and opinions expressed on these pages do not in any way reflect the opinions of the site on which they are published, other sites affiliated with the site, the personnel involved in the maintenance of the site or any member of the site. Any opinions or views expressed on this websites social media platforms are not representative of Facebook, Inc. Although our website makes reasonable efforts to monitor and/or moderate content posted on its social media platforms, we do not moderate all comments and cannot always respond to online inquiries in a timely manner. All new customers are entered into the raffle for the displayed campaign product. If you are the lucky winner, you will be contacted directly by email. This special offer includes a three-day trial to an affiliated service, after which the subscription fee will be thirty-three euros every fourteen days - automatically deducted from your credit card. If for any reason you are not satisfied with the service, you can cancel your account within three days. The service will renew every thirty days until cancelled. This campaign will expire on December 31 of this year. If you would like to participate without signing up for a three-day trial at Toolsandtoys,please email."
          : "..."}
      </div>
      <button
        className={style.closeTextButton}
        onClick={() => {
          setShowText(!showText);
        }}
      >
        Read {showText ? "less" : "more"}
      </button>
      <div className={style.prodInc}>
        <span>© 2023 WhaleCo Inc.</span>
      </div>
    </div>
  );
};
