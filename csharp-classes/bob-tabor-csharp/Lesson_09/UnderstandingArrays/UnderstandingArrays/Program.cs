using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace UnderstandingArrays
{
    class Program
    {
        static void Main(string[] args)
        {
            /*
            int number1 = 4;
            int number2 = 8;
            int number3 = 15;
            int number4 = 16;
            int number5 = 23;

            if (number1 == 16)
            {
            }
            else if (number2 == 16)
            {
            }
            else if (number3 == 16)
            {
            }
            */
            /*
            int[] numbers = new int[5]; // "I'm gonna add 5 items to an array."

            numbers[0] = 4;
            numbers[1] = 8;
            numbers[2] = 15;
            numbers[3] = 16;
            numbers[4] = 23;

            //Console.WriteLine(numbers[1]); // 8
            Console.WriteLine(numbers.Length); // 5
            Console.ReadLine();
            */

            // If you don't want to say how many items in the array:
            // int[] numbers = new int[] { 4, 8, 15, 16, 23, 42 };

            /*
            string[] names = new string[] { "Eddie", "Alex", "Michael", "David Lee" };

            foreach (string name in names)
            {
                Console.WriteLine(name);

            }
            Console.ReadLine(); 
            /* Eddie 
            Alex 
            Michael 
            David Lee 
            */

            string zig = "You can get what you want out of life " +
                "if you help enough other people get what they want.";

            // Helper method .ToCharArray breaks a string into individual chars and put them in an array:
            char[] charArray = zig.ToCharArray();

            // Reverse the array of characters:
            Array.Reverse(charArray);

            // Print the reversed array of characters:
            foreach (char zigChar in charArray)
            {
                Console.Write(zigChar);
            }
            Console.ReadLine();
        }
    }
}
