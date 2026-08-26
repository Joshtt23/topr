import puppeteer from "puppeteer-core";

const url = process.env.QA_URL ?? "http://127.0.0.1:4173/";
const executablePath =
  process.env.CHROME_PATH ??
  "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";
const widths = [375, 768, 1280];
const browser = await puppeteer.launch({ executablePath, headless: true });
const failures = [];

try {
  for (const width of widths) {
    const page = await browser.newPage();
    const errors = [];
    page.on("console", (message) => {
      if (message.type() === "error") errors.push(message.text());
    });
    page.on("pageerror", (error) => errors.push(error.message));
    await page.setViewport({ width, height: 900 });

    const response = await page.goto(url, { waitUntil: "networkidle0" });
    const metrics = await page.evaluate(() => ({
      viewportWidth: window.innerWidth,
      documentWidth: document.documentElement.scrollWidth,
      h1Count: document.querySelectorAll("h1").length,
      mainExists: Boolean(document.querySelector("main")),
    }));

    if (!response || response.status() >= 400) {
      failures.push(`${width}px: page returned ${response?.status()}`);
    }
    if (metrics.documentWidth > metrics.viewportWidth) {
      failures.push(
        `${width}px: horizontal overflow (${metrics.documentWidth}px document)`,
      );
    }
    if (metrics.h1Count !== 1) failures.push(`${width}px: expected one h1`);
    if (!metrics.mainExists) failures.push(`${width}px: main landmark missing`);
    if (errors.length) failures.push(`${width}px: ${errors.join("; ")}`);

    console.log(
      `${width}px: ${metrics.documentWidth}px document, ${errors.length} console errors`,
    );
    await page.close();
  }
} finally {
  await browser.close();
}

if (failures.length) {
  throw new Error(`Viewport QA failed:\n- ${failures.join("\n- ")}`);
}
