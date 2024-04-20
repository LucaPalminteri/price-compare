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

const BASE_URL = "https://www.cotodigital3.com.ar/sitios/cdigi/"
const SEARCH = "palta"
let fullProducts = [];

const main = async () => {
  // const browser = await launch({ headless: false, slowMo: 20 });
  const browser = await launch();
  const page = await browser.newPage();

  await loadAndSearch(page, BASE_URL, SEARCH)
  const pages = await getPagination(page);

  for (let index = 1; index <= pages.length; index++) {
    await page.waitForSelector("#products > li");
    const products = await calculateProducts(page);
    fullProducts.push(...products);
    await page.click(`#atg_store_pagination > li:nth-child(${index + 1}) > a`);
  }

  console.log(fullProducts);
  console.log(`Total products: ${fullProducts.length}`);

  await browser.close();
};

main();
