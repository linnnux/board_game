/*
  Author : M.M.Nassim
  e-mail : mmn@2mn.info
  website: www.2mn.info
*/
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


// source : https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key
window.addEventListener("keydown", function (event) {
  if (event.defaultPrevented) {
    return; // Do nothing if the event was already processed
  }

  switch (event.key) {
    case "Down": // IE/Edge specific value
    case "ArrowDown":
      // Do something for "down arrow" key press.
        if(actualX + 1 < plateau.xTableLength && plateau.isCaseAvailable(body, actualX+1, actualY) == true )
        {

            plateau.setCase(body,actualX,actualY,'#'+color,true);
            actualX = actualX+1;
        }
        else
        {
          alert('cellule non inaccessible');
        }

      break;
    case "Up": // IE/Edge specific value
    case "ArrowUp":
      // Do something for "up arrow" key press.
      if( (actualX - 1) >= 0 && plateau.isCaseAvailable(body, actualX-1, actualY)== true)
      {
          plateau.setCase(body,actualX,actualY,'#'+color,true)
          actualX = actualX-1;
      }
      else
      {
        alert('cellule non inaccessible');
      }
      break;
    case "Left": // IE/Edge specific value
    case "ArrowLeft":
      // Do something for "left arrow" key press.
      if( (actualY - 1) >= 0 && plateau.isCaseAvailable(body, actualX, actualY-1) == true)
      {
        plateau.setCase(body,actualX,actualY,'#'+color,true);
        actualY = actualY-1;
      }
      else
      {
        alert('cellule non inaccessible');
      }

      break;
    case "Right": // IE/Edge specific value
    case "ArrowRight":
      // Do something for "right arrow" key press.
      if(actualY + 1 < plateau.yTableLength && plateau.isCaseAvailable(body, actualX, actualY+1) == true)
      {
        plateau.setCase(body,actualX,actualY,'#'+color,true);
        actualY = actualY+1;
      }
      else
      {
        alert('cellule non inaccessible');
      }
      break;
    case "Enter":
      // Do something for "enter" or "return" key press.
      break;
    case "Esc": // IE/Edge specific value
    case "Escape":
      // Do something for "esc" key press.
      break;
    default:
      return; // Quit when this doesn't handle the key event.
  }
  plateau.setCase(body,actualX,actualY,"red");
  // Cancel the default action to avoid it being handled twice
  event.preventDefault();
}, true);
