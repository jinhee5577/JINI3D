const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app){
	app.use(
    	"/api",
      	createProxyMiddleware({
        	target: 'http://openapi.molit.go.kr:8081/OpenAPI_ToolInstallPackage/service/rest/RTMSOBJSvc/getRTMSDataSvcAptTrade',
          	changeOrigin: true,
          	pathRewrite: {
            	'^/api': ''
            }
        })
    )
}