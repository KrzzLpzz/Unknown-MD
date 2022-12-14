import { canLevelUp, xpRange } from '../lib/levelling.js'
import { levelup } from '../lib/canvas.js'

let handler = async (m, { conn }) => {
let { role } = global.db.data.users[m.sender]
let name = conn.getName(m.sender)
let user = global.db.data.users[m.sender]
    if (!canLevelUp(user.level, user.exp, global.multiplier)) {
        let { min, xp, max } = xpRange(user.level, global.multiplier)
        throw `
β­βββ[ *πππππ | πππππ* ]βββββ¬£
β *NOMBRE | NAME*
β ${name}
ββββββββββββββββββ
β *NIVEL:* *${user.level}*
ββββββββββββββββββ
β *RANGO:* ${role}
ββββββββββββββββββ
β *XP:* *${user.exp - min}/${xp}*
β°βββγ *π  ${vs}* γββββββ¬£

*Te falta ${max - user.exp} de XP para subir de nivel*
`.trim()
    }
    let before = user.level * 1
    while (canLevelUp(user.level, user.exp, global.multiplier)) user.level++
    if (before !== user.level) {
        let teks = `Bien hecho! ${conn.getName(m.sender)} Nivel: ${user.level}`
        let str = `
β­βββ[ *πππππ | πππππ* ]βββββ¬£
β *NIVEL ANTERIOR:* *${before}*
ββββββββββββββββββ
β *NIVEL ACTUAL:* *${user.level}*
ββββββββββββββββββ
β *RANGO:* ${role}
ββββββββββββββββββ
β *FECHA:* *${new Date().toLocaleString('id-ID')}*
β°βββγ *π  ${vs}* γββββββ¬£

*_Cuanto mΓ‘s interactΓΊes con UnknownBot-MD, mayor serΓ‘ tu nivel!!_*
`.trim()
        try {
            const img = await levelup(teks, user.level)
            conn.sendFile(m.chat, img, 'levelup.jpg', str, m)
        } catch (e) {
            m.reply(str)
        }
    }
}

handler.help = ['levelup']
handler.tags = ['xp']

handler.command = ['nivel', 'lvl', 'levelup', 'level'] 

export default handler
