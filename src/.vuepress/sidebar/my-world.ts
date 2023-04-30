import { arraySidebar } from "vuepress-theme-hope";

export const myWorld = arraySidebar([
  {
    text: "个人项目",
    icon: "interview",
    prefix: "personal-project/",
    collapsible: false,
    children: "structure",
  },
  {
    text: "巴拉巴拉",
    icon: "interview",
    prefix: "balabala/",
    collapsible: false,
    children: "structure",
  },
]);