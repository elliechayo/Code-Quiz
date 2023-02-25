# Code-Quiz

 ## Description 

The objective of the project was to build an interactive timed coding quiz that will consist of a set of technical interview questions in a multiple-choice format, and that will store high scores for progress tracking and comparison purposes.

The quiz starts when the user clicks on the "Start Quiz" button at which point a timer starts and the user is presented with a multiple-choice question.

When the user answers the question a result message shows up indicating if the answer was correct or not.
 
If the user answers the question correctly, the next question will be presented. If the user answers the question incorrectly then time is subtracted from the clock, and the next question will be presented.

The quiz ends when the user goes through all of the questions or if the timer reached 0.

At the end of the quiz the user is presented with their final score and asked to enter their initials. The user is also presented with a button to view stored high scores.

Once user’s initials are submitted, stored high scores are presented to the user and given the choice to either clear high scores or go back to the start again ( while keeping the stored scores).


## Table of Contents
* [Work completed](#work-completed)
* [Installation](#installation)
* [Preview](#preview)
* [Links](#links)
* [License](#license)



## Work completed:
<hr>

***An index.html code file consists of:***

* Introduction section that includes the quiz name, instructions and a start button.
* Quiz section that includes all the quiz components; questions, answer options, a result response, score and the timer. 
* Quiz Score section that includes the final quiz score display, a form to enter quiz taker’s initials and a submit button.
* High scores section that includes a display of the previous high scores, a “ go back” and “ clear high score” button. 
* Delineated sections by adding comments.

***A CSS code file***
* Styled the app to give it a clean, polish and responsive user interface.

***A JavaScript code file consists of the following:***

#### Defined variables that are needed to code the various functions of the quiz and created the following functions:

- Hide intro section show quiz and start timer
- Quiz’s questions content, answer choices and correct answer
- Created HTML elements from quiz object and append to the UI
- Check if answer is correct/wrong
- Deduct 10 seconds from the game state time if answer is wrong.
- Show correct/wrong response to the given answer
- Hiding the answer’s response message after 2 seconds
- Display next question or end game if there is non left
- Reset the timer if running.
- Hide the quiz questions section.
- Display final score.
- Reset quiz to its initial values.
- Loop through the high scores and create line item for each high score.
- Append user’s initial and final score to the high scores array and display. 
- Reset high scores array. 
- Hide high score section and show intro section. 
#### Created event listeners for:
- Start quiz (button click)
- Save score (button submit) 
- Go back (button click)
- Clear high score ((button click)
- View high score (button click)

#### Delineated sections by adding comments.



## Installation
<hr>

Upload the application files to a webserver.
 

## Preview
<hr>

The following image shows the web application appearance and functionality once deployed

### Introduction section 

![initial disply](/assets/image-1.png)

### Quiz section 

![Questions display/correct answer](/assets/image-2.png)
![Questions display/wrong answer](/assets/image-3.png)


### Final score section

![Final Score display and request to enter initals](/assets/image-4.png)


### HigH score section

![High score display](/assets/image-5.png)



## Links
<hr>

[URL of the deployed application](https://elliechayo.github.io/Code-Quiz/)

[URL of the GitHub repository](https://github.com/elliechayo/Code-Quiz)

## License
<hr>

MIT License

Copyright (c) [2023] [Elinor Chayo]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.