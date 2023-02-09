export class Character{
  constructor(name,materia){
    this.name=name
    this.materia=materia
    this.materia.sort()
  }
  
  use(m){return this.materia.indexOf(m)>=0}
  
  get shortname(){return this.name.substring(0,this.name.indexOf(','))}
}

export var command='command'
export var magic='magic'
export var passive='passive'
export var summon='summon'
export var support='support'

export var aeris=new Character('Aeris, white mage',[magic,summon])
export var barret=new Character('Barret, gunner',[command,passive])
export var cait=new Character('Cait, gambler',[passive])
export var cid=new Character('Cid, dragoon',[command,magic])
export var cloud=new Character('Cloud, mystic knight',[magic,passive])
export var red=new Character('Red, summoner',[summon,support])
export var tifa=new Character('Tifa, monk',[command,support])
export var vincent=new Character('Vincent, black mage',[magic,support])
export var yuffie=new Character('Yuffie, ninja',[summon,command])

export var party=[aeris,barret,cait,cid,cloud,red,tifa,vincent,yuffie]
