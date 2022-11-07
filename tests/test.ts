import { expect, test } from '@playwright/test';
import { a, b } from '../src/routes/[mastodon_server]/data.js';

test('index page has expected h1', async ({ page }) => {
	await page.goto('/');
	expect(await page.textContent('h1')).toContain('Welcome');
});

test('some data merging', async ({ page }) => {
	await page.goto('/');

	await expect(page).toBeTruthy();
	await expect(a).toBeTruthy();
});

test('some data checking', async ({ page }) => {
	await page.goto('/');

	await expect(a).toEqual(a);
	await expect(a).not.toEqual(b);
});
