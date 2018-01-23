using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SimpleClasses
{
    class Program
    {
        static void Main(string[] args)
        {
            Car myCar = new Car(); // creates a new class (which is like a pattern / cookie cutter / recipe)
            myCar.Make = "Oldsmobile";
            myCar.Model = "Cutlas Supreme";
            myCar.Year = 1986;
            myCar.Color = "Silver";

            Console.WriteLine("{0} - {1} - {2} - {3}", 
                myCar.Make, 
                myCar.Model, 
                myCar.Year, 
                myCar.Color); // Oldsmobile - Cutlas Supreme - 1986 - Silver
            // We used myCar instead of Car because Car is just the blueprint. We want myCar, the variable name.

            //decimal value = DetermineMarketValue(myCar);
            //Console.WriteLine("{0:C}", value); // $100.00

            Console.WriteLine("{0:C}", myCar.DetermineMarketValue());

            Console.ReadLine(); 
        }

        private static decimal DetermineMarketValue(Car car)
        {
            decimal carValue = 100.0M;

            // Someday, I might look up the car online using a web service to get a more accurate value.
            return carValue;
        }
    }

    // Create a new data type Car:
    class Car
    {
        public string Make { get; set; }
        public string Model { get; set; }
        public int Year { get; set; }
        public string Color { get; set; }

        // Longer version: prop public int MyProperty { get; set; }

        public decimal DetermineMarketValue()
        {
            decimal carValue;

            if (Year > 1990)
                carValue = 10000;
            else
                carValue = 2000;

            return carValue;
            /*
             * Oldsmobile - Cutlas Supreme - 1986 - Silver
             * $2,000.00
            */
        }


    }



}
