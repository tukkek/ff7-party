import * as party from './party.js'
import * as quest from './quest.js'
import * as rpg from './rpg.js'
import * as permalink from './permalink.js'

const PARTY=document.querySelector('#party')
const QUESTS=document.querySelector('#quests')

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

function adventure(){
  let t=document.querySelector('template#quest').content.children[0]
  for(let q of document.querySelectorAll('#quests > .quest'))
    q.remove()
  let p=Array.from(PARTY.querySelectorAll('.member')).map(p=>p.member)
  for(let q of quest.assign(p)){
    let li=t.cloneNode(true)
    li.querySelector('.name').textContent=q.name
    li.querySelector('.reward').textContent=q.reward
    QUESTS.appendChild(li)
  }
  document.querySelector('button').onclick=toggle
}

function update(){
  call()
  adventure()
}

function toggle(){
  let q=document.querySelector('#quests')
  let h=q.classList.toggle('hidden')
  document.querySelector('button').textContent=h?'Show':'Hide'
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
  update()
}
