
const lines = require('cptm-status');

lines.getStatusCPTM().then(function(result) {
	console.log(result);
}, function(err){
	console.log(err);
});
