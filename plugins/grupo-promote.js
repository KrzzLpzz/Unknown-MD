let handler = async (m, { conn,usedPrefix, text }) => {
if(isNaN(text) && !text.match(/@/g)){
	
}else if(isNaN(text)) {
var number = text.split`@`[1]
}else if(!isNaN(text)) {
var number = text
}
	
if(!text && !m.quoted) return conn.reply(m.chat, `${mg}πΏππ½π πΏπ πππΌπ πΏπ ππΌ πππππππππ ππΌππππΌ:\nπππππππ\n*${usedPrefix}darpoder @tag*\n*${usedPrefix}daradmin responder a un mensaje*\n\nπππ ππππ πππ πΌπ πππππππ:\nπππΌππππ\n*${usedPrefix}promote @tag*\n*${usedPrefix}promote reply to a message*`, m)
if(number.length > 13 || (number.length < 11 && number.length > 0)) return conn.reply(m.chat, `${fg}ππ ππππππ ππ πππΎπππππΎππ, πππππππ πΏπ πππππ\n\nπππ ππππ½ππ ππ πππππ, πππ πΌππΌππ`, m)
	
try {
if(text) {
var user = number + '@s.whatsapp.net'
} else if(m.quoted.sender) {
var user = m.quoted.sender
} else if(m.mentionedJid) {
var user = number + '@s.whatsapp.net'
} 
} catch (e) {
} finally {
conn.groupParticipantsUpdate(m.chat, [user], 'promote')
//conn.reply(m.chat, `${eg}πΌππππΌ πππππ ππ πππΏππ πΏππ πΌπΏπππ πΌ\n\nππππ ππ πππ πΌπΏπππ π€ `, m)
	
conn.sendHydrated(m.chat, `${eg}πΌππππΌ πππππ ππ πππΏππ πΏππ πΌπΏπππ πΌ\n\nππππ ππ πππ πΌπΏπππ π€ `, wm, null, md, 'ππ£π π£π€π¬π£ π½π€π©', null, null, [
['ππ€π‘π«ππ§ ππ‘ πππ£πͺΜ | π½πππ  π©π€ πππ£πͺ βοΈ', '/menu'] 
], m)
}}
handler.help = ['*593xxx*','*@usuario*','*responder chat*'].map(v => 'promote ' + v)
handler.tags = ['group']
handler.command = /^(promote|daradmin|darpoder)$/i
handler.group = true
handler.admin = true
handler.botAdmin = true
handler.fail = null
export default handler
