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

            string message = (userValue == "1") ? "boat" : "strand of lint";
            Console.Write("You won a " + message + ".");
            Console.ReadLine();

        }
    }
}
