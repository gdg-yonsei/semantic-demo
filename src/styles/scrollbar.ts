import { css } from "styled-components";

export const scrollbarStyle = css`
  scrollbar-gutter: stable;
  &::-webkit-scrollbar {
    width: 5px;
    margin-right: 5px;
    border-radius: 16px;
  }

  &::-webkit-scrollbar-track {
    background: var(--content-gray-a5);

    border-radius: 16px;
  }

  &::-webkit-scrollbar-thumb {
    background: var(--content-gray-a3);
    background-clip: padding-box;

    border-radius: 16px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: var(--content-gray-a2);
  }
`;
