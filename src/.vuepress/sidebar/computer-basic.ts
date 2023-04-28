import { arraySidebar } from "vuepress-theme-hope";

export const computerBasic = arraySidebar([
    {
        text: "计算机网络",
        icon: "creative",
        prefix: "network/",
        link: "network/",
        children: "structure",
        },
        {
        text: "操作系统",
        icon: "note",
        link:"os/",
        prefix: "os/",
        children: "structure",
        },
]);