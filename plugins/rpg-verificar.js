import { createHash } from 'crypto'
let handler = async function (m, { text, usedPrefix }) {
let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length
let user = global.db.data.users[m.sender]
if (user.registered === true) throw `${iig}ππΌ ππππΌπ ππππππππΌπΏπ(πΌ)!!\nππ ππππππ πΌππππΌπ ππ ππππππππ πππ ππππ πΎπππΌππΏπ\n*${usedPrefix}unreg numero de serie*\n\nππ ππ πππΎππππΏπΌ ππ ππππππ πΏπ πππππ πππ ππππ πΎπππΌππΏπ\n*${usedPrefix}myns*`
let name = conn.getName(m.sender)
//let age = Math.floor(Math.random() * 40)
let age = `${pickRandom(['10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40'])}`
age = parseInt(age)
user.name = name.trim()
user.age = age
user.regTime = + new Date
user.registered = true
let sn = createHash('md5').update(m.sender).digest('hex')
global.db.data.users[m.sender].money += 200
global.db.data.users[m.sender].limit += 2
global.db.data.users[m.sender].exp += 350
let caption = `β­βββ[ *πππππππΎπΌπ | ππππππ* ]βββββ¬£
β *NOMBRE* 
β ${name}
ββββββββββββββββββ
β *EDAD* 
β *${age} aΓ±os*
ββββββββββββββββββ
β *BONO* 
β *$350 XP*
β *$200 COINS*
β *$2 DIAMANTES*
β°βββββββββββββββββββ¬£`
//let author = global.author
await conn.sendButton(m.chat, caption, `ππ ππππππ πΏπ πππππ ππ πππππππΌ ππ πΎπΌππ πππ ππππππΌ π½ππππΌπ ππ ππππππππ\nπππππππ\n${usedPrefix}unreg numero de serie\n${wm}`, [['πΌππ€π§π ππ¨π©π€π? πππ§πππππππ€(π)!! β', '/profile']], m)
await m.reply(`${sn}`) 

}
handler.help = ['verificar']
handler.tags = ['xp']
handler.command = /^(verify|register|verificar|registrar|verificado|verificada)$/i
export default handler

function pickRandom(list) {
return list[Math.floor(Math.random() * list.length)]}
