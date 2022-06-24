import { styled } from "@useful-tools/stitches";
import { Video } from "@useful-tools/types/Video";
import axios from "axios";
import Image from "next/image";
import { FormEvent, useState } from "react";

const Container = styled("main", {
  width: "100%",
  height: "100vh",
  display: "grid",
  placeItems: "center",
});

export default function VideoDownloader() {
  const [video, setVideo] = useState<Video | null>(null);
  const [url, setUrl] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  async function handleDownloadVideo(e: FormEvent) {
    e.preventDefault();
    if (!url.trim()) {
      // toast.error("Url is required")
      alert("Url is required");
      return;
    }

    setIsLoading(true);
    try {
      const { data } = await axios.post<Video>("/api/downloader", {
        url,
      });
      console.log(data);
      setVideo(data);
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <Container>
      <h1>Video Downloader</h1>
      {video && (
        <div>
          <h2>{video.info.title}</h2>
          <p>{video.info.duration}</p>
          <Image
            src={video.info.thumbnail}
            alt={video.info.title}
            width={480}
            height={360}
            quality={100}
          />
          <ul>
            {video.links.map((link, index) => (
              <li key={index}>
                <a href={link.url}>{link.quality}p</a>
              </li>
            ))}
          </ul>
        </div>
      )}
      <form onSubmit={handleDownloadVideo}>
        <input
          type="text"
          placeholder="url"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />
        <button type="submit" disabled={isLoading}>
          Download
        </button>
      </form>
    </Container>
  );
}
