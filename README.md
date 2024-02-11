# CDK assets leak

The AWS CDK version <=2.127.0 leaks assets between stacks if an App with a DefaultStackSynthesizer is used and no Stack level synthesizer is specified. No special properties are needed on the DefaultStackSynthesizer. This issue occurs because each Stack copies the App synthesizer using Object.create. The DefaultStackSynthesizer contains a reference to an instance of AssetManifestBuilder which is kept as a reference. This means that each Stack ends up using the same AssetManifestBuilder and share assets.

You can see examples of this in cdk.out and StackB.assets.json. It contains the template file for StackA which is unnecessary. If StackA had more files it would end up having those in its manifest as well.

The file simpler.js contains a small example of why this issue occurs.