#include <stdio.h>
#include <stdlib.h>

int main(int argc, char* argv[])
{
    int fact = 1;
    int result = 1;
    if(argc>1)
    {
       // Please write your code here
       fact = atoi(argv[1]);
       while(fact != 0){
           result *= fact;
           fact--;
       }
       
    }
    
    printf("%d", result);

    return 0;
}
