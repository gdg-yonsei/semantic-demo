import { hoveredTheme } from "@/atoms";
import { ColorTheme, useSemanticColor } from "@gdsc-yonsei/color";
import {
  createStyleSheet,
  useEventListener,
  useHover,
} from "@whatssub/wds-react-web";
import classNames from "classnames";
import { useMemo, useRef } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import styled from "styled-components";

interface ColorCodeBlockProps {
  kind: ColorTheme;
  centerLabel: string;
  description: string;
}

const ColorCodeBlock = ({
  kind,
  description,
  centerLabel,
}: ColorCodeBlockProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const currentHoveredTheme = useRecoilValue(hoveredTheme);

  const { tag: blueTag, content } = useSemanticColor(ColorTheme.Blue);
  const { tag: greenTag } = useSemanticColor(ColorTheme.Green);
  const { tag: yellowTag } = useSemanticColor(ColorTheme.Yellow);
  const { tag: redTag } = useSemanticColor(ColorTheme.Red);

  const sethoveredTheme = useSetRecoilState(hoveredTheme);
  const hovered = useHover(containerRef);

  const centerLabelColor = useMemo(() => {
    switch (currentHoveredTheme) {
      case ColorTheme.Blue:
        return blueTag.secondary.label.common;
      case ColorTheme.Green:
        return greenTag.secondary.label.common;
      case ColorTheme.Red:
        return redTag.secondary.label.common;
      case ColorTheme.Yellow:
        return yellowTag.secondary.label.common;
      default:
        return content.white;
    }
  }, [currentHoveredTheme]);

  useEventListener(
    "pointerdown",
    () => {
      sethoveredTheme(kind);
    },
    containerRef
  );

  useEventListener(
    "pointerenter",
    () => {
      sethoveredTheme(kind);
    },
    containerRef
  );

  const styles = createStyleSheet({
    label: {
      color: centerLabelColor,
      transition: "color var(--theme-transition)",
    },
  });

  return (
    <ColorCodeBlockContainer
      ref={containerRef}
      className={classNames({ hovered }, kind)}
    >
      <CenterSpanWrapper style={styles.label}>{centerLabel}</CenterSpanWrapper>
      <DescriptionWrapper style={styles.label}>
        {description}
      </DescriptionWrapper>
    </ColorCodeBlockContainer>
  );
};

export default ColorCodeBlock;

const ColorCodeBlockContainer = styled.div`
  will-change: background-color, color;
  width: 20vw;
  min-height: 20vw;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;

  border: 1.2px solid var(--content-gray-a1);
  border-radius: 4px;

  background-color: transparent;
  color: var(--content-gray-a1);

  transition: background-color var(--theme-transition),
    color var(--theme-transition);
  cursor: pointer;

  &.hovered {
    color: var(--tag-primary-label-common);
  }

  &.hovered.red {
    background-color: var(--content-tint-color-red-a1);
  }

  &.hovered.blue {
    background-color: var(--content-tint-color-blue-a1);
  }

  &.hovered.green {
    background-color: var(--content-tint-color-green-a1);
  }

  &.hovered.yellow {
    background-color: var(--content-tint-color-yellow-a1);
  }
`;

const CenterSpanWrapper = styled.div`
  font-size: 10vw;
`;

const DescriptionWrapper = styled.div`
  font-size: 2vw;
`;
