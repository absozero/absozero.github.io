import { FaPaw, FaVuejs } from "react-icons/fa";
import {
  GiNinjaHeroicStance,
  GiJumpingDog,
  GiEnergySword,
  GiCat,
  GiFishEscape
} from "react-icons/gi";
import { VscGithub } from "react-icons/vsc";
import { GoRepo, GoBrowser } from "react-icons/go";
import { RiGamepadLine } from "react-icons/ri";
import { HiFire } from "react-icons/hi";
import { CgFormatText } from "react-icons/cg";
import { BiCube, BiGame } from "react-icons/bi";
import { BsFillImageFill, BsGrid1X2 } from "react-icons/bs";
import { AiFillAudio } from "react-icons/ai";

import type { BearData } from "../types";

const bear: BearData[] = [
  {
    id: "profile",
    title: "Profile",
    icon: <FaPaw />,
    md: [
      {
        id: "about-me",
        title: "About Me",
        file: "markdown/about-me.md",
        icon: <GiNinjaHeroicStance />,
        excerpt: "Hello! I'm Absozero..."
      },
      {
        id: "github-stats",
        title: "Github Stats",
        file: "markdown/github-stats.md",
        icon: <VscGithub />,
        excerpt: "Here are some status about my github account..."
      },
      {
        id: "about-site",
        title: "About This Site",
        file: "markdown/about-site.md",
        icon: <GoBrowser />,
        excerpt: "This is a portfolio site..."
      }
    ]
  },
  {
    id: "project",
    title: "Projects",
    icon: <GoRepo />,
    md: [
      {
        id: "galact",
        title: "Galact",
        file: "https://raw.githubusercontent.com/absozero/Galact/main/README.md",
        icon: <HiFire />,
        excerpt: "A chatbot implemented in re",
        link: "https://absozero.github.io/Galact"
      },
      {
        id: "bosa",
        title: "BOSA-bot",
        file: "https://raw.githubusercontent.com/absozero/BOSA-bot/main/README.md",
        icon: <HiFire />,
        excerpt: "A discord bot built on a fork of the original discord.py ",
        link: "https://absozero.github.io/BOSA-bot"
      },
      {
        id: "cliweather",
        title: "Cliweather",
        file: "https://raw.githubusercontent.com/absozero/cliweather/main/README.md",
        icon: <HiFire />,
        excerpt:
          "A weather app that works in both the cli and the web browser.",
        link: "https://absozero.github.io/cliweather"
      },
      {
        id: "blog",
        title: "Blog",
        file: "https://raw.githubusercontent.com/absozero/blog/master/README.md",
        icon: <HiFire />,
        excerpt:
          "A blog that tries to be different han any other blog out there.",
        link: "https://absozero.github.io/blog"
      }
    ]
  }
];

export default bear;
