var textfield;
var output;
var submit;
var submit2;
var submit3;
var submit4;

function setup() {
  noCanvas();
  // creates input box
  // textfield = createInput("your favorite font?");
  textfield = select("#input");
  output = select('#output');
  submit = select("#fun1");
  submit2 = select("#fun2");
  submit3 = select("#fun3");
  submit4 = select("#fun4");
  submit.mousePressed(fun1);
  submit2.mousePressed(fun2);
  submit3.mousePressed(fun3);
  submit4.mousePressed(fun4);


  textFont("ABCDiatype-Regular");

}

function fun1() {
  var s = textfield.value();

  var words = s.split(/(\W+)/);
  console.log(words);
  for (var i = 0; i < words.length; i++) {
    var span = createSpan(words[i] );
    span.parent(output);

    if (!/\W+/.test(words[i] )) {
      // span.style('background-color', color(random(255), random(255) , random(255)) );
      span.mouseOver(highlight);
    }
  }
}

function highlight() {
  // console.log('hover');
  console.log(this.html() );
  this.html('typesetting');
  var c = color(random(255), random(255) , random(255))
  this.style('background-color', c);

  // var s = this.html().replace();
}

function fun2() {
  var s = textfield.value();

  var r = /([,.!?—])+/;
  var words = s.split(r);
  console.log(words);
  for (var i = 0; i < words.length; i++) {
    createP(words[i] );
  }
}


function fun3() {
  var s = textfield.value();
  var r = /\b\w+\b/g;

  var newstring = s.replace(r, replacer);
  console.log(newstring);
  createP(newstring);
}

function replacer(match) {
  console.log(match);
    if (match.length == 5) {
      return match.toUpperCase();
    } else {
      return match;
    }
}

function fun4() {
    var s = textfield.value();
    var r = /\b\w+\b/g;
  
    var newstring = s.replace(r, typesetting);
    console.log(newstring);
    createP(newstring);
  }
  
  function typesetting(match) {
    console.log(match);
    return "TYPESETTING";
}




// function newTyping() {
//     output.html(textfield.value() )
//     // makes input appear on page
//     // createP(textfield.value() );
//   }



// splitting string by delimiter



// return word as specific string
// return "hello";


//   createP(words);


// replace() function //
// function newText() {
//     var s = textfield.value();
//     var r = /\b\w+\b/g;
  
    
//     var newstring = s.replace(r, replacer);
//     console.log(newstring);
//     createP(newstring);
  
//   }
  
//   function replacer(match) {
//     //console.log(match);
//     if (match.length == 5) {
//       return match.toUpperCase();
//     } else {
//       return match;
//     }
  
//   }