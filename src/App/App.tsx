/* eslint-disable react-hooks/exhaustive-deps */
import {
  SecondSection,
  FirstSection,
  ThirdSection,
  ExampleSection,
  FooterSection,
} from "@/Layout";
import { ThemeSwitcher } from "@/components";
import { scrollbarStyle } from "@/styles/scrollbar";
import { ScreenContainer, Space } from "@whatssub/wds-react-web";
import styled from "styled-components";

function App() {
  return (
    <ScreenContainer>
      <Container>
        <FirstSection />
        <Space vertical={"10vh"} />
        <SecondSection />
        <Space vertical={"10vh"} />
        <ThirdSection />
        <ExampleSection />
        <Space vertical={"10vh"} />
        <FooterSection />
        <MenuContainer>
          <ThemeSwitcher />
        </MenuContainer>
      </Container>
    </ScreenContainer>
  );
}

export default App;

const Container = styled.div`
  max-width: 100vw;
  min-height: 100vh;

  position: relative;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  background-color: var(--background-common-primary);

  ${scrollbarStyle}
`;

const MenuContainer = styled.div`
  position: fixed;
  top: 30px;
  right: 30px;

  cursor: pointer;
`;
