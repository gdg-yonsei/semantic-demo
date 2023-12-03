import { PropsWithChildren } from "react";
import Highlight from "react-highlight";
import styled from "styled-components";

const CodeSnippet = ({
  children,
  kind = "typescript",
}: PropsWithChildren & { kind?: string }) => {
  return <Snippet className={kind}>{children}</Snippet>;
};

export default CodeSnippet;

const Snippet = styled(Highlight)`
  width: 35vw;
  padding: 16px;

  border-radius: 16px;
  & > * {
    line-height: 1.2;
  }

  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;

  @media screen and (max-width: 1500px) {
    width: 90vw;
  }
`;
