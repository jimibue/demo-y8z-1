const { item } = require('@markdoc/markdoc/dist/src/schema')

describe('Problem Set 1', () => {

  describe('isEven', () => {
    it('should return true if the number is even', () => {
      expect(isEven(2)).toBe(true)
    })
    it('should return false if the number is odd', () => {
      expect(isEven(1)).toBe(false)
    })
  })

  describe('upcase', () => {
    it('should return the string in all uppercase', () => {
      expect(upcase('hello')).toBe('HELLO')
    })
  })
})
