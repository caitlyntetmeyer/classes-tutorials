using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ExceptionHandling_CS
{
    class Program
    {
        static void Main(string[] args)
        {
            string errorMessage;
            int numerator;
            int denominator;
            int result;

            Console.WriteLine("Enter the numerator");
            numerator = Int32.Parse(Console.ReadLine());

            Console.WriteLine();
            Console.WriteLine("Enter the denominator");
            denominator = Int32.Parse(Console.ReadLine());

            try   //protected block of code - anything that executes in this block will be monitored by the .NET framework:
            {
                result = numerator / denominator;

                Console.WriteLine();
                Console.WriteLine("The result is: " + result);
            }

            catch (OverflowException ofEx)    //catching specific info around the errors that are generated:
            {
                errorMessage = ofEx.Message;
                Console.WriteLine(errorMessage);
            }
            catch (DivideByZeroException dEx)
            {
                errorMessage = dEx.Message;
                Console.WriteLine(errorMessage);
            }
            catch (Exception e)
            {
                errorMessage = e.Message;
                Console.WriteLine(errorMessage);
            }
            finally
            {
                //clean-up code goes here
            }
        }
    }
}
