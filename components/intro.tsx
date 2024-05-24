"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import React, { useMemo } from 'react';
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";

export default function Intro() {
    
    const getYearDifference = () =>  {
        const start = new Date("09/10/2021");
        const end = new Date();

        let years = end.getFullYear() - start.getFullYear();
        const endMonth = end.getMonth();
        const startMonth = start.getMonth();

        if (endMonth - startMonth < -5) {
            years--;
        }

        return years;
    }

    const experience = useMemo(() => getYearDifference(), []);

    return ( 
        <section className='mb-28 max-w-[50rem] text-center sm:mb-0'>
            <div className='flex items-center justify-center'>
                <div className='relative'>
                    <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                            type: "tween",
                            duration: 0.2
                        }}
                    >
                        <Image src="https://avatars.githubusercontent.com/u/81035521?v=4"
                            alt='Murat portrait' width="192" height="192" quality="95" priority={true}
                            className='h-24 w-24 rounded-full border-[0.35rem] border-white object-cover shadow-xl'
                        />
                    </motion.div>
                    <motion.span className='absolute text-4xl bottom-0 right-0'
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                            type: "spring",
                            stiffness: 125,
                            delay: 0.1,
                            duration: 0.7
                        }}>
                        👋
                    </motion.span>
                </div>
            </div>

            <motion.p className='mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl'
            initial={{ opacity: 0, y: 100}}
            animate={{ opacity: 1, y: 0}}>
                <span className="font-bold">Hello, I'm Murat.</span> I'm a{" "}
                <span className="font-bold">frontend developer</span> with{" "}
                <span className="font-bold">{experience} years</span> of experience. I enjoy
                creating user-friendly <span className="italic">websites & applications</span>. My focus is{" "}
                <span className="underline">JavaScript (Angular)</span>.
            </motion.p>

            <motion.div className='flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium'
            initial={{ opacity: 0, y: 100}}
            animate={{ opacity: 1, y: 0}}
            transition={{ delay: 0.1}}
            >
                <Link href="#contact" 
                className='group flex bg-gray-900 text-white px-7 py-3 items-center gap-2 rounded-full 
                outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition'>
                    Contact me here <BsArrowRight className='opacity-70 group-hover:translate-x-1 transition' />
                </Link>

                <a href='/CV.pdf' download className='group flex bg-white px-7 py-3 items-center gap-2 rounded-full 
                outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer
                border border-black/10'>
                    Download CV <HiDownload className='opacity-60 group-hover:translate-y-1 transition' />
                </a>

                <a href="https://www.linkedin.com/in/saribasmurat/" target='_blank' className='flex bg-white p-4 text-gray-700 items-center gap-2 rounded-full
                focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer border border-black/10'>
                    <BsLinkedin />
                </a>

                <a href="https://github.com/muratsaribas" target='_blank' className='flex bg-white p-4 text-gray-700 items-center gap-2 rounded-full
                focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer border border-black/10'>
                    <FaGithubSquare  />
                </a>
            </motion.div>
        </section>
    )
}
