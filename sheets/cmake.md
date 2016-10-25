cmake
=====

Commands
--------


### add_definitions

```
add_definitions(-DFOO -DBAR ...)
```

Adds definitions to the compiler command line for targets in the current directory and below.

### find_package

```raw
find_package(<package> [version] [EXACT] [QUIET] [MODULE]
             [REQUIRED] [[COMPONENTS] [components...]]
             [OPTIONAL_COMPONENTS components...]
             [NO_POLICY_SCOPE])`
```
[docs](https://cmake.org/cmake/help/latest/command/find_package.html)

Finds and loads settings from an external project (in "module mode"). `<package>_FOUND` set indicates found. `QUIET`
disables messages if package not found. `MODULE` option disables the second signature. `REQUIRED`
option stops processing with an error message if package not be found.

A package-specific list of required components may be listed after the `COMPONENTS` option.
Additional optional components may be listed after `OPTIONAL_COMPONENTS`.

`[version]` argument requests a version with which the package found should be compatible (format
is `major[.minor[.patch[.tweak]]]`). The `EXACT` option requests that the version be matched exactly.
If no `[version]` and/or component list is given to a recursive invocation inside a find-module, the
corresponding arguments are forwarded automatically from the outer call (including the `EXACT` flag
for `[version]`). Version support is currently provided only on a package-by-package basis (details
below).

User code should generally look for packages using the above simple signature. See doc link for
more complicated version. 

The command has two modes by which it searches for packages: “Module” mode and “Config” mode.
*Module mode* is available when the command is invoked with the above reduced signature. CMake
searches for a file called `Find<package>.cmake` in the `CMAKE_MODULE_PATH` followed by the CMake
installation. If the file is found, it is read and processed by CMake. It is responsible for
finding the package, checking the version, and producing any needed messages. Many find-modules
provide limited or no support for versioning; check the module documentation. If no module is found
and the MODULE option is not given the command proceeds to Config mode.

e.g.
```cmake
find_package(SDL 2.0 REQUIRED)
if(SDL_FOUND)
  include_directories(${SDL_INCLUDE_DIRS})
  link_libraries(${SDL_LIBRARIES})
endif()
```

### message

```
message([<mode>] "message to display" ...)
```
  
`<mode>`:

- (none)         :: Important information
- STATUS         :: Incidental information
- WARNING        :: CMake Warning, continue processing
- AUTHOR_WARNING :: CMake Warning (dev), continue processing
- SEND_ERROR     :: CMake Error, continue processing, but skip generation
- FATAL_ERROR    :: CMake Error, stop processing and generation
- DEPRECATION    :: CMake Deprecation Error or Warning if variable `CMAKE_ERROR_DEPRECATED` 
  or `CMAKE_WARN_DEPRECATED` is enabled, respectively, else no message.

### set

```
set(<variable> <value>... [PARENT_SCOPE])
```
  

Set given `<variable>` in the current function or directory scope. If `PARENT_SCOPE` given variable
set in scope above. Each new directory or function creates a new scope. 

### source_group

```
source_group(<name> [FILES <src>...] [REGULAR_EXPRESSION <regex>])
```

Group files in IDE folders. `<name>` may contain backslashes to specify subgroups:
`source_group(outer\\inner ...)`

- `FILES` :: Source files specified placed group `<name>`. Relative paths are interpreted with
  respect to the current source directory.  
- `REGULAR_EXPRESSION` :: File names matching the regex placed in group `<name>`. If matches
  multiple groups, last group matching favored, if any.

To set folder for project once added:
  
```
set_property(TARGET ${PROJ} PROPERTY FOLDER ${folder})
```
             
             
Targets
-------

### Library

```cmake
add_library(<name> [STATIC | SHARED | MODULE]
            [EXCLUDE_FROM_ALL]
            source1 [source2 ...])
```
[docs](https://cmake.org/cmake/help/latest/command/add_library.html)

Adds library called `<name>` built from source files listed. `<name>` corresponds to the logical
target name and must be globally unique within a project. `STATIC`, `SHARED`, or `MODULE` may be
given to specify the type of library to be created.

- STATIC `.a`, object archive.
- SHARED `.dylib`, dynamically loadable library.
- MODULE `.so`, shared library module. OSX: `.bundle` plug-in.

### Executable

```cmake
add_executable(<name> [WIN32] [MACOSX_BUNDLE]
               [EXCLUDE_FROM_ALL]
               source1 [source2 ...])```
[docs](https://cmake.org/cmake/help/latest/command/add_executable.html)

Adds executable called `<name>` to be built from the source files listed. `<name>` corresponds to
the logical target name and must be globally unique within a project. The actual file name of the
executable built is constructed based on conventions of the native platform (such as `<name>.exe`
or just `<name>` ).

By default the executable file will be created in the build tree directory corresponding to the
source tree directory in which the command was invoked. See `RUNTIME_OUTPUT_DIRECTORY` target
property to change this location. See `OUTPUT_NAME` target property to change the `<name>` part of
the final file name.

- If `WIN32` is given the property `WIN32_EXECUTABLE` will be set on the target created.
- If `MACOSX_BUNDLE` is given the corresponding property will be set on the created target.
- If `EXCLUDE_FROM_ALL` is given the corresponding property will be set on the created target.

### Flags

#### C++11

Equivalent to `-std=c++11` but backward compatible for GCC 4.6 on Travic-CI.
```cmake
add_definitions(-std=c++0x) 
```

### Output

- `CMAKE_<TARGET>_OUTPUT_DIRECTORY`.
- `ARCHIVE` is static library, `LIBRARY` is shared library, `RUNTIME` is executable.
- *Note*, config is appended to this path, e.g. `Debug` (see below)

```cmake
set(CMAKE_ARCHIVE_OUTPUT_DIRECTORY ${OUTDIR}/lib)
set(CMAKE_LIBRARY_OUTPUT_DIRECTORY ${OUTDIR}/lib)   # or `bin` so DLLs in executable dir 
set(CMAKE_RUNTIME_OUTPUT_DIRECTORY ${OUTDIR}/bin)
```

- `<TARGET>_OUTPUT_DIRECTORY_<CONFIG>` : set full path for specific target configuration.
  
```cmake
set_target_properties(myapp PROPERTIES RUNTIME_OUTPUT_DIRECTORY_DEBUG ${OUTDIR}/bin)
```


Skeleton
--------

### Skeleton project

Root `CMakeLists.txt`;

```cmake
cmake_minimum_required(VERSION 2.8.3)
project(PROJECT_NAME)

option(WANT_DOCS "Want project documentation" ON)

if(WANT_DOCS)
  find_package(Doxygen)
  if(DOXYGEN_FOUND)
          # add a Doxygen target to the "all" target
          add_custom_target(doxygen
           ALL
           COMMAND doxygen Doxyfile > ${DEV_NULL}
           WORKING_DIRECTORY ${PROJECT_SOURCE_DIR}
          )
  else()
    message(WARNING "Doxygen not found")
  endif(DOXYGEN_FOUND)
endif(WANT_DOCS)

add_subdirectory(src/lib)
add_subdirectory(src/app)
```

#### src/lib/CMakeLists.txt

```cmake
include_directories("${PROJECT_SOURCE_DIR}/src")
```

#### src/app/CMakeLists.txt

```cmake
include_directories("${PROJECT_SOURCE_DIR}/src")
```


Links
-----

- [Current docs](https://cmake.org/cmake/help/latest/):
    - [Commands](https://cmake.org/cmake/help/latest/manual/cmake-commands.7.html).

