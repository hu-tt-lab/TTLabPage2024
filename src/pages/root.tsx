import { Stack, Typography } from "../components/common";
import { CommonContainer } from "../components/layout";

export function Root() {
  return (
    <CommonContainer gap={2}>
      <Stack>
        <Typography variant="h1">神経制御工学研究室</Typography>
        <Typography variant="subtitle1">
          ー新技術と創造で結ぶ知のかけ橋の場ー
        </Typography>
      </Stack>
    </CommonContainer>
  );
}
