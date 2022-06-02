/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/* 
 * File:   main.c
 * Author: mamiruzz
 *
 * Created on February 13, 2022, 8:36 PM
 */

#include <stdio.h>
#include <stdlib.h>

/*
 * 
 */
unsigned char and_operation(unsigned char val1, unsigned char val2) {
    // Please write your code for the return
    return (val1 & val2);
}

unsigned char or_operation(unsigned char val1, unsigned char val2) {
    // Please write your code for the return
    return (val1 | val2);
}

unsigned char not_operation(unsigned char val) {
    // Please write your code for the return
    return ~val;
}

int main(int argc, char** argv) {
    // Please do not change anything in the main function
    // a = 5(00000101), b = 9(00001001)
    unsigned char a = 5, b = 9;
    printf("Binary of 5: 0000 0101\n");
    printf("Binary of 9: 0000 1001\n");

    // The result is 00000001
    printf("a = %d, b = %d\n", a, b);
    printf("a&b = %d\n", and_operation(a, b));
    printf("Binary: 0000 0001\n");

    // The result is 00001101
    printf("a|b = %d\n", or_operation(a , b));
    printf("Binary: 0000 1101\n");


    // The result is 11111010
    printf("~a = %d\n", not_operation(a));
    printf("Binary: 1111 1010\n");

    return (EXIT_SUCCESS);
}
