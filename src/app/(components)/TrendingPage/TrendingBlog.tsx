import React from "react";
import { IoLogoJavascript } from "react-icons/io5";
import { FaJava } from "react-icons/fa6";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { IoLogoHtml5 } from "react-icons/io";
import { IoLogoCss3 } from "react-icons/io";
import { TbBrandNextjs } from "react-icons/tb";
import { DiMongodb } from "react-icons/di";
import { FaPython } from "react-icons/fa";
type Props = {};

const TrendingBlog = (props: Props) => {
  const programmingTags = [
    {
      id: 1,
      tag: "#JavaScript",
      icon: <IoLogoJavascript />,
      name: "JavaScript",
      color: "text-yellow-500",
    },
    {
      id: 2,
      tag: "#Python",
      icon: <FaPython />,
      name: "Python",
      color: "text-blue-500",
    },
    {
      id: 3,
      tag: "#Java",
      icon: <FaJava />,
      name: "Java",
      color: "text-blue-500",
    },
    {
      id: 4,
      tag: "#ReactJS",
      icon: <FaReact />,
      name: "ReactJS",
      color: "text-blue-500",
    },
    {
      id: 5,
      tag: "#NodeJS",
      icon: <FaNodeJs />,
      name: "NodeJS",
      color: "text-green-500",
    },
    {
      id: 6,
      tag: "#HTML",
      icon: <IoLogoHtml5 />,
      name: "HTML",
      color: "text-orange-500",
    },
    {
      id: 7,
      tag: "#CSS",
      icon: <IoLogoCss3 />,
      name: "CSS",
      color: "text-blue-500",
    },
    {
      id: 8,
      tag: "#NextJS",
      icon: <TbBrandNextjs />,
      name: "NextJs",
      color: "text-black",
    },
    {
      id: 9,
      tag: "#Mongodb",
      icon: <DiMongodb />,
      name: "Mongodb",
      color: "text-green-500",
    },
    {
      id: 10,
      tag: "#ProgrammingTips",
      icon: "💡",
      name: "Programming Tips",
      color: "text-blue-500",
    },
  ];

  return (
    <>
      <p>Search Blog By Tags</p>
      <div className="flex flex-wrap items-start lg:justify-center  gap-2 lg:px-8 px-2">
        {programmingTags.map((tag) => (
          <button
            key={tag.id}
            className={`flex items-center justify-between gap-2 p-3 py-2 px-6 rounded-md bg-blue-50 m-3 ${tag.color} `}
          >
            {tag.icon}
            {tag.tag}
          </button>
        ))}
      </div>
    </>
  );
};

export default TrendingBlog;
