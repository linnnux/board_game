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

    let key;
    for (key in this._infos )
    {
      let element = document.getElementById("playerInfos");
      let li = document.createElement("li");
      let node = document.createTextNode(key+' : '+this._infos[key]);

      li.appendChild(node);
      element.appendChild(li);
    }

  }

}
