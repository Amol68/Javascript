var no = 123;
var rev = 0;

while(no=!0)
{
    rev=rev*10;
    rev=rev+no%10;
    no=no/10;
}

console.log(rev);