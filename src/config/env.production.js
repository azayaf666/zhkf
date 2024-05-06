// 云上生产
module.exports = {
  TITLE: 'MSS智慧客服',
  BACK_API_URL: 'http://10.141.146.216:13906/jeecg-boot',
  FILE_API_URL: 'http://10.141.146.216:13906/zbfile',
  WIKI_URL: 'http://10.141.146.216:13908/',
  FILE_API_CONTENT: '/zbfile',
  client_id: 'robot2',
  tallUrl: 'https://am-cloud.mss.ctc.com/idp/oauth2/authorize?redirect_uri=http%3A%2F%2F10.141.146.216%3A13906%2F%23user%2Fauthorize&state=123&client_id=robot2&response_type=code',
  amCloudLoginPageUrl: function (url) { return `https://am-cloud.mss.ctc.com/idp/oauth2/authorize?redirect_uri=${url}&state=123&client_id=robot2&response_type=code` },
  amCloudLogOutPageUrl: function (url) { return `https://am-cloud.mss.ctc.com/idp/profile/OAUTH2/Redirect/GLO?redirctToUrl=${url}&redirectToLogin=true&entityId=robot2` },
  SOCKET_URL: 'http://10.141.146.216:13906/servicer'
}
