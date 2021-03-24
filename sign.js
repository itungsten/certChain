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

//创建智能合约，参数为solc编译后生成的abi和合约地址
var certContract = new web3.eth.Contract(conf.ABI,conf.address);

web3.eth.getAccounts().then(function(accounts){
	//创建一个变量用于指代主账户，方便后续的操作
	var creator=accounts[conf.creator]
	//修改数据
	var email=process.argv[2];
	var docHash=process.argv[3];
	certContract.methods.signDoc(email,docHash).send({from:creator, gas:conf.gasLimit}).then(
		function(){
			console.log("New",email,":",docHash);
			wsProvider.disconnect();
		}
	)

})