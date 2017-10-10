// Tell .NET and C# compiler that when it encounters classes inside of this program, it should look for them inside of the System namespace:
using System;

public class Program
{
    // Create method "Main()":
    static void Main()
    {
        // "Console" lives in "System"
        // "Console" is a class
        System.Console.WriteLine("Hello World");
    }
}
 