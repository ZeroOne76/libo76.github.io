import { sidebar } from "vuepress-theme-hope";
import { myWorld } from "./my-world";
import { computerBasic } from "./computer-basic";
import { programmePath } from "./programme-path";

export const sideBar = sidebar({
  "/my-world/":myWorld,
  "/computer-basic/": computerBasic,
  "/programme-path/":programmePath
 },

);
