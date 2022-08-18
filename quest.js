import * as party from './party.js'

class Quest{
  constructor(name,reward){
    this.name=name
    this.reward=reward
  }
  
  embark(party){throw 'unimplemented'}
  
  call(unit,partyp){return partyp.indexOf(unit)>=0}
  
  use(materia,partyp){return partyp.find(p=>p.use(materia))}
}

class Wutai extends Quest{
  constructor(){
    super('Wutai','Yuffie and her break')
  }
  
  embark(partyp){return this.call(party.yuffie,partyp)}
}

class Nibelheim extends Quest{
  constructor(){
    super('Return to Nibelheim',"Tifa's break")
  }
  
  embark(partyp){return this.call(party.tifa,partyp)}
}

class Midgar extends Quest{
  constructor(){
    super('Return to Midgar',"Tifa's weapon")
  }
  
  embark(partyp){return this.call(party.tifa,partyp)}
}

class CosmoCanyon extends Quest{
  constructor(){
    super('Return to Cosmo Canyon',"Red XIII's weapon")
  }
  
  embark(partyp){return this.call(party.red,partyp)}
}

class RocketTown extends Quest{
  constructor(){
    super('Return to Rocket Town',"Cid's weapon")
  }
  
  embark(partyp){return this.call(party.cid,partyp)}
}

class CrystalCave extends Quest{
  constructor(){
    super("Lucretia's crystal cave","Vincent's weapon and break")
  }
  
  embark(partyp){return this.call(party.vincent,partyp)}
}

class Geinika extends Quest{
  constructor(){
    super('Geinika',"Cid's break and Yuffie's weapon")
  }
  
  embark(partyp){
    return [party.cid,party.yuffie].find(p=>this.call(p,partyp))
  }
}

class UltimateWeapon extends Quest{
  constructor(){
    super('Ultimate weapon',"Cloud's weapon and access to Ancient forest")
  }
  
  embark(partyp){return this.call(party.cloud,partyp)}
}

class GoldChocobo extends Quest{
  constructor(){
    super('Gold chocobo','Knights of the round and access to Ancient forest')
  }
  
  embark(partyp){return this.use(party.summon,partyp)}
}

class WonderSquare extends Quest{
  constructor(){
    super('Gold saucer, Wonder square','Gil+ and Exp+ materias')
  }
  
  embark(partyp){return this.use(party.passive,partyp)}
}

class BattleSquare extends Quest{
  constructor(){
    super('Gold saucer, Battle square',"W-summon and Cloud's break")
  }
  
  embark(partyp){
    if(this.call(party.cloud,partyp)) return true
    return partyp.find(p=>p.use(party.summon)&&p.use(party.command))
  }
}

class SpeedSquare extends Quest{
  constructor(){
    super('Gold saucer, Speed square','Gear for Aeris (disc 1) and Cid (disc 2)')
  }
  
  embark(partyp){return [party.aeris,party.cid].find(p=>this.call(p,partyp))}
}

class MountCorel extends Quest{
  constructor(){
    super('Mount corel',"Barret's break")
  }
  
  embark(partyp){return this.call(party.barret,partyp)}
}

class LostNumbeer extends Quest{
  constructor(){
    super('Defeate Lost number',"Vincent and Red XIII's break")
  }
  
  embark(partyp){return this.call(party.red,partyp)||this.call(party.vincent,partyp)}
}

class ShinraHq extends Quest{
  constructor(){
    super('Return to Shinra HQ',"Barret and Cait Sith's weapons")
  }
  
  embark(partyp){return this.call(party.barret,partyp)||this.call(party.cait,partyp)}
}

class Condor extends Quest{
  constructor(){
    super('Fort condor','Gear for Red XIII and Yuffie')
  }
  
  embark(partyp){return this.call(party.red,partyp)||this.call(party.yuffie,partyp)}
}

class Gongaga extends Quest{
  constructor(){
    super('Gongaga','Gear for Cait Sith')
  }
  
  embark(partyp){return this.call(party.cait,partyp)}
}

class Mythril extends Quest{
  constructor(){
    super('Mythril','Gold armlet')
  }
  
  embark(partyp){return this.call(party.aeris,partyp)}//F
}

class KalmTraveler extends Quest{
  constructor(){
    super('Kalm traveler','Endgame')
  }
  
  embark(){return true}
}

class MasterMateria extends Quest{
  constructor(){
    super('Master Materia','Endgame')
  }
  
  embark(){return true}
}

//TODO sort by when to do each (best way might be a full playthrough)?
var quests=[new Wutai(),new Nibelheim(),new Midgar(),new CosmoCanyon(),new RocketTown(),
            new CrystalCave(),new Geinika(),new UltimateWeapon(),new GoldChocobo(),
            new WonderSquare(),new BattleSquare(),new SpeedSquare(),
            new MountCorel(),new LostNumbeer(),new ShinraHq(),new Condor(),new Gongaga(),
            new Mythril(),
            new KalmTraveler(),new MasterMateria(),]

export function assign(party){
  party=party.slice(0,2)
  return quests.filter(q=>q.embark(party))
}
