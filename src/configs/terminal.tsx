import type { TerminalData } from "../types";

const terminal: TerminalData[] = [
  {
    id: "about",
    title: "about",
    type: "folder",
    children: [
      {
        id: "about-bio",
        title: "bio.txt",
        type: "file",
        content: (
          <div className="py-1">
            <div>
              Hi! This is Absozero,a random yet cool coder from the internet.
            </div>
            <div className="mt-1">
              I value myself on being kind and understanding.
            </div>
          </div>
        )
      },
      {
        id: "about-interests",
        title: "interests.txt",
        type: "file",
        content:
          "AI / Web frameorks / Client-server / Linux / Coding in general"
      },
      {
        id: "about-who-cares",
        title: "who-cares.txt",
        type: "file",
        content: "I'm open to anything within reach of coding and development."
      },
      {
        id: "about-contact",
        title: "contact.txt",
        type: "file",
        content: (
          <ul className="list-disc ml-6">
            <li>
              Email:{" "}
              <a
                className="text-blue-300"
                href="mailto:azermazer165@gmail.com"
                target="_blank"
                rel="noreferrer"
              >
                azermazer165@gmail.com
              </a>{" "}
              /{" "}
              <a
                className="text-blue-300"
                href="mailto:aswsub123@gmail.com"
                target="_blank"
                rel="noreferrer"
              >
                aswsub123@gmail.com
              </a>
            </li>
            <li>
              Github:{" "}
              <a
                className="text-blue-300"
                href="https://github.com/absozero"
                target="_blank"
                rel="noreferrer"
              >
                https://github.com/absozero
              </a>
            </li>
            <li>
              Blog:{" "}
              <a
                className="text-blue-300"
                href="https://absozero.github.io"
                target="_blank"
                rel="noreferrer"
              >
                https://absozero.github.io
              </a>
            </li>
          </ul>
        )
      }
    ]
  },
  {
    id: "about-dream",
    title: "my-dream.cpp",
    type: "file",
    content: (
      <div className="py-1">
        <div>
          <span className="text-yellow-400">if</span>(
          <span className="text-blue-400">working</span>) <span>{"{"}</span>
        </div>
        <div>
          <span className="text-blue-400 ml-9">open-source</span>
          <span className="text-yellow-400">++</span>;
        </div>
        <div>
          <span>{"}"}</span>
        </div>
      </div>
    )
  }
];

export default terminal;
