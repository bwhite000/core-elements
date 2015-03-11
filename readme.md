# CoreElements

A collection of core custom elements not requiring a Polymer overhead based on the
Google Polymer project by the similar name, but with a bunch of optimization and
pruning for projects that are looking for a slimmer version.

Some pieces are similar to, and others are loosely based on Google's base concepts.
Don't think of it as a rehash, but a bwhite000 mod built from scratch (besides the
SVGs for the core-icons).

This is an exciting, learning side project that will have more good improvements soon!

## Example
__pubspec.yaml__ - Add the package as a dependency.

```yaml
...
dependencies:
  core_elements:
    git: git://github.com/bwhite000/core-elements.git
```

__web/index.html__ - Setup the imports and scripts.

```html
<!doctype html>
<html>
    <head>
        <title>Core Elements Demo</title>
        
        <import rel="import" href="packages/core_elements/core_icon.html" />
        
        <script type="application/dart" src="main.dart" defer></script>
    </head>
    <body>
        <core-icon icon="default.home"></core-icon>
    </body>
</html>
```

__web/main.dart__ - Activate/register the custom elements.

```dart
import "dart:html";
import "package:core_elements/core_elements.dart" as CoreElements;

void main() {
  // Register the custom elements with the Document.
  CoreElements.registerWithDom();

  // Create the Element.
  final CoreElements.CoreIcon coreIcon = new Element.tag('core-icon')
      ..icon = 'default.home';

  // Add it to the Body to see it.
  document.body.nodes.add(coreIcon);
}
```
## Compatibility

This project relys on native support for:
* [HTML Imports](http://caniuse.com/#feat=imports)
* [Templates](http://caniuse.com/#feat=template)
* [Shadow DOM](http://caniuse.com/#feat=shadowdom)
* [Custom Elements](http://caniuse.com/#feat=custom-elements)