#include <stdio.h>
#include <math.h>

// Function to convert decimal to binary
// The function is void type so, print the result inside the function

void decimal2Binary(int dec) {
    // array to store binary number
    int binaryNumber[32];

    // Your logic goes here
    // fill out the binaryNumber
    // i to increment the loop and terminate
    int i = 0;
    // We are interested in positive numbers for now
    while (dec > 0) {
        binaryNumber[i] = dec % 2;
        dec /= 2;
        i++;
        // Please add your logic to build the binary array
        
    }

    // Print the binary array.
    printf("Binary: ");
    for (int j = i - 1; j >= 0; j--) {
        printf("%d", binaryNumber[j]);
    }
    printf("\n");
}

// The main function goes here
// The main function calls the decimal2Binary

int main() {
    int decimal = 15;
    
    printf("Decimal: %d equal to ", decimal);
    decimal2Binary(decimal);
    return 0;
}
