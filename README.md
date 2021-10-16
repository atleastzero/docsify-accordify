# Accordify

[![Mentioned in Awesome Docsify](https://awesome.re/mentioned-badge.svg)](https://github.com/docsifyjs/awesome-docsify)

A simple script and sample stylesheet for using accordions in Docsify!

> If you are here because of a warning in your console, or because of a deprecated `loadAccordions`, go to [update](#Update) 

## How to Use

1. Insert this script at the end of the document:

```html
<script src="//unpkg.com/docsify-accordify/src/index.js"></script>
```

2. Create a custom stylesheet or use a default one:

```html
<link rel="stylesheet" href="//unpkg.com/docsify-accordify/src/assets/default.css">
```

3. Indicate which headers you'd like to accordify by adding " +" to the end, like this:

```markdown
## My great accordion +

Peekaboo!
```

5. Enjoy!

### Comments-Pre Parser

Accordify can pre-parse comments and include whole files into the body of an accordion. Let's say, you want to render a custom md file called "foo.md" and add it into an accordion. Then you can add the comment `<!-- accordify-inline:<filename> -->` to your markdown file:

```markdown
# Some Header

Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam

<!-- accordify-inline:foo.md -->

Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
```

The prenderer will take this and convert the comment into the following

```markdown
# Some Header

Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam

## foo.md + 

[foo.md](foo.md ':include')

Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
```

As you can see, the comment has been translated into an accordion and we use the default ':include' syntax from docsiy.

#### Custom Title

The name of the accordion can be changed, py providing a "second argument" to the comment, like this: `<!-- accordify-inline:<filename>|<title> -->`

So if you want the Title to be "Foo-Bar, the great journey of the Baz", you can to it like this:

```markdown
<!-- accordify-inline:foo.md|Foo-Bar, the great journey of the Baz -->
```

Which will be pre rendered to

```markdown
## Foo-Bar, the great journey of the Baz +

[foo.md](foo.md ':include')
```

### Configurations

Accordify allows you to enable or disable certain parts. This is the current configuration with default values provided:

```javascript
window.$docsify = {
    accordify: {
        prerenderComments: true,                    // default
        selectors: ['h1','h2','h3','h4','h5','h6'], // default value
        debug: false,                               // default value
    }
}
```

- **prerenderComments [boolean]:** If false, accordify comments will not be pre rendered
- **selectors [Array<String>]:** List of all selectors that should be respected for accordions (must be findable by `document.querySelectorAll`)
- **debug [boolean]:** If true, some debug statements will be printed

You do not need to add these comments, if you do not want to change them

## Update

If you have seen the warning

```
You are using an outdated version of Accordify. Please checkout the github page for further information.
```

You may want to do the following:

1) Move the link to the script to the bottom (under the declaration of `window.$docsify = { ... }`)
2) Remove the explicit plugin `window.$docsify.plugins: [ loadAccordions, ... ]`
3) Done! Now you are up to speed!

## How to Use (The old way)

1. Configure docsify-accordify:

```
window.$docsify = {
    ...,
    plugins: [loadAccordions, ...]
}
```

2. Insert the script into docsify document:

```
<script src="//unpkg.com/docsify-accordify/src/index.js"></script>
```

3. Create a custom stylesheet or use mine:

```
<link rel="stylesheet" href="//unpkg.com/docsify-accordify/src/assets/ugly-dark-theme.css">
```

4. Indicate which headers you'd like to accordify by adding " +" to the end.

5. Enjoy!
