Smooch from CDN
=====================

Load [Smooch](http://smooch.com/) from a CDN.

If you want to include Smooch in your build, use the [official NPM Smooch package](https://npm.com/smooch).


## Browser policy
if you are using the `browser-policy` package, you'll need to add this line to a file in your `/server/` directory to allow the browser to load from the cdn
```
BrowserPolicy.content.allowOriginForAll('*.smooch.com');
```
