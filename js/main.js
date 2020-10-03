//main program file//

// get the reference for the body
var body = document.getElementsByTagName("body")[0];
var maxLenght = 10;
var minLenght = 5;

var height = Math.floor(Math.random() * maxLenght)+minLenght;
var width  = Math.floor(Math.random() * maxLenght)+minLenght;
/*
Board(height,weight,bodyReference)
*/
plateau = new Board(height, width, body);
plateau.generateTableau;
