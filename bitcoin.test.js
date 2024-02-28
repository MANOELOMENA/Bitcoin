const { convertToBRL } = require('./script');

test('Conversão de Bitcoin para Real', () => {
  expect(convertToBRL(1)).toBe(250000);
  expect(convertToBRL(0)).toBe(0);
  expect(convertToBRL(0.5)).toBe(125000);
});