import { getPage } from "@useful-tools/lib/chromium";

export async function videoDownloader(url: string) {
  try {
    const page = await getPage();
    await Promise.all([
      page.goto("https://en.savefrom.net/163/", {
        waitUntil: "domcontentloaded",
      }),
      page.waitForSelector("#sf_url"),
      page.type("#sf_url", url, { delay: 0 }),
      page.waitForSelector(".media-result"),
    ]);

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
    return error;
  }
}
