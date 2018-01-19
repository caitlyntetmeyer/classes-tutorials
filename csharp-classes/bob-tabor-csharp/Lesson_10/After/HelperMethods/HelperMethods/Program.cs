using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HelperMethods
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("The Name Game");
            
            Console.Write("What's your first name? ");
            string firstName = Console.ReadLine();

            Console.Write("What's your last name? ");
            string lastName = Console.ReadLine();

            Console.Write("In what city were you born? ");
            string city = Console.ReadLine();

            Console.Write("Results: ");

            DisplayResult(ReverseString(firstName),
                ReverseString(lastName),
                ReverseString(city));
            
            Console.ReadLine();
        }

        private static void DisplayResult(string v)
        {
            throw new NotImplementedException();
        }

        private static string ReverseString(string message)
        { 
            char[] messageArray = message.ToCharArray();
            Array.Reverse(messageArray);
            return String.Concat(messageArray);
        }
        
        private static void DisplayResult(message)
        {
            
            Console.Write(message);

        }
    }
}
