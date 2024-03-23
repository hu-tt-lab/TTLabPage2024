import { Stack, Typography } from "../common";

const currYear = new Date().getFullYear();

export function Footer() {
  return (
    <Stack
      sx={{
        alignItems: "center",
        justifyContent: "center",
        p: 2,
      }}
    >
      <Typography variant="body2" color="gray">
        &copy; {currYear} Neural Control Engineering Group
      </Typography>
    </Stack>
  );
}
