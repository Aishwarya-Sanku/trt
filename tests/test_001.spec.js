const { test, expect } = require('@playwright/test');
 import { faker } from '@faker-js/faker';
 const Ajv = require('ajv');
 const ajv = new Ajv(); 

test('Harbinger Test', async ({ request }) => {
  // GET https://bookcart.azurewebsites.net/api/Book
  const response1 = await request.get(`https://bookcart.azurewebsites.net/api/Book`, {
    headers: {},
  });

  // GET https://bookcart.azurewebsites.net/api/Book/4
  const response2 = await request.get(`https://bookcart.azurewebsites.net/api/Book/4`, {
    headers: {},
  });

});

