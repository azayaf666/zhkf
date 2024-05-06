// 根据环境引入不同配置 process.env.VUE_APP_ENV
const environment = process.env.VUE_APP_ENV || 'production'
const env = require('./env.' + environment)
const common = require('./common')
module.exports = {
  // 通用配置
  ...common,
  // 不同环境配置
  ...env
}
