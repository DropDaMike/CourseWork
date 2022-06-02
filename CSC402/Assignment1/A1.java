/**
 * CSC 402-01 Assignment #1
 *
 * On my honor, Michael Edwin Leach, this assignment is my own work.
 * I, Michael Edwin Leach, will follow the instructor's rules and processes
 * related to academic integrity as directed in the course syllabus.
 *
 */

public class A1 {

    // DO NOT ALTER THE FOLLOWING LINE except for the value of the literal int.
    // You may change the literal int assigned to SIZE to any value from 2 to 100.
    // In the final version of the program you submit set the SIZE to 3.
    public static final int SIZE = 3;

    public static void main(String[] args) {
        //---------------------------------------------------------------------
        // Fill in your code here
        //lets start with printing the top lines
        drawHeadLines(SIZE);
        drawBodyLines(SIZE);
        //
        //---------------------------------------------------------------------
    }

    //---------------------------------------------------------------------
    // Fill in your code here
    private static void drawHeadLines(int s){
        for(int line = 1; line <= s; line++){//counts the lines depending on SIZE
            System.out.print("/");
            for(int quote = 1; quote <= ((s*5) + 1); quote++){
                System.out.print("\"");
                for(int os = quote; os <= quote && os != (s*5) + 1; os++){
                    System.out.print("O");
                }
            }
            System.out.println("\\");
        }
    }

    private static void drawBodyLines(int s){
        for(int line = 1; line < (s * (s + s) + 2) - 2; line++){
            for(int spaces = 1; spaces <= s*4; spaces++){
                System.out.print(" ");
            }
            for(int squiggles = 1; squiggles <= s + (s + 3); squiggles++){
                System.out.print("~");
            }
            line++;//moves to next line
            System.out.println("");
            for(int spaces = 1; spaces <= s*4; spaces++){
                System.out.print(" ");
            }
            for(int morse = line; morse <= line && morse != (s * (s + s) + 2); morse++){
                System.out.print("|");
                for(int dash = 1; dash <= s + 1; dash++){
                    System.out.print("-");
                    for(int os = dash; os <= dash && os != s + 1; os++){
                        System.out.print("O");
                    }
                }
                System.out.println("|");
            }
        }
        //print out the last line of squiggles
        for(int spaces = 1; spaces <= s*4; spaces++){
            System.out.print(" ");
        }
        for(int squiggles = 1; squiggles <= s + (s + 3); squiggles++){
            System.out.print("~");
        }
    }

    // You will need to create (nested) for-loops with print and println statements
    // that use the class constant and local variables.

    // You are not allowed to use anything besides println/print statements,
    // static methods, method calls, loops, nested loops, and class constants.

    // You are ***NOT*** allowed to use method parameters, methods that return values, or
    // conditional statements (i.e., if, if/else statements).





    //
    //---------------------------------------------------------------------
}
