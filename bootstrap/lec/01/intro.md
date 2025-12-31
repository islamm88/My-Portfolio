# Bootstrap

    - frontend toolkit .
    - Build fast .
    - responsive sites .
    - Currently v5.3.8

    A Frontend Toolkit is a set of tools or libraries that help you build website and application interfaces quickly and efficiently.

# Quick start

    1- Create a new index.html file in your project root. Include the <meta name="viewport"> tag as well for proper responsive behavior in mobile devices.

    <!doctype html>
    <html lang="en">
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Bootstrap demo</title>
      </head>
      <body>
        <h1>Hello, world!</h1>
      </body>
    </html>


    2- Include Bootstrap’s CSS and JS.

    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-sRIl4kxILFvY47J16cr9ZwB07vP4J8+LH7qKQnuqkuIAvNWLzeN8tE5YBujZqJLB" crossorigin="anonymous">


    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/js/bootstrap.bundle.min.js" integrity="sha384-FKyoEForCGlyvwx9Hj09JcYn3nv7wiPVlz7YYwJrWVcXK/BmnVDxM+D2scQbITxI" crossorigin="anonymous"></script>


# Important globals

    - Bootstrap requires the use of the HTML5 doctype <!DOCTYPE html> . Without it, you’ll see some funky and incomplete styling. 
    - Bootstrap is developed mobile first so necessary using CSS media queries
              <meta name="viewport" content="width=device-width, initial-scale=1">
    - you need to override box-sizing if you find prblem with third party like Google Maps and Google Custom Search Engine.
              .selector-for-some-widget {
                  box-sizing: content-box;  
                  }
    - Bootstrap Reboot For improved cross-browser rendering .

