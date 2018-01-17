using System;

namespace BobsBigGiveaway
{
    class MainClass
    {
        public static void Main(string[] args)
        {
            /*
            Console.WriteLine("Bob's Big Giveaway");
            Console.WriteLine("Choose a door: 1, 2 or 3: ");
            string userValue = Console.ReadLine();

            string message = "";

            if (userValue == "1")
                message = "You won a new car!";
            else if (userValue == "2")
                message = "You won a new boat!";
            else if (userValue == "3")
                message = "You won a new cat!";
            else
            {
                message = "Please enter 1, 2 or 3. ";
                message += "You lose.";
            }

            Console.WriteLine(message);

            Console.ReadLine();
            */

            Console.WriteLine("Bob's Big Giveaway");
            Console.WriteLine("Choose a door: 1, 2 or 3: ");
            string userValue = Console.ReadLine();

            string message = (userValue == "1") ? "boat" : "piece of lint";

            //Console.Write("You won a " + message + ".");

            //Console.WriteLine("You won a {0}.", message);
            Console.WriteLine("You entered: {0}; therefore, you won a {1}.", userValue, message);
            Console.ReadLine();

        }
    }
}
