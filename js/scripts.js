console.log('script loaded')

// name generator

$(document).ready(function() {

  // this creates our canvas
  var canvas = document.getElementById("myCanvas");
  var ctx=canvas.getContext("2d");
  ctx.font="30px Comic Sans MS";
  ctx.fillStyle = "pink";
  ctx.textAlign = "center";
  // ctx.fillText("Name Generator", canvas.width/2, canvas.height/2);

  //this turns our canvas into a saveable, sharable image
  function convertCanvasToImage(canvas) {
    var image = new Image();
    image.src = canvas.toDataURL("image/png");
    return image;
  }

  //this is gathering all of the page items
  var sampleCanvas = document.getElementById("canvasHolder");
  document.getElementById("canvasHolder").appendChild(canvas);
  document.getElementById("pngHolder").appendChild(convertCanvasToImage(canvas));
  function convertCanvasToImage(canvas) {
  var image = new Image();
  image.src = canvas.toDataURL("image/png");
  return image;
   }

  $('.submit').click(function (e) {
      // stop normal form submit event (redirect)
      e.preventDefault();
      $('form').fadeOut("linear");

      // confirm the submit button works
      console.log('Submit button has been clicked');

      //this is first name area
      var usersFirstName =  $('.firstName').val();
      updateTheImage(usersFirstName);

      //last name area
      var usersLastName = $('.lastName').val();
      // lastNameFunction(usersLastName);
  });

  //dealing with the first name
  function updateTheImage(usersFirstName){
    console.log($('.firstName').val());
    //to do -
    // combine first name and last name into one obj that i can pass to the canvas>image
    var name = $('.firstName').val();
    var nameLength = name.length;
    //i have to clear the canvas
    // ctx.clearRect(0, 0, canvas.width, canvas.height);
    //replace the contents of the canvas with whatever name we choose
    ctx.fillText(name, canvas.width/2, canvas.height/2);
    ctx.textAlign = "center";
    $('#pngHolder').replaceWith(convertCanvasToImage(canvas));
  }

  function


});
