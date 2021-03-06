
Example
=======

Formatting
----------

#### Formatting examples

- Some useful information *in italics* and **in bold**.
- `int itCode();` in here.
- <kbd>Ctrl</kbd> + <kbd>A</kbd> is for 'orses.
- Notes: <note ref="A test"/> <note ref="Code test"/> <note>Inline note</note>


#### Sub heading

Note this must be >h2.

- another list
- with items
  * and sublist
  * with more items
- and back to the other list
- which ends here


This is a small table example:

Country | Size | Food
------- | ---- | ----
UK | small | chips
US | big | burgers
France | medium | cheese


This is an extension, lists with splits, for values-comments:

- `RGB(255,0,0)` <note ref="colours"/> :: red
- `RGB(0,255)`    :: green
- `RGB(0,0,255)`  :: blue

More text:

- `${parameter:-word}` :: If parameter is unset or null, the expansion of word is substituted. Otherwise, the value of parameter is substituted.
- `${parameter:=word}` :: If parameter is unset or null, the expansion of word is assigned to parameter. The value of parameter is then substituted. Positional parameters and special parameters may not be assigned to in this way.
- `${parameter:?word}` :: If parameter is null or unset, the expansion of word (or a message to that effect if word is not present) is written to the standard error and the shell, if it is not interactive, exits. Otherwise, the value of parameter is substituted.
- `${parameter:+word}` :: If parameter is null or unset, nothing is substituted, otherwise the expansion of word is substituted.


### heading 3
#### heading 4
##### heading 5
###### heading 6


Table
-----

Big table example:

Key | Value
--- | -----
Apple | Pears
Tomarto | Tomayto
`code` | nice


Shortcut                       | Comment
------------------------------ | -----------------------------------------
<kbd>CTRL</kbd> + <kbd>A</kbd> | move to beginning of line
<kbd>CTRL</kbd> + <kbd>B</kbd> | moves backward one character
<kbd>CTRL</kbd> + <kbd>C</kbd> | halts the current command
<kbd>CTRL</kbd> + <kbd>D</kbd> | deletes one character backward or logs out of current session, similar to exit
<kbd>CTRL</kbd> + <kbd>E</kbd> | moves to end of line
<kbd>CTRL</kbd> + <kbd>F</kbd> | moves forward one character
<kbd>CTRL</kbd> + <kbd>G</kbd> | aborts the current editing command and ring the terminal bell
<kbd>CTRL</kbd> + <kbd>J</kbd> | same as RETURN
<kbd>CTRL</kbd> + <kbd>K</kbd> | deletes (kill) forward to end of line
<kbd>CTRL</kbd> + <kbd>L</kbd> | clears screen and redisplay the line


Code
----

#### Some BASH

This is a BASH example.

```bash
#!/bin/bash

###### BEGIN CONFIG
ACCEPTED_HOSTS="/root/.hag_accepted.conf"
BE_VERBOSE=false
###### END CONFIG

if [ "$UID" -ne 0 ]
then
 echo "Superuser rights is required"
 echo 'Printing the # sign'
 exit 2
fi

if test $# -eq 0
then
elif test [ $1 == 'start' ]
else
fi

genApacheConf(){
 if [[ "$2" = "www" ]]
 then
  full_domain=$1
 else
  full_domain=$2.$1
 fi
 host_root="${APACHE_HOME_DIR}$1/$2/$(title)"
 echo -e "# Host $1/$2 :"
}
```

#### Some Python

```python
@requires_authorization
def somefunc(param1='', param2=0):
    r'''A docstring'''
    if param1 > param2: # interesting
        print 'Gre\'ater'
    return (param2 - param1 + 1 + 0b10l) or None

class SomeClass:
    pass

>>> message = '''interpreter
... prompt'''
```

#### Some Lua

```lua
--[[
Simple signal/slot implementation
]]
local signal_mt = {
    __index = {
        register = table.insert
    }
}
function signal_mt.__index:emit(... --[[ Comment in params ]])
    for _, slot in ipairs(self) do
        slot(self, ...)
    end
end
local function create_signal()
    return setmetatable({}, signal_mt)
end

-- Signal test
local signal = create_signal()
signal:register(function(signal, ...)
    print(...)
end)
signal:emit('Answer to Life, the Universe, and Everything:', 42)

--[==[ [=[ [[
Nested ]]
multi-line ]=]
comment ]==]
[==[ Nested
[=[ multi-line
[[ string
]] ]=] ]==]
```

Notes
-----

<notes/>

#### A test

Test "with quotes" **bold**

#### Code test

```lua
if something then
  -- do something
  local function create_signal()
      return setmetatable({}, signal_mt)
  end
end
```

#### colours

<span style="background-color: red; padding: 5px">red</span>


Useful links
------------
- [Cheatsheet Github page](https://github.com/billyquith/cheatsheet)
- [Markdown syntax](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet#tables)
