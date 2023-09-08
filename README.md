# How to use
## Arguments
- g - generate

## Options
- -p or --props - generate component with props
- -s or --styles - generate styled component

## Examples
```ps
$ generate Header component with props and module.scss
node ./cli.js g mock/Header -p -s scss

$ generate Header component with props
node ./cli.js g mock/Header -p

$ generate Header component with module.scss
node ./cli.js g mock/Header -s scss

$ generate Header component without anything
node ./cli.js g mock/Header

$ generate Header component with props and module.css
node ./cli.js g mock/Header -p -s css
```