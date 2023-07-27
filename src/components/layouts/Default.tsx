import { PropsWithChildren } from "react";
import Head from "next/head";
import Header from "@/components/sections/Header";

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <div className="bg-red-500 dark:bg-slate-700 text-black min-h-screen">
      <Head>
        <title>Simple JSON Stringifier</title>
        <meta
          property="og:title"
          content="Simple JSON Stringifier"
          key="title"
        />
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="keywords"
          content="JSON, JSON Stringify, JSON Stringifier, JSON Parse, JSON Tool"
        />
        <meta
          name="description"
          content="Simple tool to stringify a JSON formatted string"
        />
      </Head>
      <Header />
      {children}
    </div>
  );
};

export default Layout;
