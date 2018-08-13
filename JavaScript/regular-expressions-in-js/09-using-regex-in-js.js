// Two JS Methods We'll Use: test() and replace()

test() // see if the string you've defined matches the pattern in the reg exp
// Ex:
regex.test(testString) // => true if matches/false if not

replace()
string.replace(regexToMatch, replacementString) // => new string modified to your specs

// Example in the console:

const regex = /^corn/ // corn must be at the beginning of the string
regex.test('corncob') // true
regex.test('popcorn') // false

const string1 = 'corndog'
string1.replace(regex, 'hot') // hotdog, because we replaced corn with hot

const string2 = 'popcorn'
string2.replace(regex, 'tart') // popcorn, because corn wasn't at the beginning of the test string
