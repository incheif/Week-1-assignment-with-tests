/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/
function wait(n) {
    var prom=new Promise((resolve)=>{
    setTimeout(resolve,n*1000)
    });

    return prom;

}
var n=5
waitpromise=wait(n)
console.log(waitpromise);
waitpromise.then(()=>{
    console.log("Hello after " + n +" seconds")
});