export interface ProjectLink {
  label: string;
  url: string;
}

export interface Project {
  image?: string;
  title: string;
  description: string;
  techs: string[];
  links: ProjectLink[];
}

export const decentProjects: Project[] = [
  {
    image: "https://eliasdevis.github.io/images/projects/deplos.webp",
    title: "Deplos",
    description: "Game servers hosting",
    techs: ["Pug", "Stylus", "Node.js"],
    links: [
      { label: "Figma", url: "https://figma.com/community/file/1198393124994627983" },
      { label: "Live", url: "https://deplos.github.io/" },
      { label: "Github", url: "https://github.com/Deplos/deplos.github.io" },
    ],
  },
  {
    image: "https://eliasdevis.github.io/images/projects/pixel-battle.webp",
    title: "Pixel Battle",
    description: "Pixel art battle game",
    techs: ["Preact", "CSS", "PixiJS", "TypeScript"],
    links: [
      { label: "Live", url: "https://pixelbattle.fun/" },
      { label: "Github", url: "https://github.com/pixelate-it/pixelbattle-frontend" },
    ],
  },
  {
    image: "https://eliasdevis.github.io/images/projects/feedrum.webp",
    title: "Feedrum",
    description: "Ukrainian social network designed for programmers",
    techs: ["Node.js", "Next", "React", "Zod"],
    links: [
      { label: "Github", url: "https://github.com/Feedrum-Project/feedrum-next" },
      { label: "Figma", url: "https://figma.com/community/file/1314605686829534158" },
    ],
  },
  {
    image: "https://eliasdevis.github.io/images/projects/chertnodes.webp",
    title: "ChertNodes",
    description: "Minecraft servers hosting",
    techs: ["Python", "Flask", "SCSS"],
    links: [
      { label: "Figma", url: "https://figma.com/community/file/1149829028455305659" },
    ],
  },
  {
    image: "https://eliasdevis.github.io/images/projects/protectx.webp",
    title: "ProtectX web",
    description: "Discord anti-crash bot",
    techs: ["React", "Node.js", "Discord.js"],
    links: [
      { label: "Figma", url: "https://figma.com/community/file/1168662007492356291" },
    ],
  },
  {
    image: "https://eliasdevis.github.io/images/projects/khanswers.webp",
    title: "Kahoot Answers",
    description: "Get answers from kahoot quiz",
    techs: ["Express", "Node.js", "EJS"],
    links: [
      { label: "Live", url: "https://khanswers.vercel.app/" },
      { label: "Github", url: "https://github.com/EliasDevis/kahoot-answers" },
    ],
  },
  {
    image: "https://eliasdevis.github.io/images/projects/kotikbot.webp",
    title: "KotikBot",
    description: "Landing for multi-functional cute discord bot",
    techs: ["HTML", "CSS", "JavaScript"],
    links: [
      { label: "Live", url: "https://kotikbot.github.io/" },
      { label: "Github", url: "https://github.com/kotikbot/kotikbot.github.io" },
    ],
  },
  {
    image: "https://eliasdevis.github.io/images/projects/portfolio.webp",
    title: "This Portfolio",
    description: "My personal portfolio",
    techs: ["JavaScript", "SASS", "WebPack"],
    links: [
      { label: "Figma", url: "https://figma.com/community/file/1164933568884615740" },
      { label: "Github", url: "https://github.com/EliasDevis/EliasDevis.github.io" },
      { label: "Live", url: "https://eliasdevis.github.io/" },
    ],
  },
  {
    image: "https://eliasdevis.github.io/images/projects/madhost.webp",
    title: "MadHost",
    description: "Minecraft and websites hosting with low prices",
    techs: ["Pug", "Less", "Gulp", "Node.js"],
    links: [
      { label: "Live", url: "https://madhost.pw/" },
    ],
  },
];

export const smallProjects: Project[] = [
  {
    title: "Discord Bot Boilerplate",
    description: "Start creating scalable discord.js bot with typescript in seconds",
    techs: ["TypeScript", "Discord.js", "Node.js"],
    links: [
      { label: "Github", url: "https://github.com/EliasDevis/bot-template" },
    ],
  },
  {
    title: "Chess PRO",
    description: "Landing page about service for viewing chess tournaments",
    techs: ["Figma"],
    links: [],
  },
];

// Featured projects for the homepage (first 3)
export const featuredProjects = decentProjects.slice(0, 3);
