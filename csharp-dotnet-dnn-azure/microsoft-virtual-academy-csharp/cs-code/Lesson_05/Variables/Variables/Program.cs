using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Variables
{
    class Program
    {
        static void Main(string[] args)
        {
            /*
            int x;
            int y;

            x = 7;
            y = x + 3;

            Console.WriteLine(y);
            Console.ReadLine();
            */

            Console.WriteLine("What is your name?");
            Console.Write("Type your first name: ");
            string myFirstName;
            myFirstName = Console.ReadLine();

            //string myLastName;
            //Console.Write("Type your last name: ");
            //myLastName = Console.ReadLine();

            Console.WriteLine("Type your last name: ");
            string myLastName = Console.ReadLine(); 

            Console.WriteLine("Hello, " + myFirstName + " " + myLastName);
            Console.ReadLine();
        }
    }
}

/* Q: Which line of code will allow you to retrieve an entry from a user into a variable called "userValue"?
 * A: string userValue = Console.ReadLine();
 * 
 * Q: In the following code, why will this NOT work?
 * int x = 44;
 * string y = "Bob";
 * int z = x + y;
 * Console.WriteLine(z);
 * A: You can't set an integer variable to the result of a concatenation/addition of a string and an integer
 * 
 * You CAN store whole numbers in a variable of type "int."
 * You CAN'T store values greater than 3 billion (for example), decimal values, or alpha characters.
 */