using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BaseClassLibrary
{
    class Car
    {
        private string make;
        private string mode;
        private string color;
        public void drive()
        {
            Console.WriteLine("Driving");
        }
        public void stop()
        {
            Console.WriteLine("Stopping");
        }
    }
}
