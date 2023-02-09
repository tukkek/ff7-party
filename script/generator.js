import * as party from './party.js'
import * as quest from './quest.js'
import * as rpg from './rpg.js'
import * as permalink from './permalink.js'

const PARTY=document.querySelector('#party')
const QUESTS=document.querySelector('template#quests').content.children[0]
const QUEST=QUESTS.querySelector('template#quest').content.children[0]
  
function call(){
  let t=document.querySelector('template#member').content.children[0]
  for(let r of PARTY.querySelectorAll('li')) r.remove()
  let unlocked=Array.from(document.querySelectorAll('#available label'))
  unlocked=unlocked.filter(l=>l.querySelector('input').checked).map(l=>l.textContent)
  for(let p of party.party){
    if(!unlocked.find(u=>p.name.indexOf(u)>=0)) continue
    let m=t.cloneNode(true)
    m.querySelector('.name').textContent=p.name
    m.member=p
    let j=m.querySelector('.job')
    for(let i=0;i<p.materia.length;i++){
      let m=document.createElement('span')
      m.classList.add('materia')
      m.textContent=' '+p.materia[i]
      m.classList.add(p.materia[i])
      j.appendChild(m)
    }
    PARTY.appendChild(m)
  }
}

function adventure(element,disc){
  for(let q of element.querySelectorAll('.quest')) q.remove()
  let p=Array.from(PARTY.querySelectorAll('.member')).map(p=>p.member)
  for(let q of quest.assign(p,disc)){
    let li=QUEST.cloneNode(true)
    li.querySelector('.name').textContent=q.name
    li.querySelector('.reward').textContent=q.reward
    element.appendChild(li)
  }
}

function update(){
  call()
  let quests=document.querySelectorAll('.quests')
  for(let i=0;i<quests.length;i++) adventure(quests[i],quest.discs[i])
}

function toggle(quests,event){
  let h=quests.classList.toggle('hidden')
  event.target.textContent=h?'Show':'Hide'
}

export function setup(){
  permalink.setup()
  rpg.setup()
  let t=document.querySelector('template#character').content.children[0]
  let result=document.querySelector('#available')
  for(let p of party.party){
    let label=t.cloneNode(true)
    label.querySelector('.name').insertAdjacentText('beforeend',p.shortname)
    label.querySelector('input').onchange=update
    result.appendChild(label)
  }
  rpg.shuffle(party.party)
  for(let i=0;i<3;i++){
    let quests=QUESTS.cloneNode(true)
    quests.querySelector('h3 span').textContent=`Disc ${i+1} quests`
    quests.querySelector('.toggle').onclick=e=>toggle(quests.querySelector('ul'),e)
    document.body.appendChild(quests)
  }
  update()
}
