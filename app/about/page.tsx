import React from 'react'
import styles from './About.module.css'
import TypingText from "../components/typingtext/TypingText";

const About = () => {
    return (
        <div className={styles.background}>
            <h1 className='title'>About Me</h1>
            <main className={`${styles.main} fadeIn`}>
                <p className={styles.text}>
                    Hi there! I'm Sam, a passionate and driven software engineer based in Austin, TX. With a strong background in both software and hardware, I’ve always been fascinated by the endless possibilities of technology. Over the years, I’ve honed my skills in full-stack development, particularly with the MERN stack (MongoDB, Express.js, React, and Node.js).
                </p>
                <h2 className={styles.subHead}>My Journey</h2>
                <p className={styles.text}>
                    Growing up in Austin, I was surrounded by a vibrant tech community that fueled my interest in computers. I started tinkering with hardware and repairing computers at a young age, which naturally led me to explore the world of software development. My curiosity and passion for learning have guided me through various projects, each contributing to my growth as a developer.
                </p>
                <h2 className={styles.subHead}>Skills and Expertise</h2>
                <ul className={styles.list}>
                    <li>Frontend: React, HTML, CSS, JavaScript</li>
                    <li>Backend: Node.js, Express.js, Django</li>
                    <li>Database: MongoDB, SQL</li>
                    <li>Tools and Platforms: Visual Studio Code, GitHub</li>
                </ul>
                <p className={styles.text}>
                    I take pride in writing clean, efficient, and scalable code. My experience spans from developing dynamic web applications to crafting intuitive user interfaces. I’m always eager to take on new challenges and continuously improve my craft.
                </p>
                <h2 className={styles.subHead}>What I Do</h2>
                <p className={styles.text}>
                    Currently, I'm focused on building robust applications that provide seamless user experiences. Whether it's a personal project, a freelance job, or contributing to open-source, I love creating software that makes a difference.
                </p>
                <h2 className={styles.subHead}>Let's Connect!</h2>
                <p className={styles.text}>
                    I’m always open to new opportunities and collaborations. If you have a project in mind, want to discuss tech, or simply want to say hello, feel free to reach out!
                </p>
                <ul className={styles.list}>
                    <li>Email: [Your Email]</li>
                    <li>LinkedIn: [Your LinkedIn Profile]</li>
                    <li>GitHub: [Your GitHub Profile]</li>
                </ul>
                <p className={styles.text}>
                    Thank you for visiting my portfolio. I look forward to connecting with you!
                </p>
            </main>
        </div>
    )
}

export default About
