using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace WorkingWithStrings
{
    class Program
    {
        static void Main(string[] args)
        {
            // Use a backslash to escape characters:
            //string myString = "My \"so-called\" life";
            //string myString = "What if I need a\nnew line?";
            //string myString = "Go to your c:\\ drive";

            // You can also use the @ symbol before the opening quotation to indicate that you want the whole thing to be a string:
            //string myString = @"Go to your c:\ drive";

            // Replacement Codes:
            //string myString = String.Format("{0} = {1}", "First", "Second"); // First = Second
            //string myString = String.Format("{1} = {0}", "First", "Second"); // Second = First

            // Currency: Put ":C" immediately after the replacement code:
            //string myString = string.Format("{0:C}", 123.45); // $123.45

            // Alternative suggested by this code editor:
            //string myString = $"{123.45}:C"; // $123.45

            // To add in commas and decimal points, use ":N":
            //string myString = string.Format("{0:N}", 1234567890); // 1,234,567,890.00

            // To show sth as a percentage, use ":P":
            // string myString = string.Format("Percentage: {0:P}", .123); // Percentage: 12.30%

            // To do a phone number, use ":(###) ###-####":
            string myString = string.Format("Phone Number: {0:(###) ###-####}", 1234567890); // Phone Number: (123) 456-7890

            Console.WriteLine(myString);
            Console.ReadLine();
        }
    }
}
