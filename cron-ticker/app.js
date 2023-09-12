var cron = require('node-cron');

let times = 0;

cron.schedule('*/5 * * * * *', () => {
    times++;
  console.log('running a task every 5 second :)', times);
});