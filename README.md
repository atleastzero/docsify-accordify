# Accordify

A simple script and sample stylesheet for using accordions in Docsify!

## How to Use

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