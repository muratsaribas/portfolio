"use client";

import React from 'react';
import SectionHeading from './section-heading';
import { motion } from 'framer-motion';

export default function About() {
    return (
        <motion.section
        className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.175 }}
        >
            <SectionHeading>About me</SectionHeading>
            <p className="mb-3">
                After completing my degrees in{" "}
                <span className="font-medium">Biomedical Engineering</span>
                {" "}and{" "}<span className="font-medium">Computer Engineering</span>, I decided to channel my enthusiasm for software development 
                into a professional career. 
                As a {" "}<span className="font-medium">Frontend Developer</span>, I am skilled in creating complex web applications using Angular, JavaScript, and TypeScript.
                I enjoy solving challenging problems through innovative solutions. My core stack includes{" "}
                <span className="font-medium">
                Angular, RxJS, NGRX, and TailwindCSS
                </span>
                . I am always looking to
                learn new technologies. I am currently looking for a{" "}
                <span className="font-medium">full-time position</span> as a Frontend Developer
                to apply my expertise and contribute to exciting projects.
            </p>
            <p></p>
        </motion.section>
    );
}
