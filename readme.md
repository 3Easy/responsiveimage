# Responsive Image

The script checks if an image is larger than a specified width, then loads in a higher resolution image. It compares the current viewport width to an array of user set breakpoints then updates the `src` to the most appropriately sized image. This is an [ExpressionEngine](http://expressionengine.com/) focussed implementation, but can be adapted easily for use elsewhere.

#### Method

* Adhering the the principles of mobile first, the smallest image should be included in the markup
* The user sets the breakpoint values in the array to match the image options they have prepared
* We use an `id="responsiveimage"` on the`img` element to trigger the script
* No need for additional `class` or `data` attributes pointing to other image sources are required
* The script compares the viewport width to a number of breakpoints in the script
* And switches the path to the most appropriately sized image

#### EE

The reference to being ExpressionEngine specific refers to the use of the [Image Manipulations](http://expressionengine.com/user_guide/cp/content/files/file_upload_preferences.html#image-manipulations) within EE’s File Upload Preferences. Four copies of the image have been created automatically, constrained to widths of 320, 480, 768 and 980px for this example. Because the manipulations are stored in directories, our focus shifts to changing the path.

#### Credits 

Inspiration from [Automatic Responsive Images in WordPress](http://viewportindustries.com/blog/automatic-responsive-images-in-wordpress/) by Keir Whitaker. Based on the elegant [Responsive-Enhance](https://github.com/joshje/Responsive-Enhance) by Josh Emerson. Justification for a double download from [Image-y Nation](http://adactio.com/journal/5208/) by Jeremy Keith. Path changing regex magic provided by [Myles Eftos](http://twitter.com/#!/madpilot).

#### HTML

    <!DOCTYPE html>
    <html lang="en">
    <head>
    	<meta charset="utf-8" />
    	<style>
    		img {
    		    width: 100%;
    		}
    	</style>
    	<title>Responsive Image</title>
    	<meta name="viewport" content="width=device-width, initial-scale=1">
    </head>
    <body>
    	<img id="responsiveimg" src="img/_320/bodalla-cheese-factory.jpg" alt="Responsive Image" />
    </body>
    <script src="responsiveimage.js"></script>
    <script>
    	responsiveImage(document.getElementById('responsiveimg'), 320);
    </script>
    </html>

#### Javascript

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

#### Notes

There’s no doubt in my mind that somebody smarter than I would be able to drmatically improve and shorten this script. For example, I imagine it could be shortened into a loop, with an easy-to-edit array of breakpoints included at the top, which also control the loop. Done that bit!