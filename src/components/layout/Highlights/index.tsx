import { useTheme } from "@mui/material";
import { HighlightContent, highlightContents } from "../../../assets/images";
import { Link, OpenInNewIcon, Stack, Typography } from "../../common";

export function Highlights() {
  return (
    <Stack direction="row" flexWrap="wrap" width="100%" gap={1}>
      {highlightContents.map((highlightContent) => (
        <Highlight key={highlightContent.id} content={highlightContent} />
      ))}
    </Stack>
  );
}

function Highlight({ content }: { content: HighlightContent }) {
  const theme = useTheme();
  return (
    <Stack
      sx={{
        position: "relative",
        width: { sm: "100%", md: "48%" },
        background: "white",
        borderRadius: 2,
        overflow: "hidden",
        "& img": {
          width: "auto",
          height: 600,
          objectFit: "contain",
        },
      }}
    >
      <img src={content.src} alt={content.title} />
      <Stack
        sx={{
          position: "absolute",
          bottom: 0,
          left: 0,
          width: "100%",
          p: 2,
          background: "rgba(0, 0, 0, 0.7)",
        }}
      >
        <Typography
          fontWeight="bold"
          color={theme.palette.primary.contrastText}
        >
          {content.title}
        </Typography>
        <Typography color={theme.palette.primary.contrastText}>
          {content.citation}
        </Typography>
        {/* {content.externalLink && <Link href={content.externalLink}>More</Link>} */}
        {content.externalLink && (
          <Link
            href={content.externalLink}
            target="_blank"
            rel="noopener noreferrer"
            color={theme.palette.primary.contrastText}
            sx={{
              display: "inline-flex",
              alignItems: "center",
              gap: 0.5,
              lineBreak: "anywhere",
            }}
          >
            {content.externalLink}
            <OpenInNewIcon fontSize="small" sx={{ m: 0, p: 0 }} />
          </Link>
        )}
      </Stack>
    </Stack>
  );
}
