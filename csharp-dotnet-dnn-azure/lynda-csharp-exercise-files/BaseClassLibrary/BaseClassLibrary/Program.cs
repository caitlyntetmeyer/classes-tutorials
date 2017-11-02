using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BaseClassLibrary
{
    class Program
    {
        static void Main(string[] args)
        {
            Car myCar = new Car(); // instantiates object

            myCar.make = "Chevrolet";
            myCar.model = "Camaro";
            myCar.color = "Black";

            myCar.Drive();
            myCar.Stop();
        }
    }
}
