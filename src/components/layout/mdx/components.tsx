/* eslint-disable @typescript-eslint/no-unused-vars */

import { MDXComponents } from "mdx/types";
import { Layout } from "./Layout";
import { Ja, En } from "../../language";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  ExpandMoreIcon,
  Typography,
} from "../../common";
import { Hero } from "../Hero";

export const mdxComponents: MDXComponents = {
  wrapper: (props) => <Layout px={{ xs: 2, sm: 4 }} {...props} />,
  h1: ({ ref, ...props }) => (
    <Typography
      id={props.children ? props.children.toString() : undefined}
      {...props}
      variant="h2"
    />
  ),
  h2: ({ ref, ...props }) => <Typography {...props} variant="h3" />,
  h3: ({ ref, ...props }) => <Typography {...props} variant="h4" mx={1} />,
  h4: ({ ref, ...props }) => <Typography {...props} variant="h5" mx={1} />,
  h5: ({ ref, ...props }) => <Typography {...props} variant="h6" mx={1} />,
  p: ({ ref, ...props }) => (
    <Typography
      {...props}
      variant="body1"
      my={1}
      mx={{ xs: 0, sm: 2 }}
      paragraph
    />
  ),
  img: (props) => <img {...props} style={{ maxWidth: "100%" }} />,
  Ja: Ja,
  En: En,
  Acdn: (props) => (
    <Accordion
      disableGutters
      square
      elevation={0}
      sx={{
        borderRadius: 2,
        borderBottom: "1px solid #ddd",
        ":before": { display: "none" },
      }}
      {...props}
    />
  ),
  AcdnSummary: (props) => (
    <AccordionSummary
      expandIcon={<ExpandMoreIcon />}
      sx={{ border: "none" }}
      {...props}
    />
  ),
  AcdnDetails: AccordionDetails,
  Hero: (props) => <Hero sx={{ mx: { xs: -2, sm: -4 } }} {...props} />,
};
