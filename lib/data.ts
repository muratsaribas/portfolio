import React from "react";
import xooiImg from '@/public/xooi.jpg';
import graduateImg from '@/public/graduate.png';
import isgenImg from '@/public/isgen.png';
import svtImg from '@/public/SVTDashboard.png';

export const links = [
    {
        name: "Home",
        hash: "#home",
    },
    {
        name: "About",
        hash: "#about",
    },
    {
        name: "Projects",
        hash: "#projects",
    },
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

// export const experiencesData = [
//     {
//         title: "Graduated bootcamp",
//         location: "Miami, FL",
//         description:
//             "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
//         icon: React.createElement(LuGraduationCap),
//         date: "2019",
//     },
//     {
//         title: "Front-End Developer",
//         location: "Orlando, FL",
//         description:
//             "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
//         icon: React.createElement(CgWorkAlt),
//         date: "2019 - 2021",
//     },
//     {
//         title: "Full-Stack Developer",
//         location: "Houston, TX",
//         description:
//             "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
//         icon: React.createElement(FaReact),
//         date: "2021 - present",
//     },
// ] as const;

export const projectsData = [
    {
        title: "Hybrid Convolutional Neural Network-Based Diagnosis System",
        description:
            "Developed a Hybrid Convolutional Neural Network-Based Diagnosis System for Intracranial Hemorrhage as my graduation project.",
        tags: ["Python", "Deep Learning", "Medical Imaging"],
        imageUrl: graduateImg,
    },
    {
        title: "XOOI CRM",
        description:
            "Developed and maintained CRM/SPM modules to enhance customer relationship management and sales performance.",
        tags: ["Angular", "SignalR", "RxJS", "NGRX", "TailwindCSS"],
        imageUrl: xooiImg,
    },
    {
        title: "ISGen",
        description:
            "Developed a process tracking software aimed at preventing potential work accidents within the scope of occupational health and safety legislation.",
        tags: ["Angular", "PrimeNG", "Apexcharts"],
        imageUrl: isgenImg,
    },
    {
        title: "Meeting Room Module",
        description:
            "Designed to provide real-time visibility into the availability of meeting rooms within an organization.",
        tags: ["Angular", "TailwindCSS", "Microsoft Graph API"],
        imageUrl: '',
    },
    {
        title: "Award",
        description:
            "Developed a comprehensive solution for efficiently gathering and managing data from various field operations.",
        tags: ["Angular", "TaigaUI", "MQTT", "Chart.js", "TailwindCSS"],
        imageUrl: svtImg,
    }
] as const;


export const skillsData = [
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "Git",
    "Tailwind",
    "Prisma",
    "MongoDB",
    "Redux",
    "GraphQL",
    "Apollo",
    "Express",
    "PostgreSQL",
    "Python",
    "Django",
    "Framer Motion",
] as const;