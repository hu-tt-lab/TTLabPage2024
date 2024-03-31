import { ReactNode } from "react";
import { LangType, useLangContext } from "../../language";

export type NewsListItemProps = {
  title: string | { [Lang in LangType]: string };
  children?: ReactNode;
};

export function NewsListItem({ title, children }: NewsListItemProps) {
  const [lang] = useLangContext();
  return (
    <>
      <dt>
        {typeof title === "string"
          ? title
          : lang === "en"
          ? title.en
          : title.ja}
      </dt>
      <dd>{children}</dd>
    </>
  );
}
