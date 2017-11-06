using System;

namespace youtubecsharptutorial
{
    class MainClass
    {
        public static void Main(string[] args)
        {
            string guess;
            // Have the user guess a number until they guess the number 15:
            do
            {
                Console.WriteLine("Guess a number.");
                guess = Console.ReadLine();

            } while (!guess.Equals("15"));  // Keep asking the user to guess until they guess 15.
        }
    }
}
