# aws-lambda-cloudwatchlog-to-s3

 * the main file is index.js 

 * `npm install` will generate a directory `node_modules` which contains all third-party library

 * zip the content and upload to lambda function. EX: cd dsas-mvp; zip -r /tmp/demo.zip *
 
 UPDATED to use environment variables:
 
S3LOGGROUP         "Cloudwatch log group"   

S3LOGSTREAMPREFIX  "Log stream prefix name"

S3BUCKET           "S3 bucket name"

S3BACKINMS         "Time amount subtracted to determine from time in milliseconds" 


