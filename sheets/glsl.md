
GLSL
====

Vertex Shader
-------------

- [OpenGL wiki](https://www.opengl.org/wiki/Vertex_Shader)


Fragment Shader
---------------

- By default, `gl_FragCoord` assumes a *lower-left origin* for window coordinates and assumes pixel centers are located at half-pixel coordinates.
  - Origin can be changed by redeclaring `gl_FragCoord` with `origin_upper_left`, moving the origin of gl_FragCoord to the upper left of the window, with y increasing in value toward the bottom of the window.
  - Values returned can also be shifted by half a pixel in both x and y by `pixel_center_integer` so it appears the pixels are centered at whole number pixel offsets.
  
```glsl
// All the following are allowed redeclaration that change behavior
layout(origin_upper_left) in vec4 gl_FragCoord;
layout(pixel_center_integer) in vec4 gl_FragCoord;
layout(origin_upper_left, pixel_center_integer) in vec4 gl_FragCoord;
```

Functions
---------

Types
-----

The OpenGL Shading Language supports the following basic data types, grouped as follows.

### Transparent types

Type | Meaning
---- | -------
`void` | for functions that do not return a value
`bool` | a conditional type, taking on values of true or false
`int` | a signed integer
`uint` | an unsigned integer
`float` | a single-precision floating-point scalar
`double` | a double-precision floating-point scalar
`vec2` | a two-component single-precision floating-point vector
`vec3` | a three-component single-precision floating-point vector
`vec4` | a four-component single-precision floating-point vector
`dvec2` | a two-component double-precision floating-point vector
`dvec3` | a three-component double-precision floating-point vector
`dvec4` | a four-component double-precision floating-point vector
`bvec2` | a two-component Boolean vector
`bvec3` | a three-component Boolean vector
`bvec4` | a four-component Boolean vector
`ivec2` | a two-component signed integer vector
`ivec3` | a three-component signed integer vector
`ivec4` | a four-component signed integer vector
`uvec2` | a two-component unsigned integer vector
`uvec3` | a three-component unsigned integer vector
`uvec4` | a four-component unsigned integer vector
`mat2` | a 2×2 single-precision floating-point matrix
`mat3` | a 3×3 single-precision floating-point matrix
`mat4` | a 4×4 single-precision floating-point matrix
`mat2x2` | same as a `mat2`
`mat2x3` | a single-precision floating-point matrix with 2 columns and 3 rows
`mat2x4` | a single-precision floating-point matrix with 2 columns and 4 rows
`mat3x2` | a single-precision floating-point matrix with 3 columns and 2 rows
`mat3x3` | same as a `mat3`
`mat3x4` | a single-precision floating-point matrix with 3 columns and 4 rows
`mat4x2` | a single-precision floating-point matrix with 4 columns and 2 rows
`mat4x3` | a single-precision floating-point matrix with 4 columns and 3 rows
`mat4x4` | same as a `mat4`
`dmat2` | a 2×2 double-precision floating-point matrix
`dmat3` | a 3×3 double-precision floating-point matrix
`dmat4` | a 4×4 double-precision floating-point matrix
`dmat2x2` | same as a `dmat2`
`dmat2x3` | a double-precision floating-point matrix with 2 columns and 3 rows
`dmat2x4` | a double-precision floating-point matrix with 2 columns and 4 rows
`dmat3x2` | a double-precision floating-point matrix with 3 columns and 2 rows
`dmat3x3` | same as a `dmat3`
`dmat3x4` | a double-precision floating-point matrix with 3 columns and 4 rows
`dmat4x2` | a double-precision floating-point matrix with 4 columns and 2 rows
`dmat4x3` | a double-precision floating-point matrix with 4 columns and 3 rows
`dmat4x4` | same as a `dmat4`

### Floating-Point Opaque Types

Type | Meaning
---- | -------
`sampler1D`, `image1D` | a handle for accessing a 1D texture
`sampler2D`, `image2D` | a handle for accessing a 2D texture
`sampler3D`, `image3D` | a handle for accessing a 3D texture
`samplerCube`, `imageCube` | a handle for accessing a cube mapped texture
`sampler2DRect`, `image2DRect` | a handle for accessing a rectangle texture
`sampler1DArray`, `image1DArray` | a handle for accessing a 1D array texture
`sampler2DArray`, `image2DArray` | a handle for accessing a 2D array texture
`samplerBuffer`, `imageBuffer` | a handle for accessing a buffer texture
`sampler2DMS`, `image2DMS` | a handle for accessing a 2D multi-sample texture
`sampler2DMSArray`, `image2DMSArray` | a handle for accessing a 2D multi-sample array texture
`samplerCubeArray`, `imageCubeArray` | a handle for accessing a cube map array texture
`sampler1DShadow` |` `a handle for accessing a 1D depth texture with comparison
`sampler2DShadow` | a handle for accessing a 2D depth texture with comparison
`sampler2DRectShadow` | a handle for accessing a rectangle texture with comparison
`sampler1DArrayShadow` | a handle for accessing a 1D array depth texture with comparison
`sampler2DArrayShadow` | a handle for accessing a 2D array depth texture with comparison
`samplerCubeShadow` | a handle for accessing a cube map depth texture with comparison
`samplerCubeArrayShadow` | a handle for accessing a cube map array depth texture with comparison

TODO - add other opaque types

### Storage Qualifiers

Variable declarations may have at most one storage qualifier specified in front of the type. These are summarized as

Storage Qualifier | Meaning
----------------- | -------
none: default | local read/write memory, or an input parameter to a function
`const` | a variable whose value cannot be changed
`in` | linkage into a shader from a previous stage, variable is copied in
`out` | linkage out of a shader to a subsequent stage, variable is copied out
`attribute` | compatibility profile only and vertex language only; same as in when in a vertex shader
`uniform` | value does not change across the primitive being processed, uniforms form the linkage between a shader, OpenGL, and the application
`varying` | compatibility profile only and vertex and fragment languages only; same as out when in a vertex shader and same as in when in a fragment shader
`buffer` | value is stored in a buffer object, and can be read or written both by shader invocations and the OpenGL API
`shared` | compute shader only; variable storage is shared across all work items in a local work group


Glossary
--------

- **Compute Processor**: programmable unit that operates independently from the other shader
  processors. Compilation units written in the OpenGL Shading Language to run on this processor are
  called *compute shaders*. It does not have any predefined inputs nor any fixed-function outputs.
  It is not part of the graphics pipeline and its visible side effects are through changes to
  images, storage buffers, and atomic counters. A compute shader operates on a group of work items
  called a *work group*.
- **Fragment Processor**: programmable unit that operates on fragment values and their associated
  data. Compilation units written in the OpenGL Shading Language to run on this processor are
  called *fragment shaders*. A fragment shader cannot change a fragment's (x, y) position. Access
  to neighboring fragments is not allowed. The values computed by the fragment shader are
  ultimately used to update framebuffer memory or texture memory, depending on the current OpenGL
  state and the OpenGL command that caused the fragments to be generated.  
- **Geometry Processor**: programmable unit that operates on data for incoming vertices for a
  primitive assembled after vertex processing and outputs a sequence of vertices forming output
  primitives. Compilation units written in the OpenGL Shading Language to run on this processor are
  called *geometry shaders*. This single invocation can emit a variable number of vertices that are
  assembled into primitives of a declared output primitive type and passed to subsequent pipeline
  stages.
- **Opaque Types**: opaque handles to other objects. These objects are accessed through built-in
  functions, not through direct reading or writing of the declared variable. They can only be
  declared as function parameters or in uniform-qualified variables.  
- **Output Variables**: Declared using the storage qualifier `out`. They form the output interface
  between the declaring shader and the subsequent stages of the OpenGL pipeline. Output variables
  must be declared at global scope. During shader execution they will behave as normal unqualified
  global variables. Their values are copied out to the subsequent pipeline stage on shader exit.
  Only output variables that are read by the subsequent pipeline stage need to be written; it is
  allowed to have superfluous declarations of output variables.  
- **Uniform Variables**: The `uniform` qualifier is used to declare global variables whose values
  are the same across the entire primitive being processed. All uniform variables are *read-only*
  and are initialized externally either at link time or through the API. The link-time initial
  value is either the value of the variable's initializer, if present, or 0 if no initializer is
  present. Opaque types cannot have initializers, or a compile-time error results.  
- **Vertex Processor**: programmable unit that operates on incoming vertices and their
  associated data. Compilation units written in the OpenGL Shading Language to run on this
  processor are called *vertex shaders*.  
- **Work group**: a collection of shader invocations that execute the same code, potentially in
  parallel. An invocation within a work group may share data with other members of the same work
  group through shared variables and issue memory and control barriers to synchronize with other
  members of the same work group.

### Links
  
- Source for this doc: https://www.opengl.org/registry/doc/GLSLangSpec.4.40.pdf
- [OpenGL wiki GLSL](https://www.opengl.org/wiki/OpenGL_Shading_Language)
