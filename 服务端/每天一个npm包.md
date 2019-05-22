# [每天一个npm包](https://github.com/parro-it/awesome-micro-npm-packages)

## Array
- [x] is-sorted - A small module to check if an Array is sorted.

array-first - Get the first element or first n elements of an array.

array-last - Return the last element in an array.

arr-flatten - Recursively flatten an array or arrays.

dedupe - Remove duplicates from an array.

array-range - Creates a new array with given range.

arr-diff - Returns an array with only the unique values from the first array, by excluding all values from additional arrays using strict equality for comparisons.

filled-array - Returns an array filled with the specified input
map-array - Map object keys and values into an array.

in-array - Return true if any of passed values exists in array - faster than using indexOf.

unordered-array-remove - Efficiently remove an element from an unordered array without doing a splice.

array-swap - Swap position of two items in an array.

mirrarray - Creates a keymirror object from an array of valid keys.

group-array - Group array of objects into lists.

array.chunk - Split array/TypedArray to chunks of given size.


## String
decamelize - Convert a camelized string into a lowercased one with a custom separator: unicornRainbow → unicorn_rainbow.

pad-left - Left pad a string with zeros or a specified string.

to-camel-case - Convert a string to a camel case.

to-capital-case - Convert a string to a capital case.

to-constant-case - Convert a string to a constant case.

to-dot-case - Convert a string to a dot case.

to-no-case - Remove an existing case from a string.

to-pascal-case - Convert a string to a pascal case.

to-sentence-case - Convert a string to a sentence case.

to-snake-case - Convert a string to a snake case.

to-space-case - Convert a string to a space case.

to-title-case - Convert a string to a title case.

node-slug - slugifies even utf-8 chars.

rtrim - Strip whitespace - or other characters - from the end of a string.

slice.js - Javascript library to engance String.substring / Array.slice with python slice style.

strip-ansi - Strip ANSI escape codes.

striptags - An implementation of PHP's strip_tags in Node.js.

parse-next-json-value - Parse next JSON value from string allowing extraneous characters after value.


## Date & Time
pretty-ms - Convert milliseconds to a human readable string: 1337000000 → 15d 11h 23m 20s.

hirestime - A wrapper around the built-in high resolution timer which simplifies the calculation of timestamps.

periods - Defined time-periods constants for Javascript, in milliseconds.

fecha - Javascript Date formatting and parsing.

akamai-time-reference - Get reference time using Akamai's time reference service.

timeago.js - A tiny(~1.7kb) library used to format date with *** time ago statement.

count-days-in-month - Get the number of days in a given month.

time-stamp - Get a formatted timestamp.

twas - Generate a relative time string (Example: "3 seconds ago")

## Object
map-obj - Map object keys and values into a new object.

filter-obj - Filter object keys and values into a new object.

object-values - Get the values of an object.

object-pairs - Turn an object into list of [key, value] pairs for mapping, iterating or other purposes.

zipmap - Returns a map with the keys mapped to the corresponding vals. zipmap also accepts a single value of objects or pairs.

just-pluck - Pluck without the madness.

deep-equal - Node's assert.deepEqual() algorithm as a standalone module.

deep-assign - Recursive Object.assign().

set-value - Create nested values and any intermediaries dot notation ('a.b.c') paths.

get-value - Use property paths (a.b.c) to get a nested value from an object.

has-value - Returns true if a value exists, false if empty. Works with deeply nested values using dot notation ('a.b.c') paths.

has-key-deep - Deep-search objects for keys. Keys can be searched by providing an array of keys, or using a dot-notiation.

flatkeys - Flatten object key hierarchies into a list of strings using a custom separator.

flatten-obj - Converts an object literal with deeply nested nodes to a simple key/value object.

is-empty-object - Check if an object is empty.

stringify-object - Stringify an object/array like JSON.stringify just without all the double-quotes.

