
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


class Board
{


    constructor(body)
    {
      // get the reference for the body

      // creates a <table> element and a <tbody> element
      var tbl     = document.createElement("table");
      var tblBody = document.createElement("tbody");

      this._maxLenght = 10;
      this._minLenght = 5;

      this._x = Math.floor(Math.random() * this._maxLenght)+this._minLenght;;
      this._y = Math.floor(Math.random() * this._maxLenght)+this._minLenght;;


      // creating all cells

      for (var i = 0; i < this._x; i++)
      {

        // creates a table row
        var row = document.createElement("tr");

        for (var j = 0; j < this._y; j++)
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
        try
        {
          tblBody.appendChild(row);
        }
        catch (e)
        {
          console.log("erreur création tableau");
        }

        // put the <tbody> in the <table>
        tbl.appendChild(tblBody);

        // appends <table> into <body>
        body.appendChild(tbl);
        // sets the border attribute of tbl to 2;
        tbl.setAttribute("border", "5");
    }


    }


    set height(x)
    {
      this._x = x;
    }
    get height()
    {
      return this._x;
    }

    set maxLenght(maxLenght)
    {
      this._maxLenght = maxLenght;
    }
    get maxLenght()
    {
      return this._maxLenght;
    }


}
