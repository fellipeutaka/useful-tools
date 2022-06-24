type VideoInfo = {
  title: string;
  thumbnail: string;
  duration: string;
};

type VideoLinks = {
  format: string;
  quality: string;
  url: string;
};

export type Video = {
  info: VideoInfo;
  links: VideoLinks[];
};
