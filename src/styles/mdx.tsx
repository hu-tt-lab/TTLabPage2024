import { MDXComponents } from "mdx/types";
import { MdxPageContainer } from "../components/layout";

export const components: MDXComponents = {
  em: (props) => <i style={{ color: "blue" }} {...props} />,
  wrapper: (props) => {
    return <MdxPageContainer px={4} py={1} {...props} />;
  },
};
