Moonscript
==========  

Syntax/Types
------------

* Moonscript 4.0
  * [Website](http://moonscript.org).
  * [Reference](http://moonscript.org/reference/).

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


Literals
--------

New, unassigned names are *local* by default:

```moon
hello = "world"
a,b,c = 1, 2, 3
hello = 123 -- uses the existing variable

some_string = "Here is a string
  that has a line break in it."
```

### Update

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
 
Comprehensions
--------------

 ### List Comprehensions
 
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

Note, `for` loops can also create arrays:

```moon
doubled_evens = for i=1,10 do if i%2 == 0 then i*2 else i
```

### Table Comprehensions

Table comprehensions use `{}`.

```moon
thing = {
  color: "red"
  name: "fast"
  width: 123
}

thing_copy = {k,v for k,v in pairs thing}       -- copy the table

numbers = {1,2,3,4}
sqrts = {i, math.sqrt i for i in *numbers}      -- use value iterator

tuples = {{"hello", "world"}, {"foo", "bar"}}
tbl = {unpack tuple for tuple in *tuples}       -- key,value pairs
```

Conditionally:

```moon
no_color = {k,v for k,v in pairs thing when k != "color"}
```


Iteration
---------

### For loop

Numeric and generic `for` loops:

```moon
for i = 10, 20                      -- print 10 to 20
  print i

for k = 1,15,2                      -- odd numbers using step
  print k

for key, value in pairs object      -- iterate object
  print key, value
```

Can occupy single line:

```moon
for item in *items do print item

for j = 1,10,3 do print j
```

Can be used as expression to create array. Note, to return from a function, must use `return`.

```moon
fizz_buzz = for i=1,100     -- make array
  if i % 3 == 0
    i * 3
  elseif i % 5 == 0
    i * 5
  else
    continue                -- skip value
        
func_a = -> for i=1,10 do i             -- return nil
func_b = -> return for i=1,10 do i      -- return array
```

### While loop

`while` loops can be single or multiple lines.

```moon
i = 10
while i > 0                     -- print 1 to 10
  print i
  i -= 1

while running == true do my_function!
```

Can incorporate `break` and `continue`, with conditionals:

```moon
i = 0
while i < 10
  continue if i % 2 == 0
  print i
  break if i > 6
```

Can be used as an expression:

```moon
i = 0
array = while true do if i % 3 == 0 continue else if i > 100 break else i
```


Conditionals
------------

### if

`if` can be single or multi-line:

```moon
have_coins = false

if have_coins
  print "Got coins"
else
  print "No coins"
  
if have_coins then print "Got coins" else print "No coins"      -- single line
```

Expression:

```moon
have_coins = false
print if have_coins then "Got coins" else "No coins"

is_tall = (name) ->             -- function
  if name == "Rob"
    true
  else
    false

message = if is_tall "Rob"      -- value assigned
  "I am very tall"
else
  "I am not so tall"

print message -- prints: I am very tall
```

With assignment:

```moon
if user = database.find_user "moon"     -- 'user' assigned and then tested
  print user.name

if hello = os.getenv "hello"
  print "You have hello", hello
elseif world = os.getenv "world"
  print "you have world", world
else
  print "nothing :("
```    

### unless

`unless` is the opposite of `if`.

```moon
unless os.date("%A") == "Monday"
  print "it is not Monday!"
  
print "You're lucky!" unless math.random! > 0.1
```

### Line decorators

Conditionals can be postfixed on a line.

```moon
print "hello world" if name == "Rob"
    
print "hello world" unless name == "John"
```
    
Loops may also be postfixed:

```moon
print "item: ", item for item in *items        
```

### Switch

`switch` is shorthand for a series of `if` statements. Use `then` to write a block on a single line.

```moon
name = "Dan"
switch name
  when "Robert"
    print "You are Robert"
  when "Dan", "Daniel"
    print "Your name, it's Dan"
  else
    print "I don't know about your name"
    
msg = switch math.random(1, 5)
  when 1 then "you are lucky"                   -- single line
  when 2 then "you are almost lucky"
  else "not so lucky"
```


Manipulation
------------

### Slicing

A slice is a subset of an index: `items[MIN,MAX]`, i.e. from MIN to MAX, inclusive. Or `items[MIN,MAX,STEP]` using step size.

```moon
slice = [item for item in *items[1,5]]      -- 1st to 5th items of array

slice = [item for item in *items[,3]]       -- the first 3

for item in *items[2,]]                     -- 2nd until last
    print item

for item in *items[,,2] do print item       -- all odd items, 1,3,5, ...
```

### String interpolation

Evaluate and substitute contents of `#{}`.

```moon
print "I am #{math.random! * 100}% sure."
```


Objects
-------

A `class` can be declared and called:
  
```moon
class Inventory
  new: =>
    @items = {}

  add_item: (name) =>
    if @items[name]
      @items[name] += 1
    else
      @items[name] = 1
      
inv = Inventory!
inv\add_item "t-shirt"
inv\add_item "pants"

assert b.__class == BackPack    -- check class type
```

Where:

* `new` is the constructor.
* Use *fat arrow* when calling instance methods to handle the creation of a `self` argument, like `:` in Lua.
* `@` prefix on variable is shorthand for `self.. @items` becomes `self.items`.
* `\` operator is used to pass `self` to instance method.
* Each class instance carries its type using `__class`.
* [Reference](http://moonscript.org/reference/#the-language/object-oriented-programming).

### Inheritance

`extends` is used to extend a class further. If we don’t define a constructor on the subclass, the parent class' constructor is called when we make a new instance. If we do then we use the `super` method to call the parent constructor.
  
```moon
class BackPack extends Inventory
  size: 10
  add_item: (name) =>
    if #@items > size then error "backpack is full"
    super name
```
 
When a subclass is instanced, it sends a message to the parent by calling `__inherited`. The function receives two arguments:

- the class that is being inherited
- the child class.
 
```moon
class Shelf
  @__inherited: (child) =>
    print @__name, "was inherited by", child.__name

class Cupboard extends Shelf        -- will print: Shelf was inherited by Cupboard
```

### Super

`super` can be used in two different ways:

- As an object, i.e. a reference to the parent class object.
- Called like a function. I.e. It will call the function of the same name in the parent class. Current `self` will automatically be passed as the first argument.

```moon
class MyClass extends ParentClass
  a_method: =>
    -- the following have the same effect:
    super "hello", "world"
    super\a_method "hello", "world"
    super.a_method self, "hello", "world"
    
    assert super == ParentClass         -- super as a value is equal to the parent class:
```


Class details
-------------

### Class objects

Class properties are shared between all instances of the class, stored in the *base* table.
The base table also holds the class metamethods.

```moon
class Person
  clothes: {}                       -- shared, class property (base)
  give_item: (name) =>              -- method also shared (base)
    table.insert @clothes, name

a = Person!
b = Person!

a\give_item "pants"
b\give_item "shirt"

print item for item in *a.clothes   -- will print both pants and shirt
```

The class instance specific properties are stored in the *class* table.

```moon
class Person
  @clothes: {}                      -- per-instance property (class)
  give_item: (name) =>
    table.insert @clothes, name

a = Person!
b = Person!

a\give_item "pants"
b\give_item "shirt"

print item for item in *a.clothes   -- will print "pants"
print item for item in *b.clothes   -- will print "shirt"
```

Note, class properties may also be declared using `=` assignment.

```moon
class Things
  @class_var = "hello world"
  @another: "hello also!"       -- similar
```

### Class variables

* To get class name use `__name`.
* To get class instance type use `__class`.
* To get parent class, use `__parent`. This is what subclass extends.
* To get base class, use `__base`. This contains shared properties and metamethods.

```moon
instance = Backpack!        -- create instance
cls = instance.__class      -- get class type of instance
print cls.__name            -- name of class type
print cls.__base            -- base class type
```

### @ & @@

Use `@property` to access class instance property, short for `self.property`. 

```moon
class Things
  @some_func: => print "Hello from", @__name

Things\some_func!

-- class variables not visible in instances
assert Things().some_func == nil
```

Use `@@property` to access class property, short for `self.__class.property`.

```moon
class Counter
  @count: 0

  new: =>
    @@count += 1

Counter!
Counter!

print Counter.count -- prints 2
```

### Expressions

A class maybe be used as an expression and assigned:

```moon
x = class Bucket
  drops: 0
  add_drop: => @drops += 1
```

It may also be assigned *anonymously*. If assigned, the variable name is taken instead.

```moon
BigBucket = class extends Bucket
  add_drop: => @drops += 10

assert Bucket.__name == "BigBucket"
```


Scope
-----

### Global/Export

All assignment is *local* by default. Use `export` to declare *global variables*.

```moon
export some_number, message_str = 100, "hello world"
```

`export` is necessary to declare what is *visible* outside a module.

```moon
module "my_module", package.seeall          -- module
export print_result

length = (x, y) -> math.sqrt x*x + y*y

print_result = (x, y) ->
  print "Length is ", length x, y
```

```moon
require "my_module"                         -- module user

my_module.print_result 4, 5 -- prints the result

print my_module.length 6, 7 -- errors, `length` not visible
```

* `export *` will export all in current scope.
* `export ^` will export all proper names (that begin with a capital letter).

### Local

Use `local` to pre-declare locals:

```moon
local a
if something
  a = 1
print a         -- nil or 1
```

```moon
local a = 1
if something
  local a       -- a shadowed
  a = 3
print a         -- always 1
```

```moon
local first, second     -- allow mutual references

first = -> second!

second = -> first!
```

* `local *` will *forward declare* all variables in current scope.
* `local ^` will *forward declare* all proper names (that begin with a capital letter).


```moon
local *         -- local first, second, data

first = ->
  print data    -- without forward declaration, this would fail
  second!       -- as would this

second = ->
  first!

data = {}
```

### Import

Use `import` to bring values from a table.

```moon
import C, Ct, Cmt from lpeg

import                          -- multi-line
  assert_csrf
  assert_timezone
  not_found
  require_login
  from require "helpers"
```

To import module contents that requires context:

```moon
my_module =
  state: 100
  add: (value) =>
    self.state + value

import \add from my_module      

print add 22 -- equivalent to calling my_module\add 22
```


Blocks
------

### With

`with` can be used to avoid repetition of instance names:

```moon
with Person!
  .name = "Oswald"
  \add_relative my_dad
  \save!
  print .name
  
file = with File "favorite_foods.txt"   -- return created object
  \set_encoding "utf8"
  
create_person = (name,  relatives) ->
  with Person!
    .name = name
    \add_relative relative for relative in *relatives

me = create_person "Leaf", {dad, mother, sister}

with str = "Hello"
  print "original:", str
  print "upper:", \upper!
```

### Do

Do can be used to limit scope:

```moon
do
  var = "hello"
  print var
print var -- nil here
```

It can also be used as an expression:

```moon
counter = do
  i = 0
  ->
    i += 1
    i

print counter!      -- 1
print counter!      -- 2

tbl = {
  key: do
    print "assigning key!"
    1234
}
```


Destructuring
-------------

Destructuring allows concise *extraction of values* from arrays and tables.

```moon
thing = {1,2}   -- array
{a,b} = thing   -- unpack
print a,b       -- 1, 2
```

From tables:

```moon
obj = {
  hello: "world"
  day: "tuesday"
  length: 20
}

{hello: hello, day: the_day} = obj
print hello, the_day
```

```moon
obj2 = {
  numbers: {1,2,3,4}
  properties: {                 -- nested
    color: "green"
    height: 13.5
  }
}

{
  numbers: { first, second }    -- 1,2
  properties: {
    color: color
  }
} = obj2

print first, second, color

{ properties: { :height } } = obj2      -- avoid duplication

print height
```

Useful to import from standard libraries:

```moon
{:concat, :insert} = table

{:mix, :max, random: rand } = math
```

In `for` loop:

```moon
tuples = {
  {"hello", "world"}
  {"egg", "head"}
}

for {left, right} in *tuples
  print left, right
```

```moon
```

```moon
```

```moon
```

```moon
```

Last
----

```moon
```

