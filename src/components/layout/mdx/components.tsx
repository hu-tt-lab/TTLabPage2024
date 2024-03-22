import { MDXComponents } from "mdx/types";
import { Layout } from "./Layout";
import { Ja, En } from "../../language";
import { Typography } from "../../common";

// TODO: Add components
export const mdxComponents: MDXComponents = {
  wrapper: (props) => <Layout {...props} />,
  Ja: Ja,
  En: En,
  h1: ({ ref, ...props }) => <Typography {...props} variant="h1" />,
  h2: ({ ref, ...props }) => <Typography {...props} variant="h2" />,
  h3: ({ ref, ...props }) => <Typography {...props} variant="h3" />,
  h4: ({ ref, ...props }) => <Typography {...props} variant="h4" />,
  h5: ({ ref, ...props }) => <Typography {...props} variant="h5" />,
  h6: ({ ref, ...props }) => <Typography {...props} variant="h6" />,
  p: ({ ref, ...props }) => <Typography {...props} variant="body1" />,
};
