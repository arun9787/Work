function EvenOddSum(arr)
{
    var even = 0;
    var odd = 0;
    for (let i = 0; i <= arr; i++)
    {
     
        if (i % 2 == 0)
            even += i;
        else
            odd += i;
    }
    console.log("Even " + even);
    console.log("Odd " + odd);
}
EvenOddSum(100);
