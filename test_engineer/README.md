# Test Engineer Test: 'TODO MVP'

Welcome to the test engineer code test! This will be a test of your:
1. Ability to troubleshoot
2. Organizational capabilities

The point of this test is to understand how you approach a technical problem. The way you approach these problems are just as important as your solutions.

We expect this test to take you about 4 - 8 hours. Given that most people are busy, We'd like to hear back from you within 72 hours of starting.

## Overall Requirements

Your task is to take charge of the Quality Assurance for the attached web application. It is a simple TODO application in which a user can Add and Remove todos, as well as mark todo's as Done or Undone.

It is your task to create a QA testing approach to ensure the quality of this product. This is a twofold process.

1. Create a manual testing script using whatever tools you prefer, and generate for our team a testing report of your testing against
2. Create an automated testing mechanism using whatever tools you prefer. 

#### As soon as you begin:
* [ ] Fork this repository into a public repository on your gitlab/etc account

#### While working on this, please:
* [ ] Commit early and often. We'll likely be following along with your progress.

#### Upon completing this, please post to us:
* [ ] A link to your git repository such that we may view your code.
* [ ] A link to somewhere where we may view your QA Checklist

## Technical Requirements

The underpinnings of the command's functionality may be written in whatever language you choose,
so long as it is operable after installing the package (beware libraries that do not come installed by default)

#### Command Line Interface
* [ ] Using the command `sl` should return to you a randomly chosen train (or vehicle, or art or whatever!).
* [ ] Using the command `sl -n N` (with option n specified and argument integer passed) should show you the Nth locomotive in the bunch
* [ ] Please handle options that are not defined or malformed

#### Packaging
* [ ] Provide use of this command via a apt repo style package.
* [ ] The package must function on any currently available OS of your choosing.

#### Reproducibility
* [ ] Use a make file to create your package

## BONUS

If you're too cool for school and knocked all the above out already, consider adding some improvements to what you've made.

### Suggestions for improvements
* [ ] How about having the program pull random ascii art from a file or folder?
* [ ] Make it more pernicious by placing ascii art in a file in the directory if one is specified
* [ ] Edit this ReadMe with new suggestions for how to improve this code test
