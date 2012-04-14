# ResponsiveImage

Inspiration from [Automatic Responsive Images in WordPress](http://viewportindustries.com/blog/automatic-responsive-images-in-wordpress/) by Keir Whitaker. Based on the excellent [Responsive-Enhance](https://github.com/joshje/Responsive-Enhance) by Josh Emerson. This is an [ExpressionEngine](http://expressionengine.com/) focussed implementation, but will be adapted easily for use elsewhere.

This script will check whether an image is larger than a specified width, then load in a higher resolution image. Once rolling, the script will compare the viewport width to a number of breakpoints and load the most appropriately sized image.

The focus on ExpressionEngine refers to making use of the [Image Manipulations](http://expressionengine.com/user_guide/cp/content/files/file_upload_preferences.html#image-manipulations) within EE’s File Upload Preferences. Four copies of the image have been created automatically, constrained to widths of 320, 480, 768 and 980px for this example.

Adhering to the principles of mobile first, the 320px image is placed in the markup. No additional `data-` or `class` attributes are required, keeping the markup lean. The script changes the path to the different sized images.

    <!DOCTYPE html>
    <html lang="en">
    <head>
    	<meta charset="utf-8" />
    	<style>
    		img {
    		    width: 100%;
    		}
    	</style>
    	<title>ResponsiveImage</title>
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

If the viewport is greater than 320px and less than 481px then the image path will change from `/_320/` to `/_480/` in keeping with EE’s directory structure. My thanks to [@madpilot](http://twitter.com/madpilot) for his nifty regex skills.

There’s no doubt in mind that somebody smarter than I would be able to shorten this script into a loop, and possibly provide an easy-to-edit array of breakpoints at the top, which also control the loop. Dig?