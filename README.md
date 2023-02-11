# Frontend Mentor - Calculator app solution

This is a solution to the [Calculator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/calculator-app-9lteq5N29). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Frontend Mentor - Calculator app solution](#frontend-mentor---calculator-app-solution)
  - [Table of contents](#table-of-contents)
  - [Overview](#overview)
    - [The challenge](#the-challenge)
    - [Screenshot](#screenshot)
    - [Links](#links)
  - [My process](#my-process)
    - [Built with](#built-with)
    - [What I learned](#what-i-learned)
    - [Continued development](#continued-development)
    - [Useful resources](#useful-resources)
  - [Author](#author)

## Overview

Whenever you have many tasks operations to achieve in a scientist work or a commercial activity you need Calculator. One of the primary and great invention first made by Henry Pascal. This small devices help fastly to do operation from addition to divison of numbers. Our project aims to reproduce this gadgets in a App that you can eaily open in you phone and perform calculation in whatever you want.

With this the probability to makes errors through calculation will be reduce . we propose three background color themes to apply to customiwe each time your calculator to personalize your preference and experience each time you will be using the app.

### The challenge

Users should be able to:

- See the size of the elements adjust based on their device's screen size
- Perform mathmatical operations like addition, subtraction, multiplication, and division
- Adjust the color theme based on their preference
- **Bonus**: Have their initial theme preference checked using `prefers-color-scheme` and have any additional changes saved in the browser

### Screenshot

![Mobile_theme1](./Mobile_theme1.png)

### Links

- Solution URL: [https://github.com/BeinRain06/calculator-app-mini.git](https://github.com/BeinRain06/calculator-app-mini.git)
- Live Site URL: [https://beinrain06.github.io/calculator-app-mini/](https://beinrain06.github.io/calculator-app-mini/)

## My process

### Built with

- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library

### What I learned

This project Calculator-App made me learn how it's important to organiwe your projects in functions if you want to process and obtained the result required.
This is an App Calculator Build with React the simplicity of writing this kind of App with javascript (or _JSX_) is very delightful because to style static App with react stand easy. the static part is easy but to style the operating part someone need to take good care of how javascript can be transcribed in react and like is a library it has powerful function . I don't feel i have take potential of great functions in react; still learning . This app is made with basic methodof React hopem it would give some beautiful render to your eyes.

_updateAndDisplayNuumber_

this is first and ;ost important function to enable our app to display on screen typed key.
here is the snippets code that allows to do that:

```js
updateAndDisplayNumber(e) {
    this.expectReset();

    if (e.target.className === "single_btn btn_number") {
      if (!this.state.isOperatingSignClicked) {
        this.setState({
          previousNumber: this.state.previousNumber.concat(e.target.value),
          result: parseFloat(this.state.previousNumber.concat(e.target.value)),
        });
      } else if (this.state.isOperatingSignClicked) {
        this.setState({
          currentNumber: this.state.currentNumber.concat(e.target.value),
          result: parseFloat(this.state.currentNumber.concat(e.target.value)),
        });
      }
    }
  }
}
```

_make button DEL function_
i learned with sackoverflow and w3schools that using `slice(0, -1)` or `slice(0, -1) or slice(0, stringName.length) ` is the means to remove the last character you entered but to do so you need to update each time our two mains operating number that i named here `previousNumber`
(number before the oparatimg sign) and `currentNumber` (after the operating sign) through the function handleOperation(), that store value(=> previousNumber) and change the cap of vvalue to receive now(=> currentNumber).

_define multiple states values_
because we have so many conditions that check states of our number when running i our functions . Remember **each condition statement** has to be **unique** if notm functions having same conditional statements zill made working one particular function especially the first function to call the conditional statement and will not allow **others functions** to change **state of values stored** in the `state Constructor` of **Components** concerned.

That is why ze have several properties in every React Component we created.
Hope that makes sense to you.

_mains functions we need through our process_

**linked flow**

- updateAndDisplayNumber()
- handleOperation()
- expectReset()
- giveResult

**independent flow**
-handleDeletion()
-handleReset()
-handleResult()

### Continued development

Manage and create an App that fetch Data and perform calculations will be a good move to deal with external data, where sometimes we need to implement differents couple actions given the results obtained in the field like automation. Having and interactive App will give us fun while using it.

### Useful resources

- [bobbyhadz.com](https://bobbyhadz.com/blog/javascript-get-ele;ent-by-data-attribute) - this website recall use how to call data-attribute when needed im javascript.
- [section.io](https://www.section.io/engineering-education/building-a-calculator-a-javascripts-projects-for-beginners/) - Give us Clues how to set our own functions along this project.
- - [scaler.com](https://www.scaler.com/topics/remove-last-character-from-string-javascript) - scaler.com explains easily the differents method we might use to **remove last character of a string**

## Author

- Website - [Ngouend Raoul Gerard](https://www.your-site.com)
- Frontend Mentor - [https://www.frontendmentor.io/profile/BeinRain06](https://www.frontendmentor.io/profile/BeinRain06)
- Twitter - [https://twitter.com/nest_Ngoueni](https://twitter.com/nest_Ngoueni)
