
Cheatsheet
==========

### Summary

This is a simple tool for displaying summarised information as cheatsheets.
The sheets are formatted using [Markdown][1], like you are reading now.
Once parsed they are are then transformed into browsable webpages with
sections etc.

### Usage

To use just git clone this repository somewhere and open the `html/index.html` file.
To open a specific sheet use URL:

    file:///PATH_TO_CHEATSHEET/html/index.html?sheet=SHEETNAME
    
To add new sheets, create a new file `sheets/SHEETNAME.md`.

### Formatting

Formatting is standard Markdown:

- H2 headers become section names.
- Tables are allowed.
- Value-comment lists are a markup extension.

#### Syntax highlighting

Prefer triple single quotes over indenting. Optionally add the language.

    ```bash
    if [ $1 -eq 0 ]; then
        echo "zero!"
    fi
    ```

#### Tables

Tables are allowed. Format is [same as Github][2]. (*Replace 'I' with '|'!*)

    Heading1 I Heading2
    -------- I --------
    apple    I banana
    pear     I mango    

#### Value-Comment list

Lists in the following markup become "value-comment" lists, similar to tables.

    - Value1 :: Comment about value1
    - Value2 :: Comment about value2
    - Value3 :: Comment about value3
    
### Links

- [Project homepage](https://github.com/billyquith/cheatsheet)
- [Markdown](http://daringfireball.net/projects/markdown/)

### Licence

GPLv3: GNU GENERAL PUBLIC LICENSE. Version 3, 29 June 2007.

[1]: https://en.wikipedia.org/wiki/Markdown
[2]: https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet#tables

