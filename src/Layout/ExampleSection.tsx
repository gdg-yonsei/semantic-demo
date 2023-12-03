import { CodeSnippet, DeviceMockup, DeviceMockupSecond } from "@/components";
import { ButtonSample, TabbarSample } from "@/constants";
import { useSemanticColor } from "@gdsc-yonsei/color";
import {
  ButtonFrame,
  Icon,
  Space,
  createStyleSheet,
  useScreen,
} from "@whatssub/wds-react-web";
import styled from "styled-components";

const ExampleSection = () => {
  const { button, content } = useSemanticColor();
  const { setBusy } = useScreen();

  const styles = createStyleSheet({
    background: {
      padding: "0 8px",
      borderRadius: "4px",
    },
    label: {
      fontSize: "14px",
    },
  });

  return (
    <ExampleSectionContainer>
      <Space vertical={"10vh"} />
      <Title>Example</Title>
      <Space vertical={16} />
      <Subtitle>
        Pro tip: You may change theme at the upper right corner :)
      </Subtitle>
      <Space vertical={32} />
      <IconContainer>
        <Icon.ArrowFullDown size={32} fill={content.gray.a7} />
        <Icon.ArrowFullDown size={32} fill={content.gray.a7} />
        <Icon.ArrowFullDown size={32} fill={content.gray.a7} />
        <Icon.ArrowFullDown size={32} fill={content.gray.a7} />
        <Icon.ArrowFullDown size={32} fill={content.gray.a7} />
        <Icon.ArrowFullDown size={32} fill={content.gray.a7} />
      </IconContainer>
      <ButtonFrame
        label={"Click to make loading state"}
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
        disabledLabel={"Loading..."}
        onClick={() => {
          setBusy(true);
          setTimeout(() => setBusy(false), 2500);
        }}
      />
      <Space vertical={"10vh"} />
      <DeviceContainer>
        <DeviceMockup />
        <CodeSnippet>{ButtonSample}</CodeSnippet>
      </DeviceContainer>
      <Space vertical={"5vh"} />
      <DeviceContainer>
        <DeviceMockupSecond />
        <CodeSnippet kind={"flutter"}>{TabbarSample}</CodeSnippet>
      </DeviceContainer>
    </ExampleSectionContainer>
  );
};

export default ExampleSection;

const ExampleSectionContainer = styled.section`
  width: 100%;
  padding: 0 10vw;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

  background-color: var(--background-common-primary);
`;

const Title = styled.span`
  line-height: 1.05;
  font-size: min(84px, 12vmin);

  transition: color var(--theme-transition);

  color: var(--content-gray-a7);

  &.hovered {
    color: inherit;
  }
`;

const Subtitle = styled.span`
  line-height: 1.05;
  font-size: min(20px, 3vmin);

  transition: color var(--theme-transition);

  color: var(--content-gray-a7);
`;

const IconContainer = styled.div`
  width: 100%;

  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const DeviceContainer = styled.div`
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 32px;

  @media screen and (max-width: 1500px) {
    flex-direction: column;
  }
`;
