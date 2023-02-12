import { classNames } from './classNames'

describe('classNames', function () {
  test('single param', () => {
    expect(classNames('SomeClass')).toBe('SomeClass')
  })
  test('single param additional', () => {
    const expected = 'SomeClass class1 class2'
    expect(classNames('SomeClass', {}, ['class1', 'class2'])).toBe(expected)
  })

  test('single param mods', () => {
    const expected = 'SomeClass class1 class2'
    expect(classNames('SomeClass', { class1: true, class2: true })).toBe(expected)
  })

  test('single param mods', () => {
    const expected = 'SomeClass class1'
    expect(classNames('SomeClass', { class1: true, class2: false })).toBe(expected)
  })
})
