beforeAll(() => {
  global.alert = jest.fn()
})

test('should be true', () => {
  expect(true).toBe(true)
})
