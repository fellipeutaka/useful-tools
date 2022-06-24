// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { videoDownloader } from "@useful-tools/utils/videoDownloader";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const data = await videoDownloader(req.body.url);
    return res.status(200).json(data);
  }

  return res.status(404).json({ message: "Route not found." });
}
