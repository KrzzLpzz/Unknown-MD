import fs from 'fs'
import { instagramdl, instagramdlv2, instagramdlv3, instagramdlv4 } from '@bochilteam/scraper'
let handler = async (m, { conn, args, usedPrefix, command }) => {
if (!args[0]) throw `${mg}πππππππ ππ ππππΌπΎπ πΏπ πππππΌπππΌπ ππΌππΌ πΏπππΎπΌπππΌπ ππ πππΏππ π πππΌπππ\nπππππππ\n*${usedPrefix + command} https://www.instagram.com/p/CZNLhdIrMQI/*\n\nπππππ πΌ πππππΌπππΌπ ππππ ππ πΏππππππΌπΏ ππππ πππΏππ ππ πππΌππ\nπππΌππππ\n*${usedPrefix + command} https://www.instagram.com/p/CZNLhdIrMQI/*`
const results = await instagramdl(args[0])
.catch(async _ => await instagramdlv2(args[0]))
.catch(async _ => await instagramdlv3(args[0]))
.catch(async _ => await instagramdlv4(args[0]))
for (const { url } of results) await conn.sendFile(m.chat, url, 'instagram.mp4', `β¨ *ENLACE | URL:* ${url}`, m)
  
 let info = `π *InfΓ³rmate sobre las Novedades y recuerda tener la ΓΊltima versiΓ³n.*\n\nπ *Find out about what's new and remember to have the latest version.*
  `.trim()
  
await conn.sendHydrated(m.chat, info, wm, null, ig, 'ππ£π¨π©πππ§ππ’', null, null, [
['πππ£πͺ πΏππ¨πππ§πππ¨ π', '#descargasmenu'],
['πππ£πͺ πΎπ€π’π₯π‘ππ©π€ | ππͺπ‘π‘ πππ£πͺ β¨', '.allmenu'],
['ππ€π‘π«ππ§ ππ‘ πππ£πͺΜ | π½πππ  π©π€ πππ£πͺ βοΈ', '/menu']
], m,)
  
} 
handler.help = ['ig'].map(v => v + ' <url>')
handler.tags = ['downloader']
handler.command =/^(instagram|ig(dl)?)$/i
handler.limit = 2
handler.exp = 70
export default handler
