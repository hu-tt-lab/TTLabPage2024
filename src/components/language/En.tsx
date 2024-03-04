import { useLangContext } from ".";
import { BoxProps, Box } from "../common";

export const En = ({ children, className, ...props }: BoxProps) => {
  const [lang] = useLangContext();

  return (
    <>
      {lang == "en" && (
        <Box className={`en ${className}`} {...props}>
          {children}
        </Box>
      )}
    </>
  );
};
