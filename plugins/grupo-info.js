let handler = async (m, { conn, participants, groupMetadata }) => {
const pp = await conn.profilePictureUrl(m.chat, 'image').catch(_ => null) || './src/grupos.jpg' 
const { isBanned, welcome, detect, sWelcome, sBye, sPromote, sDemote, antiLink, antiLink2, modohorny, autosticker, audios, delete: del } = global.db.data.chats[m.chat]
const groupAdmins = participants.filter(p => p.admin) 
const listAdmin = groupAdmins.map((v, i) => `${i + 1}. @${v.id.split('@')[0]}`).join('\n')
const owner = groupMetadata.owner || groupAdmins.find(p => p.admin === 'superadmin')?.id || m.chat.split`-`[0] + '@s.whatsapp.net'
let text = 
`β­βββ[ *ππππ πΏππ πππππ* ]βββββ¬£

β¨ ππΏπππππππΎπΌπΎπππ πΏππ πππππ
${groupMetadata.id}

β¨ ππππ½ππ πΏππ πππππ
${groupMetadata.subject}

β¨ πΏπππΎππππΎπππ
${groupMetadata.desc?.toString() || 'ππ ππΌπ πΏπππΎππππΎπππ'}

β¨ ππππππ πΏπ ππππΌππππ
${participants.length} Participantes

β¨ πΎπππΌπΏππ(πΌ) πΏππ πππππ
@${owner.split('@')[0]}

β¨ πΌπΏππππ πΏππ πππππ
${listAdmin}

β¨ πΎππππππππΌπΎπππ ππ/πππ
ππππΎπππ ${welcome ? 'β' : 'β'}
πΏππππΎπ ${detect ? 'β' : 'β'} 
πΌπππππππ ${antiLink ? 'β' : 'β'} 
πΌπππππππ *2* ${antiLink2 ? 'β' : 'β'} 
πππΏπ πππππ ${modohorny ? 'β' : 'β'} 
πΌπππππππΎπππ ${autosticker ? 'β' : 'β'} 
πΌππΏπππ ${audios ? 'β' : 'β'} 

β°βββββββ° *π  ${vs}* β±ββββββ¬£
`.trim()
//conn.sendFile(m.chat, pp, 'error.jpg', text, m, false, { mentions: [...groupAdmins.map(v => v.id), owner] })
conn.sendHydrated(m.chat, text, wm, pp, md, 'ππ£π π£π€π¬π£ π½π€π©', null, null, [
['ππ€π‘π«ππ§ ππ‘ πππ£πͺΜ | π½πππ  π©π€ πππ£πͺ βοΈ', '/menu']
], m, false, { mentions: [...groupAdmins.map(v => v.id), owner] })
}
handler.help = ['infogrup']
handler.tags = ['group']
handler.command = /^(infogrupo|gro?upinfo|info(gro?up|gc))$/i
handler.group = true
export default handler
