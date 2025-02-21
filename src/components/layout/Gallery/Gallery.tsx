import { GalleryList, GalleryListItem } from ".";
import { Box, ToggleButton, ToggleButtonGroup } from "../../common";
import { useLangContext } from "../../language";
import { galleryContents } from "../../../constants";
import { Fragment, useState } from "react";
import { useMediaQuery, useTheme } from "@mui/material";

export function Gallery() {
  const theme = useTheme();
  const isLg = useMediaQuery(theme.breakpoints.up("lg"));
  const [lang] = useLangContext();
  const [tabValue, setTabValue] = useState<string>("all");

  const handleTabClick = (value: string) => {
    setTabValue(value);
  };

  return (
    <Box>
      <ToggleButtonGroup size="small" value={tabValue}>
        <ToggleButton
          value="all"
          sx={{ textTransform: "none" }}
          onClick={() => {
            handleTabClick("all");
          }}
        >
          All
        </ToggleButton>

        {galleryContents.map((content) => (
          <ToggleButton
            key={`gallery-toggle-${content.id}`}
            value={content.id}
            sx={{ textTransform: "none" }}
            onClick={() => {
              handleTabClick(content.id);
            }}
          >
            {lang === "en" ? content.title.en : content.title.ja}
          </ToggleButton>
        ))}
      </ToggleButtonGroup>
      <Box>
        <GalleryList cols={isLg ? 3 : 2}>
          {galleryContents.map((content) => (
            <Fragment key={`gallery-${content.id}`}>
              {(tabValue === "all" || tabValue === content.id) &&
                content.images.map((image, i_image) => (
                  <GalleryListItem
                    galleryImage={image}
                    key={`gallery-${content.id}-${i_image}`}
                  />
                ))}
            </Fragment>
          ))}
        </GalleryList>
      </Box>
    </Box>
  );
}
