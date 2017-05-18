
Love2d
======

Start Up
--------

**These notes are for Love2d 0.9.** 

Love provides default callback placeholders:

```lua
debug = true                -- turn on debug info

function love.load()        -- called before first update
end
 
function love.update(dt)    -- frame update, with time delta, before draw
end
 
function love.draw()        -- frame draw
end
```

Graphics
--------

`VERTS` is:
- a list of vertex pairs, `x1, y1, x2, y2, ...`, e.g. `100, 100, 200, 100, 150, 200`
- a table reference, where table is a list of vertex pairs, eg. `{100, 100, 200, 100, 150, 200}`

#### Polygon

```lua
love.graphics.polygon( "line", VERTS )  -- outlined polygon
love.graphics.polygon( "fill", VERTS )  -- filled convex polygon
```

#### Polyline

```lua
love.graphics.line( VERTS )

love.graphics.setLineWidth( WIDTH )
love.graphics.setLineStyle( STYLE )  -- [ "rough" | "smooth" ]
```


