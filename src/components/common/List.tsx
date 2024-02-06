import { List as MList, ListProps as MListProps } from "@mui/material";

export type ListProps = MListProps;

export function List(props: MListProps) {
  return <MList {...props} />;
}
