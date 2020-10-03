//main program file//

// get the reference for the body
var body = document.getElementsByTagName("body")[0];

/*
Board(height,weight,bodyReference)
*/
plateau = new Board(5, 5, body);
plateau.generateTableau;
