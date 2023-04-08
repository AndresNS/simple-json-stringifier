import { useEffect, useState } from "react";
import { ColorScheme } from "../../types/global.d";

const Header = () => {
  const [theme, setTheme] = useState(ColorScheme.Light);

  useEffect(() => {
    const userColorScheme = window.localStorage.getItem("color-scheme");
    if (
      userColorScheme === ColorScheme.Dark ||
      (!userColorScheme &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      window.localStorage.setItem("color-scheme", ColorScheme.Dark);
      document.documentElement.classList.add("dark");
      setTheme(ColorScheme.Dark);
    } else {
      window.localStorage.setItem("color-scheme", ColorScheme.Light);
      document.documentElement.classList.remove("dark");
      setTheme(ColorScheme.Light);
    }
  }, []);

  const handleChangeTheme = () => {
    toggleColorScheme();
  };

  const toggleColorScheme = () => {
    if (typeof window === "undefined") return;
    const userColorScheme = window.localStorage.getItem("color-scheme");

    if (userColorScheme === ColorScheme.Dark) {
      document.documentElement.classList.remove("dark");
      setTheme(ColorScheme.Light);

      window.localStorage.setItem("color-scheme", ColorScheme.Light);
    } else {
      document.documentElement.classList.add("dark");
      setTheme(ColorScheme.Dark);

      window.localStorage.setItem("color-scheme", ColorScheme.Dark);
    }
  };

  return (
    <header className="bg-slate-600 dark:bg-slate-800 text-white py-4 px-8">
      <div className="container mx-auto flex justify-between">
        <div>Simple JSON Stringify</div>
        <div>
          <button className="cursor-pointer flex" onClick={handleChangeTheme}>
            {theme === ColorScheme.Dark ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                />
              </svg>
            )}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
