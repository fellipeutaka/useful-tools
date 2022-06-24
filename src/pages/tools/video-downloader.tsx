import Layout from "@useful-tools/components/Layout";
import VideoDownloaderComponent from "@useful-tools/components/tools/VideoDownloader";

const seo = {
  title: "Video Downloader | Useful Tools",
  description: "The best and usefuls just for you",
  keywords: "tools, useful",
};

export default function RandomColor() {
  return (
    <Layout seo={seo}>
      <VideoDownloaderComponent />
    </Layout>
  );
}
