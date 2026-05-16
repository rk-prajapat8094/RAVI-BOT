const fs = require("fs");
module.exports.config = {
	name: "asslam walikum",
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
	if(react.includes("asslamualaikum") ||
     react.includes("asslam walikum") || react.includes("ASSLAM WALIKUM") || react.includes("Aslam") ||
react.includes("aslam walikum") ||
react.includes("asslam")) {
		var msg = {
				body: `Walekum Aaslamu  Wa Ramutllha Barkatu 😇`,
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("😇", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }