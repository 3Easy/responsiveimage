var addEvent=function(){return document.addEventListener?function(a,c,d){if(a&&a.nodeName||a===window)a.addEventListener(c,d,!1);else if(a&&a.length)for(var b=0;b<a.length;b++)addEvent(a[b],c,d)}:function(a,c,d){if(a&&a.nodeName||a===window)a.attachEvent("on"+c,function(){return d.call(a,window.event)});else if(a&&a.length)for(var b=0;b<a.length;b++)addEvent(a[b],c,d)}}();

var responsiveImage = function(img, width, monitor) {

	var bp = [320, 480, 524, 768, 980];
	var src = img.src;
	var size = '_' + bp[0];
	
	if (img.length) {
		for (var i = 0, len = img.length; i < len; i++) {
		  responsiveImage(img[i], width, monitor);
		}
	}
	else {
		for (var i = 0; i < bp.length - 1; i++) {
			if (img.clientWidth > bp[i]) {
				size = '_' + bp[i+1];
			}
		}	
		var responsiveimg = new Image();
		addEvent(responsiveimg, 'load', function(e) {
			img.src = this.src;
		});
		responsiveimg.src = src.replace(/(\/img\/)(_\d+)(\/.+)/, '$1' + size + '$3');
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