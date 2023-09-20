var cron = require('node-cron');
const { syncDb } = require('./tasks/sync_db');

console.log("🚀 app in running ")
cron.schedule('*/5 * * * * *', () => syncDb());