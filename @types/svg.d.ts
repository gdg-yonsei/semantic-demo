/*
  Copyright 2023 Whatssub co.,Ltd.
  All rights reserved.
*/

/**
 * ### SVG 파일 타입 정의
 *
 * svg 확장자 타입 정의를 위하여 svgr 모듈을 덮습니다.
 */
declare module '*.svg' {
  import { ReactElement, SVGProps } from 'react';

  const content: (props: SVGProps<SVGAElement>) => ReactElement;

  export default content;
}
