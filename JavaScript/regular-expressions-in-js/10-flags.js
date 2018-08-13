/*

FLAGS

i	case-insensitive
g	global (tells parser to find ALL matches found in a string)
m   multiline 

Add to a regex like this: 
/regex/igm

*/

// In the console:

'LION'.replace(/lion/i, 'mouse'); // mouse
'LION'.replace(/[a-z]/i, 'mouse'); // mouse

"She ate watermelon at the waterpark.".replace(/water/, ''); // "She ate melon at the waterpark."
"She ate watermelon at the waterpark.".replace(/water/g, ''); // "She ate melon at the park."

const treat = `cheese
cheese
cheese`;

treat.replace(/^cheese$/, 'fruit');
/* cheese
cheese
cheese */

treat.replace(/^cheese$/m, 'fruit');
/* fruit
cheese
cheese */

treat.replace(/^cheese$/mg, 'fruit');
/* fruit
fruit
fruit */
