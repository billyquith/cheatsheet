
Cheatsheet
==========

### Summary

This is a simple tool for displaying summarised information as cheatsheets. The sheets are
formatted using [Markdown][1], like you are reading now. Once parsed they are are then transformed
into browsable webpages.

### Usage

To use just git clone this repository somewhere and open the `html/index.html` file.
To open a specific sheet use URL:

    file:///PATH_TO_CHEATSHEET/index.html?sheet=SHEETNAME
    
To add new sheets, create a new file `sheets/SHEETNAME.md`.

### Formatting

Formatting is [standard Markdown][mdcheat]:

- H2 headers become section names.
- Tables are allowed.
- Value-comment lists are a markup extension.
- Pop-up examples.

See the "eg" [example sheet][eg] and its source for more examples.
    
### Useful links

- [Project homepage](https://github.com/billyquith/cheatsheet)
- [Markdown](http://daringfireball.net/projects/markdown/)
- [Markdown cheatsheet][mdcheat]

### Licence

The project is a standalone tool and so is licensed under GPL.

[GPLv3][GPL] - GNU GENERAL PUBLIC LICENSE]. Version 3, 29 June 2007.


[1]: https://en.wikipedia.org/wiki/Markdown
[2]: https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet#tables
[eg]: https://billyquith.github.io/cheatsheet/?sheet=eg
[mdcheat]: https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet
[GPL]: https://www.gnu.org/licenses/gpl-3.0.en.html
