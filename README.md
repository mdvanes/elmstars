# Elm Stars

Abstract star field in Elm for use in React applications.

# Sources

https://codeburst.io/using-elm-in-react-from-the-ground-up-e3866bb0369d
https://medium.com/javascript-inside/building-a-react-redux-elm-bridge-8f5b875a9b76

Approach diverges from these articles because Elm 0.19 is used. 

* elm-package install is now `elm make`
* elm-package.json is now `elm.json`
* The example Buttons.elm file now has a different implementation https://guide.elm-lang.org/architecture/buttons.html
* The import of the module in App.js must now be done with `import Buttons from './elm/Buttons';` and used with `<Elm src={Buttons.Elm.Main} />`

Approach diverges because CRA was ejected to be able to edit the webpack config. A different version of webpack is used
so the webpack.config.js changes are also different.

# Todo

* Convert to TS
* Show 2D star map animation based on ![design](https://github.com/mdvanes/elmstars/raw/master/src/design.jpg "Design")
* Integrate into bigger application
* Publish
* Fix Medium posts by also converting to Elm
* optional: API calls for star map
