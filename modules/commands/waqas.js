const fs = require("fs");
module.exports.config = {
	name: "prem babu",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "prem babu", 
	description: "no prefix",
	commandCategory: "No command marks needed",
	usages: "...",
    cooldowns: 1, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("babu")==0 || (event.body.indexOf("prem")==0 || (event.body.indexOf("prem jani")==0 || (event.body.indexOf("Allah hafiz")==0)))) {
		var msg = {
				body: "Prem babu My Creation 🙂 , "my love ,
				attachment: fs.createReadStream(__dirname + `/noprefix/waqas.gif`)
			}
			api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}