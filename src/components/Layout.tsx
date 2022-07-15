import Head from "next/head";
import { useRouter } from "next/router";

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
  const { pathname } = useRouter();

  return (
    <>
      <Head>
        <title>{seo.title}</title>
        <meta name="description" content={seo.description} />
        <meta name="keywords" content={seo.keywords} />

        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content={`https://usefultools.vercel.app${pathname}`}
        />
        <meta property="og:title" content={seo.title} />
        <meta property="og:description" content={seo.description} />

        <meta property="og:image" content="/logo.png" />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="512" />
        <meta property="og:image:height" content="512" />
      </Head>
      {children}
    </>
  );
}
