const fs = require('fs')

const config = {
    // Main Owners (Access to Rent System)
    owner: ["923xxxxx", "your number"], 
    thumbUrl: "add your logo link",
    session: "sessions",
    
    status: {
        public: true,   // Legacy
        worktype: 'private', // Options: 'public', 'private', 'group', 'dm'
        
        terminal: true,
        
        // 👇 Real-Time Toggles
        anticall: false,      
        typing: false,        
        recording: false,      

        // 👇 Feature Toggles
        typingGroup: false,    
        typingInbox: false,    
        recordingGroup: false, 
        recordingInbox: false, 
        antideletegroup: false, 
        
        // 👇 Auto Status Features
        autostatusview: false, 
        autostatusreact: false,

        // 👇 Auto Read Messages
        readmessagedm: false,
        readmessagegroup: false,
        
    },
    
    settings: {
        prefix: '.', 
        title: "𝐀𝐁𝐁𝐀𝐒-𝐀𝐈-𝐕𝟑",    //👈👈 set your title
        packname: '𝐇𝐀𝐂𝐊𝐄𝐑-𝐀𝐁𝐁𝐀𝐒',  //👈👈 your packname
        description: "𝐁𝐨𝐭 𝐝𝐞𝐯𝐞𝐥𝐨𝐩𝐞𝐝 𝐛𝐲 𝐇𝐚𝐜𝐤𝐞𝐫 𝐀𝐛𝐛𝐚𝐬",  //👈👈 your description
        author: '𝙶𝚁𝙴𝙰𝚃 𝙰𝙱𝙱𝙰𝚂',  //👈👈 author name
        designName: '️🅰️🅱️🅱️🅰🆂',  // 👈 comming in new updates
        footer: "> *©𝙿𝙾𝚆𝙴𝚁𝙴𝙳 𝙱𝚈 𝙷𝙰𝙲𝙺𝙴𝚁 𝐌𝐫.𝐀𝐁𝐁𝐀𝐒*", // change
        noprefix: false,
        version: "3.0.0", // change
        channelUrl: "https://whatsapp.com/channel/0029VajWxSZ96H4SyQLurV1H" // change
    },

    newsletter: {
        name: "𝐀𝐁𝐁𝐀𝐒-𝐀𝐈-𝐕𝟑",  // change
        id: "120363408401969787@newsletter"   // change channel id
    },
    
    mess: {
        owner: 'This command is only for the bot owner!',
        done: 'Done!',
        error: 'Something went wrong!',
        wait: 'Please wait...'
    }
}

module.exports = config;

let file = require.resolve(__filename)
require('fs').watchFile(file, () => {
  require('fs').unwatchFile(file)
  delete require.cache[file]
  require(file)
})
