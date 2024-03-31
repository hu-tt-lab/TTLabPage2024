import { GalleryContent } from "./types";
import { deviceImages } from "./devices";
import { equipmentImages } from "./equipment";
import { lifeImages } from "./life";

export const galleryContents: GalleryContent[] = [
  {
    id: "developed-devices",
    title: { ja: "開発デバイス", en: "Developed Devices" },
    images: deviceImages,
  },
  {
    id: "equipments",
    title: { ja: "実験設備", en: "Equipments" },
    images: equipmentImages,
  },
  { id: "life", title: { ja: "生活", en: "Life" }, images: lifeImages },
];
