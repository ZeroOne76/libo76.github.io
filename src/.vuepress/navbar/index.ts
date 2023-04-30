import { navbar } from "vuepress-theme-hope";

export const navBar = navbar([
    {
        text: "首页",
        icon: "wangluo1", 
        link: "/"
    },
  { text: "计算机基础", icon: "wangluo1", 
    children:[
        {
            text: "计算机网络",
            icon: "odbc-full",
            link: "/computer-basic/network/",
          },
          {
            text: "操作系统",
            icon: "redis",
            link: "/computer-basic/os/",
          },
    ]
},
{ text: "编程之路", icon: "wangluo1", 
    children:[
      {
        text: "基础",
        icon: "odbc-full",
        link: "/programme-path/basic",
      },
        {
            text: "数据库",
            icon: "odbc-full",
            link: "/programme-path/database",
          },
          {
            text: "编程框架",
            icon: "redis",
            link: "/programme-path/framework",
          },{
            text: "中间件",
            icon: "redis",
            link: "/programme-path/middleware",
          },
    ]
},
{ text: "我的世界", icon: "wangluo1", 
    children:[
      {
        text: "个人项目",
        icon: "redis",
        link: "/my-world/personal-project",
      },
        {
            text: "碎碎念",
            icon: "odbc-full",
            link: "/my-world/balabala",
          }
    ]
}
]);
