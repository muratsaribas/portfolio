import React from "react";
import xooiImg from '@/public/xooi.jpg';
import graduateImg from '@/public/graduate.png';
import isgenImg from '@/public/isgen.png';
import svtImg from '@/public/SVTDashboard.png';

import { CgWorkAlt } from "react-icons/cg";
import { FaAngular } from "react-icons/fa";

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

export const experiencesData = [
    {
        title: "Front-End Developer",
        location: "AKIM METAL AR-GE",
        description:`
        ● Integrated APIs with Angular applications, enhancing data accessibility and functionality for end users.<br>
        ● Developed reusable UI components using Angular libraries, promoting code consistency across
        projects while reducing development time significantly.<br>
        ● Worked closely with UX/UI designers to translate their designs into functional web applications.
        `,
        icon: React.createElement(CgWorkAlt),
        date: "10/2021 - 09/2023",
    },
    {
        title: "Front-End Developer",
        location: "XOOI",
        description:`
            ● Developed user-friendly interfaces for web applications, resulting in increased user satisfaction and
            engagement.<br>
            ● Utilized HTML, CSS, and JavaScript to create visually appealing and responsive web pages that met
            client requirements.<br>
            ● Developed and maintained CRM/SPM modules to enhance customer relationship management and
            sales performance.<br>
            ● Created project management modules, including task assignment, progress tracking, and reporting
            features, to facilitate effective project execution.
        `,
        icon: React.createElement(FaAngular),
        date: "09/2023 - present",
    },
] as const;

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
    "Angular",
    "Git",
    "Tailwind",
    "NGRX",
    "RxJS",
    "SignalR",
    "Next.js",
    "RESTful API",
    "Responsive Design"
] as const;