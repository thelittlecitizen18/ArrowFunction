var fibonacci_series = function (n) 
{
    if(n == undefined){
        n=10;
    }
  if (n===1) 
  {
    return [0, 1];
  } 
  else 
  {
    var s = fibonacci_series(n - 1);
    s.push(s[s.length - 1] + s[s.length - 2]);
    return s;
  }

};
function print(){
    console.log(fibonacci_series())
}

function myFunction(){
    setInterval(print, 100);
}
 //myFunction()







