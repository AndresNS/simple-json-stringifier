import GithubIcon from "../icons/GithubIcon";

const Footer = () => {
  return (
    <footer className="flex flex-col items-center py-12 gap-4 font-roboto font-bold text-slate-600 dark:text-zinc-200 tracking-wide">
      <nav className="flex gap-4">
        <a href="#">Home</a>
        <a href="/about">About</a>
        <a href="/license">License</a>
      </nav>
      <a
        href="https://github.com/AndresNS/simple-json-stringifier"
        target="_blank"
      >
        <GithubIcon />
      </a>
    </footer>
  );
};

export default Footer;
