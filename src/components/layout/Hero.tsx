import { SxProps } from "@mui/material";
import { Box, Typography } from "../common";
import { En, Ja, LangType } from "../language";
import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

export type HeroProps = {
  src: string;
  title?: string | { [Lang in LangType]: string };
  colorMode?: "light" | "dark" | "dark";
  noGradient?: boolean;
  sx?: SxProps;
};

export function Hero({
  src,
  sx,
  title,
  colorMode = "light",
  noGradient = false,
}: HeroProps) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, 500]);

  const gradient = noGradient
    ? "none"
    : colorMode === "light"
    ? "linear-gradient(to bottom, rgba(255, 255, 255, 0.52), rgba(255, 255, 255, 0.73))"
    : "linear-gradient(to bottom, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.5))";
  const textColor = colorMode === "light" ? "black" : "white";

  return (
    <Box
      position="relative"
      overflow="hidden"
      display="flex"
      flexDirection="column"
      sx={{
        aspectRatio: {
          xs: "16 / 9",
          sm: "3 / 1",
        },
        backgroundImage: gradient,
        ...sx,
      }}
      justifyContent="center"
      alignItems="flex-start"
      px={4}
      ref={ref}
    >
      <motion.img
        src={src}
        style={{
          objectFit: "cover",
          position: "absolute",
          left: 0,
          maxWidth: "110%",
          minWidth: "100%",
          zIndex: -1,
          y,
        }}
      />
      {typeof title === "string" ? (
        <Typography variant="h2" mb={0} color={textColor}>
          {title}
        </Typography>
      ) : (
        title && (
          <>
            <Ja>
              <Typography variant="h2" m={0} color={textColor}>
                {title.ja}
              </Typography>
            </Ja>
            <En>
              <Typography variant="h2" m={0} color={textColor}>
                {title.en}
              </Typography>
            </En>
          </>
        )
      )}
    </Box>
  );
}
