//main

// initialisation des paramètres

// get the reference for the body
var body = document.getElementsByTagName("body")[0];

// nombre max de case inaccéssibles à génrer
let nbCase = 5;

// couleur de case
let color = "grey";

/*
Board(bodyReference)
*/

// initialisation du plateau
plateau = new Board(body);
// générer les cases inaccessibles
plateau.setBackground(body,color,nbCase);

let actualX = 0;
let actualY = 0;
plateau.setCase(body,actualX, actualY,"red");

const log = document.getElementById('log');

document.addEventListener('keypress', myFunction);


function myFunction(event)
{

  var x = event.key;
  console.log("The pressed key was: " + x);


  if(x=='b')
  {
    if(actualX + 1 < plateau.xTableLength)
    {
      plateau.setCase(body,actualX,actualY,"green");
      actualX = actualX+1;
    }

  }
  else if(x=='h')
  {


    if( (actualX - 1) >= 0)
    {
      plateau.setCase(body,actualX,actualY,"green");
      actualX = actualX-1;
    }

  }
  else if(x=='g')
  {
    if( (actualY - 1) >= 0)
    {
      plateau.setCase(body,actualX,actualY,"green");
      actualY = actualY-1;
    }
  }
  else if(x=='d')
  {
    if(actualY + 1 < plateau.yTableLength)
    {
      plateau.setCase(body,actualX,actualY,"green");
      actualY = actualY+1;
    }
  }
  else {

  }

  plateau.setCase(body,actualX,actualY,"red");


}
