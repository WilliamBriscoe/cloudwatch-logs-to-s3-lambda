//Simple Lambda Function to Migrate Logs to S3
//This Lambda is intended to be called automatically on a schedule every hour and will export all logs for the previous hour.


var AWS = require('node_modules/aws-sdk');
exports.handler = function (event, context) {
    try {
		console.log('here we go again');
		const s3loggroup = process.env.S3LOGGROUP;
		const s3logstreamprefix = process.env.S3LOGSTREAMPREFIX;
		const s3bucket = process.env.S3BUCKET;
		const s3prefix = process.env.S3PREFIX;
		const s3milliseconds = process.env.S3BACKINMS;
		var cloudwatchlogs = new AWS.CloudWatchLogs();
		var now = new Date();
		var params = {
          destination: s3bucket,                        // s3 bucket name
          destinationPrefix: s3prefix,                  // destination prefix 
          from: now.getTime() - s3milliseconds,               // Current time minus milliseconds 
          logGroupName: s3loggroup,                     // cloudwatch log group name 
          logStreamNamePrefix: s3logstreamprefix,       // cloudwatch log stream prefix
          to: now.getTime(),                            // Current time
          taskName: "LogTask_"+now.getTime().toString()
        };
         console.log('Log Migrate Action Called with Params : ' +JSON.stringify(params));
        cloudwatchlogs.createExportTask(params, function(err, data) {
          if (err) {
              console.log('Error : '+ err, err.stack); // an error occurred                                                                                                                
          }
          else{
                console.log('Success : ' + JSON.stringify(data));  // successful response
          }
        });
    }
    catch (err) {
        console.log('General Error.');
        console.log(err);
    }
	console.log('exiting');
};
