using System;

namespace Decisions
{
    class MainClass
    {
        public static void Main(string[] args)
        {
            /*
            Console.WriteLine("Bob's Big Giveaway");
            Console.Write("Choose a door: 1, 2 or 3: ");
            string userValue = Console.ReadLine();

            string message = "";

            // the if statement is a _decision statement_ with a _conditional operator_:
            if (userValue == "1")
                message = "You won a new car!";
            else if (userValue == "2")
                message = "You won a new boat!";
            else if (userValue == "3")
                message = "You won a new cat!";
            // catch-all:
            else
            {
                message = "Sorry, we didn't understand. ";
                message += "You Lose.";
            }
                
            Console.WriteLine(message);
            Console.ReadLine();
            */

            Console.WriteLine("Bob's Big Giveaway");
            Console.Write("Choose a door: 1, 2 or 3: ");
            string userValue = Console.ReadLine();

            //If user enters 1, they win a "boat" (after the "?"). Otherwise (after the ":"), they win a "strand of lint":
            string message = (userValue == "1") ? "boat" : "strand of lint";

            //Console.Write("You won a ");
            //Console.Write(message);
            //Console.Write(".");

            //The "{0}" will be replaced with the message:
            //Console.WriteLine("You won a {0}.", message);

            //The "{0}" will be replaced w/the user value. The "{1}" will be replaced w/the msg:
            Console.WriteLine("You entered: {0}; therefore, you won a {1}.", userValue, message);

            Console.ReadLine();

        }
    }
}
