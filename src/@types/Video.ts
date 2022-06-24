type VideoInfo = {
  title: string;
  thub: string;
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
