import {
  ListItem as MListItem,
  ListItemProps as MListItemProps,
} from "@mui/material";

export type ListItemProps = MListItemProps;

export function ListItem(props: MListItemProps) {
  return <MListItem {...props} />;
}
