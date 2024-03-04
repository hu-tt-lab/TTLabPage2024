import { MDXComponents } from "mdx/types";
import { Layout } from "./Layout";
import { Ja, En } from "../../language";

// TODO: Add components
export const mdxComponents: MDXComponents = {
  wrapper: (props) => <Layout {...props} />,
  Ja: Ja,
  En: En,
};
