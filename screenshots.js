var casper = require("casper").create(),
	url = 'http://casperjs.org',
	userAgents = 'Mozilla/5.0 (iPhone; CPU iPhone OS 6_0 like Mac OS X) AppleWebKit/536.26 (KHTML, like Gecko) Version/6.0 Mobile/10A403 Safari/8536.25', // iOS6
    viewports = [
		{
			'name': 'iPhone5',
			'viewport': {width: 1136, height: 640}
		},
		{
			'name': 'iPhone4S',
			'viewport': {width: 960, height: 640}
		},
		{
			'name': 'iPhone4',
			'viewport': {width: 960, height: 640}
		},
		{
			'name': 'iPhone3G',
			'viewport': {width: 480, height: 320}
		},
		{
			'name': 'iPhone3',
			'viewport': {width: 480, height: 320}
		},
		{
			'name': 'iPad mini',
			'viewport': {width: 1024, height: 768}
		},
		{
			'name': 'iPad Retina',
			'viewport': {width: 2048, height: 1536}
		},
		{
			'name': 'iPad2',
			'viewport': {width: 1024, height: 768}
		},
		{
			'name': 'iPad',
			'viewport': {width: 1024, height: 768}
		}
    ]    
    
casper.start();
casper.userAgent(userAgents);
casper.each(viewports, function(casper, viewport) {
	this.then(function() {
		this.viewport(viewport.viewport.width, viewport.viewport.height);
	});
	this.thenOpen(url, function() {
		this.capture('screenshots/' + viewport.name + '-' + viewport.viewport.width + 'x' + viewport.viewport.height + '.png');
	});
});
 
casper.run();