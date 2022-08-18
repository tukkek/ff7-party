import * as rpg from './rpg.js'

const COMMAND='command'
const MAGIC='magic'
const PASSIVE='passive'
const SUMMON='summon'
const SUPPORT='support'

class Character{
  constructor(name,materia){
    this.name=name
    this.materia=materia
    this.materia.sort()
  }
}

export var party=rpg.shuffle([
  new Character('Aeris',[MAGIC,SUMMON]),
  new Character('Barret',[PASSIVE,SUMMON]),
  new Character('Cait Sith',[COMMAND,MAGIC]),
  new Character('Cid',[PASSIVE,COMMAND]),
  new Character('Cloud',[PASSIVE,MAGIC]),
  new Character('Red XIII',[SUPPORT,SUMMON]),
  new Character('Tifa',[SUPPORT,COMMAND]),
  new Character('Vincent',[SUPPORT,MAGIC]),
  new Character('Yuffie',[COMMAND,SUMMON])
])
