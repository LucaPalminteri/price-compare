import { goTo, setViewport, type, pressEnter, waitForNavigation } from "./functions.js";

export const loadAndSearchGallega = async (page, url, search) => {
  await goTo(page, url);
  await setViewport(page, 1080, 1920);
  await type(page, "#cpoBuscar", search);
  await pressEnter(page);
  await waitForNavigation(page);
};

export const getPagination = async (page) => {
  console.clear();
  console.log("-> Calculating the pages to retrieve information...");
  return await page.evaluate(() => {
    const links = document.querySelectorAll(".TxtPagina > .linkPag");
    return Array.from(links).map((link) => link.href);
  });
};

export const calculateProducts = async (page) => {
  return await page.evaluate(() => {
    const products = document.querySelectorAll("#products > li");

    let response = [];

    products.forEach((product) => {
      let price = product.querySelector(".atg_store_newPrice").innerText.trim();
      let priceDiscount = 0;
      let title = product.querySelector(".descrip_full").innerText.trim();
      let image = product.querySelector(".atg_store_productImage > img").getAttribute("src").trim();
      let priceUnit = product.querySelector(".unit").innerText.trim();
      let hasDiscount = false;

      if (product.querySelector(".price_discount") !== null) {
        priceDiscount = product.querySelector(".price_discount").innerText.trim();
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
  });
};
