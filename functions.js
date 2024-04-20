export const calculateProducts = async (page) => {
  return await page.evaluate(() => {
    const products = document.querySelectorAll("#products > li");

    let response = [];

    products.forEach((product) => {
      let price = product.querySelector(".atg_store_newPrice").innerText.trim();
      let priceDiscount = 0;
      let name = product.querySelector(".descrip_full").innerText.trim();
      let image = product.querySelector("img").getAttribute("src").trim();
      let precioLitro = product.querySelector(".unit").innerText.trim();
      let hasDiscount = false;

      if (product.querySelector(".price_discount") !== null) {
        priceDiscount = product.querySelector(".price_discount").innerText.trim();
        price = priceDiscount;
        hasDiscount = true;
      }

      response.push({
        priceString: price,
        price: parseInt(price.replace("$", "").replace(/\./g, "").replace(/\./, ".").replace(",", ".")),
        name,
        image,
        precioLitro,
        hasDiscount,
      });
    });

    return response;
  });
};

export const goTo = async (page, url) => {
  try {
    console.clear();
    console.log("-> Going to Coto Digital...");
    await page.goto(url);
    console.log("\t✓ Done!");
    // await page.screenshot({path: 'screenshot.png'});
  } catch (error) {
    console.error("Error:", error);
  }
};

export const setViewport = async (page, width, height) => {
  try {
    console.clear();
    console.log("-> Setting the viewport...");
    await page.setViewport({ width, height });
    console.log("\t✓ Done!");
  } catch (error) {
    console.error("Error:", error);
  }
};

export const type = async (page, selector, text) => {
  try {
    console.clear();
    console.log("-> Typing...");
    await page.type(selector, text);
    console.log("\t✓ Done!");
  } catch (error) {
    console.error("Error:", error);
  }
};

export const pressEnter = async (page) => {
  try {
    console.clear();
    console.log("-> Pressing Enter...");
    await page.keyboard.press("Enter");
    console.log("\t✓ Done!");
  } catch (error) {
    console.error("Error:", error);
  }
};

export const waitForNavigation = async (page) => {
  try {
    console.clear();
    console.log("-> Waiting for the search results...");
    await page.waitForNavigation({ waitUntil: "networkidle0" });
    console.log("\t✓ Done!");
  } catch (error) {
    console.error("Error:", error);
  }
};

export const getPagination = async (page) => {
  console.clear();
  console.log("-> Calculating the pages to retrieve information...");
  return await page.evaluate(() => {
    const links = document.querySelectorAll("#atg_store_pagination > li > a");
    return Array.from(links).map((link) => link.href);
  });
};

export const loadAndSearch = async (page, url, search) => {
  await goTo(page, url);
  await setViewport(page, 1080, 1920);
  await type(page, ".atg_store_searchInput", search);
  await pressEnter(page);
  await waitForNavigation(page);
}
