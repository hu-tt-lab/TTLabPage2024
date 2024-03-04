import { MDXComponents } from "mdx/types";
import { Layout } from "./Layout";
import { Box, BoxProps } from "../../common";

// TODO: Add components
export const mdxComponents: MDXComponents = {
  wrapper: (props) => <Layout {...props} />,
  Ja: ({ children, className, ...props }: BoxProps) => (
    <Box className={`ja ${className}`} {...props}>
      {children}
    </Box>
  ),
  En: ({ children, className, ...props }: BoxProps) => (
    <Box className={`en ${className}`} {...props}>
      {children}
    </Box>
  ),
};
