import type { NextApiRequest, NextApiResponse } from "next";
import translate from "translate";

interface ApiRequest extends NextApiRequest {
  body: {
    from?: string;
    to?: string;
    text: string;
  };
}

export default async function handler(req: ApiRequest, res: NextApiResponse) {
  const { from, to, text } = req.body;

  try {
    if (req.method !== "POST") return res.status(405).json({});
    if (!text) throw new Error("Text is required");

    const translatedText = await translate(text, {
      from: from || "en",
      to: to || "en",
    });
    res.status(200).json({ result: translatedText });
  } catch (err) {
    if (err instanceof Error) {
      res.status(400).json({ message: err.message });
    } else {
      console.log(err);
      res.status(500).json({ message: "An unexpected error occurred" });
    }
  }
}
