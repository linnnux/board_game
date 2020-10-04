//main

// initialisation des paramètres

// get the reference for the body
var body = document.getElementsByTagName("body")[0];

// nombre max de case inaccéssibles à génrer
let nbCase = 5;

// couleur de case
let color = "green";

/*
Board(bodyReference)
*/

// initialisation du plateau
plateau = new Board(body);
// générer les cases inaccessibles
plateau.setBackground(body,color,nbCase);
