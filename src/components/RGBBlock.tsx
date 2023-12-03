import { hoveredTheme } from "@/atoms";
import { ColorTheme, parseColor, useSemanticColor } from "@gdsc-yonsei/color";
import classNames from "classnames";
import { useEffect, useMemo } from "react";
import { useCountUp } from "react-countup";
import { useRecoilValue } from "recoil";
import styled from "styled-components";

const COUNTER_PROPS = {
  start: 0,
  end: 0,
  delay: 0,
  duration: 0.8,
};

const RGBBlock = () => {
  const currentHoveredTheme = useRecoilValue(hoveredTheme);
  const { content } = useSemanticColor();

  const { update: updateRed } = useCountUp({
    ref: "counter-R",
    ...COUNTER_PROPS,
  });

  const { update: updateGreen } = useCountUp({
    ref: "counter-G",
    ...COUNTER_PROPS,
  });

  const { update: updateBlue } = useCountUp({
    ref: "counter-B",
    ...COUNTER_PROPS,
  });

  const redRGBA = useMemo(() => parseColor(content.tintColor.red.a2), []);
  const greenRGBA = useMemo(() => parseColor(content.tintColor.green.a2), []);
  const blueRGBA = useMemo(() => parseColor(content.tintColor.blue.a2), []);
  const yellowRGBA = useMemo(() => parseColor(content.tintColor.yellow.a2), []);

  useEffect(() => {
    switch (currentHoveredTheme) {
      case ColorTheme.Blue:
        updateRed(blueRGBA.r);
        updateGreen(blueRGBA.g);
        updateBlue(blueRGBA.b);
        break;
      case ColorTheme.Green:
        updateRed(greenRGBA.r);
        updateGreen(greenRGBA.g);
        updateBlue(greenRGBA.b);
        break;
      case ColorTheme.Red:
        updateRed(redRGBA.r);
        updateGreen(redRGBA.g);
        updateBlue(redRGBA.b);
        break;
      case ColorTheme.Yellow:
        updateRed(yellowRGBA.r);
        updateGreen(yellowRGBA.g);
        updateBlue(yellowRGBA.b);
        break;
      default:
        updateRed(0);
        updateGreen(0);
        updateBlue(0);
        break;
    }
  }, [currentHoveredTheme]);

  return (
    <RGBBlockContainer>
      <NumberContainer className={classNames("no-border")}>
        <NumberLabel>R</NumberLabel>
        <NumberLabel>
          <div id={"counter-R"} />
        </NumberLabel>
      </NumberContainer>
      <NumberContainer>
        <NumberLabel>G</NumberLabel>
        <NumberLabel>
          <div id={"counter-G"} />
        </NumberLabel>
      </NumberContainer>
      <NumberContainer>
        <NumberLabel>B</NumberLabel>
        <NumberLabel>
          <div id={"counter-B"} />
        </NumberLabel>
      </NumberContainer>
    </RGBBlockContainer>
  );
};

export default RGBBlock;

const RGBBlockContainer = styled.div`
  will-change: background-color, color;
  width: max(16vw, 200px);

  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;

  border: 1.2px solid var(--content-gray-a1);
  border-radius: 4px;

  background-color: transparent;
  color: var(--content-gray-a1);

  transition: background-color var(--theme-transition),
    color var(--theme-transition);
`;

const NumberContainer = styled.div`
  width: 100%;
  padding: 8px 24px;

  display: flex;
  justify-content: space-between;

  border-top: 1px solid var(--content-gray-a1);

  &.no-border {
    border-top: none;
  }
`;

const NumberLabel = styled.span`
  font-size: 36px;
`;
