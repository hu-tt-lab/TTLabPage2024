import { useLangContext } from ".";
import { BoxProps, Box } from "../common";

export const Ja = ({ children, className, ...props }: BoxProps) => {
  const [lang] = useLangContext();

  return (
    <>
      {lang == "ja" && (
        <Box className={`ja ${className}`} {...props}>
          {children}
        </Box>
      )}
    </>
  );
};
