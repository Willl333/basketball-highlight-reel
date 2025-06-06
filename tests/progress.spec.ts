import { test, expect } from '@playwright/test';

test('server health endpoint', async ({ request }) => {
  const res = await request.get('http://localhost:3000/api/health');
  expect(res.ok()).toBeTruthy();
});
