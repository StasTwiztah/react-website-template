import { css } from "@emotion/css";
import { useSetTheme } from "../components/styles/hooks/useSetTheme";
import { useStyles } from "../components/styles/hooks/useStyles";
import { Theme } from "../components/styles/types/Theme";
import { ThemeName } from "../components/styles/types/ThemeName";

const homeStyles = (theme: Theme) => ({
  root: css`
    background-color: ${theme.colors?.backgroundPrimary};
  `,
  heading: css`
    color: ${theme.colors?.primary};
  `,
});

export const Home = () => {
  const styles = useStyles(homeStyles);
  const { setTheme } = useSetTheme();

  return (
    <div className={styles.root}>
      <h1 className={styles.heading}>This is home page</h1>
      <select
        onChange={(e) => setTheme((e.target.value as ThemeName) || "light")}
      >
        <option value="light">Light</option>
        <option value="dark">Dark</option>
      </select>
    </div>
  );
};
