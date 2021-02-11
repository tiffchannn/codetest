# Cloud Engineer Test: 'Automated Deployment'

Welcome to the cloud engineer code test! This will be a test of your:
1. Ability to use standard cloud tools
2. Ability to troubleshoot challenging issues
3. Capability to organize, prioritize, and execute

The point of this test is to understand how you approach a technical problem. The way you approach these problems are just as important as your solutions. Please communicate with us via email as if you already work here, and add documentation/comments as you go along too please. 

We expect this test to take you about *6 - 10 hours*. Given that most people are busy, We want to hear back from you *within 72 hours of starting this test*.

## Overall Requirements

Your task is to take charge of creating multiple cloud linux instances for use in a deployment scenario. Each instance, upon being setup should host an instance of the simple todo application in the folder in this directory. They should also have a linux terminal available via ssh with the accompanying `sl` package installed and ready for execution.

It is your task to create scripts and processes around creating and destrying a server hosted on a cloud platform of your choosing (Amazon AWS/Azure/Digital Ocean/GCP/Other) to serve this application

1. Create a script to create a new Linux VM in your chosen cloud service provider
2. Install and activate the todo application on this VM
3. Install and activate the sl command line tool on this VM
4. Create a script to destroy the VM listed above in a reasonable manner
5. Create a way to list all currently living VMs from step 1.

#### As soon as you begin:
* [ ] Fork this repository into a public repository on your gitlab/etc account

#### While working on this, please:
* [ ] Commit early and often. We'll likely be following along with your progress.

#### Upon completing this, please post to us:
* [ ] A link to somewhere we may view your scripts
* [ ] A link to somewhere we may view images, gifs, or video of your scripts functioning

## Cloud Script Requirements

#### Linux VM CRUD
* [ ] VM is created via script on a 3rd party provider (not user's own computer)
* [ ] VM (from above) is destroyed via script
* [ ] A list of living VMs is shown via script

#### Linux VMs are prepared
* [ ] A created VM is running the todo application
* [ ] A created VM has a terminal available via ssh
* [ ] A created VM has the `sl` command available to use

## BONUS

If you're too cool for school and knocked all the above out already, consider adding some improvements to what you've made.

### Suggestions for improvements
* [ ] Create a second server, running the todo application as well but with a different operating system.
* [ ] Your spin-up/provision script is robust, and creates cloud instances atomically
* [ ] The list of living VMs includes other useful information about the instance
* [ ] Edit this ReadMe with new suggestions for how to improve this code test.
