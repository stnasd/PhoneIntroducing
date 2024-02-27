import { Header } from "../Header/Header";
import { Main } from "../Main/Main";
import { Introducing } from "../Introducing/Introducing";
import { Conditions } from "../Conditions/Conditions";
import { Footer } from "../Footer/Footer";

import style from "./styled.module.css";

export function MainPage() {
  return (
    <div className={style.mainContainer}>
      <Header />
      <Main />
      <Introducing />
      <Conditions />
      <Footer />
    </div>
  );
}
