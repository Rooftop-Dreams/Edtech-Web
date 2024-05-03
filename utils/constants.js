
// import { FundProjectionScreenOutlined } from "@ant-design/icons";
// import { FileTextOutlined } from "@ant-design/icons";
// import { ReadOutlined } from "@ant-design/icons";
// import { ProjectOutlined } from "@ant-design/icons";
// import { FileDoneOutlined } from "@ant-design/icons";
// import { SettingOutlined } from "@ant-design/icons";
import { AiFillInsurance } from "react-icons/ai";
import { FcDocument } from "react-icons/fc";
import { IoDocumentLockSharp } from "react-icons/io5";
export const sidebarRoutes = [
  {
    name: "Reports",
    to: "reports",
    icon: ()=> <AiFillInsurance />,
  },
  {
    name: "Goal",
    to: "goal",
    icon: <AiFillInsurance />,
  },
  {
    name: "Task",
    to: "task",
    icon: <AiFillInsurance />,
  },
  {
    name: "Notes",
    to: "notes",
    icon:  <AiFillInsurance />,
  },
  {
    name: "Blogs",
    to: "blogs",
    icon:  <AiFillInsurance />,
  },
  {
    name: "Projects",
    to: "projects",
    icon: <AiFillInsurance />,
  },
  {
    name: "Finance",
    to: "finance",
    icon: <AiFillInsurance />,
  },
  {
    name: "Docs",
    to: "docs",
    icon: <IoDocumentLockSharp />,
  },
  
  {
    name: "Settings",
    to: "settings",
    icon:  <FcDocument />,
  },

];
