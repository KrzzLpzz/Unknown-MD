let handler = async (m, { conn, args }) => {
let group = m.chat
const pp = await conn.profilePictureUrl(m.chat, 'image').catch(_ => null) || './src/grupos.jpg' 
//m.reply('https://chat.whatsapp.com/' + await conn.groupInviteCode(group))
  
conn.sendHydrated(m.chat, ('https://chat.whatsapp.com/' + await conn.groupInviteCode(group)), wm, pp, md, 'ððĢð ðĢðĪðŽðĢ ð―ðĪðĐ', null, null, [
['ððĪðĄðŦðð§ ððĄ ðððĢðŠĖ | ð―ððð  ðĐðĪ ðððĢðŠ âïļ', '/menu']], m)
}
handler.help = ['linkgroup']
handler.tags = ['group']
handler.command = /^enlace|link(gro?up)?$/i
handler.group = true
handler.admin = true
handler.botAdmin = true
export default handler
