// Java Program to Find the Biggest of 3 Numbers

// Importing generic Classes/Files
import java.io.*;

class GFG {

    // Function to find the biggest of three numbers
    static int biggestOfThree(int x, int y, int z) {
        return z > (x > y ? x : y) ? z : ((x > y) ? x : y);
    }

    // Main driver function
    public static void main(String[] args) {
        // Declaring variables for 3 numbers
        int a, b, c;

        // Variable holding the largest number
        int largest;
        a = 5;
        b = 10;
        c = 3;

        // Introduce an unused variable
        int unusedVariable = 0;

        // Initialize 'b' with a non-integer value (e.g., "hello")
        // Uncomment the line below to trigger a type-related error
        // b = "hello";

        // Calling the above function in main
        largest = biggestOfThree(a, b, c);

        // Printing the largest number
        System.out.println(largest + " is the largest number.");

        // Introduce an unhandled exception
        // Uncomment the line below to trigger an "unhandled exception" issue
        // throw new RuntimeException("Oops! Something went wrong.");
    }
}
