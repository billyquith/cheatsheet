Moonscript
==========

* Moonscript 4.0
  * [Website](http://moonscript.org).
  * [Reference](http://moonscript.org/reference/").
  

Syntax/Types
------------

```moon
-- I am a comment
```

Minus sign plays two roles, a unary negation operator and a binary subtraction operator:

```moon
a = x - 10      -- local a = x - 10
b = x-10        -- local b = x - 10
c = x -y        -- local c = x(-y)
d = x- z        -- local d = x - z
```

Creation
--------

New, unassigned names are *local* by default:

```moon
hello = "world"
a,b,c = 1, 2, 3
hello = 123 -- uses the existing variable

some_string = "Here is a string
  that has a line break in it."
```

#### Update

```moon
x = 0
x += 10

s = "hello "
s ..= "world"

b = false
b and= true or false
```

### Tables

Key assigned using ':'. Brackets are optional.
  
```moon
t = {}      -- table

some_values = {
  name: "Bill",
  age: 200,
  ["favorite food"]: "rice",
  [1 + 2]: "hello",                 -- key expression
  "hello world": true               -- brackets optional
}

profile =                           -- no brackets
  height: "4 feet",
  shoe_size: 13,
  favorite_foods: {"ice cream", "donuts"}
```

Can be created on single line:

```moon
my_function dance: "Tango", partner: "none"     -- pass table to function

y = type: "dog", legs: 4, tails: 1              -- create & assign
```

Table of variables and where keys same as the variable names:

```moon
hair = "golden"
height = 200
person = { :hair, :height, shoe_size: 40 }
```

### Functions

No arguments. Indenting defines scope.

```moon
func_a = -> print "hello world"

func_b = ->
  value = 100
  print "The value:", value
  
func_a!     -- call with no args, preferred to func_b()
```

With arguments:

```moon
print_sum = (x, y) -> print "sum", x + y    -- no return value

calc_sum = (x, y) -> x + y                  -- implicit return value

print_sum 1, 2          -- call with 2 args. Note comma(s).
sum  = calc_sum 7, 8    -- equivalent to:
sum2 = calc_sum(7, 8)   -- note, no space after function name.

many_args_func 5,4,3,   -- args on multiple lines
  8,9,
  10
  
my_func 5,6,7,              -- multi-line call
  6, another_func 6,7,8,    -- call function within args
    9,1,2,
  5,4
```

Can return multiple values:

```moon
mystery = (x, y) -> x + y, x - y
a,b = mystery 10, 20
```

Self idiom:

```moon
func = (num) => @value + num
```

Argument defaults:

```moon
my_function = (name="something", height=100) ->
  print "Hello I am", name
  print "My height is", height
  
-- Note, arguments are evaluated in order of declaration:
some_args = (x=100, y=x+1000) ->
  print x + y
```
 
 ### Comprehensions
 
 List comprehensions use `[]`. `items` for key,value. `*items` for value.
 
```moon
items = { 1, 2, 3, 4 }
doubled = [item * 2 for i, item in ipairs items]  -- new list, items doubled

doubled = [item * 2 for item in *items]           -- use value iterator
```

Items created conditionally:

```moon
slice = [item for i, item in ipairs items when i > 1 and i < 3]
```

Multiple, nested `for` loops:

```moon
x_coords = {4, 5, 6, 7}
y_coords = {9, 2, 3}

points = [{x,y} for x in *x_coords for y in *y_coords]
```

Numeric loop:

```moon
evens = [i for i=1,100 when i % 2 == 0]
```

### Table Comprehensions

Table comprehensions use `{}`.

```moon
thing = {
  color: "red"
  name: "fast"
  width: 123
}

thing_copy = {k,v for k,v in pairs thing}   -- copy the table

numbers = {1,2,3,4}
sqrts = {i, math.sqrt i for i in *numbers}  -- use value iterator

tuples = {{"hello", "world"}, {"foo", "bar"}}
tbl = {unpack tuple for tuple in *tuples}       -- key,value pairs
```

Conditionally:

```moon
no_color = {k,v for k,v in pairs thing when k != "color"}
```
