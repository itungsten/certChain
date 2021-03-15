function replaceString(filePath,oldStr,newStr) {
	var fs = require('fs');
	fs.readFile(filePath, 'utf8', function (err,data) {
	  if (err) {
	    return console.log(err);
	  }
	  var result = data.replace(oldStr, newStr);
	  fs.writeFile(filePath, result, 'utf8', function (err) {
	     if (err) return console.log(err);
	  });
	});
}
module.exports.replaceString=replaceString;