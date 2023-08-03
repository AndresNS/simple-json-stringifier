import ThemeSwitch from "../modules/ThemeSwitch";

const Header = (): JSX.Element => {
  return (
    <header className="relative bg-cyan-700 text-slate-100 dark:bg-zinc-900 dark:text-zinc-200 py-6 px-8">
      <div className="container mx-auto flex justify-between">
        <div className="font-roboto font-bold text-lg">
          Simple JSON Stringifier
        </div>
        <div>
          <ThemeSwitch />
        </div>
      </div>
    </header>
  );
};

export default Header;
