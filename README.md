# Frontend Mentor - REST Countries API with color theme switcher solution

This is a solution to the [REST Countries API with color theme switcher challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/rest-countries-api-with-color-theme-switcher-5cacc469fec04111f7b848ca). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

-   [Overview](#overview)
    -   [The challenge](#the-challenge)
    -   [Screenshot](#screenshot)
    -   [Links](#links)
-   [My process](#my-process)
    -   [Built with](#built-with)
    -   [What I learned](#what-i-learned)
-   [Author](#author)

## Overview

### The challenge

Users should be able to:

-   See all countries from the API on the homepage
-   Search for a country using an `input` field
-   Filter countries by region
-   Click on a country to see more detailed information on a separate page
-   Click through to the border countries on the detail page
-   Toggle the color scheme between light and dark mode _(optional)_

### Screenshot

![](./screenshot.png)

### Links

-   Solution URL: [https://www.frontendmentor.io/solutions/countries-challenge-using-react-and-tailwind-TwbGzssA6](https://www.frontendmentor.io/solutions/countries-challenge-using-react-and-tailwind-TwbGzssA6)
-   Live Site URL: [https://hjludwig-countries.netlify.app/](https://hjludwig-countries.netlify.app/)

## My process

### Built with

-   Tailwind
-   Flexbox
-   CSS Grid
-   [React](https://reactjs.org/) - JS library

### What I learned

This project was the first one in which I created a dark mode. The technique I chose to go with was to create a theme context. That gave me a boolean variable that I could access in order to apply tailwind classes conditionally. It also exports a function for switching the theme which is used in the app header.

```js
const ThemeContext = React.createContext();

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
    const [dark, setDark] = useState(false);
    const changeTheme = () => {
        setDark(!dark);
    };
    const value = {
        dark,
        changeTheme,
    };
    return (
        <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
    );
};
```

## Author

-   Website - [Jeremy Ludwig, web developer](https://webdev.jeremyludwig.com/)
-   Frontend Mentor - [@hjludwig](https://www.frontendmentor.io/profile/hjludwig)
-   LinkedIn - [/hjeremyludwig](https://www.linkedin.com/in/hjeremyludwig/)
