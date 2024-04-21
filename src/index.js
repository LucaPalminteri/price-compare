import { launch } from "puppeteer";
import { getProducsCoto } from "./utils/functionsCoto.js";

const BASE_URL_COTO = "https://www.cotodigital3.com.ar/sitios/cdigi/";

export const main = async (search) => {
  // const browser = await launch({ headless: false, slowMo: 50 });
  const browser = await launch();
  const pageCotoDigital = await browser.newPage();
  const pageLaGallega = await browser.newPage();
  let fullProducts = [];

  let cotoProducts = await getProducsCoto(pageCotoDigital, BASE_URL_COTO, search);

  fullProducts.push(...cotoProducts);

  await browser.close();

  return fullProducts;
};
