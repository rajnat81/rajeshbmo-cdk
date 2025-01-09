#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { RajeshDay4BestwayStack } from '../lib/rajesh-day4-bestway-stack';
import { RajeshDay4ec2all } from '../lib/rajesh-day4-ec2all';


const app = new cdk.App();

new RajeshDay4BestwayStack(app, 'RajeshDay4BestwayStack', {

//   env: { account: '992382386705', region: 'us-east-1' },

});

new RajeshDay4ec2all(app, 'RajeshDay4ec2all', {
  
   env: { account: '992382386705', region: 'us-east-1' },
});