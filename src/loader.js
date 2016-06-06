window.setTimeout(() =>{
	System.import('app').catch(function(err) {
		console.error(err);
	});
}, 1);
