import * as materia from './materia.js'

export class Character{
  constructor(name,materia){
    this.name=name
    this.materia=materia
    this.materia.sort()
  }
  
  use(m){return this.materia.indexOf(m)>=0}
  
  get shortname(){return this.name.substring(0,this.name.indexOf(','))}
}

export var aeris=new Character('Aeris, white mage',[materia.magic,materia.summon])
export var barret=new Character('Barret, gunner',[materia.command,materia.passive])
export var cait=new Character('Cait, gambler',[materia.passive])
export var cid=new Character('Cid, dragoon',[materia.command,materia.magic])
export var cloud=new Character('Cloud, mystic knight',[materia.magic,materia.passive])
export var red=new Character('Red, summoner',[materia.summon,materia.support])
export var tifa=new Character('Tifa, monk',[materia.command,materia.support])
export var vincent=new Character('Vincent, black mage',[materia.magic,materia.support])
export var yuffie=new Character('Yuffie, ninja',[materia.summon,materia.command])

export var party=[aeris,barret,cait,cid,cloud,red,tifa,vincent,yuffie]
