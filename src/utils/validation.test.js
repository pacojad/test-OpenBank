import { validatePassRegExp } from './validation'
import { MIN_PASSWORD, MAX_PASSWORD } from './constant'

const setDatas = jest.fn()

const datas = {
  pass: '',
  repass: '',
  optionalQuestion: '',
  errPass: '',
  errRepass: ''
}

it('validation functions', () => {
  expect(validatePassRegExp(datas, setDatas, MIN_PASSWORD, MAX_PASSWORD)).toBe(false)
  datas.pass = 'a1A'
  expect(validatePassRegExp(datas, setDatas, MIN_PASSWORD, MAX_PASSWORD)).toBe(false)
  datas.pass = 'aaaaaaaa'
  expect(validatePassRegExp(datas, setDatas, MIN_PASSWORD, MAX_PASSWORD)).toBe(false)
  datas.pass = 'aaaaaaaaaaaaaaaaaaaaaaaaa'
  expect(validatePassRegExp(datas, setDatas, MIN_PASSWORD, MAX_PASSWORD)).toBe(false)
  datas.pass = 'asfAfsh4a1';datas.repass = 'asfAfsh4a1'
  expect(validatePassRegExp(datas, setDatas, MIN_PASSWORD, MAX_PASSWORD)).toBe(true)
});
