import puppeteer from "puppeteer";

type InstagramDownloadResponse = {
  thub?: string;
  link?: string;
};

type VideoDownloadResponse = {
  info: {
    title?: string;
    thub?: string;
    duration?: string;
  };
  links: {
    format?: string;
    quality?: string;
    url?: string;
  }[];
};

export async function videoDownloader(
  url: string,
  dev = false
): Promise<VideoDownloadResponse> {
  let browser: puppeteer.Browser | undefined;
  try {
    const URL = "https://videodownloaderpro.net/en5/";
    browser = await puppeteer.launch({
      headless: !dev,
      args: ["--disable-setuid-sandbox", "--disable-notifications"],
      ignoreHTTPSErrors: true,
    });

    const page = await browser.newPage();
    await page.setUserAgent(
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/67.0.3396.87 Safari/537.36"
    );
    await page.goto(URL);
    await page.type("#search", url, { delay: 0 });
    await page.click("button[type=submit]");
    await page.waitForSelector(".videoImage");

    const result = await page.evaluate(() => {
      const thub = document
        ?.querySelector<HTMLImageElement>(".videoImage")
        ?.style.backgroundImage.replace('url("', "")
        .replace('")', "")
        ? document
            .querySelector<HTMLImageElement>(".videoImage")
            ?.style.backgroundImage.replace('url("', "")
            .replace('")', "")
        : "https://res.cloudinary.com/alasim/image/upload/v1638853249/hosting%20content/jk-placeholder-image_lj3awz.jpg";
      const title = document.querySelector(".videoTitle")
        ? document.querySelector<HTMLDivElement>(".videoTitle")?.innerText
        : "No title";
      const duration = document.querySelector(".timeCode")
        ? document.querySelector<HTMLDivElement>(".timeCode")?.innerText
        : "";
      const linkGroup = Array.from(document.querySelectorAll(".downloadLinks"));

      const links = linkGroup.map((link) => {
        const format =
          link.querySelector<HTMLSpanElement>(".formats")?.innerText;
        const quality =
          link.querySelector<HTMLSpanElement>(".quality")?.innerText;
        const url = link.querySelector("a")?.href;
        return { format, quality, url };
      });

      return {
        info: { title, thub, duration },
        links,
      };
    });
    browser.close();
    if (url.includes("instagram.com")) {
      const data = await instagramDownload(url, dev);
      result.info.thub = data.thub;
      result.links = [];
      result.links.push({ format: "MP4", quality: "SD", url: data.link });
    }
    return result;
  } catch (error) {
    throw error;
  }
}

function instagramDownload(
  url: string,
  dev: boolean
): Promise<InstagramDownloadResponse> {
  return new Promise(async (resolve, reject) => {
    let browser: puppeteer.Browser | undefined;
    try {
      const URL = "https://snapinsta.app/";
      browser = await puppeteer.launch({
        headless: !dev,
        args: ["--disable-setuid-sandbox", "--disable-notifications"],
        ignoreHTTPSErrors: true,
      });
      const page = await browser.newPage();
      await page.setUserAgent(
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/67.0.3396.87 Safari/537.36"
      );
      await page.goto(URL);
      await page.type("#url", url, { delay: 0 });
      await page.click("#send");
      await page.waitForSelector(".download-items__thumb");

      const result = await page.evaluate(() => {
        const thub = document.querySelector(".download-items__thumb img")
          ? document.querySelector<HTMLImageElement>(
              ".download-items__thumb img"
            )?.src
          : "https://res.cloudinary.com/alasim/image/upload/v1638853249/hosting%20content/jk-placeholder-image_lj3awz.jpg";
        const link = document.querySelector<HTMLAnchorElement>(
          ".download-items__btn a"
        )?.href;
        return {
          thub,
          link,
        };
      });
      browser.close();
      resolve(result);
    } catch (error) {
      browser?.close();
      reject(error);
    }
  });
}
