import { ResumeConfig } from "../components/types";

export const RESUME_INFO: ResumeConfig = {
  avatar: {
    src: undefined,
    hidden: true,
  },
  profile: {
    name: "Da  lang",
    age: "18",
    sex: "male",
    email: "yourname@gmail.com",
    mobile: "+86 18765430987",
    wechat: "wechat ID",
    website: "",
    github: "https://github.com",
    zhihu: "",
    workExpYear: "",
  },
  educationList: [
    {
      edu_time: ["Sep. 2016", "Jun. 2020"],
      school: "MIT",
      major: "CS",
      academic_degree: "BS",
      class: "Data structures, Computer Vision, C++, Database",
    },
  ],
  awardList: [
    {
      award_info: "Mandarin - Native speaker",
    },
  ],
  workExpList: [
    {
      company_name: "Google",
      department_name: "QA",
      work_time: ["Jun. 2019", null],
      work_desc: `1.Eat apple\r\n2.Drink water`,
    },
  ],
  skillList: [
    {
      skill_name: "JavaScript",
      skill_desc: "",
      skill_level: 90,
    },
    {
      skill_name: "React",
      skill_desc: "very good",
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
      project_name: "IM Robot",
      project_role: "induvidual",
      project_time: "Nov. 2021 - Nov. 2021",
      project_content:
        "\r\n1.Implemented an IM robot.\r\n2.Utilized: Wechat,Node.js",
    },
  ],
  workList: [
    {
      work_name: "resume",
      visit_link: "https://www.github.com",
    },
  ],
  aboutme: {
    aboutme_desc: `i am a apple`,
  },
};
