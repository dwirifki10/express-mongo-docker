/* initiate library here */ 
const schedule = require("node-schedule");

/* run the scheduler task */
const runCronJob = schedule.scheduleJob("* * * * * *", () => {
	console.log("cron job has run");
});

/* return function here */ 
module.exports = runCronJob;