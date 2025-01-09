import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
// import * as sqs from 'aws-cdk-lib/aws-sqs';

export class RajeshDay4BestwayStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);
    const bucketNames = ['rajesh-day4-bestway-bucket11', 'rajesh-day4-bestway-bucket22'];
    
    for (const bucketName of bucketNames) {
      new cdk.aws_s3.Bucket(this, bucketName, {
      versioned: true,
      removalPolicy: cdk.RemovalPolicy.DESTROY,
      autoDeleteObjects: true,
      bucketName: bucketName
      });
    }
    
  //   // creating s3 bucket
  // const bucket = new cdk.aws_s3.Bucket(this, 'MyBucket', {
  //   versioned: true,
  //   removalPolicy: cdk.RemovalPolicy.DESTROY,
  //   autoDeleteObjects: true,
  //   bucketName: 'rajesh-day4-bestway-buckett'
  // });

  }
}
