//node v8.12.0
//npm v6.4.1
//npm install web3@0.20.7
//npm install sloc@0.4.25
//npm install ganache-cli@6.1.8

//使用配置文件
var conf=require(__dirname+'/config.js')

//使用web3模块
var Web3 = require('web3');

//创建web3实例，并连接私有链
var wsProvider = new Web3.providers.WebsocketProvider(conf.provider);
var web3 = new Web3(wsProvider);

var subscription = web3.eth.subscribe('logs', {
	    address: conf.address,
	}, function(error, result){
	    if (!error)console.log(result);
	})
	.on("data", function(log){
	    // console.log(log);
	})
	.on("changed", function(log){

	}
);