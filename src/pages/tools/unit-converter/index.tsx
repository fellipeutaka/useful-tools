import Link from "next/link";

import Layout from "@useful-tools/components/Layout";

const seo = {
  title: "Unit Converter | Useful Tools",
  description: "The best and usefuls just for you",
  keywords: "tools, useful",
};

export default function UnitConverter() {
  return (
    <Layout seo={seo}>
      <main>
        <h1>Unit Converter</h1>
        <Link href="/tools/unit-converter/length">Length</Link>
      </main>
    </Layout>
  );
}
