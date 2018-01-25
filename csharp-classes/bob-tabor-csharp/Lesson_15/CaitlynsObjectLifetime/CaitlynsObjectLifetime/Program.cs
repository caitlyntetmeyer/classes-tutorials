using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CaitlynsObjectLifetime
{
    class Program
    {
        static void Main(string[] args)
        {
            // Create new instance myCar of the class Car:
            Car myCar = new Car();

            myCar.Make = "Oldsmobile";
            myCar.Model = "Cutlas Supreme";
            myCar.Year = 1986;
            myCar.Color = "Silver";

            // Create a handle but fail to attach it to a bucket in our computer's memory:
            Car myOtherCar;
            // Create the second handle and copy the first handle's address to it:
            myOtherCar = myCar;

            Console.WriteLine("{0} {1} {2} {3}", 
                myOtherCar.Make, 
                myOtherCar.Model, 
                myOtherCar.Year, 
                myOtherCar.Color); // Returns "Oldsmobile Cutlas Supreme 1986 Silver" - the same as myCar because of line 24

            // Change myOtherCar's Model to be the 98 model (the model, not the year):
            myOtherCar.Model = "98";

            Console.WriteLine("{0} {1} {2} {3}",
                myOtherCar.Make,
                myOtherCar.Model,
                myOtherCar.Year,
                myOtherCar.Color); // Returns "Oldsmobile 98 1986 Silver", reflecting the change we made to the Model





            Console.ReadLine();

        }
    }

    // Define the class Car:
    class Car
    {
        public string Make { get; set; }
        public string Model { get; set; }
        public int Year { get; set; }
        public string Color { get; set; }
    }
}
