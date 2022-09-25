
 var fact=1 , i;

function calc_fact(n)
{
    for(i=1; i<=n; i++)
    {
        fact= fact*i;
    }

    console.log("Factorial:",fact);
}    


calc_fact(5);