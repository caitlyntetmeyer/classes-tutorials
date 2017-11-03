/*

React 16+ on Udemy

https://www.udemy.com/react-the-complete-guide-incl-redux 

---

Understanding "let" and "const":

https://www.udemy.com/react-the-complete-guide-incl-redux/learn/v4/t/lecture/8211784?start=0

"let" is the new "var". It's for variable values. 
Use "const" if you plan on creating a _constant_ value.

---

Arrow Functions:

https://www.udemy.com/react-the-complete-guide-incl-redux/learn/v4/t/lecture/8211786?start=0

Regular Syntax:

const myFnc = () => {
    ...
}

^^No more issues with the "this" keyword!

Ex:
*/
const printMyName = (name) => {
    console.log(name);
}
printMyName('Max');     // "Max" 

// If exactly 1 argument, can omit () around "name" argument (1st line):
const printMyName = name => {
    console.log(name);
}
printMyName('Max');     // "Max" 

// An alternative regarding the function body, if you're only returning sth:
const multiply = (number) => {
    return number * 2;
}
console.log(multiply(2));       // 4

// Additional shortening possibility, if exactly 1 argument AND only returning sth AND :
const multiply = number => number * 2;  // no () around "number" AND no "return" keyword AND everything on one line
console.log(multiply(2));   // 4