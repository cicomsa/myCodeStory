var images = ["./annie-spratt-44241-unsplash.jpg", "./annie-spratt-109237-unsplash.jpg", "./annie-spratt-144480-unsplash.jpg",
"./annie-spratt-439330-unsplash.jpg","./eddie-garcia-524055-unsplash.jpg", "./florian-giorgio-121817-unsplash.jpg", "./joshua-ness-109299-unsplash",
"./kari-shea-110409-unsplash.jpg", "./karolina-szczur-504621-unsplash.jpg", "./malte-wingen-355701-unsplash.jpg","./ostap-senyuk-443230-unsplash",
"./patrick-schneider-146210-unsplash.jpg", "./redd-angelo-249352-unsplash.jpg", "./tom-holmes-556804-unsplash.jpg"]




window.onload = function () {
  image = document.createElement('img');
  //image.id = "image2"

  image.src = images[4];
  source=document.getElementsByClassName("box2")
  $("#image1").replaceWith(image)
  //img = document.querySelector("#image1")

  //img = image
  //source.class = "image1"
  console.log(source)
  //console.log(image);
  //console.log(img)

    };
