// 全局方法
// 注册至Vue.prototype.$fn

const isType = type => target => `[object ${type}]` === Object.prototype.toString.call(target)

const isObject = isType('Object')
const isArray = isType('Array')
const isString = isType('String')
const isNull = isType('Null')
const isNumber = isType('Number')
const isUndefined = isType('Undefined')
const isNotUndefined = (target) => !isUndefined(target)
const isRegExp = isType('RegExp')
const isFunction = isType('Function')
const isPromise = fn => !isType('Undefined')(fn) && isType('Function')(fn.then) && isType('Function')(fn.catch)
const isEmpty = target => isNull(target) || isUndefined(target) || (isString(target) && target === '') || (isArray(target) && target.length === 0) || (isObject(target) && Object.keys(target).length === 0)

const fn = {
  isObject,
  isArray,
  isString,
  isNull,
  isNumber,
  isUndefined,
  isNotUndefined,
  isRegExp,
  isFunction,
  isPromise,
  isEmpty,

  // Common ==========
  // 全为数字
  isAllNumber: (o) => (isString(o) && !!~o.search(/^[\d]+$/g)) || (isArray(o) && o.every(_ => isNumber(_))) || false,

  // 全为字符串
  isAllString: (o) => isString(o) || (isArray(o) && o.every(_ => isString(_))) || false,

  // 全为对象
  isAllObject: (o) => isObject(o) || (isArray(o) && o.every(_ => isObject(_))) || false,

  // 反转
  reserve: (o) => (isString(o) ? o.split('').reserve().join('') : o),

  // 合理索引
  isArrayIndex: (array, index) => (Number.isInteger(index) === index && index >= 0 && index < array.length),

  // 区间数字
  range: (start, end) => {
    let res = []
    if (Number.isInteger(start) && Number.isInteger(end) && start <= end) {
      res = Array.from({ length: end - start + 1 }, (_, i) => i + start)
    }
    return res
  },

  // Object ==========
  toUriParams: (o) => {},

  toString: (o) => JSON.stringify(o),

  clone: (o) => {
    const clone = (obj) => {
      let o
      if (typeof obj === 'object') {
        if (obj === null) {
          o = null
        } else {
          if (obj instanceof Array) {
            o = []
            for (let i = 0, len = obj.length; i < len; i++) {
              o.push(clone(obj[ i ]))
            }
          } else {
            o = {}
            for (const j in obj) {
              o[ j ] = clone(obj[ j ])
            }
          }
        }
      } else {
        o = obj
      }
      return o
    }
    return clone(o)
  },
  // String ==========
  // 去首尾指定字符
  trim: (str, char = '\\s') => (isString(str) && str.replace(new RegExp(`^[${char}]*|[${char}]*$`, 'g'), '')),

  // 代替字符串全部指定字符
  replaceAll: (str, oriStr, replaceStr) => str.replace(new RegExp(oriStr, 'gm'), replaceStr),

  // Array ==========
  min: (array) => {
    let min
    if (this.isAllNumber(array)) {
      min = array.sort(_ => 1)[0]
    }
    return min
  },
  max: (array) => {
    let max
    if (this.isAllNumber(array)) {
      max = array.sort(_ => 1)[0]
    }
    return max
  }
}

export default fn
