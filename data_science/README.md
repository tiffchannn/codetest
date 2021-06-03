# Data Science Code Test: 'Los Angeles Weather'

*Please read this whole README before starting.*

Welcome to the test engineer code test! This will be a test of your:
1. Ability to use standard data science tools
2. Ability to troubleshoot challenging issues
3. Capability to organize, prioritize, and execute

The point of this test is to understand how you approach a technical problem. The way you code is just as important as your solution. Please communicate with us via email as if you already work here, and add documentation/comments as you go along too please. 

We expect this test to take you about *6 - 10 hours*. Given that most people are busy, We want to hear back from you *within 72 hours of starting this test*.

Send us an email when you're finished and we'll schedule a code review with engineers from across our teams to discuss your submission. We'll discuss the finer
 points of your implementation, walk through your code, demo its functionality (or troubleshoot its brokenness), and give feedback on its strengths, weaknesses 
 and, if we're being honest with ourselves, bugs. We don't expect your submission to be perfect, but we do expect you to be able to frankly communicate and 
 discuss your submission in a professional environment.

## Overall Requirements
Create a predictive utility that will generate a guess of the weather on a given day and hour in Los Angeles.

The data is in a csv called `cleaned_data/LosAngeles_weather_training_set.csv` and is of the format:
    
    `datetime (str), pressure (float),  humidity (float), wind_direction (float), wind_speed (float), temperature (float)`

You decide what features to extract, what model to use, and how to train it. 

The application should have an understandable interface (command line, or user interface) and should be largely written in python, please use whatever libraries you are most familiar with otherwise.

The utility should provide a function called `train` that takes a .csv of training data, trains your model, and saves it to the current context or into a user-specified file. Additionally it should provide save and load functions to import/export the saved models into the current execution context. The format of the input csv should be identical to the format of the given dataset.

The utility should provide a function called `predict` that takes as an argument a CSV file of observations. `predict` should output its observation-prediction pairs into a user-nameable CSV, where each row is of the format `observations, prediction`, where the value of `prediction` is degrees kelvin expressed as a floating-point number. The supplied observation will be of the format:
    
    `datetime (str), pressure (float),  humidity (float), wind_direction (float), wind_speed (float)`

The model you create is a part of the core deliverable for this test, and must be available for import upon submission so that we may test its accuracy.

#### As soon as you begin:
* [ ] Fork this repository into a public repository on your gitlab/etc account

#### While working on this, please:
* [ ] Commit early and often. We'll likely be following along with your progress.

#### Upon completing this, please email to us:
* [ ] A link to your git repository such that we may view your code.
* [ ] A link to somewhere where we may interact with a demo of your finished product

## Predictive Data Set 

Please use the dataset included in this folder to make your predicitons. It has been pulled from Kaggle [here](https://www.kaggle.com/selfishgene/historical-hourly-weather-data) if you would like to reference it. Temperature data is in KELVIN.

This is a real-world data science problem, so there is no distinction between training data and validation data. Please design your model construction appropriately.

#### Create a model that
* [ ] Reads in given .csv(s) to train itself
* [ ] Reads in a single observation and outputs a prediction (Single-use mode)
* [ ] Reads a .csv of observations and outputs a .csv of predictions (Batch mode)
* [ ] Is capable of saving / loading a trained model to/from a file(s) on disk (Is portable)


#### Interactions
* [ ] Create a cli interface or user interface through which we may specify a day and month or a csv file for analysis
* [ ] Upon analysing the day and month, the model predicts the weather that day (temperature is required, all else is up to you)
* [ ] If your model allows it, also output a degree of certainty along with the prediction 

## BONUS

Consider adding some improvements to what you've made to really showcase your strengths.

### Suggestions for improvements
* [ ] Integrate this with an external Service or API for constant re-training
* [ ] Create a simple web Ui for this prediction generator
* [ ] Write a test or two for your code.
* [ ] Add a lint file and make sure your code is linted.
* [ ] Add CD/CI to your project to auto-deploy it
* [ ] Allow for more observations (eg. datetime AND humidity)
* [ ] Edit this ReadMe with new suggestions for how to improve this code test

## Closing Thoughts

Every developer on our team has completed this code challenge or one of the other code challenges here, so show us what you can do! We're excited to see what kind of contributions you could make to our team.
