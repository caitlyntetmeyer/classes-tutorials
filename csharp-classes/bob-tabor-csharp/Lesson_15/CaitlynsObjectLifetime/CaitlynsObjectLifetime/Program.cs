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

            Car.MyMethod();

            /*
            myCar.Make = "Oldsmobile";
            myCar.Model = "Cutlas Supreme";
            myCar.Year = 1986;
            myCar.Color = "Silver";
            

            // Create a new instance of the Car class and initialize the overloaded constructor below:
            Car myThirdCar = new Car("Ford", "Escape", 2005, "white");
    
            
            // Create a handle but fail to attach it to a bucket in our computer's memory:
            Car myOtherCar;
            // Create the second handle and copy the first bucket's address to it:
            myOtherCar = myCar;

            Console.WriteLine("{0} {1} - {2} - {3}", 
                myOtherCar.Make, 
                myOtherCar.Model, 
                myOtherCar.Year, 
                myOtherCar.Color); // Returns "Oldsmobile Cutlas Supreme 1986 Silver" - the same as myCar because of line 24
            
            // Change myOtherCar's Model to be the 98 model (the model, not the year):
            myOtherCar.Model = "98";

            Console.WriteLine("{0} {1} - {2} - {3}",
                myCar.Make,
                myCar.Model,
                myCar.Year,
                myCar.Color); // Returns "Oldsmobile 98 1986 Silver", reflecting the change we made to the Model

            // Remove one handle to the bucket:
            myOtherCar = null;

            /*
            Console.WriteLine("{0} {1} - {2} - {3}",
                myOtherCar.Make,
                myOtherCar.Model,
                myOtherCar.Year,
                myOtherCar.Color); // Returns an unhandled null reference exception because we removed the handle
            
            
            // Have the .NET runtime remove the handle to the bucket (which at some point removes the object from memory):
            myCar = null;
            */

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
        
        /*
        public Car()
        {
            // You could load the value from a configuration file, a database, etc. to get the object into a valid state when it's instantiated:
            Make = "Nissan";
        }

        // Create an overloaded constructor (?):
        public Car(string make, string model, int year, string color)
        {
            Make = make;
            Model = model;
            Year = year;
            Color = color;
        }
        */

        public static void MyMethod()
        {
            Console.WriteLine("Called the static MyMethod");
            Console.WriteLine(Make);
        }

    }
}
