import Link from "next/link";
import GithubIcon from "../icons/GithubIcon";

const Footer = () => {
  return (
    <footer className="flex flex-col items-center py-12 gap-4 font-roboto font-bold text-slate-600 dark:text-zinc-200 tracking-wide">
      <nav className="flex gap-4">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
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
