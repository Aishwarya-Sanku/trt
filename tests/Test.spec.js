import { test, expect, request } from "@playwright/test";
const objectRepository = require("../objectRepository")
const dataRepository = require("../dataRepository.json")
require("dotenv").config()

test("test_01 @smoke", async ({ page, context ,request}) => {
  await page.goto("https://www.saucedemo.com/");
  await objectRepository.default.datatestusername(page).click();
  await objectRepository.default.datatestusernamea(page).fill(dataRepository[process.env.EXECUTION_ENVIRONMENT].data_57054);
  await objectRepository.default.datatestpassword(page).click();
  await objectRepository.default.datatestpassworda(page).fill(dataRepository[process.env.EXECUTION_ENVIRONMENT].data_636182);
  await objectRepository.default.datatestloginbutton(page).click();
  await objectRepository.default.datatestaddtocartsaucelabsbackpack(page).click();
  await objectRepository.default.datatestaddtocartsaucelabsbikelight(page).click();
  await expect(page.locator('[data-test="item-4-title-link"]')).toBeVisible();
  await expect(page.locator('[data-test="item-0-title-link"]')).toBeVisible();
  await expect(page.locator('[data-test="title"]')).toBeVisible();
  await objectRepository.default.datatestsecondaryheader(page).click();
  await objectRepository.default.datatestremovesaucelabsbackpack(page).click();
});
