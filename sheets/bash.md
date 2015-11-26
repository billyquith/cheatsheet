
BASH
====

Control
-------

### Logic

```bash
if [ EXPRESSION ]; then
    COMMANDS
fi
```

```bash
if [ EXPRESSION ]; then
    COMMANDS
else
    COMMANDS
fi
```

```bash
if [ EXPRESSION ]; then
    commands
elif [ EXPRESSION2 ]; then
    COMMANDS
else
    COMMANDS
fi
```

```bash
case STRING in
str1)   COMMANDS;;
str2)   COMMANDS;;
*)      COMMANDS;;
esac
```

```bash
# This executes once for each item in the list. This list can be a variable
# that contains several words separated by spaces (such as output from ls
# or cat), or it can be a list of values that is typed directly into the
# statement. Each time through the loop, the variable var1 is assigned
# the current item in the list, until the last one is reached.
for VAR1 in LIST
do
    COMMANDS
done
```

```bash
while [ EXPRESSION ]
do
    COMMANDS
done
```

```bash
until [ EXPRESSION ]
do
    COMMANDS
done
```

#### Select

Easy generation of menus:

```bash
select NAME [in WORDS]; do COMMANDS; done
```

- WORDS is expanded, generating *list of items*.
- *List* is printed on the *stderr stream*, each preceded by a number.
- `select N; do COMMANDS; done` - line is read from the standard input, as if `in "$@"` specified.

The *PS3 prompt* is then displayed and a line is *read from stdin*:

- If input line a *number* corresponding to displayed word, value of name is set to word.
- If input line *empty*, the words and prompt are displayed again.
- If *EOF* is read, the select command completes.
- Any *other* value read causes name to be set to null.
- The line read is saved in the *variable REPLY*.

The commands are executed after each selection until a break command is executed (or <kbd>Ctrl</kbd> + <kbd>D</kbd>).

```bash
# Pick a filename from the current directory, and.out displays the name and
# index of the file selected.
select fname in *;
do
	echo "You picked $fname \($REPLY\)";
    break;
done
```


### Functions

Functions are declared using syntax:

```bash
[function] NAME [()] COMPOUND-COMMAND [ REDIRECTIONS ]
```

#### Redirection

Functions can have input and output redirected. E.g. when called,
*input* comes from`foo.in`, *output* to `foo.out`, and *error* to `foo.err`:

```bash
function foo() {
    COMMANDS;
} < foo.in > foo.out 2> foo.err

```


Tests
-----

`test expression` or `[ expression ]`

#### Numeric Comparisons

- `int1 -eq int2` :: True if int1 is equal to int2.
- `int1 -ge int2` :: True if int1 is greater than or equal to int2.
- `int1 -gt int2` :: True if int1 is greater than int2.
- `int1 -le int2` :: True if int1 is less than or equal to int2
- `int1 -lt int2` :: True if int1 is less than int2
- `int1 -ne int2` :: True if int1 is not equal to int2


#### String Comparisons

- `str1 = str2`	    :: True if str1 is identical to str2.
- `str1 != str2`    :: True if str1 is not identical to str2.
- `str`	            :: True if str is not null.
- `-n str`          :: True if the length of str is greater than zero.
- `-z str`          :: True if the length of str is equal to zero. (zero is different than null)


#### File Comparisons

- `-d filename`     :: True if file, filename is a directory.
- `-f filename`     :: True if file, filename is an ordinary file.
- `-r filename`     :: True if file, filename can be read by the process.
- `-s filename`     :: True if file, filename has a nonzero length.
- `-w filename`     :: True if file, filename can be written by the process.
- `-x filename`     :: True if file, filename is executable.


#### Expression Comparisons

- `!expression`     :: True if expression is not true.
- `expr1 -a expr2`  :: True if expr1 and expr2 are true. ( && , and )
- `expr1 -o expr2`  :: True if expr1 or expr2 is true. ( ||, or )


Variables
---------

#### Arguments

- `$1-$N` :: Stores the arguments (variables) that were passed to the shell program from the command line.
- `$?`    :: Stores the exit value of the last command that was executed.
- `$0`    :: Stores the first word of the entered command (the name of the shell program).
- `$*`    :: Stores all the arguments that were entered on the command line ($1 $2 ...).
- `"$@"`  :: Stores all the arguments that were entered on the command line, individually quoted ("$1" "$2" ...).

#### Shell Parameter Expansion

- `${parameter:-word}` :: If parameter is unset or null, the expansion of word is substituted. Otherwise, the value of parameter is substituted.- 
- `${parameter:=word}` :: If parameter is unset or null, the expansion of word is assigned to parameter. The value of parameter is then substituted. Positional parameters and special parameters may not be assigned to in this way.
- `${parameter:?word}` :: If parameter is null or unset, the expansion of word (or a message to that effect if word is not present) is written to the standard error and the shell, if it is not interactive, exits. Otherwise, the value of parameter is substituted.
- `${parameter:+word}` :: If parameter is null or unset, nothing is substituted, otherwise the expansion of word is substituted.

#### Substrings

- `${parameter:offset}`         :: All characters after offset.
- `${parameter:offset:length}`  :: All characters after offset for length.


Keyboard
--------

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
<kbd>CTRL</kbd> + <kbd>M</kbd> | same as RETURN
<kbd>CTRL</kbd> + <kbd>N</kbd> | next line in command history
<kbd>CTRL</kbd> + <kbd>O</kbd> | same as RETURN, then displays next line in history file
<kbd>CTRL</kbd> + <kbd>P</kbd> | previous line in command history
<kbd>CTRL</kbd> + <kbd>R</kbd> | searches backward
<kbd>CTRL</kbd> + <kbd>S</kbd> | searches forward
<kbd>CTRL</kbd> + <kbd>T</kbd> | transposes two characters
<kbd>CTRL</kbd> + <kbd>U</kbd> | kills backward from point to the beginning of line
<kbd>CTRL</kbd> + <kbd>V</kbd> | makes the next character typed verbatim
<kbd>CTRL</kbd> + <kbd>W</kbd> | kills the word behind the cursor
<kbd>CTRL</kbd> + <kbd>X</kbd> | lists the possible filename completefions of the current word
<kbd>CTRL</kbd> + <kbd>Y</kbd> | retrieves (yank) last item killed
<kbd>CTRL</kbd> + <kbd>Z</kbd> | stops the current command, resume with fg in the foreground or bg in the background


References
----------

- [BASH reference manual](https://www.gnu.org/software/bash/manual/bash.html).


