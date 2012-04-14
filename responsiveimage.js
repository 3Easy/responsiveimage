var addEvent=function(){return document.addEventListener?function(a,c,d){if(a&&a.nodeName||a===window)a.addEventListener(c,d,!1);else if(a&&a.length)for(var b=0;b<a.length;b++)addEvent(a[b],c,d)}:function(a,c,d){if(a&&a.nodeName||a===window)a.attachEvent("on"+c,function(){return d.call(a,window.event)});else if(a&&a.length)for(var b=0;b<a.length;b++)addEvent(a[b],c,d)}}();

var responsiveImage = function(img, width, monitor) {
	
	if (img.length) {
		for (var i = 0, len = img.length; i < len; i++) {
		  responsiveImage(img[i], width, monitor);
		}
	}
	
	else {
		
		var _size = '_320'; // base size
		var _src = img.src;
		
		if (img.clientWidth > 320 && img.clientWidth < 481) {
			_size = '_480';
			var responsiveimg = new Image();
			addEvent(responsiveimg, 'load', function(e) {
		      img.src = this.src;
		  });
		  responsiveimg.src = _src.replace(/(\/img\/)(_\d+)(\/.+)/, '$1' + _size + '$3');
		}
		
		if (img.clientWidth > 480 && img.clientWidth < 769) {
			_size = '_768';
			var responsiveimg = new Image();
			addEvent(responsiveimg, 'load', function(e) {
			    img.src = this.src;
			});
			responsiveimg.src = _src.replace(/(\/img\/)(_\d+)(\/.+)/, '$1' + _size + '$3');
		}
				
		if (img.clientWidth > 768) {
			_size = '_980';
			var responsiveimg = new Image();
			addEvent(responsiveimg, 'load', function(e) {
			    img.src = this.src;
			});
			responsiveimg.src = _src.replace(/(\/img\/)(_\d+)(\/.+)/, '$1' + _size + '$3');
}
		
		console.log('viewport = ' + img.clientWidth + ' therefore image size = ' + _size);
	}
	
	if (monitor != false) {
		addEvent(window, 'resize', function(e) {
		  responsiveImage(img, width, false);
		});
		addEvent(img, 'load', function(e) {
		  responsiveImage(img, width, false);
		});
	}
};