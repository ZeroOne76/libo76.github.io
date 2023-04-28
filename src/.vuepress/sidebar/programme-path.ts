import { arraySidebar } from "vuepress-theme-hope";

export const programmePath = arraySidebar([
    {
        text: "语言基础",
        icon: "creative",
        prefix: "basic/",
        link: "basic/",
        children: "structure",
        },
        {
        text: "数据库",
        icon: "note",
        link:"database/",
        prefix: "database/",
        children: "structure",
        },
        {
        text: "语言框架",
        icon: "note",
        link:"framework/",
        prefix: "framework/",
        children: "structure",
        },
        {
        text: "中间件",
        icon: "note",
        link:"middleware/",
        prefix: "middleware/",
        children: "structure",
        },

]);