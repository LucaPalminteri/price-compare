import { launch } from "puppeteer";
import { getProducsCoto } from "./functions/functions.coto.js";
import { getProducsGallega } from "./functions/functions.gallega.js";

const BASE_URL_COTO = "https://www.cotodigital3.com.ar/sitios/cdigi/";
const BASE_URL_GALLEGA = "https://www.lagallega.com.ar/Login.asp";

export const main = async (search) => {
  const browser = await launch({ headless: false, slowMo: 50 });
  // const browser = await launch();
  const pageCotoDigital = await browser.newPage();
  const pageLaGallega = await browser.newPage();
  let fullProducts = [];

  let cotoProducts = await getProducsCoto(pageCotoDigital, BASE_URL_COTO, search);
  let gallegaProducts = await getProducsGallega(pageLaGallega, BASE_URL_GALLEGA, search);

  fullProducts.push(...cotoProducts);
  fullProducts.push(...gallegaProducts);

  await browser.close();

  return fullProducts;
};
