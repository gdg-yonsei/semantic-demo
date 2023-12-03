import { hoveredTheme } from "@/atoms";
import ColorCodeBlock from "@/components/ColorCodeBlock";
import ColorPaletteGradient from "@/components/ColorPaletteGradient";
import RGBBlock from "@/components/RGBBlock";
import { ColorTheme } from "@gdsc-yonsei/color";
import { Space, useEventListener } from "@whatssub/wds-react-web";
import classNames from "classnames";
import { useRef } from "react";
import { useRecoilState } from "recoil";
import styled from "styled-components";

const ThirdSection = () => {
  const [currentHoveredTheme, setHoveredTheme] = useRecoilState(hoveredTheme);
  const colorblockContainerRef = useRef<HTMLDivElement>(null);

  useEventListener(
    "mouseleave",
    () => {
      setHoveredTheme(null);
    },
    colorblockContainerRef
  );

  return (
    <ThirdSectionContainer
      className={classNames(currentHoveredTheme)}
      ref={colorblockContainerRef}
    >
      <Space vertical={"10vh"} />
      <Title className={classNames({ hovered: !!currentHoveredTheme })}>
        Themes
      </Title>
      <Space vertical={"10vh"} />
      <UpperDivider />
      <Space vertical={64} />
      <ColorBlockContainer>
        <ColorCodeBlock
          centerLabel={"R"}
          description={"Red"}
          kind={ColorTheme.Red}
        />
        <ColorCodeBlock
          centerLabel={"G"}
          description={"Green"}
          kind={ColorTheme.Green}
        />
        <ColorCodeBlock
          centerLabel={"B"}
          description={"Blue"}
          kind={ColorTheme.Blue}
        />
        <ColorCodeBlock
          centerLabel={"Y"}
          description={"Yellow"}
          kind={ColorTheme.Yellow}
        />
      </ColorBlockContainer>
      <Space vertical={64} />
      <RGBNumberContainer>
        <RGBBlock />
      </RGBNumberContainer>
      <Space vertical={64} />
      <LowerDivider />
      <Space vertical={64} />
      <ColorPaletteGradient />
      <Space vertical={"5vh"} />
      <ParagraphWrapper>
        <Paragraph>
          The selection of four themes depends on the desired primary color,
          &nbsp;
          <strong
            className={classNames({
              emphasized: currentHoveredTheme === ColorTheme.Blue,
            })}
          >
            blue
          </strong>
          ,&nbsp;
          <strong
            className={classNames({
              emphasized: currentHoveredTheme === ColorTheme.Green,
            })}
          >
            green
          </strong>
          ,&nbsp;
          <strong
            className={classNames({
              emphasized: currentHoveredTheme === ColorTheme.Yellow,
            })}
          >
            yellow
          </strong>
          , or,&nbsp;
          <strong
            className={classNames({
              emphasized: currentHoveredTheme === ColorTheme.Red,
            })}
          >
            red
          </strong>
          . Each theme comprises of primary-color-centered colorsets,
          accompanied by either&nbsp;
          <strong
            className={classNames({
              emphasized:
                currentHoveredTheme === ColorTheme.Red ||
                currentHoveredTheme === ColorTheme.Yellow,
            })}
          >
            warm-gray
          </strong>
          &nbsp; or&nbsp;
          <strong
            className={classNames({
              emphasized:
                currentHoveredTheme === ColorTheme.Green ||
                currentHoveredTheme === ColorTheme.Blue,
            })}
          >
            cool-gray
          </strong>
          &nbsp; grayscale colorsets.
          <br /> <br />
          Specifically, Theme Blue and Theme Green are paired with cool-gray
          colorset, while Theme Yellow and Theme Red warm-gray colorset.
          <br /> <br />
          <a
            href="https://www.figma.com/file/wFwdtlpxKDz3CUCyx8cJIJ/GDSC-Yonsei---Semantic-Color-System?type=design&node-id=1208%3A7832&mode=design&t=l7INFqTGfU0nESk9-1"
            target={"_blank"}
            rel="noreferrer noopener"
          >
            Refer to Figma page for more information.
          </a>
        </Paragraph>
      </ParagraphWrapper>
      <Space vertical={"10vh"} />
    </ThirdSectionContainer>
  );
};

export default ThirdSection;

const ThirdSectionContainer = styled.section`
  will-change: background-color, color;
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

  background-color: #9f9f8d;

  transition: background-color var(--theme-transition),
    color var(--theme-transition);

  &.red {
    background-color: var(--content-tint-color-red-a3);
    color: var(--content-tint-color-red-a1);
  }

  &.blue {
    background-color: var(--content-tint-color-blue-a3);
    color: var(--content-tint-color-blue-a1);
  }

  &.green {
    background-color: var(--content-tint-color-green-a3);
    color: var(--content-tint-color-green-a1);
  }

  &.yellow {
    background-color: var(--content-tint-color-yellow-a3);
    color: var(--content-tint-color-yellow-a1);
  }
`;

const Title = styled.span`
  line-height: 1.05;
  font-size: min(84px, 12vmin);

  margin-left: 10vw;

  transition: color var(--theme-transition);

  color: var(--content-gray-a1);

  &.hovered {
    color: inherit;
  }
`;

const UpperDivider = styled.div`
  width: 80vw;
  height: 3px;

  margin-left: -10vw;

  background-color: var(--content-gray-a1);
`;

const ColorBlockContainer = styled.div`
  width: 100%;
  padding: 3vh 5vw;
  padding-bottom: 0;

  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-column-gap: 2.5vw;
`;

const RGBNumberContainer = styled.div`
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const LowerDivider = styled.div`
  width: 80vw;
  height: 3px;
  margin-left: auto;

  background-color: var(--content-gray-a1);
`;

const ParagraphWrapper = styled.div`
  width: 100%;

  padding: 0 20vw;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;

const Paragraph = styled.p`
  font-size: min(24px, 4vmin);
  line-height: 1.2;

  color: var(--content-gray-a1);

  transition: color var(--theme-transition),
    background-color var(--theme-transition);

  strong {
    background-color: transparent;
    transition: background-color var(--theme-transition),
      padding var(--theme-transition);

    border-radius: 4px;
    padding: 0;
  }

  strong.emphasized {
    background-color: var(--content-gray-a1);
    color: var(--content-gray-a7);
    padding: 0 2px;
  }

  a {
    padding: 4px;
    border-radius: 4px;

    line-height: 2;

    text-decoration: underline;
    background-color: var(--content-gray-a1);
    color: var(--content-gray-a7);
  }
`;
