import { hero_banner, logo_regular } from "@/assets";
import { ColorTheme, useSemanticColor, useTheme } from "@gdsc-yonsei/color";
import { Image, createStyleSheet } from "@whatssub/wds-react-web";
import styled from "styled-components";

const FirstSection = () => {
  const currentTheme = useTheme();
  const { tag } = useSemanticColor();

  const getHueRotation = () => {
    switch (currentTheme) {
      case ColorTheme.Yellow:
        return "360deg";
      case ColorTheme.Green:
        return "100deg";
      case ColorTheme.Blue:
        return "170deg";
      case ColorTheme.Red:
        return "305deg";
    }
  };

  const styles = createStyleSheet({
    logo: {
      position: "absolute",
      top: "60px",
      left: "60px",
      zIndex: 100,
    },
    banner: {
      position: "absolute",
      top: 0,
      left: "0vw",
      height: "85vh",
      filter: `hue-rotate(${getHueRotation()})`,
      transition: "filter 0.4s ease-in-out",
    },
    centerSpan: {
      color: tag.secondary.label.common,
    },
  });

  return (
    <FirstSectionContainer>
      <Image src={logo_regular} size={60} fadeIn style={styles.logo} />
      <Image
        src={hero_banner}
        style={styles.banner}
        fadeIn
        objectFit={"cover"}
      />
      <Lowercontainer>
        <HeadingWrapper>
          <Heading />
        </HeadingWrapper>
        <LowerSpan>Be efficient, Be semantic</LowerSpan>
      </Lowercontainer>
      <CenterSpanWrapper>
        <CenterSpan style={styles.centerSpan}>Semantics</CenterSpan>
      </CenterSpanWrapper>
    </FirstSectionContainer>
  );
};

export default FirstSection;

const FirstSectionContainer = styled.section`
  width: 100%;
  height: 100vh;

  position: relative;
`;

const CenterSpanWrapper = styled.div`
  width: 100%;
  height: 100%;

  position: absolute;
  top: 0;
  left: 0;

  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 32px;
`;

const Lowercontainer = styled.div`
  position: absolute;
  bottom: 0;
  padding-left: 5%;

  width: 100%;
  height: 15vh;

  display: flex;
  align-items: center;
  gap: 2vw;
`;

const HeadingWrapper = styled.div`
  width: 80px;
  height: 100%;

  padding-top: 30px;
`;

const Heading = styled.div`
  width: 100%;
  height: 10px;

  border-radius: 2px;
  background-color: var(--content-gray-a7);
`;

const CenterSpan = styled.span`
  font-size: 20vmin;
  font-weight: 500;

  color: var(--content-gray-a1);

  transition: color var(--theme-transition);
  user-select: none;
`;

const LowerSpan = styled.span`
  font-style: italic;
  font-weight: 300;

  font-size: 8vmin;
`;
