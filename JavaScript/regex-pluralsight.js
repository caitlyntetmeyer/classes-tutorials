// Matching a hex code

/^\s*#?([A-F0-9]{6}|[A-F0-9]{3})\s*$/i

// ^ - that's the beginning

// $ - that's the end

// \s - whitespace

// * - 0 or more

// ? - the preceding char is optional

// [] - any of the chars inside

// {} - the preceding char is repeated the # of times indicated

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

                             [A-Z\[]]

                             [A-Z\]]

 

Wildcard: the dot .

              -matches any char except new line

              -not special in a char class

              -using a dot and a quantifier makes it slow

 

Repetition Quantifiers:

              ? zero or one times

              * zero or more times

              + one or more times

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

 

Word Boundaries - \b

              Between a word char and a non-word char (semicolon, exclamation point, space, etc.)

              To match the word "be" - /\bbe\b/

             

*/