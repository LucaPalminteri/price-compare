import { launch } from "puppeteer";
import {
  calculateProducts,
  goTo,
  setViewport,
  type,
  pressEnter,
  waitForNavigation,
  getPagination,
  loadAndSearch
} from "./functions.js";

const main = async () => {
  console.clear();
  console.log("Starting the app...\n");
  // const browser = await launch({ headless: false, slowMo: 20 });
  const browser = await launch();
  const page = await browser.newPage();
  let fullProducts = [];

  await loadAndSearch(page,"https://www.cotodigital3.com.ar/sitios/cdigi/","palta")

  const pages = await getPagination(page);

  const products = await calculateProducts(page);

  fullProducts.push(...products);

  if (pages.length > 1) await page.click(`#atg_store_pagination > li:nth-child(2) > a`);

  for (let index = 3; index <= pages.length; index++) {
    await page.waitForSelector("#products > li");
    const products = await calculateProducts(page);

    fullProducts.push(...products);

    await page.click(`#atg_store_pagination > li:nth-child(${index}) > a`);
  }

  console.log(fullProducts);
  console.log(`Total products: ${fullProducts.length}`);

  await browser.close();
};

main();
