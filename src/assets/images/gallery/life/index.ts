import { GalleryImage } from "../types";

import bbq from "./bbq.jpg";
import coffee from "./coffee.jpg";
import logo_lab_4_3 from "./logo_lab_4-3.png";
import M_building from "./M_building.jpg";
import pc_and_books from "./pc_and_books.png";
import room02 from "./room02.jpg";
import server from "./server.jpg";
import white_front_sketch2 from "./white_front-sketch2.jpg";

export const lifeImages: GalleryImage[] = [
  {
    src: bbq,
    caption: {
      en: "BBQ",
      ja: "バーベキュー",
    },
  },
  {
    src: coffee,
    caption: {
      en: "Coffee Break",
      ja: "コーヒーブレイク",
    },
  },
  {
    src: logo_lab_4_3,
    caption: {
      en: "Lab logo",
      ja: "研究室のロゴ",
    },
  },
  {
    src: M_building,
    caption: {
      en: "M building",
      ja: "M棟",
    },
  },
  {
    src: pc_and_books,
    caption: {
      en: "PC and Books",
      ja: "PCと本",
    },
  },
  {
    src: room02,
    caption: {
      en: "Students' room",
      ja: "学生居室",
    },
  },
  {
    src: server,
    caption: {
      en: "Server",
      ja: "サーバ",
    },
  },
  {
    src: white_front_sketch2,
    caption: {
      en: "Mouse",
      ja: "マウス",
    },
  },
];
