import { ColorTheme } from "@gdsc-yonsei/color";
import { atom } from "recoil";

export const hoveredTheme = atom<null | ColorTheme>({
  key: "atoms/hoveredTheme",
  default: null,
});
