import { RouteObject } from "react-router-dom";
import { MainPage } from "../Components/MainPage/MainPage";
import { NavigateMenu } from "../Components/NavigateMenu/NavigateMenu";

export const routeConfig: RouteObject[] = [
  {
    path: "/",
    Component: MainPage,
  },
  {
    path: "/navigate",
    Component: NavigateMenu,
  },
];
