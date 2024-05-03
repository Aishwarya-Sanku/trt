const objectRepository = {
  "default": {
    "datatestusername": (page) => page.locator("[data-test='username']"),
    "datatestusernamea": (page) => page.locator("[data-test='username']"),
    "datatestpassword": (page) => page.locator("[data-test='password']"),
    "datatestpassworda": (page) => page.locator("[data-test='password']"),
    "datatestloginbutton": (page) => page.locator("[data-test='login-button']"),
    "datatestaddtocartsaucelabsbackpack": (page) => page.locator("[data-test='add-to-cart-sauce-labs-backpack']"),
    "datatestaddtocartsaucelabsbikelight": (page) => page.locator("[data-test='add-to-cart-sauce-labs-bike-light']"),
    "datatestsecondaryheader": (page) => page.locator("[data-test='secondary-header']"),
    "datatestremovesaucelabsbackpack": (page) => page.locator("[data-test='remove-sauce-labs-backpack']"),
  },
};
module.exports = objectRepository;