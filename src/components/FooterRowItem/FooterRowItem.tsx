import { Icon, useHover } from "@whatssub/wds-react-web";
import classNames from "classnames";
import { useRef } from "react";
import styled from "styled-components";

import type { FooterRowItemProps } from "./FooterRowItem.type";

const FooterRowItem = ({ link, leftLabel }: FooterRowItemProps) => {
  const containerRef = useRef<HTMLAnchorElement>(null);
  const hovered = useHover(containerRef);

  return (
    <FooterRowItemContainer
      ref={containerRef}
      href={link}
      target="_blank"
      rel="noopener noreferrer"
    >
      <Title className={classNames({ hovered })}>{leftLabel}</Title>
      <Icon.ArrowAngleRight size={64} />
    </FooterRowItemContainer>
  );
};

export default FooterRowItem;

const FooterRowItemContainer = styled.a`
  width: 100%;
  height: 90px;
  padding: 0 32px;

  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;

  transition: background-color 0.2s ease-out, color 0.2s ease-out,
    padding 0.2s ease-out;

  border-top: 1px solid var(--content-gray-a1);
  border-bottom: 1px solid var(--content-gray-a1);
  background-color: var(--content-gray-a7);

  cursor: pointer;

  &:hover {
    background-color: var(--content-gray-a1);
    color: var(--content-gray-a7);

    padding: 0 64px;
  }
`;

const Title = styled.span`
  font-size: clamp(24px, 6vw, 48px);
  color: var(--content-gray-a1);

  &.hovered {
    color: var(--content-gray-a7);
  }
`;
