var textfield;
var output;
var submit;

// function preload() {
//     partyConnect("wss://demoserver.p5party.org", "cursors");
//     me = partyLoadMyShared({ x: 10, y: 10 });
//     guests = partyLoadGuestShareds();
//   }

function setup() {
  noCanvas();
  // creates input box
//   textfield = createInput("your favorite font?");
  textfield = select("#input");
  output = select('#output');
  submit = select("#submit");
  submit.mousePressed(newText);
  textFont("ABCDiatype-Regular");

}

function newText() {
  var s = textfield.value();
  var r = /\b\w+\b/g;

  
  var newstring = s.replace(r, replacer);
  console.log(newstring);
  createP(newstring);

}

function replacer(match) {
  //console.log(match);
  if (match.length == 4) {
    return match.toUpperCase();
  } else {
    return match;
  }

}

// function newTyping() {
//     output.html(textfield.value() )
//     // makes input appear on page
//     // createP(textfield.value() );
//   }



// splitting string
    // var r = /([,.!?h])+/;
    // var words = s.split(r);
    // console.log(words);
    // for (var i = 0; i < words.length; i++) {
    //   createP(words[i] );
    // }

// return word as specific string
// return "gay";

//   createP(words);