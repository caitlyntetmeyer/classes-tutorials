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
            //string myString = string.Format("Phone Number: {0:(###) ###-####}", 1234567890); // Phone Number: (123) 456-7890

            // ---

            //string myString = " That summer we took threes across the board  ";

            //myString = myString.Substring(6); // summer we took threes across the board
            //myString = myString.Substring(6, 14); // summer we took

            //myString = myString.ToUpper(); // THAT SUMMER WE TOOK THREES ACROSS THE BOARD

            // Replace every space with two dashes:
            //myString = myString.Replace(" ", "--"); //--That--summer--we--took--threes--across--the--board----

            // Remove between character 6 and character 14:
            //myString = myString.Remove(6, 14); // That  threes across the board

            // Show the length of the string before and after trimming off the spaces at the beginning and end:
            //myString = String.Format("Length before: {0} -- Length after: {1}",
            //myString.Length, myString.Trim().Length); //Length before: 46 -- Length after: 43

            // ---

            /*
            string myString = "";

            for (int i = 0; i < 100; i++)
            {
                myString += "--" + i.ToString();
            }
            */
            //--0--1--2--3--4--5--6--7--8--9--10--11--12--13--14--15--16--17--18--19--20--21--22--23--24--25--26--27--28--29--30--31--32--33--34--35--36--37--38--39--40--41--42--43--44--45--46--47--48--49--50--51--52--53--54--55--56--57--58--59--60--61--62--63--64--65--66--67--68--69--70--71--72--73--74--75--76--77--78--79--80--81--82--83--84--85--86--87--88--89--90--91--92--93--94--95--96--97--98--99

            // ---

            // String Builder:


            Console.WriteLine(myString);
            Console.ReadLine();
        }
    }
}
