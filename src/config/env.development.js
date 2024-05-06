/**
 * 本地环境配置
 * 变量名大写+下划线
 */
module.exports = {
  TITLE: '智慧客服',
  API_SERVER_ADDRESS: '',
  BACK_API_URL: 'http://localhost:8080/jeecg-boot',
  FILE_API_URL: 'http://localhost:18083/zbfile',
  WIKI_URL: 'http://localhost:63342/eice-docs/html/index.html#/',
  FILE_API_CONTENT: '/zbfile',
  client_id: 'robot2',
  tallUrl: 'https://am-cloud.mss.ctc.com/idp/oauth2/authorize?redirect_uri=http%3A%2F%2Flocalhost%3A3000%2F%23user%2Fauthorize&state=123&client_id=robot2&response_type=code',
  amCloudLoginPageUrl: function (url) { return `https://am-cloud.mss.ctc.com/idp/oauth2/authorize?redirect_uri=${url}&state=123&client_id=robot2&response_type=code` },
  amCloudLogOutPageUrl: function (url) { return `https://am-cloud.mss.ctc.com/idp/profile/OAUTH2/Redirect/GLO?redirctToUrl=${url}&redirectToLogin=true&entityId=robot2` },
  SOCKET_URL: 'http://localhost:8843/servicer'
}
