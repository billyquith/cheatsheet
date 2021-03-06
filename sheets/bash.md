
BASH
====

References
----------

- [BASH reference manual](https://www.gnu.org/software/bash/manual/bash.html).
- [Grymoire](http://www.grymoire.com/Unix/index.html) - intro to UNIX concepts
- [ss64 UNIX commands](http://ss64.com/bash/) - help on each command
- [Shell Fu](http://www.shell-fu.org)


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
LIST="one two three"
for VAR1 in $LIST
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

Functions can have input and output *redirected*. E.g. when called,
*input* comes from`foo.in`, *output* to `foo.out`, and *error* to `foo.err`:

```bash
function foo() {
    COMMANDS;
} < foo.in > foo.out 2> foo.err

```


Input
-----

#### read

Synopsis: `read [-ers] [-a aname] [-d delim] [-i text] [-n nchars] [-N nchars] [-p prompt] [-t timeout] [-u fd] [name …]` [docs](https://www.gnu.org/software/bash/manual/bash.html#index-read)

- `-a aname` :: Words are assigned to array variable `aname`, starting at 0. All elements are removed from aname before the assignment. Other name arguments are ignored.
- `-d delim` :: The first character of delim is used to terminate the input line, rather than newline.
- `-e` :: Readline used to obtain line. 
- `-i text` :: If Readline used, text placed into editing buffer before editing begins.
- `-n nchars` :: read returns after reading nchars characters rather than waiting for a complete line of input, but honors a delimiter if fewer than nchars characters are read before the delimiter.
- `-N nchars` :: read returns after exactly nchars characters, unless EOF is encountered or read times out. Delimiter chars are not special and do not cause read to return until nchars characters are read. Result is not split on the characters in IFS; the intent is that the variable is assigned exactly the characters read.
- `-p prompt` :: Display prompt, without a trailing newline, before attempting to read any input. Prompt is displayed only if input is coming from a terminal.
- `-r` :: If this option is given, backslash does not act as an escape character. The backslash is considered to be part of the line. In particular, a backslash-newline pair may not be used as a line continuation.
- `-s` :: Silent mode. If input is coming from a terminal, characters are not echoed.
- `-t timeout` :: Timeout after timeout seconds. Only effective if reading input from a terminal, pipe, or other special file; it has no effect when reading from regular files. If read times out, read saves any partial input read into the specified variable name. If timeout is 0, read returns immediately, without trying to read and data. The exit status is 0 if input is available on the specified file descriptor, non-zero otherwise. The exit status is greater than 128 if the timeout is exceeded.
- `-u fd` :: Read input from file descriptor fd.

```bash
read -p "prompt> " VAR
echo ${VAR:-"Nothing entered"}
```

#### getopts

```bash
while getopts "a:b" options; do
  case "${options}" in
  a) A=${OPTARG} ;;
  b) echo "B" ;;
  :) echo "Option ${OPTARG} expects an argument" && exit 2 ;;
  *) echo "Unknown option" && exit 2 ;;
  esac
done
```

Output
------

#### cat

Synopsis: `cat [-benstuv] [file ...]`

Print the contents of file1 to the standard output:

```bash
cat file1
```

Sequentially print the contents of file1 and file2 to the file file3, truncating file3 if it
already exists.
     
```bash
cat file1 file2 > file3
```

Print the contents of file1, print data it receives from the standard input until receive an
`EOF` (`^D`) character, print the contents of file2, read and output contents of the standard input
again, then finally output the contents of file3. 

```bash
cat file1 - file2 - file3
```

Write between markers, with redirection, to file1:

```bash
cat << EOM > file1
This line will write to the file.
${THIS} will also write to the file, with the variable contents substituted.
EOM
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

- `$0`    :: Stores the first word of the entered command (the name of the shell program).
- `$1-$N` :: Stores the arguments (variables) that were passed to the shell program from the command line.
- `$*`    :: Stores all the arguments that were entered on the command line `($1 $2 ...)`.
- `"$@"`  :: Stores all the arguments that were entered on the command line, individually quoted ("$1" "$2" ...).
- `$?`    :: Stores the exit value of the last command that was executed.

#### Defaults

- `${PARAM:-WORD}` :: If PARAM is unset or null, the expansion of WORD is substituted. Otherwise, the value of PARAM is substituted. <note ref="spe1"/>
- `${PARAM:=WORD}` :: If PARAM is unset or null, the expansion of WORD is assigned to PARAM. The value of PARAM is then substituted. Positional parameters and special parameters may not be assigned to in this way.
- `${PARAM:?WORD}` :: If PARAM is null or unset, the expansion of WORD (or a message to that effect if WORD is not present) is written to the standard error and the shell, if it is not interactive, exits. Otherwise, the value of PARAM is substituted.
- `${PARAM:+WORD}` :: If PARAM is null or unset, nothing is substituted, otherwise the expansion of WORD is substituted.

#### Slicing

- `${PARAM:OFFSET}`         :: All characters after OFFSET. Note: -ve OFFSET is from end.
- `${PARAM:OFFSET:LENGTH}`  :: Slice characters after OFFSET for LENGTH.
- `${@:OFFSET}`             :: `@` = use positional parameters. OFFSET from start.
- `${@:OFFSET:LENGTH}`      :: Slice parameters from OFFSET for LENGTH.

#### Counting

- `${#PARAM}`               :: Length of PARAM in chars.

#### Substitution

- `${PARAM/PATTERN/STRING}` :: Longest match of PATTERN is replaced with STRING. Pattern: `#` = PARAM start. @,* apply to positional params.
- `${PARAM#WORD}`           :: WORD is pattern ('?','*' wildcards). Shortest matching pattern deleted from string start.
- `${PARAM##WORD}`          :: As above, but longest matching pattern deleted from string start.
- `${PARAM%WORD}`           :: WORD is pattern ('?','*' wildcards). Shortest matching pattern deleted from string end.
- `${PARAM%%WORD}`          :: As above, but longest matching pattern deleted from string end.
- `${PARAM^PATTERN}`        :: Modify case of PARAM where pattern matched. Make upper case first char.
- `${PARAM^^PATTERN}`       :: As above. Make upper case all char.
- `${PARAM,PATTERN}`        :: As above. Make lower case first char.
- `${PARAM,,PATTERN}`       :: As above. Make lower case all chars.

### Useful

* `SCRIPTPATH=$(cd $(dirname $0); pwd -P)` - Path of current script.

#### set

```bash
set -o errexit -o nounset
```

- errexit :: stop executing if any errors occur, by default bash will just continue past any errors
  to run the next command
- nounset :: stop executing if an unset variable is encountered, by default bash will use an empty
  string for the value of such variables.


Date
----

`date +"%FORMAT"` used to display or set date and time. Command:

    date "+DATE: %Y-%m-%d%nTIME: %H:%M:%S"

displays:

```raw
DATE: 1987-11-21
TIME: 13:36:16
```


%FORMAT String | Description
-------------- | -----------
 `%%` | a literal %
 `%a` | locale’s abbreviated weekday name (e.g., Sun)
 `%A` | locale’s full weekday name (e.g., Sunday)
 `%b` | locale’s abbreviated month name (e.g., Jan)
 `%B` | locale’s full month name (e.g., January)
 `%c` | locale’s date and time (e.g., Thu Mar 3 23:05:25 2005)
 `%C` | century; like %Y, except omit last two digits (e.g., 21)
 `%d` | day of month (e.g, 01)
 `%D` | date; same as %m/%d/%y
 `%e` | day of month, space padded; same as %_d
 `%F` | full date; same as %Y-%m-%d
 `%g` | last two digits of year of ISO week number (see %G)
 `%G` | year of ISO week number (see %V); normally useful only with %V
 `%h` | same as %b
 `%H` | hour (00..23)
 `%I` | hour (01..12)
 `%j` | day of year (001..366)
 `%k` | hour ( 0..23)
 `%l` | hour ( 1..12)
 `%m` | month (01..12)
 `%M` | minute (00..59)
 `%n` | a newline
 `%N` | nanoseconds (000000000..999999999)
 `%p` | locale’s equivalent of either AM or PM; blank if not known
 `%P` | like %p, but lower case
 `%r` | locale’s 12-hour clock time (e.g., 11:11:04 PM)
 `%R` | 24-hour hour and minute; same as %H:%M
 `%s` | seconds since 1970-01-01 00:00:00 UTC
 `%S` | second (00..60)
 `%t` | a tab
 `%T` | time; same as %H:%M:%S
 `%u` | day of week (1..7); 1 is Monday
 `%U` | week number of year, with Sunday as first day of week (00..53)
 `%V` | ISO week number, with Monday as first day of week (01..53)
 `%w` | day of week (0..6); 0 is Sunday
 `%W` | week number of year, with Monday as first day of week (00..53)
 `%x` | locale’s date representation (e.g., 12/31/99)
 `%X` | locale’s time representation (e.g., 23:13:48)
 `%y` | last two digits of year (00..99)
 `%Y` | year
 `%z` | +hhmm numeric timezone (e.g., -0400)
 `%:z`   | +hh:mm numeric timezone (e.g., -04:00)
 `%::z`  | +hh:mm:ss numeric time zone (e.g., -04:00:00)
 `%:::z` | numeric time zone with : to necessary precision (e.g., -04, +05:30)
 `%Z`    | alphabetic time zone abbreviation (e.g., EDT)


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


Tips
----

### History

Config (`.bashrc`):

    shopt -s histappend
    shopt -s cmdhist
    export HISTCONTROL="erasedups:ignoreboth" # ignore duplicates
    export HISTIGNORE="&:[ ]*:exit"
    export HISTFILESIZE=500000
    export HISTSIZE=10000

Top 10 commands used:

    history | awk '{print $2}' | awk 'BEGIN {FS="|"}{print $1}' | sort | uniq -c | sort -nr | head

### Navigation

Takes you to the previous directory you were in:

    cd -
    
List only subdirectoies in current one:

    ls -d */

### Renaming

Renaming/moving files with suffixes quickly:

    cp /home/foo/realllylongname.cpp{,-old}

This expands to:

    cp /home/foo/realllylongname.cpp /home/foo/realllylongname.cpp-old
    
### Repeat

Another favorite:

`!!` and `!?` (matching) repeats your last command. E.g.

```bash
!!        # repeat
sudo !!
!?foo     # repeat last command starting with "foo"
```
    
Print last command:

    !!:p
    !?foo?:p   # print last command starting with "foo"

`^search^replace` takes the last command applying a search and replace:

    $ ehco foo bar baz
    bash: ehco: command not found
    $ ^ehco^echo
    foo bar baz
    
Run command with the previous command's arguments:

    $ mkdir /tmp/new
    $ cd !!:*


### Sources

- Stack Overflow [favourite BASH tricks](http://stackoverflow.com/q/68372/3233)


Notes
-----

<notes/>

#### spe1

```bash
VAR=${1:-'default'}
```


