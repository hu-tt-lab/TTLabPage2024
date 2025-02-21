import { LangType } from "../../components/language";

export type GalleryImage = {
  src: string;
  caption: {
    [L in LangType]: string;
  };
  description?: {
    [L in LangType]?: string;
  };
  externalLink?: string;
};

export type GalleryContent = {
  id: string;
  title: {
    [L in LangType]: string;
  };
  images: GalleryImage[];
};
