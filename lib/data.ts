import React from 'react';
import { CgWorkAlt } from 'react-icons/cg';
import { FaReact } from 'react-icons/fa';
import { FaGraduationCap } from "react-icons/fa";

export const links = [
  {
    name: 'Home',
    hash: '#home'
  },
  {
    name: 'About',
    hash: '#about'
  },
  {
    name: 'Experience',
    hash: '#experience'
  },
  {
    name: 'Projects',
    hash: '#projects'
  },
  {
    name: 'Skills',
    hash: '#skills'
  },
  {
    name: 'Contact',
    hash: '#contact'
  }
] as const;

export const experiencesData = [
  {
    title: 'University graduate',
    location: 'University of Finance - Marketing',
    description: 'I graduated from University of Finance - Marketing with a degree in Marketing, specializing in Marketing Management with GPA: 3.34/4.0',
    icon: React.createElement(FaGraduationCap),
    date: 'September, 2019 – April, 2023',
    skills: ["Developing a Marketing Strategy", "SEO", "Keyword Planner"]
  },
  {
    title: 'Maketing Staff',
    location: 'Viet Phap Bio Pharmaceutial Joint Stock Company',
    description:`Managed the website and wrote SEO-optimized content,
    resulting in a company sales increase from 4% to 18%.
    Participated in e-commerce platform campaigns, contributing
    to a sales growth ranging from 5% to 15%.
    Implemented Facebook seeding strategies to increase
    customer search traffic.
    Successfully onboarded 2 pharmacy systems, 4 distributors.
    Designed product packaging and banners, templates for ecommerce platforms.
    Generated creative ideas and edited videos for Social.`,
    icon: React.createElement(CgWorkAlt),
    date: 'September, 2022 – September, 2023',
    skills: [
      "Canva",
      "Capcut",
      "Word",
      "Excel",
      "PowerPoint",
      "Teamwork",
      "individual work",
    ],
  },
  {
    title: 'Content Staff',
    location: 'Fitzone Technology Joint Stock Company',
    description:`
    Manage the website, optimize images, and ensure content
    adheres to SEO standards.
    Generate ideas and create weekly content plans for the
    website, Facebook, TikTok, etc.
    Write marketing content for PR and run ads with the aim of
    improving sales targets by 20%.
    Develop Promotion programs increase sales from 1% to 20%.
    Craft content for Landing Pages to enhance web conversion.
    Coordinate with the media team to produce engaging images
    and videos.
    Assist in scripting Livestreams, Short Videos on Social Media.
    Compile Marketing effectiveness reports and set goals for the
    following week
    `,
    icon: React.createElement(CgWorkAlt),
    date: 'September, 2023 – Present',
    skills: [
      "Canva",
      "Capcut",
      "Word",
      "Excel",
      "PowerPoint",
      "Teamwork",
      "Individual work",
    ],
  },
] as const;

export const projectsData = [
  {
    title: 'Degree',
    description:
      `I am pleased to inform you that I have successfully obtained my degree.`,
    linkUrl: 'https://drive.google.com/file/d/1TZkFPIO-ogpbmjvkq_Fy-_j7f-8_PFPl/view',
    tags: ['Canva', 'Capcut', 'Word', 'Excel', 'Teamwork', 'Individual work'],
    imageUrl: "https://indec.vn/wp-content/uploads/2021/06/image6-1.jpg"
  }
] as const;

export const skillsData = [
  { name: "Marketing Strategy", icon: "https://iconape.com/wp-content/files/lp/381661/svg/381661.svg" },
  { name: "Wordpress", icon: "https://iconape.com/wp-content/png_logo_vector/wordpress-blue.png" },
  { name: "SEO", icon: "https://iconape.com/wp-content/png_logo_vector/search-6.png" },
  { name: "Canva", icon: "https://iconape.com/wp-content/png_logo_vector/canva-logo.png" },
  { name: "Capcut", icon: "https://iconape.com/wp-content/png_logo_vector/editpro-video-produkcija-logo.png" },
  { name: "Tiktok", icon: "https://iconape.com/wp-content/png_logo_vector/black-and-white-tiktok-logo.png" },
  { name: "Word", icon: "https://iconape.com/wp-content/png_logo_vector/word-2.png" },
  { name: "Excel", icon: "https://iconape.com/wp-content/png_logo_vector/excel-2.png" },
  { name: "PowerPoint", icon: "https://iconape.com/wp-content/png_logo_vector/powerpoint-2.png" },
] as const;
