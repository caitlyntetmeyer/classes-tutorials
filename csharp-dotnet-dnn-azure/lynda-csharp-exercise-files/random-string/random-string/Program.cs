using System;

namespace randomstring
{
    class MainClass
    {
        public static void Main(string[] args)
        {
            string randStr = "Here are some random characters.";
            // Separately print out each character from the above string.
            foreach (char c in randStr)
            {
                Console.WriteLine(c);
            }
            /*
                H
                e
                r
                e
                 
                a
                r
                e
                 
                s
                o
                m
                e
                 
                r
                a
                n
                d
                o
                m
                 
                c
                h
                a
                r
                a
                c
                t
                e
                r
                s
                .
                */
        }
    }
}
