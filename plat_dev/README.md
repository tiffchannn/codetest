# Linux Code Test: 'Steam Locomotion'

Welcome to the linux code test! This will be a test of your:
1. Ability to work with existing code...
2. Extend its functionality and...
3. Create a distributable program

The point of this test is to understand how you approach a technical problem. The way you code is just as important as your solution.

We expect this test to take you about 4 - 8 hours. Given that most people are busy, We'd like to hear back from you within 72 hours of starting.

## Overall Requirements
Your task is to create a copy or fork of `sl`, a cruel program made to punish users who mispell `ls`. Instead of showing the the contents of the
current directory as one would expect from `ls`, `sl` displays a loooooong animation of a steam locomotive crossing the terminal.


You will additionally extend the functionality and create a distributable package for the program. 
Your new and improved `sl` will no longer show the same train every time but rather your own flavor, or assortment of flavors! 

You may use as much or as little from the `sl` source as you wish, and though we recommend you program in C/C++ or python, 
you may use any language of your choice (as long as it isn't [Ook!](https://esolangs.org/wiki/Ook!) ). Just as well, we recommend make a .deb package for 
your distributable, though you may use any packaging system that a readily available operating system uses. We love projects 
like [distri](https://michael.stapelberg.ch/posts/2019-08-17-introducing-distri/) too, but we shouldn't exactly be putting long-term projects on them.

After installing the package, you should be able to type `sl` and at least see the following:

![](demo.gif)





[You can find the sl source here](https://github.com/mtoyoda/sl)

[And some ascii art fun here](https://www.asciiart.eu/)

#### As soon as you begin:
* [ ] Fork this repository into a public repository on your gitlab/etc account

#### While working on this, please:
* [ ] Commit early and often. We'll likely be following along with your progress.

#### Upon completing this, please post to us:
* [ ] A link to your git repository such that we may view your code.
* [ ] A link to somewhere where we may download and install your package

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
