/* eslint-disable no-param-reassign */
export default (time, fmt) => {
  fmt = fmt || 'mm:ss'

  const o = {
    // eslint-disable-next-line radix
    'h+': parseInt((time / 60 / 60) % 24),
    // eslint-disable-next-line radix
    'm+': parseInt((time / 60) % 60),
    // eslint-disable-next-line radix
    's+': parseInt(time % 60)
  }

  for (const k in o) {
    if (new RegExp(`(${k})`).test(fmt)) {
      let str = o[k] + ''
      str = str.length > 1 ? str : 0 + str
      fmt = fmt.replace(RegExp.$1, str)
    }
  }

  return fmt
}
