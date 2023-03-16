import * as party from './party.js'
import * as materia from './materia.js'

class Quest{
  constructor(n,r,c=[]){
    this.name=n
    this.reward=r
    this.conditions=c
    this.party=false
  }
  
  embark(){
    if(this.conditions.length==0) return true
    let characters=this.conditions.filter(c=>c instanceof party.Character)
    for(let c of characters) if(this.party.indexOf(c)>=0) return true
    let materia=this.conditions.filter(c=>!(c instanceof party.Character))
    for(let m of materia) if(this.party.find(p=>p.use(m))) return true
    return false
  }
}

export var wutai=new Quest('Wutai','Yuffie and her break',[party.yuffie])
export var disc1=[
  new Quest('Mytrhil mine','Long-range materia',[party.passive]),
  wutai,
  new Quest('Gold saucer, Speed square','Gear for Aeris',[party.aeris]),
  new Quest('Gongaga','Gear for Cait Sith',[party.cait]),
  new Quest('Mythril','Gold armlet',[party.aeris]),
]
export var disc2=[
  wutai,
  new Quest('Return to Nibelheim',"Tifa's break",[party.tifa]),
  new Quest('Return to Midgar',"Tifa's weapon",[party.tifa]),
  new Quest('Return to Rocket Town',"Cid's weapon",[party.cid]),
  new Quest("Lucretia's crystal cave","Vincent's weapon and break",[party.vincent]),
  new Quest('Gelnika',"Cid's break and Yuffie's weapon",[party.cid,party.yuffie]),
  new Quest('Gold saucer, Speed square','Gear for Cid',[party.cid]),
  new Quest('Gold saucer, Wonder square','Gil+ and Exp+ materias',[materia.passive]),
  new Quest('Gold saucer, Battle square',"W-summon command and Cloud's break",[party.cloud,party.yuffie]),
  new Quest('Mount corel',"Barret's break",[party.barret]),
  new Quest('Defeat Lost Number',"Vincent and Red XIII's break",[party.red,party.vincent]),
  new Quest('Return to Shinra HQ',"Barret and Cait Sith's weapons",[party.barret,party.cait]),
  new Quest('Fort condor','Gear for Red XIII and Yuffie',[party.red,party.yuffie]),
]
export var disc3=[
  new Quest('Return to Cosmo Canyon',"Red XIII's weapon",[party.red]),
  new Quest('Ultimate weapon',"Cloud's weapon and access to Ancient forest",[party.cloud]),
  new Quest('Gold chocobo','Knights of the round and access to Ancient forest',[materia.summon]),
  new Quest('Kalm traveler','Endgame'),
  new Quest('Master Materia','Endgame')
]

export var discs=[disc1,disc2,disc3]

export function assign(party,quests){
  party=party.slice(0,2)
  for(let q of quests) q.party=party
  return quests.filter(q=>q.embark(party))
}
