import Link from "next/link";

import Layout from "@useful-tools/components/Layout";

const seo = {
  title: "Useful Tools",
  description: "The best and usefuls just for you",
  keywords: "tools, useful",
};

export default function Home() {
  return (
    <Layout seo={seo}>
      <main>
        <h1>Home</h1>
        <Link href="/tools">Tools</Link>
      </main>
    </Layout>
  );
}
