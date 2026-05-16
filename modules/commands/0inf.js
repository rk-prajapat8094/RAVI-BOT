module.exports.config = {
	name: "inf",
	version: "1.0.1", 
	hasPermssion: 0,
	credits:"PREM" ,
	description: "Admin and Bot info.",
	commandCategory: "...",
	cooldowns: 1,
	dependencies: 
	{
    "request":"",
    "fs-extra":"",
    "axios":""
  }
};
module.exports.run = async function({ api,event,args,client,Users,Threads,__GLOBAL,Currencies }) {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
const time = process.uptime(),
		hours = Math.floor(time / (60 * 60)),
		minutes = Math.floor((time % (60 * 60)) / 60),
		seconds = Math.floor(time % 60);
const moment = require("moment-timezone");
var juswa = moment.tz("Asia/Dhaka").format("『D/MM/YYYY』 【HH:mm:ss】");
var link =                                     
["https://i.imgur.com/K0uKHNy.jpeg","https://i.imgur.com/C2fQWkp.jpeg","https://i.imgur.com/Yz9p2iE.png"];
var callback = () => api.sendMessage({body:`🌹𝐀𝐃𝐌𝐈𝐍 𝐀𝐍𝐃 𝐁𝐎𝐓 𝐈𝐍𝐅𝐎𝐑𝐌𝐀𝐓𝐈𝐎𝐍🌹

🍁Bot Name︎︎🍁 👉 ${global.config.BOTNAME}

🔥Bot Admin🔥 ☞︎︎︎𝙿𝚁𝙴𝙼✰𝙱𝙰𝙱𝚄☜︎︎︎ 

🙈Bot Admin Owner Facebook id link🙈 https://www.facebook.com/prembabu001?mibextid=ZbWKwL💞🕊️

👋Follow me frineds On Instagram  Username 👉@Rakesh_creater_08😇

✧══════•❁❀❁•══════✧

🌸Bot Prefix🌸 ☞︎︎︎${global.config.PREFIX}☜︎︎︎

♥️Bot Owner♥️ ☞︎︎︎प्रेम बाबू☜︎︎︎

🥳UPTIME🥳

💋Today is ☞︎︎︎${juswa}☜︎︎︎ 

⚡Bot is running⚡ ${hours}:${minutes}:${seconds}.

🌹THANKYOU FOR USING ${global.config.BOTNAME} BOT🌹


🦢🍒•••ꞪɛᏒɛ ɪʂ ɮ❍┼ ❍ωɳɜɽ ɳaʍɜ•••🌷💞
┏━🕊️━━°❀•°:🎀🧸💙🧸🎀:°•❀°━━💞━┓
🌸✦✧✧✧✧✰🍒𝐏𝐑𝐄𝐌🌿✰✧✧✧✧✦🌸
┗━🕊️━━°❀•°:🎀🧸💙🧸🎀:°•❀°━━💞━┛


`,attachment: fs.createReadStream(__dirname + "/cache/juswa.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/juswa.jpg")); 
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/juswa.jpg")).on("close",() => callback());
   };