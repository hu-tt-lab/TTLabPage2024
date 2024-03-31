import { ReactNode } from "react";
import { ImageList } from "../../common";

export type GalleryListProps = {
  cols?: number;
  children: NonNullable<ReactNode>;
};
export function GalleryList({ cols = 3, children }: GalleryListProps) {
  return <ImageList cols={cols}>{children}</ImageList>;
}
