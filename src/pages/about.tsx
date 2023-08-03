import Layout from "@/components/layouts/Default";

export default function Home() {
  return (
    <Layout>
      <section className="container p-6 mx-auto mt-8 flex flex-col text-slate-600 dark:text-zinc-200">
        <h1 className="text-center font-bold font-roboto mb-12 text-4xl">
          About
        </h1>

        <div
          className={
            "bg-slate-100 dark:bg-white/20 rounded-xl py-12 px-16 drop-shadow-md max-w-screen-lg mx-auto"
          }
        >
          <h2 className="font-roboto font-bold text-2xl mb-4">What is this?</h2>

          <p className="font-roboto mb-6 text-lg">
            Simple JSON Stringifier is a tool to convert a JSON formatted data
            into a JSON string and parses strings into a JSON by using the{" "}
            <a
              href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify"
              target="_blank"
              className="underline"
            >
              JSON.stringify()
            </a>{" "}
            and{" "}
            <a
              href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse"
              target="_blank"
              className="underline"
            >
              JSON.parse()
            </a>{" "}
            methods.
          </p>

          <h2 className="font-roboto font-bold text-2xl mb-4">Another one?</h2>
          <p className="font-roboto mb-4 text-lg">
            Yep. Even though there are a lot of tools like this, I decided to
            make this one because I used to use another one, but they started
            adding ads, and it was getting a little annoying. Also, most of the
            other websites that offer this functionality have a lot of other
            features as well, and I just wanted something simple:
            JSON.stringify() and JSON.parse(), nothing more, nothing less.
          </p>
          <p className="font-roboto text-lg">
            If somehow you found this, I hope it can be useful for you too.
          </p>
        </div>
      </section>
    </Layout>
  );
}
