module.exports = {
  plugins: {
    autoprefixer: {},
    "postcss-px-to-viewport": {
      "viewportWidth": 375, // 设计稿的宽度
      "unitPrecision": 5, // px转成vw、vh后小数点保留的位数
      "minPixelValue": 1, // 不转化为vw的最小px值
      "maxPixelValue": 750, // 不转化为vw的最大px值
      "exclude": /^((?!Phone).)*$/,
    },
  },
};