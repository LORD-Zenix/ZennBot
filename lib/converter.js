const fs = require('fs')
const path = require('path')
const { spawn } = require('child_process')
const axios = require('axios')
const { default: Axios } = require('axios')

/**
 * Convert Audio to Playable WhatsApp Audio
 * @param {Buffer} buffer Audio Buffer
 * @param {String} ext File Extension 
 */
function toAudio(buffer, ext) {
  return new Promise((resolve, reject) => {
    let tmp = path.join(__dirname, '../tmp', + new Date  + '.' + ext)
    let out = tmp + '.mp3'
    fs.writeFileSync(tmp, buffer)
    spawn('ffmpeg', [
      '-y',
      '-i',tmp,
      '-vn',
      '-ac', '2',
      '-b:a','128k',
      '-ar','44100',
      '-f', 'mp3',
      out
    ])
    .on('error', reject)
    .on('error', () => fs.unlinkSync(tmp))
    .on('close', () => {
      fs.unlinkSync(tmp)
      resolve(fs.readFileSync(out))
      if (fs.existsSync(out)) fs.unlinkSync(out)
    })
  })
}

/**
 * Convert Audio to Playable WhatsApp PTT
 * @param {Buffer} buffer Audio Buffer
 * @param {String} ext File Extension 
 */
function toPTT(buffer, ext) {
  return new Promise((resolve, reject) => {
    let tmp = path.join(__dirname, '../tmp', + new Date + '.' + ext)
    let out = tmp + '.opus'
    fs.writeFileSync(tmp, buffer)
    spawn('ffmpeg', [
      '-y',
      '-i',tmp,
      '-vn',
      '-c:a','libopus',
      '-b:a','128k',
      '-vbr','on',
      '-compression_level','10',
      out,
    ])
    .on('error', reject)
    .on('error', () => fs.unlinkSync(tmp))
    .on('close', () => {
      fs.unlinkSync(tmp)
      resolve(fs.readFileSync(out))
      if (fs.existsSync(out)) fs.unlinkSync(out)
    })
  })
}

/**
 * Convert Audio to Playable WhatsApp Video
 * @param {Buffer} buffer Video Buffer
 * @param {String} ext File Extension 
 */
function toVideo(buffer, ext) {
  return new Promise((resolve, reject) => {
    let tmp = path.join(__dirname, '../tmp', + new Date + '.' + ext)
    let out = tmp + '.mp4'
    fs.writeFileSync(tmp, buffer)
    spawn('ffmpeg', [
      '-y',
      '-i', tmp,
      '-c:v','libx264',
      '-c:a','aac',
      '-ab','128k',
      '-ar','44100',
      '-crf', '32',
      '-preset', 'slow',
      out
    ])
    .on('error', reject)
    .on('error', () => fs.unlinkSync(tmp))
    .on('close', () => {
      fs.unlinkSync(tmp)
      resolve(fs.readFileSync(out))
      if (fs.existsSync(out)) fs.unlinkSync(out)
    })
  })
}

function convertSticker(base64, author, pack) {
	return new Promise((resolve, reject) => {
		axios("https://sticker-api-tpe3wet7da-uc.a.run.app/prepareWebp", {
			method: "POST",
			headers: {
				Accept: "application/json, text/plain, */*",
				"Content-Type": "application/json;charset=utf-8",
				"User-Agent": "axios/0.21.1",
				"Content-Length": 151330
			},
			data: `{"image": "${base64}","stickerMetadata":{"author":"${author}","pack":"${pack}","keepScale":true,"removebg":"HQ"},"sessionInfo":{"WA_VERSION":"2.2106.5","PAGE_UA":"WhatsApp/2.2037.6 Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.83 Safari/537.36","WA_AUTOMATE_VERSION":"3.6.10 UPDATE AVAILABLE: 3.6.11","BROWSER_VERSION":"HeadlessChrome/88.0.4324.190","OS":"Windows Server 2016","START_TS":1614310326309,"NUM":"6247","LAUNCH_TIME_MS":7934,"PHONE_VERSION":"2.20.205.16"},"config":{"sessionId":"session","headless":true,"qrTimeout":20,"authTimeout":0,"cacheEnabled":false,"useChrome":true,"killProcessOnBrowserClose":true,"throwErrorOnTosBlock":false,"chromiumArgs":["--no-sandbox","--disable-setuid-sandbox","--aggressive-cache-discard","--disable-cache","--disable-application-cache","--disable-offline-load-stale-cache","--disk-cache-size=0"],"executablePath":"C:\\\\Program Files (x86)\\\\Google\\\\Chrome\\\\Application\\\\chrome.exe","skipBrokenMethodsCheck":true,"stickerServerEndpoint":true}}`
			})
			.then(({ data }) => {
				resolve(data.webpBase64)
			})
		.catch(reject)
	})
}

function mp4ToWebp(base64, author, pack) {
	return new Promise((resolve, reject) => {
		axios("https://sticker-api.openwa.dev/convertMp4BufferToWebpDataUrl", {
			method: "POST",
			headers: {
				Accept: "application/json, text/plain, */*",
				"Content-Type": "application/json;charset=utf-8",
				"User-Agent": "axios/0.21.1"
			},
			data: `{"file":"${base64}","processOptions":{"crop":false,"fps":6,"startTime":"00:00:00.0","endTime":"00:00:7.0","loop":0},"stickerMetadata":{"author":"${author}","pack":"${pack}","keepScale":true},"sessionInfo":{"WA_VERSION":"2.2106.5","PAGE_UA":"WhatsApp/2.2037.6 Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.83 Safari/537.36","WA_AUTOMATE_VERSION":"3.6.10 UPDATE AVAILABLE: 3.6.11","BROWSER_VERSION":"HeadlessChrome/88.0.4324.190","OS":"Windows Server 2016","START_TS":1614314152951,"NUM":"6247","LAUNCH_TIME_MS":7550,"PHONE_VERSION":"2.20.205.16"},"config":{"sessionId":"session","headless":true,"qrTimeout":20,"authTimeout":0,"cacheEnabled":false,"useChrome":true,"killProcessOnBrowserClose":true,"throwErrorOnTosBlock":false,"chromiumArgs":["--no-sandbox","--disable-setuid-sandbox","--aggressive-cache-discard","--disable-cache","--disable-application-cache","--disable-offline-load-stale-cache","--disk-cache-size=0"],"executablePath":"C:\\\\Program Files (x86)\\\\Google\\\\Chrome\\\\Application\\\\chrome.exe","skipBrokenMethodsCheck":true,"stickerServerEndpoint":true}}`
			})
			.then(({ data }) => {
				resolve(data)
			})
		.catch(reject)
	})
}


module.exports = {
  toAudio,
  toPTT,
  toVideo,
  mp4ToWebp,
  convertSticker
}