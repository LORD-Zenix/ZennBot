/*

	あ GK KASI CREDIT YT ZEEONE OFC, GK USAH RE UPLOAD
	あ SUSAH" NGE FIX, LU CUMA NUMPANG NAMA DOANG
	
	あ JASA RUN HEROKU BISA PC wa.me/62887435047326 BIAR BOT NYA GAK TERLALU DELAY
	
*/   
require('./settings')
const
	{
		WAConnection: _WAConnection,
		MessageType,
		Presence,
		MessageOptions,
		Mimetype,
		WALocationMessage,
		WA_MESSAGE_STUB_TYPES,
		WA_DEFAULT_EPHEMERAL,
		WAMessageProto,
		ReconnectMode,
		ChatModification,
		ProxyAgent,
		GroupSettingChange,
		waChatKey,
		relayWAMessage,
		mentionedJid,
		processTime
	} = require("@adiwajshing/baileys")
const qrcode = require("qrcode-terminal")
const moment = require("moment-timezone")
const speed = require('performance-now')
const crypto = require('crypto')
const request = require('request');
const { spawn, exec, execSync } = require("child_process")
const fs = require("fs")
const os = require('os')
const axios = require('axios').default
const cheerio = require("cheerio")
const Util = require('util')
const hx = require('hxz-api')
const ffmpeg = require('fluent-ffmpeg')
const { EmojiAPI } = require("emoji-api");
const ig = require('insta-fetcher')
const emoji = new EmojiAPI()
const fetch = require('node-fetch');
const simple = require('./lib/simple.js')
const phoneNum = require('awesome-phonenumber')
const gis = require('g-i-s');
const got = require("got");
const { Primbon } = require('scrape-primbon')
const primbon = new Primbon()
const imageToBase64 = require('image-to-base64');
const ID3Writer = require('browser-id3-writer');		
const brainly = require('brainly-scraper')
const yts = require( 'yt-search')
const ms = require('parse-ms')
const toMs = require('ms')
const zee = require('xfarr-api')
const util = require('util')
const webp = require('node-webpmux')
const { error } = require("qrcode-terminal")
const ytdl = require('ytdl-core');

const { getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, banner, start, info, success, close } = require('./lib/functions')
const { color, bgcolor } = require('./lib/color')
const {animek, fetchJson, getBase64, kyun, createExif } = require('./lib/fetcher')
const { yta, ytv, igdl, upload } = require('./lib/ytdl')
const { yta2, ytv2, ytv3, ytv4} = require('./lib/y2mate')
const { parseMention } = require('./lib/simple')
const _sewa = require("./lib/sewa");
const { webp2mp4File} = require('./lib/webp2mp4')
const { mediafireDl} = require('./lib/mediafire.js')
const { msgFilter } = require('./lib/antispam')
const { virtex, vipi } = require('./lib/virtex.js')
const setTtt = require('./lib/tictactoe.js')
const off = require('./lib/afk.js')
let _off = JSON.parse(fs.readFileSync('./src/afk.json'))
const time = moment().tz('Asia/Jakarta').format("HH:mm:ss")
const ameClient = require("amethyste-api")
const ameApi = new ameClient("1f486b04b157f12adf0b1fe0bd83c92a28ce768683871d2a390e25614150d0c8fa404fd01b82a5ebf5b82cbfa22e365e611c8501225a93d5d1e87f9f420eb91b")
const { sleep, isAfk, cekafk, addafk } = require('./lib/offline')
const { addVote, delVote } = require('./lib/vote')
const { jadibot, stopjadibot, listjadibot } = require('./lib/jadibot')
const premium = require("./lib/premiun");
const { bytesToSize, TelegraPh, telesticker, uploadImages } = require('./lib/uploadimage')
const { isLimit, limitAdd, getLimit, giveLimit, addBalance, kurangBalance, getBalance, isGame, gameAdd, givegame, cekGLimit } = require("./lib/about_user")
const { list_nui } = require('./shop/nui')
const { list_enjoyers } = require('./shop/enjoyers')
const { list_kurohacks } = require('./shop/kurohacks')
const { list_coppelia } = require('./shop/coppelia')
const { list_valo } = require('./shop/valo')
const { list_price } = require('./shop/price')
const { allpayment } = require('./shop/allpayment')
const { pc_sewa } = require('./shop/sewa')
const { gcbotwa } = require('./shop/grupbot')
const { donasibot } = require('./shop/donasi')
const { infobot } = require('./shop/infobot')
const { jadibut } = require('./shop/jadibot')

const balance = JSON.parse(fs.readFileSync('./database/balance.json'));
const glimit = JSON.parse(fs.readFileSync('./database/glimit.json'))
const limit = JSON.parse(fs.readFileSync('./database/limit.json'))
const register = JSON.parse(fs.readFileSync('./database/user/register.json'))
const  _premium = JSON.parse(fs.readFileSync('./src/premiun.json'));
const afk = JSON.parse(fs.readFileSync('./lib/off.json'))
const antilink = JSON.parse(fs.readFileSync('./src/antilink.json'))
const antivirtex = JSON.parse(fs.readFileSync("./src/antivirtex.json"))
const welkom = JSON.parse(fs.readFileSync('./src/welkom.json'))
let filter = JSON.parse(fs.readFileSync('./src/filter.json'))
const setiker = JSON.parse(fs.readFileSync('./temp/stik.json'))
const audionye = JSON.parse(fs.readFileSync('./temp/vn.json'))
const imagenye = JSON.parse(fs.readFileSync('./temp/image.json'))
const videonye = JSON.parse(fs.readFileSync('./temp/video.json'))
const sfilter = JSON.parse(fs.readFileSync('./src/sfilter.json'))
const gcdetect = JSON.parse(fs.readFileSync('./src/gcdetect.json'))
const absen = JSON.parse(fs.readFileSync('./src/absen.json'))
const tictactoe = JSON.parse(fs.readFileSync("./src/tictactoe.json"))
const _win = JSON.parse(fs.readFileSync('./src/tttwin.json'))
const _lose = JSON.parse(fs.readFileSync('./src/tttlose.json'))
const voting = JSON.parse(fs.readFileSync('./lib/voting.json'))
const scommand = JSON.parse(fs.readFileSync('./lib/scommand.json'))
const banned = JSON.parse(fs.readFileSync('./src/banned.json'))
const _nsfw = JSON.parse(fs.readFileSync('./src/nsfw.json'))
const _leveling = JSON.parse(fs.readFileSync('./src/leveling.json'))
const _level = JSON.parse(fs.readFileSync('./src/level.json'))
const tebakgambar = JSON.parse(fs.readFileSync('./src/tebakgambar.json'))
const caklontong = JSON.parse(fs.readFileSync('./src/caklontong.json'))
const family = JSON.parse(fs.readFileSync('./src/family100.json'))
const siapakahaku = JSON.parse(fs.readFileSync('./src/siapakahaku.json'))
const tebakanime = JSON.parse(fs.readFileSync('./src/tebakanime.json'))
const tebakkalimat = JSON.parse(fs.readFileSync('./src/tebakkalimat.json'))
const tebakkata = JSON.parse(fs.readFileSync('./src/tebakkata.json'))
const tebaklirik = JSON.parse(fs.readFileSync('./src/tebaklirik.json'))
const tekateki = JSON.parse(fs.readFileSync('./src/tekateki.json'))
const susunkata = JSON.parse(fs.readFileSync('./src/susunkata.json'))

const  sewa = JSON.parse(fs.readFileSync('./src/sewa.json'));
const event = JSON.parse(fs.readFileSync('./src/event.json'))


//var creatorList = ['Creator WhatsApp Bot', 'Whatsapp Bot Indonesia', 'Creator Bot' , ' Bot WhatsApp']
var creator = ownername
const  { ind, eng, es, ml, ru, pt } = require(`./language`)
lang = ind //language
const Exif = require('./lib/exif')
const exif = new Exif()

zeksApikey = 'Alphabott' //ganti pake apikey lu biar limitnya gk cepet abis 
ApiZeks = 'https://api.zeks.me' // regis disini klo mau dapat apikeynya
thumbnail = thumb
pp_bot = fs.readFileSync(`image/${thumbnail}`)
pp_bot2 = fs.readFileSync(`image/${thumbnail}`)
hit_today = []
blocked = []
ban = []
limitawal = "50"
gcounttprem = "50" 
gcounttuser = "25" 

let multi = true
let nopref = false
let single = false
let prefa = prefix
let menusimple = false
let Mloc = false

banChats = self_mode
autorespon = true
offline = false
readGc = true 
readPc = false 
antitrol = false 
bugc = false
autovn = true
autoketik = false
autoregister = user_register
typemenu = typeMenu
baper = ownername
apiku = 'https://api.zeeoneofc.xyz/'
gc_wa_lu = 'https://chat.whatsapp.com/LEPW0AhevZr923xsFqYIA3' //klo gk punya gc wa gk usah di ganti 👍
targetpc = ownerNumberr
owner = targetpc
numbernye = '0'
waktu = 'Nothing'
alasan = 'Nothing'
botname = botname
ownername = ownername
peknem = ownername
ownerNumber = ownerNumberr
cr = ownername
petik = '```'
titik =`...`
enter ='\n'
msgId="B826873620DD5947E683E3ABE663F263"
tttawal= ["0️⃣","1️⃣","2️⃣","3️⃣","4️⃣","5️⃣","6️⃣","7️⃣","8️⃣","9️⃣"]
const X = "❌" 
const O = "⭕️" 
const tunjuk = "👈" 
winawal = 1 
loseawal = 1 
memberwin = 1 
memberlose = 1 

//Credit For 404 SQUAD ( Gk usah di hapus mek)
//Lingz
//Felix
//Lenz
//Arya
const uang = JSON.parse(fs.readFileSync('./database/user/uang.json'))
const ikan = JSON.parse(fs.readFileSync('./database/user/ikan.json'))
const planet = JSON.parse(fs.readFileSync('./database/user/planet.json'))
const coal = JSON.parse(fs.readFileSync('./database/user/coal.json'))
const stone = JSON.parse(fs.readFileSync('./database/user/stone.json'))
const ore = JSON.parse(fs.readFileSync('./database/user/ore.json'))
const ingot = JSON.parse(fs.readFileSync('./database/user/ingot.json'))
const kayu = JSON.parse(fs.readFileSync('./database/user/kayu.json'))

//=================================================//
module.exports = alpha = async (alpha, mek) => {
	try {
        if (!mek.hasNewMessage) return
        mek = mek.messages.all()[0]
        if (!mek.message) return
		if (mek.key && mek.key.remoteJid == 'status@broadcast') return
		blocked
		m = simple.smsg(alpha, mek)
		let { isQuotedDocument} = m
		bail = m.isBaileys
        mek.message = (Object.keys(mek.message)[0] === 'ephemeralMessage') ? mek.message.ephemeralMessage.message : mek.message
        const content = JSON.stringify(mek.message)
		const from = mek.key.remoteJid
		const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType
		const time = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
        const type = Object.keys(mek.message)[0]
        const addCmd = (id, command) => {
			const obj = { id: id, chats: command }
			scommand.push(obj)
			fs.writeFileSync('./lib/scommand.json', JSON.stringify(scommand))
			}
			const getCommandPosition = (id) => {
				let position = null
				Object.keys(scommand).forEach((i) => {
					if (scommand[i].id === id) {
						position = i
						}
						})
						if (position !== null) {
							return position
							}
					}

const getCmd = (id) => {
    let position = null
    Object.keys(scommand).forEach((i) => {
        if (scommand[i].id === id) {
            position = i
        }
    })
    if (position !== null) {
        return scommand[position].chats
    }
}


const checkSCommand = (id) => {
    let status = false
    Object.keys(scommand).forEach((i) => {
        if (scommand[i].id === id) {
            status = true
        }
    })
    return status
}
        const cmd = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : (type == 'stickerMessage') && (getCmd(mek.message.stickerMessage.fileSha256.toString('hex')) !== null && getCmd(mek.message.stickerMessage.fileSha256.toString('base64')) !== undefined) ? getCmd(mek.message.stickerMessage.fileSha256.toString('base64')) : "".slice(1).trim().split(/ +/).shift().toLowerCase()
        if(multi){
		var prefix = /^[°•π÷×¶∆£¢€¥®™✓=|~zZ+×_!#%^&./\\©^]/.test(cmd) ? cmd.match(/^[°•π÷×¶∆£¢€¥®™✓=|~xzZ+×_!#,|`÷?;:%^&./\\©^]/gi) : '-'	  
		} else {
		if (nopref){
		prefix = ' '
		} else {
		if(single){
		prefix = prefa
		}
		}
		}
		
const reply2 = (teks) => {
            alpha.sendMessage(from, teks, text, {quoted: mek, contextInfo: {"forwardingScore":999,"isForwarded":true},sendEphemeral: true})
        }
// Auto Read Group 
var chats = await alpha.chats.array.filter(v => v.jid.endsWith('g.us'))
chats.map( async ({ jid }) => {
if (readGc === false) return
await alpha.chatRead(jid)
})
// Auto Read Private 
var chatss = await alpha.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
chatss.map( async ({ jid }) => {
if (readPc === false) return
await alpha.chatRead(jid)
})
if ((Object.keys(mek.message)[0] === 'ephemeralMessage' && JSON.stringify(mek.message).includes('EPHEMERAL_SETTING')) && mek.message.ephemeralMessage.message.protocolMessage.type === 3) {
if (bugc === false) return
if (mek.key.fromMe) return
nums = mek.participant
longkapnye = "\n".repeat(420)
tekuss = `${longkapnye}\`\`\`B U G  G C  T E R D E T E K S I\`\`\`\n@⁨${nums.split('@')[0]} akan dikick\n\n_Clear chat by bot_\n*Jangan maen bug lah*`
alpha.groupRemove(mek.key.remoteJid, [nums]).catch((e) => { reply2(`Gua mau kick tapi gua bukan admin 🤙`) })
alpha.sendMessage(mek.key.remoteJid, 'WAH BUG NIH', MessageType.text)
alpha.sendMessage(mek.key.remoteJid, tekuss, MessageType.text, {contextInfo:{mentionedJid:[nums + "@s.whatsapp.net"]}})
}

if (m.message && m.isBaileys && m.quoted && m.quoted.mtype === 'orderMessage' && !(m.quoted.token && m.quoted.orderId)) {
if (antitrol === false) return
if (mek.key.fromMe) return
reply2('Fake Troli Detected \n\n' + require('util').format(m.key))
await alpha.modifyChat(m.chat, 'delete', {
includeStarred: false
})
}

if (autovn) {
	if (autovn === false) return
await alpha.updatePresence(from, Presence.recording)
} else if (autoketik) {
	if (autoketik === false) return
await alpha.updatePresence(from, Presence.composing)
}
        body = type === "conversation" && mek.message.conversation.startsWith(prefix) ? mek.message.conversation : type == "imageMessage" && mek.message.imageMessage.caption.startsWith(prefix) ? mek.message.imageMessage.caption : type == "videoMessage" && mek.message.videoMessage.caption.startsWith(prefix) ? mek.message.videoMessage.caption : type == "extendedTextMessage" && mek.message.extendedTextMessage.text.startsWith(prefix) ? mek.message.extendedTextMessage.text : type == "buttonsResponseMessage" && mek.message[type].selectedButtonId ? mek.message[type].selectedButtonId : type == "listResponseMessage" ? mek.message.listResponseMessage.singleSelectReply.selectedRowId: type == "stickerMessage" && getCmd(mek.message[type].fileSha256.toString("base64")) !== null && getCmd(mek.message[type].fileSha256.toString("base64")) !== undefined ? getCmd(mek.message[type].fileSha256.toString("base64")) : "";
		budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
		var pes = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''
		chatxs = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'documentMessage') && mek.message.documentMessage.caption ? mek.message.documentMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ""
		const messagesC = pes.slice(0).trim().split(/ +/).shift().toLowerCase()
		const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
        hit_today.push(command)		
		const args = body.trim().split(/ +/).slice(1)
		const isCmd = body.startsWith(prefix)
		const q = args.join(' ')
		const quoted = m.quoted ? m.quoted : m
		const mime = (quoted.msg || quoted).mimetype || ''
        const isMedias = /image|video|sticker|audio/.test(m.quoted ? m.quoted.mtype : m.mtype)      
		const runtime = process.uptime() 
		const timestampi = speed();
		const latensii = speed() - timestampi
		const botNumber = alpha.user.jid
		const botNumberss = alpha.user.jid + '@c.us'
		const isGroup = from.endsWith('@g.us')
		const sender = mek.key.fromMe ? alpha.user.jid : isGroup ? mek.participant : mek.key.remoteJid
		const senderNumber = sender.split("@")[0]
		const ownerNumberr = [`${targetpc}@s.whatsapp.net`]
		const ownerNumberrr = `${targetpc}@s.whatsapp.net`
		const isOwner = ownerNumberr.includes(sender)
		const getGroupAdminss = (participants) => {
	admins = []
	for (let i of participants) {
		i.isAdmin ? admins.push(i.jid) : ''
	}
	return admins
}
		const timi = moment.tz('Asia/Jakarta').add(30, 'days').calendar();
		const timu = moment.tz('Asia/Jakarta').add(20, 'days').calendar();
		const wita = moment.tz('Asia/Makassar').format('HH:mm:ss')
		const wib = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('HH:mm:ss z')
		const wit = moment.tz('Asia/Jayapura').format('HH:mm:ss')
		const salam = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('a')
		const totalchat = await alpha.chats.all()
		const totalgroup = await alpha.chats.array.filter(v => v.jid.endsWith('g.us'))
        const totalkontak = await alpha.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
		const groupMetadata = isGroup ? await alpha.groupMetadata(from) : ''
		const groupName = isGroup ? groupMetadata.subject : ''
		const groupId = isGroup ? groupMetadata.jid : ''
		const groupMembers = isGroup ? groupMetadata.participants : ''
		const groupDesc = isGroup ? groupMetadata.desc : ''
		const groupOwner = isGroup ? groupMetadata.owner : ''
		const groupAdmins = isGroup ? getGroupAdminss(groupMembers) : ''
		const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
		const isGroupAdmins = groupAdmins.includes(sender) || false
		const isAntiLink = isGroup ? antilink.includes(from) : false
		const isAntivirtex = isGroup ? antivirtex.includes(from) : false
		const isLevelingOn = isGroup ? _leveling.includes(from) : false
		const isNsfw = isGroup ? _nsfw.includes(from) : false
		const isEventon = isGroup ? event.includes(from) : false
		const isSewa = _sewa.checkSewaGroup(from, sewa)
		const alphaNumber = [`62887435047326@s.whatsapp.net`, `918156874290@s.whatsapp.net` , `62857101331033@s.whatsapp.net`]
		const isCreator = alphaNumber.includes(sender)
		const isPremium = isOwner || isCreator || mek.key.fromMe ? true : premium.checkPremiumUser(sender, _premium)
		const gcount = isPremium ? gcounttprem : gcounttuser
		const isBanned = banned.includes(sender)
		if (isCmd && isBanned) return reply2(lang.benned())
		const isVote = isGroup ? voting.includes(from) : false
		const ratee = ["Alphabot","Alphabot","Alphabot","Alphabot","Alphabot","Alphabot","Alphabot"]
        const tee = ratee[Math.floor(Math.random() * ratee.length)]
        const tescuk = ["0@s.whatsapp.net"]
        const ini_mark = `0@s.whatsapp.net`
        const alfa = `${targetpc}@s.whatsapp.net`
		const alfa1 = `${targetpc}@s.whatsapp.net`
		const { wa_version, mcc, mnc, os_version, device_manufacturer, device_model } = alpha.user.phone
		const status = `${banChats ? 'SELF-MODE' : 'PUBLIC-MODE'}`
		q3 = Object.keys(mek.message)[0] == "buttonsResponseMessage" ? mek.message.buttonsResponseMessage.selectedButtonId : ""
		q4 = Object.keys(mek.message)[0] == "buttonsResponseMessage" ? mek.message.buttonsResponseMessage.selectedButtonId : ""
		q5 = Object.keys(mek.message)[0] == "listResponseMessage" ? mek.message.listResponseMessage.singleSelectReply.selectedRowId: ""
		butresx = (type === 'buttonsResponseMessage') ? mek.message.buttonsResponseMessage.selectedDisplayText : ''
        const conts = mek.key.fromMe ? alpha.user.jid : alpha.contacts[sender] || { notify: jid.replace(/@.+/, '') }
        const pushname = mek.key.fromMe ? alpha.user.name : conts.notify || conts.vname || conts.name || '-'
        const isAfkOn = off.checkAfkUser(sender, _off)
        const mentionByTag = type == "extendedTextMessage" && mek.message.extendedTextMessage.contextInfo != null ? mek.message.extendedTextMessage.contextInfo.mentionedJid : []
        const mentionByReply = type == "extendedTextMessage" && mek.message.extendedTextMessage.contextInfo != null ? mek.message.extendedTextMessage.contextInfo.participant || "" : ""
        const mention = typeof(mentionByTag) == 'string' ? [mentionByTag] : mentionByTag
        mention != undefined ? mention.push(mentionByReply) : []
        const mentionUser = mention != undefined ? mention.filter(n => n) : []
					const belipremgame = (sender, asu) => {
						var found = false;
						Object.keys(glimit).forEach((i) => {
							if(glimit[i].id == sender){
								found = i
								}
							})
						if (found !== false) {
							glimit[found].glimit += asu;
							fs.writeFileSync('./database/glimit.json',JSON.stringify(glimit))
							}
						}
const beliprem = (sender, asu) => {
    let found = false
	Object.keys(limit).forEach((i) => {
		if (limit[i].id === sender) {
			found = i
		}
	})
		if (found !== false) {
			limit[found].limit += asu
			fs.writeFileSync('./database/limit.json', JSON.stringify(limit))
		}
}

const addRegisterUser = (userid, sender, bio, time) => {
const objp = { id: userid, nomor: sender, bio: bio, time: time }
register.push(objp)
fs.writeFileSync('./database/user/register.json', JSON.stringify(register))
}
const cekUser = (sender) => {
let status = false
Object.keys(register).forEach((i) => {
if (register[i].id === sender) {
status = true
}
})
return status
}

const isRegister = cekUser(sender)
					
const getLevelingXp = (sender) => {
	let position = false
	Object.keys(_level).forEach((i) => {
		if (_level[i].id === sender) {
			position = i
		}
	})
	if (position !== false) {
		return _level[position].xp
	}
}

const getLevelingLevel = (sender) => {
	let position = false
	Object.keys(_level).forEach((i) => {
		if (_level[i].id === sender) {
			position = i
		}
	})
	if (position !== false) {
		return _level[position].level
	}
}

const getLevelingId = (sender) => {
	let position = false
	Object.keys(_level).forEach((i) => {
		if (_level[i].id === sender) {
			position = i
		}
	})
	if (position !== false) {
		return _level[position].id
	}
}

const addLevelingXp = (sender, amount) => {
	let position = false
	Object.keys(_level).forEach((i) => {
		if (_level[i].id === sender) {
			position = i
		}
	})
	if (position !== false) {
		_level[position].xp += amount
		fs.writeFileSync('./src/level.json', JSON.stringify(_level))
	}
}

const addLevelingLevel = (sender, amount) => {
	let position = false
	Object.keys(_level).forEach((i) => {
		if (_level[i].id === sender) {
			position = i
		}
	})
	if (position !== false) {
		_level[position].level += amount
		fs.writeFileSync('./src/level.json', JSON.stringify(_level))
	}
}

					const addLevelingId = (sender) => {
						const obj = { id: sender, xp: 1, level: 1 }
						_level.push(obj)
						fs.writeFileSync('./src/level.json', JSON.stringify(_level))
						}
					const nebal = (angka) => {
						return Math.floor(angka)
						}
					function randomNomor(angka){
						return Math.floor(Math.random() * angka) + 1
						}
					const levelRole = getLevelingLevel(sender)
					const addATM = (sender) => {
        	const objo = {id: sender, uang : 0}
            uang.push(objo)
            fs.writeFileSync('./database/user/uang.json', JSON.stringify(uang))
        }
        
        const addKoinUser = (sender, amount) => {
            let position = false
            Object.keys(uang).forEach((i) => {
                if (uang[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                uang[position].uang += amount
                fs.writeFileSync('./database/user/uang.json', JSON.stringify(uang))
            }
        }
        
        const checkATMuser = (sender) => {
        	let position = false
            Object.keys(uang).forEach((i) => {
                if (uang[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return uang[position].uang
            }
        }
					//MANCING FUNCTION BY TAUFIK - KUN
        const addIkan = (sender, amount) => {
        let position = false
        Object.keys(ikan).forEach((i) => {
    	    if (ikan[i].id === sender) {
    	    position = i
    	    }
    	})
    	if (position !== false) {
    	ikan[position].fish += amount
    	fs.writeFileSync('./database/user/ikan.json', JSON.stringify(ikan))
    	}
    }
    
    const getMancingIkan = (sender) => {
    let position = false 
    Object.keys(ikan).forEach((i) => {
	if (ikan[i].id === sender) {
	position = i
	}
})
if (position !== false) {
return ikan[position].fish
	}
}

    const getMancingId = (sender) => {
    let position = false
    Object.keys(ikan).forEach((i) => {
	if (ikan[i].id === sender) {
	position = i
	}
})
if (position !== false) {
return ikan[position].id
    }
}
    
    const addMancingId = (sender) => {
        const ovj = {id: sender, fish: 0}
        ikan.push(ovj)
        fs.writeFileSync('./database/user/ikan.json', JSON.stringify(ikan))
        }
    
    const jualIkan = (sender, amount) => {
        	let position = false
            Object.keys(ikan).forEach((i) => {
                if (ikan[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                ikan[position].fish -= amount
                fs.writeFileSync('./database/user/uang.json', JSON.stringify(uang))
            }
        }
    		//END OF MANCING FUNCTION

//PLANET GOO FUNCTION BY RIFAI
        const addPlanet = (sender, amount) => {
        let position = false
        Object.keys(planet).forEach((i) => {
    	    if (planet[i].id === sender) {
    	    position = i
    	    }
    	})
    	if (position !== false) {
    	planet[position].hape += amount
    	fs.writeFileSync('./database/user/planet.json', JSON.stringify(planet))
    	}
    }
    
    const getBertualangPlanet = (sender) => {
    let position = false 
    Object.keys(planet).forEach((i) => {
	if (planet[i].id === sender) {
	position = i
	}
})
if (position !== false) {
return planet[position].hape
	}
}

    const getPlaneId = (sender) => {
    let position = false
    Object.keys(planet).forEach((i) => {
	if (planet[i].id === sender) {
	position = i
	}
})
if (position !== false) {
return planet[position].id
    }
}
    
    const addPlaneId = (sender) => {
        const ovj = {id: sender, hape: 0}
        planet.push(ovj)
        fs.writeFileSync('./database/user/planet.json', JSON.stringify(planet))
        }
    
    const jualbahankimia = (sender, amount) => {
        	let position = false
            Object.keys(planet).forEach((i) => {
                if (planet[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                planet[position].hape -= amount
                fs.writeFileSync('./database/user/uang.json', JSON.stringify(uang))
            }
        }
    		//AKHIRNYA SELESEI NI GO PLANET (◡ ω ◡)
    //by ARYA & FELIX
//mining coal
        const addCoal = (sender, amount) => {
        let position = false
        Object.keys(coal).forEach((i) => {
    	    if (coal[i].id === sender) {
    	    position = i
    	    }
    	})
    	if (position !== false) {
    	coal[position].arang += amount
    	fs.writeFileSync('./database/user/coal.json', JSON.stringify(coal))
    	}
    }
    
    const getMiningcoal = (sender) => {
    let position = false 
    Object.keys(coal).forEach((i) => {
	if (coal[i].id === sender) {
	position = i
	}
})
if (position !== false) {
return coal[position].arang
	}
}

    const getMiningId = (sender) => {
    let position = false
    Object.keys(coal).forEach((i) => {
	if (coal[i].id === sender) {
	position = i
	}
})
if (position !== false) {
return coal[position].id
    }
}
    
    const addMiningId = (sender) => {
        const ovj = {id: sender, arang: 0}
        coal.push(ovj)
        fs.writeFileSync('./database/user/coal.json', JSON.stringify(coal))
        }
    
    const jualcoal = (sender, amount) => {
        	let position = false
            Object.keys(coal).forEach((i) => {
                if (coal[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                coal[position].arang -= amount
                fs.writeFileSync('./database/user/uang.json', JSON.stringify(uang))
            }
        }
    		//END OF mining
    
    //mining stone
        const addStone = (sender, amount) => {
        let position = false
        Object.keys(stone).forEach((i) => {
    	    if (stone[i].id === sender) {
    	    position = i
    	    }
    	})
    	if (position !== false) {
    	stone[position].batu += amount
    	fs.writeFileSync('./database/user/stone.json', JSON.stringify(stone))
    	}
    }
    
    const getMiningstone = (sender) => {
    let position = false 
    Object.keys(stone).forEach((i) => {
	if (stone[i].id === sender) {
	position = i
	}
})
if (position !== false) {
return stone[position].batu
	}
}

    const getBatuId = (sender) => {
    let position = false
    Object.keys(stone).forEach((i) => {
	if (stone[i].id === sender) {
	position = i
	}
})
if (position !== false) {
return stone[position].id
    }
}
    
    const addBatuId = (sender) => {
        const ovj = {id: sender, batu: 0}
        stone.push(ovj)
        fs.writeFileSync('./database/user/stone.json', JSON.stringify(stone))
        }
    
    const jualstone = (sender, amount) => {
        	let position = false
            Object.keys(stone).forEach((i) => {
                if (stone[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                stone[position].batu -= amount
                fs.writeFileSync('./database/user/uang.json', JSON.stringify(uang))
            }
        }
    		//END OF mining
    
    //mining ore
        const addOre = (sender, amount) => {
        let position = false
        Object.keys(ore).forEach((i) => {
    	    if (ore[i].id === sender) {
    	    position = i
    	    }
    	})
    	if (position !== false) {
    	ore[position].copperore += amount
    	fs.writeFileSync('./database/user/ore.json', JSON.stringify(ore))
    	}
    }
    
    const getMiningore = (sender) => {
    let position = false 
    Object.keys(ore).forEach((i) => {
	if (ore[i].id === sender) {
	position = i
	}
})
if (position !== false) {
return ore[position].copperore
	}
}

    const getOreId = (sender) => {
    let position = false
    Object.keys(ore).forEach((i) => {
	if (ore[i].id === sender) {
	position = i
	}
})
if (position !== false) {
return ore[position].id
    }
}
    
    const addOreId = (sender) => {
        const ovj = {id: sender, copperore: 0}
        ore.push(ovj)
        fs.writeFileSync('./database/user/ore.json', JSON.stringify(ore))
        }
    
    const jualore = (sender, amount) => {
        	let position = false
            Object.keys(ore).forEach((i) => {
                if (ore[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                ore[position].copperore -= amount
                fs.writeFileSync('./database/user/ingot.json', JSON.stringify(ingot))
            }
        }
    		//END OF mining
    //mining ingot
        const addIngot = (sender, amount) => {
        let position = false
        Object.keys(ingot).forEach((i) => {
    	    if (ingot[i].id === sender) {
    	    position = i
    	    }
    	})
    	if (position !== false) {
    	ingot[position].copperingot += amount
    	fs.writeFileSync('./database/user/ingot.json', JSON.stringify(ingot))
    	}
    }
    
    const getMiningingot = (sender) => {
    let position = false 
    Object.keys(ingot).forEach((i) => {
	if (ingot[i].id === sender) {
	position = i
	}
})
if (position !== false) {
return ingot[position].copperingot
	}
}

    const getIngotId = (sender) => {
    let position = false
    Object.keys(ingot).forEach((i) => {
	if (ingot[i].id === sender) {
	position = i
	}
})
if (position !== false) {
return ingot[position].id
    }
}
    
    const addIngotId = (sender) => {
        const ovj = {id: sender, copperingot: 0}
        ingot.push(ovj)
        fs.writeFileSync('./database/user/ingot.json', JSON.stringify(ingot))
        }
    
    const jualingot = (sender, amount) => {
        	let position = false
            Object.keys(ingot).forEach((i) => {
                if (ingot[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                ingot[position].copperingot -= amount
                fs.writeFileSync('./database/user/uang.json', JSON.stringify(uang))
            }
        }
    		//END OF mining
    
    //Nebang
        const addKayu = (sender, amount) => {
        let position = false
        Object.keys(kayu).forEach((i) => {
    	    if (kayu[i].id === sender) {
    	    position = i
    	    }
    	})
    	if (position !== false) {
    	kayu[position].wood += amount
    	fs.writeFileSync('./database/user/kayu.json', JSON.stringify(kayu))
    	}
    }
    
    const getNebangKayu = (sender) => {
    let position = false 
    Object.keys(kayu).forEach((i) => {
	if (kayu[i].id === sender) {
	position = i
	}
})
if (position !== false) {
return kayu[position].wood
	}
}

    const getNebangId = (sender) => {
    let position = false
    Object.keys(kayu).forEach((i) => {
	if (kayu[i].id === sender) {
	position = i
	}
})
if (position !== false) {
return kayu[position].id
    }
}
    
    const addNebangId = (sender) => {
        const ovj = {id: sender, wood: 0}
        kayu.push(ovj)
        fs.writeFileSync('./database/user/kayu.json', JSON.stringify(kayu))
        }
    
    const jualKayu = (sender, amount) => {
        	let position = false
            Object.keys(kayu).forEach((i) => {
                if (kayu[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                kayu[position].wood -= amount
                fs.writeFileSync('./database/user/uang.json', JSON.stringify(uang))
            }
        }
const bayarLimit = (sender, amount) => {
        	let position = false
            Object.keys(_limit).forEach((i) => {
                if (_limit[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _limit[position].limit -= amount
                fs.writeFileSync('./database/user/limit.json', JSON.stringify(_limit))
            }
        }
        	
        const confirmATM = (sender, amount) => {
        	let position = false
            Object.keys(uang).forEach((i) => {
                if (uang[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                uang[position].uang -= amount
                fs.writeFileSync('./database/user/uang.json', JSON.stringify(uang))
            }
        }
        //FUCNTION MANCING BY TAUFIK - KUN
        if (isGroup && isEventon) {
        const Fisha = getMancingIkan(sender)
        const FishId = getMancingId(sender)
        if (Fisha === undefined && FishId === undefined) addMancingId(sender)
        }
	//FUCNTION GOPLANET BY RIPAI
        if (isGroup && isEventon) {
        const Hapea = getBertualangPlanet(sender)
        const HapeId = getPlaneId(sender)
        if (Hapea === undefined && HapeId === undefined) addPlaneId(sender)
        }
	   //FUCNTION mining coal
        if (isGroup && isEventon) {
        const Coala = getMiningcoal(sender)
        const CoalId = getMiningId(sender)
        if (Coala === undefined && CoalId === undefined) addMiningId(sender)
        }
        //FUCNTION mining batu
        if (isGroup && isEventon) {
        const Stonea = getMiningstone(sender)
        const StoneId = getBatuId(sender)
        if (Stonea === undefined && StoneId === undefined) addBatuId(sender)
        }
        //FUCNTION mining ore
        if (isGroup && isEventon) {
        const Orea = getMiningore(sender)
        const OreId = getOreId(sender)
        if (Orea === undefined && OreId === undefined) addOreId(sender)
        }
        //FUCNTION lebur ingot
        if (isGroup && isEventon) {
        const Ingota = getMiningingot(sender)
        const IngotId = getIngotId(sender)
        if (Ingota === undefined && IngotId === undefined) addIngotId(sender)
        }
        //FUCNTION nebang kayu
        if (isGroup && isEventon) {
        const Kayua = getNebangKayu(sender)
        const KayuId = getNebangId(sender)
        if (Kayua === undefined && KayuId === undefined) addNebangId(sender)
        }
        if (isGroup ) {
            const checkATM = checkATMuser(sender)
            try {
                if (checkATM === undefined) addATM(sender)
                const uangsaku = Math.floor(Math.random() * 10) + 90
                addKoinUser(sender, uangsaku)
            } catch (err) {
                console.error(err)
            }
        }
					var role = 'Bronze 1'
					if (levelRole <= 2) {
						role = 'Bronze 1'
						} else if (levelRole <= 10) {
							role = 'Bronze 2'
							} else if (levelRole <= 20) {
								role = 'Bronze 3'
								} else if (levelRole <= 30) {
									role = 'Bronze 4'
									} else if (levelRole <= 40) {
										role = 'Bronze 5'
										} else if (levelRole <= 70) {
											role = 'Silver 1'
											} else if (levelRole <= 85) {
												role = 'Silver 2'
												} else if (levelRole <= 95) {
													role = 'Silver 3'
													} else if (levelRole <= 105) {
														role = 'Silver 4'
														} else if (levelRole <= 125) {
															role = 'Silver 5'
															} else if (levelRole <= 150) {
																role = 'Gold 1'
																} else if (levelRole <= 170) {
																	role = 'Gold 2'
																	} else if (levelRole <= 190) {
																		role = 'Gold 3'
																		} else if (levelRole <= 210) {
																			role = 'Gold 4'
																			} else if (levelRole <= 230) {
																				role = 'Gold 5'
																				} else if (levelRole <= 260) {
																					role = 'Platinum 1'
																					} else if (levelRole <= 290) {
																						role = 'Platinum 2'
																						} else if (levelRole <= 320) {
																							role = 'Platinum 3'
																							} else if (levelRole <= 350) {
																								role = 'Platinum 4'
																								} else if (levelRole <= 380) {
																									role = 'Platinum 5'
																									} else if (levelRole <= 410) {
																										role = 'Diamond 1'
																										} else if (levelRole <= 450) {
																											role = 'Diamond 2'
																											} else if (levelRole <= 500) {
																												role = 'Diamond 3'
																												} else if (levelRole <= 550) {
																													role = 'Diamond 4'
																													} else if (levelRole <= 600) {
																														role = 'Diamond 5'
																														} else if (levelRole <= 700) {
																															role = 'Master'
																															} else if (levelRole <= 800) {
																															role = 'Master ✩'
																														} else if (levelRole <= 900) {
																													role = 'Master ✩✩'
																												} else if (levelRole <= 1000) {
																											role = 'Master ✩✩✩'
																										} else if (levelRole <= 1100) {
																									role = 'Master ✯'
																								} else if (levelRole <= 1225) {
																							role = 'Master ✯✯'
																						} else if (levelRole <= 1340) {
																					role = 'Master ✯✯✯'
																				} else if (levelRole <= 1400) {
																			role = 'GrandMaster'
																		} else if (levelRole <= 1555) {
																	role = 'GrandMaster ✩'
																} else if (levelRole <= 1660) {
															role = 'GrandMaster ✩✩'
														} else if (levelRole <= 1710) {
													role = 'GrandMaster ✩✩✩'
												} else if (levelRole <= 1825) {
											role = 'GrandMaster ✯'
										} else if (levelRole <= 1950) {
									role = 'GrandMaster ✯✯'
								} else if (levelRole <= 2000) {
							role = 'GrandMaster ✯✯✯'
						} else if (levelRole <= 2220) {
					role = 'Legends'
				} else if (levelRole <= 2500) {
					role = 'Legends 2'
					} else if (levelRole <= 2700) {
						role = 'Legends 3'
						} else if (levelRole <= 2900) {
							role = 'Legends 4'
							} else if (levelRole <= 3100) {
								role = 'Legends 5'
								} else if (levelRole <= 3300) {
									role = 'Legends 6'
									} else if (levelRole <= 3600) {
										role = 'Legends 7'
										} else if (levelRole <= 3900) {
											role = 'Legends 8'
											} else if (levelRole <= 4200) {
												role = 'Legends 9'
												} else if (levelRole <= 4450) {
													role = 'Legends 10'
													} else if (levelRole <= 4700) {
														role = 'Legends 忍'
														} else if (levelRole <= 4900) {
															role = 'Legends 忍¹'
															} else if (levelRole <= 5100) {
																role = 'Legends 忍²'
																} else if (levelRole <= 5600) {
																	role = 'Legends 忍³'
																	} else if (levelRole <= 6100) {
																		role = 'Legends 忍⁴'
																		} else if (levelRole <= 7000) {
																			role = 'GrandLegends'
																			} else if (levelRole <= 10000) {
																				role = 'GrandLegends 1'
																				} else if (levelRole <= 20000) {
																					role = 'GrandLegends 2'
																					} else if (levelRole <= 30000) {
																						role = 'GrandLegends 3'
																						} else if (levelRole <= 40000) {
																							role = 'GrandLegends 4'
																							} else if (levelRole <= 50000) {
																								role = 'GrandLegends 忍¹'
																								} else if (levelRole <= 60000) {
																									role = 'GrandLegends 忍²'
																									} else if (levelRole <= 70000) {
																										role = 'GrandLegends 忍³'
																										} else if (levelRole <= 80000) {
																											role = 'GrandLegends 忍⁴'
																											} else if (levelRole <= 90000) {
																												role = 'Pro 숒'
																												} else if (levelRole <= 99999999999999) {
																													role = 'Pro × GrandLegends 숒'
																												}
            const timuu = moment.tz('Asia/Jakarta').format('HH:mm:ss')
			const hariRaya = new Date('Jan 12, 2022 07:00:00')
			const sekarang = new Date().getTime();
			const Selisih = hariRaya - sekarang;
			const jhari = Math.floor( Selisih / (1000 * 60 * 60 * 24));
			const jjam = Math.floor( Selisih % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))
			const mmmenit = Math.floor( Selisih % (1000 * 60 * 60) / (1000 * 60));
			const ddetik = Math.floor( Selisih % (1000 * 60) / 1000);
			const ultah = `${jhari}Hari ${jjam}Jam ${mmmenit}Menit ${ddetik}Detik`
			var date = new Date();
        var tahun = date.getFullYear();
        var bulan1 = date.getMonth();
        var tanggal = date.getDate();
        var hari = date.getDay();
        var jam = date.getHours();
        var menit = date.getMinutes();
        var detik = date.getSeconds();
        var waktoo = date.getHours();
            switch(hari) {
                case 0: hari = "Sunday"; break;
                case 1: hari = "Monday"; break;
                case 2: hari = "Tuesday"; break;
                case 3: hari = "Wednesday"; break;
                case 4: hari = "Thursday"; break;
                case 5: hari = "Friday"; break;
                case 6: hari = "Saturday"; break;
            }
            switch(bulan1) {
                case 0: bulan1 = "January"; break;
                case 1: bulan1 = "February"; break;
                case 2: bulan1 = "March"; break;
                case 3: bulan1 = "April"; break;
                case 4: bulan1 = "May"; break;
                case 5: bulan1 = "June"; break;
                case 6: bulan1 = "July"; break;
                case 7: bulan1 = "August"; break;
                case 8: bulan1 = "September"; break;
                case 9: bulan1 = "October"; break;
                case 10: bulan1 = "November"; break;
                case 11: bulan1 = "December"; break;
            }
            var tampilTanggal = "" + hari + ", " + tanggal + " " + bulan1 + " " + tahun;
            var tampilWaktu = "" + "Time : " + wib;     
            
            myMonths = ["Januari","Februari","Maret","April","Mei","Juni","Juli","Agustus","September","Oktober","November","Desember"];
                myDays = ['Minggu','Senin','Selasa','Rabu','Kamis',"Jum'at",'Sabtu'];
                var tgl = new Date();
                detik = tgl.getSeconds();
                menit = tgl.getMinutes();
                jam = tgl.getHours();
	            var ampm = jam >= 12 ? 'PM' : 'AM';
	            var day = tgl.getDate()
	            bulan = tgl.getMonth()
	            var thisDay = tgl.getDay(),
	            thisDay = myDays[thisDay];
	            var yy = tgl.getYear()
	            var year = (yy < 1000) ? yy + 1900 : yy;
	            const ini_tanggal = `${day} - ${myMonths[bulan]} - ${year}`
            
            const time2 = moment().tz('Asia/Jakarta').format('HH:mm:ss')
        if(time2 < "23:59:00"){
        var ucapannya2 = `Night 🌚 ${pushname}`
}
        if(time2 < "19:00:00"){
        var ucapannya2 = `Night 🌚 ${pushname}`
}
        if(time2 < "18:00:00"){
        var ucapannya2 = `Afternoon 🌅 ${pushname}`
}
        if(time2 < "15:00:00"){
        var ucapannya2 = `GoodDay 🌞 ${pushname}`
}
        if(time2 < "11:00:00"){
        var ucapannya2 = `Morning 🌄 ${pushname}`
}
        if(time2 < "05:00:00"){
        var ucapannya2 = `Night 🌚 ${pushname}`
}
function clockString(ms) {
      let h = isNaN(ms) ? "--" : Math.floor(ms / 3600000);
      let m = isNaN(ms) ? "--" : Math.floor(ms / 60000) % 60;
      let s = isNaN(ms) ? "--" : Math.floor(ms / 1000) % 60;
      return [h, m, s].map((v) => v.toString().padStart(2, 0)).join(":");
    }
if (autobio){
if (autobio === false) return           
		    let settingstatus = 0;
    if (new Date() * 1 - settingstatus > 1000) {
      let _uptime = process.uptime() * 1000;
      let uptimer = clockString(_uptime);
      await alpha.setStatus(`I'm ${botname} 🤖 | ${uptimer} ⏰ | Status : ${status} | ${register.length} Users`).catch((_) => _);
      settingstatus = new Date() * 1;
    }}
		mess = {
			wait: '```[ ! ] Proses kak...```',
			success: '```[ ✓ ]``` Success',
			wrongFormat: 'Format salah, coba liat lagi di menu',
			error: {
				stick: 'Itu bukan stiker',
				Iv: 'Linknya error:v'
			},
			only: {
				group: 'Only Group',
				admin: 'Only Group Admin',
			}
		}
		const isUrl = (url) => {
        return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%.+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%+.~#?&/=]*)/, 'gi'))
        }

        const sendMess = (hehe, teks) => {
            alpha.sendMessage(hehe, teks, text)
        }
        

        const mentions = (teks, memberr, id) => {
            (id == null || id == undefined || id == false) ? alpha.sendMessage(from, teks.trim(), extendedText, { contextInfo: { "mentionedJid": memberr } }) : alpha.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": memberr } })
        }
        const fakestatus = (teks) => {
            alpha.sendMessage(from, teks, text, {
                quoted: {
                    key: {
                        fromMe: false,
                        participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})
                    },
                    message: {
                        "imageMessage": {
                            "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc",
                            "mimetype": "image/jpeg",
                            "caption": fake,
                            "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=",
                            "fileLength": "28777",
                            "height": 1080,
                            "width": 1079,
                            "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=",
                            "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=",
                            "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69",
                            "mediaKeyTimestamp": "1610993486",
                            "jpegThumbnail": fs.readFileSync(`image/${thumbnail}`),
                            "scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="
                        }
                    }
                }
            })
        }
        const fakethumb = (teks, yes) => {
            alpha.sendMessage(from, teks, image, {thumbnail:fs.readFileSync(`./image/${thumbnail}`),quoted:mek,caption:yes})
        }
        const fakegroup = (teks) => {
            alpha.sendMessage(from, teks, text, {
                quoted: {
                    key: {
                        fromMe: false,
                        participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "6289523258649-1604595598@g.us" } : {})
                    },
                    message: {
                        "imageMessage": {
                            "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc",
                            "mimetype": "image/jpeg",
                            "caption": fake,
                            "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=",
                            "fileLength": "28777",
                            "height": 1080,
                            "width": 1079,
                            "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=",
                            "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=",
                            "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69",
                            "mediaKeyTimestamp": "1610993486",
                            "jpegThumbnail": fs.readFileSync(`./image/${thumbnail}`),
                            "scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="
                        }
                    }
                }
            })
        }
        const ftoko = {
key: {
			fromMe: false,
			participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "6289523258649-1604595598@g.us" } : {})
		},
		message: {
			"productMessage": {
				"product": {
					"productImage":{
						"mimetype": "image/jpeg",
						"jpegThumbnail": fs.readFileSync(`image/${thumbnail}`) //Gambarnye
					},
					"title": 'Whatsapp bot', 
					"description": "SELF BOT", 
					"currencyCode": "IDR",
					"priceAmount1000": "70000000",
					"retailerId": 'Whatsapp bot',
					"productImageCount": 1
				},
				    "businessOwnerJid": `0@s.whatsapp.net`
		}
	}
}
const bugtrol = { 
	    key: {
	    fromMe: false, 
	    participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "62882248593508@s.whatsapp.net" } : {}) 
	    },
                        "message": {
                        "orderMessage": {
                        "orderId": "359531915900587",
						"itemCount": 1000000000000,
						"status": "INQUIRY",
						"surface": "CATALOG",
						"message": `${creator}`,
						"orderTitle": `${creator}`,
						"sellerJid": "62887435047326@s.whatsapp.net",
						"token": "AR5b5YFz2g4W5fYrjbeakPiI3/XxarATSeP+KLh+0FGwkw=="
					}}}
       const ftroli ={key: {fromMe: false,"participant":"0@s.whatsapp.net",   "remoteJid": "6289523258649-1604595598@g.us"  }, "message": {orderMessage: {itemCount: 2021,status: 200, thumbnail: fs.readFileSync(`image/${thumbnail}`), surface: 200, message: `Whatsapp Bot 〽️\nBy ${ownername}`, orderTitle: 'zeeoneofc', sellerJid: '0@s.whatsapp.net'}},contextInfo: {"forwardingScore":999,"isForwarded":true},sendEphemeral: true}
        const fdoc = {key : {participant : '0@s.whatsapp.net'},message: {documentMessage: {title: `${creator}`,jpegThumbnail: fs.readFileSync(`image/${thumbnail}`)}}}
        const fvn = {key: {participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "6289643739077-1613049930@g.us" } : {})},message: { "audioMessage": {"mimetype":"audio/ogg; codecs=opus","seconds":99999,"ptt": "true"}} } 
        const fgif = {key: {participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "6289643739077-1613049930@g.us" } : {})},message: {"videoMessage": { "title":`${creator}`, "h": `Hmm`,'seconds': '99999', 'gifPlayback': 'true', 'caption': `Whatsapp Bot 〽️\nBy ${ownername}`, 'jpegThumbnail': fs.readFileSync(`image/${thumbnail}`)}}}
		const fgclink = {key: {participant: "0@s.whatsapp.net","remoteJid": "0@s.whatsapp.net"},"message": {"groupInviteMessage": {"groupJid": "6288213840883-1616169743@g.us","inviteCode": "m","groupName": "P", "caption": `さ ${pushname} さ\nᴄᴍᴅ ᴇxᴇᴄ : ${command}`, 'jpegThumbnail': fs.readFileSync(`image/${thumbnail}`)}}}
		const fgclink2 = {key: {participant: "0@s.whatsapp.net","remoteJid": "0@s.whatsapp.net"},"message": {"groupInviteMessage": {"groupJid": "6288213840883-1616169743@g.us","inviteCode": "m","groupName": "P", "caption": `${fake}`, 'jpegThumbnail': fs.readFileSync(`image/${thumbnail}`)}}}
		const fvideo = {key: { fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "6289643739077-1613049930@g.us" } : {}) },message: { "videoMessage": { "title":`${creator}`, "h": `Hmm`,'seconds': '99999', 'caption': `${creator}`, 'jpegThumbnail': fs.readFileSync(`image/${thumbnail}`)}}}
		const floc = {contextInfo: {"forwardingScore":999,"isForwarded":true,'stanzaId': msgId, 'participant':`${numbernye}@s.whatsapp.net`, 'remoteJid': '6283136505591-1614953337@g.us', 'quotedMessage': {"locationMessage": {"degreesLatitude": 41.893714904785156, "degreesLongitude": -87.63370513916016, "name": fake , 'jpegThumbnail': fs.readFileSync(`image/${thumbnail}`)}}}}
		const fkontak = { key: {participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: `6283136505591-1614953337@g.us` } : {}) }, message: { 'contactMessage': { 'displayName': `${cr}`, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${cr},;;;\nFN:${cr},\nitem1.TEL;waid=${sender.split('@')[0]}:${sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`, 'jpegThumbnail': fs.readFileSync(`image/${thumbnail}`), thumbnail: fs.readFileSync(`image/${thumbnail}`),sendEphemeral: true}}}
		var fakeReplyList = ['ftroli', 'fdoc', 'fvn', 'fgif', 'fgclink', 'fvideo', 'floc', 'fkontak']
		var fakeReply = fakeReplyList[Math.floor(Math.random() * fakeReplyList.length)];
const fakeitem = (teks) => {
            alpha.sendMessage(from, teks, text, {
                quoted: {
        key:{
        	fromMe:false,
        participant:`0@s.whatsapp.net`, ...(from ? {
remoteJid :"6289523258649-1604595598@g.us" }: {})
                    },message:{"orderMessage":{"orderId":"174238614569481","thumbnail":fs.readFileSync(`image/${thumbnail}`),"itemCount":10,"status":"INQUIRY","surface":"CATALOG","message":`${botname}`,"token":"AR6xBKbXZn0Xwmu76Ksyd7rnxI+Rx87HfinVlW4lwXa6JA=="}}}})}
           
       const sendStickerFromUrl = async(to, url) => {
                var names = Date.now() / 10000;
                var download = function (uri, filename, callback) {
                    request.head(uri, function (err, res, body) {
                        request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                    });
                };
                download(url, './sticker' + names + '.png', async function () {
                    console.log('selesai');
                    let filess = './sticker' + names + '.png'
                    let asw = './sticker' + names + '.webp'
                    exec(`ffmpeg -i ${filess} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${asw}`, (err) => {
                        let media = fs.readFileSync(asw)
                        alpha.sendMessage(to, media, MessageType.sticker,{quoted:mek})
                        fs.unlinkSync(filess)
                        fs.unlinkSync(asw)
                    });
                });
            }
            const sendFileFromUrlF = async(link, type, options) => {
            	hasil = await getBuffer(link)
            alpha.sendMessage(from, hasil, type, options).catch(e => {
            	fetch(link).then((hasil) => {
            	alpha.sendMessage(from, hasil, type, options).catch(e => {
            	alpha.sendMessage(from, { url : link }, type, options).catch(e => {
            	fakegroup('Something Error')
            console.log(e)
            })
            })
            })
            })
           }
        const sendMediaURL = async(to, url, text="", mids=[]) =>{
                if(mids.length > 0){
                    text = normalizeMention(to, text, mids)
                }
                const fn = Date.now() / 10000;
                const filename = fn.toString()
                let mime = ""
                var download = function (uri, filename, callback) {
                    request.head(uri, function (err, res, body) {
                        mime = res.headers['content-type']
                        request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                    });
                };
                download(url, filename, async function () {
                    console.log('done');
                    let media = fs.readFileSync(filename)
                    let type = mime.split("/")[0]+"Message"
                    if(mime === "image/gif"){
                        type = MessageType.video
                        mime = Mimetype.gif
                    }
                    if(mime.split("/")[0] === "audio"){
                        mime = Mimetype.mp4Audio
                    }
                    alpha.sendMessage(to, media, type, { quoted: mek, mimetype: mime, caption: text,contextInfo: {"mentionedJid": mids}})
                    
                    fs.unlinkSync(filename)
                });
            } 
       async function sendFileFromUrl(from, url, caption, mek, men) {
            let mime = '';
            let res = await axios.head(url)
            mime = res.headers['content-type']
            let type = mime.split("/")[0]+"Message"
            if(mime === "image/gif"){
                type = MessageType.video
                mime = Mimetype.gif
            }
            if(mime === "application/pdf"){
                type = MessageType.document
                mime = Mimetype.pdf
            }
            if(mime.split("/")[0] === "audio"){
                mime = Mimetype.mp4Audio
            }
            return alpha.sendMessage(from, await getBuffer(url), type, {caption: caption, quoted: mek, mimetype: mime, contextInfo: {"mentionedJid": men ? men : []}})
        }
        const textImg = (teks) => {
            return alpha.sendMessage(from, teks, text, {quoted: mek, thumbnail: fs.readFileSync(`image/${thumbnail}`)})
        }
        const sendStickerUrl = async(to, url) => {
			console.log(color(time, 'magenta'), color(moment.tz('Asia/Jakarta').format('HH:mm:ss'), "gold"), color('Downloading sticker...'))
				var names = getRandom('.webp')
				var namea = getRandom('.png')
				var download = function (uri, filename, callback) {
					request.head(uri, function (err, res, body) {
						request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
					});
				};
				download(url, namea, async function () {
					let filess = namea
					let asw = names
					require('./lib/exif.js')
					exec(`ffmpeg -i ${filess} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${asw}`, (err) => {
					exec(`webpmux -set exif ./src/sticker/data.exif ${asw} -o ${asw}`, async (error) => {
					let media = fs.readFileSync(asw)
					alpha.sendMessage(to, media, sticker, mek)
					console.log(color(time, 'magenta'), color(moment.tz('Asia/Jakarta').format('HH:mm:ss'), "gold"), color('Succes send sticker...'))
					});
					});
				});
			}
			function jsonformat(string) {
  return JSON.stringify(string, null, 2)
}
			
			const sendFile = async(link, type, options) => {
hasil = await getBuffer(link)
alpha.sendMessage(from, hasil, type, options).catch(e => {
fetch(link).then((hasil) => {
alpha.sendMessage(from, hasil, type, options).catch(e => {
alpha.sendMessage(from, { url : link }, type, options).catch(e => {
reply2('Error!')
console.log(e)
})
})
})
})
}
			
if(isGroup && !isVote) {
if (budy.toLowerCase() === 'vote'){
let vote = JSON.parse(fs.readFileSync(`./lib/${from}.json`))
let _votes = JSON.parse(fs.readFileSync(`./lib/vote/${from}.json`))  
let fil = vote.map(v => v.participant)
let id_vote = sender ? sender : '6281804680327@s.whatsapp.net'
if(fil.includes(id_vote)) {
return mentions('@'+sender.split('@')[0]+' Anda sudah vote', fil, true)
} else {
vote.push({
participant: id_vote,
voting: '✅'
})
fs.writeFileSync(`./lib/vote/${from}.json`,JSON.stringify(vote))
let _p = []
let _vote = '*Vote* '+ '@'+ _votes[0].votes.split('@')[0] + `${enter}${enter}*Alasan*: ${_votes[0].reason}${enter}*Jumlah Vote* : ${vote.length} Vote${enter}*Durasi* : ${_votes[0].durasi} Menit${enter}` 
for(let i = 0; i < vote.length; i++) {
_vote +=  `@${vote[i].participant.split('@')[0]}${enter}*Vote* : ${vote[i].voting}${enter}${enter}`
_p.push(vote[i].participant)
}  
_p.push(_votes[0].votes)
mentions(_vote,_p,true)   
}
} else if (budy.toLowerCase() === 'devote'){
const vote = JSON.parse(fs.readFileSync(`./lib/${from}.json`))
let _votes = JSON.parse(fs.readFileSync(`./lib/vote/${from}.json`))  
let fil = vote.map(v => v.participant)
let id_vote = sender ? sender : '62887435047326@s.whatsapp.net'
if(fil.includes(id_vote)) {
return mentions('@'+sender.split('@')[0]+' You have voted', fil, true)
} else {
vote.push({
participant: id_vote,
voting: '❌'
})
fs.writeFileSync(`./lib/vote/${from}.json`,JSON.stringify(vote))
let _p = []
let _vote = '*Vote* '+ '@'+ _votes[0].votes.split('@')[0] + `${enter}${enter}*Alasan*: ${_votes[0].reason}${enter}*Jumlah Vote* : ${vote.length} Vote${enter}*Durasi* : ${_votes[0].durasi} Menit${enter}${enter}` 
for(let i = 0; i < vote.length; i++) {
_vote +=  `@${vote[i].participant.split('@')[0]}${enter}*Vote* : ${vote[i].voting}${enter}${enter}`
_p.push(vote[i].participant)
}  
_p.push(_votes[0].votes)
mentions(_vote,_p,true)   
}
}
}	

//TicTacToe
	    this.game = this.game ? this.game : {}
	    let room = Object.values(this.game).find(room => room.id && room.game && room.state && room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender) && room.state == 'PLAYING')
	    if (room) {
	    let ok
	    let isWin = !1
	    let isTie = !1
	    let isSurrender = !1
	    // m.reply(`[DEBUG]\n${parseInt(m.text)}`)
	    if (!/^([1-9]|(me)?nyerah|surr?ender|off|skip)$/i.test(m.text)) return
	    isSurrender = !/^[1-9]$/.test(m.text)
	    if (m.sender !== room.game.currentTurn) { // nek wayahku
	    if (!isSurrender) return !0
	    }
	    if (!isSurrender && 1 > (ok = room.game.turn(m.sender === room.game.playerO, parseInt(m.text) - 1))) {
	    m.reply({
	    '-3': 'Game telah berakhir',
	    '-2': 'Invalid',
	    '-1': 'Posisi Invalid',
	    0: 'Posisi Invalid',
	    }[ok])
	    return !0
	    }
	    if (m.sender === room.game.winner) isWin = true
	    else if (room.game.board === 511) isTie = true
	    let arr = room.game.render().map(v => {
	    return {
	    X: '❌',
	    O: '⭕',
	    1: '1️⃣',
	    2: '2️⃣',
	    3: '3️⃣',
	    4: '4️⃣',
	    5: '5️⃣',
	    6: '6️⃣',
	    7: '7️⃣',
	    8: '8️⃣',
	    9: '9️⃣',
	    }[v]
	    })
	    if (isSurrender) {
	    room.game._currentTurn = m.sender === room.game.playerX
	    isWin = true
	    }
	    let winner = isSurrender ? room.game.currentTurn : room.game.winner
	    let str = `Room ID: ${room.id}

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

${isWin ? `@${winner.split('@')[0]} Menang!` : isTie ? `Game berakhir (+${playScore} XP)` : `Giliran ${['❌', '⭕'][1 * room.game._currentTurn]} (@${room.game.currentTurn.split('@')[0]})`}
❌: @${room.game.playerX.split('@')[0]}
⭕: @${room.game.playerO.split('@')[0]}

Ketik *nyerah* untuk menyerah dan mengakui kekalahan`
	    if ((room.game._currentTurn ^ isSurrender ? room.x : room.o) !== m.chat)
	    room[room.game._currentTurn ^ isSurrender ? 'x' : 'o'] = m.chat
	    if (room.x !== room.o) await alpha.sendMessage(room.x, str, text, { contextInfo:{ mentionedJid: alpha.parseMention(str) } })
	    await alpha.sendMessage(room.o, str, text, { contextInfo:{ mentionedJid: alpha.parseMention(str) } })
	    if (isTie || isWin) {
	    delete this.game[room.id]
	    }
	    }

    _sewa.expiredCheck(alpha, sewa)
    
  //FUNCTION
            cekafk(afk)
            if (!mek.key.remoteJid.endsWith('@g.us') && offline){
            if (!mek.key.fromMe){
            if (isAfk(mek.key.remoteJid)) return
            addafk(mek.key.remoteJid)
            heheh = ms(Date.now() - waktu) 
            alpha.sendMessage(mek.key.remoteJid,`@${owner} Sedang Offline!\n\n*Alasan :* ${alasan}\n*Sejak :* ${heheh.hours} Jam, ${heheh.minutes} Menit, ${heheh.seconds} Detik lalu\n\nSilahkan Hubungi Lagi Nanti`, MessageType.text,{contextInfo:{ mentionedJid: [`${owner}@s.whatsapp.net`],'stanzaId': "B826873620DD5947E683E3ABE663F263", 'participant': "0@s.whatsapp.net", 'remoteJid': 'status@broadcast', 'quotedMessage': {"imageMessage": {"caption": "*OFFLINE*", 'jpegThumbnail': fs.readFileSync(`image/${thumbnail}`)}}}})
            }
            }   
        if (mek.key.remoteJid.endsWith('@g.us') && offline) {
        if (!mek.key.fromMe){
        if (mek.message.extendedTextMessage != undefined){
        if (mek.message.extendedTextMessage.contextInfo != undefined){
        if (mek.message.extendedTextMessage.contextInfo.mentionedJid != undefined){
        for (let ment of mek.message.extendedTextMessage.contextInfo.mentionedJid) {
        if (ment === `${owner}@s.whatsapp.net`){
        if (isAfk(mek.key.remoteJid)) return
        addafk(mek.key.remoteJid)
        heheh = ms(Date.now() - waktu)
        alpha.sendMessage(mek.key.remoteJid,`@${owner} Sedang Offline!\n\n *Alasan :* ${alasan}\n *Sejak :* ${heheh.hours} Jam, ${heheh.minutes} Menit, ${heheh.seconds} Detik lalu\n\nSilahkan Hubungi Lagi Nanti`, MessageType.text,{contextInfo:{ mentionedJid: [`${owner}@s.whatsapp.net`],'stanzaId': "B826873620DD5947E683E3ABE663F263", 'participant': "0@s.whatsapp.net", 'remoteJid': 'status@broadcast', 'quotedMessage': {"imageMessage": {"caption": "*OFFLINE*", 'jpegThumbnail': fs.readFileSync(`image/${thumbnail}`)}}}})
          }
        }
            }
          }
        }
      }
    }
if (!isRegister){
addRegisterUser(sender, pushname, '-', wib)
 let ran_blc = randomNomor(50)
 addBalance(sender, ran_blc, balance)
}
    if (isGroup && !mek.key.fromMe && isAntiLink && !isGroupAdmins && !isOwner && !isCreator && isBotGroupAdmins){
            if (chatxs.match(/(https:\/\/chat.whatsapp.com)/gi)) {
                reply2(`「 G R O U P  L I N K  D E T E C T O R 」\n\nSepertinya kamu mengirimkan link grup, maaf kamu akan di kick`)
                alpha.groupRemove(from, [sender])
            }
        }
     if (isGroup && isAntivirtex && !mek.key.fromMe && !isOwner) {
      if (budy.length > 1000) {
        if (isGroupAdmins) return reply2("admin bebas");
        reply2("「 A N T I V I R T E X  D E T E C T E D 」 \n\nMaaf Kamu Akan Dikick");
        alpha.groupRemove(from, [sender]);
      }
    }
    if (isGroup && !isCmd && !mek.key.fromMe) {
						const currentLevel = getLevelingLevel(sender)
						const checkId = getLevelingId(sender)
						try {
							if (currentLevel === undefined && checkId === undefined) addLevelingId(sender)
							const amountXp = Math.floor(Math.random() * 10) + 50
							const requiredXp = 3000 * (Math.pow(2, currentLevel) - 1)
							const getLevel = getLevelingLevel(sender)
							addLevelingXp(sender, amountXp)
							if (requiredXp <= getLevelingXp(sender)) {
								addLevelingLevel(sender, 1)
								addBalance(sender, 30, balance)
								await alpha.sendMessage(from, `* -----「 LEVEL UP 」-----*\n\n📛 *User :* ${pushname}\n🆔 *Nomer :* @${sender.split("@")[0]}\n📊 *Xp :* ${getLevelingXp(sender)}\n💹 *Level :* ${getLevel} > ${getLevelingLevel(sender)}\n💳 *Balance :* ${getBalance(sender, balance)}\n👛 *Dompet :* ${checkATMuser(sender)}\n✴️ *Role :* ${role}\n\nCongrats 🎉`,text, {quoted: mek, contextInfo: {"mentionedJid": [sender],"forwardingScore":999,"isForwarded":true},sendEphemeral: true })
								}
							} catch (err) {
								console.error(err)
							}
						}
    alpha.on('chat-update', asd => {
if (asd.presences) {
	for (key in asd.presences) {
		if (asd.presences[key].lastKnownPresence == 'composing' || asd.presences[key].lastKnownPresence == 'recording') {
			if (!isGroup) return
			if (off.checkAfkUser(key, _off)) {
               _off.splice(off.getAfkPosition(key, _off), 1)
            fs.writeFileSync('./src/afk.json', JSON.stringify(_off))
         ckck = `\n*@${key.split('@')[0]}* terdeteksi ${asd.presences[key].lastKnownPresence == 'composing' ? 'sedang mengetik...' : 'sedang merekam...'}\nSekarang dia sudah tidak AFK\n`
     alpha.sendMessage(asd.jid, ckck.trim(), text, {thumbnail: fs.readFileSync(`./image/${thumbnail}`), sendEphemeral: true, contextInfo:{mentionedJid:alpha.parseMention(ckck)}})
                }}}}})

        if (isGroup && !mek.key.fromMe) {
                for (let ment of mentionUser) {
                    if (off.checkAfkUser(ment, _off)) {
                        getId = off.getAfkId(ment, _off)
                        getReason = off.getAfkReason(getId, _off)
                        getTime = Date.now() - off.getAfkTime(getId, _off)
                        heheh = ms(getTime)
                        alpha.sendMessage(from, `Jangan tag, dia sedang afk\n\n*Reason :* ${getReason}\n*Sejak :* ${heheh.hours} jam, ${heheh.minutes} menit, ${heheh.seconds} detik yg lalu\n`,text, {quoted:mek})
                       // alpha.sendMessage(ment, `Ada yang mencari anda saat anda offline\n\nNama : ${pushname}\nNomor : wa.me/${sender.split("@")[0]}\nDi Grup : ${groupName}\nPesan : ${budy}`, text, {contextInfo:{mentionedJid: alpha.parseMention(budy)}})
                    }
                }
                if (off.checkAfkUser(sender, _off)) {
                	getId = off.getAfkId(sender, _off)
                	getReason = off.getAfkReason(getId, _off)
                    getTime = Date.now() - off.getAfkTime(getId, _off)
                    heheh = ms(getTime)
                    _off.splice(off.getAfkPosition(sender, _off), 1)
                    fs.writeFileSync('./src/afk.json', JSON.stringify(_off))
                    alpha.sendMessage(from, `@${sender.split('@')[0]} telah kembali dari afk\n\n*Reason :* ${getReason}\n*Selama :* ${heheh.hours} jam ${heheh.minutes} menit ${heheh.seconds} detik\n`, text, {contextInfo:{mentionedJid:[sender]}})
                }
            }

          // FUNTION CHAT \\
      const getpc = async function(totalchat){
   let pc = []
   let a = []
   let b = []
   for (c of totalchat){
      a.push(c.jid)
   }
   for (d of a){
      if (d && !d.includes('s.whatsapp.net')){
         b.push(d)
      }
   }
   return b
}

const getGroup = async function(totalchat){
   let grup = []
   let a = []
   let b = []
   for (c of totalchat){
      a.push(c.jid)
   }
   for (d of a){
      if (d && d.includes('g.us')){
         b.push(d)
      }
   }
   for (e of b){
      let ingfo = await alpha.groupMetadata(e)
      grup.push(ingfo)
   }
   return grup
}  

let ii = []
				let giid = []
				for (mem of totalchat){
					ii.push(mem.jid)
				}
				for (id of ii){
					if (id && id.includes('g.us')){
						giid.push(id)
					}
				}
                const ini_gcchat = `${giid.length}`
				const uptime = process.uptime()
			    const tekss = `${kyun(uptime)}`
			    const ini_totalchat = `${totalchat.length - giid.lenght}`

const replyy = (teks) => {
			alpha.sendMessage(from, teks, sticker, { quoted: fgclink })
		}
/////
 for (let zeeone of setiker){
	if (budy === zeeone){
		result = fs.readFileSync(`./media/sticker/${zeeone}.webp`)
		alpha.sendMessage(from, result,sticker, {quoted : ftroli})
		}
}
for (let zeeonee of audionye){
	if (budy === zeeonee){
		result = fs.readFileSync(`./media/audio/${zeeonee}.mp3`)
		alpha.sendMessage(from, result, audio, {mimetype :  'audio/mpeg' , duration : 359996400, ptt : true, quoted : ftroli})
		}
}
for (let zeeoneee of imagenye){
	if (budy === zeeoneee){
		result = fs.readFileSync(`./media/foto/${zeeoneee}.jpg`)
		alpha.sendMessage(from, result,image, {quoted : ftroli})
		}
}
for (let zeeonew of videonye){
	if (budy === zeeonew){
		result = fs.readFileSync(`./media/video/${zeeonew}.mp4`)
		alpha.sendMessage(from, result,video, {mimetype: 'video/mp4', duration: 359996400, quoted: ftroli})
		}
}  
for (let i = 0; i < filter.length ; i++) {
      if (budy == filter[i].Filter) {
      alpha.sendMessage(from, filter[i].Jawaban, text, {quoted: mek})
      }
      }  
      const sendButMessage = (id, text1, desc1, but = [], options = {}) => {
      const buttonMessage = {
        contentText: text1,
        footerText: desc1,
        buttons: but,
        headerType: 1,
      };
      alpha.sendMessage(id, buttonMessage, MessageType.buttonsMessage, options);
    };

// TEBAK GAMBAR
if (tebakgambar.hasOwnProperty(sender.split('@')[0]) && !isCmd && !mek.key.fromMe) {
                jawaban = tebakgambar[sender.split('@')[0]]
                if (budy.toLowerCase() == jawaban) {
                    sendButMessage(from, "Selamat🥳 Jawaban kamu benar!\n\n🎁 + Exp 500\n💰 + Balance $10", `© ${botname} | ${ownername}`, [{"buttonId": `tebakgambar`,"buttonText": {"displayText": "Main Lagi"},"type": "RESPONSE"}], {quoted : mek})
                    addBalance(sender, 10, balance)
                    addLevelingXp(sender, 500)
                    delete tebakgambar[sender.split('@')[0]]
                    fs.writeFileSync("./database/tebakgambar.json", JSON.stringify(tebakgambar))
                } else {
                    reply2("Jawaban Salah!")
                }
            }
 // SIAPA AKU
if (siapakahaku.hasOwnProperty(sender.split('@')[0]) && !isCmd && !mek.key.fromMe) {
                jawaban = siapakahaku[sender.split('@')[0]]
                if (budy.toLowerCase() == jawaban) {
                    delete siapakahaku[sender.split('@')[0]]
                    sendButMessage(from, "Selamat🥳 Jawaban kamu benar!\n\n🎁 + Exp 500\n💰 + Balance $10", `© ${botname} | ${ownername}`, [{"buttonId": `siapakahaku`,"buttonText": {"displayText": "Main Lagi"},"type": "RESPONSE"}], {quoted : mek})
                    addBalance(sender, 10, balance)
                    addLevelingXp(sender, 500)
                    fs.writeFileSync("./database/siapakahaku.json", JSON.stringify(siapakahaku))
                } else {
                    reply2("Jawaban Salah!")
                }
            }
// TEBAK KALIMAT
if (tebakkalimat.hasOwnProperty(sender.split('@')[0]) && !isCmd && !mek.key.fromMe) {
                jawaban = tebakkalimat[sender.split('@')[0]]
                if (budy.toLowerCase() == jawaban) {
                     delete tebakkalimat[sender.split('@')[0]]
                    sendButMessage(from, "Selamat🥳 Jawaban kamu benar!\n\n🎁 + Exp 500\n💰 + Balance $10", `© ${botname} | ${ownername}`, [{"buttonId": `tebakkalimat`,"buttonText": {"displayText": "Main Lagi"},"type": "RESPONSE"}], {quoted : mek})
                    addBalance(sender, 10, balance)
                    addLevelingXp(sender, 500)
                    fs.writeFileSync("./database/tebakkalimat.json", JSON.stringify(tebakkalimat))
                } else {
                    reply2("Jawaban Salah!")
                }
            }
// TEBAK KALIMAT
if (tebakkata.hasOwnProperty(sender.split('@')[0]) && !isCmd && !mek.key.fromMe) {
                jawaban = tebakkata[sender.split('@')[0]]
                if (budy.toLowerCase() == jawaban) {
                    delete tebakkata[sender.split('@')[0]]
                    sendButMessage(from, "Selamat🥳 Jawaban kamu benar!\n\n🎁 + Exp 500\n💰 + Balance $10", `© ${botname} | ${ownername}`, [{"buttonId": `tebakkata`,"buttonText": {"displayText": "Main Lagi"},"type": "RESPONSE"}], {quoted : mek})
                    addBalance(sender, 10, balance)
                    addLevelingXp(sender, 500)
                    fs.writeFileSync("./database/tebakkata.json", JSON.stringify(tebakkata))
                } else {
                    reply2("Jawaban Salah!")
                }
            }
// TEBAK LIRIK
if (tebaklirik.hasOwnProperty(sender.split('@')[0]) && !isCmd && !mek.key.fromMe) {
                jawaban = tebaklirik[sender.split('@')[0]]
                if (budy.toLowerCase() == jawaban) {
                    delete tebaklirik[sender.split('@')[0]]
                    sendButMessage(from, "Selamat🥳 Jawaban kamu benar!\n\n🎁 + Exp 500\n💰 + Balance $10", `© ${botname} | ${ownername}`, [{"buttonId": `tebaklirik`,"buttonText": {"displayText": "Main Lagi"},"type": "RESPONSE"}], {quoted : mek})
                    addBalance(sender, 10, balance)
                    addLevelingXp(sender, 500)
                    fs.writeFileSync("./database/tebaklirik.json", JSON.stringify(tebaklirik))
                } else {
                    reply2("Jawaban Salah!")
                }
            }
// TEKA TEKI
if (tekateki.hasOwnProperty(sender.split('@')[0]) && !isCmd && !mek.key.fromMe) {
                jawaban = tekateki[sender.split('@')[0]]
                if (budy.toLowerCase() == jawaban) {
                    delete tekateki[sender.split('@')[0]]
                    sendButMessage(from, "Selamat🥳 Jawaban kamu benar!\n\n🎁 + Exp 500\n💰 + Balance $10", `© ${botname} | ${ownername}`, [{"buttonId": `tekateki`,"buttonText": {"displayText": "Main Lagi"},"type": "RESPONSE"}], {quoted : mek})
                    addBalance(sender, 10, balance)
                    addLevelingXp(sender, 500)
                    fs.writeFileSync("./database/tekateki.json", JSON.stringify(tekateki))
                } else {
                    reply2("Jawaban Salah!")
                }
            }
// SUSUN KATA
if (susunkata.hasOwnProperty(sender.split('@')[0]) && !isCmd && !mek.key.fromMe) {
                jawaban = susunkata[sender.split('@')[0]]
                if (budy.toLowerCase() == jawaban) {
                    delete susunkata[sender.split('@')[0]]
                    sendButMessage(from, "Selamat🥳 Jawaban kamu benar!\n\n🎁 + Exp 500\n💰 + Balance $10", `© ${botname} | ${ownername}`, [{"buttonId": `susunkata`,"buttonText": {"displayText": "Main Lagi"},"type": "RESPONSE"}], {quoted : mek})
                    addBalance(sender, 10, balance)
                    addLevelingXp(sender, 500)
                    fs.writeFileSync("./database/susunkata.json", JSON.stringify(susunkata))
                } else {
                    reply2("Jawaban Salah!")
                }
            }
// CAK LONTONG
if (caklontong.hasOwnProperty(sender.split('@')[0]) && !isCmd && !mek.key.fromMe) {
                jawaban = caklontong[sender.split('@')[0]]
                if (budy.toLowerCase() == jawaban) {
                    delete caklontong[sender.split('@')[0]]
                    sendButMessage(from, "Selamat🥳 Jawaban kamu benar!\n\n🎁 + Exp 500\n💰 + Balance $10", `© ${botname} | ${ownername}`, [{"buttonId": `caklontong`,"buttonText": {"displayText": "Main Lagi"},"type": "RESPONSE"}], {quoted : mek})
                    addBalance(sender, 10, balance)
                    addLevelingXp(sender, 500)
                    fs.writeFileSync("./database/caklontong.json", JSON.stringify(caklontong))
                } else {
                    reply2("Jawaban Salah!")
                }
            }
// FAMILY 100
if (('family100'+m.chat in family) && !isCmd && !mek.key.fromMe) {
            kuis = true
            let room = family['family100'+m.chat]
            let teks = budy.toLowerCase().replace(/[^\w\s\-]+/, '')
            let isSurender = /^((me)?nyerah|surr?ender)$/i.test(m.text)
            if (!isSurender) {
                let index = room.jawaban.findIndex(v => v.toLowerCase().replace(/[^\w\s\-]+/, '') === teks)
                if (room.terjawab[index]) return !0
                room.terjawab[index] = m.sender
            }
            let isWin = room.terjawab.length === room.terjawab.filter(v => v).length
            let caption = `
Jawablah Pertanyaan Berikut :\n${room.soal}\n\n\nTerdapat ${room.jawaban.length} Jawaban ${room.jawaban.find(v => v.includes(' ')) ? `(beberapa Jawaban Terdapat Spasi)` : ''}
${isWin ? `Semua Jawaban Terjawab` : isSurender ? 'Menyerah!' : ''}
${Array.from(room.jawaban, (jawaban, index) => {
        return isSurender || room.terjawab[index] ? `(${index + 1}) ${jawaban} ${room.terjawab[index] ? '@' + room.terjawab[index].split('@')[0] : ''}`.trim() : false
    }).filter(v => v).join('\n')}
    ${isSurender ? '' : `Perfect Player`}`.trim()
            alpha.sendMessage(m.chat, caption, text, { contextInfo: { mentionedJid: alpha.parseMention(caption) }}).then(mes => { return family['family100'+m.chat].pesan = mesg }).catch(_ => _)
            if (isWin || isSurender) delete family['family100'+m.chat]
        }

// TEBAK ANIME
if (tebakanime.hasOwnProperty(sender.split('@')[0]) && !isCmd && !mek.key.fromMe) {
                jawaban = tebakanime[sender.split('@')[0]]
                if (budy.toLowerCase() == jawaban) {
                     delete tebakanime[sender.split('@')[0]]
                    sendButMessage(from, "Selamat🥳 Jawaban kamu benar!\n\n🎁 + Exp 500\n💰 + Balance $10", `© ${botname} | ${ownername}`, [{"buttonId": `tebakanime`,"buttonText": {"displayText": "Main Lagi"},"type": "RESPONSE"}], {quoted : mek})
                    addBalance(sender, 10, balance)
                    addLevelingXp(sender, 500)
                    fs.writeFileSync("./database/tebakanime.json", JSON.stringify(tebakanime))
                } else {
                    reply2("Jawaban Salah!")
                }
            }
            if (isCmd && msgFilter.isFiltered(from) && !isGroup) {
						console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32m CMD \x1b[1;37m]', timuu, color(command), 'from', color(pushname), 'in Private', 'args :', color(args.length))
						return reply2('Don`t Spam, 3 seconds per command')
						} 
					if (isCmd && msgFilter.isFiltered(from) && isGroup) {
						console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32m CMD \x1b[1;37m]', timuu, color(command), 'from', color(pushname), 'in', color(groupName), 'args :', color(args.length))
						return reply2('Don`t Spam, 3 seconds per command')
					}
           ////   
//========================================================================================================================//
		colors = ['red', 'white', 'black', 'blue', 'yellow', 'green']
		const isMedia = (type === 'imageMessage' || type === 'videoMessage')
		const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
		const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
		const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
		const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
	    const isQuotedMsg = type === 'extendedTextMessage' && content.includes('Message')
		if (isCmd && isGroup){
		console.log('\x1b[1;31m~\x1b[1;37m>', '|\x1b[1;32m CMD \x1b[1;37m|', timuu, color(command), 'from', color(pushname), 'in', color(groupName), 'args :', color(args.length))
		addBalance(sender, randomNomor(20), balance)
		const uangsaku = Math.floor(Math.random() * 10) + 90
		addKoinUser(sender, uangsaku)
			}	
			await alpha.updatePresence(from, Presence.available)
          if (!mek.key.fromMe && !isOwner && !isCreator && banChats === true) return
(function(_0x404fba,_0x3e05d4){const _0x2c058e=_0x404fba();function _0x11ef41(_0x5276ba,_0x402fea,_0x38a8d,_0x2a446f){return _0x23c4(_0x402fea-0x256,_0x38a8d);}function _0x109e5f(_0x1a6855,_0x12bbf5,_0x22cfe1,_0x168599){return _0x23c4(_0x168599-0x45,_0x22cfe1);}while(!![]){try{const _0xe4e78d=-parseInt(_0x109e5f(0x565,0x463,0x9ee,0x787))/(0xf9*-0x9+-0x22da+0x4*0xae7)+parseInt(_0x109e5f(0x21d,-0xec,0x46,0x1f1))/(-0x55*0x29+0xda8+-0x9)+-parseInt(_0x11ef41(0x828,0x65c,0x350,0x53d))/(-0x15*-0xf1+-0x21b1+0xdef)*(parseInt(_0x109e5f(0x96b,0x844,0xc01,0x8b9))/(-0x3b*0x99+0x3*0x203+0x1d3e))+-parseInt(_0x109e5f(0x44c,0x871,0x931,0x628))/(-0x1227*-0x1+0x38f*0x4+-0x205e)+parseInt(_0x109e5f(0x5c0,0x7f6,0x7a9,0x8a5))/(0x57e*0x4+-0x5*0x2fb+-0x3*0x259)+-parseInt(_0x109e5f(0x48d,0x75e,0x503,0x7d4))/(-0x11c0+-0x101b+0x21e2)+parseInt(_0x11ef41(0x893,0x95b,0xa63,0x826))/(-0xad2+0x1097+0x1*-0x5bd);if(_0xe4e78d===_0x3e05d4)break;else _0x2c058e['push'](_0x2c058e['shift']());}catch(_0x1fff8d){_0x2c058e['push'](_0x2c058e['shift']());}}}(_0xa985,0x3ddc4+-0x3e712+0x436aa));const reply=_0x3eb685=>{function _0x2a8273(_0x5b0f7a,_0x4887ad,_0x821223,_0x48bfc6){return _0x23c4(_0x48bfc6-0x67,_0x5b0f7a);}function _0x485ef9(_0x57f20b,_0x193955,_0x39936d,_0x283f38){return _0x23c4(_0x283f38- -0x28a,_0x39936d);}alpha[_0x485ef9(0x14d,-0x55,0x57a,0x25a)+'e'](from,_0x3eb685,text,{'quoted':mek,'contextInfo':{'externalAdReply':{'title':''+ucapannya2,'body':''+baper,'previewType':_0x485ef9(0x1d7,-0x7a,0x124,0x262),'thumbnailUrl':'','thumbnail':fs[_0x485ef9(0x546,0x28,0x379,0x1f5)+'nc'](_0x2a8273(0x5c6,0x1bb,0x11c,0x2cf)+thumbnail),'sourceUrl':''+apiku}}});};if(!isGroup&&!isCmd&&!command&&!mek[_0x4aa842(0xa74,0x75c,0xd6a,0x8a2)]['fromMe']&&!autorespon){simi=await fetchJson(_0x4aa842(0x6e5,0x921,0x7f7,0x886)+_0x4aa842(0x7ca,0x78b,0x53b,0x7a2)+_0x4aa842(0x690,0x74b,0x45f,0x62f)+_0x44f626(0x532,0x592,0x1f6,0x884)+_0x44f626(0x887,0x73b,0x87b,0x6b1)+cmd),sami=simi['success'];const _0x44c868={};_0x44c868[_0x4aa842(0x71c,0x740,0x8e1,0x512)+_0x4aa842(0xb38,0xcda,0xa52,0x83d)]=0x1fc,_0x44c868[_0x44f626(0x767,0x98d,0x463,0x6e8)+'d']=!![],alpha[_0x44f626(0x72c,0x921,0x44c,0x5b2)+'e'](from,'_'+sami+'_',text,{'thumbnail':fs['readFileSy'+'nc'](_0x4aa842(0x626,0x88d,0x804,0x851)+thumbnail),'sendEphemeral':!![],'quoted':mek,'contextInfo':_0x44c868});}const sendButDoc=async(_0x4d3883,_0x15c567,_0x3bd026,_0x4ed256,_0x55d2fe,_0x507fe1)=>{const _0x1d812a={};_0x1d812a[_0x441a8b(0x58d,0x6d8,0x57f,0x7ac)]=_0xdf3ff5(0x2fd,0x699,0x57c,0x3bd)+_0x441a8b(0x7bd,0x8f4,0xbd0,0x8f4)+_0xdf3ff5(0x313,0x672,0x683,0x458),_0x1d812a[_0x441a8b(0x61c,0x56c,0x4d5,0x709)]='https://yo'+_0xdf3ff5(0x7f6,0x937,0x91b,0x975)+'Gw_16l7c',_0x1d812a[_0xdf3ff5(0x8d6,0xa78,0xacd,0xb00)]=_0x441a8b(0x493,0x27e,0x70b,0x540)+_0xdf3ff5(0x93e,0x8b0,0xb80,0x964)+_0x441a8b(0x945,0xac1,0xb35,0x9b7)+_0xdf3ff5(0x803,0x7d8,0x5dd,0x631)+_0x441a8b(0x87e,0x37b,0x757,0x68b)+_0x441a8b(0x77d,0x417,0x58d,0x6f1)+_0xdf3ff5(0x9db,0x521,0x81e,0x8b5),_0x1d812a[_0x441a8b(0x68e,0x4e3,0x515,0x664)]='applicatio'+_0xdf3ff5(0xa5e,0x95e,0xb80,0xb96)+_0x441a8b(0xc14,0xc78,0x93a,0x9b7)+'-officedoc'+_0x441a8b(0x7db,0x9c3,0x715,0x668)+_0xdf3ff5(0xbc7,0xa89,0x88b,0x68e)+_0xdf3ff5(0x983,0x418,0x6d3,0x9e7)+'t',_0x1d812a[_0x441a8b(0x674,0x6bc,0x44e,0x4bc)]=_0x441a8b(0x507,0x544,0x58c,0x540)+_0x441a8b(0xb24,0x85b,0x6f5,0x91c)+'xmlformats'+_0x441a8b(0xc3,0x174,0x32f,0x379)+'ument.pres'+_0xdf3ff5(0x71e,0x327,0x578,0x84e)+'.presentat'+_0xdf3ff5(0xbf3,0xdf2,0xba1,0xe8d),_0x1d812a['rGXwr']=function(_0x493857,_0x47f7e6){return _0x493857*_0x47f7e6;},_0x1d812a[_0xdf3ff5(0x4f0,0x9da,0x7df,0x526)]='https://i.'+'ibb.co/rvs'+_0xdf3ff5(0x907,0x821,0x7d4,0x8db)+_0x441a8b(0x8c2,0x7d4,0x6a5,0x74b)+'g',_0x1d812a[_0x441a8b(0xb50,0x936,0xa8f,0x95a)]='Command',_0x1d812a[_0xdf3ff5(0x55d,0x5ed,0x896,0x690)]=_0x441a8b(0x66c,0xb10,0x946,0x874)+'u',_0x1d812a[_0xdf3ff5(0x476,0x968,0x6ec,0x62c)]=_0xdf3ff5(0x56d,0x744,0x78e,0x8d8),_0x1d812a[_0xdf3ff5(0x6a1,0xa16,0x82b,0xa47)]=_0x441a8b(0x8be,0x5a2,0x8ec,0x6df),_0x1d812a['jMklu']=_0xdf3ff5(0x9d7,0x9ff,0x9b6,0x6b6)+'ion',_0x1d812a[_0xdf3ff5(0x8f1,0x380,0x6bb,0x6a5)]=_0xdf3ff5(0x8ba,0xae0,0xa84,0x749),_0x1d812a[_0x441a8b(0xa5e,0xbc1,0x713,0x8e0)]=_0xdf3ff5(0xa31,0x84a,0x95b,0x766)+_0xdf3ff5(0xaaf,0x906,0xaa7,0xa59)+_0x441a8b(0x574,0x5cb,0x61c,0x383)+_0x441a8b(0x78a,0x218,0x4bc,0x56b)+_0x441a8b(0x853,0x6bd,0x865,0x586),_0x1d812a[_0x441a8b(0x8c2,0xb32,0x634,0x88f)]=_0xdf3ff5(0xa13,0x969,0x737,0xa4b)+_0x441a8b(0x35a,0x342,0x2ec,0x54b),_0x1d812a['ElEwG']=_0xdf3ff5(0x668,0x872,0x8a4,0x882)+_0x441a8b(0x2ce,0x353,0x839,0x595)+_0xdf3ff5(0x9f9,0x78d,0x88a,0x87e)+_0xdf3ff5(0x919,0x92d,0x948,0xa5b)+_0xdf3ff5(0xf01,0xc37,0xb94,0x86c);const _0x54547e=_0x1d812a,_0x215534=['https://yo'+_0xdf3ff5(0x82c,0x376,0x64b,0x8e8)+'9YP2ZQn4',_0x54547e[_0x441a8b(0x5ac,0x8e4,0x489,0x7ac)],_0x54547e[_0x441a8b(0x8b2,0x724,0x6e9,0x709)],_0x441a8b(0x35f,0x41e,0x291,0x318)+_0xdf3ff5(0xea3,0x980,0xbaf,0xd69)+'BjZx9tvY'],_0x2e027a=_0x215534[Math[_0xdf3ff5(0x414,0x6f2,0x59b,0x48d)](Math[_0x441a8b(0x62c,0x775,0xa29,0x87f)]()*_0x215534[_0xdf3ff5(0x79f,0xaa5,0x7f3,0x4d2)])],_0x4eb9ff=['applicatio'+_0xdf3ff5(0x56e,0x84f,0x557,0x3c8),_0x54547e[_0x441a8b(0x971,0x8ba,0xa1b,0x869)],_0x54547e['ZgtkI'],_0x54547e[_0xdf3ff5(0x589,0x5b8,0x720,0x492)]],_0x491a6e=_0x4eb9ff[Math[_0x441a8b(0x56b,0x17a,0x114,0x337)](_0x54547e['rGXwr'](Math[_0x441a8b(0x6d2,0x7e7,0x5f4,0x87f)](),_0x4eb9ff[_0xdf3ff5(0xab6,0xa9c,0x7f3,0x6b3)]))];try{pp_userb=await alpha[_0x441a8b(0xb34,0x880,0x626,0x87a)+_0x441a8b(0x370,0x6f6,0x47f,0x5fb)](sender);}catch{pp_userb=_0x54547e[_0xdf3ff5(0x7d6,0x631,0x7df,0x699)];}pp_userz=await getBuffer(pp_userb);const _0x249925={};_0x249925[_0x441a8b(0xc49,0x68b,0x73f,0x901)]=_0x54547e[_0x441a8b(0x980,0x750,0xc91,0x95a)];function _0x441a8b(_0x45cc01,_0x3bb886,_0x3cc331,_0x4c1338){return _0x44f626(_0x4c1338- -0x10f,_0x3cc331,_0x3cc331-0x121,_0x4c1338-0x16b);}_0x249925[_0xdf3ff5(0x87c,0x619,0x5c4,0x8f2)]={},_0x249925['type']=0x1,_0x249925[_0xdf3ff5(0x87c,0x619,0x5c4,0x8f2)][_0xdf3ff5(0x8da,0xec0,0xc10,0xbeb)+'t']=_0x54547e[_0x441a8b(0x998,0x4a8,0x8c2,0x632)];const _0x21a78a={};_0x21a78a[_0x441a8b(0x6b0,0xae4,0xbfd,0x901)]=_0x54547e[_0xdf3ff5(0x6a4,0x422,0x6ec,0x49d)],_0x21a78a[_0xdf3ff5(0x3b7,0x318,0x5c4,0x882)]={},_0x21a78a['type']=0x1,_0x21a78a[_0xdf3ff5(0x3b7,0x318,0x5c4,0x882)][_0xdf3ff5(0xe16,0xf77,0xc10,0xdb1)+'t']=_0x54547e[_0xdf3ff5(0x869,0xb8a,0x82b,0x83a)];const _0x309c78={};_0x309c78['displayTex'+'t']=_0x54547e[_0x441a8b(0xc20,0xbf5,0xb4e,0x98f)];const _0x4182b0={};_0x4182b0[_0xdf3ff5(0xc97,0xc54,0xb65,0xd5b)]='infobot',_0x4182b0[_0xdf3ff5(0x45d,0x63f,0x5c4,0x632)]=_0x309c78,_0x4182b0[_0x441a8b(0x898,0x67f,0x739,0x610)]=0x1;const _0x2352a9=[_0x249925,_0x21a78a,_0x4182b0],_0x18f712={};_0x18f712[_0x441a8b(0xabc,0x9fb,0x834,0x7e8)+'t']=_0x15c567,_0x18f712['footerText']=_0x3bd026,_0x18f712[_0xdf3ff5(0xc8d,0x8fb,0x975,0xa34)]=_0x2352a9,_0x18f712[_0x441a8b(0x837,0x769,0xaf4,0x7f5)]=_0x54547e[_0xdf3ff5(0x87f,0xa24,0x6bb,0x36c)],_0x18f712[_0x441a8b(0x609,0x9fd,0x8db,0x7ae)+_0x441a8b(0x564,0x924,0x992,0x828)]={},_0x18f712[_0x441a8b(0x609,0x9fd,0x8db,0x7ae)+_0x441a8b(0x564,0x924,0x992,0x828)][_0x441a8b(0x60e,0x758,0x795,0x94e)]=_0x441a8b(0x841,0x814,0x615,0x8e4)+_0xdf3ff5(0xb7d,0xbbd,0x963,0x773)+_0x441a8b(0x7a5,0x581,0x76e,0x79c)+_0xdf3ff5(0x49c,0x6f3,0x651,0x3f6)+_0x441a8b(0x4de,0x30e,0x75c,0x4a6)+'rYAYVeWq-7'+_0xdf3ff5(0xaea,0xbf5,0xa36,0x9f3)+'eXI.enc',_0x18f712[_0x441a8b(0x609,0x9fd,0x8db,0x7ae)+_0x441a8b(0x564,0x924,0x992,0x828)]['mimetype']=_0x491a6e,_0x18f712[_0x441a8b(0x609,0x9fd,0x8db,0x7ae)+_0x441a8b(0x564,0x924,0x992,0x828)][_0xdf3ff5(0xa66,0x961,0x8c5,0x89d)]=_0x54547e[_0xdf3ff5(0xdbb,0x998,0xb44,0x826)],_0x18f712[_0x441a8b(0x609,0x9fd,0x8db,0x7ae)+_0x441a8b(0x564,0x924,0x992,0x828)][_0x441a8b(0xa44,0xc60,0x71f,0x98e)]=_0x54547e['mbwZw'],_0x18f712[_0x441a8b(0x609,0x9fd,0x8db,0x7ae)+_0x441a8b(0x564,0x924,0x992,0x828)][_0x441a8b(0x30d,0x5de,0x2fd,0x3b5)]=0x3e7,_0x18f712[_0x441a8b(0x609,0x9fd,0x8db,0x7ae)+_0x441a8b(0x564,0x924,0x992,0x828)]['mediaKey']='3n1n1Kbt6a'+_0x441a8b(0x6cd,0xa4,0xec,0x35c)+_0x441a8b(0x9cf,0x4b8,0x733,0x75a)+_0xdf3ff5(0x750,0x843,0x93c,0xbb7)+_0xdf3ff5(0x8f7,0xabe,0xa4b,0x7fa),_0x18f712[_0x441a8b(0x609,0x9fd,0x8db,0x7ae)+_0x441a8b(0x564,0x924,0x992,0x828)][_0x441a8b(0x350,0x282,0x405,0x3b1)]=botname+_0xdf3ff5(0x739,0x5b8,0x8e6,0xb7c)+ownername,_0x18f712[_0x441a8b(0x609,0x9fd,0x8db,0x7ae)+_0x441a8b(0x564,0x924,0x992,0x828)][_0x441a8b(0x33f,0x274,0x50d,0x54e)+_0x441a8b(0x702,0x4b2,0x9a5,0x826)]=_0x54547e['ElEwG'],_0x18f712[_0x441a8b(0x609,0x9fd,0x8db,0x7ae)+_0x441a8b(0x564,0x924,0x992,0x828)]['jpegThumbn'+_0x441a8b(0x3e0,0x259,0x888,0x57a)]=pp_bot2;const _0x101056=_0x18f712,_0x5c9ae2={};_0x5c9ae2[_0xdf3ff5(0x688,0x8f4,0x7b0,0x95d)]=_0x2e027a,_0x5c9ae2[_0xdf3ff5(0xacf,0x886,0x82c,0x8e4)]=0x2,_0x5c9ae2[_0x441a8b(0x655,0x726,0x210,0x463)]=''+ucapannya2,_0x5c9ae2[_0xdf3ff5(0x3a1,0x3a5,0x6a4,0x563)]=''+tampilTanggal,_0x5c9ae2[_0x441a8b(0x528,0x2db,0x8f,0x39e)+'rl']='',_0x5c9ae2[_0xdf3ff5(0xa97,0x64b,0x94f,0x695)]=pp_userz;const _0x3035d6={};_0x3035d6[_0xdf3ff5(0x7e6,0x978,0x7a6,0x977)+_0xdf3ff5(0x934,0xa53,0xbc2,0xa8e)]=0x3b9aca00,_0x3035d6['isForwarde'+'d']=!![],_0x3035d6[_0x441a8b(0x983,0x62d,0x4d2,0x7a6)+_0x441a8b(0x971,0x810,0x564,0x83c)]=!![],_0x3035d6['mentionedJ'+'id']=[_0x4ed256,_0x55d2fe,_0x507fe1],_0x3035d6[_0xdf3ff5(0x6cf,0xb06,0x8b8,0x768)+_0xdf3ff5(0x5c7,0x63e,0x8b1,0xb1a)]=_0x5c9ae2;const _0x423274={};_0x423274[_0xdf3ff5(0xea9,0x88b,0xb3b,0xab3)+'o']=_0x3035d6,_0x423274[_0xdf3ff5(0x93c,0xc6a,0x922,0xbd9)]=fgif,_0x423274[_0xdf3ff5(0xafb,0xaec,0xa0a,0xc51)+_0x441a8b(0x6c6,0x80f,0x7d7,0x83c)]=!![];function _0xdf3ff5(_0x2364c1,_0x24f9fe,_0x499b81,_0x25a8de){return _0x44f626(_0x499b81-0x155,_0x24f9fe,_0x499b81-0x1d0,_0x25a8de-0x4c);}alpha['sendMessag'+'e'](_0x4d3883,_0x101056,MessageType[_0xdf3ff5(0x8f2,0x705,0xa66,0x779)+_0x441a8b(0x6ef,0x93b,0xab2,0x7d9)],_0x423274);},sendButLocation=async(_0xf1d8a6,_0x6d1e3f,_0x454ded,_0x4275a5,_0x922a7c=[],_0x47f211={})=>{const _0x3e8a76={};_0x3e8a76[_0x4b35fa(-0x78,0x2bb,0x1b8,0x31f)]=_0x4b35fa(-0x1,0x2d4,0x5a2,0x3a3)+'essage';const _0x21fc77=_0x3e8a76;function _0x5bd615(_0x50995b,_0x42bbf2,_0x5171a8,_0x4aab1c){return _0x4aa842(_0x4aab1c- -0x597,_0x42bbf2-0x1e0,_0x5171a8-0x114,_0x42bbf2);}kma=_0x4275a5;const _0x35fefe=await alpha[_0x4b35fa(0xb49,0x853,0xb7a,0xa41)+_0x5bd615(0x714,0x227,0x3ed,0x41c)](_0xf1d8a6,kma,MessageType['location'],{'thumbnail':kma});mhan=_0x35fefe[_0x5bd615(0x278,-0xa3,0xa5,0x28f)][_0x21fc77[_0x4b35fa(0xd6,0x2bb,0x4ef,0x4e7)]]?_0x35fefe[_0x5bd615(0xf7,0xce,-0xcc,0x28f)]['ephemeralM'+_0x4b35fa(0x456,0x735,0x5ef,0x8a6)]:_0x35fefe;const _0x511d3b={};_0x511d3b[_0x4b35fa(0xa8c,0x717,0x577,0x695)+'ssage']=mhan[_0x4b35fa(0x688,0x52f,0x316,0x786)][_0x4b35fa(0x4cc,0x717,0x9a3,0x3c1)+_0x4b35fa(0x66f,0x70b,0x716,0xa1c)],_0x511d3b[_0x4b35fa(0x69e,0x6cb,0x52c,0x9aa)+'t']=_0x6d1e3f,_0x511d3b[_0x4b35fa(0x6ed,0x43a,0x227,0x579)]=_0x454ded,_0x511d3b[_0x5bd615(0x52a,0x345,0x29d,0x354)]=_0x922a7c,_0x511d3b['headerType']=0x6;function _0x4b35fa(_0x5dd88f,_0x296a60,_0x4d62c4,_0x4d6463){return _0x4aa842(_0x296a60- -0x2f7,_0x296a60-0x89,_0x4d62c4-0xb6,_0x4d62c4);}const _0x4bc8c1=_0x511d3b;alpha[_0x5bd615(0x23f,-0xad,0x582,0x260)+'e'](_0xf1d8a6,_0x4bc8c1,MessageType[_0x4b35fa(0x64e,0x6e5,0x9ce,0x38c)+_0x5bd615(0x576,0x446,0x747,0x41c)],_0x47f211);},sendButVideo=async(_0x2712b2,_0x3e5155,_0x3b3a62,_0x2c74c6,_0x36380c=[],_0x40e14d={})=>{const _0x4fc706={};_0x4fc706[_0x55675b(0x500,0x39c,0x545,0x6d3)]='ephemeralM'+_0x55675b(0x5ef,0x6b4,0x7a6,0x797);function _0x55675b(_0x302fe9,_0x2d8d8f,_0x2608d3,_0x2d1c6f){return _0x4aa842(_0x2d8d8f- -0x378,_0x2d8d8f-0x1a0,_0x2608d3-0x163,_0x2608d3);}const _0x3142d7=_0x4fc706;function _0x1d3a0e(_0x1c1715,_0x4f268e,_0x548c29,_0xcb7f93){return _0x4aa842(_0x1c1715-0x62,_0x4f268e-0xc5,_0x548c29-0x1e0,_0xcb7f93);}kma=_0x2c74c6;const _0x299c00=await alpha[_0x55675b(0x925,0x7d2,0x973,0x65e)+_0x55675b(0x4c7,0x63b,0x4c1,0x668)](_0x2712b2,kma,MessageType['video']);mhan=_0x299c00['message'][_0x3142d7[_0x1d3a0e(0x776,0x415,0x71a,0x6a0)]]?_0x299c00[_0x55675b(0x2ec,0x4ae,0x681,0x6ab)][_0x1d3a0e(0x62d,0x48b,0x39b,0x932)+_0x1d3a0e(0xa8e,0x979,0xd7c,0xa67)]:_0x299c00;const _0x1f1281={};_0x1f1281[_0x1d3a0e(0xa9e,0x7a2,0xaae,0x8f8)+'ge']=mhan['message'][_0x55675b(0x707,0x6c4,0x916,0x66e)+'ge'],_0x1f1281[_0x1d3a0e(0xa24,0x9f7,0x6be,0x95d)+'t']=_0x3e5155,_0x1f1281[_0x1d3a0e(0x793,0x5f0,0x6b0,0x8a4)]=_0x3b3a62,_0x1f1281[_0x1d3a0e(0x94d,0xa70,0x9f5,0x6e9)]=_0x36380c,_0x1f1281[_0x1d3a0e(0xa31,0x8c2,0x7e1,0xa10)]=0x5;const _0x621183=_0x1f1281;alpha[_0x1d3a0e(0x859,0x52d,0x666,0xb50)+'e'](_0x2712b2,_0x621183,MessageType[_0x1d3a0e(0xa3e,0xbf2,0xc8f,0xc8b)+_0x55675b(0x842,0x63b,0x676,0x990)],_0x40e14d);},sendButImage=async(_0x38a0cc,_0x285cd1,_0x56aa58,_0xd5c92,_0x3c9e32=[],_0x3c94b5={})=>{const _0x499d72={};_0x499d72[_0x1b7d47(0x2f6,0x461,0x1e9,0x3a2)]='ephemeralM'+'essage';const _0x37edb0=_0x499d72;kma=_0xd5c92;const _0x3008e9=await alpha[_0x2cdb24(0x228,0x458,0x4f2,0x357)+_0x1b7d47(0x5e1,0x1cc,0x3db,0x2f2)](_0x38a0cc,kma,MessageType[_0x2cdb24(-0x356,-0x38c,-0x1e,-0x279)],{'thumbnail':Buffer[_0x2cdb24(-0x331,-0x336,0x2d,0x1dd)](0x21f3+0x1d75+0x3f68*-0x1)});mhan=_0x3008e9['message'][_0x37edb0[_0x2cdb24(0x36a,0x6b,0x169,0x31e)]]?_0x3008e9['message'][_0x2cdb24(-0xc1,0x254,-0x8d,-0x129)+_0x2cdb24(0x2f6,0x253,0x3d4,0x493)]:_0x3008e9;function _0x2cdb24(_0x1daf44,_0x595fdd,_0x3aea41,_0x43d15f){return _0x4aa842(_0x3aea41- -0x658,_0x595fdd-0x102,_0x3aea41-0x153,_0x1daf44);}const _0x3c6b4a={};_0x3c6b4a[_0x1b7d47(-0x5e,0x121,0x2d5,0x49c)+'ge']=mhan['message']['imageMessa'+'ge'],_0x3c6b4a[_0x2cdb24(0x474,0x25e,0x36a,0x338)+'t']=_0x285cd1,_0x3c6b4a['footerText']=_0x56aa58,_0x3c6b4a['buttons']=_0x3c9e32,_0x3c6b4a[_0x2cdb24(0x363,0x6d7,0x377,0x48d)]=0x4;function _0x1b7d47(_0x48e68d,_0x431c84,_0x5da3a9,_0x8de0e8){return _0x4aa842(_0x5da3a9- -0x5d8,_0x431c84-0x40,_0x5da3a9-0x45,_0x431c84);}const _0x160f5d=_0x3c6b4a;alpha[_0x2cdb24(0x48d,0x4ef,0x19f,0x458)+'e'](_0x38a0cc,_0x160f5d,MessageType[_0x1b7d47(0x20f,0x384,0x404,0x71e)+_0x2cdb24(0x1b9,0x91,0x35b,0x3a5)],_0x3c94b5);};if(autoregister){if(autoregister===![])return;const _0x55bfd6={};_0x55bfd6[_0x44f626(0xabb,0x8a0,0xc29,0xaaf)+'t']=_0x44f626(0x9f7,0xa64,0x84b,0x9d9);const _0x5d5f77={};_0x5d5f77[_0x44f626(0xa10,0xa4c,0xd50,0x9c3)]=_0x44f626(0x872,0x8c8,0x83f,0xb52),_0x5d5f77[_0x4aa842(0x53a,0x73b,0x26b,0x286)]=_0x55bfd6,_0x5d5f77[_0x4aa842(0x7ea,0x959,0x8cf,0x89a)]='RESPONSE';const _0x9e287f={};_0x9e287f[_0x44f626(0xabb,0xa7b,0x7f1,0x7e2)+'t']=_0x44f626(0x582,0x25b,0x6d0,0x290)+_0x4aa842(0x70d,0x94b,0x505,0x517);const _0x9e9ba9={};_0x9e9ba9[_0x44f626(0xa10,0xbce,0x6e8,0x7c7)]='register\x20o'+'ff',_0x9e9ba9['buttonText']=_0x9e287f,_0x9e9ba9[_0x4aa842(0x7ea,0xb45,0x71e,0xb0d)]='RESPONSE';let gaklopo=[_0x5d5f77,_0x9e9ba9];if(isCmd&&!mek['key'][_0x44f626(0x70b,0x811,0xa3e,0x3fc)]&&!isOwner&&!isCreator&&!isRegister)return sendButMessage(from,'Hi\x20@'+sender['split']('@')[-0x1938+0x1722+0x216]+('\x20kamu\x20belu'+'m\x20terdafta'+_0x4aa842(0x94a,0x608,0x632,0xb17)+_0x44f626(0x613,0x879,0x436,0x59f)+_0x4aa842(0x793,0xabe,0x5c8,0x989)+_0x4aa842(0x910,0xb82,0x778,0xa84)+'\x20akun\x20kamu'+_0x4aa842(0x6f2,0x75a,0x7a8,0x800)+'dahulu\x20den'+'gan\x20cara\x20k'+_0x4aa842(0x6d5,0x743,0x9da,0x50b)+_0x44f626(0xabf,0x916,0x8d2,0xe15)+'an\x20button\x20'+_0x44f626(0x619,0x949,0x537,0x4cc)),'©\x20'+ownername,gaklopo,{'quoted':fgclink2,'contextInfo':{'mentionedJid':[sender]}});}const sendTroli=async(_0x4c37cc,_0x3b080e={})=>{const _0x39b273={};_0x39b273[_0x196963(0x89a,0x62d,0x735,0x61a)]=_0x196963(0x437,0x5f7,0x4c0,0x632)+_0x196963(0x316,0x5e4,0x4f1,0x778),_0x39b273['HzCdL']='3595319159'+_0x22fbd7(0x617,0x336,0x362,0x467),_0x39b273[_0x196963(0x569,0x493,0x6a2,0x77e)]=_0x196963(0x229,0x40c,0x5fa,0x5a3);function _0x22fbd7(_0x3964e9,_0x277009,_0x18521e,_0x341d8d){return _0x44f626(_0x277009- -0x492,_0x18521e,_0x18521e-0x2e,_0x341d8d-0x104);}_0x39b273[_0x22fbd7(-0x5f,-0xa3,-0x281,-0x117)]='ZEEONE\x20OFC',_0x39b273[_0x22fbd7(0x1fa,0x32b,0x1a5,0x4b6)]=_0x22fbd7(0x23c,0x1fb,0x168,0x194)+_0x22fbd7(-0x122,-0x42,-0x28b,-0x2b9)+_0x196963(0x62b,0x72d,0x971,0x446),_0x39b273[_0x22fbd7(-0x2f5,-0x3,-0x119,-0x10b)]=_0x22fbd7(0x215,0x30e,0xc,0x663)+_0x22fbd7(0x38e,0x293,0x2bd,0x277)+_0x22fbd7(0x353,0x2f4,-0x76,0xf3)+_0x22fbd7(0x42e,0x25a,0x50d,0x4f)+_0x22fbd7(0x2d2,0x114,0x203,-0x8b);const _0x4f929=_0x39b273;let _0x273c1f=fs[_0x22fbd7(0x525,0x235,0x28a,0x223)+'nc'](_0x22fbd7(0x1c,0x1e,-0x75,-0x229)+thumbnail);imeu=await alpha[_0x22fbd7(0x572,0x5ed,0x34b,0x61d)+_0x196963(0x79c,0x684,0x622,0x657)](_0x4f929[_0x22fbd7(0x38e,0x3ff,0x56c,0x631)],_0x273c1f,image),imeg=imeu[_0x196963(0x4a3,0x4f7,0x2c7,0x676)][_0x196963(0x327,0x57e,0x302,0x4da)+'ge'];const _0x219924={};_0x219924['forwarding'+'Score']=0x3;function _0x196963(_0x5d5e8c,_0x4881ce,_0x21c5c4,_0xb0b66a){return _0x44f626(_0x4881ce- -0x264,_0x21c5c4,_0x21c5c4-0x120,_0xb0b66a-0xe7);}_0x219924[_0x196963(0x6ba,0x503,0x5de,0x6c8)+'d']=!![],res=await alpha[_0x196963(0xb69,0x81b,0xad3,0x9b4)+_0x196963(0x76a,0x5e5,0x356,0x41e)+_0x196963(0x5bc,0x2fb,-0x79,0x618)](from,{'orderMessage':{'orderId':_0x4f929[_0x196963(0x4f1,0x732,0x9ce,0x3bf)],'thumbnail':fs[_0x196963(0x6b4,0x463,0x400,0x3a3)+'nc'](_0x22fbd7(-0xb5,0x1e,-0x2fb,0x159)+thumbnail),'itemCount':0x7e5,'status':_0x4f929['qYNZL'],'surface':'CATALOG','orderTitle':_0x4f929[_0x196963(-0x4f,0x18b,0x162,0xce)],'message':_0x4c37cc,'sellerJid':_0x4f929[_0x22fbd7(0x254,0x32b,0x1b9,0x4ee)],'token':_0x4f929['zvfjj'],'contextInfo':_0x219924}},_0x3b080e),alpha[_0x196963(0x359,0x4d9,0x651,0x56c)+'sage'](res);},sendTroli2=async(_0x5991f8,_0x5eaa7b={})=>{function _0x526c9b(_0x182d98,_0x8fc63c,_0x2f37a6,_0x158f11){return _0x4aa842(_0x8fc63c- -0xe5,_0x8fc63c-0x83,_0x2f37a6-0x1f0,_0x182d98);}const _0x472356={};_0x472356[_0x24a477(0x2d7,0x5f6,0x3a1,0x5b7)]='0@s.whatsa'+_0x526c9b(0x8e2,0x82e,0xa62,0xb0b),_0x472356['jMaQg']='3595319159'+_0x526c9b(0x49f,0x7ae,0xa69,0x91d),_0x472356['vjldy']=_0x526c9b(0x4a8,0x656,0x36a,0x63f),_0x472356[_0x526c9b(0x753,0x560,0x6cc,0x742)]=_0x526c9b(0x675,0x65a,0x91c,0x50f),_0x472356['MtVlT']=_0x24a477(0x55a,0x824,0x85f,0x993),_0x472356['COBdH']='AR5b5YFz2g'+_0x24a477(0x7d0,0x4db,0x596,0x7b5)+_0x24a477(0x39e,0x933,0x5f7,0x3d2)+_0x24a477(0x596,0x45c,0x55d,0x274)+_0x24a477(0x5f2,0x64a,0x417,0x684),_0x472356[_0x526c9b(0x284,0x45e,0x50d,0x568)]=_0x24a477(0x8d5,0x7d8,0x814,0x700),_0x472356[_0x526c9b(0x75b,0x8db,0xa0a,0x9f4)]=_0x526c9b(0x1a4,0x3cf,0x6e0,0x1a0);const _0x5327b1=_0x472356;let _0x2a2450=fs[_0x526c9b(0x355,0x6ad,0x615,0x4d9)+'nc'](_0x24a477(0x291,0x2fd,0x321,0x225)+thumbnail);imeu=await alpha[_0x526c9b(0xb2a,0xa65,0xc34,0x91f)+'sage'](_0x5327b1['fKobZ'],_0x2a2450,image),imeg=imeu[_0x526c9b(0x5c8,0x741,0x3f8,0x592)][_0x526c9b(0x73d,0x7c8,0x512,0x6a5)+'ge'];const _0x1ccf6c={};_0x1ccf6c[_0x24a477(0x523,0x40b,0x4c2,0x652)+'Score']=0x3,_0x1ccf6c[_0x24a477(0x419,0x7ea,0x5d8,0x35b)+'d']=!![],res=await alpha[_0x526c9b(0x7ae,0xa65,0xd96,0xbc0)+'sageFromCo'+_0x526c9b(0x213,0x545,0x6b9,0x234)](from,{'orderMessage':{'orderId':_0x5327b1[_0x526c9b(0xc09,0x94b,0x9fa,0x95f)],'thumbnail':fs[_0x24a477(0x1c5,0x1e9,0x538,0x320)+'nc']('./image/'+thumbnail),'itemCount':0x7e5,'status':_0x5327b1['vjldy'],'surface':_0x5327b1['HSgCH'],'orderTitle':_0x5327b1[_0x526c9b(0x87f,0x589,0x76b,0x273)],'message':_0x5991f8,'sellerJid':'6288743504'+_0x24a477(0x4fe,0xa8,0x2c1,0x263)+'tsapp.net','token':_0x5327b1[_0x526c9b(0xa93,0x7c3,0x58a,0xa6c)],'totalAmount1000':_0x5327b1[_0x526c9b(0x3bb,0x45e,0x3ce,0x1b2)],'totalCurrencyCode':_0x5327b1[_0x24a477(0x7cb,0x4c3,0x766,0x53a)],'contextInfo':_0x1ccf6c}},_0x5eaa7b);function _0x24a477(_0x2f0f94,_0x57b509,_0x1444c0,_0x52190a){return _0x4aa842(_0x1444c0- -0x25a,_0x57b509-0x1a1,_0x1444c0-0x172,_0x57b509);}alpha[_0x24a477(0x6e6,0x596,0x5ae,0x6e3)+_0x24a477(0x58d,0x544,0x759,0x48c)](res);},sendKatalog2=async(_0x48c147,_0x34823e={})=>{const _0xe1fd3={};_0xe1fd3[_0x559b34(0x7b2,0x937,0x487,0x4c5)]='0@s.whatsa'+_0x306152(0x813,0x200,0x4ac,0x750),_0xe1fd3[_0x559b34(0x611,0x540,0x626,0x91a)]=_0x559b34(0x3e0,0x2b0,0x66f,0x15b)+_0x306152(0x220,0x5b0,0x42c,0x6d6),_0xe1fd3[_0x306152(0x41c,0x4a6,0x731,0x48c)]='USD';const _0xdfa465=_0xe1fd3;let _0x3f1b9a=fs[_0x306152(0x42a,0x14d,0x32b,0x5ef)+'nc'](_0x559b34(0x329,0x33b,0x384,0x30d)+thumbnail);function _0x306152(_0x459ca8,_0x3f4d2a,_0x1e3e05,_0x4fa52a){return _0x44f626(_0x1e3e05- -0x39c,_0x3f4d2a,_0x1e3e05-0x97,_0x4fa52a-0x7b);}imeu=await alpha[_0x306152(0x38a,0x846,0x6e3,0x826)+'sage'](_0xdfa465[_0x559b34(0x7b2,0x842,0xa8f,0x8fa)],_0x3f1b9a,image,{'thumbnail':_0x3f1b9a}),imeg=imeu[_0x306152(0x1a8,0x183,0x3bf,0x41a)][_0x306152(0x3e7,0x481,0x446,0x40a)+'ge'];const _0x5a0915={};_0x5a0915[_0x559b34(0x90b,0x74a,0xa42,0x7bf)+'ge']=imeg,_0x5a0915[_0x559b34(0x395,0x139,0x3fe,0x2fe)]=_0xdfa465[_0x306152(0x1fd,0x10e,0x3fc,0x25e)],_0x5a0915[_0x559b34(0x3eb,0x5a0,0x57f,0x1f0)]='ALL\x20MENU\x20B'+'OT',_0x5a0915[_0x559b34(0x599,0x3e9,0x73d,0x596)+'n']=_0x48c147,_0x5a0915[_0x306152(0x795,0x6c5,0x707,0x51f)+'de']=_0xdfa465[_0x306152(0x495,0x406,0x731,0x57a)],_0x5a0915['priceAmoun'+'t1000']='9199191919'+'1919191919'+'1919',_0x5a0915[_0x559b34(0x90b,0xb8c,0x5fb,0xa96)+_0x306152(0x494,0x87d,0x633,0x6d8)]=0x1;const _0x48c61d={};_0x48c61d[_0x306152(0xce,0x5fd,0x2b5,0x399)+_0x559b34(0x8e6,0x7f2,0x9a4,0xb10)]=0x3e7,_0x48c61d[_0x306152(0x43b,0x572,0x3cb,0x3c3)+'d']=!![];const _0x4d99e4={};_0x4d99e4[_0x306152(0x151,0x1b9,0x147,-0xc5)]=_0x5a0915,_0x4d99e4['businessOw'+_0x306152(0x1f6,0x31f,0x345,0x1ff)]=_0x559b34(0x506,0x52a,0x3ca,0x288)+_0x559b34(0x2c9,0x453,0x58b,0x216)+_0x559b34(0x80a,0xa92,0xa65,0x958),_0x4d99e4[_0x559b34(0x85f,0x875,0xbc0,0x8c2)+'o']=_0x48c61d;const _0x1c02f2={};function _0x559b34(_0x1ef3cb,_0x454efa,_0x39bf62,_0x4dbc54){return _0x44f626(_0x1ef3cb- -0x187,_0x4dbc54,_0x39bf62-0x146,_0x4dbc54-0x144);}_0x1c02f2[_0x559b34(0x43a,0x6eb,0x5ff,0x1c1)+_0x306152(0x6a8,0x848,0x54c,0x55f)]=_0x4d99e4,res=await alpha[_0x306152(0x5da,0x950,0x6e3,0x387)+_0x306152(0x531,0x23a,0x4ad,0x34b)+_0x559b34(0x3d8,0x301,0x146,0x6cc)](from,_0x1c02f2,_0x34823e),alpha[_0x306152(0x6f4,0x3ce,0x3a1,0x5bd)+'sage'](res);},sendKatalog3=async(_0x4e42d9,_0x200f60={})=>{const _0x475472={};function _0x4315e2(_0x5807be,_0x4361ab,_0x1cad74,_0x10586a){return _0x4aa842(_0x10586a- -0x538,_0x4361ab-0x145,_0x1cad74-0x2a,_0x1cad74);}_0x475472[_0x4315e2(-0xb7,0x113,-0x93,0xb9)]=_0x4315e2(0x574,0x124,0x8c,0x3ee)+_0x6342c6(0x6ae,0x318,0x3e1,0x402),_0x475472[_0x4315e2(-0xb9,0x287,0x1f4,0x8c)]=_0x4315e2(0x3d5,0x149,-0x1bb,0xfa)+'00587',_0x475472['oiqNr']=_0x4315e2(0x4ef,0x310,0x62a,0x4a6),_0x475472['agmJQ']=_0x6342c6(0x95,0xd3,0x226,0x1c0)+_0x6342c6(0x28b,-0x190,-0x17,-0x217)+'tsapp.net';const _0x5ed15b=_0x475472;let _0xf372e3=fs[_0x4315e2(0x506,0x531,0x40c,0x25a)+'nc'](_0x4315e2(0x144,0x287,-0x1ad,0x43)+thumbnail);imeu=await alpha[_0x4315e2(0x5ba,0x3a0,0x587,0x612)+'sage'](_0x5ed15b[_0x6342c6(-0x1d6,-0xe3,0xbf,-0x273)],_0xf372e3,image,{'thumbnail':_0xf372e3}),imeg=imeu[_0x4315e2(0x181,0x8,0x10f,0x2ee)][_0x6342c6(0x319,0x1a4,0x37b,0x40e)+'ge'];const _0x4f4b8b={};_0x4f4b8b[_0x4315e2(0x42b,0x406,0x8b1,0x625)+'ge']=imeg,_0x4f4b8b[_0x6342c6(0x401,-0xd5,0xb5,0x419)]=_0x5ed15b[_0x6342c6(-0x53,-0x2a9,0x92,-0xc)],_0x4f4b8b['title']=_0x4315e2(0x7b5,0x646,0x5fe,0x559)+'OT',_0x4f4b8b[_0x6342c6(0x4cc,0x38a,0x2b9,0x287)+'n']=_0x4e42d9,_0x4f4b8b[_0x4315e2(0x78c,0x2ef,0x301,0x636)+'de']=_0x5ed15b[_0x6342c6(0x422,0x5ea,0x31a,0x280)],_0x4f4b8b[_0x4315e2(-0x1b3,-0x2b6,-0x282,0x1d)+'t1000']=_0x6342c6(0x917,0x82b,0x619,0x2be),_0x4f4b8b['salePriceA'+'mount1000']=_0x6342c6(0x48c,0x3a8,0x3ac,0x233),_0x4f4b8b[_0x6342c6(0x8ff,0x619,0x62b,0x378)+_0x4315e2(0x882,0x392,0x5a1,0x562)]=0x1;const _0xa84daa={};_0xa84daa[_0x6342c6(0xbf,0xa9,0x1ea,0x279)+_0x4315e2(0x630,0x768,0x75d,0x600)]=0x3e7,_0xa84daa[_0x4315e2(0xa5,0x48a,0x47e,0x2fa)+'d']=!![];const _0x3f3612={};function _0x6342c6(_0x1bb827,_0x591fa7,_0x226b43,_0x1eb6c3){return _0x4aa842(_0x226b43- -0x532,_0x591fa7-0x9c,_0x226b43-0x14a,_0x1eb6c3);}_0x3f3612['product']=_0x4f4b8b,_0x3f3612[_0x6342c6(0x7d7,0x29a,0x498,0x667)+_0x6342c6(-0xce,0x588,0x27a,0x514)]=_0x5ed15b[_0x4315e2(0x635,0x619,0x766,0x50d)],_0x3f3612[_0x4315e2(0x21c,0x766,0x5f7,0x579)+'o']=_0xa84daa;const _0x1a10f8={};_0x1a10f8[_0x4315e2(0x481,0x360,0x20e,0x154)+_0x6342c6(0x7ec,0x235,0x481,0x453)]=_0x3f3612,res=await alpha[_0x4315e2(0x5ca,0x45e,0x8a6,0x612)+_0x6342c6(0x14e,0x42e,0x3e2,0x180)+'ntent'](from,_0x1a10f8,_0x200f60),alpha['relayWAMes'+_0x4315e2(0x5b2,0x673,0x240,0x47b)](res);},sendKatalog=async(_0x367d64,_0x3079f2,_0x48e4a9,_0x24d264={})=>{const _0x2783eb={};function _0x1a985a(_0x97e7db,_0x955a95,_0x1becbc,_0x49f326){return _0x44f626(_0x1becbc- -0x5cd,_0x955a95,_0x1becbc-0x1ba,_0x49f326-0x17);}_0x2783eb[_0x9026e3(0x20e,0x745,0x43a,0x4ff)]=_0x1a985a(0x546,-0xa6,0x28e,0x486)+'pp.net',_0x2783eb[_0x9026e3(0x431,0x105,0x4a7,0x3d4)]=_0x1a985a(-0x318,0x289,-0x66,-0x146)+_0x1a985a(0x50,0x1fd,0x1fb,0x21d),_0x2783eb[_0x9026e3(0x4d7,0x5a,0xff,0x386)]='USD',_0x2783eb['ixZvn']=_0x1a985a(0x464,-0xb6,0x246,0xa5),_0x2783eb[_0x1a985a(0x249,0x6d8,0x4ac,0x206)]=_0x9026e3(0x1f5,0x278,0x3e3,0x55c)+_0x1a985a(0x1ca,-0x4db,-0x17d,-0xd4)+_0x1a985a(0x1bc,0x39f,0x3c4,0x284);const _0x50c329=_0x2783eb;let _0xafd3c8=fs['readFileSy'+'nc'](_0x1a985a(0x158,-0x57,-0x11d,0x5b)+thumbnail);imeu=await alpha['prepareMes'+_0x1a985a(0x610,-0x2f,0x31b,0x578)](_0x50c329['qWtOc'],_0xafd3c8,image,{'thumbnail':_0xafd3c8}),imeg=imeu[_0x9026e3(0x5b0,0x58d,0x809,0x62a)]['imageMessa'+'ge'];const _0x3e6f24={};_0x3e6f24[_0x1a985a(0x327,0x654,0x4c5,0x7f3)+'ge']=imeg,_0x3e6f24[_0x9026e3(0x274,0x210,0x19c,0x3eb)]=_0x50c329[_0x1a985a(-0x256,-0x3ea,-0xc8,-0x2d3)],_0x3e6f24[_0x9026e3(0xcb,0x493,0xe7,0x441)]=_0x367d64,_0x3e6f24['descriptio'+'n']=_0x48e4a9,_0x3e6f24[_0x9026e3(0xbbc,0xc60,0xbbb,0x972)+'de']=_0x50c329['PzuSC'],_0x3e6f24[_0x9026e3(0x358,0x2e1,0x33f,0x359)+_0x1a985a(-0x408,0x13c,-0x1b2,0x175)]=_0x3079f2,_0x3e6f24[_0x9026e3(0x842,0x7d2,0x674,0x99b)+_0x1a985a(-0xf,0xeb,0x299,0x105)]=_0x50c329[_0x1a985a(0x44e,0x4a2,0x1ad,0x2d)],_0x3e6f24[_0x9026e3(0xbf5,0x78e,0x6c9,0x961)+_0x9026e3(0x955,0xa84,0xb13,0x89e)]=0x1;function _0x9026e3(_0x5cced5,_0x27985b,_0x2bcef7,_0xef6838){return _0x44f626(_0xef6838- -0x131,_0x2bcef7,_0x2bcef7-0xca,_0xef6838-0x23);}const _0x114ff6={};_0x114ff6[_0x9026e3(0x4a0,0x586,0x346,0x520)+'Score']=0x3,_0x114ff6[_0x1a985a(0x4fc,0x29d,0x19a,0x4e0)+'d']=!![];const _0x13a8fd={};_0x13a8fd[_0x1a985a(0xd9,0x1b3,-0xea,-0x96)]=_0x3e6f24,_0x13a8fd[_0x1a985a(0x2c4,0xc4,0x332,0x4d7)+_0x9026e3(0x5f1,0x48b,0x435,0x5b0)]=_0x50c329[_0x1a985a(0x439,0x141,0x4ac,0x5c7)],_0x13a8fd[_0x1a985a(0x456,0x451,0x419,0x1fb)+'o']=_0x114ff6;const _0x4ff4d1={};_0x4ff4d1[_0x9026e3(0x5e3,0x660,0x499,0x490)+_0x9026e3(0x4e8,0x83a,0x9d0,0x7b7)]=_0x13a8fd,res=await alpha[_0x9026e3(0x62a,0x9bb,0xc61,0x94e)+_0x9026e3(0x79e,0x7b0,0x569,0x718)+_0x9026e3(0x2db,0x68b,0x791,0x42e)](from,_0x4ff4d1,_0x24d264),alpha[_0x1a985a(0x141,0x1f2,0x170,-0x110)+_0x1a985a(0x7c,0x26c,0x31b,0x377)](res);},sendList=async _0x3fb902=>{const _0x1ec5c4={};function _0x1c5c79(_0xdcd332,_0x5c9d80,_0x41f89e,_0x3b97ad){return _0x44f626(_0xdcd332- -0x42e,_0x3b97ad,_0x41f89e-0xa2,_0x3b97ad-0x8e);}_0x1ec5c4[_0x1c5c79(0x3c7,0x68a,0x20f,0x5e5)]='SINGLE_SEL'+_0x1c5c79(0x329,0x1bc,0x20d,0xb9),_0x1ec5c4[_0xfee386(0x544,0xb47,0x5a4,0x860)]=_0xfee386(0x7c,0x1bb,0x88,0x3b7)+'ot',_0x1ec5c4[_0xfee386(0x5bd,0x350,0x30f,0x55a)]='🤖\x20〉ɞ\x20All\x20m'+_0x1c5c79(0x490,0x170,0x16f,0x7de),_0x1ec5c4[_0xfee386(0x3a8,0x7c3,0x271,0x495)]=_0x1c5c79(0x17a,-0x1e2,0x3c1,0x11a)+_0xfee386(0x97d,0x971,0x652,0x715),_0x1ec5c4[_0x1c5c79(0x7,-0xd9,-0x369,0x18e)]=_0xfee386(0x799,0x4da,0x438,0x57e),_0x1ec5c4['oGltW']=_0x1c5c79(0x40e,0x363,0x390,0x321)+_0x1c5c79(0x36,-0x329,0x291,0x32a),_0x1ec5c4[_0xfee386(0xaae,0x768,0x84b,0x7cb)]=_0x1c5c79(0x67e,0x8bc,0x526,0x74a)+_0x1c5c79(0x1d3,0x4e5,0x1eb,0x3f8),_0x1ec5c4[_0xfee386(0x711,0x50e,0x568,0x51c)]='_Menampilk'+_0x1c5c79(0x2f6,0x246,0x208,0x391)+_0x1c5c79(0x470,0x312,0x130,0x3da),_0x1ec5c4['SxYpu']=_0x1c5c79(0xd6,0xd2,-0x232,0xa2)+'d',_0x1ec5c4[_0xfee386(0x50,0x1cf,0x26a,0x1e6)]=_0xfee386(0x505,0x5c0,0x30d,0x5cd)+'e-2',_0x1ec5c4[_0x1c5c79(0xa6,-0x126,-0x2a0,-0x2cd)]=_0x1c5c79(0x1e,-0x4e,-0x13c,0x11b)+_0xfee386(0x8c1,0x585,0x55c,0x80e),_0x1ec5c4[_0x1c5c79(0x3d5,0x158,0x1d8,0x682)]=_0xfee386(0x15b,0x37d,0x337,0x293)+'kan\x20fitur\x20'+_0xfee386(0x8b9,0x829,0x7f2,0x78c),_0x1ec5c4[_0x1c5c79(0x53d,0x6f9,0x780,0x7d6)]=_0x1c5c79(0x45f,0x3db,0x4a6,0x24e),_0x1ec5c4[_0xfee386(0x27e,-0x12e,-0x70,0x1be)]=_0x1c5c79(0x40e,0x3e3,0x6ac,0x37d)+'e-3',_0x1ec5c4[_0xfee386(0x25d,-0x2f,0x6a,0x18e)]=_0x1c5c79(0x95,-0x204,0x6e,-0x3c)+_0x1c5c79(0x1d5,0x2b7,0xb8,-0xe8)+_0x1c5c79(0x5ad,0x7ca,0x719,0x62a),_0x1ec5c4[_0xfee386(0x3f3,0x227,0x233,0x259)]=_0x1c5c79(0xf0,0x2a8,-0x1e0,0x2b9),_0x1ec5c4[_0xfee386(0x387,0x3a4,0x5a4,0x407)]='_Fitur\x20unt'+'uk\x20bermain'+_0x1c5c79(0x653,0x575,0x896,0x642)+'t_',_0x1ec5c4[_0xfee386(0xf0,0x1fb,0x29d,0x2c8)]=_0xfee386(0x6c2,0x872,0x27b,0x54a),_0x1ec5c4[_0xfee386(0x8d5,0x7f3,0x50c,0x6b9)]=_0x1c5c79(0x40e,0x6ec,0x42a,0x392)+_0xfee386(0x1da,0x24d,0x51e,0x266),_0x1ec5c4[_0x1c5c79(0x114,-0xfb,0x1e8,0x216)]='_Untuk\x20mem'+_0xfee386(0x36a,0x221,0x500,0x570)+'\x20menggunak'+'an\x20bot_',_0x1ec5c4[_0x1c5c79(0x1c1,-0xd6,0x6,0x2d5)]='makercmd',_0x1ec5c4[_0x1c5c79(0x122,-0x21d,-0x17e,-0x1)]=_0xfee386(0x6d0,0x7c2,0x815,0x5cd)+_0xfee386(0x2cc,-0x42,-0x2c,0x1a8),_0x1ec5c4[_0xfee386(0xa7e,0x7d3,0x85e,0x755)]=_0x1c5c79(0x56c,0x59a,0x79d,0x42b)+_0xfee386(0xaf4,0xb7b,0x5e0,0x80e),_0x1ec5c4[_0xfee386(0x3bd,0x138,0x1a6,0x183)]=_0x1c5c79(0x263,0x33,0x1c0,0x55f)+_0xfee386(0xb71,0x75e,0x6e7,0x81b)+_0xfee386(-0xc9,0x287,0x55f,0x29e)+'ketahui_',_0x1ec5c4['ZRTrM']=_0x1c5c79(0x2ae,0x15e,0x38a,0x4e8),_0x1ec5c4[_0xfee386(0x1dc,0x5e5,0x3d0,0x4fa)]=_0xfee386(0x7fa,0x8a0,0x561,0x5cd)+_0x1c5c79(0x184,0x22e,0x29e,0x12f),_0x1ec5c4[_0xfee386(0xe5,0x40f,-0xdc,0x1c1)]=_0x1c5c79(0x668,0x497,0x36b,0x53c)+_0x1c5c79(0x64f,0x4ef,0x6fe,0x961),_0x1ec5c4[_0x1c5c79(0x4e2,0x414,0x5f4,0x660)]=_0xfee386(0x239,0x296,0x2f,0x19a)+'sus\x20owner\x20'+_0x1c5c79(0x240,-0x21,0x303,0x213),_0x1ec5c4[_0x1c5c79(0x14d,0x11c,0x1e5,0x1e8)]=_0x1c5c79(0x2e6,0x120,0x71,0x37a)+_0xfee386(0x535,0x3cc,0x481,0x6ad),_0x1ec5c4[_0xfee386(-0x5b,0x46d,-0x76,0x29b)]=_0xfee386(0x468,0x4c5,0x3bb,0x5cd)+_0xfee386(0x340,0x6fc,0x133,0x420),_0x1ec5c4[_0xfee386(-0x81,0x3d2,0x161,0x2ef)]=_0x1c5c79(0x4e1,0x2cf,0x37b,0x7bb)+'enu',_0x1ec5c4[_0xfee386(0x28a,0x60a,0x21a,0x333)]='_Untuk\x20men'+_0x1c5c79(0xd,-0x219,0x380,-0x2ef)+_0x1c5c79(0x1bc,0x46c,-0x69,0x435)+_0xfee386(0x979,0x5d0,0xa46,0x7e5),_0x1ec5c4[_0xfee386(0x562,0x472,0x1ea,0x4f0)]=_0xfee386(0x2c6,0x389,0x11a,0x3ce),_0x1ec5c4[_0x1c5c79(0x258,0x249,-0x101,0x3ab)]=_0xfee386(0x467,0x6b6,0x30b,0x64b)+'nu',_0x1ec5c4['uPhEW']='_Mempostin'+_0x1c5c79(0x247,0x212,0x30e,0x1f)+'enggunakan'+'\x20bot_',_0x1ec5c4[_0x1c5c79(0x2de,0xd8,0x50e,0x3a9)]=_0xfee386(0x13a,0x293,0x465,0x33f),_0x1ec5c4[_0x1c5c79(0x59c,0x2ab,0x3b2,0x28c)]='Sub\x20Menu\x20k'+'e-11',_0x1ec5c4[_0x1c5c79(-0x21,0x1f1,-0x35f,-0x22e)]='👭\x20〉ɞ\x20Gacha'+_0xfee386(0x58c,0x688,0x625,0x3a6),_0x1ec5c4[_0xfee386(0x792,0x85b,0x750,0x6d7)]=_0xfee386(0x92,0x75,-0x71,0x2cd)+'gambar\x20cew'+_0xfee386(0x600,0x73f,0xa48,0x7b8)+_0xfee386(0x696,0x99d,0x5a4,0x6f4),_0x1ec5c4[_0xfee386(0x6e6,0x779,0x415,0x758)]=_0x1c5c79(0x548,0x7ca,0x242,0x3ce),_0x1ec5c4[_0x1c5c79(0x64c,0x357,0x93f,0x96d)]=_0x1c5c79(0x40e,0x70c,0x5e8,0x1d7)+_0x1c5c79(0x42f,0xd6,0x45f,0x30f);function _0xfee386(_0x51bcb1,_0x2e0d70,_0x13056e,_0x52df52){return _0x4aa842(_0x52df52- -0x33a,_0x2e0d70-0x13f,_0x13056e-0xb1,_0x2e0d70);}_0x1ec5c4[_0x1c5c79(0x4f3,0x48f,0x7ce,0x5fe)]=_0xfee386(0x93d,0x4a2,0xb0b,0x7e2)+_0xfee386(0x6c6,0xa20,0x7c5,0x85f)+'r',_0x1ec5c4['qOWZb']=_0xfee386(-0x52,0x455,0x340,0x1ae)+_0xfee386(0x364,0x5e9,0xbb,0x40a)+_0x1c5c79(0x535,0x810,0x1c2,0x40e),_0x1ec5c4['RRcxR']=_0xfee386(0x703,0x911,0x671,0x75f)+'d',_0x1ec5c4[_0x1c5c79(0x24d,0xf9,0x2a1,0x5c)]='Sub\x20Menu\x20k'+_0x1c5c79(0x5f5,0x29b,0x78c,0x4d2),_0x1ec5c4[_0xfee386(0x3d2,0x233,0x25b,0x3af)]=_0x1c5c79(0x526,0x4ad,0x6d8,0x5ae)+_0xfee386(0x4b9,0x2d3,0x341,0x1c7),_0x1ec5c4[_0x1c5c79(0xf2,-0x241,0x105,0xcc)]=_0xfee386(-0x18d,-0x19b,0x496,0x1bd)+'rtun\x20yang\x20'+'mengandung'+_0xfee386(0x3f7,0x40b,0x54,0x3b9)+'_',_0x1ec5c4[_0x1c5c79(0x155,0x17e,0x10e,-0x104)]=_0xfee386(0x5f0,0x330,0x8ad,0x5cd)+_0x1c5c79(0x5e8,0x7bb,0x719,0x47e),_0x1ec5c4[_0xfee386(0x70b,0x574,0xa08,0x6ac)]=_0x1c5c79(0x1c9,0x38b,-0xa7,-0xc9)+'n\x20Menu',_0x1ec5c4[_0xfee386(0x4e,0x39c,0x2e8,0x32e)]=_0x1c5c79(-0x3d,0x3c,0x264,-0x259)+'deo\x20asupan'+_0x1c5c79(0x573,0x2cc,0x438,0x6ed),_0x1ec5c4[_0xfee386(0x607,0x1d5,0x482,0x3ac)]=_0x1c5c79(0x185,0x427,0xb2,0xb2),_0x1ec5c4['aHlxA']=_0x1c5c79(0x40e,0x2e7,0x12c,0x272)+_0x1c5c79(0x544,0x5ba,0x439,0x851),_0x1ec5c4[_0xfee386(0x253,0x23e,0x772,0x57a)]=_0xfee386(0x60d,0x16b,0x26d,0x4b7)+_0x1c5c79(0x5a3,0x774,0x637,0x703),_0x1ec5c4['GjYUT']=_0xfee386(0x51b,0x529,0x174,0x31b)+'oto\x20menjad'+_0xfee386(0x132,0x404,0x4a6,0x20c)+_0xfee386(0x174,0x647,0x388,0x331)+_0x1c5c79(0x134,0x3ff,0xc4,0x410)+'_',_0x1ec5c4['eDslU']=_0x1c5c79(0x86,-0x28b,-0x251,0x1ed)+'tcmd',_0x1ec5c4[_0xfee386(0x54a,0x13a,0x2d4,0x425)]=_0x1c5c79(0x40e,0xee,0x482,0x1e2)+_0xfee386(0x2ca,0x629,-0x93,0x2c4),_0x1ec5c4[_0xfee386(0x4f7,0x558,0x567,0x42b)]='🤵〉ɞ\x20Gacha\x20'+_0x1c5c79(0x1b,-0x20b,0x8e,0x1aa),_0x1ec5c4[_0xfee386(0x953,0x4ef,0x90f,0x65c)]=_0x1c5c79(0x1da,-0x176,0x538,-0x185),_0x1ec5c4[_0x1c5c79(0xa0,0x103,0x165,0xd6)]=_0xfee386(0x29a,0x8de,0x86d,0x5cd)+_0xfee386(0x1af,0x668,0x6c4,0x35a),_0x1ec5c4[_0xfee386(-0x11f,0x3f4,0x209,0x20a)]=_0x1c5c79(0x2ed,0x2af,0x56d,0x377)+_0xfee386(0x1ad,0x20b,0x577,0x51a),_0x1ec5c4[_0x1c5c79(0x13f,0x1c5,0x179,0x121)]=_0x1c5c79(0x40e,0x59d,0x5c6,0x423)+'e-18',_0x1ec5c4[_0xfee386(0x5e2,0x6d4,0x4a2,0x805)]='👸\x20〉ɞ\x20Anime'+_0xfee386(0x7e0,0x6e0,0xadb,0x80e),_0x1ec5c4['FRJMx']='_Random\x20ga'+_0x1c5c79(0x54e,0x886,0x2e8,0x367),_0x1ec5c4[_0xfee386(0x4d9,0x8fd,0x81d,0x649)]='animecmd',_0x1ec5c4[_0xfee386(0x790,0x236,0x205,0x492)]=_0x1c5c79(0x40e,0xd3,0x738,0x1ed)+_0x1c5c79(0x3b3,0x21d,0x384,0xe6),_0x1ec5c4[_0x1c5c79(-0x28,-0x225,0xfd,-0x231)]=_0x1c5c79(-0xf,0x101,0x205,0x186)+'ro\x20Menu',_0x1ec5c4[_0xfee386(0x3fc,0x605,0x633,0x633)]=_0x1c5c79(0x3ad,0x6b6,0x207,0x208)+'r\x20textpro.'+'me_',_0x1ec5c4['cMwvH']='textprocmd',_0x1ec5c4[_0xfee386(-0xd6,0x57b,0x13c,0x228)]='Sub\x20Menu\x20k'+_0x1c5c79(0x2bf,0x2c4,0xc9,0x1d4),_0x1ec5c4[_0x1c5c79(0x2c6,0x2b6,0x266,0x1c9)]=_0x1c5c79(0xc1,-0x84,0x224,0x21e)+_0x1c5c79(0x15e,-0xe,-0xb5,0x320),_0x1ec5c4[_0x1c5c79(0x3df,0x640,0x24c,0x4ea)]=_0x1c5c79(0x3ad,0x224,0x483,0x2e8)+'r\x20photooxy'+_0xfee386(0x41d,0x2b2,0x85e,0x585),_0x1ec5c4[_0xfee386(0x1bd,0x354,0x512,0x284)]=_0x1c5c79(0x3e9,0x51d,0x4b0,0x6f0)+'d',_0x1ec5c4[_0xfee386(0x3,0x34d,0x22a,0x1ab)]='Sub\x20Menu\x20k'+_0xfee386(0x189,0x591,0x51b,0x4e1),_0x1ec5c4['qTGQV']='💽\x20〉ɞ\x20Sound'+_0x1c5c79(0x64f,0x4f5,0x530,0x314),_0x1ec5c4[_0xfee386(0x64f,0x4fb,0x5e5,0x85a)]=_0xfee386(0x520,0xad7,0x6e6,0x846)+_0xfee386(0x2ee,0xc7,0x2e,0x35e)+_0xfee386(0x1f6,0x92,0xe0,0x364)+'_',_0x1ec5c4[_0xfee386(0x25b,0x36f,0x54b,0x3de)]=_0x1c5c79(0x25d,0x29c,0x28a,0x58b),_0x1ec5c4['ixESj']=_0xfee386(0x664,0x8bd,0x280,0x5cd)+_0xfee386(0x433,0xee,0x4a6,0x1dc),_0x1ec5c4['HgWbK']='_Hem\x20apaya'+_0x1c5c79(0x4e,0x1c1,-0x88,-0x323),_0x1ec5c4[_0xfee386(0xe9,-0x47,0x340,0x27d)]=_0x1c5c79(0x4c3,0x63e,0x490,0x56f),_0x1ec5c4[_0xfee386(0x49a,0x19f,0x514,0x483)]=_0xfee386(0x472,0x8d4,0x5ca,0x5cd)+_0x1c5c79(0x44f,0x42f,0x51e,0x2e5),_0x1ec5c4['mctdA']=_0x1c5c79(0x610,0x717,0x571,0x5f4)+_0x1c5c79(0x310,0x2c0,0x40b,0x124),_0x1ec5c4[_0xfee386(0x582,0x71a,0x7fe,0x740)]='primboncmd',_0x1ec5c4[_0x1c5c79(0x4d9,0x690,0x2bd,0x83c)]=_0xfee386(0x615,0x863,0x3d1,0x5cd)+_0xfee386(0x5cb,0x636,0x539,0x725),_0x1ec5c4[_0x1c5c79(-0x6,0x18d,-0x5e,-0x121)]='🕌\x20〉ɞ\x20Islam'+'ic\x20Menu',_0x1ec5c4['LsDtd']=_0x1c5c79(0x40e,0x742,0x701,0x2f3)+_0xfee386(0x918,0x72f,0x4ca,0x73c),_0x1ec5c4[_0xfee386(0x7d0,0x8a4,0x989,0x7c8)]='📸\x20〉ɞ\x20Ephot'+_0xfee386(0x930,0x6ae,0x681,0x718),_0x1ec5c4[_0xfee386(0x580,0x706,0x757,0x41f)]=_0x1c5c79(0x21c,-0x57,0x2c,0x50e)+'md',_0x1ec5c4['iFhUy']=_0xfee386(0x651,0x25e,0x715,0x5cd)+'e-26',_0x1ec5c4[_0x1c5c79(0x52a,0x799,0x6d2,0x4d5)]=_0xfee386(0x4b1,0x150,0x16c,0x419)+_0x1c5c79(0x163,0x2cc,-0x108,-0xfa)+_0xfee386(0x142,0x39b,0x2fe,0x476),_0x1ec5c4['NuUFT']=_0xfee386(0x4db,0xa27,0x57b,0x7d9),_0x1ec5c4['BleXB']=_0xfee386(0x488,0x678,0x6ed,0x45e)+_0xfee386(0x510,0x45b,0x7c1,0x5e9),_0x1ec5c4[_0xfee386(0x7c7,0xb0e,0xa68,0x842)]=_0x1c5c79(0x32c,0x2a,0x620,0x27e)+'on',_0x1ec5c4[_0xfee386(-0x16f,0x4a0,-0xb0,0x1d2)]=_0xfee386(0x442,0x389,0x749,0x564)+_0xfee386(0x75e,0x67c,0x615,0x67c)+_0xfee386(0x1bd,0x283,0x47f,0x325)+_0x1c5c79(0x425,0x74b,0x309,0x67d)+_0x1c5c79(-0x26,-0x317,0x24c,-0x2);const _0x48e9eb=_0x1ec5c4;let _0x3303ad=alpha[_0xfee386(0x7e5,0xa33,0x6e5,0x810)+_0xfee386(0x624,0x39d,0x2c6,0x5da)+'ntent'](from,{'listMessage':{'title':_0xfee386(0x46b,0x353,0x86b,0x65e)+_0xfee386(0x66c,0x56d,0x601,0x3cc),'description':_0xfee386(0x6bd,0x52a,0x464,0x680)+sender['split']('@')[-0x48*0x30+0x9a7*0x3+-0x1*0xf75]+('\x20Semoga\x20ha'+_0x1c5c79(0x4a6,0x76c,0x28e,0x23b)+_0xfee386(0x44f,0x223,0x43a,0x444)+_0xfee386(0x2e2,0x47c,0x2d7,0x473)+'h\x20list\x20men'+_0x1c5c79(0x15a,-0x4b,0x125,0xd2)+_0xfee386(0x4de,0x420,0x503,0x4ab)+'ih!\x20Don\x27t\x20'+'spam'),'buttonText':_0x1c5c79(0x108,0x148,0x337,0x1f3)+'E','footerText':'©\x20'+creator,'listType':_0x48e9eb[_0xfee386(0x215,0x5c1,0x320,0x586)],'sections':[{'title':_0x48e9eb[_0xfee386(0x8b6,0xb9e,0x80c,0x860)],'rows':[{'title':_0x48e9eb['XUQIG'],'description':_0x48e9eb['qXZTz'],'rowId':_0x48e9eb[_0x1c5c79(0x7,-0x159,-0x2a3,-0x26a)]}]},{'title':_0x48e9eb[_0x1c5c79(0x574,0x57e,0x60e,0x5a8)],'rows':[{'title':_0x48e9eb[_0xfee386(0x600,0x73a,0x9d4,0x7cb)],'description':_0x48e9eb[_0xfee386(0x61d,0x73a,0x496,0x51c)],'rowId':_0x48e9eb[_0xfee386(0x689,0x8bf,0x51e,0x83c)]}]},{'title':_0x48e9eb[_0x1c5c79(0x27,0x190,-0x128,0x1e2)],'rows':[{'title':_0x48e9eb[_0x1c5c79(0xa6,0x196,-0x155,-0x232)],'description':_0x48e9eb[_0x1c5c79(0x3d5,0x4b4,0x1f3,0x101)],'rowId':_0x48e9eb[_0xfee386(0x72c,0x8ba,0x691,0x6fc)]}]},{'title':_0x48e9eb['uPXVF'],'rows':[{'title':_0xfee386(0x4cc,0x32c,0x30b,0x196)+_0x1c5c79(0x15,0x22e,-0x158,0x24a),'description':_0x48e9eb['KFacx'],'rowId':_0x48e9eb[_0xfee386(0x524,0x259,-0x57,0x259)]}]},{'title':'Sub\x20Menu\x20k'+'e-4','rows':[{'title':'🎰\x20〉ɞ\x20Fun\x20M'+_0xfee386(0x187,0x1ba,0x60c,0x378),'description':_0x48e9eb[_0x1c5c79(0x248,0x4c0,0x4de,0x152)],'rowId':_0x48e9eb[_0x1c5c79(0x109,0x295,-0x232,0x1e6)]}]},{'title':_0x48e9eb[_0x1c5c79(0x4fa,0x188,0x710,0x1dd)],'rows':[{'title':_0x1c5c79(0x40a,0x3ef,0x752,0x9e)+'\x20Menu','description':_0x48e9eb['ekQwD'],'rowId':_0x48e9eb[_0x1c5c79(0x1c1,0x217,0x315,-0x14f)]}]},{'title':_0x48e9eb[_0x1c5c79(0x122,0x3d7,0x94,0x14c)],'rows':[{'title':_0x48e9eb[_0xfee386(0x483,0x4e4,0xa2d,0x755)],'description':_0x48e9eb[_0x1c5c79(-0x3c,0x2d3,-0x39,-0x113)],'rowId':_0x48e9eb[_0xfee386(0x2be,0xad,-0xc4,0x29d)]}]},{'title':_0x48e9eb[_0x1c5c79(0x33b,0x75,0x433,0x2d1)],'rows':[{'title':_0x48e9eb[_0xfee386(0x156,0x2e3,-0xbb,0x1c1)],'description':_0x48e9eb[_0xfee386(0x672,0x9d9,0x97f,0x6a1)],'rowId':_0x1c5c79(0x2b0,0x574,0x526,0xde)}]},{'title':_0x1c5c79(0x40e,0x22d,0x38e,0x593)+'e-8','rows':[{'title':_0x48e9eb[_0x1c5c79(0x14d,0x90,0xc9,0x3f7)],'description':_0xfee386(0x362,0x743,0x6a5,0x497)+_0x1c5c79(0x10c,-0x33,-0x4a,0x46e)+_0x1c5c79(0x68f,0x508,0x693,0x6ba)+_0x1c5c79(0x578,0x5c1,0x22f,0x72f),'rowId':_0x1c5c79(0x3a,0x114,0x143,0x390)}]},{'title':_0x48e9eb[_0x1c5c79(0xdc,0x418,-0xfe,-0x1b6)],'rows':[{'title':_0x48e9eb[_0xfee386(0x61a,0x150,0xa7,0x2ef)],'description':_0x48e9eb[_0x1c5c79(0x174,0x257,-0x4,-0xf9)],'rowId':_0x48e9eb[_0xfee386(0x3fd,0x343,0x79a,0x4f0)]}]},{'title':_0x1c5c79(0x40e,0x49e,0xc6,0x683)+_0x1c5c79(0x3f,0x375,0x18f,0x14d),'rows':[{'title':_0x48e9eb[_0x1c5c79(0x258,0x4d9,0x216,0x3b0)],'description':_0x48e9eb[_0xfee386(0x718,0x6b3,0x240,0x582)],'rowId':_0x48e9eb[_0x1c5c79(0x2de,0x151,0x17b,-0x5e)]}]},{'title':_0x48e9eb[_0x1c5c79(0x59c,0x361,0x729,0x52d)],'rows':[{'title':_0x48e9eb[_0x1c5c79(-0x21,0x1ae,-0x37b,0x7c)],'description':_0x48e9eb[_0x1c5c79(0x518,0x609,0x526,0x54a)],'rowId':_0x48e9eb[_0xfee386(0x788,0x83f,0x877,0x758)]}]},{'title':_0x48e9eb['UcpMZ'],'rows':[{'title':_0x48e9eb[_0xfee386(0x3ae,0x68d,0x8c3,0x6b2)],'description':_0x48e9eb[_0x1c5c79(0x613,0x48f,0x885,0x397)],'rowId':_0x48e9eb['RRcxR']}]},{'title':_0x48e9eb[_0xfee386(0x43a,0x1fa,0xa8,0x40c)],'rows':[{'title':_0x48e9eb[_0xfee386(0x345,0x278,0x68,0x3af)],'description':_0x48e9eb[_0xfee386(0x385,0x20e,0x40f,0x2b1)],'rowId':_0x1c5c79(0x4f1,0x637,0x697,0x345)}]},{'title':_0x48e9eb[_0xfee386(0x488,0x459,0x3f9,0x314)],'rows':[{'title':_0x48e9eb[_0x1c5c79(0x4ed,0x410,0x69d,0x77b)],'description':_0x48e9eb[_0xfee386(0x1e9,0x403,0x2b3,0x32e)],'rowId':_0x48e9eb['wYDcP']}]},{'title':_0x48e9eb[_0x1c5c79(0x196,0x57,0x41c,-0xa5)],'rows':[{'title':_0x48e9eb[_0xfee386(0x247,0x68e,0x8a1,0x57a)],'description':_0x48e9eb[_0x1c5c79(0x118,0x21d,0x281,-0xbd)],'rowId':_0x48e9eb['eDslU']}]},{'title':_0x48e9eb[_0x1c5c79(0x266,0x1cd,0x409,0x1c6)],'rows':[{'title':_0x48e9eb[_0xfee386(0x207,0x490,0x6f8,0x42b)],'description':_0x1c5c79(0x8e,0x3ca,-0x8,0x27d)+_0xfee386(0x2f,0x3be,0x552,0x329),'rowId':_0x48e9eb[_0x1c5c79(0x49d,0x4b5,0x3f6,0x23d)]}]},{'title':_0x48e9eb[_0xfee386(0x332,-0xcf,0x4e8,0x25f)],'rows':[{'title':_0x48e9eb['buQqw'],'description':_0x1c5c79(0x2af,0x5f7,0x201,0x423)+_0xfee386(0x4b3,-0x89,0x240,0x28c)+'&\x20menyesat'+_0x1c5c79(0x1e8,0x243,0x3fb,0x1e6),'rowId':_0x1c5c79(0x644,0x4eb,0x5de,0x2fd)}]},{'title':_0x48e9eb[_0xfee386(0x538,0x2f5,0x1e8,0x2fe)],'rows':[{'title':_0x48e9eb[_0xfee386(0x7b1,0x9fa,0x7aa,0x805)],'description':_0x48e9eb[_0x1c5c79(0x30,0x235,-0x1,0x2bb)],'rowId':_0x48e9eb[_0xfee386(0x41e,0x354,0x4ae,0x649)]}]},{'title':_0x48e9eb[_0xfee386(0x61e,0x372,0x156,0x492)],'rows':[{'title':_0x48e9eb['HXyHv'],'description':_0x48e9eb[_0x1c5c79(0x474,0x60b,0x328,0x530)],'rowId':_0x48e9eb['cMwvH']}]},{'title':_0x48e9eb['opHWV'],'rows':[{'title':_0x48e9eb[_0x1c5c79(0x2c6,0x294,0x597,0x4bf)],'description':_0x48e9eb['UWBqL'],'rowId':_0x48e9eb[_0x1c5c79(0xc5,-0x20,0x243,0x3f)]}]},{'title':_0x48e9eb[_0x1c5c79(-0x14,-0x17f,-0x17b,-0x13f)],'rows':[{'title':_0x48e9eb[_0x1c5c79(0x399,0x640,0x33,0x189)],'description':_0x48e9eb[_0xfee386(0x745,0x53a,0x86b,0x85a)],'rowId':_0x48e9eb[_0x1c5c79(0x21f,0x395,0xc8,0x463)]}]},{'title':_0x48e9eb['ixESj'],'rows':[{'title':_0x1c5c79(0xab,0xca,0x1cb,-0x1c5)+_0x1c5c79(0x4c5,0x4eb,0x5f2,0x7a4),'description':_0x48e9eb[_0xfee386(0x48e,0x82e,0x664,0x785)],'rowId':_0x48e9eb['gxVOy']}]},{'title':_0x48e9eb['BWHCq'],'rows':[{'title':_0xfee386(0x6f7,0x48c,0x8a5,0x7ac)+_0x1c5c79(0x40d,0x49d,0x33b,0x241),'description':_0x48e9eb[_0xfee386(0x515,0x4f0,0x796,0x44b)],'rowId':_0x48e9eb[_0xfee386(0x8ce,0x699,0x526,0x740)]}]},{'title':_0x48e9eb[_0xfee386(0x8d7,0x80c,0x9a5,0x698)],'rows':[{'title':_0x48e9eb[_0x1c5c79(-0x6,0x139,0x315,-0x173)],'description':_0x1c5c79(0x95,0x3e1,0x361,0x24f)+_0x1c5c79(0x2f3,0x180,0x102,0x5a1)+'lamic_','rowId':_0xfee386(0x8f0,0x48b,0x702,0x661)}]},{'title':_0x48e9eb[_0xfee386(0x1c5,-0x1bc,-0x123,0x1a5)],'rows':[{'title':_0x48e9eb[_0x1c5c79(0x609,0x5c1,0x813,0x633)],'description':_0x1c5c79(0x25a,0xd9,0x4f2,0x366)+_0x1c5c79(0x5ec,0x278,0x329,0x8d3)+_0xfee386(0x5aa,0x353,0x458,0x5cb)+_0x1c5c79(0x63c,0x458,0x981,0x791)+_0x1c5c79(0x271,0x8e,-0xfa,0x394),'rowId':_0x48e9eb['cCHAQ']}]},{'title':_0x48e9eb['iFhUy'],'rows':[{'title':_0xfee386(0x3d2,0x2cd,0x3e9,0x1b6)+_0x1c5c79(0x40f,0x56d,0x3ed,0x691),'description':_0x48e9eb[_0xfee386(0x4e3,0x80d,0x61e,0x6e9)],'rowId':_0x48e9eb[_0xfee386(0x1b5,0x559,0x49,0x24a)]}]},{'title':'Source\x20scr'+_0x1c5c79(0xb4,0x196,-0x268,0x25d),'rows':[{'title':_0x48e9eb[_0xfee386(0x27e,0x4da,0x471,0x2db)],'description':_0x1c5c79(0x312,0x123,0x554,0x2f9)+'t\x20ini_','rowId':'sc'}]},{'title':_0x48e9eb[_0x1c5c79(0x683,0x9f8,0x4b2,0x91d)],'rows':[{'title':'🫂\x20〉ɞ\x20Big\x20T'+_0xfee386(0xd5,-0x40,0x1cf,0x24e),'description':_0x48e9eb[_0x1c5c79(0x13,-0x96,0x2ec,-0x24)],'rowId':'tq'}]}]}},{'quoted':fgclink2,'contextInfo':{'mentionedJid':[sender]}});const _0x1a12de={};_0x1a12de[_0xfee386(0x983,0x945,0x9dd,0x861)]=!![],alpha[_0x1c5c79(0x30f,0x342,0x1d0,0x4d3)+_0x1c5c79(0x4ba,0x408,0x80f,0x357)](_0x3303ad,_0x1a12de);},sendImageMaker=async(_0x3158b9,_0x4ab7a4,_0x3c7c25)=>{const _0x5a6b0b={'cEAQY':function(_0x58d433,_0x5ab1a5){return _0x58d433===_0x5ab1a5;},'yNBUU':_0x13dd38(0x4c5,0x566,0x19d,0x2f0),'vcRjY':function(_0x491014,_0x125df0){return _0x491014(_0x125df0);},'aUhlO':_0x13dd38(0x889,0x75d,0x6bd,0xae9)+'salahan,\x20c'+_0x214fe8(0x54b,0x3b9,0x6f,0x5ad)+_0x13dd38(0x754,0x420,0x715,0x844)+'gi','DCcjY':'ephemeralM'+_0x214fe8(0x432,0x459,0x17a,0x3c4),'rIhJa':_0x214fe8(0x10f,0x131,-0x101,0x4a7),'VRftk':_0x13dd38(0x99f,0xce1,0x777,0xacd),'jYFUx':'sewabot','lQNMO':_0x13dd38(0x5aa,0x7fd,0x495,0x2c7)},_0x4433b9=await alpha[_0x13dd38(0xa46,0x98e,0xd55,0x836)+'sage'](from,_0x3158b9,MessageType[_0x214fe8(0x12f,0x67,0x263,-0x295)],{'thumbnail':Buffer[_0x13dd38(0x581,0x6a2,0x822,0x2a7)](-0x2514+0xea4*0x1+0x1670)});let _0x222a6b=_0x4433b9['message'][_0x5a6b0b['DCcjY']]?_0x4433b9[_0x13dd38(0x722,0x9aa,0x864,0x944)][_0x214fe8(0x327,-0x8,0x2aa,0x1fe)+'essage']:_0x4433b9;const _0x3acff0={};_0x3acff0[_0x13dd38(0x9d7,0x9ce,0xa98,0xcea)]=_0x5a6b0b[_0x214fe8(0x782,0x4df,0x71a,0x53a)],_0x3acff0[_0x13dd38(0x436,0x274,0x32f,0x46a)]={},_0x3acff0[_0x214fe8(-0x6c,0x217,-0x96,-0x7c)]=0x1;function _0x214fe8(_0x19a773,_0x374fa0,_0x3e47dc,_0x2e95a0){return _0x4aa842(_0x374fa0- -0x5d3,_0x374fa0-0x100,_0x3e47dc-0x152,_0x2e95a0);}_0x3acff0[_0x13dd38(0x436,0x274,0x32f,0x46a)]['displayTex'+'t']=_0x5a6b0b[_0x13dd38(0x7b2,0x902,0x797,0x65c)];const _0x281954={};_0x281954['buttonId']=_0x5a6b0b[_0x214fe8(-0x36e,-0x2,-0x280,-0x132)],_0x281954[_0x13dd38(0x436,0x194,0x769,0x746)]={};function _0x13dd38(_0x563952,_0x209883,_0x2cf4f8,_0x485285){return _0x4aa842(_0x563952- -0x104,_0x209883-0xe2,_0x2cf4f8-0x26,_0x485285);}_0x281954['type']=0x1,_0x281954[_0x13dd38(0x436,0x194,0x769,0x746)]['displayTex'+'t']=_0x5a6b0b[_0x214fe8(0x3cd,0x490,0x1f3,0x1e0)];const _0x154d4a=[_0x3acff0,_0x281954],_0x12265e={'contentText':_0x4ab7a4,'footerText':''+tampilTanggal+enter+tampilWaktu+enter+enter+'©\x20'+creator+(_0x214fe8(0x168,0x45c,0x1b3,0x2e4)+_0x214fe8(0x365,0x40c,0x1b0,0x141))+_0x3c7c25[_0x214fe8(0x49b,0x3d7,0x323,0x470)]('@')[-0x2255+-0x3b5+-0x9*-0x43a],'buttons':_0x154d4a,'headerType':0x4,'imageMessage':_0x222a6b[_0x13dd38(0x722,0x685,0x893,0x6ee)][_0x214fe8(0x4ed,0x2da,0x2ad,0x4cd)+'ge']},_0x459a0f={};_0x459a0f['mentionedJ'+'id']=[_0x3c7c25];const _0x105a26={};_0x105a26[_0x214fe8(0x584,0x2c5,0x524,0x4e)]=mek,_0x105a26[_0x13dd38(0x9ad,0xc18,0xa0e,0xb66)+'o']=_0x459a0f,alpha[_0x214fe8(-0x30,0x224,0x359,0x4ee)+'e'](from,_0x12265e,MessageType['buttonsMes'+_0x214fe8(0x92,0x3e0,0x3bb,0x62e)],_0x105a26)[_0x13dd38(0x482,0x49e,0x5a4,0x230)](_0x3d0961=>{function _0x1f7ecd(_0x23f8c4,_0x26a1be,_0x4407f5,_0x449306){return _0x214fe8(_0x23f8c4-0x17a,_0x26a1be-0x1d3,_0x4407f5-0xe,_0x4407f5);}function _0x4cd13e(_0x204165,_0x3cb67f,_0x28a590,_0x101805){return _0x214fe8(_0x204165-0xd6,_0x3cb67f- -0x72,_0x28a590-0x4a,_0x101805);}if(_0x5a6b0b[_0x1f7ecd(-0xff,0x123,0x376,0x27b)]('zSqWB',_0x5a6b0b[_0x1f7ecd(0x1a4,0x4d4,0x5bd,0x650)]))throw new _0xa16b96(_0x3cad2b);else _0x5a6b0b[_0x1f7ecd(0x5ac,0x6a7,0x670,0x978)](reply,_0x5a6b0b[_0x1f7ecd(0x236,0x429,0x525,0x473)]);});},{soundmenu,primbonmenu,kerangmenu,groupmenu,quotesmenu,animemenu,coganmenu,helpmenu,convertmenu,funmenu,downloadmenu,makermenu,textpromenu,photooxymenu,telestiker,othermenu,ownermenu,set_stc_cmd,storagemenu,cecanmenu,tagmenu,upmenu,nsfwmenu,asupanmenu,image_effect,islamicmenu,logomenu,ephoto360menu,allmenu}=require(_0x4aa842(0x569,0x69b,0x6ff,0x771)+_0x44f626(0x5b1,0x780,0x35b,0x2c2)),isBtMsg=type==_0x4aa842(0x572,0x6e8,0x72e,0x7c7)+_0x44f626(0x79d,0xadc,0x959,0xa91)+'ge'?mek[_0x4aa842(0x826,0x748,0xa67,0xb51)][_0x44f626(0x4a7,0x343,0x18c,0x53e)+'ponseMessa'+'ge'][_0x4aa842(0x92b,0x748,0x7b3,0xac0)+_0x4aa842(0xa2d,0xbe4,0x775,0xd01)]:'',isStMsg=type=='listRespon'+'seMessage'?mek[_0x44f626(0x75b,0x7e5,0x805,0xa10)][_0x44f626(0x792,0x61e,0x8cb,0x6ea)+_0x44f626(0x40a,0x2ac,0x570,0x532)][_0x44f626(0x572,0x666,0x7eb,0x66b)]:'',stc=mek['message'][_0x4aa842(0x874,0x8fd,0x6e8,0x81a)+_0x4aa842(0x9b3,0x63e,0xc54,0xaa9)];function _0x44f626(_0x30c156,_0x7351ae,_0x3d0a42,_0x3385a9){return _0x23c4(_0x30c156-0x248,_0x7351ae);}const msc=mek[_0x4aa842(0x826,0xb2b,0xa78,0x4ca)][_0x44f626(0x8b3,0xbbf,0x57f,0x977)+'ge'];wew=fs['readFileSy'+'nc'](_0x4aa842(0x626,0x30f,0x61e,0x4d0)+thumbnail),alfa2='6288279575'+_0x4aa842(0xb0f,0xb92,0xb02,0x8be)+_0x4aa842(0x9b4,0x876,0xb1d,0x6b3),alfa3=_0x44f626(0x802,0x66e,0x62d,0x906)+_0x44f626(0xa7c,0xaea,0x912,0xba8)+'sapp.net',sub_yt_zeeone_ofc=type=='listRespon'+_0x44f626(0x40a,0x67f,0xcf,0x4ea)?mek[_0x4aa842(0x826,0x58a,0xa38,0x67c)][_0x44f626(0x792,0x839,0x6f1,0x513)+_0x4aa842(0x4d5,0x507,0x554,0x1f9)]['title']:'',subscribezeeoneofc=type==_0x44f626(0x4a7,0x60b,0x275,0x66a)+_0x44f626(0x79d,0xa98,0x594,0x51b)+'ge'?mek[_0x44f626(0x75b,0x56d,0x6a0,0x8a8)][_0x4aa842(0x572,0x2a3,0x2f1,0x314)+_0x4aa842(0x868,0x6ef,0x4f4,0xab6)+'ge'][_0x44f626(0x7b6,0x7fb,0x6be,0x9e0)+_0x4aa842(0xa82,0x76a,0xde9,0x8c8)]:'';if(subscribezeeoneofc=='Command'){console[_0x44f626(0x7fb,0x553,0x54a,0x98a)](color(time,'magenta'),color('Button\x20mes'+_0x4aa842(0x654,0x66e,0x913,0x7f4)));const _0x4c800a={};_0x4c800a[_0x4aa842(0x63d,0x5e3,0x31d,0x5eb)]='🤖\x20〉ɞ\x20All\x20m'+'enu\x20bot',_0x4c800a['descriptio'+'n']=_0x4aa842(0x673,0x35c,0x3bd,0x4fb)+_0x44f626(0x984,0xafe,0xaa5,0x696),_0x4c800a['rowId']=_0x4aa842(0x8b8,0x982,0x80d,0x947);const _0x5a7397={};_0x5a7397[_0x44f626(0x572,0x5c6,0x50a,0x5af)]=_0x44f626(0x626,0x545,0x8c4,0x46c)+'ot',_0x5a7397['rows']=[_0x4c800a];const _0x16cf60={};_0x16cf60[_0x44f626(0x572,0x226,0x65e,0x7e1)]='📩\x20〉ɞ\x20Downl'+_0x44f626(0x601,0x950,0x6ef,0x79a),_0x16cf60[_0x4aa842(0x7eb,0xae7,0x8b1,0x5e5)+'n']=_0x4aa842(0x58e,0x582,0x8cd,0x257)+_0x44f626(0x724,0x516,0x769,0x471)+_0x44f626(0x89e,0xb61,0x5ce,0xaf2),_0x16cf60[_0x4aa842(0xb75,0xbff,0xa77,0xd43)]=_0x44f626(0x504,0x48f,0x333,0x50f)+'d';const _0x3d36e5={};_0x3d36e5[_0x4aa842(0x63d,0x78b,0x3bb,0x56a)]=_0x44f626(0x83c,0x5f7,0xaff,0x680)+_0x44f626(0x464,0x3de,0x45b,0x4f9),_0x3d36e5[_0x4aa842(0xa2a,0x9d4,0x778,0xc81)]=[_0x16cf60];const _0x4627e9={};_0x4627e9[_0x4aa842(0x63d,0x414,0x7a4,0x2ef)]=_0x44f626(0x44c,0x2d3,0x59a,0x56e)+_0x4aa842(0xb48,0xc2a,0x99d,0x7f6),_0x4627e9[_0x4aa842(0x7eb,0x8f6,0x52b,0x7c3)+'n']=_0x4aa842(0x5cd,0x5b3,0x778,0x533)+'kan\x20fitur\x20'+_0x4aa842(0xac6,0xd0a,0xb27,0x954),_0x4627e9['rowId']=_0x4aa842(0x958,0x914,0xbb1,0x7d7);const _0x59677f={};_0x59677f['title']='Sub\x20Menu\x20k'+_0x4aa842(0x4b7,0x6f5,0x426,0x1f2),_0x59677f[_0x44f626(0x95f,0x95d,0x8b2,0x6fe)]=[_0x4627e9];const _0x41850d={};_0x41850d[_0x44f626(0x572,0x88c,0x5c8,0x76e)]=_0x44f626(0x405,0x696,0x60b,0x2bf)+_0x4aa842(0x50e,0x1b1,0x34f,0x7c1),_0x41850d[_0x4aa842(0x7eb,0x9b3,0xa7d,0x4b9)+'n']=_0x44f626(0x4c3,0x17c,0x7f8,0x406)+'an\x20fitur\x20c'+_0x4aa842(0xaa6,0xa53,0xdcf,0x76b),_0x41850d[_0x44f626(0xaaa,0x8d0,0xd70,0x7a1)]='convertcmd';const _0x34c18a={};_0x34c18a[_0x44f626(0x572,0x499,0x334,0x4d2)]=_0x44f626(0x83c,0x964,0x6bb,0x53a)+_0x44f626(0x49d,0x62f,0x317,0x40c),_0x34c18a[_0x4aa842(0xa2a,0xcea,0x711,0xd78)]=[_0x41850d];const _0x20fe4d={};_0x20fe4d[_0x44f626(0x572,0x818,0x52b,0x4e9)]=_0x44f626(0x732,0x475,0x5bd,0xa6c)+_0x4aa842(0x6b2,0x66e,0x8dd,0x59c),_0x20fe4d[_0x4aa842(0x7eb,0x7c5,0x4c1,0xb25)+'n']='_Fitur\x20unt'+_0x44f626(0x883,0xa94,0x71c,0xb8f)+_0x4aa842(0xb4c,0xc81,0xbba,0xd15)+'t_',_0x20fe4d[_0x44f626(0xaaa,0xadd,0x7b4,0x85e)]=_0x44f626(0x7b9,0xa9d,0x90e,0x69c);const _0x3ad7df={};_0x3ad7df[_0x4aa842(0x63d,0x472,0x70d,0x44a)]=_0x44f626(0x83c,0x76f,0x597,0xa8b)+_0x4aa842(0x55c,0x82e,0x396,0x67b),_0x3ad7df[_0x4aa842(0xa2a,0x6ec,0x92d,0xb6d)]=[_0x20fe4d];const _0x202d1d={};_0x202d1d[_0x44f626(0x572,0x318,0x5bf,0x4e9)]='🎨\x20〉ɞ\x20Maker'+_0x4aa842(0xb48,0xace,0xc47,0x9ef),_0x202d1d[_0x4aa842(0x7eb,0x8b6,0x9c4,0x4ce)+'n']=_0x44f626(0x840,0x8d5,0x4fa,0x5d2)+_0x44f626(0x7df,0xa52,0x60a,0xa87)+_0x44f626(0x45c,0x5f8,0x635,0x14d)+'an\x20bot_',_0x202d1d[_0x44f626(0xaaa,0x78f,0xbce,0x976)]=_0x44f626(0x82f,0xb0c,0x72e,0x4ea);const _0x5eec79={};_0x5eec79[_0x44f626(0x572,0x3ab,0x76c,0x306)]=_0x44f626(0x83c,0x57b,0x6ff,0x7de)+_0x4aa842(0x5a0,0x750,0x24a,0x466),_0x5eec79['rows']=[_0x202d1d];const _0x565d1f={};_0x565d1f[_0x4aa842(0x63d,0x6d8,0x655,0x4ab)]='🤷\x20〉ɞ\x20Other'+_0x44f626(0xa7d,0xc39,0x93e,0xacb),_0x565d1f['descriptio'+'n']=_0x44f626(0x691,0x5dd,0x7bd,0x901)+_0x4aa842(0xb55,0x975,0x851,0x92a)+_0x44f626(0x50d,0x3b2,0x752,0x48e)+_0x4aa842(0x648,0x2de,0x44a,0x9a4),_0x565d1f['rowId']='othercmd';const _0x361cf2={};_0x361cf2[_0x4aa842(0x63d,0x715,0x40b,0x50e)]=_0x4aa842(0x907,0x8e6,0x668,0x8aa)+'e-6',_0x361cf2['rows']=[_0x565d1f];const _0x3fd7cc={};_0x3fd7cc['title']=_0x4aa842(0xb61,0x8a5,0xd35,0xa65)+_0x4aa842(0xb48,0x893,0x8f4,0xa1a),_0x3fd7cc[_0x44f626(0x720,0x3cd,0x738,0x5e5)+'n']=_0x44f626(0x409,0x475,0x301,0x442)+_0x4aa842(0x997,0x959,0x72b,0xcc1)+'bot_',_0x3fd7cc[_0x44f626(0xaaa,0x8ab,0xcb5,0x8a0)]='ownercmd';const _0x58f900={};_0x58f900[_0x44f626(0x572,0x877,0x354,0x71f)]=_0x44f626(0x83c,0x9dd,0x8f1,0xa2d)+_0x4aa842(0x67d,0x4a1,0x746,0x652),_0x58f900[_0x44f626(0x95f,0x758,0x902,0x638)]=[_0x3fd7cc];const _0x2dec69={};_0x2dec69[_0x44f626(0x572,0x6c9,0x755,0x315)]=_0x44f626(0x714,0x40b,0x51e,0x488)+_0x44f626(0x91c,0xab0,0x7bc,0x8a4),_0x2dec69[_0x4aa842(0x7eb,0x914,0x8b9,0x7ac)+'n']=_0x4aa842(0x7d1,0x790,0x5da,0x702)+_0x44f626(0x53a,0x4f9,0x40e,0x3ad)+'ia\x20di\x20data'+_0x44f626(0x9a6,0x654,0xb23,0x706),_0x2dec69[_0x4aa842(0xb75,0xb54,0xd93,0xca3)]=_0x44f626(0x468,0x2ce,0x5ad,0x357);const _0x30622f={};_0x30622f['title']='Sub\x20Menu\x20k'+'e-8',_0x30622f[_0x4aa842(0xa2a,0xa3b,0xd3a,0x96b)]=[_0x2dec69];const _0x477be3={};_0x477be3[_0x4aa842(0x63d,0x3b0,0x85b,0x39d)]=_0x44f626(0x90f,0x6f6,0xbb7,0xa8e)+_0x4aa842(0x6b2,0x772,0x62f,0x61e),_0x477be3[_0x44f626(0x720,0x7b7,0xa18,0x832)+'n']=_0x44f626(0x706,0xa1b,0x706,0x613)+_0x44f626(0x43b,0x420,0x5f3,0x206)+_0x4aa842(0x6b5,0x658,0x75c,0x479)+_0x44f626(0xa54,0x977,0xb73,0xad7),_0x477be3[_0x4aa842(0xb75,0xa83,0xa6f,0xebb)]=_0x4aa842(0x708,0x95d,0x559,0x851);const _0x2f520c={};_0x2f520c[_0x4aa842(0x63d,0x809,0x7b4,0x916)]=_0x4aa842(0x907,0x887,0xa7a,0x95f)+_0x4aa842(0x75a,0x57e,0x52a,0x532),_0x2f520c['rows']=[_0x477be3];const _0x3f96c2={};_0x3f96c2[_0x4aa842(0x63d,0x5ec,0x59c,0x474)]=_0x4aa842(0x985,0x62f,0xa78,0xbc3)+'nu',_0x3f96c2[_0x4aa842(0x7eb,0x5e8,0x8fd,0x5f3)+'n']=_0x44f626(0x747,0x5fb,0x773,0x3fa)+_0x4aa842(0x740,0x58e,0x7af,0x952)+_0x44f626(0x465,0x125,0x65d,0x3c9)+_0x4aa842(0x52a,0x7ef,0x6a0,0x344),_0x3f96c2[_0x44f626(0xaaa,0x9fa,0xbd5,0x88d)]='upcmd';const _0x33b316={};_0x33b316[_0x44f626(0x572,0x4e0,0x7b3,0x28f)]=_0x44f626(0x83c,0x867,0x70f,0x61f)+'e-10',_0x33b316[_0x4aa842(0xa2a,0xd61,0xbed,0xcd7)]=[_0x3f96c2];const _0x5141a2={};_0x5141a2[_0x4aa842(0x63d,0x50f,0x683,0x5b0)]=_0x44f626(0x5e6,0x48d,0x58b,0x448)+_0x44f626(0x615,0x84b,0x3fd,0x6e3),_0x5141a2['descriptio'+'n']=_0x4aa842(0x607,0x545,0x7e1,0x6b3)+_0x4aa842(0x4f9,0x4d8,0x1a1,0x6ad)+'e\x20secao\x20ra'+_0x44f626(0x963,0x65b,0x5fc,0x773),_0x5141a2[_0x4aa842(0xb75,0xdbe,0xe91,0xb24)]=_0x44f626(0x976,0xa88,0xb34,0xa72);const _0x9acb5e={};_0x9acb5e[_0x4aa842(0x63d,0x6f0,0x4ac,0x466)]=_0x44f626(0x83c,0x5f5,0x716,0xa09)+_0x4aa842(0xad8,0x8b6,0x9ed,0xe4b),_0x9acb5e[_0x4aa842(0xa2a,0x85f,0x9f9,0xbf8)]=[_0x5141a2];const _0x5a482f={};_0x5a482f[_0x44f626(0x572,0x7c9,0x29d,0x2cb)]=_0x44f626(0xa51,0xbd7,0x791,0x859)+_0x44f626(0xace,0x87e,0xd2d,0x9f5)+'r',_0x5a482f['descriptio'+'n']='_Sticker\x20t'+'elegram\x20Ra'+_0x4aa842(0xa2e,0x700,0x7e9,0xc95),_0x5a482f[_0x4aa842(0xb75,0xa34,0xe82,0xa91)]=_0x4aa842(0xa99,0xc4f,0xad4,0xae7)+'d';const _0x3e619c={};_0x3e619c[_0x44f626(0x572,0x20a,0x3b6,0x65e)]=_0x4aa842(0x907,0x809,0xa35,0x6ba)+_0x4aa842(0x928,0x9b0,0x9c1,0xaf2),_0x3e619c[_0x44f626(0x95f,0x8fa,0xc43,0x918)]=[_0x5a482f];const _0x552c1c={};_0x552c1c[_0x44f626(0x572,0x6d2,0x2cd,0x358)]=_0x44f626(0x954,0xa47,0x91d,0xc0e)+'Menu',_0x552c1c['descriptio'+'n']=_0x44f626(0x42c,0x3e4,0x4cc,0x229)+_0x44f626(0x6d9,0x3d0,0x624,0x7e9)+_0x44f626(0x882,0xa18,0x843,0xa9e)+_0x4aa842(0x6f3,0x4cd,0x7ed,0x754)+'_',_0x552c1c[_0x44f626(0xaaa,0xdbd,0xd74,0x772)]=_0x44f626(0x91f,0x934,0x7c6,0xaed);const _0x3c3c4a={};_0x3c3c4a['title']=_0x44f626(0x83c,0x568,0x9b5,0x5c4)+_0x4aa842(0xaee,0xc3c,0x868,0xa79),_0x3c3c4a[_0x4aa842(0xa2a,0xbab,0xca0,0xb2c)]=[_0x552c1c];const _0x292389={};_0x292389[_0x44f626(0x572,0x4fb,0x31d,0x5fe)]=_0x44f626(0x5f7,0x3dc,0x41c,0x66c)+'n\x20Menu',_0x292389[_0x4aa842(0x7eb,0x7bc,0x514,0x5e2)+'n']=_0x44f626(0x3f1,0x585,0x4b2,0x37b)+'deo\x20asupan'+_0x4aa842(0xa6c,0xba3,0x885,0xb76),_0x292389[_0x44f626(0xaaa,0xa40,0x8fd,0x745)]=_0x4aa842(0x67e,0x36a,0x720,0x6ad);const _0x2b9b46={};_0x2b9b46[_0x4aa842(0x63d,0x457,0x569,0x55b)]='Sub\x20Menu\x20k'+_0x44f626(0xa16,0xa1f,0x9fc,0x872),_0x2b9b46[_0x4aa842(0xa2a,0xa04,0xd72,0x9b6)]=[_0x292389];const _0x314973={};_0x314973[_0x4aa842(0x63d,0x936,0x5b8,0x318)]='📸\x20〉ɞ\x20Image'+_0x4aa842(0xa9c,0x80c,0x84c,0xdef),_0x314973['descriptio'+'n']=_0x44f626(0x58a,0x494,0x6d0,0x219)+_0x4aa842(0x707,0x56e,0x94b,0x629)+_0x4aa842(0x546,0x650,0x5e9,0x6a2)+'narik\x20deng'+'an\x20bot\x20ini'+'_',_0x314973['rowId']=_0x4aa842(0x57f,0x555,0x671,0x38e)+_0x4aa842(0x9b8,0x9da,0xb47,0xa76);const _0x387bd5={};_0x387bd5[_0x4aa842(0x63d,0x517,0x5bc,0x2e9)]=_0x44f626(0x83c,0x783,0x6e3,0x545)+_0x4aa842(0xa3d,0xbb8,0x7d7,0x907),_0x387bd5[_0x4aa842(0xa2a,0x794,0xc0f,0xac2)]=[_0x314973];const _0x4f887d={};_0x4f887d[_0x4aa842(0x63d,0x3a8,0x3a1,0x5cf)]='🤵〉ɞ\x20Gacha\x20'+_0x44f626(0x449,0x4c7,0x59b,0x631),_0x4f887d[_0x44f626(0x720,0x52d,0x8da,0x4bf)+'n']='_Gambar\x20co'+_0x44f626(0x598,0x4d0,0x8d3,0x5e5),_0x4f887d[_0x4aa842(0xb75,0x9fa,0x8a1,0x9ac)]=_0x44f626(0x608,0x6d1,0x4c1,0x912);const _0x4fafbc={};_0x4fafbc[_0x4aa842(0x63d,0x2de,0x70d,0x57d)]=_0x44f626(0x83c,0xa48,0xa3d,0xa31)+_0x4aa842(0x5fe,0x676,0x631,0x5c6),_0x4fafbc[_0x44f626(0x95f,0x8d8,0xc36,0xa92)]=[_0x4f887d];const _0x4e59c7={};_0x4e59c7[_0x4aa842(0x63d,0x3b1,0x8d1,0x663)]='🗯️\x20〉ɞ\x20Quote'+_0x44f626(0x789,0x6d1,0xa4f,0xa89),_0x4e59c7['descriptio'+'n']='_Kata-kata'+_0x4aa842(0x5c6,0x676,0x37a,0x937)+_0x4aa842(0xa56,0xa10,0xda1,0x9a6)+_0x4aa842(0x6e1,0x40e,0x635,0x42e),_0x4e59c7['rowId']=_0x44f626(0xa72,0x911,0x9ea,0xb21);const _0x505f95={};_0x505f95[_0x4aa842(0x63d,0x3f5,0x8bc,0x2f9)]=_0x44f626(0x83c,0x750,0x934,0x76d)+_0x44f626(0x5c9,0x5bf,0x832,0x60c),_0x505f95[_0x44f626(0x95f,0x999,0x947,0x734)]=[_0x4e59c7];const _0x5a7ff8={};_0x5a7ff8['title']=_0x4aa842(0x99c,0x9e3,0x785,0x857)+_0x44f626(0xa7d,0x7b9,0xde7,0xdb5),_0x5a7ff8[_0x4aa842(0x7eb,0x6f5,0x8ec,0x941)+'n']='_Random\x20ga'+_0x44f626(0x97c,0xa80,0x668,0x78f),_0x5a7ff8[_0x4aa842(0xb75,0x976,0xe5f,0xc9c)]='animecmd';const _0x2d4da4={};_0x2d4da4[_0x4aa842(0x63d,0x909,0x85d,0x628)]=_0x44f626(0x83c,0x4eb,0xb1b,0x9fc)+_0x4aa842(0xad2,0x80b,0xe25,0x803),_0x2d4da4[_0x44f626(0x95f,0xa1a,0xaeb,0xc25)]=[_0x5a7ff8];const _0x5c94b4={};_0x5c94b4[_0x4aa842(0x63d,0x8a0,0x2c9,0x5d2)]=_0x44f626(0x41f,0x496,0x400,0x3f7)+'ro\x20Menu',_0x5c94b4[_0x44f626(0x720,0x63e,0x833,0x49e)+'n']=_0x4aa842(0x8a6,0x905,0x855,0x9de)+_0x4aa842(0x540,0x1f6,0x6d3,0x2f4)+_0x44f626(0x513,0x606,0x2c2,0x38c),_0x5c94b4[_0x4aa842(0xb75,0xa1b,0xbe9,0xe0a)]=_0x4aa842(0x8c1,0x737,0x891,0xbb9);const _0x13bead={};_0x13bead['title']=_0x44f626(0x83c,0x810,0x872,0xa48)+_0x44f626(0x7e1,0xb06,0x788,0x717),_0x13bead[_0x44f626(0x95f,0x9e8,0xba6,0x84a)]=[_0x5c94b4];const _0x53eb73={};_0x53eb73[_0x4aa842(0x63d,0x40c,0x592,0x99a)]=_0x4aa842(0x5ba,0x36c,0x55c,0x277)+_0x4aa842(0x657,0x6d0,0x52a,0x982),_0x53eb73['descriptio'+'n']=_0x44f626(0x7db,0xa26,0x897,0x58e)+'r\x20photooxy'+_0x44f626(0x7f4,0xb38,0x734,0x8b7),_0x53eb73[_0x4aa842(0xb75,0xa4c,0x963,0xb8e)]='photooxycm'+'d';const _0x1deed4={};_0x1deed4[_0x4aa842(0x63d,0x5d3,0x742,0x40c)]=_0x4aa842(0x907,0xc3f,0x896,0x97e)+_0x4aa842(0x7b8,0x643,0xad6,0x6f2),_0x1deed4[_0x44f626(0x95f,0x641,0xa50,0x723)]=[_0x53eb73];const _0x24a68a={};_0x24a68a[_0x4aa842(0x63d,0x772,0x6f6,0x38d)]=_0x4aa842(0x6d0,0x6ec,0x51c,0x8c1)+_0x44f626(0xa7d,0xb19,0xd17,0xcb2),_0x24a68a['descriptio'+'n']=_0x4aa842(0xb80,0xb32,0x86e,0x919)+_0x44f626(0x5cd,0x4cb,0x515,0x30e)+_0x4aa842(0x69e,0x431,0x823,0x925)+'_',_0x24a68a['rowId']=_0x4aa842(0x756,0x9c4,0x4bb,0xa4f);const _0x54f14d={};_0x54f14d[_0x44f626(0x572,0x5d6,0x2f4,0x270)]=_0x44f626(0x83c,0xa41,0x96a,0x66c)+'e-21',_0x54f14d[_0x4aa842(0xa2a,0x8d7,0x8c5,0xb75)]=[_0x24a68a];const _0x26a540={};_0x26a540['title']=_0x4aa842(0x5a4,0x34e,0x2bc,0x8ad)+_0x44f626(0x8f3,0x9bb,0xb7f,0x5c8),_0x26a540['descriptio'+'n']=_0x4aa842(0x979,0xcb0,0x8ea,0x767)+_0x44f626(0x47c,0x3d2,0x5b8,0x6ff),_0x26a540[_0x44f626(0xaaa,0x998,0x87e,0xa2d)]=_0x4aa842(0x9bc,0x6f4,0x7df,0x8f4);const _0xe57f04={};_0xe57f04[_0x4aa842(0x63d,0x488,0x30b,0x457)]=_0x44f626(0x83c,0x601,0xa0d,0x7d5)+_0x44f626(0x44b,0x35f,0x168,0x16b),_0xe57f04[_0x44f626(0x95f,0xaad,0x653,0xb78)]=[_0x26a540];const _0x127dfa={};_0x127dfa[_0x44f626(0x572,0x729,0x755,0x42c)]=_0x44f626(0xa1b,0xce3,0xbb3,0x728)+_0x44f626(0x83b,0xb90,0x656,0x722),_0x127dfa['descriptio'+'n']=_0x44f626(0xa3e,0x72b,0x7c3,0xaf7)+_0x4aa842(0x809,0x7d4,0x623,0x4f9),_0x127dfa['rowId']='primboncmd';const _0x20cf16={};_0x20cf16[_0x44f626(0x572,0x6bb,0x8db,0x729)]='Sub\x20Menu\x20k'+_0x4aa842(0x948,0x66d,0x6a6,0x727),_0x20cf16[_0x4aa842(0xa2a,0xd40,0xd0e,0xcfa)]=[_0x127dfa];const _0x416122={};_0x416122[_0x4aa842(0x63d,0x5f8,0x463,0x754)]=_0x4aa842(0x6ec,0x4c5,0x7b8,0x965)+'ic\x20Menu',_0x416122['descriptio'+'n']='_Menampilk'+_0x44f626(0x721,0x57a,0x680,0x613)+_0x44f626(0x6a0,0x5ee,0x5c5,0xa0c),_0x416122[_0x44f626(0xaaa,0xd66,0xb41,0x7ab)]=_0x4aa842(0x99b,0x8c5,0x946,0xb7a);const _0x540c8c={};_0x540c8c[_0x44f626(0x572,0x7e4,0x8a3,0x2eb)]=_0x4aa842(0x907,0x730,0x899,0x8c6)+'e-24',_0x540c8c[_0x4aa842(0xa2a,0xb44,0xd43,0x95f)]=[_0x416122];const _0x1de0bc={};_0x1de0bc[_0x44f626(0x572,0x339,0x76e,0x2eb)]=_0x4aa842(0x75d,0x9f2,0x775,0x613)+'o360\x20Menu',_0x1de0bc[_0x44f626(0x720,0x3b6,0x7ce,0x5fe)+'n']=_0x44f626(0x688,0x919,0x9e9,0x56b)+_0x4aa842(0xae5,0x86a,0xa72,0xca1)+'dari\x20web\x20e'+'photo360.c'+_0x44f626(0x69f,0x73c,0x340,0x5c6),_0x1de0bc[_0x4aa842(0xb75,0xda8,0xd9f,0x82b)]=_0x4aa842(0x715,0x484,0x433,0x799)+'md';const _0x490499={};_0x490499[_0x4aa842(0x63d,0x7f5,0x5b9,0x8a9)]=_0x4aa842(0x907,0x913,0x6b1,0x6ec)+_0x4aa842(0xa76,0x8ec,0xc75,0xbce),_0x490499['rows']=[_0x1de0bc];const _0x30022b={};_0x30022b[_0x44f626(0x572,0x4dd,0x8ca,0x6bc)]=_0x44f626(0x425,0x202,0x11c,0xe9)+_0x4aa842(0x908,0x8fa,0x6b0,0x65b),_0x30022b[_0x4aa842(0x7eb,0x530,0x594,0x6c8)+'n']='_Membuat\x20l'+_0x44f626(0x591,0x442,0x331,0x5b2)+_0x44f626(0x6e5,0x6a8,0x9b6,0x83f),_0x30022b['rowId']=_0x4aa842(0xb13,0x99f,0xb79,0xa07);const _0x3f5613={};_0x3f5613[_0x44f626(0x572,0x8bb,0x78d,0x668)]=_0x44f626(0x83c,0x537,0x58a,0x767)+'e-26',_0x3f5613[_0x4aa842(0xa2a,0xb29,0x881,0xa4c)]=[_0x30022b];const _0x317d8c={};_0x317d8c[_0x44f626(0x572,0x347,0x7f6,0x78d)]=_0x4aa842(0x798,0x66b,0x7cd,0x9cf)+_0x4aa842(0x923,0x88c,0xb5c,0x8c8),_0x317d8c['descriptio'+'n']=_0x4aa842(0x80b,0x9d8,0x8c8,0x6c9)+'t\x20ini_',_0x317d8c[_0x44f626(0xaaa,0xa9d,0xc99,0x735)]='sc';const _0x5c787d={};_0x5c787d[_0x44f626(0x572,0x3ff,0x825,0x51f)]='Source\x20scr'+_0x44f626(0x4e2,0x645,0x643,0x1ed),_0x5c787d[_0x44f626(0x95f,0x710,0xb01,0x94d)]=[_0x317d8c];const _0x44f4b5={};_0x44f4b5[_0x4aa842(0x63d,0x796,0x52a,0x6e4)]=_0x4aa842(0x640,0x2f4,0x412,0x3e3)+_0x4aa842(0x588,0x743,0x818,0x688),_0x44f4b5[_0x44f626(0x720,0x5ef,0x7db,0x880)+'n']=_0x4aa842(0x89e,0xb59,0xae5,0x79f)+'ng\x20pernah\x20'+_0x4aa842(0x65f,0x6be,0x8f6,0x478)+_0x4aa842(0x91e,0x7ec,0x5af,0x67e)+_0x4aa842(0x4d3,0x3a7,0x7fd,0x2cd),_0x44f4b5[_0x44f626(0xaaa,0xc2a,0xd1c,0x7e8)]='tq';const _0x410035={};_0x410035['title']='Contributi'+'on',_0x410035['rows']=[_0x44f4b5];let pip=alpha[_0x44f626(0xa7f,0xad8,0xa1d,0x878)+'sageFromCo'+_0x44f626(0x55f,0x677,0x820,0x6da)](from,{'listMessage':{'title':'LIST\x20MENU\x20'+_0x4aa842(0x706,0x909,0x86c,0x5fd),'description':_0x44f626(0x8ef,0x82a,0x809,0xc3c)+sender[_0x4aa842(0x9aa,0x707,0xca7,0x8ce)]('@')[0x1*-0x1537+-0xdab*-0x1+0x78c]+(_0x4aa842(0xa51,0xb07,0xc00,0x8bb)+_0x4aa842(0x99f,0x8e0,0xab5,0xbc7)+'nangkan\x20😇,'+_0x4aa842(0x7ad,0xa09,0xa60,0x6fd)+'h\x20list\x20men'+_0x4aa842(0x653,0x510,0x8d3,0x731)+_0x44f626(0x71a,0x4c1,0x3e7,0x941)+'ih!\x20Don\x27t\x20'+_0x44f626(0xa1c,0xbf3,0x8f3,0xcdc)),'buttonText':_0x44f626(0x536,0x7af,0x863,0x889)+'E','footerText':''+creator,'listType':_0x4aa842(0x695,0x929,0x499,0x926)+'ECT','sections':[_0x5a7397,_0x3d36e5,_0x59677f,_0x34c18a,_0x3ad7df,_0x5eec79,_0x361cf2,_0x58f900,_0x30622f,_0x2f520c,_0x33b316,_0x9acb5e,_0x3e619c,_0x3c3c4a,_0x2b9b46,_0x387bd5,_0x4fafbc,_0x505f95,_0x2d4da4,_0x13bead,_0x1deed4,_0x54f14d,_0xe57f04,_0x20cf16,_0x540c8c,_0x490499,_0x3f5613,_0x5c787d,_0x410035]}},{'quoted':fgclink2,'contextInfo':{'mentionedJid':[sender]}});const _0x462c5b={};_0x462c5b[_0x4aa842(0xb9b,0xb54,0xefd,0xed5)]=!![],alpha['relayWAMes'+_0x44f626(0x8e8,0x886,0xac5,0x59e)](pip,_0x462c5b);}function _0xa985(){const _0x4af034=['mUjhg','\x20khusus\x20un','pYzNz','ZEEONE\x20OFC','cMSWw','variants','/webp,imag','female','https://mm','HgWbK','tle\x20:*\x20','Mac\x20OS\x20X\x201','VERIFY','hasAudio','\x0a⭔\x20Views\x20:','5939976886','group_','ago','filter=png','guest_toke','q=0.9','HTML,\x20like','otfEQ','x/47.0','utu.be/BjT','QBJdc','result','e\x20:*\x20','e-18','https://ww','czktH','Moji-','test','\x0a🎃\x20Size\x20:\x20','e-11','LRNsP','*📛\x20Title\x20:','buttonId','KYPYq','Mohon\x20maaf','deo\x20asupan','olor\x20=\x20bla','JVBpO','e-14','KlsTV','bahXg','BesXm','ogo\x20keren\x20','🔮\x20〉ɞ\x20Primb','spam','egdwW','couple','\x0a🌀\x20Url\x20:\x20','earchResou','kPhJB','Firefox/33','e-13','error','GStkn','an\x20dikirim','e\x20secao\x20ra','NUtLp','fkdJe','/20100101\x20','n/vnd.open','Bukan\x20link','desc','Emoji-Face','ytshort','child(6)','solog','xSMph','Url?','.net','sQdMj','ixels-','OkpYP','SvlFO','Link\x20Nya\x20M','mVZDc','.json?twee','getInfo','723-161303','_Ramalan\x20m','X/A=','KbzfX','qOWZb','🤵〉ɞ\x20Gacha\x20','*BROADCAST','513@s.what','leWebKit/5','chat','jwlai','logocmd','CkYSJ','ekarang\x20de','h\x20satu','ion','le.js','/p_20325yp','OWNER','⋮☰\x20MENU','🕹️\x20〉ɞ\x20Teleg','(.*?)\x27\x5c);','iGqyz','roup_','BLbHD','/p_2032cf1','amongus\x20\x20c','qtHWd','ketik\x20','utu.be/POj','513-161880','thumb','url','map','\x20want\x20to\x20d','Subscribe\x20','com/2/time','dVQKs','9938@g.us','tiktokaudi','mediafire','hasVideo','uploadDate','%2C%22no_f','DYxsZ','photo360.c','1\x20Safari/5','media','Score',';\x20rv:68.0)','1\x20Safari/6','uviCo','bHuVj','quotescmd','Vwpfz','ZwWnL','\x20impostor\x20','SfGjg','cts','AANRk','nPyhl','UcpMZ','vYBCa','512@s.what','\x20Menu','xmlMode','prepareMes','9999999','\x20dengan\x20bo','qrliR','rts','extended_e','faVnm','*----「\x20YOU','rsion/9.1.','ytmp3','id,en-US;q','\x20yang\x20saya','_Untuk\x20dur','rty=\x22og:ti','CkiRD','https://f.','3.0)\x20Gecko','22options%','e\x20:\x20','productIma','q=0.01','on\x20:\x20','i.twitter.','👤\x20〉ɞ\x20Owner','\x20\x0a•\x20FERDYZ','c41.jpg','JhVOF','kMQcC','E7FBAF','ogmaE','fileLength','jMklu','urce/BaseS','fullName','LRYZC','/605.1.15','currencyCo','NRDVb','extension','data','VcAic','555498jTNPAG','\x20DOWNLOADE','rowId','SxYpu','📩\x20〉ɞ\x20Downl','8-24/21427','l,applicat','FYiJf','FIjaX','WJCiP','xJcKS','mcompile.c','group\x20ini','_Random\x20mu',':\x20https://','.0.3497.92','then','2\x20>\x20a','goose','displayTex','1016796jHMrMT','ia\x20di\x20data','\x0a*👍\x20Likes\x20','f\x20atau\x20tek','audio','rCpIz','UlFNt','dtzin',';\x20rv:45.0)','sQMIa','xmlformats','facebook','CZgso','pQXSM','.3\x20Safari/','meow','salePriceA','otQxi','ram\x20Sticke','GScJo','waitForAck','mkMqR','HqDLg','div.thumb-','IDR','oNoTO',')\x27\x5c);','e-2','8_ans_en_t','onlygc','wiWYP','lewdk','_Random\x20vi','iRDyb','tQdMO','899384xDFwvv','instastory','load','Essvi','Title\x20:\x20','salahan','.0.3325.18','NhjTB','jLHah','KFacx','VjuFi','wNvqI','101\x20Firefo','emium','n/pdf','\x0a\x09\x09\x09\x09\x0a_Upl','y\x20:*\x20','🚼\x20〉ɞ\x20Conve','HXyHv','eXwYm','bot\x20ini_','_Fitur\x20khu','seMessage','facebook.c','neko','iJnhR','57c1ba2fca','iv.entry-b','t/download','fbaudio','high','igtv','LsDtd','\x20div\x20>\x20div','JmVSH','e-6','videos','me/65.0.33','jRZUw','t1000','following','_Sticker\x20t','OqBrW','💬\x20〉ɞ\x20Textp','.*?)\x27\x5c);','bsVlD','ource_url=','entationml','user','🖼️\x20〉ɞ\x20Logo\x20','Pnufl','https://yo','qSjIs','audio/webm','sourcecode','3Fq%3D','_Gambar\x20ka','uPXVF','gambar\x20cew','\x20Chrome/52','emuHC','_avec_le_c','dengan\x20com','\x20Chrome/88','3z1.jpg','KyIqs','Menu','VAbIv','te.json','c.us','kiss','andai\x20memb','kaiCp','\x20Safari/53','n.entry-sh','\x0a\x0a•\x20ZEEONE','.0.4515.10','onQbM','span.metad','rt\x20Menu','_Fitur\x20unt','baka','floor','ROlLC','cOWot','Cogan','/p_2032vcy','e-22','👨‍👨‍👧‍👦\x20〉ɞ\x20Group','berapa\x20saa','BKOQM','div.thumb','7326@s.wha','accept-lan','Ovaxv','tuk\x20user\x20p','lVnpx','hcXzb','NwIzUejRCO','yrRIZ','cEAQY','onlygcAdmi','LOADER\x20」--','\x20Media','\x20menggunak','ecko/20100','FRJMx','\x20bot_','GNFYC','wA0mo','DoFVh','cGAws','e-1','enggunakan','avatar','pat','storagecmd','trump','DwiWU','NkBAVg8GMe','rjvSP','e-10','7.0)\x20Gecko','buttonText','JJqgF','ba\x20ulangi\x20','method','\x0a*🌀\x20Url\x20:*','rce/get/?s','r\x20textpro.','33-1621622','chats','oIPpt','buQqw','LtqPt','i\x20lebih\x20me','..._','F_FXVALexP','\x20hentai*','nnagen&tex','images','div.mozaiq','ari/537.36','hsQWA','om/','rnveg','futanari','ww.xnxx.co','-officedoc','woof','priceAmoun','fdppt','BJrqn','*📫\x20Title\x20:','s.whatsapp','zvfjj','ufBtY','e-4','+0Mjbi7yii','semoji','DhrBm','\x20itu','api/ejecte','opHWV','erofeet','\x0a*📆\x20Upload','TUBE\x20AUDIO','remium\x20saj','each','e-3','./zeeone/z','mp4','aFLMc','gan\x20cara\x20k','Example\x20:\x20','KqYvo','xt/javascr','rsion/10.1','e-8','buttonsRes','GAkeD','\x20.amongus\x20','on\x20below','81IUq16cHj','NEkOd','thumbnailU','igned-exch','JsLDj','./image/','bGiXV','x-guest-to','\x20>\x20p\x20>\x20spa','imageeffec','dvFlM','XNXX\x20SEARC','PzuSC','*----「\x20FAC','NuUFT','wYYDy','catch','_Gambar\x20co','hanks\x20To','\x0a---------','uLAYO','fileName','2\x20Safari/6','FRFbH','_Menampilk','pageCount','ung-','\x0a⭔\x20Mimetyp','token','PNklx','=\x20false\x20\x0ac','Please\x20Sub','https://bo','player_res','fbhd\x20','BtLxc','t.com/reso','WqCOY','5727880763','NguTf','Zv7ttfk8LF','YWoOw','e-5','6\x20Safari/5','t0x7ZdIvui','.php?url=','🐚\x20〉ɞ\x20Keran','ion/xml;q=','QuHod','*_Cowo_*','%7D%7D&_=1','wxQhp','BMdgd','h\x20list\x20emo','a!\x20Upgrade','ipt\x20bot','product','hololewd','PweVb','CKckT','DHQSY','BbXBY','dari\x20batas','https://va','.0.4430.93','gxVOy','*📧\x20Size\x20Sd','e\x20>\x20span\x20>','🗯️\x20〉ɞ\x20Photo','sebentar\x20a','https','rRqxb','GaQlQ','IVBsk','sh;\x20Intel\x20','utu.be/1O2','qFhnW','RQbRk','SEcOb','Regard\x20@','\x20motivasi\x20','o-k40Q-gO_','VDnus','eoZro','hNCvz','ephemeralM','Hi\x20@','_Menanmpil','*🔗\x20Link\x20:*','downloadcm','iUgME','jYFUx','Source\x20scr','x\x20x86_64;\x20','HdxEy','YEQHq','rsWTz','ZRTrM','\x20tidak\x20di\x20','ime|orange','header\x20>\x20d','PZBnd','SlideBig\x5c(','/15.15063','me_','twDUj','accept','1|6|0|7|3|','idetag\x20di\x20','GJCQq','aZu4faWG/C','Check\x20Limi','get','productId','EvYoN','convertcmd','\x20disajikan','SQJEo','update','weLfW','WYNBu','tkBIS','https://te','LSOJP','size','DQMQf','PMyci','VZlsg','\x20\x0a▶️\x20Durati','video_info','pvXAe','nWpDlmrk','1203630226','fKobZ','emojimix','=id&cf=fal','e-16','fbaudio\x20','✨\x20*Followi','SELECT\x20HER','ErNsn','WrktE','nama','yimpan\x20med','pi/v2/img/','_Mendapat\x20','GPCnB','*🌍\x20Type\x20:*','api-create','----\x0a','•\x20\x20','ekQwD','FHDJx','MogrJ','aQWrD','GjYUT','々\x20Judul\x20:\x20','LtfNO','yuri','BleXB','facebooksd','BY\x20ZEEONE\x20','image/jpeg','cMFza','body','PaUAW','-hZIVPLsI7','me/67.0.33','.0.3865.12','r\x20photooxy','primboncmd','ter-','peGqY','r.setVideo','uGQctUWRUR','tvroq','image/','37.36\x20(KHT','e\x20Gecko)\x20V','NUxLh','ntent','H\x20」-------','ponse','an\x20bot\x20ini','hAZDD','aVSRI','96.87\x20Safa','vvIZp','3595319159','686474581_','yer-bg\x20>\x20s','profilePic','*📚\x20Url\x20:*\x20','\x20media\x20you','gnbEr','m\x20terdafta','image','likes','0_9_3)\x20App','title','mpEUF','INCxi','🫂\x20〉ɞ\x20Big\x20T','eReSD','exec','line/conve','vsSLn','HSgCH','ZDyKm','fBxrC','ketahui_','ml.documen','ixIRz','g\x20dikirim_','etch_conte','DISABLE\x20VE','QBGpL','yang\x20akan\x20','tuk\x20link_','ata','content','u\x20bot\x20sila','sage\x20menu','_Merubah\x20f','ttmp4','oxy\x20Menu','tqto','en68','irxNp','\x09\x09\x09\x09\x0a*🎀\x20Ti','ogo\x20game\x20k','PXEIN','\x20\x0a\x0aPowered','berkontrib','wnvideo.ne','\x20dalam\x20ben','DgutQ','wo\x20random_','PtpQR','lizard','an\x20bot_','ro\x20Menu','uWXLW','song','cript:nth-','narik\x20deng','div[class=','xrqeE','MtVlT','Emoji-Sams','n.entry-vi','0FGwkw==','globalObje','_Semua\x20fit','w.xnxx.com','groups','601.2.7\x20(K','ded','m/c/zeeone','upcmd','TUBE\x20PLAY\x20','le|red|whi','eeoneofc','e-7','asupancmd','cmm','hn2Sqy4nHf','cOGiC','PwuLs','Upgrade\x20Pr','replace','alloc','jOUrT','jelpj','uery','Emoji-Mess','roECT','RESPONSE','productMes','FaCbG','AmenK','aHlxA','net/v2/?lc','sebentar\x20m','videoHeigh','Pilih\x20medi','e-17','SINGLE_SEL','LMwZX','tyfHY','sik\x20berdur','arian:\x20','/p_2032xlj','SQRFI','emoji','ekzYd','asi\x20pendek','\x0a⏰\x20Durasi\x20','video_1','pb1.jpg','listMessag','top4top.io','emojinya?','*✉️\x20Size\x20Mp','https://h.','AlIad','ngan\x20cara\x20','oformatRen','gLdpa','JmIQW','BzJIn','1000000000','Sewa\x20☕','lub/page/',')\x20AppleWeb','👭\x20〉ɞ\x20Gacha','enu','tiktokwm','fbhd','er\x20dalam\x20g','rain_de_se','feed','https://d.','elName','kSIaK','.7,ms;q=0.','oQwNe','Emoji-JoyP','fbsd','https://j.','2e1.jpg','ji\x20silahka','🎦\x20〉ɞ\x20Asupa','Instagram\x20','fsUtN','xk1.jpg','bsERV','ken','*?)\x27\x5c);','\x0a*🚀\x20Qualit','\x20Chrome/90','jid','oader','feet','an\x20fitur\x20c','Url169\x5c(\x27(','💽\x20〉ɞ\x20Sound','EOPTz','eAsUu','cogancmd','text/html,','etik\x20@veri','https://e.','photo','elakukan\x20h','_masturber','nUluf','+Ia+Dwib70','1203630399','wucnk','\x20database.','Kirim\x20peri','\x20Cecan','kan_','https://i.','dkMnH','di\x20bawah.','https://ap','wYDcP','dCYQ&conte','bHwgQ','gYhjq','\x20NT\x2010.0;\x20','book-','🕌\x20〉ɞ\x20Islam','01.2.7','rm-urlenco','\x20>\x20article','*Link*\x20:\x20','All\x20menu\x20b','\x20terlebih\x20','\x20unsur\x2018+','\x20Gecko/201','00101\x20Fire','mzrWL','DYmJV','LIST\x20EMOJI','zffKP','&q=','qWtOc','p.metadata','sAkJf','l\x20:*\x20','\x0a*👎\x20Dislik','kanna','lication/s','💌\x20*Followe','idex-','owner','WjXy5iQk17','BOT','oto\x20menjad','tagcmd','UfbFX','Slide\x5c(\x27(.','includes','Mybvu','RIFY','ck|blue|br','playmp4','igstory','katalog','age\x22]','ng\x20:*\x20','Qrbhg','ephoto360c','NgUjh','Tes\x20aja\x20om','bWPEe','6PbPevf','applicatio','epl.co/api','forwarding','FXHwV','WeAaK','hLTvJu4FA3','ZKvwZ','e..._','h\x20list\x20men','participan','rYxgG','000','mediaUrl','ersion/11.','fileEncSha','osoft-','028@g.us','📛\x20*Usernam','🤖\x20〉ɞ\x20All\x20m','ya\x20kak🥰','mime','KJafe','rty=\x22og:im','footerText','m/video-13','rFaNc','603.3.8','\x0a🍃\x20Views:\x20','YEYKm','bGc=','youtubesho','bot_','ownerChann','INQUIRY','*💢\x20Total\x20:','all','feetg','CATALOG','g\x20status\x20m','TDRbQ','oading\x20fil','OFC','elegram\x20Ra','v9gIBMu9tX','LfcMp','bxTPv','xnxxsearch','deo:height','VF3r/5012f','Emoji-Micr','yUjow','MpZjU','videoType','/p_2032z7a','mjclG','QQppi','sApp-','_Membuat\x20l','ail','JFUfG','soundcmd','active','6288743504','cCHAQ','e-9','ps://youtu','_Fitur\x20bot','📸\x20〉ɞ\x20Ephot','Emoji-Open','kUzRF','tpE=','hidetag','&data=%7B%','false%7D%2','xMsmq','cTrGH',':*\x20','umolv','ares','length','om_','lamic_','mgfQW','wkePf','✓\x20OWNER','YMsYMtnlnb','guI23fWDz1','xt_on_reso','kiUjZ','ugRuJ','.us','smug','PkSdg','t-update.z','Qpnlm','SmvKx','ElGUZ','mimetype','\x20>\x20ul\x20>\x20li','instatv','nangkan\x20😇,','mdOaY','FCAXE','ih!\x20Don\x27t\x20','\x20(KHTML,\x20l','thumbnails','fhmAA','mctdA','eroyuri','cfaHD','*🎀\x20Title\x20:','IFino','username','Usage:\x20','blowjob','value','*----「\x20XNX','OolDZ','ery%22%3A%','_transpare','readFileSy','\x20Silahkan\x20','sheet','TUBE\x20VIDEO','6281385402','facebookhd','🌁\x20〉ɞ\x20Sourc','ontoh|true','28777','tweets','r.setThumb','cum','XwemP','TvERc','xnxxdl','TmjXP','mediaType','cefron.nl/','rtun\x20yang\x20','NqRLq','Emoji-What','othercmd','_Kata-kata','ownercmd','share_coun','Hasil\x20Penc','nerJid','\x20ini\x20adala','bTU=','igvideo','eren_','gecg','match','t\x20ini_','ZqiIa','instagrams','hentaivide','ATSeP+KLh+','e-20','X\x20DOWNLOAD','ttdownload','0\x20(Macinto','kYt]*','BWHCq','SiUAS','fZxef','rape_ma_de','vnVst','qYNZL','0_9_5)\x20App','sSticker','oBVRz','6288279575','LoRGS','ODby7_MoRY','rv:57.0)\x20G','i.simsimi.','CfmEF','fUhMC','sR9D2RS5JS','post','qXZTz','kuni','_Untuk\x20men','VtrKX','audio/mpeg','x/88.0','Picture','fromMe','OAxLX','liYPX','VENlO','LyhFI','Emoji-Appl','JPUGZ','scribe\x20htt','dWzRx','🗃️\x20〉ɞ\x20Stora','Not\x20a\x20Twit','ana?\x20','ML,\x20like\x20G','VvSrD','----------','hkan\x20dipil','🗯️\x20〉ɞ\x20Quote','OcTKJ','--*\x0a\x0a','ve&collect','type','descriptio','an\x20menu\x20is','ySLJt','rYrnV','an\x20fitur\x20d','4W5fYrjbea','📸\x20〉ɞ\x20Image','dul\x20video\x20','\x20:*\x20','holo','LMbst','UOGMZ','sendMessag','category','7.36','SIauX','9a236a4','en?type=ch','🎰\x20〉ɞ\x20Fun\x20M','pxZhb','PHOTO','bA1B2pJ18r','processing','eron','ize','https://ti','instareels','MzXmO','KHTML,\x20lik','relayWAMes','asa\x20depan_','.0.4324.10','_Sumber\x20bo','bxBly','ifw49HeBAD','R*\x0a\x09\x09\x09\x09\x0a','sendVideoA','\x20akun\x20mu\x20s','Znxsv','_Mempostin','y\x20:\x20','channel','Zxdha','AqVaV','status','cors','push','bx/mFEB8SW','e-21','FEFLp','femdom','JWpTf','resource_r','igphoto','kitchen_v5','ECT','Cspgd','rzXGp','Contributi','message','Reply','0\x20(X11;\x20Li','aUhlO','ldtbY','WrQcE','Win64;\x20x64','ZoceV','externalAd','results','bcusw','AKWqG','isForwarde','YzNDE','AKEQT','facebookau','udio\x20senda','LJKjIJt54f','mpvTK','untu;\x20Linu','8ball','fileSha256','&impostor=','fbAvO','ZgtkI','wallpaper','rty=\x22og:vi','ews','ument.word','GWLRP','rty=\x22og:du','ixZvn','nux\x20x86_64','rl\x20:\x20','fDqId','kos.life/a','com/1.1/gu','https://do','oiqNr','files','\x20」----*\x0a\x09\x09','6199803015','https://sf','kPiI3/Xxar','6282193115','btKsZ','s\x20Menu','1610993486','XKdlW','fWYMc','pa\x20saat\x20la','instagram.','\x20Gecko)\x20Ve','605.1.15\x20(','\x20|\x20','listRespon','sqziu','0_11_6)\x20Ap','amongus','bTjIy','in\x20','YreJv','0_10_5)\x20Ap','ument.spre','Linknya?','limit','ponseMessa','yRUNX','n/json,\x20te','AR5b5YFz2g','n/xhtml+xm','prjTm','TnwoP','html','utube.com/','tiktok.com','urce%22%3A','🎀\x20Title\x20:*','stickerMes','instareel','?key=AIzaS','data-src','IRCfZ','DEKSp','jrpQm','2/featured','rVgMc','n\x20dipilih!','DSAnC','lewd','\x20span','selectedBu','HtrXX','\x0a🌐\x20Height\x20','funcmd','OhWOR','\x0a🚀\x20Upload\x20','bNpQC','nWzbm','YvhAG','en?type=tr','\x20fitur\x20ini','jAKPd','AUDIO','ZUfSa','Ex\x20:','UrlLow\x5c(\x27(','utu.be/zq2','qTGQV','00587','XUQIG','bnMtt','JMSxH','\x0a⭔\x20Source\x20','quoted','\x20:*\x20sd,\x20hd','JBpuD','deo:type\x22]','\x0a\x0a_Tunggu\x20','find','_Orang²\x20ya','remoteJid','GzHDa','success','TRyMw','trwfi','mvDfo','Koqhl','_Logo\x20make','*📩\x20Size\x20Hd','COBdH','n/x-www-fo','buat\x20karya','C%22contex','e-19','imageMessa','sWmEr','OJoJW','ecko)\x20Chro','api/imageg','97m/gdkX/D','w.pinteres','ubEiK','⭔\x20Title\x20:\x20','VRftk','0.8,es;q=0','allmenu','🙍‍♂️\x20Owner','&raw=7','\x0a*😎\x20Channe','uPhEW',';q=0.8,app','KZqeL7byF+','.com_','NjrRt','textprocmd','eJmyz','uSzcL','\x0a*⚙️\x20Size\x20:','thumbnail','log','qJpPk','deo:width\x22','cZMlR','ttmp3','adsheetml.','.2\x20Safari/','6285716360','GoSuA','format','%2Fsearch%','kXrt+8eqBg','ytshorts','input','yNBUU','ntah\x20*','vqVKG','videoDetai','UWBqL','g.whatsapp','.enc?oh=3f','lmzRx','jFMuD','\x20」----*','100000','Ftyff','PQLKy','prmsc','photooxycm','dHrkh','les','h%22%3Afal','\x20」----*\x0a\x0a*','join','NUurN','Click\x20butt','eGeNm','buttons','75d72720ba','pinterest2','BWuJY','ftHJt','gfCkQ','mi-soeur_v','duration','sewabot','Dilarang\x20m','entries','298655YncLEg','yRY=','asi\x20lebih\x20','qHAqk','makercmd','&text=','MvNHV','instaphoto','Facebook','0\x20(X11;\x20Ub','PcQia','tiktok','pleWebKit/','🎨\x20〉ɞ\x20Maker','enger-','dari\x20web\x20e','on\x20Menu','Sub\x20Menu\x20k','Maker','src','\x20&\x20mp3\x0a','_Untuk\x20mem','pinterest','zKHAP','rs\x20:*\x20','\x22input-gro','verifikasi','3\x20:*\x20','OkcEI','pp.net','sageFromCo','YFAfx','37.36','0_9_4)\x20App','xnxxdownlo','formattedS','dislikes','\x0a•\x20HADS\x0a•\x20','Emoji-Twit','/alpha/v15','usi\x20dalam\x20','cv1.jpg','EL\x0a•\x20SATRI','ytmp4','goprem','e\x20Code','\x20」----*\x0a\x09\x0a','bb87660.pn','0@s.whatsa','CFWiF','e-12','hentai','9\x22]','selectedDi','💌\x20Informat','\x20MB','37.36\x20Edge','video','an\x20button\x20','mount1000','se%2C%22qu','headers','tpwXOQusBR','ayDia','video/mp4','iv.entry-a','legra.ph/f','play','4i1.jpg','AM\x20STORY*\x20','\x0a⭔\x20Shares\x20','verify','JLYVk','💋\x20*Fullnam','JYgSK','b5e33a30ee','VKKol','salahan\x20co','json','ter\x20URL','JqnfA','\x20https://i','e-23','YcdGb','r\x20di\x20dalam','PeAFR','\x0a🔗\x20Url\x20:\x20','mengandung','uk\x20bermain','*MEDIAFIRE','ntfilter=h','Vvtcv','se&text=','22%3A%7B%2','nyurl.com/','7\x20Safari/5','pUhgA','QyUdZ','groupcmd','tywcD','642_840952','Pilih\x20sala','pTRko','BCklS','KLrvQ','views','Emoji-LG-','&crewmate=','XFmkc','full_text','anal','NvAsj','efore-titl','O\x20\x0a•\x20FATIH','nsfw\x20on','ownload_','YcSZr','\x0a*📺\x20Views\x20','0.11;\x20rv:4','iXkqY','code','ytmp4\x20','FGmuG','derer','_Random\x20ga','xyzAf','46316544@g','zYLuq','.net/d/f/A','BaBuk','rv:88.0)\x20G','_Hem\x20apaya','durasi','FNMzp','avif,image','content-ty','audioMessa','RzyNN','sendEpheme','ike\x20Gecko)','32761430_n','MDbfS','DhAvy','⬆️\x20〉ɞ\x20Up\x20Me','nEWye','tVGHp','documentMe','enu\x20bot','igdl','ytmp4\x20[lin','oba\x20bebera','Terjadi\x20ke','a\x20yang\x20ing','info','0\x20(X11;\x20Da','ytmp3\x20','wait','erorLink','\x20Chrome/69','uDFCo','RCSEk','sus\x20owner\x20','LIST\x20MENU\x20','85.125\x20Saf','GKfWT','islamiccmd','👸\x20〉ɞ\x20Anime','slap','https://ne','rimu\x20menye','z4puTs%3D1','3934706020','1.2\x20Safari','\x20kamu\x20belu','mpostor\x20=\x20','xlYJp','Url','xHOQZ','5|4|8|9|2','0_10;\x20rv:3','split','kan\x20fitur\x20','FZNjAqSMng','Kit/537.36','rv:47.0)\x20G','Mozilla/5.','basEx','37.75.14\x20(','kalAv','sage','sapp.net','aPhxy','ng\x20pernah\x20','LKVhc','tcmd','krdLo','Hai\x20@','ezbJC','kerangcmd','Emoji-HTC-','g\x20Menu','GyFCI','XkphZ','bG0=','contentTex','link','URL','Bearer\x20AAA','0\x20(Windows','HrZbL','origin','PjpJF','businessOw','YCjgj','instavideo','xcfiL','3AGWWjCpTn','headerType','UVlqx','t.com/','TPoaH','authorizat','dislike','#primary\x20>','medias','.be/w4iQ4r','🔖\x20List\x20Sew','HmNwq','🔖\x20〉ɞ\x20Tag\x20M','koFmu','buttonsMes','video\x20>\x20a','USD','\x20by\x20@','peRDC','User-Agent','cript\x20Bot\x20','https://wa','/p_2032o0l','\x20Chrome/65','ZllsT','ge\x20Menu','sourceUrl','0f7eb.jpg','nsfwcmd','Enable','FBvZW','HMZgh','498-161976','ri/537.36','in\x20kamu\x20do','tukgB','dahulu\x20den','kIjkR','meta[prope','attr','nor.google','2Fpins%2F%','text','LGdsK','DOCUMENT','video*\x20_Ju','e/apng,*/*','nsfwmo','es\x20:*\x20','EDPCH','256','ended','ssage','ytmp3\x20[lin','nNAkv','filter','uTjWT','XMLHttpReq','HLS\x5c(\x27(.*?','kobot.xyz/','gasm','ifu.pics/a','ration\x22]','KqXMq','locationMe','mentionedJ','*🔗\x20Url\x20:*\x20','tuWOM','tnZKR','container','select\x20the','.0.3497.10','ral','ockeO','8764016UYquEc','RHzKT','_Tunggu\x20be','IDAIo','0.9,image/','D3MAaYx15D','igh&media_','👙\x20〉ɞ\x20Nsfw\x20','a0errAFnXx','ofc','playerMicr','rSYgq','\x20https://w','caption','pwankg','YLKSI','fZroO','Url\x5c(\x27(.*?','rows','microforma','essage','splayText','ndom_','\x20|\x20Request','jMaQg','Xnxx\x20Searc','fox/68.0','=0.9,en;q=','dicari_','\x20mediafire','Oeicr','fter-title','fbdl','ZluxK','934@g.us','hILLA','videoMessa','e-15','header\x20>\x20h','viewCount','PpVBm','cecancmd','hug','oJoUC','cum_jpg','agmJQ','eeoneofc.r','mbar\x20wibu_','ngif','le-','ctizR','Server\x20err','t\x20media\x20ak','Audio','📖\x20List\x20Men','ur\x20bot_','LOLlo','\x20Semoga\x20ha','o360\x20Menu','tryAgain','getProfile','454101KsnyGF','&\x20menyesat','Masukkan\x20q','followers','random','nsfw_neko_','VINZ\x0a•\x20MIS','tsapp.net','URGjx','UrlHigh\x5c(\x27','e-24','ntities','HzCdL','VsxKZ','lQNMO','esponse','🤷\x20〉ɞ\x20Other','umptweet&t','cfjlf9oWS6','ange;v=b3;','mbwZw','youtube.co','/search/','\x20tiktok_','oGltW','999999999','formats','XRTkd','base\x20bot_','source','sfGWF','key','document','e-25','cuddle','empty','img','jVxdk','aKpvQ','SOtuq','quality','KihSn','male','html5playe','salahan,\x20c','ttonId','eSmbj','com','STADr','apis.com/v','JNBrC','ero','Gdnon','No\x20media','/p_2032mwb','0\x20Safari/5','*📭\x20Quality','WNraZ','XvdxI','cope%22%3A','ALL\x20MENU\x20B','Aaiha','\x0a⭔\x20Categor','WEhBO','PNRMj','t%22%3A%7B','NAhxD','AAAAAAAAAA','telegramcm','geCount','username\x0ai','\x20Effect','tkvDp','play\x20query','*\x0a\x0a','igreels','poke','2392537DWuWnj','🐨\x20Owner','href','guage','onvert_','vcRjY','dsynl','x/57.0','aXgQw','%22pins%22','nlZqf','endsWith','e_hentai*','🏅\x20Source\x20S','hentaivid','contextInf','rIhJa','TtHHN','snppL','dio'];_0xa985=function(){return _0x4af034;};return _0xa985();}function _0x23c4(_0x42e50c,_0x151853){const _0x1c0bfb=_0xa985();return _0x23c4=function(_0x3601ed,_0x84dfdb){_0x3601ed=_0x3601ed-(-0x10f5+0x1c59+-0x9*0x116);let _0x44c6a7=_0x1c0bfb[_0x3601ed];return _0x44c6a7;},_0x23c4(_0x42e50c,_0x151853);}const ini_bc_gc_bang=_0x3e2150=>{function _0x1b0d14(_0x16908b,_0xe2c4dc,_0x3a009a,_0x4f3d8d){return _0x4aa842(_0x3a009a- -0x5d1,_0xe2c4dc-0x13,_0x3a009a-0xcf,_0x16908b);}const _0x4195f2={'xSMph':function(_0x37d583,_0xc31b27){return _0x37d583!==_0xc31b27;},'uYJCC':_0xf8a5e5(0x6ca,0x4de,0x85c,0x780),'PtpQR':_0x1b0d14(0x166,0x23c,0x252,0x208),'czktH':function(_0x1df9b0,_0x3da9fc,_0x5895d9,_0x572617,_0x5a21be,_0x1081ca,_0x497d49){return _0x1df9b0(_0x3da9fc,_0x5895d9,_0x572617,_0x5a21be,_0x1081ca,_0x497d49);},'ElGUZ':'owner','OMLaO':'🔖\x20List\x20Sew'+'a'};var _0x349470=alpha[_0xf8a5e5(-0x3,0x3f6,0x5f5,0x2a7)][_0x1b0d14(0xf9,0x3e,0x16c,0x142)]()[_0xf8a5e5(0x6c4,0x6c7,0x77b,0x76a)](_0x1d9158=>_0x1d9158[_0x1b0d14(0x328,-0x1f9,0xfa,0x1ee)][_0xf8a5e5(0x638,0x6d7,0x7ab,0x812)]('g.us'));function _0xf8a5e5(_0x4e50af,_0x5d9828,_0x11bbfc,_0x403958){return _0x4aa842(_0x403958- -0x29b,_0x5d9828-0xaa,_0x11bbfc-0x1d,_0x11bbfc);}let _0x30caab=_0x3e2150;for(let _0x1fa39e of _0x349470){if(_0x4195f2[_0xf8a5e5(0x6eb,0x556,0x9a5,0x862)](_0x4195f2['uYJCC'],_0x4195f2[_0x1b0d14(-0x1cc,-0x20b,0x93,0x153)])){const _0x3db67c={};_0x3db67c[_0x1b0d14(0x634,0x81a,0x5b5,0x286)+'t']='🐨\x20Owner',_0x4195f2[_0x1b0d14(0x791,0x502,0x503,0x39f)](sendButLocation,_0x1fa39e['jid'],_0x1b0d14(0x708,0x48d,0x53d,0x62e)+'*'+enter+enter+_0x3e2150,''+tampilTanggal+enter+tampilWaktu+enter+enter+'©\x20'+creator,pp_bot,[{'buttonId':_0x4195f2[_0xf8a5e5(0x526,0x2bd,0x44a,0x4df)],'buttonText':_0x3db67c,'type':0x1},{'buttonId':_0xf8a5e5(0x427,0x80e,0x993,0x658),'buttonText':{'displayText':_0x4195f2['OMLaO']},'type':0x1}],{});}else throw new _0xfa11fa('Not\x20a\x20Twit'+_0x1b0d14(0x476,0x639,0x374,0x4e0));}};function _0x4aa842(_0x15f5a0,_0xf6210f,_0x3f89cc,_0x22304c){return _0x23c4(_0x15f5a0-0x313,_0x22304c);}const ini_bc_pc_bang=_0x5302d7=>{function _0x104aa0(_0x46f76a,_0x3ef92,_0x475576,_0x146a15){return _0x44f626(_0x46f76a- -0x419,_0x146a15,_0x475576-0x19d,_0x146a15-0xfa);}function _0x3737af(_0x3b4511,_0x51c923,_0x156493,_0x59d96e){return _0x4aa842(_0x156493- -0x4ad,_0x51c923-0x12c,_0x156493-0x11d,_0x3b4511);}const _0x35d0aa={'RQbRk':_0x104aa0(0x5cb,0x899,0x6b3,0x299)+_0x3737af(0x4d3,0x754,0x535,0x44c)+_0x3737af(0x7fb,0x3ca,0x6d4,0x3c5)+_0x3737af(0x298,0x6b2,0x5bd,0x8cc)+'m/c/zeeone'+_0x3737af(0x2de,0x4fa,0x574,0x884),'BaBuk':function(_0x417932,_0x1a98d7){return _0x417932!==_0x1a98d7;},'UOGMZ':'IzdYD','ASZwE':_0x3737af(0xa1,0x304,0xae,0x10),'hcSrp':function(_0x1d6c6c,_0x199977,_0x1de63c,_0x3e5f30,_0x3919d8,_0x99ff5c,_0x1b51b6){return _0x1d6c6c(_0x199977,_0x1de63c,_0x3e5f30,_0x3919d8,_0x99ff5c,_0x1b51b6);},'AKWqG':_0x104aa0(0x220,0x409,0x34f,-0x69),'eJmyz':_0x104aa0(0x5bf,0x783,0x632,0x7de),'qtHWd':_0x104aa0(0x40f,0x11b,0x6aa,0x182),'mOAjN':_0x104aa0(0x4f4,0x431,0x659,0x196)+'a'};var _0x521716=alpha[_0x104aa0(0x5e,-0x175,0x3a5,0xe6)][_0x104aa0(0x259,0x1ae,-0x49,0x175)]();let _0x557dcf=_0x5302d7;for(let _0x76693 of _0x521716){if(_0x35d0aa[_0x104aa0(0x493,0x283,0x690,0x5e9)](_0x35d0aa[_0x3737af(0x47f,0xc5,0x349,0x34e)],_0x35d0aa['ASZwE']))_0x35d0aa['hcSrp'](sendButLocation,_0x76693[_0x3737af(0x529,-0xcb,0x21e,0xc4)],'*BROADCAST'+'*'+enter+enter+_0x5302d7,''+tampilTanggal+enter+tampilWaktu+enter+enter+'©\x20'+creator,pp_bot,[{'buttonId':_0x35d0aa[_0x104aa0(0x34d,0x2e9,0x25a,0x2ef)],'buttonText':{'displayText':_0x35d0aa[_0x104aa0(0x3de,0x5d1,0x340,0x2a3)]},'type':0x1},{'buttonId':_0x35d0aa[_0x104aa0(0x63f,0x957,0x884,0x5b2)],'buttonText':{'displayText':_0x35d0aa['mOAjN']},'type':0x1}],{});else{const _0x17b47d={};_0x17b47d['update']=_0x35d0aa[_0x104aa0(0xdf,-0x265,0x38,-0x1e0)],_0x4b9493=_0x17b47d;}}};switch(command){case _0x4aa842(0xab0,0xd15,0xc12,0x781):case'hvid':case _0x4aa842(0x7b6,0x89e,0x6bd,0xb29)+'o':{const _0x5d5156={};_0x5d5156['displayTex'+'t']=_0x4aa842(0x5e5,0x621,0x71e,0x6b0)+'t';const _0x301720={};_0x301720[_0x44f626(0xa10,0x704,0x6f8,0xa0d)]='limit',_0x301720[_0x4aa842(0x53a,0x5bb,0x852,0x265)]=_0x5d5156,_0x301720[_0x44f626(0x71f,0x76a,0x497,0x944)]=0x1;if(isLimit(sender,isPremium,isCreator,isOwner,limitawal,limit))return sendButMessage(from,lang[_0x44f626(0x79c,0x632,0x7a3,0x930)](prefix),'©\x20'+ownername,[_0x301720]);const _0x5755a4={};_0x5755a4[_0x44f626(0xabb,0xaa9,0x879,0x872)+'t']=_0x4aa842(0x9eb,0xb1b,0xd04,0xa80);const _0x13b004={};_0x13b004[_0x44f626(0xa10,0x709,0x6e3,0xd1c)]=_0x4aa842(0x968,0x9a9,0x92a,0x811),_0x13b004[_0x4aa842(0x53a,0x62c,0x461,0x674)]=_0x5755a4,_0x13b004[_0x4aa842(0x7ea,0x680,0xb17,0x6b0)]=0x1;if(!isNsfw&&!mek[_0x44f626(0x9a9,0x79d,0x8a4,0xb78)][_0x44f626(0x70b,0x8b3,0x4a5,0x92f)]&&!isOwner&&!isCreator)return sendButMessage(from,lang[_0x44f626(0x932,0x7e0,0x6fd,0x66e)](),'©\x20'+ownername,[_0x13b004]);function hentai(){function _0x2541af(_0x31aab5,_0x12d8c2,_0xc9c80,_0x203938){return _0x44f626(_0x31aab5-0x80,_0x203938,_0xc9c80-0x1be,_0x203938-0x105);}function _0x57d5a7(_0x4fed1e,_0x977920,_0x1c6d18,_0x1a0bab){return _0x44f626(_0x977920- -0x323,_0x4fed1e,_0x1c6d18-0x13,_0x1a0bab-0x4f);}const _0x3b287f={'URGjx':_0x57d5a7(0x465,0x116,-0xf6,-0x141),'hAZDD':_0x2541af(0x50e,0x2fc,0x3ae,0x793)+_0x57d5a7(0x9bf,0x711,0x3f7,0x651),'tSCfu':_0x2541af(0xaa9,0x919,0x961,0x856),'aYfCd':_0x57d5a7(0x55c,0x650,0x3e0,0x31c)+'2','OqBrW':'header\x20>\x20h'+_0x57d5a7(0x9ca,0x796,0x679,0x533),'MzXmO':_0x2541af(0xa59,0xb8c,0xb7a,0x832),'CFWiF':'header\x20>\x20d'+_0x2541af(0x48f,0x7cf,0x481,0x33e)+'efore-titl'+'e\x20>\x20span\x20>'+_0x57d5a7(0x4be,0x492,0x629,0x23f),'FIjaX':_0x2541af(0x817,0x4f5,0xada,0xaa0),'BLbHD':function(_0x5193ec,_0x20e415){return _0x5193ec(_0x20e415);},'kaiCp':_0x57d5a7(-0x12e,0x1ec,0x47a,-0x42)+'iv.entry-a'+'fter-title'+'\x20>\x20p\x20>\x20spa'+_0x57d5a7(-0xf2,0x282,0x254,-0xcd)+'ews','GStkn':_0x57d5a7(0x324,0x22a,0xdb,-0x45),'LGdsK':_0x57d5a7(0x54d,0x68b,0x89c,0x941),'KqYvo':_0x57d5a7(0x4dc,0x5ef,0x29f,0x540),'Koqhl':function(_0x4dfb48,_0x392cab){return _0x4dfb48(_0x392cab);},'MvNHV':_0x57d5a7(0x3f5,0x5e7,0x710,0x2d5)+_0x57d5a7(0xaf,0xf2,0x44d,0x3fa)+_0x57d5a7(0x547,0x38e,0x1ed,0x75)+_0x2541af(0x6a4,0x3d1,0x334,0xa0f),'umolv':function(_0x3e16ac,_0x135af){return _0x3e16ac+_0x135af;},'VOnZG':_0x57d5a7(0x451,0x462,0x15f,0x6d3)+_0x2541af(0xb33,0xcf5,0x7f0,0x839)+_0x2541af(0x664,0x89f,0x30f,0x5a9)};return new Promise((_0x4bd902,_0x5b27a4)=>{function _0x401038(_0x41e697,_0x4fbee4,_0x15ab70,_0x2afb9d){return _0x2541af(_0x2afb9d- -0x470,_0x4fbee4-0xfe,_0x15ab70-0x1a,_0x41e697);}const _0x36600f=Math[_0x401038(-0x1a2,0x324,0x1e1,0x56)](Math[_0x401038(0x538,0x4d5,0x3c9,0x59e)]()*(0x1*0x11c3+-0x2*0x467+-0x39*0x14));function _0x2f12af(_0x8614ac,_0x547f91,_0x3dcbeb,_0x5597ef){return _0x57d5a7(_0x5597ef,_0x3dcbeb-0x3ab,_0x3dcbeb-0x1eb,_0x5597ef-0x11a);}axios[_0x401038(0x42d,-0x8e,0xc5,0x12b)](_0x3b287f[_0x401038(0x515,0x182,0x5c9,0x2ac)](_0x3b287f['VOnZG'],_0x36600f))[_0x2f12af(0x95c,0xc5a,0xb40,0xc1e)](_0xffcf27=>{const _0x1bd0c3={'hQZxu':_0x3b287f[_0x5855d4(0x749,0x7a1,0x79a,0x6cc)],'liYPX':_0x3b287f[_0x5855d4(0x370,0x372,0x6b5,0x6d2)],'VPSpe':function(_0x2721f5,_0x51cd58){return _0x2721f5!==_0x51cd58;},'FaCbG':_0x3b287f['tSCfu'],'BWuJY':function(_0x5d6b9f,_0x5ad8df){return _0x5d6b9f(_0x5ad8df);},'EDPCH':_0x3b287f['aYfCd'],'cVLTO':_0x3b287f[_0x5855d4(0x8,0x22d,-0x10a,0x394)],'uviCo':_0x3b287f[_0x1b8060(0x33c,0x2e,-0x25,0x425)],'zYLuq':_0x3b287f[_0x1b8060(0x45d,0x313,0x66c,0x1e8)],'fBxrC':_0x3b287f[_0x1b8060(0x6b1,0x495,0x43b,0x542)],'YyfbY':function(_0x38b2c4,_0x5a1a26){return _0x3b287f['BLbHD'](_0x38b2c4,_0x5a1a26);},'aQWrD':_0x3b287f[_0x5855d4(0x222,0x24b,0x383,-0x41)],'rYrnV':_0x5855d4(0x6a6,0x7b6,0x86f,0x673),'jOUrT':_0x3b287f[_0x1b8060(0x626,0x3d3,0x65f,0x477)],'SfGjg':function(_0x15da3f,_0x571112){return _0x15da3f(_0x571112);},'DwiWU':_0x3b287f[_0x1b8060(0x52f,0x5aa,0x69c,0x621)],'GJCQq':function(_0x1fd611,_0x1a28c9){function _0x24e4f7(_0x2ee305,_0x510a48,_0x2a868b,_0x513a7c){return _0x1b8060(_0x2ee305- -0x32,_0x510a48-0x172,_0x2a868b,_0x513a7c-0x1db);}return _0x3b287f[_0x24e4f7(0x624,0x64c,0x3d8,0x649)](_0x1fd611,_0x1a28c9);},'zffKP':_0x3b287f[_0x1b8060(0xa4,0x3c8,-0x25a,0xb4)]},_0x438126=cheerio[_0x5855d4(0x2f,0x205,0x3f2,-0xda)](_0xffcf27[_0x1b8060(0x6a7,0x5a6,0x447,0x3a2)]);function _0x1b8060(_0x35fdfa,_0x1f5ce4,_0x3eb801,_0x3e0f16){return _0x2f12af(_0x35fdfa-0xb5,_0x1f5ce4-0xd7,_0x35fdfa- -0x487,_0x3eb801);}const _0x45a228=[];function _0x5855d4(_0x253006,_0x4dea6c,_0x23e7bd,_0x32bbd7){return _0x2f12af(_0x253006-0x187,_0x4dea6c-0x54,_0x4dea6c- -0x279,_0x32bbd7);}_0x3b287f[_0x1b8060(0x3db,0x3ed,0x3cc,0x109)](_0x438126,_0x3b287f[_0x1b8060(0x432,0x20e,0x102,0x707)])[_0x5855d4(0x316,0x2ab,0x2d4,0x11c)](function(_0x3f1cfc,_0x26d8d9){function _0x3ce051(_0x36e932,_0x284102,_0x584cc6,_0x57b027){return _0x5855d4(_0x36e932-0x180,_0x284102- -0xc7,_0x584cc6-0xed,_0x584cc6);}function _0x52d0b7(_0x3b27d8,_0xf622ea,_0x37f25c,_0x52f6f8){return _0x1b8060(_0x52f6f8-0x27f,_0xf622ea-0x20,_0x3b27d8,_0x52f6f8-0x47);}_0x1bd0c3['VPSpe'](_0x1bd0c3[_0x3ce051(0x4ba,0x30a,0x124,0x54c)],_0x52d0b7(0x9ff,0x7e9,0xb6f,0x8a9))?_0x463a00[_0x3ce051(0x4e5,0x496,0x5fe,0x719)](_0xc4c5c['id'][_0x52d0b7(0x1c1,0x57e,0x18e,0x439)](_0x1bd0c3['hQZxu'],_0x1bd0c3[_0x3ce051(0x618,0x455,0x304,0x116)])):_0x45a228['push']({'title':_0x1bd0c3[_0x3ce051(0x518,0x56b,0x489,0x210)](_0x438126,_0x26d8d9)[_0x52d0b7(0x41c,0x93d,0x889,0x652)](_0x1bd0c3[_0x3ce051(0x55a,0x67c,0x826,0x30c)])[_0x52d0b7(0x461,0xa83,0x766,0x7ad)](),'link':_0x438126(_0x26d8d9)[_0x52d0b7(0x62b,0x852,0x79b,0x652)](_0x1bd0c3['cVLTO'])[_0x52d0b7(0x468,0xacb,0x7e1,0x7aa)](_0x1bd0c3[_0x52d0b7(0x77b,0x5fb,0x8d1,0x8f0)]),'category':_0x438126(_0x26d8d9)[_0x3ce051(0x7d3,0x51a,0x32d,0x373)](_0x1bd0c3[_0x3ce051(0x651,0x5f2,0x578,0x817)])[_0x3ce051(0x6d6,0x675,0x9ba,0x899)]()['replace'](_0x1bd0c3[_0x52d0b7(0x24a,0x23c,0x645,0x3fc)],''),'share_count':_0x1bd0c3['BWuJY'](_0x438126,_0x26d8d9)[_0x3ce051(0x890,0x51a,0x1e2,0x519)](_0x52d0b7(0x9a,0x472,0x22,0x38f)+_0x52d0b7(0x636,0x5b2,0x4a3,0x6ec)+_0x52d0b7(0x6aa,0x49e,0x491,0x7ec)+_0x52d0b7(0x2c4,0x516,0x17a,0x333)+_0x3ce051(0x35d,0x186,-0x8b,0x1df)+_0x52d0b7(0x64a,0x376,0x303,0x51d))['text'](),'views_count':_0x1bd0c3['YyfbY'](_0x438126,_0x26d8d9)['find'](_0x1bd0c3[_0x52d0b7(0x6f1,0x65a,0xb5,0x3c5)])[_0x52d0b7(0x894,0x773,0x66a,0x7ad)](),'type':_0x438126(_0x26d8d9)[_0x52d0b7(0x465,0x479,0x54f,0x652)](_0x1bd0c3[_0x3ce051(0x2a4,0x46b,0x53e,0x1c4)])[_0x52d0b7(0xace,0x75f,0x742,0x7aa)](_0x3ce051(0x596,0x467,0x73b,0x3df))||_0x1bd0c3[_0x3ce051(0x677,0x303,0x1d1,0x30b)],'video_1':_0x1bd0c3[_0x52d0b7(0x9ef,0x71a,0xc36,0x8f6)](_0x438126,_0x26d8d9)[_0x3ce051(0x5c9,0x51a,0x818,0x35a)](_0x1bd0c3[_0x3ce051(0x74a,0x46b,0xfd,0x3ad)])['attr'](_0x3ce051(0x66d,0x586,0x5d4,0x4d3))||_0x1bd0c3[_0x52d0b7(0x825,0x61a,0x6c8,0x8f6)](_0x438126,_0x26d8d9)[_0x3ce051(0x2c8,0x51a,0x57b,0x3f8)](_0x1bd0c3[_0x3ce051(-0x9e,0x1b2,0x49a,-0xf1)])[_0x52d0b7(0x6ee,0x834,0x8ad,0x7aa)](_0x52d0b7(0x7b6,0x787,0x412,0x62c)),'video_2':_0x1bd0c3[_0x52d0b7(0x4bc,0x245,0x197,0x398)](_0x438126,_0x26d8d9)[_0x52d0b7(0x505,0x92d,0x3f0,0x652)](_0x1bd0c3[_0x52d0b7(0x5d0,0x203,0x5c8,0x4ae)])[_0x3ce051(0x978,0x672,0x5d5,0x970)](_0x1bd0c3[_0x3ce051(0x467,0x7b8,0xaa6,0x5be)])||''});}),_0x4bd902(_0x45a228);});});}hentai()[_0x44f626(0xab8,0xc16,0xcbe,0xaed)](async _0xcafcba=>{function _0x425875(_0x556e67,_0xaeaf54,_0x357ed5,_0x2a207c){return _0x4aa842(_0xaeaf54- -0x1cf,_0xaeaf54-0x24,_0x357ed5-0x71,_0x357ed5);}const _0x34cf34={'snppL':function(_0x4da3f8,_0xdd48e6){return _0x4da3f8(_0xdd48e6);}};result=_0xcafcba[Math[_0x425875(0x127,0x342,0x2d0,0x5a4)](Math[_0xca6794(0x591,0x271,0x7f9,0x347)](),_0xcafcba[_0xca6794(0x2a1,0x52c,0x320,0x4ef)])];function _0xca6794(_0x204c2e,_0x1c371c,_0x111405,_0x40f392){return _0x4aa842(_0x204c2e- -0x4c8,_0x1c371c-0xb5,_0x111405-0xd6,_0x1c371c);}alpha['sendMessag'+'e'](m[_0xca6794(0x649,0x901,0x7f1,0x6c8)],await _0x34cf34[_0x425875(0xc3d,0x8e5,0xa9b,0x7ab)](getBuffer,result[_0x425875(0x7d2,0x4d1,0x5b5,0x55c)]),video,{'caption':_0xca6794(0x3ed,0x4f3,0x2ae,0x15c)+result[_0xca6794(0x175,0x309,0xf1,-0x3f)]+(_0x425875(0x64b,0x8c4,0x94b,0xb53)+_0x425875(0x5ea,0x644,0x386,0x92d))+result[_0x425875(0x63d,0x629,0x2c2,0x509)]+(_0xca6794(0xc9,-0x23f,-0x7c,0x8b)+_0xca6794(0x694,0x74d,0x578,0x9cf))+result[_0xca6794(0x322,0x164,0x1c3,0x7)]+(_0x425875(0x69e,0x8f5,0xbfa,0x79c)+'\x20')+result['views_coun'+'t']+(_0x425875(0x626,0x76d,0x42f,0x9a3)+':\x20')+result[_0x425875(0x85b,0x5db,0x50b,0x785)+'t']+(_0xca6794(0x3cf,0x113,0x2df,0x59f)+':\x20')+result[_0x425875(0x4d7,0x7f4,0xa6f,0xa74)]+('\x0a⭔\x20Media\x20U'+_0x425875(0x35b,0x678,0x654,0x3bd))+result[_0xca6794(0x1d8,0x99,0x53,0x141)],'quoted':mek});});}case _0x4aa842(0xafc,0x812,0xc42,0xdf2):case _0x4aa842(0x775,0x9be,0x7d8,0x8c4):case _0x44f626(0x9ac,0xaf6,0x6b2,0xcbc):case _0x4aa842(0x79d,0xa66,0x63a,0x4c2):case _0x4aa842(0x99d,0xb94,0xaea,0xb1a):case _0x44f626(0x819,0xaeb,0xb7b,0x794):case'erokemo':case'bj':case _0x4aa842(0xa26,0x8e7,0xac9,0xd68):case _0x4aa842(0x532,0x495,0x32b,0x603):case _0x4aa842(0xaa1,0x9e1,0xaef,0xcbb):case _0x44f626(0x5ec,0x844,0x7d8,0x79c):case _0x44f626(0x98f,0xa53,0x7ad,0x6b4)+'gif':case'pussy':case _0x44f626(0x673,0x6f7,0x4fb,0x994):case _0x44f626(0x445,0x475,0x596,0x120):case _0x44f626(0x977,0xcde,0x827,0x6bc):case _0x4aa842(0x505,0x4a3,0x7e8,0x57b):case'tickle':case'spank':case _0x44f626(0x705,0x6cf,0x941,0xa2a):case'classic':case'boobs':case _0x4aa842(0x964,0xc0d,0xadf,0x777):case _0x4aa842(0xa48,0xa11,0x7a8,0xa2e):const _0x2d2fc7={};_0x2d2fc7[_0x44f626(0xabb,0xcb0,0x9df,0x96a)+'t']=_0x44f626(0x51a,0x7c0,0x1c4,0x739)+'t';const _0x2af63b={};_0x2af63b[_0x44f626(0xa10,0xa49,0xc8d,0x837)]=_0x4aa842(0x867,0x9c5,0x595,0x7c5),_0x2af63b[_0x4aa842(0x53a,0x7b9,0x358,0x4c8)]=_0x2d2fc7,_0x2af63b[_0x44f626(0x71f,0x408,0x870,0x3c6)]=0x1;if(isLimit(sender,isPremium,isCreator,isOwner,limitawal,limit))return sendButMessage(from,lang['limit'](prefix),'©\x20'+ownername,[_0x2af63b]);const _0xaa9eea={};_0xaa9eea[_0x4aa842(0xb86,0xa9d,0xe2d,0x9bb)+'t']='Enable';const _0x15d499={};_0x15d499[_0x44f626(0xa10,0xd37,0xca3,0xd02)]=_0x44f626(0x89d,0xb2a,0x79e,0x556),_0x15d499[_0x44f626(0x46f,0x3cb,0x3a5,0x435)]=_0xaa9eea,_0x15d499['type']=0x1;if(!isNsfw&&!mek[_0x4aa842(0xa74,0xda4,0x909,0xcdb)][_0x4aa842(0x7d6,0x7ce,0xb0a,0x986)]&&!isOwner&&!isCreator)return sendButMessage(from,lang[_0x4aa842(0x9fd,0x9a1,0x787,0xcf5)](),'©\x20'+ownername,[_0x15d499]);var ini_gif=await fetchJson(_0x44f626(0x8d3,0xab4,0xbdb,0xb42)+_0x44f626(0x77e,0x7ad,0xa41,0x441)+_0x4aa842(0x606,0x8c0,0x8d3,0x850)+command),ini_gif_=await getBuffer(ini_gif['url']);alpha[_0x4aa842(0x80f,0xa98,0x7e2,0xae2)+_0x44f626(0x6f9,0x3e2,0x43b,0x3bf)](m[_0x4aa842(0xb11,0xb99,0x907,0xde4)],ini_gif[_0x4aa842(0xb28,0x8de,0xd4b,0x807)],mek,{'packname':q['split']('|')[0x18d*-0xe+-0x20*-0x50+0xbb6]?q['split']('|')[0x3*-0xca5+0x2d8+0x2b3*0xd]:packname,'author':q[_0x44f626(0x8df,0x961,0x76f,0x9e6)]('|')[0x6d2+0xe4*0x3+-0x15b*0x7]?q['split']('|')[-0x8d+0xc54+-0xbc6]:author});break;case _0x44f626(0x602,0x3ba,0x875,0x780):case'lewdkemo':case _0x4aa842(0x554,0x822,0x2f3,0x37e):case _0x4aa842(0xa0a,0x746,0x9a1,0x932):case'solo':case _0x44f626(0x76f,0x8ef,0x7e3,0x7ce):case _0x44f626(0xaba,0xc48,0xd0b,0xda3):case _0x4aa842(0x531,0x21b,0x548,0x490):case _0x44f626(0x9bd,0x8a1,0xb5f,0xb46):case _0x4aa842(0x5af,0x8ac,0x87d,0x802):case _0x44f626(0x6e6,0x454,0x866,0x381):case _0x44f626(0x729,0x9eb,0x56e,0x994):case'fox_girl':case'tits':case _0x44f626(0x6bb,0x784,0x844,0x7df):case'holoyero':case _0x44f626(0x59a,0x62c,0x706,0x31b):case _0x4aa842(0x614,0x39a,0x8c6,0x8d3):case'keta':case _0x4aa842(0x4d7,0x3b0,0x38e,0x7a3):case _0x4aa842(0x929,0xc5b,0xa2f,0xb5e):case _0x44f626(0x737,0x85b,0x41f,0x80a):case'erok':case'kemonomimi':case _0x4aa842(0xa44,0xc32,0x93d,0xaea):case'nsfw_avata'+'r':case _0x44f626(0x498,0x353,0x23d,0x3cc):case _0x4aa842(0xb96,0xd85,0xd53,0xe7b):case _0x44f626(0x774,0xa5c,0xa59,0x5ef):case _0x4aa842(0x78c,0x4c9,0x5e9,0x46e):case _0x44f626(0x752,0x6e7,0x4f9,0x8aa):case'trap':case _0x4aa842(0x87f,0x928,0x5dd,0xac0):case'pussy_jpg':case _0x4aa842(0x551,0x1dd,0x25f,0x6b8):case _0x4aa842(0x4bb,0x823,0x787,0x647):const _0x35c60c={};_0x35c60c[_0x4aa842(0xb86,0xb4f,0xd71,0x8e2)+'t']=_0x4aa842(0x5e5,0x49e,0x697,0x82c)+'t';const _0xa3f11={};_0xa3f11[_0x44f626(0xa10,0xb4e,0xc04,0xb57)]=_0x4aa842(0x867,0xb14,0x8ed,0xba4),_0xa3f11['buttonText']=_0x35c60c,_0xa3f11[_0x4aa842(0x7ea,0x6a1,0x98f,0x5bf)]=0x1;if(isLimit(sender,isPremium,isCreator,isOwner,limitawal,limit))return sendButMessage(from,lang[_0x4aa842(0x867,0xab5,0x76a,0x52a)](prefix),'©\x20'+ownername,[_0xa3f11]);const _0x4046a2={};_0x4046a2[_0x4aa842(0xb86,0xb3f,0xeda,0x93f)+'t']=_0x44f626(0x920,0x8de,0x634,0x9a4);const _0x4b39d0={};_0x4b39d0[_0x4aa842(0xadb,0xb2f,0x8c4,0x8d7)]='nsfw\x20on',_0x4b39d0[_0x44f626(0x46f,0x2e6,0x2d5,0x5de)]=_0x4046a2,_0x4b39d0[_0x4aa842(0x7ea,0xae5,0xa61,0xb3c)]=0x1;if(!isNsfw&&!mek[_0x44f626(0x9a9,0xa29,0xbdf,0xbdb)][_0x44f626(0x70b,0x762,0x9e5,0x731)]&&!isOwner&&!isCreator)return sendButMessage(from,lang[_0x4aa842(0x9fd,0xa8a,0x75c,0xb5c)](),'©\x20'+ownername,[_0x4b39d0]);var ini_img=await fetchJson(_0x44f626(0x8d3,0xa85,0xa5d,0x69b)+'kos.life/a'+_0x44f626(0x53b,0x5a3,0x1cd,0x50f)+command);sendFileFromUrl(m[_0x44f626(0xa46,0xb3e,0xa8a,0x9d0)],ini_img[_0x44f626(0xa5d,0xc2d,0x960,0x806)],lang['success'](),mek)[_0x44f626(0x4bb,0x6b7,0x14b,0x487)](_0x121923=>{function _0x5c5892(_0x170528,_0x594a6a,_0x39cf3f,_0x2378e4){return _0x4aa842(_0x39cf3f- -0x53e,_0x594a6a-0xbd,_0x39cf3f-0x115,_0x170528);}reply(lang[_0x5c5892(0x2ed,0x863,0x515,0x48d)]());}),await limitAdd(sender,limit);break;case'waifu':case'loli':{const _0x163ee1={};_0x163ee1[_0x4aa842(0xb86,0xa4a,0xb88,0xa9e)+'t']=_0x4aa842(0x5e5,0x832,0x754,0x7d7)+'t';const _0x41886d={};_0x41886d[_0x44f626(0xa10,0xc8c,0xbbd,0xb6b)]=_0x4aa842(0x867,0x9c7,0x779,0xba3),_0x41886d[_0x44f626(0x46f,0x292,0x61a,0x272)]=_0x163ee1,_0x41886d[_0x44f626(0x71f,0x518,0x408,0x3cd)]=0x1;if(isLimit(sender,isPremium,isCreator,isOwner,limitawal,limit))return sendButMessage(from,lang[_0x4aa842(0x867,0x8c1,0x5d4,0x87d)](prefix),'©\x20'+ownername,[_0x41886d]);let pe=await fetchJson(_0x44f626(0x918,0xc05,0xb60,0x764)+_0x44f626(0x940,0x926,0x933,0xc5f)+'pi/sfw/wai'+'fu')[_0x4aa842(0xb83,0xd9a,0xb8e,0xa1e)](async _0x5a2fe4=>{const _0x3c1d1a={'fiCvU':function(_0x15f41d,_0x558680,_0x26ee5f,_0x381719,_0x26ab80){return _0x15f41d(_0x558680,_0x26ee5f,_0x381719,_0x26ab80);}};function _0x344d41(_0xea0a9d,_0x3b5549,_0x4ff36a,_0x59d7d1){return _0x4aa842(_0x59d7d1- -0x404,_0x3b5549-0x1c2,_0x4ff36a-0x179,_0x3b5549);}_0x3c1d1a['fiCvU'](sendFileFromUrl,m['chat'],_0x5a2fe4['url'],lang[_0x344d41(0x43d,0x5f6,0x44f,0x49d)](),mek);});await limitAdd(sender,limit);}break;case _0x44f626(0x795,0x5f0,0x9a6,0xa98):const _0x5e803b={};_0x5e803b['displayTex'+'t']=_0x44f626(0x51a,0x723,0x4a8,0x736)+'t';const _0x2694de={};_0x2694de[_0x4aa842(0xadb,0xb92,0xb20,0xcbd)]=_0x44f626(0x79c,0x44c,0x445,0x72c),_0x2694de[_0x44f626(0x46f,0x230,0x1ac,0x331)]=_0x5e803b,_0x2694de['type']=0x1;if(isLimit(sender,isPremium,isCreator,isOwner,limitawal,limit))return sendButMessage(from,lang['limit'](prefix),'©\x20'+ownername,[_0x2694de]);const pref=_0x4aa842(0x78b,0x769,0x922,0x485)+enter+(_0x44f626(0x4a9,0x4e0,0x507,0x57b)+_0x4aa842(0xa9b,0xdda,0x922,0x964)+_0x44f626(0x8d9,0xc0a,0xb56,0x828)+'true\x20/\x20not'+_0x4aa842(0xb40,0x82d,0xa4e,0x817)+_0x44f626(0x4c9,0x2da,0x5ce,0x4c9)+_0x4aa842(0xadf,0xc68,0xcd4,0xaf2)+_0x4aa842(0x70e,0xa43,0x4e3,0xa20)+'own|cyan|d'+'arkgreen|l'+_0x4aa842(0x5d9,0x8d3,0x81d,0x4d5)+'|pink|purp'+_0x4aa842(0x67b,0x947,0x8dc,0x352)+'te|yellow\x20')+enter+enter+_0x44f626(0x7c4,0x70c,0x76c,0xab5)+enter+'\x20'+prefix+(_0x4aa842(0xb22,0xdb6,0xbca,0xd8d)+_0x44f626(0x6ce,0x71e,0x73c,0x660)+'|cyan');if(args[_0x4aa842(0x769,0x84a,0x743,0x794)]<0x531+-0x66*0x1f+0x395*0x2)return reply(pref);var kntl_=args[_0x4aa842(0x8e7,0x6c4,0x932,0x762)]('\x20'),nama_=kntl_[_0x4aa842(0x9aa,0x9d1,0xd00,0x6f8)]('|')[0x3*-0x75+0x2254+-0x20f5],impostor_=kntl_[_0x4aa842(0x9aa,0x936,0x9fd,0x8c8)]('|')[0x21f0+-0x44*0x42+-0x11*0xf7],color_=kntl_[_0x44f626(0x8df,0xaf4,0x740,0x8e4)]('|')[0x1*-0x1de+-0x1*0x260d+0x27ed*0x1];const _0x2e67fc={};_0x2e67fc['method']=_0x4aa842(0x5e6,0x7cc,0x43f,0x3c1);var amongus=await getBuffer(_0x4aa842(0x5b5,0x802,0x2e2,0x471)+_0x4aa842(0x7a3,0x687,0x6f0,0x737)+_0x44f626(0x496,0x803,0x2b8,0x61c)+'d?name='+nama_+_0x4aa842(0x83c,0x961,0x8cc,0x7f4)+impostor_+_0x44f626(0x896,0x8ee,0x5db,0x895)+color_,_0x2e67fc);amongusp=''+lang[_0x44f626(0x7d6,0x7e0,0x998,0x9ec)]()+enter+enter+(_0x44f626(0x4ca,0x636,0x574,0x522)+_0x44f626(0x712,0x8c3,0x6a5,0x471)+_0x4aa842(0x75b,0xa31,0x45c,0xab1)+_0x44f626(0x90c,0x89f,0x6a3,0x93a)+_0x4aa842(0x52c,0x22c,0x5ea,0x528)),alpha['sendMessag'+'e'](from,amongus,image,{'thumbnail':Buffer[_0x4aa842(0x685,0x93c,0x7f9,0x8b0)](0xb*0x2c5+-0x35f+-0x363*0x8),'caption':lang[_0x44f626(0x7d6,0x604,0x968,0x50c)](),'quoted':mek}),await limitAdd(sender,limit);break;case'tweettrump':case _0x4aa842(0x534,0x852,0x6f1,0x23d):case'tweet':if(args['length']<-0x26fd+-0x108a+-0x2*-0x1bc4)return reply('..');const _0x551da9={};_0x551da9[_0x44f626(0xabb,0xa02,0x91e,0xdfb)+'t']=_0x4aa842(0x5e5,0x375,0x78c,0x448)+'t';const _0x2876a0={};_0x2876a0[_0x44f626(0xa10,0x7aa,0x935,0xd22)]=_0x4aa842(0x867,0x55f,0x846,0x96a),_0x2876a0[_0x44f626(0x46f,0x4f8,0x74a,0x654)]=_0x551da9,_0x2876a0[_0x4aa842(0x7ea,0x4fb,0x530,0x665)]=0x1;if(isLimit(sender,isPremium,isCreator,isOwner,limitawal,limit))return sendButMessage(from,lang['limit'](prefix),'©\x20'+ownername,[_0x2876a0]);let trump=args['join']('\x20');const _0x564e98={};_0x564e98[_0x44f626(0x472,0x4f8,0x3a0,0x2c8)]=_0x4aa842(0x5e6,0x615,0x3d5,0x61f);let trump1=await fetchJson(_0x44f626(0x8d3,0xa06,0xc44,0x9d1)+_0x4aa842(0xa09,0xc42,0x76b,0x885)+_0x4aa842(0x8b1,0xaac,0x9c4,0x8fd)+_0x44f626(0x7bf,0xa22,0x931,0x9e0)+_0x4aa842(0xa66,0xb75,0x95d,0x706)+'ext='+trump+_0x44f626(0x7ef,0x5be,0x7ea,0xb27),_0x564e98),trump2=await getBuffer(trump1[_0x4aa842(0x826,0x8b0,0x8be,0xa96)]);alpha[_0x4aa842(0x7f7,0x967,0x58e,0x9b0)+'e'](from,trump2,image,{'thumbnail':Buffer[_0x4aa842(0x685,0x51e,0x87f,0x85d)](0x256a*-0x1+-0x8fe*0x2+0x1bb3*0x2),'caption':lang[_0x4aa842(0x8a1,0x6a7,0x672,0xb09)](),'quoted':mek}),await limitAdd(sender,limit);break;case _0x4aa842(0x67f,0x568,0x802,0x49b):if(args[_0x44f626(0x69e,0x535,0x668,0x4cf)]<0x211c+-0xd*-0x3f+-0x3*0xc1a)return reply('..');const _0x16fe02={};_0x16fe02[_0x4aa842(0xb86,0xdd5,0x8d0,0xbf6)+'t']=_0x44f626(0x51a,0x854,0x1c6,0x200)+'t';const _0x23c9e3={};_0x23c9e3[_0x4aa842(0xadb,0xc7c,0x77b,0xdf8)]=_0x4aa842(0x867,0x64a,0x5e9,0x630),_0x23c9e3[_0x4aa842(0x53a,0x49d,0x7b2,0x29c)]=_0x16fe02,_0x23c9e3[_0x4aa842(0x7ea,0xafc,0x9ec,0x72e)]=0x1;if(isLimit(sender,isPremium,isCreator,isOwner,limitawal,limit))return sendButMessage(from,lang[_0x4aa842(0x867,0xbad,0x5c0,0x980)](prefix),'©\x20'+ownername,[_0x23c9e3]);let cmm=args[_0x4aa842(0x8e7,0xba8,0x5aa,0x632)]('\x20');const _0x3f9c85={};_0x3f9c85['method']='get';let anuuu=await fetchJson(_0x44f626(0x8d3,0x8ac,0xaa7,0x8af)+_0x44f626(0x93e,0x938,0xa80,0xb02)+_0x4aa842(0x8b1,0xac3,0x7ff,0xa86)+_0x4aa842(0x7fc,0x509,0xa17,0x74a)+'angemymind'+_0x44f626(0x830,0x622,0x61c,0x9e2)+cmm+_0x4aa842(0x8ba,0x735,0x576,0xab3),_0x3f9c85),bbuffer=await getBuffer(anuuu[_0x44f626(0x75b,0x85e,0xac0,0x71a)]);alpha['sendMessag'+'e'](from,bbuffer,image,{'thumbnail':Buffer[_0x44f626(0x5ba,0x740,0x7de,0x29c)](0xccc+0x8c0+0xac6*-0x2),'caption':lang[_0x4aa842(0x8a1,0xa73,0x9bb,0xbb9)](),'quoted':mek}),await limitAdd(sender,limit);break;case _0x44f626(0x635,0x34b,0x833,0x8e4):if(args[_0x44f626(0x69e,0x6b6,0x83f,0x358)]<-0x21ef+0x1f42+-0x1*-0x2ae)return reply('..');let kanna=args[_0x4aa842(0x8e7,0x8d3,0x582,0xb72)]('\x20');const _0x308d0d={};_0x308d0d[_0x44f626(0x472,0x7da,0x64e,0x4e4)]='get';var anu_=await fetchJson(_0x4aa842(0x99e,0x8ee,0xa47,0xc4a)+_0x4aa842(0xa09,0x924,0xa48,0xc80)+'api/imageg'+'en?type=ka'+_0x4aa842(0x54a,0x878,0x7f1,0x25d)+'t='+kanna+'&raw=7',_0x308d0d);let buffer_h=await getBuffer(anu_[_0x4aa842(0x826,0x6f1,0x64e,0x9f1)]);alpha['sendMessag'+'e'](from,buffer_h,image,{'thumbnail':Buffer[_0x44f626(0x5ba,0x301,0x8b1,0x41e)](0xf*-0x15+-0x556*-0x3+-0xec7),'caption':lang[_0x4aa842(0x8a1,0xa8b,0x9e4,0xad6)](),'quoted':mek}),await limitAdd(sender,limit);break;case'sc':case'source':case _0x44f626(0x42a,0x1f1,0x4d0,0x150):try{opo=await fetchJson(_0x44f626(0x4cb,0x5ad,0x4db,0x623)+_0x44f626(0x6ac,0x55e,0x768,0x937)+_0x4aa842(0xa46,0xd13,0x84a,0x905)+_0x4aa842(0x71b,0x744,0x7f5,0x5c4)+_0x44f626(0x852,0x8e9,0x5b0,0x59d));}catch{const _0x2b565c={};_0x2b565c[_0x44f626(0x521,0x83a,0x317,0x7a2)]='🏅\x20Source\x20S'+_0x44f626(0x917,0x7e3,0x64f,0x81d)+_0x44f626(0xab6,0xe11,0xde2,0xaad)+'youtube.co'+_0x4aa842(0x678,0x39f,0x72b,0x6ee)+_0x4aa842(0xa21,0xd1f,0xd28,0x7fb),opo=_0x2b565c;}let kl=opo['update'];var sjakolan=await getBuffer(_0x4aa842(0x5f0,0x630,0x29b,0x728)+_0x4aa842(0x938,0xc17,0xc76,0x8b6)+'ile/e2c139'+_0x4aa842(0x941,0x7a7,0x986,0xc00)+_0x44f626(0x91e,0xbe9,0x92b,0x9ad));const _0x3e7692={};_0x3e7692[_0x44f626(0xabb,0xd57,0xa54,0x7ee)+'t']=_0x44f626(0xa50,0x918,0x9b1,0xd15);const _0x5a4deb={};_0x5a4deb[_0x4aa842(0xadb,0xb2f,0x87a,0xa4f)]='Command',_0x5a4deb[_0x4aa842(0x53a,0x5a0,0x545,0x6bc)]=_0x3e7692,_0x5a4deb[_0x4aa842(0x7ea,0x9e9,0xb1d,0x6bf)]=0x1;const _0x575668={};_0x575668[_0x44f626(0xabb,0xc09,0xe1f,0x82d)+'t']=_0x4aa842(0x76e,0x88d,0x72d,0x6ff);const _0x91c68e={};_0x91c68e[_0x4aa842(0xadb,0xa8a,0xbe9,0xdc0)]='owner',_0x91c68e['buttonText']=_0x575668,_0x91c68e['type']=0x1,sendButLocation(from,kl,''+tampilTanggal+enter+tampilWaktu+enter+enter+_0x44f626(0x4fa,0x84c,0x657,0x42c)+ini_mark['split']('@')[-0x1*-0xbc3+0x1dab+-0x2*0x14b7],sjakolan,[_0x5a4deb,_0x91c68e],{'contextInfo':{'mentionedJid':[ini_mark]}});break;case _0x4aa842(0x748,0x927,0xa26,0x3d5):{if(args[_0x4aa842(0x769,0x888,0x87d,0x47e)]<-0x12c1+-0x1*0x1057+0x2319)return reply('Kirim\x20peri'+_0x4aa842(0x8d5,0x954,0xa17,0x847)+(prefix+command)+_0x44f626(0x47e,0x690,0x149,0x2b4));const _0x4446fb={};_0x4446fb[_0x4aa842(0xb86,0xd9b,0x888,0xda2)+'t']=_0x4aa842(0x9eb,0x87a,0xbe6,0x6db);const _0xd259dd={};_0xd259dd[_0x4aa842(0xadb,0xc64,0x897,0x893)]=_0x4aa842(0x968,0x7ee,0x9ac,0xc80),_0xd259dd[_0x44f626(0x46f,0x3c8,0x4af,0x1b3)]=_0x4446fb,_0xd259dd['type']=0x1;if(!isNsfw&&!mek[_0x4aa842(0xa74,0x75a,0xcff,0x749)][_0x4aa842(0x7d6,0x634,0x7a0,0xad9)]&&!isOwner&&!isCreator)return sendButMessage(from,lang['nsfwmo'](),'©\x20'+ownername,[_0xd259dd]);function xnxxsearch(_0x5dfaf3){function _0x56c461(_0x395336,_0x25f58e,_0x1ab599,_0x2c7a3d){return _0x4aa842(_0x25f58e-0x5f,_0x25f58e-0x9e,_0x1ab599-0x30,_0x395336);}function _0x2d5601(_0x279993,_0x4b519b,_0x1eee22,_0x1b0f65){return _0x4aa842(_0x1b0f65- -0x1c3,_0x4b519b-0x151,_0x1eee22-0x7f,_0x1eee22);}const _0x568650={'nlZqf':_0x2d5601(0xaa1,0xb1d,0x741,0x7ca)+_0x56c461(0xcc3,0xae0,0xced,0x872)+'oba\x20bebera'+_0x56c461(0x8f4,0x8b7,0x6f0,0x565)+'gi','ZluxK':function(_0x54c398,_0x4132af){return _0x54c398(_0x4132af);},'CRNOg':_0x56c461(0xc5c,0xa9d,0x89a,0xdd8)+'2','NEkOd':_0x2d5601(0x584,0x946,0x5ae,0x87b)+_0x2d5601(0xbd5,0xbaf,0x769,0x9c1),'TnwoP':_0x2d5601(0x2fb,0x481,0x19a,0x417)+'iv.entry-a'+'fter-title'+'\x20>\x20p\x20>\x20spa'+_0x2d5601(0x549,0x513,0x6a9,0x346)+_0x2d5601(0x510,0x5a0,0x612,0x5a5),'JMSxH':_0x56c461(0xda6,0xad1,0xd76,0x77d),'FCAXE':_0x2d5601(0x940,0x932,0x8dd,0x627),'LtqPt':_0x2d5601(0x83f,0x6c6,0x4c1,0x746),'wkePf':_0x2d5601(0x5ef,0x88e,0x9b9,0x6b4),'FNMzp':_0x56c461(0x6f5,0xa3c,0xd7f,0x933),'cOWot':_0x2d5601(0x7a2,0xae9,0x7f2,0x8e1),'bahXg':function(_0x4580b5,_0x48c27b){return _0x4580b5(_0x48c27b);},'EDDRp':function(_0x17b131,_0x12ae1a){return _0x17b131!==_0x12ae1a;},'fZroO':_0x2d5601(0x7a6,0x8fe,0x35e,0x589),'ctizR':_0x56c461(0x575,0x75b,0x90e,0x576),'QBJdc':_0x2d5601(0x995,0x603,0x81b,0x675),'BesXm':_0x56c461(0x901,0xadb,0xdb4,0xbc8),'aKpvQ':function(_0xfdfd23,_0x1842ac){return _0xfdfd23(_0x1842ac);},'BbXBY':_0x2d5601(0xcf,0x45a,0xb2,0x389)+'ue','DhrBm':function(_0x5a180e,_0x40007d){return _0x5a180e!==_0x40007d;},'CKckT':_0x2d5601(0x105,0x3c2,0x514,0x425),'fZjTc':function(_0x95464c,_0xbe1f80){return _0x95464c!==_0xbe1f80;},'rRqxb':function(_0x3731c8,_0x5d0b16){return _0x3731c8+_0x5d0b16;},'tukgB':'/THUMBNUM/','bRoTD':function(_0x56afb2,_0x32355c){return _0x56afb2(_0x32355c);},'lmzRx':_0x2d5601(0x141,0x31c,0x43b,0x47a),'jelpj':'HmXZg','DSAnC':function(_0x1e0c87,_0x2fe0a2,_0x493630,_0x38d78a,_0x42db57,_0x408fff,_0x3e8a7a){return _0x1e0c87(_0x2fe0a2,_0x493630,_0x38d78a,_0x42db57,_0x408fff,_0x3e8a7a);},'MogrJ':function(_0x407c84,_0x5317b6){return _0x407c84!==_0x5317b6;},'RHzKT':'CnuXG','otfEQ':_0x56c461(0x9cf,0xb32,0xd6d,0xaa4)+_0x2d5601(0x3f4,0x61a,0x769,0x4b1),'SiUAS':function(_0x34fe81,_0x333bfd){return _0x34fe81*_0x333bfd;}};return new Promise((_0x32b0a2,_0x2c09d1)=>{function _0x38cb54(_0x4ddff5,_0x493556,_0x33a71f,_0x33ac46){return _0x2d5601(_0x4ddff5-0x189,_0x493556-0x1a7,_0x493556,_0x33a71f-0x1b9);}function _0x249b66(_0x2bf300,_0x45fe4a,_0x28b583,_0x314d5d){return _0x2d5601(_0x2bf300-0xa6,_0x45fe4a-0x18,_0x28b583,_0x314d5d-0x220);}const _0x345b18={'KlsTV':function(_0x3ccb3a,_0x25e063){return _0x568650['fZjTc'](_0x3ccb3a,_0x25e063);},'PcQia':function(_0x390ea0,_0x27472e){function _0x559153(_0x2a2ee2,_0x3151a0,_0x4473a9,_0x59253b){return _0x23c4(_0x2a2ee2- -0x1d,_0x4473a9);}return _0x568650[_0x559153(0x28d,0x3f7,0x263,0x3af)](_0x390ea0,_0x27472e);},'fBTzH':_0x38cb54(0xb27,0x7cf,0xa9a,0xdde),'JsLDj':_0x568650[_0x249b66(0xb61,0xcf8,0xb71,0xa4e)],'mjclG':function(_0x56149b,_0x2a2482){return _0x568650['bRoTD'](_0x56149b,_0x2a2482);},'oNoTO':_0x568650[_0x249b66(0x7ec,0x9b0,0x907,0x938)],'oQwNe':function(_0x2b9dfe,_0x45f190){return _0x2b9dfe!==_0x45f190;},'prjTm':_0x568650[_0x249b66(0x85e,0x4e7,0x451,0x6e4)],'cGAws':_0x249b66(0x408,0x342,0x2ce,0x510)+'under','Jogpc':function(_0x198a6d,_0x308ce8,_0x36c5c8,_0x46edf9,_0x21f1ef,_0x4e1819,_0x384991){function _0x268104(_0x2ba8c,_0xf4a5a5,_0x3451a2,_0x5e68f2){return _0x38cb54(_0x2ba8c-0x1c,_0xf4a5a5,_0x2ba8c- -0x27,_0x5e68f2-0xd1);}return _0x568650[_0x268104(0x84d,0x991,0xb6d,0xa26)](_0x198a6d,_0x308ce8,_0x36c5c8,_0x46edf9,_0x21f1ef,_0x4e1819,_0x384991);},'ERtZL':_0x249b66(0x746,0x9c7,0x5af,0x761),'pUhgA':_0x38cb54(0xb32,0x73b,0xa99,0x761),'ugRuJ':_0x38cb54(0x96a,0x76e,0x9ce,0x698)+'a'};if(_0x568650[_0x249b66(0x8de,0x938,0x86b,0x66c)](_0x568650[_0x249b66(0x96c,0xdb6,0xb78,0xa76)],_0x568650[_0x38cb54(0x974,0xce5,0xa0f,0x746)]))_0x36a7c3(_0x568650[_0x38cb54(0xd87,0xcb8,0xaa2,0x918)]);else{const _0x5bd3fa=_0x568650[_0x38cb54(0x972,0x9b9,0xac2,0xc7d)],_0x416a10={};_0x416a10[_0x38cb54(0x314,0x35e,0x533,0x64a)]='get',fetch(_0x5bd3fa+_0x249b66(0xc43,0xc98,0xa9c,0xac8)+_0x5dfaf3+'/'+(Math[_0x38cb54(0x6bf,0x5c8,0x507,0x65c)](_0x568650[_0x38cb54(0x80f,0x724,0x7b4,0x9ce)](Math['random'](),0x1d12+0x5*-0x5+0xe7b*-0x2))+(0x1b06*-0x1+0x3cc+-0x139*-0x13)),_0x416a10)[_0x38cb54(0xc83,0xec8,0xb79,0xa33)](_0x218a60=>_0x218a60[_0x249b66(0x7a5,0xc29,0x790,0xa55)]())[_0x38cb54(0xb47,0xd2c,0xb79,0xbd1)](_0x5c8a41=>{const _0x29d46e={'oBVRz':function(_0x3b6fc7,_0x3a5cde){function _0x3299f2(_0x47ec8d,_0x2efe69,_0x48c73f,_0x2c2ae0){return _0x23c4(_0x2efe69- -0x214,_0x2c2ae0);}return _0x568650[_0x3299f2(0x48b,0x512,0x2f8,0x695)](_0x3b6fc7,_0x3a5cde);},'QyUdZ':_0x568650['CRNOg'],'pvXAe':function(_0x9d09f4,_0x5a9391){function _0x276d4b(_0x74a420,_0x211268,_0x4fb439,_0x3e168d){return _0x23c4(_0x74a420- -0xf4,_0x211268);}return _0x568650[_0x276d4b(0x632,0x813,0x59c,0x64a)](_0x9d09f4,_0x5a9391);},'NqRLq':_0x568650[_0x3f5fa6(0x72,-0xf9,-0x8a,-0xb7)],'bTjIy':function(_0x4026b7,_0x3c440a){return _0x4026b7(_0x3c440a);},'WrktE':_0x568650[_0x3f5fa6(0x4be,0x4e,0x55f,0x240)],'tkvDp':_0x4bce6e(0x22,0x260,0x260,0x1b2)+'iv.entry-a'+_0x4bce6e(0x76a,0x6bd,0x566,0x425)+_0x3f5fa6(0x100,-0x7f,-0x1de,-0xb0)+_0x4bce6e(0x5be,0x2f6,0x373,0x568)+_0x3f5fa6(0x274,-0xcb,-0x6f,0x213),'mUjhg':function(_0x34e8cb,_0x42604a){function _0x2c5053(_0x36e88c,_0x42bc24,_0x3c2a21,_0x37629e){return _0x3f5fa6(_0x36e88c-0x44,_0x36e88c,_0x3c2a21-0x45,_0x3c2a21-0x5e9);}return _0x568650[_0x2c5053(0x941,0x92c,0x9f4,0xb37)](_0x34e8cb,_0x42604a);},'LRYZC':_0x568650[_0x3f5fa6(0x50c,0x41e,-0x78,0x268)],'sqziu':_0x568650[_0x3f5fa6(0x1ba,0x2ad,-0x1f6,0x152)],'upzph':_0x568650[_0x4bce6e(0x43c,0x1cb,0xd9,0x277)],'YUOeO':_0x568650[_0x4bce6e(0x610,0x3f3,0x17b,0x23d)],'bnMtt':_0x568650[_0x4bce6e(0x366,0x601,0x53e,0x8f6)],'KbzfX':_0x568650[_0x4bce6e(-0x10e,0x199,0x2fe,0x2f3)],'YvhAG':function(_0x3b5425,_0x37a78a){function _0x11abd8(_0x541bfa,_0x57eac9,_0x5e6f8c,_0x49dbc1){return _0x3f5fa6(_0x541bfa-0x57,_0x57eac9,_0x5e6f8c-0x12a,_0x541bfa-0x2fc);}return _0x568650[_0x11abd8(0x7b1,0x654,0x48e,0xb18)](_0x3b5425,_0x37a78a);},'sfGWF':function(_0x31912b,_0x374e15){return _0x568650['EDDRp'](_0x31912b,_0x374e15);},'ZELSg':_0x568650[_0x3f5fa6(0x619,0x5b9,0x701,0x3fa)],'ockeO':_0x568650[_0x4bce6e(0x820,0x6d0,0x6a2,0x968)]};function _0x4bce6e(_0x323de9,_0x199228,_0x26e66d,_0x4313cd){return _0x38cb54(_0x323de9-0x18,_0x323de9,_0x199228- -0x370,_0x4313cd-0x1a7);}function _0x3f5fa6(_0x3cf739,_0xcd7881,_0x17ce4a,_0x537d85){return _0x249b66(_0x3cf739-0x1ef,_0xcd7881-0xb8,_0xcd7881,_0x537d85- -0x68b);}if(_0x568650[_0x4bce6e(0xa4c,0x755,0x67d,0x9fe)]===_0x568650[_0x4bce6e(0x3f7,0x76a,0x4dc,0x9b2)]){const _0x4291db=_0xe6b2a1[_0x4bce6e(0x44e,0x147,0x19d,0x3e2)](_0x3af682['data']),_0x3e7154=[];_0x29d46e[_0x4bce6e(0x730,0x73c,0x7a9,0x840)](_0x4291db,_0x3f5fa6(0x236,0x57d,0x44d,0x3a7)+_0x4bce6e(0x42f,0x166,0x457,-0x163)+_0x4bce6e(0x63f,0x402,0x32b,0x412)+'\x20>\x20article')[_0x3f5fa6(0x29b,0x78,0x1a9,-0xc7)](function(_0x130fd7,_0x4a61f6){function _0x16e0a6(_0x312d01,_0x4e3c1b,_0x1704bd,_0x27e728){return _0x4bce6e(_0x312d01,_0x1704bd-0x3aa,_0x1704bd-0x1ec,_0x27e728-0x1b4);}function _0x45da7b(_0x177367,_0x578f80,_0x53e3b5,_0x1cca8c){return _0x3f5fa6(_0x177367-0x13d,_0x1cca8c,_0x53e3b5-0xed,_0x578f80-0x20f);}_0x3e7154[_0x16e0a6(0x8b5,0x6b2,0x849,0x96d)]({'title':_0x29d46e[_0x45da7b(0x52e,0x3a6,0x5e8,0x592)](_0x4291db,_0x4a61f6)[_0x16e0a6(0xbe6,0x561,0x8cd,0xb2f)](_0x29d46e[_0x45da7b(0x4e1,0x538,0x583,0x871)])['text'](),'link':_0x29d46e['pvXAe'](_0x4291db,_0x4a61f6)[_0x45da7b(0x2b9,0x47e,0x6e6,0x6d3)](_0x29d46e[_0x16e0a6(0x559,0x7ca,0x7d5,0x6ed)])[_0x16e0a6(0xd51,0xc37,0xa25,0x6b5)](_0x45da7b(0x36d,0x685,0x637,0x55d)),'category':_0x29d46e[_0x16e0a6(0x63a,0x522,0x891,0x530)](_0x4291db,_0x4a61f6)[_0x16e0a6(0x9dd,0xbc3,0x8cd,0x5d7)](_0x16e0a6(0x913,0x341,0x60a,0x5f0)+_0x16e0a6(0x2ac,0x5e9,0x50a,0x6e0)+_0x45da7b(0x532,0x547,0x456,0x82c)+_0x16e0a6(0x8a8,0x472,0x5e9,0x90f)+_0x16e0a6(0x6fa,0x9d8,0x8b0,0x9d2))[_0x16e0a6(0xd13,0x9ad,0xa28,0x7ea)]()['replace']('in\x20',''),'share_count':_0x29d46e[_0x45da7b(0x52e,0x1d9,0x4dd,-0xfe)](_0x4291db,_0x4a61f6)[_0x16e0a6(0x6ea,0xa85,0x8cd,0x917)](_0x29d46e[_0x16e0a6(0x7e6,0x7ed,0x633,0x2f5)])[_0x16e0a6(0x78b,0x990,0xa28,0xb99)](),'views_count':_0x29d46e[_0x45da7b(0x15c,0x442,0x4d4,0x61d)](_0x4291db,_0x4a61f6)['find'](_0x29d46e[_0x45da7b(0x704,0x67e,0x369,0x70f)])[_0x45da7b(0x3d3,0x5d9,0x49f,0x69b)](),'type':_0x29d46e[_0x16e0a6(0xb67,0x797,0xae6,0xdb0)](_0x4291db,_0x4a61f6)[_0x16e0a6(0xb5b,0x564,0x8cd,0x897)](_0x29d46e['LRYZC'])[_0x16e0a6(0xbb1,0xb9b,0xa25,0x830)](_0x29d46e[_0x45da7b(0x477,0x43f,0x1d7,0x128)])||_0x16e0a6(0x884,0x2f9,0x648,0x5d0),'video_1':_0x29d46e[_0x45da7b(0x184,0x1d9,0x2e5,0x44d)](_0x4291db,_0x4a61f6)[_0x16e0a6(0xb8a,0xaee,0x8cd,0x8ba)](_0x29d46e[_0x45da7b(0x57e,0x74d,0x7ec,0x3d8)])[_0x45da7b(0x2f8,0x5d6,0x777,0x453)](_0x29d46e['upzph'])||_0x4291db(_0x4a61f6)['find'](_0x45da7b(0x418,0x65a,0x4b4,0x347))[_0x45da7b(0x91f,0x5d6,0x7c5,0x805)](_0x29d46e['YUOeO']),'video_2':_0x29d46e[_0x16e0a6(0x8a3,0x658,0x628,0x8ed)](_0x4291db,_0x4a61f6)[_0x45da7b(0x12b,0x47e,0x303,0x3d1)](_0x29d46e[_0x45da7b(0x70a,0x476,0x765,0x157)])['attr'](_0x29d46e[_0x16e0a6(0xe69,0x92f,0xb3b,0xb2f)])||''});}),_0x29d46e[_0x3f5fa6(0x295,-0x1cc,-0x118,0x197)](_0x289601,_0x3e7154);}else{const _0x6cf863={};_0x6cf863[_0x4bce6e(0x5f3,0x7cf,0x703,0x887)]=![];let _0x74c2ab=cheerio['load'](_0x5c8a41,_0x6cf863),_0x56aec7=[],_0x480bbc=[],_0x4ad7f6=[],_0x53ec81=[];_0x568650[_0x3f5fa6(0x52e,0x129,0x778,0x44d)](_0x74c2ab,_0x568650[_0x3f5fa6(-0x16c,0x22b,-0x2b8,-0x7b)])[_0x4bce6e(-0x150,0x1ed,0x465,-0x51)](function(_0x12c009,_0x3c352e){function _0x279bdc(_0x344391,_0x128cce,_0x4c9007,_0xc79d89){return _0x4bce6e(_0x4c9007,_0x344391- -0x37a,_0x4c9007-0x176,_0xc79d89-0xd8);}function _0x5c7343(_0x35e733,_0x48b6ed,_0x5b64dc,_0x136291){return _0x3f5fa6(_0x35e733-0x23,_0x5b64dc,_0x5b64dc-0x49,_0x136291-0x61);}const _0x34ec65={'FRFbH':function(_0x3944d9,_0x19c6ab){function _0xc7bd85(_0x593949,_0x4fc561,_0x1f88cb,_0x50b85e){return _0x23c4(_0x1f88cb-0x388,_0x50b85e);}return _0x345b18[_0xc7bd85(0x982,0x9d5,0xb57,0x7f0)](_0x3944d9,_0x19c6ab);},'AANRk':_0x279bdc(0x1ac,0x81,-0x14,0x44a),'QuHod':_0x5c7343(0x6e,0x1b3,0x2f1,-0x3),'bxTPv':function(_0x7d55f6,_0x2987bc){function _0x3b85c4(_0x1c646f,_0x4a1dd5,_0x4d0a8b,_0x271e6d){return _0x279bdc(_0x4d0a8b-0x6e6,_0x4a1dd5-0x131,_0x271e6d,_0x271e6d-0x143);}return _0x345b18[_0x3b85c4(0x85c,0x8e8,0x8f2,0xa3c)](_0x7d55f6,_0x2987bc);},'cpBmI':function(_0x33bea5,_0x223b98){return _0x33bea5(_0x223b98);},'Gdnon':_0x345b18['fBTzH'],'VjuFi':_0x345b18[_0x5c7343(0x25a,-0x63,0x35,-0x53)]};_0x345b18[_0x279bdc(0x5c,0x23a,-0x136,0x140)](_0x74c2ab,_0x3c352e)[_0x5c7343(0x48a,0x63b,0x56d,0x2d0)](_0x5c7343(-0x207,-0x1ed,-0x1cb,-0xb3))[_0x279bdc(-0x18d,0x71,-0x32e,-0x3c5)](function(_0x2613a3,_0x371a4e){function _0x8d7765(_0x3c1a68,_0x156e8e,_0x4e9896,_0x29a500){return _0x279bdc(_0x29a500-0x5c3,_0x156e8e-0x74,_0x4e9896,_0x29a500-0xa1);}function _0x50050d(_0x4a9960,_0x198b4d,_0x4fc0f3,_0x1d3712){return _0x5c7343(_0x4a9960-0xc8,_0x198b4d-0x1a0,_0x4a9960,_0x198b4d-0x690);}_0x34ec65[_0x8d7765(0x535,0x3fd,0x469,0x45c)](_0x34ec65[_0x50050d(0xc41,0xc06,0xf32,0x9dc)],_0x34ec65[_0x50050d(0x88b,0x669,0x455,0x8df)])?_0x480bbc[_0x50050d(0xbb4,0x8dc,0xb06,0xb6d)](_0x34ec65[_0x50050d(0xb69,0x80a,0x6d4,0x5a7)](_0x5bd3fa,_0x34ec65['cpBmI'](_0x74c2ab,_0x371a4e)[_0x8d7765(0xa12,0x564,0x6d5,0x76c)]('a')['attr'](_0x34ec65[_0x50050d(0xbfc,0xb4c,0xa37,0xcc5)])[_0x8d7765(0x2e7,0x326,0x48f,0x553)](_0x34ec65[_0x8d7765(0x426,0x627,0x5a5,0x398)],'/'))):(_0x3b5717+=_0x50050d(0x369,0x61b,0x4fb,0x7c1)+'*\x20'+_0x4b2886[_0x50050d(0x827,0x700,0x973,0x583)]+'\x0a',_0x5018ee+=_0x8d7765(0x4f1,0x745,0x396,0x505)+_0x4347b6['link']+('\x0a---------'+'----------'+'----------'+_0x50050d(0x582,0x8a7,0xa33,0xaa4)+_0x50050d(0x578,0x8a7,0x8d6,0x57e)+_0x8d7765(0x4bb,0x702,0x5fd,0x4da)));});}),_0x568650['ZluxK'](_0x74c2ab,_0x568650[_0x3f5fa6(-0x1e6,-0x33,-0x33c,-0x7b)])[_0x4bce6e(-0x4a,0x1ed,0x8f,-0x12f)](function(_0x3cd958,_0x1bf62c){function _0x24ae0d(_0x318a3c,_0x4c061c,_0x485368,_0x2a91f7){return _0x4bce6e(_0x4c061c,_0x2a91f7-0x36,_0x485368-0x142,_0x2a91f7-0x107);}const _0x3cd169={'wxsuM':function(_0xff7767,_0xd94188){return _0x345b18['mjclG'](_0xff7767,_0xd94188);},'GNFYC':function(_0x1134b1,_0x56bfee){return _0x1134b1(_0x56bfee);},'JVBpO':_0x345b18[_0x24ae0d(-0x128,0x76,0x1c4,0x171)]};function _0x99bb0c(_0x1591e8,_0x3aabfa,_0x576ff5,_0x2b7bad){return _0x4bce6e(_0x1591e8,_0x2b7bad- -0x1de,_0x576ff5-0x6d,_0x2b7bad-0xe1);}_0x345b18[_0x99bb0c(0x17,0x343,0x1f3,0x164)]('HmXZg',_0x345b18[_0x24ae0d(0x4ee,0x88f,0x578,0x529)])?_0x4d798d['push'](_0x3cd169['wxsuM'](_0x5b7c3c,_0x194549)['attr'](_0x24ae0d(0x250,0xc1,-0x54,0x2f9))):_0x74c2ab(_0x1bf62c)[_0x99bb0c(0x3c,0x579,-0x2e,0x345)](_0x345b18[_0x99bb0c(-0x1fa,-0x52,0x23c,-0x2a)])[_0x99bb0c(0x129,-0x35f,-0x19,0xf)](function(_0x16d3b0,_0x1342e0){function _0x5c5b07(_0x24f5c7,_0x5c6aaf,_0x594520,_0x35a1a5){return _0x24ae0d(_0x24f5c7-0x45,_0x594520,_0x594520-0x62,_0x24f5c7- -0x108);}const _0x353213={'ySLJt':function(_0x2c63fe,_0x5617bf){function _0x36fafc(_0x24fc64,_0x386e60,_0x49802b,_0x308a8d){return _0x23c4(_0x308a8d- -0x3a8,_0x386e60);}return _0x29d46e[_0x36fafc(0x2d1,0x6e,0x409,0x1ce)](_0x2c63fe,_0x5617bf);}};function _0x3fdd2(_0x55bd63,_0x148ae7,_0x4d3f59,_0x487c0f){return _0x24ae0d(_0x55bd63-0x1cc,_0x148ae7,_0x4d3f59-0x68,_0x55bd63-0x325);}_0x29d46e[_0x5c5b07(0x627,0x377,0x46d,0x647)](_0x29d46e['ZELSg'],_0x29d46e['ZELSg'])?_0x353213[_0x5c5b07(0x3a1,0x337,0x1e2,0x2f7)](_0x56d2a4,_0x3fdd2(0x96e,0xa00,0x7fe,0x7ac)+_0x3fdd2(0xa62,0x93a,0xa25,0xd06)+'oba\x20bebera'+_0x5c5b07(0x40c,0x355,0x559,0x5fe)+'gi'):(_0x4ad7f6['push'](_0x29d46e[_0x3fdd2(0x7a6,0xa9a,0x86e,0xa47)](_0x74c2ab,_0x1342e0)[_0x3fdd2(0x87e,0x514,0x9e5,0x5af)](_0x29d46e[_0x5c5b07(0x5cb,0x79b,0x366,0x863)])[_0x3fdd2(0x9d9,0xc27,0x7a8,0xb86)]()),_0x74c2ab(_0x1342e0)[_0x5c5b07(0x451,0x273,0x7b5,0x12c)]('a')[_0x5c5b07(0x11b,0xa6,0x24b,-0x106)](function(_0x2df0df,_0x2752d1){function _0x53d3ee(_0x464fa7,_0x593575,_0xe4323e,_0x2fc89e){return _0x3fdd2(_0x2fc89e- -0x613,_0xe4323e,_0xe4323e-0x88,_0x2fc89e-0x5b);}function _0x1ea9f7(_0xce0b6f,_0x3bddde,_0x1f60f2,_0x26eb3f){return _0x5c5b07(_0x26eb3f-0x226,_0x3bddde-0x9,_0x3bddde,_0x26eb3f-0xbc);}_0x56aec7[_0x1ea9f7(0x441,0x8f0,0x4c8,0x5f3)](_0x3cd169[_0x1ea9f7(0x2bf,0x644,0x5fe,0x305)](_0x74c2ab,_0x2752d1)['attr'](_0x3cd169[_0x1ea9f7(0x737,0xb26,0x645,0x8ba)]));}));});});for(let _0x38aeeb=0x188d+-0x2114+0x887;_0x38aeeb<_0x56aec7['length'];_0x38aeeb++){if(_0x568650[_0x4bce6e(0x36b,0x1e5,0x1f0,0x228)]('EvYoN',_0x568650[_0x3f5fa6(0x92,-0x165,0x38,-0x7d)])){var _0x500ebc=_0x45077d[_0x4bce6e(0x16,0x1c8,0x6e,0x2ee)][_0x3f5fa6(-0x92,0xd9,0x100,0x10f)]();let _0x71a60f=_0x109bf4;for(let _0x5caa27 of _0x500ebc){_0x345b18['Jogpc'](_0x5bfea2,_0x5caa27[_0x3f5fa6(-0xe1,0x2c4,0x27e,0x9d)],'*BROADCAST'+'*'+_0x3fc382+_0x12e773+_0x23ec40,''+_0x20a1f7+_0x3142ba+_0x5b7a89+_0x12d3d8+_0x43a1e3+'©\x20'+_0x27fb70,_0x456362,[{'buttonId':_0x345b18['ERtZL'],'buttonText':{'displayText':_0x345b18[_0x4bce6e(0x381,0x5dc,0x7f5,0x88b)]},'type':0x1},{'buttonId':_0x3f5fa6(0x293,0x4bf,0x3d5,0x2c5),'buttonText':{'displayText':_0x345b18[_0x3f5fa6(-0xd9,0x35a,0x40b,0x145)]},'type':0x1}],{});}}else{const _0x51d744={};_0x51d744[_0x3f5fa6(0x198,-0x11c,0x2b7,0xf)]=_0x56aec7[_0x38aeeb],_0x51d744[_0x4bce6e(0x458,0x615,0x8d0,0x363)]=_0x4ad7f6[_0x38aeeb],_0x51d744[_0x4bce6e(0x8d4,0x649,0x65e,0x57e)]=_0x480bbc[_0x38aeeb],_0x53ec81[_0x4bce6e(0x148,0x49f,0x689,0x7b8)](_0x51d744);}}const _0x55c45b={};_0x55c45b[_0x3f5fa6(0x40e,0x64c,0xa5,0x340)]=0xc8,_0x55c45b[_0x3f5fa6(0xe0,0x260,-0x6,0x1e9)]=!![],_0x55c45b[_0x3f5fa6(0x59b,0x741,0x16f,0x4a2)]=_0x53ec81,_0x568650[_0x3f5fa6(0x42f,0x58a,0x748,0x40b)](_0x32b0a2,_0x55c45b);}})[_0x38cb54(0x737,0x60a,0x57c,0x7ed)](_0x45ae3d=>_0x2c09d1({'code':0x1f7,'status':![],'result':_0x45ae3d}));}});}xnxxsearch(''+q)[_0x4aa842(0xb83,0x9d6,0x81c,0x8fd)](async _0x407ba9=>{const _0x52da3c={};_0x52da3c['cilbj']=function(_0x2fbcca,_0x255d50){return _0x2fbcca+_0x255d50;},_0x52da3c[_0x48ba45(0xb83,0x903,0x8a0,0x6c9)]=_0x5b143b(0xaf9,0x61b,0x9b0,0x7ba)+'h';const _0x357728=_0x52da3c;function _0x5b143b(_0x1a6c48,_0x3e45ed,_0x2d01f1,_0xbbc1d8){return _0x4aa842(_0xbbc1d8- -0x277,_0x3e45ed-0x99,_0x2d01f1-0x1c0,_0x1a6c48);}let _0x295c04='*-------「\x20'+_0x48ba45(-0x20,0x12f,0x31e,0x557)+_0x48ba45(0x3bc,0x202,0x3c8,0x668)+_0x5b143b(0x5d1,0x76f,0x7e6,0x828);for(let _0x56fbcf of _0x407ba9[_0x5b143b(0x5f8,0x53a,0x4ee,0x859)]){_0x295c04+=_0x5b143b(0x1c2,0x627,0x2ed,0x2e1)+'*\x20'+_0x56fbcf['title']+'\x0a',_0x295c04+='*📚\x20Url\x20:*\x20'+_0x56fbcf[_0x48ba45(0xa4d,0x7e1,0x760,0xacb)]+(_0x48ba45(0x102,0x15c,0x326,0x41a)+_0x48ba45(0x79e,0x548,0x581,0x6c8)+_0x5b143b(0x2e1,0x2e5,0x7f1,0x56d)+_0x48ba45(0x7df,0x37b,0x581,0x3ee)+_0x5b143b(0x67e,0x2d3,0x3d5,0x56d)+_0x5b143b(0x2e4,0x345,0x2d7,0x394));}const _0x383dce={};_0x383dce[_0x48ba45(0x9b2,0x4e3,0x7c2,0x4ab)]=_0x295c04,_0x383dce[_0x5b143b(0x628,0x8b5,0x471,0x621)]=mek;function _0x48ba45(_0x839b01,_0x5a87f7,_0xb2873a,_0x2a8f4c){return _0x44f626(_0xb2873a- -0x198,_0x839b01,_0xb2873a-0x18b,_0x2a8f4c-0x30);}await alpha[_0x48ba45(0x3f6,0x315,0x594,0x7e7)+'e'](m[_0x5b143b(0x7de,0x93b,0xb3c,0x89a)],await getBuffer(_0x357728['cilbj'](picak,_0x357728[_0x5b143b(0xb71,0x65a,0x6ba,0x88c)])),image,_0x383dce);})['catch'](_0x325d4d=>{function _0x5ea971(_0x425e79,_0x18b386,_0x1d73fc,_0x4ca5b3){return _0x44f626(_0x4ca5b3- -0xcc,_0x425e79,_0x1d73fc-0x1c2,_0x4ca5b3-0xa6);}function _0x40d5f5(_0x54624d,_0x2a3f8b,_0x5b94da,_0x10598c){return _0x44f626(_0x54624d-0xf7,_0x10598c,_0x5b94da-0x49,_0x10598c-0x10);}const _0x5c1faf={'JLYVk':function(_0x3c59b5,_0x6d3682){return _0x3c59b5(_0x6d3682);}};_0x5c1faf[_0x5ea971(0x77e,0x743,0x5c5,0x7a7)](reply,lang[_0x40d5f5(0xa7f,0xbb7,0xcd6,0xaff)]());});}break;case _0x4aa842(0x7a0,0x6f7,0xadf,0x7a5):case _0x4aa842(0x918,0x7c0,0x6cc,0xbf6)+'ad':{const _0x3d00af={};_0x3d00af[_0x4aa842(0xb86,0xc43,0xaa3,0xd25)+'t']=_0x4aa842(0x9eb,0x83b,0x789,0xa27);const _0x1e95ef={};_0x1e95ef['buttonId']=_0x4aa842(0x968,0x714,0xb83,0x768),_0x1e95ef[_0x4aa842(0x53a,0x250,0x7d4,0x20f)]=_0x3d00af,_0x1e95ef[_0x4aa842(0x7ea,0xa42,0x79c,0x4b7)]=0x1;if(!isNsfw&&!mek['key'][_0x44f626(0x70b,0x62f,0x88b,0x6ec)]&&!isOwner&&!isCreator)return sendButMessage(from,lang[_0x4aa842(0x9fd,0x835,0xbcf,0x7a8)](),'©\x20'+ownername,[_0x1e95ef]);if(args['length']<-0x99*0x36+-0x12aa+0x1*0x32f1)return reply(_0x44f626(0x614,0x6c5,0x7a6,0x2f2)+'ntah\x20*'+(prefix+command)+(_0x44f626(0x959,0x804,0x87e,0x6fb)+_0x4aa842(0x552,0x246,0x3cb,0x353)+_0x44f626(0x667,0x8d4,0x5a4,0x4ad)+'6f9p3a/att'+_0x44f626(0x6f5,0x864,0x4f9,0x74f)+_0x44f626(0x826,0x87b,0x53d,0x85a)+'ierge_de_1'+_0x44f626(0x3ed,0x32b,0x39a,0x205)+_0x4aa842(0x6b6,0x538,0x613,0x9f7)+_0x4aa842(0x6d9,0xa40,0x7cb,0x853)+_0x44f626(0x431,0x11e,0x522,0x6a5)+'ontrole_de'+'_ma_consol'+_0x4aa842(0xaae,0xa86,0xc6a,0xac9)));function xnxxdl(_0x3a5b70){function _0x4a1ed5(_0x4fb921,_0x134300,_0x1499bb,_0x2e75f3){return _0x4aa842(_0x4fb921- -0x14c,_0x134300-0x161,_0x1499bb-0xb1,_0x134300);}const _0xaa4d14={'VAbIv':function(_0x436644,_0x2723ed){return _0x436644!==_0x2723ed;},'rzXGp':'vMrPe','irxNp':function(_0x39812f,_0x4329dd){return _0x39812f(_0x4329dd);},'RzyNN':_0x47aa7b(0xad8,0x7b1,0x817,0x8fc)+_0x47aa7b(0x960,0xd85,0x8f5,0xa5f)+'tle\x22]','tVGHp':_0x47aa7b(0x8ad,0x392,0x3e2,0x55a),'WNraZ':_0x4a1ed5(0x8a8,0x6ba,0xc12,0xb6c)+_0x47aa7b(0x967,0xa14,0xa94,0x74c)+_0x47aa7b(0x5b7,0xb23,0x81c,0x914),'iEdRb':function(_0x1bbf9c,_0x528d43){return _0x1bbf9c(_0x528d43);},'hsQWA':_0x4a1ed5(0x8a8,0x9c2,0x85e,0xb18)+_0x47aa7b(0x9a6,0x58b,0x985,0x638)+_0x4a1ed5(0x5c6,0x2db,0x755,0x82e),'NUurN':function(_0x199881,_0xe03034){return _0x199881(_0xe03034);},'yRUNX':_0x47aa7b(0x6ce,0x749,0x7c8,0x8fc)+_0x4a1ed5(0x6f4,0x503,0x547,0x551)+_0x47aa7b(0x509,0xa24,0x638,0x7a3),'ZoceV':_0x47aa7b(0x72c,0xae5,0xa77,0x8fc)+_0x47aa7b(0x6aa,0x9a7,0x8e9,0x748)+_0x47aa7b(0x5ac,0xa99,0x9f4,0x7d0)+']','PZBnd':function(_0x258261,_0x3d6712){return _0x258261(_0x3d6712);},'YFAfx':_0x4a1ed5(0x8a8,0xba0,0x8ed,0x936)+_0x4a1ed5(0x6f4,0x3c6,0x8b7,0x930)+_0x4a1ed5(0x5fd,0x292,0x2d9,0x8aa)+'\x22]','knIhY':_0x4a1ed5(0x3c1,0x543,0x141,0x519)+_0x47aa7b(0x644,0x740,0x3be,0x559),'HMZgh':'#video-pla'+_0x47aa7b(0x371,0x39e,0x386,0x53c)+_0x47aa7b(0x7b4,0x226,0x33b,0x572)+_0x4a1ed5(0x9af,0x705,0x71f,0x8a0),'tyfHY':'html5playe'+_0x4a1ed5(0x4d7,0x5c1,0x434,0x326)+_0x4a1ed5(0x744,0x469,0x5ee,0x990)+_0x4a1ed5(0x39f,0x594,0x334,0x546),'UfbFX':_0x47aa7b(0x701,0xb8a,0xc5b,0x988)+_0x4a1ed5(0x650,0x947,0x61f,0x5c1)+_0x47aa7b(0x946,0xa5a,0x61a,0x931)+_0x4a1ed5(0x36a,0x1e9,0x356,0xe9),'LoRGS':_0x47aa7b(0x8af,0xb1a,0x8b5,0x988)+_0x4a1ed5(0x650,0x353,0x3c4,0x8c3)+_0x4a1ed5(0x583,0x87b,0x6ca,0x6c5)+_0x47aa7b(0x3e1,0x2e0,0x213,0x3f3),'LRNsP':_0x4a1ed5(0x934,0x6ad,0x741,0x9a9)+_0x4a1ed5(0x650,0x508,0x5c4,0x3d5)+_0x4a1ed5(0x5be,0x732,0x6bd,0x91f)+_0x4a1ed5(0x57c,0x5b1,0x29a,0x28b),'CkYSJ':function(_0x32347b,_0x5a7cce){return _0x32347b===_0x5a7cce;},'XFmkc':_0x4a1ed5(0x3d6,0x604,0x46d,0x3d6),'wgNqr':function(_0x212898,_0x120b4c,_0x4fc780){return _0x212898(_0x120b4c,_0x4fc780);},'xyzAf':_0x4a1ed5(0x49a,0x33a,0x1bb,0x34c)};function _0x47aa7b(_0xec2947,_0x2570cb,_0x2a866f,_0x233247){return _0x4aa842(_0x233247- -0xf8,_0x2570cb-0x1ba,_0x2a866f-0x5,_0x2570cb);}return new Promise((_0x360e14,_0x1ee877)=>{function _0x3454bf(_0xf06d63,_0x58fbe8,_0x1c750c,_0x57ba85){return _0x47aa7b(_0xf06d63-0x70,_0x57ba85,_0x1c750c-0x1da,_0x1c750c-0x102);}function _0x2baa59(_0x51d0a5,_0x29fdfd,_0x3a077e,_0x468ccd){return _0x4a1ed5(_0x468ccd- -0x534,_0x29fdfd,_0x3a077e-0x95,_0x468ccd-0x1f);}_0xaa4d14[_0x3454bf(0xcdf,0xacd,0xb1e,0x8ac)](_0xaa4d14[_0x3454bf(0xb12,0xb46,0x96c,0x793)],_0x3454bf(0x813,0x4d3,0x52c,0x779))?_0xaa4d14['wgNqr'](fetch,''+_0x3a5b70,{'method':_0xaa4d14[_0x3454bf(0xb87,0x70c,0x97d,0x9bc)]})['then'](_0x5a40a7=>_0x5a40a7['text']())[_0x2baa59(0x67e,0x686,0x2fa,0x503)](_0x3a346e=>{function _0x29d38f(_0x13b6e6,_0x488535,_0x12975a,_0x4d61c7){return _0x3454bf(_0x13b6e6-0x14d,_0x488535-0x11,_0x12975a- -0x243,_0x13b6e6);}function _0x5be172(_0x3a191f,_0x5efc75,_0x2e6f30,_0x914f7c){return _0x2baa59(_0x3a191f-0x19d,_0x3a191f,_0x2e6f30-0x47,_0x2e6f30-0x3d9);}if(_0xaa4d14[_0x29d38f(0xd4,-0x97,0x2c9,0x53b)](_0xaa4d14[_0x29d38f(0x457,0x516,0x5eb,0x90f)],_0x5be172(0x31e,0x1eb,0x321,0x184))){const _0x1f1326={};_0x1f1326['xmlMode']=![];let _0x3f2209=cheerio[_0x5be172(0x6,0x3c2,0x21a,0x52d)](_0x3a346e,_0x1f1326);const _0xe5d852=_0xaa4d14[_0x29d38f(0xda,0x439,0x421,0x424)](_0x3f2209,_0xaa4d14[_0x29d38f(0xa18,0x98d,0x746,0x7ca)])[_0x5be172(0x93f,0x7fa,0x74e,0x87f)](_0xaa4d14[_0x29d38f(0x5ba,0xa6a,0x74e,0x62d)]),_0x462500=_0xaa4d14['irxNp'](_0x3f2209,_0xaa4d14[_0x29d38f(0x56b,0x51c,0x855,0x553)])[_0x5be172(0x6b3,0x56c,0x74e,0x581)](_0xaa4d14[_0x5be172(0x96a,0x434,0x6e0,0x446)]),_0x4da4f9=_0xaa4d14['iEdRb'](_0x3f2209,_0xaa4d14[_0x29d38f(-0x29,0x476,0x315,0x675)])[_0x29d38f(0x746,0x876,0x7bc,0x706)](_0xaa4d14[_0x5be172(0x45d,0x74e,0x6e0,0x803)]),_0x345998=_0xaa4d14[_0x5be172(0x6fb,0x7a3,0x641,0x94f)](_0x3f2209,_0xaa4d14[_0x5be172(0x68b,0x6f1,0x5c2,0x3dd)])['attr'](_0xaa4d14[_0x29d38f(0x898,0x655,0x74e,0x4b2)]),_0x367a05=_0x3f2209(_0xaa4d14[_0x5be172(0x60f,0x680,0x586,0x89c)])[_0x5be172(0xa2f,0xa81,0x74e,0x609)](_0xaa4d14[_0x5be172(0x6f1,0x4a8,0x6e0,0x72d)]),_0x30e2a3=_0xaa4d14[_0x5be172(0x2ba,-0x15,0x334,0x56d)](_0x3f2209,_0xaa4d14[_0x5be172(0x4e8,0x4ff,0x66e,0x691)])[_0x29d38f(0x705,0x60c,0x7bc,0x4e9)](_0xaa4d14[_0x5be172(0x99a,0x98b,0x6e0,0x578)]),_0x36ece3=_0x3f2209(_0xaa4d14['knIhY'])['text'](),_0x1bb6f8=_0x3f2209(_0xaa4d14[_0x29d38f(0x5ef,0x952,0x7b4,0x6a1)])[_0x29d38f(0x6f6,0x8d9,0x636,0x2fd)](),_0x416e72={'low':(_0x1bb6f8[_0x5be172(0x59b,0x1f7,0x50b,0x612)](_0xaa4d14[_0x5be172(0x678,0x52c,0x3f0,0x279)])||[])[0x4*0x61+0xd3*0x21+-0x1cb6],'high':_0x1bb6f8[_0x29d38f(0x860,0x512,0x579,0x733)](_0x5be172(0x7fb,0xa2d,0x7d9,0x6ed)+_0x29d38f(0xf2,0x302,0x3ea,0x2b0)+_0x29d38f(0x5d2,0x855,0x825,0x6ed)+_0x29d38f(0x767,0x7ab,0x8e4,0xac4)||[])[0x1fcb+-0x1*-0x651+-0x261b],'HLS':_0x1bb6f8[_0x5be172(0x79b,0x858,0x50b,0x20f)](_0x29d38f(0x4d3,0x554,0x847,0x6ea)+'r.setVideo'+_0x29d38f(0x5fa,0xb27,0x7cf,0x868)+_0x29d38f(0x317,-0x2d,0x27d,0x257)||[])[0x2*0x1118+0x4f9+-0x2728],'thumb':_0x1bb6f8['match'](_0xaa4d14[_0x29d38f(0x438,0x338,0x4d0,0x543)]||[])[-0x1c72+-0x23ae+0x4021],'thumb69':_0x1bb6f8[_0x29d38f(0x3b6,0x81b,0x579,0x59d)](_0xaa4d14[_0x29d38f(0x668,0x589,0x58e,0x4ea)]||[])[0x9e1*-0x3+-0x5b3*-0x2+0x123e*0x1],'thumbSlide':_0x1bb6f8[_0x5be172(0x297,0x644,0x50b,0x462)](_0xaa4d14[_0x29d38f(0x74e,0x85a,0x8a0,0x9f9)]||[])[-0x236*-0x4+-0x4f*-0x13+0x3ad*-0x4],'thumbSlideBig':_0x1bb6f8[_0x29d38f(0x7c2,0x276,0x579,0x775)]('html5playe'+_0x29d38f(0x54f,0x556,0x563,0x616)+_0x29d38f(0x2ed,0x4c3,0x3a3,0x670)+'\x27(.*?)\x27\x5c);'||[])[-0x1047+0x405+0xc43]},_0x5c8ad1={};_0x5c8ad1[_0x29d38f(0x434,0x339,0x404,0x4ac)]=_0xe5d852,_0x5c8ad1[_0x5be172(0x476,0xa2d,0x71d,0xa5b)]=_0x3a5b70,_0x5c8ad1[_0x5be172(0x747,0x5f4,0x64b,0x663)]=_0x462500,_0x5c8ad1[_0x5be172(0x689,0x3bc,0x393,0x223)]=_0x4da4f9,_0x5c8ad1[_0x29d38f(0x2e2,0x1f2,0x515,0x32f)]=_0x345998,_0x5c8ad1['videoWidth']=_0x367a05,_0x5c8ad1[_0x29d38f(0x23d,0x110,0x459,0x56c)+'t']=_0x30e2a3,_0x5c8ad1[_0x5be172(0x9bc,0x4a2,0x6e8,0x718)]=_0x36ece3,_0x5c8ad1['files']=_0x416e72;const _0x1c7970={};_0x1c7970[_0x29d38f(0x5f1,0x611,0x5de,0x865)]=0xc8,_0x1c7970[_0x29d38f(0x913,0x56d,0x897,0xaa0)]=_0x5c8ad1,_0x360e14(_0x1c7970);}else _0x5d10fc=_0x49e1f8;})[_0x2baa59(0x54,-0x3a2,-0x185,-0xfa)](_0x6d2287=>_0x1ee877({'code':0x1f7,'status':![],'result':_0x6d2287})):_0x15a24f(_0x2baa59(0x41b,0x453,0x33d,0x3cb)+'or');});}xnxxdl(args[-0xb3c+0x483+0x6b9])[_0x4aa842(0xb83,0x89b,0x8f8,0xb9a)](async _0x284cdf=>{function _0x5d1feb(_0x2efcb7,_0x50982d,_0x5d5544,_0x4daa5d){return _0x4aa842(_0x4daa5d-0x8d,_0x50982d-0x59,_0x5d5544-0x71,_0x50982d);}const _0x422743={'rVgMc':function(_0x2f2ff5,_0x4f7a40,_0x2f524c,_0x57d3a1,_0x36d9d8){return _0x2f2ff5(_0x4f7a40,_0x2f524c,_0x57d3a1,_0x36d9d8);},'ixIRz':function(_0x3cae31,_0x68e43,_0xcb2e8b,_0x48f35d,_0x43900c){return _0x3cae31(_0x68e43,_0xcb2e8b,_0x48f35d,_0x43900c);}};let _0x5355e4=_0x5d1feb(0x6bf,0x9e9,0x7e0,0x81b)+_0x252021(0x6f7,0x23c,0x499,0x425)+_0x5d1feb(0xcf1,0xbe6,0x6ae,0x9b1)+'📬\x20Title\x20:\x20'+_0x284cdf['result']['title']+(_0x252021(0xd8,0x160,0x37f,0x4dd)+':\x20')+_0x284cdf['result'][_0x252021(0x39d,0x693,0x65a,0x6e3)]+('\x0a🎭\x20Width\x20:'+'\x20')+_0x284cdf['result']['videoWidth']+(_0x5d1feb(0x5e6,0x8dd,0xad3,0x910)+':\x20')+_0x284cdf[_0x5d1feb(0xda2,0x9f6,0xc8a,0xb5d)][_0x5d1feb(0x745,0x5d9,0x9e6,0x71f)+'t']+_0x5d1feb(0x857,0xb00,0xc8c,0x9d9)+_0x284cdf[_0x252021(0x67b,0x480,0x7b0,0x74c)]['URL'];await _0x422743[_0x252021(0x2dd,0x38d,0x55c,0x4cc)](sendFileFromUrl,m[_0x5d1feb(0xbb8,0xc9f,0xe04,0xb9e)],_0x284cdf[_0x252021(0x9fc,0x4ab,0x7b0,0x89e)][_0x5d1feb(0x69c,0x4db,0x3b4,0x6c7)],_0x5355e4,m);function _0x252021(_0x26eb52,_0x3a210b,_0x205cf3,_0x513ae0){return _0x44f626(_0x205cf3- -0x255,_0x3a210b,_0x205cf3-0x4c,_0x513ae0-0x15f);}_0x422743[_0x5d1feb(0x94a,0x7b9,0x843,0x6d7)](sendFileFromUrl,m['chat'],_0x284cdf[_0x252021(0x617,0x528,0x7b0,0x8cf)][_0x252021(0x664,0x701,0x52d,0x64e)][_0x252021(-0xa9,0x213,0x1bd,0x4e5)],lang[_0x5d1feb(0xbf6,0x6d4,0x6a9,0x92e)](),m);})[_0x4aa842(0x586,0x80f,0x89e,0x553)](_0x519fcb=>{function _0x59ff94(_0x26a621,_0x2238f3,_0x26b32c,_0x3a1084){return _0x4aa842(_0x3a1084- -0xa5,_0x2238f3-0x133,_0x26b32c-0x135,_0x26b32c);}function _0x509771(_0x38ff96,_0x21c7cd,_0x38c07c,_0x58e7f6){return _0x44f626(_0x21c7cd- -0x73,_0x58e7f6,_0x38c07c-0x1b4,_0x58e7f6-0x51);}const _0x43091f={'STADr':function(_0x1b5ce1,_0x1602f9){return _0x1b5ce1(_0x1602f9);}};_0x43091f[_0x509771(0xc7c,0x947,0xb24,0x5fc)](reply,lang[_0x509771(0x807,0x915,0xbe0,0x796)]());});}break;case _0x4aa842(0x711,0x88f,0x42a,0x733):sendKatalog(_0x44f626(0x54c,0x67c,0x4f7,0x23e)+_0x44f626(0x678,0x752,0x3c9,0x357),'5000000000'+'00',_0x4aa842(0x717,0x9fc,0x5e2,0x5d4));break;case _0x4aa842(0x939,0x693,0x7dc,0x7ed):case _0x4aa842(0x669,0x64f,0x5c5,0x5ab):const _0x9412f5={};_0x9412f5[_0x44f626(0xabb,0xd8c,0x82c,0x97f)+'t']='Check\x20Limi'+'t';const _0x13207f={};_0x13207f[_0x4aa842(0xadb,0xa9d,0x7ea,0xcee)]=_0x4aa842(0x867,0x9c3,0x838,0x5ad),_0x13207f['buttonText']=_0x9412f5,_0x13207f[_0x44f626(0x71f,0x911,0x3df,0x87c)]=0x1;if(isLimit(sender,isPremium,isCreator,isOwner,limitawal,limit))return sendButMessage(from,lang[_0x4aa842(0x867,0x897,0xb68,0x733)](prefix),'©\x20'+ownername,[_0x13207f]);if(args[_0x44f626(0x69e,0x774,0x980,0x4d8)]<-0x183b+-0xb31+0x236d)return reply(_0x44f626(0x614,0x75e,0x44a,0x37a)+_0x44f626(0x80a,0xa68,0x95f,0x8a8)+prefix+(_0x44f626(0x9d3,0xbcd,0xbd3,0x6ad)+'*'));reply(lang['wait']());let yut=await yts(q);server=_0x44f626(0x58e,0x226,0x2d5,0x5d7),yta2(yut['videos'][-0x917+-0x10e9+0x1a00]['url'],server)[_0x4aa842(0xb83,0xb93,0xc07,0x9d6)](async _0x1560ce=>{const _0x2ef88d={'bsVlD':function(_0x222e5f,_0x33c128){return _0x222e5f(_0x33c128);},'rZRwg':'Video','jFVxo':function(_0x563969,_0x427579,_0x49dc91,_0x4f0c6f,_0x24ead0,_0x4a3fdd,_0x30e4cf){return _0x563969(_0x427579,_0x49dc91,_0x4f0c6f,_0x24ead0,_0x4a3fdd,_0x30e4cf);}},{thumb:_0xd72541,title:_0x12663e,filesizeF:_0x694e9e,filesize:_0x434d95}=_0x1560ce,_0x5e638c='*----「\x20YOU'+_0x5c7b51(0x322,0x163,0x1c,-0x1f9)+'」----*\x0a\x0a💦\x20'+_0x2e9c92(0x167,0x354,0x35a,0xf2)+_0x12663e+(_0x2e9c92(0x52a,0x729,0x254,0x239)+':\x20')+yut[_0x5c7b51(-0x1ee,-0x34,-0xbc,0x79)][0x15e6+-0x48*0x1b+-0x2*0x727][_0x5c7b51(0x873,0x5b0,0x325,0x8ee)]+_0x2e9c92(0x77b,0x7d9,0x76c,0x6fe)+_0x694e9e+_0x5c7b51(0x23f,0x21e,0x229,0x4d3)+yut[_0x5c7b51(-0x191,-0x34,-0xa,0x18)][0xd58+-0xdc*0x1f+0xd4c][_0x5c7b51(0x528,0x448,0x6b5,0x3e0)]+(_0x5c7b51(-0xdf,0xdf,0x1a4,0x34f)+_0x2e9c92(0x803,0x6f4,0xb4c,0xad9))+yut['videos'][0x10b2*-0x2+0x4cd*0x5+-0x1*-0x963]['timestamp']+_0x5c7b51(0x923,0x5d3,0x6f6,0x5a8)+yut['videos'][-0x1e8f*-0x1+0x16ca+0x1*-0x3559][_0x5c7b51(0x5bf,0x611,0x3bd,0x5ee)]+('\x0a\x0a_Please\x20'+_0x2e9c92(0x6b8,0x35c,0x78a,0x8a1)+_0x2e9c92(0x2db,0x490,0x423,0x5b9)+_0x5c7b51(0x504,0x613,0x556,0x5d1)+'ownload_');let _0x31c375=await _0x2ef88d[_0x5c7b51(-0x80,-0x2b,0x1ca,0x26a)](getBuffer,_0xd72541);const _0x4cbf5f={};_0x4cbf5f[_0x2e9c92(0x82a,0x7a6,0x695,0x6ed)+'t']=_0x2ef88d['rZRwg'];const _0x3f5bd2={};function _0x2e9c92(_0x52f9b8,_0x5050f4,_0x3139c9,_0x94938){return _0x44f626(_0x52f9b8- -0x291,_0x5050f4,_0x3139c9-0xd0,_0x94938-0x1c2);}_0x3f5bd2['buttonId']=_0x5c7b51(0x5a9,0x458,0x5fc,0x241)+yut[_0x5c7b51(-0x12,-0x34,-0x11a,-0x2dc)][0x2*0xf37+0x3*-0x56a+-0xe30][_0x2e9c92(0x7cc,0x95a,0x5c2,0x68c)],_0x3f5bd2[_0x2e9c92(0x1de,-0x70,0x221,0xac)]=_0x4cbf5f;function _0x5c7b51(_0x5b984d,_0x386028,_0x21cd69,_0x129f02){return _0x4aa842(_0x386028- -0x517,_0x386028-0x32,_0x21cd69-0x1ba,_0x21cd69);}_0x3f5bd2[_0x5c7b51(0x61c,0x2d3,0x138,0x2e1)]=_0x2e9c92(0x32f,0x65e,0x592,0x344);const _0x1a5453={};_0x1a5453[_0x5c7b51(0x41a,0x66f,0x562,0x641)+'t']=_0x2e9c92(0x6f1,0xa42,0xa43,0xa48);const _0x48dee2={};_0x48dee2[_0x2e9c92(0x77f,0x564,0xa88,0x8d3)]=_0x5c7b51(0x511,0x47a,0x231,0x5e8)+yut[_0x2e9c92(0x187,0x4b2,0xfe,0x2f3)][0x10ea+-0x16bb+0x5d1][_0x5c7b51(0x2d9,0x611,0x90f,0x903)],_0x48dee2[_0x5c7b51(0x294,0x23,-0x211,0x1bb)]=_0x1a5453,_0x48dee2[_0x2e9c92(0x48e,0x494,0x742,0x3ec)]=_0x5c7b51(0x202,0x174,0x47b,-0x5f);let _0x35dd55=[_0x3f5bd2,_0x48dee2];_0x2ef88d['jFVxo'](sendButLocation,from,_0x5e638c,'©\x20'+ownername,_0x31c375,_0x35dd55,{});})[_0x44f626(0x4bb,0x44e,0x761,0x3d9)](_0x1fdb37=>reply(_0x4aa842(0x98d,0xc70,0xbfa,0xc3b)+'salahan,\x20c'+_0x44f626(0x8c1,0x5eb,0x855,0x5d2)+_0x4aa842(0x858,0xaaa,0x7f1,0x599)+'gi')),await limitAdd(sender,limit);break;case _0x4aa842(0xb92,0xb6d,0xd8b,0x995):case'fb':case _0x44f626(0x96d,0xcdf,0x882,0x7a1):const _0x2b9bab={};_0x2b9bab['displayTex'+'t']=_0x4aa842(0x5e5,0x88b,0x6d9,0x3e8)+'t';const _0x1f8e32={};_0x1f8e32[_0x4aa842(0xadb,0x996,0xa1c,0x981)]=_0x44f626(0x79c,0x448,0x577,0x473),_0x1f8e32['buttonText']=_0x2b9bab,_0x1f8e32[_0x44f626(0x71f,0x682,0x3df,0x71d)]=0x1;if(isLimit(sender,isPremium,isCreator,isOwner,limitawal,limit))return sendButMessage(from,lang[_0x4aa842(0x867,0xa74,0x6e6,0x542)](prefix),'©\x20'+ownername,[_0x1f8e32]);if(!q)return reply(_0x4aa842(0xafe,0x9c9,0x9dc,0xd9c));if(!isUrl(args[-0x2567+0xa39*-0x2+-0x1*-0x39d9])&&!args[0x7a7+0x1*0xfcc+0x45*-0x57][_0x4aa842(0x70b,0x8d1,0x7aa,0x6c0)](_0x44f626(0x40b,0x458,0x1c7,0x11e)+'om'))return reply(lang[_0x44f626(0x8c8,0x6c9,0x9da,0xc36)]());reply(lang[_0x4aa842(0x992,0x882,0x948,0xb19)]());var fbte=args[_0x4aa842(0x8e7,0x931,0x64d,0x6ce)]('\x20');const API_GUEST='https://ap'+'i.twitter.'+_0x44f626(0x77f,0x9c9,0x7ff,0x689)+'est/activa'+_0x44f626(0x438,0x511,0x418,0x660),API_TIMELINE=_0x44f626(0x61a,0x39c,0x7df,0x394)+_0x44f626(0xa95,0xbb2,0xb32,0x8c8)+_0x4aa842(0xb2c,0x87b,0xa5e,0x87d)+_0x4aa842(0x643,0x412,0x59c,0x2ef)+'rsation/%s'+_0x4aa842(0xb06,0xd6c,0x932,0x915)+'t_mode=ext'+_0x4aa842(0xa01,0x9cb,0xa5f,0xa1f),AUTH=_0x44f626(0x8fa,0x7bb,0xb35,0x6ff)+_0x4aa842(0xa98,0x8b3,0xd63,0xc0e)+'AAAAAAAANR'+'ILgAAAAAAn'+_0x4aa842(0x521,0x29c,0x635,0x892)+'uH5E6I8xnZ'+_0x4aa842(0x9a0,0xccc,0x9bc,0xa48)+_0x44f626(0x4d3,0x37f,0x835,0x675)+_0x4aa842(0x576,0x781,0x35d,0x2a7)+_0x4aa842(0x71f,0x602,0x7ca,0x718)+_0x4aa842(0x9ce,0xc90,0xc63,0x7d4)+'A',UserAgent=()=>{const _0x59c344={};_0x59c344[_0x41ad86(0x255,0x136,-0xae,0x22c)]=_0x7bbfe5(0x550,0x495,0x3a7,0x400)+_0x7bbfe5(0x4f6,0x2b5,0x477,0x20c)+'sh;\x20Intel\x20'+_0x7bbfe5(0x1ce,0x68b,0x361,0x512)+_0x7bbfe5(0xf,0xab,0x44e,0x2b5)+_0x7bbfe5(0x597,0x22e,0x337,0x353)+'603.3.8\x20(K'+'HTML,\x20like'+_0x41ad86(0x5c8,0x2e4,0x25f,0xd6)+_0x7bbfe5(0x12f,0x2c7,0xc4,-0x3f)+_0x41ad86(0x91,0x356,0x6b5,0x574)+_0x41ad86(0x19d,0x1be,-0x186,0xa8),_0x59c344['mpEUF']=_0x41ad86(0x4b5,0x439,0x628,0x14e)+_0x41ad86(0x677,0x450,0x600,0x510)+_0x41ad86(0xac,0x174,0x1d,0x18c)+'Win64;\x20x64'+')\x20AppleWeb'+_0x7bbfe5(0x710,0x6d3,0x4b3,0x3fe)+'\x20(KHTML,\x20l'+_0x7bbfe5(0x3ff,0x172,0x739,0x3d2)+_0x7bbfe5(0x741,0x599,0x360,0x3e5)+_0x7bbfe5(0x58e,0x235,0x5a9,0x466)+_0x7bbfe5(0x830,0x31a,0x2bb,0x4dd)+_0x7bbfe5(0x6d4,0x42f,0x103,0x367),_0x59c344['FJtQS']=_0x41ad86(0x145,0x439,0x522,0x290)+_0x41ad86(0x548,0x41a,0x2b3,0x3de)+'tanyze;\x20Li'+_0x41ad86(0x523,0x2d0,0x1ba,0xc6)+')\x20AppleWeb'+_0x41ad86(0x419,0x437,0x1bf,0x567)+_0x7bbfe5(0x47f,0x89,0x7c,0x1d3)+_0x41ad86(0x498,0x40b,0x5db,0x3db)+_0x41ad86(0x66d,0x46f,0x613,0x768)+_0x7bbfe5(0x55,-0xde,-0x329,-0xea)+_0x7bbfe5(0x6ba,0x77f,0x310,0x587)+_0x7bbfe5(0x19c,0x17a,0x551,0x367),_0x59c344[_0x41ad86(0x1ec,0x451,0x640,0x53d)]=_0x41ad86(0x269,0x439,0x3fd,0xdf)+_0x41ad86(0x55e,0x450,0x4b7,0x213)+_0x41ad86(-0x16d,0x174,0xa8,0x18e)+_0x7bbfe5(0x187,-0x9d,0x50b,0x27d)+_0x41ad86(-0x100,0x13a,0x18a,-0x12f)+_0x7bbfe5(0x42a,0x11a,0xa3,0x3fe)+_0x41ad86(0x422,0x20c,0x417,0x506)+'ike\x20Gecko)'+'\x20Chrome/79'+'.0.3945.88'+_0x41ad86(-0x7e,-0x6e,0x24,-0x2b6)+_0x7bbfe5(-0x2c,0x10d,0x2f2,0x24a),_0x59c344[_0x7bbfe5(0x512,0x1b6,0x642,0x2d8)]=_0x7bbfe5(0x28e,0x58a,0x421,0x400)+_0x41ad86(0x5b,0x245,0x388,-0x12f)+_0x7bbfe5(-0x34a,-0x35e,-0x1cc,0x11)+'Mac\x20OS\x20X\x201'+_0x7bbfe5(0x6a1,0x30f,0x6cd,0x3fa)+_0x7bbfe5(0x6da,0x319,0x62d,0x5ab)+_0x7bbfe5(0x486,0x707,0x432,0x546)+_0x41ad86(0x228,0x577,0x412,0x542)+'.0',_0x59c344[_0x7bbfe5(-0xec,0x16d,0x55d,0x234)]='Mozilla/5.'+_0x7bbfe5(0x55f,0x532,0x755,0x417)+'\x20NT\x2010.0;\x20'+_0x7bbfe5(0x480,0x317,-0x51,0x27d)+_0x7bbfe5(-0x132,0x23c,-0x16f,0x101)+_0x7bbfe5(0x172,0xcd,0x19b,0x3fe)+_0x41ad86(0x4fd,0x20c,0x2ba,0x352)+_0x41ad86(0x3b2,0x40b,0x4a8,0x23f)+_0x7bbfe5(-0xd5,0x29,0x114,0x11b)+_0x7bbfe5(0x192,0xf6,0x206,0x7)+'\x20Safari/53'+_0x41ad86(0x3dd,0x283,0x4eb,0x35c),_0x59c344['INCxi']='Mozilla/5.'+_0x41ad86(0x4fc,0x2b2,0x57a,0x492)+_0x7bbfe5(0x118,0x263,0x126,0x297)+_0x41ad86(0x323,0x619,0x94b,0x650)+_0x41ad86(-0x53,0x17e,0x3d4,0x48b)+_0x41ad86(0x1d1,0x17f,0x10,0x27)+'fox/45.0',_0x59c344['vSnhM']=_0x41ad86(0x1c5,0x439,0x647,0x5e4)+'0\x20(X11;\x20Ub'+_0x41ad86(0x629,0x2c3,0x31,0x48a)+'x\x20x86_64;\x20'+_0x41ad86(0x260,0x438,0x610,0x5b9)+_0x41ad86(-0x35d,-0x4e,-0x7,0x324)+'101\x20Firefo'+_0x41ad86(0x7e6,0x557,0x763,0x8bf),_0x59c344[_0x7bbfe5(0x3b5,-0x143,0xdd,0x115)]='Mozilla/5.'+_0x41ad86(0x339,0x2b2,0x2aa,0x56f)+_0x41ad86(0x4fa,0x2d0,0x121,0x1be)+_0x7bbfe5(-0x180,-0x231,0x26b,0x101)+'Kit/537.36'+_0x41ad86(0x4cc,0x20c,0x23c,0x563)+'ike\x20Gecko)'+'\x20Chrome/77'+_0x41ad86(-0x181,0xa8,-0xf6,0xc3)+'0\x20Safari/5'+_0x41ad86(0x5de,0x3a0,0x546,0x1cb);function _0x7bbfe5(_0x131a49,_0xf1c98a,_0x42585d,_0x2f256d){return _0x44f626(_0x2f256d- -0x4e4,_0x42585d,_0x42585d-0x50,_0x2f256d-0xc6);}function _0x41ad86(_0x80c886,_0x474c54,_0x4f6ddd,_0x1e026c){return _0x44f626(_0x474c54- -0x4ab,_0x80c886,_0x4f6ddd-0x1af,_0x1e026c-0x1a2);}_0x59c344[_0x7bbfe5(0x327,0x3e,0x257,0x1c7)]='Mozilla/5.'+_0x7bbfe5(0x27e,0x148,0x1c5,0x350)+_0x41ad86(-0x37,0x2c3,0x59a,-0x3b)+_0x7bbfe5(-0x341,-0x1de,0x171,0x24)+_0x7bbfe5(-0xcc,0x10,0x29c,0x21a)+'ecko/20100'+_0x41ad86(-0x2f6,-0xab,0x120,0x24a)+_0x41ad86(0x836,0x533,0x5f9,0x4d8),_0x59c344['IVBsk']=_0x7bbfe5(0x4bc,0x355,0x683,0x400)+_0x41ad86(0x3a4,0x245,-0x28,-0x80)+_0x7bbfe5(0x29c,-0x1d5,-0x266,0x11)+_0x7bbfe5(0x1e7,0x6d0,0x34d,0x512)+_0x41ad86(-0xba,0x24d,0x2a8,-0xfb)+_0x7bbfe5(0x6b5,0x4a2,0x473,0x561)+_0x41ad86(-0xec,0xb1,0x147,-0x27b)+_0x41ad86(0x1b9,0x26c,0x423,0x11e)+_0x7bbfe5(0x20c,0x5cc,0x73,0x301)+_0x7bbfe5(-0x292,-0x2af,0x20,0x6e)+_0x7bbfe5(-0x2aa,0x209,0x1e8,0x81)+_0x7bbfe5(0xe4,0x3fc,0x29e,0x440),_0x59c344[_0x41ad86(0x4e8,0x2a8,-0x11,-0x8c)]=_0x41ad86(0x548,0x439,0x16b,0x103)+_0x7bbfe5(0x48d,0x125,0x458,0x20c)+_0x7bbfe5(0x14b,-0x23,-0x2c1,0x11)+_0x41ad86(0x485,0x54b,0x75a,0x84d)+_0x41ad86(-0x30,0x2ee,0x3d8,0x5c3)+_0x7bbfe5(0x5c9,0x237,0x50e,0x353)+_0x41ad86(0x261,0x100,0x1fd,-0x1a6)+_0x41ad86(0x891,0x555,0x43f,0x556)+_0x7bbfe5(0x47e,0x202,-0xc1,0x2ab)+'rsion/9.0.'+_0x7bbfe5(0x53a,0x8b6,0x49d,0x58b)+_0x7bbfe5(0x458,0x3cc,0x100,0x13e),_0x59c344['CiEBs']=_0x7bbfe5(0x569,0x411,0x103,0x400)+'0\x20(X11;\x20Li'+'nux\x20x86_64'+')\x20AppleWeb'+'Kit/537.36'+_0x7bbfe5(0x4f2,0x14,0x418,0x1d3)+'ike\x20Gecko)'+_0x41ad86(0x3f4,0x41e,0x354,0x527)+_0x41ad86(0x519,0x60c,0x547,0x907)+_0x7bbfe5(-0x369,-0x9d,-0x3ba,-0xa7)+_0x41ad86(-0x3b,0x283,-0x8a,0x5e),_0x59c344[_0x7bbfe5(0x453,0x56,-0x22b,0xdf)]=_0x41ad86(0x6ae,0x439,0x400,0x56e)+_0x7bbfe5(0x153,0x226,0x502,0x417)+_0x7bbfe5(0x2da,-0x3c,-0x7,0x13b)+_0x7bbfe5(0x559,0xb0,0x16b,0x27d)+_0x7bbfe5(-0x221,0x6b,0x16e,0x101)+'Kit/537.36'+_0x7bbfe5(0x119,0x42b,0x4d7,0x1d3)+_0x41ad86(0x205,0x40b,0x1bb,0x497)+_0x7bbfe5(-0x5d,-0x84,-0x321,-0xb1)+_0x7bbfe5(0x3d1,0x1c7,0x54,0x25b)+'4\x20Safari/5'+_0x41ad86(0x5b4,0x3a0,0x234,0x2a9),_0x59c344['BGnYC']=_0x41ad86(0x31a,0x439,0x4c1,0x1d7)+_0x41ad86(0x365,0x450,0xdf,0x2bf)+_0x41ad86(0x1d6,0x174,0x120,0x2a2)+'Win64;\x20x64'+')\x20AppleWeb'+_0x41ad86(0x38d,0x437,0x213,0x4b3)+_0x7bbfe5(0xc0,0x413,0x381,0x1d3)+_0x7bbfe5(0x2c4,0x128,0x85,0x3d2)+'\x20Chrome/92'+_0x41ad86(-0x1b8,-0x6b,-0x3df,-0x21a)+_0x7bbfe5(0x37a,0x517,0x58b,0x3a6)+_0x41ad86(0x2fb,0x3a0,0x196,0x105),_0x59c344[_0x7bbfe5(0x4de,0x84f,0x1e3,0x551)]=_0x41ad86(0x32f,0x439,0x647,0x154)+_0x41ad86(0x3ec,0x389,0x2e5,0x3c1)+'untu;\x20Linu'+_0x7bbfe5(-0x28e,-0x93,0x241,0x24)+_0x7bbfe5(0x41f,0x40e,0x3c9,0x3c9)+_0x41ad86(0x153,-0x4e,0x1f0,0xf8)+_0x7bbfe5(-0x2ac,-0x24b,-0x164,-0xe4)+_0x7bbfe5(0x1a0,0x39,0x4c7,0x225),_0x59c344[_0x7bbfe5(0x3a9,0x28b,0x25d,0x3eb)]=_0x41ad86(0x2c6,0x439,0x17d,0x39d)+_0x7bbfe5(-0x46,0x1d2,-0x24,0x20c)+_0x7bbfe5(-0xba,-0x255,-0x15e,0x11)+_0x41ad86(0x252,0x54b,0x5bf,0x35e)+'0_9_5)\x20App'+_0x41ad86(0x806,0x59a,0x592,0x689)+_0x7bbfe5(0xca,0x390,0x2ba,0x78)+_0x7bbfe5(-0xb8,0x220,0x190,0x233)+_0x41ad86(0x0,0x33a,0x554,0x3d3)+_0x41ad86(-0x1a9,-0x92,-0x208,0x7e)+'25.181\x20Saf'+_0x7bbfe5(0xad,0x4a,0xba,-0x62),_0x59c344['JelXS']=_0x7bbfe5(0x468,0x2c2,0x14c,0x400)+_0x41ad86(0x3df,0x245,0x393,0x13e)+_0x7bbfe5(-0x34b,-0x2fa,0xb4,0x11)+_0x7bbfe5(0x36e,0x5a7,0x1fd,0x512)+_0x7bbfe5(0x4aa,0x4d0,0x12e,0x3bd)+_0x41ad86(-0x173,-0x3d,-0x2ee,0x95)+_0x7bbfe5(0x6c5,0x547,0x2b6,0x546)+'Firefox/47'+'.0',_0x59c344[_0x41ad86(-0x62,0x187,0x4c,0x454)]=_0x7bbfe5(0x2b4,0x682,0x395,0x400)+_0x7bbfe5(0x515,0x17e,0x3c7,0x20c)+_0x41ad86(0x1b,0x4a,-0x2de,0x236)+'Mac\x20OS\x20X\x201'+'0_11_6)\x20Ap'+'pleWebKit/'+_0x7bbfe5(0x349,0x4cf,0x4e8,0x2ac)+_0x7bbfe5(0x2e5,0x113,0x409,0x258)+_0x41ad86(0xe5,0xb2,0x261,-0x18e)+_0x7bbfe5(-0xfa,-0x1b1,0x51,0x178)+'1.2\x20Safari'+_0x7bbfe5(0x500,0x628,0x28d,0x5be),_0x59c344['xgZda']=_0x7bbfe5(0x3c3,0x514,0x3ee,0x400)+_0x41ad86(0x186,0x245,-0xb7,0x3fa)+_0x7bbfe5(-0x282,0x13e,-0x59,0x11)+_0x7bbfe5(0x208,0x485,0x436,0x512)+_0x7bbfe5(-0xa4,0xc8,0x2c6,0x2b0)+_0x7bbfe5(0xa7,0x43a,0x5ba,0x353)+'601.7.7\x20(K'+_0x41ad86(0x813,0x555,0x4b9,0x7d8)+_0x41ad86(0x317,0x2e4,0x1f7,0x303)+_0x7bbfe5(0x769,0x291,0x52c,0x5a3)+_0x7bbfe5(-0x2ba,-0x62,0x161,-0x23)+'01.7.7',_0x59c344[_0x41ad86(0x167,0x69,0x229,0x104)]='Mozilla/5.'+'0\x20(Macinto'+_0x41ad86(0x155,0x4a,-0x2e6,0x2ed)+_0x41ad86(0x2aa,0x54b,0x511,0x344)+_0x7bbfe5(0x185,0x580,0x54b,0x368)+'leWebKit/5'+'37.36\x20(KHT'+_0x41ad86(0x1f9,0x26c,0x278,0x3b8)+_0x7bbfe5(0x2de,0x40e,-0x2b,0x301)+'me/36.0.19'+_0x7bbfe5(0x5ba,0x685,0x521,0x3ea)+_0x7bbfe5(0x144,0x7d,0x2a5,-0x62),_0x59c344[_0x7bbfe5(0x70,-0x2e,-0x41,0x300)]=function(_0x11ac8e,_0x57e551){return _0x11ac8e*_0x57e551;};const _0x399869=_0x59c344,_0x1dd06a=[_0x41ad86(0x3d5,0x439,0x2c5,0x4ab)+'0\x20(Macinto'+'sh;\x20Intel\x20'+_0x7bbfe5(0x361,0x1f0,0x1c3,0x512)+'0_11_6)\x20Ap'+'pleWebKit/'+'605.1.15\x20('+_0x41ad86(0x37,0x291,0x1c7,0x324)+_0x41ad86(0x337,0xb2,-0x288,0x277)+'ersion/11.'+_0x7bbfe5(0x5a8,0x630,0x1ac,0x3f3)+_0x7bbfe5(0x7a8,0x2ac,0x600,0x5be),_0x399869[_0x7bbfe5(-0x1a1,0x3f2,-0x75,0xfd)],_0x399869[_0x41ad86(0x3a9,0xc8,0x1b7,-0x11b)],_0x399869['FJtQS'],_0x399869[_0x7bbfe5(0x39a,0x47d,0x45d,0x418)],_0x7bbfe5(0x37a,0x61c,0x1b9,0x400)+'0\x20(Macinto'+'sh;\x20Intel\x20'+_0x41ad86(0x289,0x54b,0x46d,0x88c)+_0x7bbfe5(0x1c6,-0x1c4,0xac,0x8d)+_0x41ad86(0x67c,0x59a,0x374,0x349)+_0x7bbfe5(0x1d3,0x476,0x47e,0x402)+'KHTML,\x20lik'+_0x7bbfe5(-0x1da,-0x1ff,-0xe4,0x79)+'ersion/7.0'+_0x7bbfe5(0x48d,0x879,0x365,0x5e6)+_0x7bbfe5(0x69c,0x4d3,0x819,0x5b7),_0x399869[_0x41ad86(0x49c,0x311,0x14d,-0x60)],_0x399869[_0x41ad86(0x2d8,0x26d,0x411,0x349)],_0x7bbfe5(0x21b,0x433,0xb9,0x400)+_0x41ad86(0x444,0x450,0x381,0x1f7)+'\x20NT\x2010.0;\x20'+_0x7bbfe5(-0xbe,0x2bd,0x14f,0x27d)+_0x7bbfe5(0xbf,0x53,-0x95,0x101)+_0x7bbfe5(0xa1,0x2b6,0x3c9,0x3fe)+_0x41ad86(0x470,0x20c,-0x36,-0x157)+_0x7bbfe5(0x4f9,0x4c5,0x590,0x3d2)+_0x41ad86(-0x12d,-0x7c,0x25f,0xd)+'.0.2743.11'+_0x41ad86(-0x31a,0x2b,0x193,0x1bc)+_0x7bbfe5(0x56e,0x5a1,0x5ce,0x37f)+_0x41ad86(0x141,0x67,0x1fb,0x13c),_0x399869[_0x41ad86(0x3c2,0xc9,0x1e6,0x30c)],_0x399869['vSnhM'],_0x399869[_0x41ad86(0x2be,0x14e,-0x61,0x3e)],_0x41ad86(0x713,0x439,0x416,0x229)+'0\x20(Windows'+_0x7bbfe5(0xb0,0x3e5,0x43a,0x13b)+_0x7bbfe5(0x26,0x34,-0xd3,0x27d)+_0x7bbfe5(0x29e,0x372,0x15,0x101)+_0x41ad86(0x278,0x437,0x72a,0x673)+_0x7bbfe5(0x4c0,0x3b0,0x221,0x1d3)+_0x41ad86(0x341,0x40b,0x45f,0x33f)+'\x20Chrome/85'+'.0.4183.12'+_0x41ad86(0x56a,0x5c0,0x7b1,0x81a)+_0x41ad86(0x147,0x3a0,0x4d3,0x383),_0x399869[_0x7bbfe5(0x3bd,0x288,-0x9,0x1c7)],_0x399869[_0x7bbfe5(-0x18a,-0x21,0x374,0x10)],_0x399869['JWpTf'],_0x399869['CiEBs'],_0x399869[_0x41ad86(0x3c9,0x118,0x3bb,0x5f)],_0x399869['BGnYC'],_0x399869[_0x41ad86(0x44c,0x58a,0x61e,0x3b2)],_0x7bbfe5(0x166,0x4f4,0x600,0x400)+_0x41ad86(0x220,0x2b2,0x5e0,0x4d2)+_0x41ad86(0x604,0x2d0,0x194,0x5cb)+_0x7bbfe5(0x30c,0x5db,0x43b,0x58a)+'\x20Gecko/201'+_0x41ad86(0x38d,0x17f,0x185,0x36b)+_0x7bbfe5(0x335,0x317,0x1e5,0x483),_0x399869[_0x7bbfe5(0x34d,0x6d2,0x127,0x3eb)],_0x399869['JelXS'],_0x399869[_0x41ad86(0xbc,0x187,0x1ce,0xd9)],_0x399869[_0x7bbfe5(0x37e,-0x98,-0xd0,0xfd)],_0x399869['xgZda'],_0x399869['twDUj']],_0x48b7b2=_0x1dd06a[~~_0x399869[_0x7bbfe5(0x296,0x58b,0x495,0x300)](Math[_0x41ad86(0x278,0x4e3,0x5bf,0x1d9)](),_0x1dd06a[_0x41ad86(0x4b6,0x1f3,0x36d,0x30c)])];return _0x48b7b2;},getID=_0x222c97=>{let _0x3d92fa=/twitter\.com\/[^/]+\/status\/(\d+)/;function _0x595619(_0x501ebc,_0x414c60,_0x299003,_0x3ce092){return _0x44f626(_0x501ebc- -0x3f4,_0x414c60,_0x299003-0xbd,_0x3ce092-0xec);}let _0x15cd37=_0x3d92fa[_0x595619(0x183,0x3e1,0x4e,0x172)](_0x222c97);return _0x15cd37&&_0x15cd37[-0x65*-0x39+-0x859+0x4d*-0x2f];},getInfo=async function(_0x4ccb75){function _0x1f85b8(_0x50fbed,_0x49eacc,_0x2bc12f,_0x2c9637){return _0x44f626(_0x2bc12f- -0x172,_0x49eacc,_0x2bc12f-0x2f,_0x2c9637-0x17c);}function _0x248084(_0x3b2f1d,_0x2b4804,_0x2287b9,_0x942715){return _0x4aa842(_0x942715- -0x640,_0x2b4804-0xf9,_0x2287b9-0xf5,_0x2287b9);}const _0x5bf6d7={'GeALz':_0x1f85b8(0x36b,0x549,0x3c4,0x47a)+'E','fhmAA':_0x248084(-0x91,-0x298,0x8,0x55)+_0x248084(-0x159,0x2f8,-0x95,0x1e2),'uSzcL':_0x248084(0x3ea,-0x1b1,0x101,0xb1)+'ot','vYBCa':_0x248084(0x185,0x3f3,0x369,0xec)+_0x1f85b8(0xa9e,0x5ef,0x74c,0x7b5),'GPCnB':'_Semua\x20fit'+_0x248084(0x326,0x2d7,0x3fa,0x40f),'Qpnlm':_0x1f85b8(0x662,0x9bf,0x67b,0x7cb),'cZMlR':_0x248084(0x29d,0x48b,0x5b8,0x537)+_0x1f85b8(0x67d,0x1f8,0x48f,0x16c),'eGeNm':_0x248084(-0x147,-0x1ce,-0x317,-0xb2)+_0x1f85b8(0x7ef,0x88d,0x5b2,0x709)+_0x1f85b8(0x836,0x5f5,0x72c,0x514),'Mybvu':'Sub\x20Menu\x20k'+_0x248084(0x9d,-0x217,-0x11d,-0x189),'BJrqn':_0x1f85b8(-0x2f,0x632,0x2da,0x602)+_0x1f85b8(0x872,0x6fb,0x90b,0xc4a),'yiLTy':_0x1f85b8(0x58b,0x4cf,0x390,0x5ba)+_0x248084(0x542,0x602,0x199,0x36b)+_0x248084(0x7e5,0x7f4,0x318,0x486),'uDFCo':'Sub\x20Menu\x20k'+_0x1f85b8(0x432,0x298,0x32b,0x1f8),'PQLKy':_0x1f85b8(0x21e,-0x96,0x293,0xd8)+'rt\x20Menu','MNFKh':_0x1f85b8(0x437,0x1b,0x351,0x322)+_0x248084(0x237,-0x2b0,0x314,0x8e)+_0x248084(0x448,0x666,0x67b,0x466),'JhVOF':_0x248084(0x201,0x1d7,-0x2db,-0x57),'kiUjZ':'🎰\x20〉ɞ\x20Fun\x20M'+'enu','BIsMf':_0x248084(-0x25f,-0x3d6,0x17c,-0x131)+_0x248084(0xda,0x36d,0x427,0x30e)+_0x1f85b8(0xb69,0x6bd,0x90f,0x5c6)+'t_','ZKvwZ':_0x248084(0x552,0x551,0x33a,0x244),'JYgSK':_0x248084(0x264,0x10c,0x96,0x2c7)+_0x1f85b8(0x24f,0x23c,0x363,0x49d),'CAlTL':_0x248084(0x411,0xff,0x5b3,0x2cb)+'buat\x20karya'+_0x1f85b8(0x13a,0x505,0x2ea,0x160)+_0x1f85b8(0x6e9,0x150,0x429,0x4af),'MpZjU':_0x248084(0x5b2,0x4b0,0x365,0x2c7)+'e-6','qrliR':_0x1f85b8(0x2c7,0x665,0x51f,0x490)+'\x20yang\x20saya'+_0x248084(-0x16c,-0x2a9,-0x48,-0x68)+_0x248084(0x369,-0x1d7,-0x357,0x8),'VKKol':_0x1f85b8(0x216,0x7f3,0x56a,0x476),'KqXMq':_0x1f85b8(0x4b9,0x697,0x6ca,0xa17)+_0x1f85b8(0x75f,0x79f,0x440,0x418),'uLAYO':'👤\x20〉ɞ\x20Owner'+'\x20Menu','LjlNj':_0x248084(-0x39c,0x3,-0x1db,-0x16c)+_0x1f85b8(0x6d1,0x9f7,0x75a,0xa20)+_0x1f85b8(0x86e,0x24d,0x4fc,0x240),'bsERV':_0x1f85b8(0x868,0x807,0x56c,0x2a4),'iJGMQ':_0x1f85b8(0x96a,0x440,0x6ca,0x4a3)+_0x1f85b8(0x538,0x1c9,0x334,0x59c),'ekzYd':_0x1f85b8(0x57a,0x7ad,0x5a2,0x29c)+'ge\x20Menu','fBtSC':_0x1f85b8(0x58c,0x3d6,0x594,0x656)+'yimpan\x20med'+'ia\x20di\x20data'+'base\x20bot_','bXLKx':'storagecmd','lVnpx':_0x248084(0x4f1,0x10e,0x266,0x2c7)+_0x1f85b8(0x3a4,0x4a9,0x51d,0x755),'GyFCI':_0x248084(0x433,0x408,0x9d,0xc8),'SQRFI':_0x248084(0x43e,0xa9,0x35f,0x2c7)+_0x1f85b8(-0x12,0x4cc,0x2fb,0x63c),'HqDLg':_0x248084(0x262,0x274,0x470,0x345)+'nu','TRyMw':_0x248084(0x252,-0x115,0x327,0x1d2)+_0x1f85b8(0x722,0x396,0x503,0x444)+'enggunakan'+_0x248084(0x86,-0x45c,0x2f,-0x116),'eRDAZ':_0x248084(0x383,0x2db,-0x140,0x39),'VtrKX':_0x248084(0x18d,-0x54,0x39c,0x2c7)+_0x248084(0x40a,0x61f,0x422,0x498),'JPUGZ':_0x248084(0x25b,-0x151,-0x1d2,0x71)+'\x20Cecan','VsxKZ':_0x248084(0x263,-0x1f1,-0xf7,-0x39)+_0x1f85b8(0x100,0x4ad,0x2bc,0x35f)+_0x248084(0x2ea,0x2c2,0x7f9,0x4b2)+_0x248084(0x45b,0x554,0x648,0x3ee),'IpiJT':_0x1f85b8(0x9a5,0x6aa,0x804,0x9d0),'lpCBj':_0x1f85b8(0x6eb,0x775,0x6ca,0x65f)+'e-12','LOLlo':_0x1f85b8(0x25d,0xca,0x2ab,0x492)+_0x1f85b8(0x704,0x5b7,0x507,0x7ea)+_0x1f85b8(0xab2,0x935,0x7f1,0xa46),'Znxsv':_0x248084(0x239,0x288,0x447,0x459)+'d','roECT':_0x248084(0x566,0x2d3,0x362,0x2c7)+_0x1f85b8(0x8f9,0xc0c,0x8b1,0x5cb),'qFhnW':'👙\x20〉ɞ\x20Nsfw\x20'+'Menu','wucnk':_0x1f85b8(0x43f,0x231,0x2ba,0x5e5)+_0x1f85b8(0x45b,0x7ab,0x567,0x249)+_0x1f85b8(0x66d,0x6c4,0x710,0x5d9)+_0x1f85b8(0x68e,0x488,0x4b6,0x4ea)+'_','aXgQw':_0x248084(0x629,0x46f,0x1ff,0x3aa),'rsWTz':_0x248084(-0x2d3,0xe9,-0x218,-0x184)+_0x1f85b8(0xb0b,0xb41,0x8a1,0x88d)+_0x1f85b8(0x750,0x6b5,0x82f,0x8e2),'zKHAP':_0x248084(-0x163,0x395,0x2e2,0x3e),'DhAvy':'Sub\x20Menu\x20k'+'e-15','sQMIa':'📸\x20〉ɞ\x20Image'+_0x1f85b8(0x549,0x5ae,0x85f,0x57a),'FYiJf':_0x248084(0x10,-0x1c1,0x31c,0x15)+_0x248084(0x286,-0x11a,-0x195,0xc7)+_0x1f85b8(0x2f7,0x1aa,0x309,0x259)+_0x248084(0x315,0x23e,-0x32f,0x2b)+_0x1f85b8(0x6bd,0x5e1,0x3f0,0x71f)+'_','wNvqI':_0x248084(-0x158,-0x356,-0x10f,-0xc1)+_0x248084(0x186,0x3b1,0xd2,0x378),'AlIad':_0x248084(0x668,0x236,0x3e7,0x4cd)+_0x248084(0x193,0xe0,0x14,-0x12c),'VENlO':'cogancmd','CRsFz':_0x1f85b8(0x5cf,0x323,0x5a9,0x4f8)+'s\x20Menu','WVGlK':_0x248084(0x98,0x4a0,0x4c2,0x168)+_0x248084(-0x3bb,-0x100,-0x13f,-0x7a)+_0x248084(0x70f,0x158,0x335,0x416)+_0x248084(-0x24c,-0xb3,-0x74,0xa1),'NAhxD':_0x248084(0x50c,0x606,0x4ee,0x4fd),'tvroq':_0x1f85b8(0x8de,0x480,0x6ca,0x396)+'e-18','EFKqm':'👸\x20〉ɞ\x20Anime'+'\x20Menu','basEx':_0x248084(0x5ed,0x32,0x4cd,0x332)+_0x248084(0x6fd,0x2f9,0x741,0x407),'HtrXX':'animecmd','yafVH':_0x1f85b8(0x97b,0x843,0x6ca,0x661)+_0x248084(0x290,0x2db,0x4d5,0x26c),'GWLRP':_0x1f85b8(0x5ff,0x56b,0x684,0x76e),'cfaHD':_0x1f85b8(0x99f,0x564,0x6ca,0x43c)+_0x248084(-0x1af,-0xbf,0x327,0x178),'WYNBu':_0x248084(0x47,0x62,-0x154,-0x86)+_0x248084(-0x27d,0x36a,0x13b,0x17),'rYxgG':_0x1f85b8(0x4ad,0x5aa,0x669,0x4ba)+_0x248084(0x70,0x2b1,-0xaf,-0x21)+_0x248084(0x5d0,0x364,0x31d,0x27f),'gfCkQ':_0x1f85b8(0x75c,0xc87,0x943,0x8dd)+_0x248084(-0x12b,-0x107,-0x191,0x58)+_0x1f85b8(0x14f,0x18b,0x461,0x766)+'_','rPYMy':_0x248084(-0x5e,0x3db,0x2e0,0x116),'EOPTz':_0x248084(0x10d,-0x9e,0x5fb,0x2c7)+_0x248084(-0x88,0x245,0x22a,-0x12a),'VcAic':_0x248084(0x3d5,0x553,0x5a5,0x339)+_0x1f85b8(0x40c,0x62b,0x30a,0x4a3),'wxQhp':_0x1f85b8(0x85a,0x685,0x77f,0x9a1),'sWmEr':_0x1f85b8(0xaea,0xa08,0x8a9,0xabd)+_0x1f85b8(0x89b,0x703,0x6c9,0x4a5),'OhWOR':_0x1f85b8(0x83a,0x364,0x6ca,0x6e4)+_0x248084(0xef,0x115,0x6ac,0x41f),'fdppt':_0x1f85b8(0x6aa,0x9e2,0x75e,0x4e7),'DoFVh':'Sub\x20Menu\x20k'+_0x1f85b8(0xa85,0x959,0x839,0x8f0),'nKvoN':_0x248084(0x122,0x20d,0x11e,0x11d)+'o360\x20Menu','mgfQW':'_Membuat\x20l'+_0x1f85b8(0x9ec,0x8d0,0x8a8,0x54a)+'dari\x20web\x20e'+_0x1f85b8(0xbe3,0x9a0,0x8f8,0x90a)+_0x1f85b8(0x7c2,0x37a,0x52d,0x822),'pBPhr':_0x1f85b8(0x300,0x58b,0x4d8,0x1a6)+'md','mzrWL':'🖼️\x20〉ɞ\x20Logo\x20'+_0x1f85b8(0x6e0,0x58d,0x6cb,0x781),'HdxEy':'logocmd','Vwpfz':'🌁\x20〉ɞ\x20Sourc'+'e\x20Code','JmIQW':'Contributi'+'on','dnUYd':_0x248084(-0x342,0xc9,-0x120,0x0)+'hanks\x20To','eVDRp':'_Orang²\x20ya'+_0x1f85b8(0x906,0x956,0x779,0x735)+_0x248084(-0x1f7,-0x95,-0x2b9,0x1f)+_0x248084(0x2b3,0x51c,0x1e6,0x2de)+_0x1f85b8(0x573,0x4e9,0x296,0x339),'YLKSI':function(_0x4aec90,_0x30d865){return _0x4aec90(_0x30d865);},'VVuJo':function(_0x3c0b84,_0x555de2){return _0x3c0b84!==_0x555de2;},'EmKaf':_0x1f85b8(0x962,0x810,0x940,0xaa7),'NGrkZ':'JMhBm','Ftyff':function(_0x50d5fe){return _0x50d5fe();},'JqnfA':function(_0x51f1f0,_0x23c7fe){return _0x51f1f0!==_0x23c7fe;},'KJafe':_0x1f85b8(0x871,0x7b3,0x728,0x805),'CfmEF':_0x1f85b8(0x788,0x202,0x435,0x764)+_0x248084(0x338,0x5c4,0x64f,0x502),'xlYJp':_0x248084(0x49b,0x417,0x3c3,0x15b),'YSeMI':_0x1f85b8(0xbc8,0x642,0x912,0x832)+_0x1f85b8(0x65f,0x6fd,0x823,0xa33),'PXEIN':_0x1f85b8(0xa89,0x573,0x84d,0x6eb),'wPlMk':_0x248084(0x624,0x278,0x656,0x4f7),'fWYMc':function(_0x4fdb92,_0x180dfe){return _0x4fdb92===_0x180dfe;},'govGA':_0x248084(0x456,0x382,0x2ca,0x2ef),'GAkeD':_0x248084(0x4a8,0x60c,0x716,0x47b),'pxZhb':_0x248084(0x2d,0x39c,0x382,0x323),'PwuLs':'animated_g'+'if','KLrvQ':'video_info','NgUjh':_0x248084(0x434,0x8d,0x2e8,0x1a0)+'ter\x20URL'},_0x2775a9=_0x5bf6d7[_0x248084(0x3bd,0x631,0x5cc,0x3e7)](getID,_0x4ccb75);if(_0x2775a9){let _0x3d8178;try{if(_0x5bf6d7['VVuJo'](_0x5bf6d7['EmKaf'],_0x5bf6d7['NGrkZ'])){const _0x528f21=await _0x5bf6d7[_0x1f85b8(0x4db,0x772,0x6a2,0x750)](getToken);_0x3d8178=_0x528f21[_0x248084(0x182,0x7f1,0x377,0x489)+'n'];}else _0x3b31d2(_0x1f85b8(0xa02,0x88b,0x80e,0xb3d)+'or');}catch(_0x17f2e2){if(_0x5bf6d7[_0x248084(0x6e,0x484,0xf1,0x306)](_0x1f85b8(0x73a,0xa6f,0x728,0x866),_0x5bf6d7[_0x248084(0x6c,0xfb,0x198,0xef)])){const _0x5e6ad0={};_0x5e6ad0[_0x1f85b8(0x7f2,0x473,0x7d2,0x63f)+'id']=[_0x45d97d];const _0x367ac9={};_0x367ac9['quoted']=_0x23c433,_0x367ac9['contextInf'+'o']=_0x5e6ad0;let _0x518702=_0x4cb594[_0x1f85b8(0x938,0xaaa,0x90d,0x9dd)+'sageFromCo'+'ntent'](_0x2db770,{'listMessage':{'title':_0x1f85b8(0x865,0x6b6,0x75b,0x900)+_0x248084(0x371,0x400,0x4d,0xc6),'description':'Hai\x20@'+_0x587f72[_0x248084(0x13e,0x64a,0xd8,0x36a)]('@')[0x666+-0x15c7+-0x1*-0xf61]+(_0x248084(0x348,0x10d,0x54f,0x411)+_0x1f85b8(0x680,0x9b6,0x762,0x7bf)+_0x1f85b8(0x675,0x4ac,0x541,0x201)+_0x248084(0x4a4,0x129,0x3f9,0x16d)+_0x1f85b8(0x7a2,0x830,0x4e5,0x722)+_0x248084(-0x2dc,-0xaf,0xfc,0x13)+_0x248084(0x37e,-0xf1,-0xa6,0x1a5)+_0x248084(0x4ae,0x267,0x36a,0x141)+_0x248084(0x323,0x172,0x248,0x4a7)),'buttonText':_0x5bf6d7['GeALz'],'footerText':'©\x20'+_0x2ed8a0,'listType':_0x5bf6d7[_0x248084(-0x73,0xf8,0x3cd,0x144)],'sections':[{'title':_0x5bf6d7[_0x248084(-0xc5,0x4b7,0x81,0x283)],'rows':[{'title':_0x5bf6d7[_0x248084(0x33f,0x834,0x70b,0x506)],'description':_0x5bf6d7[_0x248084(-0x258,-0x24c,0x31,-0x38)],'rowId':_0x5bf6d7[_0x248084(0xf9,0x1a7,0x330,0x138)]}]},{'title':'Sub\x20Menu\x20k'+_0x1f85b8(0x4bc,-0x30,0x2f2,0x171),'rows':[{'title':_0x5bf6d7[_0x248084(0x2db,0x22f,0x27c,0x289)],'description':_0x5bf6d7[_0x1f85b8(0x44c,0x427,0x6ad,0x818)],'rowId':_0x248084(-0x82,-0x7f,-0xde,-0x71)+'d'}]},{'title':_0x5bf6d7[_0x1f85b8(0x7fd,0x508,0x4cf,0x40a)],'rows':[{'title':_0x5bf6d7[_0x248084(-0x363,-0x3dc,0x18b,-0xe9)],'description':_0x5bf6d7['yiLTy'],'rowId':_0x1f85b8(0x522,0x738,0x71b,0x95d)}]},{'title':_0x5bf6d7[_0x1f85b8(0x400,0x6e1,0x758,0x774)],'rows':[{'title':_0x5bf6d7[_0x248084(0x82,0x38e,0x2c,0x2a0)],'description':_0x5bf6d7['MNFKh'],'rowId':_0x5bf6d7[_0x248084(0x5e4,0x4db,0x593,0x524)]}]},{'title':_0x1f85b8(0x776,0x72b,0x6ca,0x3ac)+_0x248084(0x127,-0x144,-0x59,-0xe4),'rows':[{'title':_0x5bf6d7[_0x1f85b8(0x387,0x7c8,0x535,0x207)],'description':_0x5bf6d7['BIsMf'],'rowId':_0x5bf6d7[_0x1f85b8(0x7ca,0x436,0x4e3,0x294)]}]},{'title':_0x5bf6d7[_0x1f85b8(0x816,0x3ca,0x703,0x71a)],'rows':[{'title':_0x1f85b8(0x6e3,0x819,0x6c6,0x5c8)+_0x248084(0x723,0x233,0x353,0x508),'description':_0x5bf6d7['CAlTL'],'rowId':_0x248084(-0x6d,0x31f,0x41c,0x2ba)}]},{'title':_0x5bf6d7[_0x248084(0x42e,-0x1f8,0x432,0x10d)],'rows':[{'title':_0x248084(0x414,0x76e,0x29b,0x425)+_0x248084(0x331,0x67b,0x615,0x508),'description':_0x5bf6d7[_0x248084(0x5fd,0x635,0x6ac,0x50d)],'rowId':_0x5bf6d7[_0x248084(0xbd,0x606,0x328,0x302)]}]},{'title':_0x5bf6d7[_0x1f85b8(0xa17,0x732,0x7d0,0xad1)],'rows':[{'title':_0x5bf6d7[_0x248084(0x1f1,0xaf,0x11c,-0xb6)],'description':_0x5bf6d7['LjlNj'],'rowId':_0x5bf6d7[_0x1f85b8(0x374,0x69c,0x489,0x3c4)]}]},{'title':_0x5bf6d7['iJGMQ'],'rows':[{'title':_0x5bf6d7[_0x248084(0x1a8,-0x194,0x252,0x5d)],'description':_0x5bf6d7['fBtSC'],'rowId':_0x5bf6d7['bXLKx']}]},{'title':_0x5bf6d7[_0x248084(-0x169,0x18a,0xc1,-0x121)],'rows':[{'title':_0x1f85b8(0xa97,0x6e5,0x79d,0x5e9)+_0x1f85b8(0x696,0x549,0x475,0x79c),'description':_0x1f85b8(0x5b2,0x906,0x594,0x6a7)+'andai\x20memb'+'er\x20dalam\x20g'+_0x1f85b8(0xc0a,0x772,0x8e2,0xb7c),'rowId':_0x5bf6d7[_0x1f85b8(0x801,0x81b,0x782,0x9c8)]}]},{'title':_0x5bf6d7[_0x1f85b8(0x159,0x66e,0x45e,0x388)],'rows':[{'title':_0x5bf6d7[_0x1f85b8(-0x66,0xba,0x275,0x5c0)],'description':_0x5bf6d7[_0x1f85b8(0x3b9,0x56e,0x665,0x40b)],'rowId':_0x5bf6d7['eRDAZ']}]},{'title':_0x5bf6d7[_0x248084(0x2ff,-0x111,0x4c0,0x192)],'rows':[{'title':_0x5bf6d7[_0x248084(0x462,0x429,0x17b,0x19c)],'description':_0x5bf6d7[_0x248084(0x4f1,0x6f8,0x2ba,0x422)],'rowId':_0x5bf6d7['IpiJT']}]},{'title':_0x5bf6d7['lpCBj'],'rows':[{'title':'🕹️\x20〉ɞ\x20Teleg'+'ram\x20Sticke'+'r','description':_0x5bf6d7[_0x1f85b8(0xb0e,0xb86,0x813,0x8b4)],'rowId':_0x5bf6d7[_0x248084(0x1f9,0x130,0x2c0,0x1d1)]}]},{'title':_0x5bf6d7[_0x1f85b8(0x28a,0x586,0x44d,0x109)],'rows':[{'title':_0x5bf6d7[_0x248084(0xa8,-0x3c2,0xbf,-0x7e)],'description':_0x5bf6d7[_0x248084(-0x10b,0x278,0x2f8,0x9d)],'rowId':_0x5bf6d7[_0x1f85b8(0x9dd,0x6d7,0x86d,0xb69)]}]},{'title':_0x1f85b8(0x7f2,0x7a1,0x6ca,0x368)+_0x248084(0x6f6,0x30d,0x625,0x4a1),'rows':[{'title':_0x248084(-0x5c,-0x24d,-0xd6,0x82)+'n\x20Menu','description':_0x5bf6d7[_0x1f85b8(0x570,0x100,0x399,0x2f5)],'rowId':_0x5bf6d7[_0x248084(0x5ca,0x5af,0x102,0x2cd)]}]},{'title':_0x5bf6d7[_0x248084(0x49f,0x94,0x643,0x344)],'rows':[{'title':_0x5bf6d7[_0x248084(0x3bb,0x32c,0x7e8,0x550)],'description':_0x5bf6d7[_0x248084(0x7c5,0x43e,0x4ef,0x53a)],'rowId':_0x5bf6d7[_0x248084(-0x37e,-0x1e1,-0x374,-0x176)]}]},{'title':'Sub\x20Menu\x20k'+'e-16','rows':[{'title':_0x5bf6d7[_0x248084(0x29e,0x365,-0x13f,0x67)],'description':_0x1f85b8(0x43,0x625,0x34a,0x3d9)+_0x1f85b8(0x66a,0x74d,0x426,0x78a),'rowId':_0x5bf6d7[_0x1f85b8(0x3ee,0x4cf,0x59c,0x4b8)]}]},{'title':_0x248084(0x3eb,0x3d,-0x4,0x2c7)+_0x1f85b8(0x4a7,0x5bc,0x457,0x18c),'rows':[{'title':_0x5bf6d7['CRsFz'],'description':_0x5bf6d7['WVGlK'],'rowId':_0x5bf6d7[_0x248084(0x2b0,0x160,0x321,0x457)]}]},{'title':_0x5bf6d7[_0x1f85b8(0x306,0x6c2,0x3e8,0x11d)],'rows':[{'title':_0x5bf6d7['EFKqm'],'description':_0x5bf6d7[_0x248084(0x4f0,0x3f4,0x550,0x370)],'rowId':_0x5bf6d7[_0x1f85b8(0x486,0x70c,0x645,0x3f9)]}]},{'title':_0x5bf6d7['yafVH'],'rows':[{'title':_0x1f85b8(0x408,-0x2f,0x2ad,0x4df)+_0x1f85b8(0x45e,0x42c,0x42a,0x33f),'description':'_Logo\x20make'+_0x1f85b8(0x3a0,0x175,0x303,0x367)+_0x1f85b8(0x714,0x134,0x3a1,0x385),'rowId':_0x5bf6d7[_0x248084(-0x124,0x4d,0x1b4,0x203)]}]},{'title':_0x5bf6d7[_0x248084(0x2ff,-0x187,0x441,0x147)],'rows':[{'title':_0x5bf6d7[_0x248084(-0x333,0x290,0x250,-0x52)],'description':_0x5bf6d7[_0x248084(-0xde,-0x25a,0xd3,0xe4)],'rowId':_0x248084(0x4ea,0x44,0xc8,0x2a2)+'d'}]},{'title':_0x1f85b8(0xa14,0x3f0,0x6ca,0x7a5)+_0x248084(0x18d,0x4b3,0x9d,0x1db),'rows':[{'title':'💽\x20〉ɞ\x20Sound'+_0x1f85b8(0xa3b,0x763,0x90b,0x9fb),'description':_0x5bf6d7[_0x1f85b8(0x8d1,0x63a,0x6b3,0x472)],'rowId':_0x5bf6d7['rPYMy']}]},{'title':_0x5bf6d7[_0x248084(-0x2b6,0x27d,-0xd1,0x91)],'rows':[{'title':_0x248084(-0x252,0x41,-0x1eb,-0x9c)+'g\x20Menu','description':_0x5bf6d7[_0x1f85b8(0xa90,0x940,0x935,0x7d2)],'rowId':_0x5bf6d7[_0x248084(0x63,0x117,0x2a,-0x97)]}]},{'title':_0x1f85b8(0x505,0x83d,0x6ca,0x6ec)+'e-23','rows':[{'title':_0x5bf6d7[_0x248084(0x544,0x567,0x19c,0x26e)],'description':_0x1f85b8(0x6e3,0x90b,0x8cc,0xa40)+'asa\x20depan_','rowId':_0x248084(-0x100,0x1cb,0x34,-0x20)}]},{'title':_0x5bf6d7[_0x248084(-0x8,0x439,0x39c,0x245)],'rows':[{'title':_0x1f85b8(0x27f,0x342,0x4af,0x537)+'ic\x20Menu','description':_0x248084(0x256,0x1f3,0xd6,-0xb2)+_0x1f85b8(0x758,0x2fe,0x5af,0x5a8)+_0x1f85b8(0x34b,0x585,0x52e,0x3ef),'rowId':_0x5bf6d7[_0x1f85b8(0x653,0x485,0x319,0x5c5)]}]},{'title':_0x5bf6d7[_0x1f85b8(0x443,-0x65,0x2f0,0x333)],'rows':[{'title':_0x5bf6d7['nKvoN'],'description':_0x5bf6d7[_0x248084(-0x1f1,0x372,0x32a,0x12c)],'rowId':_0x5bf6d7['pBPhr']}]},{'title':_0x248084(0xe5,0x297,0x38,0x2c7)+'e-26','rows':[{'title':_0x5bf6d7[_0x248084(0x221,0x356,0xdf,0xb6)],'description':_0x248084(-0x3f,0xb9,-0x1be,0x113)+_0x248084(0x20b,0x263,-0x167,0x1c)+_0x248084(0x29f,0x39d,0x1e1,0x170),'rowId':_0x5bf6d7[_0x248084(0x67,0x277,0x18a,-0x6c)]}]},{'title':_0x1f85b8(0x189,0x2ca,0x395,0x5d1)+_0x248084(-0x1b7,0x225,-0x183,-0x93),'rows':[{'title':_0x5bf6d7[_0x248084(0x7ab,0x1dc,0x675,0x4fe)],'description':_0x1f85b8(0x7e6,0x8ae,0x5ce,0x66c)+_0x1f85b8(0x4cc,0x27c,0x576,0x529),'rowId':'sc'}]},{'title':_0x5bf6d7[_0x1f85b8(0x501,0x739,0x46e,0x2d8)],'rows':[{'title':_0x5bf6d7['dnUYd'],'description':_0x5bf6d7['eVDRp'],'rowId':'tq'}]}]}},_0x367ac9);const _0x262763={};_0x262763[_0x1f85b8(0x6d2,0x6e8,0x95e,0xc50)]=!![],_0x10ff01[_0x1f85b8(0x7d0,0x70f,0x5cb,0x8c8)+_0x1f85b8(0x6ff,0x648,0x776,0xa0c)](_0x518702,_0x262763);}else throw new Error(_0x17f2e2);}const _0x24a1fb={};_0x24a1fb[_0x1f85b8(0x46b,0x321,0x340,0x209)+_0x1f85b8(0x4ed,0x53e,0x48a,0x71d)]=_0x3d8178,_0x24a1fb[_0x1f85b8(0x57b,0x81c,0x796,0x5c8)+_0x1f85b8(0xb63,0x5f8,0x8da,0xb05)]=AUTH;const _0x302df3={};_0x302df3[_0x248084(0x536,0x19e,0x18e,0x2f3)]=_0x24a1fb;const _0x361c5c=await axios[_0x248084(-0x134,-0xad,-0x3a9,-0x5a)](Util[_0x248084(0x4ae,0x4a3,-0x25,0x28f)](API_TIMELINE,_0x2775a9),_0x302df3);if(!_0x361c5c[_0x248084(0x677,0x356,0x241,0x531)][_0x5bf6d7['CfmEF']][_0x5bf6d7[_0x248084(0x197,0x25f,0x65a,0x365)]][_0x2775a9][_0x5bf6d7['YSeMI']])throw new Error(_0x5bf6d7[_0x1f85b8(0x43d,0x58d,0x420,0x374)]);const _0x4fc2b0=_0x361c5c[_0x1f85b8(0x6d5,0x908,0x934,0xc53)][_0x5bf6d7[_0x1f85b8(0x3b7,0x5b9,0x58e,0x8a4)]][_0x5bf6d7[_0x248084(0xd4,0x48e,0xa4,0x365)]][_0x2775a9]['extended_e'+_0x248084(0x6dc,0x491,0x3b9,0x420)][_0x5bf6d7['wPlMk']];if(_0x5bf6d7[_0x1f85b8(0x2f9,0x5cd,0x61a,0x40b)](_0x4fc2b0[-0xc44+-0x1c2d+0x261*0x11]['type'],_0x5bf6d7['govGA']))return{'type':_0x4fc2b0[0x1d76+0x1*-0xe13+-0xf63]['type'],'full_text':_0x361c5c[_0x1f85b8(0x66f,0xa4d,0x934,0x79c)][_0x5bf6d7[_0x248084(0x4ab,0x4a2,0x48a,0x18b)]][_0x5bf6d7[_0x248084(0x5a6,0x63a,0x2cb,0x365)]][_0x2775a9][_0x1f85b8(0x97c,0x732,0x726,0x3e1)],'variants':_0x4fc2b0[-0xfb+0x35a+0x25f*-0x1][_0x248084(0x25d,-0x3a4,-0xb0,-0x49)][_0x5bf6d7[_0x248084(0x103,0x67,-0x279,-0xcd)]]};if(_0x4fc2b0[-0x219f+0x177e*-0x1+0x391d][_0x1f85b8(0x6ab,0x612,0x5ad,0x6e9)]===_0x1f85b8(0x19f,0x7f0,0x49a,0x734))return{'type':_0x4fc2b0[-0x11e8+-0x1791+-0x3*-0xdd3][_0x248084(0x3d,0x217,0x36d,0x1aa)],'full_text':_0x361c5c[_0x1f85b8(0xa91,0x8cc,0x934,0xa5a)][_0x248084(-0x6d,0x2f5,0xfc,0x32)+_0x1f85b8(0x9eb,0xa44,0x905,0xabd)][_0x5bf6d7[_0x1f85b8(0x5a5,0xa83,0x768,0x84c)]][_0x2775a9][_0x5bf6d7[_0x248084(0x4d7,0x502,0x4ff,0x1be)]],'variants':_0x4fc2b0[_0x248084(0x1b8,0x7a1,0x5e6,0x4e9)](_0x588ceb=>_0x588ceb['media_url_'+_0x1f85b8(0x322,0x7f,0x37f,0x1dd)])};if(_0x5bf6d7[_0x248084(-0x11a,-0xc6,0x1b0,0x217)](_0x4fc2b0[0x239*0xe+-0x9ba+-0x4a*0x4a][_0x248084(0x350,0x274,0x71,0x1aa)],_0x5bf6d7[_0x1f85b8(0x67f,0x500,0x445,0x52e)]))return{'type':_0x4fc2b0[-0x17ee+0x1*0xacf+0xd1f][_0x248084(0x70,0x14b,0x3c6,0x1aa)],'full_text':_0x361c5c[_0x1f85b8(0x80d,0x92b,0x934,0x952)][_0x248084(0x223,0x15,-0x249,0x32)+_0x1f85b8(0xa40,0xa44,0x905,0xc68)][_0x248084(0x2a3,0x441,0x30f,0x15b)][_0x2775a9][_0x5bf6d7[_0x248084(0x157,0x2ee,0x3c3,0x1be)]],'variants':_0x4fc2b0[-0xb44+0x1d9b+-0x1257][_0x5bf6d7[_0x248084(0x377,0x5ee,0x2bb,0x31e)]][_0x1f85b8(0x6cb,0x524,0x87e,0xb1e)]};}else throw new Error(_0x5bf6d7[_0x248084(0x185,0x1c6,-0x6,0xd6)]);};async function getToken(){const _0x53f370={};_0x53f370[_0x40f97a(0xa8b,0x970,0x957,0xa43)]=_0x40f97a(0x81d,0x6b9,0x654,0x9df)+_0x4b7b0b(0x10c,0xd7,-0x284,0x1e2)+'/p_2032mwb'+_0x40f97a(0x43d,0x6d3,0x4a8,0x541),_0x53f370[_0x40f97a(0x9fc,0x792,0x6f6,0x4b5)]='https://f.'+_0x40f97a(0x4d3,0x6b6,0xa28,0x743)+_0x4b7b0b(0x37d,0xce,-0xbb,0x238)+_0x4b7b0b(0x66,0x36e,0x4c8,0x381),_0x53f370['dvFlM']=_0x40f97a(0x667,0x6e9,0x4d4,0x6bb)+_0x40f97a(0x9d2,0x6b6,0x649,0x804)+_0x40f97a(0xa29,0xb2c,0xe74,0xd1d)+_0x4b7b0b(-0x67,0xf9,-0x14d,0x1bd);function _0x4b7b0b(_0x38adbf,_0x1e8885,_0x204f7d,_0x35f39f){return _0x4aa842(_0x1e8885- -0x5cc,_0x1e8885-0x106,_0x204f7d-0x13b,_0x35f39f);}_0x53f370[_0x40f97a(0x822,0xa4e,0x994,0x85e)]=_0x4b7b0b(-0x228,0xf3,0x256,0x247)+_0x4b7b0b(0x25e,0xd7,-0x1b,0xb1)+_0x40f97a(0x99b,0x762,0x4ab,0x484)+'pb1.jpg',_0x53f370['Zxdha']=function(_0x1f40e7,_0x50c66c){return _0x1f40e7*_0x50c66c;};function _0x40f97a(_0x7d6abb,_0x49c663,_0x4517ba,_0x1b36cd){return _0x4aa842(_0x49c663-0x13,_0x49c663-0x1f1,_0x4517ba-0xb,_0x7d6abb);}_0x53f370['ayDia']='tqto',_0x53f370[_0x4b7b0b(0x430,0x1d2,0x42b,-0x116)]=_0x4b7b0b(0x3e5,0x233,0x252,0x8b),_0x53f370[_0x40f97a(0x5f1,0x70a,0x62e,0x496)]=function(_0x3c4297,_0x1b4444){return _0x3c4297===_0x1b4444;},_0x53f370[_0x4b7b0b(0x5d,0x11c,-0x13b,0x43d)]='KsrUd',_0x53f370['eXwYm']=_0x40f97a(0x6cc,0x598,0x8c8,0x483);const _0xcb4151=_0x53f370;try{const _0x1f6d0b={};_0x1f6d0b[_0x4b7b0b(0x58a,0x407,0x3d9,0x2b8)+'ion']=AUTH;const _0x4e8274={};_0x4e8274['headers']=_0x1f6d0b;const _0x51b3a1=await axios[_0x40f97a(0x87b,0x7e1,0x849,0x8f8)](API_GUEST,null,_0x4e8274);if(_0xcb4151['DYmJV'](_0x51b3a1['status'],-0x2135*-0x1+-0xab5*-0x1+0x2b22*-0x1)&&_0x51b3a1['data'])return _0x51b3a1['data'];}catch(_0x5546ab){if(_0xcb4151[_0x40f97a(0xa6f,0x70a,0x6b0,0x663)](_0xcb4151[_0x40f97a(0x87a,0x6fb,0x836,0x9fc)],_0xcb4151[_0x40f97a(0x42c,0x4e5,0x5fd,0x1e3)])){var _0x4d3395=[_0x4b7b0b(0x221,0x58d,0x4ff,0x56a)+_0x40f97a(0x587,0x6b6,0x9ba,0x770)+_0x4b7b0b(0x12e,0x418,0x50b,0x5f0)+_0x4b7b0b(0x405,0x353,0x11e,0x519),_0xcb4151[_0x4b7b0b(0x32c,0x391,0xbe,0x123)],'https://g.'+_0x4b7b0b(0x389,0xd7,-0x273,0x447)+_0x40f97a(0xb8b,0xb34,0x947,0xb6c)+_0x40f97a(0x7d9,0x512,0x86e,0x605),_0xcb4151[_0x4b7b0b(0x3a7,0x1b3,0x14b,0x54)],_0xcb4151[_0x4b7b0b(0x1ce,-0x4c,-0x217,0x166)],'https://d.'+_0x4b7b0b(0x3e3,0xd7,-0x18,-0x67)+_0x40f97a(0x81c,0x528,0x7e5,0x509)+_0x4b7b0b(0x663,0x597,0x5d0,0x662),_0xcb4151[_0x4b7b0b(0x63e,0x46f,0x73b,0x5bf)]],_0x14c46a=_0x4d3395[_0x22cfde[_0x4b7b0b(-0x265,-0xbb,-0x92,0xe1)](_0xcb4151[_0x40f97a(0xa07,0x828,0x5cb,0x692)](_0x40e9bb[_0x4b7b0b(0x172,0x48d,0x5f3,0x311)](),_0x4d3395[_0x40f97a(0x664,0x77c,0x6bd,0xa85)]))];_0x25ea3b=_0x40f97a(0x5ba,0x51d,0x5d6,0x829)+_0x4b7b0b(0x459,0x34f,0x5e,0x499)+'VINZ\x0a•\x20MIS'+_0x40f97a(0x5fd,0x933,0x7f9,0xa4e)+_0x4b7b0b(0x5b6,0x39b,0x4a1,0x223)+_0x40f97a(0xc9b,0xb75,0xc93,0xc8c)+_0x40f97a(0x814,0x671,0x578,0x93a)+_0x40f97a(0xb2d,0x9f2,0xb57,0xb74)+_0x2e9318[_0x40f97a(0x80d,0x9bd,0xc60,0x744)]('@')[0x8f4+-0xaf3+0x1ff*0x1];const _0x2b32bc={};_0x2b32bc[_0x40f97a(0xc09,0xa22,0x977,0x9a3)+'id']=[_0x554ed8],_0x1aed82[_0x4b7b0b(0x4f5,0x22b,0x2ab,0x3ce)+'e'](_0x975771,_0x4c2759,_0x502080,{'thumbnail':_0x28582c[_0x4b7b0b(0x60,0x1c6,0x2b7,0x2d0)+'nc'](_0x40f97a(0x65f,0x639,0x8c6,0x8b2)+_0x15f59f),'caption':_0xcb4151[_0x40f97a(0xbb7,0x948,0x79d,0x817)],'contextInfo':{'text':_0xcb4151[_0x40f97a(0x8ac,0x948,0x94e,0x722)],'forwardingScore':0x3b9aca00,'isForwarded':!![],'sendEphemeral':!![],'externalAdReply':{'title':''+_0x506f48,'body':_0x40f97a(0x922,0xb3e,0xcf2,0x9ad)+_0x4b7b0b(0x3d9,0x161,0x42b,0x327),'previewType':_0xcb4151['XwemP'],'thumbnailUrl':''+_0x14c46a,'thumbnail':'','sourceUrl':_0x40f97a(0x6b3,0x505,0x5b4,0x622)+_0x40f97a(0x770,0x883,0x8b3,0x7a9)+'channel/UC'+'dzWwbApjky'+_0x4b7b0b(0x479,0x1fc,0x1db,0x2f2)+'lA'}},'quoted':_0xaa9b43,'contextInfo':_0x2b32bc});}else throw new Error(_0x5546ab);}}const fbdl=async _0x49a116=>{const _0x3eabd5={'PeAFR':_0x49fc1a(0x396,0x108,0x1d0,0xc4),'YcSZr':function(_0x47354e,_0x323829){return _0x47354e(_0x323829);},'Cmnpc':function(_0x471a85,_0x7ba9f7){return _0x471a85===_0x7ba9f7;},'aVSRI':_0x4bb459(0x353,0x14c,0x3e8,0x70f),'jVYKY':'qyOWh','aPhxy':_0x49fc1a(0x454,0x21a,0x1d5,0x296)+_0x4bb459(0x667,0x614,0x32b,0x10e)+'t','OolDZ':function(_0x3c2b5f,_0x2ce899){return _0x3c2b5f(_0x2ce899);},'nQzLL':'div[class='+_0x4bb459(0x2bc,0x3fc,0x5da,0x272)+'up\x20col-lg-'+_0x49fc1a(0x533,0x636,0x85f,0x6f2),'TjDfZ':_0x49fc1a(0x4dc,0x51f,0x61d,0x472),'ZUfSa':function(_0x1fc8c1,_0x336e4c){return _0x1fc8c1!==_0x336e4c;},'xyKbZ':_0x49fc1a(0x483,0x730,0x4ae,0x222),'ROlLC':_0x49fc1a(0x4df,0x5b2,0x57d,0x7a8),'WTetG':_0x49fc1a(0x6ad,0x7c2,0x97f,0x90b),'PMyci':_0x49fc1a(0x454,0x19f,0x565,0x609)+'wnvideo.ne'+_0x49fc1a(0xe4,-0x202,-0x11a,-0xba)+'.php','lLzfJ':'POST','LKVhc':function(_0x4697d9,_0x4d9de7){return _0x4697d9(_0x4d9de7);},'hZjzE':_0x4bb459(0x41c,0x596,0x337,0x466)+'\x22col-md-10'+'\x22]'};async function _0x39de76(){let _0xdbdd2e=UserAgent();const _0x5171f5={};_0x5171f5[_0x8e7447(0x3e0,0x107,0x192,0x357)]=_0x8e7447(0x6e,0x196,0x286,0x5da)+_0x21e9bf(0x55b,0x601,0x1c0,0x3f2)+_0x21e9bf(0x282,0x442,0x2bc,0x544)+_0x8e7447(0x68f,0x610,0x72b,0x676)+'ion/xml;q='+_0x8e7447(0x40e,0x398,0x5ce,0x4f1)+_0x8e7447(0x582,0x1ca,0x52e,0x382)+_0x8e7447(0x79d,0x3a0,0x66e,0x440)+_0x21e9bf(0x49c,0x7b7,0x8e9,0x6d4)+_0x8e7447(0x569,0x2c8,0x46f,0x2e2)+'lication/s'+'igned-exch'+_0x21e9bf(0x80b,0x50e,0x891,0x740)+_0x8e7447(0x397,0x326,0x67c,0x690),_0x5171f5['accept-lan'+_0x8e7447(0x6ea,0x97a,0x657,0x2ec)]=_0x8e7447(0xa7b,0x619,0x706,0xa0d)+_0x21e9bf(0x513,0x98d,0x45e,0x70b)+_0x21e9bf(0x7d5,0x63b,0x2c7,0x58f)+'.7,ms;q=0.'+'6',_0x5171f5['sec-fetch-'+'user']='?1',_0x5171f5['User-Agent']=_0xdbdd2e;const _0x3508fd={};function _0x8e7447(_0x8d23ec,_0x102d57,_0x51478d,_0x1ab3fe){return _0x49fc1a(_0x51478d- -0x57,_0x102d57-0xba,_0x51478d-0x11b,_0x1ab3fe);}_0x3508fd['headers']=_0x5171f5;const _0xa9aa18=await axios[_0x8e7447(0x47d,0x3f3,0x198,0x2e5)](_0x3eabd5[_0x8e7447(0x3ee,0x6eb,0x567,0x203)],_0x3508fd),_0x5a2fe5=cheerio[_0x21e9bf(0x4f6,-0x98,0x222,0x199)](_0xa9aa18[_0x8e7447(0x8e9,0x683,0x723,0xa18)]);let _0x5f3994;function _0x21e9bf(_0x311722,_0x599cad,_0x336237,_0x4ed982){return _0x4bb459(_0x311722-0x1b7,_0x599cad-0x1a0,_0x4ed982-0xd,_0x599cad);}_0x3eabd5[_0x21e9bf(0x726,0x3b8,0x5ee,0x467)](_0x5a2fe5,_0x3eabd5['nQzLL'])[_0x8e7447(0xdd,0x4bd,0x44f,0x799)](_0x3eabd5['TjDfZ'])[_0x8e7447(0x177,0x415,0x119,0x18c)]((_0x326b84,_0x244730)=>{function _0x207845(_0x1812c6,_0x5bcfd8,_0x6d2794,_0x5c73e0){return _0x21e9bf(_0x1812c6-0x25,_0x5bcfd8,_0x6d2794-0x1a6,_0x1812c6-0xe4);}const _0x1baa65={'peRDC':function(_0x3a48d3,_0x50e9c8){return _0x3a48d3(_0x50e9c8);},'jwlai':_0x3eabd5['PeAFR']};function _0x35b627(_0x204643,_0x23d070,_0x2b9d4b,_0x80af24){return _0x8e7447(_0x204643-0x1d1,_0x23d070-0xa0,_0x2b9d4b- -0x134,_0x23d070);}let _0x231928=_0x3eabd5[_0x207845(0x726,0x6b4,0x65e,0x83b)](_0x5a2fe5,_0x244730)[_0x207845(0x7b1,0xa31,0x833,0xaa9)](_0x3eabd5[_0x207845(0x707,0x6ca,0x624,0x7e7)]);if(_0x231928){if(_0x3eabd5['Cmnpc'](_0x3eabd5[_0x35b627(-0xdf,-0x243,0xad,0x28)],_0x3eabd5['jVYKY'])){let _0x31f3ca=_0x1baa65[_0x35b627(0x571,0x300,0x45e,0x655)](_0x25729c,_0x47fcf9)[_0x207845(0x7b1,0x9ff,0x50a,0x8f7)](_0x1baa65[_0x207845(0x8ce,0x718,0xa5d,0x61c)]);_0x31f3ca&&(_0x13cea9=_0x31f3ca);}else _0x5f3994=_0x231928;}});const _0x331d3f={};return _0x331d3f['ua']=_0xdbdd2e,_0x331d3f[_0x8e7447(0x19e,0x245,0x144,0x367)]=_0x5f3994,_0x331d3f;}async function _0x193c1d(_0x5f12d5,_0x1f9123){const _0x442ee8={};_0x442ee8[_0x55310e(0x153,0x15a,0x25a,0x4a1)]=_0x55310e(0x649,0x847,0x845,0x595)+_0x55310e(0x6df,0x2d4,0x698,0x5db)+_0x250e94(0x587,0x28a,0x5a6,0x685)+_0x250e94(0x894,0x59a,0x5aa,0x920)+_0x250e94(0x2c0,0x345,0xd2,0x150)+_0x55310e(0x71f,0x821,0xae1,0x8dd)+_0x55310e(0xad7,0x99a,0x6be,0x83d)+'/webp,imag'+_0x55310e(0x92f,0x985,0xb50,0x8bd)+_0x55310e(0xa7e,0x51d,0x8e4,0x77e)+_0x55310e(0x6b8,0x72a,0x818,0x5c2)+_0x55310e(0x28a,0x1f9,0x6eb,0x43a)+'ange;v=b3;'+_0x250e94(0x7e5,0x686,0x93c,0x7f9),_0x442ee8[_0x55310e(0x537,0x31a,0x218,0x3dd)+_0x55310e(0x81b,0xbd7,0x852,0x966)]=_0x250e94(0x86f,0x5dd,0x84d,0x4fe)+_0x55310e(0x881,0xa38,0x590,0x8f4)+_0x55310e(0x53b,0x6d0,0xa5c,0x778)+_0x250e94(0x3d6,0x3c3,0x74,0x542)+'6',_0x442ee8['sec-fetch-'+_0x55310e(0x234,0x52b,0x396,0x3b0)]='?1',_0x442ee8[_0x250e94(0x698,0x4ba,0x640,0x873)+'pe']=_0x250e94(0x435,0x202,0x29d,0x534)+_0x250e94(0x5c4,0x5d9,0x8b0,0x311)+_0x55310e(0x3a5,0x642,0x26e,0x5af)+_0x250e94(0x392,0x2fa,0x113,0x376),_0x442ee8[_0x250e94(0x6fc,0x831,0x567,0x6b3)]=_0x1f9123;function _0x55310e(_0x43804b,_0xedfed,_0xe1fddd,_0x3658f3){return _0x49fc1a(_0x3658f3-0x2b8,_0xedfed-0x14c,_0xe1fddd-0x19b,_0xedfed);}const _0x56b148=await _0x3eabd5[_0x250e94(0x685,0x604,0x502,0x6ad)](axios,{'url':_0x3eabd5[_0x250e94(0x30f,0x3d9,0xee,0x267)],'method':_0x3eabd5['lLzfJ'],'data':new URLSearchParams(Object[_0x55310e(0x4eb,0x65c,0x75c,0x7b6)](_0x5f12d5)),'headers':_0x442ee8}),_0xdaf0e4=cheerio[_0x250e94(0x1dc,0x426,-0x22,0x3f)](_0x56b148[_0x250e94(0x88c,0x81a,0x93e,0x9eb)]);let _0x29c360=[];function _0x250e94(_0x34f1f2,_0x4a2272,_0x48bcff,_0x47f49b){return _0x49fc1a(_0x34f1f2-0x112,_0x4a2272-0x3a,_0x48bcff-0x29,_0x4a2272);}return _0x3eabd5[_0x250e94(0x6d2,0x847,0x765,0x4ad)](_0xdaf0e4,_0x3eabd5['hZjzE'])['find']('a')[_0x55310e(0x416,0xc5,0x21a,0x428)]((_0x362256,_0x79a229)=>{function _0x440996(_0xe33350,_0x102483,_0x248a90,_0x2ebd30){return _0x250e94(_0x248a90-0x32d,_0x102483,_0x248a90-0x17a,_0x2ebd30-0x17a);}function _0x4a51e9(_0x37ab53,_0x6607f7,_0x1320e5,_0x20c482){return _0x55310e(_0x37ab53-0x185,_0x20c482,_0x1320e5-0x186,_0x6607f7-0x12b);}if(_0x3eabd5[_0x440996(0x6e7,0x7ab,0x8d6,0x5c0)](_0x3eabd5['xyKbZ'],_0x3eabd5[_0x440996(0x7ce,0x446,0x55a,0x37b)])){let _0x451a89=_0x3eabd5[_0x440996(0x7f1,0x987,0x9b2,0x65e)](_0xdaf0e4,_0x79a229)[_0x440996(0x7b2,0xa70,0xa3d,0x7c0)](_0x3eabd5['WTetG']),_0x440b40=/(?:https:?\/{2})?(?:[a-zA-Z0-9])\.xx\.fbcdn\.net/;_0x440b40[_0x440996(0xbc0,0x8a0,0xb1e,0xcf0)](_0x451a89)&&_0x29c360[_0x4a51e9(0x9e9,0x805,0x801,0xaeb)](_0x451a89);}else _0x5bd261(_0x46c540['chat'],_0x32ba50[_0x4a51e9(0xd3a,0xb14,0xd14,0xbdc)],_0x1e15f0[_0x4a51e9(0x738,0x88d,0x84c,0xa7d)](),_0x594bba);}),_0x29c360;}function _0x49fc1a(_0x1ba104,_0x406d6f,_0x4b2f0a,_0x16e320){return _0x44f626(_0x1ba104- -0x32c,_0x16e320,_0x4b2f0a-0x1eb,_0x16e320-0x13c);}const _0x8d366=await _0x39de76(),_0x3c04cf={};_0x3c04cf[_0x49fc1a(0x5cd,0x517,0x898,0x398)]=_0x49a116,_0x3c04cf[_0x49fc1a(0x19b,0x2,0x1f,0x15e)]=_0x8d366[_0x49fc1a(0x19b,0x224,0x354,0x2fb)];let _0x147417=_0x3c04cf;const _0x1af80e=await _0x193c1d(_0x147417,_0x8d366['ua']);function _0x4bb459(_0x2126a2,_0x4adad8,_0x379e50,_0x1810a3){return _0x4aa842(_0x379e50- -0x335,_0x4adad8-0x11,_0x379e50-0xc8,_0x1810a3);}return _0x1af80e;};!fbte[_0x44f626(0x640,0x5d5,0x72e,0x32c)](_0x4aa842(0x675,0x71b,0x6b1,0x413))?zee['Facebook'](fbte)['then'](async _0x488aaf=>{function _0x46ad9c(_0x281d0c,_0x5c7e6,_0x54b5d8,_0x15e2de){return _0x44f626(_0x54b5d8- -0x1c2,_0x281d0c,_0x54b5d8-0x17,_0x15e2de-0x188);}function _0x4e71b7(_0x5ec90c,_0xea5230,_0x47b0c3,_0x26024e){return _0x44f626(_0x5ec90c- -0x2a9,_0xea5230,_0x47b0c3-0x108,_0x26024e-0x6f);}const _0x333f63={'ezbJC':function(_0xccef6,_0x2728ed){return _0xccef6(_0x2728ed);},'lfmod':function(_0xb07425,_0x3351cd,_0x3ff1ef,_0x427e97,_0x3050ff,_0x38e619,_0x538012){return _0xb07425(_0x3351cd,_0x3ff1ef,_0x427e97,_0x3050ff,_0x38e619,_0x538012);},'KYPYq':function(_0x229cce,_0x54c274){return _0x229cce+_0x54c274;},'Ovaxv':function(_0x4ba666,_0x158fe5){return _0x4ba666+_0x158fe5;},'xHOQZ':_0x46ad9c(0x63b,0x224,0x3fe,0x179),'jFMuD':function(_0x1d08c1,_0x391075){return _0x1d08c1+_0x391075;},'XFGRE':_0x4e71b7(0x519,0x5f7,0x3e6,0x20c)};let _0x418e40=_0x4e71b7(0x20f,-0x15d,0x97,0x4a1)+'EBOOK\x20DOWN'+_0x46ad9c(0x335,0x1a9,0x298,0x402)+_0x4e71b7(0x474,0x74a,0x210,0x1fd);_0x418e40+=_0x46ad9c(0x952,0xacd,0x84d,0x9c8)+'*\x20'+_0x488aaf[_0x4e71b7(0x2c9,0x600,0x49a,0x1ba)]+'\x0a',_0x418e40+=_0x46ad9c(0x458,0x35d,0x37c,0x24f)+'\x20'+_0x488aaf['medias'][-0x146e*-0x1+0x18df+-0x2d4d][_0x46ad9c(0x670,0x70f,0x8e3,0x86f)]+'\x0a',_0x418e40+=_0x4e71b7(0x719,0x8ff,0x5d9,0x760)+_0x46ad9c(0x3d3,0x5cd,0x60c,0x3d3)+_0x4e71b7(0x596,0x8bd,0x7aa,0x542),_0x418e40+=_0x46ad9c(0x639,0x1c1,0x32b,0x65a)+'\x20:*\x20'+_0x488aaf[_0x4e71b7(0x662,0x304,0x679,0x557)][-0x65e*-0x5+0x229b+-0x4271][_0x46ad9c(0x788,0x3a8,0x68c,0x607)+'ize']+'\x0a',_0x418e40+=_0x4e71b7(0x533,0x3a5,0x78d,0x2f2)+_0x46ad9c(0x8b4,0x612,0x566,0x7f4)+_0x488aaf[_0x46ad9c(0x5b5,0xa0a,0x749,0x992)][-0x4*-0x573+-0x362*-0xb+-0x3b01][_0x46ad9c(0x436,0x328,0x68c,0x80f)+_0x4e71b7(0x48f,0x2ab,0x4e4,0x656)]+'\x0a',_0x418e40+=_0x4e71b7(0x331,0x407,0x38e,0x46d)+_0x46ad9c(0x578,0x4f2,0x684,0x5d8)+_0x488aaf[_0x4e71b7(0x662,0x5d9,0x58b,0x8bc)][-0x1d35*0x1+0x1*0x183+0x5*0x58a]['formattedS'+_0x4e71b7(0x48f,0x6c8,0x3fc,0x5b8)]+'\x0a',_0x418e40+=_0x46ad9c(0x509,0xaa4,0x783,0x74f)+_0x488aaf['url'];let _0x1e612a=await _0x333f63[_0x4e71b7(0x647,0x7a1,0x7c4,0x49b)](getBuffer,_0x488aaf[_0x46ad9c(0x8f4,0x908,0x638,0x35e)]);_0x333f63['lfmod'](sendButLocation,from,_0x418e40,_0x4e71b7(0x31f,0x36f,0x256,0x192)+_0x4e71b7(0x61a,0x328,0x93c,0x36e)+_0x4e71b7(0x67c,0x5b1,0x8a5,0x340)+'wnload\x20'+enter+enter+'©\x20'+ownername,_0x1e612a,[{'buttonId':_0x46ad9c(0x557,0xed,0x30b,0x52a)+fbte,'buttonText':{'displayText':_0x333f63[_0x46ad9c(0x83b,0x615,0x84f,0x52e)](_0x333f63[_0x46ad9c(0x4e,0x3bd,0x290,0x56b)]('HD','\x20'),_0x488aaf[_0x46ad9c(0x6b0,0x71a,0x749,0x41d)][0x1c1e*0x1+0x2024+0x19*-0x269][_0x46ad9c(0x7f0,0x9f1,0x68c,0x447)+_0x4e71b7(0x48f,0x478,0x62d,0x61d)])},'type':_0x333f63[_0x46ad9c(0x771,0x57c,0x71a,0x3a7)]},{'buttonId':'fbsd\x20'+fbte,'buttonText':{'displayText':_0x333f63[_0x4e71b7(0x568,0x738,0x77e,0x5ac)](_0x333f63[_0x4e71b7(0x568,0x784,0x4cb,0x8c5)]('SD','\x20'),_0x488aaf[_0x4e71b7(0x662,0x9b8,0x40d,0x69a)][-0x22bd*-0x1+-0x361+-0x29d*0xc][_0x4e71b7(0x5a5,0x3e4,0x376,0x87d)+_0x4e71b7(0x48f,0x540,0x750,0x4c9)])},'type':_0x333f63['xHOQZ']},{'buttonId':_0x4e71b7(0x28b,0x512,0xd8,0x5df)+fbte,'buttonText':{'displayText':_0x333f63[_0x46ad9c(0x783,0x53e,0x84f,0x82e)](_0x333f63['XFGRE'],'\x20')+_0x488aaf[_0x46ad9c(0x842,0x9ba,0x749,0x497)][0x2b*-0xc7+-0x1856+-0x39c3*-0x1][_0x4e71b7(0x5a5,0x510,0x672,0x51e)+_0x46ad9c(0x335,0x8dc,0x576,0x21b)]},'type':_0x46ad9c(0x138,0x418,0x3fe,0x736)}],{});}):fbdl(fbte)[_0x4aa842(0xb83,0xcc3,0xd63,0xe46)](_0x2116d1=>{function _0x5d807e(_0xb56326,_0x57f6db,_0x5f122d,_0x38cfe4){return _0x4aa842(_0xb56326- -0x359,_0x57f6db-0x9d,_0x5f122d-0x15a,_0x5f122d);}function _0x492501(_0x2b0ea7,_0xa0a40c,_0x55cbfd,_0xf5bc0a){return _0x4aa842(_0xa0a40c- -0x3b6,_0xa0a40c-0x127,_0x55cbfd-0x1ca,_0x55cbfd);}const _0x28f563={'bcusw':function(_0x5e37be,_0x5e2a27,_0x154198,_0x1f8545,_0x982b93){return _0x5e37be(_0x5e2a27,_0x154198,_0x1f8545,_0x982b93);}};_0x28f563[_0x492501(0x60b,0x47a,0x57b,0x579)](sendFileFromUrl,from,_0x2116d1[0x1d1d+-0x135e+-0x1f3*0x5],lang[_0x492501(0x5b7,0x4eb,0x764,0x26b)](),mek);});break;case _0x44f626(0x5e9,0x6a2,0x889,0x519):case _0x4aa842(0x797,0x7ab,0x83a,0xa23):const _0xff08e7={};_0xff08e7[_0x44f626(0xabb,0xb2f,0xd57,0x991)+'t']=_0x44f626(0x5b8,0x3fb,0x909,0x627)+_0x4aa842(0x4cc,0x207,0x3a1,0x18b);const _0x22c0ab={};_0x22c0ab[_0x44f626(0xa10,0xbae,0xc42,0xb73)]=_0x4aa842(0x922,0x855,0xc48,0xc93),_0x22c0ab[_0x4aa842(0x53a,0x50d,0x249,0x200)]=_0xff08e7,_0x22c0ab[_0x4aa842(0x7ea,0x6c0,0x6e9,0xa83)]=0x1;const _0x1a4c6b={};_0x1a4c6b[_0x4aa842(0x898,0x67e,0xab5,0x7a8)]=mek;if(!isPremium)return sendButMessage(from,'Mohon\x20maaf'+_0x44f626(0x7c0,0x689,0x4a9,0x561)+'\x20khusus\x20un'+_0x44f626(0x453,0x77c,0x20a,0x7c2)+_0x44f626(0x49b,0x1a8,0x217,0x639)+_0x44f626(0x4e1,0x615,0x6dd,0x5e0)+'\x20akun\x20mu\x20s'+_0x44f626(0xa4a,0x749,0x77f,0x789)+_0x44f626(0x5dd,0x84f,0x8ca,0x85d)+'ketik\x20'+prefix+_0x4aa842(0x922,0xb39,0xbbb,0xc6c),_0x4aa842(0x8e9,0x99b,0xb50,0xade)+_0x4aa842(0x575,0x8b6,0x23e,0x318),[_0x22c0ab],_0x1a4c6b);if(!q)return reply(_0x44f626(0x79b,0x6c5,0x927,0x934));if(!isUrl(args[0x15bf+-0x1ef5*0x1+-0x9*-0x106])&&!args[-0x97*-0x35+-0x4*-0x4eb+-0x2ff*0x11]['includes'](_0x44f626(0x40b,0x66d,0x3db,0x4ba)+'om'))return reply(lang[_0x44f626(0x8c8,0x992,0x92f,0x971)]());reply(lang[_0x4aa842(0x992,0xbed,0xa89,0xca6)]());var fbte=args['join']('\x20');zee[_0x4aa842(0x8fe,0x8fb,0x5b2,0xa41)](fbte)[_0x4aa842(0xb83,0x815,0xad1,0x8c7)](async _0x53d7cb=>{const _0x4dea5d={'XkvQx':function(_0x2b6373,_0x575a19,_0x1738a9,_0x25190b,_0x4fe64e){return _0x2b6373(_0x575a19,_0x1738a9,_0x25190b,_0x4fe64e);}};function _0x5c8363(_0x4e23f5,_0xabdb43,_0xb6237b,_0x3c6136){return _0x4aa842(_0x4e23f5- -0x3f1,_0xabdb43-0x1e2,_0xb6237b-0x1e,_0xb6237b);}function _0x5ee510(_0x404b1b,_0x592681,_0x10f373,_0x370efd){return _0x4aa842(_0x10f373- -0x1e1,_0x592681-0x19,_0x10f373-0xa4,_0x404b1b);}_0x4dea5d['XkvQx'](sendFileFromUrl,from,_0x53d7cb[_0x5ee510(0x813,0x732,0x7f5,0xa3f)][0x3dd*0x5+-0xc*-0x87+-0x19a4][_0x5c8363(0x737,0x51d,0x3c5,0x447)],lang[_0x5ee510(0x92d,0x5c7,0x6c0,0x424)](),mek);})[_0x44f626(0x4bb,0x45a,0x50f,0x754)](_0x6cc6a2=>{function _0x557533(_0x30f551,_0x41de44,_0x41271c,_0x28ca36){return _0x44f626(_0x41de44- -0x1ec,_0x41271c,_0x41271c-0x1e4,_0x28ca36-0xfb);}const _0x33e920={'tnBCF':function(_0x2940d0,_0x365fea){return _0x2940d0(_0x365fea);}};_0x33e920['tnBCF'](reply,lang[_0x557533(0x88a,0x79c,0x940,0x90c)]());});break;case _0x44f626(0x5f3,0x6ba,0x653,0x2fd):case _0x4aa842(0x616,0x761,0x520,0x5c8):if(!q)return reply(_0x4aa842(0x866,0x58c,0x5cb,0x80b));if(!isUrl(args[-0xcc5+0x994+0x331*0x1])&&!args[-0x2620+0x2f*0x8e+0xc0e]['includes'](_0x44f626(0x40b,0x314,0x764,0x40b)+'om'))return reply(lang[_0x44f626(0x8c8,0x9a0,0x8e8,0xb94)]());reply(lang[_0x4aa842(0x992,0xb21,0x7e3,0x918)]());var fbte=args[_0x4aa842(0x8e7,0x64a,0x93f,0x869)]('\x20');zee[_0x44f626(0x833,0xa55,0x57a,0x7b7)](fbte)['then'](async _0x4b39a1=>{function _0x5eeb1e(_0x488a63,_0x315b81,_0x41266e,_0x23424b){return _0x44f626(_0x41266e- -0x2f2,_0x23424b,_0x41266e-0x155,_0x23424b-0xbe);}function _0x600a3c(_0x47da49,_0x2de940,_0x147ddb,_0x442da3){return _0x4aa842(_0x2de940- -0xbb,_0x2de940-0xc3,_0x147ddb-0xca,_0x47da49);}sendFileFromUrl(from,_0x4b39a1[_0x600a3c(0xc65,0x91b,0xc66,0xb1c)][0x6*-0x1c9+-0x35*0x8d+0xe3*0x2d][_0x5eeb1e(0x777,0xaca,0x76b,0x426)],lang['success'](),mek);})['catch'](_0x1b3e7c=>{function _0x285323(_0x469efb,_0x3bada4,_0x191ce9,_0x157c09){return _0x4aa842(_0x157c09- -0x1f5,_0x3bada4-0x1ec,_0x191ce9-0x156,_0x469efb);}function _0x32262b(_0x3f1baa,_0x27d9e1,_0x4c8c48,_0x1972f2){return _0x44f626(_0x4c8c48-0xd3,_0x27d9e1,_0x4c8c48-0x7d,_0x1972f2-0x195);}const _0x3d259c={'iGqyz':function(_0xd8bd28,_0x34639e){return _0xd8bd28(_0x34639e);}};_0x3d259c[_0x285323(0x8ed,0x5f8,0xa7a,0x929)](reply,lang[_0x285323(0xb75,0x8d3,0x59e,0x85e)]());});break;case _0x4aa842(0x4dc,0x58b,0x6ec,0x255):case _0x4aa842(0x835,0x4e8,0xa34,0xaa9)+_0x44f626(0x9ea,0x716,0x9f7,0xc45):{const _0x442fa0={};_0x442fa0[_0x4aa842(0xb86,0xa28,0xc2f,0x968)+'t']='Check\x20Limi'+'t';const _0x1c8d5d={};_0x1c8d5d['buttonId']=_0x44f626(0x79c,0xa34,0x7ad,0xa95),_0x1c8d5d[_0x44f626(0x46f,0x3c5,0x4f7,0x76b)]=_0x442fa0,_0x1c8d5d[_0x4aa842(0x7ea,0x964,0xacb,0x5c6)]=0x1;if(isLimit(sender,isPremium,isCreator,isOwner,limitawal,limit))return sendButMessage(from,lang[_0x4aa842(0x867,0x977,0x878,0x799)](prefix),'©\x20'+ownername,[_0x1c8d5d]);if(!q)return reply(_0x44f626(0x79b,0xa13,0x448,0xaa0));if(!isUrl(args[0x1c*-0x45+0x118+0x3b*0x1c])&&!args[0x146*-0xf+0x1*0x1246+0x2*0x6a][_0x44f626(0x640,0x7b7,0x577,0x742)]('facebook.c'+'om'))return reply(lang[_0x4aa842(0x993,0x85a,0x731,0x630)]());reply(lang[_0x4aa842(0x992,0x6c6,0xa71,0x643)]());var fbte=args[_0x44f626(0x81c,0x4bf,0x9f0,0x595)]('\x20');zee['Facebook'](fbte)[_0x44f626(0xab8,0xdd5,0xcca,0xe1a)](async _0x5ead3a=>{const _0x212139={'YCjgj':function(_0x3cf5d4,_0x113eea){return _0x3cf5d4(_0x113eea);}};let _0x1f9a70=await _0x212139[_0x2861a3(0x443,0x13d,0x383,0x493)](getBuffer,_0x5ead3a[_0x50a1e3(0x9f9,0x6bc,0x67f,0x8c5)][-0x2*0x4c4+0x952+-0x1b*-0x2][_0x2861a3(0x5a0,0x251,0x579,0x8de)]);function _0x50a1e3(_0x5862b4,_0x1046df,_0x419ec8,_0x206903){return _0x4aa842(_0x206903- -0x111,_0x1046df-0x7f,_0x419ec8-0x1c0,_0x1046df);}const _0x529eaf={};_0x529eaf[_0x2861a3(0x1f3,0x479,0x13a,0x2aa)]=_0x50a1e3(0x4f6,0x47c,0x986,0x6c2),_0x529eaf[_0x50a1e3(0x9ad,0x8ae,0x6e7,0x787)]=mek;function _0x2861a3(_0x573373,_0xa9c49c,_0x55d3db,_0x7b119a){return _0x4aa842(_0x573373- -0x588,_0xa9c49c-0x38,_0x55d3db-0xf7,_0xa9c49c);}alpha[_0x50a1e3(0x519,0x38d,0x415,0x6e6)+'e'](from,_0x1f9a70,MessageType[_0x2861a3(0x603,0x442,0x7de,0x94b)],_0x529eaf);})[_0x44f626(0x4bb,0x461,0x175,0x5e8)](_0x518677=>{function _0x3c1be5(_0x3a5f35,_0x5ae0b1,_0x8b3630,_0x2b50bb){return _0x44f626(_0x5ae0b1-0x181,_0x8b3630,_0x8b3630-0x36,_0x2b50bb-0x10b);}const _0x324a7e={'NsXqg':function(_0x5d61ab,_0x19fccd){return _0x5d61ab(_0x19fccd);}};_0x324a7e['NsXqg'](reply,lang[_0x3c1be5(0xa18,0xb09,0xbea,0xb4d)]());});}break;case _0x44f626(0xa64,0xc9f,0xc08,0xc07)+'o':case'tiktokmusi'+'c':case _0x44f626(0x7ff,0x51d,0xa41,0x555):{const _0x2278fe={};_0x2278fe[_0x44f626(0xabb,0xa5b,0x89e,0xcf9)+'t']='Check\x20Limi'+'t';const _0x18cd56={};_0x18cd56[_0x4aa842(0xadb,0xe34,0xdcd,0xd47)]=_0x44f626(0x79c,0x44b,0x6ce,0x552),_0x18cd56[_0x44f626(0x46f,0x56b,0x669,0x294)]=_0x2278fe,_0x18cd56[_0x44f626(0x71f,0x424,0x9c8,0x578)]=0x1;if(isLimit(sender,isPremium,isCreator,isOwner,limitawal,limit))return sendButMessage(from,lang[_0x44f626(0x79c,0x692,0x825,0x9fa)](prefix),'©\x20'+ownername,[_0x18cd56]);if(!q)return reply(_0x4aa842(0x866,0x7b1,0x7ff,0x525));if(!isUrl(args[0x7*-0x4c8+-0x10c9+0xa0d*0x5])&&!args[-0x263b+-0x265a+-0xf*-0x51b][_0x4aa842(0x70b,0x3ea,0x69f,0x57b)]('tiktok.com'))return reply(lang[_0x4aa842(0x993,0x825,0x8db,0x92e)]());reply(lang[_0x4aa842(0x992,0xbf2,0x9d0,0x794)]()),hx[_0x4aa842(0x7ba,0x986,0x757,0x9c3)+'er'](''+args[-0x159+0xff9+-0xea0])['then'](_0x567558=>{function _0x137703(_0x299b44,_0x235bfe,_0x5cbc8b,_0x4e0b78){return _0x44f626(_0x235bfe- -0x517,_0x5cbc8b,_0x5cbc8b-0x46,_0x4e0b78-0x199);}const _0x127ad5={'trwfi':function(_0x98f58e,_0x13bb08){return _0x98f58e(_0x13bb08);},'JNBrC':'audio/mpeg'};function _0x4677ea(_0x214111,_0x5af93a,_0x1f6b1b,_0x2b12cb){return _0x4aa842(_0x5af93a- -0x1eb,_0x5af93a-0x1dd,_0x1f6b1b-0xe1,_0x1f6b1b);}const {wm:_0x4b499d,nowm:_0x415be2,audio:_0x310ce5}=_0x567558;axios[_0x137703(-0x156,0x4,0x1f1,0x331)]('https://ti'+'nyurl.com/'+_0x137703(0x14f,0x28,0x7b,-0x1bd)+_0x4677ea(0xc4,0x3b8,0xff,0x1f0)+_0x415be2)[_0x4677ea(0x80c,0x998,0x90a,0xa16)](async _0x2ab390=>{let _0x55f252=await _0x127ad5[_0x3a74a2(0x18c,0x1c6,-0x106,0xc9)](getBuffer,_0x310ce5);function _0x328e6a(_0xcdca2e,_0x2a9f6e,_0x2adae1,_0x241721){return _0x137703(_0xcdca2e-0x17f,_0x241721-0x266,_0xcdca2e,_0x241721-0x1cf);}const _0x4bcefa={};function _0x3a74a2(_0x38a665,_0x3f5ea5,_0x27241d,_0x3d7936){return _0x137703(_0x38a665-0x11,_0x3f5ea5- -0xfb,_0x3d7936,_0x3d7936-0xaa);}_0x4bcefa[_0x328e6a(0x3e9,0x610,0x15b,0x3ff)]=_0x127ad5[_0x3a74a2(0x471,0x3aa,0x2fb,0x68c)],_0x4bcefa[_0x3a74a2(0x4c,0x1bb,0x115,-0x70)]=mek,alpha['sendMessag'+'e'](from,_0x55f252,MessageType[_0x3a74a2(0x592,0x4ae,0x705,0x3ad)],_0x4bcefa);});}),await limitAdd(sender,limit);}break;case _0x4aa842(0x901,0x616,0xa30,0x5ef):case'tiktoknowm':case _0x4aa842(0x656,0x377,0x845,0x532):case'tt1':{const _0x1b4931={};_0x1b4931['displayTex'+'t']=_0x44f626(0x51a,0x761,0x6f0,0x6a4)+'t';const _0x3b1c5e={};_0x3b1c5e[_0x4aa842(0xadb,0xc73,0x7b2,0xd56)]=_0x4aa842(0x867,0xbc7,0xa11,0x9cc),_0x3b1c5e[_0x44f626(0x46f,0x3cc,0x4dc,0x252)]=_0x1b4931,_0x3b1c5e['type']=0x1;if(isLimit(sender,isPremium,isCreator,isOwner,limitawal,limit))return sendButMessage(from,lang[_0x4aa842(0x867,0x624,0x554,0x551)](prefix),'©\x20'+ownername,[_0x3b1c5e]);if(!q)return reply(_0x4aa842(0x866,0x806,0x829,0x6dc));if(!isUrl(args[0x1b3d+-0xe*-0x197+0x1*-0x317f])&&!args[0xfc1+-0x7f*-0x2f+0x683*-0x6][_0x4aa842(0x70b,0x74f,0x6e3,0x6ae)](_0x44f626(0x7a6,0x568,0x59e,0xad4)))return reply(lang[_0x44f626(0x8c8,0x5cb,0xaa4,0x655)]());reply(lang[_0x44f626(0x8c7,0x6bb,0x5f3,0x557)]()),hx[_0x44f626(0x6ef,0x8f9,0x7cb,0xa5a)+'er'](''+args[-0x1a35+-0x1*0x28b+0x1cc0])['then'](_0x284246=>{function _0x2f1d2f(_0x9ce0bf,_0x7c5d65,_0x54beaf,_0x572ca7){return _0x4aa842(_0x7c5d65- -0x4ef,_0x7c5d65-0x3b,_0x54beaf-0x94,_0x54beaf);}const _0x9933f4={'synWR':function(_0x5a64cf,_0x375b2e){return _0x5a64cf(_0x375b2e);},'PpVBm':function(_0x2d6ed3,_0xceed91){return _0x2d6ed3===_0xceed91;},'TtHHN':_0x437123(0xf,0x90,0x149,-0x3b),'dVQKs':function(_0x43f486,_0x2eda27){return _0x43f486(_0x2eda27);},'eSmbj':_0x2f1d2f(0x747,0x447,0xe1,0x496)};function _0x437123(_0x325193,_0x16aa99,_0x5ce746,_0x2d2e50){return _0x4aa842(_0x5ce746- -0x4d0,_0x16aa99-0x102,_0x5ce746-0x1dd,_0x325193);}const {wm:_0x292974,nowm:_0x2885b6,audio:_0x4b011c}=_0x284246;axios[_0x437123(0x416,0x3e1,0x116,0x477)](_0x437123(0x599,0x2eb,0x334,0x24a)+_0x2f1d2f(0x559,0x465,0x3b9,0x3d3)+_0x437123(-0xcd,0x440,0x13a,-0x220)+_0x2f1d2f(-0x109,0xb4,0x1d8,-0x149)+_0x2885b6)[_0x2f1d2f(0x9a6,0x694,0x6ca,0x429)](async _0x521381=>{function _0x2b7ca8(_0x7a99b7,_0x39da45,_0x5eb891,_0x3fe088){return _0x437123(_0x3fe088,_0x39da45-0x1b8,_0x7a99b7- -0x8d,_0x3fe088-0x1a6);}function _0x10dc40(_0x11d466,_0x1d3ae4,_0x222010,_0x3390b4){return _0x2f1d2f(_0x11d466-0x1c1,_0x222010-0x5a9,_0x1d3ae4,_0x3390b4-0xc7);}if(_0x9933f4[_0x2b7ca8(0x4e3,0x66f,0x19a,0x776)](_0x9933f4[_0x10dc40(0x9d7,0xcc4,0xb6d,0xcff)],_0x9933f4['TtHHN']))me=_0x10dc40(0x748,0x719,0x7aa,0x638)+_0x521381[_0x2b7ca8(0x614,0x8aa,0x36e,0x32d)],nowmm=await _0x9933f4[_0x2b7ca8(0x5d0,0x393,0x533,0x505)](getBuffer,_0x2885b6),alpha[_0x10dc40(0x92a,0x8f3,0x8b1,0xb46)+'e'](from,nowmm,MessageType[_0x2b7ca8(0x3d2,0x434,0x4d4,0x4d5)],{'caption':lang[_0x2b7ca8(0x344,0x465,0x124,0x45b)](),'mimetype':_0x9933f4[_0x10dc40(0x98a,0xa85,0xb3d,0xd0f)],'quoted':mek});else{const _0x59e323={};_0x59e323[_0x2b7ca8(0x2ba,-0x51,0x49e,0x57f)]=0xc8,_0x59e323[_0x2b7ca8(0xdd,-0xf7,-0x5a,0x2d)]=_0x26beb0[0x1d6c+-0x1e8f*0x1+0x61*0x3][_0x10dc40(0x709,0x788,0xa7d,0x894)],_0x9933f4['synWR'](_0x187af9,_0x59e323);}});})[_0x44f626(0x4bb,0x278,0x228,0x15c)](_0xdb6444=>{function _0x546623(_0x58590a,_0x2caea2,_0x2aead5,_0x549c09){return _0x4aa842(_0x2aead5- -0x38e,_0x2caea2-0xef,_0x2aead5-0x16,_0x58590a);}reply(lang[_0x546623(0x5b9,0x934,0x6c5,0x4c4)]());}),await limitAdd(sender,limit);}break;case _0x4aa842(0x6b3,0x4c9,0x775,0x550):{const _0x205c6e={};_0x205c6e[_0x4aa842(0xb86,0x939,0xc9b,0xa88)+'t']=_0x44f626(0x51a,0x784,0x1eb,0x2e2)+'t';const _0x4559e2={};_0x4559e2['buttonId']=_0x4aa842(0x867,0x5e5,0x4ff,0x68f),_0x4559e2['buttonText']=_0x205c6e,_0x4559e2[_0x4aa842(0x7ea,0xa98,0xa3c,0x76d)]=0x1;if(isLimit(sender,isPremium,isCreator,isOwner,limitawal,limit))return sendButMessage(from,lang[_0x44f626(0x79c,0x792,0x470,0x8a8)](prefix),'©\x20'+ownername,[_0x4559e2]);if(!isUrl(args[-0x7*-0x1bb+-0x4*-0x751+-0x2961])&&!args[-0x1694+0x501+0x1193][_0x44f626(0x640,0x301,0x952,0x649)](_0x44f626(0x7a6,0x6b0,0x4f4,0x669)))return reply(lang[_0x44f626(0x8c8,0x946,0x96b,0xb26)]());if(!q)return reply(_0x44f626(0x79b,0x954,0x7a9,0x43a));reply(lang[_0x44f626(0x8c7,0x9bc,0x7fa,0x671)]()),hx['ttdownload'+'er'](''+args[0x3cd*0x5+-0xf53+-0x2*0x1d7])[_0x4aa842(0xb83,0xd1e,0x819,0xa0d)](_0xe33340=>{const _0x5599cf={'kPhJB':function(_0x5c09fa,_0x119254){return _0x5c09fa(_0x119254);},'WEhBO':'video/mp4'};function _0x554d22(_0x243dd2,_0x11deab,_0x571b69,_0xd48d3b){return _0x4aa842(_0x571b69- -0x629,_0x11deab-0x4b,_0x571b69-0x195,_0x243dd2);}const {wm:_0x19c1d3,nowm:_0x5975d0,audio:_0x4ac976}=_0xe33340;function _0x4d37d3(_0x44b446,_0x5f4199,_0x2a358e,_0x1d95b4){return _0x4aa842(_0x1d95b4- -0x19b,_0x5f4199-0x1df,_0x2a358e-0x82,_0x5f4199);}axios[_0x554d22(-0xa7,0x260,-0x43,-0xfc)](_0x4d37d3(0x74f,0x518,0x4e3,0x669)+_0x4d37d3(0xaf8,0x80e,0x93a,0x7b9)+_0x4d37d3(0x647,0x258,0x38d,0x46f)+_0x4d37d3(0xaa,0xaf,0x669,0x408)+_0x19c1d3)[_0x4d37d3(0x7d7,0x9ea,0x8b3,0x9e8)](async _0x2545e9=>{function _0x20b5ea(_0x4ce5bc,_0x2f1b38,_0x1f7503,_0x1c0bd7){return _0x554d22(_0x1f7503,_0x2f1b38-0x115,_0x2f1b38- -0x88,_0x1c0bd7-0x17a);}me='*Link*\x20:\x20'+_0x2545e9[_0x20b5ea(0x31b,0x4c0,0x2f0,0x7d4)],wmm=await _0x5599cf[_0x53e8b1(0x86b,0x8c1,0x84f,0x97f)](getBuffer,_0x19c1d3);function _0x53e8b1(_0x5f132c,_0x21bf9d,_0x2a3d8f,_0x3b32fd){return _0x4d37d3(_0x5f132c-0x18c,_0x5f132c,_0x2a3d8f-0x117,_0x3b32fd-0x2e);}alpha['sendMessag'+'e'](from,wmm,MessageType[_0x20b5ea(-0x2a,0x27e,0x119,0x2e5)],{'caption':lang[_0x53e8b1(0x698,0x56d,0x936,0x734)](),'mimetype':_0x5599cf[_0x20b5ea(0x50b,0x3e3,0x611,0x74d)],'quoted':mek});});})[_0x44f626(0x4bb,0x364,0x7eb,0x2d9)](_0x2f6f2f=>{function _0x1cf7d8(_0x2ad84f,_0x1e51c0,_0x57ddd9,_0x54ada8){return _0x44f626(_0x54ada8- -0x1e9,_0x1e51c0,_0x57ddd9-0x118,_0x54ada8-0x75);}reply(lang[_0x1cf7d8(0x8b4,0x86c,0x952,0x79f)]());function _0x128ee0(_0x58b6d6,_0x2c8a8a,_0x50b0a4,_0x352a2a){return _0x4aa842(_0x352a2a- -0x593,_0x2c8a8a-0x142,_0x50b0a4-0x1e4,_0x2c8a8a);}console[_0x128ee0(0x5ce,0x18f,0x107,0x333)](_0x2f6f2f);}),await limitAdd(sender,limit);}break;case _0x4aa842(0xb30,0xd67,0xbce,0xa48):{const HLHVHP=(_0x44f626(0x516,0x3af,0x4c0,0x2ae)+_0x44f626(0x8dd,0x5ae,0xbad,0xc3a))[_0x4aa842(0x9aa,0x727,0x8b9,0x7d0)]('|');let CxZJyk=-0x2*-0x1168+-0x38b*-0x8+-0x2*0x1f94;while(!![]){switch(HLHVHP[CxZJyk++]){case'0':if(!isUrl(args[0x1*0x1623+0x2d4*-0x7+-0x257])&&!args[0x1dee+0x1da0+-0x3b8e][_0x4aa842(0x70b,0x79b,0x70b,0x73a)](_0x4aa842(0xb30,0xe1e,0xcfc,0xa99)))return reply(_0x44f626(0xa2c,0xa40,0x798,0x9a7)+_0x4aa842(0xa35,0x7ba,0xbc9,0x7b0)+_0x4aa842(0x560,0x220,0x838,0x583));continue;case'1':const _0x3325b3={};_0x3325b3[_0x4aa842(0xb86,0xa91,0xd3c,0x8e3)+'t']=_0x44f626(0x5b8,0x8f2,0x85d,0x690)+'emium';const _0x41322a={};_0x41322a['buttonId']='goprem',_0x41322a['buttonText']=_0x3325b3,_0x41322a[_0x4aa842(0x7ea,0x78d,0x835,0xa8f)]=0x1;const _0x227dcf={};_0x227dcf[_0x4aa842(0x898,0x999,0xa29,0x6be)]=mek;if(!isPremium)return sendButMessage(from,_0x44f626(0xa12,0xa15,0x7d0,0x999)+'\x20fitur\x20ini'+_0x44f626(0x9ec,0xa42,0xa89,0xb79)+_0x4aa842(0x51e,0x6b4,0x37d,0x4b6)+_0x44f626(0x49b,0x17b,0x44e,0x6a4)+'a!\x20Upgrade'+_0x4aa842(0x810,0x4c7,0x4ff,0x9f2)+_0x4aa842(0xb15,0xdf9,0xa26,0x86e)+'ngan\x20cara\x20'+_0x4aa842(0xb24,0xcb8,0x9e4,0x938)+prefix+_0x4aa842(0x922,0x7aa,0x8c3,0xc91),_0x44f626(0x81e,0xa65,0x665,0x9cb)+'on\x20below',[_0x41322a],_0x227dcf);continue;case'2':const _0x13ad39={};_0x13ad39['mimetype']=res[-0xacf*0x2+0x23e3+-0xe45][_0x44f626(0x663,0x714,0x512,0x302)],_0x13ad39['filename']=res[-0xe40+0x2164+-0x5*0x3d4][_0x4aa842(0x604,0x607,0x7dd,0x92b)],_0x13ad39[_0x4aa842(0x898,0x760,0xa56,0x619)]=mek,alpha[_0x44f626(0x72c,0x79b,0x558,0x8af)+'e'](from,mdf,MessageType[_0x44f626(0x9aa,0x7b0,0x815,0x8c0)],_0x13ad39);continue;case'3':teks=args[_0x4aa842(0x8e7,0xa36,0x9cf,0x966)]('\x20');continue;case'4':result=_0x4aa842(0x94f,0x7ad,0x612,0xa25)+_0x44f626(0xaa9,0x9b5,0xcab,0x8eb)+_0x4aa842(0x80e,0x6df,0x4ca,0xa56)+petik+_0x44f626(0x547,0x5d5,0x860,0x588)+petik+'\x20'+res[0x503*0x2+0x1a*-0x7b+-0x9e*-0x4][_0x44f626(0x539,0x690,0x798,0x71c)]+'\x0a'+petik+'々\x20Link\x20:\x20'+petik+'\x20'+res[0x137b+-0xc92+-0x1d*0x3d][_0x4aa842(0x9c3,0xb74,0xd13,0xac1)]+'\x0a'+petik+'々\x20Size\x20:\x20'+petik+'\x20'+res[-0x96a+-0x242c+0x2d96][_0x44f626(0x527,0x423,0x847,0x327)]+(_0x4aa842(0x4ce,0x301,0x5b5,0x46e)+_0x44f626(0x677,0x77e,0x4cf,0x944)+_0x44f626(0x656,0x909,0x6dc,0x87c));continue;case'5':res=await mediafireDl(teks);continue;case'6':if(args[_0x44f626(0x69e,0x6d4,0x724,0x818)]<0x1*-0x649+-0x31*-0xad+-0x1ad3)return reply(_0x4aa842(0xb04,0x851,0xc5c,0xdee)+_0x44f626(0x716,0x5a6,0x72d,0x88d));continue;case'7':reply(lang['wait']());continue;case'8':await reply(result);continue;case'9':mdf=await getBuffer(res[-0x1b94+-0x128d+0x2e21][_0x44f626(0x8f8,0xae3,0xb75,0xc21)]);continue;}break;}}break;case _0x4aa842(0x921,0x81d,0x7e8,0x647):case _0x44f626(0x807,0xb1d,0x568,0x97a):case _0x44f626(0xa2f,0xc40,0xb0d,0xa0d):case _0x44f626(0x66d,0x3a0,0x89d,0x436)+_0x4aa842(0xb4e,0xdb2,0xdc7,0xbb8):{const _0x138fd7={};_0x138fd7[_0x44f626(0xabb,0xb57,0x9f6,0x917)+'t']=_0x44f626(0x51a,0x3de,0x240,0x426)+'t';const _0x1d2ab6={};_0x1d2ab6[_0x44f626(0xa10,0x6ab,0xb57,0xc42)]='limit',_0x1d2ab6[_0x44f626(0x46f,0x47b,0x6ea,0x5fd)]=_0x138fd7,_0x1d2ab6[_0x44f626(0x71f,0x577,0xa5b,0x95a)]=0x1;if(isLimit(sender,isPremium,isCreator,isOwner,limitawal,limit))return sendButMessage(from,lang['limit'](prefix),'©\x20'+ownername,[_0x1d2ab6]);if(args[_0x4aa842(0x769,0x927,0x6c2,0x56b)]===0x19db+-0x50b+-0x14d0)return reply(_0x44f626(0x614,0x8a9,0x3d6,0x6c8)+_0x4aa842(0x8d5,0x93c,0xb3d,0x79b)+prefix+(_0x44f626(0x8c0,0x8f4,0x75e,0x771)+_0x44f626(0x6f1,0x388,0x69b,0x5a7)));let isLinks2=args[0x24b7+-0x320+-0x2197*0x1][_0x4aa842(0x7b2,0xa0f,0x7a9,0x58f)](/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/);if(!isLinks2)return reply(mess[_0x44f626(0xa24,0x72f,0xd24,0x9a4)]['Iv']);try{pp_userb=await alpha['getProfile'+_0x4aa842(0x7d5,0x643,0xa28,0x63a)](sender);}catch{pp_userb=_0x44f626(0x617,0x40a,0x7ea,0x57a)+'ibb.co/rvs'+_0x4aa842(0x74a,0x726,0x607,0x61c)+_0x4aa842(0x925,0x6d6,0xc46,0x5ef)+'g';}let pp_userz=await getBuffer(pp_userb);function ytMp4(_0x141cef){function _0x5b877a(_0x15552a,_0x3c87a6,_0x488125,_0x53faaf){return _0x4aa842(_0x15552a- -0xbc,_0x3c87a6-0xbb,_0x488125-0x37,_0x488125);}function _0x299d02(_0x2a9358,_0x19e6ff,_0x2049ef,_0x398069){return _0x44f626(_0x2049ef- -0x2a9,_0x19e6ff,_0x2049ef-0x15d,_0x398069-0xb5);}const _0x1d6e38={'rEqJT':function(_0xe5dec0,_0x4e0aac){return _0xe5dec0<_0x4e0aac;},'NUtLp':function(_0x3f8e62,_0x233037){return _0x3f8e62==_0x233037;},'DcgET':function(_0x5d7c08,_0x51181d){return _0x5d7c08===_0x51181d;},'JmVSH':_0x5b877a(0x72b,0x991,0xa4d,0x4e0),'XRTkd':_0x299d02(0x763,0x4e6,0x42b,0x745),'CZgso':function(_0x49783f,_0x5c5251){return _0x49783f(_0x5c5251);},'bGiXV':function(_0x19a268,_0x2ee8b4,_0x10f2ea,_0x4b360e,_0x3f2996){return _0x19a268(_0x2ee8b4,_0x10f2ea,_0x4b360e,_0x3f2996);}};return new Promise(async(_0x40155d,_0x361828)=>{function _0x41bdf2(_0x17fe39,_0x1a7171,_0x5d71b2,_0x3a4f5a){return _0x299d02(_0x17fe39-0x17e,_0x5d71b2,_0x1a7171-0x3ed,_0x3a4f5a-0x11a);}const _0x3e1968={'PweVb':function(_0x508001,_0x36bc6c,_0x1e70e3,_0x1e5cfd,_0x53fb22){function _0x582fd4(_0x25e57f,_0x210c4b,_0x57155a,_0x1f1528){return _0x23c4(_0x1f1528-0x4e,_0x57155a);}return _0x1d6e38[_0x582fd4(-0x6e,0x208,0x1ec,0x2b7)](_0x508001,_0x36bc6c,_0x1e70e3,_0x1e5cfd,_0x53fb22);}};function _0x3a8204(_0x15dce0,_0x2eea0f,_0x2a1c7b,_0x1eb125){return _0x299d02(_0x15dce0-0x1b9,_0x1eb125,_0x15dce0- -0x254,_0x1eb125-0x7d);}ytdl[_0x3a8204(0x53f,0x669,0x2db,0x733)](_0x141cef)['then'](async _0x485110=>{let _0x2f2243=[];for(let _0x322055=0x219*-0x11+0x1916+0xa93;_0x1d6e38['rEqJT'](_0x322055,_0x485110[_0x54eb05(0xc92,0x68b,0x8a6,0x9c4)][_0x2d1d54(-0xf3,-0xd9,0x7d,-0xf8)]);_0x322055++){let _0x5560a7=_0x485110[_0x54eb05(0x98b,0xb80,0xab3,0x9c4)][_0x322055];if(_0x5560a7['container']==_0x2d1d54(0x1f2,-0x409,-0x182,0x1d5)&&_0x1d6e38[_0x2d1d54(0x39c,0xec,0x407,0x770)](_0x5560a7[_0x2d1d54(0x753,0x5dc,0x445,0x13d)],!![])&&_0x1d6e38['NUtLp'](_0x5560a7['hasAudio'],!![])){if(_0x1d6e38['DcgET'](_0x1d6e38[_0x54eb05(0x59a,0x2ba,0x548,0x436)],_0x1d6e38[_0x2d1d54(0x1ba,0x1e,0x384,0x30)]))_0x3e1968[_0x2d1d54(0x218,-0x165,-0x13c,-0x1bf)](_0x2a73d3,_0x339e67,_0x260478[_0x54eb05(0x6cc,0xa24,0xba9,0x92b)][-0x1a*0x4a+0x1acc+-0x1348][_0x2d1d54(0xee,0x2ed,0x43c,0x6d8)],_0x1a9b4f['success'](),_0x3fea42);else{let {qualityLabel:_0x581abb,contentLength:_0x5a914c}=_0x5560a7,_0x2f9b7b=await _0x1d6e38[_0x2d1d54(0x3b9,0x711,0x4a7,0x763)](bytesToSize,_0x5a914c);const _0x5db541={};_0x5db541[_0x2d1d54(0x1d4,0x487,0x243,0x18d)]=_0x5560a7['url'],_0x5db541[_0x54eb05(0x800,0xcfa,0xcdd,0x9d2)]=_0x581abb,_0x5db541[_0x2d1d54(0x92,0x25,-0xfa,-0x149)]=_0x2f9b7b,_0x2f2243[_0x322055]=_0x5db541;}};}function _0x54eb05(_0x4463c8,_0x290b84,_0xa760a4,_0x4439c3){return _0x3a8204(_0x4439c3-0x51d,_0x290b84-0x172,_0xa760a4-0x1db,_0x290b84);};let _0x329893=_0x2f2243['filter'](_0x1cda60=>_0x1cda60[_0x2d1d54(0x1c7,0x5a4,0x243,0x22d)]!=undefined&&_0x1cda60[_0x54eb05(0x655,0x4f1,0x5dd,0x547)]!=undefined&&_0x1cda60['quality']!=undefined),_0x29b2a6=await axios['get'](_0x2d1d54(-0x23b,0x2d7,0x118,0x339)+'nyurl.com/'+_0x54eb05(0x44d,0x6ee,0x460,0x55f)+_0x2d1d54(-0x268,-0xfd,-0x149,0x1c7)+_0x329893[0x15c2+-0x53e*-0x1+0x80*-0x36]['video']),_0x290d80=_0x29b2a6[_0x54eb05(0xc4d,0xbf8,0x763,0xac6)],_0x599ab7=_0x485110[_0x54eb05(0x7e5,0x712,0x7f9,0x82c)+'ls']['title'],_0x2cdd19=_0x485110[_0x2d1d54(0x4bc,0x4db,0x1eb,0x3ca)+'ls'][_0x54eb05(0x979,0x618,0x4ca,0x740)+'n'],_0x17773d=_0x485110[_0x54eb05(0x606,0x528,0x5cf,0x82c)+'ls'][_0x54eb05(0x916,0x8f9,0xc19,0x994)];function _0x2d1d54(_0x545318,_0x5e0f88,_0x58dfe6,_0x37eaf4){return _0x3a8204(_0x58dfe6- -0x124,_0x5e0f88-0x1d2,_0x58dfe6-0x16b,_0x5e0f88);}let _0x3e749e=_0x485110[_0x54eb05(0x58a,0xb47,0x8a4,0x82c)+'ls']['likes'],_0x25c490=_0x485110[_0x54eb05(0x698,0xb5a,0x8bf,0x82c)+'ls'][_0x54eb05(0x93c,0x657,0x8b6,0x86f)],_0x7564d=_0x485110['videoDetai'+'ls'][_0x2d1d54(-0xb6,-0x7,0x4e,-0x1bc)+_0x54eb05(0x411,0x349,0x84a,0x60e)],_0x14c96f=_0x485110[_0x2d1d54(0x1e3,-0x14,0x1eb,0x238)+'ls']['uploadDate'],_0xcf03f6=_0x485110[_0x2d1d54(0x16c,0x39,-0x155,0x168)+_0x2d1d54(-0x53,0x12e,-0xc0,-0x15b)][_0x54eb05(0x8f5,0xa90,0xb61,0x980)+'t']['playerMicr'+'oformatRen'+_0x54eb05(0xa9e,0xad2,0x707,0x8c6)][_0x54eb05(0xaf4,0x98e,0x66f,0x81a)][_0x2d1d54(-0x148,-0xf0,0x97,-0x1f0)][-0x18b*-0x10+-0x200f+0x6f*0x11]['url'];const _0x3d27da={};_0x3d27da[_0x54eb05(0x77c,0x86c,0x2a1,0x592)]=_0x599ab7,_0x3d27da[_0x54eb05(0xcbf,0x7db,0xaf3,0xa25)]=_0x290d80,_0x3d27da[_0x54eb05(0xac3,0x9a0,0xb40,0x9d2)]=_0x329893[0x1577+-0x4a*-0x26+-0x1*0x2073][_0x2d1d54(0x2e4,0x1b7,0x391,0x503)],_0x3d27da[_0x54eb05(0x227,0x1da,0x364,0x547)]=_0x329893[0x11f6*-0x1+-0x33*-0x9f+0x1*-0xdb7][_0x2d1d54(-0x1e2,-0x1f2,-0xfa,-0x307)],_0x3d27da[_0x2d1d54(0x2e2,0x617,0x43b,0x78b)]=_0xcf03f6,_0x3d27da[_0x54eb05(0x987,0x6fb,0xb62,0x8b4)]=_0x17773d,_0x3d27da[_0x54eb05(0x869,0x42d,0x27b,0x590)]=_0x3e749e,_0x3d27da[_0x2d1d54(0x13a,0x29b,0x2e8,0x428)]=_0x25c490,_0x3d27da['channel']=_0x7564d,_0x3d27da[_0x2d1d54(0x19b,0x58a,0x446,0x2ca)]=_0x14c96f,_0x3d27da['desc']=_0x2cdd19,_0x1d6e38[_0x54eb05(0xad4,0x83f,0xab9,0xae8)](_0x40155d,_0x3d27da);})[_0x41bdf2(0x5a3,0x5ff,0x4b1,0x49f)](_0x361828);});};let yut=await yts(args[0x1228+0x16e*-0x16+0x25*0x5c]);reply(lang['wait']()),ytMp4(args[0x73*-0x35+0x1*0x252d+-0xd5e])[_0x44f626(0xab8,0xcd5,0xc1d,0xb87)](_0x19423f=>{function _0x25df3f(_0x2bc28b,_0x18507c,_0x463464,_0x649d03){return _0x44f626(_0x649d03- -0x21e,_0x463464,_0x463464-0x132,_0x649d03-0x11f);}const _0x454ad5={'eAsUu':function(_0x12be8a,_0x2d5b6d){return _0x12be8a(_0x2d5b6d);},'tnZKR':_0x25df3f(0x576,0x74a,0x800,0x644),'LtfNO':function(_0x172191,_0x27d2b9,_0x331b80,_0x2ee2fb){return _0x172191(_0x27d2b9,_0x331b80,_0x2ee2fb);},'jUELk':function(_0x4fa9f7,_0x2be805,_0x3c8a3d,_0x235f99,_0x4a6746,_0x42d5d6,_0x1f9006){return _0x4fa9f7(_0x2be805,_0x3c8a3d,_0x235f99,_0x4a6746,_0x42d5d6,_0x1f9006);},'gLdpa':function(_0x2bdc50,_0x237e34){return _0x2bdc50(_0x237e34);},'SIauX':_0x57282a(0x6bf,0x7f9,0xacb,0x901)};function _0x57282a(_0x59547f,_0xdabddf,_0x5b01ff,_0x4f3eed){return _0x4aa842(_0xdabddf- -0x13d,_0xdabddf-0x9b,_0x5b01ff-0x19c,_0x5b01ff);}const {title:_0x2e7e6d,result:_0x5f2436,quality:_0x3699f6,size:_0x43ae2c,thumb:_0x4d2a8c,views:_0xf8a051,likes:_0x5cf380,dislike:_0x1ae16c,channel:_0x32a965,uploadDate:_0x92c41b,desc:_0xdc0d21}=_0x19423f;axios[_0x57282a(0x64f,0x4a9,0x5a2,0x3da)]('https://ti'+_0x57282a(0x5e1,0x817,0xa44,0x4b3)+_0x25df3f(0x4b,0x4de,0x56e,0x321)+_0x25df3f(0x14a,0x2b4,0x1b9,0x2ba)+q)['then'](async _0x2748e6=>{if(_0x454ad5[_0x37e7eb(0x2e8,0x3a2,0x399,0xa4)](Number,_0x43ae2c[_0x5ddb8c(0x488,0x86b,0x447,0x5e6)](_0x454ad5[_0x37e7eb(0x636,0x6e2,0x707,0x785)],''))>=-0x214c+-0x4e1+0x2669)return _0x454ad5[_0x37e7eb(0x2c8,0x2e3,0x348,0x3de)](sendMediaURL,from,_0x4d2a8c,_0x37e7eb(0x51d,0x821,0x9ef,0x880)+_0x5ddb8c(0x4ef,0x628,0x43c,0x4c7)+_0x37e7eb(0x512,0x5ad,0x612,0x763)+enter+enter+(_0x37e7eb(0x63c,0x458,0x527,0x65a)+'*\x20')+_0x2e7e6d+(_0x37e7eb(0x2bd,0x399,0x57d,0x337)+'y\x20:*\x20')+_0x3699f6+(_0x37e7eb(0x46e,0x594,0x741,0x56e)+'*\x20')+_0x43ae2c+(_0x5ddb8c(0x657,0x8f9,0x74d,0x8cd)+':*\x20')+_0xf8a051+(_0x37e7eb(0xa5f,0x859,0xaad,0x6a3)+_0x5ddb8c(0x437,0x52a,0x9e1,0x6c8))+_0x5cf380+(_0x5ddb8c(0x82f,0x425,0x7cf,0x661)+'es\x20:*\x20')+_0x1ae16c+(_0x5ddb8c(0x66b,0x751,0xa8d,0x81d)+'l\x20:*\x20')+_0x32a965+(_0x37e7eb(0x4d0,0x234,0x365,0x1ae)+_0x37e7eb(0x356,0x4c3,0x41b,0x19a))+_0x92c41b+_0x5ddb8c(0xaae,0xc02,0xa95,0xa4c)+_0x5f2436+enter+enter+('_Untuk\x20dur'+_0x5ddb8c(0xb60,0x858,0x5b8,0x85a)+_0x5ddb8c(0x43e,0x60b,0x30e,0x516)+_0x37e7eb(0x182,0x2ba,0x55e,0x311)+_0x37e7eb(0x68a,0x331,0x5c4,0x654)+'tuk\x20link_'));function _0x37e7eb(_0x2a98d1,_0x9841f3,_0x46584d,_0x19874a){return _0x25df3f(_0x2a98d1-0x1e,_0x9841f3-0x8d,_0x46584d,_0x9841f3- -0x47);}const _0x21ce51=_0x5ddb8c(0x741,0xb6d,0x998,0xab3)+_0x5ddb8c(0x3e6,0x9c3,0x49b,0x6f7)+_0x5ddb8c(0x9f6,0x4b7,0x458,0x7b0)+_0x5ddb8c(0x399,0x2b8,0x3da,0x5bd)+_0x37e7eb(0x4e5,0x790,0x5f6,0x446)+_0x2e7e6d+(_0x5ddb8c(0x5e0,0x39d,0x769,0x62b)+_0x37e7eb(0x4f0,0x19f,-0x1cc,0x3b8))+_0x3699f6+(_0x5ddb8c(0x6d8,0x555,0x98f,0x826)+'*\x20')+_0x43ae2c+('\x0a*📺\x20Views\x20'+':*\x20')+_0xf8a051+('\x0a*👍\x20Likes\x20'+':*\x20')+_0x5cf380+(_0x5ddb8c(0x62e,0x88d,0x77f,0x661)+_0x37e7eb(0x4c1,0x6ce,0x644,0x9e8))+_0x1ae16c+('\x0a*😎\x20Channe'+_0x37e7eb(0x21d,0x3ce,0x2d4,0x1d4))+_0x32a965+(_0x37e7eb(0x157,0x234,0x1a4,0x4c2)+'\x20:*\x20')+_0x92c41b+(_0x37e7eb(0x317,0x20e,0x13b,0x38e)+'\x20')+q+(_0x37e7eb(0x576,0x56c,0x3ef,0x5a2)+_0x5ddb8c(0x872,0x44a,0x289,0x5f3)+'edia\x20sedan'+'g\x20dikirim_');let _0x413dcb=await _0x454ad5['eAsUu'](getBuffer,_0x4d2a8c);const _0x4d759e={};_0x4d759e[_0x5ddb8c(0x8eb,0xa62,0xbe3,0xae8)+'t']=_0x5ddb8c(0x719,0x914,0xdd4,0xa7c);const _0x18f244={};_0x18f244['buttonId']=_0x37e7eb(0x27e,0x3d4,0x121,0x2f9),_0x18f244[_0x37e7eb(-0x1d,0x20a,0x519,0x158)]=_0x4d759e,_0x18f244[_0x5ddb8c(0x90d,0x479,0x48a,0x74c)]=_0x5ddb8c(0x7ba,0x8f7,0x50b,0x5ed);function _0x5ddb8c(_0x2b8674,_0x4936e4,_0x537b12,_0x4addc1){return _0x57282a(_0x2b8674-0xa8,_0x4addc1-0x9f,_0x537b12,_0x4addc1-0x137);}let _0x971fbb=[_0x18f244];await _0x454ad5['jUELk'](sendButLocation,from,_0x21ce51,'©\x20'+ownername,_0x413dcb,_0x971fbb,{});let _0x1de316=await _0x454ad5[_0x5ddb8c(0x5ef,0x7b9,0x632,0x60c)](getBuffer,_0x5f2436);alpha[_0x5ddb8c(0x8f2,0x876,0x921,0x759)+'e'](from,_0x1de316,MessageType[_0x5ddb8c(0x93e,0xb36,0x597,0x891)],{'caption':lang[_0x37e7eb(0x27f,0x571,0x766,0x6d3)](),'mimetype':_0x454ad5[_0x37e7eb(0x1f6,0x4ca,0x5db,0x63f)],'quoted':mek});});})[_0x44f626(0x4bb,0x7df,0x7e8,0x5fd)](_0x2823fb=>{function _0x1d7cab(_0x5d51a3,_0x2fcda0,_0x1523f2,_0x49ee61){return _0x4aa842(_0x1523f2- -0x6e6,_0x2fcda0-0x188,_0x1523f2-0x143,_0x2fcda0);}function _0x9f3940(_0x33d085,_0x48ffe7,_0x486218,_0x2b3301){return _0x44f626(_0x48ffe7- -0x615,_0x33d085,_0x486218-0x1c9,_0x2b3301-0x102);}const _0x59ea62={'OkcEI':function(_0x52d319,_0x16e688){return _0x52d319(_0x16e688);}};_0x59ea62[_0x9f3940(0x59d,0x232,0x89,0x3dd)](reply,_0x1d7cab(0x642,0x507,0x365,0x200)+'or');}),await limitAdd(sender,limit);}break;case _0x44f626(0x644,0x312,0x902,0x748):case'video':{const _0x3ef5a2={};_0x3ef5a2['displayTex'+'t']=_0x4aa842(0x5e5,0x614,0x927,0x5ae)+'t';const _0xabeb93={};_0xabeb93[_0x4aa842(0xadb,0xc48,0xb55,0xcb0)]='limit',_0xabeb93['buttonText']=_0x3ef5a2,_0xabeb93['type']=0x1;if(isLimit(sender,isPremium,isCreator,isOwner,limitawal,limit))return sendButMessage(from,lang[_0x44f626(0x79c,0xadc,0x450,0x7ec)](prefix),'©\x20'+ownername,[_0xabeb93]);if(args[_0x4aa842(0x769,0x72b,0x648,0x4c5)]===-0xd*-0x187+0x1f*-0xe9+0x85c)return reply('Kirim\x20peri'+'ntah\x20*'+prefix+(_0x44f626(0x930,0x952,0xa84,0xc07)+_0x4aa842(0x7f2,0x976,0x500,0x9aa)+_0x44f626(0x584,0x295,0x694,0x40a)+_0x44f626(0x969,0x677,0x9c6,0xb35)));var srch=args[_0x4aa842(0x8e7,0x9a6,0x8d5,0x9f0)]('');aramas=await yts(srch),server=_0x44f626(0x58e,0x5ca,0x383,0x435),aramat=aramas[_0x4aa842(0x73d,0x5e2,0x77f,0x4c1)];var mulaikah=aramat[-0x261b+0x31*-0x4a+-0x3445*-0x1]['url'];function ytMp4(_0x4bc49c){const _0x5dc03a={'NguTf':function(_0x3a9e9a,_0x15e386){return _0x3a9e9a(_0x15e386);}};return new Promise(async(_0x58f844,_0x20de0b)=>{const _0x250b68={'rCpIz':_0x14f116(0x325,0xc,0x69,-0x286),'NhjTB':function(_0xffcdf3,_0x2e8163){function _0x5ef1e8(_0x1d052f,_0x2e8ded,_0x5589e2,_0x268d2d){return _0x14f116(_0x1d052f-0xc9,_0x268d2d-0x59b,_0x5589e2,_0x268d2d-0xe4);}return _0x5dc03a[_0x5ef1e8(0x5dd,0x67c,0x43d,0x5da)](_0xffcdf3,_0x2e8163);}};function _0x22101d(_0x25a161,_0xf2fb94,_0x3ff887,_0x432c52){return _0x23c4(_0xf2fb94-0x2b6,_0x432c52);}function _0x14f116(_0x5f17db,_0x88127b,_0x289f5d,_0x56ab0f){return _0x23c4(_0x88127b- -0x24b,_0x289f5d);}ytdl[_0x14f116(0x8dc,0x5a9,0x26f,0x717)](_0x4bc49c)[_0x14f116(0x32c,0x625,0x5f9,0x688)](async _0x42fcb8=>{function _0x5f2062(_0xb51add,_0xea93d5,_0x4480e6,_0x4cddbc){return _0x14f116(_0xb51add-0x20,_0x4480e6-0x4a8,_0xb51add,_0x4cddbc-0xba);}let _0x5529cd=[];for(let _0x5347e1=-0xc1d*-0x1+0x36e*0x8+-0x278d;_0x5347e1<_0x42fcb8[_0x4dbc62(0x48b,0x76e,0x64a,0x66a)][_0x5f2062(0x71f,0x9ea,0x6b3,0x406)];_0x5347e1++){let _0x34f606=_0x42fcb8[_0x5f2062(0xa70,0x919,0x9b9,0xc79)][_0x5347e1];if(_0x34f606[_0x5f2062(0xa49,0xbcf,0x95d,0x932)]==_0x250b68[_0x5f2062(0xc2b,0x8ee,0xad6,0xa23)]&&_0x34f606['hasVideo']==!![]&&_0x34f606[_0x4dbc62(0x4df,0x26a,0x188,0x6f9)]==!![]){let {qualityLabel:_0x37fc13,contentLength:_0x5d05ba}=_0x34f606,_0x21550=await _0x250b68['NhjTB'](bytesToSize,_0x5d05ba);const _0x6d0d7a={};_0x6d0d7a[_0x4dbc62(0x34b,0x30a,0x97,0x2c)]=_0x34f606[_0x4dbc62(0x544,0x469,0x694,0x3a4)],_0x6d0d7a['quality']=_0x37fc13,_0x6d0d7a[_0x4dbc62(0xe,0x31,-0x1ac,-0x318)]=_0x21550,_0x5529cd[_0x5347e1]=_0x6d0d7a;};};let _0x1cea9f=_0x5529cd[_0x5f2062(0x881,0xac7,0x94f,0x9ab)](_0x254ab3=>_0x254ab3[_0x5f2062(0xb54,0x73e,0x879,0x88f)]!=undefined&&_0x254ab3[_0x5f2062(0x7ab,0x60a,0x53c,0x841)]!=undefined&&_0x254ab3[_0x5f2062(0xaad,0xd1f,0x9c7,0xa7e)]!=undefined),_0x1655a5=await axios[_0x5f2062(0x2a8,0x1f0,0x530,0x7ed)](_0x5f2062(0x97a,0x74e,0x74e,0x78c)+_0x5f2062(0x5af,0x662,0x89e,0xbe7)+_0x5f2062(0x741,0x2d4,0x554,0x493)+_0x4dbc62(-0x41,0x253,0x233,-0x103)+_0x1cea9f[0x1b0b+0x1fcf+0x139e*-0x3][_0x5f2062(0x677,0x935,0x879,0x56f)]),_0x2ba0a5=_0x1655a5[_0x4dbc62(0x58d,0x793,0x77e,0x6e8)],_0x533dbf=_0x42fcb8[_0x5f2062(0x8d9,0x6e2,0x821,0x525)+'ls'][_0x5f2062(0x4a0,0x807,0x587,0x6b1)],_0x5ca5fd=_0x42fcb8[_0x5f2062(0x612,0x82c,0x821,0x7fd)+'ls'][_0x5f2062(0x416,0x63b,0x735,0x87a)+'n'],_0x339d10=_0x42fcb8[_0x5f2062(0x80d,0x51d,0x821,0x529)+'ls'][_0x5f2062(0x882,0xbcd,0x989,0x91e)],_0x1e326a=_0x42fcb8['videoDetai'+'ls']['likes'],_0x1c1d83=_0x42fcb8['videoDetai'+'ls']['dislikes'],_0x312b1b=_0x42fcb8[_0x4dbc62(0x2f3,0x244,0x1c1,0x25e)+'ls'][_0x4dbc62(0x156,-0xfe,0x40b,0x3c2)+_0x4dbc62(0xd5,0x213,0x254,0x2a4)],_0x2197d0=_0x42fcb8['videoDetai'+'ls'][_0x5f2062(0x75a,0xb51,0xa7c,0xd4d)],_0x589e33=_0x42fcb8['player_res'+_0x5f2062(0x3fb,0x441,0x576,0x788)][_0x4dbc62(0x447,0x35d,0x18b,0x5a2)+'t'][_0x4dbc62(0x43e,0x767,0xdb,0x6a8)+_0x5f2062(0x304,0x4c0,0x5f3,0x29a)+_0x4dbc62(0x38d,0x3c9,0x15c,0x684)][_0x5f2062(0x63f,0x58a,0x80f,0xaf2)][_0x4dbc62(0x19f,-0x9d,0xcf,-0x166)][-0x2*-0xb8f+-0xb*-0x261+-0x3149][_0x4dbc62(0x544,0x3c7,0x4ff,0x329)];function _0x4dbc62(_0x5bb276,_0x4a0fa2,_0x231512,_0x353cf5){return _0x14f116(_0x5bb276-0x17c,_0x5bb276- -0x86,_0x231512,_0x353cf5-0xf0);}const _0x555d0e={};_0x555d0e[_0x4dbc62(0x59,0xe3,0x120,0x86)]=_0x533dbf,_0x555d0e[_0x5f2062(0x843,0x924,0xa1a,0xc36)]=_0x2ba0a5,_0x555d0e['quality']=_0x1cea9f[0x621+0x2703+0xd6*-0x36][_0x5f2062(0x712,0x9f4,0x9c7,0x7f8)],_0x555d0e[_0x5f2062(0x71f,0x52c,0x53c,0x595)]=_0x1cea9f[0x1bc3*-0x1+0x23b+0x4c*0x56][_0x4dbc62(0xe,-0x16f,-0x221,-0x199)],_0x555d0e['thumb']=_0x589e33,_0x555d0e['views']=_0x339d10,_0x555d0e[_0x5f2062(0x331,0x648,0x585,0x5cc)]=_0x1e326a,_0x555d0e['dislike']=_0x1c1d83,_0x555d0e['channel']=_0x312b1b,_0x555d0e['uploadDate']=_0x2197d0,_0x555d0e['desc']=_0x5ca5fd,_0x250b68[_0x4dbc62(-0x11e,-0x46e,0x1e6,0x31)](_0x58f844,_0x555d0e);})['catch'](_0x20de0b);});};reply(lang[_0x4aa842(0x992,0x6bb,0x79a,0x8a1)]()),ytMp4(mulaikah)[_0x44f626(0xab8,0xaef,0x8ff,0xa75)](_0x30b357=>{const _0x3e980c={'AqVaV':function(_0x36a65b,_0x3e7204){return _0x36a65b>=_0x3e7204;},'FEFLp':function(_0x29d7ef,_0x2f2bda){return _0x29d7ef(_0x2f2bda);},'qHAqk':function(_0x30324e,_0x30b10d,_0x1ed6be,_0x1339f2){return _0x30324e(_0x30b10d,_0x1ed6be,_0x1339f2);},'faVnm':function(_0x59ea7c,_0x16fb97){return _0x59ea7c(_0x16fb97);},'LVWqJ':_0x95bce1(0x108,0x2c8,0xa6,0x211)};function _0x95bce1(_0x4a6f45,_0x215196,_0x2c1173,_0x4773be){return _0x44f626(_0x2c1173- -0x51a,_0x215196,_0x2c1173-0x128,_0x4773be-0xd);}function _0x4ed4e2(_0x5e90be,_0x335336,_0x32aed9,_0x5ab76d){return _0x4aa842(_0x32aed9- -0x547,_0x335336-0xb1,_0x32aed9-0x5,_0x5ab76d);}const {title:_0x2ae8a2,result:_0x1b4b8c,quality:_0x22f82d,size:_0xd4d13a,thumb:_0x545506,views:_0x14e8d4,likes:_0x755ca,dislike:_0x2f44ff,channel:_0x2b5077,uploadDate:_0x1c6d91,desc:_0x3be000}=_0x30b357;axios[_0x4ed4e2(0x12c,0x1ca,0x9f,0x1a2)](_0x4ed4e2(0x609,0x30e,0x2bd,0x589)+_0x95bce1(0x45d,0x38,0x36f,0x207)+_0x95bce1(0x311,0x356,0x25,0x212)+_0x95bce1(-0x322,-0x1fc,-0x42,-0x25d)+q)[_0x4ed4e2(0x619,0x6a6,0x63c,0x55c)](async _0x6ce8b1=>{if(_0x3e980c[_0xca7e45(0x2b9,0x432,0x5b6,0x27d)](_0x3e980c[_0x413676(0x26e,0x43c,0x2c8,0x125)](Number,_0xd4d13a['replace'](_0x413676(0x5f5,0x54d,0x8b4,0x7af),'')),0x3*-0x1dc+-0x26b0*0x1+-0x4*-0xb20))return _0x3e980c[_0xca7e45(0x65d,0x63f,0x699,0x981)](sendMediaURL,from,_0x545506,'*----「\x20YOU'+_0xca7e45(0x13c,0x6f,0x305,0xfb)+_0xca7e45(0x634,0x622,0x67d,0x784)+enter+enter+(_0x413676(0x142,0x3a8,0x46f,0x48b)+'*\x20')+_0x2ae8a2+(_0x413676(0x299,0x2e9,0x129,0x5b9)+_0xca7e45(0x28f,0x15a,0x26f,0x54a))+_0x22f82d+(_0xca7e45(0x814,0x309,0x664,0x76d)+'*\x20')+_0xd4d13a+(_0x413676(0x69a,0x58b,0x391,0x48a)+':*\x20')+_0x14e8d4+(_0x413676(0x746,0x7a9,0x59c,0x697)+_0xca7e45(0x69b,0x4a4,0x506,0x5ee))+_0x755ca+(_0xca7e45(0x529,0x4c1,0x49f,0x225)+_0xca7e45(0x896,0x593,0x79e,0x49c))+_0x2f44ff+('\x0a*😎\x20Channe'+'l\x20:*\x20')+_0x2b5077+('\x0a*📆\x20Upload'+_0xca7e45(0x7fd,0x414,0x593,0x7fc))+_0x1c6d91+(_0x413676(-0x1b7,0x15e,0x220,-0x19f)+'\x20')+_0x1b4b8c+enter+enter+('_Untuk\x20dur'+_0x413676(0x349,0x518,0x1c8,0x667)+_0x413676(0xfa,0x1d4,0x4a1,0x4b0)+_0xca7e45(0x588,0x31f,0x38a,0x3b6)+_0x413676(0x284,0x281,0x314,0x15)+_0x413676(0x98,0x270,-0x63,-0x5a)));const _0xc8edb7=_0x413676(0x869,0x771,0x7a1,0x41a)+_0x413676(0x342,0x3b5,0x1aa,0x594)+_0xca7e45(0x92d,0x6f2,0x5ee,0x658)+_0x413676(0x131,0x27b,0x3db,0x249)+'tle\x20:*\x20'+_0x2ae8a2+(_0xca7e45(0x3e7,0x51a,0x469,0x11d)+'y\x20:*\x20')+_0x22f82d+(_0x413676(0x3f2,0x4e4,0x4ca,0x35e)+'*\x20')+_0xd4d13a+('\x0a*📺\x20Views\x20'+_0xca7e45(0x3d6,0x373,0x506,0x721))+_0x14e8d4+(_0xca7e45(0xc03,0x6a0,0x929,0x5fb)+':*\x20')+_0x755ca+(_0x413676(0x4aa,0x31f,0x2d1,0x1bd)+_0x413676(0x6fc,0x61e,0x812,0x709))+_0x2f44ff+('\x0a*😎\x20Channe'+'l\x20:*\x20')+_0x2b5077+(_0x413676(-0x111,0x184,0x253,-0x1b)+'\x20:*\x20')+_0x1c6d91+(_0x413676(0x182,0x15e,0x35f,-0x87)+'\x20')+q+(_0x413676(0x32c,0x4bc,0x599,0x357)+'sebentar\x20m'+'edia\x20sedan'+_0x413676(0x26c,0x26b,0x3f7,0x540));let _0xa5ff0e=await _0x3e980c[_0x413676(0xa7e,0x770,0x4d0,0x4a1)](getBuffer,_0x545506);const _0x155e43={};_0x155e43[_0xca7e45(0xb2c,0x69c,0x926,0xaaa)+'t']=_0xca7e45(0xa87,0x617,0x8ba,0x831);const _0x2aaaea={};_0x2aaaea[_0x413676(0x8b7,0x6fb,0xa6a,0xa25)]=_0xca7e45(0x4b7,0x5eb,0x4a4,0x4b5),_0x2aaaea['buttonText']=_0x155e43,_0x2aaaea[_0xca7e45(0x72d,0x69f,0x58a,0x664)]=_0x3e980c['LVWqJ'];function _0x413676(_0x469000,_0x3002c6,_0xc18bf6,_0x579b3b){return _0x4ed4e2(_0x469000-0x1dc,_0x3002c6-0x132,_0x3002c6-0x167,_0x469000);}let _0x2a6dea=[_0x2aaaea];await sendButLocation(from,_0xc8edb7,'©\x20'+ownername,_0xa5ff0e,_0x2a6dea,{});function _0xca7e45(_0x127fee,_0x20e12a,_0x23e76c,_0x2eafcc){return _0x4ed4e2(_0x127fee-0x122,_0x20e12a-0x50,_0x23e76c-0x2e7,_0x127fee);}let _0x15a797=await _0x3e980c[_0x413676(0x450,0x770,0x9f1,0x4d1)](getBuffer,_0x1b4b8c);alpha[_0x413676(0x2d6,0x417,0x63c,0x607)+'e'](from,_0x15a797,MessageType['video'],{'caption':lang[_0xca7e45(0x325,0x415,0x641,0x6bd)](),'mimetype':_0xca7e45(0x970,0x8b3,0x6d6,0x6de),'quoted':mek});});})[_0x4aa842(0x586,0x421,0x5cb,0x82f)](_0x18bf64=>{const _0x7dcb9a={'eReSD':function(_0x396a2b,_0x3ae2ad){return _0x396a2b(_0x3ae2ad);}};function _0x45fb0f(_0x5ada42,_0x1c462c,_0x2b3dd5,_0x4d19f7){return _0x4aa842(_0x5ada42-0x26,_0x1c462c-0xa0,_0x2b3dd5-0x4a,_0x1c462c);}_0x7dcb9a[_0x45fb0f(0x667,0x7f4,0x78a,0x88e)](reply,'Server\x20err'+'or');}),await limitAdd(sender,limit);}break;case _0x44f626(0xa88,0x9f2,0x86c,0x9ab):{const _0x228b6a={};_0x228b6a[_0x44f626(0xabb,0xccb,0xa0a,0xa10)+'t']=_0x44f626(0x51a,0x6c9,0x3fe,0x4bd)+'t';const _0x431cec={};_0x431cec[_0x4aa842(0xadb,0xe44,0xaa4,0x869)]=_0x44f626(0x79c,0x96e,0x8b4,0x72f),_0x431cec['buttonText']=_0x228b6a,_0x431cec[_0x44f626(0x71f,0xa43,0x3c3,0x8d5)]=0x1;if(isLimit(sender,isPremium,isCreator,isOwner,limitawal,limit))return sendButMessage(from,lang[_0x4aa842(0x867,0xb94,0xb0a,0x683)](prefix),'©\x20'+ownername,[_0x431cec]);if(args[_0x4aa842(0x769,0x826,0xa15,0x61f)]===-0x11*0x1df+-0x3f6+0x23c5)return reply('Kirim\x20peri'+_0x4aa842(0x8d5,0x78a,0x9e0,0x8dd)+prefix+(_0x4aa842(0xa03,0x71e,0xa52,0xd21)+_0x4aa842(0x7bc,0x4cf,0x5e1,0x879)));let isLinks=args[0x1773+-0x10d*0x1b+0x4ec][_0x44f626(0x6e7,0x5b5,0x77b,0x62e)](/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/);if(!isLinks)return reply(mess['error']['Iv']);ytmp3=args['join']('\x20');function ytMp3(_0x2036e2){function _0x5e2fb0(_0x8bbd75,_0x46eed7,_0x10505a,_0x17a7de){return _0x4aa842(_0x8bbd75- -0x232,_0x46eed7-0x82,_0x10505a-0x180,_0x46eed7);}function _0x43fd70(_0x562d63,_0x28923c,_0x3ea0ed,_0x375196){return _0x4aa842(_0x562d63- -0x68e,_0x28923c-0xcc,_0x3ea0ed-0x155,_0x28923c);}const _0x528a8e={'JJqgF':function(_0x547330,_0x23e68c){return _0x547330===_0x23e68c;},'bwEeH':_0x5e2fb0(0x890,0xb13,0x56d,0x9ed),'WqCOY':_0x5e2fb0(0x459,0x175,0x38f,0x71b),'zgeOa':function(_0x5d525c,_0x366f2a,_0x541395,_0x4b49ed,_0x4e402b,_0x513f38){return _0x5d525c(_0x366f2a,_0x541395,_0x4b49ed,_0x4e402b,_0x513f38);},'HmNwq':function(_0x5e9e1c,_0xdf2397){return _0x5e9e1c<_0xdf2397;},'pYzNz':function(_0x14aa2a,_0x552010){return _0x14aa2a===_0x552010;},'qcUCx':_0x43fd70(0x1ba,0x2a0,0x1e5,0x5b),'JBpuD':function(_0x45ab47,_0x280944){return _0x45ab47==_0x280944;},'Vvtcv':_0x43fd70(-0x19a,-0x20f,-0x144,0xbb)+';\x20codecs=\x22'+'opus\x22','QyeWz':function(_0x202947,_0x3e5cf5){return _0x202947(_0x3e5cf5);},'EmbUU':function(_0x42c336,_0x2a5966){return _0x42c336!==_0x2a5966;},'XqBZg':_0x5e2fb0(0x501,0x535,0x49f,0x7f5)};return new Promise((_0x12ad27,_0x10522c)=>{function _0x47db0a(_0x5581d0,_0x4a8f01,_0x52fd25,_0x36d6c1){return _0x5e2fb0(_0x52fd25- -0x233,_0x5581d0,_0x52fd25-0x6e,_0x36d6c1-0x165);}function _0x58feeb(_0x4a91a6,_0x145e52,_0x55043d,_0x56f0a9){return _0x5e2fb0(_0x55043d- -0x29b,_0x4a91a6,_0x55043d-0x1e5,_0x56f0a9-0x141);}if(_0x528a8e['EmbUU']('rFaNc',_0x528a8e['XqBZg'])){if(_0x528a8e[_0x47db0a(0x1d6,0x2b3,0xd6,0x169)](_0x422142,![]))return;const _0x1e0272={};_0x1e0272['displayTex'+'t']=_0x528a8e['bwEeH'];const _0x1ad26b={};_0x1ad26b[_0x47db0a(0x704,0x88b,0x676,0x894)]=_0x47db0a(0x52d,0x71e,0x4d8,0x82c),_0x1ad26b[_0x47db0a(-0x17a,-0xe0,0xd5,0x3c0)]=_0x1e0272,_0x1ad26b[_0x47db0a(0x458,0x3ba,0x385,0x462)]=_0x528a8e['WqCOY'];const _0x21b617={};_0x21b617[_0x58feeb(0x686,0x5d0,0x6b9,0x750)+'t']=_0x58feeb(0x15b,0x334,0x180,0x1ef)+_0x58feeb(0x24c,0x54d,0x240,0x174);const _0x1b869b={};_0x1b869b['buttonId']='register\x20o'+'ff',_0x1b869b[_0x47db0a(0x2e2,0x3a0,0xd5,0x148)]=_0x21b617,_0x1b869b[_0x47db0a(0x1fc,0x566,0x385,0x37c)]=_0x528a8e[_0x47db0a(0x457,0xe1,0x136,-0xc3)];let _0x1817ee=[_0x1ad26b,_0x1b869b];const _0x5913e3={};_0x5913e3['mentionedJ'+'id']=[_0x6fd3bc];const _0x3e7253={};_0x3e7253[_0x58feeb(0x457,0x70d,0x3cb,0x2bb)]=_0x182579,_0x3e7253['contextInf'+'o']=_0x5913e3;if(_0x5afe80&&!_0x4c2993[_0x47db0a(0x551,0x431,0x60f,0x367)][_0x47db0a(0x3ad,0x448,0x371,0x569)]&&!_0x1364bd&&!_0x1e38cc&&!_0x3cbb14)return _0x528a8e['zgeOa'](_0x322f00,_0x17a07e,_0x47db0a(-0xe8,-0x1e2,0x167,0x4b7)+_0xd16037[_0x58feeb(0x493,0x567,0x4dd,0x303)]('@')[-0x11*0x218+-0xb0e+-0x6aa*-0x7]+(_0x58feeb(0x7b5,0x3e5,0x4d6,0x5b3)+_0x47db0a(0x243,-0x136,0x1d4,0x23f)+_0x58feeb(0x641,0x52c,0x47d,0x6b4)+_0x58feeb(0x3f8,0x3b5,0x211,0xa3)+_0x58feeb(0x5eb,0x639,0x2c6,0x56d)+_0x47db0a(0x6e8,0x3e4,0x4ab,0x7be)+'\x20akun\x20kamu'+_0x47db0a(0x330,-0xd3,0x28d,0x368)+_0x47db0a(0x7f2,0x5eb,0x58d,0x359)+_0x58feeb(0x1b0,-0x2b7,0x9f,0x2f7)+'etik\x20@veri'+_0x58feeb(0x7ee,0x6e4,0x6bd,0xa19)+_0x47db0a(0x5f0,0x159,0x4cb,0x5c3)+_0x58feeb(0x3a1,-0x54,0x217,0x41b)),'©\x20'+_0x12fc1f,_0x1817ee,_0x3e7253);}else ytdl['getInfo'](_0x2036e2)[_0x47db0a(0x9c8,0x52c,0x71e,0x5e1)](async _0x10aad9=>{let _0x3c70d1=[];function _0x3e93a9(_0x4411ba,_0x3b7ebc,_0x2040c7,_0x2f5fbd){return _0x47db0a(_0x2040c7,_0x3b7ebc-0x79,_0x4411ba-0x324,_0x2f5fbd-0x1c7);}for(let _0x3ffcbe=-0x3bc*-0x2+-0x1bed+0x1475;_0x528a8e[_0x42a5e6(0x929,0x38f,0x467,0x5d7)](_0x3ffcbe,_0x10aad9[_0x3e93a9(0x92e,0xac5,0xbd0,0x92d)][_0x42a5e6(0x695,0x46c,0x5a,0x367)]);_0x3ffcbe++){if(_0x528a8e[_0x3e93a9(0x977,0x9d5,0x7d4,0x6fd)](_0x528a8e['qcUCx'],_0x3e93a9(0x707,0x805,0xa6b,0x58e))){let _0x213889=_0x10aad9[_0x3e93a9(0x92e,0xab3,0xa64,0x912)][_0x3ffcbe];if(_0x528a8e[_0x3e93a9(0x759,0x744,0x975,0xa5a)](_0x213889['mimeType'],_0x528a8e[_0x42a5e6(0x1f1,0x5fb,0x3a2,0x54f)])){let {contentLength:_0x45436b}=_0x213889,_0x1c8753=await _0x528a8e['QyeWz'](bytesToSize,_0x45436b);const _0x57cef5={};_0x57cef5[_0x42a5e6(0x626,0x6c6,0x925,0x789)]=_0x213889[_0x3e93a9(0x9e7,0xc0e,0x7db,0x749)],_0x57cef5[_0x3e93a9(0x4b1,0x6a5,0x180,0x591)]=_0x1c8753,_0x3c70d1[_0x3ffcbe]=_0x57cef5;};}else throw new _0x89f87a(_0x2d9cb8);};let _0x259215=_0x3c70d1[_0x42a5e6(0x89e,0x4e8,0x613,0x603)](_0x4a44ed=>_0x4a44ed[_0x42a5e6(0x912,0x731,0x931,0x789)]!=undefined&&_0x4a44ed[_0x42a5e6(0x2f3,-0x165,-0x145,0x1f0)]!=undefined),_0x4fbf1d=await axios[_0x3e93a9(0x4a5,0x4e7,0x260,0x5ab)](_0x3e93a9(0x6c3,0x38a,0x6db,0x38b)+_0x3e93a9(0x813,0x800,0xa05,0xb18)+_0x42a5e6(0x165,-0x58,0x1d1,0x208)+_0x3e93a9(0x462,0x6a7,0x34c,0x27e)+_0x259215[0x14f7+-0x25*0x91+-0x2][_0x3e93a9(0xa4a,0xb95,0xd26,0x745)]),_0x2d6a32=_0x4fbf1d[_0x3e93a9(0xa30,0xb09,0x837,0x715)];function _0x42a5e6(_0x103bc0,_0x32acbf,_0x20a580,_0x35ca8f){return _0x58feeb(_0x32acbf,_0x32acbf-0x7e,_0x35ca8f-0xcb,_0x35ca8f-0x94);}let _0x5b0840=_0x10aad9['videoDetai'+'ls'][_0x3e93a9(0x4fc,0x460,0x394,0x445)],_0x1a213f=_0x10aad9[_0x42a5e6(0x53a,0x1ad,0x461,0x4d5)+'ls'][_0x42a5e6(0x2d9,0x514,0x29e,0x3e9)+'n'],_0xbdd558=_0x10aad9[_0x3e93a9(0x796,0xaa0,0x825,0x6db)+'ls'][_0x3e93a9(0x8fe,0x87b,0x929,0x6d1)],_0xe2fff0=_0x10aad9[_0x3e93a9(0x796,0x7a0,0x5e2,0x6e3)+'ls'][_0x42a5e6(0xbe,-0x5a,0x4f8,0x239)],_0x3aff3b=_0x10aad9[_0x3e93a9(0x796,0xa35,0x8c1,0xa3b)+'ls'][_0x3e93a9(0x7d9,0x83d,0x97f,0x486)],_0x56db4c=_0x10aad9[_0x42a5e6(0x6a9,0x551,0x345,0x4d5)+'ls'][_0x42a5e6(0x347,0x1d0,-0x3b,0x338)+_0x42a5e6(0x596,0x1,0x5db,0x2b7)],_0x1f1129=_0x10aad9[_0x42a5e6(0x769,0x688,0x834,0x4d5)+'ls'][_0x3e93a9(0x9f1,0x8ac,0xb90,0xb5d)],_0x27db24=_0x10aad9[_0x42a5e6(0x1c6,-0x14d,0x4ee,0x195)+_0x3e93a9(0x4eb,0x46b,0x497,0x7c5)][_0x42a5e6(0x59f,0x7a1,0x96b,0x629)+'t'][_0x42a5e6(0x5cd,0x8d8,0x5ca,0x620)+_0x42a5e6(0x21e,0x477,0x461,0x2a7)+'derer'][_0x3e93a9(0x784,0x5c2,0x436,0x783)][_0x42a5e6(0x3e2,0x280,0x5af,0x381)][0x2220+-0x120e+0x1*-0x1012][_0x42a5e6(0x6ec,0x5d1,0x3ee,0x726)];const _0x375609={};_0x375609[_0x3e93a9(0x4fc,0x349,0x1f8,0x66a)]=_0x5b0840,_0x375609[_0x3e93a9(0x98f,0x866,0x7ca,0xcc5)]=_0x2d6a32,_0x375609[_0x42a5e6(0x55a,0x457,-0x13b,0x1f0)]=_0x259215[0x1187*-0x1+0x1*-0x21ce+0x3355]['size'],_0x375609[_0x3e93a9(0x9e6,0xb15,0x7aa,0xca9)]=_0x27db24,_0x375609['views']=_0xbdd558,_0x375609['likes']=_0xe2fff0,_0x375609[_0x42a5e6(0x2d6,0x927,0x7c9,0x5d2)]=_0x3aff3b,_0x375609[_0x42a5e6(0xec,0x288,0x3d7,0x412)]=_0x56db4c,_0x375609[_0x3e93a9(0x9f1,0xc21,0x97a,0x9c7)]=_0x1f1129,_0x375609[_0x42a5e6(0x594,0x81f,0x740,0x6f6)]=_0x1a213f,_0x12ad27(_0x375609);})['catch'](_0x10522c);});}reply(lang[_0x4aa842(0x992,0x9fe,0xb26,0x9be)]());let yut=await yts(args[0x163d+0x33*0x66+-0x2a8f]);server='en68',ytMp3(ytmp3)[_0x4aa842(0xb83,0x988,0x8de,0x8b6)](_0x504630=>{const _0x50f178={'FHDJx':'PHOTO','PjpJF':function(_0x285b0f,_0x5ef56e){return _0x285b0f===_0x5ef56e;},'mkMqR':_0x18a5b1(-0x288,0xcc,-0xa2,0x155),'oPoGO':function(_0xb90d8f,_0x335aba){return _0xb90d8f>=_0x335aba;},'prmsc':function(_0x2d535d,_0x51582a){return _0x2d535d(_0x51582a);},'FhCiH':_0x579b1f(0xc9,0x3e7,0x5a5,0x432),'WrQcE':function(_0x2c7b72,_0x551d2a,_0x5b634,_0x23fb36){return _0x2c7b72(_0x551d2a,_0x5b634,_0x23fb36);},'DQMQf':function(_0x25702b,_0x5f1f22){return _0x25702b(_0x5f1f22);},'aFLMc':_0x18a5b1(0x4e3,0x5a2,0x612,0x244),'IRCfZ':'RESPONSE','nZQWw':function(_0x213db6,_0xb16b6f,_0x1b3fff,_0x321abf,_0x4e6d37,_0x1fdb8c,_0x1a5890){return _0x213db6(_0xb16b6f,_0x1b3fff,_0x321abf,_0x4e6d37,_0x1fdb8c,_0x1a5890);},'miArb':_0x579b1f(0x5db,0x28d,-0x2e,0x23a)},{title:_0x1ca083,result:_0x48c659,size:_0x58fc2e,thumb:_0x2c38cf,views:_0x157832,likes:_0x441bd0,dislike:_0x1c801c,channel:_0xbc55ff,uploadDate:_0x3f7500,desc:_0x58feb7}=_0x504630;function _0x18a5b1(_0xb11fce,_0xe9ab9b,_0x244a5d,_0x156378){return _0x4aa842(_0xe9ab9b- -0x578,_0xe9ab9b-0x103,_0x244a5d-0x1e4,_0xb11fce);}function _0x579b1f(_0x5441bd,_0x5c131a,_0x224249,_0x430b85){return _0x4aa842(_0x5c131a- -0x546,_0x5c131a-0x1e1,_0x224249-0x12f,_0x224249);}axios[_0x18a5b1(-0x24c,0x6e,0x184,-0x155)](_0x18a5b1(0x4fd,0x28c,-0x6b,0x249)+_0x18a5b1(0x33d,0x3dc,0x3f5,0x3d2)+'api-create'+_0x18a5b1(-0x263,0x2b,0x1f0,0x88)+q)[_0x18a5b1(0x958,0x60b,0x583,0x317)](async _0x4ae156=>{const _0x47d51f={};_0x47d51f['LyhFI']=_0x50f178[_0x57cf65(-0x22d,-0x15d,-0xef,0x106)];const _0x5a7e52=_0x47d51f;function _0x57cf65(_0x23ba74,_0x581116,_0x36a9a7,_0x371abe){return _0x18a5b1(_0x36a9a7,_0x371abe-0x70,_0x36a9a7-0x1c6,_0x371abe-0x1bd);}function _0x19fd74(_0x32bfd2,_0x5a9a04,_0x28c249,_0x34dcf6){return _0x579b1f(_0x32bfd2-0x28,_0x32bfd2-0x4b4,_0x34dcf6,_0x34dcf6-0xfc);}if(_0x50f178[_0x57cf65(0x49f,0x724,0x345,0x4c1)]('RmAIL',_0x50f178[_0x57cf65(-0x1f3,-0x1fa,-0xd,-0x57)]))_0x92cdf['sendMessag'+'e'](_0x4019c7,_0x12dd1f,_0xa8d486,{'quoted':_0x2ee2a9,'contextInfo':{'externalAdReply':{'title':''+_0x2e316a,'body':''+_0x4f1a8c,'previewType':_0x5a7e52[_0x19fd74(0x748,0x6fa,0xa81,0xa3f)],'thumbnailUrl':'','thumbnail':_0x3287a8[_0x57cf65(-0x72,0x118,0x452,0x28a)+'nc']('./image/'+_0x3e6bf4),'sourceUrl':''+_0x2d364c}}});else{if(_0x50f178['oPoGO'](_0x50f178[_0x19fd74(0x84f,0xb5c,0x9be,0x6a4)](Number,_0x58fc2e[_0x57cf65(0x396,0xb3,0x23f,0x17c)](_0x50f178['FhCiH'],'')),-0x1f5*0xc+0x21cd+-0xa15))return _0x50f178[_0x19fd74(0x799,0x775,0x627,0x5c9)](sendMediaURL,from,_0x2c38cf,'*----「\x20YOU'+'TUBE\x20AUDIO'+_0x19fd74(0x854,0x96a,0x5dd,0xa84)+_0x19fd74(0x7e1,0x51f,0x653,0x894)+'\x20'+_0x1ca083+(_0x19fd74(0x832,0x9fa,0x72a,0x7a4)+'*\x20')+_0x58fc2e+('\x0a*📺\x20Views\x20'+_0x19fd74(0x6d4,0x6bc,0x7a1,0x844))+_0x157832+(_0x19fd74(0xaf7,0xb77,0x958,0xd1d)+':*\x20')+_0x441bd0+(_0x57cf65(0x354,0x105,0x14e,0x1f7)+_0x57cf65(0x714,0x3c3,0x721,0x4f6))+_0x1c801c+(_0x19fd74(0x829,0x5aa,0x4fd,0x9b7)+_0x19fd74(0x66c,0x4c3,0x496,0x762))+_0xbc55ff+('\x0a*📆\x20Upload'+_0x19fd74(0x761,0x448,0x806,0x6d5))+_0x3f7500+(_0x57cf65(-0x171,0x32,-0xc6,0x36)+'\x20')+_0x48c659+enter+enter+(_0x19fd74(0xac4,0xaba,0x7dd,0xb9f)+_0x19fd74(0x866,0x85e,0x775,0x86a)+_0x19fd74(0x522,0x728,0x6b9,0x427)+_0x57cf65(0x2e0,0xcb,-0x15d,0xe2)+_0x57cf65(0x2d8,0x3aa,0x3,0x159)+_0x57cf65(-0x24,0x1dc,-0x68,0x148)));const _0x569343=_0x19fd74(0xabf,0xd0f,0xb80,0xb73)+'TUBE\x20AUDIO'+_0x19fd74(0x854,0x84d,0x651,0x596)+_0x19fd74(0x7e1,0xa61,0x9f6,0x708)+'\x20'+_0x1ca083+('\x0a*⚙️\x20Size\x20:'+'*\x20')+_0x58fc2e+(_0x57cf65(0x67e,0x7ce,0x1c0,0x463)+':*\x20')+_0x157832+(_0x19fd74(0xaf7,0xc25,0x910,0x8a3)+_0x19fd74(0x6d4,0x5d5,0x824,0x54c))+_0x441bd0+('\x0a*👎\x20Dislik'+_0x57cf65(0x6d3,0x274,0x71b,0x4f6))+_0x1c801c+(_0x19fd74(0x829,0x548,0x7d3,0x6b8)+_0x19fd74(0x66c,0x8bf,0x91a,0x8a7))+_0xbc55ff+(_0x19fd74(0x4d2,0x5a6,0x7bf,0x239)+_0x57cf65(0x37a,0x51a,0x19,0x2eb))+_0x3f7500+(_0x57cf65(0x2d5,-0x2a7,0x328,0x36)+'\x20')+q+(_0x57cf65(0x2ff,0x51f,0x3c4,0x394)+_0x57cf65(0x3e,-0x47,0x3ac,0xb3)+_0x19fd74(0x7a4,0x5b1,0x979,0x45c)+'ng\x20dikirim'+_0x19fd74(0x4b5,0x3e7,0x691,0x42c));let _0x30eeb4=await _0x50f178[_0x19fd74(0x561,0x8a5,0x3fe,0x6f4)](getBuffer,_0x2c38cf);const _0xf7536b={};_0xf7536b[_0x57cf65(0x919,0x959,0x63e,0x67e)+'t']=_0x50f178[_0x57cf65(0x2e6,0x12a,-0x66,0x63)];const _0x22c8aa={};_0x22c8aa[_0x57cf65(0x755,0x603,0x774,0x5d3)]='owner',_0x22c8aa[_0x57cf65(0x225,0x7e,0x130,0x32)]=_0xf7536b,_0x22c8aa[_0x19fd74(0x758,0x4ab,0x430,0x56e)]=_0x50f178[_0x57cf65(0x27,0x559,0x44f,0x370)];let _0x270d1f=[_0x22c8aa];await _0x50f178['nZQWw'](sendButLocation,from,_0x569343,'©\x20'+ownername,_0x30eeb4,_0x270d1f,{});let _0x25dfb9=await getBuffer(_0x48c659);const _0x205410={};_0x205410[_0x19fd74(0x6e9,0x440,0x8ea,0x806)]=_0x50f178['miArb'],_0x205410[_0x57cf65(0x21a,0x330,0x203,0x390)]=mek,alpha[_0x57cf65(-0x53,0x459,0x65e,0x2ef)+'e'](from,_0x25dfb9,MessageType[_0x57cf65(0x62b,0x8f2,0x835,0x683)],_0x205410);}});})[_0x4aa842(0x586,0x3fb,0x471,0x4df)](_0x32b3b5=>{function _0x5a64ff(_0x4b4bec,_0x49bcb6,_0x244c2e,_0x3a1ed2){return _0x4aa842(_0x244c2e- -0x132,_0x49bcb6-0x5c,_0x244c2e-0x24,_0x4b4bec);}reply(_0x5a64ff(0x7a9,0xbb9,0x919,0x601)+'or');}),await limitAdd(sender,limit);}break;case'igstory':case _0x44f626(0x3f5,0x5b9,0x9b,0x33c):case _0x4aa842(0x7b5,0xacd,0x49c,0x832)+'tory':const _0x16d8f0={};_0x16d8f0[_0x44f626(0xabb,0xc7c,0xb41,0x9b6)+'t']='Check\x20Limi'+'t';const _0x433656={};_0x433656[_0x44f626(0xa10,0x9ec,0xa43,0xb0b)]=_0x44f626(0x79c,0x7a2,0x98e,0x91d),_0x433656['buttonText']=_0x16d8f0,_0x433656[_0x44f626(0x71f,0x816,0x3ee,0x8dc)]=0x1;if(isLimit(sender,isPremium,isCreator,isOwner,limitawal,limit))return sendButMessage(from,lang['limit'](prefix),'©\x20'+ownername,[_0x433656]);if(!q)return reply('Usernameny'+'a?');pape=q,hx[_0x4aa842(0x710,0x4dc,0x8b5,0x5fa)](pape)['then'](async _0x382aec=>{const _0x5a635a={'UlFNt':function(_0x3ba36f,_0x2f6743){return _0x3ba36f(_0x2f6743);},'nUluf':function(_0x6e0e26,_0x2d5364){return _0x6e0e26!==_0x2d5364;},'BMdgd':_0x12d4c5(0x6a2,0xbd6,0x6a8,0x8e3)};let _0x8eef57=await _0x5a635a['UlFNt'](getBuffer,_0x382aec[_0x49d80e(-0xe5,-0xa9,-0x242,0xbe)][_0x12d4c5(0x5fc,0x41d,0x478,0x49a)+_0x49d80e(0x75a,0x40e,0x5bd,0x25e)]);function _0x12d4c5(_0x29e4bc,_0x430b5c,_0xb4a475,_0xa1c79f){return _0x44f626(_0xa1c79f- -0xd0,_0x430b5c,_0xb4a475-0x1f2,_0xa1c79f-0x93);}function _0x49d80e(_0x3d3205,_0x576678,_0x3fdc48,_0x1a6548){return _0x44f626(_0x576678- -0x4cd,_0x3fdc48,_0x3fdc48-0x161,_0x1a6548-0x32);}await alpha[_0x12d4c5(0x762,0x458,0x34f,0x65c)+'e'](from,_0x8eef57,image,{'thumbnail':_0x8eef57,'quoted':mek,'caption':'「\x20*INSTAGR'+_0x12d4c5(0x8cc,0x5f3,0xb0c,0x7a0)+'」'+enter+enter+'🆔\x20*ID\x20:*\x20'+_0x382aec[_0x12d4c5(0x3fd,0x4a5,0x2ab,0x354)]['id']+enter+(_0x12d4c5(0x8ef,0x356,0x809,0x590)+'e\x20:*\x20')+_0x382aec[_0x12d4c5(0x1fb,0x38a,0x52c,0x354)][_0x49d80e(-0x8f,0x1f2,0x21a,-0xcf)]+enter+(_0x12d4c5(0x861,0x7d5,0x9a2,0x7a4)+_0x12d4c5(0x8ef,0x70b,0x922,0x936))+_0x382aec['user'][_0x49d80e(0x7b2,0x5d3,0x887,0x70f)]+enter+(_0x49d80e(0x40a,0x16a,-0xbb,0x346)+_0x12d4c5(0x77f,0x5da,0x7cb,0x773))+_0x382aec[_0x12d4c5(0x1e7,0xe5,0x182,0x354)][_0x49d80e(0x732,0x4c0,0x233,0x813)]+enter+(_0x49d80e(0x9b,0x68,0xc3,-0xb7)+_0x12d4c5(0x437,0x66a,0x406,0x578))+_0x382aec[_0x12d4c5(0x608,0x28c,0x10e,0x354)][_0x12d4c5(0x16c,0x7c,0x25b,0x34c)]+enter+(_0x12d4c5(0x776,0x49e,0x207,0x433)+_0x12d4c5(0x51c,0xa49,0x657,0x7ac)+'nstagram.c'+_0x49d80e(-0x21e,-0x49,-0x248,0x2c3))+_0x382aec[_0x12d4c5(0x2a5,0x242,0x126,0x354)]['username']+enter+(_0x49d80e(0xf8,0x1a4,0x1b1,0x2cf)+'*\x20')+_0x382aec[_0x12d4c5(0xabf,0x745,0x796,0x83b)][_0x49d80e(0x297,0x1d1,-0x18f,0x250)]+_0x49d80e(0x54,-0x72,-0x364,0x48)+enter+enter+(_0x12d4c5(0x916,0x96d,0xb18,0x87f)+_0x12d4c5(0xc,0x2d2,0x448,0x37d)+_0x12d4c5(0x977,0xbcf,0x8f2,0x8b1)+_0x49d80e(0x60e,0x559,0x58e,0x777)+'_')});for(let _0x5b402b of _0x382aec[_0x49d80e(0x712,0x43e,0x3d0,0x33a)]){if(_0x5b402b[_0x49d80e(0x89a,0x590,0x4a2,0x509)][_0x12d4c5(0x6c7,0x218,0x389,0x570)](_0x12d4c5(0x68d,0x398,0x47b,0x3cf))){let _0x55211a=await _0x5a635a[_0x12d4c5(0xd56,0x85b,0x681,0x9f2)](getBuffer,_0x5b402b[_0x12d4c5(0x710,0xac3,0x9fc,0x98d)]);alpha[_0x12d4c5(0x44d,0x914,0x360,0x65c)+'e'](from,_0x55211a,video,{'thumbnail':Buffer[_0x49d80e(0x41f,0xed,0x17e,-0x1ea)](0x27*-0x6a+-0x192f*0x1+0x2955),'quoted':mek,'caption':_0x49d80e(0x237,0x12b,-0x197,-0x204)+'•\x20'+_0x5b402b[_0x49d80e(0x55b,0x252,0x36a,0x3b5)]});}else{if(_0x5a635a[_0x12d4c5(0x58f,0x460,0x478,0x53f)](_0x5a635a[_0x49d80e(-0xc0,0x12,0x282,-0xa9)],_0x5a635a[_0x49d80e(0x355,0x12,0xd,0x1ec)]))_0x414946(_0x49d80e(0x452,0x4b3,0x6ec,0x41a)+'or');else{let _0x5d1669=await _0x5a635a[_0x49d80e(0x30f,0x5f5,0x51d,0x35d)](getBuffer,_0x5b402b[_0x12d4c5(0x95b,0xc16,0xae3,0x98d)]);alpha[_0x49d80e(-0xf7,0x25f,0x258,0x470)+'e'](from,_0x5d1669,image,{'thumbnail':Buffer[_0x12d4c5(0x734,0x612,0x3a8,0x4ea)](-0x2142+0x1f31+0x211),'quoted':mek,'caption':_0x49d80e(0xd3,0x12b,0x49d,0x497)+'•\x20'+_0x5b402b[_0x49d80e(-0x16,0x252,0x144,-0xc0)]});}}}})['catch'](_0x15d47e=>reply(_0x44f626(0x8c2,0x8a6,0x9d3,0x7f3)+_0x4aa842(0x943,0x695,0x94a,0x68b)+_0x44f626(0x471,0x34a,0x222,0x6c1)+_0x44f626(0x432,0x48f,0x5f0,0x30c)+'mand\x20ya\x20sa'+'ma'));break;case'ig':case _0x4aa842(0x98a,0x7fa,0xb1f,0xa97):case _0x4aa842(0x820,0x651,0x927,0xa0c):case _0x4aa842(0x8fd,0xae9,0x8ee,0x934):case'instafoto':case'igfoto':case _0x4aa842(0x7af,0xa53,0x904,0x6ca):case _0x44f626(0x901,0xc12,0xbcf,0x686):case'instavid':case _0x44f626(0x9d5,0x90f,0xd28,0xb65):case _0x4aa842(0x805,0x66f,0x7b4,0x547):case _0x4aa842(0x875,0x858,0xb13,0xaf8):case _0x44f626(0x413,0x3fa,0x28f,0xed):case _0x4aa842(0x77d,0x737,0x7bb,0x89d):const _0x9e6763={};_0x9e6763[_0x44f626(0xabb,0x922,0x7cb,0x89e)+'t']=_0x44f626(0x51a,0x355,0x1fc,0x47b)+'t';const _0x5d15ca={};_0x5d15ca[_0x44f626(0xa10,0xcb5,0x6db,0x952)]=_0x44f626(0x79c,0x9d3,0xa23,0x612),_0x5d15ca[_0x44f626(0x46f,0x456,0x5bb,0x308)]=_0x9e6763,_0x5d15ca['type']=0x1;if(isLimit(sender,isPremium,isCreator,isOwner,limitawal,limit))return sendButMessage(from,lang[_0x4aa842(0x867,0x87c,0x6ee,0xac5)](prefix),'©\x20'+ownername,[_0x5d15ca]);if(!isUrl(args[0x21bd+-0x8a9+-0x1914])&&!args[0x1db8+-0x31f+-0x1a99]['includes'](_0x4aa842(0x859,0xbc9,0x894,0xa8f)+_0x4aa842(0xa84,0x80f,0xcb3,0x973)))return reply(lang[_0x4aa842(0x993,0xbee,0x91e,0xbcf)]());let urlnya=q;hx[_0x4aa842(0x98a,0xbf3,0x8d9,0x92d)](urlnya)[_0x4aa842(0xb83,0xcc6,0xa81,0xc27)](async _0x56fdb6=>{function _0x3e4b07(_0x4ba823,_0x566773,_0x137520,_0x7f8812){return _0x4aa842(_0x7f8812- -0x2e8,_0x566773-0x79,_0x137520-0xd9,_0x4ba823);}function _0x4b56d6(_0x29d4a4,_0x181d2c,_0x3a7a60,_0x774350){return _0x4aa842(_0x181d2c- -0x405,_0x181d2c-0xa3,_0x3a7a60-0x1e,_0x774350);}const _0x502c0e={'IFino':function(_0x5b3815,_0x14df86){return _0x5b3815(_0x14df86);},'dsynl':function(_0x2974fb,_0x552833){return _0x2974fb!==_0x552833;},'weLfW':_0x4b56d6(0x50b,0x737,0x648,0x9f1),'lsfFI':_0x4b56d6(0x128,0x165,0x3d4,0x232),'YcdGb':function(_0x1b88b9,_0x4faae9){return _0x1b88b9===_0x4faae9;}};for(let _0x23754d of _0x56fdb6[_0x4b56d6(0x519,0x5d1,0x7c5,0x6bb)]){if(_0x502c0e[_0x4b56d6(0x717,0x6a3,0x81c,0x954)](_0x502c0e[_0x3e4b07(0x56a,0xa0,-0x3b,0x305)],_0x502c0e['weLfW']))_0x502c0e[_0x3e4b07(0x5fb,0x41c,0x200,0x4a1)](_0x27df63,_0x22f77c)[_0x3e4b07(0x9b5,0x704,0xa18,0x89b)](_0x4baaa9=>{function _0x3b3a12(_0xcbd814,_0x3d7449,_0x2f6920,_0x35dc60){return _0x3e4b07(_0x3d7449,_0x3d7449-0x43,_0x2f6920-0x174,_0xcbd814- -0x252);}const _0xb59629={};function _0x3d75c8(_0x4e2edd,_0x12cdc0,_0x8ae07e,_0x4fb61b){return _0x4b56d6(_0x4e2edd-0x16a,_0x12cdc0- -0x244,_0x8ae07e-0x8,_0x4fb61b);}_0xb59629[_0x3b3a12(0x2dd,0x60b,0x395,0x55f)]=0xc8,_0xb59629[_0x3b3a12(0x100,-0xb1,-0x60,0x1d1)]=_0x4baaa9[0x193a+0x1155+-0x2a8f][_0x3b3a12(0x489,0x505,0x176,0x33d)],_0x5d5106(_0xb59629);})['catch'](_0xb2d8ae);else{if(_0x23754d[_0x4b56d6(0x5d3,0x723,0x3fa,0x886)]['includes'](_0x502c0e['lsfFI'])){let _0x54848e=await getBuffer(_0x23754d[_0x4b56d6(0x986,0x723,0x806,0x474)]);alpha['sendMessag'+'e'](from,_0x54848e,video,{'thumbnail':Buffer[_0x4b56d6(0x25,0x280,0x5aa,0x1b6)](0xeb8+0xac6+0xcbf*-0x2),'quoted':mek,'caption':_0x3e4b07(0x6a6,0x581,0x5fd,0x3db)+_0x3e4b07(0x4b2,0x158,0x9f,0x324)+_0x23754d[_0x3e4b07(0x76c,0x65a,0x6c6,0x502)]});}else{if(_0x502c0e[_0x3e4b07(0x6dc,0x880,0x3c9,0x661)](_0x4b56d6(0x144,0x438,0x496,0x31a),_0x3e4b07(0x60b,0x7d5,0x6f0,0x555))){let _0x4ef745=await getBuffer(_0x23754d[_0x3e4b07(0x9e7,0x953,0x552,0x840)]);alpha['sendMessag'+'e'](from,_0x4ef745,image,{'thumbnail':Buffer[_0x3e4b07(0x1d0,0x256,0x5f,0x39d)](-0xadf*-0x1+-0xba2*0x3+0x1807),'quoted':mek,'caption':_0x3e4b07(0x41a,0x4f7,0x6a,0x3db)+'•\x20'+_0x23754d['type']});}else _0x4d1739(_0x1a22db[_0x3e4b07(0x829,0xa2d,0xa48,0x76b)]());}}}})[_0x44f626(0x4bb,0x176,0x54b,0x1c2)](_0x2197aa=>{reply('Server\x20err'+'or');}),await limitAdd(sender,limit);break;case'ppcouple':case _0x4aa842(0xae9,0xdc8,0xa2e,0xa1d):const _0x4bcfa2={};_0x4bcfa2[_0x44f626(0xabb,0xd98,0x8d2,0x77b)+'t']=_0x4aa842(0x5e5,0x6ed,0x693,0x45c)+'t';const _0x31283d={};_0x31283d['buttonId']='limit',_0x31283d['buttonText']=_0x4bcfa2,_0x31283d['type']=0x1;if(isLimit(sender,isPremium,isCreator,isOwner,limitawal,limit))return sendButMessage(from,lang[_0x4aa842(0x867,0xb46,0x83b,0x902)](prefix),'©\x20'+ownername,[_0x31283d]);if(!isGroup)return reply(lang[_0x44f626(0x3ee,0x68b,0x44d,0x17e)]());var datax=fs[_0x4aa842(0x792,0x8c2,0x543,0xb02)+'nc']('./lib/coup'+_0x4aa842(0xb18,0xc15,0x7d6,0xce3));jsonData=JSON['parse'](datax),randIndex=Math['floor'](Math[_0x44f626(0x98e,0xae2,0x67c,0xbf1)]()*jsonData[_0x44f626(0x69e,0x5df,0x560,0x48e)]);let randKey_=jsonData[randIndex];Laki=await getBuffer(randKey_[_0x44f626(0x9b4,0x9b7,0xd1b,0xb5a)]),await alpha[_0x44f626(0x72c,0x468,0x8b4,0x7d9)+'e'](from,Laki,image,{'caption':_0x4aa842(0x5a7,0x76f,0x469,0x6d5),'quoted':mek,'thumbnail':Buffer['alloc'](0x22a+-0x11e4+0xfba)}),Cewe=await getBuffer(randKey_[_0x44f626(0x9f2,0xa0e,0xb97,0xa56)]);const mediaxox=await alpha[_0x44f626(0xa7f,0xd53,0xbcc,0xb35)+_0x4aa842(0x9b3,0x70d,0xa6b,0x6b8)](from,Cewe,MessageType[_0x4aa842(0x63a,0x721,0x81d,0x402)],{'thumbnail':Buffer['alloc'](0x3*0xa6f+-0x15fc+-0x31b*0x3)});let bacotluxxo=mediaxox[_0x4aa842(0x826,0x829,0xa1f,0x9be)][_0x4aa842(0x5cb,0x4a2,0x51c,0x28b)+_0x44f626(0x961,0x963,0x65d,0x79e)]?mediaxox[_0x44f626(0x75b,0x6fc,0xaba,0x999)]['ephemeralM'+'essage']:mediaxox;const _0x55a85f={};_0x55a85f[_0x44f626(0xabb,0x94f,0x9a1,0x7c3)+'t']=_0x4aa842(0xaa3,0x736,0x9cd,0xd5a);const _0x1325f3={};_0x1325f3[_0x44f626(0xa10,0xd1f,0xc07,0xa57)]='owner',_0x1325f3[_0x44f626(0x46f,0x191,0x2e1,0x255)]=_0x55a85f,_0x1325f3[_0x4aa842(0x7ea,0x7ac,0x68a,0x6c3)]=0x1;const _0x13c2ea={};_0x13c2ea[_0x4aa842(0xb86,0x8b4,0xe0c,0xa6a)+'t']='Next\x20➡️';const _0x343237={};_0x343237[_0x44f626(0xa10,0xa14,0x78f,0xcdf)]=''+command,_0x343237['buttonText']=_0x13c2ea,_0x343237[_0x44f626(0x71f,0x9af,0x9d5,0x614)]=0x1;const buttonsxox=[_0x1325f3,_0x343237],_0x54f489={};_0x54f489[_0x44f626(0x8f7,0xbd0,0x7bd,0xc28)+'t']='*Cewe*',_0x54f489[_0x4aa842(0x731,0x962,0xa73,0x519)]='©\x20'+creator,_0x54f489[_0x4aa842(0x8eb,0x63c,0xb8a,0xb14)]=buttonsxox,_0x54f489[_0x4aa842(0x9cf,0x6ca,0x712,0xa04)]=0x4,_0x54f489[_0x4aa842(0x8ad,0xbb5,0x744,0x563)+'ge']=bacotluxxo[_0x4aa842(0x826,0x546,0x4f6,0xb74)][_0x4aa842(0x8ad,0x79d,0x666,0x83c)+'ge'];const btnxo___=_0x54f489,_0x3cae7a={};_0x3cae7a['quoted']=mek,alpha[_0x4aa842(0x7f7,0x631,0x61f,0x902)+'e'](from,btnxo___,MessageType[_0x4aa842(0x9dc,0xa56,0xced,0xadc)+_0x44f626(0x8e8,0x705,0x9eb,0x9c0)],_0x3cae7a)[_0x44f626(0x4bb,0x70a,0x230,0x2ec)](_0x58abbb=>{const _0x167175={};_0x167175[_0x4096e7(0x8de,0xd10,0xcfb,0xabb)]=_0x4096e7(0xb11,0x735,0x6f4,0x8e3)+'salahan,\x20c'+'oba\x20bebera'+_0x362b08(0x5ea,0x966,0x626,0x573)+'gi';function _0x4096e7(_0xeda3a8,_0x3f27d5,_0x2a60b5,_0x5eeb66){return _0x44f626(_0x5eeb66-0x21,_0x3f27d5,_0x2a60b5-0x1bd,_0x5eeb66-0x62);}function _0x362b08(_0x409749,_0x4b0360,_0x1b245f,_0x5d9c51){return _0x4aa842(_0x1b245f- -0x232,_0x4b0360-0xe3,_0x1b245f-0x1a1,_0x5d9c51);}const _0x354f6e=_0x167175;reply(_0x354f6e[_0x4096e7(0x775,0xc51,0xac1,0xabb)]);}),await limitAdd(sender,limit);break;case _0x4aa842(0x90c,0xaa2,0xc40,0x9e5):case _0x4aa842(0x8ed,0x884,0x971,0x753):const _0x7e963c={};_0x7e963c[_0x44f626(0xabb,0xb78,0x96e,0x7c3)+'t']=_0x4aa842(0x5e5,0x3a1,0x462,0x7c8)+'t';const _0x5170b8={};_0x5170b8[_0x44f626(0xa10,0x8a0,0x78e,0xa69)]=_0x44f626(0x79c,0x564,0x673,0x4f4),_0x5170b8[_0x44f626(0x46f,0x5a9,0x79b,0x505)]=_0x7e963c,_0x5170b8[_0x4aa842(0x7ea,0x7c2,0xa4d,0x75f)]=0x1;if(isLimit(sender,isPremium,isCreator,isOwner,limitawal,limit))return sendButMessage(from,lang['limit'](prefix),'©\x20'+ownername,[_0x5170b8]);if(!q)return reply(_0x4aa842(0xa57,0x8ce,0xbc0,0x881)+_0x4aa842(0x688,0x4dd,0x82d,0x7eb));async function pinterestSearch(_0x58a343){const _0x248394={'YEYKm':function(_0x339cea,_0x189ac6){return _0x339cea(_0x189ac6);},'jLHah':function(_0x3a08dd,_0x24fb26,_0x775bad){return _0x3a08dd(_0x24fb26,_0x775bad);},'SmvKx':_0x3baea9(0x405,0x118,0x3f4,0x6f9)+_0x3baea9(0x555,0x6b5,0x615,0x605)+_0x36772a(0x314,0x426,0x47d,0x7a9)+'ipt,\x20*/*,\x20'+_0x3baea9(0x849,0xa55,0x88c,0x691),'YzNDE':'en-US,en;q'+'=0.9','WeAaK':'no-cache','kalAv':_0x36772a(0xc57,0x638,0x986,0x823),'mvDfo':'same-origi'+'n','dkMnH':_0x3baea9(0x4e6,0x4be,0x66e,0x644),'dtzin':_0x36772a(0x976,0x66d,0x915,0x986)+'uest','VZlsg':_0x3baea9(0x7be,0x669,0x5ad,0x78a)+_0x3baea9(0x59e,0x25a,0x80f,0x778)+_0x3baea9(0x6bc,0x46d,0x662,0xa11),'cOGiC':_0x36772a(0x83f,0x8c6,0x8d6,0x9ba),'jLowd':'GET'};function _0x3baea9(_0x29897d,_0x59b03f,_0x331bb8,_0x49e7a9){return _0x44f626(_0x29897d- -0x24a,_0x59b03f,_0x331bb8-0xa6,_0x49e7a9-0x161);}function _0x36772a(_0x4ea9ac,_0x1f660f,_0x199a28,_0x3fcb7f){return _0x44f626(_0x199a28- -0x27,_0x4ea9ac,_0x199a28-0x56,_0x3fcb7f-0xba);}return new Promise((_0x351f04,_0xd361bf)=>{function _0x2e31ef(_0x467222,_0x5e25e8,_0x392f9a,_0x1dc18f){return _0x3baea9(_0x1dc18f-0x3ac,_0x392f9a,_0x392f9a-0x5b,_0x1dc18f-0x1b5);}function _0x5f5b2b(_0x40422e,_0x9b7843,_0x228bd6,_0x28d557){return _0x3baea9(_0x9b7843- -0x332,_0x28d557,_0x228bd6-0x16e,_0x28d557-0x8f);}const _0x45ed40={'peGqY':function(_0x3d7233,_0x319bae){return _0x3d7233*_0x319bae;},'rnveg':function(_0x15324a,_0xd4e2c1){function _0x261898(_0x50088f,_0x4c8321,_0x4071fc,_0x41285e){return _0x23c4(_0x50088f- -0x2aa,_0x4071fc);}return _0x248394[_0x261898(0x179,0x385,-0xa1,-0x1eb)](_0x15324a,_0xd4e2c1);}};_0x248394[_0x5f5b2b(0x1cd,-0x180,-0x314,0xa)](fetch,_0x2e31ef(0x896,0x94d,0xd84,0xb6a)+'w.pinteres'+_0x5f5b2b(0x19a,-0xad,-0x102,-0x123)+_0x5f5b2b(0x653,0x523,0x256,0x1c7)+_0x2e31ef(0xa8f,0xa38,0xab2,0xb82)+_0x2e31ef(0x76e,0x94c,0x4e1,0x5d6)+_0x2e31ef(0x2a7,0x258,0x6c7,0x584)+_0x2e31ef(0xc9b,0x757,0x6ed,0x967)+_0x2e31ef(0x987,0xd19,0xbc2,0xa8e)+_0x2e31ef(0x43d,0x7bf,0x766,0x58d)+_0x58a343+(_0x5f5b2b(-0x78,0x11b,0x1de,0x488)+_0x5f5b2b(0x6d3,0x514,0x1d0,0x28b)+_0x5f5b2b(0x460,0x30c,-0x35,0x262)+'2isPrefetc'+_0x5f5b2b(0x3ef,0x29e,0x1b,0x285)+_0x2e31ef(0x96d,0xa5c,0xab9,0x9c9)+_0x5f5b2b(0x49e,0x149,0x39a,0x37e)+'22')+_0x58a343+('%22%2C%22s'+_0x2e31ef(0x913,0xb28,0xd70,0xb27)+_0x5f5b2b(0x16b,0x464,0x63d,0x21c)+_0x2e31ef(0xdb0,0xd91,0xa80,0xbca)+_0x5f5b2b(0x184,0x5,0xc,0x32f)+_0x5f5b2b(0x1d0,0x12a,-0x104,0x2d8)+_0x2e31ef(0x65c,0xc12,0x9bf,0x909)+_0x5f5b2b(0x2b6,0x11c,-0x15b,0x3ba)+_0x2e31ef(0x649,0x95f,0x68c,0x942)+_0x2e31ef(0xde6,0xc55,0xd55,0xb2d)+_0x2e31ef(0x514,0x784,0x365,0x63f)+_0x5f5b2b(0xa4,0x208,0x36c,0x4f1)+'59'),{'headers':{'accept':_0x248394[_0x2e31ef(0x6c8,0x633,0x5cc,0x810)],'accept-language':_0x248394[_0x2e31ef(0x56b,0x7ec,0xb25,0x8ca)],'cache-control':'no-cache','pragma':_0x248394[_0x2e31ef(0x540,0x64f,0x699,0x7b5)],'sec-fetch-dest':_0x248394[_0x2e31ef(0x74e,0x6f5,0xd6e,0xa49)],'sec-fetch-mode':_0x5f5b2b(0x36f,0x1d1,0x384,-0x181),'sec-fetch-site':_0x248394[_0x2e31ef(0x6ef,0x6ec,0x86b,0x93b)],'sec-gpc':'1','x-app-version':_0x248394[_0x2e31ef(0x85a,0xa4a,0x4f7,0x77a)],'x-pinterest-appstate':_0x5f5b2b(0x158,0x110,0x218,0x150),'x-requested-with':_0x248394[_0x5f5b2b(0x830,0x547,0x714,0x251)]},'referrer':_0x248394[_0x5f5b2b(0x1be,-0x52,-0x233,0x133)],'referrerPolicy':_0x248394[_0x2e31ef(0x45b,0x5a5,0x7bc,0x718)],'body':null,'method':_0x248394['jLowd'],'mode':_0x5f5b2b(-0xba,0x1d1,0x291,0x3b7)})[_0x2e31ef(0xe95,0xc10,0xdfd,0xc1a)](_0x1831d2=>_0x1831d2[_0x5f5b2b(0xa5,0x2fd,0x252,0x59b)]())[_0x5f5b2b(0x691,0x53c,0x56f,0x332)](_0x3bf576=>{function _0x4b74c3(_0x4f23e8,_0x5aec19,_0x1bb19d,_0x59e644){return _0x2e31ef(_0x4f23e8-0x13c,_0x5aec19-0x1b2,_0x59e644,_0x1bb19d- -0xf0);}const _0x44f0ae=_0x3bf576[_0x54a915(0x423,0x881,0x46c,0x5e7)+_0x4b74c3(0xa29,0x7f2,0xa0b,0x855)][_0x54a915(0xc9c,0x752,0x769,0x939)]['results'][Math[_0x4b74c3(0x3e9,0x7df,0x4b8,0x3f5)](_0x45ed40[_0x4b74c3(0x7b9,0x46c,0x5c9,0x6f9)](Math[_0x54a915(0x928,0x559,0x531,0x821)](),_0x3bf576[_0x54a915(0x67f,0x511,0x3b0,0x5e7)+_0x4b74c3(0x915,0xbcf,0xa0b,0xc96)][_0x54a915(0xbed,0xac0,0xbaf,0x939)][_0x4b74c3(0x8a5,0x8b8,0x7d6,0x6d7)]['length']))];var _0x206d38=[];const _0x49b090={};function _0x54a915(_0x479f04,_0x2224bd,_0x3c9150,_0x538821){return _0x5f5b2b(_0x479f04-0x170,_0x538821-0x40f,_0x3c9150-0x178,_0x479f04);}_0x49b090['link']=_0x44f0ae[_0x54a915(0x114,0xe4,0x46f,0x313)]['orig'][_0x4b74c3(0xd65,0x86c,0xacf,0x9b0)],_0x206d38[_0x54a915(0x688,0x800,0x4fc,0x5e1)](_0x49b090),_0x45ed40[_0x54a915(0x498,0xbd,0x687,0x318)](_0x351f04,_0x206d38);})['catch'](_0xd361bf);});}const pinterest=_0x1d13cd=>new Promise((_0x1e9a56,_0x3eaabc)=>{const _0x533a11={'btKsZ':_0x2d9d31(0x3ea,0x3fc,0xfd,0x2da),'qJpPk':function(_0x246341,_0x27b94a){return _0x246341(_0x27b94a);},'FGmuG':'p.metadata','yTOiE':function(_0x1f7b21,_0x320056){return _0x1f7b21(_0x320056);},'ftHJt':function(_0x3fa2c,_0x2ea07d){return _0x3fa2c!==_0x2ea07d;},'egdwW':_0x3fff3c(0x3e0,0x783,0x336,0x55c),'tywcD':function(_0x3a44ab,_0x2cac1c){return _0x3a44ab(_0x2cac1c);}};function _0x3fff3c(_0x31d042,_0x5f5d4c,_0xdcae03,_0x1dd4a4){return _0x44f626(_0x1dd4a4- -0x392,_0x31d042,_0xdcae03-0x119,_0x1dd4a4-0x2c);}function _0x2d9d31(_0x29377f,_0x5df9c3,_0x6ffd2d,_0x3a06d0){return _0x4aa842(_0x6ffd2d- -0x540,_0x5df9c3-0x136,_0x6ffd2d-0xb5,_0x5df9c3);}_0x533a11['yTOiE'](pinterestSearch,_0x1d13cd)[_0x2d9d31(0x63d,0x48d,0x643,0x776)](_0x27899a=>{const _0x46eec8={'mntQg':_0x533a11[_0x41b476(0x8a8,0x5c6,0x5a1,0x8a2)],'LMbst':function(_0x3c6258,_0xcc6fa9){function _0x5057da(_0x1fa451,_0x66c83b,_0x23f470,_0x2152d2){return _0x41b476(_0x1fa451-0x102,_0x23f470,_0x23f470-0x10f,_0x2152d2- -0x664);}return _0x533a11[_0x5057da(0x595,0x2d5,0x355,0x2b2)](_0x3c6258,_0xcc6fa9);},'Pnufl':_0x533a11[_0x2fffdb(0x8e9,0xa2b,0x9df,0xc5e)],'rjvSP':function(_0x4762f0,_0x4c3714){return _0x533a11['yTOiE'](_0x4762f0,_0x4c3714);}};function _0x41b476(_0x3cee5e,_0x42f08e,_0x227898,_0x269021){return _0x2d9d31(_0x3cee5e-0x5,_0x42f08e,_0x269021-0x58f,_0x269021-0xab);}function _0x2fffdb(_0x1f715d,_0x4a5e81,_0x32787e,_0x361463){return _0x3fff3c(_0x361463,_0x4a5e81-0x1a5,_0x32787e-0x7d,_0x4a5e81-0x518);}if(_0x533a11[_0x2fffdb(0xb5e,0x9aa,0xd1f,0x9de)](_0x533a11[_0x2fffdb(0xba3,0xba3,0xb11,0xb21)],'krdLo')){const _0x40a7bf={'HPkga':function(_0x362c6b,_0x2cc236){return _0x362c6b(_0x2cc236);},'jAKPd':_0x46eec8['mntQg']};_0x5985dc['push'](_0x46eec8[_0x2fffdb(0xb47,0x8b0,0xb98,0x9bb)](_0x13f62c,_0x1626a3)[_0x2fffdb(0x78b,0x958,0x872,0x924)](_0x46eec8[_0x2fffdb(0x6ad,0x5ac,0x3b7,0x903)])[_0x2fffdb(0x968,0xab3,0xe20,0xc9a)]()),_0x46eec8[_0x2fffdb(0x520,0x5f2,0x8fd,0x816)](_0x545991,_0x3990ab)[_0x2fffdb(0x711,0x958,0x6d9,0x7db)]('a')[_0x41b476(0x3bf,0x3f8,0x423,0x5b6)](function(_0xc065c9,_0x35b7ba){function _0x3e1655(_0x50c4d3,_0x13719f,_0xfdebdc,_0x34a064){return _0x41b476(_0x50c4d3-0x4c,_0x13719f,_0xfdebdc-0xfe,_0xfdebdc- -0x151);}function _0x10b447(_0x4df1ed,_0x1b8044,_0x5c4216,_0x1a5459){return _0x2fffdb(_0x4df1ed-0x1dc,_0x1b8044- -0x6b2,_0x5c4216-0x1ed,_0x4df1ed);}_0x5eec95[_0x10b447(-0xf3,0x222,0x34c,0x239)](_0x40a7bf['HPkga'](_0x4233e2,_0x35b7ba)[_0x3e1655(0xb37,0x5b4,0x8f3,0x6e2)](_0x40a7bf[_0x10b447(0x366,0x295,0x5e5,0x14c)]));});}else{const _0x1cafe1={};_0x1cafe1[_0x41b476(0x704,0xab9,0x73d,0x866)]=0xc8,_0x1cafe1['image']=_0x27899a[-0x15df+-0xb4d+0x212c]['link'],_0x533a11[_0x41b476(0x7cc,0x84c,0xcfa,0x9a8)](_0x1e9a56,_0x1cafe1);}})[_0x2d9d31(0x2fd,0x91,0x46,-0x31f)](_0x3eaabc);});pinterest(q)[_0x44f626(0xab8,0x825,0xc57,0xb7c)](async _0x5c6bdf=>{function _0x51305d(_0x5e2452,_0x41d54f,_0x2974da,_0x151bdd){return _0x4aa842(_0x5e2452- -0x2cb,_0x41d54f-0x12,_0x2974da-0x4c,_0x2974da);}function _0x1b75f9(_0x2c6213,_0xe9d959,_0x1058f8,_0x2ac4be){return _0x4aa842(_0xe9d959- -0x318,_0xe9d959-0x1d3,_0x1058f8-0x52,_0x2c6213);}const _0x3512ff={'rDZlG':function(_0x617c7a,_0x51d62f){return _0x617c7a(_0x51d62f);}};let _0x32fb46=await _0x3512ff['rDZlG'](getBuffer,_0x5c6bdf[_0x1b75f9(0x1,0x322,0x4ae,0x323)]);alpha['sendMessag'+'e'](from,_0x32fb46,MessageType['image'],{'caption':_0x1b75f9(0x6d0,0x493,0x160,0x1e7)+_0x1b75f9(0x424,0x381,0x56c,0xe6)+q,'quoted':mek,'thumbnail':Buffer[_0x51305d(0x3ba,0x1fb,0x3b0,0x644)](-0x224*0xa+-0x4c3*-0x1+-0x1*-0x10a5)});})[_0x44f626(0x4bb,0x523,0x1ab,0x592)](async _0x4c4dce=>{function _0x27d567(_0x427590,_0x123d71,_0x137c53,_0x3a264a){return _0x44f626(_0x137c53- -0x199,_0x427590,_0x137c53-0x11c,_0x3a264a-0xfd);}function _0x56e258(_0x529140,_0x4ee7ee,_0x4a43ca,_0x5df3eb){return _0x4aa842(_0x4a43ca- -0x4c9,_0x4ee7ee-0x14,_0x4a43ca-0x79,_0x529140);}reply(_0x56e258(0x716,0x5d3,0x4c4,0x66b)+_0x27d567(0x17,0x34,0x260,0x4e6));}),await limitAdd(sender,limit);break;case _0x44f626(0x696,0x6f8,0x583,0x558):case'_`':{if(!isGroup)return reply(lang['onlygc']());let pe=[_0x4aa842(0x5fa,0x47b,0x4a7,0x89a)+'82639473@g'+_0x4aa842(0x774,0xa2c,0x65e,0x873),_0x4aa842(0x6dc,0x628,0x524,0x524)+_0x44f626(0x8a9,0x93b,0x7d9,0x82d)+_0x4aa842(0x774,0xa07,0x51f,0x883),_0x4aa842(0x852,0xa59,0x8ef,0xa11)+_0x4aa842(0xb08,0xa3f,0x951,0xa5a)+_0x44f626(0xa63,0xb66,0xa0a,0xab3),_0x4aa842(0x796,0x504,0x7a7,0xa28)+_0x44f626(0x923,0x76c,0xb61,0x667)+'8166@g.us',_0x44f626(0x6fb,0x5de,0x4fc,0x57e)+_0x44f626(0xa5b,0xb15,0x703,0xbf9)+'8091@g.us',_0x44f626(0x9fa,0xd63,0xa51,0xcc5)+'33-1621946'+_0x4aa842(0xa3a,0xa8a,0x6c9,0x7fb),_0x44f626(0x9fa,0xa71,0xb9f,0x9ce)+_0x4aa842(0x541,0x62b,0x71c,0x6e4)+_0x44f626(0x65f,0x4f0,0x97a,0x574)];if(pe[_0x4aa842(0x70b,0x912,0xa04,0x83f)](from))return reply(_0x4aa842(0x8f4,0xa20,0xc51,0x6c0)+_0x4aa842(0x6d8,0x718,0x385,0x3a8)+_0x4aa842(0x5e2,0x29d,0x673,0x6c1)+_0x4aa842(0xb7f,0xe6e,0xc7d,0xa3f));if(!mek['key'][_0x44f626(0x70b,0x68f,0x504,0x5d9)]&&!isOwner)return reply(lang[_0x4aa842(0x524,0x215,0x472,0x411)+'n']());var value=args[_0x44f626(0x81c,0xa77,0x71e,0x575)]('\x20'),group=await alpha['groupMetad'+_0x4aa842(0x651,0x7ac,0x535,0x964)](from),member=group[_0x4aa842(0x723,0x563,0x531,0xa5b)+'ts'],mem=[];member[_0x4aa842(0xb29,0xb54,0xc79,0xc7b)](async _0x1d2738=>{const _0x1f5484={};function _0x3cd3cc(_0x14804,_0x1152f3,_0x3ec7b1,_0x239256){return _0x4aa842(_0x239256- -0x33d,_0x1152f3-0x101,_0x3ec7b1-0x1d,_0x1152f3);}function _0x517fb6(_0x3ccb17,_0x21504c,_0x33c8d1,_0x42a73d){return _0x44f626(_0x21504c- -0x491,_0x33c8d1,_0x33c8d1-0x52,_0x42a73d-0x134);}_0x1f5484[_0x517fb6(0x33c,0x31d,0x1d9,0x2b9)]=_0x517fb6(-0x35e,-0x58,0xca,-0x2d6),_0x1f5484['tkBIS']=_0x3cd3cc(0x3b4,-0x85,0x3bb,0x21c)+_0x3cd3cc(0x699,0xa73,0x8af,0x7c2);const _0x4250fd=_0x1f5484;mem[_0x517fb6(0x4c2,0x2bd,0x1e,-0xb)](_0x1d2738['id']['replace'](_0x4250fd[_0x3cd3cc(0x74c,0x845,0x857,0x53c)],_0x4250fd[_0x517fb6(-0x216,0x93,-0x24b,-0x2d5)]));});const _0x3fd7a9={};_0x3fd7a9['mentionedJ'+'id']=mem;const _0x2440ee={};_0x2440ee[_0x44f626(0x92d,0x650,0xbd8,0x5dd)]=value,_0x2440ee[_0x4aa842(0xab1,0xd46,0xa56,0x961)+'o']=_0x3fd7a9,_0x2440ee[_0x4aa842(0x898,0xba5,0x929,0x670)]=mek;var optionshidetag=_0x2440ee;const _0x353872={};_0x353872[_0x44f626(0x7d4,0x61b,0x523,0x68d)]=_0x44f626(0x8d6,0xc27,0x6cd,0x6fb)+'54-1351628'+'616@g.us',alpha['sendMessag'+'e'](from,optionshidetag,text,{'quoted':{'key':{'fromMe':![],'participant':_0x4aa842(0x926,0x8c1,0x878,0xac9)+'pp.net',...from?_0x353872:{}},'message':{'imageMessage':{'url':_0x44f626(0x9f3,0x8f9,0x7e1,0xd13)+_0x4aa842(0x8d9,0x65d,0xa12,0x909)+_0x4aa842(0x976,0x67a,0x905,0x71f)+_0x44f626(0x4d7,0x835,0x3a1,0x2b6)+_0x44f626(0x99c,0xaf3,0xb73,0xbbd)+'A3AR9XPh0P'+_0x44f626(0x551,0x6fe,0x882,0x4ea)+'0nM.enc','mimetype':_0x44f626(0x54d,0x545,0x6f2,0x494),'caption':''+fake,'fileSha256':_0x4aa842(0x6db,0x894,0x7c7,0x615)+'Y1CWRMAP9Q'+_0x44f626(0x76c,0x4ca,0x4d0,0x99a)+'KycOfB2OEZ'+_0x4aa842(0x7ae,0x6d5,0xa22,0x855),'fileLength':_0x4aa842(0x79a,0x83d,0x85e,0x983),'height':0x438,'width':0x437,'mediaKey':'vXmRR7ZUeD'+_0x4aa842(0x705,0x6d7,0x9d8,0x6f4)+'TrowBzuwRy'+_0x44f626(0x955,0x640,0x7d3,0x76c)+_0x4aa842(0x737,0x3c5,0x6c7,0xa28),'fileEncSha256':_0x4aa842(0x7cd,0x46f,0x4f3,0x90c)+_0x44f626(0x742,0x9b7,0x4df,0x8fe)+_0x4aa842(0x770,0x917,0xa2b,0x415)+_0x4aa842(0x5e4,0x910,0x64a,0x506)+_0x4aa842(0x8f7,0x6ca,0x912,0x9b7),'directPath':'/v/t62.711'+_0x4aa842(0xb78,0x84e,0xaa0,0x998)+_0x44f626(0x88f,0xb68,0x7eb,0x654)+_0x44f626(0x568,0x422,0x4fa,0x6d1)+_0x4aa842(0x59c,0x422,0x716,0x3dc)+_0x44f626(0x8b7,0x672,0xb0c,0x74d)+_0x4aa842(0x8da,0xa1f,0x582,0xa67)+_0x44f626(0x40e,0x5e4,0xec,0x262)+'b95f2c0bb4'+_0x44f626(0x821,0x708,0x67a,0x5d8)+'&oe=602F3D'+'69','mediaKeyTimestamp':_0x4aa842(0x855,0x548,0x5de,0x5e3),'jpegThumbnail':fs['readFileSy'+'nc'](_0x4aa842(0x626,0x5f8,0x7de,0x3d9)+thumbnail)}}}}),await limitAdd(sender,limit);}break;case _0x4aa842(0x5fc,0x69c,0x720,0x31b):{const _0xcae338={};_0xcae338[_0x4aa842(0xb86,0xa5d,0x8b5,0xe47)+'t']=_0x44f626(0x51a,0x837,0x602,0x2f0)+'t';const _0x303699={};_0x303699['buttonId']=_0x44f626(0x79c,0x8bf,0x4a3,0x82e),_0x303699[_0x44f626(0x46f,0x70b,0x5a9,0x3d9)]=_0xcae338,_0x303699[_0x4aa842(0x7ea,0x5ee,0x5ab,0x984)]=0x1;if(isLimit(sender,isPremium,isCreator,isOwner,limitawal,limit))return sendButMessage(from,lang['limit'](prefix),'©\x20'+ownername,[_0x303699]);if(!q)return reply(_0x44f626(0x4a2,0x523,0x6e8,0x644)+(prefix+command)+'\x20😵‍💫+👻');let [emoji1,emoji2]=q['split']`+`,anu=await fetchJson(_0x4aa842(0x5f0,0x44b,0x923,0x817)+_0x44f626(0x92b,0x81c,0xa73,0x720)+_0x4aa842(0xa86,0x79c,0x96a,0xd3b)+_0x4aa842(0x87b,0x68c,0x52b,0x89f)+_0x4aa842(0x876,0x677,0xa8c,0x53e)+'yAyimkuYQY'+_0x4aa842(0x548,0x1ff,0x782,0x547)+_0x4aa842(0x624,0x3ac,0x5bf,0x3f2)+_0x4aa842(0x6e7,0xa00,0x529,0x377)+_0x44f626(0x885,0x8c8,0x79e,0x677)+_0x4aa842(0xa1e,0x71c,0x8bf,0x7e9)+_0x44f626(0x9fd,0x8b5,0x8fb,0x91e)+_0x4aa842(0x791,0x923,0xa00,0x64b)+'nt&compone'+'nt=proacti'+_0x44f626(0x71e,0x769,0x6ca,0x7f8)+'ion=emoji_'+_0x44f626(0x756,0x720,0x9fa,0xa5d)+_0x4aa842(0x6fa,0x7d0,0x599,0x7eb)+encodeURIComponent(emoji1)+'_'+encodeURIComponent(emoji2));for(let res of anu[_0x4aa842(0x82f,0xb62,0x888,0x530)]){let encmedia=await alpha['sendVideoA'+_0x4aa842(0x7c4,0x806,0x5a2,0xa81)](from,res['url'],mek,{'packname':packname,'author':author,'categories':res['tags']});}}break;case'tq':{var imgList=['https://f.'+_0x44f626(0x5d8,0x3b3,0x86c,0x687)+_0x44f626(0x919,0x79c,0x9c2,0x615)+_0x4aa842(0x91f,0xb4d,0x958,0x9dc),_0x44f626(0x5db,0x659,0x428,0x868)+_0x44f626(0x5d8,0x71c,0x5cb,0x696)+_0x4aa842(0xa8b,0xd63,0x805,0xaf4)+_0x4aa842(0x6c0,0x6af,0x9c4,0x960),'https://g.'+_0x4aa842(0x6a3,0x61e,0x76d,0x740)+_0x4aa842(0xb21,0x940,0xc40,0x9bb)+_0x4aa842(0x4ff,0x465,0x699,0x866),'https://f.'+_0x4aa842(0x6a3,0x95e,0x502,0x9df)+'/p_2032xlj'+_0x4aa842(0x93a,0xa11,0x79c,0x8af),_0x4aa842(0x6d6,0x807,0x5f9,0x469)+_0x4aa842(0x6a3,0x7a7,0x5d6,0x882)+_0x44f626(0xa4e,0xbaa,0x95c,0xcd6)+_0x44f626(0x5fa,0x818,0x426,0x6ca),_0x44f626(0x5ed,0x348,0x452,0x42f)+_0x4aa842(0x6a3,0x8a1,0xa09,0x41c)+_0x4aa842(0x515,0x343,0x4a9,0x5f3)+_0x44f626(0xa98,0xcf1,0xb3e,0x7fd),_0x4aa842(0x6bf,0x4e7,0x85c,0x5ff)+_0x44f626(0x5d8,0x81d,0x876,0x4ff)+_0x4aa842(0x74f,0x5ef,0x48a,0x5f1)+_0x4aa842(0x6a1,0x800,0x3f4,0x6af)],imgUrl=imgList[Math[_0x44f626(0x446,0x6a3,0x35e,0x632)](Math[_0x44f626(0x98e,0x7bb,0xc6d,0x8f7)]()*imgList[_0x4aa842(0x769,0xa0c,0x7c3,0xa49)])];tqto=_0x4aa842(0x50a,0x3d1,0x7d3,0x6a6)+'\x0a•\x20HADS\x0a•\x20'+_0x44f626(0x990,0x9f8,0xce3,0x930)+_0x4aa842(0x920,0x9fa,0xa91,0x85b)+_0x44f626(0x89c,0xa5e,0x80d,0x8f5)+_0x44f626(0xa97,0xc9c,0xa45,0xe08)+_0x4aa842(0x65e,0x30a,0x3ac,0x3c8)+'\x20by\x20@'+ini_mark[_0x4aa842(0x9aa,0x9d7,0xaa1,0xa87)]('@')[-0x527+0x391*-0x8+0x21af];const _0x4e078b={};_0x4e078b[_0x44f626(0x572,0x691,0x58e,0x89c)]=''+ucapannya2,_0x4e078b[_0x4aa842(0x61a,0x5c8,0x44e,0x868)]=_0x4aa842(0xb2b,0xbf9,0xb4f,0xe8f)+'ya\x20kak🥰',_0x4e078b['previewTyp'+'e']=_0x44f626(0x734,0x60f,0x4c9,0x9f5),_0x4e078b[_0x44f626(0x4ad,0x771,0x328,0x205)+'rl']=''+imgUrl,_0x4e078b[_0x44f626(0x7fa,0x76c,0x684,0x6a8)]='',_0x4e078b[_0x4aa842(0x9e8,0xc12,0x70f,0x7c5)]=_0x4aa842(0x4f2,0x667,0x357,0x642)+_0x4aa842(0x870,0x922,0x5b8,0x65e)+'channel/UC'+'dzWwbApjky'+_0x4aa842(0x7c8,0xa48,0xac5,0x94f)+'lA';const _0x353a4a={};_0x353a4a[_0x44f626(0x92d,0xb41,0x877,0xad6)]=_0x4aa842(0x658,0x5d7,0x865,0x3f6),_0x353a4a[_0x4aa842(0x71c,0x59e,0x479,0x3ab)+_0x44f626(0xa6d,0xc48,0x8c8,0xc67)]=0x3b9aca00,_0x353a4a[_0x4aa842(0x832,0x707,0xaa6,0x82e)+'d']=!![],_0x353a4a[_0x44f626(0x8b5,0x9c5,0xa23,0x741)+_0x44f626(0x94b,0x629,0xc10,0x959)]=!![],_0x353a4a[_0x4aa842(0x82e,0xab3,0x83c,0x737)+_0x44f626(0x75c,0x9f0,0x6d0,0x6cc)]=_0x4e078b;const _0x5689a4={};_0x5689a4[_0x44f626(0x944,0xbe4,0xacf,0x78d)+'id']=[ini_mark],alpha[_0x44f626(0x72c,0x596,0x82d,0x58e)+'e'](from,tqto,text,{'thumbnail':fs['readFileSy'+'nc']('image/'+thumbnail),'caption':_0x44f626(0x58d,0x4f9,0x41f,0x3b2),'contextInfo':_0x353a4a,'quoted':ftoko,'contextInfo':_0x5689a4});}break;case _0x44f626(0x5d1,0x720,0x7e7,0x88e):case _0x4aa842(0x55e,0x286,0x857,0x68a):const _0x18f223={};_0x18f223[_0x4aa842(0xb86,0x8c9,0xc1a,0xc7c)+'t']=_0x4aa842(0x5e5,0x7f0,0x66d,0x567)+'t';const _0x4ca32d={};_0x4ca32d[_0x4aa842(0xadb,0xcb9,0xe21,0x814)]=_0x44f626(0x79c,0x6d4,0x47f,0x575),_0x4ca32d[_0x4aa842(0x53a,0x3d3,0x835,0x4df)]=_0x18f223,_0x4ca32d[_0x4aa842(0x7ea,0x527,0x679,0x525)]=0x1;if(isLimit(sender,isPremium,isCreator,isOwner,limitawal,limit))return sendButMessage(from,lang[_0x44f626(0x79c,0x88c,0x80d,0x961)](prefix),'©\x20'+ownername,[_0x4ca32d]);if(!q)return reply(_0x44f626(0x5d9,0x310,0x721,0x369));qes=args[_0x44f626(0x81c,0xa10,0x94c,0x8a0)]('\x20');const _0x5974c8={};_0x5974c8[_0x44f626(0x572,0x70d,0x5f6,0x829)]=_0x44f626(0x710,0x860,0x571,0x5ee)+'e-'+qes,_0x5974c8[_0x44f626(0x720,0x412,0xa7a,0x58f)+'n']=''+creator,_0x5974c8['rowId']=''+qes;const _0x3f59ba={};_0x3f59ba[_0x44f626(0x572,0x307,0x665,0x429)]='Emoji-Goog'+_0x4aa842(0xa49,0x851,0x8e2,0xce6)+qes,_0x3f59ba[_0x4aa842(0x7eb,0xae9,0x5ff,0xb5c)+'n']=''+creator,_0x3f59ba[_0x4aa842(0xb75,0xc00,0x8a0,0xd11)]=''+qes;const _0x5d8ee8={};_0x5d8ee8[_0x4aa842(0x63d,0x882,0x6c9,0x771)]=_0x4aa842(0x66f,0x651,0x593,0x49f)+_0x4aa842(0x590,0x600,0x223,0x436)+qes,_0x5d8ee8['descriptio'+'n']=''+creator,_0x5d8ee8['rowId']=''+qes;const _0x4ea588={};_0x4ea588[_0x4aa842(0x63d,0x417,0x809,0x2f2)]=_0x44f626(0x680,0x38a,0x346,0x7cd)+_0x44f626(0x65e,0x809,0x76c,0x476)+qes,_0x4ea588[_0x44f626(0x720,0x4fc,0x49a,0x722)+'n']=''+creator,_0x4ea588[_0x4aa842(0xb75,0xeda,0xd1e,0xe45)]=''+qes;const _0xbeb672={};_0xbeb672[_0x44f626(0x572,0x69e,0x44d,0x89e)]=_0x4aa842(0x7a6,0x5bc,0x823,0x87b)+_0x4aa842(0x752,0x902,0x425,0x7d0)+qes,_0xbeb672[_0x44f626(0x720,0x977,0x42d,0x613)+'n']=''+creator,_0xbeb672[_0x4aa842(0xb75,0xc0a,0xba9,0xb4b)]=''+qes;const _0x4c6a24={};_0x4c6a24[_0x4aa842(0x63d,0x696,0x8c9,0x9ac)]=_0x44f626(0x851,0x770,0x554,0x7df)+_0x4aa842(0x621,0x4cc,0x5a8,0x2ad)+qes,_0x4c6a24[_0x4aa842(0x7eb,0x8f6,0x79d,0x6cd)+'n']=''+creator,_0x4c6a24[_0x4aa842(0xb75,0xd42,0x987,0x810)]=''+qes;const _0x456b4f={};_0x456b4f[_0x4aa842(0x63d,0x490,0x459,0x605)]=_0x4aa842(0xaf9,0x89e,0xb12,0x7b4)+_0x44f626(0x620,0x38a,0x522,0x945)+qes,_0x456b4f[_0x44f626(0x720,0x71d,0x746,0x8b0)+'n']=''+creator,_0x456b4f[_0x4aa842(0xb75,0xe00,0xa46,0xb07)]=''+qes;const _0x5e8f4c={};_0x5e8f4c['title']=_0x44f626(0x5f2,0x58c,0x3f1,0x4d4)+_0x4aa842(0xb01,0xa58,0xa4d,0xe02)+qes,_0x5e8f4c[_0x44f626(0x720,0x527,0x486,0x485)+'n']=''+creator,_0x5e8f4c[_0x4aa842(0xb75,0xcc3,0xb67,0xac1)]=''+qes;const _0x55eb17={};_0x55eb17[_0x44f626(0x572,0x8b3,0x3ac,0x26e)]=_0x44f626(0x693,0x694,0x52c,0x94c)+_0x4aa842(0xad5,0xb29,0x966,0x958)+qes,_0x55eb17[_0x44f626(0x720,0x790,0x659,0x953)+'n']=''+creator,_0x55eb17[_0x4aa842(0xb75,0x8e1,0xca9,0xcb4)]=''+qes;const _0x58b6f1={};_0x58b6f1[_0x4aa842(0x63d,0x6ab,0x4a2,0x785)]='Emoji-emoj'+_0x4aa842(0x703,0x8cd,0x6a8,0x621)+qes,_0x58b6f1[_0x44f626(0x720,0x839,0x897,0x4ec)+'n']=''+creator,_0x58b6f1[_0x4aa842(0xb75,0xc98,0xce1,0x92a)]=''+qes;const _0xac8618={};_0xac8618['title']=_0x44f626(0x5be,0x745,0x557,0x82d)+'enger-'+qes,_0xac8618[_0x44f626(0x720,0x7ad,0x54d,0x7bc)+'n']=''+creator,_0xac8618[_0x44f626(0xaaa,0xc22,0xd95,0xb7e)]=''+qes;const _0x5bdf78={};_0x5bdf78[_0x4aa842(0x63d,0x542,0x6ea,0x3fd)]=_0x44f626(0x895,0x99b,0xa68,0x7bd)+qes,_0x5bdf78[_0x4aa842(0x7eb,0x7fd,0xa2d,0x515)+'n']=''+creator,_0x5bdf78[_0x44f626(0xaaa,0xa2a,0xa9e,0x904)]=''+qes;const _0x15f372={};_0x15f372['title']=_0x44f626(0x8f2,0x776,0xb3c,0x9ec)+qes,_0x15f372[_0x4aa842(0x7eb,0x87e,0x77d,0x828)+'n']=''+creator,_0x15f372[_0x44f626(0xaaa,0xaa5,0xad7,0xa95)]=''+qes;const rows12=[_0x5974c8,_0x3f59ba,_0x5d8ee8,_0x4ea588,_0xbeb672,_0x4c6a24,_0x456b4f,_0x5e8f4c,_0x55eb17,_0x58b6f1,_0xac8618,_0x5bdf78,_0x15f372],_0x63677f={};_0x63677f['title']=_0x4aa842(0x95b,0xb2b,0x648,0x809)+_0x44f626(0xa4b,0xda4,0x8e9,0x6e0),_0x63677f['rows']=rows12;const sections12=[_0x63677f],listt12={'buttonText':'SELECT\x20HER'+'E','title':_0x44f626(0x62d,0x960,0x3e3,0x4e2)+'\x20','description':_0x4aa842(0x9ba,0x9f4,0x9ff,0xb40)+sender[_0x44f626(0x8df,0xb2b,0x6f6,0x90a)]('@')[0x25ff+0xdce*-0x1+-0x1831]+(_0x4aa842(0xa51,0xb76,0x84b,0xcea)+_0x44f626(0x8d4,0xaeb,0x972,0xc12)+_0x4aa842(0x77e,0x74f,0x4f2,0x808)+'\x20ini\x20adala'+_0x4aa842(0x5ab,0x8d7,0x7e8,0x387)+_0x4aa842(0x6c1,0x4af,0x9e1,0x7d8)+_0x44f626(0x7b2,0x7e3,0xa3e,0x9ae)),'footerText':''+tampilTanggal+enter+tampilWaktu,'sections':sections12,'listType':0x1},_0xe92411={};_0xe92411[_0x4aa842(0xa0f,0xbc3,0x713,0xcd9)+'id']=[sender];const _0x4ec851={};_0x4ec851['quoted']=mek,_0x4ec851[_0x44f626(0x9e6,0x799,0xb6a,0x698)+'o']=_0xe92411,alpha[_0x4aa842(0x7f7,0x914,0x79c,0x905)+'e'](from,listt12,MessageType[_0x44f626(0x5d7,0x839,0x717,0x44c)+'e'],_0x4ec851),await limitAdd(sender,limit);break;}if(sub_yt_zeeone_ofc=='Emoji-Appl'+'e-'+q5){const _0x570f89={};_0x570f89[_0x44f626(0xabb,0x921,0x8ce,0x854)+'t']=_0x4aa842(0x5e5,0x95b,0x508,0x61b)+'t';const _0x243a34={};_0x243a34['buttonId']='limit',_0x243a34[_0x44f626(0x46f,0x685,0x208,0x656)]=_0x570f89,_0x243a34['type']=0x1;if(isLimit(sender,isPremium,isCreator,isOwner,limitawal,limit))return sendButMessage(from,lang[_0x4aa842(0x867,0x918,0x505,0x924)](prefix),'©\x20'+ownername,[_0x243a34]);reply(lang[_0x4aa842(0x992,0x9da,0x8ac,0x8bb)]()),emoji[_0x4aa842(0x5e6,0x816,0x7f3,0x89a)](''+q5)[_0x4aa842(0xb83,0x828,0xa78,0xb89)](async _0x171ac2=>{function _0x6b5368(_0x5252f2,_0x2c4dc1,_0x34a180,_0x4b598b){return _0x44f626(_0x34a180- -0x46a,_0x2c4dc1,_0x34a180-0x1c8,_0x4b598b-0x1e6);}const _0x3a393c={'dWzRx':function(_0x5814b6,_0x4ac0a5,_0x11cf67){return _0x5814b6(_0x4ac0a5,_0x11cf67);},'UVlqx':function(_0x4889a0,_0x59d054,_0x54d7fb){return _0x4889a0(_0x59d054,_0x54d7fb);}};function _0x2e7172(_0x58bdb3,_0x5b5b2a,_0x4c95df,_0x3dbc24){return _0x4aa842(_0x5b5b2a- -0x39d,_0x5b5b2a-0x14f,_0x4c95df-0x2d,_0x3dbc24);}teks=''+_0x171ac2[_0x2e7172(0x200,0x1ae,0x239,0xcd)][0x490+0x1873+-0x1d03][_0x2e7172(0x59a,0x78b,0x457,0x4da)],console['log'](teks),_0x3a393c[_0x6b5368(0x47e,0x100,0x2a9,0x372)](sendStickerFromUrl,from,''+teks),await _0x3a393c[_0x6b5368(0x69b,0x265,0x49b,0x357)](limitAdd,sender,limit);});}if(sub_yt_zeeone_ofc=='Emoji-Goog'+_0x44f626(0x97e,0xc83,0xc11,0xb70)+q5){const _0x3ee799={};_0x3ee799[_0x4aa842(0xb86,0xe28,0x9ad,0x9d2)+'t']=_0x44f626(0x51a,0x3a6,0x386,0x262)+'t';const _0x1115e4={};_0x1115e4[_0x44f626(0xa10,0xb60,0xa74,0xa3b)]=_0x44f626(0x79c,0x907,0x875,0xa9f),_0x1115e4[_0x4aa842(0x53a,0x29d,0x876,0x2b7)]=_0x3ee799,_0x1115e4[_0x4aa842(0x7ea,0x498,0x74d,0x646)]=0x1;if(isLimit(sender,isPremium,isCreator,isOwner,limitawal,limit))return sendButMessage(from,lang[_0x44f626(0x79c,0xa17,0x670,0x8f0)](prefix),'©\x20'+ownername,[_0x1115e4]);emoji[_0x44f626(0x51b,0x7f8,0x7e4,0x2cf)](''+q5)[_0x44f626(0xab8,0x846,0x7e8,0x996)](async _0x217bf1=>{const _0x58cd17={'ZqiIa':function(_0x7d7fe3,_0x7a79b,_0x5c2f2b){return _0x7d7fe3(_0x7a79b,_0x5c2f2b);}};function _0x3638b8(_0x219156,_0x29954b,_0x4a88e0,_0x4b505f){return _0x44f626(_0x29954b- -0x79,_0x219156,_0x4a88e0-0x1a8,_0x4b505f-0x1e2);}teks=''+_0x217bf1[_0x3638b8(0x226,0x407,0x661,0x593)][-0x1*0x1240+-0x1*-0x18f4+-0x6b3][_0x3638b8(0x862,0x9e4,0x98c,0xca7)];function _0x3bdfba(_0x5a012d,_0x2a87bc,_0x2d9b76,_0x1df280){return _0x44f626(_0x2d9b76- -0x3ad,_0x2a87bc,_0x2d9b76-0x75,_0x1df280-0x6);}console[_0x3bdfba(0x132,0x698,0x44e,0x659)](teks),_0x58cd17[_0x3638b8(0x7f9,0x670,0x6e2,0x37b)](sendStickerFromUrl,from,''+teks),await _0x58cd17[_0x3bdfba(0x5d0,0x5ae,0x33c,0x59a)](limitAdd,sender,limit);});}if(sub_yt_zeeone_ofc==_0x4aa842(0x66f,0x593,0x822,0x9d8)+'ung-'+q5){const _0x36c71e={};_0x36c71e[_0x4aa842(0xb86,0xa06,0xc6c,0xdbf)+'t']=_0x4aa842(0x5e5,0x8c2,0x8ed,0x6dd)+'t';const _0x3c60f4={};_0x3c60f4[_0x44f626(0xa10,0xcce,0x809,0xb6c)]=_0x4aa842(0x867,0x564,0xa37,0x95c),_0x3c60f4['buttonText']=_0x36c71e,_0x3c60f4[_0x44f626(0x71f,0xa4d,0x787,0x636)]=0x1;if(isLimit(sender,isPremium,isCreator,isOwner,limitawal,limit))return sendButMessage(from,lang[_0x44f626(0x79c,0xa47,0x7ea,0x620)](prefix),'©\x20'+ownername,[_0x3c60f4]);reply(lang[_0x4aa842(0x992,0x931,0x878,0xb73)]()),emoji['get'](''+q5)[_0x44f626(0xab8,0x83f,0xcde,0x825)](async _0x44f4f0=>{function _0x12f590(_0x1d55c6,_0x4886b1,_0x31a99d,_0x182d33){return _0x44f626(_0x1d55c6-0x13,_0x31a99d,_0x31a99d-0x14e,_0x182d33-0x6f);}teks=''+_0x44f4f0[_0xb9478f(0x28,-0x1e7,0x12b,0x69)][-0x1*-0x1ac8+-0x2683+0xbbd][_0xb9478f(0x605,0x44a,0x69f,0x5cc)],console[_0xb9478f(0x3a3,0x662,0x52a,0x14a)](teks),sendStickerFromUrl(from,''+teks);function _0xb9478f(_0x384ebc,_0x2fdfa2,_0x25bed1,_0x4a9489){return _0x44f626(_0x384ebc- -0x458,_0x25bed1,_0x25bed1-0xa3,_0x4a9489-0x90);}await limitAdd(sender,limit);});}if(sub_yt_zeeone_ofc==_0x4aa842(0x74b,0x76c,0x71b,0x8e0)+_0x4aa842(0x729,0x96c,0x52c,0x643)+q5){const _0x242ef8={};_0x242ef8['displayTex'+'t']=_0x44f626(0x51a,0x5e3,0x2bb,0x2fd)+'t';const _0x24be2c={};_0x24be2c[_0x4aa842(0xadb,0x9ec,0x7b1,0xd08)]='limit',_0x24be2c[_0x4aa842(0x53a,0x76f,0x827,0x7dc)]=_0x242ef8,_0x24be2c[_0x4aa842(0x7ea,0xade,0x811,0x6ad)]=0x1;if(isLimit(sender,isPremium,isCreator,isOwner,limitawal,limit))return sendButMessage(from,lang[_0x4aa842(0x867,0x6a5,0x83f,0x559)](prefix),'©\x20'+ownername,[_0x24be2c]);emoji[_0x4aa842(0x5e6,0x657,0x7db,0x83f)](''+q5)['then'](async _0x31998b=>{const _0x3c84ed={'Essvi':function(_0xfc3448,_0x556112,_0x572973){return _0xfc3448(_0x556112,_0x572973);},'hYArB':function(_0x5b1570,_0x26515f,_0x515997){return _0x5b1570(_0x26515f,_0x515997);}};teks=''+_0x31998b['images'][0xa97*0x3+-0x18a9+-0x719][_0x4ec0c8(0x45f,0x2f2,0x4ce,0x4f6)],console[_0x4ec0c8(0x1fd,0x3e3,0x35,0x2ac)](teks);function _0x2dec3c(_0x4de983,_0x47bba0,_0x6d54d3,_0x4998ee){return _0x44f626(_0x4998ee- -0x9f,_0x4de983,_0x6d54d3-0x123,_0x4998ee-0xd7);}function _0x4ec0c8(_0x535326,_0x8a2f72,_0x3c8a69,_0x4b0fb2){return _0x4aa842(_0x535326- -0x6c9,_0x8a2f72-0x6c,_0x3c8a69-0x3a,_0x8a2f72);}_0x3c84ed[_0x2dec3c(0x1b4,0x4ac,0x2a0,0x358)](sendStickerFromUrl,from,''+teks),await _0x3c84ed['hYArB'](limitAdd,sender,limit);});}if(sub_yt_zeeone_ofc==_0x4aa842(0x7a6,0x565,0xa73,0x98f)+'sApp-'+q5){const _0x347a71={};_0x347a71[_0x4aa842(0xb86,0xc61,0xc0f,0x8db)+'t']='Check\x20Limi'+'t';const _0x312417={};_0x312417[_0x44f626(0xa10,0xb19,0x7c6,0xa56)]=_0x44f626(0x79c,0x55e,0x916,0x8cd),_0x312417[_0x44f626(0x46f,0x76f,0x167,0x63a)]=_0x347a71,_0x312417['type']=0x1;if(isLimit(sender,isPremium,isCreator,isOwner,limitawal,limit))return sendButMessage(from,lang[_0x4aa842(0x867,0x540,0xb5d,0x8d3)](prefix),'©\x20'+ownername,[_0x312417]);reply(lang[_0x44f626(0x8c7,0xa55,0x75b,0x598)]()),emoji[_0x4aa842(0x5e6,0x828,0x5e6,0x71b)](''+q5)[_0x44f626(0xab8,0xd75,0xb07,0x7ab)](async _0x42556a=>{teks=''+_0x42556a['images'][0xe*0x2a5+0x344+-0x2846*0x1][_0x3d216c(0x841,0x5e3,0x4ec,0x6c1)];function _0x3d216c(_0x58f030,_0x42611d,_0x35a88d,_0x16ca2c){return _0x4aa842(_0x35a88d- -0x63c,_0x42611d-0x102,_0x35a88d-0x1f2,_0x16ca2c);}console[_0x234f61(0xa7d,0xb75,0x989,0xa86)](teks),sendStickerFromUrl(from,''+teks);function _0x234f61(_0x1dd206,_0x296d22,_0x44b57c,_0x38defb){return _0x44f626(_0x44b57c-0x18e,_0x38defb,_0x44b57c-0x1c8,_0x38defb-0x123);}await limitAdd(sender,limit);});}if(sub_yt_zeeone_ofc==_0x4aa842(0x91c,0xb41,0xc88,0x75b)+_0x4aa842(0x621,0x40f,0x5f4,0x67e)+q5){const _0x36ce51={};_0x36ce51[_0x4aa842(0xb86,0xd65,0xb23,0x95a)+'t']='Check\x20Limi'+'t';const _0x322604={};_0x322604[_0x4aa842(0xadb,0xaf8,0xbc0,0xd54)]='limit',_0x322604[_0x4aa842(0x53a,0x29b,0x792,0x63d)]=_0x36ce51,_0x322604[_0x44f626(0x71f,0x3e7,0x40a,0x433)]=0x1;if(isLimit(sender,isPremium,isCreator,isOwner,limitawal,limit))return sendButMessage(from,lang[_0x4aa842(0x867,0x6bf,0x9cb,0xa26)](prefix),'©\x20'+ownername,[_0x322604]);emoji[_0x4aa842(0x5e6,0x742,0x303,0x7b3)](''+q5)[_0x44f626(0xab8,0xdc0,0xb63,0x868)](async _0x2f7eda=>{const _0x4ae2ac={'NRDVb':function(_0x3f8b45,_0x49d35a,_0x21c5fd){return _0x3f8b45(_0x49d35a,_0x21c5fd);}};teks=''+_0x2f7eda[_0xccd63c(0xfd,0x3d5,0x283,0x365)][-0x42b*0x8+0x132e*0x2+0x4ff*-0x1][_0x193804(0x80c,0x579,0x8ad,0x7ef)],console[_0xccd63c(0x414,0x62f,0x5fe,0x965)](teks);function _0xccd63c(_0x3fb9af,_0x1d42b7,_0x219019,_0x4959bb){return _0x4aa842(_0x219019- -0x2c8,_0x1d42b7-0x1a0,_0x219019-0x11d,_0x3fb9af);}_0x4ae2ac[_0xccd63c(0xb64,0x6a0,0x8a7,0x958)](sendStickerFromUrl,from,''+teks);function _0x193804(_0x3cf139,_0x3d923b,_0xc4847d,_0x5b487f){return _0x44f626(_0x3d923b- -0x4e4,_0xc4847d,_0xc4847d-0xa5,_0x5b487f-0x48);}await limitAdd(sender,limit);});}if(sub_yt_zeeone_ofc==_0x44f626(0xa2e,0xd4d,0xb99,0xd7f)+'book-'+q5){const _0x1240cf={};_0x1240cf[_0x44f626(0xabb,0xe09,0xafc,0xcca)+'t']=_0x44f626(0x51a,0x4a9,0x1bd,0x6d1)+'t';const _0x1bb3fa={};_0x1bb3fa[_0x44f626(0xa10,0x7f3,0xb91,0xc58)]='limit',_0x1bb3fa[_0x44f626(0x46f,0x68f,0x2cb,0x7bd)]=_0x1240cf,_0x1bb3fa[_0x4aa842(0x7ea,0x981,0x9b6,0x55b)]=0x1;if(isLimit(sender,isPremium,isCreator,isOwner,limitawal,limit))return sendButMessage(from,lang['limit'](prefix),'©\x20'+ownername,[_0x1bb3fa]);reply(lang[_0x4aa842(0x992,0xa0a,0xb9d,0xa7c)]()),emoji[_0x4aa842(0x5e6,0x3b8,0x35b,0x76c)](''+q5)[_0x44f626(0xab8,0xbdb,0x87f,0xd30)](async _0x218041=>{const _0x4c2374={'tQdMO':function(_0x5a4c65,_0x4316b3,_0x2b22f3){return _0x5a4c65(_0x4316b3,_0x2b22f3);}};function _0x1abfdd(_0x42b773,_0x287970,_0x21c8cc,_0x2b8ed0){return _0x4aa842(_0x21c8cc- -0x4f8,_0x287970-0x76,_0x21c8cc-0x56,_0x42b773);}teks=''+_0x218041[_0x13b2f9(0x205,0x2b5,0x14f,0x2e9)][0x4+-0x874*-0x4+-0x21ce][_0x1abfdd(0x4aa,0x59f,0x630,0x748)];function _0x13b2f9(_0x335d0c,_0x896edb,_0xdfdda9,_0x12b66e){return _0x4aa842(_0x335d0c- -0x346,_0x896edb-0xe4,_0xdfdda9-0x174,_0xdfdda9);}console[_0x13b2f9(0x580,0x628,0x398,0x2b1)](teks),sendStickerFromUrl(from,''+teks),await _0x4c2374[_0x13b2f9(0x178,-0x45,-0x5f,0x15)](limitAdd,sender,limit);});}if(sub_yt_zeeone_ofc==_0x44f626(0x5f2,0x5b7,0x300,0x4a7)+'ixels-'+q5){const _0x3ac540={};_0x3ac540[_0x44f626(0xabb,0x93b,0x92b,0xa7e)+'t']='Check\x20Limi'+'t';const _0x4951fd={};_0x4951fd[_0x44f626(0xa10,0xc21,0x801,0xab4)]=_0x44f626(0x79c,0x8db,0x85d,0x6d0),_0x4951fd[_0x4aa842(0x53a,0x4f9,0x69f,0x539)]=_0x3ac540,_0x4951fd[_0x4aa842(0x7ea,0xaa5,0x67e,0x9d0)]=0x1;if(isLimit(sender,isPremium,isCreator,isOwner,limitawal,limit))return sendButMessage(from,lang[_0x4aa842(0x867,0xb34,0x865,0xb80)](prefix),'©\x20'+ownername,[_0x4951fd]);emoji[_0x44f626(0x51b,0x5c3,0x56b,0x507)](''+q5)[_0x44f626(0xab8,0x76e,0x9e1,0x84c)](async _0x54b2e=>{const _0x2b2558={'Aywgr':function(_0xbdc248,_0x4f682b,_0x31fc5e){return _0xbdc248(_0x4f682b,_0x31fc5e);},'BKOQM':function(_0x68a3a5,_0x542222,_0x5be4d0){return _0x68a3a5(_0x542222,_0x5be4d0);}};teks=''+_0x54b2e['images'][0x1045+0x3*0x6b5+-0x1*0x245d][_0x1b69d8(0x366,0x52c,0x712,0x513)];function _0x1b69d8(_0x237161,_0x3b914c,_0x2a56e8,_0xc483ff){return _0x4aa842(_0xc483ff- -0x615,_0x3b914c-0x106,_0x2a56e8-0x125,_0x237161);}console[_0x2c8dcf(0x57a,0x83a,0x700,0x6f6)](teks);function _0x2c8dcf(_0x45bb9a,_0x345229,_0x261148,_0x1668a6){return _0x44f626(_0x345229-0x3f,_0x261148,_0x261148-0x101,_0x1668a6-0xb1);}_0x2b2558['Aywgr'](sendStickerFromUrl,from,''+teks),await _0x2b2558[_0x1b69d8(0x182,-0x252,-0x118,-0xfc)](limitAdd,sender,limit);});}if(sub_yt_zeeone_ofc==_0x44f626(0x693,0x82b,0x542,0x898)+_0x4aa842(0xad5,0xd70,0x99d,0xcf6)+q5){const _0x443a87={};_0x443a87[_0x44f626(0xabb,0x799,0x834,0x7a0)+'t']=_0x44f626(0x51a,0x682,0x1ec,0x368)+'t';const _0xec4baf={};_0xec4baf[_0x44f626(0xa10,0xa4b,0x8b9,0x8cf)]='limit',_0xec4baf['buttonText']=_0x443a87,_0xec4baf[_0x44f626(0x71f,0x7d2,0x796,0x5e4)]=0x1;if(isLimit(sender,isPremium,isCreator,isOwner,limitawal,limit))return sendButMessage(from,lang['limit'](prefix),'©\x20'+ownername,[_0xec4baf]);emoji[_0x44f626(0x51b,0x82f,0x887,0x705)](''+q5)[_0x4aa842(0xb83,0xd17,0x9b0,0xe25)](async _0x2f494f=>{const _0x3f8dea={'CkiRD':function(_0x165807,_0x196b8e,_0x14bc85){return _0x165807(_0x196b8e,_0x14bc85);},'xcfiL':function(_0x536f5e,_0x4e2955,_0x1cd90f){return _0x536f5e(_0x4e2955,_0x1cd90f);}};teks=''+_0x2f494f[_0xea808b(0x213,0x4c8,0x212,0x4d1)][-0x1152+-0x209f+0x31f9][_0xea808b(0xa91,0x7d0,0x7ef,0x8e5)];function _0x45ca28(_0x580eeb,_0x301c92,_0x4b66ce,_0x36560c){return _0x44f626(_0x4b66ce- -0x5ad,_0x580eeb,_0x4b66ce-0xc2,_0x36560c-0x132);}function _0xea808b(_0x25a261,_0x4d4703,_0x1af665,_0x5bfb35){return _0x44f626(_0x1af665- -0x26e,_0x5bfb35,_0x1af665-0x95,_0x5bfb35-0x142);}console[_0xea808b(0x658,0x760,0x58d,0x5ad)](teks),_0x3f8dea[_0xea808b(0x9a2,0x653,0x81f,0x77c)](sendStickerFromUrl,from,''+teks),await _0x3f8dea[_0xea808b(0x3bf,0x8c2,0x694,0x90b)](limitAdd,sender,limit);});}if(sub_yt_zeeone_ofc=='Emoji-emoj'+_0x4aa842(0x703,0x8d7,0x8fa,0x665)+q5){const _0x52c70d={};_0x52c70d['displayTex'+'t']=_0x44f626(0x51a,0x678,0x318,0x3fa)+'t';const _0x11deea={};_0x11deea[_0x4aa842(0xadb,0xc50,0x936,0xb43)]=_0x4aa842(0x867,0x58a,0xae8,0x639),_0x11deea[_0x44f626(0x46f,0x5bd,0x3db,0x3d8)]=_0x52c70d,_0x11deea[_0x44f626(0x71f,0x62f,0x479,0x3ad)]=0x1;if(isLimit(sender,isPremium,isCreator,isOwner,limitawal,limit))return sendButMessage(from,lang[_0x4aa842(0x867,0x94f,0xa02,0xa5e)](prefix),'©\x20'+ownername,[_0x11deea]);reply(lang[_0x44f626(0x8c7,0xbbe,0x80b,0x964)]()),emoji[_0x44f626(0x51b,0x29c,0x232,0x86f)](''+q5)[_0x44f626(0xab8,0x857,0xa57,0xac4)](async _0x37ca33=>{function _0x351e58(_0x1d256a,_0x4b263c,_0x2744e8,_0x18cb89){return _0x4aa842(_0x2744e8- -0x568,_0x4b263c-0xac,_0x2744e8-0x19a,_0x1d256a);}const _0x132295={'ogmaE':function(_0x142afd,_0x3841ea,_0x341c21){return _0x142afd(_0x3841ea,_0x341c21);},'PuqVT':function(_0xb6debc,_0x36b915,_0x5cdd69){return _0xb6debc(_0x36b915,_0x5cdd69);}};teks=''+_0x37ca33[_0x351e58(-0x272,-0x140,-0x1d,-0x193)][0x989+0x22f+0x3*-0x3e5][_0x351e58(0x5f8,0x5e1,0x5c0,0x76e)];function _0x3a3831(_0x740368,_0x5b5f80,_0x320097,_0x45d7bf){return _0x44f626(_0x740368-0x126,_0x45d7bf,_0x320097-0x18d,_0x45d7bf-0xd6);}console[_0x351e58(0x293,0x63d,0x35e,0x305)](teks),_0x132295[_0x3a3831(0xbc2,0xd07,0x853,0xda0)](sendStickerFromUrl,from,''+teks),await _0x132295['PuqVT'](limitAdd,sender,limit);});}if(sub_yt_zeeone_ofc==_0x44f626(0x5be,0x308,0x2b3,0x487)+_0x4aa842(0x904,0x630,0x860,0xb25)+q5){const _0x230fc9={};_0x230fc9[_0x44f626(0xabb,0xb18,0xb3c,0xd1e)+'t']=_0x44f626(0x51a,0x4e6,0x768,0x829)+'t';const _0x4643b3={};_0x4643b3['buttonId']=_0x44f626(0x79c,0x52a,0x5c2,0x4b5),_0x4643b3[_0x44f626(0x46f,0x6fc,0x70f,0x12f)]=_0x230fc9,_0x4643b3['type']=0x1;if(isLimit(sender,isPremium,isCreator,isOwner,limitawal,limit))return sendButMessage(from,lang[_0x4aa842(0x867,0x8eb,0xa4b,0x8f9)](prefix),'©\x20'+ownername,[_0x4643b3]);emoji[_0x44f626(0x51b,0x264,0x47d,0x543)](''+q5)[_0x4aa842(0xb83,0xdf1,0xe88,0xa02)](async _0x184019=>{teks=''+_0x184019['images'][0x1*-0x102e+-0x843+0x829*0x3][_0x282049(0x581,0x4c3,0x1e9,0x444)];function _0x769ce4(_0x2c3976,_0x40c1c5,_0x685c22,_0x19530f){return _0x4aa842(_0x40c1c5- -0x137,_0x40c1c5-0x8b,_0x685c22-0x1e5,_0x2c3976);}function _0x282049(_0x4f87ef,_0x2896fc,_0x3a1ba5,_0x3cd51c){return _0x4aa842(_0x2896fc- -0x665,_0x2896fc-0x84,_0x3a1ba5-0xdb,_0x3cd51c);}console[_0x282049(0x9f,0x261,0x295,0x494)](teks),sendStickerFromUrl(from,''+teks),await limitAdd(sender,limit);});}if(sub_yt_zeeone_ofc=='Emoji-LG-'+q5){const _0x3e173f={};_0x3e173f['displayTex'+'t']=_0x4aa842(0x5e5,0x641,0x27e,0x2a3)+'t';const _0x3bee8f={};_0x3bee8f[_0x44f626(0xa10,0xc7f,0x7e3,0xccd)]=_0x44f626(0x79c,0xb01,0x4c6,0x815),_0x3bee8f[_0x44f626(0x46f,0x28d,0x321,0x520)]=_0x3e173f,_0x3bee8f[_0x4aa842(0x7ea,0x9a9,0x85c,0x6cc)]=0x1;if(isLimit(sender,isPremium,isCreator,isOwner,limitawal,limit))return sendButMessage(from,lang[_0x44f626(0x79c,0x56a,0xa9c,0x695)](prefix),'©\x20'+ownername,[_0x3bee8f]);reply(lang[_0x44f626(0x8c7,0x877,0xb3b,0x7aa)]()),emoji[_0x4aa842(0x5e6,0x743,0x853,0x79d)](''+q5)['then'](async _0x20f4d8=>{const _0x30e2da={'xMsmq':function(_0x1e347f,_0x33ca99,_0x171134){return _0x1e347f(_0x33ca99,_0x171134);}};teks=''+_0x20f4d8[_0x412914(0x846,0x758,0x695,0x504)][-0x22ae+0x8a5*-0x2+0x3403*0x1]['url'],console['log'](teks),sendStickerFromUrl(from,''+teks);function _0x3ea177(_0x17feb8,_0x157e94,_0x47b8a8,_0x259450){return _0x4aa842(_0x17feb8-0x72,_0x157e94-0xd5,_0x47b8a8-0x1c0,_0x157e94);}function _0x412914(_0x31bad3,_0x5c9b8c,_0x41f611,_0x20f394){return _0x44f626(_0x20f394-0x84,_0x41f611,_0x41f611-0x167,_0x20f394-0x1bc);}await _0x30e2da[_0x3ea177(0x7d6,0x543,0x52e,0xabb)](limitAdd,sender,limit);});}if(sub_yt_zeeone_ofc=='Emoji-HTC-'+q5){const _0x3b1a30={};_0x3b1a30[_0x4aa842(0xb86,0xde3,0x99c,0xbfe)+'t']='Check\x20Limi'+'t';const _0xa97e92={};_0xa97e92['buttonId']='limit',_0xa97e92['buttonText']=_0x3b1a30,_0xa97e92[_0x4aa842(0x7ea,0x664,0xb29,0xb43)]=0x1;if(isLimit(sender,isPremium,isCreator,isOwner,limitawal,limit))return sendButMessage(from,lang['limit'](prefix),'©\x20'+ownername,[_0xa97e92]);emoji[_0x4aa842(0x5e6,0x58b,0x8c7,0x69a)](''+q5)[_0x44f626(0xab8,0xdb2,0xc01,0xb5e)](async _0x192601=>{function _0x8c0fe2(_0x479514,_0x2cf9ae,_0x5f144f,_0x1d4a50){return _0x44f626(_0x5f144f- -0xd4,_0x1d4a50,_0x5f144f-0x6f,_0x1d4a50-0x66);}const _0x10f6ab={'uTjWT':function(_0x54874c,_0x512f41,_0x176573){return _0x54874c(_0x512f41,_0x176573);}};teks=''+_0x192601[_0x8c0fe2(0x28a,0x31f,0x3ac,0x25c)][0x1*0x1010+0x1469+-0x246d][_0x54b8f4(0xba0,0xe7e,0xdc6,0xa1f)];function _0x54b8f4(_0x232e7d,_0xf5e64f,_0x12e706,_0x53844b){return _0x4aa842(_0x232e7d-0x78,_0xf5e64f-0x91,_0x12e706-0xa3,_0x12e706);}console[_0x8c0fe2(0x9e8,0x3b5,0x727,0x3cb)](teks),_0x10f6ab[_0x54b8f4(0xa7e,0x771,0x848,0xcda)](sendStickerFromUrl,from,''+teks),await _0x10f6ab[_0x54b8f4(0xa7e,0xaf6,0xaef,0x872)](limitAdd,sender,limit);});}
		switch (command) {
			case 'q': 
	if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
if (!m.quoted) return reply('reply message!')
let qse = alpha.serializeM(await m.getQuotedObj())
if (!qse.quoted) return reply('the message you replied does not contain a reply!')
await qse.quoted.copyNForward(m.chat, true)
break
case 'del' : case 'delete': case 'd':
try{
if(!isQuotedMsg)return reply('Reply pesan Bot!')
pp = {id:mek.message.extendedTextMessage.contextInfo.stanzaId, remoteJid: from, fromMe: true}
if (!isGroupAdmins && !mek.key.fromMe && !isOwner && !isCreator)return reply(mess.only.admin)
alpha.deleteMessage(from,pp)
} catch(e) {
reply('reply pesan botnya ')
reply(e)
console.log(e)
}
break
case 'getsider':
if (isLimit(sender, isPremium, isCreator, isOwner, limitawal, limit)) return sendButMessage(from, lang.limit(prefix), `© ${ownername}`, [{buttonId: 'limit', buttonText: {displayText: `Check Limit`, },type: 1,}]);
try {
if (!isGroup) return reply('Hanya bisa didalam gruop')
if (!isQuotedMsg) return reply('Reply pesan botnya')      
infom = await alpha.messageInfo(from, mek.message.extendedTextMessage.contextInfo.stanzaId)
hemm = infom.reads
hemms = infom.deliveries
readon = hemms.map(v => v.jid)
readdin = hemm.map(v => v.jid)
stamp = hemm.map(v => v.t)
      
function toTime(UNIXtimestamp, ribuan){
ribuan = (typeof ribuan == 'undefined') ? false : true;

let a = new Date(UNIXtimestamp);
if (ribuan) {
a = new Date(UNIXtimestamp * 1000);
} 	
// ambil pecahan waktu masing-masing
var hour = a.getHours();
var min = a.getMinutes();
var sec = a.getSeconds();
// gabungkan ke dalam variable time
var time = `${hour}:${min}:${sec}` ;
return time;
}

function toBulan(UNIXtimestamp, ribuan){
ribuan = (typeof ribuan == 'undefined') ? false : true;

let a = new Date(UNIXtimestamp);
if (ribuan) {
a = new Date(UNIXtimestamp * 1000);
} 
//buat index bulan
var months = ['Januari','Februari','Maret','April','Mei','Juni','Juli','Agustus','September','Oktober','Nopember','Desember'];
var myDays = ['Minggu','Senin','Selasa','Rabu','Kamis','Jum at','Sabtu'];  
// tanggal
var day = a.getDate()
bulanee = a.getMonth()
var thisDay = a.getDay(),
thisDay = myDays[thisDay];
var yy = a.getYear()
var year = (yy < 1000) ? yy + 1900 : yy;
var bul = `${thisDay}, ${day} - ${months[bulanee]} - ${year}` ;
return bul;
}
teksx = ` *READ*${enter}`
for (let i of hemm) {
teksx += `📍 Nama : @${i.jid.split('@')[0]}${enter}📍 Waktu : ${toTime(i.t, true)}${enter}📍 Tanggal : ${toBulan(i.t, true)}${enter}•${enter}`
}
teksx1 = ` *DELIVERED*${enter}${enter}`
for (let i of hemms){
teksx1 += `📍 Nama : @${i.jid.split('@')[0]}${enter}`
teksx1 += `📍 Waktu : ${toTime(i.t, true)}${enter}📍 Tanggal : ${toBulan(i.t, true)}${enter}•${enter}`
}
alpha.sendMessage(from, teksx, text, { sendEphemeral: true, quoted: mek, thumbnail: fs.readFileSync(`./image/${thumbnail}`), contextInfo: { forwardingScore:999, isForwarded: true, mentionedJid: readdin }})
alpha.sendMessage(from, teksx1, text, { sendEphemeral: true, quoted: mek, thumbnail: fs.readFileSync(`./image/${thumbnail}`), contextInfo: { forwardingScore:999, isForwarded: true, mentionedJid: readon }})
} catch(e) {
reply('reply pesan botnya ')
reply(e)
console.log(e)
}
await limitAdd(sender, limit)
break
case 'dompet':
					const kantong = checkATMuser(sender)
					reply(` *「 ATM USER 」* \n📛 *Nama* : ${pushname}\n🆔 *Nomer* : ${sender.split("@")[0]}\n💰 *Uang* : ${kantong}\n`)
					break
	case 'transfer':
				if (!q.includes('|')) return  reply('format salah')
                			const tujuan = q.substring(0, q.indexOf('|') - 1)
                			const jumblah = q.substring(q.lastIndexOf('|') + 1)
                			if(isNaN(jumblah)) return await reply('jumlah harus berupa angka!!')
                			if (jumblah < 100 ) return reply(`Minimal Transfer 100`)
                			if (checkATMuser(sender) < jumblah) return reply(`uang mu tidak mencukupi untuk melakukan transfer`)
                			const tujuantf = `${tujuan.replace("@", '')}`
               				fee = 0.005 *  jumblah
                			hasiltf = jumblah + fee
                			addKoinUser(`${tujuantf}@s.whatsapp.net`, hasiltf)
                			confirmATM(sender, hasiltf)
                			reply(`*「 SUKSES  」*\n\npengiriman uang telah sukses\ndari : +${sender.split("@")[0]}\nke : +${tujuan}\njumblah transfer : ${jumblah}\npajak : 30*jumblah`)
                			break
	case 'limit': case 'ceklimit': case 'balance': case 'glimit':
reply(`💳 Limit : ${isPremium ? 'Unlimited Premium' : `${getLimit(sender, limitawal, limit)} / ${limitawal}`}
🏧 Limit Game : ${cekGLimit(sender, gcount, glimit)} / ${gcount}
🏦 Balance : $${getBalance(sender, balance)}


Kamu Dapat Membeli Limit Dengan ${prefix}Buylimit *Nominal* Dan ${prefix}Buyglimit *Nominal* Untuk Membeli Game Limit

*Example :*
${prefix}buylimit 10
${prefix}buyglimit 10

NOTE : 
- Harga Limit Perlimit adalah $100 balance`)
break
case 'buylimit':{
if (!q) return reply(`Kirim perintah *${prefix}buylimit* jumlah limit yang ingin dibeli\n\nHarga 1 limit = $100 balance`)
if (q.includes('-')) return reply(`Jangan menggunakan -`)
if (isNaN(q)) return reply(`Harus berupa angka`)
let ane = Number(nebal(q) * 100)
if (getBalance(sender, balance) < ane) return reply(`Balance kamu tidak mencukupi untuk pembelian ini`)
kurangBalance(sender, ane, balance)
giveLimit(sender, nebal(q), limit)
reply(`Pembeliaan limit sebanyak ${q} berhasil

*🏧 Sisa Balance : $${getBalance(sender, balance)}*
*🏦 Sisa Limit : ${getLimit(sender, limitawal, limit)} / ${limitawal}*`)
}
break
case 'buyglimit':{
if (!q)return reply(`Example : ${prefix + command} 10\n\nHarga 1 limit = $100 balance`)
if (q.includes('-')) return reply(`Jangan menggunakan -`)
if (isNaN(q)) return reply(`Harus berupa angka`)
const koinPerlimit = 100
const total = koinPerlimit * q
if (getBalance(sender,balance) <= total) return reply(`maaf Balance kamu belum mencukupi. silahkan kumpulkan dan beli nanti`)
kurangBalance(sender, total, balance)
givegame(sender, q, glimit)
reply(`Pembeliaan game limit sebanyak ${q} berhasil

*💳 Sisa Balance : $${getBalance(sender, balance)}*
*💷 Sisa Game Limit : ${cekGLimit(sender, gcount, glimit)} / ${gcount}*`)
}
break
	case 'me': case 'myinfo': case 'info': case 'profile': case 'profil':{
		let bio_nya = await alpha.getStatus(sender)
		try {
			bio_user = `${bio_nya.status}`
		} catch {
			bio_user = '-'
			}
		try {
					pp_userb = await alpha.getProfilePicture(sender)
				} catch {
					pp_userb = 'https://i.ibb.co/rvsVF3r/5012fbb87660.png'
				}
			let pp_userz = await getBuffer(pp_userb)
let cek = ms( await premium.getPremiumExpired(sender, premium) - Date.now())
let userProcfile = `「 *USER INFO* 」

📛 Nama : ${pushname}
💋 Bio : ${bio_user}
🔗 Tag : @${sender.split("@")[0]}
💥 Api : wa.me/${sender.split("@")[0]}

💹 Limit : ${isPremium ? 'Unlimited Premium' : `${getLimit(sender, limitawal, limit)} / ${limitawal}`}
💳 Game Limit : ${cekGLimit(sender, gcount, glimit)} / ${gcount}
💷 Balance : $${getBalance(sender, balance)}
👛 Dompet : ${checkATMuser(sender)}
💱 Role : ${role}
🏧 Level : ${getLevelingLevel(sender)}
🏦 Xp : ${getLevelingXp(sender)}

💌 Status : ${isPremium? `Premium User` : `Free user`}
⏰ Expired Prem : ${isPremium ? 'Unlimited Premium' : ` ${cek.days} d, ${cek.hours} h, ${cek.minutes} m, ${cek.seconds} s`}
👨‍ Register : ${isRegister? `Done`:`Belum Daftar`}
🚫 Baned : ${isBanned?`True`:`False`}`
let papakpo = [{
										"buttonId": `inv`,
										"buttonText": {
											"displayText": "INVENTORY"
											},
										"type": "RESPONSE"
										},{
										"buttonId": `sewabot`,
										"buttonText": {
											"displayText": "SEWA"
											},
										"type": "RESPONSE"
										}]
								sendButLocation(from, userProcfile , `NOTE ！\nJika whatsapp mod kamu belum support button silahkan tonton video ini https://youtu.be/ERGID4Fmo9w\n\n© ${ownername}`,pp_userz, papakpo, {contextInfo: { mentionedJid: [sender]}})
}
break
	case 'verify': case 'daftar':{
	let bio_nya = await alpha.getStatus(sender)
		try {
			bio_user = `${bio_nya.status}`
		} catch {
			bio_user = '-'
			}
			try {
					pp_userb = await alpha.getProfilePicture(sender)
				} catch {
					pp_userb = 'https://i.ibb.co/rvsVF3r/5012fbb87660.png'
				}
			let pp_userz = await getBuffer(pp_userb)
 if (isRegister) return reply('Kamu sudah terdaftar di dalam database')
 addRegisterUser(sender, pushname, bio_user, wib)
 let ran_blc = randomNomor(50)
 addBalance(sender, ran_blc, balance)
fs.writeFileSync('./database/user/register.json', JSON.stringify(register))
teks = `╭─❒ *Verification*\n│ *Nama :* ${pushname}\n│ *Nomor :* @${sender.split('@')[0]}\n│ *Bio :* ${bio_user}\n│ *Time :* ${wib}\n╰❒ *Success*`
let papako = [{
										"buttonId": `menu`,
										"buttonText": {
											"displayText": "MENU"
											},
										"type": "RESPONSE"
										},{
										"buttonId": `me`,
										"buttonText": {
											"displayText": "PROCFILE"
											},
										"type": "RESPONSE"
										}]
								sendButLocation(from, teks , `Thank for verification\n© ${ownername}`,pp_userz, papako, {contextInfo: { mentionedJid: [sender]}})
                }
break
	case 'menu': case 'help':{
			try {
				chatt = await alpha.getProfilePicture(sender)
				} catch {
				chatt = 'https://l.top4top.io/p_20670hd6v1.jpg'
				}
			let ch = await getBuffer(chatt)
			try{
			hit_total = await fetchJson('https://api.countapi.xyz/hit/api-alphabot.herokuapp.com/visits')
			} catch {
				hit_total = { 
					value : "-"
					}
				}
				hitall = `${hit_total.value}`
koko = `${targetpc}@s.whatsapp.net`
let content = fs.readFileSync(`image/${thumbnail}`)
const media = await alpha.prepareMessage(from, content, MessageType.image, { thumbnail:fs.readFileSync(`image/${thumbnail}`)})
let bacotlu = media.message["ephemeralMessage"] ? media.message.ephemeralMessage : media
let p1 = await alpha.getStatus(sender)
anunya = process.uptime()
ini_anu =`${ucapannya2}

╭─❒ 「 Bot Info 」 
├ Creator :  @${koko.split('@')[0]}
├ Powered  : @${ini_mark.split('@')[0]}
├ Prefix :   ${prefix}
├ Total hit : ${hitall}
├ Hit today : ${hit_today.length}
├ Speed : ${latensii.toFixed(4)} Second
├ Hostname : ${os.hostname()}
├ Platform : ${os.platform()}
├ Runtime : ${kyun(runtime)}
├ Battery : ${isBattre}
╰❒ Charging : ${isCharge}

╭─❒ 「 User Info 」 
├ Name : ${pushname}
├ Bio : ${p1 ? `${p1.status}` : '-'}
├ Nomor : @${sender.split('@')[0]}
├ Me : ${mek.key.fromMe ? 'True' : 'False'}
╰❒ Owner : ${isOwner ? 'True' : `False`}
`
if(typemenu == 'document'){
sendButDoc(from, ini_anu, `Please Don't spam bot, pause 3 seconds per command!\n`, sender, koko, ini_mark)
} 
if(typemenu == 'troli'){
sendTroli(ini_anu + '\n\n' + allmenu(kyun, os, prefix, wita, wit, ucapannya2, timuu, status, wa_version, mcc, mnc, os_version, device_manufacturer, device_model, alfa , alfa1, thisDay, ini_tanggal, totalchat, hit_today, ini_gcchat, latensii),{quoted : mek, "contextInfo": {"mentionedJid": [sender, koko, ini_mark]}})
} 
if(typemenu == 'troli2'){
sendTroli2(ini_anu + '\n\n' + allmenu(kyun, os, prefix, wita, wit, ucapannya2, timuu, status, wa_version, mcc, mnc, os_version, device_manufacturer, device_model, alfa , alfa1, thisDay, ini_tanggal, totalchat, hit_today, ini_gcchat, latensii),{quoted : mek,"contextInfo": {"mentionedJid": [sender, koko, ini_mark]}})
} 
if(typemenu == 'katalog'){
sendKatalog2(ini_anu + '\n\n' + allmenu(kyun, os, prefix, wita, wit, ucapannya2, timuu, status, wa_version, mcc, mnc, os_version, device_manufacturer, device_model, alfa , alfa1, thisDay, ini_tanggal, totalchat, hit_today, ini_gcchat, latensii), {quoted : mek,"contextInfo": {"mentionedJid": [sender, koko, ini_mark]}})
} 
if(typemenu == 'katalog2'){
sendKatalog3(ini_anu + '\n\n' + allmenu(kyun, os, prefix, wita, wit, ucapannya2, timuu, status, wa_version, mcc, mnc, os_version, device_manufacturer, device_model, alfa , alfa1, thisDay, ini_tanggal, totalchat, hit_today, ini_gcchat, latensii) , {quoted : mek,"contextInfo": {"mentionedJid": [sender, koko, ini_mark]}})
} 
if(typemenu == 'list'){
sendList(sender)
} 
if(typemenu == 'image'){
sendButImage(from,  ini_anu + '\n\n' + allmenu(kyun, os, prefix, wita, wit, ucapannya2, timuu, status, wa_version, mcc, mnc, os_version, device_manufacturer, device_model, alfa , alfa1, thisDay, ini_tanggal, totalchat, hit_today, ini_gcchat, latensii) , `© ${ownername}`,pp_bot, [{"buttonId": `owner`,"buttonText": {"displayText": "👨‍💻 Owner"},"type": "RESPONSE"},{"buttonId": `donasi`,"buttonText": {"displayText": "💰 Donate"},"type": "RESPONSE"}], {"contextInfo": {"mentionedJid": [sender, koko, ini_mark]}, thumbnail: pp_bot, quoted: mek})
}
if(typemenu == 'location'){ 
let content1 = fs.readFileSync(`image/${thumbnail}`)
const media1 = await alpha.prepareMessage(from, content1, MessageType.location, {thumbnail: content1})
let bacotlu1 = media1.message["ephemeralMessage"] ? media1.message.ephemeralMessage : media1

const buttons1 = [
  {buttonId: 'owner', buttonText: {displayText: '⋮☰ OWNER'}, type: 1},
  {buttonId: 'botstat', buttonText:{displayText: '✓ STATISTIC'}, type: 1}
]

const btn1 = {
    contentText: ini_anu + '\n\n' + allmenu(kyun, os, prefix, wita, wit, ucapannya2, timuu, status, wa_version, mcc, mnc, os_version, device_manufacturer, device_model, alfa , alfa1, thisDay, ini_tanggal, totalchat, hit_today, ini_gcchat, latensii),
    footerText: `${tampilTanggal}${enter}${tampilWaktu}${enter}${enter}Regard @${koko.split('@')[0]}`,
    buttons: buttons1,
    headerType: 6,
    locationMessage: bacotlu1.message.locationMessage
}

alpha.sendMessage(from,  btn1, MessageType.buttonsMessage,{
        caption: 'Botwea ©2K22',
        "contextInfo": {
            text: 'hi',
            "forwardingScore": 1000000000,
            isForwarded: true,
            sendEphemeral: true,
            "mentionedJid" : [sender,koko,ini_mark],
            },
			quoted: fkontak,sendEphemeral: true 
			})
}
}
break
case 'kerangcmd':{
var quotejamzk = await getBuffer(kerangcmd)
sendButLocation(from, kerangmenu(prefix), `${tampilTanggal}${enter}${tampilWaktu}${enter}${enter}Regard @${ini_mark.split('@')[0]}`, quotejamzk, [{buttonId: 'Command', buttonText: {displayText: '⋮☰ BACK'}, type: 1},{buttonId: 'owner', buttonText:{displayText: '✓ OWNER'}, type: 1}], {contextInfo:{"mentionedJid" : [ini_mark]}})
}
break
case 'primboncmd':{
var quotejamzk = await getBuffer(primboncmd)
sendButLocation(from, primbonmenu(prefix), `${tampilTanggal}${enter}${tampilWaktu}${enter}${enter}Regard @${ini_mark.split('@')[0]}`, quotejamzk, [{buttonId: 'Command', buttonText: {displayText: '⋮☰ BACK'}, type: 1},{buttonId: 'owner', buttonText:{displayText: '✓ OWNER'}, type: 1}], {contextInfo:{"mentionedJid" : [ini_mark]}})
}
break
case 'soundcmd':{
var quotejamzk = await getBuffer(soundcmd)
sendButLocation(from, soundmenu(prefix), `${tampilTanggal}${enter}${tampilWaktu}${enter}${enter}Regard @${ini_mark.split('@')[0]}`, quotejamzk, [{buttonId: 'Command', buttonText: {displayText: '⋮☰ BACK'}, type: 1},{buttonId: 'owner', buttonText:{displayText: '✓ OWNER'}, type: 1}], {contextInfo:{"mentionedJid" : [ini_mark]}})
}
break
case 'quotescmd':{
var quoteamzk = await getBuffer(quotescmd)
sendButLocation(from, quotesmenu(prefix), `${tampilTanggal}${enter}${tampilWaktu}${enter}${enter}Regard @${ini_mark.split('@')[0]}`, quoteamzk, [{buttonId: 'Command', buttonText: {displayText: '⋮☰ BACK'}, type: 1},{buttonId: 'owner', buttonText:{displayText: '✓ OWNER'}, type: 1}], {contextInfo:{"mentionedJid" : [ini_mark]}})
}
break
case 'groupcmd':{
var jakkja  = await getBuffer(groupcmd)
sendButLocation(from, groupmenu(prefix), `${tampilTanggal}${enter}${tampilWaktu}${enter}${enter}Regard @${ini_mark.split('@')[0]}`, jakkja, [{buttonId: 'Command', buttonText: {displayText: '⋮☰ BACK'}, type: 1},{buttonId: 'owner', buttonText:{displayText: '✓ OWNER'}, type: 1}], {contextInfo:{"mentionedJid" : [ini_mark]}})
}
break
case 'animecmd':{
var animkzka = await getBuffer(animecmd)
sendButLocation(from, animemenu(prefix), `${tampilTanggal}${enter}${tampilWaktu}${enter}${enter}Regard @${ini_mark.split('@')[0]}`, animkzka, [{buttonId: 'Command', buttonText: {displayText: '⋮☰ BACK'}, type: 1},{buttonId: 'owner', buttonText:{displayText: '✓ OWNER'}, type: 1}], {contextInfo:{"mentionedJid" : [ini_mark]}})
}
break
case 'convertcmd':{
var converkdk = await getBuffer(convertcmd)
sendButLocation(from, convertmenu(prefix), `${tampilTanggal}${enter}${tampilWaktu}${enter}${enter}Regard @${ini_mark.split('@')[0]}`, converkdk, [{buttonId: 'Command', buttonText: {displayText: '⋮☰ BACK'}, type: 1},{buttonId: 'owner', buttonText:{displayText: '✓ OWNER'}, type: 1}], {contextInfo:{"mentionedJid" : [ini_mark]}})
}
break
case 'nsfwcmd':{
var nsfwkak = await getBuffer(nsfwcmd)
sendButLocation(from, nsfwmenu(prefix), `${tampilTanggal}${enter}${tampilWaktu}${enter}${enter}Regard @${ini_mark.split('@')[0]}`, nsfwkak, [{buttonId: 'Command', buttonText: {displayText: '⋮☰ BACK'}, type: 1},{buttonId: 'owner', buttonText:{displayText: '✓ OWNER'}, type: 1}], {contextInfo:{"mentionedJid" : [ini_mark]}})
}
break
case 'asupancmd':{
var asupanak = await getBuffer(asupancmd)
sendButLocation(from, asupanmenu(prefix), `${tampilTanggal}${enter}${tampilWaktu}${enter}${enter}Regard @${ini_mark.split('@')[0]}`, asupanak, [{buttonId: 'Command', buttonText: {displayText: '⋮☰ BACK'}, type: 1},{buttonId: 'owner', buttonText:{displayText: '✓ OWNER'}, type: 1}], {contextInfo:{"mentionedJid" : [ini_mark]}})
}
break
case 'downloadcmd':{
var downloadlsl = await getBuffer(downloadcmd)
sendButLocation(from, downloadmenu(prefix), `${tampilTanggal}${enter}${tampilWaktu}${enter}${enter}Regard @${ini_mark.split('@')[0]}`, downloadlsl, [{buttonId: 'Command', buttonText: {displayText: '⋮☰ BACK'}, type: 1},{buttonId: 'owner', buttonText:{displayText: '✓ OWNER'}, type: 1}], {contextInfo:{"mentionedJid" : [ini_mark]}})
}
break
case 'funcmd':{
var funmenujs = await getBuffer(funcmd)
sendButLocation(from, funmenu(prefix), `${tampilTanggal}${enter}${tampilWaktu}${enter}${enter}Regard @${ini_mark.split('@')[0]}`, funmenujs, [{buttonId: 'Command', buttonText: {displayText: '⋮☰ BACK'}, type: 1},{buttonId: 'owner', buttonText:{displayText: '✓ OWNER'}, type: 1}], {contextInfo:{"mentionedJid" : [ini_mark]}})
}
break
case 'makercmd':{
var makermenksk = await getBuffer(makercmd)
sendButLocation(from, makermenu(prefix), `${tampilTanggal}${enter}${tampilWaktu}${enter}${enter}Regard @${ini_mark.split('@')[0]}`, makermenksk, [{buttonId: 'Command', buttonText: {displayText: '⋮☰ BACK'}, type: 1},{buttonId: 'owner', buttonText:{displayText: '✓ OWNER'}, type: 1}], {contextInfo:{"mentionedJid" : [ini_mark]}})
}
break
case 'textprocmd':{
var textjskzb = await getBuffer(textprocmd)
sendButLocation(from, textpromenu(prefix), `${tampilTanggal}${enter}${tampilWaktu}${enter}${enter}Regard @${ini_mark.split('@')[0]}`, textjskzb, [{buttonId: 'Command', buttonText: {displayText: '⋮☰ BACK'}, type: 1},{buttonId: 'owner', buttonText:{displayText: '✓ OWNER'}, type: 1}], {contextInfo:{"mentionedJid" : [ini_mark]}})
}
break
case 'photooxycmd':{
var pdkdk = await getBuffer(photooxycmd)
sendButLocation(from, photooxymenu(prefix), `${tampilTanggal}${enter}${tampilWaktu}${enter}${enter}Regard @${ini_mark.split('@')[0]}`, pdkdk, [{buttonId: 'Command', buttonText: {displayText: '⋮☰ BACK'}, type: 1},{buttonId: 'owner', buttonText:{displayText: '✓ OWNER'}, type: 1}], {contextInfo:{"mentionedJid" : [ini_mark]}})
}
break
case 'othercmd':{
var othendjke = await getBuffer(othercmd)
sendButLocation(from, othermenu(prefix), `${tampilTanggal}${enter}${tampilWaktu}${enter}${enter}Regard @${ini_mark.split('@')[0]}`, othendjke, [{buttonId: 'Command', buttonText: {displayText: '⋮☰ BACK'}, type: 1},{buttonId: 'owner', buttonText:{displayText: '✓ OWNER'}, type: 1}], {contextInfo:{"mentionedJid" : [ini_mark]}})
}
break
case 'ownercmd':{
var ownermenjdu = await getBuffer(ownercmd)
sendButLocation(from, ownermenu(prefix), `${tampilTanggal}${enter}${tampilWaktu}${enter}${enter}Regard @${ini_mark.split('@')[0]}`, ownermenjdu, [{buttonId: 'Command', buttonText: {displayText: '⋮☰ BACK'}, type: 1},{buttonId: 'owner', buttonText:{displayText: '✓ OWNER'}, type: 1}], {contextInfo:{"mentionedJid" : [ini_mark]}})
}
break
case 'storagecmd':{
var storagemsn = await getBuffer(storagecmd)
sendButLocation(from, storagemenu(prefix), `${tampilTanggal}${enter}${tampilWaktu}${enter}${enter}Regard @${ini_mark.split('@')[0]}`, storagemsn, [{buttonId: 'Command', buttonText: {displayText: '⋮☰ BACK'}, type: 1},{buttonId: 'owner', buttonText:{displayText: '✓ OWNER'}, type: 1}], {contextInfo:{"mentionedJid" : [ini_mark]}})
}
break
case 'tagcmd':{
var tagmwnjn = await getBuffer(tagcmd)
sendButLocation(from, tagmenu(prefix), `${tampilTanggal}${enter}${tampilWaktu}${enter}${enter}Regard @${ini_mark.split('@')[0]}`, tagmwnjn, [{buttonId: 'Command', buttonText: {displayText: '⋮☰ BACK'}, type: 1},{buttonId: 'owner', buttonText:{displayText: '✓ OWNER'}, type: 1}], {contextInfo:{"mentionedJid" : [ini_mark]}})
}
break
case 'upcmd':{
var upmenuj = await getBuffer(upcmd)
sendButLocation(from, upmenu(prefix), `${tampilTanggal}${enter}${tampilWaktu}${enter}${enter}Regard @${ini_mark.split('@')[0]}`, upmenuj, [{buttonId: 'Command', buttonText: {displayText: '⋮☰ BACK'}, type: 1},{buttonId: 'owner', buttonText:{displayText: '✓ OWNER'}, type: 1}], {contextInfo:{"mentionedJid" : [ini_mark]}})
}
break
case 'cecancmd':{
var cecanksk = await getBuffer(cecancmd)
sendButLocation(from, cecanmenu(prefix), `${tampilTanggal}${enter}${tampilWaktu}${enter}${enter}Regard @${ini_mark.split('@')[0]}`, cecanksk, [{buttonId: 'Command', buttonText: {displayText: '⋮☰ BACK'}, type: 1},{buttonId: 'owner', buttonText:{displayText: '✓ OWNER'}, type: 1}], {contextInfo:{"mentionedJid" : [ini_mark]}})
}
break
case 'cogancmd':{
var coganksk = await getBuffer(cogancmd)
sendButLocation(from, coganmenu(prefix), `${tampilTanggal}${enter}${tampilWaktu}${enter}${enter}Regard @${ini_mark.split('@')[0]}`, coganksk, [{buttonId: 'Command', buttonText: {displayText: '⋮☰ BACK'}, type: 1},{buttonId: 'owner', buttonText:{displayText: '✓ OWNER'}, type: 1}], {contextInfo:{"mentionedJid" : [ini_mark]}})
}
break
case 'telegramcmd':{
var telesjtje = await getBuffer(telegramcmd)
sendButLocation(from, telestiker(prefix), `${tampilTanggal}${enter}${tampilWaktu}${enter}${enter}Regard @${ini_mark.split('@')[0]}`, telesjtje, [{buttonId: 'Command', buttonText: {displayText: '⋮☰ BACK'}, type: 1},{buttonId: 'owner', buttonText:{displayText: '✓ OWNER'}, type: 1}], {contextInfo:{"mentionedJid" : [ini_mark]}})
}
break
case 'imageeffectcmd':{
var imagekskwo = await getBuffer(imageeffectcmd)
sendButLocation(from, image_effect(prefix), `${tampilTanggal}${enter}${tampilWaktu}${enter}${enter}Regard @${ini_mark.split('@')[0]}`, imagekskwo, [{buttonId: 'Command', buttonText: {displayText: '⋮☰ BACK'}, type: 1},{buttonId: 'owner', buttonText:{displayText: '✓ OWNER'}, type: 1}], {contextInfo:{"mentionedJid" : [ini_mark]}})
}
break
case 'ephoto360cmd':{
var coganksk = await getBuffer(ephoto360cmd)
sendButLocation(from, ephoto360menu(prefix), `${tampilTanggal}${enter}${tampilWaktu}${enter}${enter}Regard @${ini_mark.split('@')[0]}`, coganksk, [{buttonId: 'Command', buttonText: {displayText: '⋮☰ BACK'}, type: 1},{buttonId: 'owner', buttonText:{displayText: '✓ OWNER'}, type: 1}], {contextInfo:{"mentionedJid" : [ini_mark]}})
}
break
case 'logocmd':{
var telesjtje = await getBuffer(logocmd)
sendButLocation(from, logomenu(prefix), `${tampilTanggal}${enter}${tampilWaktu}${enter}${enter}Regard @${ini_mark.split('@')[0]}`, telesjtje, [{buttonId: 'Command', buttonText: {displayText: '⋮☰ BACK'}, type: 1},{buttonId: 'owner', buttonText:{displayText: '✓ OWNER'}, type: 1}], {contextInfo:{"mentionedJid" : [ini_mark]}})
}
break
case 'islamiccmd':{
var imagekskwo = await getBuffer(islamiccmd)
sendButLocation(from, islamicmenu(prefix), `${tampilTanggal}${enter}${tampilWaktu}${enter}${enter}Regard @${ini_mark.split('@')[0]}`, imagekskwo, [{buttonId: 'Command', buttonText: {displayText: '⋮☰ BACK'}, type: 1},{buttonId: 'owner', buttonText:{displayText: '✓ OWNER'}, type: 1}], {contextInfo:{"mentionedJid" : [ini_mark]}})
}
break

case 'setmenu':
if (!isOwner && !isCreator && !mek.key.fromMe) return reply(lang.onlyOwner())
const listhades = ['document', 'image', 'troli', 'troli2', 'katalog', 'katalog2', 'list', 'location']
listMsg = {
 buttonText: 'SET MENU',
 footerText: `© ${ownername}`,
 description: `Pilih tampilan menu sesukamu`,
 sections: [
                     {
                      "title": `SET MENU`,
 rows: [
                          {
                              "title": "document",
                              "rowId": "setmenu document"
                           },
                           {
                              "title": "image",
                              "rowId": "setmenu image"
                           },
                           {
                              "title": "troli",
                              "rowId": "setmenu troli"
                           },
                           {
                              "title": "troli2",
                              "rowId": "setmenu troli2"
                           },
                           {
                              "title": "katalog",
                              "rowId": "setmenu katalog"
                           },
                           {
                              "title": "katalog2",
                              "rowId": "setmenu katalog2"
                           },
                           {
                              "title": "list",
                              "rowId": "setmenu list"
                           },
                           {
                              "title": "location",
                              "rowId": "setmenu location"
                           }
                        ]
                     }],
 listType: 1
}
if (!listhades.includes(q)) return alpha.sendMessage(from, listMsg, MessageType.listMessage, {quoted: mek})
//reply(`*Example :*${enter}•${prefix + command} location\n•${prefix + command} document\n•${prefix + command} list\n•${prefix + command} troli\n•${prefix + command} troli2\n•${prefix + command} katalog\n•${prefix + command} katalog2\n`)
typemenu = q
reply(lang.success())
break
case 'setlang':
         if (!isOwner && !isCreator && !mek.key.fromMe) return reply(lang.onlyOwner())
if(args[0] == 'ind'){
lang = ind
reply('Sukses mengubah bahasa ke ind')
}else if(args[0] == 'eng'){
lang = eng
reply('Success changing language to eng')
}else if(args[0] == 'es'){
lang = es
reply('Éxito cambiando el idioma a es')
}else if(args[0] == 'ml'){
lang = ml
reply('ഭാഷയിലേക്ക് മാറ്റുന്നതിൽ വിജയം ml')
}else if(args[0] == 'pt'){
lang = pt
reply('Sucesso ao alterar o idioma para pt')
}else if(args[0] == 'ru'){
lang = ru
reply('Успешно сменил язык на ru')
}else {
reply(`Example : ${prefix + command} eng\n\nAvailable\n•ind - Indonesia\n•eng - English\n•es - Spanish\n•ml - Malayalam\n•pt - Portugis\n•ru - Russian`)
}
break
                case 'allmenu':{
                	try{
			hit_total = await fetchJson('https://api.countapi.xyz/hit/api-alphabot.herokuapp.com/visits')
			} catch {
				hit_total = { 
					value : "-"
					}
				}
				hitall = `${hit_total.value}`
koko = `${targetpc}@s.whatsapp.net`
let content = fs.readFileSync(`image/${thumbnail}`)
const media = await alpha.prepareMessage(from, content, MessageType.image, { thumbnail:fs.readFileSync(`image/${thumbnail}`)})
let bacotlu = media.message["ephemeralMessage"] ? media.message.ephemeralMessage : media
let p1 = await alpha.getStatus(sender)
anunya = process.uptime()
ini_anu =`${ucapannya2}

╭─❒ 「 Bot Info 」 
├ Creator :  @${koko.split('@')[0]}
├ Powered  : @${ini_mark.split('@')[0]}
├ Prefix :   ${prefix}
├ Total hit : ${hitall}
├ Hit today : ${hit_today.length}
├ Speed : ${latensii.toFixed(4)} Second
├ Hostname : ${os.hostname()}
├ Platform : ${os.platform()}
├ Runtime : ${kyun(runtime)}
├ Battery : ${isBattre}
╰❒ Charging : ${isCharge}

╭─❒ 「 User Info 」 
├ Name : ${pushname}
├ Bio : ${p1 ? `${p1.status}` : '-'}
├ Nomor : @${sender.split('@')[0]}
├ Me : ${mek.key.fromMe ? 'True' : 'False'}
╰❒ Owner : ${isOwner ? 'True' : `False`}
`
                try {
					pp_userb = await alpha.getProfilePicture(sender)
				} catch {
					pp_userb = 'https://i.ibb.co/rvsVF3r/5012fbb87660.png'
				}
			let pp_userz = await getBuffer(pp_userb)
                let papao = [{
										"buttonId": `owner`,
										"buttonText": {
											"displayText": "OWNER"
											},
										"type": "RESPONSE"
										},{
										"buttonId": `sewabot`,
										"buttonText": {
											"displayText": "SEWA"
											},
										"type": "RESPONSE"
										}]
								sendButLocation(from, ini_anu + '\n\n' + allmenu(kyun, os, prefix, wita, wit, ucapannya2, timuu, status, wa_version, mcc, mnc, os_version, device_manufacturer, device_model, alfa , alfa1, thisDay, ini_tanggal, totalchat, hit_today, ini_gcchat, latensii), `NOTE ！\nJika whatsapp mod kamu belum support button silahkan tonton video ini https://youtu.be/ERGID4Fmo9w\n\n© ${ownername}`,pp_userz, papao, { contextInfo: {"mentionedJid": [sender, koko, ini_mark]}})}
                break
        case 'trigger':
					reply ('Mungkin yg kamu maksud .triggered')
					await limitAdd(sender, limit)
					break
					case 'sampah':
					if (isLimit(sender, isPremium, isCreator, isOwner, limitawal, limit)) return sendButMessage(from, lang.limit(prefix), `© ${ownername}`, [{buttonId: 'limit', buttonText: {displayText: `Check Limit`, },type: 1,}]);
				 if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
	                 ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek 
					reply(lang.wait())
					console.log(color(time, 'magenta'), color('Downloading sticker...'))
					media = await alpha.downloadMediaMessage(ger)
					njay = await uploadImages(media)
                    titid = await fetchJson(`https://nekobot.xyz/api/imagegen?type=trash&url=${njay}`, {method: 'get'})
                    buffer = await getBuffer(titid.message)
					alpha.sendMessage(from, buffer, image, {caption : lang.success(),quoted: mek})
                   }
                   await limitAdd(sender, limit)
              break       
		case 'triggered':case 'gay': case 'glass': case 'passed': case 'jail': case 'comrade':case 'green': case 'blue': case 'sepia': case 'wasted': case 'greyscale': case 'blurple2': case 'blurple': case 'red': case 'invertgreyscale': case 'invert':{
		if (isLimit(sender, isPremium, isCreator, isOwner, limitawal, limit)) return sendButMessage(from, lang.limit(prefix), `© ${ownername}`, [{buttonId: 'limit', buttonText: {displayText: `Check Limit`, },type: 1,}]);
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
					ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek 
					reply(lang.wait())
					owgi = await alpha.downloadMediaMessage(ger)
				    anu = await uploadImages(owgi)
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu4 = `https://some-random-api.ml/canvas/${command}?avatar=${anu}`
					exec(`wget ${anu4} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
					fs.unlinkSync(ranp)
					if (err) return reply(lang.tryAgain())
					alpha.sendMessage(from, fs.readFileSync(rano), sticker, {quoted: mek})
					fs.unlinkSync(rano)
					})
					} else {
					reply(`Reply Foto Dengan Caption ${prefix + command}`)

					}
					await limitAdd(sender, limit)}
					break 
					case 'jadian':
					if (isLimit(sender, isPremium, isCreator, isOwner, limitawal, limit)) return sendButMessage(from, lang.limit(prefix), `© ${ownername}`, [{buttonId: 'limit', buttonText: {displayText: `Check Limit`, },type: 1,}]);
jds = []
jdii = groupMembers
koss = groupMembers
akuu = jdii[Math.floor(Math.random() * jdii.length)]
diaa = koss[Math.floor(Math.random() * koss.length)]
teks = `Ciee.. yang lagi jadian @${akuu.jid.split('@')[0]}  (♥️ ) @${diaa.jid.split('@')[0]} `
jds.push(akuu.jid)
jds.push(diaa.jid)
mentions(teks, jds, true)
await limitAdd(sender, limit)
break
   case 'group': 
   case 'gc': 
                if (!isGroup) return reply(lang.onlygc());
        if (!isGroupAdmins && !isBotGroupAdmins) return reply(lang.onlygcAdmin());
        if (args[0] == "open") {
          await alpha.groupSettingChange(from, GroupSettingChange.messageSend, false)
					reply('S U C C E S S  O P E N I N G  G R O U P')
        } else if (args[0] == "close") {
          await alpha.groupSettingChange(from, GroupSettingChange.messageSend, true)
					reply('S U C C E S S  C L O S I N G  G R O U P')
        } else if (!q) {
        	var ini_gopayy =`Halo @${sender.split("@")[0]} Gunakan ${prefix + command } Open / Close jika button tidak merespon`
var buttonss = [
{buttonId: 'group open', buttonText:{displayText: 'Open'}, type: 1},
{buttonId: 'group close', buttonText:{displayText: 'Close'}, type: 1}
]

buttonMessagee = {
contentText: ini_gopayy,
footerText: `${tampilTanggal}\n${tampilWaktu}\n\n© ${creator}` ,
buttons: buttonss,
headerType: 1
}
alpha.sendMessage(from,  buttonMessagee, MessageType.buttonsMessage,{
        caption: 'Botwea ©2K22',
        "contextInfo": {
            text: 'hi',
            "forwardingScore": 1000000000,
            isForwarded: true,
            sendEphemeral: true,
            "mentionedJid" : [sender]
            },
			quoted: ftroli,sendEphemeral: true 
			})
        }
        break
            case 'mystat': 
            case 'botstat': 
            case 'botstatus': 
			case 'mystatus':
				anu = process.uptime()
                teskny = `B O T  S T A T I S T I C\n`
				teskny +=`\`\`\`Group Chat : ${giid.length}\`\`\`\n`
				teskny +=`\`\`\`Personal Chat : ${totalchat.length - giid.length}\`\`\`\n`
				teskny +=`\`\`\`Total Chat : ${totalchat.length}\`\`\`\n`
				teskny +=`\`\`\`Speed :\`\`\` ${latensii.toFixed(4)} _Second_\n`
				teskny +=`\`\`\`Runtime : ${(kyun(os.uptime()))}\`\`\`\n\n` 
				teskny +=`P H O N E  S T A T I S T I C\n`
				teskny +=`\`\`\`Wa Whatsapp : ${wa_version}\`\`\`\n`
				teskny +=`\`\`\`RAM : ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB\`\`\`\n`
				teskny +=`\`\`\`MCC : ${mcc}\`\`\`\n`
				teskny +=`\`\`\`MNC : ${mnc}\`\`\`\n`
				teskny +=`\`\`\`OS Version : ${os_version}\`\`\`\n`
				teskny +=`\`\`\`Merk Hp : ${device_manufacturer}\`\`\`\n`
				teskny +=`\`\`\`Versi Hp : ${device_model}\`\`\`\n`
				teskny +=`\`\`\`Runtime : ${(kyun(os.uptime()))}\`\`\``
				alpha.sendMessage(from, teskny, text, {quoted: { key : { participant : `0@s.whatsapp.net`, "remoteJid":  '6283136505591-1614953337@g.us', "fromMe": false, "id": "B391837A58338BA8186C47E51FFDFD4A" }, "message": { "documentMessage": { "jpegThumbnail": fs.readFileSync(`image/${thumbnail}`), "mimetype": "application/octet-stream","title": `${fake}`, "fileLength": "36", "pageCount": 0, "fileName": `${fake}`}}, "messageTimestamp": "1614069378", "status": "PENDING"},contextInfo:{"forwardingScore":999,"isForwarded":true},sendEphemeral: true})
break
case 'getbio':
				if (!isGroup) return reply(lang.onlygc())
				if (args.length < 1) return reply('```TAG ORANGNYA```')
                mentionedd = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
                const p = await alpha.getStatus(`${mentionedd}`, MessageType.text)
                reply(p.status)
                if (p.status == 401) {
                reply("Error! mungkin diprivate")
                }
                await limitAdd(sender, limit)
                break
/*case 'creategroup':
case 'creategrup':
			    if (!isGroup) return reply(lang.onlygc())
				if (args.length < 1) return reply(`Penggunaan ${prefix}creategrup nama grup|@tag member`)
				argza = arg.split('|')
				if (mek.message.extendedTextMessage != undefined){
                    mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
                    for (let i = 0; i < mentioned.length; i++){
						anu = []
						anu.push(mentioned[i])
                    }
					alpha.groupCreate(argza[0], anu)
					reply(`Sukes membuat grup:\n${argza}`)
                }
				break*/
		case 'caripesan':
		    case 'searchmessage':
		if (isLimit(sender, isPremium, isCreator, isOwner, limitawal, limit)) return sendButMessage(from, lang.limit(prefix), `© ${ownername}`, [{buttonId: 'limit', buttonText: {displayText: `Check Limit`, },type: 1,}]);
				if (!q) return reply(`Penggunaan ${command} _nama pesannya_\n\nContoh \n --> ${command} halo`)
				reply(lang.wait())
				 xtext = args.join(' ')
				                cond = xtext.split(" ")
				                 a = await alpha.searchMessages(xtext, from, 10, 1)// count 10 
				                 fox = '*「 Message Search 」*\n\n'
				                num = 0
				                for (j of a.messages){
				                    num += 1
				                    if (j.message.conversation) {
				                        if (j.key.fromMe){ 
				                            fox += num+'. Sender : '+alpha.user.jid+'\n    Msg : '+j.message.conversation+'\n    MsgID : '+j.key.id+'\n    Type : conversation\n\n'
				                        }else{
				                            fox += num+'. Sender : '+j.key.participant+'\n    Msg : '+j.message.conversation+'\n    MsgID : '+j.key.id+'\n    Type : conversation\n\n'
				                        } 
				                    }
				                    else if (j.message.extendedTextMessage){
				                        if (j.key.fromMe){ 
				                            fox += num+'. Sender : '+alpha.user.jid+'\n    Msg : '+j.message.extendedTextMessage.text+'\n    MsgID : '+j.key.id+'\n    Type : extendedTextMessage\n\n'
				                        }else{
				                            fox += num+'. Sender : '+j.key.participant+'\n    Msg : '+j.message.extendedTextMessage.text+'\n    MsgID : '+j.key.id+'\n    Type : extendedTextMessage\n\n'
				                        } 
				                    }
				                }
				                reply(fox)
				await limitAdd(sender, limit)
		                break
case 'setname':
					if (!isGroup) return reply(lang.onlygc())
					if (!isGroupAdmins) return reply(lang.onlygcAdmin())
					if (!isBotGroupAdmins) return reply(lang.botNotAdm())
					alpha.groupUpdateSubject(from, `${body.slice(9)}`)
					alpha.sendMessage(from, '「  SUKSES  」Mengubah Nama Grup', text, { quoted: fdoc })
					await limitAdd(sender, limit)
					break 
case 'setdesc':
					if (!isGroup) return reply(lang.onlygc())
					if (!isGroupAdmins) return reply(lang.onlygcAdmin())
					if (!isBotGroupAdmins) return reply(lang.botNotAdm())
					alpha.groupUpdateDescription(from, `${body.slice(9)}`)
					alpha.sendMessage(from, '*「  SUKSES  」Mengubah Desk Grup', text, { quoted: fdoc })
					await limitAdd(sender, limit)
					break   
case 'spam':
if (!isGroup) return reply(lang.onlygc())
				if (!isGroupAdmins) return reply(lang.onlygcAdmin())
				if (args.length < 1) return reply(`Penggunaan ${prefix}spam teks|jumlahspam`)
				argzi = args.split("|")
				if (!argzi) return reply(`Penggunaan ${prefix}spam teks|jumlah`)
				if (isNaN(argzi[1])) return reply(`harus berupa angka`)
				for (let i = 0; i < argzi[1]; i++){
					alpha.sendMessage(from, argzi[0], MessageType.text)
				}
				await limitAdd(sender, limit)
					break    
case 'readall':
					if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
					var chats = await alpha.chats.all()
                    chats.map( async ({ jid }) => {
                          await alpha.chatRead(jid)
                    })
					rdl = `Berhasil membaca ${chats.length} Chat !`
					reply(rdl)
					console.log(chats.length)
					break
case 'listpc':
					  if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
					  cpcp = await getpc(totalchat)
					  teks = `*L I S T  P E R S O N A L  C H A T*\nTOTAL PC: ${cpcp.length}\n\n`
					  for(let i=0; i<cpcp.length; i++){
						conts = mek.key.fromMe ? mek.user.jid : alpha.contacts[cpcp[i]] || {notify: jid.replace(/@.+/, '')}
						pushnama = alpha.contacts[cpcp[i]] != undefined ? alpha.contacts[cpcp[i]].vname || alpha.contacts[cpcp[i]].notify : undefined
						teks += `• Name : ${pushnama}\n• Tag : @${cpcp[i].split("@")[0]}\n• Wa.me : wa.me/${cpcp[i].split("@")[0]}\n\n----------------------------------\n\n`
					}
					mentions( teks, cpcp, true)
					break 
case 'listgroup':
case 'listgrup':
case 'listgc':
case 'listgrop':
case 'gruplist':
case 'groplist':
case 'grouplist':
if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
const txs = alpha.chats.all().filter(v => v.jid.endsWith('g.us')).map(v =>`•> ${alpha.getName(v.jid)}${enter}${v.jid}\n[${v.read_only ? 'Left' : 'Joined'}]`).join`${enter}~~${enter}`
alpha.sendMessage(m.chat, '```「 LIST GROUPS 」```\n\n' + txs, text)
break
				   break 
case 'bcsticker':
case 'bcstik':{
					if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
					let anu = await alpha.chats.all()
					if (isMedia && !mek.message.videoMessage || isQuotedSticker) {
						const encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						let bc = await alpha.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							alpha.sendMessage(_.jid, bc, sticker, {quoted:ftroli})
						}
						reply('Suksess broadcast')
					}}
					break
case 'bcvideo':{
					if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
					let anu = await alpha.chats.all()
					if (isMedia && !mek.message.videoMessage || isQuotedVideo) {
						const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						let bc = await alpha.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							alpha.sendMessage(_.jid, bc, video, {mimetype: 'video/mp4', duration: 359996400,quoted: mek,caption: `[ *${botname} BROADCAST* ]\n\n${body.slice(9)}`})
						}
						reply(lang.successBc())
					}}
					break
	case 'bcaudio':{
					if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
					anu = await alpha.chats.all()
					if (isMedia && !mek.message.audioMessage || isQuotedAudio) {
						const encmedia = isQuotedAudio ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						let bc = await alpha.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							alpha.sendMessage(_.jid, bc, audio, {mimetype :  'audio/mpeg' , duration : 359996400, ptt : true,quoted: mek})
						}
						reply(lang.successBc())
					}}
					break
case 'bcgif':{
					if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
					let anu = await alpha.chats.all()
					if (isMedia && !mek.message.videoMessage || isQuotedVideo) {
						const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						let bc = await alpha.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							alpha.sendMessage(_.jid, bc, sticker, {mimetype: Mimetype.gif,quoted : ftroli})
						}
						reply(lang.successBc())
					}}
					break
         case 'owner':
         case 'creator': {
         let ini_list = []
					for (let i of global.ownerbot) {
					const vname = alpha.contacts[i] != undefined ? alpha.contacts[i].vname || alpha.contacts[i].notify : undefined
					ini_list.push({
					"displayName": 'Owner Alphabot',
					"vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:${vname ? `${vname}` : `${alpha.user.name}`}\nORG: Creator Bot WhatsApp;\nitem1.TEL;waid=${i.split('@')[0]}:${i.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`
					})
					}
					hehe = await alpha.sendMessage(from, {
					"displayName": `${ini_list.length} kontak`,
					"contacts": ini_list 
					}, 'contactsArrayMessage', { quoted: fkontak})
					var ini_gopayy =`Halo @${sender.split("@")[0]} itu owner ku, jangan lupa donasi kak😇`
var buttonss = [
{buttonId: 'donasi', buttonText:{displayText: 'Donasi'}, type: 1},
{buttonId: 'sewabot', buttonText:{displayText: 'Sewa'}, type: 1}
]

buttonMessagee = {
contentText: ini_gopayy,
footerText: `\n© ${creator}` ,
buttons: buttonss,
headerType: 1
}
alpha.sendMessage(from,  buttonMessagee, MessageType.buttonsMessage,{contextInfo: {"mentionedJid": [sender]}})}
					break
                case 'sider':
                shape = '✓ '
infom = await alpha.messageInfo(from, mek.message.extendedTextMessage.contextInfo.stanzaId)
tagg = []
teks = `Telah Dibaca Oleh :\n\n`
for(let i of infom.reads){
teks += shape+' ' + '@' + i.jid.split('@')[0] + '\n'
teks += `> Waktu : ` + moment(`${i.t}` * 1000).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss') + '\n\n'
tagg.push(i.jid)
}
mentions(teks, tagg, true)
await limitAdd(sender, limit)
					break   
			case 'fakeloc':
			if (isLimit(sender, isPremium, isCreator, isOwner, limitawal, limit)) return sendButMessage(from, lang.limit(prefix), `© ${ownername}`, [{buttonId: 'limit', buttonText: {displayText: `Check Limit`, },type: 1,}]);
               var kntl = body.slice(8)
			   var nama = kntl.split("|")[0];
			   var impostor = kntl.split("|")[1];
			   var bro = fs.readFileSync(`image/${thumbnail}`)
               alpha.sendMessage(from, { name: `${nama}`,address: `${impostor}`,jpegThumbnail: bro }, MessageType.location)                
		    await limitAdd(sender, limit)
					break   
		    case 'on':
		            if (!mek.key.fromMe && !isOwner && !isCreator) return 
		            offline = false
		            fakeitem(lang.ownerOn())
		            break       
		    case 'status':
		            fakeitem(`*STATUS*\n${offline ? '> OFFLINE' : '> ONLINE'}\n${banChats ? '> SELF-MODE' : '> PUBLIC-MODE'}`)
		            break
		    case 'off':
		            if (!mek.key.fromMe && !isOwner && !isCreator) return 
		            offline = true
		            waktu = Date.now()
		            anuu = args.join(' ') ? args.join(' ') : '-'
		            alasan = anuu
		            fakeitem(lang.ownerOff())
		            break   
		    case 'get': case 'fetch': {
		if (isLimit(sender, isPremium, isCreator, isOwner, limitawal, limit)) return sendButMessage(from, lang.limit(prefix), `© ${ownername}`, [{buttonId: 'limit', buttonText: {displayText: `Check Limit`, },type: 1,}]);
             if (!/^https?:\/\//.test(q)) return reply('Awali *URL* dengan http:// atau https://')
             res = await fetch(q)
             txtx = await res.buffer()
             try {
             txtx = util.format(JSON.parse(txtx+''))
             } catch (e) {
             txtx = txtx + ''
             } finally {
             reply(txtx.slice(0, 65536) + '')
}
		            await limitAdd(sender, limit)}
					break   
		    case 'kontag':
					if (!isGroupAdmins && isGroup) return reply(lang.onlygcAdmin())
					pe = args.join('')
		            entah = pe.split('|')[0]
		            nah = pe.split('|')[1]
		            if (isNaN(entah)) return reply('Invalid phone number');
		            members_ids = []
		            for (let mem of groupMembers) {
		            members_ids.push(mem.jid)
		            }
		            vcard = 'BEGIN:VCARD\n'
		            + 'VERSION:3.0\n'
		            + `FN:${nah}\n`
		            + `TEL;type=CELL;type=VOICE;waid=${entah}:${phoneNum('+' + entah).getNumber('internasional')}\n`
		            + 'END:VCARD'.trim()
		            alpha.sendMessage(from, {displayName: `${nah}`, vcard: vcard}, contact, {contextInfo: {"mentionedJid": members_ids}})
		            await limitAdd(sender, limit)
					break   
		    case 'sticktag':
		            if (!isGroupAdmins && isGroup) return reply(lang.onlygcAdmin())
				    if ((isMedia && !mek.message.videoMessage || isQuotedSticker) && args.length == 0) {
		            encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
		            file = await alpha.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
		            value = args.join(" ")
		            var group = await alpha.groupMetadata(from)
		            var member = group['participants']
		            var mem = []
		            member.map(async adm => {
		            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
		            })
		            var options = {
		                contextInfo: { mentionedJid: mem },
		                quoted: mek
		            }
		            ini_buffer = fs.readFileSync(file)
		            alpha.sendMessage(from, ini_buffer, sticker, options)
		            fs.unlinkSync(file)
		            } else {
		            reply(`*Reply sticker yang sudah dikirim*`)
		            }
		            await limitAdd(sender, limit)
					break   
		    case 'totag':
		            if (!isGroupAdmins && isGroup) return reply(lang.onlygcAdmin())
		            if ((isMedia && !mek.message.videoMessage || isQuotedSticker) && args.length == 0) {
		            encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
		            file = await alpha.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
		            value = args.join(" ")
		            var group = await alpha.groupMetadata(from)
		            var member = group['participants']
		            var mem = []
		            member.map(async adm => {
		            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
		            })
		            var options = {
		                contextInfo: { mentionedJid: mem },
		                quoted: mek
		            }
		            ini_buffer = fs.readFileSync(file)
		            alpha.sendMessage(from, ini_buffer, sticker, options)
		            fs.unlinkSync(file)
		            } else if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
		            encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
		            file = await alpha.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
		            value = args.join(" ")
		            var group = await alpha.groupMetadata(from)
		            var member = group['participants']
		            var mem = []
		            member.map(async adm => {
		            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
		            })
		            var options = {
		                contextInfo: { mentionedJid: mem },
		                quoted: mek
		            }
		            ini_buffer = fs.readFileSync(file)
		            alpha.sendMessage(from, ini_buffer, image, options)
		            fs.unlinkSync(file)
		        } else if ((isMedia && !mek.message.videoMessage || isQuotedAudio) && args.length == 0) {
		            encmedia = isQuotedAudio ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
		            file = await alpha.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
		            value = args.join(" ")
		            var group = await alpha.groupMetadata(from)
		            var member = group['participants']
		            var mem = []
		            member.map(async adm => {
		            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
		            })
		            var options = {
		            	mimetype : 'audio/mpeg',
		            	ptt : true,
		                contextInfo: { mentionedJid: mem },
		                quoted: mek
		            }
		            ini_buffer = fs.readFileSync(file)
		            alpha.sendMessage(from, ini_buffer, audio, options)
		            fs.unlinkSync(file)
		        }  else if ((isMedia && !mek.message.videoMessage || isQuotedVideo) && args.length == 0) {
		            encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
		            file = await alpha.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
		            value = args.join(" ")
		            var group = await alpha.groupMetadata(from)
		            var member = group['participants']
		            var mem = []
		            member.map(async adm => {
		            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
		            })
		            var options = {
		            	mimetype : 'video/mp4',
		                contextInfo: { mentionedJid: mem },
		                quoted: mek
		            }
		            ini_buffer = fs.readFileSync(file)
		            alpha.sendMessage(from, ini_buffer, video, options)
		            fs.unlinkSync(file)
		        } else{
		          reply(`reply gambar/sticker/audio/video dengan caption ${prefix}totag`)
		        }
		        await limitAdd(sender, limit)
					break   
		    case 'fitnah':{
		if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
		            if (args.length < 1) return reply(`Usage :\n${prefix}fitnah [@tag|pesan|balasanbot]]\n\nEx : \n${prefix}fitnah @tagmember|hai|hai juga`)
		            var gh = args.join('')
		            mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
		            var replace = gh.split("|")[0];
		            var target = gh.split("|")[1];
		            var bot = gh.split("|")[2];
		            alpha.sendMessage(from, `${bot}`, text, {quoted: { key: { fromMe: false, participant: `${mentioned}`, ...(from ? { remoteJid: from } : {}) }, message: { conversation: `${target}` }}})
		            }
			break
		    case 'settarget':
		if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
		            if(!q) return reply(`${prefix}settarget 628xxxxx`)
		            targetpc = args[0]
		            reply(`Succes Mengganti target fitnahpc : ${targetpc}`)
		            break
		    case 'fitnahpc':
		if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
		            if(!q) return reply(`${prefix}fitnahpc teks target|teksny`)
		            jids = `${targetpc}@s.whatsapp.net` // nomer target
		            var splitt = args.join(' ').replace(/@|\d/gi, '').split('|')
		            var taged = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
		            var options = {contextInfo: {quotedMessage: {extendedTextMessage: {text: splitt[0]}}}}
		            const responye = await alpha.sendMessage(jids, `${splitt[1]}`, MessageType.text, options)
		            await alpha.deleteMessage(jids, { id: responye.messageID, remoteJid: jids, fromMe: true })
		            break
		    case 'tomp3':{
		if (isLimit(sender, isPremium, isCreator, isOwner, limitawal, limit)) return sendButMessage(from, lang.limit(prefix), `© ${ownername}`, [{buttonId: 'limit', buttonText: {displayText: `Check Limit`, },type: 1,}]);
		            if (!isQuotedVideo) return reply('```Reply videonya!```')
		            reply(mess.wait)
		            let encmedia2 = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
		            let media2 = await alpha.downloadAndSaveMediaMessage(encmedia2)
		            ran = getRandom('.mp4')
		            exec(`ffmpeg -i ${media2} ${ran}`, (err) => {
		            fs.unlinkSync(media2)
		            if (err) return reply(`Err: ${err}`)
		            let buffer453 = fs.readFileSync(ran)
		            alpha.sendMessage(from, buffer453, audio, { mimetype: 'audio/mpeg', quoted: mek })
		            fs.unlinkSync(ran)
		            })
		            await limitAdd(sender, limit)}
					break   
		    case 'fast':{
		if (isLimit(sender, isPremium, isCreator, isOwner, limitawal, limit)) return sendButMessage(from, lang.limit(prefix), `© ${ownername}`, [{buttonId: 'limit', buttonText: {displayText: `Check Limit`, },type: 1,}]);
		            if (!isQuotedVideo) return reply('Reply videonya!')
		            reply(mess.wait)
		            let encmedia3 = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
		            let media3 = await alpha.downloadAndSaveMediaMessage(encmedia3)
		            ran = getRandom('.mp4')
		            exec(`ffmpeg -i ${media3} -filter_complex "[0:v]setpts=0.5*PTS[v];[0:a]atempo=2[a]" -map "[v]" -map "[a]" ${ran}`, (err) => {
		            fs.unlinkSync(media3)
		            if (err) return reply(`Err: ${err}`)
		            let buffer453 = fs.readFileSync(ran)
		            alpha.sendMessage(from, buffer453, video, { mimetype: 'video/mp4', quoted: mek })
		            fs.unlinkSync(ran)
		            })
		            await limitAdd(sender, limit)}
					break   
		    case 'slow':{
		if (isLimit(sender, isPremium, isCreator, isOwner, limitawal, limit)) return sendButMessage(from, lang.limit(prefix), `© ${ownername}`, [{buttonId: 'limit', buttonText: {displayText: `Check Limit`, },type: 1,}]);
		            if (!isQuotedVideo) return reply('Reply videonya!')
		            reply(mess.wait)
		            let encmedia4 = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
		            let media4 = await alpha.downloadAndSaveMediaMessage(encmedia4)
		            ran = getRandom('.mp4')
		            exec(`ffmpeg -i ${media4} -filter_complex "[0:v]setpts=2*PTS[v];[0:a]atempo=0.5[a]" -map "[v]" -map "[a]" ${ran}`, (err) => {
		            fs.unlinkSync(media4)
		            if (err) return reply(`Err: ${err}`)
		            let buffer453 = fs.readFileSync(ran)
		            alpha.sendMessage(from, buffer453, video, { mimetype: 'video/mp4', quoted: mek })
		            fs.unlinkSync(ran)
		            })
		            await limitAdd(sender, limit)}
					break   
		case 'tupai':{
		if (isLimit(sender, isPremium, isCreator, isOwner, limitawal, limit)) return sendButMessage(from, lang.limit(prefix), `© ${ownername}`, [{buttonId: 'limit', buttonText: {displayText: `Check Limit`, },type: 1,}]);
var encmedia6 = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
var media6 = await alpha.downloadAndSaveMediaMessage(encmedia6)
ran = getRandom('.mp3')
exec(`ffmpeg -i ${media6} -filter:a "atempo=0.5,asetrate=65100" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(media6)
if (err) return reply('Error!')
let hah = fs.readFileSync(ran)
alpha.sendMessage(from, hah, audio, {mimetype: 'audio/mpeg', ptt:true, quoted: mek})
fs.unlinkSync(ran)
})
await limitAdd(sender, limit)}
					break   
		    case 'reverse':{
		if (isLimit(sender, isPremium, isCreator, isOwner, limitawal, limit)) return sendButMessage(from, lang.limit(prefix), `© ${ownername}`, [{buttonId: 'limit', buttonText: {displayText: `Check Limit`, },type: 1,}]);
		            if (!isQuotedVideo) return reply('```Reply videonya!```')
		           var encmedia5 = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
		          var media5 = await alpha.downloadAndSaveMediaMessage(encmedia5)
		            ran = getRandom('.mp4')
		            exec(`ffmpeg -i ${media5} -vf reverse -af areverse ${ran}`, (err) => {
		            fs.unlinkSync(media5)
		            if (err) return reply(`Err: ${err}`)
		            buffer453 = fs.readFileSync(ran)
		            alpha.sendMessage(from, buffer453, video, { mimetype: 'video/mp4', quoted: mek })
		            fs.unlinkSync(ran)
		            })
		            await limitAdd(sender, limit)}
					break   
		    case 'anime2':
					if (isLimit(sender, isPremium, isCreator, isOwner, limitawal, limit)) return sendButMessage(from, lang.limit(prefix), `© ${ownername}`, [{buttonId: 'limit', buttonText: {displayText: `Check Limit`, },type: 1,}]);
		            fetch('https://raw.githubusercontent.com/pajaar/grabbed-results/master/pajaar-2020-gambar-anime.txt')
		            .then(res => res.text())
		            .then(body => {
		            let tod = body.split("\n");
		            let pjr = tod[Math.floor(Math.random() * tod.length)];
		            imageToBase64(pjr)
		            .then((response) => {
		            media =  Buffer.from(response, 'base64');
		            alpha.sendMessage(from,media,image,{quoted:mek,caption:'Dasar wibu. Nih!!!\nJgn lupa sub YT : ZEEONE OFC'})
		            }
		            )
		            .catch((error) => {
		            console.log(error); 
		            }
		            )
		            });
		            await limitAdd(sender, limit)
					break   
		    case 'kontak':
		if (isLimit(sender, isPremium, isCreator, isOwner, limitawal, limit)) return sendButMessage(from, lang.limit(prefix), `© ${ownername}`, [{buttonId: 'limit', buttonText: {displayText: `Check Limit`, },type: 1,}]);
		            pe = args.join(' ') 
		            entah = pe.split('|')[0]
		            nah = pe.split('|')[1]
		            if (isNaN(entah)) return reply('Invalid phone number');
		            vcard = 'BEGIN:VCARD\n'
		            + 'VERSION:3.0\n'
		            + `FN:${nah}\n`
		            + `TEL;type=CELL;type=VOICE;waid=${entah}:${phoneNum('+' + entah).getNumber('internasional')}\n`
		            + 'END:VCARD'.trim()
		            alpha.sendMessage(from, {displayName: `${nah}`, vcard: vcard}, contact)
		            await limitAdd(sender, limit)
					break   
		    case 'take':
		    case 'colong':
		if (!isPremium) return sendButMessage(from, `Mohon maaf fitur ini khusus untuk user premium saja! Upgrade akun mu sekarang dengan cara ketik ${prefix}goprem`, `Click button below`, [{buttonId: 'goprem',buttonText: {displayText: `Upgrade Premium`,},type: 1,}],{quoted:mek});
		if (!isQuotedSticker) return reply('```Reply stc nya```')
		            var encmedia_ = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
				    var media_ = await alpha.downloadAndSaveMediaMessage(encmedia_)
		            anu = args.join(' ').split('|')
		            satu = anu[0] !== '' ? anu[0] : `SUBSCRIBE`
		            dua = typeof anu[1] !== 'undefined' ? anu[1] : `ZEEONE OFC`
		            require('./lib/fetcher.js').createExif(satu, dua)
					require('./lib/fetcher.js').modStick(media_ , alpha, mek, from)
					await limitAdd(sender, limit)
					break   
			case 'stikerwm':
			case 'stickerwm':
		    case 'swm':
		if (!isPremium) return sendButMessage(from, `Mohon maaf fitur ini khusus untuk user premium saja! Upgrade akun mu sekarang dengan cara ketik ${prefix}goprem`, `Click button below`, [{buttonId: 'goprem',buttonText: {displayText: `Upgrade Premium`,},type: 1,}],{quoted:mek});
		            pe = args.join('')
		            var a = pe.split("|")[0];
		            var b = pe.split("|")[1];
		            if (isMedia && !mek.message.videoMessage || isQuotedImage ) {
		            const encmedia___ = isQuotedImage   ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
		             media___ = await alpha.downloadAndSaveMediaMessage(encmedia___)
		            await createExif(a,b)
		            out = getRandom('.webp')
		            ffmpeg(media___)
		            .on('error', (e) => {
		            console.log(e)
		            alpha.sendMessage(from, 'Terjadi kesalahan', 'conversation', { quoted: mek })
		            fs.unlinkSync(media___)
		            })
		            .on('end', () => {
		            _out = getRandom('.webp')
		            spawn('webpmux', ['-set','exif','./sticker/data.exif', out, '-o', _out])
		            .on('exit', () => {
		            alpha.sendMessage(from, fs.readFileSync(_out),'stickerMessage', { quoted: mek })
		            fs.unlinkSync(out)
		            fs.unlinkSync(_out)
		            fs.unlinkSync(media___)
		            })
		            })
		            .addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
		            .toFormat('webp')
		            .save(out) 
		            } else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
		            const encmedia___ = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
		            const media___ = await alpha.downloadAndSaveMediaMessage(encmedia___)
		            pe = args.join('')
		            var a = pe.split("|")[0];
		            var b = pe.split("|")[1];
		            await createExif(a,b)
		            out = getRandom('.webp')
		            ffmpeg(media___)
		            .on('error', (e) => {
		            console.log(e)
		            alpha.sendMessage(from, 'Terjadi kesalahan', 'conversation', { quoted: mek })
		            fs.unlinkSync(media___)
		            })
		            .on('end', () => {
		            _out = getRandom('.webp')
		            spawn('webpmux', ['-set','exif','./sticker/data.exif', out, '-o', _out])
		            .on('exit', () => {
		            alpha.sendMessage(from, fs.readFileSync(_out),'stickerMessage', { quoted: mek })
		            fs.unlinkSync(out)
		            fs.unlinkSync(_out)
		            fs.unlinkSync(media___)
		            })
		            })
		            .addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
		            .toFormat('webp')
		            .save(out)       
		            } else {
		            reply(`Kirim gambar dengan caption ${prefix}swm teks|teks atau tag gambar yang sudah dikirim`)
		            }
		            await limitAdd(sender, limit)
					break   
		    case 'upswteks':
		            if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
		            if (!q) return reply('Isi teksnya!')
		            alpha.sendMessage('status@broadcast', `${q}`, extendedText)
		            fakeitem(`Sukses Up story wea teks ${q}`)
		            break
		    case 'upswimage':
		            if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
		            if (isQuotedImage) {
		            const swsw = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
		            cihcih = await alpha.downloadMediaMessage(swsw)
		            alpha.sendMessage('status@broadcast', cihcih, image, { caption: `${q}` })
		            bur = `Sukses Upload Story Image dengan Caption: ${q}`
		            alpha.sendMessage(from, bur, text, { quoted: mek })
		            } else {
		            reply('```Reply gambarnya!```')
		            }
		            break
		    case 'upswvideo':
		            if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
		            if (isQuotedVideo) {
		            const swsw = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
		            cihcih = await alpha.downloadMediaMessage(swsw)
		            alpha.sendMessage('status@broadcast', cihcih, video, { caption: `${q}` }) 
		            bur = `Sukses Upload Story Video dengan Caption: ${q}`
		            alpha.sendMessage(from, bur, text, { quoted: mek })
		            } else {
		            reply('```Reply videonya!```')
		            }
		            break
		    case 'fdeface':
		            ge = args.join('')           
		            var pe = ge.split("|")[0];
		            var pen = ge.split("|")[1];
		            var pn = ge.split("|")[2];
		            var be = ge.split("|")[3];
		            const fde = `kirim/reply image dengan capion ${prefix}fdeface link|title|desc|teks`
		            if (args.length < 1) return reply (fde)
		            const dipes = isQuotedSticker || isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
		            const tipes = await alpha.downloadAndSaveMediaMessage(dipes)        
		            const bufer = fs.readFileSync(tipes)
		            const desc = `${pn}`
		            const title = `${pen}`
		            const url = `${pe}`
		            const buu = `https://${be}`
		    		var anu = {
		        	detectLinks: false
		    		}
		    		var mat = await alpha.generateLinkPreview(url)
		    		mat.title = title;
		    		mat.description = desc;
		    		mat.jpegThumbnail = bufer;
		   			mat.canonicalUrl = buu; 
		    		alpha.sendMessage(from, mat, MessageType.extendedText, anu)
		            await limitAdd(sender, limit)
					break   
		    case 'public':
		              if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
		          	if (banChats === false) return sendButMessage(from, `「 *PUBLIC-MODE* 」`, `Click self to return to self mode`, [{buttonId: 'self',buttonText: {displayText: `Self Mode`,},type: 1,}], {quoted: mek});
		          	banChats = false
		          	//fakeitem(`「 *PUBLIC-MODE* 」`)
						sendButMessage(from, `「 *PUBLIC-MODE* 」`, `Click self to return to self mode`, [{buttonId: 'self',buttonText: {displayText: `Self Mode`,},type: 1,}], {quoted: mek});
        break;
			case 'self':
			          if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
		          	if (banChats === true) return sendButMessage(from, `「 *SELF-MODE* 」`, `Click public to return to public mode`, [{buttonId: 'public',buttonText: {displayText: `Public Mode`,},type: 1,}], {quoted: mek});
		          	banChats = true
		          	sendButMessage(from, `「 *SELF-MODE* 」`, `Click public to return to public mode`, [{buttonId: 'public',buttonText: {displayText: `Public Mode`,},type: 1,}], {quoted: mek});
        break;
		case 'revoke':
if (!isGroup) return reply(lang.onlygc())
					if (!isGroupAdmins) return reply(lang.onlygcAdmin())
await alpha.revokeInvite(from)
reply(lang.success())
break
		 	
				case 'sewacheck':
				case 'ceksewa':
							if (!isGroup) return reply(lang.onlygc())
							if (!isSewa) return reply(`Group ini tidak terdaftar dalam list sewabot. Ketik ${prefix}sewabot untuk info lebih lanjut`)
							let cekvip = ms(_sewa.getSewaExpired(from, sewa) - Date.now())
							let premiumnya = `*「 SEWA EXPIRED 」*\n\n📛 *ID*: ${from}\n⏰ *Expired :* ${cekvip.days} day(s) ${cekvip.hours} hour(s) ${cekvip.minutes} minute(s)`
							reply(premiumnya)
							break
				case 'sewa':
							if (!isGroup)return reply(lang.onlygc())
							if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
							if (args.length < 1) return reply(`Penggunaan :\n*${prefix}sewa* add/del waktu`)
							if (args[0] === 'add'){
								_sewa.addSewaGroup(from, args[1], sewa)
								reply(lang.success())
								} else if (args[0] === 'del'){
									sewa.splice(_sewa.getSewaPosition(from, sewa), 1)
									fs.writeFileSync('./src/sewa.json', JSON.stringify(sewa))
									reply(lang.success())
									} else {
										reply(`Example : *${prefix}sewa* add/del waktu`)
										}
							break
				case 'sewalist': 
				case 'listsewa':
							let txtnyee = `*「 LIST SEWA」*\nJumlah : ${sewa.length}\n\n`
							for (let i of sewa){
								let cekvipp = ms(i.expired - Date.now())
								txtnyee += `🆔 *ID :* ${i.id} \n⏰ *Expire :* ${cekvipp.days} day(s) ${cekvipp.hours} hour(s) ${cekvipp.minutes} minute(s) ${cekvipp.seconds} second(s)\n\n`
								}
							reply(txtnyee)
							break
				case 'premium': case 'prem':
							if (args.length === 0) return reply(`Kirim perintah *${prefix}premium* add/del 62xxx waktu (misal 1 hari -> 1d)\nExample:\n${prefix}premium add 62887435047326 1d`)
							if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
							if (args[0] === 'add') {
								if (mek.message.extendedTextMessage != undefined) {
									mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
									premium.addPremiumUser(mentioned[0], args[2], _premium)
									reply(`*「 PREMIUM ADDED 」*\n\n📛 *ID*: ${mentioned[0]}\n⏰ *Expired*: ${ms(toMs(args[2])).days} day(s) ${ms(toMs(args[2])).hours} hour(s) ${ms(toMs(args[2])).minutes} minute(s)`)
									} else {
										premium.addPremiumUser(args[1] + '@s.whatsapp.net', args[2], _premium)
										reply(`*「 PREMIUM ADDED 」*\n\n📛 *ID*: ${args[1]}@s.whatsapp.net\n⏰ *Expired*: ${ms(toMs(args[2])).days} day(s) ${ms(toMs(args[2])).hours} hour(s) ${ms(toMs(args[2])).minutes} minute(s)`)
										}
										} else if (args[0] === 'del') {
											if (mek.message.extendedTextMessage != undefined) {
									mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
									_premium.splice(premium.getPremiumPosition(mentioned[0], _premium), 1)
									fs.writeFileSync('./src/premiun.json', JSON.stringify(_premium))
									reply(lang.success())
									} else {
										_premium.splice(premium.getPremiumPosition(args[1] + '@s.whatsapp.net', _premium), 1)
										fs.writeFileSync('./src/premiun.json', JSON.stringify(_premium))
										reply(lang.success())
										}
										} else {
											reply('emror')
											}
							break
				case 'premiumcheck': case 'cekpremium': 
							if (!isPremium) return reply(`Akun kamu belum premium silahkan ${prefix}buypremium`)
							const cekExp = ms(await premium.getPremiumExpired(sender, _premium) - Date.now())
							reply(`*「 PREMIUM EXPIRED 」*\n\n🆔 *ID*: ${sender}\n🏦 *Premium left*: ${cekExp.days} day(s) ${cekExp.hours} hour(s) ${cekExp.minutes} minute(s)`)
							break
				case 'listprem': case 'listpremium':
							let txt = `「 *PREMIUM USER LIST* 」\n\n`
							let men = [];
							for (let i of _premium){
								men.push(i.id)
								const checkExp = ms(i.expired - Date.now())
								txt += `🆔 *ID :* @${i.id.split("@")[0]}\n⏰ *Expired*: ${checkExp.days} day(s) ${checkExp.hours} hour(s) ${checkExp.minutes} minute(s)\n\n`
								}
								mentions(txt, men, true)
							break
				case 'payment': case 'pay': case 'donasi': case 'donate':
				alpha.sendMessage(from, fs.readFileSync(`./image/${donasi}`), image, {caption: captionpay, quoted: mek, thumbnail: fs.readFileSync(`./image/${donasi}`)})
				break
				case 'belipremium': case 'buypremium': case 'sewabot': case 'goprem':
							let sewalak = await getBuffer('https://telegra.ph/file/5e96a14f1ebaee0df2e24.jpg')
							sendButLocation(from, pc_sewa() , `©  ${ownername}`,sewalak,  [{"buttonId": `payment`,"buttonText": {"displayText": "PAYMENT"},"type": "RESPONSE"}], {})
							break
				case 'gcbot': case 'grupbot': case 'groupbot':
							let gcbot = await getBuffer('https://telegra.ph/file/09d4f9b77a0745f35bdfa.jpg')
							reply('Group bot telah di kirim ke private chat')
							sendButLocation(sender, gcbotwa() , `©  ${ownername}`,gcbot,  [{"buttonId": `sewabot`,"buttonText": {"displayText": "SEWABOT"},"type": "RESPONSE"}], {})
							break
				case 'infobot':
				let infobopot = await getBuffer('https://telegra.ph/file/06fad83011a4b1cecd4ba.jpg')
							sendButLocation(from, infobot(status, offline, latensii, totalchat, giid, wa_version, mcc, mnc, os_version, device_manufacturer, device_model, ownerNumberrr,runtime, kyun) , `©  ${ownername}`,infobopot,  [{"buttonId": 'gcbot',"buttonText": {"displayText": "GROUP BOT"},"type": "RESPONSE"}], {contextInfo:{"mentionedJid": [ownerNumberrr]}})
							break
		case 'sticker': case 'stikerin':
				case 'stiker': case 's':{
						if (isLimit(sender, isPremium, isCreator, isOwner, limitawal, limit)) return sendButMessage(from, lang.limit(prefix), `© ${ownername}`, [{buttonId: 'limit', buttonText: {displayText: `Check Limit`, },type: 1,}]);
						if (isMedia && !mek.message.videoMessage || isQuotedImage) {
							const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
							const media = await alpha.downloadAndSaveMediaMessage(encmedia, `./sticker/${sender}`)
							exif.create('Created By', 'ZeeoneOfc', `stickwm_${sender}`)
							//ran = getRandom('.webp')
                        await ffmpeg(`./${media}`)
                            .input(media)
                            .on('start', function (cmd) {
                                console.log(`Started : ${cmd}`)
                            })
                            .on('error', function (err) {
                                console.log(`Error : ${err}`)
                                fs.unlinkSync(media)
                                 })
                            .on('end', async function () {
                                console.log('Finish')
                                exec(`webpmux -set exif ./sticker/stickwm_${sender}.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
								if (error) return reply(lang.tryAgain())
								await alpha.sendMessage(from, fs.readFileSync(`./sticker/${sender}.webp`), sticker, {quoted: fgif})
								fs.unlinkSync(media)	
									fs.unlinkSync(`./sticker/${sender}.webp`)	
                                    fs.unlinkSync(`./sticker/stickwm_${sender}.exif`)
								})
								})
                           .addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(`./sticker/${sender}.webp`)
                    } else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
                        const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
                        const media = await alpha.downloadAndSaveMediaMessage(encmedia)
                        exif.create('Created By', 'ZeeoneOfc', `stickwm_${sender}`)
                    //    ran = getRandom('.webp')
                        await ffmpeg(`./${media}`)
                            .inputFormat(media.split('.')[1])
                            .on('start', function (cmd) {
                                console.log(`Started : ${cmd}`)
                            })
                            .on('error', function (err) {
                                console.log(`Error : ${err}`)
                                fs.unlinkSync(media)
                                tipe = media.endsWith('.mp4') ? 'video' : 'gif'
                                reply(`❌ Gagal, pada saat mengkonversi ${tipe} ke stiker`)
                            })
                            .on('end', async function () {
                                console.log('Finish')
                                exec(`webpmux -set exif ./sticker/stickwm_${sender}.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
						if (error) return reply(lang.tryAgain())
								await alpha.sendMessage(from, fs.readFileSync(`./sticker/${sender}.webp`), sticker, {quoted: fgif})
								fs.unlinkSync(media)	
									fs.unlinkSync(`./sticker/${sender}.webp`)	
                                    fs.unlinkSync(`./sticker/stickwm_${sender}.exif`)
								})
								})
								.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
						.save(`./sticker/${sender}.webp`)
                    } else if ((isMedia || isQuotedImage) && args[0] == 'nobg') {
                        const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
                        const media = await alpha.downloadAndSaveMediaMessage(encmedia)
                        ranw = getRandom('.webp')
                        ranp = getRandom('.png')
                        reply(mess.wait)
                        keyrmbg = 'bcAvZyjYAjKkp1cmK8ZgQvWH'
                        await removeBackgroundFromImageFile({ path: media, apiKey: keyrmbg, size: 'auto', type: 'auto', ranp }).then(res => {
                            fs.unlinkSync(media)
                            let bufferir9vn5 = Buffer.from(res.base64img, 'base64')
                            fs.writeFileSync(ranp, bufferir9vn5, (err) => {
                                if (err) return reply('Gagal, Terjadi kesalahan, silahkan coba beberapa saat lagi.')
                            })
                            exec(`ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${ranw}`, (err) => {
                                fs.unlinkSync(ranp)
                                if (err) return reply(lang.tryAgain())
                                alpha.sendMessage(from, fs.readFileSync(ranw), sticker, { quoted: mek })
                                    fs.unlinkSync(ranw)
                                })
                            })
                    } else {
                        reply(`Kirim gambar dengan caption ${prefix}sticker atau tag gambar yang sudah dikirim\nDurasi sticker video 1-9 detik...`)
                    }
                    await limitAdd(sender, limit)
				            }
           break
		case 'toimg':{
		if (isLimit(sender, isPremium, isCreator, isOwner, limitawal, limit)) return sendButMessage(from, lang.limit(prefix), `© ${ownername}`, [{buttonId: 'limit', buttonText: {displayText: `Check Limit`, },type: 1,}]);
		if (!isQuotedSticker) return reply('Reply stc nya!')
					reply(lang.wait())
					encmediaa = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					mediaa = await alpha.downloadAndSaveMediaMessage(encmediaa)
					ran = getRandom('.png')
					exec(`ffmpeg -i ${mediaa} ${ran}`, (err) => {
					fs.unlinkSync(mediaa)
					if (err) return reply('Yah gagal, coba ulangi ^_^')
					buffer = fs.readFileSync(ran)
					fakethumb(buffer,'Webp To Image')
					fs.unlinkSync(ran)
					})
					await limitAdd(sender, limit)}
					break   
			case 'ytsearch': case 'yts':
			if (isLimit(sender, isPremium, isCreator, isOwner, limitawal, limit)) return sendButMessage(from, lang.limit(prefix), `© ${ownername}`, [{buttonId: 'limit', buttonText: {displayText: `Check Limit`, },type: 1,}]);
					if (args.length < 1) return reply('Tolong masukan query!')
					var srch = args.join(' ');
					try {
		        	var aramas = await yts(srch);
		   			} catch {
		        	return await alpha.sendMessage(from, 'Error!', MessageType.text, dload)
		    		}
		    		aramat = aramas.all 
		    		var tbuff = await getBuffer(aramat[0].image)
		    		var ytresult = '';
		    		ytresult += '「 *YOUTUBE SEARCH* 」'
		    		ytresult += '\n________________________\n\n'
		   			aramas.all.map((video) => {
		        	ytresult += '🎭 Title: ' + video.title + '\n'
		            ytresult += '📬 Link: ' + video.url + '\n'
		            ytresult += '⏰ Durasi: ' + video.timestamp + '\n'
					ytresult += '👁️ Views: ' + video.views + '\n'
		            ytresult += '🚀 Upload: ' + video.ago + '\n________________________\n\n'
		    		});
		    		ytresult += '*WHATSAPP-BOT*'
		    		await fakethumb(tbuff,ytresult)
					await limitAdd(sender, limit)
					break   
			case 'setreply':
			case 'setfake':
			        if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
					if (!q) return reply(mess.wrongFormat)
					fake = q
					reply(`Succes Mengganti Conversation Fake : ${q}`)
					break
			case 'setprefix':
if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
reply('Pke yg multi aja')
/*if (args.length < 1) return reply(`*Format Error!*\n\n*Example :*\n •${prefix + command} multi\n •${prefix + command} nopref\n •${prefix + command} #`)
if((args[0]) == 'multi'){
if(multi)return reply('_Sudah diaktifkan sebelumnya!_')
multi = true
nopref = false
single = false
reply(`_Succses mengganti Prefix ke Multiprefix!_`)
}else
if ((args[0]) == 'nopref'){
if(nopref)return reply('_Sudah diaktifkan sebelumnya!_')
multi = false
single = false
nopref = true
reply(`_Succses mengganti Prefix ke noprefix!_`)
}else
if((args[0]) == `${q}`){
multi = false
nopref = false
single = true
prefa = `${q}`
reply(`_Succses mengganti Prefix ke ${q}_`)
}*/
break
			case 'setfakeimg':
			        if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
		        	if ((isMedia && !mek.message.videoMessage || isQuotedImage || isQuotedSticker) && args.length == 0) {
		            boij = isQuotedImage || isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
					delb = await alpha.downloadMediaMessage(boij)
					fs.writeFileSync(`./image/${thumbnail}`, delb)
					reply('Sukses')
		        	} else {
		            fakeitem(`Kirim gambar dengan caption ${prefix}setfakeimg`)
		          	}
					break	
			case 'setthumb':
			        if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
			        if ((isMedia && !mek.message.videoMessage || isQuotedImage || isQuotedSticker) && args.length == 0) {
		          	boij = isQuotedImage || isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
					delb = await alpha.downloadMediaMessage(boij)
					fs.writeFileSync(`./image/${thumbnail}`, delb)
					reply('Sukses')
		        	} else {
		            reply(`Kirim gambar dengan caption ${prefix}sethumb`)
		          	}
					break	
			case 'image':
			if (isLimit(sender, isPremium, isCreator, isOwner, limitawal, limit)) return sendButMessage(from, lang.limit(prefix), `© ${ownername}`, [{buttonId: 'limit', buttonText: {displayText: `Check Limit`, },type: 1,}]);
		            if (args.length < 1) return reply('Masukan teks!')
		            const gimg = args.join('');
gis(gimg, async (error, result) => {
let n = result
images = n[Math.floor(Math.random() * n.length)].url
cptg = `*-------「 GIMAGE SEARCH 」-------*
⛄ *Query* : ${gimg}
🔗 *Media Url* : ${images}`
var imgnya = await getBuffer(images)
sendButImage(from,  cptg , `© ${ownername}`,imgnya, [{"buttonId": `image ${q}`,"buttonText": {"displayText": "Next Image"},"type": "RESPONSE"}], {quoted: mek})
			})
					await limitAdd(sender, limit)
					break   
		    
		    case 'brainly':
		if (isLimit(sender, isPremium, isCreator, isOwner, limitawal, limit)) return sendButMessage(from, lang.limit(prefix), `© ${ownername}`, [{buttonId: 'limit', buttonText: {displayText: `Check Limit`, },type: 1,}]);
					if (args.length < 1) return reply('Pertanyaan apa')
		          	brien = args.join(' ')
					brainly(`${brien}`).then(res => {
					teks = '❉───────────────────────❉\n'
					for (let Y of res.data) {
					teks += `\n*「 _BRAINLY_ 」*\n\n*➸ Pertanyaan:* ${Y.pertanyaan}\n\n*➸ Jawaban:* ${Y.jawaban[0].text}\n❉──────────────────❉\n`
					}
					alpha.sendMessage(from, teks, text,{quoted:mek,detectLinks: false})                        
		            }).catch(e => {
					reply('Terjadi kesalahan, coba beberapa saat lagi')
					})             
					await limitAdd(sender, limit)
					break       
    case 'playstore':
    if (isLimit(sender, isPremium, isCreator, isOwner, limitawal, limit)) return sendButMessage(from, lang.limit(prefix), `© ${ownername}`, [{buttonId: 'limit', buttonText: {displayText: `Check Limit`, },type: 1,}]);
            if(!q) return reply('lu nyari apa?')
            let play = await hx.playstore(q)
            let store = '❉─────────────────────❉\n'
            for (let i of play){
            store += `\n*「 *PLAY STORE* 」*\n
- *Nama* : ${i.name}
- *Link* : ${i.link}\n
- *Dev* : ${i.developer}
- *Link Dev* : ${i.link_dev}\n❉─────────────────────❉`
            }
            reply(store)
            await limitAdd(sender, limit)
					break   
		case 'linkwa':
case 'grupwa':
case 'groupwa':
case 'gcwa':
if (isLimit(sender, isPremium, isCreator, isOwner, limitawal, limit)) return sendButMessage(from, lang.limit(prefix), `© ${ownername}`, [{buttonId: 'limit', buttonText: {displayText: `Check Limit`, },type: 1,}]);
            if(!q) return reply('cari group apa?')
            hx.linkwa(q)
            .then(result => {
            let res = '「 *GC WA* 」\n\n'
            for (let i of result) {
            res += `*Nama*: *${i.nama}\n*Link*: ${i.link}\n\n`
            }
            reply(res)
            });
            await limitAdd(sender, limit)
			break    
case 'lirik':
if (isLimit(sender, isPremium, isCreator, isOwner, limitawal, limit)) return sendButMessage(from, lang.limit(prefix), `© ${ownername}`, [{buttonId: 'limit', buttonText: {displayText: `Check Limit`, },type: 1,}]);
            if(!q) return reply('lagu apa?')
            let song = await hx.lirik(q)
            sendMediaURL(from,song.thumb,song.lirik)
            await limitAdd(sender, limit)
			break  
    case 'anime':
    if (isLimit(sender, isPremium, isCreator, isOwner, limitawal, limit)) return sendButMessage(from, lang.limit(prefix), `© ${ownername}`, [{buttonId: 'limit', buttonText: {displayText: `Check Limit`, },type: 1,}]);
 if(!q) return reply('Judul animenya?')
 zee.Anime(`${q}`).then(async data => {
                    let txt = `*-------「 ANIME-SEARCH 」-------*\n\n`
                    for (let i of data) {
                        txt += `*📫 Title :* ${i.judul}\n`
                        txt += `*📚 Url :* ${i.link}\n-----------------------------------------------------\n`
                    }
                    await alpha.sendMessage(from, await gwtBuffer(data[0].thumbnail), MessageType.text, { caption: txt,quoted: mek})
                })
                .catch((err) => {
                    reply(lang.tryAgain())
                })
            break
    case 'otaku':
    if (isLimit(sender, isPremium, isCreator, isOwner, limitawal, limit)) return sendButMessage(from, lang.limit(prefix), `© ${ownername}`, [{buttonId: 'limit', buttonText: {displayText: `Check Limit`, },type: 1,}]);
            if(!q) return reply('Judul animenya?')
            let anime = await hx.otakudesu(q)
            rem = `*Judul* : ${anime.judul}
*Jepang* : ${anime.jepang}
*Rating* : ${anime.rate}
*Produser* : ${anime.produser}
*Status* : ${anime.status}
*Episode* : ${anime.episode}
*Durasi* : ${anime.durasi}
*Rilis* : ${anime.rilis}
*Studio* : ${anime.studio}
*Genre* : ${anime.genre}\n
*Sinopsis* :
${anime.desc}\n\n*Link Batch* : ${anime.batch}\n*Link Download SD* : ${anime.batchSD}\n*Link Download HD* : ${anime.batchHD}`
           var ram = await getBuffer(anime.img)
            alpha.sendMessage(from,ram,image,{quoted:mek,caption:rem})
            await limitAdd(sender, limit)
			break   
    case 'komiku':
    if (isLimit(sender, isPremium, isCreator, isOwner, limitawal, limit)) return sendButMessage(from, lang.limit(prefix), `© ${ownername}`, [{buttonId: 'limit', buttonText: {displayText: `Check Limit`, },type: 1,}]);
            if(!q) return reply(`judulnya?\n${prefix}komiku mao gakuin`)
            let komik = await hx.komiku(q)
            result = `*Title* : ${komik.title}\n
*Title Indo* : ${komik.indo}\n
*Update* : ${komik.update}\n
*Desc* : ${komik.desc}\n
*Chapter Awal* : ${komik.chapter_awal}
*Chapter Akhir* : ${komik.chapter_akhir}`
            sendMediaURL(from, komik.image,result)
            await limitAdd(sender, limit)
					break     
			case 'term':
			
			        if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
					if (!q) return reply(mess.wrongFormat)
					exec(q, (err, stdout) => {
					if (err) return reply(`ALPHABOT:~ ${err}`)
					if (stdout) {
					reply(stdout)
					}
					})
				    break 
		    case 'join':
		            if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
		            try {
		            if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) return reply(lang.erorLink())
		            hen = args[0]
		            if (!q) return reply('Masukan link group')
		            var codeInvite = hen.split('https://chat.whatsapp.com/')[1]
		            if (!codeInvite) return reply ('pastikan link sudah benar!')
		            var response = await alpha.acceptInvite(codeInvite)
		            reply('```SUKSES JOIN GRUP```')
		            } catch {
		            reply('```LINK ERROR!```')
		            }
		            break
		    case 'twmp4': case 'twitter':
if (args.length < 1) return reply('Link?')
lin = args[0]
reply(lang.wait())
zee.Twitter(`${lin}`).then(async data => {
                    let txt = `*----「 TWITTER DOWNLOADER 」----*\n\n`
                    txt += `*📫 Title :* ${data.title}\n`
                    txt += `*📟 Quality :* ${data.medias[1].quality}\n`
                    txt += `*💾 Size :* ${data.medias[1].formattedSize}\n`
                    txt += `*📚 Url :* ${data.url}`
                    sendFileFromUrl(from,data.medias[1].url,txt,mek)
                })
                .catch((err) => {
                    reply(lang.err())
                })
await limitAdd(sender, limit)
					break   
case 'twmp3':
if (args.length < 1) return reply('Link?')
lin = args[0]
reply(lang.wait())
hx.twitter(lin).then(async (res) => {
console.log('[ TWITTER ] downloader')
Anu = res.SD
fto = fs.readFileSync(`./image/${thumbnail}`)
alpha.sendMessage(from, fto, image, {quoted:mek, caption:`*TWITTER MP3*${enter}${enter}•> Hd : ${res.HD}${enter}•> Sd : ${res.SD}${enter}•> Audio : ${res.audio}${enter}${enter}_Please wait, the media file is being sent it may take a few minutes_`, thumbnail:fs.readFileSync(`./image/${thumbnail}`), contextInfo:{forwardingScore: 989, isForwarded: true}})
khs = await getBuffer(Anu)
alpha.sendMessage(from, khs, audio, {mimetype:'audio/mpeg', filename:'twitter.mp3', quoted:mek, ptt:true})
})
await limitAdd(sender, limit)
					break   
		    case 'runtime':
		    case 'test':
		            run = process.uptime() 
		            teks = `${kyun(runtime)}`
		            reply(teks)
		            break  
			case 'speed':
			case 'ping':
			const timestamp = speed();
					const latensi = speed() - timestamp
					exec(`neofetch --stdout`, (error, stdout, stderr) => {
					const child = stdout.toString('utf-8')
					const teks = child.replace(/Memory:/, "Ram:")
					const pingnya = `\`\`\`${teks}Speed: ${latensi.toFixed(4)} Second\`\`\``
					reply(pingnya)
					})
					break
               
		    case 'totag':
		if (!isGroupAdmins) return reply(lang.onlygcAdmin())
		if ((isMedia && !mek.message.videoMessage || isQuotedSticker) && args.length == 0) {
		            encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
		            file = await alpha.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
		            value = args.join(" ")
		            var group = await alpha.groupMetadata(from)
		            var member = group['participants']
		            var mem = []
		            member.map(async adm => {
		            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
		            })
		            var options = {
		                contextInfo: { mentionedJid: mem },
		                quoted: mek
		            }
		            ini_buffer = fs.readFileSync(file)
		            alpha.sendMessage(from, ini_buffer, sticker, options)
		            fs.unlinkSync(file)
		            } else if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
		            encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
		            file = await alpha.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
		            value = args.join(" ")
		            var group = await alpha.groupMetadata(from)
		            var member = group['participants']
		            var mem = []
		            member.map(async adm => {
		            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
		            })
		            var options = {
		                contextInfo: { mentionedJid: mem },
		                quoted: mek
		            }
		            ini_buffer = fs.readFileSync(file)
		            alpha.sendMessage(from, ini_buffer, image, options)
		            fs.unlinkSync(file)
		        } else if ((isMedia && !mek.message.videoMessage || isQuotedAudio) && args.length == 0) {
		            encmedia = isQuotedAudio ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
		            file = await alpha.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
		            value = args.join(" ")
		            var group = await alpha.groupMetadata(from)
		            var member = group['participants']
		            var mem = []
		            member.map(async adm => {
		            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
		            })
		            var options = {
		                mimetype : 'audio/mpeg',
		                ptt : true,
		                contextInfo: { mentionedJid: mem },
		                quoted: mek
		            }
		            ini_buffer = fs.readFileSync(file)
		            alpha.sendMessage(from, ini_buffer, audio, options)
		            fs.unlinkSync(file)
		        }  else if ((isMedia && !mek.message.videoMessage || isQuotedVideo) && args.length == 0) {
		            encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
		            file = await alpha.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
		            value = args.join(" ")
		            var group = await alpha.groupMetadata(from)
		            var member = group['participants']
		            var mem = []
		            member.map(async adm => {
		            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
		            })
		            var options = {
		                mimetype : 'video/mp4',
		                contextInfo: { mentionedJid: mem },
		                quoted: mek
		            }
		            ini_buffer = fs.readFileSync(file)
		            alpha.sendMessage(from, ini_buffer, video, options)
		            fs.unlinkSync(file)
		        } else{
		          reply(`reply gambar/sticker/audio/video dengan caption ${prefix}totag`)
		        }
		        await limitAdd(sender, limit)
					break   
		    case 'tomp4':
		            if ((isMedia && !mek.message.videoMessage || isQuotedSticker) && args.length == 0) {
		            ger = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
		            let owogi = await alpha.downloadAndSaveMediaMessage(ger)
		            webp2mp4File(owogi).then(res=>{
		            sendMediaURL(from,res.result,'Done')
		            })
		            }else {
		            reply('reply stiker')
		            }
		            fs.unlinkSync(owogi)
		            await limitAdd(sender, limit)
					break   
			case 'togif':
		            if ((isMedia && !mek.message.videoMessage || isQuotedSticker) && args.length == 0) {
		            ger = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
		            let owoogi = await alpha.downloadAndSaveMediaMessage(ger)
		            webp2mp4File(owoogi).then(async res=>{
					let ksksn = await getBuffer(res.result)
		            alpha.sendMessage(from, ksksn, MessageType.video, {mimetype: 'video/gif', gifPlayback: true, caption: lang.success(), quoted: fgif })
		            })
		            }else {
		            reply('Reply stiker')
		            }
		            fs.unlinkSync(owoogi)
		            await limitAdd(sender, limit)
					break   
		    case 'tourl':
			case 'imgtourl':{
                if ((isMedia && !mek.message.videoMessage || isQuotedImage || isQuotedVideo ) && args.length == 0) {
 									 boij = isQuotedImage || isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
									 owgi = await alpha.downloadMediaMessage(boij)
									 res = await uploadImages(owgi)
									 reply(res)
										} else {
											reply('kirim/reply gambar/video')
										}
										}
											await limitAdd(sender, limit)
					break   
			//scrape primbon by dikaardnt
			case 'nomerhoki': case 'nomorhoki': {
                if (!Number(q)) return reply(`Example : ${prefix + command} 887435047326\n\nTidak berawalan 0 atau 62`)
                let anu = await primbon.nomer_hoki(Number(q))
                if (anu.status == false) return reply(anu.message)
                alpha.sendMessage(m.chat, `⭔ *Nomor HP :* ${anu.message.nomer_hp}\n⭔ *Angka Shuzi :* ${anu.message.angka_shuzi}\n⭔ *Energi Positif :*\n- Kekayaan : ${anu.message.energi_positif.kekayaan}\n- Kesehatan : ${anu.message.energi_positif.kesehatan}\n- Cinta : ${anu.message.energi_positif.cinta}\n- Kestabilan : ${anu.message.energi_positif.kestabilan}\n- Persentase : ${anu.message.energi_positif.persentase}\n⭔ *Energi Negatif :*\n- Perselisihan : ${anu.message.energi_negatif.perselisihan}\n- Kehilangan : ${anu.message.energi_negatif.kehilangan}\n- Malapetaka : ${anu.message.energi_negatif.malapetaka}\n- Kehancuran : ${anu.message.energi_negatif.kehancuran}\n- Persentase : ${anu.message.energi_negatif.persentase}`, text, {quoted:mek})
            }
            break
            case 'artimimpi': case 'tafsirmimpi': {
                if (!q) return reply(`Example : ${prefix + command} di kejar setan`)
                let anu = await primbon.tafsir_mimpi(q)
                if (anu.status == false) return reply(anu.message)
                alpha.sendMessage(m.chat, `⭔ *Mimpi :* ${anu.message.mimpi}\n⭔ *Arti :* ${anu.message.arti}\n⭔ *Solusi :* ${anu.message.solusi}`, m)
            }
            break
            case 'ramalanjodoh': case 'ramaljodoh': {
                if (!q) return reply(`Example : ${prefix + command} Zeeone, 12, 1, 2004, Clara, 22, 2, 2004`)
                let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = q.split`,`
                let anu = await primbon.ramalan_jodoh(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
                if (anu.status == false) return reply(anu.message)
                alpha.sendMessage(m.chat, `⭔ *Nama Anda :* ${anu.message.nama_anda.nama}\n⭔ *Lahir Anda :* ${anu.message.nama_anda.tgl_lahir}\n⭔ *Nama Pasangan :* ${anu.message.nama_pasangan.nama}\n⭔ *Lahir Pasangan :* ${anu.message.nama_pasangan.tgl_lahir}\n⭔ *Hasil :* ${anu.message.result}\n⭔ *Catatan :* ${anu.message.catatan}`, text, {quoted:mek})
            }
            break
            case 'ramalanjodohbali': case 'ramaljodohbali': {
                if (!q) return reply(`Example : ${prefix + command} Zeeone, 12, 1, 2004, Clara, 22, 2, 2004`)
                let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = q.split`,`
                let anu = await primbon.ramalan_jodoh_bali(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
                if (anu.status == false) return reply(anu.message)
                alpha.sendMessage(m.chat, `⭔ *Nama Anda :* ${anu.message.nama_anda.nama}\n⭔ *Lahir Anda :* ${anu.message.nama_anda.tgl_lahir}\n⭔ *Nama Pasangan :* ${anu.message.nama_pasangan.nama}\n⭔ *Lahir Pasangan :* ${anu.message.nama_pasangan.tgl_lahir}\n⭔ *Hasil :* ${anu.message.result}\n⭔ *Catatan :* ${anu.message.catatan}`, text, {quoted:mek})
            }
            break
            case 'suamiistri': {
                if (!q) return reply(`Example : ${prefix + command} Zeeone, 12, 1, 2004, Clara, 22, 2, 2004`)
                let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = q.split`,`
                let anu = await primbon.suami_istri(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
                if (anu.status == false) return reply(anu.message)
                alpha.sendMessage(m.chat, `⭔ *Nama Suami :* ${anu.message.suami.nama}\n⭔ *Lahir Suami :* ${anu.message.suami.tgl_lahir}\n⭔ *Nama Istri :* ${anu.message.istri.nama}\n⭔ *Lahir Istri :* ${anu.message.istri.tgl_lahir}\n⭔ *Hasil :* ${anu.message.result}\n⭔ *Catatan :* ${anu.message.catatan}`, text, {quoted:mek})
            }
            break
			case 'ramalancinta': case 'ramalcinta': {
                if (!q) return reply(`Example : ${prefix + command} Zeeone, 12, 1, 2004, Clara, 22, 2, 2004`)
                let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = q.split`,`
                let anu = await primbon.ramalan_cinta(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
                if (anu.status == false) return reply(anu.message)
                alpha.sendMessage(m.chat, `⭔ *Nama Anda :* ${anu.message.nama_anda.nama}\n⭔ *Lahir Anda :* ${anu.message.nama_anda.tgl_lahir}\n⭔ *Nama Pasangan :* ${anu.message.nama_pasangan.nama}\n⭔ *Lahir Pasangan :* ${anu.message.nama_pasangan.tgl_lahir}\n⭔ *Sisi Positif :* ${anu.message.sisi_positif}\n⭔ *Sisi Negatif :* ${anu.message.sisi_negatif}\n⭔ *Catatan :* ${anu.message.catatan}`, text, {quoted:mek})
            }
            break
            case 'artinama': {
                if (!q) return reply(`Example : ${prefix + command} ZeeoneOfc`)
                let anu = await primbon.arti_nama(q)
                if (anu.status == false) return reply(anu.message)
                alpha.sendMessage(m.chat, `⭔ *Nama :* ${anu.message.nama}\n⭔ *Arti :* ${anu.message.arti}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'kecocokannama': case 'cocoknama': {
                if (!q) return reply(`Example : ${prefix + command} Zeeeon, 12, 1, 2004`)
                let [nama, tgl, bln, thn] = q.split`,`
                let anu = await primbon.kecocokan_nama(nama, tgl, bln, thn)
                if (anu.status == false) return reply(anu.message)
                alpha.sendMessage(m.chat, `⭔ *Nama :* ${anu.message.nama}\n⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Life Path :* ${anu.message.life_path}\n⭔ *Destiny :* ${anu.message.destiny}\n⭔ *Destiny Desire :* ${anu.message.destiny_desire}\n⭔ *Personality :* ${anu.message.personality}\n⭔ *Persentase :* ${anu.message.persentase_kecocokan}`, text, {quoted:mek})
            }
            break
            case 'kecocokanpasangan': case 'cocokpasangan': case 'pasangan': {
                if (!q) return reply(`Example : ${prefix + command} Zeeone|Clara`)
                let [nama1, nama2] = q.split`|`
                let anu = await primbon.kecocokan_nama_pasangan(nama1, nama2)
                if (anu.status == false) return reply(anu.message)
                alpha.sendMessage(m.chat,  anu.message.gambar, `⭔ *Nama Anda :* ${anu.message.nama_anda}\n⭔ *Nama Pasangan :* ${anu.message.nama_pasangan}\n⭔ *Sisi Positif :* ${anu.message.sisi_positif}\n⭔ *Sisi Negatif :* ${anu.message.sisi_negatif}`, text, {quoted:mek})
            }
            break
            case 'jadianpernikahan': case 'jadiannikah': {
                if (!q) return reply(`Example : ${prefix + command} 6, 12, 2020`)
                let [tgl, bln, thn] = q.split`,`
                let anu = await primbon.tanggal_jadian_pernikahan(tgl, bln, thn)
                if (anu.status == false) return reply(anu.message)
                alpha.sendMessage(m.chat, `⭔ *Tanggal Pernikahan :* ${anu.message.tanggal}\n⭔ *karakteristik :* ${anu.message.karakteristik}`, text, {quoted:mek})
            }
            break
            case 'sifatusaha': {
                if (!q)return reply(`Example : ${prefix+ command} 28, 12, 2021`)
                let [tgl, bln, thn] = q.split`,`
                let anu = await primbon.sifat_usaha_bisnis(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                alpha.sendMessage(m.chat, `⭔ *Lahir :* ${anu.message.hari_lahir}\n⭔ *Usaha :* ${anu.message.usaha}`, m)
            }
            break
            case 'rejeki': case 'rezeki': {
                if (!q) return reply(`Example : ${prefix + command} 12, 1, 2004`)
                let [tgl, bln, thn] = q.split`,`
                let anu = await primbon.rejeki_hoki_weton(tgl, bln, thn)
                if (anu.status == false) return reply(anu.message)
                alpha.sendMessage(m.chat, `⭔ *Lahir :* ${anu.message.hari_lahir}\n⭔ *Rezeki :* ${anu.message.rejeki}\n⭔ *Catatan :* ${anu.message.catatan}`, text, {quoted:mek})
            }
            break
            case 'pekerjaan': case 'kerja': {
                if (!q) return reply(`Example : ${prefix + command} 12, 1, 2004`)
                let [tgl, bln, thn] = q.split`,`
                let anu = await primbon.pekerjaan_weton_lahir(tgl, bln, thn)
                if (anu.status == false) return reply(anu.message)
                alpha.sendMessage(m.chat, `⭔ *Lahir :* ${anu.message.hari_lahir}\n⭔ *Pekerjaan :* ${anu.message.pekerjaan}\n⭔ *Catatan :* ${anu.message.catatan}`, text, {quoted:mek})
            }
            break
			case 'ramalannasib': case 'ramalnasib': case 'nasib': {
                if (!q) return reply(`Example : 12, 1, 2004`)
                let [tgl, bln, thn] = q.split`,`
                let anu = await primbon.ramalan_nasib(tgl, bln, thn)
                if (anu.status == false) return reply(anu.message)
                alpha.sendMessage(m.chat, `⭔ *Analisa :* ${anu.message.analisa}\n⭔ *Angka Akar :* ${anu.message.angka_akar}\n⭔ *Sifat :* ${anu.message.sifat}\n⭔ *Elemen :* ${anu.message.elemen}\n⭔ *Angka Keberuntungan :* ${anu.message.angka_keberuntungan}`, text, {quoted:mek})
            }
            break
            case 'potensipenyakit': case 'penyakit': {
                if (!q) return reply(`Example : ${prefix + command} 12, 1, 2004`)
                let [tgl, bln, thn] = q.split`,`
                let anu = await primbon.cek_potensi_penyakit(tgl, bln, thn)
                if (anu.status == false) return reply(anu.message)
                alpha.sendMessage(m.chat, `⭔ *Analisa :* ${anu.message.analisa}\n⭔ *Sektor :* ${anu.message.sektor}\n⭔ *Elemen :* ${anu.message.elemen}\n⭔ *Catatan :* ${anu.message.catatan}`, text, {quoted:mek})
            }
            break
            case 'artitarot': case 'tarot': {
                if (!q) return reply(`Example : ${prefix + command} 12, 1, 2004`)
                let [tgl, bln, thn] = q.split`,`
                let anu = await primbon.arti_kartu_tarot(tgl, bln, thn)
                if (anu.status == false) return reply(anu.message)
                alpha.sendMessage(m.chat, anu.message.image, image, {caption: `⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Simbol Tarot :* ${anu.message.simbol_tarot}\n⭔ *Arti :* ${anu.message.arti}\n⭔ *Catatan :* ${anu.message.catatan}`, quoted:mek})
            }
            break
            case 'fengshui': {
                if (!q) return reply(`Example : ${prefix + command} Zeeone, 1, 2004\n\nNote : ${prefix + command} Nama, gender, tahun lahir\nGender : 1 untuk laki-laki & 2 untuk perempuan`)
                let [nama, gender, tahun] = q.split`,`
                let anu = await primbon.perhitungan_feng_shui(nama, gender, tahun)
                if (anu.status == false) return reply(anu.message)
                alpha.sendMessage(m.chat, `⭔ *Nama :* ${anu.message.nama}\n⭔ *Lahir :* ${anu.message.tahun_lahir}\n⭔ *Gender :* ${anu.message.jenis_kelamin}\n⭔ *Angka Kua :* ${anu.message.angka_kua}\n⭔ *Kelompok :* ${anu.message.kelompok}\n⭔ *Karakter :* ${anu.message.karakter}\n⭔ *Sektor Baik :* ${anu.message.sektor_baik}\n⭔ *Sektor Buruk :* ${anu.message.sektor_buruk}`, text, {quoted:mek})
            }
            break
            case 'haribaik': {
                if (!q) return reply(`Example : ${prefix + command} 12, 1, 2004`)
                let [tgl, bln, thn] = q.split`,`
                let anu = await primbon.petung_hari_baik(tgl, bln, thn)
                if (anu.status == false) return reply(anu.message)
                alpha.sendMessage(m.chat, `⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Kala Tinantang :* ${anu.message.kala_tinantang}\n⭔ *Info :* ${anu.message.info}\n⭔ *Catatan :* ${anu.message.catatan}`, text, {quoted:mek})
            }
            break
            case 'harisangar': case 'taliwangke': {
                if (!q) return reply(`Example : ${prefix + command} 12, 1, 2004`)
                let [tgl, bln, thn] = q.split`,`
                let anu = await primbon.hari_sangar_taliwangke(tgl, bln, thn)
                if (anu.status == false) return reply(anu.message)
                alpha.sendMessage(m.chat, `⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Hasil :* ${anu.message.result}\n⭔ *Info :* ${anu.message.info}\n⭔ *Catatan :* ${anu.message.catatan}`, text, {quoted:mek})
            }
            break
            case 'harinaas': case 'harisial': {
                if (!q) return reply(`Example : ${prefix + command} 12, 1, 2004`)
                let [tgl, bln, thn] = q.split`,`
                let anu = await primbon.primbon_hari_naas(tgl, bln, thn)
                if (anu.status == false) return reply(anu.message)
                alpha.sendMessage(m.chat, `⭔ *Hari Lahir :* ${anu.message.hari_lahir}\n⭔ *Tanggal Lahir :* ${anu.message.tgl_lahir}\n⭔ *Hari Naas :* ${anu.message.hari_naas}\n⭔ *Info :* ${anu.message.catatan}\n⭔ *Catatan :* ${anu.message.info}`, text, {quoted:mek})
            }
            break
            case 'nagahari': case 'harinaga': {
                if (!q) return reply(`Example : ${prefix + command} 12, 1, 2004`)
                let [tgl, bln, thn] = q.split`,`
                let anu = await primbon.rahasia_naga_hari(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                alpha.sendMessage(m.chat, `⭔ *Hari Lahir :* ${anu.message.hari_lahir}\n⭔ *Tanggal Lahir :* ${anu.message.tgl_lahir}\n⭔ *Arah Naga Hari :* ${anu.message.arah_naga_hari}\n⭔ *Catatan :* ${anu.message.catatan}`, text, {quoted:mek})
            }
            break
            case 'arahrejeki': case 'arahrezeki': {
                if (!q) return reply(`Example : ${prefix + command} 12, 1, 2004`)
                let [tgl, bln, thn] = q.split`,`
                let anu = await primbon.primbon_arah_rejeki(tgl, bln, thn)
                if (anu.status == false) return reply(anu.message)
                alpha.sendMessage(m.chat, `⭔ *Hari Lahir :* ${anu.message.hari_lahir}\n⭔ *tanggal Lahir :* ${anu.message.tgl_lahir}\n⭔ *Arah Rezeki :* ${anu.message.arah_rejeki}\n⭔ *Catatan :* ${anu.message.catatan}`, text, {quoted:mek})
            }
            break
            case 'peruntungan': {
                if (!q) return reply(`Example : ${prefix + command} Zeeone, 12, 1, 2004, 2022\n\nNote : ${prefix + command} Nama, tanggal lahir, bulan lahir, tahun lahir, untuk tahun`)
                let [nama, tgl, bln, thn, untuk] = q.split`,`
                let anu = await primbon.ramalan_peruntungan(nama, tgl, bln, thn, untuk)
                if (anu.status == false) return reply(anu.message)
                alpha.sendMessage(m.chat, `⭔ *Nama :* ${anu.message.nama}\n⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Peruntungan Tahun :* ${anu.message.peruntungan_tahun}\n⭔ *Hasil :* ${anu.message.result}\n⭔ *Catatan :* ${anu.message.catatan}`, text, {quoted:mek})
            }
            break
            case 'weton': case 'wetonjawa': {
                if (!q) return reply(`Example : ${prefix + command} 12, 1, 2004`)
                let [tgl, bln, thn] = q.split`,`
                let anu = await primbon.weton_jawa(tgl, bln, thn)
                if (anu.status == false) return reply(anu.message)
                alpha.sendMessage(m.chat, `⭔ *Tanggal :* ${anu.message.tanggal}\n⭔ *Jumlah Neptu :* ${anu.message.jumlah_neptu}\n⭔ *Watak Hari :* ${anu.message.watak_hari}\n⭔ *Naga Hari :* ${anu.message.naga_hari}\n⭔ *Jam Baik :* ${anu.message.jam_baik}\n⭔ *Watak Kelahiran :* ${anu.message.watak_kelahiran}`, text, {quoted:mek})
            }
            break
			case 'sifat': case 'karakter': {
                if (!q) return reply(`Example : ${prefix + command} Zeeone, 12, 1, 2004`)
                let [nama, tgl, bln, thn] = q.split`,`
                let anu = await primbon.sifat_karakter_tanggal_lahir(nama, tgl, bln, thn)
                if (anu.status == false) return reply(anu.message)
                alpha.sendMessage(m.chat, `⭔ *Nama :* ${anu.message.nama}\n⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Garis Hidup :* ${anu.message.garis_hidup}`, text, {quoted:mek})
            }
            break
            case 'keberuntungan': {
                if (!q) return reply(`Example : ${prefix + command} Zeeone, 12, 1, 2004`)
                let [nama, tgl, bln, thn] = q.split`,`
                let anu = await primbon.potensi_keberuntungan(nama, tgl, bln, thn)
                if (anu.status == false) return reply(anu.message)
                alpha.sendMessage(m.chat, `⭔ *Nama :* ${anu.message.nama}\n⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Hasil :* ${anu.message.result}`, text, {quoted:mek})
            }
            break
            case 'memancing': {
                if (!q) return reply(`Example : ${prefix + command} 12, 1, 2022`)
                let [tgl, bln, thn] = q.split`,`
                let anu = await primbon.primbon_memancing_ikan(tgl, bln, thn)
                if (anu.status == false) return reply(anu.message)
                alpha.sendMessage(m.chat, `⭔ *Tanggal :* ${anu.message.tgl_memancing}\n⭔ *Hasil :* ${anu.message.result}\n⭔ *Catatan :* ${anu.message.catatan}`, text, {quoted:mek})
            }
            break
            case 'masasubur': {
                if (!q) return reply(`Example : ${prefix + command} 12, 1, 2022, 28\n\nNote : ${prefix + command} hari pertama menstruasi, siklus`)
                let [tgl, bln, thn, siklus] = q.split`,`
                let anu = await primbon.masa_subur(tgl, bln, thn, siklus)
                if (anu.status == false) return reply(anu.message)
                alpha.sendMessage(m.chat, `⭔ *Hasil :* ${anu.message.result}\n⭔ *Catatan :* ${anu.message.catatan}`, text, {quoted:mek})
            }
            break
			case 'shio': {
                if (!q) return reply(`Example : ${prefix + command} tikus\n\nNote : For Detail https://primbon.com/shio.htm`)
                let anu = await primbon.shio(q)
                if (anu.status == false) return reply(anu.message)
                alpha.sendMessage(m.chat, `⭔ *Hasil :* ${anu.message}`, text, {quoted:mek})
            }
            break
			case 'awoo':
					if (!isNsfw) return reply(lang.nsfwmo())
					reply(lang.wait())
					anu = await fetchJson(`https://waifu.pics/api/sfw/awoo`)
					buffer = await getBuffer(anu.url)
					anu  = {contextInfo: {"forwardingScore":999,"isForwarded":true,'stanzaId': msgId, 'participant':`${numbernye}@s.whatsapp.net`, 'remoteJid': '6283136505591-1614953337@g.us', 'quotedMessage': {"locationMessage": {"degreesLatitude": 41.893714904785156, "degreesLongitude": -87.63370513916016, "name": fake , 'jpegThumbnail': fs.readFileSync(`image/${thumbnail}`)}}}}
                    alpha.sendMessage(from, buffer, image, anu)
					await limitAdd(sender, limit)
					break   
			case 'blowjob2':
					if (!isNsfw) return reply(lang.nsfwmo())
					reply(lang.wait())
					anu = await fetchJson(`https://nekos.life/api/v2/img/blowjob`)
					buffer = await getBuffer(anu.url)
					anu  = {contextInfo: {"forwardingScore":999,"isForwarded":true,'stanzaId': msgId, 'participant':`${numbernye}@s.whatsapp.net`, 'remoteJid': '6283136505591-1614953337@g.us', 'quotedMessage': {"locationMessage": {"degreesLatitude": 41.893714904785156, "degreesLongitude": -87.63370513916016, "name": fake , 'jpegThumbnail': fs.readFileSync(`image/${thumbnail}`)}}}}
                    alpha.sendMessage(from, buffer, image, anu)
					await limitAdd(sender, limit)
					break   
			case 'megumin':
					if (!isNsfw) return reply(lang.nsfwmo())
					reply(lang.wait())
					anu = await fetchJson(`https://waifu.pics/api/sfw/megumin`)
					buffer = await getBuffer(anu.url)
					anu  = {contextInfo: {"forwardingScore":999,"isForwarded":true,'stanzaId': msgId, 'participant':`${numbernye}@s.whatsapp.net`, 'remoteJid': '6283136505591-1614953337@g.us', 'quotedMessage': {"locationMessage": {"degreesLatitude": 41.893714904785156, "degreesLongitude": -87.63370513916016, "name": fake , 'jpegThumbnail': fs.readFileSync(`image/${thumbnail}`)}}}}
                    alpha.sendMessage(from, buffer, image, anu)
					await limitAdd(sender, limit)
					break   
			case 'trapnime':
					if (!isNsfw) return reply(lang.nsfwmo())
					reply(lang.wait())
					anu = await fetchJson(`https://waifu.pics/api/nsfw/trap`)
					buffer = await getBuffer(anu.url)
					anu  = {contextInfo: {"forwardingScore":999,"isForwarded":true,'stanzaId': msgId, 'participant':`${numbernye}@s.whatsapp.net`, 'remoteJid': '6283136505591-1614953337@g.us', 'quotedMessage': {"locationMessage": {"degreesLatitude": 41.893714904785156, "degreesLongitude": -87.63370513916016, "name": fake , 'jpegThumbnail': fs.readFileSync(`image/${thumbnail}`)}}}}
                    alpha.sendMessage(from, buffer, image, anu)
					await limitAdd(sender, limit)
					break   

/*
]=====> GROUP MENU<=====[
*/
			case 'absen':
db.data.absen = db.data.absen || {} 
if (!(from in db.data.absen)) return alpha.sendButton(m.chat, `Tidak ada absen berlangsung di group ini !`, `© ${ownername}`, `Mulai Absen`, `absenstart`)
let absen = db.data.absen[from][1] 
const wasVote = absen.includes(m.sender) 
if (wasVote)return reply('Kamu sudah absen!')
absen.push(m.sender) 
let d = new Date 
let date = d.toLocaleDateString('id', { 
  day: 'numeric', 
  month: 'long', 
  year: 'numeric' 
}) 
let list = absen.map((v, i) => `• ${i + 1}. @${v.split`@`[0]}`).join('\n') 
let caption = `Tanggal: ${date}
${db.data.absen[from][2] ? db.data.absen[from][2] + '\n' : ''}
*--------「 DAFTAR ABSEN 」--------*
${list}

Total: ${absen.length}
`.trim()
await alpha.send2Button(m.chat, caption, `© ${ownername}`, `Absen`, `absen`, `Cek Absen`, `cekabsen`, {quoted: mek, contextInfo: {mentionedJid: [absen]}})
break
case 'cekabsen':{
db.data.absen = db.data.absen || {}
if (!(from in db.data.absen))return alpha.sendButton(m.chat, `Tidak ada absen berlangsung di group ini !`, `© ${ownername}`, `absenstart`, `Mulai Absen`, m)

let dd = new Date 
let datee = dd.toLocaleDateString('id', { 
  day: 'numeric', 
  month: 'long', 
  year: 'numeric' 
}) 
let absenn = db.data.absen[from][1] 
let listt = absenn.map((v, i) => `• ${i + 1}. @${v.split`@`[0]}`).join('\n') 
let captionn = `Tanggal: ${datee}
${db.data.absen[from][2] ? db.data.absen[from][2] + '\n' : ''}
*--------「 DAFTAR ABSEN 」--------*
${listt}

Total: ${absenn.length}
`.trim()
alpha.send2Button(m.chat, captionn, `© ${ownername}`, `Absen`, `absen`, `Hapus Absen`, `deleteabsen`, {quoted: mek, contextInfo: {mentionedJid: [absenn]}})
}
break

case 'delabsen': case 'deleteabsen':{
if (m.isGroup) { 
if (!(isGroupAdmins || mek.key.fromMe || isOwner)) return reply(lang.onlygcAdmin())
  } 
  db.data.absen = db.data.absen || {}
  if (!(from in db.data.absen))return alpha.sendButton(m.chat, `Tidak ada absen berlangsung di group ini !`, `© ${ownername}`, `Mulai Absen`, `absenstart`)

  delete db.data.absen[from]
reply(`Absen berhasil dihapus`)
}
break
case 'absenstart': case 'mulaiabsen':{
if (isGroup) { 
  if (!(isGroupAdmins || mek.key.fromMe || isOwner)) return reply(lang.onlygcAdmin())
} 
db.data.absen = db.data.absen || {}
if (from in db.data.absen)return alpha.send2Button(m.chat, `Masih ada sesi absen di group ini !`, `© ${ownername}`, `cekabsen`, `Cek Absen`, `deleteabsen`, `Hapus Absen`, m)

db.data.absen[from] = [
  await alpha.sendButton(m.chat, `Absen dimulai...`, `© ${ownername}`, `absen`, `Absen`, m),

  [], q ? q : '']
  }
break
  
			case 'add':  
			if (!isGroup) return reply(lang.onlygc())
					if (!isGroupAdmins) return reply(lang.onlygcAdmin())
					if (!isBotGroupAdmins) return reply(lang.botNotAdm())
                    if (args.length < 1) return reply('Yang mau di add?')
					if (args[0].startsWith('08')) return reply('Gunakan kode negara mas')
					orang = args[0] + '@s.whatsapp.net'
response = await alpha.groupAdd(from, [orang])
o = response.participants[0]
let inv = (Object.values(o))
if(inv[0].code == 409) return reply('Orang yang anda add sudah ada didalam Group!')
else if(inv[0].code == 403){
alpha.sendMessage(from, `User private\n\nMengirim Undangan Group Ke @${q.split('@')[0]}`, MessageType.text, {quoted: mek, contextInfo: {mentionedJid: [orang]}})
alpha.sendGroupV4Invite(from, orang, inv[0].invite_code, inv[0].invite_code_exp, groupMetadata.subject , `Salah Satu Admin Mengundang Anda Masuk Ke Sini Silahkan Klik Bergabung Untuk Masuk`)
}
					break 
					case 'radd': case 'addreply':
					if (!isGroup) return reply(lang.onlygc())
					if (!isGroupAdmins) return reply(lang.onlygcAdmin())
					if (!isBotGroupAdmins) return reply(lang.botNotAdm())
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Reply pesan yg ingin di Add!')
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
mentions(`Perintah di terima, Add: @${mentioned[0].split('@')[0]}`, mentioned, true)
alpha.groupAdd(from, mentioned)
break

case 'kick':
if (!isGroup) return reply(lang.onlygc())
					if (!isGroupAdmins) return reply(lang.onlygcAdmin())
					if (!isBotGroupAdmins) return reply(lang.botNotAdm())
if(!q)return reply(`*Format salah!*\n\n*Example : ${prefix + command} @tag*`)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
yau = q.split('@')[1] + '@s.whatsapp.net'
alpha.groupRemove(from, [yau])
reply(`Succses kick target!`)
break

case 'rkick': case 'kickreply':
if (!isGroup) return reply(lang.onlygc())
					if (!isGroupAdmins) return reply(lang.onlygcAdmin())
					if (!isBotGroupAdmins) return reply(lang.botNotAdm())
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Reply pesan yg ingin di Kick!')
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
mentions(`Perintah di terima, mengeluarkan : @${mentioned[0].split('@')[0]}`, mentioned, true)
alpha.groupRemove(from, mentioned)
break
			case 'antilink':
if (!isGroup) return reply(lang.onlygc())
					if (!isGroupAdmins) return reply(lang.onlygcAdmin())
					if (!isBotGroupAdmins) return reply(lang.botNotAdm())
              if (args[0] == 'on'){
              if (isAntiLink) return reply(lang.anjawaUdhOn(command))
              antilink.push(from)
              fs.writeFileSync('./src/antilink.json', JSON.stringify(antilink))
              reply(lang.anjawaOn(command))
              } else if (args[0] == 'off'){
              let anu = antilink.indexOf(from)
              antilink.splice(anu, 1)
              fs.writeFileSync('./src/antilink.json', JSON.stringify(antilink))
              reply(lang.anjawaOff(command))
              } else if (!q) {
          sendButMessage(from, `MODE ANTILINK`, `Choose one`, [
            {
              buttonId: 'antilink on',
              buttonText: {
                displayText: `On`,
              },
              type: 1,
            },
            {
              buttonId: 'antilink off',
              buttonText: {
                displayText: `Off`,
              },
              type: 1,
            },
          ]);
        }
        break;
       case 'event':
					if (!isGroup) return reply(lang.onlygc())
					if (!isGroupAdmins) return reply(lang.onlygcAdmin())
					if ( !isOwner && !isCreator && !mek.key.fromMe) return reply("Khusus admin");
					if (args[0] == "on") {
						if (isEventon) return reply(lang.anjawaUdhOn(command))
						event.push(from)
						fs.writeFileSync('./src/event.json', JSON.stringify(event))
						reply(lang.anjawaOn(command))
					} else if (args[0] == "off") {
						event.splice(from, 1)
						fs.writeFileSync('./src/event.json', JSON.stringify(event))
						reply(lang.anjawaOff(command))
					} else if (!q) {
          sendButMessage(from, `MODE EVENT`, `Choose one`, [
            {
              buttonId: 'event on',
              buttonText: {
                displayText: `On`,
              },
              type: 1,
            },
            {
              buttonId: 'event off',
              buttonText: {
                displayText: `Off`,
              },
              type: 1,
            },
          ]);
        }
        break;
	case 'antivirtex':
 if (!isGroup) return reply(lang.onlygc())
					if (!isGroupAdmins) return reply(lang.onlygcAdmin())
					if (!isBotGroupAdmins) return reply(lang.botNotAdm())       
        if (args[0] == "on") {
          if (isAntivirtex) return reply(lang.anjawaUdhOn(command))
          antivirtex.push(from);
          fs.writeFileSync(
            "./src/antivirtex.json",
            JSON.stringify(antivirtex)
          );
          reply(lang.anjawaOn(command))
        } else if (args[0] == "off") {
          antivirtex.splice(from, 1);
          fs.writeFileSync("./src/antivirtex.json", JSON.stringify(ant));
          reply(lang.anjawaOff(command))
        } else if (!q) {
          sendButMessage(from, `MODE ANTIVIRTEX`, `Choose one`, [
            {
              buttonId: 'antivirtex on',
              buttonText: {
                displayText: `On`,
              },
              type: 1,
            },
            {
              buttonId: 'antivirtex off',
              buttonText: {
                displayText: `Off`,
              },
              type: 1,
            },
          ]);
        }
        break;
			case 'admin':{
					if (!isGroup) return reply('```KHUSUS GRUP BRO```')
					teks = `*DAFTAR ATASAN GROUP* _${groupMetadata.subject}_\n*TOTAL* : ${groupAdmins.length}\n\n`
					no = 0
					for (let admon of groupAdmins) {
					no += 1
					teks += `[${no.toString()}] @${admon.split('@')[0]}\n`
					}
					mentions(teks, groupAdmins, true)
					}
					break
			
			case 'tagall':
			if (!isGroup) return reply(lang.onlygc())
					if (!isGroupAdmins) return reply(lang.onlygcAdmin())
					members_id = []
					teks = (args.length > 1) ? body.slice(8).trim() : ''
					teks += '\n\n'
					for (let mem of groupMembers) {
					teks += `@${mem.jid.split('@')[0]}\n`
					members_id.push(mem.jid)
					}
					mentions(teks, members_id, true)
					break

			case 'clearall':{
			        if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
			        anu = await alpha.chats.all()
					alpha.setMaxListeners(10)
					alpha.modifyChat(from, 'delete', {includeStarred: false})
					reply(lang.success())}
					break
            case 'out':
                    if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
					setTimeout( () => {
					alpha.groupLeave (from) 
					}, 2000)
					setTimeout( () => {
					alpha.updatePresence(from, Presence.composing) 
					reply('```Byeee 👋```')
					}, 0)
					break     
		    case 'leave2':
                    if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
					setTimeout( () => {
					alpha.groupLeave (q) 
					}, 2000)
					setTimeout( () => {
					alpha.updatePresence(from, Presence.composing) 
					reply('```Ok gua out```')
					}, 0)
					break       
           case 'getpp':
				if (mek.message.extendedTextMessage != undefined){
					let mentioneddd = mek.message.extendedTextMessage.contextInfo.mentionedJid
					try {
						pic = await alpha.getProfilePicture(mentioneddd[0])
					} catch {
						pic = 'https://i.ibb.co/Tq7d7TZ/age-hananta-495-photo.png'
					}
					seeer = `Nama : *${pushname}`
					thumbb = await getBuffer(pic)
					anuu  = {contextInfo:{"forwardingScore":999,"isForwarded":true,'stanzaId': "B826873620DD5947E683E3ABE663F263", 'participant': `${numbernye}@s.whatsapp.net`, 'remoteJid': '6289523258649-1604595598@g.us', 'quotedMessage': {"imageMessage": {"caption": `「 Bot by zeeone 」`, 'jpegThumbnail': fs.readFileSync(`image/${thumbnail}`)}}}}
                    alpha.sendMessage(from, thumbb ,image, anuu)
				}
				await limitAdd(sender, limit)
					break   
	case 'inspect':
		            try {
		            if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) return reply(lang.erorLink())
		            if (!q) return reply('```Masukkan link groupnya```')
		            cos = args[0]
		            var net = cos.split('https://chat.whatsapp.com/')[1]
		            if (!net) return reply('pastikan itu link https://whatsapp.com/')
		            jids = []
		            let { id, owner, subject, subjectOwner, desc, descId, participants, size, descOwner, descTime, creation} = await alpha.query({ 
		            json: ["query", "invite",net],
		            expect200:true })
		            let par = `*Id* : ${id}
		${owner ? `*Owner* : @${owner.split('@')[0]}` : '*Owner* : -'}
		*Nama Gc* : ${subject}
		*Gc dibuat Tanggal* : ${formatDate(creation * 1000)}
		*Jumlah Member* : ${size}
		${desc ? `*Desc* : ${desc}` : '*Desc* : tidak ada'}
		*Id desc* : ${descId}
		${descOwner ? `*Desc diubah oleh* : @${descOwner.split('@')[0]}` : '*Desc diubah oleh* : -'}\n*Tanggal* : ${descTime ? `${formatDate(descTime * 1000)}` : '-'}\n\n*Kontak yang tersimpan*\n`
		           for ( let y of participants) {
		             par += `> @${y.id.split('@')[0]}\n*Admin* : ${y.isAdmin ? 'Ya' : 'Tidak'}\n`
		             jids.push(`${y.id.replace(/@c.us/g,'@s.whatsapp.net')}`)
		             }
		             jids.push(`${owner ? `${owner.replace(/@c.us/g,'@s.whatsapp.net')}` : '-'}`)
		             jids.push(`${descOwner ? `${descOwner.replace(/@c.us/g,'@s.whatsapp.net')}` : '-'}`)
		             alpha.sendMessage(from,par,text,{quoted:mek,contextInfo:{mentionedJid:jids}})
		             } catch {
		             reply(lang.erorLink())
		             }
		             await limitAdd(sender, limit)
					break   
			case 'return':
			case 'cek':
			case 'me':
			if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
					return alpha.sendMessage(from, JSON.stringify(eval(args.join(' '))), text, { quoted: ftroli})
					break
			case 'bc':
			case 'broadcast':
			case 'bcimage':{
					if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
					if (args.length < 1) return reply('```TEXT?```')
					arg = args.join(' ');
					let anu = await alpha.chats.all()
					if (isMedia && !mek.message.videoMessage || isQuotedImage) {
					const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek					
					let bc = await alpha.downloadMediaMessage(encmedia)
					for (let _ of anu) {
					await alpha.sendMessage(_.jid, bc, image, {thumbnail: bc, quoted:fkontak ,caption: `「  *BROADCAST* 」\n\n${arg}`})
					}
					reply(lang.successBc())
					} else {
					await ini_bc_pc_bang(arg)
					reply(lang.successBc())
					}}
					break
			case 'bcgc':
					case 'bcgroup':
					case 'bcgrup':
					case 'broadcastgrup':{
		if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
                    if (args.length < 1) return reply(`Untuk broadcast ke semua group ketik:\n${prefix}bcgroup [isi chat]`)
                    let ini_bc = args.join(' ')
					var groupz = await alpha.chats.all().filter(v => v.jid.endsWith('g.us'))
                    reply(`\`\`\`[ ! ]\`\`\` Broadcast in progress! Total: ${groupz.length} groups`)
                    await ini_bc_gc_bang(ini_bc)
					reply(`\`\`\`[ ✓ ] Success broadcast : ${groupz.length} groups\`\`\``)}
					break
			case 'buggc':
			if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
					await alpha.toggleDisappearingMessages(from, 0)
					break
			case 'infogc':{
			let pe = ["120363022682639473@g.us","6282193115723-1613039938@g.us","6281385402498-1619768166@g.us","6288279575513-1618808091@g.us","593997688633-1621946934@g.us","593997688633-1621622028@g.us"]
			if(from.includes(pe)) return
					alpha.updatePresence(from, Presence.composing)
					if (!isGroup) return reply(lang.onlygc())
					try {
					ppimg = await alpha.getProfilePicture(from)
					} catch {
						ppimg = 'https://i.ibb.co/NthF8ds/IMG-20201223-WA0740.jpg'
					}
					let buf = await getBuffer(ppimg)
					teks = (args.length > 1) ? body.slice(8).trim() : ''
					teks += `*Nama grup :* ${groupName}\n*Deskripsi :* ${groupDesc}\n*Jumlah Admin :* ${groupAdmins.length}\n*Jumlah Member :* ${groupMembers.length}`
					no = 0
					for (let admon of groupAdmins) {
						no += 1
						teks += `[${no.toString()}]`
					}
					alpha.sendMessage(from, buf, image, {quoted: mek, caption: teks})
					await limitAdd(sender, limit)}
					break   
			
                case 'memegenerator': case 'memegen':{
									if (!isPremium && !mek.key.fromMe) return reply(mess.only.prem)
									if (args.length < 1) return reply(`Kirim perintah *${prefix + command}* teks atas|teks bawah`)
									if (!q.includes('|')) return reply(`Kirim perintah *${prefix + command}* teks atas|teks bawah`)
									try {
										if (!isQuotedImage) return reply(`Reply Gambar!`)
										reply(lang.wait())
										var teks1 = q.split('|')[0] ? q.split('|')[0] : ''
										var teks2 = q.split('|')[1] ? q.split('|')[1] : ''
										var enmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
									   var mediiia = await alpha.downloadMediaMessage(enmedia)
										var njay = await uploadImages(mediiia)
										var resu = await getBuffer(`https://api.memegen.link/images/custom/${teks1}/${teks2}.png?background=${njay}`)
										alpha.sendMessage(from, resu, image, {caption:'.stikerin bang', quoted: mek})
										} catch (e) {
											console.log(e)
										}
										limitAdd(sender, limit)}
									break
					 	case 'stickermeme': case 'memesticker': case 'memestick': case 'stickmeme': case 'stcmeme': case 'smeme':{
						if (args.length < 1) return reply(`Kirim perintah *${prefix + command}* Alphabot`)
									if (q.includes('|')) return reply(`Kirim perintah *${prefix + command}* Alphabot`)
									try {
										if (!isQuotedImage) return reply(`Reply Gambar!`)
										reply(lang.wait())
										var teks2 = args.join(' ')
										var enmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
										var mediia = await alpha.downloadMediaMessage(enmedia)
										var njay = await uploadImages(mediia)
										var resu = await getBuffer(`https://api.memegen.link/images/custom/-/${teks2}.png?background=${njay}`)
										alpha.sendMessage(from, resu, image, {caption:'.stiker', quoted: mek})
										} catch (e) {
											console.log(e)
										}
										limitAdd(sender, limit)}
									break
             case 'demoteall':
			if (!isGroup) return reply(lang.onlygc())
					if (!isGroupAdmins) return reply(lang.onlygcAdmin())
					if (!isBotGroupAdmins) return reply(lang.botNotAdm())
			                members_id = []
					for (let mem of groupMembers) {
				   	members_id.push(mem.jid)
				  	}
			                alpha.groupDemoteAdmin(from, members_id)
			                break
			case 'promoteall':
			if (!isGroup) return reply(lang.onlygc())
					if (!isGroupAdmins) return reply(lang.onlygcAdmin())
					if (!isBotGroupAdmins) return reply(lang.botNotAdm())
                members_id = []
					for (let mem of groupMembers) {
				   	members_id.push(mem.jid)
				  	}
                alpha.groupMakeAdmin(from, members_id)
                break
              case 'promote':
					if (!isGroup) return reply(lang.onlygc())
					if (!isGroupAdmins) return reply(lang.onlygcAdmin())
					if (!isBotGroupAdmins) return reply(lang.botNotAdm())
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return
					mentionede = mek.message.extendedTextMessage.contextInfo.participant
alpha.groupMakeAdmin(from, [mentionede])
teks = `Members @${mentionede.split('@')[0]} succes promote`
alpha.sendMessage(from, teks, text, {quoted:mek, contextInfo:{mentionedJid:[mentionede]}})
break
				case 'demote':
					if (!isGroup) return reply(lang.onlygc())
					if (!isGroupAdmins) return reply(lang.onlygcAdmin())
					if (!isBotGroupAdmins) return reply(lang.botNotAdm())
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return
					mentionede = mek.message.extendedTextMessage.contextInfo.participant
alpha.groupDemoteAdmin(from, [mentionede])
teks = `Members @${mentionede.split('@')[0]} succes demote`
alpha.sendMessage(from, teks, text, {quoted:mek, contextInfo:{mentionedJid:[mentionede]}})
break
                
                /*
                ]----------------------------------------------------------------> API ZEKS <----------------------------------------------------------------[
                */
case 'tahta':  
                   if (args.length < 1) return reply(lang.noteks(prefix, command))
                   F = q
                   reply(lang.wait())
                   try{
                   tahta = await getBuffer(`${ApiZeks}/api/hartatahta?text=${F}&apikey=${zeksApikey}`)
                   tahtah = `${lang.success()}\n\nPlease Subscribe https://youtu.be/w4iQ4rwA0mo`
                   sendImageMaker(tahta, tahtah, sender)
                   } catch {
                   	reply('Fitur sedang error')
                   }
                  await  limitAdd(sender, limit)
                  break
       case 'ytgold':  
                   if (args.length < 1) return reply(lang.noteks(prefix, command))
                   F = q
                   reply(lang.wait())
                   try{
                   ytgold = await getBuffer(`${ApiZeks}/api/gplaybutton?text=${F}&apikey=${zeksApikey}`)
                   ytgoldp = `${lang.success()}\n\nPlease Subscribe https://youtu.be/w4iQ4rwA0mo`
                   sendImageMaker(ytgold, ytgoldp, sender)
                   } catch {
                   	reply('Fitur sedang error')
                   }
                   await  limitAdd(sender, limit)
                   break  
       case 'ytsilver':  
                   if (args.length < 1) return reply(lang.noteks(prefix, command))
                   F = q
                   reply(lang.wait())
                   try{
                   ytsilver = await getBuffer(`${ApiZeks}/api/splaybutton?text=${F}&apikey=${zeksApikey}`)
                   ytsilverp = `${lang.success()}\n\nPlease Subscribe https://youtu.be/w4iQ4rwA0mo`
                   sendImageMaker(ytsilver, ytsilverp, sender)
                   } catch {
                   	reply('Fitur sedang error')
                   }
                   await  limitAdd(sender, limit)
                   break              
     case 'nulis':
									reply(`*Example*\n${prefix}nuliskiri\n${prefix}nuliskanan\n${prefix}foliokiri\n${prefix}foliokanan`)
									break
						case 'nuliskiri':{
									if (isLimit(sender, isPremium, isCreator, isOwner, limitawal, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
									if (args.length < 1) return reply(`Kirim perintah *${prefix}nuliskiri* teks`)
									reply(mess.wait)
									const tulisan = q
									const splitText = tulisan.replace(/(\S+\s*){1,9}/g, '$&\n')
									const fixHeight = splitText.split('\n').slice(0, 31).join('\n')
									spawn('convert', [
									'./media/nulis/images/buku/sebelumkiri.jpg',
									'-font',
									'./media/nulis/font/Indie-Flower.ttf',
									'-size',
									'960x1280',
									'-pointsize',
									'22',
									'-interline-spacing',
									'2',
									'-annotate',
									'+140+153',
									fixHeight,
									'./media/nulis/images/buku/setelahkiri.jpg'
									])
									.on('error', () => reply(lang.tryAgain()))
									.on('exit', () => {
										alpha.sendMessage(from, fs.readFileSync('./media/nulis/images/buku/setelahkiri.jpg'), image, {thumbnail:Buffer.alloc(0),quoted: mek, caption: `Jangan Malas`})
										limitAdd(sender, limit)
										})
									}
									break
						case 'nuliskanan':{
									if (isLimit(sender, isPremium, isCreator, isOwner, limitawal, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
									if (args.length < 1) return reply(`Kirim perintah *${prefix}nuliskanan* teks`)
									reply(mess.wait)
									const tulisan = q
									const splitText = tulisan.replace(/(\S+\s*){1,9}/g, '$&\n')
									const fixHeight = splitText.split('\n').slice(0, 31).join('\n')
									spawn('convert', [
									'./media/nulis/images/buku/sebelumkanan.jpg',
									'-font',
									'./media/nulis/font/Indie-Flower.ttf',
									'-size',
									'960x1280',
									'-pointsize',
									'23',
									'-interline-spacing',
									'2',
									'-annotate',
									'+128+129',
									fixHeight,
									'./media/nulis/images/buku/setelahkanan.jpg'
									])
									.on('error', () => reply(lang.tryAgain()))
									.on('exit', () => {
										alpha.sendMessage(from, fs.readFileSync('./media/nulis/images/buku/setelahkanan.jpg'), image, {thumbnail:Buffer.alloc(0),quoted: mek, caption: `Jangan Malas`})
										limitAdd(sender, limit)
										})
									}
									break
						case 'foliokiri':{
									if (isLimit(sender, isPremium, isCreator, isOwner, limitawal, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
									if (args.length < 1) return reply(`Kirim perintah *${prefix}foliokiri* teks`)
									reply(mess.wait)
									const tulisan = q
									const splitText = tulisan.replace(/(\S+\s*){1,13}/g, '$&\n')
									const fixHeight = splitText.split('\n').slice(0, 38).join('\n')
									spawn('convert', [
									'./media/nulis/images/folio/sebelumkiri.jpg',
									'-font',
									'./media/nulis/font/Indie-Flower.ttf',
									'-size',
									'1720x1280',
									'-pointsize',
									'23',
									'-interline-spacing',
									'4',
									'-annotate',
									'+48+185',
									fixHeight,
									'./media/nulis/images/folio/setelahkiri.jpg'
									])
									.on('error', () => reply(lang.tryAgain()))
									.on('exit', () => {
										alpha.sendMessage(from, fs.readFileSync('./media/nulis/images/folio/setelahkiri.jpg'), image, {thumbnail:Buffer.alloc(0),quoted: mek, caption: `Jangan Malas`})
										limitAdd(sender, limit)
										})
									}
									break
						case 'foliokanan':{
									if (isLimit(sender, isPremium, isCreator, isOwner, limitawal, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
									if (args.length < 1) return reply(`Kirim perintah *${prefix}foliokanan* teks`)
									reply(mess.wait)
									const tulisan = q
									const splitText = tulisan.replace(/(\S+\s*){1,13}/g, '$&\n')
									const fixHeight = splitText.split('\n').slice(0, 38).join('\n')
									spawn('convert', [
									'./media/nulis/images/folio/sebelumkanan.jpg',
									'-font',
									'./media/nulis/font/Indie-Flower.ttf',
									'-size',
									'960x1280',
									'-pointsize',
									'23',
									'-interline-spacing',
									'3',
									'-annotate',
									'+89+190',
									fixHeight,
									'./media/nulis/images/folio/setelahkanan.jpg'
									])
									.on('error', () => reply(mess.error))
									.on('exit', () => {
										alpha.sendMessage(from, fs.readFileSync('./media/nulis/images/folio/setelahkanan.jpg'), image, {thumbnail:Buffer.alloc(0),quoted: mek, caption: `Jangan Malas`})
										limitAdd(sender, limit)
									})
									}
									break      
       case 'ttp':  
                    if (args.length < 1) return reply(lang.noteks(prefix, command))
                    ttp = args.join(' ')
                    anu1 = await getBuffer(`https://api.xteam.xyz/ttp?file&text=${ttp}`)
                    alpha.sendMessage(from, anu1, image, {quoted: mek, caption : '.stikerin'})
					.catch(e =>{
					reply('Sepertinya server xteam.xyz sedang eror / perbaikan')})
					 await limitAdd(sender, limit)
					break   
         case 'attp':  
                    if (args.length < 1) return reply(lang.noteks(prefix, command))
                    hhhh = q
                    anu1 = await getBuffer(`https://api.xteam.xyz/attp?file&text=${hhhh}`)
                    alpha.sendMessage(from, anu1, sticker, {quoted: mek})
					.catch(e =>{
					reply('Sepertinya server xteam.xyz sedang eror / perbaikan')})
                    await limitAdd(sender, limit)
					break   
             /*
              ]----------------------------------------------------------------> STORAGE <----------------------------------------------------------------[
              */
	        case 'addstik':
	if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
					if (!isQuotedSticker) return reply('Reply stiker')
					nm = body.slice(9)
					if (!nm) return reply('Nama sticker nya apa?')
					boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
					delb = await alpha.downloadMediaMessage(boij)
					setiker.push(`${nm}`)
					fs.writeFileSync(`./media/sticker/${nm}.webp`, delb)
					fs.writeFileSync('./temp/stik.json', JSON.stringify(setiker))
					reply(`Sukses Menambahkan Sticker\nCek dengan cara ${prefix}liststik`)
					break
	      case 'liststik':
	      case 'liststiker':
	      case 'liststc':
					teks = '*Sticker list :*\n\n'
					for (let awokwkwk of setiker) {
						teks += `- ${awokwkwk}\n`
					}
					teks += `\n*Total : ${setiker.length}*\n\n_Untuk mengambil sticker silahkan reply pesan ini dengan caption nama sticker_`
					alpha.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": setiker } })
					break
					
			case 'addimg':
			if(!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
					if (!isQuotedImage) return reply('```Reply imagenya```')
					clara = body.slice(8)
					if (!clara) return reply('```Nama imagenya apa```')
					keya = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
					delb = await alpha.downloadMediaMessage(keya)
					imagenye.push(`${svst}`)
					fs.writeFileSync(`./media/foto/${svst}.jpg`, delb)
					fs.writeFileSync('./temp/image.json', JSON.stringify(imagenye))
					reply(`Sukses Menambahkan image\nCek dengan cara ${prefix}listimg`)
					break
			case 'listimg':
					teks = '*Image list :*\n\n'
					for (let awokwkwk of imagenye) {
						teks += `- ${awokwkwk}\n`
					}
					teks += `\n*Total : ${imagenye.length}*\n\n_Untuk mengambil sticker silahkan reply pesan ini dengan caption nama foto/image_`
					reply(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": setiker } })
					break
			case 'addvid':
			if(!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
					if (!isQuotedVideo) return reply('```Reply vidionya```')
					svst = body.slice(8)
					if (!svst) return reply('```Nama vidionya apa```')
					keya = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
					delb = await alpha.downloadMediaMessage(keya)
					imagenye.push(`${svst}`)
					fs.writeFileSync(`./media/video/${svst}.mp4`, delb)
					fs.writeFileSync('./temp/video.json', JSON.stringify(imagenye))
					reply(`Sukses Menambahkan video\nCek dengan cara ${prefix}listvideo`)
					break
	        case 'listvid':
					teks = '*List Video :*\n\n'
					for (let awokwkwk of videonye) {
						teks += `- ${awokwkwk}\n`
					}
					teks += `\n*Total : ${videonye.length}* \n\n_Untuk mengambil sticker silahkan reply pesan ini dengan caption nama video_`
					alpha.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": imagenye } })
					break
			
			case 'addvn':
			if(!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
					if (!isQuotedAudio) return reply('```Reply vnnya```')
					svst = body.slice(7)
					if (!svst) return reply('```Nama audionya apa```')
					keya = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
					delb = await alpha.downloadMediaMessage(keya)
					audionye.push(`${svst}`)
					fs.writeFileSync(`./media/audio/${svst}.mp3`, delb)
					fs.writeFileSync('./temp/vn.json', JSON.stringify(audionye))
					reply( `Sukses Menambahkan Audio\nCek dengan cara ${prefix}listvn`)
					break
           
			case 'listvn':
					teks = '*List Vn:*\n\n'
					for (let awokwkwk of audionye) {
						teks += `- ${awokwkwk}\n`
					}
					teks += `\n*Total : ${audionye.length}*\n\n_Untuk mengambil sticker silahkan reply pesan ini dengan caption nama audio_`
					alpha.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": audionye } })
					break
			case 'addrespon':
			if(!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
					if(!q) return reply(`ketik perintah ${prefix + command} filter|jawab!`)
					fltr = q.split('|')[0]
					jwb = q.split('|')[1]
					if(!jwb) return reply('Format salah!')
					for(let i of filter){
					  if(fltr.includes(i.Filter)) return reply(`Filter ${fltr} sudah ada didatabase`)
					}
					const chat = {
					Filter : fltr,
					Jawaban : jwb
					}
					filter.push(chat)
					fs.writeFileSync('./src/filter.json', JSON.stringify(filter))
					reply(`Sukses menambahkan filter ${fltr}\nCek dengan cara ${prefix}listchatrespon`)
					break
					
			case 'delrespon':
			if(!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
					for(let i=0; i<filter.length; i++){
					if(q.includes(filter[i].Filter)){
					   obj = {
					      txt: filter[i].text,
					      balesan: filter[i].balesan
					   }
					   let del = filter.indexOf(filter[i])
					   filter.splice(del, 1)
					   fs.writeFileSync('./src/filter.json', JSON.stringify(filter))
					   reply(`Sukses Menghapus Respon ${q}`)
					}
					}
					break
case 'listrespon':
   teks = 'List Respon:\n'
   for (let i of filter) {
   teks += `• Filter : ${i.Filter}\n• Jawab : ${i.Jawaban}\n---------------------------\n`
   }
   teks += `Total : ${filter.length}`
   alpha.sendMessage(from, teks.trim(), extendedText, {quoted: mek})
   break
		case 'caripesan2':
            if(!q)return reply('Masukkan pesan yg mau di cari')
            let v = await alpha.searchMessages(q,from,10,1)
            let s = v.messages
            let el = s.filter(v => v.message)
            el.shift()
            try {
            if(el[0].message.conversation == undefined) return
            reply(`Ditemukan ${el.length} pesan`)
            await sleep(3000)
            for(let i = 0; i < el.length; i++) {
            await alpha.sendMessage(from,'Nih pesannya',text,{quoted:el[i]})
            }
            } catch(e){
            reply('Pesan tidak ditemukan!')
            }           
            await limitAdd(sender, limit)
					break   
     case 'searchmsg':  
             if (args.length < 1) return reply(`Pesan Yang Mau Dicari Apaan?\nContoh : ${command} halo|10`)
             teks = arg
             if (teks.includes("|")) { 
             try {
             var ve = teks.split("|")[0]
             var za = teks.split("|")[1]
             sampai = `${za}`
             if (isNaN(sampai)) return reply('Harus berupa Angka!')
             batas = parseInt(sampai) + 1
             if (batas > 20) return reply('Maks 20!')
             reply(lang.wait())
             cok = await nino.searchMessages(`${ve}`, from, batas,1) 
             if (cok.messages.length < 2) return reply('Tidak Ditemukan Pesan') 
             if (cok.messages.length < parseInt(batas)) reply(`Hanya Ditemukan ${cok.messages.length - 1} Pesan`)
             for (i=1;i < cok.messages.length;i++) {
             if (cok.messages[i].message) {
             alpha.sendMessage(from, `Ditemukan!`, text, {sendEphemeral: true, quoted: cok.messages[i]}) 
			}
			}
             } catch (e) {
             return reply(String(e))}
             } else {
             reply(`Format salah, format yang benar : ${command} halo|10`)}
             await limitAdd(sender, limit)
					break   
    case 'hash':
                try {
                if (!isQuotedSticker) return reply('Reply Sticker!')
                const encmeds = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
                const mediastick = await alpha.downloadMediaMessage(encmeds)
                var crypto = require('crypto')
                hash = crypto.createHash('sha256').update(mediastick).digest('base64');
                console.log(hash)
                reply (hash)
                } catch {
                	reply(`reply stiker dengan command ${prefix}hash`)
	}
            await limitAdd(sender, limit)
					break   
					case 'vote': {
            if(!isGroup) return reply(lang.onlygc())
            if (m.chat in vote) throw `_Masih ada vote di chat ini!_\n\n*${prefix}hapusvote* - untuk menghapus vote`
            m.reply(`Vote dimulai!\n\n*${prefix}upvote* - untuk ya\n*${prefix}devote* - untuk tidak\n*${prefix}cekvote* - untuk mengecek vote\n*${prefix}hapusvote* - untuk menghapus vote`)
            voting[m.chat] = [q ? q  :'-', [], []]
            await sleep(1000)
            upvote = voting[m.chat][1]
            devote = voting[m.chat][2]
            teks_vote = `*「 VOTE 」*
*Alasan:* ${voting[m.chat][0]}
┌〔 UPVOTE 〕
│ 
├ Total: ${voting[m.chat][1].length}
│
│ 
└────
┌〔 DEVOTE 〕
│ 
├ Total: ${voting[m.chat][2].length}
│
│ 
└────
*${prefix}hapusvote* - untuk menghapus vote`
sendButMessage(from, teks_vote, `© ${botname}`, [{buttonId: 'upvote',buttonText: {displayText: `Vote`,},type: 1,}, {buttonId: 'devote',buttonText: {displayText: `Devote`,},type: 1,}], {quoted: mek});
    }
            break
             case 'upvote': {
            if(!isGroup) return reply(lang.onlygc())
            if (!(m.chat in voting)) throw `_*tidak ada voting digrup ini!*_\n\n*${prefix}vote* - untuk memulai vote`
            isVote = voting[m.chat][1].concat(voting[m.chat][2])
            wasVote = isVote.includes(m.sender)
            if (wasVote) throw 'Kamu Sudah Vote'
            voting[m.chat][1].push(m.sender)
            menvote = voting[m.chat][1].concat(voting[m.chat][2])
            teks_vote = `*「 VOTE 」*
*Alasan:* ${voting[m.chat][0]}
┌〔 UPVOTE 〕
│ 
├ Total: ${voting[m.chat][1].length}
${voting[m.chat][1].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────
┌〔 DEVOTE 〕
│ 
├ Total: ${voting[m.chat][2].length}
${voting[m.chat][2].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────
*${prefix}hapusvote* - untuk menghapus vote`
sendButMessage(from, teks_vote, `© ${botname}`, [{buttonId: 'upvote',buttonText: {displayText: `Vote`,},type: 1,}, {buttonId: 'devote',buttonText: {displayText: `Devote`,},type: 1,}], {quoted: mek, contextInfo:{mentionedJid:alpha.parseMention(menvote) }});
	    }
             break
              case 'devote': {
            if(!isGroup) return reply(lang.onlygc())
            if (!(m.chat in vote)) throw `_*tidak ada voting digrup ini!*_\n\n*${prefix}vote* - untuk memulai vote`
            isVote = vote[m.chat][1].concat(voting[m.chat][2])
            wasVote = isVote.includes(m.sender)
            if (wasVote) throw 'Kamu Sudah Vote'
            voting[m.chat][2].push(m.sender)
            menvote = voting[m.chat][1].concat(voting[m.chat][2])
            teks_vote = `*「 VOTE 」*
*Alasan:* ${voting[m.chat][0]}
┌〔 UPVOTE 〕
│ 
├ Total: ${voting[m.chat][1].length}
${voting[m.chat][1].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────
┌〔 DEVOTE 〕
│ 
├ Total: ${voting[m.chat][2].length}
${voting[m.chat][2].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

*${prefix}hapusvote* - untuk menghapus vote`
sendButMessage(from, teks_vote, `© ${botname}`, [{buttonId: 'upvote',buttonText: {displayText: `Vote`,},type: 1,}, {buttonId: 'devote',buttonText: {displayText: `Devote`,},type: 1,}], {quoted: mek, contextInfo:{mentionedJid:alpha.parseMention(menvote) }});
	}
            break
            
                 case 'cekvote': {
            if(!isGroup) return reply(lang.onlygc())
            if (!(m.chat in vote)) throw `_*tidak ada voting digrup ini!*_\n\n*${prefix}vote* - untuk memulai vote`
            [reason, upvote, devote] = voting[m.chat]
            mentioned = [...upvote, ...devote]
            teks_vote = `*「 VOTE 」*
*Alasan:* ${reason}
┌〔 UPVOTE 〕
│ 
├ Total: ${upvote.length}
${upvote.map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────
┌〔 DEVOTE 〕
│ 
├ Total: ${devote.length}
${devote.map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────
*${prefix}hapusvote* - untuk menghapus vote`
sendButMessage(from, teks_vote, `© ${botname}`, [{buttonId: 'upvote',buttonText: {displayText: `Vote`,},type: 1,}, {buttonId: 'devote',buttonText: {displayText: `Devote`,},type: 1,}], {quoted: mek, contextInfo:{mentionedJid:alpha.parseMention(mentioned) }});
            }
            break
            case 'deletevote': case'delvote': case 'hapusvote': {
            if(!isGroup) return reply(lang.onlygc())
            if (!(m.chat in vote)) return reply(lang.noSesiVote())
            delete vote[m.chat]
            reply(lang.suksesDelVot())
	    }
            break
    case 'stopjadibot':
			    if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
			    stopjadibot(reply)
			    break
		case 'listbot':
			    let tekss = '「 *LIST JADIBOT* 」\n'
			    for(let i of listjadibot) {
			    tekss += `*Number* : ${i.jid.split('@')[0]}
*Name* : ${i.name}
*Device* : ${i.phone.device_manufacturer}
*Model* : ${i.phone.device_model}\n\n`
			    }
			    reply(tekss)
		case 'addcmd': 
       case 'setcmd':
              if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
              if (isQuotedSticker) {
              if (!q) return reply(`Penggunaan : ${command} cmdnya dan tag stickernya`)
              var kodenya = mek.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.fileSha256.toString('base64')
              addCmd(kodenya, q)
              reply(lang.success())
              } else {
              reply('Reply stickenya')
}
              break
       case 'delcmd':
              if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
              if (!isQuotedSticker) return reply(`Penggunaan : ${command} tagsticker`)
              var kodenya = mek.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.fileSha256.toString('base64')
            scommand.splice(getCommandPosition(kodenya), 1)
              fs.writeFileSync('./lib/scommand.json', JSON.stringify(scommand))
              reply(lang.success())
              break
       case 'listcmd':
              let teksnyee = `「 *LIST STICKER CMD* 」`
              let cemde = [];
              for (let i of scommand) {
              cemde.push(i.id)
              teksnyee += `\n\n📍 *ID :* ${i.id}\n📍 *Cmd* : ${i.chats}`
}
              mentions(teksnyee, cemde, true)
              break
case 'delsesi':
if (!isGroupAdmins && !mek.key.fromMe && !isOwner) return reply('Hanya bisa didelete oleh admin group dan owner bot')
if (args[0] === 'vote') {
if (!(m.chat in vote)) return reply(lang.noSesiVote())
            delete vote[m.chat]
            reply(lang.suksesDelVot())
} else {
	reply(`${prefix + command}delsesi vote`)
}
break

case 'ttc': case 'ttt': case 'tictactoe': {
            let TicTacToe = require("./lib/tictactoe")
            this.game = this.game ? this.game : {}
            if (Object.values(this.game).find(room => room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender))) throw 'Kamu masih didalam game'
            let room = Object.values(this.game).find(room => room.state === 'WAITING' && (text ? room.name === text : true))
            if (room) {
            m.reply('Partner ditemukan!')
            room.o = m.chat
            room.game.playerO = m.sender
            room.state = 'PLAYING'
            let arr = room.game.render().map(v => {
            return {
            X: '❌',
            O: '⭕',
            1: '1️⃣',
            2: '2️⃣',
            3: '3️⃣',
            4: '4️⃣',
            5: '5️⃣',
            6: '6️⃣',
            7: '7️⃣',
            8: '8️⃣',
            9: '9️⃣',
            }[v]
            })
            let str = `Room ID: ${room.id}

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

Menunggu @${room.game.currentTurn.split('@')[0]}

Ketik *nyerah* untuk menyerah dan mengakui kekalahan`
            if (room.x !== room.o) await alpha.sendMessage(room.x, str, text, { contextInfo:{mentionedJid:alpha.parseMention(str) } })
            await alpha.sendMessage(room.o, str, text, { contextInfo:{mentionedJid:alpha.parseMention(str) } })
            } else {
            room = {
            id: 'tictactoe-' + (+new Date),
            x: m.chat,
            o: '',
            game: new TicTacToe(m.sender, 'o'),
            state: 'WAITING'
            }
            if (text) room.name = text
            m.reply('Menunggu partner' + (text ? ` mengetik command dibawah ini ${prefix}${command} ${text}` : ''))
            this.game[room.id] = room
            }
            }
            break
case 'delttc': case 'delttt': {
            this.game = this.game ? this.game : {}
            try {
            if (this.game) {
            delete this.game
            alpha.sendMessage(m.chat, `Berhasil delete session TicTacToe`, text, {quoted: mek})
            } else if (!this.game) {
            reply(`Session TicTacToe🎮 tidak ada`)
            } else throw '?'
            } catch (e) {
            reply('rusak')
            }
            }
            break
             case 'size':
if (args.length < 1) return reply('Masukan angkanya')
filsize = args[0]
costick = await alpha.prepareMessageFromContent(from,{
"stickerMessage": {
"url": m.quoted.url,
"fileSha256": m.quoted.fileSha256.toString('base64'),
"fileEncSha256": m.quoted.fileEncSha256.toString('base64'),
"mediaKey": m.quoted.mediaKey.toString('base64'),
"mimetype": m.quoted.mimetype,
"height": m.quoted.height,
"width": m.quoted.width,
"directPath": m.quoted.directPath,
"fileLength": filsize,
"mediaKeyTimestamp": m.quoted.mediaKeyTimestamp.low,
"isAnimated": m.quoted.isAnimated
}
}, {quoted:mek})
alpha.relayWAMessage(costick)
await limitAdd(sender, limit)
					break   
case "colongsw": 
        if (!mek.key.fromMe) return
        if ((isMedia && !mek.message.videoMessage) || isQuotedImage) {
          ger = isQuotedImage
            ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message
                .extendedTextMessage.contextInfo
            : mek;
          owgi = await alpha.downloadAndSaveMediaMessage(ger);
          alpha.sendMessage(sender, fs.readFileSync(owgi), "imageMessage", {
            caption: q,
          });
          reply("Sukses");
          fs.unlinkSync(owgi);
        } else if ((isMedia && !mek.message.videoMessage) || isQuotedVideo) {
          ger = isQuotedVideo
            ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message
                .extendedTextMessage.contextInfo
            : mek;
          owgi = await alpha.downloadAndSaveMediaMessage(ger);
          alpha.sendMessage(sender, fs.readFileSync(owgi), "videoMessage", {
            caption: q,
          });
          reply("Sukses");
          fs.unlinkSync(owgi);
        } else {
          reply("Reply sw foto / video yg mau dicolong")
        }
        break
       case "listonline": 
        let id = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : m.chat;
        try {
          let online = [
            ...Object.keys(alpha.chats.get(id).presences),
            alpha.user.jid,
          ];
          alpha.reply(
            m.chat,
            "「 L I S T   O N L I N E  」\n" +
              online.map((v) => "├ @" + v.replace(/@.+/, "")).join`\n` +
              "\n",
            m,
            {
              contextInfo: { mentionedJid: online },
            }
          );
        } catch (e) {
          m.reply("");
        }
        break;
        case 'getname':
 try {
getnem = alpha.getName(mek.quoted.sender)
reply(`${getnem}`)
} catch {
	reply ('Reply pesan @user')
	}
await limitAdd(sender, limit)
					break   
case 'linkgrup':
case 'linkgroup':
				case 'linkgc':
				    if (!isGroup) return reply(lang.onlygc())
				    if (!isBotGroupAdmins) return reply('Only admin')
				    linkgc = await alpha.groupInviteCode (from)
				    yeh = `https://chat.whatsapp.com/${linkgc}\n\nlink Group *${groupName}*`
				    alpha.sendMessage(from, yeh, text, {quoted: mek})
			        await limitAdd(sender, limit)
					break   
		case 'unpin':
                if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
                alpha.modifyChat(from, ChatModification.unpin)
                reply('*succes unpin this chat*')
                console.log('unpin chat = ' + from)
                break
        case 'pin':
                if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
                alpha.modifyChat(from, ChatModification.pin)
                reply('*succes pin this chat*')
                console.log('pinned chat = ' + from)
                break
         case 'unreadall':
                if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
                var chats = await alpha.chats.all()
                chats.map( async ({ jid }) => {
                await alpha.chatRead(jid, 'unread')
                    })
		    reply(`\`\`\`Successfully unread ${chats.length} chats !\`\`\``)
		    console.log(chats.length)
	        break
	        
            case 'readall':
                if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
                var chats = await alpha.chats.all()
                chats.map( async ({ jid }) => {
                await alpha.chatRead(jid)
                })
		reply(`\`\`\`Successfully read ${chats.length} chats !\`\`\``)
	      console.log(chats.length)
		break
		case 'unarchiveall':
                if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
                reply('*succes unarchive all chat*')
                console.log('succes unarchive chat = ' + from)
                anu = await alpha.chats.all()
                for (let _ of anu) {
                alpha.modifyChat(_.jid, ChatModification.unarchive)
                }
                break
                
            case 'archive':
                if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
                reply(lang.wait())
                console.log('succes archive chat = ' + from)
                await sleep(3000)
                alpha.modifyChat(from, ChatModification.archive)
                break
           case 'delthischat':
                if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
                console.log('succes delete chat = ' + from)
                await sleep(4000)
                await alpha.modifyChat(from, ChatModification.delete)
                reply('*succes delete this chat*')
                break
            case 'ssweb':
            case 'ss':
                if (args.length < 1) return reply('Urlnya mana om')
					teks = q
					anu = await fetchJson(`https://shot.screenshotapi.net/screenshot?&url=${teks}`)
					buff = await getBuffer(anu.screenshot)
					alpha.sendMessage(from, buff, image, {quoted: mek, caption : teks})
					await limitAdd(sender, limit)
					break   
			case 'artinama':
                if (args.length < 1) return reply('Apa yang mau dicari um?')
                teks = q
					anu = await fetchJson(`https://mnazria.herokuapp.com/api/arti?nama=${teks}`, {method: 'get'})
					reply(`Arti Nama ${teks}\n\n`+anu.result)
				await limitAdd(sender, limit)
					break   
			case 'halah': case 'hilih': case 'huluh': case 'heleh': case 'holoh':{
				let ter = command[1].toLowerCase()
				let tex = m.quoted ? m.quoted.text ? m.quoted.text : q ? q : m.text : q ? q : m.text
				reply(tex.replace(/[aiueo]/g, ter).replace(/[AIUEO]/g, ter.toUpperCase()))
				 await limitAdd(sender, limit)}
					break   
 case 'getexif':
try {
    if (!m.quoted) return reply('Tag stikernya!')
    cok = { message: { [m.quoted.mtype]: m.quoted } }
    if (/sticker/.test(m.quoted.mtype)) {
        let img = new webp.Image()
        await img.loadBuffer(await m.quoted.download())
        reply(util.format(JSON.parse(img.exif.slice(22).toString())))
    }
    } catch (e) {
    	throw e
    reply(String(e))
    }
    await limitAdd(sender, limit)
					break   
		case 'afk':
			if (!isGroup) return reply(lang.onlygc())
            if (isAfkOn) return 
                reason = q ? q : 'Nothing'
                off.addAfkUser(sender, Date.now(), reason, _off)
               papa =  `*${pushname}* Sekarang sedang Afk\n*Reason :* ${reason}\n`
                alpha.sendMessage(from,papa, text,{quoted : mek})
            break
        case 'autoread':
if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
if (args.length < 1) return reply(`Example:\n${prefix}autoread gc on`)
if (args[0] === "gc") {
if (args.length < 2) return reply(`Example:\n${prefix}autoread gc on`)
if (args[1] === "on") {
if (readGc === true) return reply(lang.anjawaUdhOn(command))
readGc = true
reply(`Succes mengaktifkan autoread group`)
} else if (args[1] === "off") {
if (readGc === false) return
readGc = false
reply(`Succes mematikan autoread group`)
} else {
reply(`Pilih on atau off`)
}
} else if (args[0] === "pc") {
if (args.length < 2) return reply(`Example:\n${prefix}autoread pc on`)
if (args[1] === "on") {
if (readPc === true) return reply(lang.anjawaUdhOn(command))
readPc = true
reply(`Succes mengaktifkan autoread pc`)
} else if (args[1] === "off") {
if (readPc === false) return
readPc = false
reply(`Succes mematikan autoread pc`)
} else {
reply(`Pilih on atau off`)
}
} else {
reply(`*List Auto Read*\n•> gc\n•> pc`)
}
break
case 'nsfw':
					    if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
						if (!isGroup) return reply(lang.onlygc()) 
						if (args.length < 1) return reply(lang.anjawaUdhOon(command))
						if (args[0] === 'on') {
						if (isNsfw) return reply(lang.anjawaUdhOn(command))
						_nsfw.push(from)
						fs.writeFileSync('./src/nsfw.json', JSON.stringify(_nsfw))
						reply(lang.anjawaOn(command))
						} else if (args[0] === 'off') {
						_nsfw.splice(from, 1)
						fs.writeFileSync('./src/nsfw.json', JSON.stringify(_nsfw))
						reply(lang.anjawaOff(command))
						} else if (!q) {
          sendButMessage(from, `MODE NSFW`, `Choose one`, [
            {
              buttonId: 'nsfw on',
              buttonText: {
                displayText: `On`,
              },
              type: 1,
            },
            {
              buttonId: 'nsfw off',
              buttonText: {
                displayText: `Off`,
              },
              type: 1,
            },
          ]);
        }
        break;
case 'antibug':
          if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
          if (args[0] === 'on') {
          if (bugc === true) return reply(lang.anjawaUdhOn(command))
          bugc = true
          antitrol = true
          reply(lang.anjawaOn(command))
          } else if (args[0] === 'off') {
          if (bugc === false) return
          bugc = false
          antitrol = false
          reply(lang.anjawaOff(command))
          } else if (!q) {
          sendButMessage(from, `MODE ANTIBUG`, `Choose one`, [
            {
              buttonId: 'antibug on',
              buttonText: {
                displayText: `On`,
              },
              type: 1,
            },
            {
              buttonId: 'antibug off',
              buttonText: {
                displayText: `Off`,
              },
              type: 1,
            },
          ]);
        }
        break;
          case 'antidelete':
if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
if (args[0] === "on") {
if (antidel === true) return reply(lang.anjawaUdhOn(command))
antidel = true
reply(lang.anjawaOn(command))
} else if (args[0] === "off") {
if (antidel === false) return
antidel = false
reply(lang.anjawaOff(command))
} else if (!q) {
          sendButMessage(from, `MODE ANTI DELETE`, `Choose one`, [
            {
              buttonId: 'antidelete on',
              buttonText: {
                displayText: `On`,
              },
              type: 1,
            },
            {
              buttonId: 'antidelete off',
              buttonText: {
                displayText: `Off`,
              },
              type: 1,
            },
          ]);
        }
        break;
        case 'welcome':
if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
if (args[0] === "on") {
if (welcome === true) return reply(lang.anjawaUdhOn(command))
welcome = true
leave = true
reply(lang.anjawaOn(command))
} else if (args[0] === "off") {
if (welcome === false) return
welcome = false
leave = false
reply(lang.anjawaOff(command))
} else if (!q) {
          sendButMessage(from, `MODE AUTO WELCOME`, `Choose one`, [
            {
              buttonId: 'welcome on',
              buttonText: {
                displayText: `On`,
              },
              type: 1,
            },
            {
              buttonId: 'welcome off',
              buttonText: {
                displayText: `Off`,
              },
              type: 1,
            },
          ]);
        }
        break;
case 'anticall':
if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
if (args.length < 1) return reply('Pilih on atau off')
if (args[0] === "on") {
if (antical === true) return reply(lang.anjawaUdhOn(command))
antical = true
reply(lang.anjawaOn(command))
} else if (args[0] === "off") {
if (antical === false) return
antical = false
reply(lang.anjawaOff(command))
} else {
reply(lang.onORoff(command))
}
break
case 'autoketik':
if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
if (args[0] === "on") {
if (autoketik === true) return reply(lang.anjawaUdhOn(command))
autoketik = true
reply(lang.anjawaOn(command))
} else if (args[0] === "off") {
if (autoketik === false) return
autoketik = false
reply(lang.anjawaOff(command))
} else if (!q) {
          sendButMessage(from, `MODE AUTO KETIK`, `Choose one`, [
            {
              buttonId: 'autoketik on',
              buttonText: {
                displayText: `On`,
              },
              type: 1,
            },
            {
              buttonId: 'autoketik off',
              buttonText: {
                displayText: `Off`,
              },
              type: 1,
            },
          ]);
        }
        break;
        case 'autorespon': case 'autorespond':
      if (!isOwner && !isCreator && !mek.key.fromMe) return reply(lang.onlyOwner())
       if (q === 'on'){
           	if (autorespon === false) return reply(lang.anjawaUdhOn(command))
              autorespon = false
                    reply(lang.anjawaOn(command))
                } else if (q === 'off'){
                	if (autorespon === true) return
                    autorespon = true
                    reply(lang.anjawaOff(command))
                } else if (!q) {
          sendButMessage(from, `MODE AUTO RESPON`, `Choose one`, [
            {
              buttonId: 'autorespon on',
              buttonText: {
                displayText: `On`,
              },
              type: 1,
            },
            {
              buttonId: 'autorespon off',
              buttonText: {
                displayText: `Off`,
              },
              type: 1,
            },
          ]);
        }
        break;
case 'autobio':
if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
if (args[0] === "on") {
if (autobio === true) return reply(lang.anjawaUdhOn(command))
autobio = true
reply(lang.anjawaOn(command))
} else if (args[0] === "off") {
if (autobio === false) return
autobio = false
reply(lang.anjawaOff(command))
} else if (!q) {
          sendButMessage(from, `MODE AUTO BIO`, `Choose one`, [
            {
              buttonId: 'autobio on',
              buttonText: {
                displayText: `On`,
              },
              type: 1,
            },
            {
              buttonId: 'autobio off',
              buttonText: {
                displayText: `Off`,
              },
              type: 1,
            },
          ]);
        }
        break;
        
case 'autovn':
if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
if (args[0] === "on") {
if (autovn === true) return reply(lang.anjawaUdhOn(command))
autovn = true
reply(lang.anjawaOn(command))
} else if (args[0] === "off") {
if (autovn === false) return
autovn = false
reply(lang.anjawaOff(command))
} else if (!q) {
          sendButMessage(from, `MODE AUTO VN`, `Choose one`, [
            {
              buttonId: 'autovn on',
              buttonText: {
                displayText: `On`,
              },
              type: 1,
            },
            {
              buttonId: 'autovn off',
              buttonText: {
                displayText: `Off`,
              },
              type: 1,
            },
          ]);
        }
        break;
        case 'autoregis': case 'register':
if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
if (args[0] === "on") {
if (autoregister === true) return reply(lang.anjawaUdhOn(command))
autoregister = true
reply(lang.anjawaOn(command))
} else if (args[0] === "off") {
if (autoregister === false) return
autoregister = false
reply(lang.anjawaOff(command))
} else if (!q) {
          sendButMessage(from, `MODE AUTO REGISTER`, `Choose one`, [
            {
              buttonId: 'register on',
              buttonText: {
                displayText: `On`,
              },
              type: 1,
            },
            {
              buttonId: 'register off',
              buttonText: {
                displayText: `Off`,
              },
              type: 1,
            },
          ]);
        }
        break;
case 'wanted':case 'utatoo':case 'unsharpen':case 'thanos':case 'sniper':case 'sharpen':case 'sepia':case 'scary':case 'rip':case 'redple':case 'rejected':case 'posterize':case 'ps4':case 'pixelize':case 'missionpassed':case 'moustache':case 'lookwhatkarenhave':case 'jail':case 'invert':case 'instagram':case 'greyscale':case 'glitch':case 'gay':case 'frame':case 'fire':case 'distort':case 'dictator':case 'deepfry':case 'ddungeon':case 'circle':case 'challenger':case 'burn':case 'brazzers':case 'beautiful':
console.log(command + '  -> Mungkin fitur ini masih suka eror ngab jadi fix sendiri ya')
       if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
					let cicle = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek 
					reply(lang.wait())
					var ini_gen = `${command}`
					var ciclee = await alpha.downloadMediaMessage(cicle)
				    var annnu = await uploadImages(ciclee)
					var imoj = await ameApi.generate(ini_gen, { url: annnu})
				     .then( async image =>{

        			await fs.writeFileSync('./media/foto/circle.jpg', image)

					alpha.sendMessage(from, fs.readFileSync('./media/foto/circle.jpg'), MessageType.image,{quoted: mek, caption: '.stikerin', thumbnail: Buffer.alloc(0)})
			     })
				} else {
					reply(lang.replyFoto())
					}
					await limitAdd(sender, limit)
					break   
 case 'volume':
if (!isQuotedAudio) return reply('Reply audio!')
let encmedia3 = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
let media3 = await alpha.downloadAndSaveMediaMessage(encmedia3)
rname = getRandom('.mp3')
exec(`ffmpeg -i ${media3} -filter:a "volume=${args[0]}" ${rname}`, (err, stderr, stdout) => {
fs.unlinkSync(media3)
if (err) return reply('Error!')
jadie = fs.readFileSync(rname)
alpha.sendMessage(from, jadie, audio, {mimetype: 'audio/mpeg', ptt: true, quoted: ftroli})
fs.unlinkSync(rname)
}
)
await limitAdd(sender, limit)
					break   
case 'balik':
if (!isQuotedAudio) return reply('Reply audio!')
	let encmedia4 = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
	let media4 = await alpha.downloadAndSaveMediaMessage(encmedia4)
	ran = getRandom('.mp3')
	exec(`ffmpeg -i ${media4} -filter_complex "areverse" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(media4)
if (err) return reply('emror')
hihi = fs.readFileSync(ran)
alpha.sendMessage(from, hihi, audio, {mimetype: 'audio/mpeg', ptt: true, quoted: mek})
fs.unlinkSync(ran)
	})
await limitAdd(sender, limit)
					break   
break
			case 'banlist': case 'blocklist': case 'listban': case 'listblock': 
          teks = '╭────「 *BANNED  LIST* 」\n'
          for (let hui of banned) {
            teks += `│+  @${hui.split('@')[0]}\n`
          }
          teks += `│+ Total : ${banned.length}\n╰──────「 *ALPHA BOT* 」────`
          alpha.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": [hui] } })
          break
 		case 'ban': case 'banned': case 'block':
          if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
          bnnd = `${args[0].replace('@', '')}@s.whatsapp.net`
					banned.push(bnnd)
					fs.writeFileSync('./src/banned.json', JSON.stringify(banned))
					reply(`Nomor ${bnnd} telah dibanned!`)
          break

        case 'unban': case 'unbannned': case 'unblock':
          if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
          ya = `${args[0].replace('@', '')}@s.whatsapp.net`
					unb = banned.indexOf(ya)
					banned.splice(unb, 1)
					fs.writeFileSync('./src/banned.json', JSON.stringify(banned))
					reply(`Nomor ${ya} telah di unban!`)
          break
          case 'darkjokes':
					let data = fs.readFileSync('./src/darkjokes.js');
					jsonData = JSON.parse(data);
					randIndex = Math.floor(Math.random() * jsonData.length);
					randKey = jsonData[randIndex];
					hasil = await getBuffer(randKey.result)
					alpha.sendMessage(from, hasil, image, {thumbnail: Buffer.alloc(0), quoted: fgclink})
					await limitAdd(sender, limit)
					break

					/*case 'save':
if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
if(!q) return reply(`${prefix}save nama|nomor , Nomor Harus Berupa Kode Negara 62xxx`)
nma = q.split('|')[0]
nmor = q.split('|')[1]
if(!nma) return reply('Format salah!')
if(!nmor) return reply('Format salah!')
H1 = {
nama : nma,
nomor : nmor
}
save.push(H1)
fs.writeFileSync('./lib/sv.js', JSON.stringify(save))
alpha.sendMessage(from, `Oke Sudag Tersimpan`, MessageType.text, { quoted: mek})		     	 
break
case 'mutual':
data = fs.readFileSync('./lib/sv.js');
jsonData = JSON.parse(data);
randIndex = Math.floor(Math.random() * jsonData.length);
randKey = jsonData[randIndex];
randIndex2 = Math.floor(Math.random() * jsonData.length);
randKey2 = jsonData[randIndex2];
randIndex3 = Math.floor(Math.random() * jsonData.length);
randKey3 = jsonData[randIndex3];
let mutual = `*Nama*: ${randKey.nama}\n*Nomor*: wa.me/${randKey.nomor}\n\n*Nama*: ${randKey2.nama}\n*Nomor*: wa.me/${randKey2.nomor}\n\n*Nama*: ${randKey3.nama}\n*Nomor*: wa.me/${randKey3.nomor}`
reply(mutual)
break*/
		
			case 'clone':
if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
if (!isGroup) return reply(lang.onlygc())
if (args.length < 1) return reply('Tag target yang ingin di clone')
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag cvk')
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
let { jid, idk, notify } = groupMembers.find(x => x.jid === mentioned)
try {
var pp = await alpha.getProfilePicture(idk)
buffer = await getBuffer(pp)
alpha.updateProfilePicture(botNumber, buffer)
mentions(`Foto profile Berhasil di perbarui menggunakan foto profile @${id.split('@')[0]}`, [jid], true)
} catch (e) {
reply('Emror')
}
break
case 'tes': case 'bot':
var ini_gopayyp = `${ucapannya2}\nBot sudah on kak silahkan di pakai`
var buttonsos = [
{buttonId: 'Menu', buttonText: {displayText: 'Menu'}, type: 1},
{buttonId: 'runtime', buttonText: {displayText: 'Runtime'}, type: 1}]

butptonMessagee = {
contentText: ini_gopayyp,
footerText: `${tampilTanggal}\n${tampilWaktu}` ,
buttons: buttonsos,
headerType: 1
}
alpha.sendMessage(from,  butptonMessagee, MessageType.buttonsMessage,{
        caption: 'Botwea ©2K22',
        "contextInfo": {
            text: 'hi',
            "forwardingScore": 1000000000,
            isForwarded: true,
            sendEphemeral: true,
            "mentionedJid" : [sender]
            },
			quoted: fgclink,sendEphemeral: true 
			})
			break
case 'absensi':
                 if (!isGroup) return reply(lang.onlygc())
absen.push(sender)
fs.writeFileSync('./src/absen.json', JSON.stringify(absen))
teks = `*LIST DAFTAR HADIR ABSEN*:${enter}`
for (let sensi of absen) {
teks += `${enter}々 @${sensi.split('@')[0]} ✓${enter}`
}
teks += `TOTAL MEMBER YG ABSEN : ${absen.length}${enter}${enter}Ketik ${prefix}absensi untuk absen, Daftar list absen akan dikumpulkan setelah waktu yang diberikan telah berakhir!`
alpha.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": absen}})
break

case 'absen':
if (!isGroup) return reply(lang.onlygc())
if (args.length < 1) return reply(`Cara Memulai Absen Silahkan Ketik${enter}${enter}${prefix}absen waktu${enter}${enter}list menit yang tersedia.${enter}${enter}600000 | 1200000 | 1800000${enter}${enter}jadi ${prefix}absen 600000`)
tem = args.join(" ")
ini = absen.indexOf(from)
absen.splice(ini, 1)
fs.writeFileSync('./src/absen.json', JSON.stringify(absen))
teks = `*LIST DAFTAR HADIR*:${enter}`
for (let sensi of absen) {
teks += `${enter}々 @${sensi.split('@')[0]} ✓${enter}`
}
teks += `ABSENSI : ${sensi.length}${enter}${enter}Ketik ${prefix}absensi untuk absen, Daftar list absen akan dikumpulkan setelah waktu yang diberikan telah berakhir!`
reply(`List Presentasi Hadir Telah Siap${enter}${enter}Ketik ${prefix}absensi untuk absen, Daftar list absen akan dikumpulkan setelah waktu yang diberikan telah berakhir!`)
setTimeout( () => {
reply(`Waktu Absensi Telah Habis`)
alpha.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": absen}})
}, tem)
setTimeout( () => {
ini = absen.indexOf(from)
absen.splice(ini, 1)
fs.writeFileSync('./src/absen.json', JSON.stringify(absen))
}, tem)
break

		  case 'tebakin': case 'tebakgambar':{
		if (isGame(sender, isPremium, isCreator, isOwner, gcounttuser, glimit)) return sendButMessage(from, lang.limitg(prefix), `© ${ownername}`, [{buttonId: 'limit', buttonText: {displayText: `Check Limit`, },type: 1,}]);
					if (tebakgambar.hasOwnProperty(sender.split('@')[0])) return reply("Masih ada permainan yang sedang berlangsung")
                    let anu = await fetchJson(`https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakgambar.json`)
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    let tebak = result.img
                    let jawaban = result.jawaban
                    tebakgambar[sender.split('@')[0]] = jawaban.toLowerCase()
                    fs.writeFileSync("./src/tebakgambar.json", JSON.stringify(tebakgambar))
                    console.log(jawaban)
                    let tebakya = await getBuffer(tebak)
                    alpha.sendMessage(from, tebakya, image, {quoted: mek, caption: `Deskripsi : ${result.deskripsi}\n\n⏰ Timeout : 120.00 seconds\n🎁 + Exp 500\n💰 + Balance $10`})
                    await sleep(120000)
                    if (tebakgambar.hasOwnProperty(sender.split('@')[0])) {
                                alpha.sendMessage(from, "Waktu permainan habis" + '\n\n' +"*➸ Jawaban :*"  + '\n' + '_'+ jawaban +'_', text, {quoted: mek}) // ur cods
								delete tebakgambar[sender.split('@')[0]]
                        fs.writeFileSync("./src/tebakgambar.json", JSON.stringify(tebakgambar))
                    }
                    await limitAdd(sender, limit)}
					break   
				case 'siapakahaku': case 'siapaaku':{
		if (isGame(sender, isPremium, isCreator, isOwner, gcounttuser, glimit)) return sendButMessage(from, lang.limitg(prefix), `© ${ownername}`, [{buttonId: 'limit', buttonText: {displayText: `Check Limit`, },type: 1,}]);
					if (siapakahaku.hasOwnProperty(sender.split('@')[0])) return reply("Masih ada permainan yang sedang berlangsung")
                    let anu = await fetchJson(`https://raw.githubusercontent.com/BochilTeam/database/master/games/siapakahaku.json`)
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    let jawaban = `${result.jawaban}`
                    siapakahaku[sender.split('@')[0]] = jawaban.toLowerCase()
                    fs.writeFileSync("./src/siapakahaku.json", JSON.stringify(siapakahaku))
                    console.log(jawaban)
                    let tebakya = result.soal
                    alpha.sendMessage(from, tebakya + '\n\n⏰ Timeout : 120.00 seconds\n🎁 + Exp 500\n💰 + Balance $10' , text, {quoted: mek})
                    await sleep(120000)
                    if (siapakahaku.hasOwnProperty(sender.split('@')[0])) {
                                alpha.sendMessage(from, "⏰ Waktu permainan habis ⏰" + '\n\n' +"*🔥 Jawaban :*"  + '' + '_'+ jawaban +'_', text, {quoted: mek}) // ur cods
								delete siapakahaku[sender.split('@')[0]]
                        fs.writeFileSync("./src/siapakahaku.json", JSON.stringify(siapakahaku))
                    }
                    await gameAdd(sender, glimit)}
					break   
				case 'tebakkalimat':{
		if (isGame(sender, isPremium, isCreator, isOwner, gcounttuser, glimit)) return sendButMessage(from, lang.limitg(prefix), `© ${ownername}`, [{buttonId: 'limit', buttonText: {displayText: `Check Limit`, },type: 1,}]);
					if (tebakkalimat.hasOwnProperty(sender.split('@')[0])) return reply("Masih ada permainan yang sedang berlangsung")
                    let anu = await fetchJson(`https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkalimat.json`)
                    let result = anu[Math.floor(Math.random() * anu.length)]
					let jawaban = `${result.jawaban}`
                    tebakkalimat[sender.split('@')[0]] = jawaban.toLowerCase()
                    fs.writeFileSync("./src/tebakkalimat.json", JSON.stringify(tebakkalimat))
                    console.log(jawaban)
                    tebakya = result.soal
                    alpha.sendMessage(from, tebakya + '\n\n⏰ Timeout : 120.00 seconds\n🎁 + Exp 500\n💰 + Balance $10' , text, {quoted: mek})
                    await sleep(120000)
                    if (tebakkalimat.hasOwnProperty(sender.split('@')[0])) {
                                alpha.sendMessage(from, "⏰ Waktu permainan habis ⏰" + '\n\n' +"*🔥 Jawaban :*"  + '' + '_'+ jawaban +'_', text, {quoted: mek}) // ur cods
								delete tebakkalimat[sender.split('@')[0]]
                        fs.writeFileSync("./src/tebakkalimat.json", JSON.stringify(tebakkalimat))
                    }
                    await gameAdd(sender, glimit)}
					break   
				case 'tebakkata':{
		if (isGame(sender, isPremium, isCreator, isOwner, gcounttuser, glimit)) return sendButMessage(from, lang.limitg(prefix), `© ${ownername}`, [{buttonId: 'limit', buttonText: {displayText: `Check Limit`, },type: 1,}]);
					if (tebakkata.hasOwnProperty(sender.split('@')[0])) return reply("Masih ada permainan yang sedang berlangsung")
                    let anu = await fetchJson(`https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkata.json`)
                    let result = anu[Math.floor(Math.random() * anu.length)]
					let jawaban = `${result.jawaban}`
                    tebakkata[sender.split('@')[0]] = jawaban.toLowerCase()
                    fs.writeFileSync("./src/tebakkata.json", JSON.stringify(tebakkata))
                    console.log(jawaban)
                    tebakya = result.soal
                    alpha.sendMessage(from, tebakya + '\n\n⏰ Timeout : 120.00 seconds\n🎁 + Exp 500\n💰 + Balance $10' , text, {quoted: mek})
                    await sleep(120000)
                    if (tebakkata.hasOwnProperty(sender.split('@')[0])) {
                                alpha.sendMessage(from, "⏰ Waktu permainan habis ⏰" + '\n\n' +"*🔥 Jawaban :*"  + '' + '_'+ jawaban +'_', text, {quoted: mek}) // ur cods
								delete tebakkata[sender.split('@')[0]]
                        fs.writeFileSync("./src/tebakkata.json", JSON.stringify(tebakkata))
                    }
                    await gameAdd(sender, glimit)}
					break   
					case 'tebaklirik':{
		if (isGame(sender, isPremium, isCreator, isOwner, gcounttuser, glimit)) return sendButMessage(from, lang.limitg(prefix), `© ${ownername}`, [{buttonId: 'limit', buttonText: {displayText: `Check Limit`, },type: 1,}]);
					if (tebaklirik.hasOwnProperty(sender.split('@')[0])) return reply("Masih ada permainan yang sedang berlangsung")
                    let anu = await fetchJson(`https://raw.githubusercontent.com/BochilTeam/database/master/games/tebaklirik.json`)
                    let result = anu[Math.floor(Math.random() * anu.length)]
					let jawaban = `${result.jawaban}`
                    tebaklirik[sender.split('@')[0]] = jawaban.toLowerCase()
                    fs.writeFileSync("./src/tebaklirik.json", JSON.stringify(tebaklirik))
                    console.log(jawaban)
                    tebakya = result.soal
                    alpha.sendMessage(from, tebakya + '\n\n⏰ Timeout : 120.00 seconds\n🎁 + Exp 500\n💰 + Balance $10' , text, {quoted: mek})
                    await sleep(120000)
                    if (tebaklirik.hasOwnProperty(sender.split('@')[0])) {
								alpha.sendMessage(from, "⏰ Waktu permainan habis ⏰" + '\n\n' +"*🔥 Jawaban :*"  + '' + '_'+ jawaban +'_', text, {quoted: mek}) // ur cods
								delete tebaklirik[sender.split('@')[0]]
                        fs.writeFileSync("./src/tebaklirik.json", JSON.stringify(tebaklirik))
                    }
                    await gameAdd(sender, glimit)}
					break   
				case 'tekateki':{
		if (isGame(sender, isPremium, isCreator, isOwner, gcounttuser, glimit)) return sendButMessage(from, lang.limitg(prefix), `© ${ownername}`, [{buttonId: 'limit', buttonText: {displayText: `Check Limit`, },type: 1,}]);
					if (tekateki.hasOwnProperty(sender.split('@')[0])) return reply("Masih ada permainan yang sedang berlangsung")
                    let anu = await fetchJson(`https://raw.githubusercontent.com/BochilTeam/database/master/games/tekateki.json`)
                    let result = anu[Math.floor(Math.random() * anu.length)]
					let jawaban = `${result.jawaban}`
                    tekateki[sender.split('@')[0]] = jawaban.toLowerCase()
                    fs.writeFileSync("./src/tekateki.json", JSON.stringify(tekateki))
                    console.log(jawaban)
                    tebakya = result.soal
                    alpha.sendMessage(from, tebakya + '\n\n⏰ Timeout : 120.00 seconds\n🎁 + Exp 500\n💰 + Balance $10' , text, {quoted: mek})
                    await sleep(120000)
                    if (tekateki.hasOwnProperty(sender.split('@')[0])) {
                                alpha.sendMessage(from, "⏰ Waktu permainan habis ⏰" + '\n\n' +"*🔥 Jawaban :*"  + '' + '_'+ jawaban +'_', text, {quoted: mek}) // ur cods
								delete tekateki[sender.split('@')[0]]
                        fs.writeFileSync("./src/tekateki.json", JSON.stringify(tekateki))
                    }
                    await gameAdd(sender, glimit)}
					break  
				case 'susunkata':{
		if (isGame(sender, isPremium, isCreator, isOwner, gcounttuser, glimit)) return sendButMessage(from, lang.limitg(prefix), `© ${ownername}`, [{buttonId: 'limit', buttonText: {displayText: `Check Limit`, },type: 1,}]);
					if (tekateki.hasOwnProperty(sender.split('@')[0])) return reply("Masih ada permainan yang sedang berlangsung")
                    let anu = await fetchJson(`https://raw.githubusercontent.com/BochilTeam/database/master/games/susunkata.json`)
                    let result = anu[Math.floor(Math.random() * anu.length)]
					let jawaban = `${result.jawaban}`
                    let tipenya = `${result.tipe}`
                    susunkata[sender.split('@')[0]] = jawaban.toLowerCase()
                    fs.writeFileSync("./src/susunkata.json", JSON.stringify(susunkata))
                    console.log(jawaban)
                    tebakya = result.soal
                    alpha.sendMessage(from, "Soal : " + tebakya + '\n' +"Tipe : " + tipenya + '\n\n⏰ Timeout : 120.00 seconds\n🎁 + Exp 500\n💰 + Balance $10' , text, {quoted: mek})
                    await sleep(120000)
                    if (susunkata.hasOwnProperty(sender.split('@')[0])) {
                                alpha.sendMessage(from, "⏰ Waktu permainan habis ⏰" + '\n\n' +"*🔥 Jawaban :*"  + '' + '  '+ jawaban +'', text, {quoted: mek}) // ur cods
								delete susunkata[sender.split('@')[0]]
                        fs.writeFileSync("./src/susunkata.json", JSON.stringify(susunkata))
                    }
                    await gameAdd(sender, glimit)}
					break  
				case 'caklontong':{
				if (isGame(sender, isPremium, isCreator, isOwner, gcounttuser, glimit)) return sendButMessage(from, lang.limitg(prefix), `© ${ownername}`, [{buttonId: 'limit', buttonText: {displayText: `Check Limit`, },type: 1,}]);
					if (caklontong.hasOwnProperty(sender.split('@')[0])) return reply("Masih ada permainan yang sedang berlangsung")
                    let anu = await fetchJson(`https://raw.githubusercontent.com/BochilTeam/database/master/games/caklontong.json`)
					let result = anu[Math.floor(Math.random() * anu.length)]
                    let tebakya = result.soal
                    let tebak = `Pertanyaan : ${tebakya}`
					let jawaban = `${result.jawaban}`
                    let desc = result.deskripsi
                    caklontong[sender.split('@')[0]] = jawaban.toLowerCase()
                    fs.writeFileSync("./src/caklontong.json", JSON.stringify(caklontong))
                    console.log(jawaban)
                    alpha.sendMessage(from, tebak + '\n\n⏰ Timeout : 120.00 seconds\n🎁 + Exp 500\n💰 + Balance $10', text, { quoted: mek })
                   await sleep(120000)
                    if (caklontong.hasOwnProperty(sender.split('@')[0])) {
                        reply("Jawaban: " + jawaban + '\n' + "Desc : " + desc )
                        delete caklontong[sender.split('@')[0]]
                        fs.writeFileSync("./src/caklontong.json", JSON.stringify(caklontong))
                    }
                    await gameAdd(sender, glimit)}
					break   
				case 'family100':{
				if (isGame(sender, isPremium, isCreator, isOwner, gcounttuser, glimit)) return sendButMessage(from, lang.limitg(prefix), `© ${ownername}`, [{buttonId: 'limit', buttonText: {displayText: `Check Limit`, },type: 1,}]);
                if ('family100'+m.chat in family) {
                    reply('Masih Ada Sesi Yang Belum Diselesaikan!')
                    throw false
                }
                let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/family100.json')
                let random = anu[Math.floor(Math.random() * anu.length)]
                let hasil = `*Jawablah Pertanyaan Berikut :*\n${random.soal}\n\nTerdapat *${random.jawaban.length}* Jawaban ${random.jawaban.find(v => v.includes(' ')) ? `(beberapa Jawaban Terdapat Spasi)` : ''}`.trim()
                family['family100'+m.chat] = {
                    id: 'family100'+m.chat,
                    pesan: await alpha.sendMessage(m.chat, hasil, text, {quoted: mek}),
                    ...random,
                    terjawab: Array.from(random.jawaban, () => false),
                    hadiah: 6,
                }
                    await gameAdd(sender, glimit)}
					break   
				case 'suit': 
            if (isGame(sender, isPremium, isCreator, isOwner, gcounttuser, glimit)) return sendButMessage(from, lang.limitg(prefix), `© ${ownername}`, [{buttonId: 'limit', buttonText: {displayText: `Check Limit`, },type: 1,}]);
              if (!q) return reply(`Kirim perintah ${prefix}suit gunting / batu / kertas`)
              const userspilih = q
              if (!userspilih.match(/batu|gunting|kertas/)) return reply(`Pilih batu, kertas, gunting`)
              var computer = Math.random();
              if (computer < 0.34 ) {
              computer = 'batu';
              } else if( computer >= 0.34 && computer < 0.67) {
              computer = 'gunting';
              } else {
              computer = 'kertas';
}
              if ( userspilih == computer ) {
              reply(`Pertandingan Seri!`)
              } else if ( userspilih == 'batu' ) {
              if( computer == 'gunting' ) {
              reply(`Kamu memilih Batu dan bot Gunting\nKamu menang!`)
              } else {
              reply(`Kamu memilih Batu dan bot memilih Kertas\nKamu kalah!`)
}
              } else if ( userspilih == 'gunting' ) {
              if( computer == 'batu' ) {
              reply(`Kamu memilih Gunting dan bot memilih Batu\nKamu kalah!`)
              } else {
              reply(`Kamu memilih Gunting dan bot Kertas\nKamu menang!`)
}
              } else if ( userspilih == 'kertas' ) {
              if( computer == 'batu' ) {
              reply(`Kamu memilih Kertas dan bot Batu\nKamu menang!`)
              } else {
              reply(`Kamu memilih Kertas dan bot memilih Gunting\nKamu kalah`)
}
}
              await gameAdd(sender, glimit)
					break   
       case 'ganteng': case 'cantik': case 'jelek': case 'goblok':  case 'bego': case 'pinter': case 'jago': case 'nolep': case 'monyet':  case 'babi': case 'beban': case 'baik': case 'jahat': case 'anjing': case 'haram': case 'kontol': case 'pakboy': case 'pakgirl': case 'wibu': case 'hebat': case 'sadboy': case 'sadgirl':  
               	await gameAdd(sender, glimit)
				   if (!isGroup) return reply(lang.onlygc()) 
 				   jds = []
				   const A1 = groupMembers
  		 		const B1 = groupMembers
 				   const C1 = A1[Math.floor(Math.random() * A1.length)]
				   D1 = `Yang *ter${command}* disini adalah @${C1.jid.split('@')[0]}`                  
				   jds.push(C1.jid)
				   mentions(D1, jds, true)
				   break
		case 'bisakah':
		if (args.length < 1) return alpha.sendMessage(from, 'Pertanyaan nya apa?', text, {quoted: mek})
				bisakah = q
					const bisa =['Tentu Saja Bisa! Kamu Adalah Orang Paling beruntung','Gak Bisa','Hmm Gua Gak Tau Yaa, tanya ama bapakau','Ulangi Tod Gua Ga Paham']
					const keh = bisa[Math.floor(Math.random() * bisa.length)]
					alpha.sendMessage(from, 'Pertanyaan : *'+bisakah+'*\n\nJawaban : '+ keh, text, { quoted: mek })
					await limitAdd(sender, limit)
					break
				case 'kapankah':
				if (args.length < 1) return alpha.sendMessage(from, 'Pertanyaan nya apa?', text, {quoted: mek})
				kapankah = q
					const kapan =['Besok','Lusa','Tadi','4 Hari Lagi','5 Hari Lagi','6 Hari Lagi','1 Minggu Lagi','2 Minggu Lagi','3 Minggu Lagi','1 Bulan Lagi','2 Bulan Lagi','3 Bulan Lagi','4 Bulan Lagi','5 Bulan Lagi','6 Bulan Lagi','1 Tahun Lagi','2 Tahun Lagi','3 Tahun Lagi','4 Tahun Lagi','5 Tahun Lagi','6 Tahun Lagi','1 Abad lagi','3 Hari Lagi']
					const koh = kapan[Math.floor(Math.random() * kapan.length)]
					alpha.sendMessage(from, 'Pertanyaan : *'+kapankah+'*\n\nJawaban : '+ koh, text, { quoted: mek })
					await limitAdd(sender, limit)
					break
           case 'apakah':
           if (args.length < 1) return alpha.sendMessage(from, 'Pertanyaan nya apa?', text, {quoted: mek})
           apakah = q
					const apa =['Iya','Tidak','Bisa Jadi']
					const kah = apa[Math.floor(Math.random() * apa.length)]
					alpha.sendMessage(from, 'Pertanyaan : *'+apakah+'*\n\nJawaban : '+ kah, text, { quoted: mek })
					await limitAdd(sender, limit)
					break
//sound
case 'sound71': case 'sound72': case 'sound73': case 'sound74': case 'sound75': case 'sound1': case 'sound2': case 'sound3': case 'sound4': case 'sound5': case 'sound6': case 'sound7': case 'sound8': case 'sound9': case 'sound10': case 'sound11': case 'sound12': case 'sound13': case 'sound14': case 'sound15': case 'sound16': case 'sound17': case 'sound18 ': case 'sound19': case 'sound20': case 'sound21': case 'sound22': case 'sound23': case 'sound24': case 'sound25': case 'sound26': case 'sound27': case 'sound28': case 'sound29': case 'sound30': case 'sound31': case 'sound32': case 'sound33': case 'sound34': case 'sound35': case 'sound36': case 'sound37': case 'sound38': case 'sound39': case 'sound40': case 'sound41': case 'sound42': case 'sound43': case 'sound44': case 'sound45': case 'sound46': case 'sound47': case 'sound48': case 'sound49': case 'sound50': case 'sound51': case 'sound52': case 'sound53': case 'sound54': case 'sound55': case 'sound56': case 'sound57': case 'sound58': case 'sound59': case 'sound60': case 'sound61': case 'sound62': case 'sound63': case 'sound64': case 'sound65': case 'sound66': case 'sound67': case 'sound68': case 'sound69': case 'sound70':
						{
if (isLimit(sender, isPremium, isCreator, isOwner, limitawal, limit)) return sendButMessage(from, lang.limit(prefix), `© ${ownername}`, [{buttonId: 'limit', buttonText: {displayText: `Check Limit`, },type: 1,}]);
let sound1 = await getBuffer(api('alfa', '/api/sound/'+command, {}, 'apikey'))
alpha.sendMessage(from, sound1, audio, {mimetype: 'audio/mpeg', quoted: mek, ptt:true})
.catch(e =>{
reply(lang.tryAgain())
})
await limitAdd(sender, limit)}
						break
//textpro
			case 'halloween2':case 'horror':case 'game8bit':case 'layered':case 'glitch2':case 'coolg':case 'coolwg':case 'realistic':case 'space3d':case 'gtiktok':case 'stone':case 'marvel':case 'marvel2':case 'pornhub':case 'avengers':case 'metalr':case 'metalg':case 'metalg2':case 'halloween2':case 'lion':case 'wolf_bw':case 'wolf_g':case 'ninja':case '3dsteel':case 'horror2':case 'lava':case 'bagel':
if (args.length < 1) return reply(lang.tahta(prefix, command))
if (isLimit(sender, isPremium, isCreator, isOwner, limitawal, limit)) return sendButMessage(from, lang.limit(prefix), `© ${ownername}`, [{buttonId: 'limit', buttonText: {displayText: `Check Limit`, },type: 1,}]);
reply(lang.wait())
var m = q
var m1 = m.split("|")[0];
var m2 = m.split("|")[1]; 
let textpro = await getBuffer(api('alfa', '/api/textpro/'+command, {text: m1, text2: m2}, 'apikey'))
sendButImage(from,  `Nih udah jadi kak, jgn lupa donasi untuk beli dyno 🐦 ` , `© ${ownername}`,textpro, [{"buttonId": `owner`,"buttonText": {"displayText": "👨‍💻 Owner"},"type": "RESPONSE"},{"buttonId": `donasi`,"buttonText": {"displayText": "💰 Donate"},"type": "RESPONSE"}], {thumbnail: Buffer.alloc(0), quoted: mek})
await  limitAdd(sender, limit)
break 
 case 'blackpink':case 'rainbow2':case 'water_pipe':case 'halloween':case 'sketch':case 'sircuit':case 'discovery':case 'metallic2':case 'fiction':case 'demon':case 'transformer':case 'berry':case 'thunder':case 'magma':case '3dstone':case 'neon':case 'glitch':case 'harry_potter':case 'embossed':case 'broken':case 'papercut':case 'gradient':case 'glossy':case 'watercolor':case 'multicolor':case 'neon_devil':case 'underwater':case 'bear':case 'wonderfulg':case 'christmas':case 'neon_light':case 'snow':case 'cloudsky':case 'luxury2':case 'gradient2':case 'summer':case 'writing':case 'engraved':case 'summery':case '3dglue':case 'metaldark':case 'neonlight':case 'oscar':case 'minion':case 'holographic':case 'purple':case 'glossyb':case 'deluxe2':case 'glossyc':case 'fabric':case 'neonc':case 'newyear':case 'newyear2':case 'metals':case 'xmas':case 'blood':case 'darkg':case 'joker':case 'wicker':case 'natural':case 'firework':case 'skeleton':case 'balloon':case 'balloon2':case 'balloon3':case 'balloon4':case 'balloon5':case 'balloon6':case 'balloon7':case 'steel':case 'gloss':case 'denim':case 'decorate':case 'decorate2':case 'peridot':case 'rock':case 'glass':case 'glass2':case 'glass3':case 'glass4':case 'glass5':case 'glass6':case 'glass7':case 'glass8':case 'captain_as2':case 'robot':case 'equalizer':case 'toxic':case 'sparkling':case 'sparkling2':case 'sparkling3':case 'sparkling4':case 'sparkling5':case 'sparkling6':case 'sparkling7':case 'decorative':case 'chocolate':case 'strawberry':case 'koifish':case 'bread':case 'matrix':case 'blood2':case 'neonligth2':case 'thunder2':case '3dbox':case 'neon2':case 'roadw':case 'bokeh':case 'gneon':case 'advanced':case 'dropwater':case 'wall':case 'chrismast':case 'honey':case 'drug':case 'marble':case 'marble2':case 'ice':case 'juice':case 'rusty':case 'abstra':case 'biscuit':case 'wood':case 'scifi':case 'metalr':case 'purpleg':case 'shiny': case 'jewelry':case 'jewelry2':case 'jewelry3':case 'jewelry4':case 'jewelry5':case 'jewelry6':case 'jewelry7':case 'jewelry8':case 'metalh':case 'golden':case 'glitter':case 'glitter2':case 'glitter3':case 'glitter4':case 'glitter5':case 'glitter6':case 'glitter7':case 'metale':case 'carbon':case 'candy':case 'metalb':case 'gemb':case '3dchrome':case 'metalb2':case 'metalg':{
if (args.length < 1) return reply(lang.noteks(prefix, command))
if (isLimit(sender, isPremium, isCreator, isOwner, limitawal, limit)) return sendButMessage(from, lang.limit(prefix), `© ${ownername}`, [{buttonId: 'limit', buttonText: {displayText: `Check Limit`, },type: 1,}]);
reply(lang.wait())
let textpro2 = await getBuffer(api('alfa', '/api/textpro/'+command, {text: q}, 'apikey'))
sendButImage(from,  `Nih udah jadi kak, jgn lupa donasi untuk beli dyno 🐦 ` , `© ${ownername}`,textpro2, [{"buttonId": `owner`,"buttonText": {"displayText": "👨‍💻 Owner"},"type": "RESPONSE"},{"buttonId": `donasi`,"buttonText": {"displayText": "💰 Donate"},"type": "RESPONSE"}], {thumbnail: Buffer.alloc(0), quoted: mek})
await  limitAdd(sender, limit)}
break  
// sticker menu
case 'awoawo':case 'benedict':case 'chat':case 'dbfly':case 'dino_kuning':case 'doge':case 'gojosatoru':case 'hope_boy':case 'jisoo':case 'kr_robot':case 'kucing':case 'lonte':case 'manusia_lidi':case 'menjamet':case 'meow':case 'nicholas':case 'patrick':case 'popoci':case 'sponsbob':case 'kawan_sponsbob':case 'tyni':{
	if (isLimit(sender, isPremium, isCreator, isOwner, limitawal, limit)) return sendButMessage(from, lang.limit(prefix), `© ${ownername}`, [{buttonId: 'limit', buttonText: {displayText: `Check Limit`, },type: 1,}]);
reply(lang.wait())
let lp = api('alfa', '/api/telegram-sticker/'+command, {}, 'apikey')
alpha.sendVideoAsSticker(m.chat, lp, mek, { packname: botname, author: ownername })
.catch(e =>{
reply(lang.tryAgain())
})
await limitAdd(sender, limit)
}
break
// nsfw api
case 'ahegao':case 'ass':case 'bdsm':case 'cuckold':case 'foot':case 'gangbang':case 'glasses':case 'jahy':case 'manga':case 'masturbation':case 'orgy':case 'panties':case 'tentacles':case 'thighs':case 'zettai':{
if (isLimit(sender, isPremium, isCreator, isOwner, limitawal, limit)) return sendButMessage(from, lang.limit(prefix), `© ${ownername}`, [{buttonId: 'limit', buttonText: {displayText: `Check Limit`, },type: 1,}]);
if (!isNsfw) return reply(lang.nsfwmo())
reply(lang.wait())
let lp = api('alfa', '/api/nsfw/'+command, {}, 'apikey')
sendFileFromUrl(m.chat, lp, lang.success(), mek)
.catch(e =>{
reply(lang.tryAgain())
})
await limitAdd(sender, limit)}
break

//asupan
case 'delvira': case 'ayu': case 'bunga': case 'aura': case 'nisa': case 'ziva': case 'yana': case 'viona': case 'syania': case 'riri': case 'syifa': case 'mama_gina': case 'alcakenya': case 'mangayutri': case 'chika': case 'rikagusriani':  case 'bocil': case 'geayubi': case 'santuy': case 'ukhty': {
if (isLimit(sender, isPremium, isCreator, isOwner, limitawal, limit)) return sendButMessage(from, lang.limit(prefix), `© ${ownername}`, [{buttonId: 'limit', buttonText: {displayText: `Check Limit`, },type: 1,}]);
reply(lang.wait())
let lp = api('alfa', '/api/asupan/'+command, {}, 'apikey')
sendFileFromUrl(m.chat, lp, lang.success(), mek)
.catch(e =>{
reply(lang.tryAgain())
})
}
await limitAdd(sender, limit)
break

//Anime api
case 'akame':case 'anna':case 'asuna_yuki':case 'ayuzawa':case 'chitoge':case 'emilia':case 'erza':case 'hinata':case 'inori':case 'kaga_kouko':case 'kaori_miyazono':case 'kotori_minami':case 'mikasa':case 'mio_akiyama':case 'mizore_sirayuki':case 'nakiri_alice':case 'naruto':case 'riyas_gremori':case 'sakura':case 'sasuke':case 'sento_isuzu':case 'shana':case 'shiina':case 'shinka':case 'winry':case 'yukino':case 'yuzuki':case 'mikosiba':{
if (isLimit(sender, isPremium, isCreator, isOwner, limitawal, limit)) return sendButMessage(from, lang.limit(prefix), `© ${ownername}`, [{buttonId: 'limit', buttonText: {displayText: `Check Limit`, },type: 1,}]);
reply(lang.wait())
let lp = api('alfa', '/api/anime/'+command, {}, 'apikey')
sendFileFromUrl(m.chat, lp, lang.success(), mek)
.catch(e =>{
reply(lang.tryAgain())
})
await limitAdd(sender, limit)}
break

// cogan
case 'baekhyung':case 'dohkyungsoo':case 'huangzitao':case 'jhope':case 'jimin':case 'jungkook':case 'kimjondae':case 'kimjong':case 'dohkyungsoo':case 'kimjunmyeon':case 'kimminseok':case 'kimnanjoon':case 'kimseok':case 'kimtaehyung':case 'luhan':case 'ohsehun':case 'parkchanyeol':case 'suga':case 'wuyifan':{
if (isLimit(sender, isPremium, isCreator, isOwner, limitawal, limit)) return sendButMessage(from, lang.limit(prefix), `© ${ownername}`, [{buttonId: 'limit', buttonText: {displayText: `Check Limit`, },type: 1,}]);
reply(lang.wait())
let lp = api('alfa', '/api/cogan/'+command, {}, 'apikey')
sendFileFromUrl(m.chat, lp, lang.success(), mek)
.catch(e =>{
reply(lang.tryAgain())
})
await limitAdd(sender, limit)}
break

//cecan
case 'china': case 'indonesia': case 'malaysia': case 'thailand': case 'korea': case 'japan': case 'vietnam': case 'jenni': case 'jiso': case 'lisa': case 'rose': {
if (isLimit(sender, isPremium, isCreator, isOwner, limitawal, limit)) return sendButMessage(from, lang.limit(prefix), `© ${ownername}`, [{buttonId: 'limit', buttonText: {displayText: `Check Limit`, },type: 1,}]);
reply(lang.wait())
let lp = api('alfa', '/api/cecan/'+command, {}, 'apikey')
sendFileFromUrl(m.chat, lp, lang.success(), mek)
.catch(e =>{
reply(lang.tryAgain())
})
	}
	await limitAdd(sender, limit)
	break

// 1 radio 

case 'coverbannerlol':{
	if (isLimit(sender, isPremium, isCreator, isOwner, limitawal, limit)) return sendButMessage(from, lang.limit(prefix), `© ${ownername}`, [{buttonId: 'limit', buttonText: {displayText: `Check Limit`, },type: 1,}]);
var m = q
var m1 = m.split("|")[0];
var m2 = m.split("|")[1]; 
	if (args.length < 1) return reply(`Ex: ${prefix + command} nama|heroes\nUsage: ${prefix + command} zeeone|jinx7`)
	if (!q.includes('|')) return reply(`Ex: ${prefix + command} nama|heroes\nUsage: ${prefix + command} zeeone|jinx7`)
const style = ['jinx7','jinx-8','kassadin-5','nissfortune-5','pyke-7','riven-8','sylas-5','vayne-9','kassadin-4','qiyana-5','renataglasc','shen-5','heimerdinger-3','nunu-5','orianna-4','ziggs-4','soraka-9','soraka-10','xayah-3','zeri-2','ahri-9','akshan-2','amumu-4','annie-3','bard-3','brand-5','diana-4','draven-3','ekko-6','elise-4','ezreal-7','gwen-3','janna-6','kindred-3','leblanc-7','leona-7','lissandra-4','lux-8','lux-9','nalzahar-4','nasteryi-7','reksai-3','sett-3','sivir-6','teemo-5','tristana-6','vladimir-5','xinzhao-5','zed-7','zeri','caitlyn-6','caitlyn-7','caitlyn-8','caitlyn-9','caitlyn-10','caitlyn-11','jayce-5','kaisa-8','karma-7','thresh-6','vi-5','yasuo-8','yasuo-9','fiora-8','norgana-7','nami-5','poppy-4','syndra-5','yuumi-4','jarvaniv-6','kayn-4','kayle-5','lillia-2','norgana-6','tryndamere-3','vex','vex-2','yone-4','tristana-5','viego-2','akali-10','anivia-4','darius-5','graves-6', 'seraphine-5','shaco-2','twistedfate-4','xayah-2','zyra-5','ahri-8','ashe-6','cassiopeia-4','evelynn-6','leblanc-6','nalphite-4','warwick-5','akshan','graves-5','nissfortune-5','pyke-6','rengar-6','thresh-5','diana-3','relia-11','olaf-3','pantheon-6','pantheon-7','riven-7','vayne-8','corki-4','naokai-2','rammus-4','veigar-4','zed-6','camille-4','drmundo-3','lucian-6','nordekaiser-4','renekton-4','sejuani-5','senna-3','sylas-4','varus-5','xerath-3','damwon','galio-3','gwen','gwen-2','jax-5','jinx-6','kayle-5','sion-2','twitch-4','velkoz-4','blitzcrank-3','leona-6','lulu-3','lulu-4','lux-7','nasus-5','nunu-4','rumble-2','samira-3','aphelios-2','blitzcrank-2','caitlyn-5','garen-6','kogmaw-4','leona-5','alzahar-3','syndra-4','wukong-4','yone-3','yuumi-3','zyra-4','alistar-4','chogath-2','draven-2','fiora-7','jarvan-5','jhin-5','karma-6','nautilus-2','neeko-5','shyvana-3','viego','azir-4','diana-4','gragas-2','janna-5','kalista-3','katarina-6','ornn-2','qiyana-4','quinn-3','rell','xinzhao-4','anivia-3', 'hecarim-4','illaoi-2','jayce-4','lissandra-3','nami-4','nasus-4','nidalee-5','seraphine-4','singed-2','skarner-2','soraka-7','varus-4','vladimir-4','yorick-4','zac','riven-8','ahri-7','akali-9','evelynn-5','kaisa-7','lucian-5','seraphine','seraphine-2','seraphine-3','aatrox-6','amumu-3','lise-3','fizz-5','karma-5','zeri-2','kassadin-3','khazix-4','sivir-5','twistedfate-3','ashe-5','brand-4','leesin-5','olaf-2','sett-2','kayle-4','leblanc-5','pyke-5','samira','samira-2','viktor-2','yasuo-7','zed-5','ezreal-6','nasteryi-6','shen-4','sona-4','vi-4','yone','yone-2','ziggs-3','ahri-6','cassiopeia-3','kindred-2','riven-6','kennen-2','kogmaw-3','lillia','syndra-3','teemo-4','thresh-4','vayne-7','velkoz-3','yasuo-6','zoe-4','bard-2','gnar-3','irelia-10','nocturne-4','poppy-3','enna-2','volibear-3','volibear-4','ekko-5','fiora-6','lucian-4','pantheon-5','leblanc-4','norgana-5','urgot-4','zyra-3','jinx-5','sett','alistar-3','katarina-5','lux-5','lux-6','nasteryi-5','nalphite-3','nordekaiser-3','reksai-2','sejuani-4','tryndamere-2','xerath-2','aphelios','garen-5','jax-4','karma-4','leesin-4','leona-4','nidalee-4','rengar-5','soraka-5','soraka-6','swain-4','sylas-3','trundle-2','vladimir-3','aatrox-5','akali-8','ekko-4','qiyana-3','senna','yasuo-5','ashe-4','darius-4','hecarim-3','norgana-4','nami-3','riven-4','riven-5','ryze-3','neeko-3','eeko-4','xayahrakan','zoe-3','airi-6','noctune-3','pantheon-3','pantheon-4','rammus-3','udyr-2','veigar-3','akali-7','garen-4','irelia-8','irelia-9','jinx-4','lucian-3','pyke-4','warwick-4','caitlyn-3','caitlyn-4','kaisa-6','qiyana','qiyana-2','yasuo-4','jhin-3','karma-3','nordekaiser-2','tristana-4','nami','poppy-3','aatrox','lulu','braum','camille','karma','kindred','hecarim','norgana','renekton','kennen','akali','varus','orianna','blitzcrank','bloodmoonjhin','bloodmoontalon','arcaderiven','udyr','rumble','gnar','shaco','twitch','veigar','tryndamere','viktor','trundle','ezreal','poppy','lissandra','jax','vi','vellkoz','darius','diana','corki','sivir','ryze','azir','tristana','kled','volibear','twisterfate','anivia','zyra','quinn','nissfortune','kalista','ezrealandshen','gangplank','hextachannie','elementalistlux','xinzhao','vayne','jhin','reksai','graves','kogmaw','garen','porojinx','warwick','fizz','caitlyn','rengar','talon','nidalee','lux','jinx','thresh','wukong','sona','ahri','riven','zed','leesin','janna','katarina','leblanc','leona','fiora','lucian','shen','ziggs','yasuo','ekko','draven','ashe','ekko-5','teemo','khazix','nasteryi','brand','taliyah','nocturne','cassiopeia','xayah','rakan','syndra','irelia','leesingf','yasuobm','aurelionsol','pantheon','bard','singed','soraka','taric','naokai','xerath','gragas','jayce','riven3','nalphite','naster_yi2','chogath','zed2','darius2','talon2','kayle','drmundo','rammus','vladimir','ahri-2','karma-2','jarvan','nidalee-2','vayner-2','warwick-2','rengar-2','yasuo-3','galio','pantheon-2','jinx-2','nalzahar','olaf','shyvana','thresh-2','sion','caitlyn-2','swain','kassadin','heimerdinger','amumu','alistar','nasus','sejuani','ezreal3','nautilus','fiddlesticks','sona2','karthus','ekko2','orianna2','velkoz-2','xinzhao2','garen2','annie-2','yasuonb','rivendb','kayn','kaisa','veigar-2','vayne-3','twitch-2','tristana-2','rhaast','nalzahar-2','kayle-2','illaoi','fizz-2','elise','brand-2','syndra-2','soraka-2','nissfortune-2','hecarim-2','ezreal-2','ahri-3','yorick','z-2','tahmkench','shen-2','ornn','cassiopeia-2','renekton-2','nasus-2','jarvan-2','fiora-2','alistar-2','taric-2','zac-2','yorick-2','varus-2','nordekaiser','nasteryi-3','katarina-2','janna-2','fiora-3','evelynn','elise-2','ashe-2','annie','zoe','vi-2','vayne-4','rengar-3','jhin-2','graves-2','xayahrakan','warwick-3','nissfortune-3','lux-2','kaisa','jarvaniv','zoe-2','swain-2','sivir-2','nissfortune-4','jax-2','galio-2','varus-3','urgot','twistedfate-2','taric-3','swain-3','shen-3','rammus-2','pyke-2','pyke','nasus-3','talon','khazix-2','kayn-2','irelia-2','evelynn-2','akali-2','vladimir-2','jayce-2','janna-3','irelia-4','irelia-3','diana-2','zed-3','teemo-2','taliyah-2','shyvana-2','poppy-2','katarina-3','jax-3','garen-3','darius-3','chogath-2','aatrox-2','soraka-3','sona-3','sivir-3','kaisa-2','akali-4','akali-3','xinzhao-3','urgot-3','urgot-2','tristana-3','talon-3','sejuani-2','nunu-2','lulu-2','lucian-2','irelia-6','irelia-5','ashe-3','ziggs-2','yasuo-2','sona-4','nalphite-2','khazix-3','kayn-3','jinx-3','orianna-3','kaisa-4','kaisa-3','heimerdinger-2','ezreal-4','evelynn-3','akali-5','ahri-4','thresh-3','ryze-2','kled-2','janna-4','graves-3','fiddlesticks-2','ekko-3','amumu-2','nami-2','lulusoraka','lissandra-2','leona-3','leona-2','leblanc-2','ezrealmissfortune','camille-2','twitch-3','soraka-4','renekton-3','neeko-2','neeko','nasteryi-4','drmundo-2','akali-6','zyra-2','zilean','wukong-3','wukong-2','teemo-3','skarner','sivir-4','riven-2','quinn-2','pyke-3','nocturne-2','nidalee-3','norgana-2','leesin-3','kogmaw-2','kassadin-2','karthus-2','kalista-2','gnar-2','gangplank-2','corki-2','azir-3','azir-2','aatrox-4','aatrox-3','vi-3','vayne-6','vayne-5','tahmkench-2','sylas-2','sylas','sejuani-3','fiora-4','nunu-3','norgana-3','kayle-3','brand-3','anivia-2','ahri-5','yorick-3','rengar-4','fizz-4','fizz-3','corki-3','zed-4','rakan-2','leblanc-3','kaisa-5','jarvaniv','ivern','irelia-7','fiora-5','evelynn-4','camille-3','yuumi-2','yuumi','lux-4','lux-3','katarina-4','jayce-3','graves-4','ezreal-5']
if (!style.includes(m2)){ 
let listt = `*Heroes Yg Kamu Masukkan Salah*\n\n_Berikut list heroes yg benar, Total_ *${style.length}* _heroes_\n\n`
no = 0

for (var i = 0; i < style.length; i++) {
no +=1

listt += no.toString() + '.  '  + style[i] + '\n'

}
reply(listt)
} else {
	reply(lang.wait())
let textpro2 = await getBuffer(api('alfa', '/api/ephoto360/'+command, {text: m1, heroes : m2}, 'apikey'))
alpha.sendMessage(from, textpro2, MessageType.image, { quoted: mek, caption: '*Terima kasih telah menggunakan* ' + '*' + global.botname + '*'})
}}
await limitAdd(sender, limit)
	break
case 'pubglogomaker':{
	if (isLimit(sender, isPremium, isCreator, isOwner, limitawal, limit)) return sendButMessage(from, lang.limit(prefix), `© ${ownername}`, [{buttonId: 'limit', buttonText: {displayText: `Check Limit`, },type: 1,}]);
var m = q
var m1 = m.split("|")[0];
var m2 = m.split("|")[1]; 
	if (args.length < 1) return reply(`Ex: ${prefix + command} nama|style\nUsage: ${prefix + command} zeeone|women`)
	if (!q.includes('|')) return reply(`Ex: ${prefix + command} nama|style\nUsage: ${prefix + command} zeeone|women`)
const style = ['women','nen']
if (!style.includes(m2)){ 
let listt = `*Style Yg Kamu Masukkan Salah*\n\n_Berikut list style yg benar, Total_ *${style.length}* _style_\n\n`
no = 0
for (var i = 0; i < style.length; i++) {
no +=1
listt += no.toString() + '.  '  + style[i] + '\n'
}
reply(listt)
} else {
	reply(lang.wait())
let textpro2 = await getBuffer(api('alfa', '/api/ephoto360/'+command, {text: m1, style : m2}, 'apikey'))
alpha.sendMessage(from, textpro2, MessageType.image, { quoted: mek, caption: '*Terima kasih telah menggunakan* ' + '*' + global.botname + '*'})
}}
await limitAdd(sender, limit)
	break
case 'colorfulpubg':{
	if (isLimit(sender, isPremium, isCreator, isOwner, limitawal, limit)) return sendButMessage(from, lang.limit(prefix), `© ${ownername}`, [{buttonId: 'limit', buttonText: {displayText: `Check Limit`, },type: 1,}]);
var m = q
var m1 = m.split("|")[0];
var m2 = m.split("|")[1]; 
	if (args.length < 1) return reply(`Ex: ${prefix + command} nama|color\nUsage: ${prefix + command} zeeone|gold`)
	if (!q.includes('|')) return reply(`Ex: ${prefix + command} nama|color\nUsage: ${prefix + command} zeeone|gold`)
const style = ['gold','green-blue','pink-yellow','green-yellow','cyan-purple','orange-red']
if (!style.includes(m2)){ 
let listt = `*Color Yg Kamu Masukkan Salah*\n\n_Berikut list color yg benar, Total_ *${style.length}* _color_\n\n`
no = 0
for (var i = 0; i < style.length; i++) {
no +=1
listt += no.toString() + '.  '  + style[i] + '\n'
}
reply(listt)
} else {
	reply(lang.wait())
let textpro2 = await getBuffer(api('alfa', '/api/ephoto360/'+command, {text: m1, color : m2}, 'apikey'))
alpha.sendMessage(from, textpro2, MessageType.image, { quoted: mek, caption: '*Terima kasih telah menggunakan* ' + '*' + global.botname + '*'})
}}
await limitAdd(sender, limit)
	break
case 'astronotspace':{
	if (isLimit(sender, isPremium, isCreator, isOwner, limitawal, limit)) return sendButMessage(from, lang.limit(prefix), `© ${ownername}`, [{buttonId: 'limit', buttonText: {displayText: `Check Limit`, },type: 1,}]);
var m = q
var m1 = m.split("|")[0];
var m2 = m.split("|")[1]; 
	if (args.length < 1) return reply(`Ex: ${prefix + command} nama|style\nUsage: ${prefix + command} zeeone|anubis`)
	if (!q.includes('|')) return reply(`Ex: ${prefix + command} nama|style\nUsage: ${prefix + command} zeeone|anubis`)
const style = ['anubis','dragon','duck','gorilla','panda','panther','shark','squirrel','tiger','wolf','bull','rhino','rooster','pikachu','parrot','boar','bee','hurricane','deer','horse','crocodile','pitbull']
if (!style.includes(m2)){ 
let listt = `*Style Yg Kamu Masukkan Salah*\n\n_Berikut list style yg benar, Total_ *${style.length}* _style_\n\n`
no = 0
for (var i = 0; i < style.length; i++) {
no +=1
listt += no.toString() + '.  '  + style[i] + '\n'
}
reply(listt)
} else {
	reply(lang.wait())
let textpro2 = await getBuffer(api('alfa', '/api/ephoto360/'+command, {text: m1, style : m2}, 'apikey'))
alpha.sendMessage(from, textpro2, MessageType.image, { quoted: mek, caption: '*Terima kasih telah menggunakan* ' + '*' + global.botname + '*'})
}}
await limitAdd(sender, limit)
	break
case 'wallpaperaov':{
	if (isLimit(sender, isPremium, isCreator, isOwner, limitawal, limit)) return sendButMessage(from, lang.limit(prefix), `© ${ownername}`, [{buttonId: 'limit', buttonText: {displayText: `Check Limit`, },type: 1,}]);
var m = q
var m1 = m.split("|")[0];
var m2 = m.split("|")[1]; 
	if (args.length < 1) return reply(`Ex: ${prefix + command} nama|heroes\nUsage: ${prefix + command} zeeone|allain`)
	if (!q.includes('|')) return reply(`Ex: ${prefix + command} nama|heroes\nUsage: ${prefix + command} zeeone|allain`)
const style = ['allain','allain-2','kahlii-3','nakroth-4','preyta-2','skud-2','taara-4','valhein-4','arum-4','butterfly-6','capheny-3','elandorr-2','ilumia-3','ishar-4','lauriel-6','laville','liliana-5','nurad-8','quillen-5','rouie','rouie-2','taara-3','telannas-5','yena-4','yena-5','zata','ata','lauriel-5','qi-3','roxie-3','wukong-5','aleister-2','amily-3','arthur-3','arum-3','astrid-2','dirak','dirak-2','grakk-5','hayate-4','ishar-2','ishar-3','jinna-2','keera','keera-3','lauriel-4','nax','natalya-5','quillen-4','raz-3','richter-2','ryoma-4','telannas-4','ulen-6','valhein-3','violet-7','yorn-4','zill-3','ignis-2','lubu-2','naloch-2','sephera-3','butterfly-5','diaochan-4','elandoor','krizzix-2','nina-2','natalya-3','veera-3','violet-6','yena-2','yena-3','krizziz','nurad-7','volkath','volkath-2','airi-4','arduin-3','enzo-3','hayate-3','krixi-3','nurad-6','quillen-3','telannas-3', 'wisp-2','zip-2','gildur-2','ishar','tulen-5','amily-2','annette-3','arthur-2','butterfly-4','errol-2','joker','kahlii-2','kilgroth','lauriel-3','nurad-5','arduin-2','darcy-2','florentino-3','noren','quillen-2','ryoma-5','sephera-3','violet-5','airi-3','diaochan-3','diaochanlubu','elsuroxie','lindis-3','taara-2','toro-2','tulen-4','violet-4','wonderwoman','ybneth','zill-2','arum-2','florentino-2','liliana-4','nurad-4','yorn-3','zip','annette-2','qi','qi-2','celica','capheny-2','diaochan-2','elsu-2','ilumia-2','krixi-2','narja-2','nurad-3','preyta','telannas-2','valhein','veera-2','veres-2','yorn-2','zephys-2','airi-2','annette','baldum','butterfly-3','elsu-2','errol','fennik','lauriel-2','liliana-2','liliana-3','lindis-2','nurad-2','nakroth-2','nakroth-3','natalya-2','raz-2','ryoma-2','slimz','teemee','tulen-2','tulen-3','violet-3','wiro','wukong-3','wukong-4','zill','aleister','alice','arduin','arthur','azzenka','batman','butterfly-2','cresh','darcy', 'diaochan','enzo-2','hayate-2','jinna','lubu','nganga','violet-2','wukong-2','zanis-2','florentino','gildur','ignis','naloch','narja','nakroth','omen','payna','raz','rourke','roxie','ryoma','skud','taara','toro','valhein','veres','violet','wisp','wukong','wonderwoman','xeniel','yorn','zanis','elsu','flash','hayate','ilumia','kahlii','krixi','lauriel','liliana','lindis','nina','nurad','natalya','quillen','richter','sephera','superman','telannas','thane','airi','amily','arum','astrid','butterfly','capheny','enzo','tulen','veera','yena','ryoma-4','zephys','zuka']
if (!style.includes(m2)){ 
let listt = `*Heroes Yg Kamu Masukkan Salah*\n\n_Berikut list heroes yg benar, Total_ *${style.length}* _heroes_\n\n`
no = 0
for (var i = 0; i < style.length; i++) {
no +=1
listt += no.toString() + '.  '  + style[i] + '\n'
}
reply(listt)
} else {
	reply(lang.wait())
let textpro2 = await getBuffer(api('alfa', '/api/ephoto360/'+command, {text: m1, heroes : m2}, 'apikey'))
alpha.sendMessage(from, textpro2, MessageType.image, { quoted: mek, caption: '*Terima kasih telah menggunakan* ' + '*' + global.botname + '*'})
}}
await limitAdd(sender, limit)
	break
case 'maketeamlogo':{
	if (isLimit(sender, isPremium, isCreator, isOwner, limitawal, limit)) return sendButMessage(from, lang.limit(prefix), `© ${ownername}`, [{buttonId: 'limit', buttonText: {displayText: `Check Limit`, },type: 1,}]);
var m = q
var m1 = m.split("|")[0];
var m2 = m.split("|")[1]; 
	if (args.length < 1) return reply(`Ex: ${prefix + command} nama|style\nUsage: ${prefix + command} zeeone|anubis`)
	if (!q.includes('|')) return reply(`Ex: ${prefix + command} nama|style\nUsage: ${prefix + command} zeeone|anubis`)
const style = ['anubis','cowgirl','dragon','duck','ghost','gorilla','panda','panther','shark','squirrel','tiger','wolf','bee','crocodile','deer','pitbull','horse','hurricane','indian','assassin','boar','rapid','raven','warrior','pikachu','pubg','ninja','drift','yasuo','rhino','phoenix','bull','hornet','eagle','hunter','parrot','rooster','lion','skull','wolver','wolf','cobra','dragon','panther','owl','tiger','reaper','warrior']
if (!style.includes(m2)){ 
let listt = `*Style Yg Kamu Masukkan Salah*\n\n_Berikut list style yg benar, Total_ *${style.length}* _style_\n\n`
no = 0
for (var i = 0; i < style.length; i++) {
no +=1
listt += no.toString() + '.  '  + style[i] + '\n'
}
reply(listt)
} else {
	reply(lang.wait())
let textpro2 = await getBuffer(api('alfa', '/api/ephoto360/'+command, {text: m1, style : m2}, 'apikey'))
alpha.sendMessage(from, textpro2, MessageType.image, { quoted: mek, caption: '*Terima kasih telah menggunakan* ' + '*' + global.botname + '*'})
}}
await limitAdd(sender, limit)
	break
case 'circlemarcotteam':{
	if (isLimit(sender, isPremium, isCreator, isOwner, limitawal, limit)) return sendButMessage(from, lang.limit(prefix), `© ${ownername}`, [{buttonId: 'limit', buttonText: {displayText: `Check Limit`, },type: 1,}]);
var m = q
var m1 = m.split("|")[0];
var m2 = m.split("|")[1]; 
	if (args.length < 1) return reply(`Ex: ${prefix + command} nama|logo\nUsage: ${prefix + command} zeeone|lionsnake`)
	if (!q.includes('|')) return reply(`Ex: ${prefix + command} nama|logo\nUsage: ${prefix + command} zeeone|lionsnake`)
const style = ['panther','rhino','squirrel','unicorn','zebra','lionsnake','bear','bull','dragon','eagle','fox','griffin','hawk','lion','peacock','phoenix','tiger','wolver']
if (!style.includes(m2)){ 
let listt = `*Logo Yg Kamu Masukkan Salah*\n\n_Berikut list logo yg benar, Total_ *${style.length}* _logo_\n\n`
no = 0
for (var i = 0; i < style.length; i++) {
no +=1
listt += no.toString() + '.  '  + style[i] + '\n'
}
reply(listt)
} else {
	reply(lang.wait())
let textpro2 = await getBuffer(api('alfa', '/api/ephoto360/'+command, {text: m1, logo : m2}, 'apikey'))
alpha.sendMessage(from, textpro2, MessageType.image, { quoted: mek, caption: '*Terima kasih telah menggunakan* ' + '*' + global.botname + '*'})
}}
await limitAdd(sender, limit)
	break
case 'wallpaperml':{
	if (isLimit(sender, isPremium, isCreator, isOwner, limitawal, limit)) return sendButMessage(from, lang.limit(prefix), `© ${ownername}`, [{buttonId: 'limit', buttonText: {displayText: `Check Limit`, },type: 1,}]);
var m = q
var m1 = m.split("|")[0];
var m2 = m.split("|")[1]; 
	if (args.length < 1) return reply(`Ex: ${prefix + command} nama|heroes\nUsage: ${prefix + command} zeeone|aldous`)
	if (!q.includes('|')) return reply(`Ex: ${prefix + command} nama|heroes\nUsage: ${prefix + command} zeeone|aldous`)
const style = ['aldous','alice-2','angela-2','argus-2','chou','chou-2','estes','eudora','eudora-2','granger','granger-2','gusion-3','hanabi-2','hanzo','helcurt','layla-3','lesley-4','lunox-2','odette-3','saber','thamuz','vexana','argus','dyrroth','esmeralda-2','kadita-2','lancelot','leomord-2','lylia','vale','valir','xborg','zhask','alice','alpha','athena','badang','balmond','bane','diggie','trunks','fanny-2','fanny-3','freya','guinevere','gusion','gusion-2','hanabi','harith','harith-2','hayabusa-2','kadita','kagura-2','kagura-3','karina-2','kimmy','layla-2','leomord','lesley-2','lesley-3','lunox','nartis','niya-2','nana','nana-2','natalia','natalia-2','odette-2','pharsa','rafaela-2','selena-2','zilong','alucard','angela','bruno','change','claude','fanny','hayabusa','hilda','hylos','kagura','karina','karrie', 'layla','lesley','lolita','ninotaur','ninsittar','niya','noskov','odette','rafaela','selena']
if (!style.includes(m2)){ 
let listt = `*Heroes Yg Kamu Masukkan Salah*\n\n_Berikut list heroes yg benar, Total_ *${style.length}* _heroes_\n\n`
no = 0
for (var i = 0; i < style.length; i++) {
no +=1
listt += no.toString() + '.  '  + style[i] + '\n'
}
reply(listt)
} else {
	reply(lang.wait())
let textpro2 = await getBuffer(api('alfa', '/api/ephoto360/'+command, {text: m1, heroes : m2}, 'apikey'))
alpha.sendMessage(from, textpro2, MessageType.image, { quoted: mek, caption: '*Terima kasih telah menggunakan* ' + '*' + global.botname + '*'})
}}
await limitAdd(sender, limit)
	break
case 'dragonballfb':{
	if (isLimit(sender, isPremium, isCreator, isOwner, limitawal, limit)) return sendButMessage(from, lang.limit(prefix), `© ${ownername}`, [{buttonId: 'limit', buttonText: {displayText: `Check Limit`, },type: 1,}]);
var m = q
var m1 = m.split("|")[0];
var m2 = m.split("|")[1]; 
	if (args.length < 1) return reply(`Ex: ${prefix + command} nama|character\nUsage: ${prefix + command} zeeone|aldous`)
	if (!q.includes('|')) return reply(`Ex: ${prefix + command} nama|character\nUsage: ${prefix + command} zeeone|aldous`)
const style = ['cabba','caulifla','cooler','cumber','hit','kale','kaminoren','gokuui','xenogokuss3','xenogokuss4','xenovegeta','xenovegito','android-18','blackgoku','bulma','frieza','gotenks-2','kaio','krillinandroid-18','launch','nutenroshi-2','oldkai','oolong','pilaf','tienshinhan','trunks-3','bardock','gotenks','nutenroshi','piccolo','songoku-2','songoku-3','songoten','trunks-2','vegeta-2','vegito','krillin','najinbuu','songohan','songoku','trunks','vegeta']
if (!style.includes(m2)){ 
let listt = `*Character Yg Kamu Masukkan Salah*\n\n_Berikut list character yg benar, Total_ *${style.length}* _character_\n\n`
no = 0
for (var i = 0; i < style.length; i++) {
no +=1
listt += no.toString() + '.  '  + style[i] + '\n'
}
reply(listt)
} else {
	reply(lang.wait())
let textpro2 = await getBuffer(api('alfa', '/api/ephoto360/'+command, {text: m1, character : m2}, 'apikey'))
alpha.sendMessage(from, textpro2, MessageType.image, { quoted: mek, caption: '*Terima kasih telah menggunakan* ' + '*' + global.botname + '*'})
}}
await limitAdd(sender, limit)
	break
case 'bannerofaov':{
	if (isLimit(sender, isPremium, isCreator, isOwner, limitawal, limit)) return sendButMessage(from, lang.limit(prefix), `© ${ownername}`, [{buttonId: 'limit', buttonText: {displayText: `Check Limit`, },type: 1,}]);
var m = q
var m1 = m.split("|")[0];
var m2 = m.split("|")[1]; 
	if (args.length < 1) return reply(`Ex: ${prefix + command} nama|character\nUsage: ${prefix + command} zeeone|aphelios`)
	if (!q.includes('|')) return reply(`Ex: ${prefix + command} nama|character\nUsage: ${prefix + command} zeeone|aphelios`)
const style = ['aphelios','karma','leesin-2','nidalee-2','soraka-2','soraka-3','swain','akali-4','ekko-2','qiyana','senna','yasuo-3','ahri-2','akali-3','ashe-3','caitlyn','camille','darius','draven','evelynn-2','kaisa','kayle','pantheon','rengar','sivir-2','sona','vayne-3','wukong','zoe-2','zyra','azir','garen','jinx-3','katarina-3','lux-3','nasus','nidalee','sejuani','sylas','vayner-2','vi-2','warwick-2','fiora-2','irelia-3','janna-2','jax','leesin','nasteryi-2','norgana','nami','riven-2','riven-3','talon-2','neeko','neeko-2','xayahrakan','zoe','ahri','ezreal-2','janna','jinx-2','lulu','lux-2','nissfortune','poopy','soraka','syndra','ezreal','graves','jayce','katarina-2','lux','yuumi','aatrox','akali-2','diana','elise','evelynn','jhin-2','kalista-2','kennen','pyke-2','shen','sivir','talon','twistedfate','thresh-2','yasuo-2','zilean','ashe-2','kalista','khazix','riven','riven','shyvana','thresh','zed-2','akali','ashe','ekko','fiora','irelia','irelia-2','jhin','jinx','katarina','leona','lucian','nasteryi','pyke','vayne','vi','warwick','yasuo','zed']
if (!style.includes(m2)){ 
let listt = `*Character Yg Kamu Masukkan Salah*\n\n_Berikut list character yg benar, Total_ *${style.length}* _character_\n\n`
no = 0
for (var i = 0; i < style.length; i++) {
no +=1
listt += no.toString() + '.  '  + style[i] + '\n'
}
reply(listt)
} else {
	reply(lang.wait())
let textpro2 = await getBuffer(api('alfa', '/api/ephoto360/'+command, {text: m1, character : m2}, 'apikey'))
alpha.sendMessage(from, textpro2, MessageType.image, { quoted: mek, caption: '*Terima kasih telah menggunakan* ' + '*' + global.botname + '*'})
}}
await limitAdd(sender, limit)
	break
case 'effect3donbeach':{
	if (isLimit(sender, isPremium, isCreator, isOwner, limitawal, limit)) return sendButMessage(from, lang.limit(prefix), `© ${ownername}`, [{buttonId: 'limit', buttonText: {displayText: `Check Limit`, },type: 1,}]);
var m = q
var m1 = m.split("|")[0];
var m2 = m.split("|")[1]; 
	if (args.length < 1) return reply(`Ex: ${prefix + command} nama|background\nUsage: ${prefix + command} zeeone|beach-1`)
	if (!q.includes('|')) return reply(`Ex: ${prefix + command} nama|background\nUsage: ${prefix + command} zeeone|beach-1`)
const style = ['beach-1','beach-2','beach-3','beach-4','beach-5','beach-6']
if (!style.includes(m2)){ 
let listt = `*Background Yg Kamu Masukkan Salah*\n\n_Berikut list background yg benar, Total_ *${style.length}* _background_\n\n`
no = 0
for (var i = 0; i < style.length; i++) {
no +=1
listt += no.toString() + '.  '  + style[i] + '\n'
}
reply(listt)
} else {
	reply(lang.wait())
let textpro2 = await getBuffer(api('alfa', '/api/ephoto360/'+command, {text: m1, background : m2}, 'apikey'))
alpha.sendMessage(from, textpro2, MessageType.image, { quoted: mek, caption: '*Terima kasih telah menggunakan* ' + '*' + global.botname + '*'})
}}
await limitAdd(sender, limit)
	break
case 'cutegirlgamer':{
	if (isLimit(sender, isPremium, isCreator, isOwner, limitawal, limit)) return sendButMessage(from, lang.limit(prefix), `© ${ownername}`, [{buttonId: 'limit', buttonText: {displayText: `Check Limit`, },type: 1,}]);
var m = q
var m1 = m.split("|")[0];
var m2 = m.split("|")[1]; 
	if (args.length < 1) return reply(`Ex: ${prefix + command} nama|logo\nUsage: ${prefix + command} zeeone|style-1`)
	if (!q.includes('|')) return reply(`Ex: ${prefix + command} nama|logo\nUsage: ${prefix + command} zeeone|style-1`)
const style = ['style-1','style-2','style-3','style-4','style-5','style-6', 'style-7','style-8','style-9', 'style-10','style-11','style-12']
if (!style.includes(m2)){ 
let listt = `*Logo Yg Kamu Masukkan Salah*\n\n_Berikut list logo yg benar, Total_ *${style.length}* _logo_\n\n`
no = 0
for (var i = 0; i < style.length; i++) {
no +=1
listt += no.toString() + '.  '  + style[i] + '\n'
}
reply(listt)
} else {
	reply(lang.wait())
let textpro2 = await getBuffer(api('alfa', '/api/ephoto360/'+command, {text: m1, logo : m2}, 'apikey'))
alpha.sendMessage(from, textpro2, MessageType.image, { quoted: mek, caption: '*Terima kasih telah menggunakan* ' + '*' + global.botname + '*'})
}}
await limitAdd(sender, limit)
	break
case 'footballteam':{
	if (isLimit(sender, isPremium, isCreator, isOwner, limitawal, limit)) return sendButMessage(from, lang.limit(prefix), `© ${ownername}`, [{buttonId: 'limit', buttonText: {displayText: `Check Limit`, },type: 1,}]);
var m = q
var m1 = m.split("|")[0];
var m2 = m.split("|")[1]; 
	if (args.length < 1) return reply(`Ex: ${prefix + command} nama|logo\nUsage: ${prefix + command} zeeone|nau-1`)
	if (!q.includes('|')) return reply(`Ex: ${prefix + command} nama|logo\nUsage: ${prefix + command} zeeone|nau-1`)
const style = ['nau-1','nau-2','nau-3','nau-4','nau-5','nau-6']
if (!style.includes(m2)){ 
let listt = `*Logo Yg Kamu Masukkan Salah*\n\n_Berikut list logo yg benar, Total_ *${style.length}* _logo_\n\n`
no = 0
for (var i = 0; i < style.length; i++) {
no +=1
listt += no.toString() + '.  '  + style[i] + '\n'
}
reply(listt)
} else {
	reply(lang.wait())
let textpro2 = await getBuffer(api('alfa', '/api/ephoto360/'+command, {text: m1, logo : m2}, 'apikey'))
alpha.sendMessage(from, textpro2, MessageType.image, { quoted: mek, caption: '*Terima kasih telah menggunakan* ' + '*' + global.botname + '*'})
}}
await limitAdd(sender, limit)
	break
case 'beautifulshimmering':{
	if (isLimit(sender, isPremium, isCreator, isOwner, limitawal, limit)) return sendButMessage(from, lang.limit(prefix), `© ${ownername}`, [{buttonId: 'limit', buttonText: {displayText: `Check Limit`, },type: 1,}]);
var m = q
var m1 = m.split("|")[0];
var m2 = m.split("|")[1]; 
	if (args.length < 1) return reply(`Ex: ${prefix + command} nama|champion\nUsage: ${prefix + command} zeeone|aleister`)
	if (!q.includes('|')) return reply(`Ex: ${prefix + command} nama|champion\nUsage: ${prefix + command} zeeone|aleister`)
const style = ['aleister','alice','butterfly','diaochan','kahlii','krixi','nina','nakroth','natalya','taara','thane','violet','zanis','zata','airi','annette','arthur','arum','astrid','elandorr','gildur','gildur','hayate','ilumia','ishar','lauriel','lindis','nurad','quillen','rouie','sephera','yena','yorn']
if (!style.includes(m2)){ 
let listt = `*Champion Yg Kamu Masukkan Salah*\n\n_Berikut list champion yg benar, Total_ *${style.length}* _champion_\n\n`
no = 0
for (var i = 0; i < style.length; i++) {
no +=1
listt += no.toString() + '.  '  + style[i] + '\n'
}
reply(listt)
} else {
	reply(lang.wait())
let textpro2 = await getBuffer(api('alfa', '/api/ephoto360/'+command, {text: m1, champion : m2}, 'apikey'))
alpha.sendMessage(from, textpro2, MessageType.image, { quoted: mek, caption: '*Terima kasih telah menggunakan* ' + '*' + global.botname + '*'})
}}
await limitAdd(sender, limit)
	break
case 'pubgcutelogo':{
	if (isLimit(sender, isPremium, isCreator, isOwner, limitawal, limit)) return sendButMessage(from, lang.limit(prefix), `© ${ownername}`, [{buttonId: 'limit', buttonText: {displayText: `Check Limit`, },type: 1,}]);
var m = q
var m1 = m.split("|")[0];
var m2 = m.split("|")[1]; 
	if (args.length < 1) return reply(`Ex: ${prefix + command} nama|logo\nUsage: ${prefix + command} zeeone|aleister`)
	if (!q.includes('|')) return reply(`Ex: ${prefix + command} nama|logo\nUsage: ${prefix + command} zeeone|aleister`)
const style = ['chicken','soldier']
if (!style.includes(m2)){ 
let listt = `*Logo Yg Kamu Masukkan Salah*\n\n_Berikut list logo yg benar, Total_ *${style.length}* _logo_\n\n`
no = 0
for (var i = 0; i < style.length; i++) {
no +=1
listt += no.toString() + '.  '  + style[i] + '\n'
}
reply(listt)
} else {
	reply(lang.wait())
let textpro2 = await getBuffer(api('alfa', '/api/ephoto360/'+command, {text: m1, logo : m2}, 'apikey'))
alpha.sendMessage(from, textpro2, MessageType.image, { quoted: mek, caption: '*Terima kasih telah menggunakan* ' + '*' + global.botname + '*'})
}}
await limitAdd(sender, limit)
	break
	case 'elegantrotation':{
		if (isLimit(sender, isPremium, isCreator, isOwner, limitawal, limit)) return sendButMessage(from, lang.limit(prefix), `© ${ownername}`, [{buttonId: 'limit', buttonText: {displayText: `Check Limit`, },type: 1,}]);
var m = q
var m1 = m.split("|")[0];
var m2 = m.split("|")[1]; 
	if (args.length < 1) return reply(`Ex: ${prefix + command} nama|logo\nUsage: ${prefix + command} zeeone|bull`)
	if (!q.includes('|')) return reply(`Ex: ${prefix + command} nama|logo\nUsage: ${prefix + command} zeeone|bull`)
const style = ['bull','dragon','eagle','lion','rhino','tiger']
if (!style.includes(m2)){ 
let listt = `*Logo Yg Kamu Masukkan Salah*\n\n_Berikut list logo yg benar, Total_ *${style.length}* _logo_\n\n`
no = 0
for (var i = 0; i < style.length; i++) {
no +=1
listt += no.toString() + '.  '  + style[i] + '\n'
}
reply(listt)
} else {
	reply(lang.wait())
let textpro2 = await getBuffer(api('alfa', '/api/ephoto360/'+command, {text: m1, logo : m2}, 'apikey'))
alpha.sendMessage(from, textpro2, MessageType.image, { quoted: mek, caption: '*Terima kasih telah menggunakan* ' + '*' + global.botname + '*'})
}}
await limitAdd(sender, limit)
	break
case 'logogamingassasin':{
	if (isLimit(sender, isPremium, isCreator, isOwner, limitawal, limit)) return sendButMessage(from, lang.limit(prefix), `© ${ownername}`, [{buttonId: 'limit', buttonText: {displayText: `Check Limit`, },type: 1,}]);
var m = q
var m1 = m.split("|")[0];
var m2 = m.split("|")[1]; 
	if (args.length < 1) return reply(`Ex: ${prefix + command} nama|logo\nUsage: ${prefix + command} zeeone|style-1`)
	if (!q.includes('|')) return reply(`Ex: ${prefix + command} nama|logo\nUsage: ${prefix + command} zeeone|style-1`)
const style = ['style-1','style-2','style-3','style-4','style-5','style-6','style-7','style-8','style-9','style-10','style-11','style-12','style-13','style-14','style-15','style-16','style-17','style-18','style-19','style-20','style-21','style-22','style-23','style-24']
if (!style.includes(m2)){ 
let listt = `*Logo Yg Kamu Masukkan Salah*\n\n_Berikut list logo yg benar, Total_ *${style.length}* _logo_\n\n`
no = 0
for (var i = 0; i < style.length; i++) {
no +=1
listt += no.toString() + '.  '  + style[i] + '\n'
}
reply(listt)
} else {
	reply(lang.wait())
let textpro2 = await getBuffer(api('alfa', '/api/ephoto360/'+command, {text: m1, logo : m2}, 'apikey'))
alpha.sendMessage(from, textpro2, MessageType.image, { quoted: mek, caption: '*Terima kasih telah menggunakan* ' + '*' + global.botname + '*'})
}}
await limitAdd(sender, limit)
	break
	case 'introvideomaker':{
		if (isLimit(sender, isPremium, isCreator, isOwner, limitawal, limit)) return sendButMessage(from, lang.limit(prefix), `© ${ownername}`, [{buttonId: 'limit', buttonText: {displayText: `Check Limit`, },type: 1,}]);
var m = q
var m1 = m.split("|")[0];
var m2 = m.split("|")[1]; 
	if (args.length < 1) return reply(`Ex: ${prefix + command} nama|logo\nUsage: ${prefix + command} zeeone|bull`)
	if (!q.includes('|')) return reply(`Ex: ${prefix + command} nama|logo\nUsage: ${prefix + command} zeeone|bull`)
const style = ['bull','dragon','eagle','lion','tiger','skull']
 if (!style.includes(m2)){ 
let listt = `*Logo Yg Kamu Masukkan Salah*\n\n_Berikut list logo yg benar, Total_ *${style.length}* _logo_\n\n`
no = 0
for (var i = 0; i < style.length; i++) {
no +=1
listt += no.toString() + '.  '  + style[i] + '\n'
}
reply(listt)
} else {
	reply(lang.wait())
let textpro2 = await getBuffer(api('alfa', '/api/ephoto360/'+command, {text: m1, logo : m2}, 'apikey'))
alpha.sendMessage(from, textpro2, MessageType.video, { mimetype: 'video/mp4', quoted: mek, caption: '*Terima kasih telah menggunakan* ' + '*' + global.botname + '*'})
}}
await limitAdd(sender, limit)
	break
case 'gaminglogo4fvs':{
	if (isLimit(sender, isPremium, isCreator, isOwner, limitawal, limit)) return sendButMessage(from, lang.limit(prefix), `© ${ownername}`, [{buttonId: 'limit', buttonText: {displayText: `Check Limit`, },type: 1,}]);
var m = q
var m1 = m.split("|")[0];
var m2 = m.split("|")[1]; 
	if (args.length < 1) return reply(`Ex: ${prefix + command} nama|logo\nUsage: ${prefix + command} zeeone|ghost`)
	if (!q.includes('|')) return reply(`Ex: ${prefix + command} nama|logo\nUsage: ${prefix + command} zeeone|ghost`)
const style = ['girl','ghost','soldier-2','swat','woman','soldier','sniper','raccoon','rabbit','panda','chicken']
if (!style.includes(m2)){ 
let listt = `*Logo Yg Kamu Masukkan Salah*\n\n_Berikut list logo yg benar, Total_ *${style.length}* _logo_\n\n`
no = 0
for (var i = 0; i < style.length; i++) {
no +=1
listt += no.toString() + '.  '  + style[i] + '\n'
}
reply(listt)
} else {
	reply(lang.wait())
let textpro2 = await getBuffer(api('alfa', '/api/ephoto360/'+command, {text: m1, logo : m2}, 'apikey'))
alpha.sendMessage(from, textpro2, MessageType.image, { quoted: mek, caption: '*Terima kasih telah menggunakan* ' + '*' + global.botname + '*'})
}}
await limitAdd(sender, limit)
	break
	case 'blueneon':{
		if (isLimit(sender, isPremium, isCreator, isOwner, limitawal, limit)) return sendButMessage(from, lang.limit(prefix), `© ${ownername}`, [{buttonId: 'limit', buttonText: {displayText: `Check Limit`, },type: 1,}]);
var m = q
var m1 = m.split("|")[0];
var m2 = m.split("|")[1]; 
	if (args.length < 1) return reply(`Ex: ${prefix + command} nama|logo\nUsage: ${prefix + command} zeeone|tiger`)
	if (!q.includes('|')) return reply(`Ex: ${prefix + command} nama|logo\nUsage: ${prefix + command} zeeone|tiger`)
const style = ['tiger','shark','dugong','bull','cheetah','lion']
if (!style.includes(m2)){ 
let listt = `*Logo Yg Kamu Masukkan Salah*\n\n_Berikut list logo yg benar, Total_ *${style.length}* _logo_\n\n`
no = 0
for (var i = 0; i < style.length; i++) {
no +=1
listt += no.toString() + '.  '  + style[i] + '\n'
}
reply(listt)
} else {
	reply(lang.wait())
let textpro2 = await getBuffer(api('alfa', '/api/ephoto360/'+command, {text: m1, logo : m2}, 'apikey'))
alpha.sendMessage(from, textpro2, MessageType.image, { quoted: mek, caption: '*Terima kasih telah menggunakan* ' + '*' + global.botname + '*'})
}}
await limitAdd(sender, limit)
	break
	case 'metalmascot':{
		if (isLimit(sender, isPremium, isCreator, isOwner, limitawal, limit)) return sendButMessage(from, lang.limit(prefix), `© ${ownername}`, [{buttonId: 'limit', buttonText: {displayText: `Check Limit`, },type: 1,}]);
	if (args.length < 1) return reply(`Ex: ${prefix + command} nama|logo\nUsage: ${prefix + command} zeeone|tiger`)
	if (!q.includes('|')) return reply(`Ex: ${prefix + command} nama|logo\nUsage: ${prefix + command} zeeone|tiger`)
var m = q
var m1 = m.split("|")[0];
var m2 = m.split("|")[1]; 
const style = ['snakelion','dragon','ragon-2','eagle','falcon','fox','lion','panther','phoenix','phoenix','rhino','squirrel','tiger','unicorn','wolf','zebra']
if (!style.includes(m2)){ 
let listt = `*Logo Yg Kamu Masukkan Salah*\n\n_Berikut list logo yg benar, Total_ *${style.length}* _logo_\n\n`
no = 0
for (var i = 0; i < style.length; i++) {
no +=1
listt += no.toString() + '.  '  + style[i] + '\n'
}
reply(listt)
} else {
	reply(lang.wait())
let textpro2 = await getBuffer(api('alfa', '/api/ephoto360/'+command, {text: m1, logo : m2}, 'apikey'))
alpha.sendMessage(from, textpro2, MessageType.image, { quoted: mek, caption: '*Terima kasih telah menggunakan* ' + '*' + global.botname + '*'})
}}
await limitAdd(sender, limit)
	break
case 'anonymous':{
	if (isLimit(sender, isPremium, isCreator, isOwner, limitawal, limit)) return sendButMessage(from, lang.limit(prefix), `© ${ownername}`, [{buttonId: 'limit', buttonText: {displayText: `Check Limit`, },type: 1,}]);
	var m = q
var m1 = m.split("|")[0];
var m2 = m.split("|")[1]; 
	if (args.length < 1) return reply(`Ex: ${prefix + command} nama|style\nUsage: ${prefix + command} zeeone|style2`)
	if (!q.includes('|')) return reply(`Ex: ${prefix + command} nama|style\nUsage: ${prefix + command} zeeone|style2`)
const style = ['style1','style2','style3']
if (!style.includes(m2)){ 
let listt = `*Style Yg Kamu Masukkan Salah*\n\n_Berikut list style yg benar, Total_ *${style.length}* _style_\n\n`
no = 0
for (var i = 0; i < style.length; i++) {
no +=1
listt += no.toString() + '.  '  + style[i] + '\n'
}
reply(listt)
} else {
	reply(lang.wait())
	let textpro2 = await getBuffer(api('alfa', '/api/ephoto360/'+command, {text: m1, style : m2}, 'apikey'))
alpha.sendMessage(from, textpro2, MessageType.image, { quoted: mek, caption: '*Terima kasih telah menggunakan* ' + '*' + global.botname + '*'})
}}
await limitAdd(sender, limit)
	break
	case 'lolpentakill':{
		if (isLimit(sender, isPremium, isCreator, isOwner, limitawal, limit)) return sendButMessage(from, lang.limit(prefix), `© ${ownername}`, [{buttonId: 'limit', buttonText: {displayText: `Check Limit`, },type: 1,}]);
		var m = q
var m1 = m.split("|")[0];
var m2 = m.split("|")[1]; 
	if (args.length < 1) return reply(`Ex: ${prefix + command} nama|style\nUsage: ${prefix + command} zeeone|kassadin`)
	if (!q.includes('|')) return reply(`Ex: ${prefix + command} nama|style\nUsage: ${prefix + command} zeeone|kassadin`)
const style = ['jhin','syndra','olaf','nocturne','chogath','kassadin','nidalee','fiora','fiddlesticks','garen','irelia-2','janna','lissandra','ezreal','riven','nalphite','khazix','nasteryi','irelia','alista','jayce','singed','galio','velkoz','yi','yasuo','sona','nidalee-2','teemo','leesin','jinx','zed','camille','brand','warwick','rengar','vayne','leona','ashe','ezreal','annie','xerath','ahri','kayle','nissfortune','caitlyn','vi','leesin','darius','fizz','bloodyasuo','ekko','lucian','rakanandayah']
if (!style.includes(m2)){ 
let listt = `*Style Yg Kamu Masukkan Salah*\n\n_Berikut list style yg benar, Total_ *${style.length}* _style_\n\n`
no = 0
for (var i = 0; i < style.length; i++) {
no +=1
listt += no.toString() + '.  '  + style[i] + '\n'
}
reply(listt)
} else {
	reply(lang.wait())
let textpro2 = await getBuffer(api('alfa', '/api/ephoto360/'+command, {text: m1, style : m2}, 'apikey'))
alpha.sendMessage(from, textpro2, MessageType.image, { quoted: mek, caption: '*Terima kasih telah menggunakan* ' + '*' + global.botname + '*'})
}}
await limitAdd(sender, limit)
	break
	case 'avatarleagueofking':{
if (isLimit(sender, isPremium, isCreator, isOwner, limitawal, limit)) return sendButMessage(from, lang.limit(prefix), `© ${ownername}`, [{buttonId: 'limit', buttonText: {displayText: `Check Limit`, },type: 1,}]);
var m = q
var m1 = m.split("|")[0];
var m2 = m.split("|")[1]; 
if (args.length < 1) return reply(`Ex: ${prefix + command} nama|style\nUsage: ${prefix + command} zeeone|arum-6`)
if (!q.includes('|')) return reply(`Ex: ${prefix + command} nama|style\nUsage: ${prefix + command} zeeone|arum-6`)
const style = ['arum-6','baldum-3','elandorr-3','hayate-5','ilumia-5','ishar-4','lauriel-8','nax-5','nurad-9','quillen-6','teemee-3','telannas-8','volkath-3','yena-4','yena-5','butterfly-10','laville','yuumi','laville-2','nakroth-7','omen-6','rouie-2','taara-4','zanis-8','zata','zata-2','yasuo','elsu-6','fennik-5','liliana-7','paine','paine-2','rouie','astrid-4','ata','ata-2','lauriel-8','omen-5','qi-3','roxie-5','taara-5','violet-12','wukong-7','wukong-8','hayate-4','ishar-3','jinna-5','keera-2','lauriel-7','quillen-5','richter-4','ryoma-6','telannas-8','tulen-9','yorn-8','aleister-4','dirak-2','grakk-5','kerra','raz-5','amily-5','athur-7','arum-5','ishar-2','nax-4','natalya-6','natalya-7','zill-5','diaochan-6','ignis-4','lubu-8','naloch-7','sephera-4','elandorr','elandorr-2','krizziz-2','violet-11','yena-3','arduin-4','enzo-3','errol-3','hayate-3','krixi-7','krizziz','nurad-8','volkath','volkath-2','wisp-4','wukong-6','celica','gildur-4','ishar','nurad-7','quillen-4','tulen-8','lauriel-6','qi','qi-2','darcy-3','florentino-3','noren-3','ryoma-5','sephera-3','annette-4','capheny-3','elsu-5','narja','veres-3','violet-10','zip','zip-2','diaochan-5','enzo-2','lubu-7','nganga-4','payna-3','roxie-4','violet-9','zanis-7','zephys-6','enzo','liliana-6','lindis-5','xeniel-5','airi-9','errol-2','yena-2','zuka-8','notos','chaugnar','kahlii','lubo','nina','krixi','zanis-3','jinna','fennik','airi','ormarr','toro','butterfly','nakroth','gildur','omega','natalya','lumburr','yorn','dieu-thuyen','nganga','grankk-2','azzenka','alice','violet','violet2','butterfly2','krixi2','natalya2','taara','ormarr2','valhein','zephys','nakroth2','aleister','payna','wukong','naloch','kricnak','slimz2','cresht','slimz','dieu-thuyen2','thane-2','preyta','fennik-2','raz','preyta-2','payna-2','illumia','nortos-2','yorn-2','violet-3','valhein-2','taara-2','skud-1','skud','natalya-3','lu-bu','jinna-2','illumia-2','butterfly-4','batman','zuka-2','airi-2','zanis','nurad','nurad-2','nina-2','lauriel-2','ignis-2','ignis','grakk','airi-3','zill-2','zill','zanis-2','yorn-3','veera-3','veera-2','telannas','superman','naloch-2','krixi-3','butterfly-5','violet-5','veera-4','telannas-2','illumia-3','batman-2','arduin-2','arduin','wukong-2','nakroth-3','arthur','ryoma-2','ryoma','raz-2','nganga-2','astrid-2','astrid','zanis-4','xeniel','wukong-3','noren','lauriel-3','joker','xeniel-2','telannas-3','nurad-3','lubu-4','lubu-3','kriknak-2','kahlii-2','diaochanlubu','chaugnar-2','azzenka-2','alice-2','aleister-2','noren-2','lubu-5','lauriel-4','kilgoth','gildur-2','fennik-3','zephys-3','wonderwoman','superman-2','slimz-3','natalya-4','krixi-5','krixi-4','zephys-2','zanis-5','yorn-4','xeniel-3','wonderwoman-2','violet-4','naloch-3','airi-4','telannas-4','ormarr-4','ormarr-3','nakroth-4','kilgroth-2','kahlii-3','grakk-3','natalya-5','fennik-4','valhein-3','teemee-2','teemee','lindis','zuka-3','tulen','toro-2','nina-3','naloch-4','lumburr-2','lindis-2','joker-2','grakk-4','gildur-3','aleister-3','tulen-2','toro-3','taara-3','omen-2','omen','zill-3','arthurtelannas','zuka-4','nakroth-5','nax','liliana','raz-3','liliana-2','nax-2','krixnak-3','joker-3','chaugnar-3','wisp','ryoma-3','batman-3','airi-6','tulen-3','cresht-3','cresht-2','astris-3','flash','arum-2','arum','butterfly-6','alice-3','xeniel-4','valhein-4','tulen-4','rourke-2','rourke','nurad-4','nax-3','wisp-2','narja-2','narja','zuka-5','jinna-3','butterfly-7','arthur-5','valhein-5','superman-3','liliana-3','kilgroth','wirosabaleng','roxie-2','roxie','wukong-4','baldum-2','baldum','zephys-4','annette-2','annette','telannas-6','raz-4','nurad-6','nurad-5','jinna-4','amily','ybneth-2','ybneth','ilumia-4','amily-2','xeniel-5','veera-5','liliana-4','flash-2','arthur-2','omen-3','lindis-3','elsu-2','elsu','richter-2','richter','nina-4','thane-3','ryoma-4','quillen-2','quillen','lauriel-5','arum-3','wisp-3','violet-7','sephera-2','sephera','naloch-5','krixi-6','alice-4','tulen-5','skud-3','rourke-3','nakroth-6','florentino-2','florentino','elsu-3','butterfly-8','amily-3','zuka-7','zuka-6','yorn-7','yorn-6','veres-2','veres','naloch-6','cresht-4','azzenka-3','airi-7','zephys-5','yorn-5','violet-8','valhein-6','thane-4','roxie-3','nakroth-7','kahlii-4','elsu-4','darcy-2','darcy','capheny','zill-4','hayate-2','hayate','cresht-5','annette-3','amily-4','tulen-7','telannas-7','omen-4','lindis-4','liliana-5','ignis-3','errol','capheny-2','arum-4','zanis-6','wukong-5','thane-5','slimz-4','skud-4','richter-3','quillen-3','azzenka-4','arduin-3','airi-8']
if (!style.includes(m2)){ 
let listt = `*Style Yg Kamu Masukkan Salah*\n\n_Berikut list style yg benar, Total_ *${style.length}* _style_\n\n`
no = 0
for (var i = 0; i < style.length; i++) {
no +=1
listt += no.toString() + '.  '  + style[i] + '\n'
}
reply(listt)
} else {
	reply(lang.wait())
let textpro2 = await getBuffer(api('alfa', '/api/ephoto360/'+command, {text: m1, style : m2}, 'apikey'))
alpha.sendMessage(from, textpro2, MessageType.image, { quoted: mek, caption: '*Terima kasih telah menggunakan* ' + '*' + global.botname + '*'})
}}
await limitAdd(sender, limit)
	break
	case 'avatarff':{
if (isLimit(sender, isPremium, isCreator, isOwner, limitawal, limit)) return sendButMessage(from, lang.limit(prefix), `© ${ownername}`, [{buttonId: 'limit', buttonText: {displayText: `Check Limit`, },type: 1,}]);
var m = q
var m1 = m.split("|")[0];
var m2 = m.split("|")[1]; 
if (args.length < 1) return reply(`Ex: ${prefix + command} nama|character\nUsage: ${prefix + command} zeeone|laura`)
if (!q.includes('|')) return reply(`Ex: ${prefix + command} nama|character\nUsage: ${prefix + command} zeeone|laura`)
const style = ['a124','alok','alvaro','andrew','antonio','caroline','ford','hayato','joseph','kelly','kla','laura','naxim','niguel','nisa','noco','nikita','notora','olivia','paloma','rafael','shani','steffie','wukong']
if (!style.includes(m2)){ 
let listt = `*Character Yg Kamu Masukkan Salah*\n\n_Berikut list character yg benar, Total_ *${style.length}* _character_\n\n`
no = 0
for (var i = 0; i < style.length; i++) {
no +=1
listt += no.toString() + '.  '  + style[i] + '\n'
}
reply(listt)
} else {
	reply(lang.wait())
let textpro2 = await getBuffer(api('alfa', '/api/ephoto360/'+command, {text: m1, character : m2}, 'apikey'))
alpha.sendMessage(from, textpro2, MessageType.image, { quoted: mek, caption: '*Terima kasih telah menggunakan* ' + '*' + global.botname + '*'})
}}
await limitAdd(sender, limit)
	break
	case 'overwatchwallpaper':{
if (isLimit(sender, isPremium, isCreator, isOwner, limitawal, limit)) return sendButMessage(from, lang.limit(prefix), `© ${ownername}`, [{buttonId: 'limit', buttonText: {displayText: `Check Limit`, },type: 1,}]);
var m = q
var m1 = m.split("|")[0];
var m2 = m.split("|")[1]; 
if (args.length < 1) return reply(`Ex: ${prefix + command} nama|character\nUsage: ${prefix + command} zeeone|laura`)
if (!q.includes('|')) return reply(`Ex: ${prefix + command} nama|character\nUsage: ${prefix + command} zeeone|laura`)
const style = ['ana','ashe','ashe-2','baptiste','baptiste-2','brigitte','dva','dva-2','genji','hanzo','junkrat','lucio','nccree','nei','nercy','nercy-2','nercy-3','noira','pharah','reaper','roadhog','soldier-76','sombra','sombra-2','symmetra','tracer','tracer-2','widowmaker','widowmaker-2','zarya']
if (!style.includes(m2)){ 
let listt = `*Character Yg Kamu Masukkan Salah*\n\n_Berikut list character yg benar, Total_ *${style.length}* _character_\n\n`
no = 0
for (var i = 0; i < style.length; i++) {
no +=1
listt += no.toString() + '.  '  + style[i] + '\n'
}
reply(listt)
} else {
	reply(lang.wait())
let textpro2 = await getBuffer(api('alfa', '/api/ephoto360/'+command, {text: m1, character : m2}, 'apikey'))
alpha.sendMessage(from, textpro2, MessageType.image, { quoted: mek, caption: '*Terima kasih telah menggunakan* ' + '*' + global.botname + '*'})
}}
await limitAdd(sender, limit)
	break
	case 'rovwallpaperhd':{
if (isLimit(sender, isPremium, isCreator, isOwner, limitawal, limit)) return sendButMessage(from, lang.limit(prefix), `© ${ownername}`, [{buttonId: 'limit', buttonText: {displayText: `Check Limit`, },type: 1,}]);
var m = q
var m1 = m.split("|")[0];
var m2 = m.split("|")[1]; 
if (args.length < 1) return reply(`Ex: ${prefix + command} nama|hero\nUsage: ${prefix + command} zeeone|lorion`)
if (!q.includes('|')) return reply(`Ex: ${prefix + command} nama|hero\nUsage: ${prefix + command} zeeone|lorion`)
const style = ['alice-5','arthur-8','dirak-3','errol','grakk-6','keera','lorion','nina-6','tulen-10','yena','zip-3','zuka-9','arum-6','baldum-3','elandorr-3','hayate-5','ilumia-5','ishar-4','lauriel-8','nax-5','nurad-9','quillen-6','teemee-3','telannas-8','yena-4','yena-5','butterfly-10','laville','laville-2','nakroth-7','omen-6','rouie-2','taara-5','zanis-8','zata','zata-2','capheny-4','elsu-6','fennik-5','liliana-7','paine','paine-2','rouie','astrid-4','ata','ata-2','lauriel-8','omen-5','qi-3','roxie-5','taara-5','violet-12','wukong-7','wukong-8','hayate-4','ishar-3','jinna-5','lauriel-7','quillen-5','richter-4','ryoma-6','telannas-8','tulen-9','yorn-7','aleister-4','dirak','dirak-2','grakk-5','kerra','raz-4','athur-7','arum-5','ishar-2','nax-4','natalya-7','valhein-7','zill-5','diaochan-6','ignis-4','lubu-8','naloch-7','sephera-4','elandorr','elandorr-2','krizzix','krizzix-2','violet-11','yena-3','arduin-4','enzo-3','errol-3','hayate-3','krixi-7','nurad-8','volkath','volkath-2','wisp-4','wukong-6','gildur-4','ishar','nurad-7','quillen-4','tulen-8','lauriel-6','qi','qi-2','darcy-3','florentino-3','noren-3','ryoma-5','sephera-3','annette-4','capheny-3','elsu-5','narja-3','veres-3','violet-10','zip-2','zip-3','diaochan-5','enzo-2','lubu-7','payna-4','roxie-4','violet-9','zanis-7','zephys-6','enzo','liliana-6','lindis-5','xeniel-5','airi-9','errol-2','yena-2','zuka-8','zephys-3','zephys-2','zephys','zanis-5','zanis-4','zanis-3','zanis-2','zanis','violet-5','violet-4','violet-3','violet-2','violet','veera-4','veera-3','veera-2','valhein-3','valhein-2','valhein','thane-2','thane','nina-3','nina-2','nina','nganga-2','nganga','lubu-5','lubu-4','lubu-3','lubu-2','lubu','krixi-5','krixi-4','krixi-3','krixi-2','krixi','kahlii-3','kahlii-2','kahlii','diaochan-3','diaochan-2','diaochan','chaugnar','butterfly-5','butterfly-4','butterfly-2','butterfly','yorn-4','yorn-3','yorn-2','yorn','wukong-3','wukong-2','wukong','toro-2','toro','taara-2','taara','slimz-3','slimz-2','slimz','payna-2','payna','ormarr-4','ormarr-3','ormarr-2','kaisa-2','ormarr','natalya-5','natalya-4','natalya-3','natalya-2','natalya','nakroth-4','nakroth-3','nakroth-2','nakroth','naloch-3','naloch-2','naloch','lumburr','kriknak-2','kriknak','jinna-2','jinna','grakk-3','grakk-2','grakk','gildur-2','gildur','fennik-4','fennik-3','fennik-2','fennik','cresht','azzenka-2','azzenka','arthur-3','arthur-2','arthur','alice-2','alice','aleister-2','aleister','zuka-2','zuka','zill-2','zill','xeniel-2','xeniel','wonderwoman-2','wonderwoman','telannas-4','telannas-3','telannas-2','telannas','superman-2','superman','skud-2','skud','ryoma-2','ryoma','preyta-3','preyta-2','preyta','nurad-3','nurad-2','nurad','noren-2','noren','lauriel-4','lauriel-3','lauriel-2','lauriel','kilgroth-2','kilgroth','joker','illumia-3','illumia-2','illumia','ignis-2','ignis','batman-2','batman','astrid-2','astrid','arduin-2','arduin','airi-5','airi-4','airi-3','airi-2','airi','teemee-2','teemee','zuka-3','tulen','raz-2','raz','naloch-4','lumburr-2','lindis-2','joker-2','grakk-4','gildur-3','toro-3','omen-2','omen','zuka-4','tulen-2','nakroth-5','nax','liliana','zill-3','raz-3','liliana-2','tulen-3','telannas-5','taara-3','ryoma-3','nax-2','kriknak-3','flash','cresht-3','cresht-2','arthur-4','aleister-3','airi-6','arum-2','arum','wisp-2','wisp','rourke-2','rourke','narja-2','narja','butterfly-6','batman-3','astris-3','jinna-3','butterfly-7','arthur-5','valhein-4','superman-3','liliana-3','kilgroth-3','roxie-2','roxie','wukong-4','baldum-2','baldum','zephys-4','annette-2','annette','alice-3','telannas6','raz-4','nurad-6','nurad-5','jinna-4','amily','ybneth-2','ybneth','ilumia-4','amily-2','xeniel-3','veera-5','liliana4','flash-2','arthur-6','omen-3','lindis-3','elsu-2','elsu','richter-2','richter','nina-4','wirosableng','thane-3','ryoma-4','quillen-2','quillen','lauriel-5','arum-3','wisp-3','violet-7','sephera-2','sephera','naloch-5','krixi-6','alice-4','tulen-5','skud-3','rourke-3','nakroth-6','florentino-2','florentino','elsu-3','butterfly-8','amily-3','zuka-7','zuka-6','yorn-6','yorn-5','veres-2','veres','naloch-6','cresht-4','azzenka-3','airi-7','zephys-5','yorn-7','violet-8','valhein-5','tulen-6','thane-4','roxie-3','nakroth-7','kahlii-4','elsu-4','darcy-2','darcy','capheny','zill-4','hayate-2','hayate','cresht-5','annette-3','amily-4','tulen-7','telannas-7','omen-4','lindis-4','liliana-5','ignis-3','errol','capheny-2','arum-4','zanis-6','wukong-5','thane-5','slimz-4','skud-4','richter-3','quillen-3','azzenka-4','arduin-3','airi-8']
if (!style.includes(m2)){ 
let listt = `*Hero Yg Kamu Masukkan Salah*\n\n_Berikut list hero yg benar, Total_ *${style.length}* _hero_\n\n`
no = 0
for (var i = 0; i < style.length; i++) {
no +=1
listt += no.toString() + '.  '  + style[i] + '\n'
}
reply(listt)
} else {
	reply(lang.wait())
let textpro2 = await getBuffer(api('alfa', '/api/ephoto360/'+command, {text: m1, hero : m2}, 'apikey'))
alpha.sendMessage(from, textpro2, MessageType.image, { quoted: mek, caption: '*Terima kasih telah menggunakan* ' + '*' + global.botname + '*'})
}}
await limitAdd(sender, limit)
	break
	case 'rovwallpaper':{
if (isLimit(sender, isPremium, isCreator, isOwner, limitawal, limit)) return sendButMessage(from, lang.limit(prefix), `© ${ownername}`, [{buttonId: 'limit', buttonText: {displayText: `Check Limit`, },type: 1,}]);
var m = q
var m1 = m.split("|")[0];
var m2 = m.split("|")[1]; 
if (args.length < 1) return reply(`Ex: ${prefix + command} nama|avatar\nUsage: ${prefix + command} zeeone|lorion`)
if (!q.includes('|')) return reply(`Ex: ${prefix + command} nama|avatar\nUsage: ${prefix + command} zeeone|lorion`)
const style = ['alice-5','arthur-8','dirak-3','errol','grakk-6','keera-2','lorion','grakk-6','keera-2','lorion','nina-6','tulen-10','yena','zip-3','zuka-9','dextra','dextra-2','lindis-6','nurad-10','nakroth-9','quillen-7','sephera-5','yorn-8','airi-10','amily-6','astrid-6','ata-3','capheny-5','darcy-4','diaochan-8','hayate-6','lauriel-10','laville-3','rourke-4','ryoma-7','sinestrea','sinestrea-2','telannas-9','thorne','thorne-2','veres-4','yena-6','zephys-7','allain','allain-2','butterfly-12','kahlii-6','nakroth-8','preyta-4','taara-7','valhein-8','arum-6','baldum-3','elandorr-3','hayate-5','ilumia-5','ishar-4','lauriel-8','nax-5','nurad-9','quillen-6','teemee-3','telannas-8','yena-4','yena-5','butterfly-10','laville','laville-2','nakroth-7','omen-6','rouie-2','taara-6','zanis-8','zata','zata-2','capheny-4','elsu-6','fennik-5','liliana-7','paine','paine-2','rouie','astrid-4','ata','ata-2','lauriel-8','omen-5','qi-3','taara-5','violet-12','wukong-7','wukong-8','hayate-4','ishar-3','jinna-5','kerra-2','lauriel-7','quillen-5','richter-4','ryoma-6','telannas-8','tulen-9','yorn-7','aleister-4','dirak','dirak-2','grakk-5','keera','raz-4','ishar-2','nax-4','valhein-7','zill-5','arthur-7','rum-5','lubu-8','naloch-7','sephera-4','diaochan-6','ignis-4','elandorr','elandorr-2','krizzix','krizzix-2','violet-11','yena-3','arduin-4','enzo-3','errol-3','hayate-3','nurad-8','volkath','volkath-2','wisp-4','wukong-6','celica','gildur-4','ishar','nurad-7','quillen-4','tulen-8','qi','qi-2','darcy-3','florentino-3','noren-3','ryoma-5','sephera-3','elsu-5','narja-3','annette-4','capheny-3','veres-3','zip-2','zip','diaochan-5','enzo-2','lubu-7','payna-3','roxie-4','violet-9','zanis-7','zephys-6','enzo','liliana-6','lindis-5','xeniel-5','errol','yena-2','zuka-8','valhein','violet','airi','skud','zanis','zephis','butterfly','wukong','taara','nakroth','prayta','yorn','natalya','thane','toro','ormarr','omega','nina','nganga','lubu2','lubu','kahlii-2','kahlii','fennik-2','fennik','diaochan','cresht','azzenka','aleister','zuka2','zuka','payna-2','payna','nakroth-2','nortos-2','nortos','kriknak','jinna-2','jinna','batman','airi-2','violet-3','violet-2','skud-2','raz-2','raz','ignis-2','ignis','gildur','butterfly-4','butterfly-3','zanis-2','nurad','yorn-2','slimz','ormarr-2','nurad-2','nina-2','lauriel-2','grakk-2','grakk','diaochan-2','airi-3','zill-2','zill','zanis-3','yorn-3','veera-3','veera-2','thane-2','telannas','superman','naloch-2','krixi-3','butterfly-5','violet-5','veera-4','telannas-2','taara-2','joker','ilumia-2','batman-2','arduin-2','arduin','wukong-2','nakroth-3','ilumia-3','arthur','ryoma-2','ryoma','astrid-2','astrid','zephis-2','natalya-3','natalya-2','ubu-3','chaugnar','azzenka-2','zanis-4','wukong-3','noren','lubu-4','lauriel-3','aleister-2','nurad-3','noren-2','lubu-5','kilgroth','gildur-2','fennik-3','lauriel-4','zephys-3','xeniel-2','wonderwomen','superman-2','slimz-2','natalya-4','krixi-5','krixi-4','zanis-5','yorn-4','xeniel','wonderwoman-2','violet-4','preyta2','diaochan-3','airi-4','valhein-4','preyta-3','nina-3','alice-2','airi-5','telannas-3','ormarr-4','ormarr-3','nakroth-4','kilgroth-2','kahlii-3','grakk-3','natalya-5','fennik-4','teemee-2','teemee','lindis','zuka-3','valhein-2','tulen','toro-2','naloch-4','naloch-3','lumburr','lindis-2','grakk-4','gildur-3','toro-3','omen-2','omen','zill-3','telannas-','athur-4','zuka-4','tulen-2','nakroth-5','nax','liliana','raz-3','liliana-2','tulen-3','nax-2','flash','cresht-3','cresht-2','chaugnar-2','aleister-3','ryoma-3','kriknak-3','airi-6','wisp-2','wisp','batman-3','arum-2','arum','butterfly-6','rourke-2','rourke','narja-2','narja','taara-3','jinna-3','butterfly-7','arthur-4','arthur-3','arthur-2','valhein-3','superman-3','liliana-3','kilgroth-3','roxie-2','roxie','wukong-4','baldum-2','baldum','zephys-4','annette-2','annette','alice-3','telannas6','raz-4','nurad-6','nurad-5','jinna-4','amily','ybneth-2','ybneth','ilumia-4','astrid-3','amily-2','liliana-4','xeniel-5','veera-5','flash-2','athur-5','omen-3','lindis-3','elsu-2','elsu','richter-2','richter','nina-4','wirosableng','thane-3','ryoma-4','quillen-2','quillen','lauriel-5','arum-3','wisp-3','violet-7','sephera-2','sephera','naloch-5','krixi-6','alice-4','tulen-5','skud-3','rourke-3','nakroth-6','florentino-2','florentino','elsu-3','utterfly-8','amily-3','zuka-7','zuka-6','yorn-6','yorn-5','veres-2','veres','naloch-6','cresht-4','azzenka-3','airi-7','zephys-5','yorn-7','violet-8','valhein-5','tulen-6','thane-4','roxie-3','nakroth-7','kahlii-4','elsu-4','darcy2','darcy','capheny','zill-4','hayate-2','hayate','cresht-5','annette-3','amily-4','tulen-7','telannas-7','omen-4','lindis-4','liliana-5','ignis-3','errol','capheny-2','arum-4','zanis-6','wukong-5','thane-5','slimz-4','skud-4','richter-3','quillen-3','azzenka-4','arduin-3','airi-8']
if (!style.includes(m2)){ 
let listt = `*Avatar Yg Kamu Masukkan Salah*\n\n_Berikut list Avatar yg benar, Total_ *${style.length}* _avatar_\n\n`
no = 0
for (var i = 0; i < style.length; i++) {
no +=1
listt += no.toString() + '.  '  + style[i] + '\n'
}
reply(listt)
} else {
	reply(lang.wait())
let textpro2 = await getBuffer(api('alfa', '/api/ephoto360/'+command, {text: m1, avatar : m2}, 'apikey'))
alpha.sendMessage(from, textpro2, MessageType.image, { quoted: mek, caption: '*Terima kasih telah menggunakan* ' + '*' + global.botname + '*'})
}}
await limitAdd(sender, limit)
	break
case 'beautifulgalaxylol':{
if (isLimit(sender, isPremium, isCreator, isOwner, limitawal, limit)) return sendButMessage(from, lang.limit(prefix), `© ${ownername}`, [{buttonId: 'limit', buttonText: {displayText: `Check Limit`, },type: 1,}]);
var m = q
var m1 = m.split("|")[0];
var m2 = m.split("|")[1]; 
if (args.length < 1) return reply(`Ex: ${prefix + command} nama|style\nUsage: ${prefix + command} zeeone|ashe-2`)
if (!q.includes('|')) return reply(`Ex: ${prefix + command} nama|style\nUsage: ${prefix + command} zeeone|ashe-2`)
const style = ['ashe-2','darius-2','hecarim-2','akali-2','jhin-2','jinx-2','kaisa-2','khazix-2','nordekaiser-2','pantheon-2','qiyana','rammus-2','renekton-2','tahmkench-2','teemo-2','udyr-2','yasuo-2','yuumi','drmundo','zyra','zoe','zilean','ziggs','zed','zac','yorick','yasuo','xinzhao','xerath','xayah','wukong','warwick','volibear','vladimir','viktor','vi','velkoz','veigar','vayne','varus','urgot','udyr','twitch','twistedfate','tryndamere','trundle','tristana','thresh','teemo','taric','talyah','talon','tahmkench','syndra','swain','soraka','sona','skarner','sivir','sion','singed','shyvana','shen','shaco','sejuani','ryze','rumble','riven','rengar','renekton','reksai','rammus','rakan','quinn','poppy','pantheon','ornn','orianna','olaf','nunu','nocturne','nidalee','nautilus','nasus','nami','norgana','norderkaiser','nissfortune','nasteryi','nalzahar','nalphite','lux','lulu','lucian','lissandra','leona','leesin','leblanc','kogmaw','kled','kindred','khazix','kennen','kayn','kayle','katarina','kassadin','karthus','karma','kalista','kaisa','jinx','jhin','jayce','jax','jarvaniv','janna','ivern','irelia','illaoi','heimerdinger','hecarim','graves','gragas','gnar','garen','gangplank','galio','fizz','fiora','fiddlesticks','ezreal','evelynn','elise','ekko','draven','diana','darius','corki','chogath','cassiopeia','camille','caitlyn','braum','brand','blitzcrank','bard','azir','aurelionsol','ashe','annie','anivia','amumu','alistar','akali','ahri','aatrox','sylas','pyke','nunuwillump','neeko','norgana-2','kayle-2','akali-2','aatrox-2']
if (!style.includes(m2)){ 
let listt = `*Style Yg Kamu Masukkan Salah*\n\n_Berikut list style yg benar, Total_ *${style.length}* _style_\n\n`
no = 0
for (var i = 0; i < style.length; i++) {
no +=1
listt += no.toString() + '.  '  + style[i] + '\n'
}
reply(listt)
} else {
	reply(lang.wait())
let textpro2 = await getBuffer(api('alfa', '/api/ephoto360/'+command, {text: m1, style : m2}, 'apikey'))
alpha.sendMessage(from, textpro2, MessageType.image, { quoted: mek, caption: '*Terima kasih telah menggunakan* ' + '*' + global.botname + '*'})
}}
await limitAdd(sender, limit)
	break
	case 'crossfirecover':{
if (isLimit(sender, isPremium, isCreator, isOwner, limitawal, limit)) return sendButMessage(from, lang.limit(prefix), `© ${ownername}`, [{buttonId: 'limit', buttonText: {displayText: `Check Limit`, },type: 1,}]);
var m = q
var m1 = m.split("|")[0];
var m2 = m.split("|")[1]; 
if (args.length < 1) return reply(`Ex: ${prefix + command} nama|character\nUsage: ${prefix + command} zeeone|blthefates`)
if (!q.includes('|')) return reply(`Ex: ${prefix + command} nama|character\nUsage: ${prefix + command} zeeone|blthefates`)
const style = ['spop','swat','switcher','redpower','whitenurse','blthefates','jns','natahari','dx','nursezombie','omohswat','sfg','fox','bllaswat','bljtf','grjtf','blarch','hero-4','gsg9','hero-3','opes','abf','shadows','devilhunter']
if (!style.includes(m2)){ 
let listt = `*Character Yg Kamu Masukkan Salah*\n\n_Berikut list character yg benar, Total_ *${style.length}* _character_\n\n`
no = 0
for (var i = 0; i < style.length; i++) {
no +=1
listt += no.toString() + '.  '  + style[i] + '\n'
}
reply(listt)
} else {
	reply(lang.wait())
let textpro2 = await getBuffer(api('alfa', '/api/ephoto360/'+command, {text: m1, character : m2}, 'apikey'))
alpha.sendMessage(from, textpro2, MessageType.image, { quoted: mek, caption: '*Terima kasih telah menggunakan* ' + '*' + global.botname + '*'})
}}
await limitAdd(sender, limit)
	break
	case 'lolwallpaper':{
if (isLimit(sender, isPremium, isCreator, isOwner, limitawal, limit)) return sendButMessage(from, lang.limit(prefix), `© ${ownername}`, [{buttonId: 'limit', buttonText: {displayText: `Check Limit`, },type: 1,}]);
var m = q
var m1 = m.split("|")[0];
var m2 = m.split("|")[1]; 
if (args.length < 1) return reply(`Ex: ${prefix + command} nama|wallpaper\nUsage: ${prefix + command} zeeone|fizz`)
if (!q.includes('|')) return reply(`Ex: ${prefix + command} nama|wallpaper\nUsage: ${prefix + command} zeeone|fizz`)
const style = ['aatrox-2','arhi-2','akali-3','akali-2','braum','camille','evelynn-5','ezreal-2','fizz','graves-2','irelia-3','irelia-2','jayce-2','jhin-2','jinx-2','kaisa','katarina-2','lux-2','neeko','orianna-2','pantheon','pyke','qiyana','riven-2','sylas','teemo-2','viktor','vladimir','warwick-2','yasuo-3','yasuo-2','zoe','nasteryi','lux','lulu','leesin','jinx','jhin','ezreal','janna','ashe','arhi','poppy','nissfortune','soraka','syndra','zyra','yasuo','vi','vayne','taliyah','sona','sivir','shyvana','riven','quinn','nidalee','norgana','leblanc','kennen','karma','irelia','fiora','elise','diana','caitlyn','zed','xayah','tristana','talon','shen','rakan','orianna','nami','kayn','kayle','katarina','kalista','ekko','azir','udyr','thresh','tf','teemo','ryze','nocturne','lucian','khazik','graves','darius','annie','akali','zilean','ziggs','yorick','warwick','nasteryi-2','janna-2','hecarim','gangplank','fiora-2','draven','brand','aatrox','velkoz','shaco','rengar','reksai','ornn','leona','kindred','jayce','jax','jarvan-iv','garen','xinzhao','nasus','kled','evelynn-4','evelynn-3','evelynn-2','evelynn','cassiopeia','zac','xerath','wukong','velkoz-2','veigar','varus','urgot','twich','kassadin','elise-2','annie-2','alistar']
if (!style.includes(m2)){ 
let listt = `*Wallpaper Yg Kamu Masukkan Salah*\n\n_Berikut list walpaper yg benar, Total_ *${style.length}* _wallpaper_\n\n`
no = 0
for (var i = 0; i < style.length; i++) {
no +=1
listt += no.toString() + '.  '  + style[i] + '\n'
}
reply(listt)
} else {
	reply(lang.wait())
let textpro2 = await getBuffer(api('alfa', '/api/ephoto360/'+command, {text: m1, wallpaper : m2}, 'apikey'))
alpha.sendMessage(from, textpro2, MessageType.image, { quoted: mek, caption: '*Terima kasih telah menggunakan* ' + '*' + global.botname + '*'})
}}
await limitAdd(sender, limit)
	break
	case 'coverdota2':{
if (isLimit(sender, isPremium, isCreator, isOwner, limitawal, limit)) return sendButMessage(from, lang.limit(prefix), `© ${ownername}`, [{buttonId: 'limit', buttonText: {displayText: `Check Limit`, },type: 1,}]);
var m = q
var m1 = m.split("|")[0];
var m2 = m.split("|")[1]; 
if (args.length < 1) return reply(`Ex: ${prefix + command} nama|heroes\nUsage: ${prefix + command} zeeone|fizz`)
if (!q.includes('|')) return reply(`Ex: ${prefix + command} nama|heroes\nUsage: ${prefix + command} zeeone|fizz`)
const style = ['void','riki','lycan','ursa','zeus','dragonkinght','warlord','phantomassassin','bountyhunter','antimage','spectre','luna','vengerfulspirit','undying','tusk','tinker','shadowfiend','sandking','nightstalker','nagasiren','nirana','neepo','lina','juggernaut','huskar','emberspirit','emberspirit','emberspirit','earthshaker','drowranger','clockwerk','bristleback','bloodseeker','axe']
if (!style.includes(m2)){ 
let listt = `*Heroes Yg Kamu Masukkan Salah*\n\n_Berikut list heroes yg benar, Total_ *${style.length}* _heroes_\n\n`
no = 0
for (var i = 0; i < style.length; i++) {
no +=1
listt += no.toString() + '.  '  + style[i] + '\n'
}
reply(listt)
} else {
	reply(lang.wait())
let textpro2 = await getBuffer(api('alfa', '/api/ephoto360/'+command, {text: m1, heroes : m2}, 'apikey'))
alpha.sendMessage(from, textpro2, MessageType.image, { quoted: mek, caption: '*Terima kasih telah menggunakan* ' + '*' + global.botname + '*'})
}}
await limitAdd(sender, limit)
	break
	case 'coverleagueofking':{
if (isLimit(sender, isPremium, isCreator, isOwner, limitawal, limit)) return sendButMessage(from, lang.limit(prefix), `© ${ownername}`, [{buttonId: 'limit', buttonText: {displayText: `Check Limit`, },type: 1,}]);
var m = q
var m1 = m.split("|")[0];
var m2 = m.split("|")[1]; 
if (args.length < 1) return reply(`Ex: ${prefix + command} nama|character\nUsage: ${prefix + command} zeeone|dieuthuyen`)
if (!q.includes('|')) return reply(`Ex: ${prefix + command} nama|character\nUsage: ${prefix + command} zeeone|dieuthuyen`)
const style = ['thane','orrmarr','omega','nakroth','nina','ngangar','gildur','dieuthuyen','chaugnar','butterfly','azzenka','alice','lubo','kriknak-2','natalya-2','trieu-van','taara-2','naloch','kriknak','natalya','taara','ngo-khong','airi','butterfly-2','butterfly-3','kahlii','krixi','toro','grakk','ilumia','zephys','veera-2','violet','preyta-2','violet-2','valhein','yorn','veera','notos','valhein-2','preyta','illumia-2','fennik-2','lumburr','fennik','nakroth-2','krixi-2','gildur2']
if (!style.includes(m2)){ 
let listt = `*Character Yg Kamu Masukkan Salah*\n\n_Berikut list character yg benar, Total_ *${style.length}* _character_\n\n`
no = 0
for (var i = 0; i < style.length; i++) {
no +=1
listt += no.toString() + '.  '  + style[i] + '\n'
}
reply(listt)
} else {
	reply(lang.wait())
let textpro2 = await getBuffer(api('alfa', '/api/ephoto360/'+command, {text: m1, character : m2}, 'apikey'))
alpha.sendMessage(from, textpro2, MessageType.image, { quoted: mek, caption: '*Terima kasih telah menggunakan* ' + '*' + global.botname + '*'})
}}
await limitAdd(sender, limit)
	break
	case 'avatar3q360':{
if (isLimit(sender, isPremium, isCreator, isOwner, limitawal, limit)) return sendButMessage(from, lang.limit(prefix), `© ${ownername}`, [{buttonId: 'limit', buttonText: {displayText: `Check Limit`, },type: 1,}]);
var m = q
var m1 = m.split("|")[0];
var m2 = m.split("|")[1]; 
if (args.length < 1) return reply(`Ex: ${prefix + command} nama|avatar\nUsage: ${prefix + command} zeeone|dieuthuyen`)
if (!q.includes('|')) return reply(`Ex: ${prefix + command} nama|avatar\nUsage: ${prefix + command} zeeone|dieuthuyen`)
const style = ['tieu_kieu','luu_bi','truong_oanh_oanh','truong_phi','tu_ma_y','van_uong','hoang_nguyet_anh','hoang_nguyet_anh2','hoang_trung','hua_chu','truong_giac','dieu_thuyen','renekton','tahmkench','teemo','udyr','yasuo','yuumi','drmundo','zyra','zoe','zilean','ziggs','zed','zac','yorick','yasuo','xinzhao','xerath','xayah','wukong','warwick','volibear','vladimir','viktor','vi','velkoz','veigar','vayne','varus','urgot','udyr','twitch','twistedfate','tryndamere','trundle','tristana','thresh','teemo','taric','talyah','talon','tahmkench','syndra','swain','soraka','sona','skarner','sivir','sion','singed','shyvana','shen','shaco','sejuani','ryze','rumble','riven','rengar','renekton','reksai','rammus','rakan','quinn','poppy','pantheon','ornn','orianna','olaf','nunu','nocturne','nidalee','nautilus','nasus','nami','norgana','norderkaiser','nissfortune','nasteryi','nalzahar','nalphite','lux','lulu','lucian','lissandra','leona','leesin','leblanc','kogmaw','kled','kindred','khazix','kennen','kayn','kayle','katarina','kassadin','karthus','karma','kalista','kaisa','jinx','jhin','jayce','jax','jarvaniv','janna','ivern','irelia','illaoi','heimerdinger','hecarim','graves','gragas','gnar','garen','gangplank','galio','fizz','fiora','fiddlesticks','ezreal','evelynn','elise','ekko','draven','diana','darius','corki','chogath','cassiopeia','camille','caitlyn','braum','brand','blitzcrank','bard','azir','aurelionsol','ashe','annie','anivia','amumu','alistar','akali','ahri','aatrox','sylas','pyke','nunuwillump','neeko','norgana','kayle','akali','aatrox']
if (!style.includes(m2)){ 
let listt = `*Avatar Yg Kamu Masukkan Salah*\n\n_Berikut list avatar yg benar, Total_ *${style.length}* _avatar_\n\n`
no = 0
for (var i = 0; i < style.length; i++) {
no +=1
listt += no.toString() + '.  '  + style[i] + '\n'
}
reply(listt)
} else {
	reply(lang.wait())
let textpro2 = await getBuffer(api('alfa', '/api/ephoto360/'+command, {text: m1, avatar : m2}, 'apikey'))
alpha.sendMessage(from, textpro2, MessageType.image, { quoted: mek, caption: '*Terima kasih telah menggunakan* ' + '*' + global.botname + '*'})
}}
await limitAdd(sender, limit)
	break
	case 'coverofwarface':{
if (isLimit(sender, isPremium, isCreator, isOwner, limitawal, limit)) return sendButMessage(from, lang.limit(prefix), `© ${ownername}`, [{buttonId: 'limit', buttonText: {displayText: `Check Limit`, },type: 1,}]);
var m = q
var m1 = m.split("|")[0];
var m2 = m.split("|")[1]; 
if (args.length < 1) return reply(`Ex: ${prefix + command} nama|character\nUsage: ${prefix + command} zeeone|dieuthuyen`)
if (!q.includes('|')) return reply(`Ex: ${prefix + command} nama|character\nUsage: ${prefix + command} zeeone|dieuthuyen`)
const style = ['warface-4','warface-3','warface-2','warface','sniper-3','sniper-2','sniper','rifleman','nedic-2','nedic','exosuit','engineer']
if (!style.includes(m2)){ 
let listt = `*Character Yg Kamu Masukkan Salah*\n\n_Berikut list character yg benar, Total_ *${style.length}* _character_\n\n`
no = 0
for (var i = 0; i < style.length; i++) {
no +=1
listt += no.toString() + '.  '  + style[i] + '\n'
}
reply(listt)
} else {
	reply(lang.wait())
let textpro2 = await getBuffer(api('alfa', '/api/ephoto360/'+command, {text: m1, character : m2}, 'apikey'))
alpha.sendMessage(from, textpro2, MessageType.image, { quoted: mek, caption: '*Terima kasih telah menggunakan* ' + '*' + global.botname + '*'})
}}
await limitAdd(sender, limit)
	break
case 'newlolavatar':{
if (isLimit(sender, isPremium, isCreator, isOwner, limitawal, limit)) return sendButMessage(from, lang.limit(prefix), `© ${ownername}`, [{buttonId: 'limit', buttonText: {displayText: `Check Limit`, },type: 1,}]);
var m = q
var m1 = m.split("|")[0];
var m2 = m.split("|")[1]; 
if (args.length < 1) return reply(`Ex: ${prefix + command} nama|avatar\nUsage: ${prefix + command} zeeone|rammus`)
if (!q.includes('|')) return reply(`Ex: ${prefix + command} nama|avatar\nUsage: ${prefix + command} zeeone|rammus`)
const style = ['udyr','twitch','twistedfate','trundle','teemo','swain','shyvana','shen','sejuani','renekton','reksai','rammus','zyra','zilean','ziggs','zac','xerath','warwick','vladimir','viktor','vi','velkoz','veigar','vayne','volibear','tristana','taliyah','shaco','leblanc','jinx','graves','fizz','ekko','corki','cassiopeia','caitlyn','blitzcrank','bard','alistar','akali','aatrox','janna','wukong','thresh','taric','talon','ryze','nordekaiser','karma','kalista','irelia','gnar','garen','galio','soraka','sona','sivir','riven','quinn','nocturne','nami','lux','kindred','khazix','katarina','jarvan','fiora','diana','aurelionsol','ashe','ahri','varus','syndra','nidalee','kennen','jhin','zed','yasuo','rengar','lucian','ezreal','azir','annie','leesin','nasteryi','poppy','pantheon','orianna','nasus','norgana','nissfortune','naokai','nalzaha','lulu','lissandra','leona','kled','jayce','jax','illaoi','xayah','rakan','gangplank','naster_yi2','riven2','elise','darius','xayah_rakan','katarina2','nauthilus','hecarim','thresh2','ashe2','xinzhao','tryndamere','syndra-2','sivir-2','lissandra2','karma-2','draven']
if (!style.includes(m2)){ 
let listt = `*avatar Yg Kamu Masukkan Salah*\n\n_Berikut list avatar yg benar, Total_ *${style.length}* _avatar_\n\n`
no = 0
for (var i = 0; i < style.length; i++) {
no +=1
listt += no.toString() + '.  '  + style[i] + '\n'
}
reply(listt)
} else {
	reply(lang.wait())
let textpro2 = await getBuffer(api('alfa', '/api/ephoto360/'+command, {text: m1, avatar : m2}, 'apikey'))
alpha.sendMessage(from, textpro2, MessageType.image, { quoted: mek, caption: '*Terima kasih telah menggunakan* ' + '*' + global.botname + '*'})
}}
await limitAdd(sender, limit)
	break
	case 'csgocover':{
if (isLimit(sender, isPremium, isCreator, isOwner, limitawal, limit)) return sendButMessage(from, lang.limit(prefix), `© ${ownername}`, [{buttonId: 'limit', buttonText: {displayText: `Check Limit`, },type: 1,}]);
var m = q
var m1 = m.split("|")[0];
var m2 = m.split("|")[1]; 
if (args.length < 1) return reply(`Ex: ${prefix + command} nama|background\nUsage: ${prefix + command} zeeone|karambit`)
if (!q.includes('|')) return reply(`Ex: ${prefix + command} nama|background\nUsage: ${prefix + command} zeeone|karambit`)
const style = ['ump45','tec9','n4a1','xm1014','famas','np9','pp-bizon','p2000','negev','usps','dualberettas','np5','karambit','awpdragonlore','np7','galilar','ak-47','glock','sg-553','ak47','r8revolver','aug','butterflyknife','deserteagle','gsg9','p90asiimov','awphawking','n4a4','sas','awpasiimov','ssg08bitw','sg553ds','r8fade','p90ed','n4a1sdecimator','n4a1howl','karambitds','flipknifemf','awmmedusa','augaa','ak47vulcan','ak47fs']
if (!style.includes(m2)){ 
let listt = `*background Yg Kamu Masukkan Salah*\n\n_Berikut list background yg benar, Total_ *${style.length}* _background_\n\n`
no = 0
for (var i = 0; i < style.length; i++) {
no +=1
listt += no.toString() + '.  '  + style[i] + '\n'
}
reply(listt)
} else {
	reply(lang.wait())
let textpro2 = await getBuffer(api('alfa', '/api/ephoto360/'+command, {text: m1, background : m2}, 'apikey'))
alpha.sendMessage(from, textpro2, MessageType.image, { quoted: mek, caption: '*Terima kasih telah menggunakan* ' + '*' + global.botname + '*'})
}}
await limitAdd(sender, limit)
	break
	case 'coverloknew':{
if (isLimit(sender, isPremium, isCreator, isOwner, limitawal, limit)) return sendButMessage(from, lang.limit(prefix), `© ${ownername}`, [{buttonId: 'limit', buttonText: {displayText: `Check Limit`, },type: 1,}]);
var m = q
var m1 = m.split("|")[0];
var m2 = m.split("|")[1]; 
if (args.length < 1) return reply(`Ex: ${prefix + command} nama|hero\nUsage: ${prefix + command} zeeone|karambit`)
if (!q.includes('|')) return reply(`Ex: ${prefix + command} nama|hero\nUsage: ${prefix + command} zeeone|karambit`)
const style = ['arum-6','baldum-3','elandorr-3','hayate-5','ilumia-5','ishar-4','lauriel-8','nax-5','nurad-9','quillen-5','teemee-3','telannas-6','volkath-3','yena-4','yena-5','butterfly-10','laville','laville-2','nakroth-7','omen-6','rouie-2','taara-4','zanis-8','zata','zata-2','capheny-4','lsu-6','fennik-5','liliana-7','paine','paine-2','rouie','astrid-4','ata','ata-2','lauriel-8','omen-5','qi-3','roxie-5','taara-5','violet-12','wukong-7','wukong-8','hayate-4','ishar-4','jinna-5','kerra-2','lauriel-7','nina-5','quillen-5','richter-4','ryoma-6','telannas-8','tulen-9','yorn-8','aleister-4','dirak','dirak-2','grakk-5','kerra','raz-4','amily-5','athur-7','arum-5','ishar-2','nax-4','natalya-7','valhein-7','zill-5','diaochan-6','ignis-4','lubu-8','naloch-7','sephera-4','elandorr','elandorr-2','krizzix','krizzix-2','violet-11','yena-3','arduin-4','enzo-3','errol-3','hayate-3','krixi-7','nurad-7','volkath','volkath','volkath-2','wisp-4','wukong-6','celica','gildur-4','ishar','nurad-7','quillen-4','tulen-8','lauriel-6','qi','qi-2','darcy','florentino-3','noren-3','ryoma-5','sephera-3','annettte-4','capheny-3','elsu-5','narja-3','vilolet-10','violet-10','zip-2','zip-2a','airi-9','diaochan-5','enzo-2','lubu-7','nganga-4','payna-3','roxie-4','violet-9','zanis-7','zephys-6','enzo','liliana-6','lindis-5','xeniel-5','airi-9','errol-2','yena','yena-2','zuka-8','yorn','violet','zanis','thane','slimz','skud','preyta','payna','nakroth','nina','naloch','illumia','krixi','diaochan','butterfly','veera','valhein','toro','taara','raz','ormarr','nganga','lubu','kriknak','kahlil','grakk','gildur','alice','omega','wukong','natalya','nortos','cresht','airi','aleister','lumburr','zephis','violet-2','jinna','chaugnar','azzenka','valhein-2','zanis-2','skud-2','payna-2','natalya-3','natalya-2','nortos-2','krixi-2','jinna-2','illumia-2','butterfly-3','butterfly-2','yorn-2','taara-2','nakroth-2','lubu2','lauriel','kahlii-2','zuka-2','zuka','batman','airi-2','airi-3','butterfly-4','diaochan-2','grakk-2','ignis','ignis-2','lauriel2','nina-2','nurad','nurad-2','ormarr-2','raz-2','slimz2','violet-3','zill-2','zill','zanis-3','yorn-3','veera-3','veera-2','thane-2','telannas','superman','naloch-2','krixi-3','butterfly-5','violet-5','veera-4','telannas-2','joker','illumia-3','batman-2','arduin-2','arduin','zephis-2','wukong-2','ryoma-2','ryoma','nakroth-3','nganga-2','azzenka-2','astrid-2','astrid','arthur','zanis-4','wukong-3','noren','lubu-4','lauriel-3','lubu-3','chaugnar-2','aleister-2','xeniel','telannas-3','preyta-2','nurad-3','kriknak-2','fennik-2','diaochanlubu','alice-2','noren-2','lubu-5','lauriel-4','kilgroth','gildur-2','fennik-3','zephys-3','xeniel-2','xeniel-2','wonderwoman','supeman-2','slimz-3','natalya-4','krixi-5','krixi-4','zanis-5','yorn-4','wonderwoman-2','violet-4','prayta-3','naloch-3','airi-4','telannas-4','ormarr-4','ormarr-3','nakroth-4','kilgroth-2','kahlii-3','grakk-3','airi-5','natalya-5','fennik-4','valhein-4','teemee-2','teemee','lindis','zuka-3','tulen','toro-2','nina-3','naloch-4','lumburr-2','lindis-2','joker-2','grakk-4','gildur-3','aleister-3','tulen-2','toro-3','taara-3','omen-2','omen','zill-3','telannas-5','athur-2','zuka-4','nakroth-5','nax','liliana','raz-3','liliana-2','nax-2','kriknak-3','joker-3','chaugnar-3','wisp','ryoma-3','batman-3','airi-6','tulen-3','flash','cresht-3','cresht-2','astris-3','arum-2','arum','butterfly-6','lice-3','xeniel-3','valhein-4','tulen-4','rourke-2','rourke','nurad-4','nax-3','wisp-2','narja-2','narja','zuka-5','jinna-3','butterfly-7','arthur-2','violet-6','valhein-5','superman-3','liliana-3','kilgroth-3','diaochan-3','wirosabaleng-3','roxie-2','roxie','wukong-4','baldum-2','baldum','zephys-4','annette-2','annette','telannas-6','raz-4','nurad-6','nurad-5','jinna-4','amily','ybneth-2','ybneth','ilumia-4','amily-2','xeniel-4','veera-5','liliana-4','flash-2','arthur-3','omen-3','lindis-3','elsu-2','elsu','richter-2','richter','nina-4','thane-3','ryoma-4','quillen-2','quillen','lauriel-5','arum-3','wisp-3','violet-7','sephera-2','sephera','naloch-5','krixi-6','alice-4','tulen-5','skud-3','rourke-3','nakroth-6','florentino-2','florentino','elsu-3','butterfly-8','amily-3','zuka-7','zuka-6','yorn-6','yorn-5','veres-2','veres','naloch-6','cresht-4','azzenka-3','airi-7','zephys-5','yorn-7','violet-8','valhein-6','tulen-6','thane-4','roxie-3','nakroth-7','kahlii-4','elsu-4','darcy-2','darcy','capheny','zill-4','hayate-2','hayate','cresht-5','annette-3','amily-4','veera-6','tulen-7','telannas-7','omen-4','lindis-4','liliana-5','ignis-3','errol','capheny-2','arum-4','zanis-6','wukong-5','thane-5','slimz-4','skud-4','richter-3','quillen-3','azzenka-4','arduin-3','airi-8']
if (!style.includes(m2)){ 
let listt = `*hero Yg Kamu Masukkan Salah*\n\n_Berikut list hero yg benar, Total_ *${style.length}* _hero_\n\n`
no = 0
for (var i = 0; i < style.length; i++) {
no +=1
listt += no.toString() + '.  '  + style[i] + '\n'
}
reply(listt)
} else {
	reply(lang.wait())
let textpro2 = await getBuffer(api('alfa', '/api/ephoto360/'+command, {text: m1, hero : m2}, 'apikey'))
alpha.sendMessage(from, textpro2, MessageType.image, { quoted: mek, caption: '*Terima kasih telah menggunakan* ' + '*' + global.botname + '*'})
}}
await limitAdd(sender, limit)
	break
	case 'coverfblol':{
if (isLimit(sender, isPremium, isCreator, isOwner, limitawal, limit)) return sendButMessage(from, lang.limit(prefix), `© ${ownername}`, [{buttonId: 'limit', buttonText: {displayText: `Check Limit`, },type: 1,}]);
var m = q
var m1 = m.split("|")[0];
var m2 = m.split("|")[1]; 
if (args.length < 1) return reply(`Ex: ${prefix + command} nama|letters\nUsage: ${prefix + command} zeeone|karambit`)
if (!q.includes('|')) return reply(`Ex: ${prefix + command} nama|letters\nUsage: ${prefix + command} zeeone|karambit`)
const style = ['yasuo','shen','riven','pantheon','orianna','nocturne','nami','norgana','naster-yi','lux','lucian','katarina','kalista','jinx','jhin','irelia','hecarim','graves','garen','fizz','fiora','ezreal','ekko','diana','darius','cassiopeia','caitlyn','braum','azir','ashe','warwick','thresh','leblanc','khazix','kayn','draven','zyra','zed','xayah','taric','talon','sona','sivir','rengar','rakan','leesin','gnar','elise']
if (!style.includes(m2)){ 
let listt = `*letters Yg Kamu Masukkan Salah*\n\n_Berikut list letters yg benar, Total_ *${style.length}* _letters_\n\n`
no = 0
for (var i = 0; i < style.length; i++) {
no +=1
listt += no.toString() + '.  '  + style[i] + '\n'
}
reply(listt)
} else {
	reply(lang.wait())
let textpro2 = await getBuffer(api('alfa', '/api/ephoto360/'+command, {text: m1, letters : m2}, 'apikey'))
alpha.sendMessage(from, textpro2, MessageType.image, { quoted: mek, caption: '*Terima kasih telah menggunakan* ' + '*' + global.botname + '*'})
}}
await limitAdd(sender, limit)
	break
	case 'overwatchcover':{
if (isLimit(sender, isPremium, isCreator, isOwner, limitawal, limit)) return sendButMessage(from, lang.limit(prefix), `© ${ownername}`, [{buttonId: 'limit', buttonText: {displayText: `Check Limit`, },type: 1,}]);
var m = q
var m1 = m.split("|")[0];
var m2 = m.split("|")[1]; 
if (args.length < 1) return reply(`Ex: ${prefix + command} nama|hero\nUsage: ${prefix + command} zeeone|karambit`)
if (!q.includes('|')) return reply(`Ex: ${prefix + command} nama|hero\nUsage: ${prefix + command} zeeone|karambit`)
const style = ['zwinston','zjunkrat','zwidowmaker','ztracer','ztorbjorn','zsymmetra','zsombra','zsoldier76','zroadhog','zreinhardt','zreaper','zpharah','zorisa','zmercy','zmei','zmccree','zlucio','zhanzo','zgenji','zenyatta','zdva','zbastion','zarya','zana','yzenyatta','yzarya','ywinston','ywidowmaker','ytracer','ytorbjorn','ysymmetra','ysombra','ysoldier76','yroadhog','yreinhardt','yreaper','ypharah','yorisa','ymercy','ymei','ymccree','ylucio','yjunkrat','yhanzo','ygenji','ydva','ybastion','yana','xzenyatta','xzarya','xwinston','xwidowmaker','xtracer','xtorbjorn','xsymmetra','xsombra','xsoldier76','xroadhog','xreinhardt','xreaper','xpharah','xorisa','xmercy','xmei','xmccree','xlucio','xjunkrat','xhanzo','xgenji','xdva','xbastion','xana','wzenyatta','wzarya','wtracer','wtorbjorn','wsymmetra','wsombra','wsoldier76','wroadhog','wreinhardt','wreaper','wpharah','worisa','wmercy','wmei','wmccree','wlucio','wjunkrat','winston','widowmaker','whanzo','wgenji','wdva','wbastion','wana','vzenyatta','vzarya','vwinston','vwidowmaker','vtracer','vtorbjorn','vsymmetra','vsombra','vsoldier76','vroadhog','vreinhardt','vreaper','vpharah','vorisa','vmercy','vmei','vmccree','vlucio','vjunkrat','vhanzo','vgenji','vdva','vbastion','vana','uzenyatta','uzarya','uwinston','uwidowmaker','utracer','utorbjorn','usymmetra','usombra','usoldier76','uroadhog','ureinhardt','ureaper','upharah','uorisa','umercy','umei','umccree','ulucio','ujunkrat','uhanzo','ugenji','udva','ubastion','uana','tzenyatta','tzarya','twinston','twidowmaker','tsymmetra','tsombra','tsoldier76','troadhog','treinhardt','treaper','tracer','tpharah','torisa','torbjorn','tmercy','tmei','tmccree','tlucio','tjunkrat','thanzo','tgenji','tdva','tbastion','tana','szenyatta','szarya','symmetra','swinston','swidowmaker','stracer','storbjorn','sroadhog','sreinhardt','sreaper','spharah','sorisa','sombra','soldier76','smercy','smei','smccree','slucio','sjunkrat','shanzo','sgenji','sdva','sbastion','sana','rzenyatta','rzarya','rwinston','rwidowmaker','rtracer','rtorbjorn','rsymmetra','rsombra','rsoldier76','rrmei','rpharah','rorisa','roadhog','rmercy','rmccree','rlucio','rjunkrat','rhanzo','rgenji','reinhardt','reaper','rdva','rbastion','rana','qzenyatta','qzarya','qwinston','qwidowmaker','qtracer','qtorbjorn','qsymmetra','qsombra','qsoldier76','qroadhog','qreinhardt','qreaper','qpharah','qorisa','qmercy','qmei','qmccree','qlucio','qjunkrat','qhanzo','qgenji','qdva','qbastion','qana','pzenyatta','pzarya','pwinston','pwidowmaker','ptracer','ptorbjorn','psymmetra','psombra','psoldier76','proadhog','preinhardt','preaper','porisa','pmercy','pmei','pmccree','plucio','pjunkrat','pharah','phanzo','pgenji','pdva','pbastion','pana','ozenyatta','ozarya','owinston','owidowmaker','otracer','otorbjorn','osymmetra','osombra','osoldier76','oroadhog','orisa','oreinhardt','oreaper','opharah','omercy','omei','omccree','olucio','ojunkrat','ohanzo','ogenji','odva','obastion','oana','nzenyatta','nzarya','nwinston','nwidowmaker','ntracer','ntorbjorn','nsymmetra','nsombra','nsoldier76','nroadhog','nreinhardt','nreaper','npharah','norisa','nmercy','nmei','nmccree','nlucio','njunkrat','nhanzo','ngenji','ndva','nbastion','nana','mzenyatta','mzarya','mwinston','mwidowmaker','mtracer','mtorbjorn','msymmetra','msombra','msoldier76','mroadhog','mreinhardt','mreaper','mpharah','morisa','mlucio','mjunkrat','mhanzo','mgenji','mercy','mei','mdva','mccree','mbastion','mana','lzenyatta','lzarya','lwinston','lwidowmaker','lucio','ltracer','ltorbjorn','lsymmetra','lsombra','lsoldier76','lroadhog','lreinhardt','lreaper','lpharah','lorisa','lmercy','lmei','lmccree','ljunkrat','lhanzo','lgenji','ldva','lbastion','lana','kzenyatta','kzarya','kwinston','kwidowmaker','ktracer','ktorbjorn','ksymmetra','ksombra','ksoldier76','kroadhog','kreinhardt','kreaper','kpharah','korisa','kmercy','kmei','kmccree','klucio','kjunkrat','khanzo','kgenji','kdva','kbastion','kana','jzenyatta','jzarya','jwinston','jwidowmaker','junkrat','jtracer','jtorbjorn','jsymmetra','jsombra','jsoldier76','jroadhog','jreinhardt','jreaper','jpharah','jorisa','jmercy','jmei','jmccree','jlucio','jhanzo','jgenji','jdva','jbastion','jana','izenyatta','izarya','iwinston','iwidowmaker','itracer','itorbjorn','isymmetra','isombra','isoldier76','iroadhog','ireinhardt','ireaper','ipharah','iorisa','imercy','imei','imccree','ilucio','ijunkrat','ihanzo','igenji','idva','ibastion','iana','hzenyatta','hzarya','hwinston','hwidowmaker','htracer','htorbjorn','hsymmetra','hsombra','hsoldier76','hroadhog','hreinhardt','hreaper','hpharah','horisa','hmercy','hmei','hmccree','hlucio','hjunkrat','hgenji','hdva','hbastion','hanzo','hana','gzenyatta','gzarya','gwinston','gwidowmaker','gtracer','gtorbjorn','gsymmetra','gsombra','gsoldier76','groadhog','greinhardt','greaper','gpharah','gorisa','gmercy','gmei','gmccree','glucio','gjunkrat','genji','gdva','gbastion','ganafzenyatta','fzarya','fwinston','fwidowmaker','ftracer','ftorbjorn','fsymmetra','fsombra','fsoldier76','froadhog','freinhardt','freaper','fpharah','forisa','fmercy','fmei','fmccree','flucio','fjunkrat','fhanzo','fgenji','fdva','fbastion','fana','ezenyatta','ezarya','ewinston','ewidowmaker','etracer','etorbjorn','esymmetra','esombra','esoldier76','eroadhog','ereinhardt','ereaper','epharah','eorisa','emercy','emei','emccree','elucio','ejunkrat','ehanzo','egenji','edva','ebastion','eana','dzenyatta','dzarya','dwinston','dwidowmaker','dva','dtracer','dtorbjorn','dsymmetra','dsombra','dsoldier76','droadhog','dreinhardt','dreaper','dpharah','dorisa','dmercy','dmei','dmccree','dlucio','djunkrat','dhanzo','dgenji','dbastion','dana','czenyatta','czarya','cwinston','cwidowmaker','ctracer','ctorbjorn','csymmetra','csombra','csoldier76','croadhog','creinhardt','creaper','cpharah','corisa','cmercy','cmei','cmccree','clucio','cjunkrat','chanzo','cgenji','cdva','cbastion','cana','bzenyatta','bzarya','bwinston','bwidowmaker','btracer','btorbjorn','bsymmetra','bsombra','bsoldier76','broadhog','breinhardt','breaper','bpharah','borisa','bmercy','bmei','bmccree','blucio','bjunkrat','bhanzo','bgenji','bdva','bastion','bana','azenyatta','azarya','awinston','awidowmaker','atracer','atorbjorn','asymmetra','asombra','asoldier76','aroadhog','areinhardt','areaper','apharah','aorisa','ana','amercy','amei','amccree','alucio','ajunkrat','ahanzo','agenji','adva','abastion','zdoomfist','ydoomfist','xdoomfist','wdoomfist','vdoomfist','udoomfist','tdoomfist','sdoomfist','rdoomfist','qdoomfist','pdoomfist','odoomfist','ndoomfist','mdoomfist','ldoomfist','kdoomfist','jdoomfist','idoomfist','hdoomfist','gdoomfist','fdoomfist','edoomfist','doomfist','cdoomfist','bdoomfist','adoomfist']
if (!style.includes(m2)){ 
let listt = `*hero Yg Kamu Masukkan Salah*\n\n_Berikut list hero yg benar, Total_ *${style.length}* _hero_\n\n`
no = 0
for (var i = 0; i < style.length; i++) {
no +=1
listt += no.toString() + '.  '  + style[i] + '\n'
}
reply(listt)
} else {
	reply(lang.wait())
let textpro2 = await getBuffer(api('alfa', '/api/ephoto360/'+command, {text: m1, hero : m2}, 'apikey'))
alpha.sendMessage(from, textpro2, MessageType.image, { quoted: mek, caption: '*Terima kasih telah menggunakan* ' + '*' + global.botname + '*'})
}}
await limitAdd(sender, limit)
	break
	case 'crossfirestyle':{
if (isLimit(sender, isPremium, isCreator, isOwner, limitawal, limit)) return sendButMessage(from, lang.limit(prefix), `© ${ownername}`, [{buttonId: 'limit', buttonText: {displayText: `Check Limit`, },type: 1,}]);
var m = q
var m1 = m.split("|")[0];
var m2 = m.split("|")[1]; 
if (args.length < 1) return reply(`Ex: ${prefix + command} nama|avatar\nUsage: ${prefix + command} zeeone|swat`)
if (!q.includes('|')) return reply(`Ex: ${prefix + command} nama|avatar\nUsage: ${prefix + command} zeeone|swat`)
const style = ['spop','switcher','switcher-2','switcher-3 ','thefates','thefates-2','thefates-3','swat','fox','star','omoh','sabel','sas','sia','navy-seals','jtf','jns','laswat','sraf','shadow','nemesis','nocha','ixions','gsg-9','ghosty','hermes','foxu','dh','angelapt','ac']
if (!style.includes(m2)){ 
let listt = `*avatar Yg Kamu Masukkan Salah*\n\n_Berikut list avatar yg benar, Total_ *${style.length}* _avatar_\n\n`
no = 0
for (var i = 0; i < style.length; i++) {
no +=1
listt += no.toString() + '.  '  + style[i] + '\n'
}
reply(listt)
} else {
	reply(lang.wait())
let textpro2 = await getBuffer(api('alfa', '/api/ephoto360/'+command, {text: m1, avatar : m2}, 'apikey'))
alpha.sendMessage(from, textpro2, MessageType.image, { quoted: mek, caption: '*Terima kasih telah menggunakan* ' + '*' + global.botname + '*'})
}}
await limitAdd(sender, limit)
	break
	case 'avatarlolbyname':{
if (isLimit(sender, isPremium, isCreator, isOwner, limitawal, limit)) return sendButMessage(from, lang.limit(prefix), `© ${ownername}`, [{buttonId: 'limit', buttonText: {displayText: `Check Limit`, },type: 1,}]);
var m = q
var m1 = m.split("|")[0];
var m2 = m.split("|")[1]; 
if (args.length < 1) return reply(`Ex: ${prefix + command} nama|style\nUsage: ${prefix + command} zeeone|swat`)
if (!q.includes('|')) return reply(`Ex: ${prefix + command} nama|style\nUsage: ${prefix + command} zeeone|swat`)
const style = ['katarina-0','zyra-4','zyra-3','zyra-2','zyra-1','zyra-0','zilean-5','zilean-4','zilean-3','zilean-2','zilean-1','zilean-0','ziggs-5','ziggs-4','ziggs-3','ziggs-2','ziggs-1','ziggs-0','zed-3','zed-2','zed-10','zed-1','zed-0','zac-2','zac-1','zac-0','yorick-2','yorick-1','yorick-0','yasuo-4','yasuo-3','yasuo-2','yasuo-1','yasuo-0','xinzhao-6','xinzhao-13','xinzhao-5','xinzhao-4','xinzhao-3','xinzhao-2','xinzhao-1','xinzhao-0','xerath-4','xerath-3','xerath-2','xerath-1','xerath-0','xayah-1','xayah-0','warwick-8','warwick-7','warwick-6','warwick-5','warwick-4','warwick-3','warwick-2','warwick-1','warwick-0','volibear-5','volibear-4','volibear-3','volibear-2','volibear-1','volibear-0','vladimir-7','vladimir-6','vladimir-5','vladimir-4','vladimir-3','vladimir-2','vladimir-1','vladimir-0','viktor-2','viktor-1','viktor-0','vi-5','vi-4','vi-3','vi-2','vi-1','vi-0','velkoz-3','velkoz-2','velkoz-1','velkoz-0','veigar-8','veigar-7','veigar-6','veigar-5','veigar-4','veigar-3','veigar-2','veigar-1','veigar-0','vayne-6','vayne-5','vayne-4','vayne-3','vayne-2','vayne-1','vayne-0','vayne-10','varus-6','varus-5','varus-4','varus-3','varus-2','varus-1','varus-0','urgot-3','urgot-2','urgot-1','urgot-0','udyr-4','udyr-3','udyr-2','udyr-1','udyr-0','twitch-7','twitch-6','twitch-5','twitch-4','twitch-3','twitch-2','twitch-1','twitch-0','twistedfate-9','twistedfate-10','twistedfate-8','twistedfate-7','twistedfate-6','twistedfate-5','twistedfate-4','twistedfate-3','twistedfate-2','twistedfate-1','twistedfate-0','tryndamere-9','tryndamere-8','tryndamere-7','tryndamere-6','tryndamere-5','tryndamere-4','tryndamere-3','tryndamere-2','tryndamere-1','tryndamere-0','trundle-5','trundle-4','trundle-3','trundle-2','trundle-1','trundle-0','tristana-6','tristana-5','tristana-4','tristana-3','tristana-2','tristana-1','tristana-0','tristana-10','tristana-11','thresh-5','thresh-4','thresh-3','thresh-2','thresh-1','thresh-0','teemo-8','teemo-7','teemo-6','teemo-5','teemo-4','teemo-3','teemo-2','teemo-1','teemo-0','teemo-14','taric-4','taric-3','taric-2','taric-1','taric-0','talon-5','talon-4','talon-3','talon-2','talon-1','talon-0','taliyah-1','taliyah-0','tahmkench-2','tahmkench-1','tahmkench-0','syndra-4','syndra-3','syndra-2','syndra-1','syndra-0','swain-3','swain-2','swain-1','swain-0','soraka-6','soraka-5','soraka-4','soraka-3','soraka-2','soraka-1','soraka-0','sona-6','sona-5','sona-4','sona-3','sona-2','sona-1','sona-0','skarner-4','skarner-3','skarner-2','skarner-1','skarner-0','sivir-7','sivir-6','sivir-5','sivir-4','sivir-3','sivir-2','sivir-1','sivir-0','sion-5','sion-4','sion-3','sion-2','sion-1','sion-0','singed-8','singed-7','singed-6','singed-5','singed-4','singed-3','singed-2','singed-1','singed-0','shyvana-6','shyvana-5','shyvana-4','shyvana-3','shyvana-3','shyvana-2','shyvana-1','shyvana-0','shen-6','shen-5','shen-4','shen-3','shen-2','shen-1','shen-0','shaco-7','shaco-6','shaco-5','shaco-4','shaco-3','shaco-2','shaco-1','shaco-0','sejuani-7','sejuani-6','sejuani-5','sejuani-4','sejuani-3','sejuani-2','sejuani-1','sejuani-0','ryze-10','ryze-9','ryze-8','ryze-7','ryze-6','ryze-5','ryze-4','ryze-3','ryze-2','ryze-1','ryze-0','rumble-3','rumble-2','rumble-1','rumble-0','riven-8','riven-7','riven-6','riven-5','riven-4','riven-3','riven-2','riven-1','riven-0','rengar-3','rengar-2','rengar-1','rengar-0','renekton-9','renekton-8','renekton-7','renekton-6','renekton-5','renekton-4','renekton-3','renekton-2','renekton-1','renekton-0','reksai-1','reksai-2','reksai-0','rammus-7','rammus-6','rammus-5','rammus-4','rammus-3','rammus-2','rammus-1','rammus-0','rakan-1','rakan-0','quinn-4','quinn-3','quinn-2','quinn-1','quinn-0','poppy-7','poppy-6','poppy-5','poppy-4','poppy-3','poppy-2','poppy-1','poppy-0','pantheon-8','pantheon-7','pantheon-6','pantheon-5','pantheon-4','pantheon-3','pantheon-2','pantheon-1','pantheon-0','orianna-7','orianna-6','orianna-5','orianna-4','orianna-3','orianna-2','orianna-1','orianna-0','olaf-6','olaf-5','olaf-4','olaf-3','olaf-2','olaf-1','olaf-0','nunu-7','nunu-6','nunu-5','nunu-4','nunu-3','nunu-2','nunu-1','nunu-0','nocturne-6','nocturne-5','nocturne-4','nocturne-3','nocturne-2','nocturne-1','nocturne-0','nidalee-8','nidalee-7','nidalee-6','nidalee-5','nidalee-4','nidalee-3','nidalee-2','nidalee-1','nidalee-0','nautilus-5','nautilus-4','nautilus-3','nautilus-2','nautilus-1','nautilus-0','nasus-6','nasus-5','nasus-4','nasus-3','nasus-2','nasus-1','nasus-0','nasus-10','nami-7','nami-6','nami-5','nami-4','nami-3','nami-2','nami-1','nami-0','norgana-6','norgana-5','norgana-4','norgana-3','norgana-2','norgana-1','norgana-0','norgana-10','norgana-11','nordekaiser-4','nordekaiser-3','nordekaiser-2','nordekaiser-1','nordekaiser-0','nonkeyking-5','nonkeyking-4','nonkeyking-3','nonkeyking-2','nonkeyking-1','nonkeyking-0','nissfortune-9','nissfortune-8','nissfortune-7','nissfortune-6','nissfortune-5','nissfortune-4','nissfortune-3','nissfortune-2','nissfortune-1','nissfortune-0','nasteryi-3','nasteryi-2','nasteryi-1','nasteryi-0','nasteryi-9','nasteryi-5','nasteryi-4','nasteryi-10','naokai-7','naokai-6','naokai-5','naokai-4','naokai-3','naokai-2','naokai-1','naokai-0','nalzahar-5','nalzahar-4','nalzahar-3','nalzahar-2','nalzahar-1','nalzahar-0','nalphite-7','nalphite-6','nalphite-5','nalphite-4','nalphite-3','nalphite-2','nalphite-1','nalphite-0','lux-7','lux-6','lux-5','lux-4','lux-3','lux-2','lux-1','lux-0','lulu-6','lulu-5','lulu-4','lulu-3','lulu-2','lulu-1','lulu-0','lucian-6','lucian-7','lucian-2','lucian-1','lucian-0','lissandra-3','lissandra-2','lissandra-1','lissandra-0','leona-9','leona-8','leona-7','leona-6','leona-5','leona-4','leona-3','leona-2','leona-1','leona-0','leesin-6','leesin-5','leesin-4','leesin-3','leesin-2','leesin-1','leesin-0','leesin-10','leesin-11','leblanc-5','leblanc-4','leblanc-3','leblanc-2','leblanc-1','leblanc-0','kogmaw-9','kogmaw-8','kogmaw-7','kogmaw-6','kogmaw-5','kogmaw-4','kogmaw-3','kogmaw-2','kogmaw-1','kogmaw-0','kled-1','kled-0','kindred-2','kindred-1','kindred-0','khazix-4','khazix-3','khazix-2','khazix-1','khazix-0','kennen-7','kennen-6','kennen-5','kennen-4','kennen-3','kennen-2','kennen-1','kennen-0','kayle-8','kayle-7','kayle-6','kayle-5','kayle-4','kayle-3','kayle-2','kayle-1','kayle-0','katarina-9','katarina-8','katarina-7','katarina-5','katarina-6','katarina-4','katarina-3','katarina-2','katarina-1','kassadin-4','kassadin-3','kassadin-2','kassadin-1','kassadin-0','karthus-9','karthus-5','karthus-4','karthus-3','karthus-2','karthus-1','karthus-0','karma-7','karma-6','karma-5','karma-4','karma-3','karma-2','karma-1','karma-0','kalista-3','kalista-2','kalista-1','kalista-0','jinx-4','jinx-3','jinx-2','jinx-1','jinx-0','jayce-4','jayce-3','jayce-2','jayce-1','jayce-0','jax-9','jax-8','jax-7','jax-6','jax-5','jax-4','jax-3','jax-2','jax-1','jax-0','jarvaniv-6','jarvaniv-5','jarvaniv-4','jarvaniv-3','jarvaniv-2','jarvaniv-1','jarvaniv-0','janna-7','janna-6','janna-5','janna-4','janna-3','janna-2','janna-1','ivern-1','ivern-0','irelia-5','irelia-4','irelia-3','irelia-2','irelia-1','irelia-0','illaoi-1','illaoi-0','heimerdinger-5','heimerdinger-4','heimerdinger-3','heimerdinger-2','heimerdinger-1','heimerdinger-0','hecarim-6','hecarim-5','hecarim-4','hecarim-3','hecarim-2','hecarim-1','hecarim-0','graves-7','graves-6','graves-5','graves-4','graves-3','graves-2','graves-1','graves-0','gragas-9','gragas-8','gragas-7','gragas-6','gragas-5','gragas-4','gragas-3','gragas-3','gragas-2','gragas-1','gragas-0','gnar-4','gnar-3','gnar-2','gnar-1','gnar-0','garen-6','garen-5','garen-4','garen-3','garen-2','garen-1','garen-0','garen-10','garen-11','gangplank-8','gangplank-7','gangplank-6','gangplank-5','gangplank-4','gangplank-3','gangplank-2','gangplank-1','gangplank-0','galio-5','galio-4','galio-3','galio-2','galio-1','galio-0','fizz-9','fizz-8','fizz-4','fizz-3','fizz-2','fizz-1','fizz-0','fiora-5','fiora-4','fiora-3','fiora-2','fiora-1','fiora-0','fiddlesticks-7','fiddlesticks-6','fiddlesticks-5','fiddlesticks-4','fiddlesticks-3','fiddlesticks-2','fiddlesticks-1','fiddlesticks-0','ezreal-9','ezreal-8','ezreal-7','ezreal-6','ezreal-5','ezreal-4','ezreal-3','ezreal-2','ezreal-1','ezreal-0','evelynn-4','evelynn-3','evelynn-2','evelynn-1','evelynn-0','elise-4','elise-3','elise-2','elise-1','elise-0','ekko-3','ekko-2','ekko-1','ekko-0','draven-6','draven-5','draven-4','draven-3','draven-2','draven-1','draven-0','drmundo-9','drmundo-8','drmundo-7','drmundo-6','drmundo-5','drmundo-4','drmundo-3','drmundo-2','drmundo-1','drmundo-0','diana-3','diana-2','diana-1','diana-0','diana-11','darius-8','darius-4','darius-3','darius-2','darius-1','darius-0','darius-14','corki-8','corki-7','corki-6','corki-5','corki-4','corki-3','corki-2','corki-1','corki-0','chogath-6','chogath-5','chogath-4','chogath-3','chogath-2','chogath-1','chogath-0','cassiopeia-4','cassiopeia-3','cassiopeia-2','cassiopeia-1','cassiopeia-0','camille-1','camille-0','caitlyn-6','caitlyn-5','caitlyn-4','caitlyn-3','caitlyn-2','caitlyn-1','caitlyn-0','caitlyn-10','caitlyn-11','braum-3','braum-2','braum-1','braum-0','braum-10','brand-5','brand-4','brand-3','brand-2','brand-1','brand-0','blitzcrank-7','blitzcrank-6','blitzcrank-5','blitzcrank-4','blitzcrank-3','blitzcrank-2','blitzcrank-1','blitzcrank-0','blitzcrank-11','bard-6','bard-5','bard-4','bard-3','bard-2','bard-1','bard-0','azir-4','azir-3','azir-2','azir-1','azir-0','aurelionsol-1','aurelionsol-0','ashe-8','ashe-7','ashe-6','ashe-5','ashe-4','ashe-3','ashe-2','ashe-1','ashe-0','annie-9','annie-8','annie-7','annie-6','annie-5','annie-4','annie-3','annie-2','annie-1','annie-0','annie-10','anivia-7','anivia-6','anivia-5','anivia-4','anivia-3','anivia-2','anivia-1','anivia-0','amumu-8','amumu-7','amumu-6','amumu-5','amumu-4','amumu-3','amumu-2','amumu-1','amumu-0','alistar-9','alistar-8','alistar-7','alistar-6','alistar-5','alistar-4','alistar-3','alistar-2','alistar-1','alistar-0','akali-8','akali-7','akali-6','akali-5','akali-4','akali-3','akali-2','akali-1','akali-0','ahri-7','ahri-6','ahri-5','ahri-4','ahri-3','ahri-2','ahri-1','ahri-0','aatrox-3','aatrox-2','aatrox-1','aatrox-0','zacskt','teemoskt','olafskt','namiskt','syndraskt','jhinskt','ekkoskt','urgot-8','urgot-7','urgot-6','urgot-5','kayn-2','kayn','sona-8','veigaros','twitchos','tristanaos','fizzos','zigg','nalzah01','kayle','hecarim','brand','ornn2','ornn','syndra','soraka','nissfortune','ezreal','ahri','yorick','singed','nasteryi','janna','fiora','cassiopeia','ashe','zed','viktor','nidalee','katarina','gnar','evelynn-7','evelynn-6','evelynn-5','evelynn','elise','annie','rengar','blitzcrank-9','blitzcrank-8','zoe-2','zoe','vi','vayne','varus','poppy','kogmaw','jinx','jhin','jax','graves','draven','xinzhao','warwick','swain-8','swain-7','swain-6','swain-5','swain-4','rakan','nasus','nissfortune-15','nissfortune-14','nissfortune-13','nissfortune-12','nissfortune-11','nissfortune-10','lux','kaisa-2','kaisa','jarvan-iv','illaoi','gragas','wukong','sivir','nissfortune-16','irelia-11','irelia-10','irelia-9','irelia-8','irelia-7','irelia-6','galio','alistar','varus-7','twistedfate','teemo','shen','rumble','riven','evelynn-8','zoe3','xinzhao-7','urgot','thresh','talon','taliya','pyke-2','pyke','poppy-8','nunu-15','nunu-14','nunu-13','nunu-12','nunu-11','nunu-10','nunu-9','nunu-8','lulu','lucian','jarvan-iv-7','irelia-12','garen','gangplank','darius','caitlyn','braum','aurelionsol-2','ashe-9','akali-18','akali-17','akali-16','akali-15','akali-14','akali-13','akali-12','akali-11','akali-10','akali-9','aatrox-7','aatrox-6','aatrox-5','aatrox-4','ziggs-6','yasuo','sona','nalphite','khazix','kayn-3','jinx-5']
if (!style.includes(m2)){ 
let listt = `*style Yg Kamu Masukkan Salah*\n\n_Berikut list style yg benar, Total_ *${style.length}* _style_\n\n`
no = 0
for (var i = 0; i < style.length; i++) {
no +=1
listt += no.toString() + '.  '  + style[i] + '\n'
}
reply(listt)
} else {
	reply(lang.wait())
let textpro2 = await getBuffer(api('alfa', '/api/ephoto360/'+command, {text: m1, style : m2}, 'apikey'))
alpha.sendMessage(from, textpro2, MessageType.image, { quoted: mek, caption: '*Terima kasih telah menggunakan* ' + '*' + global.botname + '*'})
}}
await limitAdd(sender, limit)
	break
	case 'lolcoverbyname':{
if (isLimit(sender, isPremium, isCreator, isOwner, limitawal, limit)) return sendButMessage(from, lang.limit(prefix), `© ${ownername}`, [{buttonId: 'limit', buttonText: {displayText: `Check Limit`, },type: 1,}]);
var m = q
var m1 = m.split("|")[0];
var m2 = m.split("|")[1]; 
if (args.length < 1) return reply(`Ex: ${prefix + command} nama|avatar\nUsage: ${prefix + command} zeeone|swat`)
if (!q.includes('|')) return reply(`Ex: ${prefix + command} nama|avatar\nUsage: ${prefix + command} zeeone|swat`)
const style = ['zyra','zilean','ziggs','zed','zac','yorick','yasuo','xinzhao','xerath','xayah','wukong','warwick','volibear','vladimir','viktor','vi','velkoz','veigar','vayne','varus','urgot','udyr','twictch','tryndamere','trundle','tristana','thresh','twistedfate','teemo','taric','talon','taliyah','tahmkench','syndra','swain','soraka','sona','skarner','sivir','sion','singed','shyvana','shen','shaco','sejuani','ryze','rumble','riven','rengar','renekton','reksai','rammus','rakan','quinn','poppy','pantheon','orianna','olaf','nunu','nasteryi','naokai','nalzahar','nalphite','lux','lulu','lucian','nocturne','nedalee','nautilus','nasus','nami','norgana','noderkaiser','nissfortune','lissandra','leona','leesin','leblanc','kogmaw','kled','kindred','khazix','kennen','kayn','kayle','katarina','kassadin','karthus','karma','kalista','jinx','jhin','jayce','jax','jarvan','janna','ivern','irelia','illaoi','heimerdinger','hecarim','graves','gragas','gnar','garen','gangplank','galio','fizz','fiora','fiddlesticks','ezreal','drmundo','evelynn','elise','ekko','draven','diana','darius','corki','chogath','cassiopeia','camille','caitlyn','braum','brand','blitzcrank','bard','azir','aurelionsol','ashe','annie','anivia','amumu','alistar','akali','ahri','aatrox','zoe','sylas','swain-2','pyke','nunu-2','neeko','norgana2','kayle-2','kaisa','evelynn-2','aatrox-2']
if (!style.includes(m2)){ 
let listt = `*avatar Yg Kamu Masukkan Salah*\n\n_Berikut list avatar yg benar, Total_ *${style.length}* _avatar_\n\n`
no = 0
for (var i = 0; i < style.length; i++) {
no +=1
listt += no.toString() + '.  '  + style[i] + '\n'
}
reply(listt)
} else {
	reply(lang.wait())
let textpro2 = await getBuffer(api('alfa', '/api/ephoto360/'+command, {text: m1, avatar : m2}, 'apikey'))
alpha.sendMessage(from, textpro2, MessageType.image, { quoted: mek, caption: '*Terima kasih telah menggunakan* ' + '*' + global.botname + '*'})
}}
await limitAdd(sender, limit)
	break
	case 'cyberhunterfb':{
if (isLimit(sender, isPremium, isCreator, isOwner, limitawal, limit)) return sendButMessage(from, lang.limit(prefix), `© ${ownername}`, [{buttonId: 'limit', buttonText: {displayText: `Check Limit`, },type: 1,}]);
var m = q
var m1 = m.split("|")[0];
var m2 = m.split("|")[1]; 
if (args.length < 1) return reply(`Ex: ${prefix + command} nama|character\nUsage: ${prefix + command} zeeone|swat`)
if (!q.includes('|')) return reply(`Ex: ${prefix + command} nama|character\nUsage: ${prefix + command} zeeone|swat`)
const style = ['1','2','3','4','5','6','7','8','9','10','11','12']
if (!style.includes(m2)){ 
let listt = `*character Yg Kamu Masukkan Salah*\n\n_Berikut list character yg benar, Total_ *${style.length}* _character_\n\n`
no = 0
for (var i = 0; i < style.length; i++) {
no +=1
listt += no.toString() + '.  '  + style[i] + '\n'
}
reply(listt)
} else {
	reply(lang.wait())
let textpro2 = await getBuffer(api('alfa', '/api/ephoto360/'+command, {text: m1, character : m2}, 'apikey'))
alpha.sendMessage(from, textpro2, MessageType.image, { quoted: mek, caption: '*Terima kasih telah menggunakan* ' + '*' + global.botname + '*'})
}}
await limitAdd(sender, limit)
	break
	case 'coverfreefirefb':{
if (isLimit(sender, isPremium, isCreator, isOwner, limitawal, limit)) return sendButMessage(from, lang.limit(prefix), `© ${ownername}`, [{buttonId: 'limit', buttonText: {displayText: `Check Limit`, },type: 1,}]);
var m = q
var m1 = m.split("|")[0];
var m2 = m.split("|")[1]; 
if (args.length < 1) return reply(`Ex: ${prefix + command} nama|character\nUsage: ${prefix + command} zeeone|swat`)
if (!q.includes('|')) return reply(`Ex: ${prefix + command} nama|character\nUsage: ${prefix + command} zeeone|swat`)
const style = ['a124','alok','alvaro','andrew','antonio','caroline','hayato','kapella','kelly','kla','laura','naxim','niguel','nisa','noco','nikita','notora','olivia','paloma','rafael','shani','steffie']
if (!style.includes(m2)){ 
let listt = `*character Yg Kamu Masukkan Salah*\n\n_Berikut list character yg benar, Total_ *${style.length}* _character_\n\n`
no = 0
for (var i = 0; i < style.length; i++) {
no +=1
listt += no.toString() + '.  '  + style[i] + '\n'
}
reply(listt)
} else {
	reply(lang.wait())
let textpro2 = await getBuffer(api('alfa', '/api/ephoto360/'+command, {text: m1, character : m2}, 'apikey'))
alpha.sendMessage(from, textpro2, MessageType.image, { quoted: mek, caption: '*Terima kasih telah menggunakan* ' + '*' + global.botname + '*'})
}}
await limitAdd(sender, limit)
	break
	case 'gamingmascot':{
if (isLimit(sender, isPremium, isCreator, isOwner, limitawal, limit)) return sendButMessage(from, lang.limit(prefix), `© ${ownername}`, [{buttonId: 'limit', buttonText: {displayText: `Check Limit`, },type: 1,}]);
var m = q
var m1 = m.split("|")[0];
var m2 = m.split("|")[1]; 
if (args.length < 1) return reply(`Ex: ${prefix + command} nama|style\nUsage: ${prefix + command} zeeone|swat`)
if (!q.includes('|')) return reply(`Ex: ${prefix + command} nama|style\nUsage: ${prefix + command} zeeone|swat`)
const style = ['bear-2','dragon-2','hydra','lion','reaper','wolf-2','bear','eagle','iguana','shark','snake','spartan','griffin','owl','wolf','tiger','wolver','dragon']
if (!style.includes(m2)){ 
let listt = `*style Yg Kamu Masukkan Salah*\n\n_Berikut list style yg benar, Total_ *${style.length}* _style_\n\n`
no = 0
for (var i = 0; i < style.length; i++) {
no +=1
listt += no.toString() + '.  '  + style[i] + '\n'
}
reply(listt)
} else {
	reply(lang.wait())
let textpro2 = await getBuffer(api('alfa', '/api/ephoto360/'+command, {text: m1, style : m2}, 'apikey'))
alpha.sendMessage(from, textpro2, MessageType.image, { quoted: mek, caption: '*Terima kasih telah menggunakan* ' + '*' + global.botname + '*'})
}}
await limitAdd(sender, limit)
	break
	case 'coveronepiecefb':{
if (isLimit(sender, isPremium, isCreator, isOwner, limitawal, limit)) return sendButMessage(from, lang.limit(prefix), `© ${ownername}`, [{buttonId: 'limit', buttonText: {displayText: `Check Limit`, },type: 1,}]);
var m = q
var m1 = m.split("|")[0];
var m2 = m.split("|")[1]; 
if (args.length < 1) return reply(`Ex: ${prefix + command} nama|character\nUsage: ${prefix + command} zeeone|swat`)
if (!q.includes('|')) return reply(`Ex: ${prefix + command} nama|character\nUsage: ${prefix + command} zeeone|swat`)
const style = ['ace','brook','chopper','franky','garp','jinbei','law','luffy','nerry','nami','rayleigh','robin','sabo','sanji','shanks','sunny','usopp','zoro']
if (!style.includes(m2)){ 
let listt = `*character Yg Kamu Masukkan Salah*\n\n_Berikut list character yg benar, Total_ *${style.length}* _character_\n\n`
no = 0
for (var i = 0; i < style.length; i++) {
no +=1
listt += no.toString() + '.  '  + style[i] + '\n'
}
reply(listt)
} else {
	reply(lang.wait())
let textpro2 = await getBuffer(api('alfa', '/api/ephoto360/'+command, {text: m1, character : m2}, 'apikey'))
alpha.sendMessage(from, textpro2, MessageType.image, { quoted: mek, caption: '*Terima kasih telah menggunakan* ' + '*' + global.botname + '*'})
}}
await limitAdd(sender, limit)
	break
	case 'bannerytcsgo':{
if (isLimit(sender, isPremium, isCreator, isOwner, limitawal, limit)) return sendButMessage(from, lang.limit(prefix), `© ${ownername}`, [{buttonId: 'limit', buttonText: {displayText: `Check Limit`, },type: 1,}]);
var m = q
var m1 = m.split("|")[0];
var m2 = m.split("|")[1]; 
if (args.length < 1) return reply(`Ex: ${prefix + command} nama|banner\nUsage: ${prefix + command} zeeone|swat`)
if (!q.includes('|')) return reply(`Ex: ${prefix + command} nama|banner\nUsage: ${prefix + command} zeeone|swat`)
const style = ['banner-1','banner-2','banner-3','banner-4','banner-5','banner-6','banner-7']
		if (!style.includes(m2)){ 
let listt = `*banner Yg Kamu Masukkan Salah*\n\n_Berikut list banner yg benar, Total_ *${style.length}* _banner_\n\n`
no = 0
for (var i = 0; i < style.length; i++) {
no +=1
listt += no.toString() + '.  '  + style[i] + '\n'
}
reply(listt)
} else {
	reply(lang.wait())
let textpro2 = await getBuffer(api('alfa', '/api/ephoto360/'+command, {text: m1, banner : m2}, 'apikey'))
alpha.sendMessage(from, textpro2, MessageType.image, { quoted: mek, caption: '*Terima kasih telah menggunakan* ' + '*' + global.botname + '*'})
}}
await limitAdd(sender, limit)
	break
	case 'fbgamepubgcover':{
if (isLimit(sender, isPremium, isCreator, isOwner, limitawal, limit)) return sendButMessage(from, lang.limit(prefix), `© ${ownername}`, [{buttonId: 'limit', buttonText: {displayText: `Check Limit`, },type: 1,}]);
var m = q
var m1 = m.split("|")[0];
var m2 = m.split("|")[1]; 
if (args.length < 1) return reply(`Ex: ${prefix + command} nama|template\nUsage: ${prefix + command} zeeone|swat`)
if (!q.includes('|')) return reply(`Ex: ${prefix + command} nama|template\nUsage: ${prefix + command} zeeone|swat`)
const style = ['cover-1','cover-2','cover-3','cover-4','cover-5','cover-6','cover-7','cover-8','cover-9','cover-10','cover-11','cover-12']
if (!style.includes(m2)){ 
let listt = `*template Yg Kamu Masukkan Salah*\n\n_Berikut list template yg benar, Total_ *${style.length}* _template_\n\n`
no = 0
for (var i = 0; i < style.length; i++) {
no +=1
listt += no.toString() + '.  '  + style[i] + '\n'
}
reply(listt)
} else {
	reply(lang.wait())
let textpro2 = await getBuffer(api('alfa', '/api/ephoto360/'+command, {text: m1, template : m2}, 'apikey'))
alpha.sendMessage(from, textpro2, MessageType.image, { quoted: mek, caption: '*Terima kasih telah menggunakan* ' + '*' + global.botname + '*'})
}}
await limitAdd(sender, limit)
	break
case 'banneroflol':{
if (isLimit(sender, isPremium, isCreator, isOwner, limitawal, limit)) return sendButMessage(from, lang.limit(prefix), `© ${ownername}`, [{buttonId: 'limit', buttonText: {displayText: `Check Limit`, },type: 1,}]);
var memek = args.join(" ").split("|")
var m1 = memek[0]
var m2 = memek[1]
var m3 = memek[2]
if (args.length < 1) return reply(`Ex: ${prefix + command} teks|teks2|banner\nUsage: ${prefix + command} zeeone|youtube|swat`)
const style = ['ahri-2','neeko','nocturne','shen-2','veigar','rakanayah-2','zoe-2','pantheon-2','rammus','udyr','darius-2','ekko-2','lablanc','leona','nissfotune','poppy','quinn','talon-2','akali-2','irelia-2','jinx-2','nordekaiser','pyke-2','renekton','rengar','sivir','sona','soraka','tristana','warwick','yuumi','ziggs','leesin','lulu','lux','naster-yi','norgana','nasus','pantheon','pyke','qiyana','rakan','rakanxayah','riven','shen','sylas','talon','teemo','thresh','tryndamere','varus','vayne','velkoz','vladimir','yasuo','zed','zoe','hecarim','heimerdinger','illaoi','irelia','ivern','janna','jarvan-iv','jax','jayce','jhin','jinx','kaisa','kalista','karma','karthus','kassadin','katarina','kayle','kayn','kennen','khazix','kindred','kled','kogmaw','aatrox','ahri','akali','alistar','amumu','anivia','annie','ashe','aurelionsol','azir','bard','blitzcrank','brand','braum','caitlyn','camille','cassiopeia','chogath','corki','darius','diana','drmundo','draven','ekko','elise','evelynn','ezreal','fiddlesticks','fiora','fizz','galio','gangplank','garen','gnar','gragas','graves']
if (!style.includes(m3)){ 
let listt = `*banner Yg Kamu Masukkan Salah*\n\n_Berikut list banner yg benar, Total_ *${style.length}* _banner_\n\n`
no = 0
for (var i = 0; i < style.length; i++) {
no +=1
listt += no.toString() + '.  '  + style[i] + '\n'
}
reply(listt)
} else {
	reply(lang.wait())
	let textpro2 = await getBuffer(api('alfa', '/api/ephoto360/'+command, {text: m1,text2: m2, banner : m3}, 'apikey'))
alpha.sendMessage(from, textpro2, MessageType.image, { quoted: mek, caption: '*Terima kasih telah menggunakan* ' + '*' + global.botname + '*'})
}}
await limitAdd(sender, limit)
	break
	case 'bannerofaov2':{
if (isLimit(sender, isPremium, isCreator, isOwner, limitawal, limit)) return sendButMessage(from, lang.limit(prefix), `© ${ownername}`, [{buttonId: 'limit', buttonText: {displayText: `Check Limit`, },type: 1,}]);
var m = q
var m1 = m.split("|")[0];
var m2 = m.split("|")[1]; 
var m3 = m.split("|")[2]; 
if (args.length < 1) return reply(`Ex: ${prefix + command} teks|teks2|banner\nUsage: ${prefix + command} zeeone|youtube|swat`)
if (!m3) return reply(`Ex: ${prefix + command} teks|teks2|banner\nUsage: ${prefix + command} zeeone|youtube|swat`)
if (!q.includes('|')) return reply(`Ex: ${prefix + command} teks|teks2|banner\nUsage: ${prefix + command} zeeone|youtube|swat`)
const style = ['airi-2','aleister','astrid-2','ata','butterfly-2','dirak','ignis-2','ishar','jinna','lauriel-3','nina-2','natalya-2','omen-2','qi-2','quillen3','raz','roxie-2','ryoma-2','taara-2','violet-3','wukong-4','wukong-3','krixi-2','krizziz','nurad-5','volkath','wisp-2','wukong-2','enzo-2','hayate-2','annette-2','capheny-2','celica','gildur-2','lauriel-2','nurad-4','quillen-2','sephera-2','qi','nurad-3','nurad-2','nakroth-2','zip','diao-chan-2','enzo','errol','joker','payna','slimz','thane','toro','veres','violet-2','wisp','yena','zill','arduin','arthur','batman','capheny','darcy','elsu','florentino','gildur','ignis','wukong','yena','zanis','violet','tulen','sephera','nurad','nina','lindis','liliana','lauriel','krixi','kahlii','hayate','diao-chan','butterfly','astrid','arum','annette','amily','airi','zuka','zephys','zanis','yorn','xeniel','veres','veera','tel-annas','taara','superman','skud','ryoma','roxie','quillen','omen','natalya','nakroth','lubu']
if (!style.includes(m3)){ 
let listt = `*banner Yg Kamu Masukkan Salah*\n\n_Berikut list banner yg benar, Total_ *${style.length}* _banner_\n\n`
no = 0
for (var i = 0; i < style.length; i++) {
no +=1
listt += no.toString() + '.  '  + style[i] + '\n'
}
reply(listt)
} else {
	reply(lang.wait())
let textpro2 = await getBuffer(api('alfa', '/api/ephoto360/'+command, {text: m1,text2: m2, banner : m3}, 'apikey'))
alpha.sendMessage(from, textpro2, MessageType.image, { quoted: mek, caption: '*Terima kasih telah menggunakan* ' + '*' + global.botname + '*'})
}}
await limitAdd(sender, limit)
	break
	case 'teamlogo':{
if (isLimit(sender, isPremium, isCreator, isOwner, limitawal, limit)) return sendButMessage(from, lang.limit(prefix), `© ${ownername}`, [{buttonId: 'limit', buttonText: {displayText: `Check Limit`, },type: 1,}]);
var m = q
var m1 = m.split("|")[0];
var m2 = m.split("|")[1]; 
var m3 = m.split("|")[2]; 
if (args.length < 1) return reply(`Ex: ${prefix + command} teks|teks2|background\nUsage: ${prefix + command} zeeone|youtube|swat`)
if (!m3) return reply(`Ex: ${prefix + command} teks|teks2|background\nUsage: ${prefix + command} zeeone|youtube|swat`)
if (!q.includes('|')) return reply(`Ex: ${prefix + command} teks|teks2|background\nUsage: ${prefix + command} zeeone|youtube|swat`)
const style = ['cobra','dragon','eagle2','falcon','lion2','tiger2','bear','buffalo','eagle','lion','tiger','wolf']
if (!style.includes(m3)){ 
let listt = `*background Yg Kamu Masukkan Salah*\n\n_Berikut list background yg benar, Total_ *${style.length}* _background_\n\n`
no = 0
for (var i = 0; i < style.length; i++) {
no +=1
listt += no.toString() + '.  '  + style[i] + '\n'
}
reply(listt)
} else {
	reply(lang.wait())
let textpro2 = await getBuffer(api('alfa', '/api/ephoto360/'+command, {text: m1,text2: m2, background : m3}, 'apikey'))
alpha.sendMessage(from, textpro2, MessageType.image, { quoted: mek, caption: '*Terima kasih telah menggunakan* ' + '*' + global.botname + '*'})
}}
await limitAdd(sender, limit)
	break
	case 'companylogo2':{
if (isLimit(sender, isPremium, isCreator, isOwner, limitawal, limit)) return sendButMessage(from, lang.limit(prefix), `© ${ownername}`, [{buttonId: 'limit', buttonText: {displayText: `Check Limit`, },type: 1,}]);
var m = q
var m1 = m.split("|")[0];
var m2 = m.split("|")[1]; 
var m3 = m.split("|")[2]; 
if (args.length < 1) return reply(`Ex: ${prefix + command} teks|teks2|background\nUsage: ${prefix + command} zeeone|youtube|swat`)
if (!m3) return reply(`Ex: ${prefix + command} teks|teks2|background\nUsage: ${prefix + command} zeeone|youtube|swat`)
if (!q.includes('|')) return reply(`Ex: ${prefix + command} teks|teks2|background\nUsage: ${prefix + command} zeeone|youtube|swat`)
const style = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18']
if (!style.includes(m3)){ 
let listt = `*background Yg Kamu Masukkan Salah*\n\n_Berikut list background yg benar, Total_ *${style.length}* _background_\n\n`
no = 0
for (var i = 0; i < style.length; i++) {
no +=1
listt += no.toString() + '.  '  + style[i] + '\n'
}
reply(listt)
} else {
	reply(lang.wait())
let textpro2 = await getBuffer(api('alfa', '/api/ephoto360/'+command, {text: m1,text2: m2, background : m3}, 'apikey'))
alpha.sendMessage(from, textpro2, MessageType.image, { quoted: mek, caption: '*Terima kasih telah menggunakan* ' + '*' + global.botname + '*'})
}}
await limitAdd(sender, limit)
	break
	case 'companylogo':{
if (isLimit(sender, isPremium, isCreator, isOwner, limitawal, limit)) return sendButMessage(from, lang.limit(prefix), `© ${ownername}`, [{buttonId: 'limit', buttonText: {displayText: `Check Limit`, },type: 1,}]);
var m = q
var m1 = m.split("|")[0];
var m2 = m.split("|")[1]; 
var m3 = m.split("|")[2]; 
if (args.length < 1) return reply(`Ex: ${prefix + command} teks|teks2|background\nUsage: ${prefix + command} zeeone|youtube|swat`)
if (!m3) return reply(`Ex: ${prefix + command} teks|teks2|background\nUsage: ${prefix + command} zeeone|youtube|swat`)
if (!q.includes('|')) return reply(`Ex: ${prefix + command} teks|teks2|background\nUsage: ${prefix + command} zeeone|youtube|swat`)
const style = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26']
if (!style.includes(m3)){ 
let listt = `*background Yg Kamu Masukkan Salah*\n\n_Berikut list background yg benar, Total_ *${style.length}* _background_\n\n`
no = 0
for (var i = 0; i < style.length; i++) {
no +=1
listt += no.toString() + '.  '  + style[i] + '\n'
}
reply(listt)
} else {
	reply(lang.wait())
let textpro2 = await getBuffer(api('alfa', '/api/ephoto360/'+command, {text: m1,text2: m2, background : m3}, 'apikey'))
alpha.sendMessage(from, textpro2, MessageType.image, { quoted: mek, caption: '*Terima kasih telah menggunakan* ' + '*' + global.botname + '*'})
}}
await limitAdd(sender, limit)
	break
	case 'gradientlogo':{
if (isLimit(sender, isPremium, isCreator, isOwner, limitawal, limit)) return sendButMessage(from, lang.limit(prefix), `© ${ownername}`, [{buttonId: 'limit', buttonText: {displayText: `Check Limit`, },type: 1,}]);
var m = q
var m1 = m.split("|")[0];
var m2 = m.split("|")[1]; 
var m3 = m.split("|")[2]; 
if (args.length < 1) return reply(`Ex: ${prefix + command} teks|teks2|background\nUsage: ${prefix + command} zeeone|youtube|swat`)
if (!m3) return reply(`Ex: ${prefix + command} teks|teks2|background\nUsage: ${prefix + command} zeeone|youtube|swat`)
if (!q.includes('|')) return reply(`Ex: ${prefix + command} teks|teks2|background\nUsage: ${prefix + command} zeeone|youtube|swat`)
const style = ['1','2','3','4','5','6']
if (!style.includes(m3)){ 
let listt = `*background Yg Kamu Masukkan Salah*\n\n_Berikut list background yg benar, Total_ *${style.length}* _background_\n\n`
no = 0
for (var i = 0; i < style.length; i++) {
no +=1
listt += no.toString() + '.  '  + style[i] + '\n'
}
reply(listt)
} else {
	reply(lang.wait())
let textpro2 = await getBuffer(api('alfa', '/api/ephoto360/'+command, {text: m1,text2: m2, background : m3}, 'apikey'))
alpha.sendMessage(from, textpro2, MessageType.image, { quoted: mek, caption: '*Terima kasih telah menggunakan* ' + '*' + global.botname + '*'})
}}
await limitAdd(sender, limit)
	break
	case 'pencilsketch':{
if (isLimit(sender, isPremium, isCreator, isOwner, limitawal, limit)) return sendButMessage(from, lang.limit(prefix), `© ${ownername}`, [{buttonId: 'limit', buttonText: {displayText: `Check Limit`, },type: 1,}]);
var m = q
var m1 = m.split("|")[0];
var m2 = m.split("|")[1]; 
var m3 = m.split("|")[2]; 
if (args.length < 1) return reply(`Ex: ${prefix + command} teks|teks2|icon\nUsage: ${prefix + command} zeeone|youtube|swat`)
if (!m3) return reply(`Ex: ${prefix + command} teks|teks2|icon\nUsage: ${prefix + command} zeeone|youtube|swat`)
if (!q.includes('|')) return reply(`Ex: ${prefix + command} teks|teks2|icon\nUsage: ${prefix + command} zeeone|youtube|swat`)
const style = ['bird','butterfly','coffee','dove','leaf','like','lotus','milk-tea','panda','tree','woman','bear','bull','dragon','eagle','hawk','ninja','paw','rooster','sabertooth','skull','warrior','zebra']
if (!style.includes(m3)){ 
let listt = `*icon Yg Kamu Masukkan Salah*\n\n_Berikut list icon yg benar, Total_ *${style.length}* _icon_\n\n`
no = 0
for (var i = 0; i < style.length; i++) {
no +=1
listt += no.toString() + '.  '  + style[i] + '\n'
}
reply(listt)
} else {
	reply(lang.wait())
let textpro2 = await getBuffer(api('alfa', '/api/ephoto360/'+command, {text: m1,text2: m2, icon : m3}, 'apikey'))
alpha.sendMessage(from, textpro2, MessageType.image, { quoted: mek, caption: '*Terima kasih telah menggunakan* ' + '*' + global.botname + '*'})
}}
await limitAdd(sender, limit)
	break
	case 'gunlogogaming':{
if (isLimit(sender, isPremium, isCreator, isOwner, limitawal, limit)) return sendButMessage(from, lang.limit(prefix), `© ${ownername}`, [{buttonId: 'limit', buttonText: {displayText: `Check Limit`, },type: 1,}]);
var m = q
var m1 = m.split("|")[0];
var m2 = m.split("|")[1]; 
var m3 = m.split("|")[2]; 
if (args.length < 1) return reply(`Ex: ${prefix + command} teks|teks2|background\nUsage: ${prefix + command} zeeone|youtube|swat`)
if (!m3) return reply(`Ex: ${prefix + command} teks|teks2|background\nUsage: ${prefix + command} zeeone|youtube|swat`)
if (!q.includes('|')) return reply(`Ex: ${prefix + command} teks|teks2|background\nUsage: ${prefix + command} zeeone|youtube|swat`)
const style = ['ak47','ak47-s','an94','ar15','aug','awm','g36k','m4a1','m4-s','m14ebr','m16','m60','m82a1','mp5','scar','svd','xm8','xm1014']
if (!style.includes(m3)){ 
let listt = `*background Yg Kamu Masukkan Salah*\n\n_Berikut list background yg benar, Total_ *${style.length}* _background_\n\n`
no = 0
for (var i = 0; i < style.length; i++) {
no +=1
listt += no.toString() + '.  '  + style[i] + '\n'
}
reply(listt)
} else {
	reply(lang.wait())
let textpro2 = await getBuffer(api('alfa', '/api/ephoto360/'+command, {text: m1,text2: m2, background : m3}, 'apikey'))
alpha.sendMessage(from, textpro2, MessageType.image, { quoted: mek, caption: '*Terima kasih telah menggunakan* ' + '*' + global.botname + '*'})
}}
await limitAdd(sender, limit)
	break
	case 'banneroffreefire':{
if (isLimit(sender, isPremium, isCreator, isOwner, limitawal, limit)) return sendButMessage(from, lang.limit(prefix), `© ${ownername}`, [{buttonId: 'limit', buttonText: {displayText: `Check Limit`, },type: 1,}]);
var m = q
var m1 = m.split("|")[0];
var m2 = m.split("|")[1]; 
var m3 = m.split("|")[2]; 
if (args.length < 1) return reply(`Ex: ${prefix + command} teks|teks2|background\nUsage: ${prefix + command} zeeone|youtube|swat`)
if (!m3) return reply(`Ex: ${prefix + command} teks|teks2|background\nUsage: ${prefix + command} zeeone|youtube|swat`)
if (!q.includes('|')) return reply(`Ex: ${prefix + command} teks|teks2|background\nUsage: ${prefix + command} zeeone|youtube|swat`)
const style = ['andrew','caroline','kelly','laura','maxim','miguel','misha','moco','nikita','notora','olivia','steffi']
if (!style.includes(m3)){ 
let listt = `*background Yg Kamu Masukkan Salah*\n\n_Berikut list background yg benar, Total_ *${style.length}* _background_\n\n`
no = 0
for (var i = 0; i < style.length; i++) {
no +=1
listt += no.toString() + '.  '  + style[i] + '\n'
}
reply(listt)
} else {
	reply(lang.wait())
let textpro2 = await getBuffer(api('alfa', '/api/ephoto360/'+command, {text: m1,text2: m2, background : m3}, 'apikey'))
alpha.sendMessage(from, textpro2, MessageType.image, { quoted: mek, caption: '*Terima kasih telah menggunakan* ' + '*' + global.botname + '*'})
}}
await limitAdd(sender, limit)
	break
	case 'letterlogos':{
if (isLimit(sender, isPremium, isCreator, isOwner, limitawal, limit)) return sendButMessage(from, lang.limit(prefix), `© ${ownername}`, [{buttonId: 'limit', buttonText: {displayText: `Check Limit`, },type: 1,}]);
var m = q
var m1 = m.split("|")[0];
var m2 = m.split("|")[1]; 
var m3 = m.split("|")[2]; 
if (args.length < 1) return reply(`Ex: ${prefix + command} teks|teks2|thumb\nUsage: ${prefix + command} zeeone|youtube|swat`)
if (!m3) return reply(`Ex: ${prefix + command} teks|teks2|thumb\nUsage: ${prefix + command} zeeone|youtube|swat`)
if (!q.includes('|')) return reply(`Ex: ${prefix + command} teks|teks2|thumb\nUsage: ${prefix + command} zeeone|youtube|swat`)
const style = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','z']
if (!style.includes(m3)){ 
let listt = `*thumb Yg Kamu Masukkan Salah*\n\n_Berikut list thumb yg benar, Total_ *${style.length}* _thumb_\n\n`
no = 0
for (var i = 0; i < style.length; i++) {
no +=1
listt += no.toString() + '.  '  + style[i] + '\n'
}
reply(listt)
} else {
	reply(lang.wait())
let textpro2 = await getBuffer(api('alfa', '/api/ephoto360/'+command, {text: m1,text2: m2, thumb : m3}, 'apikey'))
alpha.sendMessage(from, textpro2, MessageType.image, { quoted: mek, caption: '*Terima kasih telah menggunakan* ' + '*' + global.botname + '*'})
}}
await limitAdd(sender, limit)
	break
	case 'bannerofoverwatch':{
if (isLimit(sender, isPremium, isCreator, isOwner, limitawal, limit)) return sendButMessage(from, lang.limit(prefix), `© ${ownername}`, [{buttonId: 'limit', buttonText: {displayText: `Check Limit`, },type: 1,}]);
var m = q
var m1 = m.split("|")[0];
var m2 = m.split("|")[1]; 
var m3 = m.split("|")[2]; 
if (args.length < 1) return reply(`Ex: ${prefix + command} teks|teks2|background\nUsage: ${prefix + command} zeeone|youtube|swat`)
if (!m3) return reply(`Ex: ${prefix + command} teks|teks2|background\nUsage: ${prefix + command} zeeone|youtube|swat`)
if (!q.includes('|')) return reply(`Ex: ${prefix + command} teks|teks2|background\nUsage: ${prefix + command} zeeone|youtube|swat`)
const style = ['widowmaker','tracer','symmetra','sombra','soldier76','reinhardt','reaper','orisa','mercy','mei','genji','dva','doomfist','ashe','ana']
if (!style.includes(m3)){ 
let listt = `*background Yg Kamu Masukkan Salah*\n\n_Berikut list background yg benar, Total_ *${style.length}* _background_\n\n`
no = 0
for (var i = 0; i < style.length; i++) {
no +=1
listt += no.toString() + '.  '  + style[i] + '\n'
}
reply(listt)
} else {
	reply(lang.wait())
let textpro2 = await getBuffer(api('alfa', '/api/ephoto360/'+command, {text: m1,text2: m2, background : m3}, 'apikey'))
alpha.sendMessage(from, textpro2, MessageType.image, { quoted: mek, caption: '*Terima kasih telah menggunakan* ' + '*' + global.botname + '*'})
}}
await limitAdd(sender, limit)
	break
	case 'bannerofapex':{
if (isLimit(sender, isPremium, isCreator, isOwner, limitawal, limit)) return sendButMessage(from, lang.limit(prefix), `© ${ownername}`, [{buttonId: 'limit', buttonText: {displayText: `Check Limit`, },type: 1,}]);
var m = q
var m1 = m.split("|")[0];
var m2 = m.split("|")[1]; 
var m3 = m.split("|")[2]; 
if (args.length < 1) return reply(`Ex: ${prefix + command} teks|teks2|background\nUsage: ${prefix + command} zeeone|youtube|swat`)
if (!m3) return reply(`Ex: ${prefix + command} teks|teks2|background\nUsage: ${prefix + command} zeeone|youtube|swat`)
if (!q.includes('|')) return reply(`Ex: ${prefix + command} teks|teks2|background\nUsage: ${prefix + command} zeeone|youtube|swat`)
const style = ['bg6','bg5','bg4','bg3','bg2','bg1']
if (!style.includes(m3)){ 
let listt = `*background Yg Kamu Masukkan Salah*\n\n_Berikut list background yg benar, Total_ *${style.length}* _background_\n\n`
no = 0
for (var i = 0; i < style.length; i++) {
no +=1
listt += no.toString() + '.  '  + style[i] + '\n'
}
reply(listt)
} else {
	reply(lang.wait())
let textpro2 = await getBuffer(api('alfa', '/api/ephoto360/'+command, {text: m1,text2: m2, background : m3}, 'apikey'))
alpha.sendMessage(from, textpro2, MessageType.image, { quoted: mek, caption: '*Terima kasih telah menggunakan* ' + '*' + global.botname + '*'})
}}
await limitAdd(sender, limit)
	break
	case 'bannerofpubg':{
if (isLimit(sender, isPremium, isCreator, isOwner, limitawal, limit)) return sendButMessage(from, lang.limit(prefix), `© ${ownername}`, [{buttonId: 'limit', buttonText: {displayText: `Check Limit`, },type: 1,}]);
var m = q
var m1 = m.split("|")[0];
var m2 = m.split("|")[1]; 
var m3 = m.split("|")[2]; 
if (args.length < 1) return reply(`Ex: ${prefix + command} teks|teks2|background\nUsage: ${prefix + command} zeeone|youtube|swat`)
if (!m3) return reply(`Ex: ${prefix + command} teks|teks2|background\nUsage: ${prefix + command} zeeone|youtube|swat`)
if (!q.includes('|')) return reply(`Ex: ${prefix + command} teks|teks2|background\nUsage: ${prefix + command} zeeone|youtube|swat`)
const style = ['bg11','bg10','bg9','bg8','bg7','bg6','bg5','bg4','bg3','bg2','bg1']
if (!style.includes(m3)){ 
let listt = `*background Yg Kamu Masukkan Salah*\n\n_Berikut list background yg benar, Total_ *${style.length}* _background_\n\n`
no = 0
for (var i = 0; i < style.length; i++) {
no +=1
listt += no.toString() + '.  '  + style[i] + '\n'
}
reply(listt)
} else {
	reply(lang.wait())
let textpro2 = await getBuffer(api('alfa', '/api/ephoto360/'+command, {text: m1,text2: m2, background : m3}, 'apikey'))
alpha.sendMessage(from, textpro2, MessageType.image, { quoted: mek, caption: '*Terima kasih telah menggunakan* ' + '*' + global.botname + '*'})
}}
await limitAdd(sender, limit)
	break
	case 'mascotstyle':{
if (isLimit(sender, isPremium, isCreator, isOwner, limitawal, limit)) return sendButMessage(from, lang.limit(prefix), `© ${ownername}`, [{buttonId: 'limit', buttonText: {displayText: `Check Limit`, },type: 1,}]);
var m = q
var m1 = m.split("|")[0];
var m2 = m.split("|")[1]; 
var m3 = m.split("|")[2]; 
if (args.length < 1) return reply(`Ex: ${prefix + command} teks|teks2|thumb\nUsage: ${prefix + command} zeeone|youtube|swat`)
if (!m3) return reply(`Ex: ${prefix + command} teks|teks2|thumb\nUsage: ${prefix + command} zeeone|youtube|swat`)
if (!q.includes('|')) return reply(`Ex: ${prefix + command} teks|teks2|thumb\nUsage: ${prefix + command} zeeone|youtube|swat`)
const style = ['dragon-5','jet','knight','skull-3','skull-cyborg','tiger-4','bee-3','dragon-4','fox-3','goat-2','kitsune','octopus-2','piranha','wolf','bear-2','cat','ceberus','crocodile','dinosaur','dragon-3','eagle-3','horse-2','husky','kraken','lynx','sabertooh','assassin','bee','cat2','demon','fox','gorilla','horus','octopus','rounin','scorpion','skull2','tiger3','tiger2','tiger','shark','sabertooth','rooster','rhino','puma','phoenix','panther','owl','lion','horse','hornet','griffin','goat','fox','eagle','dragon2','dragon','devil','cobra','bull','bear','monkey','warrior','rabbit','pirates','owl2','neonwolf','lionking','godzilla','flashwolf','fire','eagle2','dog','mask','team','pubg','drift','bee2']
if (!style.includes(m3)){ 
let listt = `*thumb Yg Kamu Masukkan Salah*\n\n_Berikut list thumb yg benar, Total_ *${style.length}* _thumb_\n\n`
no = 0
for (var i = 0; i < style.length; i++) {
no +=1
listt += no.toString() + '.  '  + style[i] + '\n'
}
reply(listt)
} else {
	reply(lang.wait())
let textpro2 = await getBuffer(api('alfa', '/api/ephoto360/'+command, {text: m1,text2: m2, thumb : m3}, 'apikey'))
alpha.sendMessage(from, textpro2, MessageType.image, { quoted: mek, caption: '*Terima kasih telah menggunakan* ' + '*' + global.botname + '*'})
}}
await limitAdd(sender, limit)
	break
	case 'logoaccording':{
if (isLimit(sender, isPremium, isCreator, isOwner, limitawal, limit)) return sendButMessage(from, lang.limit(prefix), `© ${ownername}`, [{buttonId: 'limit', buttonText: {displayText: `Check Limit`, },type: 1,}]);
var m = q
var m1 = m.split("|")[0];
var m2 = m.split("|")[1]; 
var m3 = m.split("|")[2]; 
if (args.length < 1) return reply(`Ex: ${prefix + command} teks|teks2|thumb\nUsage: ${prefix + command} zeeone|youtube|swat`)
if (!m3) return reply(`Ex: ${prefix + command} teks|teks2|thumb\nUsage: ${prefix + command} zeeone|youtube|swat`)
if (!q.includes('|')) return reply(`Ex: ${prefix + command} teks|teks2|thumb\nUsage: ${prefix + command} zeeone|youtube|swat`)
const style = ['bear2','cat2','ceberus','crocodile','dinosaur','dragon3','eagle3','horse2','husky','kraken','lynx','sabertooh','assassin','bee','cat','demon','fox-2','gorilla','horus','octopus','rounin','scorpion','-2','tiger-3','bg-tiger','bg-buffalo','chicken','bull','bg-wolf','jaguar','horse','eagle','dragon','wolver','shark','sabertooth','rhino','phoenix','lion','hornet','griffin','bear','tiger2','panther','owl','monkey','goat','fox','dragon2','devil','cobra','reaper','pirates','owl2','mask','fire','eagle2','chamois','neptune','parrots','samurai']
if (!style.includes(m3)){ 
let listt = `*thumb Yg Kamu Masukkan Salah*\n\n_Berikut list thumb yg benar, Total_ *${style.length}* _thumb_\n\n`
no = 0
for (var i = 0; i < style.length; i++) {
no +=1
listt += no.toString() + '.  '  + style[i] + '\n'
}
reply(listt)
} else {
	reply(lang.wait())
let textpro2 = await getBuffer(api('alfa', '/api/ephoto360/'+command, {text: m1,text2: m2, thumb : m3}, 'apikey'))
alpha.sendMessage(from, textpro2, MessageType.image, { quoted: mek, caption: '*Terima kasih telah menggunakan* ' + '*' + global.botname + '*'})
}}
await limitAdd(sender, limit)
	break
	case 'avataroverwatch':{
if (isLimit(sender, isPremium, isCreator, isOwner, limitawal, limit)) return sendButMessage(from, lang.limit(prefix), `© ${ownername}`, [{buttonId: 'limit', buttonText: {displayText: `Check Limit`, },type: 1,}]);
var m = q
var m1 = m.split("|")[0];
var m2 = m.split("|")[1]; 
var m3 = m.split("|")[2]; 
if (args.length < 1 ) return reply(`Ex: ${prefix + command} teks|teks2|thumb\nUsage: ${prefix + command} zeeone|youtube|swat`)
if (!m3) return reply(`Ex: ${prefix + command} teks|teks2|thumb\nUsage: ${prefix + command} zeeone|youtube|swat`)
if (!q.includes('|')) return reply(`Ex: ${prefix + command} teks|teks2|thumb\nUsage: ${prefix + command} zeeone|youtube|swat`)
const style = ['mccree','mercy','zenyatta','zarya','winston','widowmaker','tracer','torbjorn','symmetra','sombra','soldier76','soldier_76','roadhog','reinhardt','reaper2','reaper','pharah','orisa','mei','lucio','junkrat','hanzo','genji','dva','bastion','ana2','ana','doomfist','bg-1']
if (!style.includes(m3)){ 
let listt = `*thumb Yg Kamu Masukkan Salah*\n\n_Berikut list thumb yg benar, Total_ *${style.length}* _thumb_\n\n`
no = 0
for (var i = 0; i < style.length; i++) {
no +=1
listt += no.toString() + '.  '  + style[i] + '\n'
}
reply(listt)
} else {
	reply(lang.wait())
let textpro2 = await getBuffer(api('alfa', '/api/ephoto360/'+command, {text: m1,text2: m2, thumb : m3}, 'apikey'))
alpha.sendMessage(from, textpro2, MessageType.image, { quoted: mek, caption: '*Terima kasih telah menggunakan* ' + '*' + global.botname + '*'})
}}
await limitAdd(sender, limit)
	break
	
	
//ephoto360
case 'youtubegold':
case 'youtubesilver':
case 'facebookgold':
case 'facebooksilver':
case 'instagramgold':
case 'instagramsilver':
case 'twittergold':
case 'twittersilver':
case 'retrotext':
case 'halloweenbats':
case 'texthalloween':
case 'cardhalloween':
case 'birthdaycake':
case 'thundertext':
case 'icetext':
case 'milkcake':
case 'snowontext':
case 'metalstar':
case 'dragonfire':
case 'zombie3d':
case 'merrycard':
case 'viettel':
case 'embroider':
case 'graffititext':
case 'graffititext2':
case 'graffititext3':
case 'covergraffiti':
case 'moderngold':
case 'capercut':
case 'lovecard':
case 'heartflashlight':
case 'heartcup':
case 'sunglightshadow':
case 'graffiti3d':
case 'moderngoldsilver':
case 'moderngold2':
case 'moderngold3':
case 'fabrictext':
case 'masteryavatar':
case 'messagecoffee':
case 'announofwin':
case 'writeblood':
case 'horrorletter':
case 'writehorror':
case 'shirtclub':
case 'angelwing':
case 'christmasseason':
case 'projectyasuo':
case 'lovelycute':
case 'womansday':
case 'covergamepubg':
case 'nameonheart':
case 'christmascard': 
case 'galaxybat':
case 'writegalaxy':
case 'starsnight':
case 'noeltext':
case 'textcakes':
case 'pubgbirthday':
case 'galaxywallpaper':
case 'pubgmascotlogo':
case 'realembroidery':
case 'vintagetelevision':
case 'funnyanimations':
case 'glowingtext':
case 'textonglass':
case 'cartoonstyle':
case 'multicolor':
case 'watercolor2':
case 'textsky':
case 'summerbeach':
case '1917text':
case 'puppycute':
case 'rosebirthday':{
	if (args.length < 1) return reply(lang.noteks(prefix, command))
if (isLimit(sender, isPremium, isCreator, isOwner, limitawal, limit)) return sendButMessage(from, lang.limit(prefix), `© ${ownername}`, [{buttonId: 'limit', buttonText: {displayText: `Check Limit`, },type: 1,}]);
reply(lang.wait())
let textpro2 = await getBuffer(api('alfa', '/api/ephoto360/'+command, {text: q}, 'apikey'))
alpha.sendMessage(from, textpro2, MessageType.image, { quoted: mek, caption: `Nih udah jadi kak, jgn lupa donasi untuk beli dyno 🐦 ` })
.catch(e =>{
reply(lang.tryAgain())
})
await  limitAdd(sender, limit)}
break 
case 'funnyhalloween': case 'lightningpubg': case 'greetingcardvideo':  case 'pubgglicthvideo': case 'generalexam': {
	if (args.length < 1) return reply(lang.noteks(prefix, command))
if (isLimit(sender, isPremium, isCreator, isOwner, limitawal, limit)) return sendButMessage(from, lang.limit(prefix), `© ${ownername}`, [{buttonId: 'limit', buttonText: {displayText: `Check Limit`, },type: 1,}]);
reply(lang.wait())
let textpro2 = await getBuffer(api('alfa', '/api/ephoto360/'+command, {text: q}, 'apikey'))
alpha.sendMessage(from, textpro2 , MessageType.video, {mimetype: 'video/mp4', quoted: mek, caption: `Nih udah jadi kak, jgn lupa donasi untuk beli dyno 🐦 `})
.catch(e =>{
reply(lang.tryAgain())
})
await  limitAdd(sender, limit)}
	break
case 'steellettering':
case 'letterstext':
case 'barcashirt':
case 'premiercup':
case 'stylepoligon':
case 'lifebuoys':
case 'juventusshirt':{
	if (args.length < 1) return reply(lang.tahta(prefix, command))
if (isLimit(sender, isPremium, isCreator, isOwner, limitawal, limit)) return sendButMessage(from, lang.limit(prefix), `© ${ownername}`, [{buttonId: 'limit', buttonText: {displayText: `Check Limit`, },type: 1,}]);
reply(lang.wait())
var m = q
var m1 = m.split("|")[0];
var m2 = m.split("|")[1]; 
let textpro = await getBuffer(api('alfa', '/api/ephoto360/'+command, {text: m1, text2: m2}, 'apikey'))
alpha.sendMessage(from, textpro, MessageType.image, { quoted: mek, caption: `Nih udah jadi kak, jgn lupa donasi untuk beli dyno 🐦 ` })
.catch(e =>{
reply(lang.tryAgain())
})
await  limitAdd(sender, limit)
}
break 
case 'asmaulhusna':{
	var asma = await fetchJson(api('alfa', '/api/islam/'+command, {}, 'apikey'))
	.then(async data =>{
		let txt = '*Asmaul Husna*\n\n'
		txt += `• Latin : ${data.result.latin}\n`
		txt += `• Arabic : ${data.result.arabic}\n`
		txt += `• Tr id : ${data.result.translation_id}\n`
		txt += `• Tr en : ${data.result.translation_en}`
		reply(txt)
		})
		.catch(e =>{
reply(lang.tryAgain())
})
await  limitAdd(sender, limit)
	}
	break
case 'kisahnabi':{
	if (args.length < 1) return reply(`Ex : ${prefix + command} Adam`)
	if (isLimit(sender, isPremium, isCreator, isOwner, limitawal, limit)) return sendButMessage(from, lang.limit(prefix), `© ${ownername}`, [{buttonId: 'limit', buttonText: {displayText: `Check Limit`, },type: 1,}]);
	var asma = await fetchJson(api('alfa', '/api/islam/'+command, {nabi : q}, 'apikey'))
	.then(async data =>{
		let txt = '*Kisah Nabi*\n\n'
		txt += `• Name : ${data.result.name}\n`
		txt += `• Birth : ${data.result.birth}\n`
		txt += `• Death Age : ${data.result.death_age}\n`
		txt += `• Country : ${data.result.country_from}\n`
		txt += `• Story : ${data.result.story}\n`
		reply(txt)
		})
		.catch(e =>{
reply(lang.tryAgain())
})
		await  limitAdd(sender, limit)
	}
	break
case 'jadwalshalat':{
	if (args.length < 1) return reply(`Ex : ${prefix + command} Makassar`)
	if (isLimit(sender, isPremium, isCreator, isOwner, limitawal, limit)) return sendButMessage(from, lang.limit(prefix), `© ${ownername}`, [{buttonId: 'limit', buttonText: {displayText: `Check Limit`, },type: 1,}]);
	var asma = await fetchJson(api('alfa', '/api/islam/'+command, {daerah : q}, 'apikey'))
	.then(async data =>{
		let txt = '*Jadwal Shalat *\n\n'
		txt += `• Daerah : ${q}\n\n`
		txt += `• Date : ${moment(new Date()).tz('Asia/Jakarta').locale('id').format('HH:mm:ss DD/MM/YYYY')}\n`
		txt += `• Subuh : ${data.result.today.Shubuh}\n`
		txt += `• Zuhur : ${data.result.today.Dzuhur}\n`
		txt += `• Ashr : ${data.result.today.Ashr}\n`
		txt += `• Magrib : ${data.result.today.Maghrib}\n`
		txt += `• Isya : ${data.result.today.Isya}\n`
		reply(txt)
		await  limitAdd(sender, limit)
		})
		.catch(e =>{
reply(lang.tryAgain())
})
	}
	break
case 'randomquran':{
	if (isLimit(sender, isPremium, isCreator, isOwner, limitawal, limit)) return sendButMessage(from, lang.limit(prefix), `© ${ownername}`, [{buttonId: 'limit', buttonText: {displayText: `Check Limit`, },type: 1,}]);
	var asma = await fetchJson(api('alfa', '/api/islam/'+command, {}, 'apikey'))
	.then(async data =>{
		let short = data.result.resources
		let txt = '*Random Quran*\n\n'
		txt += `• Surah : ${short.nameOfSurah.short} (${short.nameOfSurah.transliteration.en})\n`
		txt += `• Surah ke : ${short.numberOfSurah}\n`
		txt += `• Total ayat : ${short.totalAyah}\n`
		txt += `• Ayat ke : ${short.numberOfAyah}\n`
		txt += `• Arab : ${short.ayah.text.arab}\n`
		txt += `• Latin : ${short.ayah.text.transliteration.en}\n`
		txt += `• Tr en : ${short.ayah.translation.en}\n`
		txt += `• Tr id : ${short.ayah.translation.id}\n\n`
		txt += `_*Audio sedang dalam di proses pengiriman*_`
		reply(txt)
		let buff = await getBuffer(short.ayah.audio.primary)
		alpha.sendMessage(from, buff, MessageType.audio, {mimetype: 'audio/mpeg', quoted: mek})
		await  limitAdd(sender, limit)
		})
		.catch(e =>{
reply(lang.tryAgain())
})
	}
	break
case 'randomquran2':{
	if (args.length < 1) return reply(`Ex : ${prefix + command} Juz\nUsage: ${prefix + command} 1`)
	if (isLimit(sender, isPremium, isCreator, isOwner, limitawal, limit)) return sendButMessage(from, lang.limit(prefix), `© ${ownername}`, [{buttonId: 'limit', buttonText: {displayText: `Check Limit`, },type: 1,}]);
	var asma = await fetchJson(api('alfa', '/api/islam/'+command, {juz : q}, 'apikey'))
	.then(async data =>{
		let short = data.result.resources
		let txt = '*Random Quran*\n\n'
		txt += `• Surah : ${short.nameOfSurah.short} (${short.nameOfSurah.transliteration.en})\n`
		txt += `• Surah ke : ${short.numberOfSurah}\n`
		txt += `• Total ayat : ${short.totalAyah}\n`
		txt += `• Ayat ke : ${short.numberOfAyah}\n`
		txt += `• Arab : ${short.ayah.text.arab}\n`
		txt += `• Latin : ${short.ayah.text.transliteration.en}\n`
		txt += `• Tr en : ${short.ayah.translation.en}\n`
		txt += `• Tr id : ${short.ayah.translation.id}\n\n`
		txt += `_*Audio sedang dalam di proses pengiriman*_`
		reply(txt)
		let buff = await getBuffer(short.ayah.audio.primary)
		alpha.sendMessage(from, buff, MessageType.audio, {mimetype: 'audio/mpeg', quoted: mek})
		await  limitAdd(sender, limit)
		})
	}
	break
case 'listsurah':{
	if (isLimit(sender, isPremium, isCreator, isOwner, limitawal, limit)) return sendButMessage(from, lang.limit(prefix), `© ${ownername}`, [{buttonId: 'limit', buttonText: {displayText: `Check Limit`, },type: 1,}]);
	var asma = await fetchJson(api('alfa', '/api/islam/'+command, {}, 'apikey'))
	.then(async data =>{
		listt = '*List Surah*\n\n'
		no = 0
		for (var i = 0; i < data.result.listsurah.length; i++) {
		no +=1
		listt += no.toString() + '.  '  + data.result.listsurah[i] + '\n'
		}
		reply(listt)
		await  limitAdd(sender, limit)
		})
		.catch(e =>{
reply(lang.tryAgain())
})
	}
	break
case 'tafsirsurah':{
	if (args.length < 1) return reply(`Ex : ${prefix + command} surah\nUsage: ${prefix + command} Al-fatihah`)
	if (isLimit(sender, isPremium, isCreator, isOwner, limitawal, limit)) return sendButMessage(from, lang.limit(prefix), `© ${ownername}`, [{buttonId: 'limit', buttonText: {displayText: `Check Limit`, },type: 1,}]);
	var asma = await fetchJson(api('alfa', '/api/islam/'+command, {surah : q}, 'apikey'))
	.then(async data =>{
		let listt = '*Tafsir Surah*\n\n'
		let no = 0
		for (var i = 0; i < data.result.length; i++) {
		no +=1
		listt += `• Surah : ${data.result[i].surah}\n`
		listt += `• Tafsir : ${data.result[i].tafsir}\n\n-----------------------------------\n\n`
		}
		reply(listt)
		await  limitAdd(sender, limit)
		})
		.catch(e =>{
reply(lang.tryAgain())
})
	}
	break
/*case 'alquranaudio2':{
	if (args.length < 1) return reply(`Ex : ${prefix + command} surah\nUsage: ${prefix + command} 1`)
	if (isLimit(sender, isPremium, isCreator, isOwner, limitawal, limit)) return sendButMessage(from, lang.limit(prefix), `© ${ownername}`, [{buttonId: 'limit', buttonText: {displayText: `Check Limit`, },type: 1,}]);
	var asma = await fetchJson(api('alfa', '/api/islam/alquran-audio', {surah : args.join(" ")}, 'apikey'))
		let short = asma.result.data
		let listt = '*Alquran Audio*\n\n'
		listt += `• Surah : ${short.name.short} (${short.name.transliteration.en})\n`
		listt += `• Arti : ${short.name.translation.en} (${short.name.translation.id})\n`
		listt += `• Surah ke : ${short.number}\n`
		listt += `• Urutan : ${short.sequence}\n`
		listt += `• Total ayat : ${short.numberOfVerses}\n`
		listt += `• Wahyu : ${short.revelation.arab} (${short.revelation.id})\n`
		listt += `• Tafsir : ${short.tafsir.id}\n\n~~~~~~~~~~~~~~~~~~~\n\n`
		let shot = data.result.data.verses
		let rand = shot[Math.floor(Math.random() * shot.length)]
		for (var i = 0; i < rand; i++) {
		listt += `• Juz : ${short.verses[i].meta.juz}\n`
		listt += `• Page : ${short.verses[i].meta.page}\n`
		listt += `• Manzil : ${short.verses[i].meta.manzil}\n`
		listt += `• Ruku : ${short.verses[i].meta.ruku}\n`
		listt += `• Quarte : ${short.verses[i].meta.hizbQuarter}\n`
		listt += `• Arab : ${short.verses[i].text.arab}\n`
		listt += `• Latin : ${short.verses[i].text.transliteration.en}\n`
		listt += `• Tr en : ${short.verses[i].translation.en}\n`
		listt += `• Tr id : ${short.verses[i].translation.id}\n`
		listt += `• Tafsir short : ${short.verses[i].tafsir.id.short}\n`
		listt += `• Tafsir long : ${short.verses[i].tafsir.id.long}\n\n-----------------------------------\n\n`
		let aud_nya = await getBuffer(short.verses[i].audio.primary)
		alpha.sendMessage(from, aud_nya, MessageType.audio, { mimetype:'audio/mpeg', quoted: mek})
		}
		reply(listt)
		await  limitAdd(sender, limit)
	}
	break*/
case 'alquranaudio':{
	if (args.length < 1) return reply(`Ex : ${prefix + command} surah|ayat\nUsage: ${prefix + command} 1|2`)
	if (isLimit(sender, isPremium, isCreator, isOwner, limitawal, limit)) return sendButMessage(from, lang.limit(prefix), `© ${ownername}`, [{buttonId: 'limit', buttonText: {displayText: `Check Limit`, },type: 1,}]);
	var m = q
	var m1 = m.split("|")[0];
	var m2 = m.split("|")[1]; 
	var asma = await fetchJson(api('alfa', '/api/islam/alquran-audio2', {ayat: m2, surah : m1}, 'apikey'))
	let short = asma.result.data
		let listt = '*Alquran Audio*\n\n'
		listt += `• Surah : ${short.surah.name.short} (${short.surah.name.transliteration.en})\n`
		listt += `• Arti : ${short.surah.name.translation.en} (${short.surah.name.translation.id})\n`
		listt += `• Surah ke : ${short.surah.number}\n`
		listt += `• Urutan : ${short.surah.sequence}\n`
		listt += `• Total ayat : ${short.surah.numberOfVerses}\n`
		listt += `• Wahyu : ${short.surah.revelation.arab} (${short.surah.revelation.id})\n`
		listt += `• Tafsir : ${short.surah.tafsir.id}\n\n~~~~~~~~~~~~~~~~~~~\n\n`
		listt += `• Juz : ${short.meta.juz}\n`
		listt += `• Page : ${short.meta.page}\n`
		listt += `• Manzil : ${short.meta.manzil}\n`
		listt += `• Ruku : ${short.meta.ruku}\n`
		listt += `• Quarte : ${short.meta.hizbQuarter}\n`
		listt += `• Arab : ${short.text.arab}\n`
		listt += `• Latin : ${short.text.transliteration.en}\n`
		listt += `• Tr en : ${short.translation.en}\n`
		listt += `• Tr id : ${short.translation.id}\n`
		listt += `• Tafsir short : ${short.tafsir.id.short}\n`
		listt += `• Tafsir long : ${short.tafsir.id.long}\n\n-----------------------------------\n\n`
		let aud_nya = await getBuffer(short.audio.primary)
		alpha.sendMessage(from, aud_nya, MessageType.audio, { mimetype:'audio/mpeg', quoted: mek})
		reply(listt)
		await  limitAdd(sender, limit)
	}
	break
case 'katailham':  
if (isLimit(sender, isPremium, isCreator, isOwner, limitawal, limit)) return sendButMessage(from, lang.limit(prefix), `© ${ownername}`, [{buttonId: 'limit', buttonText: {displayText: `Check Limit`, },type: 1,}]);
                     const kta =['Lebih baik mengerti sedikit daripada salah mengerti.','Hampir semua pria memang mampu bertahan menghadapi kesulitan. Namun, jika Anda ingin menguji karakter sejati pria, beri dia kekuasaan.','Bila tekad seseorang kuat dan teguh, Tuhan akan bergabung dalam usahanya.','Penderitaan adalah pelajaran.','Ilmu pengetahuan tanpa agama adalah pincang.','Hidup itu seperti sebuah sepeda, agar tetap seimbang kita harus tetap bergerak.','Perbedaan masa lalu, sekarang, dan masa depan tak lebih dari ilusi yang keras kepala.','Sebuah meja, sebuah kursi, semangkuk buah, dan sebuah biola; apa lagi yang dibutuhkan agar seseorang bisa merasa bahagia?','Belas kasihanlah terhadap sesama, bersikap keraslah terhadap diri sendiri.','Cara paling baik untuk menggerakkan diri Anda ialah memberi tugas kepada diri sendiri.','Kita tidak boleh kehilangan semangat. Semangat adalah stimulan terkuat untuk mencintai, berkreasi dan berkeinginan untuk hidup lebih lama.','Manusia akan bahagia selama ia memilih untuk bahagia.','Saya tidak berharap menjadi segalanya bagi setiap orang. Saya hanya ingin menjadi sesuatu untuk seseorang.','Apabila sempurna akal seseorang, maka sedikit perkataannya.','Bahagialah orang yang dapat menjadi tuan untuk dirinya, menjadi kusir untuk nafsunya dan menjadi kapten untuk bahtera hidupnya.','Sahabat yang jujur lebih besar harganya daripada harta benda yang diwarisi dari nenek moyang.','Yang paling melelahkan dalam hidup adalah menjadi orang yang tidak tulus.','Terbuka untuk Anda, begitulah Tuhan memberi kita jalan untuk berusaha. Jangan pernah berfikir jalan sudah tertutup.','Penundaan adalah kuburan dimana peluang dikuburkan.','Cinta bukan saling menatap mata, namun melihat ke arah yang sama bersama-sama.','Kita adalah apa yang kita kerjakan berulang kali. Dengan demikian, kecemerlangan bukan tindakan, tetapi kebiasaan.','Jangan pernah mencoba menjadikan putra atau putri Anda menjadi seperti Anda. Diri Anda hanya cukup satu saja.','Jika Anda bisa membuat orang lain tertawa, maka Anda akan mendapatkan semua cinta yang Anda inginkan.','Masalah akan datang cepat atau lambat. Jika masalah datang, sambut dengan sebaik mungkin. Semakin ramah Anda menyapanya, semakin cepat ia pergi.','Kita tak bisa melakukan apapun untuk mengubah masa lalu. Tapi apapun yang kita lakukan bisa mengubah masa depan.','Kesabaran adalah teman dari kebijaksanaan.','Orang-orang kreatif termotivasi oleh keinginan untuk maju, bukan oleh keinginan untuk mengalahkan orang lain.','Dimanapun engkau berada selalulah menjadi yang terbaik dan berikan yang terbaik dari yang bisa kita berikan.','Kebencian seperti halnya cinta, berkobar karena hal-hal kecil.','Anda tidak perlu harus berhasil pada kali pertama.','Satu jam yang intensif, jauh lebih baik dan menguntungkan daripada bertahun-tahun bermimpi dan merenung-renung.','Hal terbaik yang bisa Anda lakukan untuk orang lain bukanlah membagikan kekayaan Anda, tetapi membantu dia untuk memiliki kekayaannya sendiri.','Tidak ada jaminan keberhasilan, tetapi tidak berusaha adalah jaminan kegagalan.','Aku tidak tahu kunci sukses itu apa, tapi kunci menuju kegagalan adalah mencoba membuat semua orang senang.']
					const su = kta[Math.floor(Math.random() * kta.length)]
					reply(su)
			await limitAdd(sender, limit)
						break
		case 'dare':
		if (isLimit(sender, isPremium, isCreator, isOwner, limitawal, limit)) return sendButMessage(from, lang.limit(prefix), `© ${ownername}`, [{buttonId: 'limit', buttonText: {displayText: `Check Limit`, },type: 1,}]);
                const dare =['Kirim pesan ke mantan kamu dan bilang "aku masih suka sama kamu','telfon crush/pacar sekarang dan ss ke pemain','pap ke salah satu anggota grup','Bilang "KAMU CANTIK BANGET NGGAK BOHONG" ke cowo','ss recent call whatsapp','drop emot 🤥 setiap ngetik di gc/pc selama 1 hari','kirim voice note bilang can i call u baby?','drop kutipan lagu/quote, terus tag member yang cocok buat kutipan itu','pake foto sule sampe 3 hari','ketik pake bahasa daerah 24 jam','ganti nama menjadi "gue anak lucinta luna" selama 5 jam','chat ke kontak wa urutan sesuai %batre kamu, terus bilang ke dia "i lucky to hv you','prank chat mantan dan bilang " i love u, pgn balikan','record voice baca surah al-kautsar','bilang "i hv crush on you, mau jadi pacarku gak?" ke lawan jenis yang terakhir bgt kamu chat (serah di wa/tele), tunggu dia bales, kalo udah ss drop ke sini','sebutkan tipe pacar mu!','snap/post foto pacar/crush','teriak gajelas lalu kirim pake vn kesini','pap mukamu lalu kirim ke salah satu temanmu','kirim fotomu dengan caption, aku anak pungut','teriak pake kata kasar sambil vn trus kirim kesini','teriak " anjimm gabutt anjimmm " di depan rumah mu','ganti nama jadi " BOWO " selama 24 jam','Pura pura kerasukan, contoh : kerasukan maung, kerasukan belalang, kerasukan kulkas, dll']
						const der = dare[Math.floor(Math.random() * dare.length)]
						reply(der)
			await limitAdd(sender, limit)
						break
		  case 'truth':
		if (isLimit(sender, isPremium, isCreator, isOwner, limitawal, limit)) return sendButMessage(from, lang.limit(prefix), `© ${ownername}`, [{buttonId: 'limit', buttonText: {displayText: `Check Limit`, },type: 1,}]);
		                const trut =['Pernah suka sama siapa aja? berapa lama?','Kalau boleh atau kalau mau, di gc/luar gc siapa yang akan kamu jadikan sahabat?(boleh beda/sma jenis)','apa ketakutan terbesar kamu?','pernah suka sama orang dan merasa orang itu suka sama kamu juga?','Siapa nama mantan pacar teman mu yang pernah kamu sukai diam diam?','pernah gak nyuri uang nyokap atau bokap? Alesanya?','hal yang bikin seneng pas lu lagi sedih apa','pernah cinta bertepuk sebelah tangan? kalo pernah sama siapa? rasanya gimana brou?','pernah jadi selingkuhan orang?','hal yang paling ditakutin','siapa orang yang paling berpengaruh kepada kehidupanmu','hal membanggakan apa yang kamu dapatkan di tahun ini','siapa orang yang bisa membuatmu sange','siapa orang yang pernah buatmu sange','(bgi yg muslim) pernah ga solat seharian?','Siapa yang paling mendekati tipe pasangan idealmu di sini','suka mabar(main bareng)sama siapa?','pernah nolak orang? alasannya kenapa?','Sebutkan kejadian yang bikin kamu sakit hati yang masih di inget','pencapaian yang udah didapet apa aja ditahun ini?','kebiasaan terburuk lo pas di sekolah apa?']
						const ttrth = trut[Math.floor(Math.random() * trut.length)]
						reply(ttrth)
			await limitAdd(sender, limit)
break
case 'katadilan':
if (isLimit(sender, isPremium, isCreator, isOwner, limitawal, limit)) return sendButMessage(from, lang.limit(prefix), `© ${ownername}`, [{buttonId: 'limit', buttonText: {displayText: `Check Limit`, },type: 1,}]);
					const cc =['Cemburu itu hanya untuk orang-orang yang tidak percaya diri. Dan sekarang aku sedang tidak percaya diri.','Aku gak pandai cemburu. Malahan, kalau kamu ninggalin aku, aku gak bisa apa-apa. Bisaku cuma mencintaiumu.','Aku enggak pernah cemburu Milea. Bisaku cuma mencintaimu.','Meskipun, perasaan cemburu itu normal di dalam suatu hubungan, aku tidak ingin terjebak oleh itu karena aku sangat benci merasa cemburu.','Tak semua yang kita kira udah, akan menjadi udah pada akhirnya. Andai saja dapat ku ulang kembali, andai.','Jangan rindu, ini berat. Kau tak akan kuat. Biar aku saja.','Kalau kamu bohong, itu hak kamu. Asal jangan aku yang bohong ke kamu.','Jika hujan, aku tak akan memberimu jaket. Sebab jika aku sakit, lalu siapa yang akan menjagamu?','Kalau mencintaimu adalah kesalahan, yasudah. Biar. Aku salah terus saja.','PR-ku adalah merindukanmu. Lebih kuat dari Matematika. Lebih luas dari Fisika. Lebih kerasa dari Biologi.','Kalau kamu ninggalin aku, itu hak kamu, asal jangan aku yang ninggalin kamu. Aku takut kamu kecewa.','Aku gak pandai cemburu. Malahan, kalau kamu ninggalin aku, aku gak bisa apa-apa. Bisaku cuma mencintaimu.','Dik jangan pergi jauh-jauh kan ada darahku di tubuhmu.','Sekarang aku mungkin bukan aku yang dulu, waktu membawa aku pergi, tetapi perasaan tetap sama, bersifat menjalar, hingga ke depan.','Bagiku, Kamu adalah bagian terbesar dari hidupku. Aku bisa saja membiarkanmu melakukan apa yang kamu inginkan, tetapi tidak untuk hal yang akan berakibat buruk bagimu.']
                    const si = cc[Math.floor(Math.random() * cc.length)]
					reply(si)
			await limitAdd(sender, limit)
break
case 'katabijak_lucu':
if (isLimit(sender, isPremium, isCreator, isOwner, limitawal, limit)) return sendButMessage(from, lang.limit(prefix), `© ${ownername}`, [{buttonId: 'limit', buttonText: {displayText: `Check Limit`, },type: 1,}]);
const kata_lucu = ['“Orang bijaksana tidak menikah, Setelah menikah mereka menjadi bijak sana dan bijak sini.”','“Kegagalan adalah kesuksesan yang tertunda…kebohongan adalah kejujuran yang tertunda.”','“Ingin hati memegang gunung, tapi apa daya milik tetangga.”','“Tidak ada pekerjaan yang berat di dunia ini. Pekerjaan seberat apapun akan terasa ringan kalau tidak dikerjakan.”','“Sayang… tadi pagi aku tidak bisa makan karena merindukan kamu, siangnya juga tidak makan karena memikirkan kamu, dan malamnya aku tidak bisa tidur karena kelaparan.”','“Manusia itu diciptakan berpasang-pasangan, dan jika kamu masih jomblo sampai saat ini mungkin jodohmu telah meninggal saat masih bayi.”','“Kesuksesan itu berawal dari sebuah impian, dan impian hadir disaat kita tidur. Jadi jika kamu semua ingin sukses maka lebih baik tidurlah sekarang juga”','“Wanita yang cantik bukanlah jaminan untuk kehidupan yang bahagia dan menyenangkan, namun apalagi wanita yang jelek.”','“Dalam pantat yang sehat, terdapat kentut yang kuat.”','“Cintailah tetangga, Tetapi jangan sampai tertangkap basah.”','“Uang bukan segalanya…Masih ada Mastercard dan Visa.”','“Cara terbaik untuk mewujudkan impianmu adalah bangun dari tidur.” – P. Valery','“Diam itu emas, emas itu kuning, kuning itu tai, jadi diam-diam cepirit.”','“Saat kamu mencapai kesuksesan, maka teman-temanmu akan lihat siapa sebenarnya kamu. Tapi, ketika kamu jatuh kamu akan lihat siapa saja temanmu yang akan menertawakan.”','“Setiap masalah pasti akan ada akar untuk solusinya, jika kamu beleum menemukannya, maka gali dan cari akar tersebut sampai tua.”','“Jika kepintaranmu tidak sanggup untuk meyakinkan dan memukau seseorang, maka bingungkanlah dia dengan kebodohanmu.”','“Pintar itu adalah seseorang yang bisa menguasai pelajaran sulit, tapi yang cerdas itu adalah seseorang yang bisa mencontek yang pintar.”','“Kegagalan adalah keberhasilan yang tertunda maka kebohongan adalah kejujuran yang tertunda.”','“Menahan gelak tawa itu tidak sehat. Gelak tawa akan turun ke bawah dan membasahi celana Anda.” – P. Valery.','“Saya tidak ngiler dengan harta atau tahta…tapi saya ngiler kalo tidur miring.”','“Pakaian itu adalah pagar pelindung, Pagar seharusnya melindungi tanpa menghalangi pemandangan yang indah.”','“Berakit-rakit dahulu berenang-renang ke tepian…bersakit-sakit dahulu, meriang-meriang kemudian.”','“Jangan pernah jatuh cinta sama sekampung, karena satu saja sudah repot, bagaimana kalau satu kampung..??”','“Berlatih membuat kita menjadi sempurna, tapi tidak ada manusia yang sempurna, jadi buat apa kita susah payah berlatih?”','“Gara gara nila setitik,. Rusak susu sebelanga… Gara gara si nona cantik… Lupa aku pake celana.”','“Semakin banyak belajar, semakin banyak yang kita tahu, Semakin banyak yang kita tahu, semakin banyak yang kita lupa, Semakin banyak yang kita lupa, semakin sedikit yang kita tahu. Jadi kenapa kita sibuk belajar ?”','“Jika anda dilempar batu oleh seseorang, janganlah melempar balik kepadanya. Balaslah dengan senyuman dan lempar bunga kepadanya.. Tapi usahakan potnya ikut terlempar.”','“Wanita cantik bukan menjadi jaminan kehidupan kita menyenangkan, apalagi yang jelek.”','“Carilah istri yang SALEHA (Suka Lupa Pake Beha) agar jadi SAKINAH (Sekali Kena Ingin Nambah) & jadilah suami yang SIAGA (Siap Antem Pakai Gaya Apa Saja).”','“Tidak ada pekerjaan yang berat, seberat-beratnya pekerjaan maka akan terasa ringan jika kita tidak mengerjakannya.”']
const kata_lucu_ = kata_lucu[Math.floor(Math.random() * kata_lucu.length)]
reply(kata_lucu_)
						await limitAdd(sender, limit)
break
case 'katacaklontong':
if (isLimit(sender, isPremium, isCreator, isOwner, limitawal, limit)) return sendButMessage(from, lang.limit(prefix), `© ${ownername}`, [{buttonId: 'limit', buttonText: {displayText: `Check Limit`, },type: 1,}]);
const longtong = ["Lebih baik diam dan kelihatan bodoh daripada banyak bicara dan bodohnya lebih kelihatan","Saat yang paling tepat dan nikmat untuk minum kopi adalah setelah kopi itu jadi dibuat","Mendidik seorang pria sama dengan mendidik anak manusia. Tapi, mendidik seorang wanita sama dengan mendidik sebuah keluarga","Membaca setengah jam per hari itu sama dengan membaca 30 menit per hari","Bila Anda jelek, jangan takut mencintai. Karena yang seharusnya takut adalah yang Anda cintai","Saya tidak suka sama orang yang sok tau, banyak ngomong tapi gak ngerti. Makanya saya diam, supaya saya tidak membenci diri saya sendiri","Salah satu pedagang kaki lima yang membuat anda terbelalak adalah... Ternyata pedagang kaki lima itu kakinya hanya dua","Cinta adalah pengorbanan, tapi kalo pengorbanan mulu sih namanya penderitaan","Jika kamu takut merasakan sakit hati saat diputuskan pacar, lebih baik kamu putus duluan sebelum jadian","Saya tidak takut sama istri saya. Yang saya takuti hanya dua di dunia ini, Tuhan, dan.. pasangan hidup saya","Ada tips agar hidup anda menjadi ringan, yaitu pasrah. Saya pasrahkan anak saya kepada mertua saya, dan hidup saya menjadi ringan","Ketika kamu bilang biar Tuhan yang membalas, yang harus kamu tahu adalah bahwa yang kamu alami sekarang adalah balasan dari Tuhan","Apakah takut itu penting? Takut itu menentukan teman Anda siapa","Lelaki yang sukses adalah lelaki yang bisa menghasilkan lebih banyak uang daripada uang yang dihabiskan istrinya setiap bulannya","Sebenarnya jomblo itu bukan tidak laku, hanya sekadar tidak ada yang mau. Salam jomblo","Sebuah negara tidak akan hancur oleh seribu pengemis yang ada di negara tersebut, tapi sebuah negara akan hancur hanya dengan ada beberapa koruptor di negara tersebut","Sudah dapat dipastikan kalau yang berpuasa tidak makan dan tidak minum. Sedangkan yang tidak makan dan tidak minum pasti mereka sedang berpuasa","Putus cinta bagi wanita adalah kehancuran. Tapi, bagi pria adalah pengalaman","Orang kaya takut menjadi orang miskin, tapi orang miskin tidak takut menjadi orang kaya","Sederhana tidak ada hubungannya dengan kaya atau miskin. Tapi, sederhana berhubungan erat dengan bijaksana"]
const longtong_ = longtong[Math.floor(Math.random() * longtong.length)]
reply(longtong_)
			await limitAdd(sender, limit)
						break

				default:
		if(budy.includes("@verif", "@verify","daftar")){
			let bio_nya = await alpha.getStatus(sender)
		try {
			bio_user = `${bio_nya.status}`
		} catch {
			bio_user = '-'
			}
			try {
					pp_userb = await alpha.getProfilePicture(sender)
				} catch {
					pp_userb = 'https://i.ibb.co/rvsVF3r/5012fbb87660.png'
				}
			let pp_userz = await getBuffer(pp_userb)
			if (isRegister) return reply('Kamu sudah terdaftar di dalam database')
 addRegisterUser(sender, pushname, bio_user, wib)
 let ran_blc = randomNomor(50)
 addBalance(sender, ran_blc, balance)
 addLevelingId(sender)
fs.writeFileSync('./database/user/register.json', JSON.stringify(register))
teks = `╭─❒ *Verification*\n│ *Nama :* ${pushname}\n│ *Nomor :* @${sender.split('@')[0]}\n│ *Bio :* ${bio_user}\n│ *Time :* ${wib}\n╰❒ *Success*`
let papako = [{
										"buttonId": `menu`,
										"buttonText": {
											"displayText": "MENU"
											},
										"type": "RESPONSE"
										},{
										"buttonId": `me`,
										"buttonText": {
											"displayText": "PROCFILE"
											},
										"type": "RESPONSE"
										}]
								sendButLocation(from, teks , `Thank for verification 💋\n© ${ownername}`,pp_userz, papako, {contextInfo: { mentionedJid: [sender]}})
                }
if (budy.startsWith('<')) {
if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
try {
let evaled = await eval(budy.slice(2))
if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
await m.reply(evaled)
} catch (err) {
await m.reply(err)
}
}

if (budy.startsWith('x')){
try {
if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
return alpha.sendMessage(from, JSON.stringify(eval(budy.slice(2)),null,'\t'),text, {quoted: mek})
} catch(err) {
e = String(err)
reply(e)
}
}  
if (budy.startsWith('>')){
try {
	if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
return alpha.sendMessage(from, JSON.stringify(eval(budy.slice(2)),null,'\t'),text, {quoted: mek})
} catch(err) {
e = String(err)
reply(e)
}
}  
if (budy.startsWith('$')){
if (!mek.key.fromMe && !isOwner && !isCreator ) return reply(lang.onlyOwner())
qur = budy.slice(2)
exec(qur, (err, stdout) => {
if (err) return reply(`ALPHABOT :~ ${err}`)
if (stdout) {
reply(stdout)
}
})
}
if (budy.startsWith('=>')){
if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
var konsol = budy.slice(3)
Return = (sul) => {
var sat = JSON.stringify(sul, null, 2)
bang = util.format(sat)
if (sat == undefined){
bang = util.format(sul)
}
return reply(bang)
}
try {
reply(util.format(eval(`;(async () => { ${konsol} })()`)))
console.log('\x1b[1;37m>', '[', '\x1b[1;32mEXEC\x1b[1;37m', ']', time, color("=>", "green"), 'from', color(pushname), 'args :', color(args.length))
} catch(e){
reply(String(e))
}
}
	}
	
	/*

// ANONYMOUS CHAT BOT WHATSAPP FUNCTIONNYA

*/

const str2Regex = str => str.replace(/[|\\{}()[\]^$+*?.]/g, '\\$&')
const match = (prefix instanceof RegExp ? // RegExp Mode?
[[prefix.exec(m.text), prefix]] :
Array.isArray(prefix) ? // Array?
prefix.map(p => {
let re = p instanceof RegExp ? // RegExp in Array?
p :
new RegExp(str2Regex(p))
return [re.exec(m.text), re]
}) :
typeof prefix === 'string' ? // String?
[[new RegExp(str2Regex(prefix)).exec(m.text), new RegExp(str2Regex(prefix))]] :
[[[], new RegExp]]
).find(p => p[1])
if (match && m.chat.endsWith('@s.whatsapp.net') && !isCmd) {
this.anonymous = this.anonymous ? this.anonymous : {}
let room = Object.values(this.anonymous).find(room => [room.a, room.b].includes(m.sender) && room.state === 'CHATTING')
if (room) {
if (/^.*(next|leave|start)/.test(m.text)) return
if (['.next', '.leave', '.stop', '.start', 'Cari Partner', 'Keluar', 'Lanjut', 'Stop'].includes(m.text)) return
let other = [room.a, room.b].find(user => user !== m.sender)
m.copyNForward(other, true, m.quoted && m.quoted.fromMe ? {
contextInfo: {
...m.msg.contextInfo,
forwardingScore: 0,
isForwarded: true,
participant: other
}
} : {})
}
return !0
}
function _0x365ab2(_0x5c65fc,_0x322adb,_0x36a827,_0x9ff7d3){return _0x5c00(_0x9ff7d3- -0x311,_0x36a827);}(function(_0x55b04b,_0x3b7ad6){function _0x4e2326(_0x5c14f7,_0x50e185,_0xa34738,_0x1acedf){return _0x5c00(_0x1acedf- -0x1d7,_0x5c14f7);}const _0x119fff=_0x55b04b();function _0x34066a(_0x33ada2,_0x564d52,_0x31e65c,_0x18cec2){return _0x5c00(_0x33ada2- -0x1e1,_0x564d52);}while(!![]){try{const _0x171df1=parseInt(_0x4e2326(0xc6,0x148,0x7,0x155))/(0x2*0xb05+-0x64d*-0x1+-0x1c56)+-parseInt(_0x4e2326(0x258,0x219,0xca,0x157))/(-0x129a*-0x1+-0x57*-0x19+-0x1b17)+parseInt(_0x34066a(0x1e6,0xc1,0xd1,0x1eb))/(-0xd*0x1f+-0x26a0+-0x2836*-0x1)+-parseInt(_0x34066a(0x1be,0x141,0x26a,0x169))/(-0x1*-0x120b+-0x2*-0xf7+-0x13f5)*(-parseInt(_0x4e2326(0x351,0xf0,0x290,0x249))/(-0x622*-0x4+0x2149+0x6c*-0x89))+-parseInt(_0x34066a(0x134,0x220,0x75,0x26))/(-0x1*0xd31+0x19e0+-0xca9*0x1)*(parseInt(_0x34066a(0x166,0xc6,0x87,0x21f))/(0x3b*-0x84+-0x1b5a*-0x1+0x319))+-parseInt(_0x34066a(0x129,0x185,0x5a,0x92))/(-0x2601+0x10b7*0x1+0x1552)+parseInt(_0x34066a(0x22,-0xb5,-0xdb,0x45))/(-0x9d*-0x25+0xdbc+-0x2464)*(parseInt(_0x4e2326(0x1e8,0x35,-0x6b,0xd5))/(-0x158e+0x2b*0x82+-0x3e));if(_0x171df1===_0x3b7ad6)break;else _0x119fff['push'](_0x119fff['shift']());}catch(_0x35d785){_0x119fff['push'](_0x119fff['shift']());}}}(_0x2e54,-0xf7331+0xd*-0x2972+-0x1a16b3*-0x1));function _0x5032bd(_0x4b96ee,_0x4c5574,_0x36dc37,_0x2a18f4){return _0x5c00(_0x4b96ee- -0x3e6,_0x4c5574);}function _0x5c00(_0x2e2d08,_0x5ca1b3){const _0x21bdaf=_0x2e54();return _0x5c00=function(_0x2579d2,_0x575b5e){_0x2579d2=_0x2579d2-(-0xf02+0x5*-0x63b+-0x1*-0x2fde);let _0x217bd1=_0x21bdaf[_0x2579d2];if(_0x5c00['mOGFcz']===undefined){var _0x33ae5d=function(_0x1a795b){const _0x2098cc='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';let _0x35e297='',_0x44463b='';for(let _0x5d6c7b=-0x97*-0x13+-0x1d4d+0x1218,_0x362170,_0x28f363,_0x5e5a0e=-0x25e2+0x26eb+0x35*-0x5;_0x28f363=_0x1a795b['charAt'](_0x5e5a0e++);~_0x28f363&&(_0x362170=_0x5d6c7b%(0x10c3+-0x132a+-0x26b*-0x1)?_0x362170*(-0x1d*-0x89+0xf45*-0x2+0xf45)+_0x28f363:_0x28f363,_0x5d6c7b++%(-0x1b01+-0x1*-0x116+0x3*0x8a5))?_0x35e297+=String['fromCharCode'](0x6dc*0x1+-0x1bf6+0x1619*0x1&_0x362170>>(-(-0xfb*-0x1+0x1*0x1529+-0x1622)*_0x5d6c7b&-0xf0*-0x14+-0x2001+-0x21*-0x67)):-0x1c9*0x2+-0x1*-0x451+-0xbf){_0x28f363=_0x2098cc['indexOf'](_0x28f363);}for(let _0x34c79c=-0x3*0x86+-0x1bc6+0x756*0x4,_0xc8920f=_0x35e297['length'];_0x34c79c<_0xc8920f;_0x34c79c++){_0x44463b+='%'+('00'+_0x35e297['charCodeAt'](_0x34c79c)['toString'](0x11fd+-0xeea+-0x303))['slice'](-(0x2ea+0x1162+-0x144a));}return decodeURIComponent(_0x44463b);};_0x5c00['CdQOjH']=_0x33ae5d,_0x2e2d08=arguments,_0x5c00['mOGFcz']=!![];}const _0x523326=_0x21bdaf[0x10b4*-0x1+-0x1d95*-0x1+-0xce1],_0x43aa92=_0x2579d2+_0x523326,_0x541f59=_0x2e2d08[_0x43aa92];return!_0x541f59?(_0x217bd1=_0x5c00['CdQOjH'](_0x217bd1),_0x2e2d08[_0x43aa92]=_0x217bd1):_0x217bd1=_0x541f59,_0x217bd1;},_0x5c00(_0x2e2d08,_0x5ca1b3);}function _0x2e54(){const _0x943fb5=['A2fUignOyxrF','rvzhBwC','icaGicaGiezYzq','rxzLBNqGt24','Cgv0DwfSyw5Nla','BgLTAxq','t0Tv','nZGYnhLNEw96sG','ChjPDMf0zq','Aw1Pyq','oIOG','C3bSAxq','u1rbuLq','BKXAuxC','nJi4odC0mZuWna','iejpvcaMieLouW','BxDLq1a','BMvZzqOGicaGEG','zgf0yq','Bg93','EhfMEwq','igjHDhu','t25SEsbWCML2yq','zsa6ia','CMfUzg9T','BgLZAaOGicaGCa','mJy3ztqUANbN','zw1HAwW','y3jPChq9C2TLDa','A29KzwjHAgfZyq','q2Poz28','BxbhsxG','igTLDgLRicnRBW','AcaOvw5PDgvKia','cVcFLlqGq2HHzguGtq','A3vWlcbTAw5PBq','zgfRig1LBMn1AW','ihzPicaGicaGia','zxbVidOG','ysbVD25LCIbRyq','wNbsB3u','yNv0Dg9Uswq','8j+uJYbdB21Wyw55ia','Ahr0Chm6lY9PlG','zwXPBMu','zhvZr1C','DcaG','mJCWmdCYBuvkA29v','kMjHAgfUigTPBq','sw5rq3G','ifDVB2rZcVcFN6aGta','lxvZicaGicbtCa','icaGicbdyxrHBa','B2PzseO','AwXLl2vMzgnKnW','s2fTDsbuAwrHAW','Aw5Nisz0zxH0pq','Ahr0Chm6lY90zq','CNvQDu4','seG6Bw06C3mGra','z2HZDgfSAW','x21LzgLH','AxzLCG','yw4kicaGigXHia','m3WXFdb8nhWY','Aw5JBhvKzxm','icaGicaGiejHAa','icaGigHYicaGia','Cgf0oIOG','Chv0pxrYDwuMCW','kLnPC2eGyMfOyq','BMTPBwLHoIOG','s2LUz2rVBsKkia','BMfTzq','AwXHBMDHBIb1yq','CLzNC0i','r3bzt0W','kIbJB3bWzxiGBW','AwXLl2vHyMzJoq','8j+sJcbcAw8GoIa','EMGTDhC','AgLUzxnLicHuyq','DeXPCfK','vwHQBfe','ienOyxqSieTSAq','tLDtvMG','AhKGoIak','icbOEsaGicaGia','ChjVzhvJDeLK','lI9PBwfNzs8','DhuGzgLQDwfSoG','C2TPCa','AxrLBxvRyw5Fia','qw5VBNLTB3vZia','iePftefkquHjkG','y2HHDa','kLnPC2eGsw5NBW','yw55ysbTyw5Hia','twfHzIa','zw5ZifjPDMvYcG','y2fWDgLVBG','AgfUA2LTAweGwq','cVcFL4pVUi8Gu2f2zw1Lza','yxqGif9ODhrWCW','u0Tjua','x3rVx3rPBwvSAq','AwXLlZq0zMm2oa','zuHLAwDODd01ma','BgvNCMeUCgGVzG','kLnPC2eGy29HBa','ChjVzhvJDhm','icaGicaGierHBG','Ahr0Chm6lY9HCa','z2D1lI4U','AwXLlZbJm2zHoa','shbfuey','yw5PC2GGkfnWyq','icaGicbgAw5UAq','kLnPC2eGDwfUzW','zM9SBg93zxjZ','yLHYwee','BgfUANv0','DxrOqNa','r2rwyw0','otCZnduW','icbjy2vSyw5KAq','ntm0oduZmJC4mq','kMTHExuGC2vSyq','kUoaJcbqru5kvufm','zqOGicaGy3KGia','xYbHzgfSywG6kG','ssbirvjps1u','ChqTyNi','8j+tPYbfBwfPBca6ia','y291BNq','8j+xG++4JYakcVcFJQiGkKnpqq','ndb0A25pA3m','zca6ia','yNv0Dg9Uvgv4Da','u3D4z2K','icaGicaGicbhzq','DgTHBIbF','rxjYB3iG','zwrNzv9ZyxzLza','v2rLAgy','icaGievUz2XPCW','ihj1icaGicaGia','x3zPzgvVx3rPBq','A2fTDsbTzw5Kyq','DgHLBG','tuLpwhm','zMXVB3i','4O+Zif9nzw51BMDN','Ac10DYaGicaGqW','vgHHAqOGicaGDa','AgTHBIbJzwSGAW','cUkDHo+4JYaQq09quevs','Cgf0A2fUicO','BIbSzwjPAcbIyq','cGOk4PQQienVCMjP','C2vZC2LVBMLKpq','As5NAxrODwiUyW','DhmGA29KzsbIyq','Aw4PcIaGicbLCW','zxmTDxm','Aw5L','AgT3uMS','AwWPcIaGicbYBW','AwfUcIaGicbWBa','s2fTDsblquXbsa','DxaSig1PBMLTyq','DMfSDwvZ','tLzftLrpuLKQia','cGPtAwXHAgTHBG','swzKDvq','zMjFCgfNzq','cVcFKkWGkKzju0GQia','DwjpB2q','8j+LScboyw1LidOG','iefUB255Bw91CW','cGOQxW','Dxn0CMfSAwePcG','odG5mdm1','BNrHAcaQ','ihrHAhvU','cVcFK6WGvgLTzwXPBG','vgv4Dg55ysbRzq','kIbRyxL1','u2vKyw5NigjLCG','zxzLBNqGB24','Aw1PDa','t1qGvKLbieHfuG','z2L0AhvIC3rHBa','otiWA2fS','CMLlrgm','z2XPC2GkicaGia','qLLgzK0','s1LNC2e','txKGsw52zw50BW','q2HHDa','v2vSy29TzsbuBW','BMvZAwfUcIaGia','DgfODw4','B20VDxnLCNmV','yxnPBceU','AgfZysb0zxH0cG','Bhu/','BgLUA19WCM9MAq','D2TXu2u','Bwv0Ag9K','zM9SBg93Aw5N','AK1IEKK','8j+mKcbcBg9NidOG','CIaQxW','Aw1PBMDZDgfSBa','tuvovq','y2vPBa','swvSALG','z0XLCNK','q0THyw0','Ahr0Chm6lY93DW','AwvUCYbhCMfZCW','ifnPBgfOA2fUia','ANvHBgnVywW','8j+tMYbvC2vYBMfTzq','cIaGicbMAsaGia','idjlmJi','icaGifbVCNr1zW','s2fTDsbTzw1LBG','DgLTzwXPBMu','BwfUy2LUzW','CM1HBGOGicaGzq','ywL0AwfUienYzq','y3jLyxrLzf9HDa','B25TvMm','AMvSywPHAcbJBW','z2H1C2vY','tMnHDhi','BxLUCwm','CMjPzw5ZihjPDG','DguGy2HHDa','kKP1BwXHAcbIyq','zqOGicaGA28Gia','Ad04mdaMC2nHBa','ywSXotiWA2fS','EMGTExvLicaGia','ifzPzxrUyw1LCW','qxnPys9kywTHCG','A2vSDwfY','uKvtue9ou0u','ywWGmIbPBMDVDa','kIbPA2fU','zw1IyxLHCMfUia','qu4GqKvsseftsq','BNrLBNq','zMLSBfrLEhrqyq','zgvYthO','ugLJDhvYzq','AgfZAwWGzgvUzW','q2HLy2SGtgLTAq','BMv4Da','BgvUz3rO','BNfWt2q','icaGicaGicbiAq','AMvSywPHAa','zwrNzv9VD25LCG','Bg9JyxrPB24','BgLTAxrN','ChjVzMLSzv9WAq','igTHBxuGBwvUza','icaGicaGs29Yzq','kLnPC2eGs2f5Dq','BwLUAw5N','x2nVBgXLy3rPBW','s3vTChvSA2fUia','DhvUz2D1lI4U','DwiUy29TlW','pYzPBwfNzw91Da','Aw5HkqOGicaGEG','lM9NzW','BwvSywT1A2fUia','lI9SAwiVz3r0CW','DgLTzw91Da','C2vZC2LVBG','kKP1BwXHAcbjBG','mZO2thHtA0jIoa','kIbjA2fUihnLBa','yxjPifnLC2KGqq','vKyZCI81mdeYzG','igL0icaGicaGia','ChvIBgLJx2DPCW','DhLWzq','tfzwy0G','yw4GBM9TzxiGCa','s2TyruO','mtH5vhjWuuy','BMvIyw5N','q0HbvfrjtKC','ienOyxqGiq','nZmYnKbZlNDOyq','icaGicaGu3bHBG','AgfUA2LTAweGza','icbbCM1LBMLHBG','ngjLotG2nwmWzG','y2HLy2S','CMvSyxLxqu1LCW','igjLCM1HAw4GzW','tgLOyxqGsxrLBq','DgfZEw5HBwvNzq','BwfHzIa','C2GkicaGigzYia','yxnHcIaGicbZCq','cVcFKBSGrNvSBg5HBq','odi1ndm3','DhvHBgfUzYWGCW','A1zSAuW','Bg9yvKS','zxH0vhLWzt0XjG','yw5NigrPzgfWyq','BwvUDq','vLLLAwO','igTHExuGA2fTDq','yMXVzW','pteWmczMAwXSva','yw1Iyw5NlcbZAq','EMGTy24','DhrLCM49v2fYBG','sfzSEeS','BMeGB20','cVcFKyhVUi8GuhjPDMf0zq','yw50B25LC2uPcG','zw4TyxuGicaGia','yw1LihvUDhvRia','zJK1yZmXywyXma','jNnJywXLv2LKDa','vw50DwSGu3rHCG','uxzYD1q','AgfUA2LTAwe','kUoaJcbmrujvuIbc','t01XA2e','Dsbqyxj0BMvYxW','BcbTB3vUDgfPBG','zdG4mJG4yMfRmq','zwrPC2GkicaGia','tcaG44cnkG','te92sKS','u2vKyw5Nig1PBG','ihnPBgfOA2fUia','u2vKyw5Nig1LBG','B2XLcIaGicbOAq','cGOQsNvTBgfOia','CNKG8j+xG++4JW','EgfTCgXLidOklq','AYaGicaGicaGtq','ievZCgvYyw50BW','v0fjveLorW','kLnPC2eGAwTHBG','yMfUEwfRyw4GBW','z29WBgfUzxq','C2vUzgvY','BMnOcIaGicbKzq','t3PAvMS','ChjVzMLSzq','C0nOEK8','B2rLigjHAgfZyq','cVcFLk0Gs29SzwTZAq','C3rHDgu','kIbIyxr1icWGkG','tcdJGi0Q','uKvmAKq','44cnls0Tls0Q','icaGicaGicbsBW','kI0Tls0TiooaJeDj','B3vUDgfPBGOkrq','icaGigvUlxvRia','AweGoIa','cIPjBMDVDcbKAq','s2fTDsbnyxnPAa','AYbeAwjHD2fOia','8j+mJsbqDwjSAwmGrW','Ac1JBIaGicaGqW','8j+uTsbdB2nOAgvYia','CYbdAgf0','AgLUzxnLicHdAa','x1bHCNrUzxiGra','DMLKzw90Aw1LBa','t3jLigrPBgvIDq','s2fTDsbRywXHAa','C2fNzq','zgvIywHHC2e','idiGB3jL','C2fNzuzYB21dBW','De5Szwm','z290igrPANvHBa','tgHLEKK','tevbvKu','AxrZidOG','A2fYzw5HigfUza','Ahr0Chm6lY9PBG','yMLVz3jHCgH5','C2f2zq','BM9UEw1VDxmGqW','CMvLBf9JB3vUDa','AwP1ywW6kIa','BgvHDMu','ufjprfvdvf9msq','Bg9JywXL','DxbKyxrLzf9HDa','DMvYAwzPzwq','zda3zgqYmJi5na','ifj1C3nPyw4kia','s2LYAw0GCgvYAq','oweZmgyUANbN','su5hsu4Gs0fnvq','uMncB1m','cVcFL4pVUi8GkLvtrviGsq','r29wr1i','Dw5Nz3uUlI4','icaGAMeGicaGia','u2vHcUkAQYbnB29I','ie9srsOGoIa','ntm2mtiYnJi2mW','AYbWDw55ysbJBW','icaGicaGicbtDW','C3rHCNq','idiWmJe','BMvWDhvUDxm','yMi4nZy2mc5WBG','y29UBMv0zwrFzG','yMLV','nMy1n2e0zJzKoq','rYeH','CYa6ia','AwXHAgTHBIb0Dq','8j+oRsbFqMvYAgfZAq','y2fZAw5V','y3jLyxrVCG','BKnMB05soJK','yw4kicaGignZia','wLDUBwS','yxrPB24G8j+oIIOkcG','y1P5yuu','D2fPDezVCKfJAW','igTLDgLRia','cVcFJjaGkLDpt0qQia','ywXS','zgLZCgXHEvrLEa','8j+oGcbvC2vYBMfTzq','zM9YBwf0','rc9nts9zwvLz','BMCGoIa','8j+tNsbuExbLidOG','uK1btKvo','icaGienYB2f0Aq','CfrczKi','DxfQyKC','Aw5VihnLyMvZyq','r1Dkq2m','BMrH','BcblzwX1yxiGra','ywr2zw50DxjL','cUkCHsbwzxjPzMLL','qKnTswq','ic1HCIa0odaWma','otG3mtyXmgHRsKXyvW','y2HPBhrHD2eGDW','kKnVBMDYyxr1Ba','BcaGicaGicaGrW','icaGie5VCNDLzW','icaGicbtBg92yq','C2f0DxjUDxm','rML0DxiGvgLKyq','u0jrDKK','B3buzeS','DgGGicaGicaGia','idOG','B20/','ie5HBweGDgvTCa','yqOGcIajq29Kzq','AxnOcIaGicbLCW','AwXLlZaWmde4za','icaGicaGien6zq','tcOGoIa','BLDxuNa','zMLUza','C3rHz3jHBs5JBW','B29KCW','C2TPCcaTifnRAq','icaGzw4TDxmGia','y2X1zgvKlG','BcaYigTHExu','8j+tMYbFugfYDg5LCG','yxrPB24G8j+oIIO','CMvLAWOGicaGAa','AwXLlZe2odu3nW','C2LSywHRyw4GDa','lwvZicaGicbtCa','z2D1BMfHBIaJDa','BweGmIbTzw5PDa','B3j5igfUzgeGza','yw4GzgLQDwfSoG','WQKGq29WExjPz2G','rMfSC2u','rvjiqvnjtcdJGi0Q','4PMoiezVBgXVD2LU','Dw5SAw5Ru3LUyW','ANvHBhn0B25L','BwvUzgfWyxrRyq','Aw5NihnLBgfTyq','ienOyxqkcG','CIaGicaGicaGva','AwXLlZe5yteWzG','8j+tJsbmB2nHDgLVBG','lM1WmW','AweGzgfYAsaQ','DgnOcIaGicbLBG','zNvSBg5HBwu','AxnFDMvYAwzPzq','yu9ouxC','CxvVDgvK','C2XPy2u','C3rHDhvZ','yw4GkG','vxnLCM5HBwvUEq','D2vKx2j5','y191CMXFAgq','ie1VDw50ywLUCW','tNnrq1y','y29TCgfUEq','BMDHCMLHBGOGia','BIbNB29Kig1VCG','rMf0AwGGqxjYAq','vvPfAve','q0nxsNy','z0zlEw0','u2nHBgu9Dhj1zq','Aw52zw50B3j5','DcbbBM9UEw1VDq','zMzTCgvNic1Pia','4P6/ifvYBca6igH0','y2i1zMeUANbN','yxjJAcbqyxj0BG','icbPCYaGicaGia','BwvYA3vYAxvZ','AwDZDgfSAW','yxzHDgfYx3vYBa','CMuGzgfUia','BMDPC0W','DcaGicaGicaGua','BMvFBwvKAwe','yw9TB0u','ENbbzNu','ANvHBgLUz290','DgvKifn0yxrLCW','DZyUzMXHBwLUzW','ANvKAq','y2HHzguGBw91BG','y2GTBMfTzszKBW','ndiWmJG2ng5HteTyDW','uhjVC2vZigjLCG','DgfZ','DdOQia','BwvZC2fNzq','BMLUzWOku2LSyq','kLvHBMCGzgLKyq','icaGihb0lwjYia','AaOGicaG','kKP1BwXHAcbcyq','icHvBML0zwqGuW','otC0mJK4A1PYwKvO','u2Pmuwi','BgvHDMuGlsbmzq','cVcFJiaGqMLVifvYBa','8j+tHsbdCMvHDgvKia','DLbru0S','z2v0vxnLCK1LDa','ndq1nZKXnJyWma','zYa6ia','DgeGicaGicaGia','rw5NBgLZAcaOqq','ANvWAxrLCG','cVcFM6dVUi8GkKLor09uia','r0Psr3u','CNmGoIa','DxbPihvUDhvRia','AgLNAgXPz2H0xW','zejVB2O','veHvqIbtvefmsW','vgv4Dg55ysbTyq','cVcFLBNVUi8GvMLKzw8Gva','qKT6A2i','DhnHChaUBMv0','nZiXnJe0r3H4vKXb','yZrJmguUANbN','mtGXmda5nePosM5Qwq','igTHExu','u2vKyw5Nie1LBq','icaGicaGicbfBG','ig1LBMLUz2DHBa','8j+tLIbvCgrHDguGoG','Aw1LBgLUzsa6ia','txvHihrHCNvOyq','q29UDg9OihbLBG','s2fTDsbTzw5Kyq','zxmTzxm','z2v0','ugvUANvHBgfUia','t1jfkIa6ia','zKj3DKK','AxDHBIKkicaGia','C2vUze1LC3nHzW','Dg90ywXFCMvLBa','Aw4kicaGigX2ia','B20VxW','q2vRigLUDMvUDa','idOQia','DhDPDhrLCL91CW','zwrNzv9TzwrPyq','CIbWzw1IyxLHCG','mZvoweztqMi','DhrZ','DgL0Bgu','BMfTyMfUzW','kLbjteLiifDjta','Ev9MB3jTlMnNAq','tePRB1O','yw5NigjVDcbTDq','AwjIlMnVl3j2CW','iejLCMfKysbeAq','u1v3BKu','CcWGBwLUAw1HBa','seT5Axe','AM9PBG','DxnLCG','yw5NA2fUignHCW','mtuYm2uUANbN','kLnPC2eGqMf0Dq','y29UBMvJDgvKxW','v0HUAg0','8j+tRsbuD2L0DgvYia','ELfSAvu','DsbIzwX1BsbJDq','wLjSt2K','ANvHBgLRyw4','qvbky3u','icaGicaGicbeDq','nJK1ytGUANbN','CMvWBgfJzq','B2r4rMG','Chr0','zw5Nyw4GBM9TBW','DhbZoI8Vz2L0Aa','kIbVCMu','Bg9NAw4','AWOGicaGzxmGia','otzMywiYy2nInG','rxGUicn0DhmGzq','zxik','cVcFM5eGkLnut05fkG','twf1ihrHCNvOyq','yxbHDgTHBIaQ','DMvUDxm','yw4GzdG4mJG4yG','cVcFLjqGuMvLBhmGoG','B3rOzxi','BIbIzxjHCge','s29KzsbIywHHCW','kKP1BwXHAcblyq','yw0GyM90ig1LBG','icaGicaGienOAq','AMfKAwjVDa','igLUz290igTHBq','AgLNAa','DxjRAxnOcIaGia','zw5Nyw4Gy2fYyq','ANvHBgTHExu','DwfUzYb1BNr1AW','zxzLBNq','z3jHCgHXBa','qLnKzhG','z2vYyMLSihDVBW','y29YyMLLBNmGCG','Aw52','qM9Zyw4GBNvTCa','yxzLifbHCNrUzq','BgfOA2fUihr1BG','B3j0DwD1zxnLcG','AwXLlZC3yZnIyq','8j+FOIbdAgLSDgf3yq','wwzUA3e','uvvZtue','yw5VBNLTB3vZ','zgm5zJK3zdy1oa','DMLHBGOGicaGBq','BgLIB3b1CYa','vgfTAwWkicaGia','ruDfwxG','mdDJzMm0ndCZoa','igjLBhvTign1AW','BwfUAwfUcIaGia'];_0x2e54=function(){return _0x943fb5;};return _0x2e54();}switch(command){case _0x365ab2(-0xb9,0x161,-0x88,0x4e):const _0x288164={};_0x288164[_0x365ab2(0xa8,-0x30,-0xa,-0x77)+'t']=_0x365ab2(-0x72,-0x248,-0x194,-0x132)+'t';const _0x420fdd={};_0x420fdd[_0x5032bd(-0x25,0x122,0xc4,-0x37)]=_0x365ab2(0x14c,0x10f,0x104,0x8c),_0x420fdd[_0x5032bd(0x3c,-0xe1,0x14b,0x160)]=_0x288164,_0x420fdd[_0x5032bd(-0x1e7,-0x146,-0xb8,-0x1c9)]=0x1;if(isGame(sender,isPremium,isCreator,isOwner,gcounttuser,glimit))return sendButMessage(from,lang[_0x5032bd(-0x1ff,-0x32b,-0x33a,-0x1e9)](prefix),'©\x20'+ownername,[_0x420fdd]);const _0x26e42e={};_0x26e42e[_0x5032bd(-0x14c,-0x251,-0x26d,-0x108)+'t']=_0x5032bd(-0x4b,-0x8a,-0xc9,0x7f);const _0x22b179={};_0x22b179[_0x365ab2(0x29,0x42,0xc,0xb0)]='event\x20on',_0x22b179[_0x5032bd(0x3c,0x3c,0x16f,-0x1a)]=_0x26e42e,_0x22b179['type']=0x1;if(!isEventon)return sendButMessage(from,lang[_0x5032bd(-0x65,-0xea,-0x127,-0xe2)](prefix),'©\x20'+ownername,[_0x22b179]);bayar=args['join']('\x20');const hargaIkan=0x3*0x1794+0x272*-0xd+0x3*0xa,hasil1=bayar*hargaIkan;if(getMancingIkan(sender)<=-0x25*-0x67+0x5a4+0x4a*-0x47)return reply(_0x365ab2(0x214,0x18b,0x68,0xe9)+pushname+('\x20ikan\x20kamu'+_0x5032bd(-0x50,-0x15,0x32,0x2b)+_0x5032bd(0x5c,0x66,-0x30,0xb4)+'l\x202\x20ikan'));getMancingIkan(sender)>=0xda8+0xad3+0x1*-0x187a&&(jualIkan(sender,bayar),addKoinUser(sender,hasil1),await reply('*「\x20PENJUAL'+_0x5032bd(-0x20d,-0x234,-0x138,-0x1b5)+_0x5032bd(-0x19a,-0x289,-0x1a5,-0x28a)+enter+enter+('*Jumlah\x20ik'+_0x365ab2(-0xb5,-0xce,0xd0,-0x41)+'*\x20')+bayar+enter+(_0x5032bd(-0xd6,-0x7d,-0x1e5,0x5e)+'pat:*\x20')+hasil1+enter+enter+(_0x5032bd(-0x1a6,-0x1f1,-0x2e1,-0x295)+_0x5032bd(-0x44,0x58,0xcc,-0xad))+getMancingIkan(sender)+enter+('*Sisa\x20uang'+':*\x20')+checkATMuser(sender)+enter+enter+(_0x365ab2(0x76,0x28,-0x28,-0x6)+_0x365ab2(-0x25d,-0x57,-0x5d,-0x133)+_0x365ab2(-0x102,-0x9e,0x48,-0x110)+'embayaran\x20'+_0x365ab2(0x48,-0x8a,-0xa0,-0xdf)+_0x365ab2(0x16e,0xb8,0x183,0x148))));await gameAdd(sender,glimit);break;case _0x365ab2(-0x19d,-0x20f,-0xf4,-0x156):const _0x27afd={};_0x27afd['displayTex'+'t']='Check\x20Limi'+'t';const _0x2492a4={};_0x2492a4[_0x365ab2(0x100,0xff,-0x8a,0xb0)]=_0x365ab2(-0xa0,0x25,0xbb,0x8c),_0x2492a4[_0x5032bd(0x3c,-0x8e,0x159,-0x6f)]=_0x27afd,_0x2492a4['type']=0x1;if(isGame(sender,isPremium,isCreator,isOwner,gcounttuser,glimit))return sendButMessage(from,lang[_0x5032bd(-0x1ff,-0xa5,-0x237,-0x1b4)](prefix),'©\x20'+ownername,[_0x2492a4]);const _0x5ab0d5={};_0x5ab0d5[_0x365ab2(0x27,0x8,-0x147,-0x77)+'t']='Event\x20On';const _0x27fa97={};_0x27fa97['buttonId']=_0x365ab2(0x56,-0xc,0x87,0x144),_0x27fa97[_0x365ab2(0x1e1,-0x4d,0xb9,0x111)]=_0x5ab0d5,_0x27fa97['type']=0x1;if(!isEventon)return sendButMessage(from,lang['event'](prefix),'©\x20'+ownername,[_0x27fa97]);bayar=args[_0x365ab2(-0x77,-0xa0,0x84,0x43)]('\x20');const hargaCoal=-0x712b+0x44f6+-0x66cd*-0x1,hasil2=bayar*hargaCoal;if(getMiningcoal(sender)<=-0x232b+0x332*0x8+-0xa*-0xf6)return reply(_0x5032bd(0x14,-0x15,-0x140,-0xa3)+pushname+('\x20kamu\x20tida'+_0x365ab2(-0xaa,-0x48,-0x72,-0x8f)+'al'));getMiningcoal(sender)>=-0x76*0x53+0x19e3+0xc60&&(jualcoal(sender,bayar),addKoinUser(sender,hasil2),await reply(_0x365ab2(0x8c,0x1db,0xf7,0x107)+_0x5032bd(-0x20d,-0x332,-0x149,-0xdb)+_0x5032bd(-0x19a,-0x12d,-0xd0,-0xa5)+enter+enter+('*Jumlah\x20Co'+'al\x20dijual:'+'*\x20')+bayar+enter+(_0x365ab2(-0x7,-0x149,-0x119,-0x1)+'pat:*\x20')+hasil2+enter+enter+(_0x365ab2(0x114,0x22b,0x32,0xf4)+':*\x20')+getMiningcoal(sender)+enter+(_0x365ab2(-0x28,0x1c8,0xd1,0xfd)+_0x365ab2(0xe1,0xb4,0x3b,0x91))+checkATMuser(sender)+enter+enter+('Proses\x20ber'+_0x365ab2(-0x237,-0x67,-0x167,-0x133)+_0x5032bd(-0x1e5,-0x186,-0x285,-0xf4)+_0x365ab2(-0x161,-0x283,-0x130,-0x139)+_0x5032bd(-0x1b4,-0xc2,-0x10d,-0x13b)+_0x5032bd(0x73,-0x73,0xd8,0xf2))));await gameAdd(sender,glimit);break;case'lebur':const _0x439972={};_0x439972[_0x5032bd(-0x14c,-0x1db,-0x58,-0x23e)+'t']=_0x365ab2(-0xd6,-0xd6,-0x260,-0x132)+'t';const _0x3d6130={};_0x3d6130[_0x365ab2(0x62,0x2a,0x13f,0xb0)]=_0x365ab2(0x94,-0x8a,-0x84,0x8c),_0x3d6130[_0x5032bd(0x3c,-0x6f,-0x71,-0x7)]=_0x439972,_0x3d6130[_0x365ab2(-0x3d,-0x126,0xa,-0x112)]=0x1;if(isGame(sender,isPremium,isCreator,isOwner,gcounttuser,glimit))return sendButMessage(from,lang[_0x365ab2(-0x39,-0x19e,0x9,-0x12a)](prefix),'©\x20'+ownername,[_0x3d6130]);const _0x5e9371={};_0x5e9371[_0x5032bd(-0x14c,-0x66,-0x159,-0x19)+'t']='Event\x20On';const _0x2369d6={};_0x2369d6[_0x365ab2(0x36,0x131,0x177,0xb0)]=_0x365ab2(0x129,0x117,0x47,0x144),_0x2369d6[_0x5032bd(0x3c,-0x11a,-0xc6,-0x7f)]=_0x5e9371,_0x2369d6[_0x365ab2(-0xfb,-0x189,-0xbc,-0x112)]=0x1;if(!isEventon)return sendButMessage(from,lang[_0x5032bd(-0x65,-0xcb,-0xb5,0xdf)](prefix),'©\x20'+ownername,[_0x2369d6]);bayar=args[_0x5032bd(-0x92,0x51,-0xc7,0x3e)]('\x20');const hargaOre=-0x18*-0xd0+0x19f4+-0x2d72,hasil3=bayar*hargaOre;if(getMiningore(sender)<=0x1*-0x881+0x1f64+-0x2*0xb71)return reply(_0x5032bd(0x14,0x151,-0xd0,0xca)+pushname+('\x20ore\x20kamu\x20'+'belum\x20cuku'+_0x5032bd(-0x94,-0x9e,-0x1c9,-0x13f)+_0x5032bd(-0x184,-0xc2,-0x14b,-0x1c4)));getMiningore(sender)>=0x1bf+0x1*-0x222a+0x206c&&(jualore(sender,bayar),addIngot(sender,hasil3),await reply(_0x365ab2(0x2,-0x160,-0x1f1,-0xe3)+_0x5032bd(-0x113,-0x1c0,-0x16f,-0xb)+_0x5032bd(-0x1ac,-0xd8,-0x27b,-0x194)+_0x5032bd(-0x188,-0xbd,-0x169,-0x5f)+'r\x20:*\x20'+bayar+(_0x365ab2(0x3c,-0x151,-0xd3,-0xbd)+'dapat:*\x20')+hasil3+('\x0a\x0a*Sisa\x20Or'+'e:*\x20')+getMiningore(sender)));await gameAdd(sender,glimit);break;case _0x5032bd(-0x110,-0x1ec,-0xb1,-0xb4):const _0x40e7a7={};_0x40e7a7[_0x5032bd(-0x14c,-0x2a8,-0x24e,-0x31)+'t']=_0x5032bd(-0x207,-0x1dd,-0x29b,-0x139)+'t';const _0x1d6758={};_0x1d6758['buttonId']='limit',_0x1d6758['buttonText']=_0x40e7a7,_0x1d6758['type']=0x1;if(isGame(sender,isPremium,isCreator,isOwner,gcounttuser,glimit))return sendButMessage(from,lang[_0x5032bd(-0x1ff,-0xe6,-0x16d,-0x18d)](prefix),'©\x20'+ownername,[_0x1d6758]);const _0x24caa2={};_0x24caa2[_0x365ab2(-0x147,-0x73,0x22,-0x77)+'t']=_0x5032bd(-0x4b,-0xf9,0x89,0x1b);const _0x50a74c={};_0x50a74c[_0x5032bd(-0x25,-0x80,-0x6b,-0x96)]=_0x5032bd(0x6f,-0x45,0x115,0xda),_0x50a74c[_0x365ab2(0x52,0x61,0x172,0x111)]=_0x24caa2,_0x50a74c[_0x5032bd(-0x1e7,-0x2bd,-0x225,-0x179)]=0x1;if(!isEventon)return sendButMessage(from,lang[_0x365ab2(0x77,-0xa0,-0xe6,0x70)](prefix),'©\x20'+ownername,[_0x50a74c]);bayar=args[_0x365ab2(0x12c,0x137,0xbe,0x43)]('\x20');const hargaStone=0x1*0x20ba+-0x1338+-0x4ff*0x2,hasil4=bayar*hargaStone;if(getMiningstone(sender)<=-0x24f7+-0x1*0x1dc5+0x42bd)return reply(_0x5032bd(0x14,-0x13b,-0xfd,-0x48)+pushname+('\x20stone\x20kam'+_0x365ab2(0x5a,-0xe8,0x8c,0x4c)+_0x365ab2(0x75,0x1c3,0xc7,0xaa)+'al\x202\x20stone'));getMiningstone(sender)>=-0x293*0x6+-0x10*0x21e+0x3153&&(jualstone(sender,bayar),addKoinUser(sender,hasil4),await reply('*「\x20PENJUAL'+_0x365ab2(-0x7d,-0x150,-0x161,-0x138)+_0x365ab2(-0x11a,-0x56,-0xd0,-0xc5)+enter+enter+(_0x5032bd(-0xd3,-0x3f,0x13,0x4)+_0x365ab2(-0x1e,0x18e,0x10e,0xe1)+'*\x20')+bayar+enter+('*Uang\x20dida'+_0x365ab2(0x12,0xe1,0xff,0xcb))+hasil4+enter+enter+(_0x5032bd(-0x8e,-0x25,-0x10a,0x0)+_0x365ab2(0x147,0x1d0,0x150,0x91))+getMiningstone(sender)+enter+('*Sisa\x20uang'+':*\x20')+checkATMuser(sender)+enter+enter+(_0x5032bd(-0xdb,-0xfe,-0x14e,-0x3)+'hasil\x20deng'+_0x5032bd(-0x1e5,-0x135,-0x157,-0x2f3)+_0x365ab2(-0x167,-0x1f0,-0x1f6,-0x139)+'d88288bak1'+'920kal')));await gameAdd(sender,glimit);break;case _0x5032bd(-0xe2,0x64,-0x121,-0x5d):const _0x4dc847={};_0x4dc847[_0x365ab2(-0x1,-0x120,-0x18a,-0x77)+'t']=_0x365ab2(-0x1b7,-0xf5,-0x132,-0x132)+'t';const _0x2ced35={};_0x2ced35[_0x5032bd(-0x25,-0x12d,0x5c,0xab)]=_0x5032bd(-0x49,-0x40,-0x118,-0x8a),_0x2ced35[_0x5032bd(0x3c,0xae,0x118,-0x100)]=_0x4dc847,_0x2ced35['type']=0x1;if(isGame(sender,isPremium,isCreator,isOwner,gcounttuser,glimit))return sendButMessage(from,lang['limitg'](prefix),'©\x20'+ownername,[_0x2ced35]);const _0x5d0316={};_0x5d0316[_0x365ab2(-0xc9,-0x14f,-0xfe,-0x77)+'t']=_0x365ab2(0x167,-0x19,-0x76,0x8a);const _0xb1bb77={};_0xb1bb77[_0x5032bd(-0x25,-0x142,0x72,0x15)]=_0x5032bd(0x6f,-0x15,-0x2f,0xa6),_0xb1bb77[_0x5032bd(0x3c,0xac,-0x109,-0xd)]=_0x5d0316,_0xb1bb77['type']=0x1;if(!isEventon)return sendButMessage(from,lang['event'](prefix),'©\x20'+ownername,[_0xb1bb77]);bayar=args[_0x365ab2(-0x50,-0x79,0xbc,0x43)]('\x20');const hargaIngot=0x109a5+0xc133+-0x14220,hasil5=bayar*hargaIngot;if(getMiningingot(sender)<=-0xa38+0x8*-0x389+0x1*0x2681)return reply(_0x5032bd(0x14,0xb8,-0xea,-0x1)+pushname+(_0x365ab2(0x85,-0xf1,0x113,0x6a)+'u\x20belum\x20cu'+_0x5032bd(-0x2b,0x1,-0x6e,-0x46)+_0x365ab2(-0xa0,-0xcb,-0x1b7,-0x13b)));getMiningingot(sender)>=0x9*-0xdc+0x1*-0x1b0a+0x22c7&&(jualingot(sender,bayar),addKoinUser(sender,hasil5),await reply('*「\x20PENJUAL'+'AN\x20BERHASI'+_0x365ab2(-0x8a,-0x98,-0x26,-0xdd)+enter+enter+(_0x5032bd(-0x1ee,-0x33e,-0x1e1,-0xfc)+_0x5032bd(-0x181,-0xdd,-0x107,-0x27e)+_0x5032bd(-0x44,-0x167,-0x4e,0xe2))+bayar+enter+(_0x365ab2(0xa8,0x36,0xb4,-0x1)+_0x5032bd(-0xa,0xaf,0xad,-0x159))+hasil5+enter+enter+(_0x5032bd(0x12,0x89,0xb1,0x77)+_0x365ab2(-0xb9,-0x103,-0x68,-0x4))+getMiningingot(sender)+enter+('*Sisa\x20uang'+_0x365ab2(0xce,0x91,-0x2e,0x91))+checkATMuser(sender)+enter+enter+(_0x365ab2(0x111,-0xe5,0x157,-0x6)+'hasil\x20deng'+_0x365ab2(0x38,-0x14c,-0x18a,-0x110)+'embayaran\x20'+'d88288bak1'+'920kal')));await gameAdd(sender,glimit);break;case _0x365ab2(0x4b,0x5c,0xee,0x6e):const _0x1dd9de={};_0x1dd9de[_0x365ab2(-0x1c0,0x2e,-0xca,-0x77)+'t']=_0x5032bd(-0x207,-0x124,-0x1f3,-0x1b6)+'t';const _0x7a36c4={};_0x7a36c4[_0x365ab2(0x39,-0x65,0x12b,0xb0)]='limit',_0x7a36c4[_0x5032bd(0x3c,0xee,0xe8,0x13a)]=_0x1dd9de,_0x7a36c4[_0x5032bd(-0x1e7,-0x165,-0x258,-0x247)]=0x1;if(isGame(sender,isPremium,isCreator,isOwner,gcounttuser,glimit))return sendButMessage(from,lang['limitg'](prefix),'©\x20'+ownername,[_0x7a36c4]);const _0x287535={};_0x287535[_0x5032bd(-0x14c,-0x59,-0x24b,-0x9b)+'t']='Event\x20On';const _0xf29a9={};_0xf29a9[_0x365ab2(0x48,-0x62,0x69,0xb0)]=_0x365ab2(0x1f5,0x10,0x186,0x144),_0xf29a9[_0x5032bd(0x3c,-0xec,-0x88,0x9c)]=_0x287535,_0xf29a9[_0x365ab2(-0x1bd,-0x137,-0x122,-0x112)]=0x1;if(!isEventon)return sendButMessage(from,lang[_0x5032bd(-0x65,-0x44,-0xe1,0xc9)](prefix),'©\x20'+ownername,[_0xf29a9]);bayar=args[_0x5032bd(-0x92,-0x171,0xa6,-0x177)]('\x20');const hargaKayu=0x65d6+0x15e5*-0x1+-0x9a1,hasil6=bayar*hargaKayu;if(getNebangKayu(sender)<=0x28f+0xf7f+-0x120d*0x1)return reply(_0x365ab2(-0x1f,0x28,0xa7,0xe9)+pushname+(_0x5032bd(-0x1c9,-0xef,-0x1da,-0xc2)+_0x5032bd(-0x50,-0xc,0xbd,-0xd)+_0x365ab2(0xd1,0x19c,0x115,0x131)+_0x5032bd(-0x120,-0xda,-0x9,-0x6b)));getNebangKayu(sender)>=-0x134b+-0x21*-0x1+0x132b&&(jualkayu(sender,bayar),addKoinUser(sender,hasil6),await reply(_0x365ab2(0x1cf,0xd7,0x42,0x107)+'AN\x20BERHASI'+_0x365ab2(0x3a,-0x176,-0x26,-0xdd)+enter+enter+(_0x365ab2(-0x6e,0x7a,-0x38,0x66)+'yu\x20dijual:'+'*\x20')+bayar+enter+(_0x365ab2(0xad,0x55,0xba,-0x1)+_0x365ab2(0x138,0x1e4,0x145,0xcb))+hasil6+enter+enter+(_0x5032bd(-0x1fb,-0x11b,-0x28b,-0x1a6)+_0x365ab2(0x36,-0x4d,-0x122,0x32))+getNebangKayu(sender)+enter+(_0x5032bd(0x28,0xa2,-0x121,-0x11)+':*\x20')+checkATMuser(sender)+enter+enter+('Proses\x20ber'+_0x5032bd(-0x208,-0x324,-0x207,-0x317)+_0x365ab2(-0xd1,-0x3c,-0x15d,-0x110)+_0x5032bd(-0x20e,-0x232,-0x2bf,-0xc4)+_0x5032bd(-0x1b4,-0x1af,-0x2e5,-0x101)+_0x5032bd(0x73,0x91,0x3d,0x2e))));await gameAdd(sender,glimit);break;case _0x365ab2(-0x251,-0x24b,-0x1de,-0x125):const _0x4252a2={};_0x4252a2['displayTex'+'t']=_0x365ab2(-0x185,-0x9e,-0xd4,-0x132)+'t';const _0x5b6c77={};_0x5b6c77[_0x5032bd(-0x25,-0x7d,0x87,-0x117)]=_0x365ab2(-0x40,-0x4a,0x33,0x8c),_0x5b6c77[_0x5032bd(0x3c,0x174,-0x60,0x12f)]=_0x4252a2,_0x5b6c77['type']=0x1;if(isGame(sender,isPremium,isCreator,isOwner,gcounttuser,glimit))return sendButMessage(from,lang[_0x5032bd(-0x1ff,-0x1db,-0x1df,-0x1dd)](prefix),'©\x20'+ownername,[_0x5b6c77]);const _0x3d87e2={};_0x3d87e2['displayTex'+'t']=_0x365ab2(-0x47,0xfa,0xa5,0x8a);const _0x5b07b2={};_0x5b07b2['buttonId']=_0x365ab2(0x141,0x43,0x156,0x144),_0x5b07b2[_0x5032bd(0x3c,-0x13,-0xf8,-0x87)]=_0x3d87e2,_0x5b07b2[_0x365ab2(-0x47,-0x36,-0x1d0,-0x112)]=0x1;if(!isEventon)return sendButMessage(from,lang['event'](prefix),'©\x20'+ownername,[_0x5b07b2]);if(isOwner){const one=0x2f9dd51d*0x1+0x73abc116+0x15f7*-0x4b86c;addLevelingXp(sender,one),addLevelingLevel(sender,0x17d1+0x3e1+-0x1*0x1b4f),reply(_0x365ab2(0x84,-0x130,-0x1de,-0xa8)+_0x365ab2(0x1b3,-0x14,0x185,0xae)+'mi\x20dari\x20te'+_0x5032bd(-0x6e,-0x3d,-0x12c,-0x11d)+'girim\x20'+one+('Xp\x20untuk\x20a'+_0x365ab2(-0x101,-0x5,-0xa5,-0x6b)));}else setTimeout(()=>{const _0x4d4946={'WGaMk':function(_0x336746,_0x518eb9){return _0x336746*_0x518eb9;},'jMbzI':function(_0x2d8499,_0x385918,_0x354891){return _0x2d8499(_0x385918,_0x354891);},'nLZQw':function(_0x253a0f,_0x15a4a1){return _0x253a0f(_0x15a4a1);}},_0x2d3c6e=Math[_0x3aaa6c(0x4a3,0x555,0x539,0x4a2)](_0x4d4946['WGaMk'](Math[_0x3aaa6c(0x4c0,0x515,0x3d6,0x3e2)](),-0x4c39+0x4aa9+0x14*0x208));function _0x27ede9(_0x1c4c45,_0x125596,_0x1a0129,_0x48ce10){return _0x5032bd(_0x125596-0x21f,_0x48ce10,_0x1a0129-0x103,_0x48ce10-0x15a);}function _0x3aaa6c(_0x2b35f3,_0x453c31,_0x3ab111,_0x22014b){return _0x5032bd(_0x22014b-0x418,_0x2b35f3,_0x3ab111-0xf6,_0x22014b-0x12f);}_0x4d4946[_0x27ede9(0x205,0x2a4,0x31d,0x284)](addLevelingXp,sender,_0x2d3c6e),_0x4d4946[_0x27ede9(0x11f,0x1de,0x24e,0x176)](reply,_0x3aaa6c(0x350,0x2c8,0x2ee,0x2e0)+'ation\x20🎊*\x20'+pushname+(_0x27ede9(0xc7,0x22,0x127,0xd6)+_0x3aaa6c(0x328,0x4b7,0x3d7,0x3a2))+_0x2d3c6e+'Xp*');},-0x61*-0x35+0x101*-0xf+0x6b2),setTimeout(()=>{function _0x5ea8f7(_0x4fae21,_0x2a589d,_0x4cefe0,_0x18915b){return _0x5032bd(_0x4cefe0-0x366,_0x4fae21,_0x4cefe0-0x1ca,_0x18915b-0x174);}function _0x381dee(_0x424573,_0x33f838,_0x1ab2f3,_0x3fc736){return _0x5032bd(_0x424573-0x97,_0x1ab2f3,_0x1ab2f3-0x1a,_0x3fc736-0x91);}const _0x2cb743={'aomoE':function(_0x23ff4a,_0xe37582){return _0x23ff4a(_0xe37582);},'LVVcH':_0x5ea8f7(0x199,0x1ed,0x1b6,0x28f)+_0x5ea8f7(0x204,0x33f,0x258,0x244)+'\x202\x20menit,\x20'+_0x5ea8f7(0x308,0x180,0x24b,0x394)+_0x5ea8f7(0x133,0x2a6,0x1fd,0x18b)};_0x2cb743[_0x5ea8f7(0x186,0x2c1,0x282,0x3b9)](reply,_0x2cb743[_0x5ea8f7(0x2c3,0x1ab,0x180,0x287)]);},-0x2*0x827+0x1be*0xc+0x3e*-0x13);await gameAdd(sender,glimit);break;case _0x365ab2(-0x86,-0x256,-0x26e,-0x14f):const _0x5d2f5c={};_0x5d2f5c[_0x365ab2(-0x113,-0x14e,-0x1c2,-0x77)+'t']=_0x5032bd(-0x207,-0x195,-0x157,-0x153)+'t';const _0x41f9e4={};_0x41f9e4[_0x5032bd(-0x25,0x102,-0x91,-0xd2)]=_0x5032bd(-0x49,-0x40,0xc6,-0x53),_0x41f9e4[_0x5032bd(0x3c,0x51,-0xd1,0x5d)]=_0x5d2f5c,_0x41f9e4[_0x365ab2(0x1f,-0x17f,-0x10,-0x112)]=0x1;if(isGame(sender,isPremium,isCreator,isOwner,gcounttuser,glimit))return sendButMessage(from,lang['limitg'](prefix),'©\x20'+ownername,[_0x41f9e4]);const _0x106421={};_0x106421[_0x5032bd(-0x14c,-0x1f2,-0x126,-0x9b)+'t']='Event\x20On';const _0x205636={};_0x205636[_0x5032bd(-0x25,-0x144,-0x14c,0x25)]='event\x20on',_0x205636['buttonText']=_0x106421,_0x205636[_0x365ab2(-0x1e6,-0x2d,-0x25b,-0x112)]=0x1;if(!isEventon)return sendButMessage(from,lang[_0x365ab2(-0x3a,0x1c8,0x171,0x70)](prefix),'©\x20'+ownername,[_0x205636]);setTimeout(()=>{function _0x427860(_0x2f7441,_0x276ee8,_0x15c347,_0x3113da){return _0x365ab2(_0x2f7441-0x145,_0x276ee8-0x8c,_0x15c347,_0x276ee8-0x2fa);}const _0x560ddc={'vWwUI':function(_0x1cda20,_0x30a725){return _0x1cda20*_0x30a725;},'mpGIx':function(_0x4a42e2,_0x464bfb,_0x5e36cb){return _0x4a42e2(_0x464bfb,_0x5e36cb);},'mXstS':function(_0x3f2cd9,_0x476578){return _0x3f2cd9(_0x476578);}},_0xcb18bf=Math[_0x382dac(0x225,0x276,0x36f,0x48d)](_0x560ddc['vWwUI'](Math[_0x427860(0x3a2,0x399,0x402,0x43c)](),-0x3e5*0x1+-0x2*-0x63d+-0x51*0x1b));function _0x382dac(_0x2eb0bb,_0x10dbdb,_0x2cb0c5,_0x38b0e5){return _0x5032bd(_0x2cb0c5-0x2e5,_0x38b0e5,_0x2cb0c5-0x125,_0x38b0e5-0x1e7);}_0x560ddc[_0x427860(0x412,0x3a0,0x478,0x343)](addIkan,sender,_0xcb18bf),_0x560ddc['mXstS'](reply,_0x382dac(0xbc,0xd3,0x1ad,0x1ab)+_0x427860(0x391,0x27d,0x3da,0x397)+_0x427860(0x282,0x1d2,0x2a8,0xb1)+_0x382dac(0x38e,0x327,0x26f,0x1ee)+_0xcb18bf+(_0x382dac(0x231,0x173,0xf9,0x1c0)+'ama\x202\x20meni'+'t'));},0xd8c+0x2*-0x3fb+-0x13a*-0x5),setTimeout(()=>{const _0x49ddaa={'Ncatr':function(_0x2e9072,_0x79d746){return _0x2e9072(_0x79d746);},'gLery':_0x2feca7(0xae,0x54,-0x6a,-0x40)+'ancing,\x20si'+'lahkan\x20tun'+_0x2feca7(0x12f,0x194,0xf2,0x99)};function _0x2feca7(_0x285e0d,_0x2ec09b,_0x332313,_0x5cc093){return _0x5032bd(_0x5cc093-0x76,_0x285e0d,_0x332313-0x186,_0x5cc093-0x70);}function _0x47fdf2(_0x2c791c,_0x521cc6,_0x591c30,_0x26c726){return _0x365ab2(_0x2c791c-0x157,_0x521cc6-0x176,_0x2c791c,_0x26c726-0x1e4);}_0x49ddaa[_0x2feca7(-0x27e,-0x2c4,-0xd3,-0x1a7)](reply,_0x49ddaa[_0x47fdf2(0x177,0xd5,0xa2,0x89)]);},0x4*0x83c+-0x1*-0x242+-0x2332),await gameAdd(sender,glimit);break;case _0x5032bd(-0x202,-0xd1,-0x1b2,-0x181):case _0x365ab2(-0xb3,-0x27,-0x182,-0x69):const _0xef97aa={};_0xef97aa[_0x5032bd(-0x14c,-0xe8,-0x21c,-0xa)+'t']=_0x365ab2(-0x25b,0x11,-0x1e9,-0x132)+'t';const _0x3a6d37={};_0x3a6d37[_0x5032bd(-0x25,-0xcb,0x97,-0x126)]=_0x5032bd(-0x49,-0x114,-0x121,-0x194),_0x3a6d37['buttonText']=_0xef97aa,_0x3a6d37[_0x365ab2(-0x152,-0x13e,-0x70,-0x112)]=0x1;if(isGame(sender,isPremium,isCreator,isOwner,gcounttuser,glimit))return sendButMessage(from,lang['limitg'](prefix),'©\x20'+ownername,[_0x3a6d37]);const _0x57b43c={};_0x57b43c[_0x365ab2(0x49,-0x69,-0x1b3,-0x77)+'t']=_0x5032bd(-0x4b,-0x64,-0x79,0xe3);const _0x21dd67={};_0x21dd67[_0x5032bd(-0x25,-0xc0,-0x130,0x8e)]=_0x365ab2(0x223,0x96,0x268,0x144),_0x21dd67['buttonText']=_0x57b43c,_0x21dd67[_0x5032bd(-0x1e7,-0x120,-0x144,-0x164)]=0x1;if(!isEventon)return sendButMessage(from,lang[_0x365ab2(0x54,0x13f,0x126,0x70)](prefix),'©\x20'+ownername,[_0x21dd67]);var tempsa=args[_0x365ab2(0x17a,-0x9a,-0xe7,0x43)]('\x20');if(tempsa==_0x5032bd(-0x61,0x47,0x6b,-0xa1)+_0x5032bd(-0x10,-0x6d,-0x7d,-0x12b)){const _0x2451a0={};_0x2451a0['method']='get',asu=await getBuffer(_0x365ab2(0x141,0xd9,0xf8,0xc0)+'legra.ph/f'+_0x5032bd(-0x12a,0x30,-0xfd,-0x11)+'ab77a6cea8'+_0x365ab2(-0x4c,0x4f,-0x8,0x46),_0x2451a0),setTimeout(()=>{const _0x516bc7={'KkXEJ':function(_0x47009b,_0x140146){return _0x47009b*_0x140146;},'GpYOL':function(_0x552225,_0x5d1865,_0x253976){return _0x552225(_0x5d1865,_0x253976);},'mynqc':_0x3d12a4(0x43b,0x441,0x465,0x497)+'ry\x20🗃️'},_0x13a9f0=Math[_0x527471(0x2c4,0x505,0x3ca,0x36d)](_0x516bc7[_0x527471(0x125,0x12f,0x15c,0x7d)](Math['random'](),-0x1*-0x989+-0x2*-0x71e+-0x177f)),_0x523c33=Math[_0x3d12a4(0x373,0x5b0,0x362,0x4a9)](_0x516bc7[_0x527471(0x208,0x19d,0x15c,0x96)](Math[_0x527471(0x31c,0x243,0x30a,0x2e9)](),-0xbca+0xd76*-0x2+0x26c5));_0x516bc7[_0x527471(0x293,0x393,0x33e,0x1e5)](addStone,sender,_0x13a9f0),addIkan(sender,_0x523c33);const _0x2278e7={};_0x2278e7['displayTex'+'t']=_0x516bc7[_0x527471(0x1e9,-0x29,0x124,-0x23)];const _0x2a418f={};_0x2a418f[_0x3d12a4(0x445,0x4e2,0x463,0x3fa)]='inv';function _0x527471(_0x1b654e,_0x19df05,_0x423054,_0x1ebcc9){return _0x5032bd(_0x423054-0x340,_0x19df05,_0x423054-0x3,_0x1ebcc9-0xe);}_0x2a418f['buttonText']=_0x2278e7,_0x2a418f[_0x3d12a4(0x357,0x111,0x335,0x238)]='RESPONSE';function _0x3d12a4(_0x1187d0,_0x108ffe,_0x31c63b,_0x36aa38){return _0x365ab2(_0x1187d0-0x1c4,_0x108ffe-0xc0,_0x31c63b,_0x36aa38-0x34a);}const _0x237a6e={};_0x237a6e['quoted']=mek,sendButImage(from,'*Congratul'+_0x3d12a4(0x1f5,0x3e0,0x240,0x301)+enter+enter+('Kamu\x20menda'+_0x527471(0x2ec,0x2e2,0x38f,0x39f))+_0x13a9f0+('*\x20batu\x20dan'+'\x20*')+_0x523c33+_0x527471(0x1b8,-0x1a,0x131,0x1c3)+enter+enter+(_0x3d12a4(0x411,0x2b5,0x4c7,0x37b)+_0x3d12a4(0x352,0x332,0x2c2,0x308)+'engan\x20cara'+_0x527471(0x253,0x1d5,0x1f1,0x12c))+prefix+_0x527471(0x1ff,0x219,0x24e,0x2f9),'©\x20'+ownername,asu,[_0x2a418f],_0x237a6e);},-0x1117+0x61*0xe+-0x1*-0x1781),setTimeout(()=>{const _0x4b1ef1={'HKyiq':function(_0x1a83fe,_0xebd0a9){return _0x1a83fe(_0xebd0a9);},'hwRVD':_0x115741(0x4aa,0x415,0x50e,0x490)+_0x121a3c(0x48b,0x5c8,0x512,0x482)+_0x121a3c(0x4bc,0x29d,0x3ad,0x3cb)+_0x121a3c(0x3a3,0x3c2,0x365,0x3d9)};function _0x115741(_0x696361,_0x2e6424,_0x58b1f6,_0x5a8832){return _0x365ab2(_0x696361-0x180,_0x2e6424-0xed,_0x2e6424,_0x696361-0x367);}function _0x121a3c(_0x469d52,_0x182626,_0x545929,_0x4d055f){return _0x5032bd(_0x545929-0x55c,_0x469d52,_0x545929-0x5f,_0x4d055f-0x57);}_0x4b1ef1[_0x121a3c(0x4e2,0x4ea,0x4c9,0x4ba)](reply,_0x4b1ef1['hwRVD']);},0x23a8+-0x1db1+0x3*-0x1fd);}else{if(tempsa===_0x365ab2(0x41,0x89,0x46,-0x64)+_0x365ab2(-0x125,-0x73,-0x6f,-0x4f)){const _0x2c1449={};_0x2c1449[_0x365ab2(0x17c,0x29a,0x2a2,0x158)]=_0x5032bd(-0xad,-0x13a,0x34,-0x93),gos=await getBuffer('https://te'+_0x365ab2(0x190,0x76,-0x41,0xf3)+_0x365ab2(0x1ab,-0xde,-0x1,0x7a)+_0x365ab2(-0x22,-0x31,0x101,0x7f)+_0x365ab2(-0xe,-0x16,-0x14,-0x99),_0x2c1449),setTimeout(()=>{const _0x251262={'ybDdq':function(_0x3bcbd4,_0x450ed9){return _0x3bcbd4*_0x450ed9;},'SjLQb':function(_0x25fd9d,_0x471b73,_0x51e4bf,_0x13dbb3,_0x6e7193,_0x311fc6,_0x23f917){return _0x25fd9d(_0x471b73,_0x51e4bf,_0x13dbb3,_0x6e7193,_0x311fc6,_0x23f917);},'zQliU':_0x313326(0x6eb,0x60c,0x5ff,0x64a)+_0x313326(0x4c8,0x46d,0x58a,0x412),'hkwRk':_0x313326(0x462,0x561,0x53e,0x323)},_0xf2ab7f=Math[_0x1bb047(0x17b,0x204,0x74,0x1af)](_0x251262['ybDdq'](Math[_0x313326(0x63d,0x5d8,0x5aa,0x5f5)](),-0x23c3+-0x3*0x3e3+0x2fda));function _0x313326(_0xa0ca74,_0x4c8b83,_0x437ac3,_0x53f8f3){return _0x365ab2(_0xa0ca74-0xd8,_0x4c8b83-0x8c,_0x53f8f3,_0xa0ca74-0x59e);}const _0xa87719=Math[_0x313326(0x6fd,0x5e7,0x660,0x7dd)](_0x251262['ybDdq'](Math[_0x1bb047(0xbb,0x112,0x13e,0x46)](),0x13cd+0x2*-0x313+-0x19*0x8b));addStone(sender,_0xf2ab7f),addKayu(sender,_0xa87719);function _0x1bb047(_0x5da1de,_0x3bf8e5,_0x216c73,_0x17985a){return _0x5032bd(_0x5da1de-0xf1,_0x216c73,_0x216c73-0xcc,_0x17985a-0x115);}const _0x5028b6={};_0x5028b6[_0x313326(0x570,0x440,0x691,0x4b0)]=mek,_0x251262[_0x1bb047(0x21,-0x65,-0xbf,0x5f)](sendButImage,from,'*Congratul'+'ation\x20🎊*'+enter+enter+(_0x313326(0x5c4,0x6a3,0x64b,0x575)+_0x1bb047(0x140,0x1c3,0x1f7,0x5c))+_0xf2ab7f+('*\x20batu\x20dan'+'\x20*')+_0xa87719+_0x1bb047(0x15e,0x1f,0x0,0x4)+enter+enter+(_0x313326(0x5cf,0x727,0x4a2,0x50c)+_0x1bb047(-0x26,0x3e,-0x117,-0x122)+_0x313326(0x60b,0x53f,0x545,0x676)+_0x313326(0x524,0x4b0,0x5e9,0x5f6))+prefix+_0x1bb047(-0x1,0xdd,0x8,0x15a),'©\x20'+ownername,gos,[{'buttonId':_0x1bb047(0x91,0xb3,-0x4b,0x1ce),'buttonText':{'displayText':_0x251262[_0x313326(0x5e9,0x5f8,0x4d6,0x669)]},'type':_0x251262[_0x1bb047(0x149,0x43,0x1ce,0x1ed)]}],_0x5028b6);},0x161*0x2+0x6*0x541+-0x1690),setTimeout(()=>{function _0x4a5b3a(_0x1a5009,_0x864d55,_0x509a86,_0x308ceb){return _0x365ab2(_0x1a5009-0x37,_0x864d55-0x1c2,_0x864d55,_0x509a86-0x352);}const _0x370a53={'opTdK':function(_0x1aca22,_0x47ec5e){return _0x1aca22(_0x47ec5e);},'RcBoS':_0x4a5b3a(0x5ad,0x55b,0x495,0x398)+_0x4a5b3a(0x524,0x473,0x3dd,0x4d6)+_0x4e67d4(0x5ae,0x356,0x57a,0x4a5)+'tunggu...'};function _0x4e67d4(_0x3dc27f,_0x2fd825,_0xa03f0d,_0x329542){return _0x365ab2(_0x3dc27f-0x1aa,_0x2fd825-0x136,_0x2fd825,_0x329542-0x57f);}_0x370a53[_0x4e67d4(0x4ea,0x3d6,0x3d2,0x523)](reply,_0x370a53[_0x4a5b3a(0x283,0x24e,0x2bb,0x385)]);},-0x26cf+0x1*0x143e+0x1291);}else{if(tempsa==='cochher\x20se'+'a'){const _0x136d02={};_0x136d02[_0x5032bd(0x83,-0x99,0x71,-0x8)]=_0x365ab2(0xad,0x42,-0x2c,0x28),seae=await getBuffer('https://te'+_0x5032bd(0x1e,0x130,-0x10,0x172)+_0x5032bd(0x0,0x137,-0x2d,-0x47)+_0x5032bd(-0x51,-0xe9,-0xd7,-0x19a)+'6b0c0.jpg',_0x136d02),setTimeout(()=>{const _0x4aa516={};_0x4aa516['CCWJv']='My\x20Invento'+'ry\x20🗃️',_0x4aa516['KYgsa']=_0x19509e(0x156,0xb3,0xdd,-0x59);const _0x503971=_0x4aa516,_0x5d5bb5=Math[_0x19509e(0x21f,0x34e,0x2d8,0x3b6)](Math[_0x3fbcf9(0x3e4,0x2de,0x38c,0x375)]()*(-0x13ec+-0x1fb5+0x1d*0x1ca));addIkan(sender,_0x5d5bb5);const _0x102100={};function _0x3fbcf9(_0x3ba90f,_0x415c43,_0x3ad3f7,_0x35da02){return _0x365ab2(_0x3ba90f-0x1d2,_0x415c43-0xf4,_0x415c43,_0x35da02-0x2d6);}function _0x19509e(_0x5b014e,_0x42b389,_0x5beef0,_0x1bd1d9){return _0x365ab2(_0x5b014e-0x15a,_0x42b389-0x16e,_0x5beef0,_0x42b389-0x1ef);}_0x102100[_0x3fbcf9(0x11f,0x271,0x32e,0x25f)+'t']=_0x503971[_0x19509e(0xeb,0x1cf,0x28e,0x206)];const _0x443463={};_0x443463[_0x19509e(0x1a5,0x29f,0x258,0x358)]=_0x19509e(0x34a,0x264,0x1b0,0x16f),_0x443463[_0x19509e(0x243,0x300,0x2a4,0x1c8)]=_0x102100,_0x443463[_0x3fbcf9(0x1d5,0x232,0x7f,0x1c4)]=_0x503971[_0x3fbcf9(0x549,0x576,0x438,0x422)];const _0x6445cb={};_0x6445cb[_0x3fbcf9(0x3f5,0x17c,0x23b,0x2a8)]=mek,sendButImage(from,_0x3fbcf9(0x273,0x30c,0x3b3,0x273)+_0x19509e(0xee,0x1a6,0x252,0x2e7)+enter+enter+(_0x3fbcf9(0x3d7,0x344,0x35e,0x2fc)+_0x19509e(0x334,0x313,0x3bb,0x454))+_0x5d5bb5+'*\x20ikan'+enter+enter+(_0x3fbcf9(0x43e,0x43f,0x1e5,0x307)+'ory\x20anda\x20d'+_0x19509e(0x2ce,0x25c,0x17d,0x33a)+_0x19509e(0x282,0x175,0x1d0,0xc9))+prefix+_0x19509e(0xe8,0x1d2,0x1b9,0x110),'©\x20\x20'+ownername,seae,[_0x443463],_0x6445cb);},-0x5*0x1c1+-0xefd*0x1+0x237a),setTimeout(()=>{const _0x4968a5={};_0x4968a5[_0x2ce257(0x675,0x5c8,0x580,0x68a)]=_0x5a3841(0x1ba,0x2cf,0xa7,0x1bc)+_0x5a3841(0x102,0x169,0x175,0x23e)+_0x2ce257(0x49a,0x5b7,0x4b3,0x340)+_0x2ce257(0x452,0x57c,0x39b,0x36d);function _0x5a3841(_0x5a1aff,_0x2236fc,_0x5812f2,_0x507e1e){return _0x365ab2(_0x5a1aff-0x1ac,_0x2236fc-0xbb,_0x507e1e,_0x5a1aff-0x77);}const _0x3b646a=_0x4968a5;function _0x2ce257(_0x470d8f,_0x28f3bf,_0x1c7156,_0x579eeb){return _0x365ab2(_0x470d8f-0x1b3,_0x28f3bf-0x103,_0x1c7156,_0x470d8f-0x574);}reply(_0x3b646a[_0x5a3841(0x178,0xbe,0x28a,0x12b)]);},0x643+0x1e1e+0x8b*-0x43);}else{if(tempsa==='limingstal'+_0x5032bd(-0x1b5,-0x232,-0x151,-0x163)+'s'){const _0x548621={};_0x548621[_0x5032bd(0x83,0x1bd,0x113,0x126)]=_0x5032bd(-0xad,-0x129,-0x46,-0x38),seoe=await getBuffer(_0x5032bd(-0x15,-0x16f,-0x4a,-0x64)+_0x5032bd(0x1e,-0xec,-0xdd,0x41)+_0x365ab2(0x24,-0x16b,-0xcf,-0x36)+_0x365ab2(-0x1e3,-0x49,0x3a,-0xe8)+_0x5032bd(-0x34,0x1e,0x102,-0x106),_0x548621),setTimeout(()=>{const _0x18d03b={'boPTy':function(_0x30de2c,_0x449c26){return _0x30de2c*_0x449c26;},'CKaam':function(_0xa7761a,_0x1ee1e7,_0x5cc680){return _0xa7761a(_0x1ee1e7,_0x5cc680);},'NsQCV':function(_0x2a0f6d,_0x30e0fa,_0x52c0d4,_0x4e3f8d,_0x244335,_0x7e9e22,_0x1f9a14){return _0x2a0f6d(_0x30e0fa,_0x52c0d4,_0x4e3f8d,_0x244335,_0x7e9e22,_0x1f9a14);},'kVliL':_0x2efd57(0x3cc,0x4f3,0x5e9,0x494)},_0x517a8a=Math[_0x2efd57(0x6e1,0x656,0x802,0x72f)](Math['random']()*(-0x2511+-0xde4+0x3*0x110d)),_0x2b50fe=Math[_0x2efd57(0x6b6,0x827,0x706,0x72f)](_0x18d03b['boPTy'](Math['random'](),0x904*0x3+-0x502*-0x1+-0x1fbe));function _0x2efd57(_0x207b6c,_0x197ac3,_0x284a62,_0x5c9738){return _0x5032bd(_0x5c9738-0x6a5,_0x207b6c,_0x284a62-0x163,_0x5c9738-0xcd);}_0x18d03b[_0x2efd57(0x33d,0x36d,0x40e,0x476)](addOre,sender,_0x517a8a),_0x18d03b['CKaam'](addStone,sender,_0x2b50fe);const _0x4737d4={};function _0x47e6a0(_0x275ca4,_0x1ad2c,_0x14ac36,_0x36a372){return _0x365ab2(_0x275ca4-0xe3,_0x1ad2c-0x5d,_0x14ac36,_0x1ad2c-0x12);}_0x4737d4['displayTex'+'t']=_0x47e6a0(0x284,0x15f,0x1f8,0xb9)+_0x2efd57(0x428,0x4d9,0x513,0x4fa);const _0x41ed41={};_0x41ed41[_0x47e6a0(-0x167,-0x1c,-0x111,-0xe3)]=mek,_0x18d03b[_0x47e6a0(-0xa1,-0x14,0xc1,-0x13)](sendButImage,from,_0x47e6a0(0x43,-0x51,-0x1a4,-0x1a2)+'ation\x20🎊*'+enter+enter+(_0x2efd57(0x61f,0x54b,0x4b1,0x5f6)+_0x47e6a0(0x30,0x136,0xed,0xa3))+_0x517a8a+('*\x20copper\x20o'+'re\x20dan\x20')+_0x2b50fe+_0x47e6a0(-0x68,0xae,0x17a,0x1ed)+enter+enter+(_0x47e6a0(0x41,0x43,0x105,-0x117)+_0x47e6a0(0xac,-0x30,-0x45,-0x59)+'engan\x20cara'+'\x20ketik\x20')+prefix+_0x47e6a0(0x147,-0xb,-0x64,0x2c),'©\x20'+ownername,seoe,[{'buttonId':'inv','buttonText':_0x4737d4,'type':_0x18d03b[_0x47e6a0(-0xb2,-0xe8,-0x185,-0x1ba)]}],_0x41ed41);},0x22c6+-0xc8+0x2*-0xb23),setTimeout(()=>{function _0x4e8358(_0x5a30a9,_0x5d787f,_0x3ad45d,_0x5416cf){return _0x365ab2(_0x5a30a9-0xda,_0x5d787f-0x112,_0x5d787f,_0x5a30a9-0x15a);}function _0x266208(_0x34f365,_0x130e25,_0x4f0881,_0x3bccb8){return _0x5032bd(_0x130e25-0x5fb,_0x4f0881,_0x4f0881-0x47,_0x3bccb8-0x1c9);}const _0x27dc9f={'wkqSe':function(_0x1751c0,_0x744d28){return _0x1751c0(_0x744d28);},'rVgsB':_0x4e8358(0x29d,0x36b,0x322,0x25b)+_0x4e8358(0x1e5,0x152,0x187,0x1fa)+_0x266208(0x34f,0x44c,0x54c,0x43c)+'tunggu...'};_0x27dc9f[_0x4e8358(0x2b1,0x16b,0x3f6,0x2d1)](reply,_0x27dc9f[_0x4e8358(0x22c,0x25d,0x323,0x290)]);},0x1df0+-0x16ab+-0x745);}else{if(tempsa===_0x365ab2(0xb6,0x8f,0x151,-0x9)+'tain'){const _0x1ac0ae={};_0x1ac0ae['method']=_0x5032bd(-0xad,-0xaf,-0x75,-0x7b),seye=await getBuffer(_0x365ab2(0x1a2,0x37,0xd2,0xc0)+'legra.ph/f'+_0x365ab2(0x175,0x17c,-0x93,0xbd)+_0x365ab2(-0x1d,-0x190,-0x16b,-0x9c)+_0x365ab2(-0x5c,0x34,0x4c,0x51),_0x1ac0ae),setTimeout(()=>{const _0x1b53e8={'QUsMA':function(_0x12a160,_0x3f3d4d){return _0x12a160*_0x3f3d4d;},'zpAfu':function(_0x129e25,_0x2b6e0d,_0x2dc41a){return _0x129e25(_0x2b6e0d,_0x2dc41a);},'aONQw':function(_0x2998c8,_0x499bc3,_0x32daf8,_0xbc1229,_0x4408f3,_0x2d95b8,_0x41897a){return _0x2998c8(_0x499bc3,_0x32daf8,_0xbc1229,_0x4408f3,_0x2d95b8,_0x41897a);},'PaWHa':_0x5b989e(0x3a7,0x331,0x317,0x40e)},_0x174009=Math[_0x5b989e(0x5dd,0x62c,0x5b2,0x660)](_0x1b53e8[_0x21fca4(0x318,0x37e,0x43e,0x2ac)](Math['random'](),0x3a+-0x1f1a+-0x14b*-0x18)),_0x2a2c93=Math['ceil'](_0x1b53e8['QUsMA'](Math[_0x5b989e(0x46f,0x5f4,0x4f2,0x413)](),-0x1a4e+0xf*-0x236+-0x2*-0x1dda));addOre(sender,_0x174009);function _0x21fca4(_0x1e5f48,_0x42d605,_0x303ebc,_0x5329c3){return _0x5032bd(_0x1e5f48-0x370,_0x303ebc,_0x303ebc-0xfa,_0x5329c3-0x1ec);}_0x1b53e8[_0x21fca4(0x28d,0x32d,0x38a,0x256)](addStone,sender,_0x2a2c93);const _0x57d621={};_0x57d621[_0x21fca4(0x224,0x1c9,0x165,0xcc)+'t']=_0x21fca4(0x3e8,0x336,0x44a,0x474)+_0x21fca4(0x1c5,0x27f,0x14f,0x19d);const _0x33df2c={};function _0x5b989e(_0x1d07ef,_0x381d0f,_0x17de0d,_0x3e65ed){return _0x5032bd(_0x17de0d-0x528,_0x381d0f,_0x17de0d-0x74,_0x3e65ed-0x134);}_0x33df2c[_0x21fca4(0x26d,0x3b6,0x2a6,0x239)]=mek,_0x1b53e8[_0x21fca4(0x26c,0x1fe,0x2ce,0x266)](sendButImage,from,_0x21fca4(0x238,0x19d,0x303,0x111)+_0x21fca4(0x252,0x1e5,0x32b,0x282)+enter+enter+(_0x21fca4(0x2c1,0x2d7,0x272,0x2af)+'patkan\x20*')+_0x174009+(_0x21fca4(0x36f,0x2bb,0x329,0x25a)+_0x21fca4(0x288,0x332,0x3d9,0x12a))+_0x2a2c93+'\x20batu'+enter+enter+(_0x5b989e(0x5df,0x392,0x484,0x49d)+_0x5b989e(0x47f,0x4fa,0x411,0x40f)+_0x21fca4(0x308,0x1c8,0x354,0x218)+'\x20ketik\x20')+prefix+'inventory','©\x20'+ownername,seye,[{'buttonId':_0x21fca4(0x310,0x1d2,0x44e,0x3e7),'buttonText':_0x57d621,'type':_0x1b53e8['PaWHa']}],_0x33df2c);},-0x4b7+-0x313*-0xc+-0x1475),setTimeout(()=>{function _0xf9f8bd(_0x1a788b,_0x3af033,_0x22ce05,_0x2ff653){return _0x365ab2(_0x1a788b-0x105,_0x3af033-0x146,_0x3af033,_0x2ff653-0x4a7);}const _0x6437bc={'NNWEr':function(_0x149d93,_0x50cff3){return _0x149d93(_0x50cff3);}};function _0x4a7267(_0x3a6d2c,_0x2d6d06,_0x1ff02f,_0x4940ba){return _0x5032bd(_0x3a6d2c-0x559,_0x2d6d06,_0x1ff02f-0x0,_0x4940ba-0x1c);}_0x6437bc['NNWEr'](reply,'Sedang\x20ber'+_0xf9f8bd(0x48a,0x479,0x4da,0x532)+'\x20silahkan\x20'+_0x4a7267(0x362,0x47e,0x496,0x23f));},-0x74d+-0x2cd+-0x3*-0x35e);}else{if(tempsa===_0x365ab2(-0x7f,0xe5,-0xc5,0x73)+'ds'){const _0x3b9b09={};_0x3b9b09[_0x5032bd(0x83,0x6b,-0x82,0x13a)]=_0x5032bd(-0xad,-0x106,-0x3e,-0x1f7),siae=await getBuffer(_0x365ab2(0x1f6,-0x20,0x13b,0xc0)+_0x5032bd(0x1e,-0xf2,0x14c,-0x7)+_0x5032bd(0x1c,0x89,0x37,0x9b)+_0x5032bd(-0x1db,-0x25c,-0x2ee,-0x1a0)+_0x5032bd(-0xee,-0x97,-0x11c,-0x8e),_0x3b9b09),setTimeout(()=>{const _0x5e69c7={'odxFh':function(_0x3ec03c,_0x38dccb){return _0x3ec03c*_0x38dccb;},'xqfyd':function(_0x1006b9,_0x341d17,_0x5512a1){return _0x1006b9(_0x341d17,_0x5512a1);},'onmVc':function(_0x5bb0dc,_0x21b33d,_0x160d63,_0x230f6b,_0x167988,_0x9e2747,_0x2d492b){return _0x5bb0dc(_0x21b33d,_0x160d63,_0x230f6b,_0x167988,_0x9e2747,_0x2d492b);}},_0x779c27=Math[_0x11d0f9(0x659,0x735,0x690,0x675)](_0x5e69c7['odxFh'](Math[_0x11d0f9(0x6e0,0x675,0x6c3,0x79e)](),-0x2016+-0x5bd*0x1+0x262d)),_0x273071=Math[_0x4b17c6(0x87c,0x741,0x82b,0x799)](_0x5e69c7[_0x11d0f9(0x762,0x629,0x64c,0x71c)](Math[_0x11d0f9(0x67b,0x675,0x74b,0x55c)](),0x4*-0x7de+0x150+-0x5*-0x611));_0x5e69c7[_0x11d0f9(0x6bb,0x671,0x63f,0x65a)](addStone,sender,_0x779c27),addKayu(sender,_0x273071);const _0x462fb7={};_0x462fb7['displayTex'+'t']=_0x4b17c6(0x69f,0x663,0x72b,0x787)+'ry\x20🗃️';function _0x11d0f9(_0x3d3166,_0xc52697,_0x34da45,_0x58ece5){return _0x5032bd(_0xc52697-0x6ab,_0x34da45,_0x34da45-0xc2,_0x58ece5-0xb5);}function _0x4b17c6(_0x5bba20,_0x32c8b6,_0x325df7,_0x253c8c){return _0x5032bd(_0x253c8c-0x70f,_0x325df7,_0x325df7-0x188,_0x253c8c-0xd9);}const _0x59b464={};_0x59b464['buttonId']=_0x11d0f9(0x73a,0x64b,0x69f,0x6e4),_0x59b464[_0x4b17c6(0x6b0,0x800,0x862,0x74b)]=_0x462fb7,_0x59b464['type']=_0x11d0f9(0x433,0x49a,0x377,0x44b);const _0x52ceef={};_0x52ceef[_0x11d0f9(0x618,0x5a8,0x4d4,0x6e0)]=mek,_0x5e69c7[_0x11d0f9(0x392,0x48b,0x41b,0x4ed)](sendButImage,from,_0x4b17c6(0x59f,0x668,0x4c4,0x5d7)+_0x4b17c6(0x57e,0x726,0x59d,0x5f1)+enter+enter+('Kamu\x20menda'+_0x4b17c6(0x6b0,0x70a,0x6ed,0x75e))+_0x779c27+('*\x20batu\x20dan'+'\x20*')+_0x273071+_0x11d0f9(0x7b6,0x718,0x78e,0x727)+enter+enter+(_0x4b17c6(0x540,0x638,0x633,0x66b)+'ory\x20anda\x20d'+_0x4b17c6(0x762,0x7ea,0x7f0,0x6a7)+'\x20ketik\x20')+prefix+_0x11d0f9(0x5e1,0x5b9,0x6e5,0x65c),'©\x20'+ownername,siae,[_0x59b464],_0x52ceef);},-0x2379+0xf4d+0x1fe4),setTimeout(()=>{function _0x3e32f1(_0x5db404,_0x4bce6a,_0x2d9058,_0x28bd91){return _0x365ab2(_0x5db404-0x76,_0x4bce6a-0x107,_0x4bce6a,_0x2d9058-0x1bb);}const _0x29c735={'Swxgi':function(_0x39eafd,_0x425dd1){return _0x39eafd(_0x425dd1);},'HVlxK':'Sedang\x20ber'+'petualang,'+_0x3e32f1(0x55,0x1ff,0xe1,-0x41)+'tunggu...'};function _0x385fcf(_0x2e1cc5,_0x13a335,_0x762642,_0x539ee9){return _0x365ab2(_0x2e1cc5-0x172,_0x13a335-0xab,_0x13a335,_0x762642-0x1bc);}_0x29c735[_0x385fcf(0x34b,0x3aa,0x2ce,0x28d)](reply,_0x29c735[_0x385fcf(0xb2,0xb6,0xce,0x13b)]);},-0x16*0x7+-0x2233+0x22cd*0x1);}else{if(tempsa==='moobiens\x20g'+'rassland'){const _0x32d679={};_0x32d679[_0x365ab2(0x158,0x11e,0x1c3,0x158)]='get',bbbb=await getBuffer(_0x365ab2(0x1d2,-0x6f,0x17b,0xc0)+'legra.ph/f'+_0x365ab2(0xc5,0xef,0x22e,0xf9)+_0x5032bd(-0x15c,-0x19d,-0x217,-0x221)+_0x5032bd(-0xb9,-0x18e,0x43,-0x103),_0x32d679),setTimeout(()=>{const _0x238ac4={'GdVam':function(_0x1c070a,_0x2fea30){return _0x1c070a*_0x2fea30;},'LJkoZ':function(_0x3a84e8,_0x32a2ba,_0x47c0aa){return _0x3a84e8(_0x32a2ba,_0x47c0aa);},'sChzO':function(_0x29bfdd,_0x353834,_0x1e0423){return _0x29bfdd(_0x353834,_0x1e0423);},'tWxNo':function(_0x812640,_0x3455f5,_0x4543c0,_0x518709,_0x338f64,_0x2a4686,_0x4a53a6){return _0x812640(_0x3455f5,_0x4543c0,_0x518709,_0x338f64,_0x2a4686,_0x4a53a6);},'gFKym':_0x5580a4(0x609,0x4dd,0x521,0x495)+_0x13a156(0x249,0x2bf,0x197,0x1e5),'cZyaE':_0x13a156(0x1e3,0xa4,0xef,0x18a)},_0x52638b=Math['ceil'](_0x238ac4[_0x13a156(0x421,0x4f9,0x412,0x473)](Math['random'](),0x1f4e+-0x152*0x13+-0xe8*0x6)),_0x248901=Math[_0x5580a4(0x3e5,0x4ef,0x54a,0x5cb)](_0x238ac4['GdVam'](Math[_0x13a156(0x3be,0x26a,0x42d,0x2ab)](),-0x2*0x1bb+-0x4fa+-0x6d*-0x14));_0x238ac4[_0x5580a4(0x418,0x3cc,0x2d2,0x402)](addStone,sender,_0x52638b),_0x238ac4[_0x13a156(0x255,0x2cf,0x224,0x323)](addKayu,sender,_0x248901);function _0x5580a4(_0x119035,_0x58d183,_0x5abf63,_0x1b87f9){return _0x365ab2(_0x119035-0x149,_0x58d183-0x16e,_0x119035,_0x58d183-0x390);}const _0x388bfb={};function _0x13a156(_0x121134,_0x1ce27c,_0x1efa7d,_0x6106c0){return _0x5032bd(_0x121134-0x3f4,_0x6106c0,_0x1efa7d-0xc4,_0x6106c0-0xca);}_0x388bfb[_0x13a156(0x2f1,0x3e9,0x1ad,0x292)]=mek,_0x238ac4['tWxNo'](sendButImage,from,_0x13a156(0x2bc,0x25d,0x161,0x2d4)+'ation\x20🎊*'+enter+enter+(_0x13a156(0x345,0x363,0x310,0x1ff)+_0x5580a4(0x3b1,0x4b4,0x523,0x3b6))+_0x52638b+('*\x20batu\x20dan'+'\x20')+_0x248901+_0x5580a4(0x47f,0x3ae,0x4d8,0x411)+enter+enter+(_0x13a156(0x350,0x2ae,0x37f,0x378)+'ory\x20anda\x20d'+'engan\x20cara'+_0x13a156(0x2a5,0x26b,0x307,0x3e2))+prefix+_0x5580a4(0x428,0x373,0x3a3,0x47c),'©\x20'+ownername,bbbb,[{'buttonId':_0x13a156(0x394,0x428,0x396,0x391),'buttonText':{'displayText':_0x238ac4[_0x13a156(0x300,0x1fd,0x240,0x372)]},'type':_0x238ac4[_0x5580a4(0x258,0x314,0x1fc,0x32e)]}],_0x388bfb);},-0x230c+0x1d35+-0x383*-0x5),setTimeout(()=>{const _0x46cc33={'rujuN':function(_0x100bfa,_0x409224){return _0x100bfa(_0x409224);},'MmVSr':_0x150d97(0xff,0xfe,0x6c,0x51)+_0x58b9d4(0x170,0xb9,0x21,0x1bf)+_0x150d97(-0x11e,-0xa3,-0x125,0xf)+_0x150d97(-0x166,-0x23,-0x20e,-0xc5)};function _0x150d97(_0x199113,_0x5860e3,_0x26a98c,_0xeeb28c){return _0x5032bd(_0x199113-0x91,_0xeeb28c,_0x26a98c-0x1e9,_0xeeb28c-0x175);}function _0x58b9d4(_0x3b4b50,_0x1ee53e,_0x29fe86,_0x4171ed){return _0x5032bd(_0x1ee53e-0x103,_0x4171ed,_0x29fe86-0xcc,_0x4171ed-0x28);}_0x46cc33[_0x58b9d4(0x150,0xef,0x107,-0x64)](reply,_0x46cc33['MmVSr']);},-0x542*-0x7+-0x1*0x809+0x997*-0x3);}else{const _0x454382={};_0x454382[_0x365ab2(0x17c,0xad,0x107,0x158)]=_0x5032bd(-0xad,-0x1d6,-0x10f,-0x61),seae=await getBuffer('https://te'+_0x365ab2(0x1f5,0x126,0x138,0xf3)+_0x5032bd(-0x11c,-0x10f,-0x19c,-0x177)+_0x5032bd(-0x7b,-0x17f,-0x180,-0xfb)+'cffc2.jpg',_0x454382),tesk=_0x365ab2(-0xaa,0x129,0xf7,0x3a)+'AYAH\x20YANG\x20'+_0x5032bd(-0x16d,-0x1d9,-0x1a7,-0x1b2)+_0x5032bd(0x10,-0xae,-0xe3,-0x114)+_0x5032bd(0x51,0x54,-0x98,-0xc7)+_0x365ab2(0x163,0x140,0xbe,0xea)+_0x365ab2(-0x19b,-0x11d,-0xe5,-0xb8)+_0x365ab2(-0x1db,-0x15b,-0x7d,-0x92)+_0x365ab2(-0x79,-0x18f,-0x1b9,-0x158)+'land\x0a🟣\x20Ger'+'bil\x20Woods\x0a'+_0x365ab2(0x196,-0x31,0x17d,0x7b)+_0x365ab2(0x1d3,-0x73,0x1f0,0xb9)+_0x5032bd(0x88,-0x68,0x2,0x1d0)+_0x5032bd(-0xfc,-0x199,-0x23a,0x61)+_0x365ab2(0x1a0,0xa4,0xe7,0xa9)+_0x5032bd(-0x195,-0xdc,-0x21b,-0xab)+_0x5032bd(-0x1aa,-0xad,-0x296,-0x2b0)+'\x20'+prefix+(_0x5032bd(-0x21f,-0x2d6,-0x2c1,-0x2f0)+_0x5032bd(-0x21b,-0x1c2,-0x2eb,-0x369)+'er\x0a\x0aSumber'+_0x365ab2(-0xc0,0x28,0x7f,-0x58)+_0x5032bd(0x19,-0xcd,0x5b,-0xa)+'://www.fan'+_0x365ab2(0x4f,-0x12e,-0x6c,-0x101)+'nerators.c'+_0x5032bd(-0xa5,-0xb1,-0x180,-0x186)),alpha[_0x5032bd(-0xa8,0x84,-0x75,-0x3c)+'e'](from,seae,image,{'thumbnail':seae,'quoted':mek,'caption':tesk});}}}}}}}await gameAdd(sender,glimit);break;case _0x365ab2(0xe2,0x102,0x16a,0x39):const _0x58cf12={};_0x58cf12[_0x5032bd(-0x14c,-0x26e,-0xe,-0x202)+'t']=_0x365ab2(-0x1dd,-0x144,-0x1b7,-0x132)+'t';const _0x1db68e={};_0x1db68e[_0x5032bd(-0x25,0xc2,-0x6,0xce)]='limit',_0x1db68e[_0x5032bd(0x3c,0x17d,-0x9b,-0x1c)]=_0x58cf12,_0x1db68e[_0x365ab2(-0x171,0x49,-0x168,-0x112)]=0x1;if(isGame(sender,isPremium,isCreator,isOwner,gcounttuser,glimit))return sendButMessage(from,lang['limitg'](prefix),'©\x20'+ownername,[_0x1db68e]);const _0x344c68={};_0x344c68[_0x5032bd(-0x14c,-0x286,-0x1e9,-0x1f1)+'t']=_0x365ab2(0x78,0xbd,0x1c1,0x8a);const _0x179ce6={};_0x179ce6[_0x5032bd(-0x25,0x46,-0x16e,0xe)]=_0x5032bd(0x6f,-0xe4,0xe2,0x2b),_0x179ce6[_0x365ab2(0xdc,0x216,0x1b3,0x111)]=_0x344c68,_0x179ce6[_0x365ab2(0x4a,0x4b,-0x184,-0x112)]=0x1;if(!isEventon)return sendButMessage(from,lang[_0x365ab2(-0x3b,-0x71,0x17f,0x70)](prefix),'©\x20'+ownername,[_0x179ce6]);setTimeout(()=>{function _0x453511(_0x312792,_0xdd4a40,_0x53d35a,_0x551de4){return _0x5032bd(_0x312792-0x691,_0xdd4a40,_0x53d35a-0x10d,_0x551de4-0x80);}const _0x45f447={'BYFfM':function(_0x4b6f1b,_0x398a80){return _0x4b6f1b*_0x398a80;},'ujZgn':function(_0x459cd8,_0x12a4f5,_0x467399){return _0x459cd8(_0x12a4f5,_0x467399);},'ymVch':function(_0x17db7e,_0x3686be){return _0x17db7e(_0x3686be);}},_0x1d37c8=Math['ceil'](_0x45f447[_0x453511(0x707,0x73e,0x7ba,0x6eb)](Math['random'](),-0x517+-0x1721+-0xe4e*-0x2));function _0x35c3ae(_0x1864ac,_0x3fec8a,_0x11ab28,_0x4163a1){return _0x365ab2(_0x1864ac-0xeb,_0x3fec8a-0x48,_0x11ab28,_0x4163a1- -0x89);}const _0x5df8f3=Math[_0x35c3ae(-0x37,-0x56,0x4a,0xd6)](Math[_0x453511(0x65b,0x66a,0x53c,0x6a1)]()*(0x1a0+0x99+-0x21b)),_0x457a37=Math[_0x453511(0x71b,0x718,0x63c,0x806)](_0x45f447['BYFfM'](Math[_0x453511(0x65b,0x542,0x742,0x766)](),-0x24cd+-0x3fc*0x8+-0x7*-0x9d1));addStone(sender,_0x1d37c8),_0x45f447['ujZgn'](addCoal,sender,_0x5df8f3),_0x45f447['ujZgn'](addOre,sender,_0x457a37),_0x45f447['ymVch'](reply,_0x35c3ae(-0xa,-0x133,-0xae,-0xec)+_0x35c3ae(0x5,0x34,-0x32,-0xd2)+enter+enter+(_0x35c3ae(-0x67,-0xe1,-0x19a,-0x1b1)+_0x35c3ae(-0xea,-0x13b,0x92,-0x2a))+_0x1d37c8+_0x35c3ae(-0x18,-0x263,-0x99,-0x14f)+_0x5df8f3+('*\x20coal\x20,\x20d'+'an\x20*')+_0x457a37+_0x453511(0x613,0x741,0x625,0x5b9));},-0x11a3+0x151a*-0x1+0x3275),setTimeout(()=>{function _0x456f06(_0x3c4f71,_0x13a458,_0x2a48c8,_0x557107){return _0x5032bd(_0x3c4f71-0x37a,_0x13a458,_0x2a48c8-0x5f,_0x557107-0x140);}function _0x5b0de8(_0x3c8f93,_0x1131c2,_0xc6fb9a,_0x4cbcd0){return _0x5032bd(_0x1131c2-0x76d,_0xc6fb9a,_0xc6fb9a-0x9c,_0x4cbcd0-0x155);}reply(_0x5b0de8(0x6d5,0x5bf,0x517,0x67f)+_0x456f06(0x1b4,0x97,0x238,0x159)+_0x5b0de8(0x704,0x710,0x6b1,0x5d3)+_0x5b0de8(0x6da,0x790,0x666,0x7fb));},0x1654*-0x1+0x1b0e+-0x5*0xf2),await gameAdd(sender,glimit);break;case _0x5032bd(-0x1e2,-0x11d,-0x119,-0xaf):const _0x258d2a={};_0x258d2a['displayTex'+'t']=_0x365ab2(-0x283,0xb,-0x1c8,-0x132)+'t';const _0xc10a3a={};_0xc10a3a[_0x5032bd(-0x25,-0x14c,0xed,-0x127)]=_0x5032bd(-0x49,-0x5a,0x73,-0x112),_0xc10a3a[_0x5032bd(0x3c,0xce,0xab,-0x53)]=_0x258d2a,_0xc10a3a[_0x365ab2(-0x1d2,-0x1fe,-0x12,-0x112)]=0x1;if(isGame(sender,isPremium,isCreator,isOwner,gcounttuser,glimit))return sendButMessage(from,lang[_0x365ab2(0x1c,0x25,-0x1d6,-0x12a)](prefix),'©\x20'+ownername,[_0xc10a3a]);const _0x466e5f={};_0x466e5f['displayTex'+'t']=_0x365ab2(0x133,-0xb2,0x10d,0x8a);const _0x311e83={};_0x311e83[_0x5032bd(-0x25,0x94,0xfe,-0xf9)]=_0x5032bd(0x6f,-0x8c,-0xeb,0x155),_0x311e83[_0x365ab2(-0x4a,0x1cc,0x99,0x111)]=_0x466e5f,_0x311e83[_0x365ab2(-0x1d,-0x145,-0x114,-0x112)]=0x1;if(!isEventon)return sendButMessage(from,lang[_0x5032bd(-0x65,0xac,-0xe3,-0x94)](prefix),'©\x20'+ownername,[_0x311e83]);setTimeout(()=>{function _0x56de17(_0x12ad69,_0x16e0c8,_0x323f3a,_0x20f614){return _0x5032bd(_0x323f3a-0x517,_0x16e0c8,_0x323f3a-0xb5,_0x20f614-0x122);}const _0x117c97={'GoVGR':function(_0xdcd075,_0x4379eb){return _0xdcd075*_0x4379eb;},'herzi':function(_0x26615b,_0x2bf245,_0x4a6f01){return _0x26615b(_0x2bf245,_0x4a6f01);},'EGEYx':function(_0xb0e65a,_0x9688e2){return _0xb0e65a(_0x9688e2);}},_0x2dd337=Math[_0x56de17(0x5a8,0x6d4,0x5a1,0x6b3)](_0x117c97[_0x56de17(0x49c,0x2e2,0x3ad,0x413)](Math[_0x418bc0(0xd3,0x1d7,0x159,0xb2)](),-0x201a+0x2236+-0x208));_0x117c97['herzi'](addKayu,sender,_0x2dd337);function _0x418bc0(_0x21f19b,_0x2d0240,_0x3a2623,_0x57ac5b){return _0x5032bd(_0x3a2623-0x18f,_0x2d0240,_0x3a2623-0x9,_0x57ac5b-0xda);}_0x117c97[_0x418bc0(0x50,0x1b7,0x13d,0x5e)](reply,_0x56de17(0x32a,0x46d,0x3df,0x4a6)+'ation\x20🎊*'+enter+enter+(_0x418bc0(0x11c,0x2e7,0x1d5,0x271)+_0x56de17(0x50a,0x60f,0x566,0x4cf))+_0x2dd337+(_0x418bc0(0x2c2,0x203,0x1c0,0x307)+_0x418bc0(0x47,0x155,0x77,-0x9a)));},0x4*0x45d+0x2061+-0x261d),setTimeout(()=>{function _0x1a2aa8(_0x2815b5,_0x414359,_0x3e253a,_0x3022f7){return _0x5032bd(_0x3022f7-0x712,_0x414359,_0x3e253a-0x81,_0x3022f7-0xc9);}const _0x2f781c={'HpEPF':function(_0x128ef5,_0x34f1ee){return _0x128ef5(_0x34f1ee);},'IfduT':'Sedang\x20men'+'ambang,\x20si'+'lahkan\x20tun'+_0x1a2aa8(0x765,0x60a,0x604,0x735)};function _0x103614(_0x3eeb9a,_0x543e64,_0x4f9531,_0x5afb27){return _0x365ab2(_0x3eeb9a-0xe5,_0x543e64-0x1ee,_0x3eeb9a,_0x543e64- -0x51);}_0x2f781c[_0x1a2aa8(0x730,0x64d,0x6c9,0x737)](reply,_0x2f781c[_0x103614(0x9f,0xe4,0x68,0x236)]);},-0x1*0xeb3+0xd1+0x2*0x6f1),await gameAdd(sender,glimit);break;case _0x5032bd(-0x1a4,-0x2e2,-0x261,-0x129):const _0x261546={};_0x261546['displayTex'+'t']=_0x365ab2(-0xb9,-0xb0,-0xe3,-0x132)+'t';const _0x1d032a={};_0x1d032a[_0x5032bd(-0x25,0x8f,0x5d,-0x92)]='limit',_0x1d032a[_0x365ab2(0x9d,0x1f1,0x4,0x111)]=_0x261546,_0x1d032a[_0x5032bd(-0x1e7,-0x209,-0x22b,-0xa9)]=0x1;if(isGame(sender,isPremium,isCreator,isOwner,gcounttuser,glimit))return sendButMessage(from,lang['limitg'](prefix),'©\x20'+ownername,[_0x1d032a]);const _0x33fc21={};_0x33fc21[_0x5032bd(-0x14c,-0x231,-0x1d6,-0x64)+'t']='Event\x20On';const _0x45ef01={};_0x45ef01[_0x5032bd(-0x25,0xbc,-0x83,0xe9)]=_0x365ab2(0x113,0x253,0x85,0x144),_0x45ef01[_0x5032bd(0x3c,-0x44,0x13e,-0xc0)]=_0x33fc21,_0x45ef01['type']=0x1;if(!isEventon)return sendButMessage(from,lang[_0x365ab2(-0x7d,0xce,0x1a9,0x70)](prefix),'©\x20'+ownername,[_0x45ef01]);setTimeout(()=>{const _0x54f449={'nWWRp':_0x1d307f(0x141,0x339,0x120,0x20e),'GJRGu':'mars','BCmId':_0x5df069(0x92,0x16c,0x123,0x46),'SBQvI':_0x1d307f(0x1af,0x251,0x4d,0x199),'hoGKv':'uranus','FiorL':function(_0x357685,_0x493199){return _0x357685*_0x493199;},'MtJLm':function(_0x4fbe28,_0x91de64){return _0x4fbe28(_0x91de64);}},_0x1007cc=Math[_0x1d307f(0x2a3,0x4c9,0x28b,0x383)](Math[_0x1d307f(0x3af,0x2c4,0x40a,0x2c3)]()*(0x49*0x4e+0x1*-0x1def+0x1*0x815)),_0x474f04=[_0x54f449[_0x5df069(-0x98,0x20f,0xc2,0x17c)],_0x5df069(0x2af,0x4e,0x174,0x203),_0x54f449[_0x1d307f(0x144,0x2be,0xf7,0x235)],_0x54f449[_0x5df069(-0x77,0x19c,0xad,-0x7d)],_0x5df069(0x1af,0x165,0xb5,0x1b7),_0x54f449[_0x1d307f(0x15d,0x2bb,0xc2,0x1c7)],_0x54f449['hoGKv']];function _0x1d307f(_0x4f42ab,_0x59d91f,_0x1cc931,_0x41aef1){return _0x5032bd(_0x41aef1-0x2f9,_0x59d91f,_0x1cc931-0x18d,_0x41aef1-0xce);}function _0x5df069(_0xcca22d,_0x16609b,_0x2b6675,_0x141819){return _0x5032bd(_0x2b6675-0x1e9,_0x141819,_0x2b6675-0x147,_0x141819-0xd7);}const _0x29698e=_0x474f04[Math[_0x1d307f(0x371,0x26e,0x21a,0x342)](_0x54f449['FiorL'](Math[_0x5df069(0x1d4,0xdd,0x1b3,0x159)](),_0x474f04['length']))];addPlanet(sender,_0x1007cc),_0x54f449['MtJLm'](reply,'*Congratul'+_0x1d307f(0x118,0x97,0x236,0x1db)+enter+enter+(_0x5df069(0x19b,0x316,0x22f,0x21e)+_0x5df069(0x10f,0x33e,0x238,0x12c))+_0x1007cc+(_0x1d307f(0x419,0x1df,0x1ed,0x2db)+_0x5df069(0x1a3,0x1f3,0xe1,-0x76))+_0x29698e+('*\x20selama\x202'+_0x5df069(0x11b,0x3a3,0x253,0x37d)));},-0x39c+-0x27*0xb+0x1101),setTimeout(()=>{const _0x18d80e={'SUwnE':function(_0x1aebab,_0xe3239d){return _0x1aebab(_0xe3239d);},'WVyXi':'Sedang\x20ber'+_0x5d5de6(0x9e,0x69,0xa2,0xc9)+_0x5d5de6(0x1b7,0x4a,0x119,-0x2a)+'nggu...\x202\x20'+_0x47b75e(0x2d9,0x1a4,0x1d3,0x296)};function _0x5d5de6(_0xb7caae,_0x265a7a,_0x28f902,_0x13aa97){return _0x365ab2(_0xb7caae-0x67,_0x265a7a-0xad,_0xb7caae,_0x28f902-0x19d);}function _0x47b75e(_0x3d734b,_0xe76175,_0x426cd1,_0x4fe0ec){return _0x365ab2(_0x3d734b-0xf6,_0xe76175-0x12e,_0x3d734b,_0xe76175-0x53);}_0x18d80e[_0x5d5de6(0x84,0x2fe,0x1dd,0x337)](reply,_0x18d80e['WVyXi']);},0x26aa+0x4ca+-0x2b74),await gameAdd(sender,glimit);break;case'jualbahank'+_0x365ab2(0x1c1,0x140,0x21,0x90):const _0x39c423={};_0x39c423['displayTex'+'t']=_0x5032bd(-0x207,-0x16e,-0x34d,-0x297)+'t';const _0x3dbeb2={};_0x3dbeb2[_0x365ab2(0x1a0,-0x3f,-0x2e,0xb0)]=_0x5032bd(-0x49,0xb,0x6,-0x191),_0x3dbeb2['buttonText']=_0x39c423,_0x3dbeb2[_0x365ab2(-0x3,-0x17b,-0x8e,-0x112)]=0x1;if(isGame(sender,isPremium,isCreator,isOwner,gcounttuser,glimit))return sendButMessage(from,lang[_0x5032bd(-0x1ff,-0x1c0,-0x309,-0x27c)](prefix),'©\x20'+ownername,[_0x3dbeb2]);const _0x305f50={};_0x305f50[_0x5032bd(-0x14c,-0x2c,-0x66,-0x1c)+'t']=_0x365ab2(0xe4,-0x5b,0xec,0x8a);const _0x4d0f64={};_0x4d0f64[_0x365ab2(0x202,0xa,0x169,0xb0)]=_0x5032bd(0x6f,0x165,-0x7b,-0xe8),_0x4d0f64[_0x5032bd(0x3c,-0x88,-0xdf,0x189)]=_0x305f50,_0x4d0f64['type']=0x1;if(!isEventon)return sendButMessage(from,lang[_0x365ab2(0x143,-0x4d,-0xd,0x70)](prefix),'©\x20'+ownername,[_0x4d0f64]);buayar=body[_0x5032bd(-0x102,0x29,-0x122,-0x210)](-0xb*-0x247+-0xb5*0x1+-0x38*0x6f);const hargakimia=-0x6dd*0x4+-0xa*0x25f+-0x85*-0x6a,dapetin=buayar*hargakimia;if(getBertualangPlanet(sender)<=0x7e8+0x6*-0x14e+-0x13)return reply(_0x365ab2(-0x114,-0x1f0,-0x16f,-0x100)+pushname+('\x20kamu\x20tida'+'k\x20punya\x20ba'+_0x5032bd(-0x1b9,-0x291,-0x1a6,-0x23d)));getBertualangPlanet(sender)>=-0xd48+0x12d3*0x1+-0x2*0x2c5&&(jualbahankimia(sender,buayar),addKoinUser(sender,dapetin),await reply(_0x5032bd(0x32,0x1b,0xf4,-0x97)+'AN\x20BERHASI'+'L\x20」*'+enter+enter+(_0x365ab2(-0x24c,-0x159,-0x272,-0x144)+_0x365ab2(-0xce,0x51,-0x196,-0x108)+_0x5032bd(-0x177,-0x2cc,-0xa0,-0x28b))+buayar+enter+(_0x5032bd(-0xd6,-0x11,-0x99,0x3)+_0x365ab2(0x1ae,-0x68,0x22,0xcb))+dapetin+enter+enter+(_0x365ab2(0xd,0x5b,0x1b6,0xcd)+_0x5032bd(-0x7,-0x35,-0x82,-0x16))+getBertualangPlanet(sender)+enter+(_0x365ab2(0x234,0x64,0x1d9,0xfd)+_0x5032bd(-0x44,-0x185,-0xc,-0x14e))+checkATMuser(sender)+enter+enter+(_0x5032bd(-0xac,-0x110,-0x15e,-0xe0)+'berhasil\x20d'+_0x5032bd(-0x80,-0x137,0x69,-0x1d9)+_0x365ab2(-0xd5,0x135,0x4,0x35)+_0x365ab2(0xf6,-0xbb,0x5e,0x61)+_0x365ab2(-0x223,-0x20c,-0x1d8,-0x141))));await gameAdd(sender,glimit);break;case'sisabahank'+_0x5032bd(-0x45,0x103,-0x41,-0x165):teks=_0x365ab2(0xf,-0x135,-0x290,-0x144)+_0x5032bd(0x17,-0xe1,0x22,0x5c)+_0x365ab2(0x4d,-0x113,-0x216,-0xf7)+_0x5032bd(0x3f,-0x1d,-0xbb,-0x106)+pushname+(_0x365ab2(0x171,-0x41,0xd5,0x109)+_0x5032bd(0x66,0xea,-0x7e,0x5e))+getBertualangPlanet(sender)+'_*';const _0x1f3256={};_0x1f3256['quoted']=mek,alpha[_0x5032bd(-0xa8,-0x205,0x4d,-0x1a7)+'e'](from,teks,text,_0x1f3256);break;case _0x365ab2(0x1b,-0x96,-0xf5,-0xa):case _0x5032bd(-0x157,-0x1a4,-0x1c6,-0x1b9):const _0x3eeda0={};_0x3eeda0[_0x365ab2(-0x55,-0x1cc,-0x5,-0x77)+'t']=_0x365ab2(-0x17f,-0x64,0xb,-0x132)+'t';const _0x2a82ad={};_0x2a82ad[_0x5032bd(-0x25,-0xd9,-0x57,-0x86)]=_0x5032bd(-0x49,-0x81,0xa0,0xf0),_0x2a82ad[_0x5032bd(0x3c,0xa5,-0x52,0x5e)]=_0x3eeda0,_0x2a82ad[_0x365ab2(-0x1c9,-0x244,-0x103,-0x112)]=0x1;if(isGame(sender,isPremium,isCreator,isOwner,gcounttuser,glimit))return sendButMessage(from,lang[_0x5032bd(-0x1ff,-0x28c,-0x263,-0xa8)](prefix),'©\x20'+ownername,[_0x2a82ad]);const _0x374ac5={};_0x374ac5[_0x365ab2(0x63,0xdc,-0xf5,-0x77)+'t']=_0x365ab2(0x108,0x1e0,-0x49,0x8a);const _0x3a005b={};_0x3a005b[_0x5032bd(-0x25,-0x119,0x107,0xde)]=_0x5032bd(0x6f,0x96,0x1b,0x18f),_0x3a005b[_0x5032bd(0x3c,0x6,0xab,0xae)]=_0x374ac5,_0x3a005b[_0x5032bd(-0x1e7,-0x12b,-0x206,-0x118)]=0x1;if(!isEventon)return sendButMessage(from,lang[_0x5032bd(-0x65,0x81,0xe7,0xe1)](prefix),'©\x20'+ownername,[_0x3a005b]);cas=q;if(checkATMuser(sender)<cas)return reply('Uang\x20mu\x20ti'+_0x5032bd(-0x2a,-0x1c,0xc3,-0x79)+_0x365ab2(0x15e,0x19,0x90,0x13)+_0x5032bd(-0x1f2,-0x156,-0x2ea,-0x201)+_0x5032bd(-0xdf,-0x22b,-0x13,-0x33));if(args[_0x365ab2(-0x127,-0x198,-0x232,-0x130)]<0xac6+0xfa3+-0x1a68)return reply(_0x365ab2(0xdb,0x130,0x123,0x5e)+_0x5032bd(-0x71,-0x82,0x34,0xec));if(isNaN(cas))return reply(_0x5032bd(-0xb1,-0x45,-0x1f0,-0x15d)+'n\x20berapa?');const resg=['Kamu\x20MENAN'+'G!!',_0x5032bd(0x5b,-0xdf,-0x10,0x4a)+'!!'];bayar=confirmATM(sender,cas),setTimeout(()=>{function _0x5f47cf(_0x32325b,_0x1b2294,_0x171740,_0x56c5b6){return _0x365ab2(_0x32325b-0x10,_0x1b2294-0x17a,_0x56c5b6,_0x1b2294-0x5d);}const _0x430d68={'MIOXs':function(_0xa07f0b,_0x38e21c){return _0xa07f0b(_0x38e21c);},'Yfnkq':_0x5f47cf(0x45,0x1a0,0x2ca,0xab)+_0x3eb8ba(0x366,0x2af,0x17b,0x28c)+'\x20silahkan\x20'+_0x3eb8ba(0x1ef,0x102,0x14b,0x1df),'hiDUK':function(_0x3a0ff9,_0x2300fd){return _0x3a0ff9(_0x2300fd);},'BKzkb':function(_0x168328,_0x4a3a8c){return _0x168328(_0x4a3a8c);},'InQCx':function(_0x484e48,_0x338178){return _0x484e48*_0x338178;},'IzMhc':function(_0xab8241,_0x2cfc73){return _0xab8241+_0x2cfc73;},'DqyGe':function(_0x30864b,_0x139c1d){return _0x30864b*_0x139c1d;},'derLz':function(_0xade31e,_0xb794a){return _0xade31e==_0xb794a;},'dBooj':'Kamu\x20MENAN'+_0x3eb8ba(0xa7,0x19e,0x2e8,0x1a2),'nqpOd':function(_0x3fdaff,_0x6a436){return _0x3fdaff!==_0x6a436;},'NWSVh':'JYjmN','mweCP':function(_0x2befe9,_0x32bfdd,_0x3eaf7e){return _0x2befe9(_0x32bfdd,_0x3eaf7e);},'uqjbG':'Kamu\x20KALAH'+'!!','ZRlOi':function(_0x1c4119,_0x1b0ce5){return _0x1c4119!==_0x1b0ce5;},'fyaxT':_0x3eb8ba(0x2e8,0x2fe,0x202,0x3e1),'vPQSK':function(_0x2803e7,_0x399fa4){return _0x2803e7(_0x399fa4);},'BSddx':_0x3eb8ba(0x24a,0x339,0x2b1,0x3df)};function _0x3eb8ba(_0x9d0cd7,_0x3a9b10,_0xd6f08a,_0x53a6a1){return _0x5032bd(_0x3a9b10-0x2f9,_0xd6f08a,_0xd6f08a-0x1cf,_0x53a6a1-0x161);}const _0x43aca3=Math[_0x5f47cf(0x177,0x1bc,0x14d,0xdc)](_0x430d68[_0x5f47cf(0xec,0x115,0x120,0x270)](Math[_0x5f47cf(0xb1,0xfc,0x1e7,0x121)](),-0x18d1+0x82b+0x10a8*0x1)),_0x44e59c=_0x430d68['IzMhc'](cas,0xf*-0x3d+0x1f50+-0x1bbd),_0x39c983=resg[Math[_0x5f47cf(0x1a9,0x17b,0x3f,0x24f)](_0x430d68['DqyGe'](Math[_0x5f47cf(0x1ba,0xfc,0x27,-0x5d)](),resg[_0x3eb8ba(0x133,0xf4,0x1e1,0x139)]))];if(_0x430d68[_0x3eb8ba(-0x4b,0xef,0x134,0xd7)](_0x39c983,_0x430d68[_0x5f47cf(0x1c,0x72,0x60,0x4e)]))_0x430d68[_0x5f47cf(-0xa4,-0xd2,-0x4,0x84)](_0x430d68[_0x5f47cf(0x27e,0x139,0x29,0x157)],_0x430d68[_0x5f47cf(0x294,0x139,0x192,0x1bf)])?_0x430d68[_0x5f47cf(0x144,0x17a,0x100,0x110)](_0x55cb54,_0x430d68[_0x5f47cf(0xc4,0xd9,0x119,0x6f)]):(_0x430d68[_0x3eb8ba(0x415,0x2bb,0x1c3,0x330)](addKoinUser,sender,_0x44e59c),reply('*Congratul'+'ation\x20🎊*'+enter+enter+(_0x3eb8ba(0x98,0xd3,0x80,0x0)+_0x5f47cf(-0xa5,0xa2,0x3e,0xe)+_0x5f47cf(0x91,-0x10,-0xe7,-0xd9)+_0x5f47cf(0x139,0x1b9,0x2db,0x171))+_0x44e59c+'_*'+enter+enter+(_0x5f47cf(-0x1b,-0xc6,-0x1f6,-0x3e)+_0x3eb8ba(0x354,0x293,0x375,0x1c0)+'\x20membeli\x20l'+_0x3eb8ba(0x3b3,0x369,0x27e,0x486))));else _0x39c983==_0x430d68[_0x3eb8ba(0x2bf,0x1b6,0x153,0x8c)]?_0x430d68[_0x3eb8ba(0x2c9,0x271,0x325,0x27f)](_0x430d68['fyaxT'],_0x3eb8ba(0x1c2,0x2fe,0x40e,0x1ba))?_0x430d68['hiDUK'](_0x50f670,_0x5f47cf(0xb6,0x1a0,0x1e4,0x246)+_0x3eb8ba(0x25f,0x2af,0x1e5,0x337)+_0x3eb8ba(0xe7,0x14a,0x17c,0x29c)+_0x3eb8ba(0x13b,0x102,0x20a,0x141)):(confirmATM(sender,cas),_0x430d68[_0x5f47cf(0xb4,0x66,0x183,-0x2)](reply,_0x3eb8ba(0xe8,0x172,0x21b,0x28d)+'\x20🥺\x20dan\x20keh'+_0x3eb8ba(0x3ae,0x2f5,0x1e8,0x3f5)+'ng\x20sebesar'+'\x20'+cas)):_0x5f47cf(0x54,0x136,0xf3,0x249)===_0x5f47cf(-0x19e,-0x88,-0x109,0x18)?_0x430d68[_0x5f47cf(0x10d,0x76,-0x2e,0x5)](_0xca0681,_0x3eb8ba(0x24d,0x249,0x2ad,0x14b)+'ggunaan\x20#t'+_0x3eb8ba(0x462,0x34d,0x385,0x366)+_0x3eb8ba(0x22c,0x378,0x476,0x234)+_0x5f47cf(0x1d,0xb8,-0x70,0xe7)+_0x3eb8ba(0x2ee,0x201,0x302,0x29f)+_0x3eb8ba(0x13c,0x222,0xcc,0x259)+'hkan\x20cek\x20k'+_0x5f47cf(-0x10e,-0x6c,-0x157,0x6b)+'\x20ketik\x20#ko'+_0x5f47cf(-0x10b,-0x53,-0x84,-0xbb)):reply(_0x430d68[_0x3eb8ba(0x222,0x296,0x399,0x318)]);},-0x1*-0x298+-0x2*-0xa79+-0xbd2),setTimeout(()=>{function _0x13e6cf(_0x1774d8,_0x218632,_0x158972,_0x5715e0){return _0x5032bd(_0x218632-0x7ce,_0x158972,_0x158972-0xce,_0x5715e0-0x191);}reply('Menunggu\x20h'+_0x13e6cf(0x933,0x84c,0x899,0x754));},0x10d1+0x2*0xd0d+0x1*-0x2aeb),await gameAdd(sender,glimit);break;case'inv':case _0x365ab2(0x7b,0x94,-0x31,-0x5):case _0x5032bd(-0xf2,-0x128,-0xa2,-0x20f):{try{pp_userb=await alpha['getProfile'+_0x5032bd(-0x209,-0x166,-0x157,-0x2c6)](sender);}catch{pp_userb=_0x365ab2(0x17a,-0x32,0x83,0xb2)+_0x365ab2(0x14a,-0x108,0x136,0x3e)+_0x5032bd(-0x1ea,-0x2bd,-0xb9,-0x206)+_0x5032bd(-0x15f,-0x92,-0x28e,-0x238)+'g';}let pp_userz=await getBuffer(pp_userb);inventory=_0x5032bd(-0x16b,-0xbb,-0x1c3,-0x2c)+_0x365ab2(0x26e,0xb1,0xa7,0x133)+_0x365ab2(0x12b,0x1b9,0x134,0x10e)+_0x365ab2(-0x162,0xe3,-0x159,-0x53)+getMiningcoal(sender)+(_0x5032bd(-0x78,0x0,-0x5f,-0x139)+_0x365ab2(-0xf7,0x1,0x58,-0x5a))+getMiningstone(sender)+(_0x5032bd(0x4e,0x178,0x46,-0xa7)+_0x5032bd(-0x166,-0x278,-0x173,-0x13f))+getMiningore(sender)+(_0x365ab2(0x129,0x110,0x33,0x10)+_0x365ab2(0x14f,-0x40,0xc5,0x2a))+getMiningingot(sender)+(_0x365ab2(0xa1,-0x53,-0x189,-0x79)+':\x20')+getNebangKayu(sender)+(_0x365ab2(0x115,0x199,0x1d6,0x137)+':\x20')+getMancingIkan(sender)+(_0x365ab2(0x266,0x16d,0x1d1,0x134)+_0x5032bd(-0x1d8,-0x168,-0x253,-0x1f5)+_0x365ab2(-0x15a,-0x18d,-0x1d,-0xe9)+_0x5032bd(-0x10f,-0x47,-0x61,-0x1e7)+_0x5032bd(0x50,0x4f,0x106,0x150)+'nyak\x20inven'+'tory'),alpha[_0x365ab2(0x70,-0x33,0x6b,0x2d)+'e'](from,pp_userz,image,{'thumbnail':Buffer['alloc'](-0x920+0x185a+-0x2*0x79d),'quoted':mek,'caption':inventory});}break;case _0x365ab2(0x140,0x1e9,0x8c,0xa4):kodenyab='Kode\x20bahas'+_0x365ab2(-0x24,0xb8,0x9,-0x57)+_0x365ab2(0x145,-0x18,0x190,0xc9)+_0x365ab2(0x15,0x35,0x12,-0xfe)+'\x20\x20\x20\x20\x20\x20\x20\x20Al'+'banian\x0a\x20\x20\x20'+'\x20ar\x20\x20\x20\x20\x20\x20\x20'+'\x20Arabic\x0a\x20\x20'+_0x5032bd(0x9,0x6b,-0x98,0x10d)+_0x5032bd(-0x1dc,-0x2d9,-0xa4,-0x9b)+'\x0a\x20\x20\x20\x20ca\x20\x20\x20'+_0x365ab2(0x58,0x1b8,0x7,0xbb)+'an\x0a\x20\x20\x20\x20zh\x20'+_0x365ab2(0x27,-0x16,-0x43,0x68)+_0x365ab2(0x1c5,0xd3,-0x68,0x98)+_0x5032bd(-0x18e,-0x84,-0x1b4,-0x1cb)+_0x365ab2(-0x4,-0xc7,-0x133,-0xb6)+_0x365ab2(-0x228,-0x66,-0x251,-0x11f)+_0x5032bd(0x4b,-0x2f,-0xef,0x16e)+_0x5032bd(0x3,-0xc9,0x91,-0xdb)+_0x5032bd(-0xa9,-0x157,0x82,-0x1a3)+_0x5032bd(-0x215,-0x21a,-0xcd,-0x2fe)+'Chinese\x20(C'+_0x365ab2(-0x70,-0x14f,-0x15c,-0xeb)+_0x365ab2(0xf3,0xaf,-0x86,0xca)+_0x365ab2(0xa4,0x8a,-0xfe,-0x70)+_0x365ab2(-0xc,-0x138,0x37,-0x7f)+_0x5032bd(-0x129,-0xfc,0x18,-0x1f6)+'ch\x0a\x20\x20\x20\x20da\x20'+_0x5032bd(0x21,0x133,0x17c,-0xbf)+'ish\x0a\x20\x20\x20\x20nl'+_0x365ab2(-0x68,0x1a2,-0xaf,0x50)+_0x365ab2(-0xf7,-0x15f,-0xfa,-0x32)+_0x365ab2(-0xf,0x109,0x48,0x20)+_0x5032bd(0x75,0xc4,-0x70,0xec)+_0x5032bd(-0x1bf,-0xc9,-0xcc,-0xd3)+_0x5032bd(-0xc7,0x55,-0x1e5,-0xbf)+_0x365ab2(0x284,0x25d,0x16e,0x13c)+_0x365ab2(-0x138,-0x1f8,-0x95,-0xbf)+_0x365ab2(0x181,0x30,0xb0,0x118)+_0x365ab2(-0x5,0x34,0x1a3,0xa8)+_0x5032bd(-0x6,-0x27,-0x164,-0x12)+_0x365ab2(-0x18a,-0x192,0x103,-0x4d)+'\x20\x20\x20English'+_0x365ab2(-0xc1,0x8a,0x58,0x3)+'tates)\x0a\x20\x20\x20'+'\x20eo\x20\x20\x20\x20\x20\x20\x20'+_0x5032bd(-0x1a8,-0x171,-0x101,-0x14b)+_0x365ab2(-0xf1,-0x16f,-0x24b,-0x154)+_0x365ab2(0x2,0x213,0x1a3,0xfc)+_0x365ab2(-0x38,-0x1fc,-0x41,-0xff)+_0x365ab2(0x11d,0xb2,0x18a,0x89)+_0x365ab2(-0x1aa,-0x131,0x74,-0xcd)+_0x365ab2(0x110,0x222,0xe9,0x113)+_0x5032bd(-0x223,-0x1b5,-0x204,-0x284)+_0x365ab2(-0xb4,-0x4f,0xc2,-0x62)+_0x365ab2(0x98,-0x186,-0x139,-0x48)+'t\x20\x20\x20\x20\x20\x20\x20\x20H'+_0x5032bd(-0x222,-0x169,-0x2a8,-0x163)+_0x365ab2(-0x5a,-0x1f4,-0x48,-0xd8)+_0x365ab2(-0x1c3,-0x63,0x0,-0x12e)+'ndi\x0a\x20\x20\x20\x20hu'+'\x20\x20\x20\x20\x20\x20\x20\x20Hu'+_0x5032bd(-0xf9,-0x210,0x22,0x1c)+_0x5032bd(-0xec,-0xbd,-0x1c2,-0x1ce)+_0x365ab2(0x45,0x169,0x117,0x104)+'c\x0a\x20\x20\x20\x20id\x20\x20'+'\x20\x20\x20\x20\x20\x20Indo'+_0x365ab2(0x160,0xf0,0x28b,0x150)+_0x5032bd(-0x1e9,-0x2b6,-0x156,-0x1c5)+'\x20Italian\x0a\x20'+_0x365ab2(-0xaa,-0xbf,-0x162,-0x93)+'\x20\x20\x20Japanes'+_0x5032bd(-0x218,-0x1c4,-0x258,-0x125)+_0x365ab2(-0x1de,-0x20b,-0x3c,-0x127)+_0x5032bd(-0xf,0x9a,-0x13e,-0xf8)+'\x20\x20\x20\x20\x20\x20\x20Lat'+_0x365ab2(0xed,0xcb,-0x3c,0x2f)+'\x20\x20\x20\x20\x20\x20\x20Lat'+_0x5032bd(-0x55,0x68,-0x16c,-0x9d)+_0x365ab2(-0x21f,-0x17a,-0x193,-0xd4)+'acedonian\x0a'+'\x20\x20\x20\x20no\x20\x20\x20\x20'+_0x365ab2(0xbc,-0x5,0x6d,-0x61)+_0x365ab2(0x6,0x1a5,0x13b,0x12f)+'\x20\x20\x20\x20\x20\x20\x20\x20Po'+_0x365ab2(-0x6e,0x14e,0xdb,0xa0)+_0x365ab2(-0x34,-0xbb,-0x147,-0x11)+_0x365ab2(-0x5d,0x22,0x166,0x79)+_0x365ab2(-0x48,-0x11f,0xfa,0x0)+_0x365ab2(-0x276,-0x112,-0x11c,-0x152)+'uese\x20(Braz'+_0x365ab2(0x176,0x208,0x22c,0x12e)+_0x5032bd(-0x197,-0x1ee,-0x2da,-0x2a6)+_0x5032bd(-0x4f,-0x27,-0x17a,0x4b)+_0x5032bd(0x44,-0x80,0x82,0x197)+_0x5032bd(-0x170,-0x1aa,-0x242,-0x21e)+'\x20\x20\x20sr\x20\x20\x20\x20\x20'+'\x20\x20\x20Serbian'+'\x0a\x20\x20\x20\x20sk\x20\x20\x20'+(_0x365ab2(0xe,0xd4,0xa,-0x60)+_0x365ab2(-0x4f,-0x14,0x14a,0x59)+_0x5032bd(-0x1de,-0x2f9,-0x204,-0x21f)+_0x365ab2(0xb9,-0xff,0xc3,-0x56)+_0x365ab2(-0x3a,-0xb9,-0xba,-0x45)+_0x5032bd(0x26,0x0,0xb6,0x13b)+_0x365ab2(0x198,0x277,0x17a,0x12a)+_0x365ab2(0x1a5,-0x74,0x200,0xba)+'anish\x20(Uni'+_0x365ab2(0x8b,-0x10,-0xc,-0xc)+')\x0a\x20\x20\x20\x20sw\x20\x20'+'\x20\x20\x20\x20\x20\x20Swah'+'ili\x0a\x20\x20\x20\x20sv'+_0x5032bd(-0x163,-0x249,-0x128,-0x2a9)+_0x5032bd(-0x1b3,-0xf2,-0x122,-0x193)+_0x5032bd(-0xc8,-0x110,0x7e,-0x1ca)+_0x5032bd(-0x53,-0xe3,0x4,0xf9)+_0x365ab2(0xb3,-0x9c,-0x45,-0x5b)+_0x365ab2(0x1f1,-0x11,0x27,0x121)+_0x5032bd(-0x10c,-0x188,-0x88,0x44)+_0x5032bd(-0x69,-0x65,0x6e,-0x2f)+_0x365ab2(-0x57,-0x5d,0x1c9,0xac)+_0x5032bd(-0x214,-0x156,-0x2a3,-0x2a1)+_0x365ab2(0xd5,0x137,-0x37,0x108)+'\x20\x20\x20\x20\x20\x20Wels'+_0x5032bd(-0xd4,-0x76,0x13,-0x18c)),reply(kodenyab);break;case _0x5032bd(-0x9e,0x1d,-0x1f3,-0x43):const _0x1836ea={};_0x1836ea[_0x365ab2(-0x147,0xa5,-0x15a,-0x2e)]=mek;if(args[_0x5032bd(-0x205,-0x18d,-0x1ae,-0x2ab)]<0x1092+0xd*0xe6+-0x1c3f)return alpha[_0x365ab2(-0x8,0x14e,-0x45,0x2d)+'e'](from,_0x5032bd(-0x70,0xd0,0x24,0xe)+_0x5032bd(0x13,0x14f,0x11a,0x27)+_0x365ab2(-0x3d,-0xca,-0xd6,-0x59),text,_0x1836ea);kodenya=['af','sq','ar','hy','ca','zh',_0x365ab2(-0xca,-0xe9,-0x1cd,-0xf0),_0x365ab2(0x2,-0x7,0x1d3,0xd7),'zh-yue','hr','cs','da','nl','en','en-au','en-uk','en-us','eo','fi','fr','de','el','ht','hi','hu','is','id','it','ja','ko','la','lv','mk','no','pl','pt',_0x365ab2(0x106,0xe7,0x214,0x10b),'ro','ru','sr','sk','es',_0x5032bd(-0xae,-0x5,0x1,0x64),_0x365ab2(0x1db,0x1aa,0x181,0x12b),'sw','sv','ta','th','tr','vi','cy'];try{const gtts=require(_0x5032bd(-0x1f1,-0x234,-0x208,-0x2f3))(args[0x4bd*-0x7+0x113e*-0x1+-0x3269*-0x1]),_0x358edc={};_0x358edc[_0x365ab2(-0xd2,0x126,0xcf,-0x2e)]=mek;if(args['length']<-0x1d17+-0x1*0x117d+0x2e96)return alpha['sendMessag'+'e'](from,_0x5032bd(-0xbe,0x87,-0x212,-0xe6)+_0x5032bd(-0x1c2,-0x116,-0x24b,-0xcc),text,_0x358edc);dtt=body[_0x365ab2(-0x26,-0x16a,-0x108,-0x2d)](-0x1*-0x1004+-0x4ee*0x1+-0x1*0xb0d),ranm=getRandom(_0x5032bd(-0x109,-0x1d3,-0x1d,-0x1e2)),rano=getRandom(_0x365ab2(-0x205,-0x204,-0x15d,-0x11e)),dtt[_0x365ab2(-0x26c,-0x116,-0x262,-0x130)]>-0x20e4+0x19c2+0x97a?reply(_0x5032bd(0x6c,0x4b,-0x46,0x4b)+_0x5032bd(-0x1a5,-0x12f,-0x2ef,-0xcb)+'m'):gtts[_0x365ab2(-0x177,-0x17c,-0x15b,-0xa5)](ranm,dtt?dtt:'id',function(){const _0x2d778a={'ngisL':function(_0x6336eb,_0x20d80c){return _0x6336eb*_0x20d80c;},'htUTO':function(_0x214be1,_0x2a9d54){return _0x214be1*_0x2a9d54;},'fBwvI':function(_0x5c43d0,_0x67a90,_0x2f88af){return _0x5c43d0(_0x67a90,_0x2f88af);},'KkeeH':function(_0x25e50d,_0xe37be4,_0x1b22a2){return _0x25e50d(_0xe37be4,_0x1b22a2);},'EVGmg':function(_0x3ec61b,_0x4023e2,_0x5d8da8){return _0x3ec61b(_0x4023e2,_0x5d8da8);},'riKDc':function(_0x4afafc,_0x1ec66b){return _0x4afafc(_0x1ec66b);},'UZEiQ':function(_0x205315,_0x5a2302){return _0x205315!==_0x5a2302;},'APJcu':_0x2262d9(0x4b,0x2e6,0x1a2,0x19c),'ZpRou':_0x2262d9(0x312,0x166,0x132,0x220),'VYeij':'Gagal\x20om:('};function _0x2262d9(_0x1b79a2,_0x4fcfba,_0x352a4f,_0x1aa52c){return _0x365ab2(_0x1b79a2-0xee,_0x4fcfba-0x5,_0x352a4f,_0x1aa52c-0xe8);}function _0x571a75(_0x2c533e,_0x545336,_0xda2b93,_0x4d1e0d){return _0x5032bd(_0x545336-0x1a6,_0xda2b93,_0xda2b93-0x15c,_0x4d1e0d-0x87);}_0x2d778a[_0x571a75(0x17,0x159,0x29f,0xc4)](exec,_0x2262d9(0x103,-0x47,-0x17,0xcd)+ranm+(_0x571a75(0x4f,0x6b,0xce,-0x9)+'\x20-vn\x20-c:a\x20'+_0x571a75(0x120,0x152,0x6a,0x1dc))+rano,_0x309ec3=>{function _0x330706(_0x181f0a,_0x43c4b8,_0x71f174,_0xeeca26){return _0x571a75(_0x181f0a-0x90,_0xeeca26-0x3c,_0x43c4b8,_0xeeca26-0x124);}function _0x5f4da6(_0x5da112,_0x1e424d,_0x44cddf,_0x32d771){return _0x571a75(_0x5da112-0x75,_0x5da112-0xb4,_0x1e424d,_0x32d771-0x20);}if(_0x2d778a[_0x330706(0x11a,0x84,0x12d,0xec)](_0x2d778a[_0x330706(0x278,0x184,0x1b0,0x15c)],_0x2d778a[_0x330706(0x65,0x2b4,0xe6,0x1bc)])){const _0x32ebd2=_0x330706(0x1ef,0x2d4,0xb9,0x1d4)[_0x330706(0x1b1,0x2fc,0x20f,0x19f)]('|');let _0x300475=-0x1*-0x171b+0x2623+-0x3d3e;while(!![]){switch(_0x32ebd2[_0x300475++]){case'0':if(_0x309ec3)return reply(_0x2d778a[_0x5f4da6(0x90,-0x72,0x8e,-0x25)]);continue;case'1':buff=fs['readFileSy'+'nc'](rano);continue;case'2':fs[_0x330706(0x12d,-0x1d,0xb0,0xd1)](rano);continue;case'3':fs['unlinkSync'](ranm);continue;case'4':const _0xfd9a4={};_0xfd9a4[_0x330706(0x132,-0x71,0x20a,0xdf)]=mek,_0xfd9a4[_0x330706(0x15e,0x3,0xac,0x161)]=!![],alpha['sendMessag'+'e'](from,buff,audio,_0xfd9a4);continue;}break;}}else{const _0x51cc46=_0x1de1f8['ceil'](_0x2d778a['ngisL'](_0x416205['random'](),0x53*-0x32+-0xc3a+-0x3*-0x99c)),_0x4fb219=_0x449099[_0x5f4da6(0x2e4,0x23b,0x1b4,0x25e)](_0x2d778a['htUTO'](_0x527ab9['random'](),-0x373+0x1*-0x19dc+0x1d6d)),_0x19827a=_0x9258c4[_0x330706(0x2ff,0x34c,0x383,0x26c)](_0x2d778a[_0x330706(0x150,0x16f,-0x1a,0xfb)](_0x45b0a9[_0x5f4da6(0x224,0x2b0,0x1b4,0x26c)](),0xb05*-0x2+-0x6e8+-0x424*-0x7));_0x2d778a[_0x330706(0xca,0x21b,0x99,0x138)](_0x2b8f76,_0x7e4cfa,_0x51cc46),_0x2d778a['KkeeH'](_0xb2012e,_0x1cafa1,_0x4fb219),_0x2d778a[_0x330706(0x2a2,0x189,0x1b2,0x195)](_0x8b1fc7,_0x3deccc,_0x19827a),_0x2d778a[_0x5f4da6(0x2ce,0x361,0x2c2,0x21a)](_0x4bdb03,_0x5f4da6(0x122,0x58,0x4e,0x1aa)+'ation\x20🎊*'+_0x2d6b5d+_0x4c370c+('\x20kamu\x20mend'+_0x5f4da6(0x1e4,0x12e,0x190,0x31b))+_0x51cc46+_0x330706(0x7a,-0x85,0x7e,0x47)+_0x4fb219+('*\x20coal\x20,\x20d'+_0x5f4da6(0x15a,0x107,0x223,0x231))+_0x19827a+_0x5f4da6(0x1dc,0x303,0x2bb,0x32b));}});});}catch{reply(_0x5032bd(-0xb0,-0x163,-0xd1,0x5b)+_0x365ab2(-0xa2,0x6c,-0xe2,-0x44)+_0x365ab2(0xfa,0x235,0x171,0x129)+'hasa\x20text\x0a'+'Ex.\x20#tts\x20e'+_0x365ab2(-0xcf,-0x125,-0xb5,-0x23)+_0x5032bd(-0xd7,-0xea,0x85,-0x12e)+_0x365ab2(0x26c,0x8c,0x26a,0x122)+'ode\x20bahasa'+_0x365ab2(0xca,0x4e,-0xb6,0xa7)+_0x5032bd(-0x185,-0x117,-0x260,-0x3b));}break;case _0x5032bd(-0xea,-0x14d,0x60,-0x93):{const _0x38a4bf={};_0x38a4bf[_0x365ab2(0x96,-0x1bf,0x91,-0x77)+'t']=_0x5032bd(-0x207,-0x1b3,-0x1c5,-0x2d7)+'t';const _0x259faa={};_0x259faa[_0x5032bd(-0x25,-0xfd,-0x7c,-0xbd)]=_0x365ab2(0x180,0x3,0xb6,0x8c),_0x259faa[_0x5032bd(0x3c,-0x65,-0x3b,-0x65)]=_0x38a4bf,_0x259faa[_0x365ab2(-0x6a,-0x252,-0x3f,-0x112)]=0x1;if(isLimit(sender,isPremium,isCreator,isOwner,limitawal,limit))return sendButMessage(from,lang[_0x365ab2(0xb0,0x125,-0xb2,0x8c)](prefix),'©\x20'+ownername,[_0x259faa]);if(!q)return reply(_0x5032bd(-0xff,-0x126,-0xf4,-0x21f)+'a?');var halzmal=q;const ig=require('instatouch'),_0x4e25ea={};_0x4e25ea[_0x5032bd(0x38,-0x68,0x93,-0x5b)]=0x0,_0x4e25ea['mediaType']=_0x365ab2(-0x11e,-0x9e,-0x34,-0x78),_0x4e25ea[_0x365ab2(-0x92,-0x2a,-0x56,-0x11b)]=0x0,_0x4e25ea[_0x365ab2(-0xa4,-0x130,-0x1a,-0x11a)]=_0x365ab2(0xf,0x1d8,0x250,0x127)+'2989573374'+_0x365ab2(-0xd3,-0x1ea,-0x11f,-0x118)+_0x365ab2(-0x8f,-0x156,-0x72,-0x80);const options=_0x4e25ea,igstalk=_0x11532d=>new Promise((_0x4910aa,_0xee180a)=>{const _0xa001c7={'ojYHJ':function(_0x1513c0,_0x4ecefc){return _0x1513c0*_0x4ecefc;},'tNlec':function(_0x4b8d9d,_0x51acf6){return _0x4b8d9d*_0x51acf6;},'GWJCc':function(_0x1f8f56,_0x240d15,_0x16a562){return _0x1f8f56(_0x240d15,_0x16a562);},'LOvJK':function(_0x145cc6,_0x3a6145,_0x33b2e6,_0x915c1,_0x2897e4,_0x4b75c0,_0x1f3769){return _0x145cc6(_0x3a6145,_0x33b2e6,_0x915c1,_0x2897e4,_0x4b75c0,_0x1f3769);},'OMqka':_0x551216(0x18b,0x278,0x231,0x296)+'ry\x20🗃️','RELjD':function(_0x4869c5,_0x4ca345){return _0x4869c5(_0x4ca345);},'fkOLg':function(_0x58db64,_0x4a5905){return _0x58db64===_0x4a5905;},'OzZVk':function(_0x3bf934,_0x2919d6){return _0x3bf934(_0x2919d6);},'pTBfB':function(_0x3d8902,_0x59e613){return _0x3d8902===_0x59e613;},'IeljX':_0x551216(-0xbb,-0x1e9,-0x10b,-0x189),'bXrXA':_0x330069(0x325,0x239,0x308,0x1d1)};user=_0x11532d[_0x551216(0x90,0x16c,-0xa,0xf9)](/@/gi,'');(_0xa001c7['fkOLg'](user,undefined)||!user)&&_0xa001c7[_0x551216(-0x8e,0x48,-0x92,-0x1bd)](_0xee180a,'No\x20Name\x20In'+_0x330069(0x390,0x26b,0x367,0x3c3));function _0x330069(_0x618ce1,_0x5371ea,_0x9db360,_0x2e0387){return _0x5032bd(_0x9db360-0x488,_0x618ce1,_0x9db360-0x1cf,_0x2e0387-0xc0);}function _0x551216(_0x2d92f8,_0x21d8de,_0x29b7c1,_0x2eac76){return _0x365ab2(_0x2d92f8-0xd6,_0x21d8de-0x170,_0x2eac76,_0x2d92f8-0x3e);}try{if(_0xa001c7[_0x330069(0x48c,0x3ea,0x344,0x329)](_0xa001c7[_0x551216(-0x11e,-0x33,-0x17f,-0x133)],_0xa001c7[_0x330069(0x470,0x461,0x4b2,0x48f)])){const _0x10c927=_0x2266cf[_0x551216(0x19d,0x2d6,0x2d1,0x87)](_0xa001c7[_0x551216(0xfa,0x19d,-0x13,0x162)](_0x3e00a4[_0x551216(0xdd,-0x7a,0x13e,0x1e8)](),-0x77*-0x40+-0x11c0+-0xba6)),_0x350a73=_0x4fd70a[_0x330069(0x508,0x440,0x512,0x514)](_0xa001c7[_0x330069(0x29d,0x446,0x306,0x2fc)](_0x153c90['random'](),0xf61+-0x1997+0xa63));_0xa001c7[_0x330069(0x458,0x22c,0x347,0x428)](_0x69e4cb,_0x4e2303,_0x10c927),_0xa001c7[_0x551216(-0x2e,-0x2a,-0xce,0x7f)](_0x1320f0,_0x54e73f,_0x350a73);const _0x1fcb00={};_0x1fcb00[_0x551216(0x10,-0x59,-0x48,-0x80)]=_0x22c3a1,_0xa001c7[_0x330069(0x202,0x245,0x2d7,0x27e)](_0x13f4ac,_0xe05705,'*Congratul'+_0x551216(-0xb,0x111,-0x31,-0x15e)+_0x598eee+_0x4fa138+(_0x330069(0x485,0x2bc,0x3d9,0x451)+_0x330069(0x388,0x5fa,0x4d7,0x3b9))+_0x10c927+('*\x20batu\x20dan'+'\x20*')+_0x350a73+_0x330069(0x5f6,0x3f0,0x4f5,0x5ce)+_0x40e93b+_0x5919bb+('Cek\x20invent'+_0x551216(-0x4,-0xc4,0x128,-0xb3)+_0x551216(0xab,-0x1d,0x8f,0x131)+_0x551216(-0x3c,-0x9f,-0x19a,0x87))+_0x1069b8+_0x330069(0x44d,0x427,0x396,0x467),'©\x20'+_0x1d4fce,_0x376663,[{'buttonId':_0x551216(0xb3,0x147,0x1f5,0x2b),'buttonText':{'displayText':_0xa001c7[_0x330069(0x2b3,0x289,0x2d1,0x1a2)]},'type':_0x330069(0x3a0,0x1bb,0x277,0x375)}],_0x1fcb00);}else ig[_0x551216(0x48,-0xc9,0x171,-0x20)+'a'](user,options)[_0x551216(0x15a,0xcd,0x1fc,0x1e4)](async _0x34cf31=>{const _0x5897c7={};_0x5897c7[_0x2a9284(0x791,0x6c2,0x7ea,0x84b)]=_0x34cf31[_0x27a437(0x733,0x681,0x886,0x607)]['user'][_0x2a9284(0x5ce,0x5da,0x613,0x517)+'c_url'],_0x5897c7['high']=_0x34cf31[_0x2a9284(0x768,0x6a9,0x79a,0x642)][_0x27a437(0x706,0x7d6,0x6b8,0x798)]['profile_pi'+_0x27a437(0x69a,0x6c3,0x736,0x5b8)];const _0x5141e1={};function _0x27a437(_0x59c89a,_0x4b4053,_0x269c17,_0x3911ef){return _0x551216(_0x59c89a-0x684,_0x4b4053-0x4c,_0x269c17-0x169,_0x269c17);}_0x5141e1['url']=_0x34cf31[_0x27a437(0x733,0x85e,0x62d,0x849)][_0x2a9284(0x73b,0x7b7,0x657,0x619)]['external_u'+'rl'],_0x5141e1['id']=_0x34cf31[_0x2a9284(0x768,0x6f9,0x7a5,0x896)][_0x2a9284(0x73b,0x673,0x7a9,0x82a)]['id'],_0x5141e1['username']=user,_0x5141e1[_0x27a437(0x691,0x5ab,0x71d,0x7e1)]=_0x34cf31[_0x27a437(0x733,0x7d0,0x6e9,0x5e6)][_0x2a9284(0x73b,0x859,0x614,0x6e3)]['full_name'],_0x5141e1[_0x27a437(0x818,0x7b1,0x742,0x82a)+'le']=_0x2a9284(0x650,0x646,0x5c9,0x56f)+_0x2a9284(0x6a7,0x768,0x5dc,0x6ed)+'m/'+user,_0x5141e1[_0x27a437(0x751,0x66a,0x66d,0x82d)]=_0x34cf31[_0x27a437(0x733,0x83f,0x761,0x6be)][_0x27a437(0x706,0x5b8,0x7a5,0x5c7)]['is_private'],_0x5141e1[_0x2a9284(0x65a,0x733,0x543,0x584)]=_0x34cf31[_0x2a9284(0x768,0x707,0x836,0x626)]['user'][_0x27a437(0x692,0x7d9,0x7db,0x5bc)+'d'],_0x5141e1[_0x2a9284(0x66f,0x624,0x5f5,0x625)]=_0x34cf31[_0x2a9284(0x768,0x74f,0x767,0x747)][_0x2a9284(0x73b,0x73e,0x62c,0x64b)][_0x2a9284(0x651,0x4f8,0x6c5,0x69b)],_0x5141e1['follower']=_0x34cf31['graphql'][_0x27a437(0x706,0x781,0x858,0x791)]['edge_follo'+_0x27a437(0x699,0x6a2,0x71e,0x787)][_0x27a437(0x7cf,0x803,0x788,0x73d)],_0x5141e1[_0x2a9284(0x850,0x75b,0x809,0x80a)]=_0x34cf31[_0x2a9284(0x768,0x6a6,0x680,0x7a5)][_0x2a9284(0x73b,0x748,0x6e8,0x7d4)]['edge_follo'+'w'][_0x2a9284(0x804,0x8af,0x893,0x8cf)],_0x5141e1[_0x27a437(0x639,0x5fa,0x563,0x72e)+'b']=_0x34cf31[_0x2a9284(0x768,0x746,0x730,0x710)][_0x27a437(0x706,0x61a,0x837,0x681)][_0x2a9284(0x73f,0x809,0x676,0x767)+_0x2a9284(0x82d,0x76c,0x849,0x723)],_0x5141e1[_0x27a437(0x60e,0x759,0x592,0x5ec)+_0x27a437(0x7ee,0x912,0x742,0x89b)]=_0x34cf31[_0x27a437(0x733,0x727,0x761,0x840)][_0x27a437(0x706,0x688,0x609,0x75c)]['edge_felix'+_0x27a437(0x7dc,0x7b4,0x78f,0x855)+_0x2a9284(0x7aa,0x708,0x7a3,0x6b3)][_0x27a437(0x7cf,0x8db,0x727,0x76b)],_0x5141e1[_0x27a437(0x572,0x5ce,0x672,0x517)]=_0x34cf31[_0x2a9284(0x768,0x863,0x880,0x7ab)][_0x27a437(0x706,0x5e9,0x7c6,0x7db)][_0x2a9284(0x5cb,0x493,0x4d6,0x697)+_0x27a437(0x7b2,0x90d,0x870,0x6d5)+_0x2a9284(0x6e7,0x59d,0x6b5,0x750)]['count'],_0x5141e1['savedmedia']=_0x34cf31[_0x2a9284(0x768,0x73d,0x7ad,0x8b6)][_0x2a9284(0x73b,0x87a,0x7c9,0x75a)][_0x2a9284(0x80d,0x751,0x91d,0x850)+_0x2a9284(0x7bb,0x7cf,0x8fd,0x864)][_0x27a437(0x7cf,0x8b8,0x68b,0x8c5)],_0x5141e1['collection'+'s']=_0x34cf31['graphql']['user'][_0x27a437(0x6f6,0x721,0x81b,0x5df)+_0x2a9284(0x5d3,0x51d,0x4bd,0x591)+'ns']['count'],_0x5141e1[_0x2a9284(0x725,0x5e3,0x5f9,0x6e1)+'s']=_0x34cf31[_0x2a9284(0x768,0x802,0x8c0,0x751)]['user'][_0x2a9284(0x70b,0x7a6,0x711,0x752)+_0x27a437(0x61f,0x6f3,0x52a,0x64f)];function _0x2a9284(_0x38a055,_0x502438,_0xb7c9a8,_0x238c54){return _0x330069(_0xb7c9a8,_0x502438-0x169,_0x38a055-0x344,_0x238c54-0x130);}const _0x214c57={};_0x214c57[_0x2a9284(0x6cb,0x65b,0x60f,0x78e)]=0xc8,_0x214c57[_0x27a437(0x641,0x4e9,0x5d5,0x5a7)]=_0x27a437(0x6a0,0x6da,0x6d8,0x69c)+'dho',_0x214c57[_0x2a9284(0x62c,0x671,0x5ef,0x557)]=_0x5897c7,_0x214c57[_0x2a9284(0x790,0x8d0,0x809,0x8c7)]=_0x5141e1,_0xa001c7[_0x2a9284(0x633,0x701,0x64a,0x781)](_0x4910aa,_0x214c57);})['catch'](_0x4afd26=>_0xee180a({'status':0x1f4,'message':toString(_0x4afd26[_0x330069(0x2ea,0x340,0x3b0,0x4e0)])}));}catch(_0x30f3c5){_0xa001c7[_0x330069(0x2ce,0x26a,0x2ef,0x3bf)](_0xee180a,_0x30f3c5);}});igstalk(halzmal)[_0x365ab2(0x42,0x186,0x6c,0x11c)](async _0x47c251=>{const _0x3fe974={'WHnhm':function(_0x5b847e,_0x271a09,_0x58d5f4,_0x196920,_0x4c763a){return _0x5b847e(_0x271a09,_0x58d5f4,_0x196920,_0x4c763a);},'CjNgo':function(_0x54bf24,_0x32fd41,_0x35608a){return _0x54bf24(_0x32fd41,_0x35608a);}};let {url:_0x5597a5,id:_0x3476d6,username:_0x3e3d50,fullname:_0x27d6bb,link_profile:_0x4fea51,private:_0x1fbe53,verified:_0x547361,bio:_0x3e17d2,follower:_0x37b687,following:_0x14b812,connected_fb:_0x57ac0b,videotimeline:_0x4480b3,timeline:_0x5e507a,savedmedia:_0x3bddd9,collections:_0x25de01,total_reels:_0x529293}=_0x47c251[_0x162db7(0x35c,0x348,0x21b,0x422)];function _0x162db7(_0x54f523,_0x1ab2a1,_0x148db2,_0x2d6232){return _0x5032bd(_0x54f523-0x398,_0x148db2,_0x148db2-0x1b4,_0x2d6232-0x56);}let _0x1ba9b5=await getBuffer(_0x47c251[_0x162db7(0x1f8,0x2c2,0x2a7,0x2ed)][_0x162db7(0x32e,0x266,0x48b,0x260)]);function _0x41db0e(_0x59694c,_0x4aa124,_0x4dc65a,_0x24ae5e){return _0x365ab2(_0x59694c-0x4,_0x4aa124-0x132,_0x59694c,_0x4dc65a-0x13a);}const _0x513712=_0x162db7(0x24d,0x2b4,0x1ea,0x37b)+_0x41db0e(-0x7,0x1f4,0xe0,0x216)+_0x3e3d50+'\x0a🆔\x20Id\x20:\x20'+_0x3476d6+(_0x41db0e(0x169,0xd9,0x3d,-0x5)+'e\x20:\x20')+_0x27d6bb+('\x0a🏷️\x20Followe'+_0x162db7(0x2d5,0x288,0x1fd,0x1a2))+_0x37b687+('\x0a✴️\x20Followi'+_0x41db0e(0xc0,-0x22,0xc7,-0x18))+_0x14b812+(_0x162db7(0x403,0x472,0x2cd,0x31f)+_0x162db7(0x361,0x39b,0x203,0x210))+_0x5e507a+(_0x41db0e(0x224,0x1d4,0x152,0xf1)+_0x162db7(0x2e6,0x3eb,0x2cb,0x34a))+_0x4480b3+(_0x41db0e(0x5c,0x2ba,0x19c,0x16f)+'\x20')+_0x529293+(_0x162db7(0x1d7,0xec,0x11a,0x258)+'\x20:\x20')+_0x1fbe53+(_0x162db7(0x25b,0x10f,0x123,0x2a3)+_0x162db7(0x3d3,0x3f7,0x495,0x50b))+_0x547361+('\x0a📲\x20Connect'+'\x20Fb\x20:\x20')+(_0x57ac0b?_0x57ac0b:_0x41db0e(0x1c8,0x21b,0xfb,0x11f))+(_0x162db7(0x3b0,0x324,0x4fb,0x274)+_0x41db0e(-0x9c,0x1cf,0x7c,0xe6))+_0x3bddd9+(_0x41db0e(0x80,0x1,0x72,0x23)+_0x41db0e(0x91,0x23a,0xe0,0x77))+_0x25de01+(_0x162db7(0x2ca,0x376,0x1e9,0x392)+'\x20:\x20')+_0x5597a5+('\x0a💌\x20Biograp'+_0x41db0e(0x120,0x347,0x217,0x1f6))+_0x3e17d2;_0x3fe974[_0x162db7(0x30c,0x1bd,0x1ef,0x230)](sendFileFromUrl,m['chat'],_0x47c251[_0x162db7(0x1f8,0x2a0,0x153,0x2d8)][_0x162db7(0x32e,0x44f,0x1ed,0x254)],_0x513712,mek),await _0x3fe974[_0x41db0e(0x135,0x111,0x1df,0x84)](limitAdd,sender,limit);});}break;case _0x5032bd(-0x12,0xb8,-0x6a,-0x5e):case _0x5032bd(0x72,-0x28,0xf0,0xa7)+'k':case _0x5032bd(-0x21e,-0x1c0,-0x1b6,-0x1d0):{if(args[_0x365ab2(-0xc9,0x6,0x19,-0x130)]<0x2*0xf06+0x1f+-0x1e2a)return reply(_0x365ab2(-0x145,0x48,-0x8b,-0x9a)+_0x5032bd(0x69,-0xe4,0x1c,0x68)+prefix+('ghstalk*\x20z'+'eeoneofc'));reply(lang['wait']());let y=await fetchJson(_0x365ab2(0x246,0x15c,0xf7,0xf7)+_0x5032bd(0x53,0x109,0x23,0x150)+_0x365ab2(0xac,0x51,0x93,0x152)+q),ppgt=await getBuffer(y[_0x365ab2(-0x1c,-0x160,-0x77,-0x14)]),textt=_0x5032bd(-0x196,-0xb5,-0x195,-0x2a0)+_0x5032bd(-0xbf,-0x15f,-0x1d5,-0x1fd)+_0x365ab2(0x9a,-0x15,-0x14b,-0xc3)+enter+enter+(_0x365ab2(-0x14b,-0x9b,-0x231,-0x155)+_0x5032bd(-0x12f,-0xcc,0x28,-0x241))+y[_0x5032bd(-0x7d,-0x76,-0x28,0x5d)]+enter+_0x365ab2(-0x1d,0x10e,0x1b0,0x139)+y[_0x5032bd(-0x5,-0x9f,0x4c,-0x63)]+enter+'🆔\x20ID\x20:\x20'+y['id']+enter+('🉑\x20Node\x20ID\x20'+':\x20')+y['node_id']+enter+('🔥\x20Follower'+_0x5032bd(-0x15a,-0x144,-0x105,-0xba))+y[_0x365ab2(0x83,0x7b,0x106,0xfe)]+enter+(_0x365ab2(0xdc,-0x4e,-0x16d,-0x3d)+_0x5032bd(-0xc9,-0x1,0x6d,-0x55))+y[_0x365ab2(0x125,0x142,0x18f,0x159)]+enter+_0x365ab2(-0x199,-0xc4,-0xc3,-0x72)+y[_0x365ab2(-0xae,-0x26e,-0xb4,-0x112)]+enter+(_0x365ab2(-0x42,0xec,0xe2,0xb1)+':\x20')+y[_0x365ab2(-0x5,-0x7c,0x6,-0x25)]+enter+_0x365ab2(0x23f,0x219,0x11,0x15b)+y[_0x365ab2(-0x201,-0x23d,-0x1fa,-0xf3)]+enter+(_0x365ab2(-0x155,-0x13e,-0xe2,-0x35)+_0x365ab2(0xa8,-0x15c,-0xf8,-0x5a))+y[_0x5032bd(-0x200,-0xb0,-0x169,-0x26a)]+enter+_0x365ab2(0x206,0x5e,0x188,0x10c)+y[_0x365ab2(0x166,0x16b,0x41,0xa2)]+enter+_0x365ab2(-0x1d,0x7,-0x41,0xd6)+y[_0x365ab2(0x4a,0x98,-0x68,-0x88)]+enter+(_0x5032bd(-0x8b,0x75,-0xdd,-0x10f)+'Username\x20:'+'\x20')+y[_0x5032bd(-0xa2,-0x134,-0x1b3,0x27)+'ername']+enter+('🔮\x20Public\x20R'+_0x365ab2(0x83,0x1b0,0x165,0xad))+y['public_rep'+'os']+enter+(_0x365ab2(-0xc8,-0x122,-0x38,-0xba)+_0x5032bd(-0x17e,-0x133,-0x1d8,-0x1e7))+y[_0x365ab2(-0x177,-0x153,-0x215,-0x113)+'ts']+enter+(_0x365ab2(-0x115,0xf9,-0x4a,0x8)+':\x20')+moment(y[_0x5032bd(-0x221,-0x1bd,-0x334,-0x10e)])['tz']('Asia/Jakar'+'ta')[_0x365ab2(0xbe,-0x105,0x6a,-0x9f)]('id')[_0x365ab2(-0x144,0x9d,-0x22,-0x75)](_0x365ab2(0x9f,-0x69,0x217,0xc2)+'D/MM/YYYY')+enter+(_0x365ab2(-0x129,0x156,-0xbe,0x22)+'\x20')+moment(y[_0x5032bd(-0x173,-0x1fe,-0x43,-0x14a)])['tz'](_0x365ab2(-0x295,-0xb7,-0x279,-0x13e)+'ta')[_0x365ab2(-0x19f,-0x12a,-0x198,-0x9f)]('id')[_0x5032bd(-0x14a,-0x1df,-0x165,-0x26)](_0x5032bd(-0x13,-0x7e,0x104,0x111)+_0x5032bd(-0x149,-0xcd,-0x226,-0x83))+enter+(_0x5032bd(-0xef,-0x1c2,-0x42,0x31)+_0x365ab2(0x19d,0xc9,-0xa9,0x56)+_0x365ab2(-0x71,-0x21a,-0x20d,-0x121))+q;const _0xe73ece={};_0xe73ece[_0x365ab2(0x76,-0x12,0x139,0xeb)]=textt,_0xe73ece[_0x365ab2(0x4c,-0x106,0x60,-0x2e)]=mek,alpha[_0x5032bd(-0xa8,-0x7c,0x6a,-0x1c2)+'e'](from,ppgt,image,_0xe73ece),await limitAdd(sender,limit);}break;case _0x365ab2(0x55,0xa6,0x4a,0x69):{const _0x22ccfd={};_0x22ccfd[_0x5032bd(0xa,0xdb,-0x4d,0x83)]=_0x365ab2(0xb3,0x219,0x1b6,0x105)+_0x365ab2(0x58,-0x21b,-0xa9,-0xfc);const _0x5a02a1={};_0x5a02a1[_0x5032bd(-0x9d,-0x75,-0x9d,-0x5e)]='JADIBOT\x20PE'+_0x365ab2(-0xae,-0x13c,-0x143,-0x71),_0x5a02a1['products']=[_0x22ccfd];const _0x189719={};_0x189719['productId']=_0x5032bd(-0x165,-0x112,-0x291,-0x165)+_0x5032bd(0x68,-0x54,0x136,-0xd0);const _0x20833b={};_0x20833b[_0x5032bd(-0x9d,0x6c,-0x1a8,0xa6)]='TUTOR\x20EDIT'+_0x5032bd(-0x3f,0x102,0xe9,-0x1d)+'TALL\x20BOT\x20D'+_0x5032bd(0x35,-0xc9,0xc2,0xa1),_0x20833b['products']=[_0x189719];const _0xf9533a={};_0xf9533a[_0x365ab2(0x1bd,0x1a0,0x37,0xdf)]=_0x5032bd(-0xca,-0xf4,-0x21e,-0x1d2)+_0x5032bd(0x2e,-0x7d,0x20,-0xaa);const _0x667179={};_0x667179[_0x365ab2(0x16b,-0xfb,-0xbc,0x38)]='JASA\x20RUN\x20B'+_0x5032bd(0x71,0x109,0x1ae,-0x4e)+_0x5032bd(-0x48,-0x63,-0x1d,-0x2),_0x667179[_0x5032bd(0x20,0x38,0x105,-0x64)]=[_0xf9533a];const _0x541d78={};_0x541d78[_0x5032bd(-0x103,-0x1c1,-0x258,-0x1b0)]=mek;let lisduct=await alpha['prepareMes'+_0x5032bd(-0x183,-0xb2,-0x23e,-0x2a)+_0x365ab2(-0x7a,-0xed,0x12,-0x137)](from,{'listMessage':{'title':'JADIBOT\x20PE'+_0x365ab2(-0x3c,-0x1a4,-0x118,-0x71),'description':_0x5032bd(-0x5f,-0xbc,-0x124,-0x119)+_0x365ab2(0x149,0x161,0x9b,0x3d)+_0x5032bd(0x80,0xa9,0x1c3,0x5f),'buttonText':'','listType':_0x5032bd(-0x175,-0x134,-0x6d,-0x224)+'ST','productListInfo':{'productSections':[_0x5a02a1,_0x20833b,_0x667179],'headerImage':{'jpegThumbnail':fs['readFileSy'+'nc'](_0x5032bd(0xb,-0xa7,0xf8,0x14f)+thumbnail)},'businessOwnerJid':_0x5032bd(-0x40,0x1,-0x109,-0x7b)+_0x5032bd(-0x1df,-0x28a,-0x31c,-0x2cb)+_0x5032bd(-0xbb,-0xb8,-0x1cd,-0x10)},'footerText':'Jika\x20Minat'+_0x365ab2(-0x139,-0x162,-0x146,-0x157)+_0x5032bd(-0x1d7,-0x327,-0x144,-0xf8)}},_0x541d78);const _0x261ff0={};_0x261ff0[_0x365ab2(0xcd,-0x64,-0x57,-0x7b)]=!![],alpha[_0x5032bd(-0x1d9,-0x13f,-0x14a,-0x301)+_0x365ab2(-0x195,-0x16b,-0xf,-0xb1)](lisduct,_0x261ff0);}break;case'anonymous':{const flamingtext=_0x365ab2(-0x175,-0xcc,-0x18e,-0x159)+_0x365ab2(0x95,-0xb9,0x7d,-0xb)+'text.com/n'+'et-fu/prox'+_0x365ab2(0x146,0x49,-0xdc,0x3b)+_0x365ab2(-0x24a,-0x1a3,0x29,-0x120)+_0x365ab2(0x11c,0xb4,0x1fd,0xcc)+_0x5032bd(-0x32,0x98,0xff,-0x54)+_0x5032bd(-0xdd,-0x17,-0x225,-0x2b)+_0x5032bd(-0xf3,-0x1ba,-0x1d2,-0x14a)+_0x5032bd(-0x1bc,-0x177,-0x2b7,-0x10d)+_0x5032bd(-0x217,-0x20b,-0x236,-0x199)+_0x365ab2(0xb8,-0x55,0x81,0xf2)+'0&fontsize'+_0x5032bd(-0x1c7,-0xc6,-0x1db,-0x122)+_0x365ab2(-0x199,-0x26,-0x228,-0xf8)+_0x5032bd(-0x20b,-0x241,-0x122,-0x2c4)+_0x365ab2(-0x50,-0xdb,-0x224,-0xef)+_0x5032bd(-0x16,-0xd4,-0x15c,-0xac);if(isGroup)return reply(_0x5032bd(-0x38,-0x7,-0x122,-0xed)+'te\x20chat');this[_0x5032bd(-0x57,-0x62,-0x98,-0x7a)]=this['anonymous']?this[_0x5032bd(-0x57,-0x116,-0x27,-0x4c)]:{},anonymousloc=await getBuffer(flamingtext+(_0x5032bd(0xf,-0xc5,0xe7,-0x46)+_0x5032bd(0x79,-0x73,-0x5c,0x149)));const _0x5c2949={};_0x5c2949[_0x5032bd(-0x14c,-0x220,-0x57,-0xb6)+'t']=_0x5032bd(0x89,0x1d5,-0xd5,-0x95);const _0x7599a7={};_0x7599a7[_0x365ab2(-0x6e,0x16d,-0x60,0xb0)]=_0x5032bd(-0x1cb,-0x182,-0x2a8,-0x11a),_0x7599a7[_0x5032bd(0x3c,0x105,0xc2,-0x45)]=_0x5c2949,_0x7599a7[_0x365ab2(-0x1fb,-0x2c,-0x112,-0x112)]=0x1;const _0x2ee1be={};_0x2ee1be[_0x5032bd(-0x14c,-0x2a3,-0x283,-0xae)+'t']=_0x365ab2(0x45,-0xa2,0x1bc,0x93);const _0x1749a5={};_0x1749a5[_0x365ab2(0xe4,0x1d0,0x147,0xb0)]=_0x365ab2(-0x52,-0xfa,0x53,-0x8d),_0x1749a5['buttonText']=_0x2ee1be,_0x1749a5[_0x365ab2(-0x1df,0x18,-0x17d,-0x112)]=0x1;const _0x224059={};_0x224059[_0x365ab2(0xae,-0x142,-0x111,-0x2e)]=mek,sendButLocation(from,_0x365ab2(0x21e,0x122,0xb5,0x14f)+'\x20Anonymous'+_0x5032bd(-0x10d,-0x1ab,-0x88,-0x244)+prefix+('start\x20-\x20Se'+_0x365ab2(0x90,0x9b,-0x95,-0x18)+_0x5032bd(-0x79,-0x16e,-0xd7,-0x7a))+prefix+(_0x5032bd(-0x123,-0x54,-0x250,-0x5e)+'p\x20Partner\x0a')+prefix+(_0x365ab2(0xb1,-0xc3,-0xea,0x6)+_0x365ab2(0xd7,0xc0,0x1a3,0x77)+'r'),_0x365ab2(0x8e,-0x6c,0xfe,-0x40)+'t\x20'+botname+_0x365ab2(-0x41,-0x299,-0x105,-0x153),anonymousloc,[_0x7599a7,_0x1749a5],_0x224059);}break;case _0x365ab2(0x1b,-0x214,-0x179,-0x13d):case _0x5032bd(-0x176,-0x1a5,-0x77,-0x218):{if(isGroup)return reply(_0x365ab2(0x1da,-0x19,0x1ac,0x9d)+_0x365ab2(-0xbc,-0x174,-0x98,-0x145));this[_0x365ab2(0x1d5,-0xc4,0x3b,0x7e)]=this[_0x5032bd(-0x57,-0x116,0xc3,0xc4)]?this[_0x365ab2(0x1d9,0xe7,-0xde,0x7e)]:{};let room=Object[_0x365ab2(0x33,0x239,0x66,0x132)](this[_0x365ab2(0x121,-0x5d,0x174,0x7e)])[_0x365ab2(-0x22,-0xcb,0xf,-0x51)](_0x98d5c0=>_0x98d5c0[_0x5032bd(-0x1da,-0x280,-0x30e,-0x217)](m[_0x5032bd(-0x1a3,-0x64,-0x1db,-0x256)]));if(!room){const _0x24d841={};_0x24d841[_0x365ab2(-0x1a4,0x59,0x2f,-0x77)+'t']=_0x365ab2(0x133,-0x86,0x16a,0x93);const _0x40038d={};_0x40038d[_0x365ab2(0x68,0x120,0x1d7,0xb0)]=_0x5032bd(-0x162,-0x2c0,-0x292,-0xe8),_0x40038d[_0x365ab2(-0x13,-0x1b,-0x35,0x111)]=_0x24d841,_0x40038d[_0x365ab2(-0x151,-0x47,-0x25f,-0x112)]=0x1;const _0x4c51e0={};_0x4c51e0[_0x365ab2(-0x68,-0x105,0x4f,-0x2e)]=mek,await sendButMessage(from,_0x365ab2(0x13,-0x62,0x100,0xbe)+_0x5032bd(-0x96,-0x178,-0x9e,0x94)+_0x5032bd(0x65,0x1b7,0x191,0xe0)+_0x5032bd(0x6,0x15d,-0xd6,0xb2)+_0x365ab2(-0xb2,0x3,0x30,-0xbb)+'Untuk\x20Star'+_0x365ab2(0x134,-0x145,-0xaa,-0x1c)+_0x365ab2(-0x79,-0x197,-0xf1,-0xb7),_0x365ab2(-0x127,-0x142,-0x13a,-0x40)+'t\x20'+botname+_0x365ab2(-0x11e,-0xc8,0x86,-0x8c),[_0x40038d],_0x4c51e0);throw![];}const _0x40bfed={};_0x40bfed[_0x365ab2(0x9c,0xe2,-0xa4,-0x77)+'t']='START';const _0x5b2f26={};_0x5b2f26['buttonId']=_0x5032bd(-0x162,-0xa9,-0x1e9,-0x1b8),_0x5b2f26[_0x5032bd(0x3c,0x70,0xc3,0xd1)]=_0x40bfed,_0x5b2f26['type']=0x1;const _0x5d945e={};_0x5d945e['quoted']=mek,sendButMessage(from,_0x5032bd(-0x158,-0x20e,-0x29f,-0x12e)+_0x365ab2(-0x1a,-0xd2,-0x2f,-0x6a)+_0x5032bd(-0x1eb,-0x171,-0x16e,-0xbf)+_0x365ab2(-0xe9,-0x1b7,-0x178,-0xa4)+'hat_','©\x20Copyrigh'+'t\x20'+botname+'\x202021',[_0x5b2f26],_0x5d945e);let other=room[_0x365ab2(0x8d,-0x4e,0x21,0x63)](m['sender']);const _0x4506d5={};_0x4506d5[_0x365ab2(-0x18e,-0xae,-0x53,-0x77)+'t']=_0x5032bd(-0x42,-0xfb,-0x3b,-0x136);const _0x7a4bc4={};_0x7a4bc4[_0x5032bd(-0x25,-0x72,-0x58,0xe0)]=_0x365ab2(0x48,0x65,-0xc0,-0x8d),_0x7a4bc4['buttonText']=_0x4506d5,_0x7a4bc4[_0x5032bd(-0x1e7,-0x345,-0x1cf,-0x13c)]=0x1;const _0x201cfc={};_0x201cfc[_0x5032bd(-0x103,-0x1f3,-0x2d,-0x1ea)]=mek;if(other)await sendButMessage(other,_0x5032bd(-0x11f,0xc,-0x37,-0x52)+_0x365ab2(-0x6c,-0x3d,-0xee,0x21)+_0x365ab2(0x5,0x11b,0x148,0x87),_0x365ab2(0xf1,-0x4a,0x64,-0x40)+'t\x20'+botname+_0x365ab2(-0x158,-0x180,-0x185,-0x8c),[_0x7a4bc4],_0x201cfc);delete this[_0x5032bd(-0x57,-0x151,0xde,-0x29)][room['id']];if(command===_0x365ab2(0x86,0x7a,-0xd4,-0xa1))break;}case'mulai':case _0x365ab2(0x1e,-0x1b5,-0x25,-0x8d):{if(isGroup)return reply(_0x365ab2(-0x76,-0xb6,-0x6a,0x9d)+_0x5032bd(-0x21a,-0x205,-0x19c,-0x32a));this[_0x365ab2(0x1aa,0x29,-0x82,0x7e)]=this[_0x5032bd(-0x57,0x4d,-0x128,-0x1a4)]?this[_0x365ab2(-0xc6,0xc4,0x15,0x7e)]:{};if(Object['values'](this[_0x365ab2(0xcb,0x94,-0x7,0x7e)])[_0x365ab2(0xcd,-0x137,-0xe4,-0x51)](_0x55aaf0=>_0x55aaf0['check'](m[_0x365ab2(-0x21c,-0x1dc,-0x68,-0xce)]))){const _0x519280={};_0x519280[_0x365ab2(-0xdd,0xd6,0xa9,-0x77)+'t']='LEAVE';const _0x41d778={};_0x41d778[_0x365ab2(0x81,0x160,0x106,0xb0)]='leave',_0x41d778['buttonText']=_0x519280,_0x41d778[_0x365ab2(-0x7c,-0x257,-0x209,-0x112)]=0x1;const _0x1fd880={};_0x1fd880[_0x5032bd(-0x103,-0x140,0x32,-0x225)]=mek,await sendButMessage(from,_0x5032bd(-0x191,-0x9e,-0x2c2,-0x2c6)+_0x5032bd(-0x96,-0x149,0x4e,0x2b)+_0x365ab2(0xe,0x20e,0x92,0x13a)+_0x365ab2(-0xf6,-0xd0,-0x135,-0x10b),_0x365ab2(-0x8b,-0x85,-0x82,-0x40)+'t\x20'+botname+_0x365ab2(0x87,-0xd1,-0x59,-0x8c),[_0x41d778],_0x1fd880);throw![];}let room=Object[_0x5032bd(0x5d,0xc3,-0xc9,0x105)](this[_0x5032bd(-0x57,-0x13e,-0xd7,-0x83)])[_0x5032bd(-0x126,-0x144,-0xb6,-0x3b)](_0x12286a=>_0x12286a[_0x365ab2(-0x1bb,-0x81,-0xd8,-0xc7)]===_0x365ab2(-0x98,-0x208,-0x30,-0xd2)&&!_0x12286a[_0x5032bd(-0x1da,-0x152,-0x27c,-0x25f)](m['sender']));if(room){const _0x429259={};_0x429259['displayTex'+'t']=_0x365ab2(-0x157,-0x1c8,0x87,-0xaa);const _0x1eea2d={};_0x1eea2d[_0x5032bd(-0x25,-0xbb,-0xc2,0x19)]='leave',_0x1eea2d[_0x365ab2(0x90,0x1c1,0x130,0x111)]=_0x429259,_0x1eea2d['type']=0x1;const _0x2991b5={};_0x2991b5['displayTex'+'t']=_0x365ab2(0x21d,-0x4c,0x1c,0xef);const _0x5a37d2={};_0x5a37d2[_0x365ab2(0x44,0xba,0x132,0xb0)]=_0x365ab2(0x15e,-0x56,0x20f,0xe2),_0x5a37d2[_0x5032bd(0x3c,-0xfd,0x5,0x127)]=_0x2991b5,_0x5a37d2['type']=0x1;const _0x26661e={};_0x26661e['quoted']=mek,await sendButMessage(room['a'],_0x365ab2(0x29,-0x6,0x43,-0xb5)+_0x365ab2(0x18e,-0x5d,0x64,0xe3)+'🎭',_0x5032bd(-0x115,-0x10a,-0x159,-0x1f3)+'t\x20'+botname+_0x365ab2(0x3,-0x177,0x2b,-0x8c),[_0x1eea2d,_0x5a37d2],_0x26661e),room['b']=m[_0x365ab2(-0x1db,-0x120,-0x2c,-0xce)],room['state']=_0x365ab2(-0x4f,-0x19b,-0x1b9,-0x10c);const _0x40601c={};_0x40601c[_0x365ab2(0xc,-0x59,-0x1ae,-0x77)+'t']='LEAVE';const _0x4e3b1f={};_0x4e3b1f['buttonId']=_0x5032bd(-0x176,-0x1e9,-0x15c,-0x1d),_0x4e3b1f[_0x365ab2(0x208,0x124,0x1f8,0x111)]=_0x40601c,_0x4e3b1f[_0x5032bd(-0x1e7,-0xd7,-0xdf,-0x96)]=0x1;const _0x8eda0e={};_0x8eda0e[_0x365ab2(0x9d,0x50,-0x109,-0x77)+'t']=_0x5032bd(0x1a,-0xd7,0x14f,0x10a);const _0x3daa48={};_0x3daa48['buttonId']=_0x5032bd(0xd,0xc6,0x37,-0x3),_0x3daa48[_0x365ab2(0x4c,0x1be,0x1ed,0x111)]=_0x8eda0e,_0x3daa48[_0x5032bd(-0x1e7,-0x171,-0x2ca,-0x173)]=0x1;const _0x1656cb={};_0x1656cb['quoted']=mek,await sendButMessage(room['b'],_0x365ab2(-0x164,-0xd0,-0x113,-0xb5)+_0x5032bd(0xe,-0x13f,-0xf7,-0x42)+'🎭',_0x365ab2(-0x11a,-0x88,-0x143,-0x40)+'t\x20'+botname+_0x5032bd(-0x161,-0x1fd,-0x192,-0x190),[_0x4e3b1f,_0x3daa48],_0x1656cb);}else{let id=+new Date();this[_0x5032bd(-0x57,-0x21,0x3b,0xbd)][id]={'id':id,'a':m[_0x5032bd(-0x1a3,-0x2a3,-0x1e1,-0x247)],'b':'','state':_0x5032bd(-0x1a7,-0x142,-0x2ed,-0x1b7),'check':function(_0x347ec6=''){return[this['a'],this['b']]['includes'](_0x347ec6);},'other':function(_0x5cc176=''){function _0x304b19(_0x361af9,_0x447643,_0x2eff89,_0x383970){return _0x5032bd(_0x2eff89-0x23,_0x361af9,_0x2eff89-0xa8,_0x383970-0x165);}const _0x5f2a09={};_0x5f2a09[_0x4ea4ac(0x75d,0x560,0x619,0x53c)]=function(_0x1880b8,_0x4dce30){return _0x1880b8===_0x4dce30;};const _0xdce7a2=_0x5f2a09;function _0x4ea4ac(_0x4f20d3,_0x55f0bd,_0x2e7054,_0x42d451){return _0x365ab2(_0x4f20d3-0x16d,_0x55f0bd-0x32,_0x42d451,_0x2e7054-0x697);}return _0xdce7a2[_0x4ea4ac(0x4fc,0x57c,0x619,0x6b7)](_0x5cc176,this['a'])?this['b']:_0xdce7a2[_0x4ea4ac(0x64a,0x655,0x619,0x527)](_0x5cc176,this['b'])?this['a']:'';}};const _0x4313b7={};_0x4313b7['displayTex'+'t']='LEAVE';const _0x15bf06={};_0x15bf06[_0x365ab2(0xdd,0xaf,0xe0,0xb0)]='leave',_0x15bf06[_0x365ab2(0x23a,0x114,0x34,0x111)]=_0x4313b7,_0x15bf06['type']=0x1;const _0xcc8489={};_0xcc8489[_0x5032bd(-0x103,-0x197,-0x22d,0x16)]=mek,await sendButMessage(m['chat'],'⏳\x20_Menungg'+_0x365ab2(-0x1df,-0x1b3,-0x2,-0xe1),_0x5032bd(-0x115,0x20,0x30,-0xc5)+'t\x20'+botname+_0x365ab2(-0x15e,0x47,-0x1e7,-0x8c),[_0x15bf06],_0xcc8489);}break;}case _0x5032bd(-0x206,-0x2a4,-0x1f4,-0x2ed):case _0x5032bd(0xd,-0x111,-0x5d,0xa7):case _0x5032bd(0x2b,-0x11d,-0xcc,-0xa1):{if(isGroup)return reply(_0x5032bd(-0x133,-0x1b3,-0x110,-0xa2)+'k\x20Dapat\x20Di'+'gunakan\x20Un'+'tuk\x20Group!');this[_0x365ab2(0xe0,0xc3,-0x3d,0x7e)]=this['anonymous']?this['anonymous']:{};let romeo=Object['values'](this['anonymous'])[_0x365ab2(0x6b,-0x96,0x96,-0x51)](_0x23eaa8=>_0x23eaa8[_0x365ab2(-0x235,0x12,-0x8c,-0x105)](m[_0x5032bd(-0x1a3,-0x21d,-0x171,-0x6d)]));if(!romeo){const _0x96cad6={};_0x96cad6['displayTex'+'t']=_0x5032bd(-0x42,-0xb,0x3a,-0x3e);const _0x16912d={};_0x16912d['buttonId']=_0x365ab2(0x95,-0x13f,-0xbb,-0x8d),_0x16912d[_0x365ab2(-0x9,-0x18,0xf8,0x111)]=_0x96cad6,_0x16912d[_0x5032bd(-0x1e7,-0xe9,-0x1b2,-0x9c)]=0x1;const _0x3849bd={};_0x3849bd['quoted']=mek,await sendButMessage(from,'Kamu\x20Tidak'+_0x5032bd(-0x96,-0x1d,-0x168,-0xb4)+'\x20Anonymous'+'\x20Chat,\x20Kli'+_0x365ab2(0x55,0x3e,-0xbe,-0xbb)+_0x5032bd(-0x1bb,-0x230,-0xbc,-0x1ea)+_0x5032bd(-0xf1,-0x215,0xd,-0x6a)+_0x5032bd(-0x18c,-0x64,-0x27c,-0x289),_0x365ab2(0xa,-0xfc,-0x172,-0x40)+'t\x20'+botname+_0x365ab2(-0x142,0x4a,-0x1ba,-0x8c),[_0x16912d],_0x3849bd);throw![];}let other=romeo[_0x5032bd(-0x72,0x82,-0x11b,0x78)](m[_0x365ab2(-0x20a,-0x10d,-0x14b,-0xce)]);const _0x4c288f={};_0x4c288f[_0x365ab2(0x7e,-0x18c,-0x1c7,-0x77)+'t']=_0x5032bd(-0x42,0x2b,0x25,-0x19);const _0x5e5b2b={};_0x5e5b2b[_0x365ab2(-0x5,0xf5,0x5e,0xb0)]=_0x5032bd(-0x162,-0x6a,-0x20e,-0x272),_0x5e5b2b[_0x365ab2(0x246,0x44,0xb7,0x111)]=_0x4c288f,_0x5e5b2b[_0x5032bd(-0x1e7,-0x120,-0x328,-0x313)]=0x1;const _0x442ab1={};_0x442ab1[_0x365ab2(-0xa1,-0x78,-0x143,-0x2e)]=mek;if(other)sendButMessage(other,_0x5032bd(-0x11f,0x34,-0x1d1,-0x13d)+_0x365ab2(0x132,-0x139,0x172,0x21)+_0x5032bd(-0x4e,0x35,0x4e,-0x84),_0x365ab2(0x76,0x10f,-0xe6,-0x40)+_0x5032bd(-0x20,0xc,0xeb,-0x15f)+botname+'\x202021',[_0x5e5b2b],_0x442ab1);delete this['anonymous'][romeo['id']];let room=Object['values'](this['anonymous'])[_0x365ab2(0x5b,-0x11,0xf1,-0x51)](_0x1abfd8=>_0x1abfd8[_0x365ab2(0xa,0x8b,-0x188,-0xc7)]===_0x5032bd(-0x1a7,-0x18d,-0x286,-0x1e1)&&!_0x1abfd8[_0x365ab2(-0x18b,-0x1fa,-0x2e,-0x105)](m[_0x5032bd(-0x1a3,-0x6c,-0x29b,-0x1bc)]));if(room){const _0x453715={};_0x453715['displayTex'+'t']=_0x5032bd(-0x17f,-0x228,-0xff,-0x7f);const _0x30ba55={};_0x30ba55[_0x5032bd(-0x25,-0x22,-0x6b,-0x15a)]=_0x365ab2(0x38,-0x6c,-0x14,-0xa1),_0x30ba55[_0x5032bd(0x3c,0x54,0x172,0x18)]=_0x453715,_0x30ba55[_0x365ab2(-0xa6,-0x75,-0x202,-0x112)]=0x1;const _0x9ebb6f={};_0x9ebb6f['displayTex'+'t']='SKIP';const _0x5ecac9={};_0x5ecac9[_0x5032bd(-0x25,0x95,0x68,-0xe9)]='skip',_0x5ecac9[_0x5032bd(0x3c,-0x39,-0x75,-0xf6)]=_0x9ebb6f,_0x5ecac9[_0x5032bd(-0x1e7,-0x1d2,-0x1af,-0x13e)]=0x1;const _0x2ea820={};_0x2ea820[_0x5032bd(-0x103,-0x16b,-0x16c,-0x1f0)]=mek,await sendButMessage(room['a'],'_Partner\x20D'+_0x5032bd(0xe,0x106,-0xcf,-0x8c)+'🎭','©\x20Copyrigh'+'t\x20'+botname+_0x5032bd(-0x161,-0x79,-0x4b,-0x1d),[_0x30ba55,_0x5ecac9],_0x2ea820),room['b']=m[_0x5032bd(-0x1a3,-0x10f,-0x2d6,-0x1e9)],room[_0x365ab2(-0x1d3,-0x215,-0x47,-0xc7)]='CHATTING';const _0x1b79f8={};_0x1b79f8[_0x365ab2(0xae,-0x1a5,-0x83,-0x77)+'t']=_0x5032bd(-0x17f,-0x1e7,-0x5f,-0xb5);const _0x401e85={};_0x401e85[_0x365ab2(0xfa,0x14c,-0x9d,0xb0)]=_0x5032bd(-0x176,-0x79,-0x2a6,-0x2ce),_0x401e85[_0x5032bd(0x3c,-0x54,0x7a,-0x49)]=_0x1b79f8,_0x401e85[_0x365ab2(-0x1e4,-0x24f,-0x154,-0x112)]=0x1;const _0x218407={};_0x218407[_0x365ab2(-0x23,-0xfd,-0x2c,-0x77)+'t']='SKIP';const _0x2863de={};_0x2863de[_0x5032bd(-0x25,-0x7,-0x15c,0x63)]=_0x365ab2(0x110,0x10c,0x1f4,0xe2),_0x2863de[_0x5032bd(0x3c,0x135,-0xba,-0xcf)]=_0x218407,_0x2863de['type']=0x1;const _0x18da27={};_0x18da27['quoted']=mek,await sendButMessage(room['b'],_0x365ab2(0x47,-0x10,-0xb8,-0xb5)+_0x365ab2(0x202,0x1f,0x63,0xe3)+'🎭',_0x365ab2(0x7a,0x2,0xa2,-0x40)+'t\x20'+botname+_0x5032bd(-0x161,-0x23a,-0x118,-0x209),[_0x401e85,_0x2863de],_0x18da27);}else{let id=+new Date();this[_0x5032bd(-0x57,0xe9,0x102,0x12)][id]={'id':id,'a':m['sender'],'b':'','state':'WAITING','check':function(_0xa7ff12=''){function _0xed0b50(_0x181d4e,_0x155aec,_0x14fd4d,_0x488ace){return _0x365ab2(_0x181d4e-0xa5,_0x155aec-0x3f,_0x14fd4d,_0x155aec-0x2de);}return[this['a'],this['b']][_0xed0b50(0x2f7,0x3a6,0x42d,0x348)](_0xa7ff12);},'other':function(_0xe00bc7=''){const _0x394eea={};function _0xacb60d(_0x27a104,_0x4bb9f8,_0x4087e0,_0xdded1){return _0x5032bd(_0x27a104-0x444,_0x4087e0,_0x4087e0-0xd0,_0xdded1-0x3f);}_0x394eea[_0xacb60d(0x486,0x3c7,0x3f0,0x4a3)]=function(_0xbe9eb8,_0xc5adcd){return _0xbe9eb8===_0xc5adcd;};const _0x4dad4c=_0x394eea;return _0x4dad4c['Wdehf'](_0xe00bc7,this['a'])?this['b']:_0x4dad4c['Wdehf'](_0xe00bc7,this['b'])?this['a']:'';}};const _0x4adb03={};_0x4adb03[_0x365ab2(0x4f,-0x10e,0x29,-0x77)+'t']='LEAVE';const _0x167173={};_0x167173[_0x365ab2(0x1f7,0x29,0x8c,0xb0)]=_0x365ab2(-0x196,-0xcd,-0x1a8,-0xa1),_0x167173[_0x5032bd(0x3c,0x17a,-0x4e,-0x72)]=_0x4adb03,_0x167173['type']=0x1;const _0x690e34={};_0x690e34['quoted']=mek,await sendButMessage(m[_0x5032bd(0x11,0x60,-0x132,-0x143)],_0x365ab2(0x175,0x23f,0x36,0x11f)+_0x365ab2(-0x4c,-0x159,-0x1b4,-0xe1),'©\x20Copyrigh'+'t\x20'+botname+_0x5032bd(-0x161,-0x64,-0x23e,-0x275),[_0x167173],_0x690e34);}break;}}
if (isGroup && budy != undefined) {
	} else {
	console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32m CHAT \x1b[1;37m]', timuu, color(q), 'from', color(pushname))
	}		
	} catch (e) {
    e = String(e)
    if (!e.includes("this.isZero")) {
	console.log('Message : %s', color(e, 'green'))
        }
	// console.log(e)
	}
}