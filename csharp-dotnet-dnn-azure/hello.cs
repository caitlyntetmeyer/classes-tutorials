/*
Mono Basics
 Edit page on GitHub
After you get Mono installed, it’s probably a good idea to run a quick Hello World program to make sure everything is set up properly. That way you’ll know that your Mono is working before you try writing or running a more complex application.

Console Hello World
To test the most basic functionality available, copy the following code into a file called hello.cs. 
*/
using System;
 
public class HelloWorld
{
    static public void Main ()
    {
        Console.WriteLine ("Hello Mono World");
    }
}
/*
To compile, use mcs:
mcs hello.cs

The compiler will create “hello.exe”, which you can run using:
mono hello.exe

The program should run and output:
Hello Mono World 
*/