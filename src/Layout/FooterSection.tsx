import { FooterRowItem } from "@/components";
import { Space } from "@whatssub/wds-react-web";
import styled from "styled-components";

const FooterSection = () => {
  return (
    <FooterSectionContainer>
      <Space vertical={96} />
      <UpperTitleContainer>
        <Title>Let's</Title>
        <Title>Build</Title>
      </UpperTitleContainer>
      <UpperTitleContainer>
        <Title>Together</Title>
      </UpperTitleContainer>
      <Space vertical={32} />
      <FooterRowItem
        link={
          "https://www.figma.com/file/wFwdtlpxKDz3CUCyx8cJIJ/GDSC-Yonsei---Semantic-Color-System?type=design&node-id=93%3A1497&mode=design&t=l7INFqTGfU0nESk9-1"
        }
        leftLabel={"Semantic Color - Figma"}
      />
      <FooterRowItem
        link={
          "https://github.com/gdsc-ys/gdsc-ys-web/blob/main/packages/color/README.md"
        }
        leftLabel={"Semantic Color - React"}
      />
      <FooterRowItem
        link={"https://github.com/gdsc-ys/color-flutter"}
        leftLabel={"Semantic Color - Flutter"}
      />
      <FooterBottom>
        <FooterSpan>
          <a
            href="https://gdsc-ys.github.io"
            target="_blank"
            rel="noopener noreferrer"
          >
            gdsc-ys.github.io
          </a>
        </FooterSpan>
        <FooterSpan>© 2023 GDSC Yonsei</FooterSpan>
      </FooterBottom>
    </FooterSectionContainer>
  );
};

export default FooterSection;

const FooterSectionContainer = styled.section`
  width: 100%;
  height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

  background-color: var(--content-gray-a7);
`;

const UpperTitleContainer = styled.div`
  width: 100%;

  display: flex;
  justify-content: space-between;
`;

const Title = styled.span`
  line-height: 1.05;
  font-size: min(216px, 20vmin);
  font-weight: 800;

  transition: color var(--theme-transition);

  color: var(--content-gray-a1);

  &.hovered {
    color: inherit;
  }
`;

const FooterBottom = styled.div`
  width: 100%;
  padding: 0 1vw;

  position: absolute;
  left: 0;
  bottom: 5px;

  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  gap: 5vw;
`;

const FooterSpan = styled.span`
  font-weight: 200;
  color: var(--content-gray-a1);
`;
