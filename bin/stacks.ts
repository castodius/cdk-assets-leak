#!/usr/bin/env node
import 'source-map-support/register';
import { Stack, App, DefaultStackSynthesizer } from 'aws-cdk-lib';

const app = new App({
  defaultStackSynthesizer: new DefaultStackSynthesizer()
});
new Stack(app, 'StackA');
new Stack(app, 'StackB');
