import FaceTime from "../components/apps/FaceTime";
import Terminal from "../components/apps/Terminal";
import Safari from "../components/apps/Safari";
import Bear from "../components/apps/Bear";
import VSCode from "../components/apps/VSCode";
import Spotify from "../components/apps/Spotify";
import Youtube from "../components/apps/Youtube";
import Gallery from "../components/apps/Gallery";

import type { AppsData } from "../types";

const apps: AppsData[] = [
  {
    id: "launchpad",
    title: "Launchpad",
    desktop: false,
    img: "img/icons/launchpad.png"
  },
  {
    id: "bear",
    title: "Bear",
    desktop: true,
    show: true,
    width: 860,
    height: 500,
    img: "img/icons/bear.png",
    content: <Bear />
  },
  {
    id: "safari",
    title: "Safari",
    desktop: true,
    show: false,
    width: 1024,
    minWidth: 375,
    minHeight: 200,
    img: "img/icons/safari.png",
    content: <Safari />
  },
  {
    id: "gallery",
    title: "Gallery",
    desktop: true,
    show: false,
    img: "img/icons/gallery.png",
    content: <Gallery />
  },
  {
    id: "vscode",
    title: "VSCode",
    desktop: true,
    show: false,
    img: "img/icons/vscode.png",
    content: <VSCode />
  },
  {
    id: "spotify",
    title: "Spotify",
    desktop: true,
    show: false,
    img: "img/icons/spotify.png",
    content: <Spotify />
  },
  {
    id: "youtube",
    title: "Youtube",
    desktop: true,
    show: false,
    img: "img/icons/youtube.png",
    content: <Youtube />
  },
  {
    id: "facetime",
    title: "FaceTime",
    desktop: true,
    show: false,
    img: "img/icons/facetime.png",
    height: 530,
    content: <FaceTime />
  },
  {
    id: "terminal",
    title: "Terminal",
    desktop: true,
    show: false,
    img: "img/icons/terminal.png",
    content: <Terminal />
  },
  {
    id: "email",
    title: "Mail",
    desktop: false,
    img: "img/icons/mail.png",
    link: "mailto:azermazer165@gmail.com"
  },
  {
    id: "github",
    title: "Github",
    desktop: false,
    img: "img/icons/github.png",
    link: "https://github.com/absozero/absozero.github.io"
  }
];

export default apps;
