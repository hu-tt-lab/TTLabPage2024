import { ImageListItemBar, useTheme } from "@mui/material";
import { IconButton, ImageListItem, Link, OpenInNewIcon } from "../../common";
import { GalleryItemDialog } from "./GalleryItemDialog";
import { GalleryImage } from "../../../assets/images";
import { useLangContext } from "../../language";

export type GalleryListItemProps = {
  galleryImage: GalleryImage;
};

export function GalleryListItem({ galleryImage }: GalleryListItemProps) {
  const [lang] = useLangContext();
  const theme = useTheme();

  return (
    <ImageListItem sx={{ borderRadius: 2, overflow: "hidden" }}>
      <GalleryItemDialog
        galleryImage={galleryImage}
        sx={{
          padding: 0,
          "& img": {
            width: "100%",
            height: "auto",
            objectFit: "cover",
          },
          "& img:hover": {
            transform: "scale(1.1)",
            transition: "transform 0.2s",
          },
        }}
      >
        <img src={galleryImage.src} alt={galleryImage.caption[lang]} />
      </GalleryItemDialog>
      <ImageListItemBar
        title={galleryImage.caption[lang]}
        subtitle={galleryImage.description?.[lang]}
        position="bottom"
        actionIcon={
          galleryImage.externalLink && (
            <IconButton>
              <Link
                href={galleryImage.externalLink}
                target="_blank"
                rel="noopener noreferrer"
                sx={{ display: "inline-flex", alignItems: "center" }}
              >
                <OpenInNewIcon
                  sx={{ color: theme.palette.primary.contrastText }}
                  fontSize="small"
                />
              </Link>
            </IconButton>
          )
        }
      />
    </ImageListItem>
  );
}
