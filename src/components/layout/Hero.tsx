import { SxProps } from "@mui/material";
import { Box, Typography } from "../common";
import { En, Ja, LangType } from "../language";

export type HeroProps = {
  src: string;
  title?: string | { [Lang in LangType]: string };
  sx?: SxProps;
};

export function Hero({ src, sx, title }: HeroProps) {
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
        backgroundImage: `linear-gradient(to bottom, rgba(255, 255, 255, 0.52), rgba(255, 255, 255, 0.73)), url(${src})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        ...sx,
      }}
      justifyContent="center"
      alignItems="flex-start"
      pl={4}
    >
      {typeof title === "string" ? (
        <Typography variant="h2" mb={0}>
          {title}
        </Typography>
      ) : (
        title && (
          <>
            <Ja>
              <Typography variant="h2" m={0}>
                {title.ja}
              </Typography>
            </Ja>
            <En>
              <Typography variant="h2" m={0}>
                {title.en}
              </Typography>
            </En>
          </>
        )
      )}
    </Box>
  );
}
