/*

Treehouse - C# Basics

https://teamtreehouse.com/library/c-basics/

Files written in C# use the file extension .cs.

Methods can run other methods by calling them.

The first method run in a program is named "Main".

Classes CAN contain multiple methods.

A program CAN contain multiple classes.

If there's only one class in a program, it DOESN'T necessarily have to be named "Program".

---

Preparation and Planning

https://teamtreehouse.com/library/preparation-and-planning

Four P's of Problem Solving:
    1) Prepare - This is where we understand and diagnose the problem.
    2) Plan - This is where we organize everything before acting.
    3) Perform - We simply put the plan into action.
    4) Perfect - This is when we check to see if what we made has solved the problem and consider how to make it better. We can use the Four P's again to make improvements.
 */

class Program
{
    static void Main()
    {
        // Prompt user for minutes exercised
        // Add minutes exercised to running total
        // Display total minutes exercised
        // Repeat until user quits
    }
}

/*
Adding comments in code does not affect the way the code runs.
A console application CAN'T have buttons or images.
Developing software can be thought of as solving a series of problems.

---

Start Coding (Perform)

https://teamtreehouse.com/library/start-coding
*/
class Program
{
    static void Main()
    {
        // Prompt user for minutes exercised
        System.Console.Write("Enter how many minutes you exercised: ");
        // Add minutes exercised to running total
        // Display total minutes exercised
        // Repeat until user quits
    }
}

/* 

C# is a compiled language. 

To run our program in the console: mcs Program.cs

To view that we have two files: ls
    You'll see Program.cs and Program.exe
    Use Mono to run your program on a Mac.

To run the program: mono Program.exe
    You'll see: Enter how many minutes you exercised:

---
Write "Hello" to the console:
*/
System.Console.Write("Hello"); // Hello

/*
Strings represent text in a computer.

A compiler is the program that converts human-readable code into computer-readable code.

Use double quotes to indicate a string in C#.

Statements in C# end with a semicolon.

---

Receiving Input

https://teamtreehouse.com/library/receiving-input-3

Get a response from the user by reading from the console and storing the user's input in a variable.

To compile: mcs Program.cs
To run: mono Program.exe
 */
class Program
{
    static void Main()
    {
        System.Console.Write("Enter how many minutes you exercised: ");
        string entry = System.Console.ReadLine();
    }
}