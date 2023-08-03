import Layout from "@/components/layouts/Default";
import Link from "next/link";

export default function Custom404() {
  return (
    <Layout>
      <section className="w-full text-slate-600 dark:text-zinc-200 flex flex-col items-center justify-center p-4">
        <h1 className="text-9xl font-bold">404</h1>
        <p className="text-3xl mb-4">Page not found</p>
        <Link href="/" className="underline">
          Go back
        </Link>
      </section>
    </Layout>
  );
}
