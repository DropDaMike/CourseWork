/**
 * CSC 345 Assignment #2
 *
 * On my honor, Michael E. Leach, this assignment is my own work.
 * I, Michael E. Leach, will follow the instructor's rules and processes
 * related to academic integrity as directed in the course syllabus.
 *
 */

import java.io.*;

// Students -- Add your import declarations here
import java.util.Scanner;
import java.lang.*;

public class A2 {

    // Students -- Add your constants here
    public static int charClass;
    public static char[] lexeme = new char[100];
    public static char curChar;
    public static char nextChar;
    public static int charLen;
    public static int digLen;
    public static int token;
    public static int nextToken;
    public static StringBuilder sb1 = new StringBuilder();
    public static String scanReader;

    public static void main(String[] args) {
        try {
            // do not make any changes to the following TWO lines
            File file = new File(args[0]);
            Scanner sc = new Scanner(file);		// do not make any other Scanners

            // Students -- your code and methods calls go here
            while(sc.hasNextLine()){//append each line of the txt file to the string builder
                sb1.append(sc.nextLine());
            }
            //use string scanReader to convert sb1 to a String
            scanReader = sb1.toString().replaceAll("\\s", "");//gets rid of whitespaces
            sb1.setLength(0); //clear string builder

            char[] lexemeArr = new char[scanReader.length()];
            for(int i = 0; i < scanReader.length(); i++){//turns test into a char array of each value
                lexemeArr[i] = scanReader.charAt(i);
            }
            //This is where we go through each value of the char array and assign token values
            for(int i = 1; i < lexemeArr.length; i++){
                curChar = lexemeArr[i - 1];
                nextChar = lexemeArr[i];

                if(!Character.isLetterOrDigit(curChar) && lookup(curChar) == -1){//invalid lexeme found
                    System.out.print("ERROR!!! The lexeme " + curChar + " is not allowed in this language!");
                    System.exit(0);
                }

                if(charLen >= 97 || digLen >= 97){//Too large of a char or digit lexeme
                    System.out.print("ERROR!!!! Lexeme is too large!");
                    System.exit(1);
                }

                if(!Character.isLetterOrDigit(curChar)){//curChar is not digit or character
                    token = lookup(curChar);//lookup returns the token value of curChar
                    System.out.println("Next token is: " + token + ", Next lexeme is " + curChar);
                }

                else if(Character.isLetter(curChar) || charLen != 0){//curChar is a letter
                    getChar(curChar, nextChar);//getChar returns output of curChar

                }else if(Character.isDigit(curChar) && charLen == 0 || digLen != 0){//curChar is a digit
                    getDigit(curChar, nextChar);//getDigit returns output of curChar

                }
            }
            //we need to get the final value of the char array still
            if(lookup(lexemeArr[lexemeArr.length - 1]) != -1){//Last value is not a character or digit
                System.out.println("Next token is: " + lookup(lexemeArr[lexemeArr.length - 1]) + ", Next lexeme is " + lexemeArr[lexemeArr.length - 1]);
            }else if(lookup(lexemeArr[lexemeArr.length - 1]) == -1){//last value is a number or digit
                findLastDigitOrChar(lexemeArr[lexemeArr.length - 1]);
            }
            System.out.print("Next token is: -1, Next lexeme is EOF");

            sc.close();
        } catch (Exception e) {
            System.out.println("ERROR - cannot open front.in \n");
        }
    }

    // Students -- add your method declarations here
    private static int lookup(char c){//assigns a token value depending on character
        switch(c){
            case '(':
                charClass = 25;
                return charClass;
            case ')':
                charClass = 26;
                return charClass;
            case '+':
                charClass = 21;
                return charClass;
            case '-':
                charClass = 22;
                return charClass;
            case '*':
                charClass = 23;
                return charClass;
            case '/':
                charClass = 24;
                return charClass;
            default:
                return -1;
        }
    }

    private static void getChar(char c, char n){//prints a line with char token value and char
        nextToken = lookup(n);
        token = 11;
        if(nextToken != -1){//next char is not a letter or digit
            if(lexeme.length == 0){//nothing is in the lexeme array
                System.out.println("Next token is " + token + ", Next lexeme is " + c);
            }else{//characters are in lexeme array
                for(int i = 0; i < charLen; i++){
                    sb1.append(lexeme[i]);
                }
                sb1.append(c);
                System.out.println("Next token is: " + token + ", Next lexeme is " + sb1);
                sb1.setLength(0);//clear sb1
                charLen = 0;//reset charLen for future strings
            }
        }else{//next char is letter or digit
            lexeme[charLen] = c;
            charLen++;
        }
    }

    private static void getDigit(char c, char n){//prints a line with digit token value and digit
        nextToken = lookup(n);
        token = 10;
        if(Character.isDigit(n)){//if next char is digit then add current digit to lexeme array
            lexeme[digLen] = c;
            digLen++;
        }else{//next char is not digit and we need to display the token value and digit string
            for(int i = 0; i < digLen; i++){
                sb1.append(lexeme[i]);
            }
            sb1.append(c);
            System.out.println("Next token is: " + token + ", Next lexeme is " + sb1);
            sb1.setLength(0);//clear sb1
            digLen = 0;//reset charLen for future strings
        }
    }

    private static void findLastDigitOrChar(char c){//this method checks and prints out last value of lexemeArr
        if(Character.isDigit(c)){//last value is digit
            token = 10;
            if(digLen == 0){//no digits in lexeme array
                System.out.println("Next token is: " + token + ", Next lexeme is " + c);
            }else{//one or more digits in lexeme array
                for(int i = 0; i < digLen; i++){
                    sb1.append(lexeme[i]);
                }
                sb1.append(c);
                System.out.println("Next token is: " + token + ", Next lexeme is " + sb1);
                sb1.setLength(0);
                digLen = 0;
            }
        }else{//there may be multiple char value that needs to be printed out in the lexeme arr
            token = 11;
            if(charLen == 0){//no values in lexeme array that need to be added
                System.out.println("Next token is: " + token + ", Next lexeme is " + c);
            }else{//there are at least one values that need to be appended
                for(int i = 0; i < charLen; i++){
                    sb1.append(lexeme[i]);
                }
                sb1.append(c);
                System.out.println("Next token is: " + token + ", Next lexeme is " + sb1);
                sb1.setLength(0);
                charLen = 0;
            }
        }

    }
}
