import puppeteer, { Page } from "puppeteer-core";
import { getOptions } from "./chromeOptions";

let page: Page | null;

export async function getPage(): Promise<Page> {
  if (page) {
    return page;
  }

  const options = await getOptions();
  const browser = await puppeteer.launch(options);

  page = await browser.newPage();

  return page;
}
