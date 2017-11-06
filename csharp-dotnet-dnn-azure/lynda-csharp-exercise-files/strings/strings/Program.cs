using System;

namespace strings
{
    class MainClass
    {
        public static void Main(string[] args)
        {
            /* Escape sequences:
            \'      // single quote
            \"      // double quote
            \b      // backspace
            \n      // new line
            \t      // tab
            */
            string sampString = "A bunch of random words";

            Console.WriteLine("Is empty: " + String.IsNullOrEmpty(sampString));

            Console.WriteLine("Is empty: " + String.IsNullOrWhiteSpace(sampString));

            Console.WriteLine("String Length: " + sampString.Length);
            /*
            Is empty: False
            Is empty: False
            String Length: 23
            */
        }
    }
}
