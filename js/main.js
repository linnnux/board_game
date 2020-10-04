//main

// initialisation des paramètres

// get the reference for the body
var body = document.getElementsByTagName("body")[0];

// nombre max de case inaccéssibles à génrer
let nbCase = 5;

// couleur de case
let color = '8bc34a';

/*
Board(bodyReference)
*/

// initialisation du plateau
plateau = new Board(body);
// générer les cases inaccessibles
plateau.generateNoAvailableCases(body,"#CCC",nbCase);

let actualX = 0;
let actualY = 0;
plateau.setCase(body,actualX, actualY,'red');

const log = document.getElementById('log');

document.addEventListener('keypress', move);


function move(event)
{

  console.log(color);
  var x = event.key;
  //console.log("The pressed key was: " + x);

  if(x=='b')
  {
    if(actualX + 1 < plateau.xTableLength && plateau.isCaseAvailable(body, actualX+1, actualY) == true )
    {

        plateau.setCase(body,actualX,actualY,'#'+color,true);
        actualX = actualX+1;
    }
    else
    {
      alert('cellule non inaccessible');
    }

  }
  else if(x=='h')
  {
    if( (actualX - 1) >= 0 && plateau.isCaseAvailable(body, actualX-1, actualY)== true)
    {
        plateau.setCase(body,actualX,actualY,'#'+color,true)
        actualX = actualX-1;
    }
    else
    {
      alert('cellule non inaccessible');
    }


  }
  else if(x=='g')
  {
    if( (actualY - 1) >= 0 && plateau.isCaseAvailable(body, actualX, actualY-1) == true)
    {
      plateau.setCase(body,actualX,actualY,'#'+color,true);
      actualY = actualY-1;
    }
    else
    {
      alert('cellule non inaccessible');
    }

  }
  else if(x=='d')
  {
    if(actualY + 1 < plateau.yTableLength && plateau.isCaseAvailable(body, actualX, actualY+1) == true)
    {
      plateau.setCase(body,actualX,actualY,'#'+color,true);
      actualY = actualY+1;
    }
    else
    {
      alert('cellule non inaccessible');
    }
  }
  plateau.setCase(body,actualX,actualY,"red");

}
