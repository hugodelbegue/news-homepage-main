# Frontend Mentor - News homepage solution

This is a solution to the [News homepage challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/news-homepage-H6SWTa1MFl).

## Table of contents

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
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

![](./design/preview_desktop.svg)

![](./design/preview_mobile.svg)

### Links

- Solution URL: [https://github.com/HUGODELBEGUE/news-homepage-main](https://github.com/HUGODELBEGUE/news-homepage-main)
- Live Site URL: [https://hugodelbegue.github.io/news-homepage-main/](https://hugodelbegue.github.io/news-homepage-main/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS media queries
- Sass imports
- Sass variables and mixins
- Events Javascript
- Mobile-first workflow
- [Google Fonts](https://fonts.google.com/) - Fonts imports for typography
- [CSS Tools](https://meyerweb.com/eric/tools/css/reset/) - Reset CSS
- [Sass](https://sass-lang.com/) - CSS language preprocessor

### What I learned

Imports of variables for Media queries in Scss(Sass).

```css
$mobile: 375px;
$mobileScreen: "only screen and (max-width: #{$mobile})";

nav {
  @media #{$mobileScreen} {
    display: flex;
}
```

### Continued development

I will focus mainly on the Javascript language for my future projects.

### Useful resources

- [A Complete Guide to Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/) - Complete guide to easy learning Flexbox.
- [Developer mozilla](https://developer.mozilla.org/fr/) - Resources for Html CSS and Javascript. Here you will find all the necessary documentation for the methods to be used.

## Author

- Website - [PrimalProd](https://primalprod.fr/)
- Frontend Mentor - [@hugodelbegue](https://www.frontendmentor.io/profile/HUGODELBEGUE)
- GitHub - [HUGODELBEGUE](https://github.com/HUGODELBEGUE)

## Acknowledgments

Youtube tutorials:

- Graphikart [https://grafikart.fr/](https://grafikart.fr/)
- From Scratch [From Scratch - Le développement Web de zéro](https://www.youtube.com/@FromScratchDeveloppementWeb/featured)
- Bertrand [La Tech avec Bertrand](https://www.youtube.com/@TechAvecBertrand)

Online training:

- Codecademy [https://www.codecademy.com/](https://www.codecademy.com/)
