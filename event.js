// 定义event变量
var printCert = cert.printCert()
// 监视event的发生
printCert.watch(
	function(error, result)
	{
		if(!error){
			console.log(result.args.email,result.args.cert);
		}
	}
)
