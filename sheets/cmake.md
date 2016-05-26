cmake
=====

Commands
--------

### message

`message([<mode>] "message to display" ...)`
  
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

`set(<variable> <value>... [PARENT_SCOPE])`

Set given `<variable>` in the current function or directory scope. If `PARENT_SCOPE` given variable
set in scope above. Each new directory or function creates a new scope.




Flags
-----

### C++11

Equivalent to `-std=c++11` but backward compatible for GCC 4.6 on Travic-CI.
```cmake
add_definitions(-std=c++0x) 
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

