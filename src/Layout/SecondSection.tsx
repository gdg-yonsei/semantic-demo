import { ColorTheme, useSemanticColor, useTheme } from "@gdsc-yonsei/color";
import {
  ButtonFrame,
  Popover,
  Space,
  createStyleSheet,
  useScreen,
} from "@whatssub/wds-react-web";
import { useMemo } from "react";
import styled from "styled-components";

const SecondSection = () => {
  const { button, background, content } = useSemanticColor();
  const { setBusy } = useScreen();
  const theme = useTheme();

  const leftLabelColor = useMemo(() => {
    switch (theme) {
      case ColorTheme.Blue:
        return content.tintColor.blue.a3;
      case ColorTheme.Green:
        return content.tintColor.green.a3;
      case ColorTheme.Red:
        return content.tintColor.red.a3;
      case ColorTheme.Yellow:
        return content.tintColor.yellow.a3;
      default:
        return content.gray.a7;
    }
  }, [theme]);

  const styles = createStyleSheet({
    background: {
      padding: "8px 16px",
      borderRadius: "16px",
      width: "17.5vmax",
      aspectRatio: "3/1",
    },
    label: {
      fontSize: "2vmax",
    },
    leftLabel: {
      color: leftLabelColor,
    },
  });

  return (
    <SecondSectionContainer>
      <SecondSectionUpperContainer>
        <SecondSectionLeftContainer>
          <Title style={styles.leftLabel}>Semantic Color System</Title>
          <LeftParagraph style={styles.leftLabel}>
            A semantic color system is a collection of tints, tones, and shades
            named after what they represent rather than how they look.
            <br />
            <br />
            Semantic names assigned to each color give a hint about what they're
            meant for, and how they should be utilized, easier to guess how they
            are supposed to be used.
            <br />
            <br />
            Test by changing color theme at the upper right corner.
            <br />
            The background and label color of button changed automatically
            according to the theme.
          </LeftParagraph>
        </SecondSectionLeftContainer>
        <SecondSectionRightContainer>
          <Popover position="top" backgroundColor={background.common.tertiary}>
            <Popover.Anchor width={"300px"}>
              <div>
                <ButtonFrame
                  label={"Click me"}
                  backgroundColor={{
                    common: button.primary.background.common,
                    focused: button.primary.background.active,
                    pressed: button.primary.background.pressed,
                    loading: button.primary.background.loading,
                    disabled: button.primary.background.disabled,
                  }}
                  labelColor={{
                    common: button.primary.label.common,
                    focused: button.primary.label.active,
                    pressed: button.primary.label.pressed,
                    loading: button.primary.label.loading,
                    disabled: button.primary.label.disabled,
                  }}
                  style={styles.background}
                  disabledLabel={"Disabled!"}
                  labelStyle={styles.label}
                />
                <Space vertical={16} />
                <ButtonFrame
                  label={"Click to disable"}
                  backgroundColor={{
                    common: button.primary.background.common,
                    focused: button.primary.background.active,
                    pressed: button.primary.background.pressed,
                    loading: button.primary.background.loading,
                    disabled: button.primary.background.disabled,
                  }}
                  labelColor={{
                    common: button.primary.label.common,
                    focused: button.primary.label.active,
                    pressed: button.primary.label.pressed,
                    loading: button.primary.label.loading,
                    disabled: button.primary.label.disabled,
                  }}
                  style={styles.background}
                  labelStyle={styles.label}
                  disabledLabel={"Disabled!"}
                  onClick={() => {
                    setBusy(true);
                    setTimeout(() => setBusy(false), 2500);
                  }}
                />
              </div>
            </Popover.Anchor>
            <Popover.Item>
              <CodeBlockContainer>
                <CodeBlock>
                  common:
                  <br />
                  &nbsp;&nbsp; button.primary.background.common <br /> <br />
                  focused:
                  <br />
                  &nbsp;&nbsp; button.primary.background.focused <br /> <br />
                  pressed:
                  <br />
                  &nbsp;&nbsp; button.primary.background.pressed <br /> <br />
                  disabled:
                  <br />
                  &nbsp;&nbsp; button.primary.background.disabled <br /> <br />
                  loading:
                  <br />
                  &nbsp;&nbsp; button.primary.background.loading <br /> <br />
                </CodeBlock>
              </CodeBlockContainer>
            </Popover.Item>
          </Popover>
        </SecondSectionRightContainer>
      </SecondSectionUpperContainer>
    </SecondSectionContainer>
  );
};

export default SecondSection;

const SecondSectionContainer = styled.section`
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

const SecondSectionUpperContainer = styled.div`
  width: 100%;
  height: 70vh;

  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;

  @media screen and (max-width: 1100px) {
    flex-direction: column;
  }
`;

const SecondSectionLeftContainer = styled.div`
  flex: 1.618;
  width: 100%;
  height: 100%;

  padding: 16px;

  display: flex;
  flex-direction: column;
  justify-content: space-around;

  transition: background-color var(--theme-transition);
  background-color: var(--background-common-secondary);
`;

const Title = styled.span`
  color: var(--content-gray-a7);

  line-height: 1.05;
  font-size: min(72px, 10vmin);
`;

const LeftParagraph = styled.p`
  font-size: min(24px, 4vmin);

  color: var(--content-gray-a7);
  line-height: 1.2;
`;

const SecondSectionRightContainer = styled.div`
  flex: 1;
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 4.5vh;

  background-color: var(--background-common-secondary);
  transition: background-color var(--theme-transition);
`;

const CodeBlockContainer = styled.div`
  width: 350px;
  padding: 16px;

  background-color: var(--background-common-tertiary);
  border-radius: 16px;
`;

const CodeBlock = styled.code`
  width: 100%;
  color: var(--button-secondary-label-common);

  line-height: 1.2;
`;
