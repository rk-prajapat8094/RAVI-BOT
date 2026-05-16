module.exports.config = {
  name: "prefix",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "ManhG",
  description: "Xem prefix của BOT",
  commandCategory: "Dành cho Admin",
  usages: "",
  cooldowns: 5,
};

module.exports.handleEvent = async ({ event, api, Threads }) => {
  var { threadID, messageID, body, senderID } = event;
  //if (senderID == global.data.botID) return;
  if ((this.config.credits) != "ManhG") { return api.sendMessage(`Sai credits!`, threadID, messageID)}
  function out(data) {
    api.sendMessage(data, threadID, messageID)
  }
  var dataThread = (await Threads.getData(threadID));
  var data = dataThread.data; 
  const threadSetting = global.data.threadData.get(parseInt(threadID)) || {};
  var arr = ["mpre","mprefix","prefix", "dấu lệnh", "prefix của bot là gì","daulenh", "duong", "what prefix", "freefix", "what is the prefix", "bot dead", "bots dead", "where prefix", "what is bot", "what prefix bot", "how to use bot" ,"how use bot", "where are the bots","bot not working","bot is offline","where prefix","prefx","prfix","prifx","perfix","bot not talking","where is bot"];
  arr.forEach(i => {
    let str = i[0].toUpperCase() + i.slice(1);
    if (body === i.toUpperCase() | body === i | str === body) {
const prefix = threadSetting.PREFIX || global.config.PREFIX;
      if (data.PREFIX == null) {
        return out(`𝚃𝚑𝚒𝚜 𝚒𝚜 𝙼𝚢 𝙿𝚛𝚎𝚏𝚒𝚡 ⇉ [ ${prefix} ]                   💝🥀𝐎𝐖𝐍𝐄𝐑:- ☞𝐌𝐑. 𝐑𝐀𝐕𝐈 𝐊𝐔𝐌𝐀𝐑☜💫\n
🖤𝚈𝚘𝚞 𝙲𝚊𝚗 𝙲𝚊𝚕𝚕 𝙷𝚒𝚖 〠𝚁𝙰𝙹𝙰 𝙺𝙸𝙽𝙶 🖤\

😳𝐇𝐢𝐬 𝐅𝐚𝐜𝐞𝐛𝐨𝐨𝐤 𝐢𝐝🤓:- ☞ https://www.facebook.com/profile.php?id=61555796837996&mibextid=ZbWKwL

📑 𝙰𝙶𝙰𝚁 𝙰𝙿𝙺𝙾 𝙰𝙿𝙿𝚁𝙾𝚅𝙰𝙻 𝙽𝙰𝙷𝙸 🙅🏻‍♂️ 𝙼𝙸𝙻 𝚁𝙰𝙷𝙰 𝙷𝙰𝙸 𝚃𝙾𝙷 𝙼𝙴𝚁𝙴 𝙾𝚆𝙽𝙴𝚁 🖤 𝙺𝙾 𝙳𝙸𝚁𝙴𝙲𝚃 𝙰𝙳𝙳 𝙺𝙰𝚁 𝚂𝙰𝙺𝚃𝙴 𝙷𝙾 𝙵𝙰𝙲𝙴𝙱𝙾𝙾𝙺 𝙸𝙳 𝙻𝙸𝙽𝙺 𝚂𝙴 😊💖

👋𝙵𝙾𝚁 𝙰𝙽𝚈 𝙺𝙸𝙽𝙳 𝙾𝙵 𝙷𝙴𝙻𝙿 𝙲𝙾𝙽𝚃𝙴𝙲𝚃 𝙾𝙽 𝚆𝙷𝙰𝚃𝚂𝙰𝙿𝙿 𝙽𝚄𝙼𝙱𝙴𝚁 👉 [+1 8094***37] 😇`)
      }
      else return out('️️️️️️️️️️️️️️️️️️️️️️️️️️️ ️️️️️️️️️️️️️️️️️️️️️️ ️️️️️️️️️️️️️️️️️️️️️️️️️️️ ️️️️️️️️️️️️️️️️️️️️️️️️️️️ ️️️️️️️️️️️️️️️️️️️️️️ ️️️️️️️️️️️️️️️️️️️️️️️️️️️ ️️️️️️️️️️️️️️️️️️️️️️ ️️️️️️️️️️️️️️️️️️️️️️️️️️️ ️️️️️️️️️️️️️️️️️️️️️️ ️️️️️️️️️️️️️️️️️️️️️️️️️️️ ️️️️️️️️️️️️️️️️️️️️️️ ️️️️️️️️️️️️️️️️️️️️️️️️️️️ ️️️️️️️️️️️️️️️️️️️️️️ ️️️️️️️️️️️️️️️️️️️️️️️️️️️ ️️️️️️️️️️️️️️️️️️️️️️███████ ]▄▄▄▄▄▄▄▄\n▂▄▅█████████▅▄▃▂\nI███████████████████]\n◥⊙▲⊙▲⊙▲⊙▲⊙▲⊙▲⊙◤\n➢' + data.PREFIX)
    }

  });
};

module.exports.run = async({ event, api }) => {
    return api.sendMessage("error", event.threadID)
}
