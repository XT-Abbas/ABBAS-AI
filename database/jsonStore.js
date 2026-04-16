const fs = require('fs');
const path = require('path');

const paths = {
    group: path.join(__dirname, 'groupmsg.json'),
    dm: path.join(__dirname, 'dmmsg.json'),
    channel: path.join(__dirname, 'channelsmsg.json')
};

// ⚡ RAM Cache for JSON Store
let cache = { group: {}, dm: {}, channel: {} };

// 🚀 Initial Load directly into RAM
Object.keys(paths).forEach(type => {
    const filePath = paths[type];
    if (!fs.existsSync(filePath)) {
        fs.writeFileSync(filePath, JSON.stringify({}));
    } else {
        try {
            cache[type] = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
        } catch (e) {
            cache[type] = {};
        }
    }
});

// 🗄️ Background Auto-Save (Har 60 seconds baad save)
setInterval(() => {
    try {
        Object.keys(paths).forEach(type => {
            fs.writeFileSync(paths[type], JSON.stringify(cache[type], null, 2));
        });
    } catch (e) {} // Silent
}, 60 * 1000);

// 💾 Save Message (Instant to RAM)
const saveMsgToJSON = (jid, msg, type) => {
    try {
        if (!cache[type]) return;
        if (!cache[type][jid]) cache[type][jid] = [];

        cache[type][jid].push(msg);

        // ⚡ Limit to 50 messages for max performance
        if (cache[type][jid].length > 50) {
            cache[type][jid] = cache[type][jid].slice(-50);
        }
    } catch (err) {}
};

// 🔍 Find Message (Deep Search in RAM - Super Fast)
const findMessageFromJSON = (jid, msgId) => {
    try {
        for (const type of ['dm', 'group', 'channel']) {
            if (cache[type]) {
                // 1. Direct JID Check
                if (cache[type][jid]) {
                    const found = cache[type][jid].find(m => m?.key?.id === msgId);
                    if (found) return found;
                }

                // 2. DM Deep Search (Instant because no file read)
                for (let chatKey in cache[type]) {
                    const found = cache[type][chatKey].find(m => m?.key?.id === msgId);
                    if (found) return found;
                }
            }
        }
        return null;
    } catch (err) {
        return null;
    }
};

module.exports = { saveMsgToJSON, findMessageFromJSON };
