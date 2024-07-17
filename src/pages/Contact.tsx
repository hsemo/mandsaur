import {Github, Linkedin} from 'react-bootstrap-icons';

export default function Contact(){
  return(
    <>
      <p>
        If you want to contact me, please write to
      </p>
      <a
        href="mailto:ab.r4thore@gmail.com"
      >
        ab.r4thore@gmail.com
      </a>
      <p>
        My social media addresses
      </p>
      <a href="https://github.com/hsemo">
        <Github color="#171516" size={36} />
      </a>
      <a href="https://www.linkedin.com/in/abhishek-rathore-7a19ab2a5">
        <Linkedin color="royalblue" size={36} />
      </a>
    </>
  );
}
