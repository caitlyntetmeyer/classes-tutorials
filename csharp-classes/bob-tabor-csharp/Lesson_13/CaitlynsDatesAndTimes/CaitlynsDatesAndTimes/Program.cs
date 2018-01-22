using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CaitlynsDatesAndTimes
{
    class Program
    {
        static void Main(string[] args)
        {
            //DateTime myValue = DateTime.Now;

            //Console.WriteLine(myValue.ToString()); // 1/22/2018 3:39:27 PM
            //Console.WriteLine(myValue.ToShortDateString()); // 1/22/2018
            //Console.WriteLine(myValue.ToShortTimeString()); // 3:50 PM
            //Console.WriteLine(myValue.ToLongDateString()); // Monday, January 22, 2018
            //Console.WriteLine(myValue.ToLongTimeString()); // 3:52:14 PM

            // Now for some DateTime math!

            // Add 3 days to today's date and print it as a long date string:
            //Console.WriteLine(myValue.AddDays(3).ToLongDateString()); // Thursday, January 25, 2018

            // Add three hours to the present time and print it as a long time string:
            //Console.WriteLine(myValue.AddHours(3).ToLongTimeString()); // 6:58:38 PM

            // To subtract, use a negative number:
            //Console.WriteLine(myValue.AddDays(-3).ToLongDateString()); // Friday, January 19, 2018
            //Console.WriteLine(myValue.AddHours(-3).ToLongTimeString()); // 1:20:30 PM

            // Print part of a date or time:
            //Console.WriteLine(myValue.Month); // 1

            /* Print a specific date:
            DateTime myBirthday = new DateTime(1986, 2, 6);
            Console.WriteLine(myBirthday.ToShortDateString()); // 2/6/1986 
            */

            // Turn a string into a date with .Parse():
            DateTime myBirthday = DateTime.Parse("2/6/1986");

            // How many days have I been alive:
            TimeSpan myAge = DateTime.Now.Subtract(myBirthday);
            Console.WriteLine(myAge.TotalDays); // 11673.6971192722


            Console.ReadLine();
        }
    }
}
