import { loadAndSearch, getPagination } from "./functions.js";

const SEARCH_INPUT = ".atg_store_searchInput";
const PAGINATION_SELECTOR = "#atg_store_pagination > li > a";
const PRODUCTS_SELECTOR = "#products > li";
const PRICE_SELECTOR = ".atg_store_newPrice";
const TITLE_SELECTOR = ".descrip_full";
const IMAGE_SELECTOR = ".atg_store_productImage > img";
const PRICE_UNIT_SELECTOR = ".unit";
const PRICE_DISCOUNT_SELECTOR = ".price_discount";

const SELECTORS = {
  productsSelector: PRODUCTS_SELECTOR,
  priceSelector: PRICE_SELECTOR,
  titleSelector: TITLE_SELECTOR,
  imageSelector: IMAGE_SELECTOR,
  priceUnitSelector: PRICE_UNIT_SELECTOR,
  priceDiscountSelector: PRICE_DISCOUNT_SELECTOR,
};

export const calculateProducts = async (page, selectors) => {
  return await page.evaluate((selectors) => {
    const products = document.querySelectorAll(selectors.productsSelector);

    let response = [];

    products.forEach((product) => {
      let price = product.querySelector(selectors.priceSelector).innerText.trim();
      let priceDiscount = 0;
      let title = product.querySelector(selectors.titleSelector).innerText.trim();
      let image = product.querySelector(selectors.imageSelector).getAttribute("src").trim();
      let priceUnit = product.querySelector(selectors.priceUnitSelector).innerText.trim();
      let hasDiscount = false;

      if (product.querySelector(selectors.priceDiscountSelector) !== null) {
        priceDiscount = product.querySelector(selectors.priceDiscountSelector).innerText.trim();
        price = priceDiscount;
        hasDiscount = true;
      }

      response.push({
        priceString: price,
        price: parseInt(
          price.replace("c/u", "").replace("$", "").replace(/\./g, "").replace(/\./, ".").replace(",", ".")
        ),
        title,
        image,
        priceUnit,
        hasDiscount,
      });
    });

    return response;
  }, selectors);
};

export const getProducsCoto = async (page, url, search) => {
  let fullProducts = [];

  await loadAndSearch(page, url, SEARCH_INPUT, search);
  let pages = await getPagination(page, PAGINATION_SELECTOR);
  if (pages.length === 0) pages.push({ page: 1 });

  for (let index = 1; index <= pages.length; index++) {
    await page.waitForSelector(PRODUCTS_SELECTOR);
    const products = await calculateProducts(page, SELECTORS);
    fullProducts.push(...products);
    if (pages.length > 1 && pages.length != index)
      await page.click(`#atg_store_pagination > li:nth-child(${index + 1}) > a`);
  }

  console.log(fullProducts);
  console.log(`Total products: ${fullProducts.length}`);
  console.log(`Total pages: ${pages.length}`);

  fullProducts.sort((a, b) => {
    if (a.hasDiscount && !b.hasDiscount) {
      return -1;
    } else if (!a.hasDiscount && b.hasDiscount) {
      return 1;
    } else {
      return 0;
    }
  });

  return fullProducts;
};
