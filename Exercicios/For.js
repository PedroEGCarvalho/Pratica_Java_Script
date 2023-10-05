// Loop com let
var funcs=[];
for(let i = 0; i<10; i++)
    {
        console.log(i);
    }

//let declara i apenas dentro do for console.log(i);

for(let i =0; i<=10; i++)
{
    funcs.push(function () {
        console.log(i);
    })
}

funcs[1]();

funcs[4]();