(* CSC 345-01 Assignment #4
   On my honor, <Your Full Name>, this assignment is my own work.  
   I, <Your Full Name>, will follow the instructor's rules and processes 
   related to academic integrity as directed in the course syllabus.

   *** You are NOT allowed to use OCaml's pattern matching for this assignment. ***

   *** DO NOT CHANGE ANYTHING IN THIS FILE EXCEPT THE PLACEHOLDERS. ***
*) 



(* 1. Write a function averageThree to return the average of three integers. 
      For example, averageThree (-1) 1 2;; returns 0.66666666666666663 *)
let averageThree : int -> int -> int -> float = fun x y z -> (float_of_int(x+y+z) /. 3.0);;



(* 2. Write a function howManyAboveAverage that returns how many of three integer inputs are above its average value.  
      For example, howManyAboveAverage 1 3 3;; returns 2 *)
let howManyAboveAverage : int -> int -> int -> int = fun x y z -> (if x > int_of_float(averageThree x y z) && 
y > int_of_float(averageThree x y z) && z > int_of_float(averageThree x y z) then 3 else if x > 
int_of_float(averageThree x y z) && y > int_of_float(averageThree x y z) || x > int_of_float(averageThree x y z) && 
z > int_of_float(averageThree x y z) || y > int_of_float(averageThree x y z) && z > int_of_float(averageThree x y z) then 2 
else if x > int_of_float(averageThree x y z) || y > int_of_float(averageThree x y z) || z > int_of_float(averageThree x y z) 
then 1 else 0);;



(* 3. Write a function howManyWithinThreshold that returns how many of the first three arguments are within the threshold (the fourth argument) of the average of the first three arguments. 
       For example, howManyWithinThreshold 10 1 2 3.5;; returns 2 *)
let howManyWithinThreshold : int -> int -> int -> float -> int = fun x y z t -> (if float_of_int(x + y + z) < t then 3 else if 
float_of_int(x + y) < t || float_of_int(x + z) < t || float_of_int(y + z) < t then 2 else if float_of_int(x) < t || 
float_of_int(y) < t || float_of_int(z) < t then 1 else 0);;



(* 4. Write a function threeDifferent that returns true if no two of the three arguments are equal, and false otherwise.  
      For example, threeDifferent 1 2 2;; returns false *)	  
let threeDifferent : int -> int -> int -> bool = fun x y z -> (if x = y || x = z || y = z then false else true);;



(* 5. Write a function sum that uses recursion to compute the sum of all numbers from 1 to n, where n is greater than or equal to 1.
      For example, sum 3;; returns 6 *)
let rec sum : int -> int = fun n -> (if n = 0 then 0 else sum(n - 1) + n);;



(* 6. Write a function getBinary that uses recursion to convert an integer n (where n is greater than or equal to 0) to its binary representation.
      For example, getBinary 12;; returns 1100 
                   getBinary 7;;  returns 111
                   getBinary 42;; returns 101010 
      Hint:    if n's binary representation is 10010101011
            (n / 2)'s binary representation is 1001010101
            (N % 2)'s binary representation is           1 *)	  
let rec getBinary : int -> int = fun n -> (if n < 2 then n else int_of_string(string_of_int(getBinary (int_of_float(float_of_int(n) /. 2.0)))
 ^ string_of_int((n mod 2))));;



(* 7. Write a function howManyDigits that uses recursion to count the digits of an integer n (where n is greater than or equal to 1).
      For example, howManyDigits 978;; returns 3 *)
let rec howManyDigits : int -> int = fun n -> (if n < 10 then 1 else howManyDigits (int_of_float(float_of_int(n)/.10.0)) + 1);;



(* 8. Write a function orderTriple that takes a triple, and returns a version in increasing order.
      For example, orderTriple (2, 1, 3);; returns (1, 2, 3) *)
let orderTriple : int * int * int -> int * int * int = fun (x, y, z) -> (if x < y && x < z && y <= z then (x, y, z) 
else if y < x && y < z && x <= z then (y, x, z) else if z < x && z < y && y >= x then (z, x, y) else if 
x < y && x < z && y >= z then (x, z, y) else if y < x && y < z && x >= z then (y, z, x) else if 
z < x && z < y && y <= x then (z, y, x) else (x, y, z));;