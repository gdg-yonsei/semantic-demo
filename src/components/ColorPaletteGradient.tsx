import { hoveredTheme } from "@/atoms";
import { ColorTheme } from "@gdsc-yonsei/color";
import { palette } from "@gdsc-yonsei/color/dist/constants/palette";
import { Space } from "@whatssub/wds-react-web";
import classNames from "classnames";
import { useMemo } from "react";
import { useRecoilValue } from "recoil";
import styled from "styled-components";

const ColorPaletteGradient = () => {
  // const { tag: blueTag, content } = useSemanticColor(ColorTheme.Blue);
  // const { tag: greenTag } = useSemanticColor(ColorTheme.Green);
  // const { tag: yellowTag } = useSemanticColor(ColorTheme.Yellow);
  // const { tag: redTag } = useSemanticColor(ColorTheme.Red);

  const currentHoveredTheme = useRecoilValue(hoveredTheme);

  const currentThemeColorPalette = useMemo(() => {
    switch (currentHoveredTheme) {
      case ColorTheme.Blue:
        return palette.blue;
      case ColorTheme.Green:
        return palette.green;
      case ColorTheme.Red:
        return palette.red;
      case ColorTheme.Yellow:
        return palette.yellow;
      default:
        return palette.gray;
    }
  }, [currentHoveredTheme]);

  const currentThemeGrayscalePalette = useMemo(() => {
    switch (currentHoveredTheme) {
      case ColorTheme.Blue:
      case ColorTheme.Green:
        return palette.coolGray;
      case ColorTheme.Red:
      case ColorTheme.Yellow:
        return palette.warmGray;
      default:
        return palette.gray;
    }
  }, [currentHoveredTheme]);

  // const getTagLabelColor = useMemo(() => {
  //   switch (currentHoveredTheme) {
  //     case ColorTheme.Blue:
  //       return blueTag.secondary.label.common;
  //     case ColorTheme.Green:
  //       return greenTag.secondary.label.common;
  //     case ColorTheme.Red:
  //       return redTag.secondary.label.common;
  //     case ColorTheme.Yellow:
  //       return yellowTag.secondary.label.common;
  //     default:
  //       return content.white;
  //   }
  // }, [currentHoveredTheme]);

  // const styles = createStyleSheet({
  //   subtitle: {
  //     color: getTagLabelColor,
  //   },
  // });

  return (
    <ColorPaletteGradientContainer>
      <Subtitle>Main</Subtitle>
      <Space vertical={32} />
      <ColorPaletteGradientWrapper>
        {Object.values(currentThemeColorPalette).map(
          (hexcode, hexcodeIndex) => {
            return (
              <GradientLabelWrapper
                style={{
                  backgroundColor: hexcode,
                }}
                key={hexcodeIndex}
              >
                <GradientLabel
                  className={classNames({ unset: !currentHoveredTheme })}
                >
                  {hexcode}
                </GradientLabel>
              </GradientLabelWrapper>
            );
          }
        )}
      </ColorPaletteGradientWrapper>
      <ColorPaletteGradientWrapper>
        <Space vertical={32} />
        <Subtitle>Grayscale</Subtitle>
        <Space vertical={32} />
        {Object.values(currentThemeGrayscalePalette).map(
          (hexcode, hexcodeIndex) => {
            return (
              <GradientLabelWrapper
                style={{
                  backgroundColor: hexcode,
                }}
                key={hexcodeIndex}
              >
                <GradientLabel
                  className={classNames({ unset: !currentHoveredTheme })}
                >
                  {hexcode}
                </GradientLabel>
              </GradientLabelWrapper>
            );
          }
        )}
      </ColorPaletteGradientWrapper>
    </ColorPaletteGradientContainer>
  );
};

export default ColorPaletteGradient;

const ColorPaletteGradientContainer = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

const Subtitle = styled.div`
  width: 100%;
  font-size: 48px;

  display: flex;
  justify-content: center;
  align-items: center;

  transition: color var(--theme-transition);
`;

const ColorPaletteGradientWrapper = styled.div`
  width: 100%;

  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
`;

const GradientLabelWrapper = styled.div`
  flex: 1;
  height: 60px;

  transition: background-color var(--theme-transition),
    color var(--theme-transition);

  display: flex;
  justify-content: center;
  align-items: center;
`;

const GradientLabel = styled.span`
  font-size: 16px;

  color: var(--content-white);

  &.unset {
    color: transparent;
    mix-blend-mode: unset;
  }
`;
