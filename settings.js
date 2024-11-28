const fs = require('fs');
const chalk = require('chalk');

global.owner = ['6282269162245']
global.ownerUtama = "6282269162245"
global.namaOwner = "MANZZY STORE"
global.packname = 'Bot WhatsApp'
global.botname = 'MANZZY V1.'
global.botname2 = 'MANZZY V1'
global.tempatDB = 'database.json'
global.pairing_code = true

global.linkOwner = "https://wa.me/6282269162245"
global.linkGrup = "https://www.youtube.com/@MANZZYSTORE"
global.linkGrup2 = "https://chat.whatsapp.com/JTE6C5AyONwJdhLFjFI75B"
global.linkSaluran = "https://whatsapp.com/channel/0029VadrvEw0wak1NcjEER3f"
global.idChannel = "120363315322575871@newsletter"
global.nameChannel = "MANZZY STORE"

global.delayJpm = 4000
global.delayPushkontak = 5000
// 1000 = 1 detik


global.imageSlide = "https://img99.pixhost.to/images/637/513288667_test.jpg"
global.imageMenu = "https://img99.pixhost.to/images/637/513288667_test.jpg"

global.dana = "082371747658"
global.ovo = "082371747658"
global.gopay = "082371747658"
global.qris = "https://img99.pixhost.to/images/637/513288667_test.jpg"


global.mess = {
	owner: "  \`</> [ Owner Only! ]\`\n- Fitur Ini Hanya Untuk Ownerbot!",
	admin: "  \`</> [ Admin Only! ]\`\n- Fitur Ini Hanya Untuk Admin!",
	botAdmin: "  \`</> [ Bot Admin! ]\`\n- Bot Bukan Admin!",
	group: "  \`</> [ Group Only! ]\`\n- Fitur Ini Hanya Untuk Dalam Grup!",
	private: "  \`</> [ Private Only! ]\`\n- Fitur Ini Hanya Untuk Private Chat!",
	prem: "  \`</> [ Premium Only! ]\`\n- Fitur Ini Hanya Untuk Pengguna Premium!",
	wait: 'Loading...',
	error: 'Error!',
	done: 'Done'
}
//~~~~~~~~~~~~~~~< PROCESS >~~~~~~~~~~~~~~~\\

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
});