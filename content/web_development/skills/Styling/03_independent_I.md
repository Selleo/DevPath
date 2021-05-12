# TECHNOLOGY :: Frontend :: CSS/HTML

Provide the list of PR's or other contributions that prove you understand each subject, or add the Katas listed below to your project from J2.

&nbsp;

# Independent I

## 📦 Advanced CSS

### 🎓 Learn

* 📗 [Advanced CSS](https://www.w3schools.com/Css/css3_borders.asp) ("CSS Advanced" section)
* 📗 [Selectors](https://code.tutsplus.com/tutorials/the-30-css-selectors-you-must-memorize--net-16048)
* 📗 [Advanced alignment](https://www.smashingmagazine.com/2019/03/css-alignment/)
* 📗 [Ellipsis](https://css-tricks.com/snippets/css/truncate-string-with-ellipsis/)
* 📗 [Multiline ellipsis](https://css-tricks.com/line-clampin/)
* 📗 [Margin collapsing](https://css-tricks.com/what-you-should-know-about-collapsing-margins/)
* 📗 Another way of disabling margin collapsing is `overflow: hidden` on parent
* 📗 Pseudo-classes can be used to style an element based on its state.
* 📗 Pseudo-elements can be used to style a specific part of an element.
* 📗 [Pseudo elements](https://css-tricks.com/pseudo-class-selectors/)
* 📗 [Positioning](https://developer.mozilla.org/en-US/docs/Web/CSS/position)
* 📗 [CSS variables](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties)
* 📗 [CSS variables vs preprocessor variables](https://css-tricks.com/difference-between-types-of-css-variables/)


### 🎤 Interview

#### CSS
* when margins collapse
* what are pseudo-elements
* what is necessary for :before to work?
* How to set multiple backgrounds in CSS and what are the properties for controlling it?
* What types of colors can you use in CSS?
* How to set transparency?
* How to set a gradient and what types are there?
* Shadow types
* How to truncate text in CSS?
* What does object-fit do?
* How CSS variables work?

#### Selectors
* `~` vs `+`
* when and how to use `:not`
* `:last-child` vs `:last-of-type`
* How to style 5th element
* How to style based on attribute?
* How to style all 3 elements: `.selleo1` `.selleo2` `.selleo3` with 1 attribute selector


## 📦 Frameworks (just be aware that these exist)

### 🎓 Learn

* 📗 [Ant Design *](https://ant.design/)
* 📗 [Material UI *](https://material-ui.com/)
* 📗 [Materialize *](https://materializecss.com/)
* 📗 [Semantic UI *](https://semantic-ui.com/)
* 📗 [UIkit *](https://getuikit.com/)
* 📗 [Foundation *](https://foundation.zurb.com/)
* 📗 [Bulma *](https://bulma.io/)
* 📗 [React bootstrap *](https://react-bootstrap.github.io/)


## 📦 Advanced flex

### 🎓 Learn

* 📗 [Examples](https://medium.freecodecamp.org/the-ultimate-guide-to-flexbox-learning-through-examples-8c90248d4676)
* 📗 [Magic property that fixes everything](https://dfmcphee.com/flex-items-and-min-width-0/)
* 📗 [Flex sizing exercise](https://codepen.io/ArekJanik/pen/dwOJma) - you can fix that with 1 line of code :)
* 📗 [Flex image sizing](https://codepen.io/ArekJanik/pen/ZEOjVLG)
* 📗 [Workshop recording](https://www.youtube.com/watch?v=_OmSic-XicI)
* 📗 [Workshop start](https://codepen.io/ArekJanik/pen/VgXzwJ)
* 📗 [Workshop done](https://codepen.io/ArekJanik/pen/RdbrNQ)


### 🎤 Interview

* How to shrink flex items below their minimum content size?
* How to properly size images with flexbox?


## 📦 Animations

### 🎓 Learn
 
* 📗 [In depth guide to animations](https://web.archive.org/web/20201111234454/https://www.adobe.com/devnet/archive/html5/articles/using-css3-transitions-a-comprehensive-guide.html)
* 📗 [In depth guide to animations](https://blog.hubspot.com/website/css-animation)
* 📗 [Don't use transition: all](https://stackoverflow.com/questions/8947441/css3-transitions-is-transition-all-slower-than-transition-x)
* 📗 [How to achieve smooth animations](https://medium.com/outsystems-experts/how-to-achieve-60-fps-animations-with-css3-db7b98610108)
* 📗 [CSS @keyframe animations 1](https://css-tricks.com/snippets/css/keyframe-animation-syntax/)
* 📗 [CSS @keyframe animations 2](https://robots.thoughtbot.com/css-animation-for-beginners)
* 📗 [Scroll behaviour](https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-behavior)

### 📝 Katas

On your project, add:
* one animation triggered on hover
* one looped keyframe animation

### 🎤 Interview

* Name a few transforms and what’s the case for them?
* How (not) to animate?


## 📦 SVG icons

### 🎓 Learn
 
* 📗 [Icon fonts vs SVG](https://css-tricks.com/icon-fonts-vs-svg/)
* 📗 [Using svg icons](https://css-tricks.com/pretty-good-svg-icon-system/)
* 📗 [Complete guide](https://blog.usejournal.com/svg-icons-from-sketch-to-react-dfbedbf56484)
* 📗 [Minifying svg icons](https://jakearchibald.github.io/svgomg/)

### 📝 Katas

On your project, add:
* optimized SVG icons

### 🎤 Interview

* Inline SVG icons vs fonticons and why?
* How to optimize and use inline SVG icons?


## 📦 Performance

### 🎓 Learn
 
* 📗 [Article on image compression](https://medium.com/@arekjanik/compressing-assets-for-web-dbfd25674c2e?sk=8a53480e19ae65bf2a6343b32af63b46)
* 📗 [Different formats walkthrough](https://gizmodo.com/what-s-the-difference-between-jpg-png-and-gif-5656669)
* 📗 Always make sure the images you use are properly sized and compressed. For large images use the real size that they're displayed on, eg. if the content's width is 1200px resize the image to 1200px. For smaller images like 300px you can save them at 2x the size to make sure it's rendered nicely on Retina. Use JPG for photos and images with a lot of colour, for simpler images try PNG or even better - vector SVG. Don't use GIF, PNG is always better.
* 📗 [Compressing tool](https://squoosh.app/)
* 📗 Compress using the following options:
    * MozJPEG ~89 for smaller photos
    * MozJPEG ~80 for larger ones
    * OxiPNG 256 colors, dithering enabled
    * Browser WebP, quality 0.9 [more on that](https://selleo.com/til/posts/9kdnziefk3-great-case-for-webp-format)
* 📗 [What is lighthouse and how to run it (skip the video)](https://developers.google.com/web/tools/lighthouse)
* 📗 [How the scoring works](https://web.dev/performance-scoring/)
* 📗 [In-depth performance *](https://web.dev/lighthouse-performance/)
* 📗 [Eliminating render-blocking resources](https://www.digitalocean.com/community/tutorials/html-defer-async)
* 📗 [Deferring offscreen images](https://css-tricks.com/native-lazy-loading/)
* 📗 [Preloading key requests](https://developer.mozilla.org/en-US/docs/Web/HTML/Preloading_content)
* 📗 [Image optimizations](https://www.industrialempathy.com/posts/image-optimizations/)

### 📝 Katas

On your project, add:
* optimized assets
* HTML performance improvements

### 🎤 Interview

* Which image format to choose when?
* How to optimize for mobile/retina?
* How would you optimize for size/quality/performance?
* What is lighthouse and how to use it?
* What HTML features improve performance?


## 📦 Debugging

### 🎓 Learn
 
* 📗 [Inspecting hover states](https://coderwall.com/p/s_g9qg/use-chrome-dev-tools-to-force-element-state-hover-debugging)
* 📗 [Inspecting advanced](https://selleo.com/til/posts/ok8w4vaod0-inspecting-elements-that-disappear-from-dom)
* 📗 [Inspecting advanced #2](https://selleo.com/til/posts/zymr9yhtjf-inspecting-elements-that-disappear-from-dom-2)

### 🎤 Interview

* How to inspect hover state?
* How to inspect an element added dynamically?
* How to pick a color from page?
