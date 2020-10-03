
/*
  Générer un tableau
  Ce tableau servira de plateau de jeu
  sources :
    https://www.w3schools.com/js/js_htmldom_document.asp
    https://developer.mozilla.org/fr/docs/Explorer_un_tableau_HTML_avec_des_interfaces_DOM_et_JavaScript
    https://developer.mozilla.org/fr/docs/Web/API/Element/setAttribute
    https://developer.mozilla.org/fr/docs/Web/API/Element/getAttribute
    https://www.w3schools.com/jsref/met_element_getattribute.asp

*/
function generate_table()
{
  // get the reference for the body
  var body = document.getElementsByTagName("body")[0];

  // creates a <table> element and a <tbody> element
  var tbl = document.createElement("table");
  var tblBody = document.createElement("tbody");

  var tableHeight = 7;
  var tableWidth = 7;

  // creating all cells
  for (var i = 0; i < tableHeight; i++)
  {
    // creates a table row
    var row = document.createElement("tr");

    for (var j = 0; j < tableWidth; j++)
    {
      // Create a <td> element and a text node, make the text
      // node the contents of the <td>, and put the <td> at
      // the end of the table row
      var cell = document.createElement("td");
      var cellText = document.createTextNode("row "+i+", column "+j);
      var cellText = document.createTextNode("row "+i+", column "+j);
      cell.setAttribute("x", i);
      cell.setAttribute("y", j);
      cell.appendChild(cellText);
      row.appendChild(cell);



    }

    // add the row to the end of the table body
    tblBody.appendChild(row);
  }

  // put the <tbody> in the <table>
  tbl.appendChild(tblBody);
  // appends <table> into <body>
  body.appendChild(tbl);
  // sets the border attribute of tbl to 2;
  tbl.setAttribute("border", "5");
}


/*
  Cette fonction permet l'accèes à une cellule en renseignant ses attribut
*/
function set_background()
{
  // récupère une liste de tous les éléments body (il n'y en aura qu'un),
  // et sélectionne le premier (indice 0) de ces éléments
  try
  {
    myBody = document.getElementsByTagName("body")[0];
  }
  catch (e)
  {
    alert('no body created');
  }

  // à présent, trouve tous les éléments p enfants de cet élément body
  try
  {
    myBodyElements = myBody.getElementsByTagName("td");

  }
  catch (e)
  {
    alert('no table exists');
  }


  let myP = myBodyElements[0];

  let randomCase = Math.floor(Math.random() * myBodyElements.length);

  try
  {
    for(let i=0;i< 3; i++)
    {
      randomCase = Math.floor(Math.random() * myBodyElements.length);
      myBodyElements[randomCase].style.background="red";
    }
  }
  catch (e)
  {
    alert('case access error');
    return false;
  }

  // recherche une case spécifique grâce à ses attributs x et y 
  if(myP.hasAttribute)
  {
    for(let i =0; i< myBodyElements.length; i++)
    {
        myP = myBodyElements[i];
        if(myP.getAttribute("x")==1 && myP.getAttribute("y")==1)
        {
          const align = "x = "+myP.getAttribute("x")+" y = "+myP.getAttribute("y");
          //alert(align); // affiche la valeur de l'attribut align pour l'élément dont l'id="div1"
          myP.style.background = "#999";
       }
    }

  }
  // récupère le second élément de cette liste d'éléments p


}
