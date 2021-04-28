/**
 * ---------------------------------------------------------------------------------------------------------------------------
 * ---------------------------------------------------------------------------------------------------------------------------
 * 													CLASE: index
 * ---------------------------------------------------------------------------------------------------------------------------
 * Fibonacci App
 * ---------------------------------------------------------------------------------------------------------------------------
 * @author Santiago Buitrago
 * @version 1.0
 * ---------------------------------------------------------------------------------------------------------------------------
 */
var bigInt = require("big-integer");
var memorizacion = {};
module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');
	
	memorizacion[0] = bigInt.zero;
    memorizacion[1] = bigInt.one;
    let nth = req.body.nth
    let nth_1 = bigInt.one;
    let nth_2 = bigInt.zero;
    let answer = bigInt.zero;
	
	function fibonacci(n) {
		var a = bigInt.zero
        var b = bigInt.zero
        n = Math.abs(n);
		if(memorizacion[n] !== undefined)
			return memorizacion[n];
		else{
           a=fibonacci(n-1)
           b =fibonacci(n-2)
           memorizacion[n] = a.add(b)
           return memorizacion[n];
        }
	}
	
    answer = fibonacci(nth);

    context.res = {
        body: answer.toString()
    };
}