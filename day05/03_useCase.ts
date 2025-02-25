import { Browser, chromium, Page } from "playwright";

// function PerformAction() {
//   let a = 10;
//   let b = 20;
//   let c = a + b;
//   console.log(c);
// }

// PerformAction();

async function performAction(
  url: string,
  action: "screenshot" | "title"
): Promise<string | void> {
  const browser: Browser = await chromium.launch({ headless: false });
  const page: Page = await browser.newPage();
  await page.goto(url);

  if (action === "screenshot") {
    const screenShotPath = "screenshot.png";
    await page.screenshot({ path: screenShotPath }); //it will get created in the root directory
    await browser.close();
    return `screenshot saved as ${screenShotPath}`;
  } else if (action === "title") {
    const title = await page.title();
    await browser.close();
    return title;
  } else {
    await browser.close();
  }
}

async function run() {
  const screenShotResult = await performAction(
    "http://leaftaps.com/opentaps/control/main",
    "screenshot"
  );
  console.log(screenShotResult);

  const titleResult = await performAction(
    "http://leaftaps.com/opentaps/control/main",
    "title"
  );
  console.log(`page title is : ${titleResult}`);
}

run(); // calling the function
