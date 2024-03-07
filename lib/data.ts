import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";
import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { GiJapan } from "react-icons/gi";
import { LuGraduationCap } from "react-icons/lu";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  // {
  //   name: "Projects",
  //   hash: "#projects",
  // },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "University of Southern California",
    location: "Los Angeles, U.S.A.",
    description:
      "I completed my Master of Science in Analytics degree in 2021. I immediately found a job as a full-stack developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2019~2021",
  },
  {
    title: "Full-stack Developer",
    location: "Virginia, U.S.A.",
    description:
      "I have one year of experience as a full-stack developer at a startup, where I utilized C#, .NET Core, and SQL Server for MVC and Web API projects.",
    icon: React.createElement(CgWorkAlt),
    date: "2021 - 2022",
  },
  {
    title: "Full-Stack Developer",
    location: "Texas, U.S.A.",
    description:
      "I use Angular, TypeScript, in the front-end and C#, .NET Core, and PostgreSQL in the back-end.",
    icon: React.createElement(FaReact),
    date: "2022 - 2023",
  },
  {
    title: "Full-Stack Developer",
    location: "Tokyo, Japan",
    description:
      "I'm now a full-stack developer and I'm open to full-time opportunities.",
    icon: React.createElement(GiJapan),
    date: "2023 - 2024",
  },
] as const;

export const projectsData = [
  {
    title: "CorpComment",
    description:
      "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
    imageUrl: corpcommentImg,
  },
  {
    title: "rmtDev",
    description:
      "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: rmtdevImg,
  },
  {
    title: "Word Analytics",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: wordanalyticsImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "Tailwind",
  "Bootstrap",
  "JavaScript",
  "TypeScript",
  "Python",
  "C#",
  "React",
  "Next.js",
  "Angular",
  "Node.js",
  "Express",
  "ASP .NET",
  "Git",
  "Prisma",
  "MongoDB",
  "MySQL",
  "PostgreSQL",
  "Redux",
  "GraphQL",
  "Apollo",
] as const;
