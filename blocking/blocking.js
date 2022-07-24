const app = require ("express")();

//checking if number is prime
app.get("/isprime", (req, res) => {
    res.setHeader("Access-Control-Allow-Origin","*")
    const jsonResponse = isPrime(parseInt(req.query.number))
    res.send(jsonResponse)
} )

//listening port numer
app.listen(8081, ()=>console.log("Listening on 8081") )

function isPrime(number) {
    let startTime = new Date();
    let endTime = new Date();
    let isPrime = true;
    for (let i = 3; i < number; i ++)
    {   
        //it is not a prime break the loop,
        // see how long it took
        if (number % i === 0) 
        {
            endTime = new Date();
            isPrime = false;
            break;
        }
    }

    if (isPrime) endTime = new Date();

    return {
        "number" : number,
        "isPrime": isPrime,
        "time": endTime.getTime() - startTime.getTime()
        }

}