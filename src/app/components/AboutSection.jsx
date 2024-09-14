"use client";
import Image from 'next/image';
import TabButton from './TabButton';
import { useState, useTransition } from 'react';

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc  grid grid-cols-2 pl-2">
        <li>HTML5</li>
        <li>CSS3</li>
        <li>SCSS</li>
        <li>SASS</li>
        <li>JavaScript</li>
        <li>React</li>
        <li>TailwindCSS</li>
        <li>Redux-Toolkit</li>
        <li>Redux</li>
        <li>NextJs</li>
        <li>Git</li>
        <li>GitHub</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Najot Talim Education</li>
        
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>Frontent React Developer</li>
      </ul>
    ),
  },
];

const TABS = {
  SKILLS: "skills",
  EDUCATION: "education",
  CERTIFICATIONS: "certifications",
};

const AboutSection = () => {
  const [tab, setTab] = useState(TABS.SKILLS);
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image
          src="/images/about-image.png"
          width={500}
          height={500}
          alt="About Me Image"
        />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            I am a Frontend developer with a passion for creating
            interactive and responsive web applications. I have experience
            working with JavaScript, React, Redux,Redux-toolkit, NextJs, TailwindCSS,
            GitHub, SASS, SCSS, HTML, CSS, and Git. I am a quick learner and I am always
            looking to expand my knowledge and skill set. I am a team player and
            I am excited to work with others to create amazing applications.
          </p>
          <nav className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange(TABS.SKILLS)}
              active={tab === TABS.SKILLS}
            >
              Skills
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange(TABS.EDUCATION)}
              active={tab === TABS.EDUCATION}
            >
              Education
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange(TABS.CERTIFICATIONS)}
              active={tab === TABS.CERTIFICATIONS}
            >
              Certifications
            </TabButton>
          </nav>
          <div className="mt-8">
            {tab === TABS.SKILLS && TAB_DATA[0].content}
            {tab === TABS.EDUCATION && TAB_DATA[1].content}
            {tab === TABS.CERTIFICATIONS && TAB_DATA[2].content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
