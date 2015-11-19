
BASH
====

Variables
---------

- `$1-$N` Stores the arguments (variables) that were passed to the shell program from the command line.
- `$?`    Stores the exit value of the last command that was executed.
- `$0`    Stores the first word of the entered command (the name of the shell program).
- `$*`    Stores all the arguments that were entered on the command line ($1 $2 ...).
- `"$@"`  Stores all the arguments that were entered on the command line, individually quoted ("$1" "$2" ...).

Test
----

`test expression` or `[ expression ]`

```if [ -e filename]; then
    # do something
fi```

#### Numeric Comparisons

- `int1 -eq int2`	Returns True if int1 is equal to int2.
- `int1 -ge int2`	Returns True if int1 is greater than or equal to int2.
- `int1 -gt int2`	Returns True if int1 is greater than int2.
- `int1 -le int2`	Returns True if int1 is less than or equal to int2
- `int1 -lt int2`	Returns True if int1 is less than int2
- `int1 -ne int2`	Returns True if int1 is not equal to int2


#### String Comparisons

- `str1 = str2`	    Returns True if str1 is identical to str2.
- `str1 != str2`	Returns True if str1 is not identical to str2.
- `str`	            Returns True if str is not null.
- `-n str`       	Returns True if the length of str is greater than zero.
- `-z str`       	Returns True if the length of str is equal to zero. (zero is different than null)


#### File Comparisons

- `-d filename`	Returns True if file, filename is a directory.
- `-f filename`	Returns True if file, filename is an ordinary file.
- `-r filename`	Returns True if file, filename can be read by the process.
- `-s filename`	Returns True if file, filename has a nonzero length.
- `-w filename`	Returns True if file, filename can be written by the process.
- `-x filename`	Returns True if file, filename is executable.


#### Expression Comparisons

- `!expression`       Returns true if expression is not true
- `expr1 -a expr2`    Returns True if expr1 and expr2 are true. ( && , and )
- `expr1 -o expr2`    Returns True if expr1 or expr2 is true. ( ||, or )

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
