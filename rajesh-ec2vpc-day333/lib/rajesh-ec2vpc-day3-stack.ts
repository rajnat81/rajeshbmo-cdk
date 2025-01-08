import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as ec2 from 'aws-cdk-lib/aws-ec2';
// import * as sqs from 'aws-cdk-lib/aws-sqs';

export class RajeshEc2VpcDay3Stack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

// using default vpc 
const vpc = ec2.Vpc.fromLookup(this,'rajeshvpc',{
  isDefault: true
});
// creating ec2 instance
const rajeshvm = new ec2.Instance(this,'rajeshvm1',{
  vpc,
  instanceType: new ec2.InstanceType('t2.micro'),
  machineImage: new ec2.AmazonLinuxImage(),
  keyPair: ec2.KeyPair.fromKeyPairName(this,'rajeshkey','splunk-key'),
  //       splunk-key is original key name of aws account
  // so you have to use the same
  instanceName: 'rajesh-linux-vm'
  // above name of my linux machine 
 });
 // printing instance id
 new cdk.CfnOutput( this, 'rajeshinstanceid',{
  description: 'this will print instand id',
  value: rajeshvm.instanceId,
 });
 // printing public dns
 new cdk.CfnOutput(this, 'rajeshpublicdns',{
 description: 'this will print public dns',
 value: rajeshvm.instancePublicIp
});
}
}