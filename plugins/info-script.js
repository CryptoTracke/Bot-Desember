let handler = async (m, { conn, usedPrefix: _p, __dirname, args }) => {
let imgr = flaaa.getRandom()
let text = `*SYARAT & KETENTUAN*
    

☣️ S&K
1. KALO MINAT HUBUNGI OWNER!!!
2. JUAL BELI PANEL 
3. SEWA BOT/SCRIPT
• Jika ada eror di sc hub https://wa.me/6285975390195
• Owner RobotKuPintar https://wa.me/6287738444826

--------Thanks to ✨---------
Copyright & Copy By : RISMELL
Copyright & Copy By : RobotKuPintar`
const templateButtons = [
    {index: 1, urlButton: {displayText: 'Script di sini', url: 'https://wa.me/6285975390195'}},
]
let tm = {
text: text,
footer: global.bottime,
templateButtons: templateButtons,
image: `${imgr + 'Script'}`,
}
conn.sendMessage(m.chat, tm, m)
}
handler.help = ['sc'] 
 handler.tags = ['info'] 
 handler.command = /^(s(ourcode|c))$/i 
  
 export default handler
