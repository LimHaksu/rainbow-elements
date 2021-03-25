# Rainbow Elements

  

![RainbowElements](https://user-images.githubusercontent.com/32071079/112425531-95e05b80-8d79-11eb-8093-8c3a5c53ece8.png)

  

Simple library that paints HTML elements in rainbow colors



## Install

```shell
npm install rainbow-elements
```

```shell
yarn add rainbow-elements
```

  

## Usage

This library paints the children of the dom with rainbow colors, so wrapper dom is needed.  

### basic

Add `class="rainbow-elements"` attribute to the wrapper DOM

```html
<div class="rainbow-elements" data-type="background">
    <div> 1 </div>
    <div> 2 </div>
    <div> 3 </div>
    <div> 4 </div>
    <div> 5 </div>
    <div> 6 </div>
    <div> 7 </div>
</div>
```

Import `rainbow-elements` and execute `run()` method

```js
import { re } from 'rainbow-elements'
re.run()
```

Then, the div elements inside the wrapper div colored rainbow.  

  

#### UMD

```html
<body>
    <div class="rainbow-elements" data-type="background">
        <div> 1 </div>
        <div> 2 </div>
        <div> 3 </div>
        <div> 4 </div>
        <div> 5 </div>
        <div> 6 </div>
        <div> 7 </div>
	</div>
</body>
<script src="https://unpkg.com/rainbow-elements@latest/dist/rainbow-elements.js"></script>
```

```js
const { re } = window.RainbowElements
re.run()
```

  

  

## Methods

| method  | parameter | description                                                  |
| ------- | --------- | ------------------------------------------------------------ |
| paint() | `none`    | paint rainbow colors the doms in current page                |
| clear() | `none`    | erase rainbow colors the doms in current page                |
| run()   | `none`    | execute paint() and subscribe paint() method to the mutation observer |
| stop()  | `none`    | execute clear() and unsubscribe paint() method               |

If you use this library in SPA, It is enough to call the run() or stop() method once in root file. Elements in all pages are automatically painted in rainbow colors.

run() and stop() methods use the [mutation observer](https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver). you need to check out the [browser compatibility](https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver#browser_compatibility).

  

## Attributes

This library changes [hsla](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#fully_saturated_colors) values of the elements.

| attribute       | value or range                    | default value | type   | description                                                  |
| --------------- | --------------------------------- | ------------- | ------ | ------------------------------------------------------------ |
| class           | "rainbow-elements"                | `none`        | string | The class of the wrapper dom should be named "rainbow-elements" for the library to detect the dom. |
| data-type       | "color"  \| "background" \| "svg" | "color"       | string | (optional)<br />"color" changes the element.style.color<br />"background" changes the element.style.backgroundColor<br />"svg" changes the element.style.fill |
| data-saturation | "0" ~ "1" (float)                 | "1"           | string | (optional)<br />"0" means "0%" of the saturation and <br />"1" means "100%" of that. |
| data-lightness  | "0" ~ "1" (float)                 | "0.5"         | string | (optional)<br />"0" means "0%" of the lightness and <br />"1" means "100%" of that. |
| data-alpha      | "0" ~ "1" (float)                 | "1"           | string | (optional) It is just alpha value                            |



## Examples

### with React

to be updated...

  

### with D3

to be updated...
