//Simple Lambda Function to Migrate Logs to S3
//This Lambda is intended to be called automatically on a schedule every hour and will export all logs for the previous hour.


var AWS = require('aws-sdk');
exports.handler = function (event, context) {
    try {
        var cloudwatchlogs = new AWS.CloudWatchLogs();
        var now = new Date();
        var params = {
          destination: 'awg-logs-test',            // s3 bucket name 
          from: now.getTime() - 3600000,                 // Current time minus one hour in milliseconds 
          logGroupName: 'awg-sandbox-logs',        // cloudwatch log group name 
          to: now.getTime(),                             // Current time
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
};
