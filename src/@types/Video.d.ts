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

type Video = {
  info: VideoInfo;
  links: VideoLinks[];
};
