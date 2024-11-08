// import { Routes } from "./route";

export enum Routes {
  //landing
  base = "/",
  casino = "/casino",
  lottery = "/lottery",
  sport = "/sport",
}

export interface AppRoutesType {
  id: number;
  path: string;
  image: string;
}

// readonly array for all app routes
const appRoutes: AppRoutesType[] = [
  {
    id: 1,
    path: Routes.casino,
    image: "/icons/casino.svg",
  },
  {
    id: 2,
    path: Routes.lottery,
    image: "/icons/lottery.svg",
  },
  {
    id: 3,
    path: Routes.sport,
    image: "/icons/sport.svg",
  },
];

export default appRoutes;
