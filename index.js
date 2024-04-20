import { launch } from "puppeteer";
import { calculateProducts, getPagination, loadAndSearch } from "./functions.js";

const BASE_URL_COTO = "https://www.cotodigital3.com.ar/sitios/cdigi/";
const SEARCH = "pera";
let fullProducts = [];

const main = async () => {
  // const browser = await launch({ headless: false, slowMo: 20 });
  const browser = await launch();
  const page = await browser.newPage();

  await loadAndSearch(page, BASE_URL_COTO, SEARCH);
  let pages = await getPagination(page);
  if (pages.length === 0) pages.push({ page: 1 });

  for (let index = 1; index <= pages.length; index++) {
    await page.waitForSelector("#products > li");
    const products = await calculateProducts(page);
    fullProducts.push(...products);
    if (pages.length > 1) await page.click(`#atg_store_pagination > li:nth-child(${index + 1}) > a`);
  }

  console.log(fullProducts);
  console.log(`Total products: ${fullProducts.length}`);
  console.log(`Total pages: ${pages.length}`);

  await browser.close();
};

main();
