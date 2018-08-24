// Regular Expression Fundamentals

// https://app.pluralsight.com/library/courses/regular-expressions-fundamentals/table-of-contents

 

// Wednesday, August 22, 2018

 

// Matching a hex code

/^\s*#?([A-F0-9]{6}|[A-F0-9]{3})\s*$/i

// ^ - that's the beginning

// $ - that's the end

// \s - whitespace

// * - 0 or more

// ? - the preceding char is optional

// [] - any of the chars inside

// {} - the preceding char is repeated the # of times indicated

// | - or (note that it's just one pipe, NOT 2 as in JS)

// i - case insensitive

 

/*

 

Meta Characters

              Character Classes (Bracket Expressions)

                             Positive:

                             [abcdef]

                             [a-f]

                             [a-f_%0-9]

 

                             Negative:

                             [^abcdef]

                             [^a-f]

                             [^a-f_%0-9]

 

              Matching Special Characters

                             Match a literal dash by putting it at the very beg or end: [A-Za-z_-]

                             To start a range w/a dash, it has to be first: [--/A-Z]

                             [A-Z+--]

                             To match a caret, put it anywhere but the beginning: [A-Za-z^]

                             To match a bracket character: [[], or escape it as follows -

                             [A-Z\[]

                             [A-Z\]]

 

Wildcard: the dot .

              -matches any char except new line

              -not special in a char class

              -using a dot and a quantifier makes it slow

 

Repetition Quantifiers:

              ? 0 or 1 times

              * 0 or more times

              + 1 or more times

              {n} exactly n times

              {n,} n or more times

              {n,m} between n and m times

 

To speed up your regex:

              Be precise

              Use negated char classes

 

Alternation |

              Separates branches

              Not special in a char class

              Mind branch order

 

Sub-patterns and Grouping - ()

              Create a sub-expression

                             Delimit alternations

                             Repetition

 

Matching an IP Address (4 groups of numbers, ea btwn 0 and 255): */

/^((25[0-5]|2[0-4][0-9]|[01]?[0-9]{1,2})\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9]{1,2})/

 

/*

 

Boundaries

              Can be the beginning of a string or line, a word boundary, the end of a string or line

              Zero-width

              Capturing a boundary is useless

 

Anchors

              /n - multi-line modifier

              Can cause the ^ to match the beg of EACH LINE, and the $ to match the end of EACH LINE

 

Word Boundaries (locale dependent) - \b

              Between a word char and a non-word char (semicolon, exclamation point, space, etc.)

              To match the word "be" - /\bbe\b/

*/

 

// Friday, August 24, 2018

 

/* Backslash Escaping

              -Remove special meaning from meta-chars

              -Give special meaning to ordinary chars

 

              Escaping Meta Characters

                             Special Meaning: [ ] ( ) | . ? * + { } ^ $ \    / (delimiter)

                             Literals: \[ \] \( \) \| \. \? \* \+ \{ \} \^ \$ \\          \/

                             It's especially important to escape the dot because you won't receive an error if you forget to!

 

              Trick to avoid escaping: Put them in a character class

                             Ex: [)]

 

              Giving Special Meaning to Ordinary Chars

                             Ex: /s - white space

 

Matching Rules

              Left to right, char to char

              A match is always favored over a non-match

              A RegEx will try everything possible before giving up

              PCRE: first match; POSIX: left-most longest match

              Mind precedence: () > ?*+{} > ab > |

              Avoid backtracing by avoiding using the dot wildcard; be specific;

                             use negated char classes where possible; apply non-greedy quantifiers where applicable */

 

/* Shortcodes, Modifiers, and Delimiters

 

Common Shortcodes

              [0-9] ->                \d

              [A-Za-z0-9_] -> \w

              [\t\f\r\n] ->        \s

 

Negated Shortcodes

              [^0-9] ->                             \D

              [^A-Za-z0-9_] -> \W

              [^\t\f\r\n] ->       \S

 

PCRE 7.2+ Shortcodes

              [\t\f]  -> \h

              [\r\n]  -> \v

              [^\t\f] -> \H

              [^\r\n] -> \V

 

Unicode Shortcode Syntax

              Positive: \p{Identifier}

              Negative: \P{Identifier}

              Capitalization matters.

 

Modifiers - a way to change the standard behavior of the Regex enginer for one particular expression, or part of one

              Implemented inconsistently

              g - global - returns all possible matches (non-overlapping)

              i - case-insensitive

              m - multi-line - affects ^ and $ behavior for each new line

              s - dotall or single line - affects the dot to match \n

              x - extended - ignore whitespace & # to end of line

 

*/

