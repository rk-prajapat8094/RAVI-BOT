const fs = require("fs");
module.exports.config = {
	name: "Bye",
    version: "1.1.1",
	hasPermssion: 0,
	credits: "PREM BABU", 
	description: "Just Respond",
	commandCategory: "no prefix",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	let react = event.body.toLowerCase();
	if(react.includes("BY") ||
     react.includes("bye") || react.includes("by") || react.includes("Allah hafiz") ||
react.includes("bye") ||
react.includes("BYE")) {
		var msg = {
				body: `𝐁𝐘𝐄 𝐁𝐘𝐄 🙋‍♂️ 𝐓𝐀𝐊𝐄 𝐂𝐀𝐑𝐄 𝐁𝐀𝐁𝐔 😇`,attachment: fs.createReadStream(__dirname + `/noprefix/Bye.gif`)
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("💖", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }