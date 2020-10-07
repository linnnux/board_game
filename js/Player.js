/*
  Author : M.M.Nassim
  e-mail : mmn@2mn.info
  website: www.2mn.info
*/
//Player

class Player
{
  constructor(name,color)
  {
    this._name  = name;
    this._color = color;
    this._score = 0;
    this._nbMoves = 0;
  }

  get name()
  {
    return this._name;
  }
  set name(name)
  {
    this.name = name;
  }

  get score()
  {
    return this._score;
  }
  set name(score)
  {
    this.name = score;
  }

  //
  get color()
  {
    return this._color;
  }
  set name(color)
  {
    this.color = color;
  }


  get present()
  {
    this._infos = {
                   name  : this._name,
                   color : this._color,
                   score : this._score,
                   moves : this._nbMoves
                 };
                 console.log(this._infos);

    var key;
    for (key in this._infos )
    {
      var li = document.createElement("li");
      var node = document.createTextNode(key+' : '+this._infos[key])
      li.appendChild(node);

      var element = document.getElementById("playerInfos");
      element.appendChild(li);
    }

    /*
    document.getElementById("player1Name").innerHTML = this._name;
    document.getElementById("player1Score").innerHTML = this._score;
    document.getElementById("player1NbMoves").innerHTML = this._score;
    */
  }

}
