console.log('script loaded');

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

      //this is first name area
      var usersFirstName =  $('.firstName').val();
      var usersLastName = $('.lastName').val();
      var fullName = usersFirstName + " " + usersLastName;

      genOne(usersFirstName);
      genTwo(usersLastName);
      updateTheImage(fullName);
  });

  //updating the text of the canvas so i can make my img
  function updateTheImage(fullName){
    //if you have to clear the canvas...
    // ctx.clearRect(0, 0, canvas.width, canvas.height);
    var fullname = usersFirstName + " " + usersLastName;
    //replace the contents of the canvas with whatever name we choose
    ctx.fillText(fullname, canvas.width/2, canvas.height/2);
    ctx.textAlign = "center";
    $('#pngHolder').replaceWith(convertCanvasToImage(canvas));
  }

  // checking whether the name fits an override
  // AND if the name is odd/even
  function genOne(usersFirstName) {
    var firstChar = $('.firstName').val().charAt(0).toUpperCase();
    var charCount = $('.firstName').val().length;
    if (charCount % 2 === 0){
      evenFirst();
    }
    else {
      oddFirst();
    }
  }

  function genTwo(usersLastName) {
    var firstCharLast = $('.lastName').val().charAt(0).toUpperCase();
    var charCountLast = $('.lastName').val().length;
    if (charCountLast % 2 === 0){
      evenLast();
    }
    else {
      oddLast();
    }
  }

  // FIRST NAME AREA //

  // even amount of letters
  function evenFirst(){
  var firstChar = $('.firstName').val().charAt(0).toUpperCase();
    if (firstChar === 'A'){
      console.log('Meven amount of letters, first letter is A')
      usersFirstName = 'Tyrion';
    }
    else if (firstChar === 'B'){
      console.log('even amount of letters, first letter is B')
      usersFirstName = 'Cersei';
    }
    else if (firstChar === 'C'){
      console.log('even amount of letters, first letter is C')
      usersFirstName = 'Daenerys';
    }
    else if (firstChar === 'D'){
      console.log('even amount of letters, first letter is D')
      usersFirstName = 'Jon';
    }
    else if (firstChar === 'E'){
      console.log('even amount of letters, first letter is E')
      usersFirstName = 'Sansa';
    }
    else if (firstChar === 'F'){
      console.log('even amount of letters, first letter is F')
      usersFirstName = 'Arya';
    }
    else if (firstChar === 'G'){
      console.log('even amount of letters, first letter is G')
      usersFirstName = 'Jorah';
    }
    else if (firstChar === 'H'){
      console.log('even amount of letters, first letter is H')
      usersFirstName = 'Jamie';
    }
    else if (firstChar === 'I'){
      console.log('even amount of letters, first letter is I')
      usersFirstName = 'Jamie';
    }
    else if (firstChar === 'J'){
      console.log('even amount of letters, first letter is J')
      usersFirstName = 'Jamie';
    }
    else if (firstChar === 'K'){
      console.log('even amount of letters, first letter is K')
      usersFirstName = 'Jamie';
    }
    else if (firstChar === 'L'){
      console.log('even amount of letters, first letter is L')
      usersFirstName = 'Jamie';
    }
    else if (firstChar === 'M'){
      console.log('even amount of letters, first letter is M')
      usersFirstName = 'Jamie';
    }
    else if (firstChar === 'N'){
      console.log('even amount of letters, first letter is N')
      usersFirstName = 'Jamie';
    }
    else if (firstChar === 'O'){
      console.log('even amount of letters, first letter is O')
      usersFirstName = 'Jamie';
    }
    else if (firstChar === 'P'){
      console.log('even amount of letters, first letter is P')
      usersFirstName = 'Jamie';
    }
    else if (firstChar === 'Q'){
      console.log('even amount of letters, first letter is Q')
      usersFirstName = 'Jamie';
    }
    else if (firstChar === 'R'){
      console.log('even amount of letters, first letter is R')
      usersFirstName = 'Jamie';
    }
    else if (firstChar === 'S'){
      console.log('even amount of letters, first letter is S')
      usersFirstName = 'Jamie';
    }
    else if (firstChar === 'T'){
      console.log('even amount of letters, first letter is T')
      usersFirstName = 'Jamie';
    }
    else if (firstChar === 'U'){
      console.log('even amount of letters, first letter is U')
      usersFirstName = 'Jamie';
    }
    else if (firstChar === 'V'){
      console.log('even amount of letters, first letter is V')
      usersFirstName = 'Jamie';
    }
    else if (firstChar === 'W'){
      console.log('even amount of letters, first letter is W')
      usersFirstName = 'Jamie';
    }
    else if (firstChar === 'X'){
      console.log('even amount of letters, first letter is X')
      usersFirstName = 'Jamie';
    }
    else if (firstChar === 'Y'){
      console.log('even amount of letters, first letter is Y')
      usersFirstName = 'Jamie';
    }
    else if (firstChar === 'Z'){
      console.log('even amount of letters, first letter is Z')
      usersFirstName = 'Jamie';
    }
  }

  //odd amount of letters
  function oddFirst(){
  var firstChar = $('.firstName').val().charAt(0).toUpperCase();
    if (firstChar === 'A'){
      console.log('odd amount of letters, first letter is A')
    }
    else if (firstChar === 'B'){
      console.log('odd amount of letters, first letter is B')
    }
    else if (firstChar === 'C'){
      console.log('odd amount of letters, first letter is C')
    }
    else if (firstChar === 'D'){
      console.log('odd amount of letters, first letter is D')
    }
    else if (firstChar === 'E'){
      console.log('odd amount of letters, first letter is E')
    }
    else if (firstChar === 'F'){
      console.log('odd amount of letters, first letter is F')
    }
    else if (firstChar === 'G'){
      console.log('odd amount of letters, first letter is G')
    }
    else if (firstChar === 'H'){
      console.log('odd amount of letters, first letter is H')
    }
    else if (firstChar === 'I'){
      console.log('odd amount of letters, first letter is I')
    }
    else if (firstChar === 'J'){
      console.log('odd amount of letters, first letter is J')
    }
    else if (firstChar === 'K'){
      console.log('odd amount of letters, first letter is K')
    }
    else if (firstChar === 'L'){
      console.log('odd amount of letters, first letter is L')
    }
    else if (firstChar === 'M'){
      console.log('odd amount of letters, first letter is M')
    }
    else if (firstChar === 'N'){
      console.log('odd amount of letters, first letter is N')
    }
    else if (firstChar === 'O'){
      console.log('odd amount of letters, first letter is O')
    }
    else if (firstChar === 'P'){
      console.log('odd amount of letters, first letter is P')
    }
    else if (firstChar === 'Q'){
      console.log('odd amount of letters, first letter is Q')
    }
    else if (firstChar === 'R'){
      console.log('odd amount of letters, first letter is R')
    }
    else if (firstChar === 'S'){
      console.log('odd amount of letters, first letter is S')
    }
    else if (firstChar === 'T'){
      console.log('odd amount of letters, first letter is T')
    }
    else if (firstChar === 'U'){
      console.log('odd amount of letters, first letter is U')
    }
    else if (firstChar === 'V'){
      console.log('odd amount of letters, first letter is V')
    }
    else if (firstChar === 'W'){
      console.log('odd amount of letters, first letter is W')
    }
    else if (firstChar === 'X'){
      console.log('odd amount of letters, first letter is X')
    }
    else if (firstChar === 'Y'){
      console.log('odd amount of letters, first letter is Y')
    }
    else if (firstChar === 'Z'){
      console.log('odd amount of letters, first letter is Z')
    }
  }

  // LAST NAME AREA //

  // even amount of letters
  function evenLast(){
  var firstChar = $('.lastName').val().charAt(0).toUpperCase();
    if (firstChar === 'A'){
      console.log('even amount of letters, first letter is A')
      usersLastName = 'Poop';
    }
    else if (firstChar === 'B'){
      console.log('even amount of letters, first letter is B')
    }
    else if (firstChar === 'C'){
      console.log('even amount of letters, first letter is C')
    }
    else if (firstChar === 'D'){
      console.log('even amount of letters, first letter is D')
    }
    else if (firstChar === 'E'){
      console.log('even amount of letters, first letter is E')
    }
    else if (firstChar === 'F'){
      console.log('even amount of letters, first letter is F')
    }
    else if (firstChar === 'G'){
      console.log('even amount of letters, first letter is G')
    }
    else if (firstChar === 'H'){
      console.log('even amount of letters, first letter is H')
    }
  }

  //odd amount of letters
  function oddLast(){
  var firstChar = $('.lastName').val().charAt(0).toUpperCase();
    if (firstChar === 'A'){
      console.log('odd amount of letters, first letter is A')
    }
    else if (firstChar === 'B'){
      console.log('odd amount of letters, first letter is B')
    }
    else if (firstChar === 'C'){
      console.log('odd amount of letters, first letter is C')
    }
    else if (firstChar === 'D'){
      console.log('odd amount of letters, first letter is D')
    }
    else if (firstChar === 'E'){
      console.log('odd amount of letters, first letter is E')
    }
    else if (firstChar === 'F'){
      console.log('odd amount of letters, first letter is F')
    }
    else if (firstChar === 'G'){
      console.log('odd amount of letters, first letter is G')
    }
    else if (firstChar === 'H'){
      console.log('odd amount of letters, first letter is H')
    }
  }

});
