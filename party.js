import * as rpg from './rpg.js'

class Character{
  constructor(name,materia){
    this.name=name
    this.materia=materia
    this.materia.sort()
  }
  
  use(m){return this.materia.indexOf(m)>=0}
}

export var command='command'
export var magic='magic'
export var passive='passive'
export var summon='summon'
export var support='support'

export var aeris=new Character('Aeris',[magic,summon])
export var barret=new Character('Barret',[passive,summon])
export var cait=new Character('Cait Sith',[command,magic])
export var cid=new Character('Cid',[passive,command])
export var cloud=new Character('Cloud',[passive,magic])
export var red=new Character('Red XIII',[support,summon])
export var tifa=new Character('Tifa',[support,command])
export var vincent=new Character('Vincent',[support,magic])
export var yuffie=new Character('Yuffie',[command,summon])

export var party=rpg.shuffle([aeris,barret,cait,cid,cloud,red,tifa,vincent,yuffie])
