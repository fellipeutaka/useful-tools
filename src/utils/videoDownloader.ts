import { getPage } from "@useful-tools/lib/chromium";

export async function videoDownloader(url: string) {
  try {
    const page = await getPage();
    await page.setUserAgent(
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/102.0.5005.124 Safari/537.36 Edg/102.0.1245.44"
    );
    await page.goto("https://en.savefrom.net/163/", {
      waitUntil: "domcontentloaded",
    });
    await page.type("#sf_url", url, { delay: 0 });
    await page.waitForSelector(".media-result");

    const result = await page.evaluate(() => {
      const thumbnail =
        document.querySelector<HTMLImageElement>("a.clip img.thumb")?.src ||
        "https://res.cloudinary.com/alasim/image/upload/v1638853249/hosting%20content/jk-placeholder-image_lj3awz.jpg";
      const title =
        document.querySelector<HTMLDivElement>("div.title")?.innerText ||
        "No title";
      const duration =
        document.querySelector<HTMLDivElement>("div.duration")?.innerText || "";
      const links = Array.from(
        document.querySelectorAll<HTMLAnchorElement>(
          "div.link-group a.link-download"
        )
      ).map((link) => {
        const format = link.getAttribute("data-type") || "";
        const quality = link.getAttribute("data-quality") || "";
        const url = link.href;
        return { format, quality, url };
      });

      return {
        info: { title, thumbnail, duration },
        links,
      };
    });
    return result;
  } catch (error) {
    throw error;
  }
}
