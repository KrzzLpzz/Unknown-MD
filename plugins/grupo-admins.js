let handler = async (m, { conn, participants, groupMetadata, args, usedPrefix, command }) => {
const pp = await conn.profilePictureUrl(m.chat, 'image').catch(_ => null) || './src/admins.jpg'
const groupAdmins = participants.filter(p => p.admin)
const listAdmin = groupAdmins.map((v, i) => `${i + 1}. @${v.id.split('@')[0]}`).join('\n')
const owner = groupMetadata.owner || groupAdmins.find(p => p.admin === 'superadmin')?.id || m.chat.split`-`[0] + '@s.whatsapp.net'
let pesan = args.join` `
let oi = `*πππππΌππ:* ${pesan}`
let text = 
`β­ββ[ *πππππΎπΌππΏπ πΌπΏππππ* ]ββββ¬£ 
${oi}

*πΌπΏππππ:*
${listAdmin}

πππΌπ ππ πΎπΌππ πΏπ ππππππππΎππΌ
β°ββββββ[ *π  ${vs}* ]ββββββ¬£`.trim()

conn.sendHydrated(m.chat, text, `πΌππ’ππ£π¨ | ${wm}`, pp, 'https://github.com/KrzzLpzz/UnknownMD', 'ππ£π π£π€π¬π£ π½π€π©', null, null, [
['ππ€π‘π«ππ§ ππ‘ πππ£πͺΜ | π½πππ  π©π€ πππ£πͺ β', '.menu']
], m, false, { mentions: [...groupAdmins.map(v => v.id), owner] })

//conn.sendFile(m.chat, pp, 'error.jpg', text, m, false, { mentions: [...groupAdmins.map(v => v.id), owner] })
}
handler.help = ['admins <texto>']
handler.tags = ['group'] 
handler.command = /^(admins|@admins|dmins)$/i
handler.group = true
export default handler
