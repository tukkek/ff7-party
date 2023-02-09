const GENERATE=document.querySelector('#generate')
const PERMALINK=document.querySelector('#permalink')

export var seed=new URL(document.location.href).searchParams.get('seed')||Date.now().toString()

export function setup(){
  let u=new URL(document.location.href)
  u.searchParams.delete('seed')
  GENERATE.href=u
  u.searchParams.set('seed',seed)
  PERMALINK.href=u
}
