import Head from "next/head";

type SEO = {
  title: string;
  description: string;
  keywords: string;
};

type LayoutProps = {
  seo: SEO;
  children: React.ReactNode;
};

export default function Layout({ children, seo }: LayoutProps) {
  return (
    <>
      <Head>
        <title>{seo.title}</title>
        <meta name="description" content={seo.description} />
        <meta name="keywords" content={seo.keywords} />
      </Head>
      {children}
    </>
  );
}
