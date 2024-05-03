const { test, expect } = require('@playwright/test');
 import { faker } from '@faker-js/faker';
 const Ajv = require('ajv');
 const ajv = new Ajv(); 

test('Harbinger Test', async ({ request }) => {
  // GET https://bookcart.azurewebsites.net/api/Book
  const response3 = await request.get(`https://bookcart.azurewebsites.net/api/Book`, {
    headers: {},
  });

  // GET https://bookcart.azurewebsites.net//api/Book/2
  const response4 = await request.get(`https://bookcart.azurewebsites.net//api/Book/2`, {
    headers: {},
  });

  // GET https://bookcart.azurewebsites.net/api/Book/GetCategoriesList
  const response5 = await request.get(`https://bookcart.azurewebsites.net/api/Book/GetCategoriesList`, {
    headers: {},
  });

});

