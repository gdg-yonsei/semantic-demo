import { RecoilRoot } from "recoil";
import App from "./App";
import { GlobalStylesProvider } from "@gdsc-yonsei/color";
import { GlobalStyles } from "../styles";
import {
  ColorTheme,
  GlobalStylesProvider as WDSGlobalStyleProvider,
} from "@whatssub/wds-react-web/";
import { ReactLenis } from "@studio-freight/react-lenis";

function AppContainer() {
  return (
    <RecoilRoot>
      <WDSGlobalStyleProvider theme={ColorTheme.Light}>
        <GlobalStylesProvider>
          <GlobalStyles />
          <ReactLenis root>
            <App />
          </ReactLenis>
        </GlobalStylesProvider>
      </WDSGlobalStyleProvider>
    </RecoilRoot>
  );
}

export default AppContainer;
