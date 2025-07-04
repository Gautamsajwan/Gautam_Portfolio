import { Icons } from "@/components/icons";
import { HomeIcon, Folder } from "lucide-react";

export const DATA = {
  name: "Gautam Sajwan",
  initials: "GS",
  url: "https://gautamdev.vercel.app/",
  location: "Uttarakhand, India",
  locationLink: "https://maps.app.goo.gl/a1654w3gFEs4M73K9",
  description: "Not just another React dev — I build with intention.",
  summary:
    "I am a 2025 CSE graduate with a strong passion for building impactful software applications. I have over a year of experience developing and deploying full-stack web applications using modern tech stacks and frameworks. Through various projects and internships, I have built solid proof of work that reflects my ability to adapt quickly, learn continuously, and deliver efficient, scalable software applications.",
  avatarUrl:
    "https://res.cloudinary.com/dn5rrff6s/image/upload/v1751476816/portfolio%20assets/profile_picture_me_ljbvun.jpg",

  skills: [
    "Javascript",
    "Typescript",
    "SQL",
    "Next.js",
    "React.js",
    "Recoil",
    "Node js",
    "Express js",
    "PostgreSQL",
    "MongoDB",
    "Prisma ORM",
    "RESTful APIs",
    "Webhooks",
    "Web-sockets",
    "Git",
    "Github",
    "Docker",
    "Redis",
    "Open ai",
    "Vercel",
    "Clerk",
    "Framer motion",
    "Firebase",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/projects", icon: Folder, label: "Projects" },
  ],
  contact: {
    email: "gautamsajwan8126@gmail.com",
    tel: "+918126194949",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/Gautamsajwan",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/gautam-sajwan",
        icon: Icons.linkedin,
        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/gautam_9012",
        icon: Icons.x,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "gautamsajwan8126@gmail.com",
        icon: Icons.email,
        navbar: false,
      },
      LeetCode: {
        name: "LeetCode",
        url: "https://leetcode.com/gautamsajwan8126",
        icon: Icons.code,
        navbar: false,
      },
    },
  },
  work: [
    {
      company: "Proelevate",
      href: "https://www.proelevate.in/",
      badges: [],
      location: "Remote",
      title: "Frontend Development Intern",
      logoUrl: "/assets/proelevate_logo.png",
      start: "Feb 2024",
      end: "Apr 2024",
      description:
        "Contributed to the development of a scalable web platform by building responsive UI components, optimizing onboarding flows, and creating dynamic dashboards for real-time user engagement and analytics.",
      certificateLink:
        "https://drive.google.com/file/d/1JWtRbQjSD9s3fxNc_v0d_GVLMoWF0z3w/view?usp=sharing",
    },
  ],
  education: [
    {
      school: "Graphic Era Hill university",
      href: "https://www.gehu.ac.in/",
      degree: "BTech (CSE)",
      logoUrl:
        "https://oeru.org/assets/partnerpage/Graphic-Era-Hill-University.png",
      start: "2021",
      end: "2025",
    },
    {
      school: "St. Anthony's Public School",
      href: "https://saintanthonypublicschool.com/",
      degree: "Senior Secondary",
      logoUrl: "",
      start: "2019",
      end: "2021",
    },
    {
      school: "Carmel School",
      href: "https://carmelchamba.org/",
      degree: "Higher Secondary",
      logoUrl: "",
      start: "2011",
      end: "2019",
    },
  ],
  projects: [
    {
      title: "Livescape",
      href: "https://github.com/GautamSajwan/Livescape",
      dates: "",
      active: true,
      description:
        "A full-stack live streaming platform supporting real-time video ingestion, interactive chat, and creator tools for seamless broadcasting and audience engagement.",
      technologies: [
        "Next.js",
        "LiveKit",
        "PostgreSQL",
        "Prisma",
        "Clerk",
        "Server Actions",
        "Shadcn UI",
        "Zustand",
      ],
      links: [
        {
          type: "Website",
          href: "https://livescape.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/GautamSajwan/Livescape",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image:
        "https://res.cloudinary.com/dn5rrff6s/image/upload/v1751477122/portfolio%20assets/Livescape_demo_mu5ymv.png",
      video: "",
    },
    {
      title: "SQL Genie",
      href: "https://github.com/GautamSajwan/SQL-Genie",
      dates: "",
      active: true,
      description:
        "An AI-powered platform that enables users to interact with relational databases using natural language, featuring real-time schema parsing and contextual query generation.",
      technologies: [
        "Typescript",
        "Next.js",
        "Gemini SDK",
        "PostgreSQL",
        "Express.js",
        "Clerk",
        "Zustand",
        "Tailwind CSS",
        "Shadcn UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://sql-genie-express.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/GautamSajwan/SQL-Genie",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "https://res.cloudinary.com/dn5rrff6s/image/upload/v1751477464/portfolio%20assets/c644a77e-7332-4b8b-a706-38d88b83b56d.png",
      video: "",
    },
    {
      title: "AssetNexus",
      href: "https://github.com/Gautamsajwan/AssetNexus",
      dates: "",
      active: true,
      description:
        "A Digital Asset Management (DAM) platform for organizations to efficiently store, categorize, and manage digital assets with support for multiple file formats and cloud storage.",
      technologies: [
        "React.js",
        "Vite",
        "Tailwind CSS",
        "Express.js",
        "MongoDB",
        "Cloudinary",
      ],
      links: [
        {
          type: "Website",
          href: "https://asset-nexus.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Gautamsajwan/AssetNexus",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "https://res.cloudinary.com/dn5rrff6s/image/upload/v1751477459/portfolio%20assets/Screenshot_66_qshlmy.png",
      video: "",
    },
    {
      title: "AI-Pic",
      href: "https://github.com/Gautamsajwan/Ai-Pic",
      dates: "",
      active: true,
      description:
        "An AI-powered image generation app where users can create, download, and share digital images, leveraging advanced models for high-quality results.",
      technologies: [
        "OpenAI SDK",
        "Typescript",
        "MongoDB",
        "Express.js",
        "Cloudinary",
        "React.js",
        "Tailwind CSS",
      ],
      links: [
        {
          type: "Website",
          href: "https://ai-image-generator-frontend-amber.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Gautamsajwan/Ai-Pic",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "https://res.cloudinary.com/dn5rrff6s/image/upload/v1751478153/portfolio%20assets/Screenshot_148_t17ipr.png",
      video: "",
    },
    {
      title: "SupplySync",
      href: "https://github.com/GautamSajwan/SupplySync",
      dates: "",
      active: true,
      description:
        "Designed an automated supply chain management system to improve transparency, traceability and reliability in industrial supply chain pipeline.",
      technologies: [
        "Next.js",
        "ESP 32",
        "Embedded c++",
        "Mongo db",
        "Express js",
        "Shadcn UI",
        "Zustand",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/GautamSajwan/SupplySyncc",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image:
        "https://res.cloudinary.com/dn5rrff6s/image/upload/v1751520137/portfolio%20assets/3533af7d-f686-43bf-97c5-25f16c1fd3de.png",
      video: "",
    },
    {
      title: "News-Ninja",
      href: "https://github.com/Gautamsajwan/NewsNinja",
      dates: "",
      active: true,
      description:
        "A real-time news application that aggregates and displays news articles with category filters and search, providing a streamlined and up-to-date user experience.",
      technologies: ["Typescript", "React.js", "News API", "Firebase"],
      links: [
        {
          type: "Source",
          href: "https://github.com/Gautamsajwan/NewsNinja",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "https://res.cloudinary.com/dn5rrff6s/image/upload/v1751478373/portfolio%20assets/Screenshot_89_v3ural.png",
      video: "",
    },
  ],
  hackathons: [
    {
      title: "HackIndore",
      dates: "July 2024",
      location: "Indore Municipal Corporation, Indore, India",
      description:
        "Proposed and built an online government asset management solution at Acropolis Institute of Engineering and our team secured a rank among the top 10 submissions.",
      image: "",
      mlh: "",
      links: [
        {
          icon: <Icons.globe className="size-3" />,
          title: "Certificate",
          href: "https://drive.google.com/file/d/10dZac8fANQYzQqFWDVDTtr167zg4RdD5/view?usp=sharing",
        },
      ],
    },
    {
      title: "Innohacks",
      dates: "April 2024",
      location: "KIET Group of Institutions, Ghaziabad, India",
      description:
        "Created a supply chain management system integrating web dev and iot domain achieving transparency, monitoring and tracebility in industrial supply chain operations. Our idea got us among the finalists of the event.",
      image: "",
      mlh: "",
      links: [
        {
          icon: <Icons.globe className="size-3" />,
          title: "Certificate",
          href: "https://drive.google.com/file/d/1NFxuij7pPTrToMMS9nqIartJWVLGqTh3/view?usp=sharing",
        },
      ],
    },
    {
      title: "U-Hackathon 4.0",
      dates: "September 2023",
      location: "University of Petroleum and Energy Studies, Dehradun, India",
      description:
        "Built an interactive full stack Learning Management System with my team in 24 hours addressing the pain points of the educators and students in this domain.",
      image: "",
      mlh: "",
      links: [
        {
          icon: <Icons.globe className="size-3" />,
          title: "Certificate",
          href: "https://drive.google.com/file/d/1FTp8hsMyP65VmE0eP7zhUBo-oTFNTqLZ/view?usp=sharing",
        },
      ],
    },
    {
      title: "TechSurf-2023",
      dates: "August 2023",
      location: "Remote - Dehradun, India",
      description:
        "Designed and developed a Digital Asset Management system simplifying asset handling workflows for companies. It was a solo event and I secured rank 5 out of 40,000+ candidates.",
      image: "",
      mlh: "",
      links: [
        {
          icon: <Icons.globe className="size-3" />,
          title: "Certificate",
          href: "https://drive.google.com/file/d/1RZPI-TS9gaBGHDDa7VRwzlbpt0_xNrhP/view?usp=sharing",
        },
      ],
    },
  ],
} as const;
