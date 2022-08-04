import "./Footer.css";
import githublogo from "../assets/github.png";

const Footer = () => {
  return (
    <footer>
      &copy; 2022 ERWD
      <a href="https://github.com/awonfs/" target="_blank" rel="noreferrer">
        <img className="git-logo" src={githublogo} alt="gitlogo" />
      </a>
    </footer>
  );
};

export default Footer;