sorted-object - Returns a copy of an object with its keys sorted.

static-props - Defines static object attributes using Object.defineProperties

missing-deep-keys - Returns an array of keys from first object that are missing in second.

has-own-property - Check if an object has a local property.

merge-objects - Deep-merge two objects. Arrays that are values of the same object key get concatenated.

deep-object-diff - Deep diff two JavaScript Objects while preserving the data structure. Including nested structures of Arrays and 
Objects.


## Function
compose-function - Compose a new function from smaller functions f(g(x)).

curry - A curry function without anything too clever.

once - Run a function exactly one time.

deep-bind - Bind a context to all functions in an object, including deeply nested functions.

identity-function - Always return the input argument.

mem - An optimization technique used to speed up consecutive function calls by caching the result of calls with identical input.

throttle-debounce - Throttle/debounce your functions.

compose-tiny - A very tiny and fast compose function.


## Math
is-number - Returns true if the value is a number.

Stream
through2 - Tiny wrapper around Node streams2 Transform to avoid explicit subclassing noise.

through2-filter - A through2 to create an Array.prototype.filter analog for streams.

through2-map - A through2 to create an Array.prototype.map analog for streams.

stream-spigot - A readable stream generator, useful for testing or converting simple functions into Readable streams.

concat-stream - writable stream that concatenates strings or data and calls a callback with the result.

JSONStream - streaming JSON.parse and stringify

through2-map-promise - A small promise-based wrapper for through2.

pump - pipe streams together and close all of them if one of them closes.

split - Break up a stream and reassemble it so that each line is a chunk.

is-stream - Check if something is a Node.js stream.

syncthrough - Transform your data as it pass by, synchronously.


## Promise
pify - Promisify a callback-style function.

promise-all-props - Like Promise.all but for object properties.

sleep-promise - Resolves a promise after a specified delay.

is-promise - Test whether an object looks like a promises-a+ promise.

File System
rimraf - A deep deletion module for node (like rm -rf).

mkdirp - Recursively mkdir, like mkdir -p.

du - A simple JavaScript implementation of du -sb.

file-size - Lightweight filesize to human-readable / proportions w/o dependencies.

tmp - Temporary file and directory creator for node.js.

fs-promise - Node fs methods as Promise/A+ (optional fs-extra, graceful-fs).


## Browser
delegate - Lightweight event delegation.

insert-css - Insert a string of css into the head
dom-element-value - DOM element value getter/setter.

image-promise - Load one or more <img>s in a Promise.

get-media-size - Get the original size of any img/video/svg/canvas tags or canvas context.

document-ready - Document ready listener for modern browsers.

copee - Copy text from browser to clipboard...natively!


## Semver
semver - The semantic version parser used by npm.

semver-max - Find maximum (or minimum) version according to semver.

semver-first-satisfied - Find minimum in an array of version that satisfies a semver range.


## CLI
abbrev - Calculate the set of unique abbreviations for a given set of strings.

glob - Glob functionality for node.js.

username - Get the username of the current user.

minimist - Parse argument options.

png-to-ico - Convert png to windows ico format.

help-version - Easily handle --help and --version arguments in your CLI application
Module management
pkg-conf - Get namespaced config from the closest package.json.

normalize-pkg - Normalize values in package.json to improve compatibility, programmatic readability and usefulness with third 
party libs.

Generators
is-generator - Check whether a given value is a generator function.


## Other
uuid - Generate RFC-compliant UUIDs in JavaScript.

node-mime - Comprehensive MIME type mapping API based on mime-db module.

not-defined - Checks if foo is not defined, i.e. undefined, null, an empty string, array or object.

is-fqdn - Check if a string represent a fully qualified domain name.


## Related lists
This section contains awesome lists that you may find useful if you use or write small NPM modules.


awesome-nodejs - A curated list of delightful Node.js packages and resources.

awesome-npm - Awesome npm resources and tips.

