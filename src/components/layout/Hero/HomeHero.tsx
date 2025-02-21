import { SxProps } from "@mui/material";
import { Box, Typography } from "../../common";
import { En, Ja } from "../../language";

import src from "../../../../public/images/top/etop.jpg";

export type HomeHeroProps = {
  sx?: SxProps;
};

export function HomeHero({ sx }: HomeHeroProps) {
  return (
    <Box position="relative" overflow="hidden" sx={sx}>
      <img
        src={src}
        style={{
          maxWidth: "100%",
          width: "100%",
          zIndex: -1,
        }}
      />
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          filter: "drop-shadow(0 2px 5px rgba(0, 0, 0, 0.7))",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          px: 4,
        }}
      >
        <Typography
          variant="h2"
          color="white"
          fontWeight="bold"
          component="span"
          mb={0}
          fontSize={{ md: "3rem" }}
        >
          <Ja>神経制御工学研究室</Ja>
          <En>Neural Control Engineering Lab</En>
        </Typography>
        <Typography
          variant="subtitle1"
          m={0}
          color="white"
          fontSize={{ md: "1.5rem" }}
        >
          <Ja>新技術と創造で結ぶ知のかけ橋の場</Ja>
          <En>A place bridging new technology and creativity</En>
        </Typography>
      </Box>
    </Box>
  );
}
