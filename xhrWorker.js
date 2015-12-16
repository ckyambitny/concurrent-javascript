importScripts('xhr.js');

self.addEventListener('message', function(e){
	var a = JSON.parse(e.data);
	var request = makeRequest(a.method, a.url);
	
	request.then(function (response){
		self.postMessage(response);
	}).catch(function (err){
		throw err;
	});
});

