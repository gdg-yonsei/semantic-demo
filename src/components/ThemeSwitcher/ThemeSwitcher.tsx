import {
  ColorTheme,
  type ThemeConfigSetterFn,
  useSetTheme,
  useTheme,
} from "@gdsc-yonsei/color";
import { createStyleSheet } from "@whatssub/wds-react-web";
import { useRef, useState } from "react";
import styled from "styled-components";

const ThemeSwitcher = () => {
  const figureRef = useRef<HTMLDivElement>(null);
  const currentTheme: ColorTheme = useTheme();
  const themeSetter: ThemeConfigSetterFn = useSetTheme();

  const [pressCount, setPressCount] = useState(0);

  const onClickThemeSwitcher = () => {
    setPressCount((prev) => prev + 1);
    switch (currentTheme) {
      case ColorTheme.Blue:
        return themeSetter(ColorTheme.Green);
      case ColorTheme.Green:
        return themeSetter(ColorTheme.Red);
      case ColorTheme.Red:
        return themeSetter(ColorTheme.Yellow);
      case ColorTheme.Yellow:
        return themeSetter(ColorTheme.Blue);
    }
  };

  const styles = createStyleSheet({
    figure: {
      rotate: `${pressCount * 90}deg`,
    },
  });

  return (
    <ThemeSwitcherContainer onClick={onClickThemeSwitcher}>
      <ThemeSwitcherTriangle />
      <ThemeSwitcherFigure
        ref={figureRef}
        style={styles.figure}
        $currentTheme={currentTheme}
      />
    </ThemeSwitcherContainer>
  );
};

export default ThemeSwitcher;

const ThemeSwitcherContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  gap: 5px;
`;

const ThemeSwitcherTriangle = styled.figure`
  width: 0px;
  height: 0px;
  border-style: solid;
  border-width: 8.7px 5px 0 5px; // 10px size
  border-color: var(--content-gray-a7) transparent transparent transparent;
`;

const ThemeSwitcherFigure = styled.figure<{ $currentTheme: ColorTheme }>`
  width: 30px;
  height: 30px;

  border: 1px solid var(--border-secondary);
  border-radius: 5px;
  background: conic-gradient(
    var(--content-tint-color-blue-a2) 0deg 45deg,
    var(--content-tint-color-yellow-a2) 45deg 135deg,
    var(--content-tint-color-red-a2) 135deg 225deg,
    var(--content-tint-color-green-a2) 225deg 315deg,
    var(--content-tint-color-blue-a2) 315deg 0deg
  );

  aspect-ratio: 1 / 1;
  transition: rotate var(--theme-transition);
`;
