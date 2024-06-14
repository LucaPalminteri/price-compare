import { Browser, launch, Page, PuppeteerLaunchOptions } from "puppeteer";
import { getProducsCoto } from "./functions/functions.coto.js";
import { getProducsGallega } from "./functions/functions.gallega.js";
import { Product } from "./types/types.js";

const BASE_URL_COTO: string = "https://www.cotodigital3.com.ar/sitios/cdigi/";
const BASE_URL_GALLEGA: string = "https://www.lagallega.com.ar/Login.asp";

export const main = async (search: string): Promise<Product[]> => {
  const launchOptions: PuppeteerLaunchOptions = {
    headless: false,
    slowMo: 50,
    args: ["--start-maximized"],
  };
  const browser: Browser = await launch(launchOptions);
  // const browser = await launch();
  const pageCotoDigital: Page = await browser.newPage();
  const pageLaGallega: Page = await browser.newPage();
  let fullProducts: Product[] = [];

  let cotoProducts: Product[] = await getProducsCoto(pageCotoDigital, BASE_URL_COTO, search);
  let gallegaProducts: Product[] = await getProducsGallega(pageLaGallega, BASE_URL_GALLEGA, search);

  fullProducts.push(...cotoProducts);
  fullProducts.push(...gallegaProducts);

  await browser.close();

  return fullProducts;
};
