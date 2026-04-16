const { sendVIPButtons } = require('../library/buttonHelper');

module.exports = {
    command: ['toolsmenu', 'toolmenu'],
    description: 'Displays Tools Commands',
    category: 'menu',
    execute: async (sock, m, { prefix, config }) => { 
        
        const menuText = `╭━「 🧰 𝗧𝗢𝗢𝗟𝗦 𝗠𝗘𝗡𝗨 」
┃ ➪ ${prefix}pp
┃ ➪ ${prefix}qr
┃ ➪ ${prefix}url
┃ ➪ ${prefix}tts
┃ ➪ ${prefix}tts2
┃ ➪ ${prefix}vurl
┃ ➪ ${prefix}tourl
┃ ➪ ${prefix}remini
┃ ➪ ${prefix}sketch
┃ ➪ ${prefix}tinyurl
┃ ➪ ${prefix}cleanuri
┃ ➪ ${prefix}rebrandly
┃ ➪ ${prefix}device
┃ ➪ ${prefix}tomp3
┃ ➪ ${prefix}barcode
┃ ➪ ${prefix}translate
╰━━━━━━━━━━━`;

        const verifiedReply = {
            key: { participant: `0@s.whatsapp.net`, fromMe: false, remoteJid: "status@broadcast" },
            message: {
                extendedTextMessage: {
                    text: config.settings.title, 
                    contextInfo: { mentionedJid: [m.sender], verifiedBizName: config.settings.title }
                }
            }
        };

        const footerText = `\n*${config.settings.footer}*`;

        const buttonsArray = [
            { type: 'reply', display_text: '🏠 BACK TO MENU', id: `${prefix}menu` },
            { type: 'reply', display_text: '⚙️ AUTO MENU', id: `${prefix}automenu` }
        ];

        await sendVIPButtons(sock, m, menuText, footerText, buttonsArray, {
            quoted: verifiedReply,
            contextInfo: { mentionedJid: [m.sender], isForwarded: true, forwardingScore: 999 }
        });
    }
};
