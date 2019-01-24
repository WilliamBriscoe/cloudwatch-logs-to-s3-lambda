# aws-lambda-cloudwatchlog-to-s3

 * the main file is index.js 

 * `npm install` will generate a directory `node_modules` which contains all third-party library

 * zip the content and upload to lambda function. EX:zip -r /tmp/demo.zip * or use the logstos3.zip for AWS Lambda. 
 
 * setup the following environment variables in Lambda:
 
S3LOGGROUP         "Cloudwatch log group"   

S3LOGSTREAMPREFIX  "Log stream prefix name"

S3BUCKET           "S3 bucket name"

S3BACKINMS         "Time amount subtracted to determine from time in milliseconds" 

The s3permission.json file contains a sample s3 bucket policy that must be attached to the bucket
