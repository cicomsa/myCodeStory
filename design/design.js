var imagesLandscape = ["./images-landscape/annie-spratt-44241-unsplash.jpg", "./images-landscape/joshua-ness-109299-unsplash.jpg",
 "./images-landscape/malte-wingen-355701-unsplash.jpg","./images-landscape/ostap-senyuk-443230-unsplash.jpg",
"./images-landscape/patrick-schneider-146210-unsplash.jpg", "./images-landscape/tom-holmes-556804-unsplash.jpg"]

var imagesPortrait = ["./images-portrait/annie-spratt-109237-unsplash.jpg", "./images-portrait/annie-spratt-144480-unsplash.jpg", "./images-portrait/annie-spratt-439330-unsplash.jpg",
"./images-portrait/eddie-garcia-524055-unsplash.jpg", "./images-portrait/florian-giorgio-121817-unsplash.jpg", "./images-portrait/kari-shea-110409-unsplash.jpg",
"./images-portrait/karolina-szczur-504621-unsplash.jpg", "./images-portrait/redd-angelo-249352-unsplash.jpg"]



window.onload = function () {
  imageLandscape = document.createElement('img');
  imageLandscape.id = "image2"
  var numLand = Math.floor(Math.random() * 5);
  imageLandscape.src = imagesLandscape[numLand];
  source = document.getElementsByClassName("box2")
  $("#image1").replaceWith(imageLandscape)
  console.log(source)

  imagePortrait = document.createElement('img');
  imagePortrait.id = "image4"
  var numPort = Math.floor(Math.random() * 7);
  imagePortrait.src = imagesPortrait[numPort];
  source = document.getElementsByClassName("box3")
  $("#image3").replaceWith(imagePortrait)
  console.log(source)

    };
