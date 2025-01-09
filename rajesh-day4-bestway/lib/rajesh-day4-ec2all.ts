import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as ec2 from 'aws-cdk-lib/aws-ec2';
// import * as sqs from 'aws-cdk-lib/aws-sqs';

export class RajeshDay4ec2all extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

// using default vpc 
const vpc = ec2.Vpc.fromLookup(this,'rajeshvpc',{
    isDefault: true
  });

// create security group
const securityGroup = new ec2.SecurityGroup(this, 'rajeshSecurityGroup', {
  vpc,
  description: 'Allow ssh and http access',
  allowAllOutbound: true
});

// allow inbound traffic on port 443 access from anywhere
securityGroup.addIngressRule(ec2.Peer.anyIpv4(), ec2.Port.tcp(443), 'allow https access from anywhere');

// allow inbound traffic on port 22 access from anywhere
securityGroup.addIngressRule(ec2.Peer.anyIpv4(), ec2.Port.tcp(22), 'allow ssh access from anywhere');

// allow inbound traffic on port 80 access from anywhere
securityGroup.addIngressRule(ec2.Peer.anyIpv4(), ec2.Port.tcp(80), 'allow http access from anywhere');

  // creating ec2 instance
  const rajeshvm = new ec2.Instance(this,'rajeshvm1',{
    vpc,
    instanceType: new ec2.InstanceType('t2.micro'),
    machineImage: new ec2.AmazonLinuxImage(),
    keyPair: ec2.KeyPair.fromKeyPairName(this,'rajeshkey','splunk-key'),
    securityGroup: securityGroup, // attach security group to instance
    instanceName: 'rajesh-linux-vm'
    // above name of my linux machine 
   });

 

  }
}
