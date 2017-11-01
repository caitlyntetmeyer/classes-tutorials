using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Encapsulation
{
    class Program
    {
        static void Main(string[] args)
        {
            Animal Dog = new Animal();
            Dog.Age = 2;
            Console.WriteLine(Dog.Age);

        }
    }
}
