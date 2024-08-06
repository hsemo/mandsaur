import { Github, Linkedin } from "react-bootstrap-icons";

import '../App.css';

export default function Contact() {
  return (
    <div className="w-full flex flex-col items-center mt-4 text-2xl text-center text-[#01c48a]">
      <p>If you want to contact me, please write to:</p>
      <a
        href="mailto:ab.r4thore@gmail.com"
        className="text-shadow hover:scale-150 hover:font-bold transition-all duration-500"
      >
        ab.r4thore@gmail.com
      </a>
      <p className="mt-5">My social media addresses:</p>
      <div
        className="flex bg-transparent h-[60px] p-3 gap-4 rounded mt-2
        backdrop-blur-sm"
      >
        <a
          href="https://github.com/hsemo"
          target="_blank"
          className="after:inline-block after:-z-10 after:w-[30px]
          after:h-[30px] after:bg-white after:relative after:top-[-33px]
          after:right-[-2px] after:rounded-full"
        >
          <Github
            color="#171516"
            size={36}
            className="transition-shadow
            hover:shadow-lg hover:shadow-white"
          />
        </a>
        <a
          href="https://www.linkedin.com/in/abhishek-rathore-7a19ab2a5"
          target="_blank"
        >
          <Linkedin
            color="royalblue"
            size={36}
            className="transition-shadow
            hover:shadow-lg hover:shadow-[#4169e1]"
          />
        </a>
      </div>
    </div>
  );
}
