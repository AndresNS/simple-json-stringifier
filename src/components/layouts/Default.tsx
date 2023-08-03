import { PropsWithChildren } from "react";
import Head from "next/head";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import Background from "../modules/Background";

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <Background>
      <div className="flex flex-col min-h-screen">
        <Head>
          <title>Simple JSON Stringifier</title>
          <meta
            property="og:title"
            content="Simple JSON Stringifier"
            key="title"
          />
          <meta charSet="utf-8" />
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
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
        <div className="flex-1 flex">{children}</div>
        <Footer />
      </div>
    </Background>
  );
};

export default Layout;
