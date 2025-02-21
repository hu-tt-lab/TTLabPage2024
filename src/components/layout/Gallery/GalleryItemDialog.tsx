import { useState } from "react";
import {
  Button,
  Dialog,
  DialogContent,
  Link,
  OpenInNewIcon,
  Typography,
} from "../../common";
import { SxProps } from "@mui/material";
import { GalleryImage } from "../../../constants";
import { useLangContext } from "../../language";

export type GalleryItemDialogProps = {
  galleryImage: GalleryImage;
  children?: React.ReactNode;
  sx?: SxProps;
};
export function GalleryItemDialog({
  galleryImage,
  children,
  sx,
}: GalleryItemDialogProps) {
  const [lang] = useLangContext();
  const [open, setOpen] = useState(false);

  const openDialog = () => {
    setOpen(true);
  };
  const closeDialog = () => {
    setOpen(false);
  };

  return (
    <>
      <Button onClick={openDialog} sx={sx}>
        {children}
      </Button>
      <Dialog open={open} onClose={closeDialog} maxWidth="lg">
        <DialogContent
          sx={{
            "& img": {
              width: "100%",
              height: "auto",
              objectFit: "contain",
            },
          }}
        >
          <img src={galleryImage.src} alt={galleryImage.caption[lang]} />
          <Typography variant="subtitle1">
            {galleryImage.caption[lang]}
          </Typography>
          {galleryImage.description && (
            <Typography variant="body1">
              {galleryImage.description[lang]}
            </Typography>
          )}
          {galleryImage.externalLink && (
            <Link
              href={galleryImage.externalLink}
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                display: "inline-flex",
                alignItems: "center",
                gap: 0.5,
                lineBreak: "anywhere",
              }}
            >
              {galleryImage.externalLink}
              <OpenInNewIcon fontSize="small" sx={{ m: 0, p: 0 }} />
            </Link>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
