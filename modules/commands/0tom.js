const fs = require("fs");
module.exports.config = {
	name: "प्रेम बाबू",
    version: "1.0.1",
	hasPermssion: 2,
	credits: "VanHung - Fixed by LTD", 
	description: "hihi",
	commandCategory: "no prefix",
	usages: "🙂",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("prem")==0 || event.body.indexOf("prem babu")==0 || event.body.indexOf("prem ji")==0 || event.body.indexOf("@प्रेम बाबू")==0) {
		var msg = {
				body: "हेलो बेबी मुझे प्रेम बाबू ने बनाया है। 🙂🌍🌸",
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("🙂", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }