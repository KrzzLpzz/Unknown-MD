let handler = async (m, { conn, args, command }) => {
let totalf = Object.values(global.plugins).filter(
    (v) => v.help && v.tags
  ).length;
conn.reply(m.chat, `Aproximado de comandos: ${totalf}`,m)
}

handler.help = ['totalfitur']
handler.tags = ['info']
handler.command = ['totalcmd']

export default handler
//module.exports = handler