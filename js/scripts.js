console.log('script loaded');

// name generator

// how it works:
// user types, hits submit
// hide the form
// take content from input
// check whether it is odd/even
// choose respective content
// append content to canvas
// canvas to png
// CELEBRATE
// - fin -

// once the page is ready
$(document).ready(function() {

  $('.refresh').click(function (e) {
      e.preventDefault();
      $('form').fadeIn("linear");
      $('myCanvas').remove();
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      $('input').val('')
    });

  // this creates our canvas on the page
  var canvas = document.getElementById("myCanvas");
  // canvas styling
  var ctx=canvas.getContext("2d");
  ctx.font="30px Comic Sans MS";
  ctx.fillStyle = "pink";
  ctx.textAlign = "center";
  // IF YOU WANT IT TO HAVE TEXT FROM THE START:
  // ctx.fillText("Name Generator", canvas.width/2, canvas.height/2);

  //this turns our canvas into a saveable, sharable image
  function convertCanvasToImage(canvas) {
    var image = new Image();
    image.src = canvas.toDataURL("image/png");
    return image;
  }

  // action area - gathering our items on the page
  function canvasImgCreator(){
  var sampleCanvas = document.getElementById("canvasHolder");
  document.getElementById("canvasHolder").appendChild(canvas);
  }
  // our event - when you click submit on the form
  $('.submit').click(function (e) {
      // stop normal form submit event (redirect)
      e.preventDefault();

      // fade out the form
      $('form').fadeOut("linear");

      // these are grabbing values from the two input areas
      // these start as dirty user input and are replaced by generated names
      var usersFirstName =  $('.firstName').val();
      var usersLastName = $('.lastName').val();

      // this is combining the first and last name
      var fullName = usersFirstName + " " + usersLastName;

      // where the magic happens:
      // check char count is odd/even on first/last name
      canvasImgCreator();
      genOne(usersFirstName);
      genTwo(usersLastName);

      // then update the image
      updateTheImage(fullName);
  });

  // updating the canvas and create the img
  function updateTheImage(fullName){
    //if you have to clear the canvas...
    // ctx.clearRect(0, 0, canvas.width, canvas.height);
    // ensure name values are up to date
    var fullname = usersFirstName + " " + usersLastName;
    // replace the contents of the canvas
    ctx.fillText(fullname, canvas.width/2, canvas.height/2);
    ctx.textAlign = "center";
    // put it on the page
    document.getElementById("pngHolder").appendChild(convertCanvasToImage(canvas));
  }

  // checking whether the first name is odd/even
  function genOne(usersFirstName) {
    // capitalize first letter for consistensy
    var firstChar = $('.firstName').val().charAt(0).toUpperCase();
    var charCount = $('.firstName').val().length;
    // override attempt
    // if even charcount
    if (usersFirstName = 'Ashley' && charCount % 2 === 0){
      // choose from this bank of names
      evenFirst();
      console.log('ashley');
    }
    // if odd charcount
    else {
      // choose from this bank of names
      oddFirst();
    }
  }

  // checking whether the last name is odd/even
  function genTwo(usersLastName) {
    // capitalize first letter for consistensy
    var firstCharLast = $('.lastName').val().charAt(0).toUpperCase();
    var charCountLast = $('.lastName').val().length;
    // if even
    if (charCountLast % 2 === 0){
      evenLast();
    }
    // if odd
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
      usersFirstName = 'Samwell';
    }
    else if (firstChar === 'J'){
      console.log('even amount of letters, first letter is J')
      usersFirstName = 'Theon';
    }
    else if (firstChar === 'K'){
      console.log('even amount of letters, first letter is K')
      usersFirstName = 'Petyr';
    }
    else if (firstChar === 'L'){
      console.log('even amount of letters, first letter is L')
      usersFirstName = 'Varys';
    }
    else if (firstChar === 'M'){
      console.log('even amount of letters, first letter is M')
      usersFirstName = 'Brienne';
    }
    else if (firstChar === 'N'){
      console.log('even amount of letters, first letter is N')
      usersFirstName = 'Tywin';
    }
    else if (firstChar === 'O'){
      console.log('even amount of letters, first letter is O')
      usersFirstName = 'Sandor';
    }
    else if (firstChar === 'P'){
      console.log('even amount of letters, first letter is P')
      usersFirstName = 'Bronn';
    }
    else if (firstChar === 'Q'){
      console.log('even amount of letters, first letter is Q')
      usersFirstName = 'Joffrey';
    }
    else if (firstChar === 'R'){
      console.log('even amount of letters, first letter is R')
      usersFirstName = 'Catelyn';
    }
    else if (firstChar === 'S'){
      console.log('even amount of letters, first letter is S')
      usersFirstName = 'Bran';
    }
    else if (firstChar === 'T'){
      console.log('even amount of letters, first letter is T')
      usersFirstName = 'Stannis';
    }
    else if (firstChar === 'U'){
      console.log('even amount of letters, first letter is U')
      usersFirstName = 'Missandei';
    }
    else if (firstChar === 'V'){
      console.log('even amount of letters, first letter is V')
      usersFirstName = 'Robb';
    }
    else if (firstChar === 'W'){
      console.log('even amount of letters, first letter is W')
      usersFirstName = 'Tormund';
    }
    else if (firstChar === 'X'){
      console.log('even amount of letters, first letter is X')
      usersFirstName = 'Gendry';
    }
    else if (firstChar === 'Y'){
      console.log('even amount of letters, first letter is Y')
      usersFirstName = 'Ygritte';
    }
    else if (firstChar === 'Z'){
      console.log('even amount of letters, first letter is Z')
      usersFirstName = 'Daario';
    }
  }

  //odd amount of letters
  function oddFirst(){
  var firstChar = $('.firstName').val().charAt(0).toUpperCase();
    if (firstChar === 'A'){
      console.log('odd amount of letters, first letter is A')
      usersFirstName = 'Ramsay';
    }
    else if (firstChar === 'B'){
      console.log('odd amount of letters, first letter is B')
      usersFirstName = 'Jaqen';
    }
    else if (firstChar === 'C'){
      console.log('odd amount of letters, first letter is C')
      usersFirstName = 'Talisa';
    }
    else if (firstChar === 'D'){
      console.log('odd amount of letters, first letter is D')
      usersFirstName = 'Ned';
    }
    else if (firstChar === 'E'){
      console.log('odd amount of letters, first letter is E')
      usersFirstName = 'Drogo';
    }
    else if (firstChar === 'F'){
      console.log('odd amount of letters, first letter is F')
      usersFirstName = 'Ellaria';
    }
    else if (firstChar === 'G'){
      console.log('odd amount of letters, first letter is G')
      usersFirstName = 'Robert';
    }
    else if (firstChar === 'H'){
      console.log('odd amount of letters, first letter is H')
      usersFirstName = 'Viserys';
    }
    else if (firstChar === 'I'){
      console.log('odd amount of letters, first letter is I')
      usersFirstName = 'Grand Maester Pycelle';
    }
    else if (firstChar === 'J'){
      console.log('odd amount of letters, first letter is J')
      usersFirstName = 'Barristan';
    }
    else if (firstChar === 'K'){
      console.log('odd amount of letters, first letter is K')
      usersFirstName = 'Eddison';
    }
    else if (firstChar === 'L'){
      console.log('odd amount of letters, first letter is L')
      usersFirstName = 'Podrick';
    }
    else if (firstChar === 'M'){
      console.log('odd amount of letters, first letter is M')
      usersFirstName = 'Grenn';
    }
    else if (firstChar === 'N'){
      console.log('odd amount of letters, first letter is N')
      usersFirstName = 'Hodor';
    }
    else if (firstChar === 'O'){
      console.log('odd amount of letters, first letter is O')
      usersFirstName = 'Loras';
    }
    else if (firstChar === 'P'){
      console.log('odd amount of letters, first letter is P')
      usersFirstName = 'Meryn';
    }
    else if (firstChar === 'Q'){
      console.log('odd amount of letters, first letter is Q')
      usersFirstName = 'Grey Worm';
    }
    else if (firstChar === 'R'){
      console.log('odd amount of letters, first letter is R')
      usersFirstName = 'Alliser';
    }
    else if (firstChar === 'S'){
      console.log('odd amount of letters, first letter is S')
      usersFirstName = 'Janos';
    }
    else if (firstChar === 'T'){
      console.log('odd amount of letters, first letter is T')
      usersFirstName = 'Osha';
    }
    else if (firstChar === 'U'){
      console.log('odd amount of letters, first letter is U')
      usersFirstName = 'Maester Luwin';
    }
    else if (firstChar === 'V'){
      console.log('odd amount of letters, first letter is V')
      usersFirstName = 'Rickton';
    }
    else if (firstChar === 'W'){
      console.log('odd amount of letters, first letter is W')
      usersFirstName = 'Olly';
    }
    else if (firstChar === 'X'){
      console.log('odd amount of letters, first letter is X')
      usersFirstName = 'Lancel';
    }
    else if (firstChar === 'Y'){
      console.log('odd amount of letters, first letter is Y')
      usersFirstName = 'Seltse';
    }
    else if (firstChar === 'Z'){
      console.log('odd amount of letters, first letter is Z')
      usersFirstName = 'Jojen';
    }
  }

  // LAST NAME AREA //

  // even amount of letters
  function evenLast(){
  var firstChar = $('.lastName').val().charAt(0).toUpperCase();
    if (firstChar === 'A'){
      console.log('even amount of letters, first letter is A')
      usersLastName = 'Lannister';
    }
    else if (firstChar === 'B'){
      console.log('even amount of letters, first letter is B')
      usersLastName = 'Targaryen';
    }
    else if (firstChar === 'C'){
      console.log('even amount of letters, first letter is C')
      usersLastName = 'Snow';
    }
    else if (firstChar === 'D'){
      console.log('even amount of letters, first letter is D')
      usersLastName = 'Stark';
    }
    else if (firstChar === 'E'){
      console.log('even amount of letters, first letter is E')
      usersLastName = 'Mormont';
    }
    else if (firstChar === 'F'){
      console.log('even amount of letters, first letter is F')
      usersLastName = 'Tarly';
    }
    else if (firstChar === 'G'){
      console.log('even amount of letters, first letter is G')
      usersLastName = 'Greyjoy';
    }
    else if (firstChar === 'H'){
      console.log('even amount of letters, first letter is H')
      usersLastName = 'Baelish';
    }
    else if (firstChar === 'I'){
      console.log('even amount of letters, first letter is I')
      usersLastName = 'Clegane';
    }
    else if (firstChar === 'J'){
      console.log('even amount of letters, first letter is J')
      usersLastName = 'Baratheon';
    }
    else if (firstChar === 'K'){
      console.log('even amount of letters, first letter is K')
      usersLastName = 'Seaworth';
    }
    else if (firstChar === 'L'){
      console.log('even amount of letters, first letter is L')
      usersLastName = 'Bolton';
    }
    else if (firstChar === 'M'){
      console.log('even amount of letters, first letter is M')
      usersLastName = 'Hghar';
    }
    else if (firstChar === 'N'){
      console.log('even amount of letters, first letter is N')
      usersLastName = 'Drogo';
    }
    else if (firstChar === 'O'){
      console.log('even amount of letters, first letter is O')
      usersLastName = 'Sand';
    }
    else if (firstChar === 'P'){
      console.log('even amount of letters, first letter is P')
      usersLastName = 'Pycelle';
    }
    else if (firstChar === 'Q'){
      console.log('even amount of letters, first letter is Q')
      usersLastName = 'Tollett';
    }
    else if (firstChar === 'R'){
      console.log('even amount of letters, first letter is R')
      usersLastName = 'Payne';
    }
    else if (firstChar === 'S'){
      console.log('even amount of letters, first letter is S')
      usersLastName = 'Thorne';
    }
    else if (firstChar === 'T'){
      console.log('even amount of letters, first letter is T')
      usersLastName = 'Slynt';
    }
    else if (firstChar === 'U'){
      console.log('even amount of letters, first letter is U')
      usersLastName = 'Luwin';
    }
    else if (firstChar === 'V'){
      console.log('even amount of letters, first letter is V')
      usersLastName = 'Cassel';
    }
    else if (firstChar === 'W'){
      console.log('even amount of letters, first letter is W')
      usersLastName = 'Lannister';
    }
    else if (firstChar === 'X'){
      console.log('even amount of letters, first letter is X')
      usersLastName = 'Yarwyck';
    }
    else if (firstChar === 'Y'){
      console.log('even amount of letters, first letter is Y')
      usersLastName = 'Rayder';
    }
    else if (firstChar === 'Z'){
      console.log('even amount of letters, first letter is Z')
      usersLastName = 'Sparrow';
    }
  }

  //odd amount of letters
  function oddLast(){
  var firstChar = $('.lastName').val().charAt(0).toUpperCase();
    if (firstChar === 'A'){
      console.log('odd amount of letters, first letter is A')
      usersLastName = 'Lannister';
    }
    else if (firstChar === 'B'){
      console.log('odd amount of letters, first letter is B')
      usersLastName = 'Rayder';
    }
    else if (firstChar === 'C'){
      console.log('odd amount of letters, first letter is C')
      usersLastName = 'Clegane';
    }
    else if (firstChar === 'D'){
      console.log('odd amount of letters, first letter is D')
      usersLastName = 'Loraq';
    }
    else if (firstChar === 'E'){
      console.log('odd amount of letters, first letter is E')
      usersLastName = 'zo Loraq';
    }
    else if (firstChar === 'F'){
      console.log('odd amount of letters, first letter is F')
      usersLastName = 'Hollard';
    }
    else if (firstChar === 'G'){
      console.log('odd amount of letters, first letter is G')
      usersLastName = 'Daxos';
    }
    else if (firstChar === 'H'){
      console.log('odd amount of letters, first letter is H')
      usersLastName = 'Tully';
    }
    else if (firstChar === 'I'){
      console.log('odd amount of letters, first letter is I')
      usersLastName = 'Cassel';
    }
    else if (firstChar === 'J'){
      console.log('odd amount of letters, first letter is J')
      usersLastName = 'Cleftjaw';
    }
    else if (firstChar === 'K'){
      console.log('odd amount of letters, first letter is K')
      usersLastName = 'Sand';
    }
    else if (firstChar === 'L'){
      console.log('odd amount of letters, first letter is L')
      usersLastName = 'Bolton';
    }
    else if (firstChar === 'M'){
      console.log('odd amount of letters, first letter is M')
      usersLastName = 'Rivers';
    }
    else if (firstChar === 'N'){
      console.log('odd amount of letters, first letter is N')
      usersLastName = 'Greyjoy';
    }
    else if (firstChar === 'O'){
      console.log('odd amount of letters, first letter is O')
      usersLastName = 'the Dommed';
    }
    else if (firstChar === 'P'){
      console.log('odd amount of letters, first letter is P')
      usersLastName = 'mo Eraz';
    }
    else if (firstChar === 'Q'){
      console.log('odd amount of letters, first letter is Q')
      usersLastName = 'Arryn';
    }
    else if (firstChar === 'R'){
      console.log('odd amount of letters, first letter is R')
      usersLastName = 'the Frog';
    }
    else if (firstChar === 'S'){
      console.log('odd amount of letters, first letter is S')
      usersLastName = 'Lannister';
    }
    else if (firstChar === 'T'){
      console.log('odd amount of letters, first letter is T')
      usersLastName = 'the Strange';
    }
    else if (firstChar === 'U'){
      console.log('odd amount of letters, first letter is U')
      usersLastName = 'the Rat';
    }
    else if (firstChar === 'V'){
      console.log('odd amount of letters, first letter is V')
      usersLastName = 'Terys';
    }
    else if (firstChar === 'W'){
      console.log('odd amount of letters, first letter is W')
      usersLastName = 'Nestoris';
    }
    else if (firstChar === 'X'){
      console.log('odd amount of letters, first letter is X')
      usersLastName = 'zo Qaggaz';
    }
    else if (firstChar === 'Y'){
      console.log('odd amount of letters, first letter is Y')
      usersLastName = 'the Giant';
    }
    else if (firstChar === 'Z'){
      console.log('odd amount of letters, first letter is Z')
      usersLastName = 'Frey';
    }
  }

});
