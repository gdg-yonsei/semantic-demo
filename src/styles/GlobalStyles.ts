import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle`
  ${reset}
  
  body,
  html {
    width: 100%;
    height: 100%;

    margin: 0;
    padding: 0;
  }

  body {
    width: 100%;
    height: 100%;

    /* 기본 폰트 설정 */
    font-size: 16px;
  }

  :root {
    width: 100%;
    height: 100%;

    font-family: "Google Sans", system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    --theme-transition-duration: 200ms;
    --theme-transition: 200ms ease-in-out;
  }

  /* a 태그 스타일 기본 설정 */
  a, a:active {
    color: inherit;
    text-decoration: none;
  }

  /* button 태그 스타일 기본 설정 */
  button {
    border: none;
    cursor: pointer;
  }

  /* box-size 설정 및 webview 하이라이트 설정 */
  *,
  *::after,
  *::before {
    box-sizing: border-box !important;
    -webkit-tap-highlight-color: transparent;
  }

  /* 버튼 설정  */
  [role="button"] {
    cursor: pointer;
    user-select: none;
  }
`;

export default GlobalStyles;
