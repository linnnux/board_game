
/*
  Générer un tableau
  Ce tableau servira de plateau de jeu
  sources :
    https://www.w3schools.com/js/js_htmldom_document.asp
    https://developer.mozilla.org/fr/docs/Explorer_un_tableau_HTML_avec_des_interfaces_DOM_et_JavaScript
    https://developer.mozilla.org/fr/docs/Web/API/Element/setAttribute
    https://developer.mozilla.org/fr/docs/Web/API/Element/getAttribute
    https://www.w3schools.com/jsref/met_element_getattribute.asp

    Author : M.M.Nassim
    e-mail : mmn@2mn.info
    website: www.2mn.info
*/


class Board
{


    constructor(body)
    {
      //déclaration et initialisation des variables

      // taille tab max
      this._maxLenght    = 10;
      // taille tab min
      this._minLenght    = 5;

      // longueur x tab
      this._xTableLength = 0;
      // longueur y tab
      this._xTableLength = 0;

      // générer un tableau (plateau)
      this.generateTable(body);

    }

    generateTable(body)
    {
      // creates a <table> element and a <tbody> element
      var tbl     = document.createElement("table");
      tbl.setAttribute("class","w3-twothird w3-light-green w3-center");
      var tblBody = document.createElement("tbody");

      // générer les tailles du plateau entre le max et le minim défini
      this._xTableLength = this.getRndInteger( this._minLenght,  this._maxLenght);
      this._yTableLength = this.getRndInteger( this._minLenght,  this._maxLenght);

      // creating all cells

      for (var i = 0; i < this._xTableLength; i++)
      {

        // creates a table row
        var row = document.createElement("tr");

          for (var j = 0; j < this._yTableLength; j++)
          {

            // Create a <td> element and a text node, make the text
            // node the contents of the <td>, and put the <td> at
            // the end of the table row
            var cell = document.createElement("td");
            var cellText = document.createTextNode("row "+i+", column "+j);
            var cellText = document.createTextNode("row "+i+", column "+j);
            cell.setAttribute("x", i);
            cell.setAttribute("y", j);
            cell.setAttribute("available", true);
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
            return false
          }

        // put the <tbody> in the <table>
        tbl.appendChild(tblBody);

        // appends <table> into <body>
        body.appendChild(tbl);

        // sets the border attribute of tbl to 2;
        tbl.setAttribute("border", "5");
    }
  }

    /*
      Cette fonction génère les cases inaccessibles
    */
    generateNoAvailableCases(body, color, nbCase)
    {
      if (nbCase > this._xTableLength || nbCase > this._yTableLength)
      {
        nbcase = this._xTableLength;
      }

      try
      {
        for(let i=0;i< nbCase; i++)
        {
          this._randomX = this.getRndInteger(0, this._xTableLength);
          this._randomY = this.getRndInteger(0, this._yTableLength);

          this.setCase(body, this._randomX, this._randomY, color, false);
        }
      }
      catch (e)
      {
        console.log('setBackground case access error');
        return false;
      }

    }

    /*
      Cette fonction prend 3 paramètres body,x,y, accède à la position du tableau et change sa couleur
      body = réfèrence vers le body de la page html
      x     : type int , indique la position horizontale
      y     : type int , indique position verticale
      color : type str , indique la couleur
    */
    setCase(body,x,y,color, access)
    {
      // récupère une liste de tous les éléments body (il n'y en aura qu'un),
      // et sélectionne le premier (indice 0) de ces éléments

      try
      {
        this._body = body;
      }
      catch (e)
      {
        alert('no body created');
        return false;
      }

      // à présent, trouve tous les éléments p enfants de cet élément body
      try
      {
        this._bodyElements = this._body.getElementsByTagName("td");
      }
      catch (e)
      {
        alert('no table exists');
      }


      let cellule = this._bodyElements[0];

      // recherche une case spécifique grâce à ses attributs x et y
      if(cellule.hasAttribute)
      {
        for(let i =0; i< this._bodyElements.length; i++)
        {
            cellule = this._bodyElements[i];
            if(cellule.getAttribute("x")==x && cellule.getAttribute("y") == y)
            {
                if(cellule.getAttribute("available")== "false")
                {
                  return false;
                }
                else
                {
                  cellule.setAttribute("available",access);
                  cellule.style.background = color;
                }

              }
           }
        }

      }




    // return une valeur aléatoire entre min et max
    getRndInteger(min, max)
    {
      return Math.floor(Math.random() * (max - min + 1) ) + min;
    }

    // longueur x tab
    get xTableLength()
    {
        return this._xTableLength;
    }

    // longueur y tab
    get yTableLength()
    {
        return this._yTableLength;
    }



    isCaseAvailable(body,x,y)
    {
      // récupère une liste de tous les éléments body (il n'y en aura qu'un),
      // et sélectionne le premier (indice 0) de ces éléments

      try
      {
        this._body = body;
      }
      catch (e)
      {
        alert('no body created');
        return false;
      }

      // à présent, trouve tous les éléments p enfants de cet élément body
      try
      {
        this._bodyElements = this._body.getElementsByTagName("td");
      }
      catch (e)
      {
        alert('no table exists');
      }


      let cellule = this._bodyElements[0];

      // recherche une case spécifique grâce à ses attributs x et y
      if(cellule.hasAttribute)
      {
        for(let i =0; i< this._bodyElements.length; i++)
        {
            cellule = this._bodyElements[i];
            if(cellule.getAttribute("x")==x && cellule.getAttribute("y") == y)
            {
                if(cellule.getAttribute("available")== "false")
                {
                  return false;
                }
                else
                {
                  return true;
                }

              }
           }
        }

      }



}
