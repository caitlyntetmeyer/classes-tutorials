using System;

namespace Destructors
{
    public static void Main(string[] args)
    {
        class Dog
    {
        public Dog()    // constructor
        {
            // initialization statements here
        }

        ~Dog()      // destructor
        {
            // cleanup statements here
        }
    }
}
}
