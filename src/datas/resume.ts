import { ResumeConfig } from "../components/types";

/** 初始化常量 */
export const RESUME_INFO: ResumeConfig = {
  avatar: {
    src: undefined,
    hidden: true,
  },
  profile: {
    name: "Jack",
    age: "18",
    sex: "男",
    email: "yourname@gmail.com",
    mobile: "+86 198763455543",
    wechat: "",
    website: "",
    github: "",
    zhihu: "",
    workExpYear: "",
  },
  educationList: [
    {
      edu_time: ["2012.09", "2016.06"],
      school: "中国哈哈哈大学",
      major: "计算机",
      academic_degree: "理学士",
      class: "C++ | 数据结构 | 计算机图形学 | 数据库原理",
    },
  ],
  awardList: [
    {
      award_info: "英语 CET12",
      award_time: "2022",
    },
  ],
  workExpList: [
    {
      company_name: "中国哈哈哈公司",
      department_name: "哈哈哈部",
      work_time: ["2010.07", null],
      work_desc: `1.今天哈哈哈\r\n2.明天哈哈哈`,
    },
  ],
  skillList: [
    {
      skill_name: "JavaScript",
      skill_desc: "全栈开发经验",
      skill_level: 80,
    },
    {
      skill_name: "React / 前端工程化",
      skill_desc: "经验十足",
      skill_level: 80,
    },
    {
      skill_name: "Docker/Linux",
      skill_desc: "",
      skill_level: 55,
    },
  ],
  projectList: [
    {
      project_name: "哈哈哈机器人",
      project_role: "独立开发",
      project_time: "2022.1 - 2035.12",
      project_desc: "提高人类哈哈哈频率",
      project_content: "\r\n1.没有哈哈哈\r\n2.哈哈哈了",
    },
  ],
  workList: [
    {
      work_name: "个人简历",
      visit_link: "https://www.github.com",
    },
  ],
  aboutme: {
    aboutme_desc: `🌱我爱哈哈哈哈哈
    `,
  },
};
