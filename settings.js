const fs = require('fs')

// APIKEY OPEN AI
global.jeropenai  = "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" // ISI APIKEY LU

global.sewabot = ("51902679067") // ISI HARGA SEWA BOT LU

global.namabot = "🅢🅨🅢🅢🅞🅛🅤🅣🅘🅞🅝🅢" // UBAH JADI NAMA LU
global.namaowner = "🅢🅨🅢🅢🅞🅛🅤🅣🅘🅞🅝🅢" // NAMA OWNER
global.footer_text = "🅢🅨🅢🅢🅞🅛🅤🅣🅘🅞🅝🅢" + namabot // NAMA BOT
global.pp_bot = fs.readFileSync("./image/allmenubot.jpg") // FOTO BOT MAX 50KB BIAR GA DELAY
global.qris = fs.readFileSync("./image/qris.jpg") // FOTO QRIS MAX 50KB BIAR GA DELLAY
global.owner = ['51902679067'] // UBAH NOMOR YANG MAU DI JADIKAN OWNER
global.packname = '🅢🅨🅢🅢🅞🅛🅤🅣🅘🅞🅝🅢' //sticker wm ubah
global.author = '🅢🅨🅢🅢🅞🅛🅤🅣🅘🅞🅝🅢' //sticker wm ganti nama kalian
// = \\
global.sessionName = 'session' // GAK USAH UBAH
global.prefa = ['', '!', '.', '🐦', '🐤', '🗿'] // GAK USAH UBAH
global.script = ("https://www.youtube.com/@SysSolutionsperu") // BEBAS ASAL JAN HAPUS
global.fakelink = "https://whatsapp.com/channel/0029VaEsxUbJP21BfklgZS3m" // bebas asal jan hapus
global.grubbot = (`*INI KAK LINK GRUB NYA*\n\nhttps://whatsapp.com/channel/0029VaEsxUbJP21BfklgZS3m`) // GANTI LINK GRUB BOT LU \\
// - \\
// FALSE OR TRUE \\
global.autoTyping = false // BEBAS
global.welcome = true // KALO MAU AUTO WELCOME UBAH JADI true
global.left = true // KALO MAU AUTO LEFT UBAH JADI true
global.anticall = true // BEBAS

let file = require.resolve(__filename)
fs.watchFile(file, () => {
   fs.unwatchFile(file)
   console.log(chalk.redBright(`Update'${__filename}'`))
   delete require.cache[file]
   require(file)
})