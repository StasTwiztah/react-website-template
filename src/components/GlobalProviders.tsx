import { FC, PropsWithChildren } from "react";
import { ThemeProvider } from "./styles/ThemeProvider";

export const GlobalProviders: FC<PropsWithChildren> = ({ children }) => {
  return <ThemeProvider>{children}</ThemeProvider>;
};
