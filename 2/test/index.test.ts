import { expect, test } from 'vitest';
import { sumHits } from '../src/sumHits';

test('sumHits should count the hits for each page of the given tag', () => {
  expect(sumHits("javascript")).toBe(380);
  expect(sumHits("typescript")).toBe(335);
})