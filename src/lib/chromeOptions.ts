import chrome from "chrome-aws-lambda";
import {
  BrowserConnectOptions,
  BrowserLaunchArgumentOptions,
  LaunchOptions,
} from "puppeteer-core";

const chromeExecPaths = {
  win32: "C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe",
  linux: "/usr/bin/google-chrome",
  darwin: "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
  aix: "",
  freebsd: "",
  openbsd: "",
  sunos: "",
  android: "",
  haiku: "",
  cygwin: "",
  netbsd: "",
};

const exePath = chromeExecPaths[process.platform];

export async function getOptions() {
  const isDev = !process.env.AWS_REGION;
  const options: LaunchOptions &
    BrowserLaunchArgumentOptions &
    BrowserConnectOptions = isDev
    ? {
        args: [],
        executablePath: exePath,
        headless: true,
      }
    : {
        args: chrome.args,
        executablePath: await chrome.executablePath,
        headless: chrome.headless,
      };

  return options;
}
